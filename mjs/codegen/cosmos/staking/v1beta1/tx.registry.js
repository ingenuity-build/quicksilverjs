import { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate } from "./tx";
import { MsgTokenizeShares, MsgRedeemTokensForShares } from "./lsm";
export const registry = [["/cosmos.staking.v1beta1.MsgCreateValidator", MsgCreateValidator], ["/cosmos.staking.v1beta1.MsgEditValidator", MsgEditValidator], ["/cosmos.staking.v1beta1.MsgDelegate", MsgDelegate], ["/cosmos.staking.v1beta1.MsgBeginRedelegate", MsgBeginRedelegate], ["/cosmos.staking.v1beta1.MsgUndelegate", MsgUndelegate], ["/cosmos.staking.v1beta1.MsgTokenizeShares", MsgTokenizeShares], ["/cosmos.staking.v1beta1.MsgRedeemTokensForShares", MsgRedeemTokensForShares]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        createValidator(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
                value: MsgCreateValidator.encode(value).finish()
            };
        },
        editValidator(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
                value: MsgEditValidator.encode(value).finish()
            };
        },
        delegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
                value: MsgDelegate.encode(value).finish()
            };
        },
        beginRedelegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
                value: MsgBeginRedelegate.encode(value).finish()
            };
        },
        undelegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
                value: MsgUndelegate.encode(value).finish()
            };
        },
        tokenizeShares(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeShares",
                value: MsgTokenizeShares.encode(value).finish()
            };
        },
        redeemTokensForShares(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForShares",
                value: MsgRedeemTokensForShares.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createValidator(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
                value
            };
        },
        editValidator(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
                value
            };
        },
        delegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
                value
            };
        },
        beginRedelegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
                value
            };
        },
        undelegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
                value
            };
        },
        tokenizeShares(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeShares",
                value
            };
        },
        redeemTokensForShares(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForShares",
                value
            };
        }
    },
    toJSON: {
        createValidator(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
                value: MsgCreateValidator.toJSON(value)
            };
        },
        editValidator(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
                value: MsgEditValidator.toJSON(value)
            };
        },
        delegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
                value: MsgDelegate.toJSON(value)
            };
        },
        beginRedelegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
                value: MsgBeginRedelegate.toJSON(value)
            };
        },
        undelegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
                value: MsgUndelegate.toJSON(value)
            };
        },
        tokenizeShares(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeShares",
                value: MsgTokenizeShares.toJSON(value)
            };
        },
        redeemTokensForShares(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForShares",
                value: MsgRedeemTokensForShares.toJSON(value)
            };
        }
    },
    fromJSON: {
        createValidator(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
                value: MsgCreateValidator.fromJSON(value)
            };
        },
        editValidator(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
                value: MsgEditValidator.fromJSON(value)
            };
        },
        delegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
                value: MsgDelegate.fromJSON(value)
            };
        },
        beginRedelegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
                value: MsgBeginRedelegate.fromJSON(value)
            };
        },
        undelegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
                value: MsgUndelegate.fromJSON(value)
            };
        },
        tokenizeShares(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeShares",
                value: MsgTokenizeShares.fromJSON(value)
            };
        },
        redeemTokensForShares(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForShares",
                value: MsgRedeemTokensForShares.fromJSON(value)
            };
        }
    },
    fromPartial: {
        createValidator(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
                value: MsgCreateValidator.fromPartial(value)
            };
        },
        editValidator(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
                value: MsgEditValidator.fromPartial(value)
            };
        },
        delegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
                value: MsgDelegate.fromPartial(value)
            };
        },
        beginRedelegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
                value: MsgBeginRedelegate.fromPartial(value)
            };
        },
        undelegate(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
                value: MsgUndelegate.fromPartial(value)
            };
        },
        tokenizeShares(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeShares",
                value: MsgTokenizeShares.fromPartial(value)
            };
        },
        redeemTokensForShares(value) {
            return {
                typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForShares",
                value: MsgRedeemTokensForShares.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map