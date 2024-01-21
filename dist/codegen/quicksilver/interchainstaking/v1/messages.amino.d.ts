import { MsgRequestRedemption, MsgSignalIntent } from "./messages";
import { MsgGovCloseChannel, MsgGovReopenChannel, MsgGovSetLsmCaps } from "./proposals";
export declare const AminoConverter: {
    "/quicksilver.interchainstaking.v1.MsgRequestRedemption": {
        aminoType: string;
        toAmino: (message: MsgRequestRedemption) => import("./messages").MsgRequestRedemptionAmino;
        fromAmino: (object: import("./messages").MsgRequestRedemptionAmino) => MsgRequestRedemption;
    };
    "/quicksilver.interchainstaking.v1.MsgSignalIntent": {
        aminoType: string;
        toAmino: (message: MsgSignalIntent) => import("./messages").MsgSignalIntentAmino;
        fromAmino: (object: import("./messages").MsgSignalIntentAmino) => MsgSignalIntent;
    };
    "/quicksilver.interchainstaking.v1.MsgGovCloseChannel": {
        aminoType: string;
        toAmino: (message: MsgGovCloseChannel) => import("./proposals").MsgGovCloseChannelAmino;
        fromAmino: (object: import("./proposals").MsgGovCloseChannelAmino) => MsgGovCloseChannel;
    };
    "/quicksilver.interchainstaking.v1.MsgGovReopenChannel": {
        aminoType: string;
        toAmino: (message: MsgGovReopenChannel) => import("./proposals").MsgGovReopenChannelAmino;
        fromAmino: (object: import("./proposals").MsgGovReopenChannelAmino) => MsgGovReopenChannel;
    };
    "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps": {
        aminoType: string;
        toAmino: (message: MsgGovSetLsmCaps) => import("./proposals").MsgGovSetLsmCapsAmino;
        fromAmino: (object: import("./proposals").MsgGovSetLsmCapsAmino) => MsgGovSetLsmCaps;
    };
};
