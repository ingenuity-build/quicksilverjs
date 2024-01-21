import * as fm from "../../../grpc-gateway";
export class Query {
    /** Balance queries the balance of a single coin for a single account. */
    static balance(request, initRequest) {
        return fm.fetchReq(`/cosmos/bank/v1beta1/balances/${request["address"]}/by_denom?${fm.renderURLSearchParams({
            ...request
        }, ["address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** AllBalances queries the balance of all coins for a single account. */
    static allBalances(request, initRequest) {
        return fm.fetchReq(`/cosmos/bank/v1beta1/balances/${request["address"]}?${fm.renderURLSearchParams({
            ...request
        }, ["address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * SpendableBalances queries the spenable balance of all coins for a single
     * account.
     */
    static spendableBalances(request, initRequest) {
        return fm.fetchReq(`/cosmos/bank/v1beta1/spendable_balances/${request["address"]}?${fm.renderURLSearchParams({
            ...request
        }, ["address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** TotalSupply queries the total supply of all coins. */
    static totalSupply(request, initRequest) {
        return fm.fetchReq(`/cosmos/bank/v1beta1/supply?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** SupplyOf queries the supply of a single coin. */
    static supplyOf(request, initRequest) {
        return fm.fetchReq(`/cosmos/bank/v1beta1/supply/by_denom?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Params queries the parameters of x/bank module. */
    static params(request, initRequest) {
        return fm.fetchReq(`/cosmos/bank/v1beta1/params?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** DenomsMetadata queries the client metadata of a given coin denomination. */
    static denomMetadata(request, initRequest) {
        return fm.fetchReq(`/cosmos/bank/v1beta1/denoms_metadata/${request["denom"]}?${fm.renderURLSearchParams({
            ...request
        }, ["denom"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * DenomsMetadata queries the client metadata for all registered coin
     * denominations.
     */
    static denomsMetadata(request, initRequest) {
        return fm.fetchReq(`/cosmos/bank/v1beta1/denoms_metadata?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * DenomOwners queries for all account addresses that own a particular token
     * denomination.
     */
    static denomOwners(request, initRequest) {
        return fm.fetchReq(`/cosmos/bank/v1beta1/denom_owners/${request["denom"]}?${fm.renderURLSearchParams({
            ...request
        }, ["denom"])}`, {
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
    /** Balance queries the balance of a single coin for a single account. */
    async balance(req, headers) {
        return Query.balance(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** AllBalances queries the balance of all coins for a single account. */
    async allBalances(req, headers) {
        return Query.allBalances(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * SpendableBalances queries the spenable balance of all coins for a single
     * account.
     */
    async spendableBalances(req, headers) {
        return Query.spendableBalances(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** TotalSupply queries the total supply of all coins. */
    async totalSupply(req, headers) {
        return Query.totalSupply(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** SupplyOf queries the supply of a single coin. */
    async supplyOf(req, headers) {
        return Query.supplyOf(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Params queries the parameters of x/bank module. */
    async params(req, headers) {
        return Query.params(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** DenomsMetadata queries the client metadata of a given coin denomination. */
    async denomMetadata(req, headers) {
        return Query.denomMetadata(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * DenomsMetadata queries the client metadata for all registered coin
     * denominations.
     */
    async denomsMetadata(req, headers) {
        return Query.denomsMetadata(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * DenomOwners queries for all account addresses that own a particular token
     * denomination.
     */
    async denomOwners(req, headers) {
        return Query.denomOwners(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map