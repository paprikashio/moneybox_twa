import "@stdlib/deploy";
import "./messages.tact";
import "./safe.tact";

contract Minter with Deployable {

    seqno: Int as uint64;
    id: Int as uint32;

    init(id: Int) {
        self.seqno = 0;
        self.id = id;
    }

    receive() {
        // accept incoming TON
    }

    // Create new targets collection contract
    receive(msg: MintTarget) {
        let owner: Address = sender();
        // Get new contract address
        let contractInit: StateInit = self.get_contract_state_init(owner, self.seqno);
        let contractAddress: Address = contractAddress(contractInit);
        // Mint collection
        send(SendParameters{
            to: contractAddress,
            value: 0,
            mode: SendRemainingValue + SendIgnoreErrors,
            bounce: true,
            body: MintTarget{
                query_id: msg.query_id,
                name: msg.name,
                amount: msg.amount,
                deadline: msg.deadline,
                image: msg.image
            }.toCell(),
            code: contractInit.code,
            data: contractInit.data
        });
        // Add seqno
        self.seqno = self.seqno + 1;
    }

    // Get address contract by wallet owner address
    get fun get_address_contract(owner: Address, seqno: Int): Address {
        let contractInit: StateInit = self.get_contract_state_init(owner, seqno);
        return contractAddress(contractInit);
    }

    // Get contract state init
    get fun get_contract_state_init(owner: Address, seqno: Int): StateInit {
        return initOf Safe(owner, myAddress(), seqno);
    }

    // Get seqno
    get fun get_seqno(): Int {
        return self.seqno;
    }

    // Get id
    get fun get_id(): Int {
        return self.id;
    }
}
