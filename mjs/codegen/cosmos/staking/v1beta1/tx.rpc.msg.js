import * as fm from "../../../grpc-gateway";
export class Msg {
    /** CreateValidator defines a method for creating a new validator. */
    static createValidator(request, initRequest) {
        return fm.fetchReq(`/cosmos.staking.v1beta1/createValidator`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** EditValidator defines a method for editing an existing validator. */
    static editValidator(request, initRequest) {
        return fm.fetchReq(`/cosmos.staking.v1beta1/editValidator`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * Delegate defines a method for performing a delegation of coins
     * from a delegator to a validator.
     */
    static delegate(request, initRequest) {
        return fm.fetchReq(`/cosmos.staking.v1beta1/delegate`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * BeginRedelegate defines a method for performing a redelegation
     * of coins from a delegator and source validator to a destination validator.
     */
    static beginRedelegate(request, initRequest) {
        return fm.fetchReq(`/cosmos.staking.v1beta1/beginRedelegate`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * Undelegate defines a method for performing an undelegation from a
     * delegate and a validator.
     */
    static undelegate(request, initRequest) {
        return fm.fetchReq(`/cosmos.staking.v1beta1/undelegate`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static tokenizeShares(request, initRequest) {
        return fm.fetchReq(`/cosmos.staking.v1beta1/tokenizeShares`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static redeemTokensForShares(request, initRequest) {
        return fm.fetchReq(`/cosmos.staking.v1beta1/redeemTokensForShares`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static disableTokenizeShares(request, initRequest) {
        return fm.fetchReq(`/cosmos.staking.v1beta1/disableTokenizeShares`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static enableTokenizeShares(request, initRequest) {
        return fm.fetchReq(`/cosmos.staking.v1beta1/enableTokenizeShares`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map