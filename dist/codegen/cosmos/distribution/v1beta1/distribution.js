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
exports.CommunityPoolSpendProposalWithDeposit = exports.DelegationDelegatorReward = exports.DelegatorStartingInfo = exports.CommunityPoolSpendProposal = exports.FeePool = exports.ValidatorSlashEvents = exports.ValidatorSlashEvent = exports.ValidatorOutstandingRewards = exports.ValidatorAccumulatedCommission = exports.ValidatorCurrentRewards = exports.ValidatorHistoricalRewards = exports.Params = void 0;
const coin_1 = require("../../base/v1beta1/coin");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseParams() {
    return {
        community_tax: "",
        base_proposer_reward: "",
        bonus_proposer_reward: "",
        withdraw_addr_enabled: false
    };
}
exports.Params = {
    typeUrl: "/cosmos.distribution.v1beta1.Params",
    aminoType: "cosmos-sdk/Params",
    encode(message, writer = _m0.Writer.create()) {
        if (message.community_tax !== "") {
            writer.uint32(10).string(message.community_tax);
        }
        if (message.base_proposer_reward !== "") {
            writer.uint32(18).string(message.base_proposer_reward);
        }
        if (message.bonus_proposer_reward !== "") {
            writer.uint32(26).string(message.bonus_proposer_reward);
        }
        if (message.withdraw_addr_enabled === true) {
            writer.uint32(32).bool(message.withdraw_addr_enabled);
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
                    message.community_tax = reader.string();
                    break;
                case 2:
                    message.base_proposer_reward = reader.string();
                    break;
                case 3:
                    message.bonus_proposer_reward = reader.string();
                    break;
                case 4:
                    message.withdraw_addr_enabled = reader.bool();
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
            community_tax: (0, helpers_1.isSet)(object.community_tax) ? String(object.community_tax) : "",
            base_proposer_reward: (0, helpers_1.isSet)(object.base_proposer_reward) ? String(object.base_proposer_reward) : "",
            bonus_proposer_reward: (0, helpers_1.isSet)(object.bonus_proposer_reward) ? String(object.bonus_proposer_reward) : "",
            withdraw_addr_enabled: (0, helpers_1.isSet)(object.withdraw_addr_enabled) ? Boolean(object.withdraw_addr_enabled) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.community_tax !== undefined && (obj.community_tax = message.community_tax);
        message.base_proposer_reward !== undefined && (obj.base_proposer_reward = message.base_proposer_reward);
        message.bonus_proposer_reward !== undefined && (obj.bonus_proposer_reward = message.bonus_proposer_reward);
        message.withdraw_addr_enabled !== undefined && (obj.withdraw_addr_enabled = message.withdraw_addr_enabled);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.community_tax = object.community_tax ?? "";
        message.base_proposer_reward = object.base_proposer_reward ?? "";
        message.bonus_proposer_reward = object.bonus_proposer_reward ?? "";
        message.withdraw_addr_enabled = object.withdraw_addr_enabled ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            community_tax: object.community_tax,
            base_proposer_reward: object.base_proposer_reward,
            bonus_proposer_reward: object.bonus_proposer_reward,
            withdraw_addr_enabled: object.withdraw_addr_enabled
        };
    },
    toAmino(message) {
        const obj = {};
        obj.community_tax = message.community_tax;
        obj.base_proposer_reward = message.base_proposer_reward;
        obj.bonus_proposer_reward = message.bonus_proposer_reward;
        obj.withdraw_addr_enabled = message.withdraw_addr_enabled;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
function createBaseValidatorHistoricalRewards() {
    return {
        cumulative_reward_ratio: [],
        reference_count: 0
    };
}
exports.ValidatorHistoricalRewards = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewards",
    aminoType: "cosmos-sdk/ValidatorHistoricalRewards",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.cumulative_reward_ratio) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.reference_count !== 0) {
            writer.uint32(16).uint32(message.reference_count);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorHistoricalRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cumulative_reward_ratio.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.reference_count = reader.uint32();
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
            cumulative_reward_ratio: Array.isArray(object?.cumulative_reward_ratio) ? object.cumulative_reward_ratio.map((e) => coin_1.DecCoin.fromJSON(e)) : [],
            reference_count: (0, helpers_1.isSet)(object.reference_count) ? Number(object.reference_count) : 0
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.cumulative_reward_ratio) {
            obj.cumulative_reward_ratio = message.cumulative_reward_ratio.map(e => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.cumulative_reward_ratio = [];
        }
        message.reference_count !== undefined && (obj.reference_count = Math.round(message.reference_count));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorHistoricalRewards();
        message.cumulative_reward_ratio = object.cumulative_reward_ratio?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        message.reference_count = object.reference_count ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            cumulative_reward_ratio: Array.isArray(object?.cumulative_reward_ratio) ? object.cumulative_reward_ratio.map((e) => coin_1.DecCoin.fromAmino(e)) : [],
            reference_count: object.reference_count
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.cumulative_reward_ratio) {
            obj.cumulative_reward_ratio = message.cumulative_reward_ratio.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.cumulative_reward_ratio = [];
        }
        obj.reference_count = message.reference_count;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorHistoricalRewards.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorHistoricalRewards",
            value: exports.ValidatorHistoricalRewards.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorHistoricalRewards.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorHistoricalRewards.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewards",
            value: exports.ValidatorHistoricalRewards.encode(message).finish()
        };
    }
};
function createBaseValidatorCurrentRewards() {
    return {
        rewards: [],
        period: helpers_1.Long.UZERO
    };
}
exports.ValidatorCurrentRewards = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewards",
    aminoType: "cosmos-sdk/ValidatorCurrentRewards",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.rewards) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (!message.period.isZero()) {
            writer.uint32(16).uint64(message.period);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorCurrentRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.period = reader.uint64();
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
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => coin_1.DecCoin.fromJSON(e)) : [],
            period: (0, helpers_1.isSet)(object.period) ? helpers_1.Long.fromValue(object.period) : helpers_1.Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        message.period !== undefined && (obj.period = (message.period || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorCurrentRewards();
        message.rewards = object.rewards?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        message.period = object.period !== undefined && object.period !== null ? helpers_1.Long.fromValue(object.period) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => coin_1.DecCoin.fromAmino(e)) : [],
            period: helpers_1.Long.fromString(object.period)
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        obj.period = message.period ? message.period.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorCurrentRewards.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorCurrentRewards",
            value: exports.ValidatorCurrentRewards.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorCurrentRewards.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorCurrentRewards.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewards",
            value: exports.ValidatorCurrentRewards.encode(message).finish()
        };
    }
};
function createBaseValidatorAccumulatedCommission() {
    return {
        commission: []
    };
}
exports.ValidatorAccumulatedCommission = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission",
    aminoType: "cosmos-sdk/ValidatorAccumulatedCommission",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.commission) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorAccumulatedCommission();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commission.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
            commission: Array.isArray(object?.commission) ? object.commission.map((e) => coin_1.DecCoin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.commission) {
            obj.commission = message.commission.map(e => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.commission = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorAccumulatedCommission();
        message.commission = object.commission?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            commission: Array.isArray(object?.commission) ? object.commission.map((e) => coin_1.DecCoin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.commission) {
            obj.commission = message.commission.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.commission = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorAccumulatedCommission.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorAccumulatedCommission",
            value: exports.ValidatorAccumulatedCommission.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorAccumulatedCommission.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorAccumulatedCommission.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission",
            value: exports.ValidatorAccumulatedCommission.encode(message).finish()
        };
    }
};
function createBaseValidatorOutstandingRewards() {
    return {
        rewards: []
    };
}
exports.ValidatorOutstandingRewards = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewards",
    aminoType: "cosmos-sdk/ValidatorOutstandingRewards",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.rewards) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorOutstandingRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => coin_1.DecCoin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorOutstandingRewards();
        message.rewards = object.rewards?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => coin_1.DecCoin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorOutstandingRewards.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorOutstandingRewards",
            value: exports.ValidatorOutstandingRewards.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorOutstandingRewards.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorOutstandingRewards.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewards",
            value: exports.ValidatorOutstandingRewards.encode(message).finish()
        };
    }
};
function createBaseValidatorSlashEvent() {
    return {
        validator_period: helpers_1.Long.UZERO,
        fraction: ""
    };
}
exports.ValidatorSlashEvent = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvent",
    aminoType: "cosmos-sdk/ValidatorSlashEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.validator_period.isZero()) {
            writer.uint32(8).uint64(message.validator_period);
        }
        if (message.fraction !== "") {
            writer.uint32(18).string(message.fraction);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSlashEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_period = reader.uint64();
                    break;
                case 2:
                    message.fraction = reader.string();
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
            validator_period: (0, helpers_1.isSet)(object.validator_period) ? helpers_1.Long.fromValue(object.validator_period) : helpers_1.Long.UZERO,
            fraction: (0, helpers_1.isSet)(object.fraction) ? String(object.fraction) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_period !== undefined && (obj.validator_period = (message.validator_period || helpers_1.Long.UZERO).toString());
        message.fraction !== undefined && (obj.fraction = message.fraction);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorSlashEvent();
        message.validator_period = object.validator_period !== undefined && object.validator_period !== null ? helpers_1.Long.fromValue(object.validator_period) : helpers_1.Long.UZERO;
        message.fraction = object.fraction ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            validator_period: helpers_1.Long.fromString(object.validator_period),
            fraction: object.fraction
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_period = message.validator_period ? message.validator_period.toString() : undefined;
        obj.fraction = message.fraction;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorSlashEvent.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorSlashEvent",
            value: exports.ValidatorSlashEvent.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorSlashEvent.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorSlashEvent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvent",
            value: exports.ValidatorSlashEvent.encode(message).finish()
        };
    }
};
function createBaseValidatorSlashEvents() {
    return {
        validator_slash_events: []
    };
}
exports.ValidatorSlashEvents = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvents",
    aminoType: "cosmos-sdk/ValidatorSlashEvents",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.validator_slash_events) {
            exports.ValidatorSlashEvent.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSlashEvents();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_slash_events.push(exports.ValidatorSlashEvent.decode(reader, reader.uint32()));
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
            validator_slash_events: Array.isArray(object?.validator_slash_events) ? object.validator_slash_events.map((e) => exports.ValidatorSlashEvent.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validator_slash_events) {
            obj.validator_slash_events = message.validator_slash_events.map(e => e ? exports.ValidatorSlashEvent.toJSON(e) : undefined);
        }
        else {
            obj.validator_slash_events = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorSlashEvents();
        message.validator_slash_events = object.validator_slash_events?.map(e => exports.ValidatorSlashEvent.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            validator_slash_events: Array.isArray(object?.validator_slash_events) ? object.validator_slash_events.map((e) => exports.ValidatorSlashEvent.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.validator_slash_events) {
            obj.validator_slash_events = message.validator_slash_events.map(e => e ? exports.ValidatorSlashEvent.toAmino(e) : undefined);
        }
        else {
            obj.validator_slash_events = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorSlashEvents.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorSlashEvents",
            value: exports.ValidatorSlashEvents.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorSlashEvents.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorSlashEvents.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvents",
            value: exports.ValidatorSlashEvents.encode(message).finish()
        };
    }
};
function createBaseFeePool() {
    return {
        community_pool: []
    };
}
exports.FeePool = {
    typeUrl: "/cosmos.distribution.v1beta1.FeePool",
    aminoType: "cosmos-sdk/FeePool",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.community_pool) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.community_pool.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
            community_pool: Array.isArray(object?.community_pool) ? object.community_pool.map((e) => coin_1.DecCoin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.community_pool) {
            obj.community_pool = message.community_pool.map(e => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.community_pool = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFeePool();
        message.community_pool = object.community_pool?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            community_pool: Array.isArray(object?.community_pool) ? object.community_pool.map((e) => coin_1.DecCoin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.community_pool) {
            obj.community_pool = message.community_pool.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.community_pool = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.FeePool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/FeePool",
            value: exports.FeePool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.FeePool.decode(message.value);
    },
    toProto(message) {
        return exports.FeePool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.FeePool",
            value: exports.FeePool.encode(message).finish()
        };
    }
};
function createBaseCommunityPoolSpendProposal() {
    return {
        $typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
        title: "",
        description: "",
        recipient: "",
        amount: []
    };
}
exports.CommunityPoolSpendProposal = {
    typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
    aminoType: "cosmos-sdk/CommunityPoolSpendProposal",
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.recipient !== "") {
            writer.uint32(26).string(message.recipient);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommunityPoolSpendProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.recipient = reader.string();
                    break;
                case 4:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            recipient: (0, helpers_1.isSet)(object.recipient) ? String(object.recipient) : "",
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCommunityPoolSpendProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.recipient = object.recipient ?? "";
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            recipient: object.recipient,
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.recipient = message.recipient;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CommunityPoolSpendProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CommunityPoolSpendProposal",
            value: exports.CommunityPoolSpendProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CommunityPoolSpendProposal.decode(message.value);
    },
    toProto(message) {
        return exports.CommunityPoolSpendProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
            value: exports.CommunityPoolSpendProposal.encode(message).finish()
        };
    }
};
function createBaseDelegatorStartingInfo() {
    return {
        previous_period: helpers_1.Long.UZERO,
        stake: "",
        height: helpers_1.Long.UZERO
    };
}
exports.DelegatorStartingInfo = {
    typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfo",
    aminoType: "cosmos-sdk/DelegatorStartingInfo",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.previous_period.isZero()) {
            writer.uint32(8).uint64(message.previous_period);
        }
        if (message.stake !== "") {
            writer.uint32(18).string(message.stake);
        }
        if (!message.height.isZero()) {
            writer.uint32(24).uint64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegatorStartingInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.previous_period = reader.uint64();
                    break;
                case 2:
                    message.stake = reader.string();
                    break;
                case 3:
                    message.height = reader.uint64();
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
            previous_period: (0, helpers_1.isSet)(object.previous_period) ? helpers_1.Long.fromValue(object.previous_period) : helpers_1.Long.UZERO,
            stake: (0, helpers_1.isSet)(object.stake) ? String(object.stake) : "",
            height: (0, helpers_1.isSet)(object.height) ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.previous_period !== undefined && (obj.previous_period = (message.previous_period || helpers_1.Long.UZERO).toString());
        message.stake !== undefined && (obj.stake = message.stake);
        message.height !== undefined && (obj.height = (message.height || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelegatorStartingInfo();
        message.previous_period = object.previous_period !== undefined && object.previous_period !== null ? helpers_1.Long.fromValue(object.previous_period) : helpers_1.Long.UZERO;
        message.stake = object.stake ?? "";
        message.height = object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            previous_period: helpers_1.Long.fromString(object.previous_period),
            stake: object.stake,
            height: helpers_1.Long.fromString(object.height)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.previous_period = message.previous_period ? message.previous_period.toString() : undefined;
        obj.stake = message.stake;
        obj.height = message.height ? message.height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DelegatorStartingInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DelegatorStartingInfo",
            value: exports.DelegatorStartingInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DelegatorStartingInfo.decode(message.value);
    },
    toProto(message) {
        return exports.DelegatorStartingInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfo",
            value: exports.DelegatorStartingInfo.encode(message).finish()
        };
    }
};
function createBaseDelegationDelegatorReward() {
    return {
        validator_address: "",
        reward: []
    };
}
exports.DelegationDelegatorReward = {
    typeUrl: "/cosmos.distribution.v1beta1.DelegationDelegatorReward",
    aminoType: "cosmos-sdk/DelegationDelegatorReward",
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        for (const v of message.reward) {
            coin_1.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegationDelegatorReward();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.reward.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
            validator_address: (0, helpers_1.isSet)(object.validator_address) ? String(object.validator_address) : "",
            reward: Array.isArray(object?.reward) ? object.reward.map((e) => coin_1.DecCoin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        if (message.reward) {
            obj.reward = message.reward.map(e => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.reward = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelegationDelegatorReward();
        message.validator_address = object.validator_address ?? "";
        message.reward = object.reward?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            validator_address: object.validator_address,
            reward: Array.isArray(object?.reward) ? object.reward.map((e) => coin_1.DecCoin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validator_address;
        if (message.reward) {
            obj.reward = message.reward.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.reward = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DelegationDelegatorReward.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DelegationDelegatorReward",
            value: exports.DelegationDelegatorReward.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DelegationDelegatorReward.decode(message.value);
    },
    toProto(message) {
        return exports.DelegationDelegatorReward.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.DelegationDelegatorReward",
            value: exports.DelegationDelegatorReward.encode(message).finish()
        };
    }
};
function createBaseCommunityPoolSpendProposalWithDeposit() {
    return {
        $typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
        title: "",
        description: "",
        recipient: "",
        amount: "",
        deposit: ""
    };
}
exports.CommunityPoolSpendProposalWithDeposit = {
    typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
    aminoType: "cosmos-sdk/CommunityPoolSpendProposalWithDeposit",
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.recipient !== "") {
            writer.uint32(26).string(message.recipient);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        if (message.deposit !== "") {
            writer.uint32(42).string(message.deposit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommunityPoolSpendProposalWithDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.recipient = reader.string();
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                case 5:
                    message.deposit = reader.string();
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            recipient: (0, helpers_1.isSet)(object.recipient) ? String(object.recipient) : "",
            amount: (0, helpers_1.isSet)(object.amount) ? String(object.amount) : "",
            deposit: (0, helpers_1.isSet)(object.deposit) ? String(object.deposit) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        message.amount !== undefined && (obj.amount = message.amount);
        message.deposit !== undefined && (obj.deposit = message.deposit);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCommunityPoolSpendProposalWithDeposit();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.recipient = object.recipient ?? "";
        message.amount = object.amount ?? "";
        message.deposit = object.deposit ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            recipient: object.recipient,
            amount: object.amount,
            deposit: object.deposit
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.recipient = message.recipient;
        obj.amount = message.amount;
        obj.deposit = message.deposit;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CommunityPoolSpendProposalWithDeposit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CommunityPoolSpendProposalWithDeposit",
            value: exports.CommunityPoolSpendProposalWithDeposit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CommunityPoolSpendProposalWithDeposit.decode(message.value);
    },
    toProto(message) {
        return exports.CommunityPoolSpendProposalWithDeposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
            value: exports.CommunityPoolSpendProposalWithDeposit.encode(message).finish()
        };
    }
};
//# sourceMappingURL=distribution.js.map