import { ZoneDrop, ClaimRecord, statusFromJSON, statusToJSON } from "./airdrop";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
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
        return QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/quicksilver.airdrop.v1.QueryParamsResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = Params.decode(reader, reader.uint32());
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryZoneDropRequest() {
    return {
        chainId: ""
    };
}
export const QueryZoneDropRequest = {
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
            chainId: isSet(object.chainId) ? String(object.chainId) : ""
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
        return QueryZoneDropRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryZoneDropRequest.decode(message.value);
    },
    toProto(message) {
        return QueryZoneDropRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropRequest",
            value: QueryZoneDropRequest.encode(message).finish()
        };
    }
};
function createBaseQueryZoneDropResponse() {
    return {
        zoneDrop: ZoneDrop.fromPartial({})
    };
}
export const QueryZoneDropResponse = {
    typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.zoneDrop !== undefined) {
            ZoneDrop.encode(message.zoneDrop, writer.uint32(10).fork()).ldelim();
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
                    message.zoneDrop = ZoneDrop.decode(reader, reader.uint32());
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
            zoneDrop: isSet(object.zoneDrop) ? ZoneDrop.fromJSON(object.zoneDrop) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.zoneDrop !== undefined && (obj.zoneDrop = message.zoneDrop ? ZoneDrop.toJSON(message.zoneDrop) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryZoneDropResponse();
        message.zoneDrop = object.zoneDrop !== undefined && object.zoneDrop !== null ? ZoneDrop.fromPartial(object.zoneDrop) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            zoneDrop: object?.zone_drop ? ZoneDrop.fromAmino(object.zone_drop) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.zone_drop = message.zoneDrop ? ZoneDrop.toAmino(message.zoneDrop) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryZoneDropResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryZoneDropResponse.decode(message.value);
    },
    toProto(message) {
        return QueryZoneDropResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropResponse",
            value: QueryZoneDropResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAccountBalanceRequest() {
    return {
        chainId: ""
    };
}
export const QueryAccountBalanceRequest = {
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
            chainId: isSet(object.chainId) ? String(object.chainId) : ""
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
        return QueryAccountBalanceRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAccountBalanceRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAccountBalanceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.QueryAccountBalanceRequest",
            value: QueryAccountBalanceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAccountBalanceResponse() {
    return {
        accountBalance: Coin.fromPartial({})
    };
}
export const QueryAccountBalanceResponse = {
    typeUrl: "/quicksilver.airdrop.v1.QueryAccountBalanceResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.accountBalance !== undefined) {
            Coin.encode(message.accountBalance, writer.uint32(10).fork()).ldelim();
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
                    message.accountBalance = Coin.decode(reader, reader.uint32());
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
            accountBalance: isSet(object.accountBalance) ? Coin.fromJSON(object.accountBalance) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.accountBalance !== undefined && (obj.accountBalance = message.accountBalance ? Coin.toJSON(message.accountBalance) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountBalanceResponse();
        message.accountBalance = object.accountBalance !== undefined && object.accountBalance !== null ? Coin.fromPartial(object.accountBalance) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            accountBalance: object?.account_balance ? Coin.fromAmino(object.account_balance) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.account_balance = message.accountBalance ? Coin.toAmino(message.accountBalance) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAccountBalanceResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAccountBalanceResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAccountBalanceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.QueryAccountBalanceResponse",
            value: QueryAccountBalanceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryZoneDropsRequest() {
    return {
        status: 0,
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryZoneDropsRequest = {
    typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
            status: isSet(object.status) ? statusFromJSON(object.status) : -1,
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = statusToJSON(message.status));
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryZoneDropsRequest();
        message.status = object.status ?? 0;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            status: isSet(object.status) ? statusFromJSON(object.status) : -1,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.status = message.status;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryZoneDropsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryZoneDropsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryZoneDropsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropsRequest",
            value: QueryZoneDropsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryZoneDropsResponse() {
    return {
        zoneDrops: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryZoneDropsResponse = {
    typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.zoneDrops) {
            ZoneDrop.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.zoneDrops.push(ZoneDrop.decode(reader, reader.uint32()));
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
            zoneDrops: Array.isArray(object?.zoneDrops) ? object.zoneDrops.map((e) => ZoneDrop.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.zoneDrops) {
            obj.zoneDrops = message.zoneDrops.map(e => e ? ZoneDrop.toJSON(e) : undefined);
        }
        else {
            obj.zoneDrops = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryZoneDropsResponse();
        message.zoneDrops = object.zoneDrops?.map(e => ZoneDrop.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            zoneDrops: Array.isArray(object?.zone_drops) ? object.zone_drops.map((e) => ZoneDrop.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.zoneDrops) {
            obj.zone_drops = message.zoneDrops.map(e => e ? ZoneDrop.toAmino(e) : undefined);
        }
        else {
            obj.zone_drops = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryZoneDropsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryZoneDropsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryZoneDropsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropsResponse",
            value: QueryZoneDropsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClaimRecordRequest() {
    return {
        chainId: "",
        address: ""
    };
}
export const QueryClaimRecordRequest = {
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
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            address: isSet(object.address) ? String(object.address) : ""
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
        return QueryClaimRecordRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryClaimRecordRequest.decode(message.value);
    },
    toProto(message) {
        return QueryClaimRecordRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordRequest",
            value: QueryClaimRecordRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClaimRecordResponse() {
    return {
        claimRecord: ClaimRecord.fromPartial({})
    };
}
export const QueryClaimRecordResponse = {
    typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.claimRecord !== undefined) {
            ClaimRecord.encode(message.claimRecord, writer.uint32(10).fork()).ldelim();
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
                    message.claimRecord = ClaimRecord.decode(reader, reader.uint32());
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
            claimRecord: isSet(object.claimRecord) ? ClaimRecord.fromJSON(object.claimRecord) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.claimRecord !== undefined && (obj.claimRecord = message.claimRecord ? ClaimRecord.toJSON(message.claimRecord) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClaimRecordResponse();
        message.claimRecord = object.claimRecord !== undefined && object.claimRecord !== null ? ClaimRecord.fromPartial(object.claimRecord) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            claimRecord: object?.claim_record ? ClaimRecord.fromAmino(object.claim_record) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.claim_record = message.claimRecord ? ClaimRecord.toAmino(message.claimRecord) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClaimRecordResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryClaimRecordResponse.decode(message.value);
    },
    toProto(message) {
        return QueryClaimRecordResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordResponse",
            value: QueryClaimRecordResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClaimRecordsRequest() {
    return {
        chainId: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryClaimRecordsRequest = {
    typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordsRequest",
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
        const message = createBaseQueryClaimRecordsRequest();
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
        const message = createBaseQueryClaimRecordsRequest();
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
        return QueryClaimRecordsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryClaimRecordsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryClaimRecordsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordsRequest",
            value: QueryClaimRecordsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClaimRecordsResponse() {
    return {
        claimRecords: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryClaimRecordsResponse = {
    typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.claimRecords) {
            ClaimRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.claimRecords.push(ClaimRecord.decode(reader, reader.uint32()));
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
            claimRecords: Array.isArray(object?.claimRecords) ? object.claimRecords.map((e) => ClaimRecord.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.claimRecords) {
            obj.claimRecords = message.claimRecords.map(e => e ? ClaimRecord.toJSON(e) : undefined);
        }
        else {
            obj.claimRecords = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClaimRecordsResponse();
        message.claimRecords = object.claimRecords?.map(e => ClaimRecord.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            claimRecords: Array.isArray(object?.claim_records) ? object.claim_records.map((e) => ClaimRecord.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.claimRecords) {
            obj.claim_records = message.claimRecords.map(e => e ? ClaimRecord.toAmino(e) : undefined);
        }
        else {
            obj.claim_records = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClaimRecordsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryClaimRecordsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryClaimRecordsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordsResponse",
            value: QueryClaimRecordsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map