import * as fm from "../../../../grpc-gateway";
export class Query {
    /** Connection queries an IBC connection end. */
    static connection(request, initRequest) {
        return fm.fetchReq(`/ibc/core/connection/v1/connections/${request["connection_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["connection_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Connections queries all the IBC connections of a chain. */
    static connections(request, initRequest) {
        return fm.fetchReq(`/ibc/core/connection/v1/connections?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * ClientConnections queries the connection paths associated with a client
     * state.
     */
    static clientConnections(request, initRequest) {
        return fm.fetchReq(`/ibc/core/connection/v1/client_connections/${request["client_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["client_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * ConnectionClientState queries the client state associated with the
     * connection.
     */
    static connectionClientState(request, initRequest) {
        return fm.fetchReq(`/ibc/core/connection/v1/connections/${request["connection_id"]}/client_state?${fm.renderURLSearchParams({
            ...request
        }, ["connection_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * ConnectionConsensusState queries the consensus state associated with the
     * connection.
     */
    static connectionConsensusState(request, initRequest) {
        return fm.fetchReq(`/ibc/core/connection/v1/connections/${request["connection_id"]}/consensus_state/revision/${request["revision_number"]}/height/${request["revision_height"]}?${fm.renderURLSearchParams({
            ...request
        }, ["connection_id", "revision_number", "revision_height"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
}
export class QueryClientImpl {
    url;
    constructor(url) {
        this.url = url;
    }
    /** Connection queries an IBC connection end. */
    async connection(req, headers) {
        return Query.connection(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Connections queries all the IBC connections of a chain. */
    async connections(req, headers) {
        return Query.connections(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * ClientConnections queries the connection paths associated with a client
     * state.
     */
    async clientConnections(req, headers) {
        return Query.clientConnections(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * ConnectionClientState queries the client state associated with the
     * connection.
     */
    async connectionClientState(req, headers) {
        return Query.connectionClientState(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * ConnectionConsensusState queries the consensus state associated with the
     * connection.
     */
    async connectionConsensusState(req, headers) {
        return Query.connectionConsensusState(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map