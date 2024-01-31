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
        chain_id: ""
    };
}
export const QueryZoneDropRequest = {
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
            chain_id: isSet(object.chain_id) ? String(object.chain_id) : ""
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
        zone_drop: ZoneDrop.fromPartial({})
    };
}
export const QueryZoneDropResponse = {
    typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.zone_drop !== undefined) {
            ZoneDrop.encode(message.zone_drop, writer.uint32(10).fork()).ldelim();
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
                    message.zone_drop = ZoneDrop.decode(reader, reader.uint32());
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
            zone_drop: isSet(object.zone_drop) ? ZoneDrop.fromJSON(object.zone_drop) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.zone_drop !== undefined && (obj.zone_drop = message.zone_drop ? ZoneDrop.toJSON(message.zone_drop) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryZoneDropResponse();
        message.zone_drop = object.zone_drop !== undefined && object.zone_drop !== null ? ZoneDrop.fromPartial(object.zone_drop) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            zone_drop: object?.zone_drop ? ZoneDrop.fromAmino(object.zone_drop) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.zone_drop = message.zone_drop ? ZoneDrop.toAmino(message.zone_drop) : undefined;
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
        chain_id: ""
    };
}
export const QueryAccountBalanceRequest = {
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
            chain_id: isSet(object.chain_id) ? String(object.chain_id) : ""
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
        account_balance: Coin.fromPartial({})
    };
}
export const QueryAccountBalanceResponse = {
    typeUrl: "/quicksilver.airdrop.v1.QueryAccountBalanceResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.account_balance !== undefined) {
            Coin.encode(message.account_balance, writer.uint32(10).fork()).ldelim();
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
                    message.account_balance = Coin.decode(reader, reader.uint32());
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
            account_balance: isSet(object.account_balance) ? Coin.fromJSON(object.account_balance) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.account_balance !== undefined && (obj.account_balance = message.account_balance ? Coin.toJSON(message.account_balance) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountBalanceResponse();
        message.account_balance = object.account_balance !== undefined && object.account_balance !== null ? Coin.fromPartial(object.account_balance) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            account_balance: object?.account_balance ? Coin.fromAmino(object.account_balance) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.account_balance = message.account_balance ? Coin.toAmino(message.account_balance) : undefined;
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
        zone_drops: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryZoneDropsResponse = {
    typeUrl: "/quicksilver.airdrop.v1.QueryZoneDropsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.zone_drops) {
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
                    message.zone_drops.push(ZoneDrop.decode(reader, reader.uint32()));
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
            zone_drops: Array.isArray(object?.zone_drops) ? object.zone_drops.map((e) => ZoneDrop.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.zone_drops) {
            obj.zone_drops = message.zone_drops.map(e => e ? ZoneDrop.toJSON(e) : undefined);
        }
        else {
            obj.zone_drops = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryZoneDropsResponse();
        message.zone_drops = object.zone_drops?.map(e => ZoneDrop.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            zone_drops: Array.isArray(object?.zone_drops) ? object.zone_drops.map((e) => ZoneDrop.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.zone_drops) {
            obj.zone_drops = message.zone_drops.map(e => e ? ZoneDrop.toAmino(e) : undefined);
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
        chain_id: "",
        address: ""
    };
}
export const QueryClaimRecordRequest = {
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
            chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
            address: isSet(object.address) ? String(object.address) : ""
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
        claim_record: ClaimRecord.fromPartial({})
    };
}
export const QueryClaimRecordResponse = {
    typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.claim_record !== undefined) {
            ClaimRecord.encode(message.claim_record, writer.uint32(10).fork()).ldelim();
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
                    message.claim_record = ClaimRecord.decode(reader, reader.uint32());
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
            claim_record: isSet(object.claim_record) ? ClaimRecord.fromJSON(object.claim_record) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.claim_record !== undefined && (obj.claim_record = message.claim_record ? ClaimRecord.toJSON(message.claim_record) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClaimRecordResponse();
        message.claim_record = object.claim_record !== undefined && object.claim_record !== null ? ClaimRecord.fromPartial(object.claim_record) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            claim_record: object?.claim_record ? ClaimRecord.fromAmino(object.claim_record) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.claim_record = message.claim_record ? ClaimRecord.toAmino(message.claim_record) : undefined;
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
        chain_id: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryClaimRecordsRequest = {
    typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain_id !== "") {
            writer.uint32(10).string(message.chain_id);
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
                    message.chain_id = reader.string();
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
            chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClaimRecordsRequest();
        message.chain_id = object.chain_id ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            chain_id: object.chain_id,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chain_id;
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
        claim_records: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryClaimRecordsResponse = {
    typeUrl: "/quicksilver.airdrop.v1.QueryClaimRecordsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.claim_records) {
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
                    message.claim_records.push(ClaimRecord.decode(reader, reader.uint32()));
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
            claim_records: Array.isArray(object?.claim_records) ? object.claim_records.map((e) => ClaimRecord.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.claim_records) {
            obj.claim_records = message.claim_records.map(e => e ? ClaimRecord.toJSON(e) : undefined);
        }
        else {
            obj.claim_records = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClaimRecordsResponse();
        message.claim_records = object.claim_records?.map(e => ClaimRecord.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            claim_records: Array.isArray(object?.claim_records) ? object.claim_records.map((e) => ClaimRecord.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.claim_records) {
            obj.claim_records = message.claim_records.map(e => e ? ClaimRecord.toAmino(e) : undefined);
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