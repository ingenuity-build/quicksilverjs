import * as fm from "../../../grpc-gateway";
export class Msg {
    static submitClaim(request, initRequest) {
        return fm.fetchReq(`/quicksilver.participationrewards.v1/submitClaim`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * SignalIntent defines a method for signalling voting intent for one or more
     * validators.
     */
    static govRemoveProtocolData(request, initRequest) {
        return fm.fetchReq(`/quicksilver.participationrewards.v1/govRemoveProtocolData`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=messages.rpc.msg.js.map