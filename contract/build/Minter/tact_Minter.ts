import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    ComputeError, 
    TupleItem, 
    TupleReader, 
    Dictionary, 
    contractAddress, 
    ContractProvider, 
    Sender, 
    Contract, 
    ContractABI, 
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from 'ton-core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Cell;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw);
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw);
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        }
    }
}

export type MintTarget = {
    $$type: 'MintTarget';
    query_id: bigint;
    name: string;
    amount: bigint;
    deadline: bigint;
    image: string;
}

export function storeMintTarget(src: MintTarget) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2335315874, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeStringRefTail(src.name);
        b_0.storeUint(src.amount, 64);
        b_0.storeUint(src.deadline, 64);
        b_0.storeStringRefTail(src.image);
    };
}

export function loadMintTarget(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2335315874) { throw Error('Invalid prefix'); }
    let _query_id = sc_0.loadUintBig(64);
    let _name = sc_0.loadStringRefTail();
    let _amount = sc_0.loadUintBig(64);
    let _deadline = sc_0.loadUintBig(64);
    let _image = sc_0.loadStringRefTail();
    return { $$type: 'MintTarget' as const, query_id: _query_id, name: _name, amount: _amount, deadline: _deadline, image: _image };
}

function loadTupleMintTarget(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _name = source.readString();
    let _amount = source.readBigNumber();
    let _deadline = source.readBigNumber();
    let _image = source.readString();
    return { $$type: 'MintTarget' as const, query_id: _query_id, name: _name, amount: _amount, deadline: _deadline, image: _image };
}

function storeTupleMintTarget(source: MintTarget) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    builder.writeString(source.name);
    builder.writeNumber(source.amount);
    builder.writeNumber(source.deadline);
    builder.writeString(source.image);
    return builder.build();
}

function dictValueParserMintTarget(): DictionaryValue<MintTarget> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeMintTarget(src)).endCell());
        },
        parse: (src) => {
            return loadMintTarget(src.loadRef().beginParse());
        }
    }
}

export type ChangeImage = {
    $$type: 'ChangeImage';
    query_id: bigint;
    image_source: string;
}

export function storeChangeImage(src: ChangeImage) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3884686517, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeStringRefTail(src.image_source);
    };
}

export function loadChangeImage(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3884686517) { throw Error('Invalid prefix'); }
    let _query_id = sc_0.loadUintBig(64);
    let _image_source = sc_0.loadStringRefTail();
    return { $$type: 'ChangeImage' as const, query_id: _query_id, image_source: _image_source };
}

function loadTupleChangeImage(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _image_source = source.readString();
    return { $$type: 'ChangeImage' as const, query_id: _query_id, image_source: _image_source };
}

function storeTupleChangeImage(source: ChangeImage) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    builder.writeString(source.image_source);
    return builder.build();
}

function dictValueParserChangeImage(): DictionaryValue<ChangeImage> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeChangeImage(src)).endCell());
        },
        parse: (src) => {
            return loadChangeImage(src.loadRef().beginParse());
        }
    }
}

export type ChangeName = {
    $$type: 'ChangeName';
    query_id: bigint;
    name: string;
}

export function storeChangeName(src: ChangeName) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(670883065, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeStringRefTail(src.name);
    };
}

export function loadChangeName(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 670883065) { throw Error('Invalid prefix'); }
    let _query_id = sc_0.loadUintBig(64);
    let _name = sc_0.loadStringRefTail();
    return { $$type: 'ChangeName' as const, query_id: _query_id, name: _name };
}

function loadTupleChangeName(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _name = source.readString();
    return { $$type: 'ChangeName' as const, query_id: _query_id, name: _name };
}

function storeTupleChangeName(source: ChangeName) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    builder.writeString(source.name);
    return builder.build();
}

function dictValueParserChangeName(): DictionaryValue<ChangeName> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeChangeName(src)).endCell());
        },
        parse: (src) => {
            return loadChangeName(src.loadRef().beginParse());
        }
    }
}

export type Goal = {
    $$type: 'Goal';
    is_init: boolean;
    name: string;
    amount: bigint;
    deadline: bigint;
    image: string;
}

export function storeGoal(src: Goal) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.is_init);
        b_0.storeStringRefTail(src.name);
        b_0.storeUint(src.amount, 64);
        b_0.storeUint(src.deadline, 64);
        b_0.storeStringRefTail(src.image);
    };
}

export function loadGoal(slice: Slice) {
    let sc_0 = slice;
    let _is_init = sc_0.loadBit();
    let _name = sc_0.loadStringRefTail();
    let _amount = sc_0.loadUintBig(64);
    let _deadline = sc_0.loadUintBig(64);
    let _image = sc_0.loadStringRefTail();
    return { $$type: 'Goal' as const, is_init: _is_init, name: _name, amount: _amount, deadline: _deadline, image: _image };
}

function loadTupleGoal(source: TupleReader) {
    let _is_init = source.readBoolean();
    let _name = source.readString();
    let _amount = source.readBigNumber();
    let _deadline = source.readBigNumber();
    let _image = source.readString();
    return { $$type: 'Goal' as const, is_init: _is_init, name: _name, amount: _amount, deadline: _deadline, image: _image };
}

function storeTupleGoal(source: Goal) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.is_init);
    builder.writeString(source.name);
    builder.writeNumber(source.amount);
    builder.writeNumber(source.deadline);
    builder.writeString(source.image);
    return builder.build();
}

