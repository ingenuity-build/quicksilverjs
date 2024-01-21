import * as fm from "../../../grpc-gateway";
export class Query {
    /** Proposal queries proposal details based on ProposalID. */
    static proposal(request, initRequest) {
        return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${request["proposal_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["proposal_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Proposals queries all proposals based on given status. */
    static proposals(request, initRequest) {
        return fm.fetchReq(`/cosmos/gov/v1beta1/proposals?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Vote queries voted information based on proposalID, voterAddr. */
    static vote(request, initRequest) {
        return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${request["proposal_id"]}/votes/${request["voter"]}?${fm.renderURLSearchParams({
            ...request
        }, ["proposal_id", "voter"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Votes queries votes of a given proposal. */
    static votes(request, initRequest) {
        return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${request["proposal_id"]}/votes?${fm.renderURLSearchParams({
            ...request
        }, ["proposal_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Params queries all parameters of the gov module. */
    static params(request, initRequest) {
        return fm.fetchReq(`/cosmos/gov/v1beta1/params/${request["params_type"]}?${fm.renderURLSearchParams({
            ...request
        }, ["params_type"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Deposit queries single deposit information based proposalID, depositAddr. */
    static deposit(request, initRequest) {
        return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${request["proposal_id"]}/deposits/${request["depositor"]}?${fm.renderURLSearchParams({
            ...request
        }, ["proposal_id", "depositor"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Deposits queries all deposits of a single proposal. */
    static deposits(request, initRequest) {
        return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${request["proposal_id"]}/deposits?${fm.renderURLSearchParams({
            ...request
        }, ["proposal_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** TallyResult queries the tally of a proposal vote. */
    static tallyResult(request, initRequest) {
        return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${request["proposal_id"]}/tally?${fm.renderURLSearchParams({
            ...request
        }, ["proposal_id"])}`, {
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
    /** Proposal queries proposal details based on ProposalID. */
    async proposal(req, headers) {
        return Query.proposal(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Proposals queries all proposals based on given status. */
    async proposals(req, headers) {
        return Query.proposals(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Vote queries voted information based on proposalID, voterAddr. */
    async vote(req, headers) {
        return Query.vote(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Votes queries votes of a given proposal. */
    async votes(req, headers) {
        return Query.votes(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Params queries all parameters of the gov module. */
    async params(req, headers) {
        return Query.params(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Deposit queries single deposit information based proposalID, depositAddr. */
    async deposit(req, headers) {
        return Query.deposit(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Deposits queries all deposits of a single proposal. */
    async deposits(req, headers) {
        return Query.deposits(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** TallyResult queries the tally of a proposal vote. */
    async tallyResult(req, headers) {
        return Query.tallyResult(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map