import * as fm from "../../../grpc-gateway";
import { MsgSend, MsgSendResponse, MsgMultiSend, MsgMultiSendResponse } from "./tx";
export declare class Msg {
    /** Send defines a method for sending coins from one account to another account. */
    static send(request: MsgSend, initRequest?: fm.InitReq): Promise<MsgSendResponse>;
    /** MultiSend defines a method for sending coins from some accounts to other accounts. */
    static multiSend(request: MsgMultiSend, initRequest?: fm.InitReq): Promise<MsgMultiSendResponse>;
}
