"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const messages_1 = require("./messages");
exports.AminoConverter = {
    "/quicksilver.interchainquery.v1.MsgSubmitQueryResponse": {
        aminoType: "/quicksilver.interchainquery.v1.MsgSubmitQueryResponse",
        toAmino: messages_1.MsgSubmitQueryResponse.toAmino,
        fromAmino: messages_1.MsgSubmitQueryResponse.fromAmino
    }
};
//# sourceMappingURL=messages.amino.js.map