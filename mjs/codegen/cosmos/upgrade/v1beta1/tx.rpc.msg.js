import * as fm from "../../../grpc-gateway";
export class Msg {
    /**
     * SoftwareUpgrade is a governance operation for initiating a software upgrade.
     *
     * Since: cosmos-sdk 0.46
     */
    static softwareUpgrade(request, initRequest) {
        return fm.fetchReq(`/cosmos.upgrade.v1beta1/softwareUpgrade`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * CancelUpgrade is a governance operation for cancelling a previously
     * approvid software upgrade.
     *
     * Since: cosmos-sdk 0.46
     */
    static cancelUpgrade(request, initRequest) {
        return fm.fetchReq(`/cosmos.upgrade.v1beta1/cancelUpgrade`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map