import * as fm from "../../../grpc-gateway";
export class Query {
    /** Params queries params of the distribution module. */
    static params(request, initRequest) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/params?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** ValidatorOutstandingRewards queries rewards of a validator address. */
    static validatorOutstandingRewards(request, initRequest) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/validators/${request["validator_address"]}/outstanding_rewards?${fm.renderURLSearchParams({
            ...request
        }, ["validator_address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** ValidatorCommission queries accumulated commission for a validator. */
    static validatorCommission(request, initRequest) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/validators/${request["validator_address"]}/commission?${fm.renderURLSearchParams({
            ...request
        }, ["validator_address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** ValidatorSlashes queries slash events of a validator. */
    static validatorSlashes(request, initRequest) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/validators/${request["validator_address"]}/slashes?${fm.renderURLSearchParams({
            ...request
        }, ["validator_address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** DelegationRewards queries the total rewards accrued by a delegation. */
    static delegationRewards(request, initRequest) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/delegators/${request["delegator_address"]}/rewards/${request["validator_address"]}?${fm.renderURLSearchParams({
            ...request
        }, ["delegator_address", "validator_address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * DelegationTotalRewards queries the total rewards accrued by a each
     * validator.
     */
    static delegationTotalRewards(request, initRequest) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/delegators/${request["delegator_address"]}/rewards?${fm.renderURLSearchParams({
            ...request
        }, ["delegator_address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** DelegatorValidators queries the validators of a delegator. */
    static delegatorValidators(request, initRequest) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/delegators/${request["delegator_address"]}/validators?${fm.renderURLSearchParams({
            ...request
        }, ["delegator_address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
    static delegatorWithdrawAddress(request, initRequest) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/delegators/${request["delegator_address"]}/withdraw_address?${fm.renderURLSearchParams({
            ...request
        }, ["delegator_address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** CommunityPool queries the community pool coins. */
    static communityPool(request, initRequest) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/community_pool?${fm.renderURLSearchParams({
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
    /** Params queries params of the distribution module. */
    async params(req, headers) {
        return Query.params(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** ValidatorOutstandingRewards queries rewards of a validator address. */
    async validatorOutstandingRewards(req, headers) {
        return Query.validatorOutstandingRewards(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** ValidatorCommission queries accumulated commission for a validator. */
    async validatorCommission(req, headers) {
        return Query.validatorCommission(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** ValidatorSlashes queries slash events of a validator. */
    async validatorSlashes(req, headers) {
        return Query.validatorSlashes(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** DelegationRewards queries the total rewards accrued by a delegation. */
    async delegationRewards(req, headers) {
        return Query.delegationRewards(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * DelegationTotalRewards queries the total rewards accrued by a each
     * validator.
     */
    async delegationTotalRewards(req, headers) {
        return Query.delegationTotalRewards(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** DelegatorValidators queries the validators of a delegator. */
    async delegatorValidators(req, headers) {
        return Query.delegatorValidators(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
    async delegatorWithdrawAddress(req, headers) {
        return Query.delegatorWithdrawAddress(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** CommunityPool queries the community pool coins. */
    async communityPool(req, headers) {
        return Query.communityPool(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map