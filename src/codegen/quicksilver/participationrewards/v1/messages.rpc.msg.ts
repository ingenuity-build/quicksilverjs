import * as fm from "../../../grpc-gateway";
import { MsgSubmitClaim, MsgSubmitClaimResponse } from "./messages";
import { MsgGovRemoveProtocolData, MsgGovRemoveProtocolDataResponse } from "./proposals";
export class Msg {
  static submitClaim(request: MsgSubmitClaim, initRequest?: fm.InitReq): Promise<MsgSubmitClaimResponse> {
    return fm.fetchReq(`/quicksilver.participationrewards.v1/submitClaim`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /**
   * SignalIntent defines a method for signalling voting intent for one or more
   * validators.
   */
  static govRemoveProtocolData(request: MsgGovRemoveProtocolData, initRequest?: fm.InitReq): Promise<MsgGovRemoveProtocolDataResponse> {
    return fm.fetchReq(`/quicksilver.participationrewards.v1/govRemoveProtocolData`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}