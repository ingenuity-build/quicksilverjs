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
exports.Params = exports.Minter = void 0;
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseMinter() {
    return {
        inflation: "",
        annual_provisions: ""
    };
}
exports.Minter = {
    typeUrl: "/cosmos.mint.v1beta1.Minter",
    aminoType: "cosmos-sdk/Minter",
    encode(message, writer = _m0.Writer.create()) {
        if (message.inflation !== "") {
            writer.uint32(10).string(message.inflation);
        }
        if (message.annual_provisions !== "") {
            writer.uint32(18).string(message.annual_provisions);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMinter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inflation = reader.string();
                    break;
                case 2:
                    message.annual_provisions = reader.string();
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
            inflation: (0, helpers_1.isSet)(object.inflation) ? String(object.inflation) : "",
            annual_provisions: (0, helpers_1.isSet)(object.annual_provisions) ? String(object.annual_provisions) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.inflation !== undefined && (obj.inflation = message.inflation);
        message.annual_provisions !== undefined && (obj.annual_provisions = message.annual_provisions);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMinter();
        message.inflation = object.inflation ?? "";
        message.annual_provisions = object.annual_provisions ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            inflation: object.inflation,
            annual_provisions: object.annual_provisions
        };
    },
    toAmino(message) {
        const obj = {};
        obj.inflation = message.inflation;
        obj.annual_provisions = message.annual_provisions;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Minter.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Minter",
            value: exports.Minter.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Minter.decode(message.value);
    },
    toProto(message) {
        return exports.Minter.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.mint.v1beta1.Minter",
            value: exports.Minter.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        mint_denom: "",
        inflation_rate_change: "",
        inflation_max: "",
        inflation_min: "",
        goal_bonded: "",
        blocks_per_year: helpers_1.Long.UZERO
    };
}
exports.Params = {
    typeUrl: "/cosmos.mint.v1beta1.Params",
    aminoType: "cosmos-sdk/Params",
    encode(message, writer = _m0.Writer.create()) {
        if (message.mint_denom !== "") {
            writer.uint32(10).string(message.mint_denom);
        }
        if (message.inflation_rate_change !== "") {
            writer.uint32(18).string(message.inflation_rate_change);
        }
        if (message.inflation_max !== "") {
            writer.uint32(26).string(message.inflation_max);
        }
        if (message.inflation_min !== "") {
            writer.uint32(34).string(message.inflation_min);
        }
        if (message.goal_bonded !== "") {
            writer.uint32(42).string(message.goal_bonded);
        }
        if (!message.blocks_per_year.isZero()) {
            writer.uint32(48).uint64(message.blocks_per_year);
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
                    message.mint_denom = reader.string();
                    break;
                case 2:
                    message.inflation_rate_change = reader.string();
                    break;
                case 3:
                    message.inflation_max = reader.string();
                    break;
                case 4:
                    message.inflation_min = reader.string();
                    break;
                case 5:
                    message.goal_bonded = reader.string();
                    break;
                case 6:
                    message.blocks_per_year = reader.uint64();
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
            mint_denom: (0, helpers_1.isSet)(object.mint_denom) ? String(object.mint_denom) : "",
            inflation_rate_change: (0, helpers_1.isSet)(object.inflation_rate_change) ? String(object.inflation_rate_change) : "",
            inflation_max: (0, helpers_1.isSet)(object.inflation_max) ? String(object.inflation_max) : "",
            inflation_min: (0, helpers_1.isSet)(object.inflation_min) ? String(object.inflation_min) : "",
            goal_bonded: (0, helpers_1.isSet)(object.goal_bonded) ? String(object.goal_bonded) : "",
            blocks_per_year: (0, helpers_1.isSet)(object.blocks_per_year) ? helpers_1.Long.fromValue(object.blocks_per_year) : helpers_1.Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.mint_denom !== undefined && (obj.mint_denom = message.mint_denom);
        message.inflation_rate_change !== undefined && (obj.inflation_rate_change = message.inflation_rate_change);
        message.inflation_max !== undefined && (obj.inflation_max = message.inflation_max);
        message.inflation_min !== undefined && (obj.inflation_min = message.inflation_min);
        message.goal_bonded !== undefined && (obj.goal_bonded = message.goal_bonded);
        message.blocks_per_year !== undefined && (obj.blocks_per_year = (message.blocks_per_year || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.mint_denom = object.mint_denom ?? "";
        message.inflation_rate_change = object.inflation_rate_change ?? "";
        message.inflation_max = object.inflation_max ?? "";
        message.inflation_min = object.inflation_min ?? "";
        message.goal_bonded = object.goal_bonded ?? "";
        message.blocks_per_year = object.blocks_per_year !== undefined && object.blocks_per_year !== null ? helpers_1.Long.fromValue(object.blocks_per_year) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            mint_denom: object.mint_denom,
            inflation_rate_change: object.inflation_rate_change,
            inflation_max: object.inflation_max,
            inflation_min: object.inflation_min,
            goal_bonded: object.goal_bonded,
            blocks_per_year: helpers_1.Long.fromString(object.blocks_per_year)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.mint_denom = message.mint_denom;
        obj.inflation_rate_change = message.inflation_rate_change;
        obj.inflation_max = message.inflation_max;
        obj.inflation_min = message.inflation_min;
        obj.goal_bonded = message.goal_bonded;
        obj.blocks_per_year = message.blocks_per_year ? message.blocks_per_year.toString() : undefined;
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
            typeUrl: "/cosmos.mint.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=mint.js.map