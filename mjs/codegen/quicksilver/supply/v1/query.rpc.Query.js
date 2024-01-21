import * as fm from "../../../grpc-gateway";
export class Query {
    /** Supply provide running epochInfos */
    static supply(request, initRequest) {
        return fm.fetchReq(`/quicksilver/supply/v1/supply?${fm.renderURLSearchParams({
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
    /** Supply provide running epochInfos */
    async supply(req, headers) {
        return Query.supply(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map