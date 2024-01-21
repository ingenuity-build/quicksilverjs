"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.DistributionProportions = exports.Minter = void 0;
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseMinter() {
    return {
        epochProvisions: ""
    };
}
exports.Minter = {
    typeUrl: "/quicksilver.mint.v1beta1.Minter",
    encode(message, writer = _m0.Writer.create()) {
        if (message.epochProvisions !== "") {
            writer.uint32(10).string(message.epochProvisions);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMinter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochProvisions = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochProvisions: (0, helpers_1.isSet)(object.epochProvisions) ? String(object.epochProvisions) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochProvisions !== undefined && (obj.epochProvisions = message.epochProvisions);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMinter();
        message.epochProvisions = object.epochProvisions ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            epochProvisions: object.epoch_provisions
        };
    },
    toAmino(message) {
        const obj = {};
        obj.epoch_provisions = message.epochProvisions;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Minter.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Minter.decode(message.value);
    },
    toProto(message) {
        return exports.Minter.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.mint.v1beta1.Minter",
            value: exports.Minter.encode(message).finish()
        };
    }
};
function createBaseDistributionProportions() {
    return {
        staking: "",
        poolIncentives: "",
        participationRewards: "",
        communityPool: ""
    };
}
exports.DistributionProportions = {
    typeUrl: "/quicksilver.mint.v1beta1.DistributionProportions",
    encode(message, writer = _m0.Writer.create()) {
        if (message.staking !== "") {
            writer.uint32(10).string(message.staking);
        }
        if (message.poolIncentives !== "") {
            writer.uint32(18).string(message.poolIncentives);
        }
        if (message.participationRewards !== "") {
            writer.uint32(26).string(message.participationRewards);
        }
        if (message.communityPool !== "") {
            writer.uint32(34).string(message.communityPool);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDistributionProportions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.staking = reader.string();
                    break;
                case 2:
                    message.poolIncentives = reader.string();
                    break;
                case 3:
                    message.participationRewards = reader.string();
                    break;
                case 4:
                    message.communityPool = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            staking: (0, helpers_1.isSet)(object.staking) ? String(object.staking) : "",
            poolIncentives: (0, helpers_1.isSet)(object.poolIncentives) ? String(object.poolIncentives) : "",
            participationRewards: (0, helpers_1.isSet)(object.participationRewards) ? String(object.participationRewards) : "",
            communityPool: (0, helpers_1.isSet)(object.communityPool) ? String(object.communityPool) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.staking !== undefined && (obj.staking = message.staking);
        message.poolIncentives !== undefined && (obj.poolIncentives = message.poolIncentives);
        message.participationRewards !== undefined && (obj.participationRewards = message.participationRewards);
        message.communityPool !== undefined && (obj.communityPool = message.communityPool);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDistributionProportions();
        message.staking = object.staking ?? "";
        message.poolIncentives = object.poolIncentives ?? "";
        message.participationRewards = object.participationRewards ?? "";
        message.communityPool = object.communityPool ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            staking: object.staking,
            poolIncentives: object.pool_incentives,
            participationRewards: object.participation_rewards,
            communityPool: object.community_pool
        };
    },
    toAmino(message) {
        const obj = {};
        obj.staking = message.staking;
        obj.pool_incentives = message.poolIncentives;
        obj.participation_rewards = message.participationRewards;
        obj.community_pool = message.communityPool;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DistributionProportions.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.DistributionProportions.decode(message.value);
    },
    toProto(message) {
        return exports.DistributionProportions.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.mint.v1beta1.DistributionProportions",
            value: exports.DistributionProportions.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        mintDenom: "",
        genesisEpochProvisions: "",
        epochIdentifier: "",
        reductionPeriodInEpochs: helpers_1.Long.ZERO,
        reductionFactor: "",
        distributionProportions: exports.DistributionProportions.fromPartial({}),
        mintingRewardsDistributionStartEpoch: helpers_1.Long.ZERO
    };
}
exports.Params = {
    typeUrl: "/quicksilver.mint.v1beta1.Params",
    encode(message, writer = _m0.Writer.create()) {
        if (message.mintDenom !== "") {
            writer.uint32(10).string(message.mintDenom);
        }
        if (message.genesisEpochProvisions !== "") {
            writer.uint32(18).string(message.genesisEpochProvisions);
        }
        if (message.epochIdentifier !== "") {
            writer.uint32(26).string(message.epochIdentifier);
        }
        if (!message.reductionPeriodInEpochs.isZero()) {
            writer.uint32(32).int64(message.reductionPeriodInEpochs);
        }
        if (message.reductionFactor !== "") {
            writer.uint32(42).string(message.reductionFactor);
        }
        if (message.distributionProportions !== undefined) {
            exports.DistributionProportions.encode(message.distributionProportions, writer.uint32(50).fork()).ldelim();
        }
        if (!message.mintingRewardsDistributionStartEpoch.isZero()) {
            writer.uint32(56).int64(message.mintingRewardsDistributionStartEpoch);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mintDenom = reader.string();
                    break;
                case 2:
                    message.genesisEpochProvisions = reader.string();
                    break;
                case 3:
                    message.epochIdentifier = reader.string();
                    break;
                case 4:
                    message.reductionPeriodInEpochs = reader.int64();
                    break;
                case 5:
                    message.reductionFactor = reader.string();
                    break;
                case 6:
                    message.distributionProportions = exports.DistributionProportions.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.mintingRewardsDistributionStartEpoch = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            mintDenom: (0, helpers_1.isSet)(object.mintDenom) ? String(object.mintDenom) : "",
            genesisEpochProvisions: (0, helpers_1.isSet)(object.genesisEpochProvisions) ? String(object.genesisEpochProvisions) : "",
            epochIdentifier: (0, helpers_1.isSet)(object.epochIdentifier) ? String(object.epochIdentifier) : "",
            reductionPeriodInEpochs: (0, helpers_1.isSet)(object.reductionPeriodInEpochs) ? helpers_1.Long.fromValue(object.reductionPeriodInEpochs) : helpers_1.Long.ZERO,
            reductionFactor: (0, helpers_1.isSet)(object.reductionFactor) ? String(object.reductionFactor) : "",
            distributionProportions: (0, helpers_1.isSet)(object.distributionProportions) ? exports.DistributionProportions.fromJSON(object.distributionProportions) : undefined,
            mintingRewardsDistributionStartEpoch: (0, helpers_1.isSet)(object.mintingRewardsDistributionStartEpoch) ? helpers_1.Long.fromValue(object.mintingRewardsDistributionStartEpoch) : helpers_1.Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
        message.genesisEpochProvisions !== undefined && (obj.genesisEpochProvisions = message.genesisEpochProvisions);
        message.epochIdentifier !== undefined && (obj.epochIdentifier = message.epochIdentifier);
        message.reductionPeriodInEpochs !== undefined && (obj.reductionPeriodInEpochs = (message.reductionPeriodInEpochs || helpers_1.Long.ZERO).toString());
        message.reductionFactor !== undefined && (obj.reductionFactor = message.reductionFactor);
        message.distributionProportions !== undefined && (obj.distributionProportions = message.distributionProportions ? exports.DistributionProportions.toJSON(message.distributionProportions) : undefined);
        message.mintingRewardsDistributionStartEpoch !== undefined && (obj.mintingRewardsDistributionStartEpoch = (message.mintingRewardsDistributionStartEpoch || helpers_1.Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.mintDenom = object.mintDenom ?? "";
        message.genesisEpochProvisions = object.genesisEpochProvisions ?? "";
        message.epochIdentifier = object.epochIdentifier ?? "";
        message.reductionPeriodInEpochs = object.reductionPeriodInEpochs !== undefined && object.reductionPeriodInEpochs !== null ? helpers_1.Long.fromValue(object.reductionPeriodInEpochs) : helpers_1.Long.ZERO;
        message.reductionFactor = object.reductionFactor ?? "";
        message.distributionProportions = object.distributionProportions !== undefined && object.distributionProportions !== null ? exports.DistributionProportions.fromPartial(object.distributionProportions) : undefined;
        message.mintingRewardsDistributionStartEpoch = object.mintingRewardsDistributionStartEpoch !== undefined && object.mintingRewardsDistributionStartEpoch !== null ? helpers_1.Long.fromValue(object.mintingRewardsDistributionStartEpoch) : helpers_1.Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            mintDenom: object.mint_denom,
            genesisEpochProvisions: object.genesis_epoch_provisions,
            epochIdentifier: object.epoch_identifier,
            reductionPeriodInEpochs: helpers_1.Long.fromString(object.reduction_period_in_epochs),
            reductionFactor: object.reduction_factor,
            distributionProportions: object?.distribution_proportions ? exports.DistributionProportions.fromAmino(object.distribution_proportions) : undefined,
            mintingRewardsDistributionStartEpoch: helpers_1.Long.fromString(object.minting_rewards_distribution_start_epoch)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.mint_denom = message.mintDenom;
        obj.genesis_epoch_provisions = message.genesisEpochProvisions;
        obj.epoch_identifier = message.epochIdentifier;
        obj.reduction_period_in_epochs = message.reductionPeriodInEpochs ? message.reductionPeriodInEpochs.toString() : undefined;
        obj.reduction_factor = message.reductionFactor;
        obj.distribution_proportions = message.distributionProportions ? exports.DistributionProportions.toAmino(message.distributionProportions) : undefined;
        obj.minting_rewards_distribution_start_epoch = message.mintingRewardsDistributionStartEpoch ? message.mintingRewardsDistributionStartEpoch.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.mint.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=mint.js.map