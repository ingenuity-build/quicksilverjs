import * as fm from "../../../grpc-gateway";
export class Query {
    /** Params returns the total set of minting parameters. */
    static params(request, initRequest) {
        return fm.fetchReq(`/quicksilver/mint/v1beta1/params?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** EpochProvisions current minting epoch provisions value. */
    static epochProvisions(request, initRequest) {
        return fm.fetchReq(`/quicksilver/mint/v1beta1/epoch_provisions?${fm.renderURLSearchParams({
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
    /** Params returns the total set of minting parameters. */
    async params(req, headers) {
        return Query.params(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** EpochProvisions current minting epoch provisions value. */
    async epochProvisions(req, headers) {
        return Query.epochProvisions(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map