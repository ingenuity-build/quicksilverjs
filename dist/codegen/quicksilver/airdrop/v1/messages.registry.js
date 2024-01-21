"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const messages_1 = require("./messages");
exports.registry = [["/quicksilver.airdrop.v1.MsgClaim", messages_1.MsgClaim], ["/quicksilver.airdrop.v1.MsgIncentivePoolSpend", messages_1.MsgIncentivePoolSpend]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        claim(value) {
            return {
                typeUrl: "/quicksilver.airdrop.v1.MsgClaim",
                value: messages_1.MsgClaim.encode(value).finish()
            };
        },
        incentivePoolSpend(value) {
            return {
                typeUrl: "/quicksilver.airdrop.v1.MsgIncentivePoolSpend",
                value: messages_1.MsgIncentivePoolSpend.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        claim(value) {
            return {
                typeUrl: "/quicksilver.airdrop.v1.MsgClaim",
                value
            };
        },
        incentivePoolSpend(value) {
            return {
                typeUrl: "/quicksilver.airdrop.v1.MsgIncentivePoolSpend",
                value
            };
        }
    },
    toJSON: {
        claim(value) {
            return {
                typeUrl: "/quicksilver.airdrop.v1.MsgClaim",
                value: messages_1.MsgClaim.toJSON(value)
            };
        },
        incentivePoolSpend(value) {
            return {
                typeUrl: "/quicksilver.airdrop.v1.MsgIncentivePoolSpend",
                value: messages_1.MsgIncentivePoolSpend.toJSON(value)
            };
        }
    },
    fromJSON: {
        claim(value) {
            return {
                typeUrl: "/quicksilver.airdrop.v1.MsgClaim",
                value: messages_1.MsgClaim.fromJSON(value)
            };
        },
        incentivePoolSpend(value) {
            return {
                typeUrl: "/quicksilver.airdrop.v1.MsgIncentivePoolSpend",
                value: messages_1.MsgIncentivePoolSpend.fromJSON(value)
            };
        }
    },
    fromPartial: {
        claim(value) {
            return {
                typeUrl: "/quicksilver.airdrop.v1.MsgClaim",
                value: messages_1.MsgClaim.fromPartial(value)
            };
        },
        incentivePoolSpend(value) {
            return {
                typeUrl: "/quicksilver.airdrop.v1.MsgIncentivePoolSpend",
                value: messages_1.MsgIncentivePoolSpend.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=messages.registry.js.map