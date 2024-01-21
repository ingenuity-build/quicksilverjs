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
exports.QueryClaimRecordsResponse = exports.QueryClaimRecordsRequest = exports.QueryClaimRecordResponse = exports.QueryClaimRecordRequest = exports.QueryZoneDropsResponse = exports.QueryZoneDropsRequest = exports.QueryAccountBalanceResponse = exports.QueryAccountBalanceRequest = exports.QueryZoneDropResponse = exports.QueryZoneDropRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
const airdrop_1 = require("./airdrop");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const params_1 = require("./params");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../../helpers");
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/quicksilver.airdrop.v1.QueryParamsRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: params_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/quicksilver.airdrop.v1.QueryParamsResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
            params: (0, helpers_1.isSet)(object.params) ? params_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? params_1.Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryZoneDropRequest() {
    return {
        chainId: ""
    };
}
exports.QueryZoneDropRequest = {
    typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryZoneDropRequest();
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
            chainId: (0, helpers_1.isSet)(object.chainId) ? String(object.chainId) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryZoneDropRequest();
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
        return exports.QueryZoneDropRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryZoneDropRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryZoneDropRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropRequest",
            value: exports.QueryZoneDropRequest.encode(message).finish()
        };
    }
};
function createBaseQueryZoneDropResponse() {
    return {
        zoneDrop: airdrop_1.ZoneDrop.fromPartial({})
    };
}
exports.QueryZoneDropResponse = {
    typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.zoneDrop !== undefined) {
            airdrop_1.ZoneDrop.encode(message.zoneDrop, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryZoneDropResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zoneDrop = airdrop_1.ZoneDrop.decode(reader, reader.uint32());
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
            zoneDrop: (0, helpers_1.isSet)(object.zoneDrop) ? airdrop_1.ZoneDrop.fromJSON(object.zoneDrop) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.zoneDrop !== undefined && (obj.zoneDrop = message.zoneDrop ? airdrop_1.ZoneDrop.toJSON(message.zoneDrop) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryZoneDropResponse();
        message.zoneDrop = object.zoneDrop !== undefined && object.zoneDrop !== null ? airdrop_1.ZoneDrop.fromPartial(object.zoneDrop) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            zoneDrop: object?.zone_drop ? airdrop_1.ZoneDrop.fromAmino(object.zone_drop) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.zone_drop = message.zoneDrop ? airdrop_1.ZoneDrop.toAmino(message.zoneDrop) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryZoneDropResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryZoneDropResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryZoneDropResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropResponse",
            value: exports.QueryZoneDropResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAccountBalanceRequest() {
    return {
        chainId: ""
    };
}
exports.QueryAccountBalanceRequest = {
    typeUrl: "/quicksilver.airdrop.v1.QueryAccountBalanceRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountBalanceRequest();
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
            chainId: (0, helpers_1.isSet)(object.chainId) ? String(object.chainId) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountBalanceRequest();
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
        return exports.QueryAccountBalanceRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAccountBalanceRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAccountBalanceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.QueryAccountBalanceRequest",
            value: exports.QueryAccountBalanceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAccountBalanceResponse() {
    return {
        accountBalance: coin_1.Coin.fromPartial({})
    };
}
exports.QueryAccountBalanceResponse = {
    typeUrl: "/quicksilver.airdrop.v1.QueryAccountBalanceResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.accountBalance !== undefined) {
            coin_1.Coin.encode(message.accountBalance, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountBalanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountBalance = coin_1.Coin.decode(reader, reader.uint32());
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
            accountBalance: (0, helpers_1.isSet)(object.accountBalance) ? coin_1.Coin.fromJSON(object.accountBalance) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.accountBalance !== undefined && (obj.accountBalance = message.accountBalance ? coin_1.Coin.toJSON(message.accountBalance) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountBalanceResponse();
        message.accountBalance = object.accountBalance !== undefined && object.accountBalance !== null ? coin_1.Coin.fromPartial(object.accountBalance) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            accountBalance: object?.account_balance ? coin_1.Coin.fromAmino(object.account_balance) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.account_balance = message.accountBalance ? coin_1.Coin.toAmino(message.accountBalance) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAccountBalanceResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAccountBalanceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAccountBalanceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.QueryAccountBalanceResponse",
            value: exports.QueryAccountBalanceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryZoneDropsRequest() {
    return {
        status: 0,
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryZoneDropsRequest = {
    typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryZoneDropsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
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
            status: (0, helpers_1.isSet)(object.status) ? (0, airdrop_1.statusFromJSON)(object.status) : -1,
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = (0, airdrop_1.statusToJSON)(message.status));
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryZoneDropsRequest();
        message.status = object.status ?? 0;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            status: (0, helpers_1.isSet)(object.status) ? (0, airdrop_1.statusFromJSON)(object.status) : -1,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.status = message.status;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryZoneDropsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryZoneDropsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryZoneDropsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropsRequest",
            value: exports.QueryZoneDropsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryZoneDropsResponse() {
    return {
        zoneDrops: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryZoneDropsResponse = {
    typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.zoneDrops) {
            airdrop_1.ZoneDrop.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryZoneDropsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.zoneDrops.push(airdrop_1.ZoneDrop.decode(reader, reader.uint32()));
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
            zoneDrops: Array.isArray(object?.zoneDrops) ? object.zoneDrops.map((e) => airdrop_1.ZoneDrop.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.zoneDrops) {
            obj.zoneDrops = message.zoneDrops.map(e => e ? airdrop_1.ZoneDrop.toJSON(e) : undefined);
        }
        else {
            obj.zoneDrops = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryZoneDropsResponse();
        message.zoneDrops = object.zoneDrops?.map(e => airdrop_1.ZoneDrop.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            zoneDrops: Array.isArray(object?.zone_drops) ? object.zone_drops.map((e) => airdrop_1.ZoneDrop.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.zoneDrops) {
            obj.zone_drops = message.zoneDrops.map(e => e ? airdrop_1.ZoneDrop.toAmino(e) : undefined);
        }
        else {
            obj.zone_drops = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryZoneDropsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryZoneDropsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryZoneDropsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropsResponse",
            value: exports.QueryZoneDropsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClaimRecordRequest() {
    return {
        chainId: "",
        address: ""
    };
}
exports.QueryClaimRecordRequest = {
    typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClaimRecordRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
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
            chainId: (0, helpers_1.isSet)(object.chainId) ? String(object.chainId) : "",
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClaimRecordRequest();
        message.chainId = object.chainId ?? "";
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            chainId: object.chain_id,
            address: object.address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClaimRecordRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryClaimRecordRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClaimRecordRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordRequest",
            value: exports.QueryClaimRecordRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClaimRecordResponse() {
    return {
        claimRecord: airdrop_1.ClaimRecord.fromPartial({})
    };
}
exports.QueryClaimRecordResponse = {
    typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.claimRecord !== undefined) {
            airdrop_1.ClaimRecord.encode(message.claimRecord, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClaimRecordResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.claimRecord = airdrop_1.ClaimRecord.decode(reader, reader.uint32());
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
            claimRecord: (0, helpers_1.isSet)(object.claimRecord) ? airdrop_1.ClaimRecord.fromJSON(object.claimRecord) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.claimRecord !== undefined && (obj.claimRecord = message.claimRecord ? airdrop_1.ClaimRecord.toJSON(message.claimRecord) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClaimRecordResponse();
        message.claimRecord = object.claimRecord !== undefined && object.claimRecord !== null ? airdrop_1.ClaimRecord.fromPartial(object.claimRecord) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            claimRecord: object?.claim_record ? airdrop_1.ClaimRecord.fromAmino(object.claim_record) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.claim_record = message.claimRecord ? airdrop_1.ClaimRecord.toAmino(message.claimRecord) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClaimRecordResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryClaimRecordResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClaimRecordResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordResponse",
            value: exports.QueryClaimRecordResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClaimRecordsRequest() {
    return {
        chainId: "",
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryClaimRecordsRequest = {
    typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClaimRecordsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
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
            chainId: (0, helpers_1.isSet)(object.chainId) ? String(object.chainId) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClaimRecordsRequest();
        message.chainId = object.chainId ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            chainId: object.chain_id,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClaimRecordsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryClaimRecordsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClaimRecordsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordsRequest",
            value: exports.QueryClaimRecordsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClaimRecordsResponse() {
    return {
        claimRecords: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryClaimRecordsResponse = {
    typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.claimRecords) {
            airdrop_1.ClaimRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClaimRecordsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.claimRecords.push(airdrop_1.ClaimRecord.decode(reader, reader.uint32()));
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
            claimRecords: Array.isArray(object?.claimRecords) ? object.claimRecords.map((e) => airdrop_1.ClaimRecord.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.claimRecords) {
            obj.claimRecords = message.claimRecords.map(e => e ? airdrop_1.ClaimRecord.toJSON(e) : undefined);
        }
        else {
            obj.claimRecords = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClaimRecordsResponse();
        message.claimRecords = object.claimRecords?.map(e => airdrop_1.ClaimRecord.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            claimRecords: Array.isArray(object?.claim_records) ? object.claim_records.map((e) => airdrop_1.ClaimRecord.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.claimRecords) {
            obj.claim_records = message.claimRecords.map(e => e ? airdrop_1.ClaimRecord.toAmino(e) : undefined);
        }
        else {
            obj.claim_records = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClaimRecordsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryClaimRecordsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClaimRecordsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordsResponse",
            value: exports.QueryClaimRecordsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map