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
exports.Query = Query;
class QueryClientImpl {
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
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.rpc.Query.js.map