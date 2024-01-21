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
    /** Params returns the total set of airdrop parameters. */
    static params(request, initRequest) {
        return fm.fetchReq(`/quicksilver/airdrop/v1/params?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** ZoneDrop returns the details of the specified zone airdrop. */
    static zoneDrop(request, initRequest) {
        return fm.fetchReq(`/quicksilver/airdrop/v1/zonedrop/${request["chain_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["chain_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** AccountBalance returns the module account balance of the specified zone. */
    static accountBalance(request, initRequest) {
        return fm.fetchReq(`/quicksilver/airdrop/v1/accountbalance/${request["chain_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["chain_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** ZoneDrops returns all zone airdrops of the specified status. */
    static zoneDrops(request, initRequest) {
        return fm.fetchReq(`/quicksilver/airdrop/v1/zonedrops/${request["status"]}?${fm.renderURLSearchParams({
            ...request
        }, ["status"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * ClaimRecord returns the claim record that corresponds to the given zone and
     * address.
     */
    static claimRecord(request, initRequest) {
        return fm.fetchReq(`/quicksilver/airdrop/v1/claimrecord/${request["chain_id"]}/${request["address"]}?${fm.renderURLSearchParams({
            ...request
        }, ["chain_id", "address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** ClaimRecords returns all the claim records of the given zone. */
    static claimRecords(request, initRequest) {
        return fm.fetchReq(`/quicksilver/airdrop/v1/claimrecords/${request["chain_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["chain_id"])}`, {
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
    /** Params returns the total set of airdrop parameters. */
    async params(req, headers) {
        return Query.params(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** ZoneDrop returns the details of the specified zone airdrop. */
    async zoneDrop(req, headers) {
        return Query.zoneDrop(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** AccountBalance returns the module account balance of the specified zone. */
    async accountBalance(req, headers) {
        return Query.accountBalance(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** ZoneDrops returns all zone airdrops of the specified status. */
    async zoneDrops(req, headers) {
        return Query.zoneDrops(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * ClaimRecord returns the claim record that corresponds to the given zone and
     * address.
     */
    async claimRecord(req, headers) {
        return Query.claimRecord(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** ClaimRecords returns all the claim records of the given zone. */
    async claimRecords(req, headers) {
        return Query.claimRecords(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.rpc.Query.js.map