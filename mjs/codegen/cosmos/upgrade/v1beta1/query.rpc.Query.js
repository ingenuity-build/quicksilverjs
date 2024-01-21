import * as fm from "../../../grpc-gateway";
export class Query {
    /** CurrentPlan queries the current upgrade plan. */
    static currentPlan(request, initRequest) {
        return fm.fetchReq(`/cosmos/upgrade/v1beta1/current_plan?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** AppliedPlan queries a previously applied upgrade plan by its name. */
    static appliedPlan(request, initRequest) {
        return fm.fetchReq(`/cosmos/upgrade/v1beta1/applied_plan/${request["name"]}?${fm.renderURLSearchParams({
            ...request
        }, ["name"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * UpgradedConsensusState queries the consensus state that will serve
     * as a trusted kernel for the next version of this chain. It will only be
     * stored at the last height of this chain.
     * UpgradedConsensusState RPC not supported with legacy querier
     * This rpc is deprecated now that IBC has its own replacement
     * (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)
     */
    static upgradedConsensusState(request, initRequest) {
        return fm.fetchReq(`/cosmos/upgrade/v1beta1/upgraded_consensus_state/${request["last_height"]}?${fm.renderURLSearchParams({
            ...request
        }, ["last_height"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * ModuleVersions queries the list of module versions from state.
     *
     * Since: cosmos-sdk 0.43
     */
    static moduleVersions(request, initRequest) {
        return fm.fetchReq(`/cosmos/upgrade/v1beta1/module_versions?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Returns the account with authority to conduct upgrades */
    static authority(request, initRequest) {
        return fm.fetchReq(`/cosmos/upgrade/v1beta1/authority?${fm.renderURLSearchParams({
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
    /** CurrentPlan queries the current upgrade plan. */
    async currentPlan(req, headers) {
        return Query.currentPlan(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** AppliedPlan queries a previously applied upgrade plan by its name. */
    async appliedPlan(req, headers) {
        return Query.appliedPlan(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * UpgradedConsensusState queries the consensus state that will serve
     * as a trusted kernel for the next version of this chain. It will only be
     * stored at the last height of this chain.
     * UpgradedConsensusState RPC not supported with legacy querier
     * This rpc is deprecated now that IBC has its own replacement
     * (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)
     */
    async upgradedConsensusState(req, headers) {
        return Query.upgradedConsensusState(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * ModuleVersions queries the list of module versions from state.
     *
     * Since: cosmos-sdk 0.43
     */
    async moduleVersions(req, headers) {
        return Query.moduleVersions(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Returns the account with authority to conduct upgrades */
    async authority(req, headers) {
        return Query.authority(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map