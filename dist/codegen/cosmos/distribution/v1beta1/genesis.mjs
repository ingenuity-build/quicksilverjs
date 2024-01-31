import { DecCoin } from "../../base/v1beta1/coin";
import { ValidatorAccumulatedCommission, ValidatorHistoricalRewards, ValidatorCurrentRewards, DelegatorStartingInfo, ValidatorSlashEvent, Params, FeePool } from "./distribution";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseDelegatorWithdrawInfo() {
    return {
        delegator_address: "",
        withdraw_address: ""
    };
}
export const DelegatorWithdrawInfo = {
    typeUrl: "/cosmos.distribution.v1beta1.DelegatorWithdrawInfo",
    aminoType: "cosmos-sdk/DelegatorWithdrawInfo",
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.withdraw_address !== "") {
            writer.uint32(18).string(message.withdraw_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegatorWithdrawInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.withdraw_address = reader.string();
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
            delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
            withdraw_address: isSet(object.withdraw_address) ? String(object.withdraw_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.withdraw_address !== undefined && (obj.withdraw_address = message.withdraw_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelegatorWithdrawInfo();
        message.delegator_address = object.delegator_address ?? "";
        message.withdraw_address = object.withdraw_address ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            delegator_address: object.delegator_address,
            withdraw_address: object.withdraw_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.withdraw_address = message.withdraw_address;
        return obj;
    },
    fromAminoMsg(object) {
        return DelegatorWithdrawInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DelegatorWithdrawInfo",
            value: DelegatorWithdrawInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return DelegatorWithdrawInfo.decode(message.value);
    },
    toProto(message) {
        return DelegatorWithdrawInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.DelegatorWithdrawInfo",
            value: DelegatorWithdrawInfo.encode(message).finish()
        };
    }
};
function createBaseValidatorOutstandingRewardsRecord() {
    return {
        validator_address: "",
        outstanding_rewards: []
    };
}
export const ValidatorOutstandingRewardsRecord = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord",
    aminoType: "cosmos-sdk/ValidatorOutstandingRewardsRecord",
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        for (const v of message.outstanding_rewards) {
            DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorOutstandingRewardsRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.outstanding_rewards.push(DecCoin.decode(reader, reader.uint32()));
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
            validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
            outstanding_rewards: Array.isArray(object?.outstanding_rewards) ? object.outstanding_rewards.map((e) => DecCoin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        if (message.outstanding_rewards) {
            obj.outstanding_rewards = message.outstanding_rewards.map(e => e ? DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.outstanding_rewards = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorOutstandingRewardsRecord();
        message.validator_address = object.validator_address ?? "";
        message.outstanding_rewards = object.outstanding_rewards?.map(e => DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            validator_address: object.validator_address,
            outstanding_rewards: Array.isArray(object?.outstanding_rewards) ? object.outstanding_rewards.map((e) => DecCoin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validator_address;
        if (message.outstanding_rewards) {
            obj.outstanding_rewards = message.outstanding_rewards.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.outstanding_rewards = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorOutstandingRewardsRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorOutstandingRewardsRecord",
            value: ValidatorOutstandingRewardsRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValidatorOutstandingRewardsRecord.decode(message.value);
    },
    toProto(message) {
        return ValidatorOutstandingRewardsRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord",
            value: ValidatorOutstandingRewardsRecord.encode(message).finish()
        };
    }
};
function createBaseValidatorAccumulatedCommissionRecord() {
    return {
        validator_address: "",
        accumulated: ValidatorAccumulatedCommission.fromPartial({})
    };
}
export const ValidatorAccumulatedCommissionRecord = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord",
    aminoType: "cosmos-sdk/ValidatorAccumulatedCommissionRecord",
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        if (message.accumulated !== undefined) {
            ValidatorAccumulatedCommission.encode(message.accumulated, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorAccumulatedCommissionRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.accumulated = ValidatorAccumulatedCommission.decode(reader, reader.uint32());
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
            validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
            accumulated: isSet(object.accumulated) ? ValidatorAccumulatedCommission.fromJSON(object.accumulated) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.accumulated !== undefined && (obj.accumulated = message.accumulated ? ValidatorAccumulatedCommission.toJSON(message.accumulated) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorAccumulatedCommissionRecord();
        message.validator_address = object.validator_address ?? "";
        message.accumulated = object.accumulated !== undefined && object.accumulated !== null ? ValidatorAccumulatedCommission.fromPartial(object.accumulated) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            validator_address: object.validator_address,
            accumulated: object?.accumulated ? ValidatorAccumulatedCommission.fromAmino(object.accumulated) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validator_address;
        obj.accumulated = message.accumulated ? ValidatorAccumulatedCommission.toAmino(message.accumulated) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorAccumulatedCommissionRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorAccumulatedCommissionRecord",
            value: ValidatorAccumulatedCommissionRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValidatorAccumulatedCommissionRecord.decode(message.value);
    },
    toProto(message) {
        return ValidatorAccumulatedCommissionRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord",
            value: ValidatorAccumulatedCommissionRecord.encode(message).finish()
        };
    }
};
function createBaseValidatorHistoricalRewardsRecord() {
    return {
        validator_address: "",
        period: Long.UZERO,
        rewards: ValidatorHistoricalRewards.fromPartial({})
    };
}
export const ValidatorHistoricalRewardsRecord = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord",
    aminoType: "cosmos-sdk/ValidatorHistoricalRewardsRecord",
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        if (!message.period.isZero()) {
            writer.uint32(16).uint64(message.period);
        }
        if (message.rewards !== undefined) {
            ValidatorHistoricalRewards.encode(message.rewards, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorHistoricalRewardsRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.period = reader.uint64();
                    break;
                case 3:
                    message.rewards = ValidatorHistoricalRewards.decode(reader, reader.uint32());
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
            validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
            period: isSet(object.period) ? Long.fromValue(object.period) : Long.UZERO,
            rewards: isSet(object.rewards) ? ValidatorHistoricalRewards.fromJSON(object.rewards) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.period !== undefined && (obj.period = (message.period || Long.UZERO).toString());
        message.rewards !== undefined && (obj.rewards = message.rewards ? ValidatorHistoricalRewards.toJSON(message.rewards) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorHistoricalRewardsRecord();
        message.validator_address = object.validator_address ?? "";
        message.period = object.period !== undefined && object.period !== null ? Long.fromValue(object.period) : Long.UZERO;
        message.rewards = object.rewards !== undefined && object.rewards !== null ? ValidatorHistoricalRewards.fromPartial(object.rewards) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            validator_address: object.validator_address,
            period: Long.fromString(object.period),
            rewards: object?.rewards ? ValidatorHistoricalRewards.fromAmino(object.rewards) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validator_address;
        obj.period = message.period ? message.period.toString() : undefined;
        obj.rewards = message.rewards ? ValidatorHistoricalRewards.toAmino(message.rewards) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorHistoricalRewardsRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorHistoricalRewardsRecord",
            value: ValidatorHistoricalRewardsRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValidatorHistoricalRewardsRecord.decode(message.value);
    },
    toProto(message) {
        return ValidatorHistoricalRewardsRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord",
            value: ValidatorHistoricalRewardsRecord.encode(message).finish()
        };
    }
};
function createBaseValidatorCurrentRewardsRecord() {
    return {
        validator_address: "",
        rewards: ValidatorCurrentRewards.fromPartial({})
    };
}
export const ValidatorCurrentRewardsRecord = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord",
    aminoType: "cosmos-sdk/ValidatorCurrentRewardsRecord",
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        if (message.rewards !== undefined) {
            ValidatorCurrentRewards.encode(message.rewards, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorCurrentRewardsRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.rewards = ValidatorCurrentRewards.decode(reader, reader.uint32());
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
            validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
            rewards: isSet(object.rewards) ? ValidatorCurrentRewards.fromJSON(object.rewards) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.rewards !== undefined && (obj.rewards = message.rewards ? ValidatorCurrentRewards.toJSON(message.rewards) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorCurrentRewardsRecord();
        message.validator_address = object.validator_address ?? "";
        message.rewards = object.rewards !== undefined && object.rewards !== null ? ValidatorCurrentRewards.fromPartial(object.rewards) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            validator_address: object.validator_address,
            rewards: object?.rewards ? ValidatorCurrentRewards.fromAmino(object.rewards) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validator_address;
        obj.rewards = message.rewards ? ValidatorCurrentRewards.toAmino(message.rewards) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorCurrentRewardsRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorCurrentRewardsRecord",
            value: ValidatorCurrentRewardsRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValidatorCurrentRewardsRecord.decode(message.value);
    },
    toProto(message) {
        return ValidatorCurrentRewardsRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord",
            value: ValidatorCurrentRewardsRecord.encode(message).finish()
        };
    }
};
function createBaseDelegatorStartingInfoRecord() {
    return {
        delegator_address: "",
        validator_address: "",
        starting_info: DelegatorStartingInfo.fromPartial({})
    };
}
export const DelegatorStartingInfoRecord = {
    typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord",
    aminoType: "cosmos-sdk/DelegatorStartingInfoRecord",
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        if (message.starting_info !== undefined) {
            DelegatorStartingInfo.encode(message.starting_info, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegatorStartingInfoRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.validator_address = reader.string();
                    break;
                case 3:
                    message.starting_info = DelegatorStartingInfo.decode(reader, reader.uint32());
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
            delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
            validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
            starting_info: isSet(object.starting_info) ? DelegatorStartingInfo.fromJSON(object.starting_info) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.starting_info !== undefined && (obj.starting_info = message.starting_info ? DelegatorStartingInfo.toJSON(message.starting_info) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelegatorStartingInfoRecord();
        message.delegator_address = object.delegator_address ?? "";
        message.validator_address = object.validator_address ?? "";
        message.starting_info = object.starting_info !== undefined && object.starting_info !== null ? DelegatorStartingInfo.fromPartial(object.starting_info) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            delegator_address: object.delegator_address,
            validator_address: object.validator_address,
            starting_info: object?.starting_info ? DelegatorStartingInfo.fromAmino(object.starting_info) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.validator_address = message.validator_address;
        obj.starting_info = message.starting_info ? DelegatorStartingInfo.toAmino(message.starting_info) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return DelegatorStartingInfoRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DelegatorStartingInfoRecord",
            value: DelegatorStartingInfoRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return DelegatorStartingInfoRecord.decode(message.value);
    },
    toProto(message) {
        return DelegatorStartingInfoRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord",
            value: DelegatorStartingInfoRecord.encode(message).finish()
        };
    }
};
function createBaseValidatorSlashEventRecord() {
    return {
        validator_address: "",
        height: Long.UZERO,
        period: Long.UZERO,
        validator_slash_event: ValidatorSlashEvent.fromPartial({})
    };
}
export const ValidatorSlashEventRecord = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEventRecord",
    aminoType: "cosmos-sdk/ValidatorSlashEventRecord",
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        if (!message.height.isZero()) {
            writer.uint32(16).uint64(message.height);
        }
        if (!message.period.isZero()) {
            writer.uint32(24).uint64(message.period);
        }
        if (message.validator_slash_event !== undefined) {
            ValidatorSlashEvent.encode(message.validator_slash_event, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSlashEventRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.height = reader.uint64();
                    break;
                case 3:
                    message.period = reader.uint64();
                    break;
                case 4:
                    message.validator_slash_event = ValidatorSlashEvent.decode(reader, reader.uint32());
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
            validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
            height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
            period: isSet(object.period) ? Long.fromValue(object.period) : Long.UZERO,
            validator_slash_event: isSet(object.validator_slash_event) ? ValidatorSlashEvent.fromJSON(object.validator_slash_event) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.height !== undefined && (obj.height = (message.height || Long.UZERO).toString());
        message.period !== undefined && (obj.period = (message.period || Long.UZERO).toString());
        message.validator_slash_event !== undefined && (obj.validator_slash_event = message.validator_slash_event ? ValidatorSlashEvent.toJSON(message.validator_slash_event) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorSlashEventRecord();
        message.validator_address = object.validator_address ?? "";
        message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
        message.period = object.period !== undefined && object.period !== null ? Long.fromValue(object.period) : Long.UZERO;
        message.validator_slash_event = object.validator_slash_event !== undefined && object.validator_slash_event !== null ? ValidatorSlashEvent.fromPartial(object.validator_slash_event) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            validator_address: object.validator_address,
            height: Long.fromString(object.height),
            period: Long.fromString(object.period),
            validator_slash_event: object?.validator_slash_event ? ValidatorSlashEvent.fromAmino(object.validator_slash_event) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validator_address;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.period = message.period ? message.period.toString() : undefined;
        obj.validator_slash_event = message.validator_slash_event ? ValidatorSlashEvent.toAmino(message.validator_slash_event) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorSlashEventRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorSlashEventRecord",
            value: ValidatorSlashEventRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValidatorSlashEventRecord.decode(message.value);
    },
    toProto(message) {
        return ValidatorSlashEventRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEventRecord",
            value: ValidatorSlashEventRecord.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        fee_pool: FeePool.fromPartial({}),
        delegator_withdraw_infos: [],
        previous_proposer: "",
        outstanding_rewards: [],
        validator_accumulated_commissions: [],
        validator_historical_rewards: [],
        validator_current_rewards: [],
        delegator_starting_infos: [],
        validator_slash_events: []
    };
}
export const GenesisState = {
    typeUrl: "/cosmos.distribution.v1beta1.GenesisState",
    aminoType: "cosmos-sdk/GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.fee_pool !== undefined) {
            FeePool.encode(message.fee_pool, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.delegator_withdraw_infos) {
            DelegatorWithdrawInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.previous_proposer !== "") {
            writer.uint32(34).string(message.previous_proposer);
        }
        for (const v of message.outstanding_rewards) {
            ValidatorOutstandingRewardsRecord.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.validator_accumulated_commissions) {
            ValidatorAccumulatedCommissionRecord.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.validator_historical_rewards) {
            ValidatorHistoricalRewardsRecord.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.validator_current_rewards) {
            ValidatorCurrentRewardsRecord.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.delegator_starting_infos) {
            DelegatorStartingInfoRecord.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.validator_slash_events) {
            ValidatorSlashEventRecord.encode(v, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.fee_pool = FeePool.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.delegator_withdraw_infos.push(DelegatorWithdrawInfo.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.previous_proposer = reader.string();
                    break;
                case 5:
                    message.outstanding_rewards.push(ValidatorOutstandingRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.validator_accumulated_commissions.push(ValidatorAccumulatedCommissionRecord.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.validator_historical_rewards.push(ValidatorHistoricalRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.validator_current_rewards.push(ValidatorCurrentRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.delegator_starting_infos.push(DelegatorStartingInfoRecord.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.validator_slash_events.push(ValidatorSlashEventRecord.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            fee_pool: isSet(object.fee_pool) ? FeePool.fromJSON(object.fee_pool) : undefined,
            delegator_withdraw_infos: Array.isArray(object?.delegator_withdraw_infos) ? object.delegator_withdraw_infos.map((e) => DelegatorWithdrawInfo.fromJSON(e)) : [],
            previous_proposer: isSet(object.previous_proposer) ? String(object.previous_proposer) : "",
            outstanding_rewards: Array.isArray(object?.outstanding_rewards) ? object.outstanding_rewards.map((e) => ValidatorOutstandingRewardsRecord.fromJSON(e)) : [],
            validator_accumulated_commissions: Array.isArray(object?.validator_accumulated_commissions) ? object.validator_accumulated_commissions.map((e) => ValidatorAccumulatedCommissionRecord.fromJSON(e)) : [],
            validator_historical_rewards: Array.isArray(object?.validator_historical_rewards) ? object.validator_historical_rewards.map((e) => ValidatorHistoricalRewardsRecord.fromJSON(e)) : [],
            validator_current_rewards: Array.isArray(object?.validator_current_rewards) ? object.validator_current_rewards.map((e) => ValidatorCurrentRewardsRecord.fromJSON(e)) : [],
            delegator_starting_infos: Array.isArray(object?.delegator_starting_infos) ? object.delegator_starting_infos.map((e) => DelegatorStartingInfoRecord.fromJSON(e)) : [],
            validator_slash_events: Array.isArray(object?.validator_slash_events) ? object.validator_slash_events.map((e) => ValidatorSlashEventRecord.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        message.fee_pool !== undefined && (obj.fee_pool = message.fee_pool ? FeePool.toJSON(message.fee_pool) : undefined);
        if (message.delegator_withdraw_infos) {
            obj.delegator_withdraw_infos = message.delegator_withdraw_infos.map(e => e ? DelegatorWithdrawInfo.toJSON(e) : undefined);
        }
        else {
            obj.delegator_withdraw_infos = [];
        }
        message.previous_proposer !== undefined && (obj.previous_proposer = message.previous_proposer);
        if (message.outstanding_rewards) {
            obj.outstanding_rewards = message.outstanding_rewards.map(e => e ? ValidatorOutstandingRewardsRecord.toJSON(e) : undefined);
        }
        else {
            obj.outstanding_rewards = [];
        }
        if (message.validator_accumulated_commissions) {
            obj.validator_accumulated_commissions = message.validator_accumulated_commissions.map(e => e ? ValidatorAccumulatedCommissionRecord.toJSON(e) : undefined);
        }
        else {
            obj.validator_accumulated_commissions = [];
        }
        if (message.validator_historical_rewards) {
            obj.validator_historical_rewards = message.validator_historical_rewards.map(e => e ? ValidatorHistoricalRewardsRecord.toJSON(e) : undefined);
        }
        else {
            obj.validator_historical_rewards = [];
        }
        if (message.validator_current_rewards) {
            obj.validator_current_rewards = message.validator_current_rewards.map(e => e ? ValidatorCurrentRewardsRecord.toJSON(e) : undefined);
        }
        else {
            obj.validator_current_rewards = [];
        }
        if (message.delegator_starting_infos) {
            obj.delegator_starting_infos = message.delegator_starting_infos.map(e => e ? DelegatorStartingInfoRecord.toJSON(e) : undefined);
        }
        else {
            obj.delegator_starting_infos = [];
        }
        if (message.validator_slash_events) {
            obj.validator_slash_events = message.validator_slash_events.map(e => e ? ValidatorSlashEventRecord.toJSON(e) : undefined);
        }
        else {
            obj.validator_slash_events = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.fee_pool = object.fee_pool !== undefined && object.fee_pool !== null ? FeePool.fromPartial(object.fee_pool) : undefined;
        message.delegator_withdraw_infos = object.delegator_withdraw_infos?.map(e => DelegatorWithdrawInfo.fromPartial(e)) || [];
        message.previous_proposer = object.previous_proposer ?? "";
        message.outstanding_rewards = object.outstanding_rewards?.map(e => ValidatorOutstandingRewardsRecord.fromPartial(e)) || [];
        message.validator_accumulated_commissions = object.validator_accumulated_commissions?.map(e => ValidatorAccumulatedCommissionRecord.fromPartial(e)) || [];
        message.validator_historical_rewards = object.validator_historical_rewards?.map(e => ValidatorHistoricalRewardsRecord.fromPartial(e)) || [];
        message.validator_current_rewards = object.validator_current_rewards?.map(e => ValidatorCurrentRewardsRecord.fromPartial(e)) || [];
        message.delegator_starting_infos = object.delegator_starting_infos?.map(e => DelegatorStartingInfoRecord.fromPartial(e)) || [];
        message.validator_slash_events = object.validator_slash_events?.map(e => ValidatorSlashEventRecord.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? Params.fromAmino(object.params) : undefined,
            fee_pool: object?.fee_pool ? FeePool.fromAmino(object.fee_pool) : undefined,
            delegator_withdraw_infos: Array.isArray(object?.delegator_withdraw_infos) ? object.delegator_withdraw_infos.map((e) => DelegatorWithdrawInfo.fromAmino(e)) : [],
            previous_proposer: object.previous_proposer,
            outstanding_rewards: Array.isArray(object?.outstanding_rewards) ? object.outstanding_rewards.map((e) => ValidatorOutstandingRewardsRecord.fromAmino(e)) : [],
            validator_accumulated_commissions: Array.isArray(object?.validator_accumulated_commissions) ? object.validator_accumulated_commissions.map((e) => ValidatorAccumulatedCommissionRecord.fromAmino(e)) : [],
            validator_historical_rewards: Array.isArray(object?.validator_historical_rewards) ? object.validator_historical_rewards.map((e) => ValidatorHistoricalRewardsRecord.fromAmino(e)) : [],
            validator_current_rewards: Array.isArray(object?.validator_current_rewards) ? object.validator_current_rewards.map((e) => ValidatorCurrentRewardsRecord.fromAmino(e)) : [],
            delegator_starting_infos: Array.isArray(object?.delegator_starting_infos) ? object.delegator_starting_infos.map((e) => DelegatorStartingInfoRecord.fromAmino(e)) : [],
            validator_slash_events: Array.isArray(object?.validator_slash_events) ? object.validator_slash_events.map((e) => ValidatorSlashEventRecord.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        obj.fee_pool = message.fee_pool ? FeePool.toAmino(message.fee_pool) : undefined;
        if (message.delegator_withdraw_infos) {
            obj.delegator_withdraw_infos = message.delegator_withdraw_infos.map(e => e ? DelegatorWithdrawInfo.toAmino(e) : undefined);
        }
        else {
            obj.delegator_withdraw_infos = [];
        }
        obj.previous_proposer = message.previous_proposer;
        if (message.outstanding_rewards) {
            obj.outstanding_rewards = message.outstanding_rewards.map(e => e ? ValidatorOutstandingRewardsRecord.toAmino(e) : undefined);
        }
        else {
            obj.outstanding_rewards = [];
        }
        if (message.validator_accumulated_commissions) {
            obj.validator_accumulated_commissions = message.validator_accumulated_commissions.map(e => e ? ValidatorAccumulatedCommissionRecord.toAmino(e) : undefined);
        }
        else {
            obj.validator_accumulated_commissions = [];
        }
        if (message.validator_historical_rewards) {
            obj.validator_historical_rewards = message.validator_historical_rewards.map(e => e ? ValidatorHistoricalRewardsRecord.toAmino(e) : undefined);
        }
        else {
            obj.validator_historical_rewards = [];
        }
        if (message.validator_current_rewards) {
            obj.validator_current_rewards = message.validator_current_rewards.map(e => e ? ValidatorCurrentRewardsRecord.toAmino(e) : undefined);
        }
        else {
            obj.validator_current_rewards = [];
        }
        if (message.delegator_starting_infos) {
            obj.delegator_starting_infos = message.delegator_starting_infos.map(e => e ? DelegatorStartingInfoRecord.toAmino(e) : undefined);
        }
        else {
            obj.delegator_starting_infos = [];
        }
        if (message.validator_slash_events) {
            obj.validator_slash_events = message.validator_slash_events.map(e => e ? ValidatorSlashEventRecord.toAmino(e) : undefined);
        }
        else {
            obj.validator_slash_events = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
            value: GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map