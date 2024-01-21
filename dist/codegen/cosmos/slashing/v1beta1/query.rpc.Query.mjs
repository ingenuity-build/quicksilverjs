import * as fm from "../../../grpc-gateway";
export class Query {
    /** Params queries the parameters of slashing module */
    static params(request, initRequest) {
        return fm.fetchReq(`/cosmos/slashing/v1beta1/params?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** SigningInfo queries the signing info of given cons address */
    static signingInfo(request, initRequest) {
        return fm.fetchReq(`/cosmos/slashing/v1beta1/signing_infos/${request["cons_address"]}?${fm.renderURLSearchParams({
            ...request
        }, ["cons_address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** SigningInfos queries signing info of all validators */
    static signingInfos(request, initRequest) {
        return fm.fetchReq(`/cosmos/slashing/v1beta1/signing_infos?${fm.renderURLSearchParams({
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
    /** Params queries the parameters of slashing module */
    async params(req, headers) {
        return Query.params(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** SigningInfo queries the signing info of given cons address */
    async signingInfo(req, headers) {
        return Query.signingInfo(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** SigningInfos queries signing info of all validators */
    async signingInfos(req, headers) {
        return Query.signingInfos(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map