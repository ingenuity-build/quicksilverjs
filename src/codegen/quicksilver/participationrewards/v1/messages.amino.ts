//@ts-nocheck
import { MsgSubmitClaim } from "./messages";
import { MsgGovRemoveProtocolData } from "./proposals";
export const AminoConverter = {
  "/quicksilver.participationrewards.v1.MsgSubmitClaim": {
    aminoType: "quicksilver/MsgSubmitClaim",
    toAmino: MsgSubmitClaim.toAmino,
    fromAmino: MsgSubmitClaim.fromAmino
  },
  "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData": {
    aminoType: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData",
    toAmino: MsgGovRemoveProtocolData.toAmino,
    fromAmino: MsgGovRemoveProtocolData.fromAmino
  }
};