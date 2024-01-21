//@ts-nocheck
import { MsgRequestRedemption, MsgSignalIntent } from "./messages";
import { MsgGovCloseChannel, MsgGovReopenChannel, MsgGovSetLsmCaps } from "./proposals";
export const AminoConverter = {
  "/quicksilver.interchainstaking.v1.MsgRequestRedemption": {
    aminoType: "quicksilver/MsgRequestRedemption",
    toAmino: MsgRequestRedemption.toAmino,
    fromAmino: MsgRequestRedemption.fromAmino
  },
  "/quicksilver.interchainstaking.v1.MsgSignalIntent": {
    aminoType: "quicksilver/MsgSignalIntent",
    toAmino: MsgSignalIntent.toAmino,
    fromAmino: MsgSignalIntent.fromAmino
  },
  "/quicksilver.interchainstaking.v1.MsgGovCloseChannel": {
    aminoType: "/quicksilver.interchainstaking.v1.MsgGovCloseChannel",
    toAmino: MsgGovCloseChannel.toAmino,
    fromAmino: MsgGovCloseChannel.fromAmino
  },
  "/quicksilver.interchainstaking.v1.MsgGovReopenChannel": {
    aminoType: "/quicksilver.interchainstaking.v1.MsgGovReopenChannel",
    toAmino: MsgGovReopenChannel.toAmino,
    fromAmino: MsgGovReopenChannel.fromAmino
  },
  "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps": {
    aminoType: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps",
    toAmino: MsgGovSetLsmCaps.toAmino,
    fromAmino: MsgGovSetLsmCaps.fromAmino
  }
};