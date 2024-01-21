import * as fm from "../../../../grpc-gateway";
import { MsgChannelOpenInit, MsgChannelOpenInitResponse, MsgChannelOpenTry, MsgChannelOpenTryResponse, MsgChannelOpenAck, MsgChannelOpenAckResponse, MsgChannelOpenConfirm, MsgChannelOpenConfirmResponse, MsgChannelCloseInit, MsgChannelCloseInitResponse, MsgChannelCloseConfirm, MsgChannelCloseConfirmResponse, MsgRecvPacket, MsgRecvPacketResponse, MsgTimeout, MsgTimeoutResponse, MsgTimeoutOnClose, MsgTimeoutOnCloseResponse, MsgAcknowledgement, MsgAcknowledgementResponse } from "./tx";
export declare class Msg {
    /** ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. */
    static channelOpenInit(request: MsgChannelOpenInit, initRequest?: fm.InitReq): Promise<MsgChannelOpenInitResponse>;
    /** ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry. */
    static channelOpenTry(request: MsgChannelOpenTry, initRequest?: fm.InitReq): Promise<MsgChannelOpenTryResponse>;
    /** ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck. */
    static channelOpenAck(request: MsgChannelOpenAck, initRequest?: fm.InitReq): Promise<MsgChannelOpenAckResponse>;
    /** ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm. */
    static channelOpenConfirm(request: MsgChannelOpenConfirm, initRequest?: fm.InitReq): Promise<MsgChannelOpenConfirmResponse>;
    /** ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit. */
    static channelCloseInit(request: MsgChannelCloseInit, initRequest?: fm.InitReq): Promise<MsgChannelCloseInitResponse>;
    /**
     * ChannelCloseConfirm defines a rpc handler method for
     * MsgChannelCloseConfirm.
     */
    static channelCloseConfirm(request: MsgChannelCloseConfirm, initRequest?: fm.InitReq): Promise<MsgChannelCloseConfirmResponse>;
    /** RecvPacket defines a rpc handler method for MsgRecvPacket. */
    static recvPacket(request: MsgRecvPacket, initRequest?: fm.InitReq): Promise<MsgRecvPacketResponse>;
    /** Timeout defines a rpc handler method for MsgTimeout. */
    static timeout(request: MsgTimeout, initRequest?: fm.InitReq): Promise<MsgTimeoutResponse>;
    /** TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose. */
    static timeoutOnClose(request: MsgTimeoutOnClose, initRequest?: fm.InitReq): Promise<MsgTimeoutOnCloseResponse>;
    /** Acknowledgement defines a rpc handler method for MsgAcknowledgement. */
    static acknowledgement(request: MsgAcknowledgement, initRequest?: fm.InitReq): Promise<MsgAcknowledgementResponse>;
}
