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
exports.QueryDenomsFromCreatorResponse = exports.QueryDenomsFromCreatorRequest = exports.QueryDenomAuthorityMetadataResponse = exports.QueryDenomAuthorityMetadataRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
const params_1 = require("./params");
const authorityMetadata_1 = require("./authorityMetadata");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../../helpers");
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/quicksilver.tokenfactory.v1beta1.QueryParamsRequest",
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
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.tokenfactory.v1beta1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: params_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/quicksilver.tokenfactory.v1beta1.QueryParamsResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
            params: (0, helpers_1.isSet)(object.params) ? params_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? params_1.Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.tokenfactory.v1beta1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDenomAuthorityMetadataRequest() {
    return {
        denom: ""
    };
}
exports.QueryDenomAuthorityMetadataRequest = {
    typeUrl: "/quicksilver.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomAuthorityMetadataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
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
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomAuthorityMetadataRequest();
        message.denom = object.denom ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            denom: object.denom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDenomAuthorityMetadataRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDenomAuthorityMetadataRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDenomAuthorityMetadataRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest",
            value: exports.QueryDenomAuthorityMetadataRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDenomAuthorityMetadataResponse() {
    return {
        authorityMetadata: authorityMetadata_1.DenomAuthorityMetadata.fromPartial({})
    };
}
exports.QueryDenomAuthorityMetadataResponse = {
    typeUrl: "/quicksilver.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.authorityMetadata !== undefined) {
            authorityMetadata_1.DenomAuthorityMetadata.encode(message.authorityMetadata, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomAuthorityMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authorityMetadata = authorityMetadata_1.DenomAuthorityMetadata.decode(reader, reader.uint32());
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
            authorityMetadata: (0, helpers_1.isSet)(object.authorityMetadata) ? authorityMetadata_1.DenomAuthorityMetadata.fromJSON(object.authorityMetadata) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.authorityMetadata !== undefined && (obj.authorityMetadata = message.authorityMetadata ? authorityMetadata_1.DenomAuthorityMetadata.toJSON(message.authorityMetadata) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomAuthorityMetadataResponse();
        message.authorityMetadata = object.authorityMetadata !== undefined && object.authorityMetadata !== null ? authorityMetadata_1.DenomAuthorityMetadata.fromPartial(object.authorityMetadata) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            authorityMetadata: object?.authority_metadata ? authorityMetadata_1.DenomAuthorityMetadata.fromAmino(object.authority_metadata) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.authority_metadata = message.authorityMetadata ? authorityMetadata_1.DenomAuthorityMetadata.toAmino(message.authorityMetadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDenomAuthorityMetadataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDenomAuthorityMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDenomAuthorityMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse",
            value: exports.QueryDenomAuthorityMetadataResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDenomsFromCreatorRequest() {
    return {
        creator: ""
    };
}
exports.QueryDenomsFromCreatorRequest = {
    typeUrl: "/quicksilver.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomsFromCreatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
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
            creator: (0, helpers_1.isSet)(object.creator) ? String(object.creator) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomsFromCreatorRequest();
        message.creator = object.creator ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            creator: object.creator
        };
    },
    toAmino(message) {
        const obj = {};
        obj.creator = message.creator;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDenomsFromCreatorRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDenomsFromCreatorRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDenomsFromCreatorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest",
            value: exports.QueryDenomsFromCreatorRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDenomsFromCreatorResponse() {
    return {
        denoms: []
    };
}
exports.QueryDenomsFromCreatorResponse = {
    typeUrl: "/quicksilver.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.denoms) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomsFromCreatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denoms.push(reader.string());
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
            denoms: Array.isArray(object?.denoms) ? object.denoms.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.denoms) {
            obj.denoms = message.denoms.map(e => e);
        }
        else {
            obj.denoms = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomsFromCreatorResponse();
        message.denoms = object.denoms?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            denoms: Array.isArray(object?.denoms) ? object.denoms.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.denoms) {
            obj.denoms = message.denoms.map(e => e);
        }
        else {
            obj.denoms = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDenomsFromCreatorResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDenomsFromCreatorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDenomsFromCreatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse",
            value: exports.QueryDenomsFromCreatorResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map