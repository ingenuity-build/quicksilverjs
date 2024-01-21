import * as fm from "../../../grpc-gateway";
export class Msg {
    /** Send defines a method for sending coins from one account to another account. */
    static send(request, initRequest) {
        return fm.fetchReq(`/cosmos.bank.v1beta1/send`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** MultiSend defines a method for sending coins from some accounts to other accounts. */
    static multiSend(request, initRequest) {
        return fm.fetchReq(`/cosmos.bank.v1beta1/multiSend`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map