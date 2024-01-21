import * as fm from "../../../grpc-gateway";
export class Query {
    /**
     * Accounts returns all the existing accounts
     *
     * Since: cosmos-sdk 0.43
     */
    static accounts(request, initRequest) {
        return fm.fetchReq(`/cosmos/auth/v1beta1/accounts?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Account returns account details based on address. */
    static account(request, initRequest) {
        return fm.fetchReq(`/cosmos/auth/v1beta1/accounts/${request["address"]}?${fm.renderURLSearchParams({
            ...request
        }, ["address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Params queries all parameters. */
    static params(request, initRequest) {
        return fm.fetchReq(`/cosmos/auth/v1beta1/params?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** ModuleAccounts returns all the existing module accounts. */
    static moduleAccounts(request, initRequest) {
        return fm.fetchReq(`/cosmos/auth/v1beta1/module_accounts?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Bech32 queries bech32Prefix */
    static bech32Prefix(request, initRequest) {
        return fm.fetchReq(`/cosmos/auth/v1beta1/bech32?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** AddressBytesToString converts Account Address bytes to string */
    static addressBytesToString(request, initRequest) {
        return fm.fetchReq(`/cosmos/auth/v1beta1/bech32/${request["address_bytes"]}?${fm.renderURLSearchParams({
            ...request
        }, ["address_bytes"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** AddressStringToBytes converts Address string to bytes */
    static addressStringToBytes(request, initRequest) {
        return fm.fetchReq(`/cosmos/auth/v1beta1/bech32/${request["address_string"]}?${fm.renderURLSearchParams({
            ...request
        }, ["address_string"])}`, {
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
    /**
     * Accounts returns all the existing accounts
     *
     * Since: cosmos-sdk 0.43
     */
    async accounts(req, headers) {
        return Query.accounts(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Account returns account details based on address. */
    async account(req, headers) {
        return Query.account(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Params queries all parameters. */
    async params(req, headers) {
        return Query.params(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** ModuleAccounts returns all the existing module accounts. */
    async moduleAccounts(req, headers) {
        return Query.moduleAccounts(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Bech32 queries bech32Prefix */
    async bech32Prefix(req, headers) {
        return Query.bech32Prefix(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** AddressBytesToString converts Account Address bytes to string */
    async addressBytesToString(req, headers) {
        return Query.addressBytesToString(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** AddressStringToBytes converts Address string to bytes */
    async addressStringToBytes(req, headers) {
        return Query.addressStringToBytes(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map