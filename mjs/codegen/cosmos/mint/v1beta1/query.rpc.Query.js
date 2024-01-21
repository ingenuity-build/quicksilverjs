import * as fm from "../../../grpc-gateway";
export class Query {
    /** Params returns the total set of minting parameters. */
    static params(request, initRequest) {
        return fm.fetchReq(`/cosmos/mint/v1beta1/params?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Inflation returns the current minting inflation value. */
    static inflation(request, initRequest) {
        return fm.fetchReq(`/cosmos/mint/v1beta1/inflation?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** AnnualProvisions current minting annual provisions value. */
    static annualProvisions(request, initRequest) {
        return fm.fetchReq(`/cosmos/mint/v1beta1/annual_provisions?${fm.renderURLSearchParams({
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
    /** Inflation returns the current minting inflation value. */
    async inflation(req, headers) {
        return Query.inflation(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** AnnualProvisions current minting annual provisions value. */
    async annualProvisions(req, headers) {
        return Query.annualProvisions(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map