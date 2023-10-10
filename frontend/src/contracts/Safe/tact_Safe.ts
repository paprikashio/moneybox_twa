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

 type Safe_init_args = {
    $$type: 'Safe_init_args';
    owner: Address;
    parent: Address;
    id: bigint;
}

function initSafe_init_args(src: Safe_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.owner);
        b_0.storeAddress(src.parent);
        b_0.storeInt(src.id, 257);
    };
}

async function Safe_init(owner: Address, parent: Address, id: bigint) {
    const __code = Cell.fromBase64('te6ccgECJgEABa8AART/APSkE/S88sgLAQIBYgIDA3rQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVF9s88uCCIgQFAgEgEBEC7u2i7fsBkjB/4HAh10nCH5UwINcLH94gwAAi10nBIbCSW3/gIIIQizIXorqOPjDTHwGCEIsyF6K68uCB0z/UAdAB0z/TP9QB0BUUQzBsFWxENIIAzeQFwAAV8vSCAME9+EImxwXy9H9BRAN/4CCCEOeLnLW64wIgBgcA1sj4QwHMfwHKAFVwUHjLP1AFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAMg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZeQFBFygDIUAPPFslYzMs/yz/IWM8WyQHMye1UAEgw0x8BghDni5y1uvLggdM/1AHQEmwSbCGCAME9+EIoxwXy9H8C0IIQJ/zc+bqOJDDTHwGCECf83Pm68uCB0z/UAdASbBIxNIIAwT34QijHBfL0f+AgghCUapi2uo6oMNMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8f+DAAJEw4w1wCAkBOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8DgFa+QGC8H2sqitTvUBpf7yIjiSadSi93NynlcqSPW+6u1vaZCZKuo6F2zx/2zHgCgTSN4IAwT34QifHBfL0gXpV+CMivvL0ggDKKvgnbxDCAPL0yG8AAW+MbW+MjQWV2l0aGRyYXdhbCBmcm9tIGdvYWw6IINs8I9s8f3CBAIIDbyIByZMhbrOWAW8iWczJ6DHQ2zwpUEQQNG1tDQ0LDAFCyHAByx9vAAFvjG1vjAHbPG8iAcmTIW6zlgFvIlnMyegxDQEK2zyAZAcOALog10oh10mXIMIAIsIAsY5KA28igH8izzGrAqEFqwJRVbYIIMIAnCCqAhXXGFAzzxZAFN5ZbwJTQaHCAJnIAW8CUEShqgKOEjEzwgCZ1DDQINdKIddJknAg4uLoXwMByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsADwCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAIBIBITAgEgHB0CASAUFQIRuO6ts82zxsgYIhsCEbWbW2ebZ42QsCIWAgN7IBcYAApUdDJTQwIPouts82zxsgYiGQIPopds82zxsgYiGgACJQACJgAI+CdvEACVu70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwnZdOWrNOy3M6DpZtlGbopIAgFIHh8CASAgIQB1sm7jQ1aXBmczovL1FtVGRzRGlVVmg3TjZoY0d3anJSNVJXcEtRcnU0dXZKeFVGbWhNeEI0MlNHUDmCAAEa1fdqJoaQAAwAIRrRztnm2eNkDAIiMB5u1E0NQB+GPSAAGOW9M/+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdIA1AHQAdM/0z/UAdAVFEMwEFgQVxBWbBjg+CjXCwqDCbry4IkkAAInAZj6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgBgQEB1wBVIAPRWNs8JQAYcIsIcPgjiwgQVxBW');
    const __system = Cell.fromBase64('te6cckECKAEABbkAAQHAAQEFob5nAgEU/wD0pBP0vPLICwMCAWIYBAIBIA0FAgEgDAYCAUgIBwB1sm7jQ1aXBmczovL1FtVGRzRGlVVmg3TjZoY0d3anJSNVJXcEtRcnU0dXZKeFVGbWhNeEI0MlNHUDmCACASALCQIRrRztnm2eNkDAJQoAAicAEa1fdqJoaQAAwACVu70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwnZdOWrNOy3M6DpZtlGbopIAgEgEA4CEbjurbPNs8bIGCUPAAj4J28QAgEgFhECA3sgFBICD6KXbPNs8bIGJRMAAiYCD6LrbPNs8bIGJRUAAiUCEbWbW2ebZ42QsCUXAApUdDJTQwN60AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRfbPPLggiUaGQDWyPhDAcx/AcoAVXBQeMs/UAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQAyDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFl5AUEXKAMhQA88WyVjMyz/LP8hYzxbJAczJ7VQC7u2i7fsBkjB/4HAh10nCH5UwINcLH94gwAAi10nBIbCSW3/gIIIQizIXorqOPjDTHwGCEIsyF6K68uCB0z/UAdAB0z/TP9QB0BUUQzBsFWxENIIAzeQFwAAV8vSCAME9+EImxwXy9H9BRAN/4CCCEOeLnLW64wIgJBsC0IIQJ/zc+bqOJDDTHwGCECf83Pm68uCB0z/UAdASbBIxNIIAwT34QijHBfL0f+AgghCUapi2uo6oMNMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8f+DAAJEw4w1wIRwBWvkBgvB9rKorU71AaX+8iI4kmnUovdzcp5XKkj1vurtb2mQmSrqOhds8f9sx4B0E0jeCAME9+EInxwXy9IF6VfgjIr7y9IIAyir4J28QwgDy9MhvAAFvjG1vjI0FldpdGhkcmF3YWwgZnJvbSBnb2FsOiCDbPCPbPH9wgQCCA28iAcmTIW6zlgFvIlnMyegx0Ns8KVBEEDRtbSAgHx4BCts8gGQHIgFCyHAByx9vAAFvjG1vjAHbPG8iAcmTIW6zlgFvIlnMyegxIAC6INdKIddJlyDCACLCALGOSgNvIoB/Is8xqwKhBasCUVW2CCDCAJwgqgIV1xhQM88WQBTeWW8CU0GhwgCZyAFvAlBEoaoCjhIxM8IAmdQw0CDXSiHXSZJwIOLi6F8DATptbSJus5lbIG7y0IBvIgGRMuIQJHADBIBCUCPbPCIByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsAIwCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzABIMNMfAYIQ54uctbry4IHTP9QB0BJsEmwhggDBPfhCKMcF8vR/AebtRNDUAfhj0gABjlvTP/pAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHSANQB0AHTP9M/1AHQFRRDMBBYEFcQVmwY4Pgo1wsKgwm68uCJJgGY+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAYEBAdcAVSAD0VjbPCcAGHCLCHD4I4sIEFcQVjlN2o8=');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initSafe_init_args({ $$type: 'Safe_init_args', owner, parent, id })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const Safe_errors: { [key: number]: { message: string } } = {
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

const Safe_types: ABIType[] = [
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

const Safe_getters: ABIGetter[] = [
    {"name":"get_contract_balance","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"get_goal_detail","arguments":[],"returnType":{"kind":"simple","type":"Goal","optional":false}},
    {"name":"get_owner","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
    {"name":"get_parent","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
    {"name":"get_id","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
]

const Safe_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"empty"}},
    {"receiver":"internal","message":{"kind":"typed","type":"MintTarget"}},
    {"receiver":"internal","message":{"kind":"typed","type":"ChangeImage"}},
    {"receiver":"internal","message":{"kind":"typed","type":"ChangeName"}},
    {"receiver":"internal","message":{"kind":"text","text":"withdrawal"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class Safe implements Contract {
    
    static async init(owner: Address, parent: Address, id: bigint) {
        return await Safe_init(owner, parent, id);
    }
    
    static async fromInit(owner: Address, parent: Address, id: bigint) {
        const init = await Safe_init(owner, parent, id);
        const address = contractAddress(0, init);
        return new Safe(address, init);
    }
    
    static fromAddress(address: Address) {
        return new Safe(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  Safe_types,
        getters: Safe_getters,
        receivers: Safe_receivers,
        errors: Safe_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: null | MintTarget | ChangeImage | ChangeName | 'withdrawal' | Deploy) {
        
        let body: Cell | null = null;
        if (message === null) {
            body = new Cell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'MintTarget') {
            body = beginCell().store(storeMintTarget(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'ChangeImage') {
            body = beginCell().store(storeChangeImage(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'ChangeName') {
            body = beginCell().store(storeChangeName(message)).endCell();
        }
        if (message === 'withdrawal') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getGetContractBalance(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('get_contract_balance', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getGetGoalDetail(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('get_goal_detail', builder.build())).stack;
        const result = loadTupleGoal(source);
        return result;
    }
    
    async getGetOwner(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('get_owner', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
    async getGetParent(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('get_parent', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
    async getGetId(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('get_id', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
}