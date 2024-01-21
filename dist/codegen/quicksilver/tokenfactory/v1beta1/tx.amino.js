"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/quicksilver.tokenfactory.v1beta1.MsgCreateDenom": {
        aminoType: "/quicksilver.tokenfactory.v1beta1.MsgCreateDenom",
        toAmino: tx_1.MsgCreateDenom.toAmino,
        fromAmino: tx_1.MsgCreateDenom.fromAmino
    },
    "/quicksilver.tokenfactory.v1beta1.MsgMint": {
        aminoType: "/quicksilver.tokenfactory.v1beta1.MsgMint",
        toAmino: tx_1.MsgMint.toAmino,
        fromAmino: tx_1.MsgMint.fromAmino
    },
    "/quicksilver.tokenfactory.v1beta1.MsgBurn": {
        aminoType: "/quicksilver.tokenfactory.v1beta1.MsgBurn",
        toAmino: tx_1.MsgBurn.toAmino,
        fromAmino: tx_1.MsgBurn.fromAmino
    },
    "/quicksilver.tokenfactory.v1beta1.MsgChangeAdmin": {
        aminoType: "/quicksilver.tokenfactory.v1beta1.MsgChangeAdmin",
        toAmino: tx_1.MsgChangeAdmin.toAmino,
        fromAmino: tx_1.MsgChangeAdmin.fromAmino
    },
    "/quicksilver.tokenfactory.v1beta1.MsgSetDenomMetadata": {
        aminoType: "/quicksilver.tokenfactory.v1beta1.MsgSetDenomMetadata",
        toAmino: tx_1.MsgSetDenomMetadata.toAmino,
        fromAmino: tx_1.MsgSetDenomMetadata.fromAmino
    }
};
//# sourceMappingURL=tx.amino.js.map