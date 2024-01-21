import * as fm from "../../../../grpc-gateway";
import { QueryConnectionRequest, QueryConnectionResponse, QueryConnectionsRequest, QueryConnectionsResponse, QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryConnectionClientStateRequest, QueryConnectionClientStateResponse, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse } from "./query";
export declare class Query {
    /** Connection queries an IBC connection end. */
    static connection(request: QueryConnectionRequest, initRequest?: fm.InitReq): Promise<QueryConnectionResponse>;
    /** Connections queries all the IBC connections of a chain. */
    static connections(request: QueryConnectionsRequest, initRequest?: fm.InitReq): Promise<QueryConnectionsResponse>;
    /**
     * ClientConnections queries the connection paths associated with a client
     * state.
     */
    static clientConnections(request: QueryClientConnectionsRequest, initRequest?: fm.InitReq): Promise<QueryClientConnectionsResponse>;
    /**
     * ConnectionClientState queries the client state associated with the
     * connection.
     */
    static connectionClientState(request: QueryConnectionClientStateRequest, initRequest?: fm.InitReq): Promise<QueryConnectionClientStateResponse>;
    /**
     * ConnectionConsensusState queries the consensus state associated with the
     * connection.
     */
    static connectionConsensusState(request: QueryConnectionConsensusStateRequest, initRequest?: fm.InitReq): Promise<QueryConnectionConsensusStateResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Connection queries an IBC connection end. */
    connection(req: QueryConnectionRequest, headers?: HeadersInit): Promise<QueryConnectionResponse>;
    /** Connections queries all the IBC connections of a chain. */
    connections(req: QueryConnectionsRequest, headers?: HeadersInit): Promise<QueryConnectionsResponse>;
    /**
     * ClientConnections queries the connection paths associated with a client
     * state.
     */
    clientConnections(req: QueryClientConnectionsRequest, headers?: HeadersInit): Promise<QueryClientConnectionsResponse>;
    /**
     * ConnectionClientState queries the client state associated with the
     * connection.
     */
    connectionClientState(req: QueryConnectionClientStateRequest, headers?: HeadersInit): Promise<QueryConnectionClientStateResponse>;
    /**
     * ConnectionConsensusState queries the consensus state associated with the
     * connection.
     */
    connectionConsensusState(req: QueryConnectionConsensusStateRequest, headers?: HeadersInit): Promise<QueryConnectionConsensusStateResponse>;
}
