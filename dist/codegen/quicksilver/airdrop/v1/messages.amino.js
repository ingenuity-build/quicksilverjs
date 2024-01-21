"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const messages_1 = require("./messages");
exports.AminoConverter = {
    "/quicksilver.airdrop.v1.MsgClaim": {
        aminoType: "/quicksilver.airdrop.v1.MsgClaim",
        toAmino: messages_1.MsgClaim.toAmino,
        fromAmino: messages_1.MsgClaim.fromAmino
    },
    "/quicksilver.airdrop.v1.MsgIncentivePoolSpend": {
        aminoType: "/quicksilver.airdrop.v1.MsgIncentivePoolSpend",
        toAmino: messages_1.MsgIncentivePoolSpend.toAmino,
        fromAmino: messages_1.MsgIncentivePoolSpend.fromAmino
    }
};
//# sourceMappingURL=messages.amino.js.map