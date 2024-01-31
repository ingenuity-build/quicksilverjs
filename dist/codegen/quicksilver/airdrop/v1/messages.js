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
exports.MsgIncentivePoolSpendResponse = exports.MsgIncentivePoolSpend = exports.MsgClaimResponse = exports.MsgClaim = void 0;
const claimsmanager_1 = require("../../claimsmanager/v1/claimsmanager");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseMsgClaim() {
    return {
        chain_id: "",
        action: helpers_1.Long.ZERO,
        address: "",
        proofs: []
    };
}
exports.MsgClaim = {
    typeUrl: "/quicksilver.airdrop.v1.MsgClaim",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain_id !== "") {
            writer.uint32(10).string(message.chain_id);
        }
        if (!message.action.isZero()) {
            writer.uint32(16).int64(message.action);
        }
        if (message.address !== "") {
            writer.uint32(26).string(message.address);
        }
        for (const v of message.proofs) {
            claimsmanager_1.Proof.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClaim();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain_id = reader.string();
                    break;
                case 2:
                    message.action = reader.int64();
                    break;
                case 3:
                    message.address = reader.string();
                    break;
                case 4:
                    message.proofs.push(claimsmanager_1.Proof.decode(reader, reader.uint32()));
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
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : "",
            action: (0, helpers_1.isSet)(object.action) ? helpers_1.Long.fromValue(object.action) : helpers_1.Long.ZERO,
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            proofs: Array.isArray(object?.proofs) ? object.proofs.map((e) => claimsmanager_1.Proof.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.action !== undefined && (obj.action = (message.action || helpers_1.Long.ZERO).toString());
        message.address !== undefined && (obj.address = message.address);
        if (message.proofs) {
            obj.proofs = message.proofs.map(e => e ? claimsmanager_1.Proof.toJSON(e) : undefined);
        }
        else {
            obj.proofs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgClaim();
        message.chain_id = object.chain_id ?? "";
        message.action = object.action !== undefined && object.action !== null ? helpers_1.Long.fromValue(object.action) : helpers_1.Long.ZERO;
        message.address = object.address ?? "";
        message.proofs = object.proofs?.map(e => claimsmanager_1.Proof.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            chain_id: object.chain_id,
            action: helpers_1.Long.fromString(object.action),
            address: object.address,
            proofs: Array.isArray(object?.proofs) ? object.proofs.map((e) => claimsmanager_1.Proof.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chain_id;
        obj.action = message.action ? message.action.toString() : undefined;
        obj.address = message.address;
        if (message.proofs) {
            obj.proofs = message.proofs.map(e => e ? claimsmanager_1.Proof.toAmino(e) : undefined);
        }
        else {
            obj.proofs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgClaim.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgClaim.decode(message.value);
    },
    toProto(message) {
        return exports.MsgClaim.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.MsgClaim",
            value: exports.MsgClaim.encode(message).finish()
        };
    }
};
function createBaseMsgClaimResponse() {
    return {
        amount: helpers_1.Long.UZERO
    };
}
exports.MsgClaimResponse = {
    typeUrl: "/quicksilver.airdrop.v1.MsgClaimResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.amount.isZero()) {
            writer.uint32(8).uint64(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClaimResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = reader.uint64();
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
            amount: (0, helpers_1.isSet)(object.amount) ? helpers_1.Long.fromValue(object.amount) : helpers_1.Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = (message.amount || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgClaimResponse();
        message.amount = object.amount !== undefined && object.amount !== null ? helpers_1.Long.fromValue(object.amount) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            amount: helpers_1.Long.fromString(object.amount)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? message.amount.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgClaimResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgClaimResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgClaimResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.MsgClaimResponse",
            value: exports.MsgClaimResponse.encode(message).finish()
        };
    }
};
function createBaseMsgIncentivePoolSpend() {
    return {
        authority: "",
        to_address: "",
        amount: []
    };
}
exports.MsgIncentivePoolSpend = {
    typeUrl: "/quicksilver.airdrop.v1.MsgIncentivePoolSpend",
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.to_address !== "") {
            writer.uint32(18).string(message.to_address);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgIncentivePoolSpend();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.to_address = reader.string();
                    break;
                case 3:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            authority: (0, helpers_1.isSet)(object.authority) ? String(object.authority) : "",
            to_address: (0, helpers_1.isSet)(object.to_address) ? String(object.to_address) : "",
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.to_address !== undefined && (obj.to_address = message.to_address);
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgIncentivePoolSpend();
        message.authority = object.authority ?? "";
        message.to_address = object.to_address ?? "";
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            authority: object.authority,
            to_address: object.to_address,
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority;
        obj.to_address = message.to_address;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgIncentivePoolSpend.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgIncentivePoolSpend.decode(message.value);
    },
    toProto(message) {
        return exports.MsgIncentivePoolSpend.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.MsgIncentivePoolSpend",
            value: exports.MsgIncentivePoolSpend.encode(message).finish()
        };
    }
};
function createBaseMsgIncentivePoolSpendResponse() {
    return {};
}
exports.MsgIncentivePoolSpendResponse = {
    typeUrl: "/quicksilver.airdrop.v1.MsgIncentivePoolSpendResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgIncentivePoolSpendResponse();
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
        const message = createBaseMsgIncentivePoolSpendResponse();
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
        return exports.MsgIncentivePoolSpendResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgIncentivePoolSpendResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgIncentivePoolSpendResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.MsgIncentivePoolSpendResponse",
            value: exports.MsgIncentivePoolSpendResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=messages.js.map