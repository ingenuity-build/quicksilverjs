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
exports.Metadata = exports.DenomUnit = exports.Supply = exports.Output = exports.Input = exports.SendEnabled = exports.Params = void 0;
const coin_1 = require("../../base/v1beta1/coin");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../../helpers");
function createBaseParams() {
    return {
        send_enabled: [],
        default_send_enabled: false
    };
}
exports.Params = {
    typeUrl: "/cosmos.bank.v1beta1.Params",
    aminoType: "cosmos-sdk/Params",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.send_enabled) {
            exports.SendEnabled.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.default_send_enabled === true) {
            writer.uint32(16).bool(message.default_send_enabled);
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
                    message.send_enabled.push(exports.SendEnabled.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.default_send_enabled = reader.bool();
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
            send_enabled: Array.isArray(object?.send_enabled) ? object.send_enabled.map((e) => exports.SendEnabled.fromJSON(e)) : [],
            default_send_enabled: (0, helpers_1.isSet)(object.default_send_enabled) ? Boolean(object.default_send_enabled) : false
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.send_enabled) {
            obj.send_enabled = message.send_enabled.map(e => e ? exports.SendEnabled.toJSON(e) : undefined);
        }
        else {
            obj.send_enabled = [];
        }
        message.default_send_enabled !== undefined && (obj.default_send_enabled = message.default_send_enabled);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.send_enabled = object.send_enabled?.map(e => exports.SendEnabled.fromPartial(e)) || [];
        message.default_send_enabled = object.default_send_enabled ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            send_enabled: Array.isArray(object?.send_enabled) ? object.send_enabled.map((e) => exports.SendEnabled.fromAmino(e)) : [],
            default_send_enabled: object.default_send_enabled
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.send_enabled) {
            obj.send_enabled = message.send_enabled.map(e => e ? exports.SendEnabled.toAmino(e) : undefined);
        }
        else {
            obj.send_enabled = [];
        }
        obj.default_send_enabled = message.default_send_enabled;
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
            typeUrl: "/cosmos.bank.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
