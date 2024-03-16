"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const messages_1 = require("./messages");
const proposals_1 = require("./proposals");
exports.AminoConverter = {
    "/quicksilver.participationrewards.v1.MsgSubmitClaim": {
        aminoType: "/quicksilver.participationrewards.v1.MsgSubmitClaim",
        toAmino: messages_1.MsgSubmitClaim.toAmino,
        fromAmino: messages_1.MsgSubmitClaim.fromAmino
    },
    "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData": {
        aminoType: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData",
        toAmino: proposals_1.MsgGovRemoveProtocolData.toAmino,
        fromAmino: proposals_1.MsgGovRemoveProtocolData.fromAmino
    }
};
//# sourceMappingURL=messages.amino.js.map