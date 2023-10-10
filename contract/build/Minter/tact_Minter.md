# TACT Compilation Report
Contract: Minter
BOC Size: 1151 bytes

# Types
Total Types: 10

## StateInit
TLB: `_ code:^cell data:^cell = StateInit`
Signature: `StateInit{code:^cell,data:^cell}`

## Context
TLB: `_ bounced:bool sender:address value:int257 raw:^slice = Context`
Signature: `Context{bounced:bool,sender:address,value:int257,raw:^slice}`

## SendParameters
TLB: `_ bounce:bool to:address value:int257 mode:int257 body:Maybe ^cell code:Maybe ^cell data:Maybe ^cell = SendParameters`
Signature: `SendParameters{bounce:bool,to:address,value:int257,mode:int257,body:Maybe ^cell,code:Maybe ^cell,data:Maybe ^cell}`

## Deploy
TLB: `deploy#946a98b6 queryId:uint64 = Deploy`
Signature: `Deploy{queryId:uint64}`

## DeployOk
TLB: `deploy_ok#aff90f57 queryId:uint64 = DeployOk`
Signature: `DeployOk{queryId:uint64}`

## FactoryDeploy
TLB: `factory_deploy#6d0ff13b queryId:uint64 cashback:address = FactoryDeploy`
Signature: `FactoryDeploy{queryId:uint64,cashback:address}`

## MintTarget
TLB: `mint_target#8b3217a2 query_id:uint64 name:^string amount:uint64 deadline:uint64 image:^string = MintTarget`
Signature: `MintTarget{query_id:uint64,name:^string,amount:uint64,deadline:uint64,image:^string}`

## ChangeImage
TLB: `change_image#e78b9cb5 query_id:uint64 image_source:^string = ChangeImage`
Signature: `ChangeImage{query_id:uint64,image_source:^string}`

## ChangeName
TLB: `change_name#27fcdcf9 query_id:uint64 name:^string = ChangeName`
Signature: `ChangeName{query_id:uint64,name:^string}`

## Goal
TLB: `_ is_init:bool name:^string amount:uint64 deadline:uint64 image:^string = Goal`
Signature: `Goal{is_init:bool,name:^string,amount:uint64,deadline:uint64,image:^string}`

# Get Methods
Total Get Methods: 4

## get_address_contract
Argument: owner
Argument: seqno

## get_contract_state_init
Argument: owner
Argument: seqno

## get_seqno

## get_id

# Error Codes
2: Stack undeflow
3: Stack overflow
4: Integer overflow
5: Integer out of expected range
6: Invalid opcode
7: Type check error
8: Cell overflow
9: Cell underflow
10: Dictionary error
13: Out of gas error
32: Method ID not found
34: Action is invalid or not supported
37: Not enough TON
38: Not enough extra-currencies
128: Null reference exception
129: Invalid serialization prefix
130: Invalid incoming message
131: Constraints error
132: Access denied
133: Contract stopped
134: Invalid argument
135: Code of a contract was not found
136: Invalid address
137: Masterchain support is not enabled for this contract
31317: Request earlier than scheduled date
49469: Access denied
51754: Insufficient funds
52708: This goal has already been created