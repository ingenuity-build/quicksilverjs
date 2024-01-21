import * as fm from "../../../grpc-gateway";
export class Query {
    /** Claims returns all zone claims from the current epoch. */
    static claims(request, initRequest) {
        return fm.fetchReq(`/quicksilver/claimsmanager/v1/claims/${request["chain_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["chain_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** LastEpochClaims returns all zone claims from the last epoch. */
    static lastEpochClaims(request, initRequest) {
        return fm.fetchReq(`/quicksilver/claimsmanager/v1/previous_epoch_claims/${request["chain_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["chain_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** UserClaims returns all zone claims for a given address from the current epoch. */
    static userClaims(request, initRequest) {
        return fm.fetchReq(`/quicksilver/claimsmanager/v1/user/${request["address"]}/claims?${fm.renderURLSearchParams({
            ...request
        }, ["address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** UserLastEpochClaims returns all zone claims for a given address from the last epoch. */
    static userLastEpochClaims(request, initRequest) {
        return fm.fetchReq(`/quicksilver/claimsmanager/v1/user/${request["address"]}/previous_epoch_claims?${fm.renderURLSearchParams({
            ...request
        }, ["address"])}`, {
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
    /** Claims returns all zone claims from the current epoch. */
    async claims(req, headers) {
        return Query.claims(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** LastEpochClaims returns all zone claims from the last epoch. */
    async lastEpochClaims(req, headers) {
        return Query.lastEpochClaims(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** UserClaims returns all zone claims for a given address from the current epoch. */
    async userClaims(req, headers) {
        return Query.userClaims(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** UserLastEpochClaims returns all zone claims for a given address from the last epoch. */
    async userLastEpochClaims(req, headers) {
        return Query.userLastEpochClaims(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map