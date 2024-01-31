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
exports.MsgSetDenomMetadataResponse = exports.MsgSetDenomMetadata = exports.MsgChangeAdminResponse = exports.MsgChangeAdmin = exports.MsgBurnResponse = exports.MsgBurn = exports.MsgMintResponse = exports.MsgMint = exports.MsgCreateDenomResponse = exports.MsgCreateDenom = void 0;
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const bank_1 = require("../../../cosmos/bank/v1beta1/bank");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../../helpers");
function createBaseMsgCreateDenom() {
    return {
        sender: "",
        subdenom: ""
    };
}
exports.MsgCreateDenom = {
    typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgCreateDenom",
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.subdenom !== "") {
            writer.uint32(18).string(message.subdenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.subdenom = reader.string();
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
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            subdenom: (0, helpers_1.isSet)(object.subdenom) ? String(object.subdenom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.subdenom !== undefined && (obj.subdenom = message.subdenom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateDenom();
        message.sender = object.sender ?? "";
        message.subdenom = object.subdenom ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            subdenom: object.subdenom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.subdenom = message.subdenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateDenom.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateDenom.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateDenom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgCreateDenom",
            value: exports.MsgCreateDenom.encode(message).finish()
        };
    }
};
function createBaseMsgCreateDenomResponse() {
    return {
        new_token_denom: ""
    };
}
exports.MsgCreateDenomResponse = {
    typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgCreateDenomResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.new_token_denom !== "") {
            writer.uint32(10).string(message.new_token_denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.new_token_denom = reader.string();
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
            new_token_denom: (0, helpers_1.isSet)(object.new_token_denom) ? String(object.new_token_denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.new_token_denom !== undefined && (obj.new_token_denom = message.new_token_denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateDenomResponse();
        message.new_token_denom = object.new_token_denom ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            new_token_denom: object.new_token_denom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.new_token_denom = message.new_token_denom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateDenomResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateDenomResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgCreateDenomResponse",
            value: exports.MsgCreateDenomResponse.encode(message).finish()
        };
    }
};
function createBaseMsgMint() {
    return {
        sender: "",
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.MsgMint = {
    typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgMint",
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMint();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            amount: (0, helpers_1.isSet)(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgMint();
        message.sender = object.sender ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            amount: object?.amount ? coin_1.Coin.fromAmino(object.amount) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgMint.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgMint.decode(message.value);
    },
    toProto(message) {
        return exports.MsgMint.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgMint",
            value: exports.MsgMint.encode(message).finish()
        };
    }
};
function createBaseMsgMintResponse() {
    return {};
}
exports.MsgMintResponse = {
    typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgMintResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMintResponse();
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
        const message = createBaseMsgMintResponse();
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
        return exports.MsgMintResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgMintResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgMintResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgMintResponse",
            value: exports.MsgMintResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBurn() {
    return {
        sender: "",
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.MsgBurn = {
    typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgBurn",
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBurn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            amount: (0, helpers_1.isSet)(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgBurn();
        message.sender = object.sender ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            amount: object?.amount ? coin_1.Coin.fromAmino(object.amount) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgBurn.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgBurn.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBurn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgBurn",
            value: exports.MsgBurn.encode(message).finish()
        };
    }
};
function createBaseMsgBurnResponse() {
    return {};
}
exports.MsgBurnResponse = {
    typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgBurnResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBurnResponse();
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
        const message = createBaseMsgBurnResponse();
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
        return exports.MsgBurnResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgBurnResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBurnResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgBurnResponse",
            value: exports.MsgBurnResponse.encode(message).finish()
        };
    }
};
function createBaseMsgChangeAdmin() {
    return {
        sender: "",
        denom: "",
        new_admin: ""
    };
}
exports.MsgChangeAdmin = {
    typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgChangeAdmin",
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.new_admin !== "") {
            writer.uint32(26).string(message.new_admin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChangeAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.new_admin = reader.string();
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
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : "",
            new_admin: (0, helpers_1.isSet)(object.new_admin) ? String(object.new_admin) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.denom !== undefined && (obj.denom = message.denom);
        message.new_admin !== undefined && (obj.new_admin = message.new_admin);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgChangeAdmin();
        message.sender = object.sender ?? "";
        message.denom = object.denom ?? "";
        message.new_admin = object.new_admin ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            denom: object.denom,
            new_admin: object.new_admin
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.denom = message.denom;
        obj.new_admin = message.new_admin;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChangeAdmin.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgChangeAdmin.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChangeAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgChangeAdmin",
            value: exports.MsgChangeAdmin.encode(message).finish()
        };
    }
};
function createBaseMsgChangeAdminResponse() {
    return {};
}
exports.MsgChangeAdminResponse = {
    typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgChangeAdminResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChangeAdminResponse();
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
        const message = createBaseMsgChangeAdminResponse();
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
        return exports.MsgChangeAdminResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgChangeAdminResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChangeAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgChangeAdminResponse",
            value: exports.MsgChangeAdminResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSetDenomMetadata() {
    return {
        sender: "",
        metadata: bank_1.Metadata.fromPartial({})
    };
}
exports.MsgSetDenomMetadata = {
    typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgSetDenomMetadata",
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.metadata !== undefined) {
            bank_1.Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetDenomMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.metadata = bank_1.Metadata.decode(reader, reader.uint32());
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
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            metadata: (0, helpers_1.isSet)(object.metadata) ? bank_1.Metadata.fromJSON(object.metadata) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.metadata !== undefined && (obj.metadata = message.metadata ? bank_1.Metadata.toJSON(message.metadata) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetDenomMetadata();
        message.sender = object.sender ?? "";
        message.metadata = object.metadata !== undefined && object.metadata !== null ? bank_1.Metadata.fromPartial(object.metadata) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            metadata: object?.metadata ? bank_1.Metadata.fromAmino(object.metadata) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.metadata = message.metadata ? bank_1.Metadata.toAmino(message.metadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSetDenomMetadata.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSetDenomMetadata.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetDenomMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgSetDenomMetadata",
            value: exports.MsgSetDenomMetadata.encode(message).finish()
        };
    }
};
function createBaseMsgSetDenomMetadataResponse() {
    return {};
}
exports.MsgSetDenomMetadataResponse = {
    typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgSetDenomMetadataResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetDenomMetadataResponse();
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
        const message = createBaseMsgSetDenomMetadataResponse();
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
        return exports.MsgSetDenomMetadataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSetDenomMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetDenomMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgSetDenomMetadataResponse",
            value: exports.MsgSetDenomMetadataResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map