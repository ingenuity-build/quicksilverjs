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
exports.GenesisState = void 0;
const claimsmanager_1 = require("./claimsmanager");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../../helpers");
function createBaseGenesisState() {
    return {
        params: claimsmanager_1.Params.fromPartial({}),
        claims: []
    };
}
exports.GenesisState = {
    typeUrl: "/quicksilver.claimsmanager.v1.GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            claimsmanager_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.claims) {
            claimsmanager_1.Claim.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = claimsmanager_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.claims.push(claimsmanager_1.Claim.decode(reader, reader.uint32()));
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
            params: (0, helpers_1.isSet)(object.params) ? claimsmanager_1.Params.fromJSON(object.params) : undefined,
            claims: Array.isArray(object?.claims) ? object.claims.map((e) => claimsmanager_1.Claim.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? claimsmanager_1.Params.toJSON(message.params) : undefined);
        if (message.claims) {
            obj.claims = message.claims.map(e => e ? claimsmanager_1.Claim.toJSON(e) : undefined);
        }
        else {
            obj.claims = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? claimsmanager_1.Params.fromPartial(object.params) : undefined;
        message.claims = object.claims?.map(e => claimsmanager_1.Claim.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? claimsmanager_1.Params.fromAmino(object.params) : undefined,
            claims: Array.isArray(object?.claims) ? object.claims.map((e) => claimsmanager_1.Claim.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? claimsmanager_1.Params.toAmino(message.params) : undefined;
        if (message.claims) {
            obj.claims = message.claims.map(e => e ? claimsmanager_1.Claim.toAmino(e) : undefined);
        }
        else {
            obj.claims = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.claimsmanager.v1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map