import { Proof, claimTypeFromJSON, claimTypeToJSON } from "../../claimsmanager/v1/claimsmanager";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseMsgSubmitClaim() {
    return {
        userAddress: "",
        zone: "",
        srcZone: "",
        claimType: 0,
        proofs: []
    };
}
export const MsgSubmitClaim = {
    typeUrl: "/quicksilver.participationrewards.v1.MsgSubmitClaim",
    aminoType: "quicksilver/MsgSubmitClaim",
    encode(message, writer = _m0.Writer.create()) {
        if (message.userAddress !== "") {
            writer.uint32(10).string(message.userAddress);
        }
        if (message.zone !== "") {
            writer.uint32(18).string(message.zone);
        }
        if (message.srcZone !== "") {
            writer.uint32(26).string(message.srcZone);
        }
        if (message.claimType !== 0) {
            writer.uint32(32).int32(message.claimType);
        }
        for (const v of message.proofs) {
            Proof.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitClaim();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userAddress = reader.string();
                    break;
                case 2:
                    message.zone = reader.string();
                    break;
                case 3:
                    message.srcZone = reader.string();
                    break;
                case 4:
                    message.claimType = reader.int32();
                    break;
                case 5:
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
            userAddress: isSet(object.user_address) ? String(object.user_address) : "",
            zone: isSet(object.zone) ? String(object.zone) : "",
            srcZone: isSet(object.src_zone) ? String(object.src_zone) : "",
            claimType: isSet(object.claim_type) ? claimTypeFromJSON(object.claim_type) : -1,
            proofs: Array.isArray(object?.proofs) ? object.proofs.map((e) => Proof.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.userAddress !== undefined && (obj.user_address = message.userAddress);
        message.zone !== undefined && (obj.zone = message.zone);
        message.srcZone !== undefined && (obj.src_zone = message.srcZone);
        message.claimType !== undefined && (obj.claim_type = claimTypeToJSON(message.claimType));
        if (message.proofs) {
            obj.proofs = message.proofs.map(e => e ? Proof.toJSON(e) : undefined);
        }
        else {
            obj.proofs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitClaim();
        message.userAddress = object.userAddress ?? "";
        message.zone = object.zone ?? "";
        message.srcZone = object.srcZone ?? "";
        message.claimType = object.claimType ?? 0;
        message.proofs = object.proofs?.map(e => Proof.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            userAddress: object.user_address,
            zone: object.zone,
            srcZone: object.src_zone,
            claimType: isSet(object.claim_type) ? claimTypeFromJSON(object.claim_type) : -1,
            proofs: Array.isArray(object?.proofs) ? object.proofs.map((e) => Proof.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.user_address = message.userAddress;
        obj.zone = message.zone;
        obj.src_zone = message.srcZone;
        obj.claim_type = message.claimType;
        if (message.proofs) {
            obj.proofs = message.proofs.map(e => e ? Proof.toAmino(e) : undefined);
        }
        else {
            obj.proofs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSubmitClaim.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "quicksilver/MsgSubmitClaim",
            value: MsgSubmitClaim.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSubmitClaim.decode(message.value);
    },
    toProto(message) {
        return MsgSubmitClaim.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.participationrewards.v1.MsgSubmitClaim",
            value: MsgSubmitClaim.encode(message).finish()
        };
    }
};
function createBaseMsgSubmitClaimResponse() {
    return {};
}
export const MsgSubmitClaimResponse = {
    typeUrl: "/quicksilver.participationrewards.v1.MsgSubmitClaimResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitClaimResponse();
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
        const message = createBaseMsgSubmitClaimResponse();
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
        return MsgSubmitClaimResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSubmitClaimResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSubmitClaimResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.participationrewards.v1.MsgSubmitClaimResponse",
            value: MsgSubmitClaimResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=messages.js.map