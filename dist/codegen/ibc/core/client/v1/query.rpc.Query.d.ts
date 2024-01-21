import * as fm from "../../../../grpc-gateway";
import { QueryClientStateRequest, QueryClientStateResponse, QueryClientStatesRequest, QueryClientStatesResponse, QueryConsensusStateRequest, QueryConsensusStateResponse, QueryConsensusStatesRequest, QueryConsensusStatesResponse, QueryClientStatusRequest, QueryClientStatusResponse, QueryClientParamsRequest, QueryClientParamsResponse, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse } from "./query";
export declare class Query {
    /** ClientState queries an IBC light client. */
    static clientState(request: QueryClientStateRequest, initRequest?: fm.InitReq): Promise<QueryClientStateResponse>;
    /** ClientStates queries all the IBC light clients of a chain. */
    static clientStates(request: QueryClientStatesRequest, initRequest?: fm.InitReq): Promise<QueryClientStatesResponse>;
    /**
     * ConsensusState queries a consensus state associated with a client state at
     * a given height.
     */
    static consensusState(request: QueryConsensusStateRequest, initRequest?: fm.InitReq): Promise<QueryConsensusStateResponse>;
    /**
     * ConsensusStates queries all the consensus state associated with a given
     * client.
     */
    static consensusStates(request: QueryConsensusStatesRequest, initRequest?: fm.InitReq): Promise<QueryConsensusStatesResponse>;
    /** Status queries the status of an IBC client. */
    static clientStatus(request: QueryClientStatusRequest, initRequest?: fm.InitReq): Promise<QueryClientStatusResponse>;
    /** ClientParams queries all parameters of the ibc client. */
    static clientParams(request: QueryClientParamsRequest, initRequest?: fm.InitReq): Promise<QueryClientParamsResponse>;
    /** UpgradedClientState queries an Upgraded IBC light client. */
    static upgradedClientState(request: QueryUpgradedClientStateRequest, initRequest?: fm.InitReq): Promise<QueryUpgradedClientStateResponse>;
    /** UpgradedConsensusState queries an Upgraded IBC consensus state. */
    static upgradedConsensusState(request: QueryUpgradedConsensusStateRequest, initRequest?: fm.InitReq): Promise<QueryUpgradedConsensusStateResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** ClientState queries an IBC light client. */
    clientState(req: QueryClientStateRequest, headers?: HeadersInit): Promise<QueryClientStateResponse>;
    /** ClientStates queries all the IBC light clients of a chain. */
    clientStates(req: QueryClientStatesRequest, headers?: HeadersInit): Promise<QueryClientStatesResponse>;
    /**
     * ConsensusState queries a consensus state associated with a client state at
     * a given height.
     */
    consensusState(req: QueryConsensusStateRequest, headers?: HeadersInit): Promise<QueryConsensusStateResponse>;
    /**
     * ConsensusStates queries all the consensus state associated with a given
     * client.
     */
    consensusStates(req: QueryConsensusStatesRequest, headers?: HeadersInit): Promise<QueryConsensusStatesResponse>;
    /** Status queries the status of an IBC client. */
    clientStatus(req: QueryClientStatusRequest, headers?: HeadersInit): Promise<QueryClientStatusResponse>;
    /** ClientParams queries all parameters of the ibc client. */
    clientParams(req: QueryClientParamsRequest, headers?: HeadersInit): Promise<QueryClientParamsResponse>;
    /** UpgradedClientState queries an Upgraded IBC light client. */
    upgradedClientState(req: QueryUpgradedClientStateRequest, headers?: HeadersInit): Promise<QueryUpgradedClientStateResponse>;
    /** UpgradedConsensusState queries an Upgraded IBC consensus state. */
    upgradedConsensusState(req: QueryUpgradedConsensusStateRequest, headers?: HeadersInit): Promise<QueryUpgradedConsensusStateResponse>;
}
