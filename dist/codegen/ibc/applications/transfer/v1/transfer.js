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
exports.Params = exports.DenomTrace = void 0;
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../../../helpers");
function createBaseDenomTrace() {
    return {
        path: "",
        base_denom: ""
    };
}
exports.DenomTrace = {
    typeUrl: "/ibc.applications.transfer.v1.DenomTrace",
    aminoType: "cosmos-sdk/DenomTrace",
    encode(message, writer = _m0.Writer.create()) {
        if (message.path !== "") {
            writer.uint32(10).string(message.path);
        }
        if (message.base_denom !== "") {
            writer.uint32(18).string(message.base_denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenomTrace();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.string();
                    break;
                case 2:
                    message.base_denom = reader.string();
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
            path: (0, helpers_1.isSet)(object.path) ? String(object.path) : "",
            base_denom: (0, helpers_1.isSet)(object.base_denom) ? String(object.base_denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = message.path);
        message.base_denom !== undefined && (obj.base_denom = message.base_denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDenomTrace();
        message.path = object.path ?? "";
        message.base_denom = object.base_denom ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            path: object.path,
            base_denom: object.base_denom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path;
        obj.base_denom = message.base_denom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DenomTrace.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DenomTrace",
            value: exports.DenomTrace.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DenomTrace.decode(message.value);
    },
    toProto(message) {
        return exports.DenomTrace.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.DenomTrace",
            value: exports.DenomTrace.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        send_enabled: false,
        receive_enabled: false
    };
}
exports.Params = {
    typeUrl: "/ibc.applications.transfer.v1.Params",
    aminoType: "cosmos-sdk/Params",
    encode(message, writer = _m0.Writer.create()) {
        if (message.send_enabled === true) {
            writer.uint32(8).bool(message.send_enabled);
        }
        if (message.receive_enabled === true) {
            writer.uint32(16).bool(message.receive_enabled);
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
                    message.send_enabled = reader.bool();
                    break;
                case 2:
                    message.receive_enabled = reader.bool();
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
            send_enabled: (0, helpers_1.isSet)(object.send_enabled) ? Boolean(object.send_enabled) : false,
            receive_enabled: (0, helpers_1.isSet)(object.receive_enabled) ? Boolean(object.receive_enabled) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.send_enabled !== undefined && (obj.send_enabled = message.send_enabled);
        message.receive_enabled !== undefined && (obj.receive_enabled = message.receive_enabled);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.send_enabled = object.send_enabled ?? false;
        message.receive_enabled = object.receive_enabled ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            send_enabled: object.send_enabled,
            receive_enabled: object.receive_enabled
        };
    },
    toAmino(message) {
        const obj = {};
        obj.send_enabled = message.send_enabled;
        obj.receive_enabled = message.receive_enabled;
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
            typeUrl: "/ibc.applications.transfer.v1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=transfer.js.map