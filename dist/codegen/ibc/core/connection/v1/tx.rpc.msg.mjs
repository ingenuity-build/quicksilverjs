import * as fm from "../../../../grpc-gateway";
export class Msg {
    /** ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit. */
    static connectionOpenInit(request, initRequest) {
        return fm.fetchReq(`/ibc.core.connection.v1/connectionOpenInit`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry. */
    static connectionOpenTry(request, initRequest) {
        return fm.fetchReq(`/ibc.core.connection.v1/connectionOpenTry`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck. */
    static connectionOpenAck(request, initRequest) {
        return fm.fetchReq(`/ibc.core.connection.v1/connectionOpenAck`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * ConnectionOpenConfirm defines a rpc handler method for
     * MsgConnectionOpenConfirm.
     */
    static connectionOpenConfirm(request, initRequest) {
        return fm.fetchReq(`/ibc.core.connection.v1/connectionOpenConfirm`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map