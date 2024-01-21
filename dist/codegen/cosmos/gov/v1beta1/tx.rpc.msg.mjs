import * as fm from "../../../grpc-gateway";
export class Msg {
    /** SubmitProposal defines a method to create new proposal given a content. */
    static submitProposal(request, initRequest) {
        return fm.fetchReq(`/cosmos.gov.v1beta1/submitProposal`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** Vote defines a method to add a vote on a specific proposal. */
    static vote(request, initRequest) {
        return fm.fetchReq(`/cosmos.gov.v1beta1/vote`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * VoteWeighted defines a method to add a weighted vote on a specific proposal.
     *
     * Since: cosmos-sdk 0.43
     */
    static voteWeighted(request, initRequest) {
        return fm.fetchReq(`/cosmos.gov.v1beta1/voteWeighted`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** Deposit defines a method to add deposit on a specific proposal. */
    static deposit(request, initRequest) {
        return fm.fetchReq(`/cosmos.gov.v1beta1/deposit`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map