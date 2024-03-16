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
exports.MsgSubmitClaimResponse = exports.MsgSubmitClaim = void 0;
const claimsmanager_1 = require("../../claimsmanager/v1/claimsmanager");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../../helpers");
function createBaseMsgSubmitClaim() {
    return {
        user_address: "",
        zone: "",
        src_zone: "",
        claim_type: 0,
        proofs: []
    };
}
exports.MsgSubmitClaim = {
    typeUrl: "/quicksilver.participationrewards.v1.MsgSubmitClaim",
    encode(message, writer = _m0.Writer.create()) {
        if (message.user_address !== "") {
            writer.uint32(10).string(message.user_address);
        }
        if (message.zone !== "") {
            writer.uint32(18).string(message.zone);
        }
        if (message.src_zone !== "") {
            writer.uint32(26).string(message.src_zone);
        }
        if (message.claim_type !== 0) {
            writer.uint32(32).int32(message.claim_type);
        }
        for (const v of message.proofs) {
            claimsmanager_1.Proof.encode(v, writer.uint32(42).fork()).ldelim();
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
                    message.user_address = reader.string();
                    break;
                case 2:
                    message.zone = reader.string();
                    break;
                case 3:
                    message.src_zone = reader.string();
                    break;
                case 4:
                    message.claim_type = reader.int32();
                    break;
                case 5:
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
            user_address: (0, helpers_1.isSet)(object.user_address) ? String(object.user_address) : "",
            zone: (0, helpers_1.isSet)(object.zone) ? String(object.zone) : "",
            src_zone: (0, helpers_1.isSet)(object.src_zone) ? String(object.src_zone) : "",
            claim_type: (0, helpers_1.isSet)(object.claim_type) ? (0, claimsmanager_1.claimTypeFromJSON)(object.claim_type) : -1,
            proofs: Array.isArray(object?.proofs) ? object.proofs.map((e) => claimsmanager_1.Proof.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.user_address !== undefined && (obj.user_address = message.user_address);
        message.zone !== undefined && (obj.zone = message.zone);
        message.src_zone !== undefined && (obj.src_zone = message.src_zone);
        message.claim_type !== undefined && (obj.claim_type = (0, claimsmanager_1.claimTypeToJSON)(message.claim_type));
        if (message.proofs) {
            obj.proofs = message.proofs.map(e => e ? claimsmanager_1.Proof.toJSON(e) : undefined);
        }
        else {
            obj.proofs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitClaim();
        message.user_address = object.user_address ?? "";
        message.zone = object.zone ?? "";
        message.src_zone = object.src_zone ?? "";
        message.claim_type = object.claim_type ?? 0;
        message.proofs = object.proofs?.map(e => claimsmanager_1.Proof.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            user_address: object.user_address,
            zone: object.zone,
            src_zone: object.src_zone,
            claim_type: (0, helpers_1.isSet)(object.claim_type) ? (0, claimsmanager_1.claimTypeFromJSON)(object.claim_type) : -1,
            proofs: Array.isArray(object?.proofs) ? object.proofs.map((e) => claimsmanager_1.Proof.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.user_address = message.user_address;
        obj.zone = message.zone;
        obj.src_zone = message.src_zone;
        obj.claim_type = message.claim_type;
        if (message.proofs) {
            obj.proofs = message.proofs.map(e => e ? claimsmanager_1.Proof.toAmino(e) : undefined);
        }
        else {
            obj.proofs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSubmitClaim.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSubmitClaim.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSubmitClaim.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.participationrewards.v1.MsgSubmitClaim",
            value: exports.MsgSubmitClaim.encode(message).finish()
        };
    }
};
function createBaseMsgSubmitClaimResponse() {
    return {};
}
exports.MsgSubmitClaimResponse = {
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
        return exports.MsgSubmitClaimResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSubmitClaimResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSubmitClaimResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.participationrewards.v1.MsgSubmitClaimResponse",
            value: exports.MsgSubmitClaimResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=messages.js.map