"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const messages_1 = require("./messages");
const proposals_1 = require("./proposals");
exports.AminoConverter = {
    "/quicksilver.interchainstaking.v1.MsgRequestRedemption": {
        aminoType: "quicksilver/MsgRequestRedemption",
        toAmino: messages_1.MsgRequestRedemption.toAmino,
        fromAmino: messages_1.MsgRequestRedemption.fromAmino
    },
    "/quicksilver.interchainstaking.v1.MsgSignalIntent": {
        aminoType: "quicksilver/MsgSignalIntent",
        toAmino: messages_1.MsgSignalIntent.toAmino,
        fromAmino: messages_1.MsgSignalIntent.fromAmino
    },
    "/quicksilver.interchainstaking.v1.MsgGovCloseChannel": {
        aminoType: "/quicksilver.interchainstaking.v1.MsgGovCloseChannel",
        toAmino: proposals_1.MsgGovCloseChannel.toAmino,
        fromAmino: proposals_1.MsgGovCloseChannel.fromAmino
    },
    "/quicksilver.interchainstaking.v1.MsgGovReopenChannel": {
        aminoType: "/quicksilver.interchainstaking.v1.MsgGovReopenChannel",
        toAmino: proposals_1.MsgGovReopenChannel.toAmino,
        fromAmino: proposals_1.MsgGovReopenChannel.fromAmino
    },
    "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps": {
        aminoType: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps",
        toAmino: proposals_1.MsgGovSetLsmCaps.toAmino,
        fromAmino: proposals_1.MsgGovSetLsmCaps.fromAmino
    }
};
//# sourceMappingURL=messages.amino.js.map