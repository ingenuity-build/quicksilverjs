import { MsgClaim, MsgIncentivePoolSpend } from "./messages";
export const registry = [["/quicksilver.airdrop.v1.MsgClaim", MsgClaim], ["/quicksilver.airdrop.v1.MsgIncentivePoolSpend", MsgIncentivePoolSpend]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        claim(value) {
            return {
                typeUrl: "/quicksilver.airdrop.v1.MsgClaim",
                value: MsgClaim.encode(value).finish()
            };
        },
        incentivePoolSpend(value) {
            return {
                typeUrl: "/quicksilver.airdrop.v1.MsgIncentivePoolSpend",
                value: MsgIncentivePoolSpend.encode(value).finish()
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
                value: MsgClaim.toJSON(value)
            };
        },
        incentivePoolSpend(value) {
            return {
                typeUrl: "/quicksilver.airdrop.v1.MsgIncentivePoolSpend",
                value: MsgIncentivePoolSpend.toJSON(value)
            };
        }
    },
    fromJSON: {
        claim(value) {
            return {
                typeUrl: "/quicksilver.airdrop.v1.MsgClaim",
                value: MsgClaim.fromJSON(value)
            };
        },
        incentivePoolSpend(value) {
            return {
                typeUrl: "/quicksilver.airdrop.v1.MsgIncentivePoolSpend",
                value: MsgIncentivePoolSpend.fromJSON(value)
            };
        }
    },
    fromPartial: {
        claim(value) {
            return {
                typeUrl: "/quicksilver.airdrop.v1.MsgClaim",
                value: MsgClaim.fromPartial(value)
            };
        },
        incentivePoolSpend(value) {
            return {
                typeUrl: "/quicksilver.airdrop.v1.MsgIncentivePoolSpend",
                value: MsgIncentivePoolSpend.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=messages.registry.js.map