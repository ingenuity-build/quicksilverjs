import * as fm from "../../../grpc-gateway";
export class Query {
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
export class QueryClientImpl {
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
//# sourceMappingURL=query.rpc.Query.js.map