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
exports.QueryMappedAccountsResponse = exports.QueryMappedAccountsResponse_RemoteAddressMapEntry = exports.QueryMappedAccountsRequest = exports.QueryRedelegationRecordsResponse = exports.QueryRedelegationRecordsRequest = exports.QueryUnbondingRecordsResponse = exports.QueryUnbondingRecordsRequest = exports.QueryUserWithdrawalRecordsRequest = exports.QueryWithdrawalRecordsResponse = exports.QueryWithdrawalRecordsRequest = exports.QueryTxStatusResponse = exports.QueryTxStatusRequest = exports.QueryReceiptsResponse = exports.QueryReceiptsRequest = exports.QueryDelegationsResponse = exports.QueryDelegationsRequest = exports.QueryDelegatorIntentsResponse = exports.DelegatorIntentsResponse = exports.QueryDelegatorIntentsRequest = exports.QueryDelegatorIntentResponse = exports.QueryDelegatorIntentRequest = exports.QueryDepositAccountForChainResponse = exports.QueryDepositAccountForChainRequest = exports.QueryZoneValidatorsResponse = exports.QueryZoneValidatorsRequest = exports.QueryZoneResponse = exports.QueryZoneRequest = exports.QueryZonesResponse = exports.QueryZonesRequest = exports.Statistics = void 0;
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const interchainstaking_1 = require("./interchainstaking");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseStatistics() {
    return {
        chain_id: "",
        deposited: helpers_1.Long.ZERO,
        deposits: helpers_1.Long.ZERO,
        depositors: helpers_1.Long.ZERO,
        delegated: helpers_1.Long.ZERO,
        supply: helpers_1.Long.ZERO,
        distance_to_target: ""
    };
}
exports.Statistics = {
    typeUrl: "/quicksilver.interchainstaking.v1.Statistics",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain_id !== "") {
            writer.uint32(10).string(message.chain_id);
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
        if (message.distance_to_target !== "") {
            writer.uint32(58).string(message.distance_to_target);
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
                    message.chain_id = reader.string();
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
                    message.distance_to_target = reader.string();
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
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : "",
            deposited: (0, helpers_1.isSet)(object.deposited) ? helpers_1.Long.fromValue(object.deposited) : helpers_1.Long.ZERO,
            deposits: (0, helpers_1.isSet)(object.deposits) ? helpers_1.Long.fromValue(object.deposits) : helpers_1.Long.ZERO,
            depositors: (0, helpers_1.isSet)(object.depositors) ? helpers_1.Long.fromValue(object.depositors) : helpers_1.Long.ZERO,
            delegated: (0, helpers_1.isSet)(object.delegated) ? helpers_1.Long.fromValue(object.delegated) : helpers_1.Long.ZERO,
            supply: (0, helpers_1.isSet)(object.supply) ? helpers_1.Long.fromValue(object.supply) : helpers_1.Long.ZERO,
            distance_to_target: (0, helpers_1.isSet)(object.distance_to_target) ? String(object.distance_to_target) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.deposited !== undefined && (obj.deposited = (message.deposited || helpers_1.Long.ZERO).toString());
        message.deposits !== undefined && (obj.deposits = (message.deposits || helpers_1.Long.ZERO).toString());
        message.depositors !== undefined && (obj.depositors = (message.depositors || helpers_1.Long.ZERO).toString());
        message.delegated !== undefined && (obj.delegated = (message.delegated || helpers_1.Long.ZERO).toString());
        message.supply !== undefined && (obj.supply = (message.supply || helpers_1.Long.ZERO).toString());
        message.distance_to_target !== undefined && (obj.distance_to_target = message.distance_to_target);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseStatistics();
        message.chain_id = object.chain_id ?? "";
        message.deposited = object.deposited !== undefined && object.deposited !== null ? helpers_1.Long.fromValue(object.deposited) : helpers_1.Long.ZERO;
        message.deposits = object.deposits !== undefined && object.deposits !== null ? helpers_1.Long.fromValue(object.deposits) : helpers_1.Long.ZERO;
        message.depositors = object.depositors !== undefined && object.depositors !== null ? helpers_1.Long.fromValue(object.depositors) : helpers_1.Long.ZERO;
        message.delegated = object.delegated !== undefined && object.delegated !== null ? helpers_1.Long.fromValue(object.delegated) : helpers_1.Long.ZERO;
        message.supply = object.supply !== undefined && object.supply !== null ? helpers_1.Long.fromValue(object.supply) : helpers_1.Long.ZERO;
        message.distance_to_target = object.distance_to_target ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            chain_id: object.chain_id,
            deposited: helpers_1.Long.fromString(object.deposited),
            deposits: helpers_1.Long.fromString(object.deposits),
            depositors: helpers_1.Long.fromString(object.depositors),
            delegated: helpers_1.Long.fromString(object.delegated),
            supply: helpers_1.Long.fromString(object.supply),
            distance_to_target: object.distance_to_target
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chain_id;
        obj.deposited = message.deposited ? message.deposited.toString() : undefined;
        obj.deposits = message.deposits ? message.deposits.toString() : undefined;
        obj.depositors = message.depositors ? message.depositors.toString() : undefined;
        obj.delegated = message.delegated ? message.delegated.toString() : undefined;
        obj.supply = message.supply ? message.supply.toString() : undefined;
        obj.distance_to_target = message.distance_to_target;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Statistics.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Statistics.decode(message.value);
    },
    toProto(message) {
        return exports.Statistics.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.Statistics",
            value: exports.Statistics.encode(message).finish()
        };
    }
};
function createBaseQueryZonesRequest() {
    return {
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryZonesRequest = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryZonesRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
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
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryZonesRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryZonesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryZonesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryZonesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryZonesRequest",
            value: exports.QueryZonesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryZonesResponse() {
    return {
        zones: [],
        stats: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryZonesResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryZonesResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.zones) {
            interchainstaking_1.Zone.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.stats) {
            exports.Statistics.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
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
                    message.zones.push(interchainstaking_1.Zone.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.stats.push(exports.Statistics.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            zones: Array.isArray(object?.zones) ? object.zones.map((e) => interchainstaking_1.Zone.fromJSON(e)) : [],
            stats: Array.isArray(object?.stats) ? object.stats.map((e) => exports.Statistics.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.zones) {
            obj.zones = message.zones.map(e => e ? interchainstaking_1.Zone.toJSON(e) : undefined);
        }
        else {
            obj.zones = [];
        }
        if (message.stats) {
            obj.stats = message.stats.map(e => e ? exports.Statistics.toJSON(e) : undefined);
        }
        else {
            obj.stats = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryZonesResponse();
        message.zones = object.zones?.map(e => interchainstaking_1.Zone.fromPartial(e)) || [];
        message.stats = object.stats?.map(e => exports.Statistics.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            zones: Array.isArray(object?.zones) ? object.zones.map((e) => interchainstaking_1.Zone.fromAmino(e)) : [],
            stats: Array.isArray(object?.stats) ? object.stats.map((e) => exports.Statistics.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.zones) {
            obj.zones = message.zones.map(e => e ? interchainstaking_1.Zone.toAmino(e) : undefined);
        }
        else {
            obj.zones = [];
        }
        if (message.stats) {
            obj.stats = message.stats.map(e => e ? exports.Statistics.toAmino(e) : undefined);
        }
        else {
            obj.stats = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryZonesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryZonesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryZonesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryZonesResponse",
            value: exports.QueryZonesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryZoneRequest() {
    return {
        chain_id: ""
    };
}
exports.QueryZoneRequest = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain_id !== "") {
            writer.uint32(10).string(message.chain_id);
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
                    message.chain_id = reader.string();
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
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryZoneRequest();
        message.chain_id = object.chain_id ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            chain_id: object.chain_id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chain_id;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryZoneRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryZoneRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryZoneRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneRequest",
            value: exports.QueryZoneRequest.encode(message).finish()
        };
    }
};
function createBaseQueryZoneResponse() {
    return {
        zone: interchainstaking_1.Zone.fromPartial({}),
        stats: exports.Statistics.fromPartial({})
    };
}
exports.QueryZoneResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.zone !== undefined) {
            interchainstaking_1.Zone.encode(message.zone, writer.uint32(10).fork()).ldelim();
        }
        if (message.stats !== undefined) {
            exports.Statistics.encode(message.stats, writer.uint32(18).fork()).ldelim();
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
                    message.zone = interchainstaking_1.Zone.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.stats = exports.Statistics.decode(reader, reader.uint32());
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
            zone: (0, helpers_1.isSet)(object.zone) ? interchainstaking_1.Zone.fromJSON(object.zone) : undefined,
            stats: (0, helpers_1.isSet)(object.stats) ? exports.Statistics.fromJSON(object.stats) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.zone !== undefined && (obj.zone = message.zone ? interchainstaking_1.Zone.toJSON(message.zone) : undefined);
        message.stats !== undefined && (obj.stats = message.stats ? exports.Statistics.toJSON(message.stats) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryZoneResponse();
        message.zone = object.zone !== undefined && object.zone !== null ? interchainstaking_1.Zone.fromPartial(object.zone) : undefined;
        message.stats = object.stats !== undefined && object.stats !== null ? exports.Statistics.fromPartial(object.stats) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            zone: object?.zone ? interchainstaking_1.Zone.fromAmino(object.zone) : undefined,
            stats: object?.stats ? exports.Statistics.fromAmino(object.stats) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.zone = message.zone ? interchainstaking_1.Zone.toAmino(message.zone) : undefined;
        obj.stats = message.stats ? exports.Statistics.toAmino(message.stats) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryZoneResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryZoneResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryZoneResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneResponse",
            value: exports.QueryZoneResponse.encode(message).finish()
        };
    }
};
function createBaseQueryZoneValidatorsRequest() {
    return {
        chain_id: "",
        status: "",
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryZoneValidatorsRequest = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneValidatorsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain_id !== "") {
            writer.uint32(10).string(message.chain_id);
        }
        if (message.status !== "") {
            writer.uint32(18).string(message.status);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
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
                    message.chain_id = reader.string();
                    break;
                case 2:
                    message.status = reader.string();
                    break;
                case 3:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : "",
            status: (0, helpers_1.isSet)(object.status) ? String(object.status) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.status !== undefined && (obj.status = message.status);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryZoneValidatorsRequest();
        message.chain_id = object.chain_id ?? "";
        message.status = object.status ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            chain_id: object.chain_id,
            status: object.status,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chain_id;
        obj.status = message.status;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryZoneValidatorsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryZoneValidatorsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryZoneValidatorsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneValidatorsRequest",
            value: exports.QueryZoneValidatorsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryZoneValidatorsResponse() {
    return {
        validators: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryZoneValidatorsResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneValidatorsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.validators) {
            interchainstaking_1.Validator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.validators.push(interchainstaking_1.Validator.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => interchainstaking_1.Validator.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? interchainstaking_1.Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryZoneValidatorsResponse();
        message.validators = object.validators?.map(e => interchainstaking_1.Validator.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => interchainstaking_1.Validator.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? interchainstaking_1.Validator.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryZoneValidatorsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryZoneValidatorsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryZoneValidatorsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneValidatorsResponse",
            value: exports.QueryZoneValidatorsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDepositAccountForChainRequest() {
    return {
        chain_id: ""
    };
}
exports.QueryDepositAccountForChainRequest = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryDepositAccountForChainRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain_id !== "") {
            writer.uint32(10).string(message.chain_id);
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
                    message.chain_id = reader.string();
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
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDepositAccountForChainRequest();
        message.chain_id = object.chain_id ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            chain_id: object.chain_id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chain_id;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDepositAccountForChainRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDepositAccountForChainRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDepositAccountForChainRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryDepositAccountForChainRequest",
            value: exports.QueryDepositAccountForChainRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDepositAccountForChainResponse() {
    return {
        deposit_account_address: ""
    };
}
exports.QueryDepositAccountForChainResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryDepositAccountForChainResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.deposit_account_address !== "") {
            writer.uint32(10).string(message.deposit_account_address);
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
                    message.deposit_account_address = reader.string();
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
            deposit_account_address: (0, helpers_1.isSet)(object.deposit_account_address) ? String(object.deposit_account_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.deposit_account_address !== undefined && (obj.deposit_account_address = message.deposit_account_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDepositAccountForChainResponse();
        message.deposit_account_address = object.deposit_account_address ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            deposit_account_address: object.deposit_account_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.deposit_account_address = message.deposit_account_address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDepositAccountForChainResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDepositAccountForChainResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDepositAccountForChainResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryDepositAccountForChainResponse",
            value: exports.QueryDepositAccountForChainResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorIntentRequest() {
    return {
        chain_id: "",
        delegator_address: ""
    };
}
exports.QueryDelegatorIntentRequest = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain_id !== "") {
            writer.uint32(10).string(message.chain_id);
        }
        if (message.delegator_address !== "") {
            writer.uint32(18).string(message.delegator_address);
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
                    message.chain_id = reader.string();
                    break;
                case 2:
                    message.delegator_address = reader.string();
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
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : "",
            delegator_address: (0, helpers_1.isSet)(object.delegator_address) ? String(object.delegator_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorIntentRequest();
        message.chain_id = object.chain_id ?? "";
        message.delegator_address = object.delegator_address ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            chain_id: object.chain_id,
            delegator_address: object.delegator_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chain_id;
        obj.delegator_address = message.delegator_address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDelegatorIntentRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDelegatorIntentRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegatorIntentRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentRequest",
            value: exports.QueryDelegatorIntentRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorIntentResponse() {
    return {
        intent: interchainstaking_1.DelegatorIntent.fromPartial({})
    };
}
exports.QueryDelegatorIntentResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.intent !== undefined) {
            interchainstaking_1.DelegatorIntent.encode(message.intent, writer.uint32(10).fork()).ldelim();
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
                    message.intent = interchainstaking_1.DelegatorIntent.decode(reader, reader.uint32());
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
            intent: (0, helpers_1.isSet)(object.intent) ? interchainstaking_1.DelegatorIntent.fromJSON(object.intent) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.intent !== undefined && (obj.intent = message.intent ? interchainstaking_1.DelegatorIntent.toJSON(message.intent) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorIntentResponse();
        message.intent = object.intent !== undefined && object.intent !== null ? interchainstaking_1.DelegatorIntent.fromPartial(object.intent) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            intent: object?.intent ? interchainstaking_1.DelegatorIntent.fromAmino(object.intent) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.intent = message.intent ? interchainstaking_1.DelegatorIntent.toAmino(message.intent) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDelegatorIntentResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDelegatorIntentResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegatorIntentResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentResponse",
            value: exports.QueryDelegatorIntentResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorIntentsRequest() {
    return {
        delegator_address: ""
    };
}
exports.QueryDelegatorIntentsRequest = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
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
                    message.delegator_address = reader.string();
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
            delegator_address: (0, helpers_1.isSet)(object.delegator_address) ? String(object.delegator_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorIntentsRequest();
        message.delegator_address = object.delegator_address ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            delegator_address: object.delegator_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDelegatorIntentsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDelegatorIntentsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegatorIntentsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentsRequest",
            value: exports.QueryDelegatorIntentsRequest.encode(message).finish()
        };
    }
};
function createBaseDelegatorIntentsResponse() {
    return {
        chain_id: "",
        intent: interchainstaking_1.DelegatorIntent.fromPartial({})
    };
}
exports.DelegatorIntentsResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.DelegatorIntentsResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain_id !== "") {
            writer.uint32(10).string(message.chain_id);
        }
        if (message.intent !== undefined) {
            interchainstaking_1.DelegatorIntent.encode(message.intent, writer.uint32(18).fork()).ldelim();
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
                    message.chain_id = reader.string();
                    break;
                case 2:
                    message.intent = interchainstaking_1.DelegatorIntent.decode(reader, reader.uint32());
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
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : "",
            intent: (0, helpers_1.isSet)(object.intent) ? interchainstaking_1.DelegatorIntent.fromJSON(object.intent) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.intent !== undefined && (obj.intent = message.intent ? interchainstaking_1.DelegatorIntent.toJSON(message.intent) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelegatorIntentsResponse();
        message.chain_id = object.chain_id ?? "";
        message.intent = object.intent !== undefined && object.intent !== null ? interchainstaking_1.DelegatorIntent.fromPartial(object.intent) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            chain_id: object.chain_id,
            intent: object?.intent ? interchainstaking_1.DelegatorIntent.fromAmino(object.intent) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chain_id;
        obj.intent = message.intent ? interchainstaking_1.DelegatorIntent.toAmino(message.intent) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DelegatorIntentsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.DelegatorIntentsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.DelegatorIntentsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.DelegatorIntentsResponse",
            value: exports.DelegatorIntentsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorIntentsResponse() {
    return {
        intents: []
    };
}
exports.QueryDelegatorIntentsResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.intents) {
            exports.DelegatorIntentsResponse.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.intents.push(exports.DelegatorIntentsResponse.decode(reader, reader.uint32()));
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
            intents: Array.isArray(object?.intents) ? object.intents.map((e) => exports.DelegatorIntentsResponse.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.intents) {
            obj.intents = message.intents.map(e => e ? exports.DelegatorIntentsResponse.toJSON(e) : undefined);
        }
        else {
            obj.intents = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorIntentsResponse();
        message.intents = object.intents?.map(e => exports.DelegatorIntentsResponse.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            intents: Array.isArray(object?.intents) ? object.intents.map((e) => exports.DelegatorIntentsResponse.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.intents) {
            obj.intents = message.intents.map(e => e ? exports.DelegatorIntentsResponse.toAmino(e) : undefined);
        }
        else {
            obj.intents = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDelegatorIntentsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDelegatorIntentsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegatorIntentsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentsResponse",
            value: exports.QueryDelegatorIntentsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegationsRequest() {
    return {
        chain_id: "",
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryDelegationsRequest = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegationsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain_id !== "") {
            writer.uint32(10).string(message.chain_id);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.chain_id = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegationsRequest();
        message.chain_id = object.chain_id ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            chain_id: object.chain_id,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chain_id;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDelegationsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDelegationsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegationsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegationsRequest",
            value: exports.QueryDelegationsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDelegationsResponse() {
    return {
        delegations: [],
        tvl: helpers_1.Long.ZERO,
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryDelegationsResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegationsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.delegations) {
            interchainstaking_1.Delegation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (!message.tvl.isZero()) {
            writer.uint32(16).int64(message.tvl);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
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
                    message.delegations.push(interchainstaking_1.Delegation.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.tvl = reader.int64();
                    break;
                case 3:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            delegations: Array.isArray(object?.delegations) ? object.delegations.map((e) => interchainstaking_1.Delegation.fromJSON(e)) : [],
            tvl: (0, helpers_1.isSet)(object.tvl) ? helpers_1.Long.fromValue(object.tvl) : helpers_1.Long.ZERO,
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.delegations) {
            obj.delegations = message.delegations.map(e => e ? interchainstaking_1.Delegation.toJSON(e) : undefined);
        }
        else {
            obj.delegations = [];
        }
        message.tvl !== undefined && (obj.tvl = (message.tvl || helpers_1.Long.ZERO).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegationsResponse();
        message.delegations = object.delegations?.map(e => interchainstaking_1.Delegation.fromPartial(e)) || [];
        message.tvl = object.tvl !== undefined && object.tvl !== null ? helpers_1.Long.fromValue(object.tvl) : helpers_1.Long.ZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            delegations: Array.isArray(object?.delegations) ? object.delegations.map((e) => interchainstaking_1.Delegation.fromAmino(e)) : [],
            tvl: helpers_1.Long.fromString(object.tvl),
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.delegations) {
            obj.delegations = message.delegations.map(e => e ? interchainstaking_1.Delegation.toAmino(e) : undefined);
        }
        else {
            obj.delegations = [];
        }
        obj.tvl = message.tvl ? message.tvl.toString() : undefined;
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDelegationsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDelegationsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegationsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegationsResponse",
            value: exports.QueryDelegationsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryReceiptsRequest() {
    return {
        chain_id: "",
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryReceiptsRequest = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryReceiptsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain_id !== "") {
            writer.uint32(10).string(message.chain_id);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.chain_id = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryReceiptsRequest();
        message.chain_id = object.chain_id ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            chain_id: object.chain_id,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chain_id;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryReceiptsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryReceiptsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryReceiptsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryReceiptsRequest",
            value: exports.QueryReceiptsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryReceiptsResponse() {
    return {
        receipts: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryReceiptsResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryReceiptsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.receipts) {
            interchainstaking_1.Receipt.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.receipts.push(interchainstaking_1.Receipt.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            receipts: Array.isArray(object?.receipts) ? object.receipts.map((e) => interchainstaking_1.Receipt.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.receipts) {
            obj.receipts = message.receipts.map(e => e ? interchainstaking_1.Receipt.toJSON(e) : undefined);
        }
        else {
            obj.receipts = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryReceiptsResponse();
        message.receipts = object.receipts?.map(e => interchainstaking_1.Receipt.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            receipts: Array.isArray(object?.receipts) ? object.receipts.map((e) => interchainstaking_1.Receipt.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.receipts) {
            obj.receipts = message.receipts.map(e => e ? interchainstaking_1.Receipt.toAmino(e) : undefined);
        }
        else {
            obj.receipts = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryReceiptsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryReceiptsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryReceiptsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryReceiptsResponse",
            value: exports.QueryReceiptsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTxStatusRequest() {
    return {
        chain_id: "",
        tx_hash: ""
    };
}
exports.QueryTxStatusRequest = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryTxStatusRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain_id !== "") {
            writer.uint32(10).string(message.chain_id);
        }
        if (message.tx_hash !== "") {
            writer.uint32(18).string(message.tx_hash);
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
                    message.chain_id = reader.string();
                    break;
                case 2:
                    message.tx_hash = reader.string();
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
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : "",
            tx_hash: (0, helpers_1.isSet)(object.tx_hash) ? String(object.tx_hash) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.tx_hash !== undefined && (obj.tx_hash = message.tx_hash);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTxStatusRequest();
        message.chain_id = object.chain_id ?? "";
        message.tx_hash = object.tx_hash ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            chain_id: object.chain_id,
            tx_hash: object.tx_hash
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chain_id;
        obj.tx_hash = message.tx_hash;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTxStatusRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryTxStatusRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTxStatusRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryTxStatusRequest",
            value: exports.QueryTxStatusRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTxStatusResponse() {
    return {
        receipt: interchainstaking_1.Receipt.fromPartial({})
    };
}
exports.QueryTxStatusResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryTxStatusResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.receipt !== undefined) {
            interchainstaking_1.Receipt.encode(message.receipt, writer.uint32(10).fork()).ldelim();
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
                    message.receipt = interchainstaking_1.Receipt.decode(reader, reader.uint32());
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
            receipt: (0, helpers_1.isSet)(object.receipt) ? interchainstaking_1.Receipt.fromJSON(object.receipt) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.receipt !== undefined && (obj.receipt = message.receipt ? interchainstaking_1.Receipt.toJSON(message.receipt) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTxStatusResponse();
        message.receipt = object.receipt !== undefined && object.receipt !== null ? interchainstaking_1.Receipt.fromPartial(object.receipt) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            receipt: object?.receipt ? interchainstaking_1.Receipt.fromAmino(object.receipt) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.receipt = message.receipt ? interchainstaking_1.Receipt.toAmino(message.receipt) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTxStatusResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryTxStatusResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTxStatusResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryTxStatusResponse",
            value: exports.QueryTxStatusResponse.encode(message).finish()
        };
    }
};
function createBaseQueryWithdrawalRecordsRequest() {
    return {
        chain_id: "",
        delegator_address: "",
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryWithdrawalRecordsRequest = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryWithdrawalRecordsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain_id !== "") {
            writer.uint32(10).string(message.chain_id);
        }
        if (message.delegator_address !== "") {
            writer.uint32(18).string(message.delegator_address);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
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
                    message.chain_id = reader.string();
                    break;
                case 2:
                    message.delegator_address = reader.string();
                    break;
                case 3:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : "",
            delegator_address: (0, helpers_1.isSet)(object.delegator_address) ? String(object.delegator_address) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryWithdrawalRecordsRequest();
        message.chain_id = object.chain_id ?? "";
        message.delegator_address = object.delegator_address ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            chain_id: object.chain_id,
            delegator_address: object.delegator_address,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chain_id;
        obj.delegator_address = message.delegator_address;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryWithdrawalRecordsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryWithdrawalRecordsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryWithdrawalRecordsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryWithdrawalRecordsRequest",
            value: exports.QueryWithdrawalRecordsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryWithdrawalRecordsResponse() {
    return {
        withdrawals: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryWithdrawalRecordsResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryWithdrawalRecordsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.withdrawals) {
            interchainstaking_1.WithdrawalRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.withdrawals.push(interchainstaking_1.WithdrawalRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            withdrawals: Array.isArray(object?.withdrawals) ? object.withdrawals.map((e) => interchainstaking_1.WithdrawalRecord.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.withdrawals) {
            obj.withdrawals = message.withdrawals.map(e => e ? interchainstaking_1.WithdrawalRecord.toJSON(e) : undefined);
        }
        else {
            obj.withdrawals = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryWithdrawalRecordsResponse();
        message.withdrawals = object.withdrawals?.map(e => interchainstaking_1.WithdrawalRecord.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            withdrawals: Array.isArray(object?.withdrawals) ? object.withdrawals.map((e) => interchainstaking_1.WithdrawalRecord.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.withdrawals) {
            obj.withdrawals = message.withdrawals.map(e => e ? interchainstaking_1.WithdrawalRecord.toAmino(e) : undefined);
        }
        else {
            obj.withdrawals = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryWithdrawalRecordsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryWithdrawalRecordsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryWithdrawalRecordsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryWithdrawalRecordsResponse",
            value: exports.QueryWithdrawalRecordsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryUserWithdrawalRecordsRequest() {
    return {
        user_address: "",
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryUserWithdrawalRecordsRequest = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryUserWithdrawalRecordsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.user_address !== "") {
            writer.uint32(10).string(message.user_address);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.user_address = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            user_address: (0, helpers_1.isSet)(object.user_address) ? String(object.user_address) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.user_address !== undefined && (obj.user_address = message.user_address);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUserWithdrawalRecordsRequest();
        message.user_address = object.user_address ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            user_address: object.user_address,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.user_address = message.user_address;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryUserWithdrawalRecordsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryUserWithdrawalRecordsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUserWithdrawalRecordsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryUserWithdrawalRecordsRequest",
            value: exports.QueryUserWithdrawalRecordsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryUnbondingRecordsRequest() {
    return {
        chain_id: "",
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryUnbondingRecordsRequest = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryUnbondingRecordsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain_id !== "") {
            writer.uint32(10).string(message.chain_id);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.chain_id = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUnbondingRecordsRequest();
        message.chain_id = object.chain_id ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            chain_id: object.chain_id,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chain_id;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryUnbondingRecordsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryUnbondingRecordsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUnbondingRecordsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryUnbondingRecordsRequest",
            value: exports.QueryUnbondingRecordsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryUnbondingRecordsResponse() {
    return {
        unbondings: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryUnbondingRecordsResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryUnbondingRecordsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.unbondings) {
            interchainstaking_1.UnbondingRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.unbondings.push(interchainstaking_1.UnbondingRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            unbondings: Array.isArray(object?.unbondings) ? object.unbondings.map((e) => interchainstaking_1.UnbondingRecord.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.unbondings) {
            obj.unbondings = message.unbondings.map(e => e ? interchainstaking_1.UnbondingRecord.toJSON(e) : undefined);
        }
        else {
            obj.unbondings = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUnbondingRecordsResponse();
        message.unbondings = object.unbondings?.map(e => interchainstaking_1.UnbondingRecord.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            unbondings: Array.isArray(object?.unbondings) ? object.unbondings.map((e) => interchainstaking_1.UnbondingRecord.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.unbondings) {
            obj.unbondings = message.unbondings.map(e => e ? interchainstaking_1.UnbondingRecord.toAmino(e) : undefined);
        }
        else {
            obj.unbondings = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryUnbondingRecordsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryUnbondingRecordsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUnbondingRecordsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryUnbondingRecordsResponse",
            value: exports.QueryUnbondingRecordsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryRedelegationRecordsRequest() {
    return {
        chain_id: "",
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryRedelegationRecordsRequest = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryRedelegationRecordsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain_id !== "") {
            writer.uint32(10).string(message.chain_id);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.chain_id = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryRedelegationRecordsRequest();
        message.chain_id = object.chain_id ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            chain_id: object.chain_id,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chain_id;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryRedelegationRecordsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryRedelegationRecordsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryRedelegationRecordsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryRedelegationRecordsRequest",
            value: exports.QueryRedelegationRecordsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryRedelegationRecordsResponse() {
    return {
        redelegations: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryRedelegationRecordsResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryRedelegationRecordsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.redelegations) {
            interchainstaking_1.RedelegationRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.redelegations.push(interchainstaking_1.RedelegationRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            redelegations: Array.isArray(object?.redelegations) ? object.redelegations.map((e) => interchainstaking_1.RedelegationRecord.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.redelegations) {
            obj.redelegations = message.redelegations.map(e => e ? interchainstaking_1.RedelegationRecord.toJSON(e) : undefined);
        }
        else {
            obj.redelegations = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryRedelegationRecordsResponse();
        message.redelegations = object.redelegations?.map(e => interchainstaking_1.RedelegationRecord.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            redelegations: Array.isArray(object?.redelegations) ? object.redelegations.map((e) => interchainstaking_1.RedelegationRecord.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.redelegations) {
            obj.redelegations = message.redelegations.map(e => e ? interchainstaking_1.RedelegationRecord.toAmino(e) : undefined);
        }
        else {
            obj.redelegations = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryRedelegationRecordsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryRedelegationRecordsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryRedelegationRecordsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryRedelegationRecordsResponse",
            value: exports.QueryRedelegationRecordsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryMappedAccountsRequest() {
    return {
        address: "",
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryMappedAccountsRequest = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryMappedAccountsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryMappedAccountsRequest();
        message.address = object.address ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryMappedAccountsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryMappedAccountsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryMappedAccountsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryMappedAccountsRequest",
            value: exports.QueryMappedAccountsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryMappedAccountsResponse_RemoteAddressMapEntry() {
    return {
        key: "",
        value: new Uint8Array()
    };
}
exports.QueryMappedAccountsResponse_RemoteAddressMapEntry = {
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
            key: (0, helpers_1.isSet)(object.key) ? String(object.key) : "",
            value: (0, helpers_1.isSet)(object.value) ? (0, helpers_1.bytesFromBase64)(object.value) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = (0, helpers_1.base64FromBytes)(message.value !== undefined ? message.value : new Uint8Array()));
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
        return exports.QueryMappedAccountsResponse_RemoteAddressMapEntry.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryMappedAccountsResponse_RemoteAddressMapEntry.decode(message.value);
    },
    toProto(message) {
        return exports.QueryMappedAccountsResponse_RemoteAddressMapEntry.encode(message).finish();
    }
};
function createBaseQueryMappedAccountsResponse() {
    return {
        RemoteAddressMap: {},
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryMappedAccountsResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.QueryMappedAccountsResponse",
    encode(message, writer = _m0.Writer.create()) {
        Object.entries(message.RemoteAddressMap).forEach(([key, value]) => {
            exports.QueryMappedAccountsResponse_RemoteAddressMapEntry.encode({
                key: key,
                value
            }, writer.uint32(10).fork()).ldelim();
        });
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    const entry1 = exports.QueryMappedAccountsResponse_RemoteAddressMapEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.RemoteAddressMap[entry1.key] = entry1.value;
                    }
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            RemoteAddressMap: (0, helpers_1.isObject)(object.RemoteAddressMap) ? Object.entries(object.RemoteAddressMap).reduce((acc, [key, value]) => {
                acc[key] = bytes.fromJSON(value);
                return acc;
            }, {}) : {},
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
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
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            RemoteAddressMap: (0, helpers_1.isObject)(object.RemoteAddressMap) ? Object.entries(object.RemoteAddressMap).reduce((acc, [key, value]) => {
                acc[key] = bytes.fromAmino(value);
                return acc;
            }, {}) : {},
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
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
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryMappedAccountsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryMappedAccountsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryMappedAccountsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.QueryMappedAccountsResponse",
            value: exports.QueryMappedAccountsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map