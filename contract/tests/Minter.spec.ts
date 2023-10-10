import { Blockchain, SandboxContract, TreasuryContract } from '@ton-community/sandbox';
import { toNano } from 'ton-core';
import { Minter } from '../wrappers/Minter';
import '@ton-community/test-utils';
import { Safe } from '../wrappers/Safe';

describe('Minter', () => {
    let blockchain: Blockchain;
    let minter: SandboxContract<Minter>;

    let deployer: SandboxContract<TreasuryContract>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        minter = blockchain.openContract(await Minter.fromInit(777n));

        deployer = await blockchain.treasury('deployer');

        const deployResult = await minter.send(
            deployer.getSender(),
            {
                value: toNano('0.05'),
            },
            {
                $$type: 'Deploy',
                queryId: 0n,
            }
        );

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: minter.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and minter are ready to use
    });

    it('should mint', async () => {
    
        const seqnoBefore = await minter.getGetSeqno();

        await minter.send(deployer.getSender(), {
            value: toNano("0.08")
        }, {
            $$type: 'MintTarget',
            query_id: 0n,
            name: "Test goal",
            amount: 1000000000n,
            deadline: BigInt((Math.round(Date.now() / 1000) + 4)),
            image: "empty"
        });

        const seqnoAfter = await minter.getGetSeqno();

        // Seqno increased
        expect(seqnoBefore).toBeLessThan(seqnoAfter);

        const safeAddress = await minter.getGetAddressContract(deployer.address, 0n);

        const safeContract = blockchain.openContract(Safe.fromAddress(safeAddress));

        const goalOwner = await safeContract.getGetOwner();

        // The contract owner's address matches the sender's address
        expect(deployer.address).toEqualAddress(goalOwner);

        const detail = await safeContract.getGetGoalDetail();

        await safeContract.send(deployer.getSender(), {
            value: toNano("0.05")
        }, {
            $$type: 'MintTarget',
            query_id: 0n,
            name: "New name",
            amount: 100n,
            deadline: BigInt((Math.round(Date.now() / 1000) + 10)),
            image: "new_src"
        });

        const detail2 = await safeContract.getGetGoalDetail();

        // The data has not changed because this is only possible when the contract is first parent minted
        expect(detail).toEqual(detail2);

        const res3 = await safeContract.send(deployer.getSender(), {
            value: toNano("0.05")
        }, {
            $$type: 'ChangeImage',
            query_id: 0n,
            image_source: "new_src"
        });

        const detail3 = await safeContract.getGetGoalDetail();

        // The image has been updated
        expect(detail.image).not.toEqual(detail3.image);

        await safeContract.send(deployer.getSender(), {
            value: toNano("0.05")
        }, {
            $$type: 'ChangeName',
            query_id: 0n,
            name: "new_name"
        });

        const detail4 = await safeContract.getGetGoalDetail();

        // The name has been updated
        expect(detail.name).not.toEqual(detail4.name);

        const contractBalanceInit = await safeContract.getGetContractBalance();

        await safeContract.send(
            deployer.getSender(),
            {
                value: toNano("0.05")
            },
            'withdrawal'
        );

        const contractBalanceBefore = await safeContract.getGetContractBalance();

        // The balance does not change if the withdrawal request is sent before the deadline
        expect(contractBalanceInit).toEqual(contractBalanceBefore);

        // We are waiting for deadline to be completed
        await sleep(5000);

        const beforeDeployerBalance = await deployer.getBalance();

        await safeContract.send(
            deployer.getSender(),
            {
                value: toNano("0.05")
            },
            'withdrawal'
        );

        const contractBalance = await safeContract.getGetContractBalance();
        
        // All TONs withdrawn from contract
        expect(contractBalance).toEqual(0n);

        const afterDeployerBalance = await deployer.getBalance();

        // The owner received TONs
        expect(beforeDeployerBalance).toBeLessThan(afterDeployerBalance);
    });
});

const sleep = (ms: number)=> new Promise(resolve => setTimeout(resolve, ms));