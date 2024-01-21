import * as fm from "../../../grpc-gateway";
import { MsgSubmitQueryResponse, MsgSubmitQueryResponseResponse } from "./messages";
export declare class Msg {
    /** SubmitQueryResponse defines a method for submit query responses. */
    static submitQueryResponse(request: MsgSubmitQueryResponse, initRequest?: fm.InitReq): Promise<MsgSubmitQueryResponseResponse>;
}
