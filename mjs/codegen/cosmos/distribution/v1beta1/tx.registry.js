import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgFundCommunityPool } from "./tx";
export const registry = [["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", MsgSetWithdrawAddress], ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", MsgWithdrawDelegatorReward], ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", MsgWithdrawValidatorCommission], ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", MsgFundCommunityPool]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        setWithdrawAddress(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
                value: MsgSetWithdrawAddress.encode(value).finish()
            };
        },
        withdrawDelegatorReward(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
                value: MsgWithdrawDelegatorReward.encode(value).finish()
            };
        },
        withdrawValidatorCommission(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
                value: MsgWithdrawValidatorCommission.encode(value).finish()
            };
        },
        fundCommunityPool(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
                value: MsgFundCommunityPool.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        setWithdrawAddress(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
                value
            };
        },
        withdrawDelegatorReward(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
                value
            };
        },
        withdrawValidatorCommission(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
                value
            };
        },
        fundCommunityPool(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
                value
            };
        }
    },
    toJSON: {
        setWithdrawAddress(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
                value: MsgSetWithdrawAddress.toJSON(value)
            };
        },
        withdrawDelegatorReward(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
                value: MsgWithdrawDelegatorReward.toJSON(value)
            };
        },
        withdrawValidatorCommission(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
                value: MsgWithdrawValidatorCommission.toJSON(value)
            };
        },
        fundCommunityPool(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
                value: MsgFundCommunityPool.toJSON(value)
            };
        }
    },
    fromJSON: {
        setWithdrawAddress(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
                value: MsgSetWithdrawAddress.fromJSON(value)
            };
        },
        withdrawDelegatorReward(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
                value: MsgWithdrawDelegatorReward.fromJSON(value)
            };
        },
        withdrawValidatorCommission(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
                value: MsgWithdrawValidatorCommission.fromJSON(value)
            };
        },
        fundCommunityPool(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
                value: MsgFundCommunityPool.fromJSON(value)
            };
        }
    },
    fromPartial: {
        setWithdrawAddress(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
                value: MsgSetWithdrawAddress.fromPartial(value)
            };
        },
        withdrawDelegatorReward(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
                value: MsgWithdrawDelegatorReward.fromPartial(value)
            };
        },
        withdrawValidatorCommission(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
                value: MsgWithdrawValidatorCommission.fromPartial(value)
            };
        },
        fundCommunityPool(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
                value: MsgFundCommunityPool.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map