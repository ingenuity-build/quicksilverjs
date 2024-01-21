import * as fm from "../../../../grpc-gateway";
import { MsgTransfer, MsgTransferResponse } from "./tx";
export declare class Msg {
    /** Transfer defines a rpc handler method for MsgTransfer. */
    static transfer(request: MsgTransfer, initRequest?: fm.InitReq): Promise<MsgTransferResponse>;
}
