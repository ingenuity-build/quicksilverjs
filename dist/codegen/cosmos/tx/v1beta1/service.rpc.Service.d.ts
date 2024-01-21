import * as fm from "../../../grpc-gateway";
import { SimulateRequest, SimulateResponse, GetTxRequest, GetTxResponse, BroadcastTxRequest, BroadcastTxResponse, GetTxsEventRequest, GetTxsEventResponse, GetBlockWithTxsRequest, GetBlockWithTxsResponse } from "./service";
export declare class Service {
    /** Simulate simulates executing a transaction for estimating gas usage. */
    static simulate(request: SimulateRequest, initRequest?: fm.InitReq): Promise<SimulateResponse>;
    /** GetTx fetches a tx by hash. */
    static getTx(request: GetTxRequest, initRequest?: fm.InitReq): Promise<GetTxResponse>;
    /** BroadcastTx broadcast transaction. */
    static broadcastTx(request: BroadcastTxRequest, initRequest?: fm.InitReq): Promise<BroadcastTxResponse>;
    /** GetTxsEvent fetches txs by event. */
    static getTxsEvent(request: GetTxsEventRequest, initRequest?: fm.InitReq): Promise<GetTxsEventResponse>;
    /**
     * GetBlockWithTxs fetches a block with decoded txs.
     *
     * Since: cosmos-sdk 0.45.2
     */
    static getBlockWithTxs(request: GetBlockWithTxsRequest, initRequest?: fm.InitReq): Promise<GetBlockWithTxsResponse>;
}
export declare class ServiceClientImpl {
    private readonly url;
    constructor(url: string);
    /** Simulate simulates executing a transaction for estimating gas usage. */
    simulate(req: SimulateRequest, headers?: HeadersInit): Promise<SimulateResponse>;
    /** GetTx fetches a tx by hash. */
    getTx(req: GetTxRequest, headers?: HeadersInit): Promise<GetTxResponse>;
    /** BroadcastTx broadcast transaction. */
    broadcastTx(req: BroadcastTxRequest, headers?: HeadersInit): Promise<BroadcastTxResponse>;
    /** GetTxsEvent fetches txs by event. */
    getTxsEvent(req: GetTxsEventRequest, headers?: HeadersInit): Promise<GetTxsEventResponse>;
    /**
     * GetBlockWithTxs fetches a block with decoded txs.
     *
     * Since: cosmos-sdk 0.45.2
     */
    getBlockWithTxs(req: GetBlockWithTxsRequest, headers?: HeadersInit): Promise<GetBlockWithTxsResponse>;
}
