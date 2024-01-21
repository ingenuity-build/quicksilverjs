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
    /** Returns list of `Authorization`, granted to the grantee by the granter. */
    static grants(request, initRequest) {
        return fm.fetchReq(`/cosmos/authz/v1beta1/grants?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * GranterGrants returns list of `GrantAuthorization`, granted by granter.
     *
     * Since: cosmos-sdk 0.46
     */
    static granterGrants(request, initRequest) {
        return fm.fetchReq(`/cosmos/authz/v1beta1/grants/granter/${request["granter"]}?${fm.renderURLSearchParams({
            ...request
        }, ["granter"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * GranteeGrants returns a list of `GrantAuthorization` by grantee.
     *
     * Since: cosmos-sdk 0.46
     */
    static granteeGrants(request, initRequest) {
        return fm.fetchReq(`/cosmos/authz/v1beta1/grants/grantee/${request["grantee"]}?${fm.renderURLSearchParams({
            ...request
        }, ["grantee"])}`, {
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
    /** Returns list of `Authorization`, granted to the grantee by the granter. */
    async grants(req, headers) {
        return Query.grants(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * GranterGrants returns list of `GrantAuthorization`, granted by granter.
     *
     * Since: cosmos-sdk 0.46
     */
    async granterGrants(req, headers) {
        return Query.granterGrants(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * GranteeGrants returns a list of `GrantAuthorization` by grantee.
     *
     * Since: cosmos-sdk 0.46
     */
    async granteeGrants(req, headers) {
        return Query.granteeGrants(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.rpc.Query.js.map