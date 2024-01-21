import * as fm from "../../../grpc-gateway";
export class Query {
    /** Validators queries all validators that match the given status. */
    static validators(request, initRequest) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/validators?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Validator queries validator info for given validator address. */
    static validator(request, initRequest) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${request["validator_addr"]}?${fm.renderURLSearchParams({
            ...request
        }, ["validator_addr"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** ValidatorDelegations queries delegate info for given validator. */
    static validatorDelegations(request, initRequest) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${request["validator_addr"]}/delegations?${fm.renderURLSearchParams({
            ...request
        }, ["validator_addr"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** ValidatorUnbondingDelegations queries unbonding delegations of a validator. */
    static validatorUnbondingDelegations(request, initRequest) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${request["validator_addr"]}/unbonding_delegations?${fm.renderURLSearchParams({
            ...request
        }, ["validator_addr"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Delegation queries delegate info for given validator delegator pair. */
    static delegation(request, initRequest) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${request["validator_addr"]}/delegations/${request["delegator_addr"]}?${fm.renderURLSearchParams({
            ...request
        }, ["validator_addr", "delegator_addr"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * UnbondingDelegation queries unbonding info for given validator delegator
     * pair.
     */
    static unbondingDelegation(request, initRequest) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${request["validator_addr"]}/delegations/${request["delegator_addr"]}/unbonding_delegation?${fm.renderURLSearchParams({
            ...request
        }, ["validator_addr", "delegator_addr"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** DelegatorDelegations queries all delegations of a given delegator address. */
    static delegatorDelegations(request, initRequest) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/delegations/${request["delegator_addr"]}?${fm.renderURLSearchParams({
            ...request
        }, ["delegator_addr"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * DelegatorUnbondingDelegations queries all unbonding delegations of a given
     * delegator address.
     */
    static delegatorUnbondingDelegations(request, initRequest) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/delegators/${request["delegator_addr"]}/unbonding_delegations?${fm.renderURLSearchParams({
            ...request
        }, ["delegator_addr"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Redelegations queries redelegations of given address. */
    static redelegations(request, initRequest) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/delegators/${request["delegator_addr"]}/redelegations?${fm.renderURLSearchParams({
            ...request
        }, ["delegator_addr"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * DelegatorValidators queries all validators info for given delegator
     * address.
     */
    static delegatorValidators(request, initRequest) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/delegators/${request["delegator_addr"]}/validators?${fm.renderURLSearchParams({
            ...request
        }, ["delegator_addr"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * DelegatorValidator queries validator info for given delegator validator
     * pair.
     */
    static delegatorValidator(request, initRequest) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/delegators/${request["delegator_addr"]}/validators/${request["validator_addr"]}?${fm.renderURLSearchParams({
            ...request
        }, ["delegator_addr", "validator_addr"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** HistoricalInfo queries the historical info for given height. */
    static historicalInfo(request, initRequest) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/historical_info/${request["height"]}?${fm.renderURLSearchParams({
            ...request
        }, ["height"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Pool queries the pool info. */
    static pool(request, initRequest) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/pool?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Parameters queries the staking parameters. */
    static params(request, initRequest) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/params?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
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
    /** Validators queries all validators that match the given status. */
    async validators(req, headers) {
        return Query.validators(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Validator queries validator info for given validator address. */
    async validator(req, headers) {
        return Query.validator(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** ValidatorDelegations queries delegate info for given validator. */
    async validatorDelegations(req, headers) {
        return Query.validatorDelegations(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** ValidatorUnbondingDelegations queries unbonding delegations of a validator. */
    async validatorUnbondingDelegations(req, headers) {
        return Query.validatorUnbondingDelegations(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Delegation queries delegate info for given validator delegator pair. */
    async delegation(req, headers) {
        return Query.delegation(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * UnbondingDelegation queries unbonding info for given validator delegator
     * pair.
     */
    async unbondingDelegation(req, headers) {
        return Query.unbondingDelegation(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** DelegatorDelegations queries all delegations of a given delegator address. */
    async delegatorDelegations(req, headers) {
        return Query.delegatorDelegations(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * DelegatorUnbondingDelegations queries all unbonding delegations of a given
     * delegator address.
     */
    async delegatorUnbondingDelegations(req, headers) {
        return Query.delegatorUnbondingDelegations(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Redelegations queries redelegations of given address. */
    async redelegations(req, headers) {
        return Query.redelegations(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * DelegatorValidators queries all validators info for given delegator
     * address.
     */
    async delegatorValidators(req, headers) {
        return Query.delegatorValidators(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * DelegatorValidator queries validator info for given delegator validator
     * pair.
     */
    async delegatorValidator(req, headers) {
        return Query.delegatorValidator(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** HistoricalInfo queries the historical info for given height. */
    async historicalInfo(req, headers) {
        return Query.historicalInfo(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Pool queries the pool info. */
    async pool(req, headers) {
        return Query.pool(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Parameters queries the staking parameters. */
    async params(req, headers) {
        return Query.params(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map