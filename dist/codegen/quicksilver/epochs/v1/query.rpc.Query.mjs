import * as fm from "../../../grpc-gateway";
export class Query {
    /** EpochInfos provide running epochInfos */
    static epochInfos(request, initRequest) {
        return fm.fetchReq(`/quicksilver/epochs/v1/epochs?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** CurrentEpoch provide current epoch of specified identifier */
    static currentEpoch(request, initRequest) {
        return fm.fetchReq(`/quicksilver/epochs/v1/current_epoch?${fm.renderURLSearchParams({
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
    /** EpochInfos provide running epochInfos */
    async epochInfos(req, headers) {
        return Query.epochInfos(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** CurrentEpoch provide current epoch of specified identifier */
    async currentEpoch(req, headers) {
        return Query.currentEpoch(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map