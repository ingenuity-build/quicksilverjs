import * as fm from "../../../grpc-gateway";
export class Query {
    /** Params returns the total set of participation rewards parameters. */
    static params(request, initRequest) {
        return fm.fetchReq(`/quicksilver/participationrewards/v1/params?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** ProtocolData returns the requested protocol data. */
    static protocolData(request, initRequest) {
        return fm.fetchReq(`/quicksilver/participationrewards/v1/protocoldata/${request["type"]}/${request["key"]}?${fm.renderURLSearchParams({
            ...request
        }, ["type", "key"])}`, {
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
    /** Params returns the total set of participation rewards parameters. */
    async params(req, headers) {
        return Query.params(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** ProtocolData returns the requested protocol data. */
    async protocolData(req, headers) {
        return Query.protocolData(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map