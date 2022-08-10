export declare class Masternode {
    version: number;
    id: any;
    txid: string;
    vout: number;
    signPrivKey: string;
    pingHash: string;
    privKey: string;
    addr: string;
    port: number;
    static FIELDS: string[];
    constructor(txid: any, vout: any, signPrivKey: any, pingHash: any, privKey: any, addr: any, port: any);
    serialize_input(): any;
    hash_decode(): any;
    get_address(): string;
    get_now_time(): any;
    get_int64(value: any): any;
    get_int32(value: any): any;
    get_int16BE(value: any): any;
    get_int16(value: any): any;
    get_int8(value: any): any;
    get_varintNum(n: any): any;
    singMasternode: () => string;
}
