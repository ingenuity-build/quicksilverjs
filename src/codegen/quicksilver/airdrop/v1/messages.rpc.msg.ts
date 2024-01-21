import * as fm from "../../../grpc-gateway";
import { MsgClaim, MsgClaimResponse, MsgIncentivePoolSpend, MsgIncentivePoolSpendResponse } from "./messages";
export class Msg {
  static claim(request: MsgClaim, initRequest?: fm.InitReq): Promise<MsgClaimResponse> {
    return fm.fetchReq(`/quicksilver.airdrop.v1/claim`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static incentivePoolSpend(request: MsgIncentivePoolSpend, initRequest?: fm.InitReq): Promise<MsgIncentivePoolSpendResponse> {
    return fm.fetchReq(`/quicksilver.airdrop.v1/incentivePoolSpend`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}