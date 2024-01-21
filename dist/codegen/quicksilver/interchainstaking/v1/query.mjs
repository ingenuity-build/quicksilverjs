import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Zone, Validator, DelegatorIntent, Delegation, Receipt, WithdrawalRecord, UnbondingRecord, RedelegationRecord } from "./interchainstaking";
import { Long, isSet, bytesFromBase64, base64FromBytes, isObject } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseStatistics() {
    return {
        chainId: "",
        deposited: Long.ZERO,
        deposits: Long.ZERO,
        depositors: Long.ZERO,
        delegated: Long.ZERO,
        supply: Long.ZERO,
        distanceToTarget: ""
    };
}
export const Statistics = {
    typeUrl: "/quicksilver.interchainstaking.v1.Statistics",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (!message.deposited.isZero()) {
            writer.uint32(16).int64(message.deposited);
        }
        if (!message.deposits.isZero()) {
            writer.uint32(24).int64(message.deposits);
        }
        if (!message.depositors.isZero()) {
            writer.uint32(32).int64(message.depositors);
        }
        if (!message.delegated.isZero()) {
            writer.uint32(40).int64(message.delegated);
        }
        if (!message.supply.isZero()) {
            writer.uint32(48).int64(message.supply);
        }
        if (message.distanceToTarget !== "") {
            writer.uint32(58).string(message.distanceToTarget);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStatistics();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.deposited = reader.int64();
                    break;
                case 3:
                    message.deposits = reader.int64();
                    break;
                case 4:
                    message.depositors = reader.int64();
                    break;
                case 5:
                    message.delegated = reader.int64();
                    break;
                case 6:
                    message.supply = reader.int64();
                    break;
                case 7:
                    message.distanceToTarget = reader.string();
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
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            deposited: isSet(object.deposited) ? Long.fromValue(object.deposited) : Long.ZERO,
            deposits: isSet(object.deposits) ? Long.fromValue(object.deposits) : Long.ZERO,
            depositors: isSet(object.depositors) ? Long.fromValue(object.depositors) : Long.ZERO,
            delegated: isSet(object.delegated) ? Long.fromValue(object.delegated) : Long.ZERO,
            supply: isSet(object.supply) ? Long.fromValue(object.supply) : Long.ZERO,
            distanceToTarget: isSet(object.distanceToTarget) ? String(object.distanceToTarget) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.deposited !== undefined && (obj.deposited = (message.deposited || Long.ZERO).toString());
        message.deposits !== undefined && (obj.deposits = (message.deposits || Long.ZERO).toString());
        message.depositors !== undefined && (obj.depositors = (message.depositors || Long.ZERO).toString());
        message.delegated !== undefined && (obj.delegated = (message.delegated || Long.ZERO).toString());
        message.supply !== undefined && (obj.supply = (message.supply || Long.ZERO).toString());
        message.distanceToTarget !== undefined && (obj.distanceToTarget = message.distanceToTarget);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseStatistics();
        message.chainId = object.chainId ?? "";
        message.deposited = object.deposited !== undefined && object.deposited !== null ? Long.fromValue(object.deposited) : Long.ZERO;
        message.deposits = object.deposits !== undefined && object.deposits !== null ? Long.fromValue(object.deposits) : Long.ZERO;
        message.depositors = object.depositors !== undefined && object.depositors !== null ? Long.fromValue(object.depositors) : Long.ZERO;
        message.delegated = object.delegated !== undefined && object.delegated !== null ? Long.fromValue(object.delegated) : Long.ZERO;
        message.supply = object.supply !== undefined && object.supply !== null ? Long.fromValue(object.supply) : Long.ZERO;
        message.distanceToTarget = object.distanceToTarget ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            chainId: object.chain_id,
            deposited: Long.fromString(object.deposited),
            deposits: Long.fromString(object.deposits),
            depositors: Long.fromString(object.depositors),
            delegated: Long.fromString(object.delegated),
            supply: Long.fromString(object.supply),
            distanceToTarget: object.distance_to_target
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        obj.deposited = message.deposited ? message.deposited.toString() : undefined;
        obj.deposits = message.deposits ? message.deposits.toString() : undefined;
        obj.depositors = message.depositors ? message.depositors.toString() : undefined;
        obj.delegated = message.delegated ? message.delegated.toString() : undefined;
        obj.supply = message.supply ? message.supply.toString() : undefined;
        obj.distance_to_target = message.distanceToTarget;
        return obj;
    },
    fromAminoMsg(object) {
        return Statistics.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Statistics.decode(message.value);
    },
    toProto(message) {
        return Statistics.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.Statistics",
            value: Statistics.encode(message).finish()
        };
    }
};
function createBaseQueryZonesRequest() {
    return {
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryZonesRequest = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryZonesRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryZonesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryZonesRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryZonesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryZonesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryZonesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryZonesRequest",
            value: QueryZonesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryZonesResponse() {
    return {
        zones: [],
        stats: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryZonesResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryZonesResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.zones) {
            Zone.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.stats) {
            Statistics.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryZonesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zones.push(Zone.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.stats.push(Statistics.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            zones: Array.isArray(object?.zones) ? object.zones.map((e) => Zone.fromJSON(e)) : [],
            stats: Array.isArray(object?.stats) ? object.stats.map((e) => Statistics.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.zones) {
            obj.zones = message.zones.map(e => e ? Zone.toJSON(e) : undefined);
        }
        else {
            obj.zones = [];
        }
        if (message.stats) {
            obj.stats = message.stats.map(e => e ? Statistics.toJSON(e) : undefined);
        }
        else {
            obj.stats = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryZonesResponse();
        message.zones = object.zones?.map(e => Zone.fromPartial(e)) || [];
        message.stats = object.stats?.map(e => Statistics.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            zones: Array.isArray(object?.zones) ? object.zones.map((e) => Zone.fromAmino(e)) : [],
            stats: Array.isArray(object?.stats) ? object.stats.map((e) => Statistics.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.zones) {
            obj.zones = message.zones.map(e => e ? Zone.toAmino(e) : undefined);
        }
        else {
            obj.zones = [];
        }
        if (message.stats) {
            obj.stats = message.stats.map(e => e ? Statistics.toAmino(e) : undefined);
        }
        else {
            obj.stats = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryZonesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryZonesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryZonesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryZonesResponse",
            value: QueryZonesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryZoneRequest() {
    return {
        chainId: ""
    };
}
export const QueryZoneRequest = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryZoneRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
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
            chainId: isSet(object.chainId) ? String(object.chainId) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryZoneRequest();
        message.chainId = object.chainId ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            chainId: object.chain_id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryZoneRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryZoneRequest.decode(message.value);
    },
    toProto(message) {
        return QueryZoneRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneRequest",
            value: QueryZoneRequest.encode(message).finish()
        };
    }
};
function createBaseQueryZoneResponse() {
    return {
        zone: Zone.fromPartial({}),
        stats: Statistics.fromPartial({})
    };
}
export const QueryZoneResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.zone !== undefined) {
            Zone.encode(message.zone, writer.uint32(10).fork()).ldelim();
        }
        if (message.stats !== undefined) {
            Statistics.encode(message.stats, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryZoneResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zone = Zone.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.stats = Statistics.decode(reader, reader.uint32());
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
            zone: isSet(object.zone) ? Zone.fromJSON(object.zone) : undefined,
            stats: isSet(object.stats) ? Statistics.fromJSON(object.stats) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.zone !== undefined && (obj.zone = message.zone ? Zone.toJSON(message.zone) : undefined);
        message.stats !== undefined && (obj.stats = message.stats ? Statistics.toJSON(message.stats) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryZoneResponse();
        message.zone = object.zone !== undefined && object.zone !== null ? Zone.fromPartial(object.zone) : undefined;
        message.stats = object.stats !== undefined && object.stats !== null ? Statistics.fromPartial(object.stats) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            zone: object?.zone ? Zone.fromAmino(object.zone) : undefined,
            stats: object?.stats ? Statistics.fromAmino(object.stats) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.zone = message.zone ? Zone.toAmino(message.zone) : undefined;
        obj.stats = message.stats ? Statistics.toAmino(message.stats) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryZoneResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryZoneResponse.decode(message.value);
    },
    toProto(message) {
        return QueryZoneResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneResponse",
            value: QueryZoneResponse.encode(message).finish()
        };
    }
};
function createBaseQueryZoneValidatorsRequest() {
    return {
        chainId: "",
        status: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryZoneValidatorsRequest = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneValidatorsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (message.status !== "") {
            writer.uint32(18).string(message.status);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryZoneValidatorsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.status = reader.string();
                    break;
                case 3:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            status: isSet(object.status) ? String(object.status) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.status !== undefined && (obj.status = message.status);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryZoneValidatorsRequest();
        message.chainId = object.chainId ?? "";
        message.status = object.status ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            chainId: object.chain_id,
            status: object.status,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        obj.status = message.status;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryZoneValidatorsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryZoneValidatorsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryZoneValidatorsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneValidatorsRequest",
            value: QueryZoneValidatorsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryZoneValidatorsResponse() {
    return {
        validators: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryZoneValidatorsResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneValidatorsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.validators) {
            Validator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryZoneValidatorsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validators.push(Validator.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => Validator.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryZoneValidatorsResponse();
        message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => Validator.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryZoneValidatorsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryZoneValidatorsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryZoneValidatorsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneValidatorsResponse",
            value: QueryZoneValidatorsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDepositAccountForChainRequest() {
    return {
        chainId: ""
    };
}
export const QueryDepositAccountForChainRequest = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryDepositAccountForChainRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDepositAccountForChainRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
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
            chainId: isSet(object.chainId) ? String(object.chainId) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDepositAccountForChainRequest();
        message.chainId = object.chainId ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            chainId: object.chain_id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDepositAccountForChainRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDepositAccountForChainRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDepositAccountForChainRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryDepositAccountForChainRequest",
            value: QueryDepositAccountForChainRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDepositAccountForChainResponse() {
    return {
        depositAccountAddress: ""
    };
}
export const QueryDepositAccountForChainResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryDepositAccountForChainResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.depositAccountAddress !== "") {
            writer.uint32(10).string(message.depositAccountAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDepositAccountForChainResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositAccountAddress = reader.string();
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
            depositAccountAddress: isSet(object.depositAccountAddress) ? String(object.depositAccountAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.depositAccountAddress !== undefined && (obj.depositAccountAddress = message.depositAccountAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDepositAccountForChainResponse();
        message.depositAccountAddress = object.depositAccountAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            depositAccountAddress: object.deposit_account_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.deposit_account_address = message.depositAccountAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDepositAccountForChainResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDepositAccountForChainResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDepositAccountForChainResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryDepositAccountForChainResponse",
            value: QueryDepositAccountForChainResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorIntentRequest() {
    return {
        chainId: "",
        delegatorAddress: ""
    };
}
export const QueryDelegatorIntentRequest = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (message.delegatorAddress !== "") {
            writer.uint32(18).string(message.delegatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorIntentRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.delegatorAddress = reader.string();
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
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorIntentRequest();
        message.chainId = object.chainId ?? "";
        message.delegatorAddress = object.delegatorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            chainId: object.chain_id,
            delegatorAddress: object.delegator_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        obj.delegator_address = message.delegatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegatorIntentRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDelegatorIntentRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDelegatorIntentRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentRequest",
            value: QueryDelegatorIntentRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorIntentResponse() {
    return {
        intent: DelegatorIntent.fromPartial({})
    };
}
export const QueryDelegatorIntentResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.intent !== undefined) {
            DelegatorIntent.encode(message.intent, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorIntentResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.intent = DelegatorIntent.decode(reader, reader.uint32());
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
            intent: isSet(object.intent) ? DelegatorIntent.fromJSON(object.intent) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.intent !== undefined && (obj.intent = message.intent ? DelegatorIntent.toJSON(message.intent) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorIntentResponse();
        message.intent = object.intent !== undefined && object.intent !== null ? DelegatorIntent.fromPartial(object.intent) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            intent: object?.intent ? DelegatorIntent.fromAmino(object.intent) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.intent = message.intent ? DelegatorIntent.toAmino(message.intent) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegatorIntentResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDelegatorIntentResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDelegatorIntentResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentResponse",
            value: QueryDelegatorIntentResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorIntentsRequest() {
    return {
        delegatorAddress: ""
    };
}
export const QueryDelegatorIntentsRequest = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorIntentsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
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
            delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorIntentsRequest();
        message.delegatorAddress = object.delegatorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            delegatorAddress: object.delegator_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegatorIntentsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDelegatorIntentsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDelegatorIntentsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentsRequest",
            value: QueryDelegatorIntentsRequest.encode(message).finish()
        };
    }
};
function createBaseDelegatorIntentsResponse() {
    return {
        chainId: "",
        intent: DelegatorIntent.fromPartial({})
    };
}
export const DelegatorIntentsResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.DelegatorIntentsResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (message.intent !== undefined) {
            DelegatorIntent.encode(message.intent, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegatorIntentsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.intent = DelegatorIntent.decode(reader, reader.uint32());
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
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            intent: isSet(object.intent) ? DelegatorIntent.fromJSON(object.intent) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.intent !== undefined && (obj.intent = message.intent ? DelegatorIntent.toJSON(message.intent) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelegatorIntentsResponse();
        message.chainId = object.chainId ?? "";
        message.intent = object.intent !== undefined && object.intent !== null ? DelegatorIntent.fromPartial(object.intent) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            chainId: object.chain_id,
            intent: object?.intent ? DelegatorIntent.fromAmino(object.intent) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        obj.intent = message.intent ? DelegatorIntent.toAmino(message.intent) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return DelegatorIntentsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DelegatorIntentsResponse.decode(message.value);
    },
    toProto(message) {
        return DelegatorIntentsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.DelegatorIntentsResponse",
            value: DelegatorIntentsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorIntentsResponse() {
    return {
        intents: []
    };
}
export const QueryDelegatorIntentsResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.intents) {
            DelegatorIntentsResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorIntentsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.intents.push(DelegatorIntentsResponse.decode(reader, reader.uint32()));
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
            intents: Array.isArray(object?.intents) ? object.intents.map((e) => DelegatorIntentsResponse.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.intents) {
            obj.intents = message.intents.map(e => e ? DelegatorIntentsResponse.toJSON(e) : undefined);
        }
        else {
            obj.intents = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorIntentsResponse();
        message.intents = object.intents?.map(e => DelegatorIntentsResponse.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            intents: Array.isArray(object?.intents) ? object.intents.map((e) => DelegatorIntentsResponse.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.intents) {
            obj.intents = message.intents.map(e => e ? DelegatorIntentsResponse.toAmino(e) : undefined);
        }
        else {
            obj.intents = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegatorIntentsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDelegatorIntentsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDelegatorIntentsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentsResponse",
            value: QueryDelegatorIntentsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegationsRequest() {
    return {
        chainId: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryDelegationsRequest = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegationsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegationsRequest();
        message.chainId = object.chainId ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            chainId: object.chain_id,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegationsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDelegationsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDelegationsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegationsRequest",
            value: QueryDelegationsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDelegationsResponse() {
    return {
        delegations: [],
        tvl: Long.ZERO,
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryDelegationsResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegationsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.delegations) {
            Delegation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (!message.tvl.isZero()) {
            writer.uint32(16).int64(message.tvl);
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegations.push(Delegation.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.tvl = reader.int64();
                    break;
                case 3:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            delegations: Array.isArray(object?.delegations) ? object.delegations.map((e) => Delegation.fromJSON(e)) : [],
            tvl: isSet(object.tvl) ? Long.fromValue(object.tvl) : Long.ZERO,
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.delegations) {
            obj.delegations = message.delegations.map(e => e ? Delegation.toJSON(e) : undefined);
        }
        else {
            obj.delegations = [];
        }
        message.tvl !== undefined && (obj.tvl = (message.tvl || Long.ZERO).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegationsResponse();
        message.delegations = object.delegations?.map(e => Delegation.fromPartial(e)) || [];
        message.tvl = object.tvl !== undefined && object.tvl !== null ? Long.fromValue(object.tvl) : Long.ZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            delegations: Array.isArray(object?.delegations) ? object.delegations.map((e) => Delegation.fromAmino(e)) : [],
            tvl: Long.fromString(object.tvl),
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.delegations) {
            obj.delegations = message.delegations.map(e => e ? Delegation.toAmino(e) : undefined);
        }
        else {
            obj.delegations = [];
        }
        obj.tvl = message.tvl ? message.tvl.toString() : undefined;
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegationsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDelegationsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDelegationsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegationsResponse",
            value: QueryDelegationsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryReceiptsRequest() {
    return {
        chainId: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryReceiptsRequest = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryReceiptsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryReceiptsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryReceiptsRequest();
        message.chainId = object.chainId ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            chainId: object.chain_id,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryReceiptsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryReceiptsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryReceiptsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryReceiptsRequest",
            value: QueryReceiptsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryReceiptsResponse() {
    return {
        receipts: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryReceiptsResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryReceiptsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.receipts) {
            Receipt.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryReceiptsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.receipts.push(Receipt.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            receipts: Array.isArray(object?.receipts) ? object.receipts.map((e) => Receipt.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.receipts) {
            obj.receipts = message.receipts.map(e => e ? Receipt.toJSON(e) : undefined);
        }
        else {
            obj.receipts = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryReceiptsResponse();
        message.receipts = object.receipts?.map(e => Receipt.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            receipts: Array.isArray(object?.receipts) ? object.receipts.map((e) => Receipt.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.receipts) {
            obj.receipts = message.receipts.map(e => e ? Receipt.toAmino(e) : undefined);
        }
        else {
            obj.receipts = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryReceiptsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryReceiptsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryReceiptsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryReceiptsResponse",
            value: QueryReceiptsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTxStatusRequest() {
    return {
        chainId: "",
        txHash: ""
    };
}
export const QueryTxStatusRequest = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryTxStatusRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (message.txHash !== "") {
            writer.uint32(18).string(message.txHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTxStatusRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.txHash = reader.string();
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
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            txHash: isSet(object.txHash) ? String(object.txHash) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.txHash !== undefined && (obj.txHash = message.txHash);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTxStatusRequest();
        message.chainId = object.chainId ?? "";
        message.txHash = object.txHash ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            chainId: object.chain_id,
            txHash: object.tx_hash
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        obj.tx_hash = message.txHash;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTxStatusRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryTxStatusRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTxStatusRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryTxStatusRequest",
            value: QueryTxStatusRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTxStatusResponse() {
    return {
        receipt: Receipt.fromPartial({})
    };
}
export const QueryTxStatusResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryTxStatusResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.receipt !== undefined) {
            Receipt.encode(message.receipt, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTxStatusResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.receipt = Receipt.decode(reader, reader.uint32());
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
            receipt: isSet(object.receipt) ? Receipt.fromJSON(object.receipt) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.receipt !== undefined && (obj.receipt = message.receipt ? Receipt.toJSON(message.receipt) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTxStatusResponse();
        message.receipt = object.receipt !== undefined && object.receipt !== null ? Receipt.fromPartial(object.receipt) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            receipt: object?.receipt ? Receipt.fromAmino(object.receipt) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.receipt = message.receipt ? Receipt.toAmino(message.receipt) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTxStatusResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryTxStatusResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTxStatusResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryTxStatusResponse",
            value: QueryTxStatusResponse.encode(message).finish()
        };
    }
};
function createBaseQueryWithdrawalRecordsRequest() {
    return {
        chainId: "",
        delegatorAddress: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryWithdrawalRecordsRequest = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryWithdrawalRecordsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (message.delegatorAddress !== "") {
            writer.uint32(18).string(message.delegatorAddress);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWithdrawalRecordsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.delegatorAddress = reader.string();
                    break;
                case 3:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryWithdrawalRecordsRequest();
        message.chainId = object.chainId ?? "";
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            chainId: object.chain_id,
            delegatorAddress: object.delegator_address,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        obj.delegator_address = message.delegatorAddress;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryWithdrawalRecordsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryWithdrawalRecordsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryWithdrawalRecordsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryWithdrawalRecordsRequest",
            value: QueryWithdrawalRecordsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryWithdrawalRecordsResponse() {
    return {
        withdrawals: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryWithdrawalRecordsResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryWithdrawalRecordsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.withdrawals) {
            WithdrawalRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWithdrawalRecordsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.withdrawals.push(WithdrawalRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            withdrawals: Array.isArray(object?.withdrawals) ? object.withdrawals.map((e) => WithdrawalRecord.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.withdrawals) {
            obj.withdrawals = message.withdrawals.map(e => e ? WithdrawalRecord.toJSON(e) : undefined);
        }
        else {
            obj.withdrawals = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryWithdrawalRecordsResponse();
        message.withdrawals = object.withdrawals?.map(e => WithdrawalRecord.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            withdrawals: Array.isArray(object?.withdrawals) ? object.withdrawals.map((e) => WithdrawalRecord.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.withdrawals) {
            obj.withdrawals = message.withdrawals.map(e => e ? WithdrawalRecord.toAmino(e) : undefined);
        }
        else {
            obj.withdrawals = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryWithdrawalRecordsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryWithdrawalRecordsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryWithdrawalRecordsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryWithdrawalRecordsResponse",
            value: QueryWithdrawalRecordsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryUserWithdrawalRecordsRequest() {
    return {
        userAddress: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryUserWithdrawalRecordsRequest = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryUserWithdrawalRecordsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.userAddress !== "") {
            writer.uint32(10).string(message.userAddress);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUserWithdrawalRecordsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userAddress = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            userAddress: isSet(object.userAddress) ? String(object.userAddress) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.userAddress !== undefined && (obj.userAddress = message.userAddress);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUserWithdrawalRecordsRequest();
        message.userAddress = object.userAddress ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            userAddress: object.user_address,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.user_address = message.userAddress;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryUserWithdrawalRecordsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryUserWithdrawalRecordsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryUserWithdrawalRecordsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryUserWithdrawalRecordsRequest",
            value: QueryUserWithdrawalRecordsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryUnbondingRecordsRequest() {
    return {
        chainId: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryUnbondingRecordsRequest = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryUnbondingRecordsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnbondingRecordsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUnbondingRecordsRequest();
        message.chainId = object.chainId ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            chainId: object.chain_id,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryUnbondingRecordsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryUnbondingRecordsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryUnbondingRecordsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryUnbondingRecordsRequest",
            value: QueryUnbondingRecordsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryUnbondingRecordsResponse() {
    return {
        unbondings: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryUnbondingRecordsResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryUnbondingRecordsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.unbondings) {
            UnbondingRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnbondingRecordsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unbondings.push(UnbondingRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            unbondings: Array.isArray(object?.unbondings) ? object.unbondings.map((e) => UnbondingRecord.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.unbondings) {
            obj.unbondings = message.unbondings.map(e => e ? UnbondingRecord.toJSON(e) : undefined);
        }
        else {
            obj.unbondings = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUnbondingRecordsResponse();
        message.unbondings = object.unbondings?.map(e => UnbondingRecord.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            unbondings: Array.isArray(object?.unbondings) ? object.unbondings.map((e) => UnbondingRecord.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.unbondings) {
            obj.unbondings = message.unbondings.map(e => e ? UnbondingRecord.toAmino(e) : undefined);
        }
        else {
            obj.unbondings = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryUnbondingRecordsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryUnbondingRecordsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryUnbondingRecordsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryUnbondingRecordsResponse",
            value: QueryUnbondingRecordsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryRedelegationRecordsRequest() {
    return {
        chainId: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryRedelegationRecordsRequest = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryRedelegationRecordsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRedelegationRecordsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryRedelegationRecordsRequest();
        message.chainId = object.chainId ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            chainId: object.chain_id,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryRedelegationRecordsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryRedelegationRecordsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryRedelegationRecordsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryRedelegationRecordsRequest",
            value: QueryRedelegationRecordsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryRedelegationRecordsResponse() {
    return {
        redelegations: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryRedelegationRecordsResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryRedelegationRecordsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.redelegations) {
            RedelegationRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRedelegationRecordsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redelegations.push(RedelegationRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            redelegations: Array.isArray(object?.redelegations) ? object.redelegations.map((e) => RedelegationRecord.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.redelegations) {
            obj.redelegations = message.redelegations.map(e => e ? RedelegationRecord.toJSON(e) : undefined);
        }
        else {
            obj.redelegations = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryRedelegationRecordsResponse();
        message.redelegations = object.redelegations?.map(e => RedelegationRecord.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            redelegations: Array.isArray(object?.redelegations) ? object.redelegations.map((e) => RedelegationRecord.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.redelegations) {
            obj.redelegations = message.redelegations.map(e => e ? RedelegationRecord.toAmino(e) : undefined);
        }
        else {
            obj.redelegations = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryRedelegationRecordsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryRedelegationRecordsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryRedelegationRecordsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryRedelegationRecordsResponse",
            value: QueryRedelegationRecordsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryMappedAccountsRequest() {
    return {
        address: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryMappedAccountsRequest = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryMappedAccountsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMappedAccountsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            address: isSet(object.address) ? String(object.address) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryMappedAccountsRequest();
        message.address = object.address ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryMappedAccountsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryMappedAccountsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryMappedAccountsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryMappedAccountsRequest",
            value: QueryMappedAccountsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryMappedAccountsResponse_RemoteAddressMapEntry() {
    return {
        key: "",
        value: new Uint8Array()
    };
}
export const QueryMappedAccountsResponse_RemoteAddressMapEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMappedAccountsResponse_RemoteAddressMapEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.bytes();
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryMappedAccountsResponse_RemoteAddressMapEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            key: object.key,
            value: object.value
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryMappedAccountsResponse_RemoteAddressMapEntry.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryMappedAccountsResponse_RemoteAddressMapEntry.decode(message.value);
    },
    toProto(message) {
        return QueryMappedAccountsResponse_RemoteAddressMapEntry.encode(message).finish();
    }
};
function createBaseQueryMappedAccountsResponse() {
    return {
        RemoteAddressMap: {},
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryMappedAccountsResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryMappedAccountsResponse",
    encode(message, writer = _m0.Writer.create()) {
        Object.entries(message.RemoteAddressMap).forEach(([key, value]) => {
            QueryMappedAccountsResponse_RemoteAddressMapEntry.encode({
                key: key,
                value
            }, writer.uint32(10).fork()).ldelim();
        });
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMappedAccountsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = QueryMappedAccountsResponse_RemoteAddressMapEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.RemoteAddressMap[entry1.key] = entry1.value;
                    }
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            RemoteAddressMap: isObject(object.RemoteAddressMap) ? Object.entries(object.RemoteAddressMap).reduce((acc, [key, value]) => {
                acc[key] = bytes.fromJSON(value);
                return acc;
            }, {}) : {},
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        obj.RemoteAddressMap = {};
        if (message.RemoteAddressMap) {
            Object.entries(message.RemoteAddressMap).forEach(([k, v]) => {
                obj.RemoteAddressMap[k] = bytes.toJSON(v);
            });
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryMappedAccountsResponse();
        message.RemoteAddressMap = Object.entries(object.RemoteAddressMap ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = bytes.fromPartial(value);
            }
            return acc;
        }, {});
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            RemoteAddressMap: isObject(object.RemoteAddressMap) ? Object.entries(object.RemoteAddressMap).reduce((acc, [key, value]) => {
                acc[key] = bytes.fromAmino(value);
                return acc;
            }, {}) : {},
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.RemoteAddressMap = {};
        if (message.RemoteAddressMap) {
            Object.entries(message.RemoteAddressMap).forEach(([k, v]) => {
                obj.RemoteAddressMap[k] = bytes.toAmino(v);
            });
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryMappedAccountsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryMappedAccountsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryMappedAccountsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryMappedAccountsResponse",
            value: QueryMappedAccountsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map