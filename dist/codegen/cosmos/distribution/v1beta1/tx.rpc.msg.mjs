import * as fm from "../../../grpc-gateway";
export class Msg {
    /**
     * SetWithdrawAddress defines a method to change the withdraw address
     * for a delegator (or validator self-delegation).
     */
    static setWithdrawAddress(request, initRequest) {
        return fm.fetchReq(`/cosmos.distribution.v1beta1/setWithdrawAddress`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
     * from a single validator.
     */
    static withdrawDelegatorReward(request, initRequest) {
        return fm.fetchReq(`/cosmos.distribution.v1beta1/withdrawDelegatorReward`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * WithdrawValidatorCommission defines a method to withdraw the
     * full commission to the validator address.
     */
    static withdrawValidatorCommission(request, initRequest) {
        return fm.fetchReq(`/cosmos.distribution.v1beta1/withdrawValidatorCommission`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * FundCommunityPool defines a method to allow an account to directly
     * fund the community pool.
     */
    static fundCommunityPool(request, initRequest) {
        return fm.fetchReq(`/cosmos.distribution.v1beta1/fundCommunityPool`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map