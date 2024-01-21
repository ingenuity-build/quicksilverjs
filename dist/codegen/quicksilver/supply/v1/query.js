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
exports.QuerySupplyResponse = exports.QuerySupplyRequest = void 0;
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseQuerySupplyRequest() {
    return {};
}
exports.QuerySupplyRequest = {
    typeUrl: "/quicksilver.supply.v1.QuerySupplyRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySupplyRequest();
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
        const message = createBaseQuerySupplyRequest();
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
        return exports.QuerySupplyRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySupplyRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySupplyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.supply.v1.QuerySupplyRequest",
            value: exports.QuerySupplyRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySupplyResponse() {
    return {
        supply: helpers_1.Long.UZERO,
        circulatingSupply: helpers_1.Long.UZERO
    };
}
exports.QuerySupplyResponse = {
    typeUrl: "/quicksilver.supply.v1.QuerySupplyResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.supply.isZero()) {
            writer.uint32(8).uint64(message.supply);
        }
        if (!message.circulatingSupply.isZero()) {
            writer.uint32(16).uint64(message.circulatingSupply);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySupplyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.supply = reader.uint64();
                    break;
                case 2:
                    message.circulatingSupply = reader.uint64();
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
            supply: (0, helpers_1.isSet)(object.supply) ? helpers_1.Long.fromValue(object.supply) : helpers_1.Long.UZERO,
            circulatingSupply: (0, helpers_1.isSet)(object.circulatingSupply) ? helpers_1.Long.fromValue(object.circulatingSupply) : helpers_1.Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.supply !== undefined && (obj.supply = (message.supply || helpers_1.Long.UZERO).toString());
        message.circulatingSupply !== undefined && (obj.circulatingSupply = (message.circulatingSupply || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySupplyResponse();
        message.supply = object.supply !== undefined && object.supply !== null ? helpers_1.Long.fromValue(object.supply) : helpers_1.Long.UZERO;
        message.circulatingSupply = object.circulatingSupply !== undefined && object.circulatingSupply !== null ? helpers_1.Long.fromValue(object.circulatingSupply) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            supply: helpers_1.Long.fromString(object.supply),
            circulatingSupply: helpers_1.Long.fromString(object.circulating_supply)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.supply = message.supply ? message.supply.toString() : undefined;
        obj.circulating_supply = message.circulatingSupply ? message.circulatingSupply.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySupplyResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QuerySupplyResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySupplyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.supply.v1.QuerySupplyResponse",
            value: exports.QuerySupplyResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map