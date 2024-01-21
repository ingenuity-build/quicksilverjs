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
    /** Zones provides meta data on connected zones. */
    static zones(request, initRequest) {
        return fm.fetchReq(`/quicksilver/interchainstaking/v1/zones?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Zone provides meta data on a specific zone. */
    static zone(request, initRequest) {
        return fm.fetchReq(`/quicksilver/interchainstaking/v1/zone/${request["chain_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["chain_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    static zoneValidators(request, initRequest) {
        return fm.fetchReq(`/quicksilver/interchainstaking/v1/zones/${request["chain_id"]}/validators?${fm.renderURLSearchParams({
            ...request
        }, ["chain_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** DepositAccount provides data on the deposit address for a connected zone. */
    static depositAccount(request, initRequest) {
        return fm.fetchReq(`/quicksilver/interchainstaking/v1/zones/${request["chain_id"]}/deposit_address?${fm.renderURLSearchParams({
            ...request
        }, ["chain_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * DelegatorIntent provides data on the intent of the delegator for the given
     * zone.
     */
    static delegatorIntent(request, initRequest) {
        return fm.fetchReq(`/quicksilver/interchainstaking/v1/zones/${request["chain_id"]}/delegator_intent/${request["delegator_address"]}?${fm.renderURLSearchParams({
            ...request
        }, ["chain_id", "delegator_address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** DelegatorIntents provides data on the intent of the delegator for all zones */
    static delegatorIntents(request, initRequest) {
        return fm.fetchReq(`/quicksilver/interchainstaking/v1/delegator_intents/${request["delegator_address"]}?${fm.renderURLSearchParams({
            ...request
        }, ["delegator_address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Delegations provides data on the delegations for the given zone. */
    static delegations(request, initRequest) {
        return fm.fetchReq(`/quicksilver/interchainstaking/v1/zones/${request["chain_id"]}/delegations?${fm.renderURLSearchParams({
            ...request
        }, ["chain_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Delegations provides data on the delegations for the given zone. */
    static receipts(request, initRequest) {
        return fm.fetchReq(`/quicksilver/interchainstaking/v1/zones/${request["chain_id"]}/receipts?${fm.renderURLSearchParams({
            ...request
        }, ["chain_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    static txStatus(request, initRequest) {
        return fm.fetchReq(`/quicksilver/interchainstaking/v1/zones/${request["chain_id"]}/deposits/${request["tx_hash"]}?${fm.renderURLSearchParams({
            ...request
        }, ["chain_id", "tx_hash"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** WithdrawalRecords provides data on the active withdrawals. */
    static zoneWithdrawalRecords(request, initRequest) {
        return fm.fetchReq(`/quicksilver/interchainstaking/v1/zones/${request["chain_id"]}/withdrawal_records/${request["delegator_address"]}?${fm.renderURLSearchParams({
            ...request
        }, ["chain_id", "delegator_address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** WithdrawalRecords provides data on the active withdrawals. */
    static withdrawalRecords(request, initRequest) {
        return fm.fetchReq(`/quicksilver/interchainstaking/v1/zones/${request["chain_id"]}/withdrawal_records?${fm.renderURLSearchParams({
            ...request
        }, ["chain_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** WithdrawalRecords provides data on the active withdrawals. */
    static userWithdrawalRecords(request, initRequest) {
        return fm.fetchReq(`/quicksilver/interchainstaking/v1/users/${request["user_address"]}/withdrawal_records?${fm.renderURLSearchParams({
            ...request
        }, ["user_address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** UnbondingRecords provides data on the active unbondings. */
    static unbondingRecords(request, initRequest) {
        return fm.fetchReq(`/quicksilver/interchainstaking/v1/zones/${request["chain_id"]}/unbonding_records?${fm.renderURLSearchParams({
            ...request
        }, ["chain_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** RedelegationRecords provides data on the active unbondings. */
    static redelegationRecords(request, initRequest) {
        return fm.fetchReq(`/quicksilver/interchainstaking/v1/zones/${request["chain_id"]}/redelegation_records?${fm.renderURLSearchParams({
            ...request
        }, ["chain_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** MappedAccounts provides data on the mapped accounts for a given user over different host chains. */
    static mappedAccounts(request, initRequest) {
        return fm.fetchReq(`/quicksilver/interchainstaking/v1/mapped_addresses/${request["address"]}?${fm.renderURLSearchParams({
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
    /** Zones provides meta data on connected zones. */
    async zones(req, headers) {
        return Query.zones(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Zone provides meta data on a specific zone. */
    async zone(req, headers) {
        return Query.zone(req, {
            headers,
            pathPrefix: this.url
        });
    }
    async zoneValidators(req, headers) {
        return Query.zoneValidators(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** DepositAccount provides data on the deposit address for a connected zone. */
    async depositAccount(req, headers) {
        return Query.depositAccount(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * DelegatorIntent provides data on the intent of the delegator for the given
     * zone.
     */
    async delegatorIntent(req, headers) {
        return Query.delegatorIntent(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** DelegatorIntents provides data on the intent of the delegator for all zones */
    async delegatorIntents(req, headers) {
        return Query.delegatorIntents(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Delegations provides data on the delegations for the given zone. */
    async delegations(req, headers) {
        return Query.delegations(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Delegations provides data on the delegations for the given zone. */
    async receipts(req, headers) {
        return Query.receipts(req, {
            headers,
            pathPrefix: this.url
        });
    }
    async txStatus(req, headers) {
        return Query.txStatus(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** WithdrawalRecords provides data on the active withdrawals. */
    async zoneWithdrawalRecords(req, headers) {
        return Query.zoneWithdrawalRecords(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** WithdrawalRecords provides data on the active withdrawals. */
    async withdrawalRecords(req, headers) {
        return Query.withdrawalRecords(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** WithdrawalRecords provides data on the active withdrawals. */
    async userWithdrawalRecords(req, headers) {
        return Query.userWithdrawalRecords(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** UnbondingRecords provides data on the active unbondings. */
    async unbondingRecords(req, headers) {
        return Query.unbondingRecords(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** RedelegationRecords provides data on the active unbondings. */
    async redelegationRecords(req, headers) {
        return Query.redelegationRecords(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** MappedAccounts provides data on the mapped accounts for a given user over different host chains. */
    async mappedAccounts(req, headers) {
        return Query.mappedAccounts(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.rpc.Query.js.map