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
        chain_id: ""
    };
}
exports.QueryZoneDropRequest = {
    typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain_id !== "") {
            writer.uint32(10).string(message.chain_id);
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
        const message = createBaseQueryZoneDropRequest();
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
        zone_drop: airdrop_1.ZoneDrop.fromPartial({})
    };
}
exports.QueryZoneDropResponse = {
    typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.zone_drop !== undefined) {
            airdrop_1.ZoneDrop.encode(message.zone_drop, writer.uint32(10).fork()).ldelim();
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
                    message.zone_drop = airdrop_1.ZoneDrop.decode(reader, reader.uint32());
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
            zone_drop: (0, helpers_1.isSet)(object.zone_drop) ? airdrop_1.ZoneDrop.fromJSON(object.zone_drop) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.zone_drop !== undefined && (obj.zone_drop = message.zone_drop ? airdrop_1.ZoneDrop.toJSON(message.zone_drop) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryZoneDropResponse();
        message.zone_drop = object.zone_drop !== undefined && object.zone_drop !== null ? airdrop_1.ZoneDrop.fromPartial(object.zone_drop) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            zone_drop: object?.zone_drop ? airdrop_1.ZoneDrop.fromAmino(object.zone_drop) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.zone_drop = message.zone_drop ? airdrop_1.ZoneDrop.toAmino(message.zone_drop) : undefined;
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
        chain_id: ""
    };
}
exports.QueryAccountBalanceRequest = {
    typeUrl: "/quicksilver.airdrop.v1.QueryAccountBalanceRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain_id !== "") {
            writer.uint32(10).string(message.chain_id);
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
        const message = createBaseQueryAccountBalanceRequest();
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
        account_balance: coin_1.Coin.fromPartial({})
    };
}
exports.QueryAccountBalanceResponse = {
    typeUrl: "/quicksilver.airdrop.v1.QueryAccountBalanceResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.account_balance !== undefined) {
            coin_1.Coin.encode(message.account_balance, writer.uint32(10).fork()).ldelim();
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
                    message.account_balance = coin_1.Coin.decode(reader, reader.uint32());
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
            account_balance: (0, helpers_1.isSet)(object.account_balance) ? coin_1.Coin.fromJSON(object.account_balance) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.account_balance !== undefined && (obj.account_balance = message.account_balance ? coin_1.Coin.toJSON(message.account_balance) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountBalanceResponse();
        message.account_balance = object.account_balance !== undefined && object.account_balance !== null ? coin_1.Coin.fromPartial(object.account_balance) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            account_balance: object?.account_balance ? coin_1.Coin.fromAmino(object.account_balance) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.account_balance = message.account_balance ? coin_1.Coin.toAmino(message.account_balance) : undefined;
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
        zone_drops: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryZoneDropsResponse = {
    typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.zone_drops) {
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
                    message.zone_drops.push(airdrop_1.ZoneDrop.decode(reader, reader.uint32()));
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
            zone_drops: Array.isArray(object?.zone_drops) ? object.zone_drops.map((e) => airdrop_1.ZoneDrop.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.zone_drops) {
            obj.zone_drops = message.zone_drops.map(e => e ? airdrop_1.ZoneDrop.toJSON(e) : undefined);
        }
        else {
            obj.zone_drops = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryZoneDropsResponse();
        message.zone_drops = object.zone_drops?.map(e => airdrop_1.ZoneDrop.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            zone_drops: Array.isArray(object?.zone_drops) ? object.zone_drops.map((e) => airdrop_1.ZoneDrop.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.zone_drops) {
            obj.zone_drops = message.zone_drops.map(e => e ? airdrop_1.ZoneDrop.toAmino(e) : undefined);
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
        chain_id: "",
        address: ""
    };
}
exports.QueryClaimRecordRequest = {
    typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain_id !== "") {
            writer.uint32(10).string(message.chain_id);
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
                    message.chain_id = reader.string();
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
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : "",
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClaimRecordRequest();
        message.chain_id = object.chain_id ?? "";
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            chain_id: object.chain_id,
            address: object.address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chain_id;
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
        claim_record: airdrop_1.ClaimRecord.fromPartial({})
    };
}
exports.QueryClaimRecordResponse = {
    typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.claim_record !== undefined) {
            airdrop_1.ClaimRecord.encode(message.claim_record, writer.uint32(10).fork()).ldelim();
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
                    message.claim_record = airdrop_1.ClaimRecord.decode(reader, reader.uint32());
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
            claim_record: (0, helpers_1.isSet)(object.claim_record) ? airdrop_1.ClaimRecord.fromJSON(object.claim_record) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.claim_record !== undefined && (obj.claim_record = message.claim_record ? airdrop_1.ClaimRecord.toJSON(message.claim_record) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClaimRecordResponse();
        message.claim_record = object.claim_record !== undefined && object.claim_record !== null ? airdrop_1.ClaimRecord.fromPartial(object.claim_record) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            claim_record: object?.claim_record ? airdrop_1.ClaimRecord.fromAmino(object.claim_record) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.claim_record = message.claim_record ? airdrop_1.ClaimRecord.toAmino(message.claim_record) : undefined;
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
        chain_id: "",
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryClaimRecordsRequest = {
    typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordsRequest",
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
        const message = createBaseQueryClaimRecordsRequest();
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
        const message = createBaseQueryClaimRecordsRequest();
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
        claim_records: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryClaimRecordsResponse = {
    typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.claim_records) {
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
                    message.claim_records.push(airdrop_1.ClaimRecord.decode(reader, reader.uint32()));
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
            claim_records: Array.isArray(object?.claim_records) ? object.claim_records.map((e) => airdrop_1.ClaimRecord.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.claim_records) {
            obj.claim_records = message.claim_records.map(e => e ? airdrop_1.ClaimRecord.toJSON(e) : undefined);
        }
        else {
            obj.claim_records = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClaimRecordsResponse();
        message.claim_records = object.claim_records?.map(e => airdrop_1.ClaimRecord.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            claim_records: Array.isArray(object?.claim_records) ? object.claim_records.map((e) => airdrop_1.ClaimRecord.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.claim_records) {
            obj.claim_records = message.claim_records.map(e => e ? airdrop_1.ClaimRecord.toAmino(e) : undefined);
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