"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Msg = void 0;
const fm = __importStar(require("../../../../grpc-gateway"));
class Msg {
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
exports.Msg = Msg;
//# sourceMappingURL=tx.rpc.msg.js.map