function dictValueParserGoal(): DictionaryValue<Goal> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeGoal(src)).endCell());
        },
        parse: (src) => {
            return loadGoal(src.loadRef().beginParse());
        }
    }
}

 type Minter_init_args = {
    $$type: 'Minter_init_args';
    id: bigint;
}

function initMinter_init_args(src: Minter_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.id, 257);
    };
}

async function Minter_init(id: bigint) {
    const __code = Cell.fromBase64('te6ccgECHgEABHMAART/APSkE/S88sgLAQIBYgIDApzQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxa2zzy4ILI+EMBzH8BygBZAss/yx/J7VQbBAIBIAsMArIBkjB/4HAh10nCH5UwINcLH94gwAAi10nBIbCSW3/gIIIQizIXorqOpDDTHwGCEIsyF6K68uCB0z/UAdAB0z/TP9QB0BUUQzBsFds8f+CCEJRqmLa64wIwcAUGAvb4QidHEwjbPFxwWchwAcsBcwHLAXABywASzMzJ+QDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFB2cIBCUHt/C8hVQIIQizIXolAGyx8Uyz/IUAPPFslYzMs/yz/IWM8WyQHMyRBWEEUTBwFO0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/CAEgEEgQN0AYEDYQNRA02zykAQkBOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8CQHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAKAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAgEgDQ4CASAVFgIBbg8QAk+7UqASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjbPEAD2zxsIYGxICEawX7Z5tnjYQwBsRAk+tCQCQa6TAgIXdeXBEEGuFhRBAgn/deWhEwYTdeXBEbZ4gAe2eNhFAGxMAAiEBhts8cFnIcAHLAXMBywFwAcsAEszMyfkAyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgTARD4Q/goQwPbPBQA5gPQ9AQwbQGCAN8zAYAQ9A9vofLghwGCAN8zIgKAEPQXyAHI9ADJAcxwAcoAVSAEWiDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlgg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxaBAQHPAMkAlbu9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcJ2XTlqzTstzOg6WbZRm6KSAIBSBcYAgEgGRoAdbJu40NWlwZnM6Ly9RbVczWE02QkFWZkw0OENrU2JBb1A0c1ZEb0J1RGJHbnVWeVdwWkYxWGJTWGJnggABGtX3aiaGkAAMACEa0c7Z5tnjYQwBscAVDtRNDUAfhj0gABl9M/0x9ZbBLg+CjXCwqDCbry4ImBAQHXAAEB0ds8HQACIAAEcAE=');
    const __system = Cell.fromBase64('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');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initMinter_init_args({ $$type: 'Minter_init_args', id })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const Minter_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack undeflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    13: { message: `Out of gas error` },
    32: { message: `Method ID not found` },
    34: { message: `Action is invalid or not supported` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
    31317: { message: `Request earlier than scheduled date` },
    49469: { message: `Access denied` },
    51754: { message: `Insufficient funds` },
    52708: { message: `This goal has already been created` },
}

const Minter_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"MintTarget","header":2335315874,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"name","type":{"kind":"simple","type":"string","optional":false}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"deadline","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"image","type":{"kind":"simple","type":"string","optional":false}}]},
    {"name":"ChangeImage","header":3884686517,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"image_source","type":{"kind":"simple","type":"string","optional":false}}]},
    {"name":"ChangeName","header":670883065,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"name","type":{"kind":"simple","type":"string","optional":false}}]},
    {"name":"Goal","header":null,"fields":[{"name":"is_init","type":{"kind":"simple","type":"bool","optional":false}},{"name":"name","type":{"kind":"simple","type":"string","optional":false}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"deadline","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"image","type":{"kind":"simple","type":"string","optional":false}}]},
]

const Minter_getters: ABIGetter[] = [
    {"name":"get_address_contract","arguments":[{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"seqno","type":{"kind":"simple","type":"int","optional":false,"format":257}}],"returnType":{"kind":"simple","type":"address","optional":false}},
    {"name":"get_contract_state_init","arguments":[{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"seqno","type":{"kind":"simple","type":"int","optional":false,"format":257}}],"returnType":{"kind":"simple","type":"StateInit","optional":false}},
    {"name":"get_seqno","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"get_id","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
]

const Minter_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"empty"}},
    {"receiver":"internal","message":{"kind":"typed","type":"MintTarget"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class Minter implements Contract {
    
    static async init(id: bigint) {
        return await Minter_init(id);
    }
    
    static async fromInit(id: bigint) {
        const init = await Minter_init(id);
        const address = contractAddress(0, init);
        return new Minter(address, init);
    }
    
    static fromAddress(address: Address) {
        return new Minter(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  Minter_types,
        getters: Minter_getters,
        receivers: Minter_receivers,
        errors: Minter_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: null | MintTarget | Deploy) {
        
        let body: Cell | null = null;
        if (message === null) {
            body = new Cell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'MintTarget') {
            body = beginCell().store(storeMintTarget(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getGetAddressContract(provider: ContractProvider, owner: Address, seqno: bigint) {
        let builder = new TupleBuilder();
        builder.writeAddress(owner);
        builder.writeNumber(seqno);
        let source = (await provider.get('get_address_contract', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
    async getGetContractStateInit(provider: ContractProvider, owner: Address, seqno: bigint) {
        let builder = new TupleBuilder();
        builder.writeAddress(owner);
        builder.writeNumber(seqno);
        let source = (await provider.get('get_contract_state_init', builder.build())).stack;
        const result = loadTupleStateInit(source);
        return result;
    }
    
    async getGetSeqno(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('get_seqno', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getGetId(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('get_id', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
}