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
exports.AuxSignerData = exports.Tip = exports.Fee = exports.ModeInfo_Multi = exports.ModeInfo_Single = exports.ModeInfo = exports.SignerInfo = exports.AuthInfo = exports.TxBody = exports.SignDocDirectAux = exports.SignDoc = exports.TxRaw = exports.Tx = void 0;
const any_1 = require("../../../google/protobuf/any");
const signing_1 = require("../signing/v1beta1/signing");
const multisig_1 = require("../../crypto/multisig/v1beta1/multisig");
const coin_1 = require("../../base/v1beta1/coin");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseTx() {
    return {
        body: exports.TxBody.fromPartial({}),
        auth_info: exports.AuthInfo.fromPartial({}),
        signatures: []
    };
}
exports.Tx = {
    typeUrl: "/cosmos.tx.v1beta1.Tx",
    aminoType: "cosmos-sdk/Tx",
    encode(message, writer = _m0.Writer.create()) {
        if (message.body !== undefined) {
            exports.TxBody.encode(message.body, writer.uint32(10).fork()).ldelim();
        }
        if (message.auth_info !== undefined) {
            exports.AuthInfo.encode(message.auth_info, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.signatures) {
            writer.uint32(26).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.body = exports.TxBody.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.auth_info = exports.AuthInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.signatures.push(reader.bytes());
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
            body: (0, helpers_1.isSet)(object.body) ? exports.TxBody.fromJSON(object.body) : undefined,
            auth_info: (0, helpers_1.isSet)(object.auth_info) ? exports.AuthInfo.fromJSON(object.auth_info) : undefined,
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => (0, helpers_1.bytesFromBase64)(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.body !== undefined && (obj.body = message.body ? exports.TxBody.toJSON(message.body) : undefined);
        message.auth_info !== undefined && (obj.auth_info = message.auth_info ? exports.AuthInfo.toJSON(message.auth_info) : undefined);
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => (0, helpers_1.base64FromBytes)(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTx();
        message.body = object.body !== undefined && object.body !== null ? exports.TxBody.fromPartial(object.body) : undefined;
        message.auth_info = object.auth_info !== undefined && object.auth_info !== null ? exports.AuthInfo.fromPartial(object.auth_info) : undefined;
        message.signatures = object.signatures?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            body: object?.body ? exports.TxBody.fromAmino(object.body) : undefined,
            auth_info: object?.auth_info ? exports.AuthInfo.fromAmino(object.auth_info) : undefined,
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.body = message.body ? exports.TxBody.toAmino(message.body) : undefined;
        obj.auth_info = message.auth_info ? exports.AuthInfo.toAmino(message.auth_info) : undefined;
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => e);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Tx.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Tx",
            value: exports.Tx.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Tx.decode(message.value);
    },
    toProto(message) {
        return exports.Tx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Tx",
            value: exports.Tx.encode(message).finish()
        };
    }
};
function createBaseTxRaw() {
    return {
        body_bytes: new Uint8Array(),
        auth_info_bytes: new Uint8Array(),
        signatures: []
    };
}
exports.TxRaw = {
    typeUrl: "/cosmos.tx.v1beta1.TxRaw",
    aminoType: "cosmos-sdk/TxRaw",
    encode(message, writer = _m0.Writer.create()) {
        if (message.body_bytes.length !== 0) {
            writer.uint32(10).bytes(message.body_bytes);
        }
        if (message.auth_info_bytes.length !== 0) {
            writer.uint32(18).bytes(message.auth_info_bytes);
        }
        for (const v of message.signatures) {
            writer.uint32(26).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxRaw();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.body_bytes = reader.bytes();
                    break;
                case 2:
                    message.auth_info_bytes = reader.bytes();
                    break;
                case 3:
                    message.signatures.push(reader.bytes());
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
            body_bytes: (0, helpers_1.isSet)(object.body_bytes) ? (0, helpers_1.bytesFromBase64)(object.body_bytes) : new Uint8Array(),
            auth_info_bytes: (0, helpers_1.isSet)(object.auth_info_bytes) ? (0, helpers_1.bytesFromBase64)(object.auth_info_bytes) : new Uint8Array(),
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => (0, helpers_1.bytesFromBase64)(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.body_bytes !== undefined && (obj.body_bytes = (0, helpers_1.base64FromBytes)(message.body_bytes !== undefined ? message.body_bytes : new Uint8Array()));
        message.auth_info_bytes !== undefined && (obj.auth_info_bytes = (0, helpers_1.base64FromBytes)(message.auth_info_bytes !== undefined ? message.auth_info_bytes : new Uint8Array()));
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => (0, helpers_1.base64FromBytes)(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxRaw();
        message.body_bytes = object.body_bytes ?? new Uint8Array();
        message.auth_info_bytes = object.auth_info_bytes ?? new Uint8Array();
        message.signatures = object.signatures?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            body_bytes: object.body_bytes,
            auth_info_bytes: object.auth_info_bytes,
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.body_bytes = message.body_bytes;
        obj.auth_info_bytes = message.auth_info_bytes;
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => e);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TxRaw.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TxRaw",
            value: exports.TxRaw.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TxRaw.decode(message.value);
    },
    toProto(message) {
        return exports.TxRaw.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.TxRaw",
            value: exports.TxRaw.encode(message).finish()
        };
    }
};
function createBaseSignDoc() {
    return {
        body_bytes: new Uint8Array(),
        auth_info_bytes: new Uint8Array(),
        chain_id: "",
        account_number: helpers_1.Long.UZERO
    };
}
exports.SignDoc = {
    typeUrl: "/cosmos.tx.v1beta1.SignDoc",
    aminoType: "cosmos-sdk/SignDoc",
    encode(message, writer = _m0.Writer.create()) {
        if (message.body_bytes.length !== 0) {
            writer.uint32(10).bytes(message.body_bytes);
        }
        if (message.auth_info_bytes.length !== 0) {
            writer.uint32(18).bytes(message.auth_info_bytes);
        }
        if (message.chain_id !== "") {
            writer.uint32(26).string(message.chain_id);
        }
        if (!message.account_number.isZero()) {
            writer.uint32(32).uint64(message.account_number);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignDoc();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.body_bytes = reader.bytes();
                    break;
                case 2:
                    message.auth_info_bytes = reader.bytes();
                    break;
                case 3:
                    message.chain_id = reader.string();
                    break;
                case 4:
                    message.account_number = reader.uint64();
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
            body_bytes: (0, helpers_1.isSet)(object.body_bytes) ? (0, helpers_1.bytesFromBase64)(object.body_bytes) : new Uint8Array(),
            auth_info_bytes: (0, helpers_1.isSet)(object.auth_info_bytes) ? (0, helpers_1.bytesFromBase64)(object.auth_info_bytes) : new Uint8Array(),
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : "",
            account_number: (0, helpers_1.isSet)(object.account_number) ? helpers_1.Long.fromValue(object.account_number) : helpers_1.Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.body_bytes !== undefined && (obj.body_bytes = (0, helpers_1.base64FromBytes)(message.body_bytes !== undefined ? message.body_bytes : new Uint8Array()));
        message.auth_info_bytes !== undefined && (obj.auth_info_bytes = (0, helpers_1.base64FromBytes)(message.auth_info_bytes !== undefined ? message.auth_info_bytes : new Uint8Array()));
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.account_number !== undefined && (obj.account_number = (message.account_number || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSignDoc();
        message.body_bytes = object.body_bytes ?? new Uint8Array();
        message.auth_info_bytes = object.auth_info_bytes ?? new Uint8Array();
        message.chain_id = object.chain_id ?? "";
        message.account_number = object.account_number !== undefined && object.account_number !== null ? helpers_1.Long.fromValue(object.account_number) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            body_bytes: object.body_bytes,
            auth_info_bytes: object.auth_info_bytes,
            chain_id: object.chain_id,
            account_number: helpers_1.Long.fromString(object.account_number)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.body_bytes = message.body_bytes;
        obj.auth_info_bytes = message.auth_info_bytes;
        obj.chain_id = message.chain_id;
        obj.account_number = message.account_number ? message.account_number.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SignDoc.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SignDoc",
            value: exports.SignDoc.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SignDoc.decode(message.value);
    },
    toProto(message) {
        return exports.SignDoc.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.SignDoc",
            value: exports.SignDoc.encode(message).finish()
        };
    }
};
function createBaseSignDocDirectAux() {
    return {
        body_bytes: new Uint8Array(),
        public_key: any_1.Any.fromPartial({}),
        chain_id: "",
        account_number: helpers_1.Long.UZERO,
        sequence: helpers_1.Long.UZERO,
        tip: exports.Tip.fromPartial({})
    };
}
exports.SignDocDirectAux = {
    typeUrl: "/cosmos.tx.v1beta1.SignDocDirectAux",
    aminoType: "cosmos-sdk/SignDocDirectAux",
    encode(message, writer = _m0.Writer.create()) {
        if (message.body_bytes.length !== 0) {
            writer.uint32(10).bytes(message.body_bytes);
        }
        if (message.public_key !== undefined) {
            any_1.Any.encode(message.public_key, writer.uint32(18).fork()).ldelim();
        }
        if (message.chain_id !== "") {
            writer.uint32(26).string(message.chain_id);
        }
        if (!message.account_number.isZero()) {
            writer.uint32(32).uint64(message.account_number);
        }
        if (!message.sequence.isZero()) {
            writer.uint32(40).uint64(message.sequence);
        }
        if (message.tip !== undefined) {
            exports.Tip.encode(message.tip, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignDocDirectAux();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.body_bytes = reader.bytes();
                    break;
                case 2:
                    message.public_key = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.chain_id = reader.string();
                    break;
                case 4:
                    message.account_number = reader.uint64();
                    break;
                case 5:
                    message.sequence = reader.uint64();
                    break;
                case 6:
                    message.tip = exports.Tip.decode(reader, reader.uint32());
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
            body_bytes: (0, helpers_1.isSet)(object.body_bytes) ? (0, helpers_1.bytesFromBase64)(object.body_bytes) : new Uint8Array(),
            public_key: (0, helpers_1.isSet)(object.public_key) ? any_1.Any.fromJSON(object.public_key) : undefined,
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : "",
            account_number: (0, helpers_1.isSet)(object.account_number) ? helpers_1.Long.fromValue(object.account_number) : helpers_1.Long.UZERO,
            sequence: (0, helpers_1.isSet)(object.sequence) ? helpers_1.Long.fromValue(object.sequence) : helpers_1.Long.UZERO,
            tip: (0, helpers_1.isSet)(object.tip) ? exports.Tip.fromJSON(object.tip) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.body_bytes !== undefined && (obj.body_bytes = (0, helpers_1.base64FromBytes)(message.body_bytes !== undefined ? message.body_bytes : new Uint8Array()));
        message.public_key !== undefined && (obj.public_key = message.public_key ? any_1.Any.toJSON(message.public_key) : undefined);
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.account_number !== undefined && (obj.account_number = (message.account_number || helpers_1.Long.UZERO).toString());
        message.sequence !== undefined && (obj.sequence = (message.sequence || helpers_1.Long.UZERO).toString());
        message.tip !== undefined && (obj.tip = message.tip ? exports.Tip.toJSON(message.tip) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSignDocDirectAux();
        message.body_bytes = object.body_bytes ?? new Uint8Array();
        message.public_key = object.public_key !== undefined && object.public_key !== null ? any_1.Any.fromPartial(object.public_key) : undefined;
        message.chain_id = object.chain_id ?? "";
        message.account_number = object.account_number !== undefined && object.account_number !== null ? helpers_1.Long.fromValue(object.account_number) : helpers_1.Long.UZERO;
        message.sequence = object.sequence !== undefined && object.sequence !== null ? helpers_1.Long.fromValue(object.sequence) : helpers_1.Long.UZERO;
        message.tip = object.tip !== undefined && object.tip !== null ? exports.Tip.fromPartial(object.tip) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            body_bytes: object.body_bytes,
            public_key: object?.public_key ? any_1.Any.fromAmino(object.public_key) : undefined,
            chain_id: object.chain_id,
            account_number: helpers_1.Long.fromString(object.account_number),
            sequence: helpers_1.Long.fromString(object.sequence),
            tip: object?.tip ? exports.Tip.fromAmino(object.tip) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.body_bytes = message.body_bytes;
        obj.public_key = message.public_key ? any_1.Any.toAmino(message.public_key) : undefined;
        obj.chain_id = message.chain_id;
        obj.account_number = message.account_number ? message.account_number.toString() : undefined;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.tip = message.tip ? exports.Tip.toAmino(message.tip) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SignDocDirectAux.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SignDocDirectAux",
            value: exports.SignDocDirectAux.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SignDocDirectAux.decode(message.value);
    },
    toProto(message) {
        return exports.SignDocDirectAux.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.SignDocDirectAux",
            value: exports.SignDocDirectAux.encode(message).finish()
        };
    }
};
function createBaseTxBody() {
    return {
        messages: [],
        memo: "",
        timeout_height: helpers_1.Long.UZERO,
        extension_options: [],
        non_critical_extension_options: []
    };
}
exports.TxBody = {
    typeUrl: "/cosmos.tx.v1beta1.TxBody",
    aminoType: "cosmos-sdk/TxBody",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.messages) {
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.memo !== "") {
            writer.uint32(18).string(message.memo);
        }
        if (!message.timeout_height.isZero()) {
            writer.uint32(24).uint64(message.timeout_height);
        }
        for (const v of message.extension_options) {
            any_1.Any.encode(v, writer.uint32(8186).fork()).ldelim();
        }
        for (const v of message.non_critical_extension_options) {
            any_1.Any.encode(v, writer.uint32(16378).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxBody();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messages.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.memo = reader.string();
                    break;
                case 3:
                    message.timeout_height = reader.uint64();
                    break;
                case 1023:
                    message.extension_options.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                case 2047:
                    message.non_critical_extension_options.push(any_1.Any.decode(reader, reader.uint32()));
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
            messages: Array.isArray(object?.messages) ? object.messages.map((e) => any_1.Any.fromJSON(e)) : [],
            memo: (0, helpers_1.isSet)(object.memo) ? String(object.memo) : "",
            timeout_height: (0, helpers_1.isSet)(object.timeout_height) ? helpers_1.Long.fromValue(object.timeout_height) : helpers_1.Long.UZERO,
            extension_options: Array.isArray(object?.extension_options) ? object.extension_options.map((e) => any_1.Any.fromJSON(e)) : [],
            non_critical_extension_options: Array.isArray(object?.non_critical_extension_options) ? object.non_critical_extension_options.map((e) => any_1.Any.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? any_1.Any.toJSON(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        message.memo !== undefined && (obj.memo = message.memo);
        message.timeout_height !== undefined && (obj.timeout_height = (message.timeout_height || helpers_1.Long.UZERO).toString());
        if (message.extension_options) {
            obj.extension_options = message.extension_options.map(e => e ? any_1.Any.toJSON(e) : undefined);
        }
        else {
            obj.extension_options = [];
        }
        if (message.non_critical_extension_options) {
            obj.non_critical_extension_options = message.non_critical_extension_options.map(e => e ? any_1.Any.toJSON(e) : undefined);
        }
        else {
            obj.non_critical_extension_options = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxBody();
        message.messages = object.messages?.map(e => any_1.Any.fromPartial(e)) || [];
        message.memo = object.memo ?? "";
        message.timeout_height = object.timeout_height !== undefined && object.timeout_height !== null ? helpers_1.Long.fromValue(object.timeout_height) : helpers_1.Long.UZERO;
        message.extension_options = object.extension_options?.map(e => any_1.Any.fromPartial(e)) || [];
        message.non_critical_extension_options = object.non_critical_extension_options?.map(e => any_1.Any.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            messages: Array.isArray(object?.messages) ? object.messages.map((e) => any_1.Any.fromAmino(e)) : [],
            memo: object.memo,
            timeout_height: helpers_1.Long.fromString(object.timeout_height),
            extension_options: Array.isArray(object?.extension_options) ? object.extension_options.map((e) => any_1.Any.fromAmino(e)) : [],
            non_critical_extension_options: Array.isArray(object?.non_critical_extension_options) ? object.non_critical_extension_options.map((e) => any_1.Any.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? any_1.Any.toAmino(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        obj.memo = message.memo;
        obj.timeout_height = message.timeout_height ? message.timeout_height.toString() : undefined;
        if (message.extension_options) {
            obj.extension_options = message.extension_options.map(e => e ? any_1.Any.toAmino(e) : undefined);
        }
        else {
            obj.extension_options = [];
        }
        if (message.non_critical_extension_options) {
            obj.non_critical_extension_options = message.non_critical_extension_options.map(e => e ? any_1.Any.toAmino(e) : undefined);
        }
        else {
            obj.non_critical_extension_options = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TxBody.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TxBody",
            value: exports.TxBody.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TxBody.decode(message.value);
    },
    toProto(message) {
        return exports.TxBody.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.TxBody",
            value: exports.TxBody.encode(message).finish()
        };
    }
};
function createBaseAuthInfo() {
    return {
        signer_infos: [],
        fee: exports.Fee.fromPartial({}),
        tip: exports.Tip.fromPartial({})
    };
}
exports.AuthInfo = {
    typeUrl: "/cosmos.tx.v1beta1.AuthInfo",
    aminoType: "cosmos-sdk/AuthInfo",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.signer_infos) {
            exports.SignerInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.fee !== undefined) {
            exports.Fee.encode(message.fee, writer.uint32(18).fork()).ldelim();
        }
        if (message.tip !== undefined) {
            exports.Tip.encode(message.tip, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signer_infos.push(exports.SignerInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.fee = exports.Fee.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.tip = exports.Tip.decode(reader, reader.uint32());
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
            signer_infos: Array.isArray(object?.signer_infos) ? object.signer_infos.map((e) => exports.SignerInfo.fromJSON(e)) : [],
            fee: (0, helpers_1.isSet)(object.fee) ? exports.Fee.fromJSON(object.fee) : undefined,
            tip: (0, helpers_1.isSet)(object.tip) ? exports.Tip.fromJSON(object.tip) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.signer_infos) {
            obj.signer_infos = message.signer_infos.map(e => e ? exports.SignerInfo.toJSON(e) : undefined);
        }
        else {
            obj.signer_infos = [];
        }
        message.fee !== undefined && (obj.fee = message.fee ? exports.Fee.toJSON(message.fee) : undefined);
        message.tip !== undefined && (obj.tip = message.tip ? exports.Tip.toJSON(message.tip) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAuthInfo();
        message.signer_infos = object.signer_infos?.map(e => exports.SignerInfo.fromPartial(e)) || [];
        message.fee = object.fee !== undefined && object.fee !== null ? exports.Fee.fromPartial(object.fee) : undefined;
        message.tip = object.tip !== undefined && object.tip !== null ? exports.Tip.fromPartial(object.tip) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            signer_infos: Array.isArray(object?.signer_infos) ? object.signer_infos.map((e) => exports.SignerInfo.fromAmino(e)) : [],
            fee: object?.fee ? exports.Fee.fromAmino(object.fee) : undefined,
            tip: object?.tip ? exports.Tip.fromAmino(object.tip) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.signer_infos) {
            obj.signer_infos = message.signer_infos.map(e => e ? exports.SignerInfo.toAmino(e) : undefined);
        }
        else {
            obj.signer_infos = [];
        }
        obj.fee = message.fee ? exports.Fee.toAmino(message.fee) : undefined;
        obj.tip = message.tip ? exports.Tip.toAmino(message.tip) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AuthInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AuthInfo",
            value: exports.AuthInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AuthInfo.decode(message.value);
    },
    toProto(message) {
        return exports.AuthInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.AuthInfo",
            value: exports.AuthInfo.encode(message).finish()
        };
    }
};
function createBaseSignerInfo() {
    return {
        public_key: any_1.Any.fromPartial({}),
        mode_info: exports.ModeInfo.fromPartial({}),
        sequence: helpers_1.Long.UZERO
    };
}
exports.SignerInfo = {
    typeUrl: "/cosmos.tx.v1beta1.SignerInfo",
    aminoType: "cosmos-sdk/SignerInfo",
    encode(message, writer = _m0.Writer.create()) {
        if (message.public_key !== undefined) {
            any_1.Any.encode(message.public_key, writer.uint32(10).fork()).ldelim();
        }
        if (message.mode_info !== undefined) {
            exports.ModeInfo.encode(message.mode_info, writer.uint32(18).fork()).ldelim();
        }
        if (!message.sequence.isZero()) {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignerInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.public_key = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mode_info = exports.ModeInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.sequence = reader.uint64();
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
            public_key: (0, helpers_1.isSet)(object.public_key) ? any_1.Any.fromJSON(object.public_key) : undefined,
            mode_info: (0, helpers_1.isSet)(object.mode_info) ? exports.ModeInfo.fromJSON(object.mode_info) : undefined,
            sequence: (0, helpers_1.isSet)(object.sequence) ? helpers_1.Long.fromValue(object.sequence) : helpers_1.Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.public_key !== undefined && (obj.public_key = message.public_key ? any_1.Any.toJSON(message.public_key) : undefined);
        message.mode_info !== undefined && (obj.mode_info = message.mode_info ? exports.ModeInfo.toJSON(message.mode_info) : undefined);
        message.sequence !== undefined && (obj.sequence = (message.sequence || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSignerInfo();
        message.public_key = object.public_key !== undefined && object.public_key !== null ? any_1.Any.fromPartial(object.public_key) : undefined;
        message.mode_info = object.mode_info !== undefined && object.mode_info !== null ? exports.ModeInfo.fromPartial(object.mode_info) : undefined;
        message.sequence = object.sequence !== undefined && object.sequence !== null ? helpers_1.Long.fromValue(object.sequence) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            public_key: object?.public_key ? any_1.Any.fromAmino(object.public_key) : undefined,
            mode_info: object?.mode_info ? exports.ModeInfo.fromAmino(object.mode_info) : undefined,
            sequence: helpers_1.Long.fromString(object.sequence)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.public_key = message.public_key ? any_1.Any.toAmino(message.public_key) : undefined;
        obj.mode_info = message.mode_info ? exports.ModeInfo.toAmino(message.mode_info) : undefined;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SignerInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SignerInfo",
            value: exports.SignerInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SignerInfo.decode(message.value);
    },
    toProto(message) {
        return exports.SignerInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.SignerInfo",
            value: exports.SignerInfo.encode(message).finish()
        };
    }
};
function createBaseModeInfo() {
    return {
        single: undefined,
        multi: undefined
    };
}
exports.ModeInfo = {
    typeUrl: "/cosmos.tx.v1beta1.ModeInfo",
    aminoType: "cosmos-sdk/ModeInfo",
    encode(message, writer = _m0.Writer.create()) {
        if (message.single !== undefined) {
            exports.ModeInfo_Single.encode(message.single, writer.uint32(10).fork()).ldelim();
        }
        if (message.multi !== undefined) {
            exports.ModeInfo_Multi.encode(message.multi, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.single = exports.ModeInfo_Single.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.multi = exports.ModeInfo_Multi.decode(reader, reader.uint32());
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
            single: (0, helpers_1.isSet)(object.single) ? exports.ModeInfo_Single.fromJSON(object.single) : undefined,
            multi: (0, helpers_1.isSet)(object.multi) ? exports.ModeInfo_Multi.fromJSON(object.multi) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.single !== undefined && (obj.single = message.single ? exports.ModeInfo_Single.toJSON(message.single) : undefined);
        message.multi !== undefined && (obj.multi = message.multi ? exports.ModeInfo_Multi.toJSON(message.multi) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModeInfo();
        message.single = object.single !== undefined && object.single !== null ? exports.ModeInfo_Single.fromPartial(object.single) : undefined;
        message.multi = object.multi !== undefined && object.multi !== null ? exports.ModeInfo_Multi.fromPartial(object.multi) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            single: object?.single ? exports.ModeInfo_Single.fromAmino(object.single) : undefined,
            multi: object?.multi ? exports.ModeInfo_Multi.fromAmino(object.multi) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.single = message.single ? exports.ModeInfo_Single.toAmino(message.single) : undefined;
        obj.multi = message.multi ? exports.ModeInfo_Multi.toAmino(message.multi) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ModeInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ModeInfo",
            value: exports.ModeInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ModeInfo.decode(message.value);
    },
    toProto(message) {
        return exports.ModeInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.ModeInfo",
            value: exports.ModeInfo.encode(message).finish()
        };
    }
};
function createBaseModeInfo_Single() {
    return {
        mode: 0
    };
}
exports.ModeInfo_Single = {
    typeUrl: "/cosmos.tx.v1beta1.Single",
    aminoType: "cosmos-sdk/Single",
    encode(message, writer = _m0.Writer.create()) {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModeInfo_Single();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32();
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
            mode: (0, helpers_1.isSet)(object.mode) ? (0, signing_1.signModeFromJSON)(object.mode) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.mode !== undefined && (obj.mode = (0, signing_1.signModeToJSON)(message.mode));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModeInfo_Single();
        message.mode = object.mode ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            mode: (0, helpers_1.isSet)(object.mode) ? (0, signing_1.signModeFromJSON)(object.mode) : -1
        };
    },
    toAmino(message) {
        const obj = {};
        obj.mode = message.mode;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ModeInfo_Single.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Single",
            value: exports.ModeInfo_Single.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ModeInfo_Single.decode(message.value);
    },
    toProto(message) {
        return exports.ModeInfo_Single.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Single",
            value: exports.ModeInfo_Single.encode(message).finish()
        };
    }
};
function createBaseModeInfo_Multi() {
    return {
        bitarray: multisig_1.CompactBitArray.fromPartial({}),
        mode_infos: []
    };
}
exports.ModeInfo_Multi = {
    typeUrl: "/cosmos.tx.v1beta1.Multi",
    aminoType: "cosmos-sdk/Multi",
    encode(message, writer = _m0.Writer.create()) {
        if (message.bitarray !== undefined) {
            multisig_1.CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.mode_infos) {
            exports.ModeInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModeInfo_Multi();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bitarray = multisig_1.CompactBitArray.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mode_infos.push(exports.ModeInfo.decode(reader, reader.uint32()));
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
            bitarray: (0, helpers_1.isSet)(object.bitarray) ? multisig_1.CompactBitArray.fromJSON(object.bitarray) : undefined,
            mode_infos: Array.isArray(object?.mode_infos) ? object.mode_infos.map((e) => exports.ModeInfo.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.bitarray !== undefined && (obj.bitarray = message.bitarray ? multisig_1.CompactBitArray.toJSON(message.bitarray) : undefined);
        if (message.mode_infos) {
            obj.mode_infos = message.mode_infos.map(e => e ? exports.ModeInfo.toJSON(e) : undefined);
        }
        else {
            obj.mode_infos = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModeInfo_Multi();
        message.bitarray = object.bitarray !== undefined && object.bitarray !== null ? multisig_1.CompactBitArray.fromPartial(object.bitarray) : undefined;
        message.mode_infos = object.mode_infos?.map(e => exports.ModeInfo.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            bitarray: object?.bitarray ? multisig_1.CompactBitArray.fromAmino(object.bitarray) : undefined,
            mode_infos: Array.isArray(object?.mode_infos) ? object.mode_infos.map((e) => exports.ModeInfo.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.bitarray = message.bitarray ? multisig_1.CompactBitArray.toAmino(message.bitarray) : undefined;
        if (message.mode_infos) {
            obj.mode_infos = message.mode_infos.map(e => e ? exports.ModeInfo.toAmino(e) : undefined);
        }
        else {
            obj.mode_infos = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ModeInfo_Multi.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Multi",
            value: exports.ModeInfo_Multi.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ModeInfo_Multi.decode(message.value);
    },
    toProto(message) {
        return exports.ModeInfo_Multi.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Multi",
            value: exports.ModeInfo_Multi.encode(message).finish()
        };
    }
};
function createBaseFee() {
    return {
        amount: [],
        gas_limit: helpers_1.Long.UZERO,
        payer: "",
        granter: ""
    };
}
exports.Fee = {
    typeUrl: "/cosmos.tx.v1beta1.Fee",
    aminoType: "cosmos-sdk/Fee",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (!message.gas_limit.isZero()) {
            writer.uint32(16).uint64(message.gas_limit);
        }
        if (message.payer !== "") {
            writer.uint32(26).string(message.payer);
        }
        if (message.granter !== "") {
            writer.uint32(34).string(message.granter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.gas_limit = reader.uint64();
                    break;
                case 3:
                    message.payer = reader.string();
                    break;
                case 4:
                    message.granter = reader.string();
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
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : [],
            gas_limit: (0, helpers_1.isSet)(object.gas_limit) ? helpers_1.Long.fromValue(object.gas_limit) : helpers_1.Long.UZERO,
            payer: (0, helpers_1.isSet)(object.payer) ? String(object.payer) : "",
            granter: (0, helpers_1.isSet)(object.granter) ? String(object.granter) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        message.gas_limit !== undefined && (obj.gas_limit = (message.gas_limit || helpers_1.Long.UZERO).toString());
        message.payer !== undefined && (obj.payer = message.payer);
        message.granter !== undefined && (obj.granter = message.granter);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFee();
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.gas_limit = object.gas_limit !== undefined && object.gas_limit !== null ? helpers_1.Long.fromValue(object.gas_limit) : helpers_1.Long.UZERO;
        message.payer = object.payer ?? "";
        message.granter = object.granter ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromAmino(e)) : [],
            gas_limit: helpers_1.Long.fromString(object.gas_limit),
            payer: object.payer,
            granter: object.granter
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        obj.gas_limit = message.gas_limit ? message.gas_limit.toString() : undefined;
        obj.payer = message.payer;
        obj.granter = message.granter;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Fee.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Fee",
            value: exports.Fee.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Fee.decode(message.value);
    },
    toProto(message) {
        return exports.Fee.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Fee",
            value: exports.Fee.encode(message).finish()
        };
    }
};
function createBaseTip() {
    return {
        amount: [],
        tipper: ""
    };
}
exports.Tip = {
    typeUrl: "/cosmos.tx.v1beta1.Tip",
    aminoType: "cosmos-sdk/Tip",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.tipper !== "") {
            writer.uint32(18).string(message.tipper);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTip();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.tipper = reader.string();
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
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : [],
            tipper: (0, helpers_1.isSet)(object.tipper) ? String(object.tipper) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        message.tipper !== undefined && (obj.tipper = message.tipper);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTip();
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.tipper = object.tipper ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromAmino(e)) : [],
            tipper: object.tipper
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        obj.tipper = message.tipper;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Tip.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Tip",
            value: exports.Tip.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Tip.decode(message.value);
    },
    toProto(message) {
        return exports.Tip.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Tip",
            value: exports.Tip.encode(message).finish()
        };
    }
};
function createBaseAuxSignerData() {
    return {
        address: "",
        sign_doc: exports.SignDocDirectAux.fromPartial({}),
        mode: 0,
        sig: new Uint8Array()
    };
}
exports.AuxSignerData = {
    typeUrl: "/cosmos.tx.v1beta1.AuxSignerData",
    aminoType: "cosmos-sdk/AuxSignerData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.sign_doc !== undefined) {
            exports.SignDocDirectAux.encode(message.sign_doc, writer.uint32(18).fork()).ldelim();
        }
        if (message.mode !== 0) {
            writer.uint32(24).int32(message.mode);
        }
        if (message.sig.length !== 0) {
            writer.uint32(34).bytes(message.sig);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuxSignerData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.sign_doc = exports.SignDocDirectAux.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mode = reader.int32();
                    break;
                case 4:
                    message.sig = reader.bytes();
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
            sign_doc: (0, helpers_1.isSet)(object.sign_doc) ? exports.SignDocDirectAux.fromJSON(object.sign_doc) : undefined,
            mode: (0, helpers_1.isSet)(object.mode) ? (0, signing_1.signModeFromJSON)(object.mode) : -1,
            sig: (0, helpers_1.isSet)(object.sig) ? (0, helpers_1.bytesFromBase64)(object.sig) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.sign_doc !== undefined && (obj.sign_doc = message.sign_doc ? exports.SignDocDirectAux.toJSON(message.sign_doc) : undefined);
        message.mode !== undefined && (obj.mode = (0, signing_1.signModeToJSON)(message.mode));
        message.sig !== undefined && (obj.sig = (0, helpers_1.base64FromBytes)(message.sig !== undefined ? message.sig : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAuxSignerData();
        message.address = object.address ?? "";
        message.sign_doc = object.sign_doc !== undefined && object.sign_doc !== null ? exports.SignDocDirectAux.fromPartial(object.sign_doc) : undefined;
        message.mode = object.mode ?? 0;
        message.sig = object.sig ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            sign_doc: object?.sign_doc ? exports.SignDocDirectAux.fromAmino(object.sign_doc) : undefined,
            mode: (0, helpers_1.isSet)(object.mode) ? (0, signing_1.signModeFromJSON)(object.mode) : -1,
            sig: object.sig
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.sign_doc = message.sign_doc ? exports.SignDocDirectAux.toAmino(message.sign_doc) : undefined;
        obj.mode = message.mode;
        obj.sig = message.sig;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AuxSignerData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AuxSignerData",
            value: exports.AuxSignerData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AuxSignerData.decode(message.value);
    },
    toProto(message) {
        return exports.AuxSignerData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.AuxSignerData",
            value: exports.AuxSignerData.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map