import * as fm from "../../../../grpc-gateway";
export class Query {
    /** DenomTrace queries a denomination trace information. */
    static denomTrace(request, initRequest) {
        return fm.fetchReq(`/ibc/apps/transfer/v1/denom_traces/${request["hash"]}?${fm.renderURLSearchParams({
            ...request
        }, ["hash"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** DenomTraces queries all denomination traces. */
    static denomTraces(request, initRequest) {
        return fm.fetchReq(`/ibc/apps/transfer/v1/denom_traces?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Params queries all parameters of the ibc-transfer module. */
    static params(request, initRequest) {
        return fm.fetchReq(`/ibc/apps/transfer/v1/params?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
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
    /** DenomTrace queries a denomination trace information. */
    async denomTrace(req, headers) {
        return Query.denomTrace(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** DenomTraces queries all denomination traces. */
    async denomTraces(req, headers) {
        return Query.denomTraces(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Params queries all parameters of the ibc-transfer module. */
    async params(req, headers) {
        return Query.params(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map