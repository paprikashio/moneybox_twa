import "@stdlib/deploy";
import "./messages.tact";

contract Safe with Deployable {

    id: Int as uint64;
    owner: Address;
    parent: Address;
    goal: Goal;

    init(owner: Address, parent: Address, id: Int) {
        self.owner = owner;
        self.parent = parent;
        self.id = id;
        self.goal = Goal {
            is_init: false,
            name: "",
            amount: 0,
            deadline: now(),
            image: ""
        };
    }

    receive() {
        // accept incoming TON
    }

    // Set goal detail
    receive(msg: MintTarget) {
        require(self.goal.is_init == false, "This goal has already been created");
        require(self.parent == sender(), "Access denied");
        self.goal = Goal {
            is_init: true,
            name: msg.name,
            amount: msg.amount,
            deadline: msg.deadline,
            image: msg.image
        };
    }

    // Change image
    receive(msg: ChangeImage) {
        require(self.owner == sender(), "Access denied");
        self.goal.image = msg.image_source;
    }

    // Change name
    receive(msg: ChangeName) {
        require(self.owner == sender(), "Access denied");
        self.goal.name = msg.name;
    }

    // Withdrawal
    receive("withdrawal") {
        require(self.owner == sender(), "Access denied");
        require(now() >= self.goal.deadline, "Request earlier than scheduled date");
        require(myBalance() > 0, "Insufficient funds");
        let comment: StringBuilder = beginString();
        comment.append("Withdrawal from goal: ");
        comment.append(self.goal.name);
        send(SendParameters{
            to: self.owner,
            bounce: true,
            value: 0,
            mode: SendRemainingBalance + SendIgnoreErrors,
            body: comment.toString().asComment()
        });
        self.id = 100;
    }

    // Get curren contract balance
    get fun get_contract_balance(): Int {
        return myBalance();
    }

    // Get goal detail
    get fun get_goal_detail(): Goal {
        return self.goal;
    }

    // Get owner
    get fun get_owner(): Address {
        return self.owner;
    }

    // Get parent
    get fun get_parent(): Address {
        return self.parent;
    }

    // Get contract id
    get fun get_id(): Int {
        return self.id;
    }
}
