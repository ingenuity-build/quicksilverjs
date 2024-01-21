import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Claim } from "./claimsmanager";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseQueryClaimsRequest() {
    return {
        chainId: "",
        address: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryClaimsRequest = {
    typeUrl: "/quicksilver.claimsmanager.v1.QueryClaimsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClaimsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
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
            address: isSet(object.address) ? String(object.address) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.address !== undefined && (obj.address = message.address);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClaimsRequest();
        message.chainId = object.chainId ?? "";
        message.address = object.address ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            chainId: object.chain_id,
            address: object.address,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        obj.address = message.address;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClaimsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryClaimsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryClaimsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.claimsmanager.v1.QueryClaimsRequest",
            value: QueryClaimsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClaimsResponse() {
    return {
        claims: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryClaimsResponse = {
    typeUrl: "/quicksilver.claimsmanager.v1.QueryClaimsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.claims) {
            Claim.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClaimsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.claims.push(Claim.decode(reader, reader.uint32()));
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
            claims: Array.isArray(object?.claims) ? object.claims.map((e) => Claim.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.claims) {
            obj.claims = message.claims.map(e => e ? Claim.toJSON(e) : undefined);
        }
        else {
            obj.claims = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClaimsResponse();
        message.claims = object.claims?.map(e => Claim.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            claims: Array.isArray(object?.claims) ? object.claims.map((e) => Claim.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.claims) {
            obj.claims = message.claims.map(e => e ? Claim.toAmino(e) : undefined);
        }
        else {
            obj.claims = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClaimsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryClaimsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryClaimsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.claimsmanager.v1.QueryClaimsResponse",
            value: QueryClaimsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map