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
exports.Params = exports.ModuleAccount = exports.BaseAccount = void 0;
const any_1 = require("../../../google/protobuf/any");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseBaseAccount() {
    return {
        $typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
        address: "",
        pub_key: any_1.Any.fromPartial({}),
        account_number: helpers_1.Long.UZERO,
        sequence: helpers_1.Long.UZERO
    };
}
exports.BaseAccount = {
    typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
    aminoType: "cosmos-sdk/BaseAccount",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pub_key !== undefined) {
            any_1.Any.encode(message.pub_key, writer.uint32(18).fork()).ldelim();
        }
        if (!message.account_number.isZero()) {
            writer.uint32(24).uint64(message.account_number);
        }
        if (!message.sequence.isZero()) {
            writer.uint32(32).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBaseAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pub_key = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.account_number = reader.uint64();
                    break;
                case 4:
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            pub_key: (0, helpers_1.isSet)(object.pub_key) ? any_1.Any.fromJSON(object.pub_key) : undefined,
            account_number: (0, helpers_1.isSet)(object.account_number) ? helpers_1.Long.fromValue(object.account_number) : helpers_1.Long.UZERO,
            sequence: (0, helpers_1.isSet)(object.sequence) ? helpers_1.Long.fromValue(object.sequence) : helpers_1.Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pub_key !== undefined && (obj.pub_key = message.pub_key ? any_1.Any.toJSON(message.pub_key) : undefined);
        message.account_number !== undefined && (obj.account_number = (message.account_number || helpers_1.Long.UZERO).toString());
        message.sequence !== undefined && (obj.sequence = (message.sequence || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBaseAccount();
        message.address = object.address ?? "";
        message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? any_1.Any.fromPartial(object.pub_key) : undefined;
        message.account_number = object.account_number !== undefined && object.account_number !== null ? helpers_1.Long.fromValue(object.account_number) : helpers_1.Long.UZERO;
        message.sequence = object.sequence !== undefined && object.sequence !== null ? helpers_1.Long.fromValue(object.sequence) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            pub_key: object?.pub_key ? any_1.Any.fromAmino(object.pub_key) : undefined,
            account_number: helpers_1.Long.fromString(object.account_number),
            sequence: helpers_1.Long.fromString(object.sequence)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pub_key = message.pub_key ? any_1.Any.toAmino(message.pub_key) : undefined;
        obj.account_number = message.account_number ? message.account_number.toString() : undefined;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BaseAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/BaseAccount",
            value: exports.BaseAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.BaseAccount.decode(message.value);
    },
    toProto(message) {
        return exports.BaseAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
            value: exports.BaseAccount.encode(message).finish()
        };
    }
};
function createBaseModuleAccount() {
    return {
        $typeUrl: "/cosmos.auth.v1beta1.ModuleAccount",
        base_account: exports.BaseAccount.fromPartial({}),
        name: "",
        permissions: []
    };
}
exports.ModuleAccount = {
    typeUrl: "/cosmos.auth.v1beta1.ModuleAccount",
    aminoType: "cosmos-sdk/ModuleAccount",
    encode(message, writer = _m0.Writer.create()) {
        if (message.base_account !== undefined) {
            exports.BaseAccount.encode(message.base_account, writer.uint32(10).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        for (const v of message.permissions) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base_account = exports.BaseAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.permissions.push(reader.string());
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
            base_account: (0, helpers_1.isSet)(object.base_account) ? exports.BaseAccount.fromJSON(object.base_account) : undefined,
            name: (0, helpers_1.isSet)(object.name) ? String(object.name) : "",
            permissions: Array.isArray(object?.permissions) ? object.permissions.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.base_account !== undefined && (obj.base_account = message.base_account ? exports.BaseAccount.toJSON(message.base_account) : undefined);
        message.name !== undefined && (obj.name = message.name);
        if (message.permissions) {
            obj.permissions = message.permissions.map(e => e);
        }
        else {
            obj.permissions = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModuleAccount();
        message.base_account = object.base_account !== undefined && object.base_account !== null ? exports.BaseAccount.fromPartial(object.base_account) : undefined;
        message.name = object.name ?? "";
        message.permissions = object.permissions?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            base_account: object?.base_account ? exports.BaseAccount.fromAmino(object.base_account) : undefined,
            name: object.name,
            permissions: Array.isArray(object?.permissions) ? object.permissions.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.base_account = message.base_account ? exports.BaseAccount.toAmino(message.base_account) : undefined;
        obj.name = message.name;
        if (message.permissions) {
            obj.permissions = message.permissions.map(e => e);
        }
        else {
            obj.permissions = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ModuleAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ModuleAccount",
            value: exports.ModuleAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ModuleAccount.decode(message.value);
    },
    toProto(message) {
        return exports.ModuleAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.ModuleAccount",
            value: exports.ModuleAccount.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        max_memo_characters: helpers_1.Long.UZERO,
        tx_sig_limit: helpers_1.Long.UZERO,
        tx_size_cost_per_byte: helpers_1.Long.UZERO,
        sig_verify_cost_ed25519: helpers_1.Long.UZERO,
        sig_verify_cost_secp256k1: helpers_1.Long.UZERO
    };
}
exports.Params = {
    typeUrl: "/cosmos.auth.v1beta1.Params",
    aminoType: "cosmos-sdk/Params",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.max_memo_characters.isZero()) {
            writer.uint32(8).uint64(message.max_memo_characters);
        }
        if (!message.tx_sig_limit.isZero()) {
            writer.uint32(16).uint64(message.tx_sig_limit);
        }
        if (!message.tx_size_cost_per_byte.isZero()) {
            writer.uint32(24).uint64(message.tx_size_cost_per_byte);
        }
        if (!message.sig_verify_cost_ed25519.isZero()) {
            writer.uint32(32).uint64(message.sig_verify_cost_ed25519);
        }
        if (!message.sig_verify_cost_secp256k1.isZero()) {
            writer.uint32(40).uint64(message.sig_verify_cost_secp256k1);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.max_memo_characters = reader.uint64();
                    break;
                case 2:
                    message.tx_sig_limit = reader.uint64();
                    break;
                case 3:
                    message.tx_size_cost_per_byte = reader.uint64();
                    break;
                case 4:
                    message.sig_verify_cost_ed25519 = reader.uint64();
                    break;
                case 5:
                    message.sig_verify_cost_secp256k1 = reader.uint64();
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
            max_memo_characters: (0, helpers_1.isSet)(object.max_memo_characters) ? helpers_1.Long.fromValue(object.max_memo_characters) : helpers_1.Long.UZERO,
            tx_sig_limit: (0, helpers_1.isSet)(object.tx_sig_limit) ? helpers_1.Long.fromValue(object.tx_sig_limit) : helpers_1.Long.UZERO,
            tx_size_cost_per_byte: (0, helpers_1.isSet)(object.tx_size_cost_per_byte) ? helpers_1.Long.fromValue(object.tx_size_cost_per_byte) : helpers_1.Long.UZERO,
            sig_verify_cost_ed25519: (0, helpers_1.isSet)(object.sig_verify_cost_ed25519) ? helpers_1.Long.fromValue(object.sig_verify_cost_ed25519) : helpers_1.Long.UZERO,
            sig_verify_cost_secp256k1: (0, helpers_1.isSet)(object.sig_verify_cost_secp256k1) ? helpers_1.Long.fromValue(object.sig_verify_cost_secp256k1) : helpers_1.Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.max_memo_characters !== undefined && (obj.max_memo_characters = (message.max_memo_characters || helpers_1.Long.UZERO).toString());
        message.tx_sig_limit !== undefined && (obj.tx_sig_limit = (message.tx_sig_limit || helpers_1.Long.UZERO).toString());
        message.tx_size_cost_per_byte !== undefined && (obj.tx_size_cost_per_byte = (message.tx_size_cost_per_byte || helpers_1.Long.UZERO).toString());
        message.sig_verify_cost_ed25519 !== undefined && (obj.sig_verify_cost_ed25519 = (message.sig_verify_cost_ed25519 || helpers_1.Long.UZERO).toString());
        message.sig_verify_cost_secp256k1 !== undefined && (obj.sig_verify_cost_secp256k1 = (message.sig_verify_cost_secp256k1 || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.max_memo_characters = object.max_memo_characters !== undefined && object.max_memo_characters !== null ? helpers_1.Long.fromValue(object.max_memo_characters) : helpers_1.Long.UZERO;
        message.tx_sig_limit = object.tx_sig_limit !== undefined && object.tx_sig_limit !== null ? helpers_1.Long.fromValue(object.tx_sig_limit) : helpers_1.Long.UZERO;
        message.tx_size_cost_per_byte = object.tx_size_cost_per_byte !== undefined && object.tx_size_cost_per_byte !== null ? helpers_1.Long.fromValue(object.tx_size_cost_per_byte) : helpers_1.Long.UZERO;
        message.sig_verify_cost_ed25519 = object.sig_verify_cost_ed25519 !== undefined && object.sig_verify_cost_ed25519 !== null ? helpers_1.Long.fromValue(object.sig_verify_cost_ed25519) : helpers_1.Long.UZERO;
        message.sig_verify_cost_secp256k1 = object.sig_verify_cost_secp256k1 !== undefined && object.sig_verify_cost_secp256k1 !== null ? helpers_1.Long.fromValue(object.sig_verify_cost_secp256k1) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            max_memo_characters: helpers_1.Long.fromString(object.max_memo_characters),
            tx_sig_limit: helpers_1.Long.fromString(object.tx_sig_limit),
            tx_size_cost_per_byte: helpers_1.Long.fromString(object.tx_size_cost_per_byte),
            sig_verify_cost_ed25519: helpers_1.Long.fromString(object.sig_verify_cost_ed25519),
            sig_verify_cost_secp256k1: helpers_1.Long.fromString(object.sig_verify_cost_secp256k1)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.max_memo_characters = message.max_memo_characters ? message.max_memo_characters.toString() : undefined;
        obj.tx_sig_limit = message.tx_sig_limit ? message.tx_sig_limit.toString() : undefined;
        obj.tx_size_cost_per_byte = message.tx_size_cost_per_byte ? message.tx_size_cost_per_byte.toString() : undefined;
        obj.sig_verify_cost_ed25519 = message.sig_verify_cost_ed25519 ? message.sig_verify_cost_ed25519.toString() : undefined;
        obj.sig_verify_cost_secp256k1 = message.sig_verify_cost_secp256k1 ? message.sig_verify_cost_secp256k1.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=auth.js.map