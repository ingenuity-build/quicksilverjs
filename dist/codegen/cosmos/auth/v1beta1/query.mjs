import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Any } from "../../../google/protobuf/any";
import { Params, BaseAccount, ModuleAccount } from "./auth";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseQueryAccountsRequest() {
    return {
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryAccountsRequest = {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountsRequest",
    aminoType: "cosmos-sdk/QueryAccountsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountsRequest();
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
        const message = createBaseQueryAccountsRequest();
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
        return QueryAccountsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAccountsRequest",
            value: QueryAccountsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAccountsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAccountsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryAccountsRequest",
            value: QueryAccountsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAccountsResponse() {
    return {
        accounts: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryAccountsResponse = {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountsResponse",
    aminoType: "cosmos-sdk/QueryAccountsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.accounts) {
            Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accounts.push(Cosmos_authAccountI_InterfaceDecoder(reader));
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
            accounts: Array.isArray(object?.accounts) ? object.accounts.map((e) => Any.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? Any.toJSON(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountsResponse();
        message.accounts = object.accounts?.map(e => Any.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            accounts: Array.isArray(object?.accounts) ? object.accounts.map((e) => Cosmos_authAccountI_FromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? Cosmos_authAccountI_ToAmino(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAccountsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAccountsResponse",
            value: QueryAccountsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAccountsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAccountsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryAccountsResponse",
            value: QueryAccountsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAccountRequest() {
    return {
        address: ""
    };
}
export const QueryAccountRequest = {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountRequest",
    aminoType: "cosmos-sdk/QueryAccountRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            address: isSet(object.address) ? String(object.address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAccountRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAccountRequest",
            value: QueryAccountRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAccountRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAccountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryAccountRequest",
            value: QueryAccountRequest.encode(message).finish()
        };
    }
};
function createBaseQueryModuleAccountsRequest() {
    return {};
}
export const QueryModuleAccountsRequest = {
    typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsRequest",
    aminoType: "cosmos-sdk/QueryModuleAccountsRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleAccountsRequest();
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
        const message = createBaseQueryModuleAccountsRequest();
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
        return QueryModuleAccountsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryModuleAccountsRequest",
            value: QueryModuleAccountsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryModuleAccountsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryModuleAccountsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsRequest",
            value: QueryModuleAccountsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/cosmos.auth.v1beta1.QueryParamsResponse",
    aminoType: "cosmos-sdk/QueryParamsResponse",
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
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsResponse",
            value: QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAccountResponse() {
    return {
        account: Any.fromPartial({})
    };
}
export const QueryAccountResponse = {
    typeUrl: "/cosmos.auth.v1beta1.QueryAccountResponse",
    aminoType: "cosmos-sdk/QueryAccountResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== undefined) {
            Any.encode(message.account, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = Cosmos_authAccountI_InterfaceDecoder(reader);
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
            account: isSet(object.account) ? Any.fromJSON(object.account) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account ? Any.toJSON(message.account) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountResponse();
        message.account = object.account !== undefined && object.account !== null ? Any.fromPartial(object.account) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            account: object?.account ? Cosmos_authAccountI_FromAmino(object.account) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.account = message.account ? Cosmos_authAccountI_ToAmino(message.account) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAccountResponse",
            value: QueryAccountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAccountResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryAccountResponse",
            value: QueryAccountResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/cosmos.auth.v1beta1.QueryParamsRequest",
    aminoType: "cosmos-sdk/QueryParamsRequest",
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
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsRequest",
            value: QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryModuleAccountsResponse() {
    return {
        accounts: []
    };
}
export const QueryModuleAccountsResponse = {
    typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsResponse",
    aminoType: "cosmos-sdk/QueryModuleAccountsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.accounts) {
            Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleAccountsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accounts.push(Cosmos_authModuleAccountI_InterfaceDecoder(reader));
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
            accounts: Array.isArray(object?.accounts) ? object.accounts.map((e) => Any.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? Any.toJSON(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryModuleAccountsResponse();
        message.accounts = object.accounts?.map(e => Any.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            accounts: Array.isArray(object?.accounts) ? object.accounts.map((e) => Cosmos_authModuleAccountI_FromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? Cosmos_authModuleAccountI_ToAmino(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryModuleAccountsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryModuleAccountsResponse",
            value: QueryModuleAccountsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryModuleAccountsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryModuleAccountsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsResponse",
            value: QueryModuleAccountsResponse.encode(message).finish()
        };
    }
};
function createBaseBech32PrefixRequest() {
    return {};
}
export const Bech32PrefixRequest = {
    typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixRequest",
    aminoType: "cosmos-sdk/Bech32PrefixRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBech32PrefixRequest();
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
        const message = createBaseBech32PrefixRequest();
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
        return Bech32PrefixRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Bech32PrefixRequest",
            value: Bech32PrefixRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Bech32PrefixRequest.decode(message.value);
    },
    toProto(message) {
        return Bech32PrefixRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixRequest",
            value: Bech32PrefixRequest.encode(message).finish()
        };
    }
};
function createBaseBech32PrefixResponse() {
    return {
        bech32_prefix: ""
    };
}
export const Bech32PrefixResponse = {
    typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixResponse",
    aminoType: "cosmos-sdk/Bech32PrefixResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.bech32_prefix !== "") {
            writer.uint32(10).string(message.bech32_prefix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBech32PrefixResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bech32_prefix = reader.string();
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
            bech32_prefix: isSet(object.bech32_prefix) ? String(object.bech32_prefix) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.bech32_prefix !== undefined && (obj.bech32_prefix = message.bech32_prefix);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBech32PrefixResponse();
        message.bech32_prefix = object.bech32_prefix ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            bech32_prefix: object.bech32_prefix
        };
    },
    toAmino(message) {
        const obj = {};
        obj.bech32_prefix = message.bech32_prefix;
        return obj;
    },
    fromAminoMsg(object) {
        return Bech32PrefixResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Bech32PrefixResponse",
            value: Bech32PrefixResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Bech32PrefixResponse.decode(message.value);
    },
    toProto(message) {
        return Bech32PrefixResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixResponse",
            value: Bech32PrefixResponse.encode(message).finish()
        };
    }
};
function createBaseAddressBytesToStringRequest() {
    return {
        address_bytes: new Uint8Array()
    };
}
export const AddressBytesToStringRequest = {
    typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringRequest",
    aminoType: "cosmos-sdk/AddressBytesToStringRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address_bytes.length !== 0) {
            writer.uint32(10).bytes(message.address_bytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddressBytesToStringRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address_bytes = reader.bytes();
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
            address_bytes: isSet(object.address_bytes) ? bytesFromBase64(object.address_bytes) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.address_bytes !== undefined && (obj.address_bytes = base64FromBytes(message.address_bytes !== undefined ? message.address_bytes : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAddressBytesToStringRequest();
        message.address_bytes = object.address_bytes ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            address_bytes: object.address_bytes
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address_bytes = message.address_bytes;
        return obj;
    },
    fromAminoMsg(object) {
        return AddressBytesToStringRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AddressBytesToStringRequest",
            value: AddressBytesToStringRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AddressBytesToStringRequest.decode(message.value);
    },
    toProto(message) {
        return AddressBytesToStringRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringRequest",
            value: AddressBytesToStringRequest.encode(message).finish()
        };
    }
};
function createBaseAddressBytesToStringResponse() {
    return {
        address_string: ""
    };
}
export const AddressBytesToStringResponse = {
    typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringResponse",
    aminoType: "cosmos-sdk/AddressBytesToStringResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address_string !== "") {
            writer.uint32(10).string(message.address_string);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddressBytesToStringResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address_string = reader.string();
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
            address_string: isSet(object.address_string) ? String(object.address_string) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address_string !== undefined && (obj.address_string = message.address_string);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAddressBytesToStringResponse();
        message.address_string = object.address_string ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            address_string: object.address_string
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address_string = message.address_string;
        return obj;
    },
    fromAminoMsg(object) {
        return AddressBytesToStringResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AddressBytesToStringResponse",
            value: AddressBytesToStringResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AddressBytesToStringResponse.decode(message.value);
    },
    toProto(message) {
        return AddressBytesToStringResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringResponse",
            value: AddressBytesToStringResponse.encode(message).finish()
        };
    }
};
function createBaseAddressStringToBytesRequest() {
    return {
        address_string: ""
    };
}
export const AddressStringToBytesRequest = {
    typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesRequest",
    aminoType: "cosmos-sdk/AddressStringToBytesRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address_string !== "") {
            writer.uint32(10).string(message.address_string);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddressStringToBytesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address_string = reader.string();
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
            address_string: isSet(object.address_string) ? String(object.address_string) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address_string !== undefined && (obj.address_string = message.address_string);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAddressStringToBytesRequest();
        message.address_string = object.address_string ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            address_string: object.address_string
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address_string = message.address_string;
        return obj;
    },
    fromAminoMsg(object) {
        return AddressStringToBytesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AddressStringToBytesRequest",
            value: AddressStringToBytesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AddressStringToBytesRequest.decode(message.value);
    },
    toProto(message) {
        return AddressStringToBytesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesRequest",
            value: AddressStringToBytesRequest.encode(message).finish()
        };
    }
};
function createBaseAddressStringToBytesResponse() {
    return {
        address_bytes: new Uint8Array()
    };
}
export const AddressStringToBytesResponse = {
    typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesResponse",
    aminoType: "cosmos-sdk/AddressStringToBytesResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address_bytes.length !== 0) {
            writer.uint32(10).bytes(message.address_bytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddressStringToBytesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address_bytes = reader.bytes();
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
            address_bytes: isSet(object.address_bytes) ? bytesFromBase64(object.address_bytes) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.address_bytes !== undefined && (obj.address_bytes = base64FromBytes(message.address_bytes !== undefined ? message.address_bytes : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAddressStringToBytesResponse();
        message.address_bytes = object.address_bytes ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            address_bytes: object.address_bytes
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address_bytes = message.address_bytes;
        return obj;
    },
    fromAminoMsg(object) {
        return AddressStringToBytesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AddressStringToBytesResponse",
            value: AddressStringToBytesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AddressStringToBytesResponse.decode(message.value);
    },
    toProto(message) {
        return AddressStringToBytesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesResponse",
            value: AddressStringToBytesResponse.encode(message).finish()
        };
    }
};
export const Cosmos_authAccountI_InterfaceDecoder = (input) => {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const data = Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/cosmos.auth.v1beta1.BaseAccount":
            return BaseAccount.decode(data.value);
        default:
            return data;
    }
};
export const Cosmos_authAccountI_FromAmino = (content) => {
    switch (content.type) {
        case "cosmos-sdk/BaseAccount":
            return Any.fromPartial({
                typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
                value: BaseAccount.encode(BaseAccount.fromPartial(BaseAccount.fromAmino(content.value))).finish()
            });
        default:
            return Any.fromAmino(content);
    }
};
export const Cosmos_authAccountI_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/cosmos.auth.v1beta1.BaseAccount":
            return {
                type: "cosmos-sdk/BaseAccount",
                value: BaseAccount.toAmino(BaseAccount.decode(content.value))
            };
        default:
            return Any.toAmino(content);
    }
};
export const Cosmos_authModuleAccountI_InterfaceDecoder = (input) => {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const data = Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/cosmos.auth.v1beta1.ModuleAccount":
            return ModuleAccount.decode(data.value);
        default:
            return data;
    }
};
export const Cosmos_authModuleAccountI_FromAmino = (content) => {
    switch (content.type) {
        case "cosmos-sdk/ModuleAccount":
            return Any.fromPartial({
                typeUrl: "/cosmos.auth.v1beta1.ModuleAccount",
                value: ModuleAccount.encode(ModuleAccount.fromPartial(ModuleAccount.fromAmino(content.value))).finish()
            });
        default:
            return Any.fromAmino(content);
    }
};
export const Cosmos_authModuleAccountI_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/cosmos.auth.v1beta1.ModuleAccount":
            return {
                type: "cosmos-sdk/ModuleAccount",
                value: ModuleAccount.toAmino(ModuleAccount.decode(content.value))
            };
        default:
            return Any.toAmino(content);
    }
};
//# sourceMappingURL=query.js.map