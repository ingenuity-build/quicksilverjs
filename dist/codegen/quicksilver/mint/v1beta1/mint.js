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
        epoch_provisions: ""
    };
}
exports.Minter = {
    typeUrl: "/quicksilver.mint.v1beta1.Minter",
    encode(message, writer = _m0.Writer.create()) {
        if (message.epoch_provisions !== "") {
            writer.uint32(10).string(message.epoch_provisions);
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
                    message.epoch_provisions = reader.string();
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
            epoch_provisions: (0, helpers_1.isSet)(object.epoch_provisions) ? String(object.epoch_provisions) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.epoch_provisions !== undefined && (obj.epoch_provisions = message.epoch_provisions);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMinter();
        message.epoch_provisions = object.epoch_provisions ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            epoch_provisions: object.epoch_provisions
        };
    },
    toAmino(message) {
        const obj = {};
        obj.epoch_provisions = message.epoch_provisions;
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
        pool_incentives: "",
        participation_rewards: "",
        community_pool: ""
    };
}
exports.DistributionProportions = {
    typeUrl: "/quicksilver.mint.v1beta1.DistributionProportions",
    encode(message, writer = _m0.Writer.create()) {
        if (message.staking !== "") {
            writer.uint32(10).string(message.staking);
        }
        if (message.pool_incentives !== "") {
            writer.uint32(18).string(message.pool_incentives);
        }
        if (message.participation_rewards !== "") {
            writer.uint32(26).string(message.participation_rewards);
        }
        if (message.community_pool !== "") {
            writer.uint32(34).string(message.community_pool);
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
                    message.pool_incentives = reader.string();
                    break;
                case 3:
                    message.participation_rewards = reader.string();
                    break;
                case 4:
                    message.community_pool = reader.string();
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
            pool_incentives: (0, helpers_1.isSet)(object.pool_incentives) ? String(object.pool_incentives) : "",
            participation_rewards: (0, helpers_1.isSet)(object.participation_rewards) ? String(object.participation_rewards) : "",
            community_pool: (0, helpers_1.isSet)(object.community_pool) ? String(object.community_pool) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.staking !== undefined && (obj.staking = message.staking);
        message.pool_incentives !== undefined && (obj.pool_incentives = message.pool_incentives);
        message.participation_rewards !== undefined && (obj.participation_rewards = message.participation_rewards);
        message.community_pool !== undefined && (obj.community_pool = message.community_pool);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDistributionProportions();
        message.staking = object.staking ?? "";
        message.pool_incentives = object.pool_incentives ?? "";
        message.participation_rewards = object.participation_rewards ?? "";
        message.community_pool = object.community_pool ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            staking: object.staking,
            pool_incentives: object.pool_incentives,
            participation_rewards: object.participation_rewards,
            community_pool: object.community_pool
        };
    },
    toAmino(message) {
        const obj = {};
        obj.staking = message.staking;
        obj.pool_incentives = message.pool_incentives;
        obj.participation_rewards = message.participation_rewards;
        obj.community_pool = message.community_pool;
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
        mint_denom: "",
        genesis_epoch_provisions: "",
        epoch_identifier: "",
        reduction_period_in_epochs: helpers_1.Long.ZERO,
        reduction_factor: "",
        distribution_proportions: exports.DistributionProportions.fromPartial({}),
        minting_rewards_distribution_start_epoch: helpers_1.Long.ZERO
    };
}
exports.Params = {
    typeUrl: "/quicksilver.mint.v1beta1.Params",
    encode(message, writer = _m0.Writer.create()) {
        if (message.mint_denom !== "") {
            writer.uint32(10).string(message.mint_denom);
        }
        if (message.genesis_epoch_provisions !== "") {
            writer.uint32(18).string(message.genesis_epoch_provisions);
        }
        if (message.epoch_identifier !== "") {
            writer.uint32(26).string(message.epoch_identifier);
        }
        if (!message.reduction_period_in_epochs.isZero()) {
            writer.uint32(32).int64(message.reduction_period_in_epochs);
        }
        if (message.reduction_factor !== "") {
            writer.uint32(42).string(message.reduction_factor);
        }
        if (message.distribution_proportions !== undefined) {
            exports.DistributionProportions.encode(message.distribution_proportions, writer.uint32(50).fork()).ldelim();
        }
        if (!message.minting_rewards_distribution_start_epoch.isZero()) {
            writer.uint32(56).int64(message.minting_rewards_distribution_start_epoch);
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
                    message.mint_denom = reader.string();
                    break;
                case 2:
                    message.genesis_epoch_provisions = reader.string();
                    break;
                case 3:
                    message.epoch_identifier = reader.string();
                    break;
                case 4:
                    message.reduction_period_in_epochs = reader.int64();
                    break;
                case 5:
                    message.reduction_factor = reader.string();
                    break;
                case 6:
                    message.distribution_proportions = exports.DistributionProportions.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.minting_rewards_distribution_start_epoch = reader.int64();
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
            mint_denom: (0, helpers_1.isSet)(object.mint_denom) ? String(object.mint_denom) : "",
            genesis_epoch_provisions: (0, helpers_1.isSet)(object.genesis_epoch_provisions) ? String(object.genesis_epoch_provisions) : "",
            epoch_identifier: (0, helpers_1.isSet)(object.epoch_identifier) ? String(object.epoch_identifier) : "",
            reduction_period_in_epochs: (0, helpers_1.isSet)(object.reduction_period_in_epochs) ? helpers_1.Long.fromValue(object.reduction_period_in_epochs) : helpers_1.Long.ZERO,
            reduction_factor: (0, helpers_1.isSet)(object.reduction_factor) ? String(object.reduction_factor) : "",
            distribution_proportions: (0, helpers_1.isSet)(object.distribution_proportions) ? exports.DistributionProportions.fromJSON(object.distribution_proportions) : undefined,
            minting_rewards_distribution_start_epoch: (0, helpers_1.isSet)(object.minting_rewards_distribution_start_epoch) ? helpers_1.Long.fromValue(object.minting_rewards_distribution_start_epoch) : helpers_1.Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.mint_denom !== undefined && (obj.mint_denom = message.mint_denom);
        message.genesis_epoch_provisions !== undefined && (obj.genesis_epoch_provisions = message.genesis_epoch_provisions);
        message.epoch_identifier !== undefined && (obj.epoch_identifier = message.epoch_identifier);
        message.reduction_period_in_epochs !== undefined && (obj.reduction_period_in_epochs = (message.reduction_period_in_epochs || helpers_1.Long.ZERO).toString());
        message.reduction_factor !== undefined && (obj.reduction_factor = message.reduction_factor);
        message.distribution_proportions !== undefined && (obj.distribution_proportions = message.distribution_proportions ? exports.DistributionProportions.toJSON(message.distribution_proportions) : undefined);
        message.minting_rewards_distribution_start_epoch !== undefined && (obj.minting_rewards_distribution_start_epoch = (message.minting_rewards_distribution_start_epoch || helpers_1.Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.mint_denom = object.mint_denom ?? "";
        message.genesis_epoch_provisions = object.genesis_epoch_provisions ?? "";
        message.epoch_identifier = object.epoch_identifier ?? "";
        message.reduction_period_in_epochs = object.reduction_period_in_epochs !== undefined && object.reduction_period_in_epochs !== null ? helpers_1.Long.fromValue(object.reduction_period_in_epochs) : helpers_1.Long.ZERO;
        message.reduction_factor = object.reduction_factor ?? "";
        message.distribution_proportions = object.distribution_proportions !== undefined && object.distribution_proportions !== null ? exports.DistributionProportions.fromPartial(object.distribution_proportions) : undefined;
        message.minting_rewards_distribution_start_epoch = object.minting_rewards_distribution_start_epoch !== undefined && object.minting_rewards_distribution_start_epoch !== null ? helpers_1.Long.fromValue(object.minting_rewards_distribution_start_epoch) : helpers_1.Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            mint_denom: object.mint_denom,
            genesis_epoch_provisions: object.genesis_epoch_provisions,
            epoch_identifier: object.epoch_identifier,
            reduction_period_in_epochs: helpers_1.Long.fromString(object.reduction_period_in_epochs),
            reduction_factor: object.reduction_factor,
            distribution_proportions: object?.distribution_proportions ? exports.DistributionProportions.fromAmino(object.distribution_proportions) : undefined,
            minting_rewards_distribution_start_epoch: helpers_1.Long.fromString(object.minting_rewards_distribution_start_epoch)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.mint_denom = message.mint_denom;
        obj.genesis_epoch_provisions = message.genesis_epoch_provisions;
        obj.epoch_identifier = message.epoch_identifier;
        obj.reduction_period_in_epochs = message.reduction_period_in_epochs ? message.reduction_period_in_epochs.toString() : undefined;
        obj.reduction_factor = message.reduction_factor;
        obj.distribution_proportions = message.distribution_proportions ? exports.DistributionProportions.toAmino(message.distribution_proportions) : undefined;
        obj.minting_rewards_distribution_start_epoch = message.minting_rewards_distribution_start_epoch ? message.minting_rewards_distribution_start_epoch.toString() : undefined;
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