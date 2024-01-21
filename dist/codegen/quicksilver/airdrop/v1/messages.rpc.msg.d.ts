import * as fm from "../../../grpc-gateway";
import { MsgClaim, MsgClaimResponse, MsgIncentivePoolSpend, MsgIncentivePoolSpendResponse } from "./messages";
export declare class Msg {
    static claim(request: MsgClaim, initRequest?: fm.InitReq): Promise<MsgClaimResponse>;
    static incentivePoolSpend(request: MsgIncentivePoolSpend, initRequest?: fm.InitReq): Promise<MsgIncentivePoolSpendResponse>;
}
