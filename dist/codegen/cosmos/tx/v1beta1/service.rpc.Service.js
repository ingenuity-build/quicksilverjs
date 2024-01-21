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
exports.ServiceClientImpl = exports.Service = void 0;
const fm = __importStar(require("../../../grpc-gateway"));
class Service {
    /** Simulate simulates executing a transaction for estimating gas usage. */
    static simulate(request, initRequest) {
        return fm.fetchReq(`/cosmos/tx/v1beta1/simulate`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** GetTx fetches a tx by hash. */
    static getTx(request, initRequest) {
        return fm.fetchReq(`/cosmos/tx/v1beta1/txs/${request["hash"]}?${fm.renderURLSearchParams({
            ...request
        }, ["hash"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** BroadcastTx broadcast transaction. */
    static broadcastTx(request, initRequest) {
        return fm.fetchReq(`/cosmos/tx/v1beta1/txs`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** GetTxsEvent fetches txs by event. */
    static getTxsEvent(request, initRequest) {
        return fm.fetchReq(`/cosmos/tx/v1beta1/txs?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * GetBlockWithTxs fetches a block with decoded txs.
     *
     * Since: cosmos-sdk 0.45.2
     */
    static getBlockWithTxs(request, initRequest) {
        return fm.fetchReq(`/cosmos/tx/v1beta1/txs/block/${request["height"]}?${fm.renderURLSearchParams({
            ...request
        }, ["height"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
}
exports.Service = Service;
class ServiceClientImpl {
    url;
    constructor(url) {
        this.url = url;
    }
    /** Simulate simulates executing a transaction for estimating gas usage. */
    async simulate(req, headers) {
        return Service.simulate(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** GetTx fetches a tx by hash. */
    async getTx(req, headers) {
        return Service.getTx(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** BroadcastTx broadcast transaction. */
    async broadcastTx(req, headers) {
        return Service.broadcastTx(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** GetTxsEvent fetches txs by event. */
    async getTxsEvent(req, headers) {
        return Service.getTxsEvent(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * GetBlockWithTxs fetches a block with decoded txs.
     *
     * Since: cosmos-sdk 0.45.2
     */
    async getBlockWithTxs(req, headers) {
        return Service.getBlockWithTxs(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.ServiceClientImpl = ServiceClientImpl;
//# sourceMappingURL=service.rpc.Service.js.map