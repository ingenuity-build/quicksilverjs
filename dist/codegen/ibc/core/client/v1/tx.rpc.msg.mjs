import * as fm from "../../../../grpc-gateway";
export class Msg {
    /** CreateClient defines a rpc handler method for MsgCreateClient. */
    static createClient(request, initRequest) {
        return fm.fetchReq(`/ibc.core.client.v1/createClient`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** UpdateClient defines a rpc handler method for MsgUpdateClient. */
    static updateClient(request, initRequest) {
        return fm.fetchReq(`/ibc.core.client.v1/updateClient`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** UpgradeClient defines a rpc handler method for MsgUpgradeClient. */
    static upgradeClient(request, initRequest) {
        return fm.fetchReq(`/ibc.core.client.v1/upgradeClient`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour. */
    static submitMisbehaviour(request, initRequest) {
        return fm.fetchReq(`/ibc.core.client.v1/submitMisbehaviour`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map