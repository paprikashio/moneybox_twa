import { toNano } from 'ton-core';
import { Minter } from '../wrappers/Minter';
import { NetworkProvider } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider) {
    const minter = provider.open(await Minter.fromInit(777n));

    await minter.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(minter.address);

    // run methods on `minter`
}