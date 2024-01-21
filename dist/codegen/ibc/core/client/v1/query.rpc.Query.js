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
const fm = __importStar(require("../../../../grpc-gateway"));
class Query {
    /** ClientState queries an IBC light client. */
    static clientState(request, initRequest) {
        return fm.fetchReq(`/ibc/core/client/v1/client_states/${request["client_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["client_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** ClientStates queries all the IBC light clients of a chain. */
    static clientStates(request, initRequest) {
        return fm.fetchReq(`/ibc/core/client/v1/client_states?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * ConsensusState queries a consensus state associated with a client state at
     * a given height.
     */
    static consensusState(request, initRequest) {
        return fm.fetchReq(`/ibc/core/client/v1/consensus_states/${request["client_id"]}/revision/${request["revision_number"]}/height/${request["revision_height"]}?${fm.renderURLSearchParams({
            ...request
        }, ["client_id", "revision_number", "revision_height"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * ConsensusStates queries all the consensus state associated with a given
     * client.
     */
    static consensusStates(request, initRequest) {
        return fm.fetchReq(`/ibc/core/client/v1/consensus_states/${request["client_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["client_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Status queries the status of an IBC client. */
    static clientStatus(request, initRequest) {
        return fm.fetchReq(`/ibc/core/client/v1/client_status/${request["client_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["client_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** ClientParams queries all parameters of the ibc client. */
    static clientParams(request, initRequest) {
        return fm.fetchReq(`/ibc/client/v1/params?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** UpgradedClientState queries an Upgraded IBC light client. */
    static upgradedClientState(request, initRequest) {
        return fm.fetchReq(`/ibc/core/client/v1/upgraded_client_states?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** UpgradedConsensusState queries an Upgraded IBC consensus state. */
    static upgradedConsensusState(request, initRequest) {
        return fm.fetchReq(`/ibc/core/client/v1/upgraded_consensus_states?${fm.renderURLSearchParams({
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
    /** ClientState queries an IBC light client. */
    async clientState(req, headers) {
        return Query.clientState(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** ClientStates queries all the IBC light clients of a chain. */
    async clientStates(req, headers) {
        return Query.clientStates(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * ConsensusState queries a consensus state associated with a client state at
     * a given height.
     */
    async consensusState(req, headers) {
        return Query.consensusState(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * ConsensusStates queries all the consensus state associated with a given
     * client.
     */
    async consensusStates(req, headers) {
        return Query.consensusStates(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Status queries the status of an IBC client. */
    async clientStatus(req, headers) {
        return Query.clientStatus(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** ClientParams queries all parameters of the ibc client. */
    async clientParams(req, headers) {
        return Query.clientParams(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** UpgradedClientState queries an Upgraded IBC light client. */
    async upgradedClientState(req, headers) {
        return Query.upgradedClientState(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** UpgradedConsensusState queries an Upgraded IBC consensus state. */
    async upgradedConsensusState(req, headers) {
        return Query.upgradedConsensusState(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.rpc.Query.js.map