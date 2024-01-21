import * as fm from "../../../grpc-gateway";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, Bech32PrefixRequest, Bech32PrefixResponse, AddressBytesToStringRequest, AddressBytesToStringResponse, AddressStringToBytesRequest, AddressStringToBytesResponse } from "./query";
export declare class Query {
    /**
     * Accounts returns all the existing accounts
     *
     * Since: cosmos-sdk 0.43
     */
    static accounts(request: QueryAccountsRequest, initRequest?: fm.InitReq): Promise<QueryAccountsResponse>;
    /** Account returns account details based on address. */
    static account(request: QueryAccountRequest, initRequest?: fm.InitReq): Promise<QueryAccountResponse>;
    /** Params queries all parameters. */
    static params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse>;
    /** ModuleAccounts returns all the existing module accounts. */
    static moduleAccounts(request: QueryModuleAccountsRequest, initRequest?: fm.InitReq): Promise<QueryModuleAccountsResponse>;
    /** Bech32 queries bech32Prefix */
    static bech32Prefix(request: Bech32PrefixRequest, initRequest?: fm.InitReq): Promise<Bech32PrefixResponse>;
    /** AddressBytesToString converts Account Address bytes to string */
    static addressBytesToString(request: AddressBytesToStringRequest, initRequest?: fm.InitReq): Promise<AddressBytesToStringResponse>;
    /** AddressStringToBytes converts Address string to bytes */
    static addressStringToBytes(request: AddressStringToBytesRequest, initRequest?: fm.InitReq): Promise<AddressStringToBytesResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /**
     * Accounts returns all the existing accounts
     *
     * Since: cosmos-sdk 0.43
     */
    accounts(req: QueryAccountsRequest, headers?: HeadersInit): Promise<QueryAccountsResponse>;
    /** Account returns account details based on address. */
    account(req: QueryAccountRequest, headers?: HeadersInit): Promise<QueryAccountResponse>;
    /** Params queries all parameters. */
    params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
    /** ModuleAccounts returns all the existing module accounts. */
    moduleAccounts(req: QueryModuleAccountsRequest, headers?: HeadersInit): Promise<QueryModuleAccountsResponse>;
    /** Bech32 queries bech32Prefix */
    bech32Prefix(req: Bech32PrefixRequest, headers?: HeadersInit): Promise<Bech32PrefixResponse>;
    /** AddressBytesToString converts Account Address bytes to string */
    addressBytesToString(req: AddressBytesToStringRequest, headers?: HeadersInit): Promise<AddressBytesToStringResponse>;
    /** AddressStringToBytes converts Address string to bytes */
    addressStringToBytes(req: AddressStringToBytesRequest, headers?: HeadersInit): Promise<AddressStringToBytesResponse>;
}