function createBaseSendEnabled() {
    return {
        denom: "",
        enabled: false
    };
}
exports.SendEnabled = {
    typeUrl: "/cosmos.bank.v1beta1.SendEnabled",
    aminoType: "cosmos-sdk/SendEnabled",
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.enabled === true) {
            writer.uint32(16).bool(message.enabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendEnabled();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.enabled = reader.bool();
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
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : "",
            enabled: (0, helpers_1.isSet)(object.enabled) ? Boolean(object.enabled) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSendEnabled();
        message.denom = object.denom ?? "";
        message.enabled = object.enabled ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            denom: object.denom,
            enabled: object.enabled
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.enabled = message.enabled;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SendEnabled.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SendEnabled",
            value: exports.SendEnabled.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SendEnabled.decode(message.value);
    },
    toProto(message) {
        return exports.SendEnabled.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.SendEnabled",
            value: exports.SendEnabled.encode(message).finish()
        };
    }
};
function createBaseInput() {
    return {
        address: "",
        coins: []
    };
}
exports.Input = {
    typeUrl: "/cosmos.bank.v1beta1.Input",
    aminoType: "cosmos-sdk/Input",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseInput();
        message.address = object.address ?? "";
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Input.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Input",
            value: exports.Input.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Input.decode(message.value);
    },
    toProto(message) {
        return exports.Input.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.Input",
            value: exports.Input.encode(message).finish()
        };
    }
};
function createBaseOutput() {
    return {
        address: "",
        coins: []
    };
}
exports.Output = {
    typeUrl: "/cosmos.bank.v1beta1.Output",
    aminoType: "cosmos-sdk/Output",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOutput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseOutput();
        message.address = object.address ?? "";
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Output.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Output",
            value: exports.Output.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Output.decode(message.value);
    },
    toProto(message) {
        return exports.Output.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.Output",
            value: exports.Output.encode(message).finish()
        };
    }
};
function createBaseSupply() {
    return {
        $typeUrl: "/cosmos.bank.v1beta1.Supply",
        total: []
    };
}
exports.Supply = {
    typeUrl: "/cosmos.bank.v1beta1.Supply",
    aminoType: "cosmos-sdk/Supply",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.total) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSupply();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            total: Array.isArray(object?.total) ? object.total.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.total) {
            obj.total = message.total.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.total = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSupply();
        message.total = object.total?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            total: Array.isArray(object?.total) ? object.total.map((e) => coin_1.Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.total) {
            obj.total = message.total.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.total = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Supply.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Supply",
            value: exports.Supply.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Supply.decode(message.value);
    },
    toProto(message) {
        return exports.Supply.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.Supply",
            value: exports.Supply.encode(message).finish()
        };
    }
};
function createBaseDenomUnit() {
    return {
        denom: "",
        exponent: 0,
        aliases: []
    };
}
exports.DenomUnit = {
    typeUrl: "/cosmos.bank.v1beta1.DenomUnit",
    aminoType: "cosmos-sdk/DenomUnit",
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.exponent !== 0) {
            writer.uint32(16).uint32(message.exponent);
        }
        for (const v of message.aliases) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenomUnit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.exponent = reader.uint32();
                    break;
                case 3:
                    message.aliases.push(reader.string());
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
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : "",
            exponent: (0, helpers_1.isSet)(object.exponent) ? Number(object.exponent) : 0,
            aliases: Array.isArray(object?.aliases) ? object.aliases.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.exponent !== undefined && (obj.exponent = Math.round(message.exponent));
        if (message.aliases) {
            obj.aliases = message.aliases.map(e => e);
        }
        else {
            obj.aliases = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDenomUnit();
        message.denom = object.denom ?? "";
        message.exponent = object.exponent ?? 0;
        message.aliases = object.aliases?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            denom: object.denom,
            exponent: object.exponent,
            aliases: Array.isArray(object?.aliases) ? object.aliases.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.exponent = message.exponent;
        if (message.aliases) {
            obj.aliases = message.aliases.map(e => e);
        }
        else {
            obj.aliases = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DenomUnit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DenomUnit",
            value: exports.DenomUnit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DenomUnit.decode(message.value);
    },
    toProto(message) {
        return exports.DenomUnit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.DenomUnit",
            value: exports.DenomUnit.encode(message).finish()
        };
    }
};
function createBaseMetadata() {
    return {
        description: "",
        denom_units: [],
        base: "",
        display: "",
        name: "",
        symbol: "",
        uri: "",
        uri_hash: ""
    };
}
exports.Metadata = {
    typeUrl: "/cosmos.bank.v1beta1.Metadata",
    aminoType: "cosmos-sdk/Metadata",
    encode(message, writer = _m0.Writer.create()) {
        if (message.description !== "") {
            writer.uint32(10).string(message.description);
        }
        for (const v of message.denom_units) {
            exports.DenomUnit.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.base !== "") {
            writer.uint32(26).string(message.base);
        }
        if (message.display !== "") {
            writer.uint32(34).string(message.display);
        }
        if (message.name !== "") {
            writer.uint32(42).string(message.name);
        }
        if (message.symbol !== "") {
            writer.uint32(50).string(message.symbol);
        }
        if (message.uri !== "") {
            writer.uint32(58).string(message.uri);
        }
        if (message.uri_hash !== "") {
            writer.uint32(66).string(message.uri_hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = reader.string();
                    break;
                case 2:
                    message.denom_units.push(exports.DenomUnit.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.base = reader.string();
                    break;
                case 4:
                    message.display = reader.string();
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.symbol = reader.string();
                    break;
                case 7:
                    message.uri = reader.string();
                    break;
                case 8:
                    message.uri_hash = reader.string();
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
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            denom_units: Array.isArray(object?.denom_units) ? object.denom_units.map((e) => exports.DenomUnit.fromJSON(e)) : [],
            base: (0, helpers_1.isSet)(object.base) ? String(object.base) : "",
            display: (0, helpers_1.isSet)(object.display) ? String(object.display) : "",
            name: (0, helpers_1.isSet)(object.name) ? String(object.name) : "",
            symbol: (0, helpers_1.isSet)(object.symbol) ? String(object.symbol) : "",
            uri: (0, helpers_1.isSet)(object.uri) ? String(object.uri) : "",
            uri_hash: (0, helpers_1.isSet)(object.uri_hash) ? String(object.uri_hash) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.description !== undefined && (obj.description = message.description);
        if (message.denom_units) {
            obj.denom_units = message.denom_units.map(e => e ? exports.DenomUnit.toJSON(e) : undefined);
        }
        else {
            obj.denom_units = [];
        }
        message.base !== undefined && (obj.base = message.base);
        message.display !== undefined && (obj.display = message.display);
        message.name !== undefined && (obj.name = message.name);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.uri !== undefined && (obj.uri = message.uri);
        message.uri_hash !== undefined && (obj.uri_hash = message.uri_hash);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMetadata();
        message.description = object.description ?? "";
        message.denom_units = object.denom_units?.map(e => exports.DenomUnit.fromPartial(e)) || [];
        message.base = object.base ?? "";
        message.display = object.display ?? "";
        message.name = object.name ?? "";
        message.symbol = object.symbol ?? "";
        message.uri = object.uri ?? "";
        message.uri_hash = object.uri_hash ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            description: object.description,
            denom_units: Array.isArray(object?.denom_units) ? object.denom_units.map((e) => exports.DenomUnit.fromAmino(e)) : [],
            base: object.base,
            display: object.display,
            name: object.name,
            symbol: object.symbol,
            uri: object.uri,
            uri_hash: object.uri_hash
        };
    },
    toAmino(message) {
        const obj = {};
        obj.description = message.description;
        if (message.denom_units) {
            obj.denom_units = message.denom_units.map(e => e ? exports.DenomUnit.toAmino(e) : undefined);
        }
        else {
            obj.denom_units = [];
        }
        obj.base = message.base;
        obj.display = message.display;
        obj.name = message.name;
        obj.symbol = message.symbol;
        obj.uri = message.uri;
        obj.uri_hash = message.uri_hash;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Metadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Metadata",
            value: exports.Metadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Metadata.decode(message.value);
    },
    toProto(message) {
        return exports.Metadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.Metadata",
            value: exports.Metadata.encode(message).finish()
        };
    }
};
//# sourceMappingURL=bank.js.map