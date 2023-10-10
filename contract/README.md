## About contracts

This smart contract allows users to hold TON for a certain period of time. The user can make deposits to their moneybox at any time, but they can withdraw money only after the deadline date.
The administrator cannot influence the user's storage contract.
A new smart contract is created for each new storage.

## Minter getters


### get_address_contract(owner, seqno)

The method gets the address of the user's storage contract.

|Argument  | Type |  Description |
|--  |--| -- |
| owner | `Address` | Address owner wallet |
| seqno | `int` | Seqno |

### get_seqno()

Return next seqno for contarct user deply.

### get_id()

Return minter contract ID.

## Minter setters

### MintTarget message

Deploys a new moneybox contract to network

|Prop  | Type |  Description |
|--  |--| -- |
| query_id | `Int as uint64` | Query id |
| name | `string` | Moneybox name |
| image | `string` | Moneybox image source |
| amount | `Int as uint64` | Moneybox target amount |
| deadline | `Int as uint64` | Moneybox deadline (hold date) |

## Safe getters

### get_id()

Return safe contract ID.

### get_parent()

Return parent deployer contract address.

### get_owner()

Return owner address.

### get_goal_detail()

Return moneybox detail object.

### get_contract_balance()

Return moneybox balance.

## Safe setters

### ChangeName message

Change moneybox name

|Prop  | Type |  Description |
|--  |--| -- |
| name | `string` | Moneybox new name |

### ChangeImage message

Change moneybox image

|Prop  | Type |  Description |
|--  |--| -- |
| image | `string` | Moneybox new image source |

### "withdrawal" message

Withdrawal all contract balance to wallet owner.

### MintTarget message

Set moneybox detail. This method can be called only once at the time of deployment and only to parents contract.

|Prop  | Type |  Description |
|--  |--| -- |
| query_id | `Int as uint64` | Query id |
| name | `string` | Moneybox name |
| image | `string` | Moneybox image source |
| amount | `Int as uint64` | Moneybox target amount |
| deadline | `Int as uint64` | Moneybox deadline (hold date) |



