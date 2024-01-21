"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.Query = void 0;
const fm = __importStar(require("../../../grpc-gateway"));
class Query {
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
exports.Query = Query;
class QueryClientImpl {
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
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.rpc.Query.js.map