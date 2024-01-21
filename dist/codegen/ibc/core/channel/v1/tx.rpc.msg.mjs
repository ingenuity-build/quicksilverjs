import * as fm from "../../../../grpc-gateway";
export class Msg {
    /** ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. */
    static channelOpenInit(request, initRequest) {
        return fm.fetchReq(`/ibc.core.channel.v1/channelOpenInit`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry. */
    static channelOpenTry(request, initRequest) {
        return fm.fetchReq(`/ibc.core.channel.v1/channelOpenTry`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck. */
    static channelOpenAck(request, initRequest) {
        return fm.fetchReq(`/ibc.core.channel.v1/channelOpenAck`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm. */
    static channelOpenConfirm(request, initRequest) {
        return fm.fetchReq(`/ibc.core.channel.v1/channelOpenConfirm`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit. */
    static channelCloseInit(request, initRequest) {
        return fm.fetchReq(`/ibc.core.channel.v1/channelCloseInit`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * ChannelCloseConfirm defines a rpc handler method for
     * MsgChannelCloseConfirm.
     */
    static channelCloseConfirm(request, initRequest) {
        return fm.fetchReq(`/ibc.core.channel.v1/channelCloseConfirm`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** RecvPacket defines a rpc handler method for MsgRecvPacket. */
    static recvPacket(request, initRequest) {
        return fm.fetchReq(`/ibc.core.channel.v1/recvPacket`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** Timeout defines a rpc handler method for MsgTimeout. */
    static timeout(request, initRequest) {
        return fm.fetchReq(`/ibc.core.channel.v1/timeout`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose. */
    static timeoutOnClose(request, initRequest) {
        return fm.fetchReq(`/ibc.core.channel.v1/timeoutOnClose`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** Acknowledgement defines a rpc handler method for MsgAcknowledgement. */
    static acknowledgement(request, initRequest) {
        return fm.fetchReq(`/ibc.core.channel.v1/acknowledgement`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map