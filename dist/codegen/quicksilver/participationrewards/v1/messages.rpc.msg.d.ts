import * as fm from "../../../grpc-gateway";
import { MsgSubmitClaim, MsgSubmitClaimResponse } from "./messages";
import { MsgGovRemoveProtocolData, MsgGovRemoveProtocolDataResponse } from "./proposals";
export declare class Msg {
    static submitClaim(request: MsgSubmitClaim, initRequest?: fm.InitReq): Promise<MsgSubmitClaimResponse>;
    /**
     * SignalIntent defines a method for signalling voting intent for one or more
     * validators.
     */
    static govRemoveProtocolData(request: MsgGovRemoveProtocolData, initRequest?: fm.InitReq): Promise<MsgGovRemoveProtocolDataResponse>;
}
