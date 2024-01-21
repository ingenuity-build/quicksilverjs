import { Proof } from "../../claimsmanager/v1/claimsmanager";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseMsgClaim() {
    return {
        chainId: "",
        action: Long.ZERO,
        address: "",
        proofs: []
    };
}
export const MsgClaim = {
    typeUrl: "/quicksilver.airdrop.v1.MsgClaim",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (!message.action.isZero()) {
            writer.uint32(16).int64(message.action);
        }
        if (message.address !== "") {
            writer.uint32(26).string(message.address);
        }
        for (const v of message.proofs) {
            Proof.encode(v, writer.uint32(34).fork()).ldelim();
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
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.action = reader.int64();
                    break;
                case 3:
                    message.address = reader.string();
                    break;
                case 4:
                    message.proofs.push(Proof.decode(reader, reader.uint32()));
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
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            action: isSet(object.action) ? Long.fromValue(object.action) : Long.ZERO,
            address: isSet(object.address) ? String(object.address) : "",
            proofs: Array.isArray(object?.proofs) ? object.proofs.map((e) => Proof.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.action !== undefined && (obj.action = (message.action || Long.ZERO).toString());
        message.address !== undefined && (obj.address = message.address);
        if (message.proofs) {
            obj.proofs = message.proofs.map(e => e ? Proof.toJSON(e) : undefined);
        }
        else {
            obj.proofs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgClaim();
        message.chainId = object.chainId ?? "";
        message.action = object.action !== undefined && object.action !== null ? Long.fromValue(object.action) : Long.ZERO;
        message.address = object.address ?? "";
        message.proofs = object.proofs?.map(e => Proof.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            chainId: object.chain_id,
            action: Long.fromString(object.action),
            address: object.address,
            proofs: Array.isArray(object?.proofs) ? object.proofs.map((e) => Proof.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        obj.action = message.action ? message.action.toString() : undefined;
        obj.address = message.address;
        if (message.proofs) {
            obj.proofs = message.proofs.map(e => e ? Proof.toAmino(e) : undefined);
        }
        else {
            obj.proofs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgClaim.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgClaim.decode(message.value);
    },
    toProto(message) {
        return MsgClaim.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.MsgClaim",
            value: MsgClaim.encode(message).finish()
        };
    }
};
function createBaseMsgClaimResponse() {
    return {
        amount: Long.UZERO
    };
}
export const MsgClaimResponse = {
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
            amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = (message.amount || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgClaimResponse();
        message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            amount: Long.fromString(object.amount)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? message.amount.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgClaimResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgClaimResponse.decode(message.value);
    },
    toProto(message) {
        return MsgClaimResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.MsgClaimResponse",
            value: MsgClaimResponse.encode(message).finish()
        };
    }
};
function createBaseMsgIncentivePoolSpend() {
    return {
        authority: "",
        toAddress: "",
        amount: []
    };
}
export const MsgIncentivePoolSpend = {
    typeUrl: "/quicksilver.airdrop.v1.MsgIncentivePoolSpend",
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.toAddress !== "") {
            writer.uint32(18).string(message.toAddress);
        }
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
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
                    message.toAddress = reader.string();
                    break;
                case 3:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
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
            authority: isSet(object.authority) ? String(object.authority) : "",
            toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.toAddress !== undefined && (obj.toAddress = message.toAddress);
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgIncentivePoolSpend();
        message.authority = object.authority ?? "";
        message.toAddress = object.toAddress ?? "";
        message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            authority: object.authority,
            toAddress: object.to_address,
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority;
        obj.to_address = message.toAddress;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgIncentivePoolSpend.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgIncentivePoolSpend.decode(message.value);
    },
    toProto(message) {
        return MsgIncentivePoolSpend.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.MsgIncentivePoolSpend",
            value: MsgIncentivePoolSpend.encode(message).finish()
        };
    }
};
function createBaseMsgIncentivePoolSpendResponse() {
    return {};
}
export const MsgIncentivePoolSpendResponse = {
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
        return MsgIncentivePoolSpendResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgIncentivePoolSpendResponse.decode(message.value);
    },
    toProto(message) {
        return MsgIncentivePoolSpendResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.MsgIncentivePoolSpendResponse",
            value: MsgIncentivePoolSpendResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=messages.js.map