import * as fm from "../../../../grpc-gateway";
export class Msg {
    /** Transfer defines a rpc handler method for MsgTransfer. */
    static transfer(request, initRequest) {
        return fm.fetchReq(`/ibc.applications.transfer.v1/transfer`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map