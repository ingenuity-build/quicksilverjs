import { ClaimType, Proof, ProofAmino, ProofSDKType, claimTypeFromJSON, claimTypeToJSON } from "../../claimsmanager/v1/claimsmanager";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
/**
 * MsgSubmitClaim represents a message type for submitting a participation
 * claim regarding the given zone (chain).
 */
export interface MsgSubmitClaim {
  user_address: string;
  zone: string;
  src_zone: string;
  claim_type: ClaimType;
  proofs: Proof[];
}
export interface MsgSubmitClaimProtoMsg {
  type_url: "/quicksilver.participationrewards.v1.MsgSubmitClaim";
  value: Uint8Array;
}
/**
 * MsgSubmitClaim represents a message type for submitting a participation
 * claim regarding the given zone (chain).
 */
export interface MsgSubmitClaimAmino {
  user_address: string;
  zone: string;
  src_zone: string;
  claim_type: ClaimType;
  proofs: ProofAmino[];
}
export interface MsgSubmitClaimAminoMsg {
  type: "/quicksilver.participationrewards.v1.MsgSubmitClaim";
  value: MsgSubmitClaimAmino;
}
/**
 * MsgSubmitClaim represents a message type for submitting a participation
 * claim regarding the given zone (chain).
 */
export interface MsgSubmitClaimSDKType {
  user_address: string;
  zone: string;
  src_zone: string;
  claim_type: ClaimType;
  proofs: ProofSDKType[];
}
/** MsgSubmitClaimResponse defines the MsgSubmitClaim response type. */
export interface MsgSubmitClaimResponse {}
export interface MsgSubmitClaimResponseProtoMsg {
  type_url: "/quicksilver.participationrewards.v1.MsgSubmitClaimResponse";
  value: Uint8Array;
}
/** MsgSubmitClaimResponse defines the MsgSubmitClaim response type. */
export interface MsgSubmitClaimResponseAmino {}
export interface MsgSubmitClaimResponseAminoMsg {
  type: "/quicksilver.participationrewards.v1.MsgSubmitClaimResponse";
  value: MsgSubmitClaimResponseAmino;
}
/** MsgSubmitClaimResponse defines the MsgSubmitClaim response type. */
export interface MsgSubmitClaimResponseSDKType {}
function createBaseMsgSubmitClaim(): MsgSubmitClaim {
  return {
    user_address: "",
    zone: "",
    src_zone: "",
    claim_type: 0,
    proofs: []
  };
}
export const MsgSubmitClaim = {
  typeUrl: "/quicksilver.participationrewards.v1.MsgSubmitClaim",
  encode(message: MsgSubmitClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Proof.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitClaim {
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
          message.claim_type = (reader.int32() as any);
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
  fromJSON(object: any): MsgSubmitClaim {
    return {
      user_address: isSet(object.user_address) ? String(object.user_address) : "",
      zone: isSet(object.zone) ? String(object.zone) : "",
      src_zone: isSet(object.src_zone) ? String(object.src_zone) : "",
      claim_type: isSet(object.claim_type) ? claimTypeFromJSON(object.claim_type) : -1,
      proofs: Array.isArray(object?.proofs) ? object.proofs.map((e: any) => Proof.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgSubmitClaim): unknown {
    const obj: any = {};
    message.user_address !== undefined && (obj.user_address = message.user_address);
    message.zone !== undefined && (obj.zone = message.zone);
    message.src_zone !== undefined && (obj.src_zone = message.src_zone);
    message.claim_type !== undefined && (obj.claim_type = claimTypeToJSON(message.claim_type));
    if (message.proofs) {
      obj.proofs = message.proofs.map(e => e ? Proof.toJSON(e) : undefined);
    } else {
      obj.proofs = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSubmitClaim>): MsgSubmitClaim {
    const message = createBaseMsgSubmitClaim();
    message.user_address = object.user_address ?? "";
    message.zone = object.zone ?? "";
    message.src_zone = object.src_zone ?? "";
    message.claim_type = object.claim_type ?? 0;
    message.proofs = object.proofs?.map(e => Proof.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgSubmitClaimAmino): MsgSubmitClaim {
    return {
      user_address: object.user_address,
      zone: object.zone,
      src_zone: object.src_zone,
      claim_type: isSet(object.claim_type) ? claimTypeFromJSON(object.claim_type) : -1,
      proofs: Array.isArray(object?.proofs) ? object.proofs.map((e: any) => Proof.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgSubmitClaim): MsgSubmitClaimAmino {
    const obj: any = {};
    obj.user_address = message.user_address;
    obj.zone = message.zone;
    obj.src_zone = message.src_zone;
    obj.claim_type = message.claim_type;
    if (message.proofs) {
      obj.proofs = message.proofs.map(e => e ? Proof.toAmino(e) : undefined);
    } else {
      obj.proofs = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgSubmitClaimAminoMsg): MsgSubmitClaim {
    return MsgSubmitClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitClaimProtoMsg): MsgSubmitClaim {
    return MsgSubmitClaim.decode(message.value);
  },
  toProto(message: MsgSubmitClaim): Uint8Array {
    return MsgSubmitClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitClaim): MsgSubmitClaimProtoMsg {
    return {
      typeUrl: "/quicksilver.participationrewards.v1.MsgSubmitClaim",
      value: MsgSubmitClaim.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitClaimResponse(): MsgSubmitClaimResponse {
  return {};
}
export const MsgSubmitClaimResponse = {
  typeUrl: "/quicksilver.participationrewards.v1.MsgSubmitClaimResponse",
  encode(_: MsgSubmitClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitClaimResponse {
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
  fromJSON(_: any): MsgSubmitClaimResponse {
    return {};
  },
  toJSON(_: MsgSubmitClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgSubmitClaimResponse>): MsgSubmitClaimResponse {
    const message = createBaseMsgSubmitClaimResponse();
    return message;
  },
  fromAmino(_: MsgSubmitClaimResponseAmino): MsgSubmitClaimResponse {
    return {};
  },
  toAmino(_: MsgSubmitClaimResponse): MsgSubmitClaimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitClaimResponseAminoMsg): MsgSubmitClaimResponse {
    return MsgSubmitClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitClaimResponseProtoMsg): MsgSubmitClaimResponse {
    return MsgSubmitClaimResponse.decode(message.value);
  },
  toProto(message: MsgSubmitClaimResponse): Uint8Array {
    return MsgSubmitClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitClaimResponse): MsgSubmitClaimResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.participationrewards.v1.MsgSubmitClaimResponse",
      value: MsgSubmitClaimResponse.encode(message).finish()
    };
  }
};