import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Metadata } from "../../../cosmos/bank/v1beta1/bank";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseMsgCreateDenom() {
    return {
        sender: "",
        subdenom: ""
    };
}
export const MsgCreateDenom = {
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            subdenom: isSet(object.subdenom) ? String(object.subdenom) : ""
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
        return MsgCreateDenom.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateDenom.decode(message.value);
    },
    toProto(message) {
        return MsgCreateDenom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgCreateDenom",
            value: MsgCreateDenom.encode(message).finish()
        };
    }
};
function createBaseMsgCreateDenomResponse() {
    return {
        new_token_denom: ""
    };
}
export const MsgCreateDenomResponse = {
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
            new_token_denom: isSet(object.new_token_denom) ? String(object.new_token_denom) : ""
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
        return MsgCreateDenomResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateDenomResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgCreateDenomResponse",
            value: MsgCreateDenomResponse.encode(message).finish()
        };
    }
};
function createBaseMsgMint() {
    return {
        sender: "",
        amount: Coin.fromPartial({})
    };
}
export const MsgMint = {
    typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgMint",
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
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
                    message.amount = Coin.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgMint();
        message.sender = object.sender ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgMint.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgMint.decode(message.value);
    },
    toProto(message) {
        return MsgMint.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgMint",
            value: MsgMint.encode(message).finish()
        };
    }
};
function createBaseMsgMintResponse() {
    return {};
}
export const MsgMintResponse = {
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
        return MsgMintResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgMintResponse.decode(message.value);
    },
    toProto(message) {
        return MsgMintResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgMintResponse",
            value: MsgMintResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBurn() {
    return {
        sender: "",
        amount: Coin.fromPartial({})
    };
}
export const MsgBurn = {
    typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgBurn",
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
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
                    message.amount = Coin.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgBurn();
        message.sender = object.sender ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBurn.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgBurn.decode(message.value);
    },
    toProto(message) {
        return MsgBurn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgBurn",
            value: MsgBurn.encode(message).finish()
        };
    }
};
function createBaseMsgBurnResponse() {
    return {};
}
export const MsgBurnResponse = {
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
        return MsgBurnResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgBurnResponse.decode(message.value);
    },
    toProto(message) {
        return MsgBurnResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgBurnResponse",
            value: MsgBurnResponse.encode(message).finish()
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
export const MsgChangeAdmin = {
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
            new_admin: isSet(object.new_admin) ? String(object.new_admin) : ""
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
        return MsgChangeAdmin.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgChangeAdmin.decode(message.value);
    },
    toProto(message) {
        return MsgChangeAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgChangeAdmin",
            value: MsgChangeAdmin.encode(message).finish()
        };
    }
};
function createBaseMsgChangeAdminResponse() {
    return {};
}
export const MsgChangeAdminResponse = {
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
        return MsgChangeAdminResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgChangeAdminResponse.decode(message.value);
    },
    toProto(message) {
        return MsgChangeAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgChangeAdminResponse",
            value: MsgChangeAdminResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSetDenomMetadata() {
    return {
        sender: "",
        metadata: Metadata.fromPartial({})
    };
}
export const MsgSetDenomMetadata = {
    typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgSetDenomMetadata",
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.metadata !== undefined) {
            Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
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
                    message.metadata = Metadata.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.metadata !== undefined && (obj.metadata = message.metadata ? Metadata.toJSON(message.metadata) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetDenomMetadata();
        message.sender = object.sender ?? "";
        message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            metadata: object?.metadata ? Metadata.fromAmino(object.metadata) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSetDenomMetadata.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSetDenomMetadata.decode(message.value);
    },
    toProto(message) {
        return MsgSetDenomMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgSetDenomMetadata",
            value: MsgSetDenomMetadata.encode(message).finish()
        };
    }
};
function createBaseMsgSetDenomMetadataResponse() {
    return {};
}
export const MsgSetDenomMetadataResponse = {
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
        return MsgSetDenomMetadataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSetDenomMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSetDenomMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgSetDenomMetadataResponse",
            value: MsgSetDenomMetadataResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map