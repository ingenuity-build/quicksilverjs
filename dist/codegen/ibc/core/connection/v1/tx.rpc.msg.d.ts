import * as fm from "../../../../grpc-gateway";
import { MsgConnectionOpenInit, MsgConnectionOpenInitResponse, MsgConnectionOpenTry, MsgConnectionOpenTryResponse, MsgConnectionOpenAck, MsgConnectionOpenAckResponse, MsgConnectionOpenConfirm, MsgConnectionOpenConfirmResponse } from "./tx";
export declare class Msg {
    /** ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit. */
    static connectionOpenInit(request: MsgConnectionOpenInit, initRequest?: fm.InitReq): Promise<MsgConnectionOpenInitResponse>;
    /** ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry. */
    static connectionOpenTry(request: MsgConnectionOpenTry, initRequest?: fm.InitReq): Promise<MsgConnectionOpenTryResponse>;
    /** ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck. */
    static connectionOpenAck(request: MsgConnectionOpenAck, initRequest?: fm.InitReq): Promise<MsgConnectionOpenAckResponse>;
    /**
     * ConnectionOpenConfirm defines a rpc handler method for
     * MsgConnectionOpenConfirm.
     */
    static connectionOpenConfirm(request: MsgConnectionOpenConfirm, initRequest?: fm.InitReq): Promise<MsgConnectionOpenConfirmResponse>;
}
