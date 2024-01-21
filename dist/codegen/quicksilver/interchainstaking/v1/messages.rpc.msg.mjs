import * as fm from "../../../grpc-gateway";
export class Msg {
    /**
     * RequestRedemption defines a method for requesting burning of qAssets for
     * native assets.
     */
    static requestRedemption(request, initRequest) {
        return fm.fetchReq(`/quicksilver.interchainstaking.v1/requestRedemption`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * SignalIntent defines a method for signalling voting intent for one or more
     * validators.
     */
    static signalIntent(request, initRequest) {
        return fm.fetchReq(`/quicksilver.interchainstaking.v1/signalIntent`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * SignalIntent defines a method for signalling voting intent for one or more
     * validators.
     */
    static govCloseChannel(request, initRequest) {
        return fm.fetchReq(`/quicksilver.interchainstaking.v1/govCloseChannel`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static govReopenChannel(request, initRequest) {
        return fm.fetchReq(`/quicksilver.interchainstaking.v1/govReopenChannel`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static govSetLsmCaps(request, initRequest) {
        return fm.fetchReq(`/quicksilver.interchainstaking.v1/govSetLsmCaps`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=messages.rpc.msg.js.map