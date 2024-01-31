import { ProofOps, ProofOpsAmino, ProofOpsSDKType } from "../../../tendermint/crypto/proof";
import { Long, DeepPartial, isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum ClaimType {
  /** ClaimTypeUndefined - Undefined action (per protobuf spec) */
  ClaimTypeUndefined = 0,
  ClaimTypeLiquidToken = 1,
  ClaimTypeOsmosisPool = 2,
  ClaimTypeCrescentPool = 3,
  ClaimTypeSifchainPool = 4,
  ClaimTypeUmeeToken = 5,
  UNRECOGNIZED = -1,
}
export const ClaimTypeSDKType = ClaimType;
export const ClaimTypeAmino = ClaimType;
export function claimTypeFromJSON(object: any): ClaimType {
  switch (object) {
    case 0:
    case "ClaimTypeUndefined":
      return ClaimType.ClaimTypeUndefined;
    case 1:
    case "ClaimTypeLiquidToken":
      return ClaimType.ClaimTypeLiquidToken;
    case 2:
    case "ClaimTypeOsmosisPool":
      return ClaimType.ClaimTypeOsmosisPool;
    case 3:
    case "ClaimTypeCrescentPool":
      return ClaimType.ClaimTypeCrescentPool;
    case 4:
    case "ClaimTypeSifchainPool":
      return ClaimType.ClaimTypeSifchainPool;
    case 5:
    case "ClaimTypeUmeeToken":
      return ClaimType.ClaimTypeUmeeToken;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClaimType.UNRECOGNIZED;
  }
}
export function claimTypeToJSON(object: ClaimType): string {
  switch (object) {
    case ClaimType.ClaimTypeUndefined:
      return "ClaimTypeUndefined";
    case ClaimType.ClaimTypeLiquidToken:
      return "ClaimTypeLiquidToken";
    case ClaimType.ClaimTypeOsmosisPool:
      return "ClaimTypeOsmosisPool";
    case ClaimType.ClaimTypeCrescentPool:
      return "ClaimTypeCrescentPool";
    case ClaimType.ClaimTypeSifchainPool:
      return "ClaimTypeSifchainPool";
    case ClaimType.ClaimTypeUmeeToken:
      return "ClaimTypeUmeeToken";
    case ClaimType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Params holds parameters for the claimsmanager module. */
export interface Params {}
export interface ParamsProtoMsg {
  type_url: "/quicksilver.claimsmanager.v1.Params";
  value: Uint8Array;
}
/** Params holds parameters for the claimsmanager module. */
export interface ParamsAmino {}
export interface ParamsAminoMsg {
  type: "/quicksilver.claimsmanager.v1.Params";
  value: ParamsAmino;
}
/** Params holds parameters for the claimsmanager module. */
export interface ParamsSDKType {}
/** Claim define the users claim for holding assets within a given zone. */
export interface Claim {
  user_address: string;
  chain_id: string;
  module: ClaimType;
  source_chain_id: string;
  amount: Long;
}
export interface ClaimProtoMsg {
  type_url: "/quicksilver.claimsmanager.v1.Claim";
  value: Uint8Array;
}
/** Claim define the users claim for holding assets within a given zone. */
export interface ClaimAmino {
  user_address: string;
  chain_id: string;
  module: ClaimType;
  source_chain_id: string;
  amount: string;
}
export interface ClaimAminoMsg {
  type: "/quicksilver.claimsmanager.v1.Claim";
  value: ClaimAmino;
}
/** Claim define the users claim for holding assets within a given zone. */
export interface ClaimSDKType {
  user_address: string;
  chain_id: string;
  module: ClaimType;
  source_chain_id: string;
  amount: Long;
}
/** Proof defines a type used to cryptographically prove a claim. */
export interface Proof {
  key: Uint8Array;
  data: Uint8Array;
  proof_ops: ProofOps;
  height: Long;
  proof_type: string;
}
export interface ProofProtoMsg {
  type_url: "/quicksilver.claimsmanager.v1.Proof";
  value: Uint8Array;
}
/** Proof defines a type used to cryptographically prove a claim. */
export interface ProofAmino {
  key: Uint8Array;
  data: Uint8Array;
  proof_ops?: ProofOpsAmino;
  height: string;
  proof_type: string;
}
export interface ProofAminoMsg {
  type: "/quicksilver.claimsmanager.v1.Proof";
  value: ProofAmino;
}
/** Proof defines a type used to cryptographically prove a claim. */
export interface ProofSDKType {
  key: Uint8Array;
  data: Uint8Array;
  proof_ops: ProofOpsSDKType;
  height: Long;
  proof_type: string;
}
function createBaseParams(): Params {
  return {};
}
export const Params = {
  typeUrl: "/quicksilver.claimsmanager.v1.Params",
  encode(_: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
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
  fromJSON(_: any): Params {
    return {};
  },
  toJSON(_: Params): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<Params>): Params {
    const message = createBaseParams();
    return message;
  },
  fromAmino(_: ParamsAmino): Params {
    return {};
  },
  toAmino(_: Params): ParamsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/quicksilver.claimsmanager.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseClaim(): Claim {
  return {
    user_address: "",
    chain_id: "",
    module: 0,
    source_chain_id: "",
    amount: Long.UZERO
  };
}
export const Claim = {
  typeUrl: "/quicksilver.claimsmanager.v1.Claim",
  encode(message: Claim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user_address !== "") {
      writer.uint32(10).string(message.user_address);
    }
    if (message.chain_id !== "") {
      writer.uint32(18).string(message.chain_id);
    }
    if (message.module !== 0) {
      writer.uint32(24).int32(message.module);
    }
    if (message.source_chain_id !== "") {
      writer.uint32(34).string(message.source_chain_id);
    }
    if (!message.amount.isZero()) {
      writer.uint32(40).uint64(message.amount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Claim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user_address = reader.string();
          break;
        case 2:
          message.chain_id = reader.string();
          break;
        case 3:
          message.module = (reader.int32() as any);
          break;
        case 4:
          message.source_chain_id = reader.string();
          break;
        case 5:
          message.amount = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Claim {
    return {
      user_address: isSet(object.user_address) ? String(object.user_address) : "",
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      module: isSet(object.module) ? claimTypeFromJSON(object.module) : -1,
      source_chain_id: isSet(object.source_chain_id) ? String(object.source_chain_id) : "",
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO
    };
  },
  toJSON(message: Claim): unknown {
    const obj: any = {};
    message.user_address !== undefined && (obj.user_address = message.user_address);
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    message.module !== undefined && (obj.module = claimTypeToJSON(message.module));
    message.source_chain_id !== undefined && (obj.source_chain_id = message.source_chain_id);
    message.amount !== undefined && (obj.amount = (message.amount || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Claim>): Claim {
    const message = createBaseClaim();
    message.user_address = object.user_address ?? "";
    message.chain_id = object.chain_id ?? "";
    message.module = object.module ?? 0;
    message.source_chain_id = object.source_chain_id ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  },
  fromAmino(object: ClaimAmino): Claim {
    return {
      user_address: object.user_address,
      chain_id: object.chain_id,
      module: isSet(object.module) ? claimTypeFromJSON(object.module) : -1,
      source_chain_id: object.source_chain_id,
      amount: Long.fromString(object.amount)
    };
  },
  toAmino(message: Claim): ClaimAmino {
    const obj: any = {};
    obj.user_address = message.user_address;
    obj.chain_id = message.chain_id;
    obj.module = message.module;
    obj.source_chain_id = message.source_chain_id;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ClaimAminoMsg): Claim {
    return Claim.fromAmino(object.value);
  },
  fromProtoMsg(message: ClaimProtoMsg): Claim {
    return Claim.decode(message.value);
  },
  toProto(message: Claim): Uint8Array {
    return Claim.encode(message).finish();
  },
  toProtoMsg(message: Claim): ClaimProtoMsg {
    return {
      typeUrl: "/quicksilver.claimsmanager.v1.Claim",
      value: Claim.encode(message).finish()
    };
  }
};
function createBaseProof(): Proof {
  return {
    key: new Uint8Array(),
    data: new Uint8Array(),
    proof_ops: ProofOps.fromPartial({}),
    height: Long.ZERO,
    proof_type: ""
  };
}
export const Proof = {
  typeUrl: "/quicksilver.claimsmanager.v1.Proof",
  encode(message: Proof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.proof_ops !== undefined) {
      ProofOps.encode(message.proof_ops, writer.uint32(26).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(32).int64(message.height);
    }
    if (message.proof_type !== "") {
      writer.uint32(42).string(message.proof_type);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Proof {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.proof_ops = ProofOps.decode(reader, reader.uint32());
          break;
        case 4:
          message.height = (reader.int64() as Long);
          break;
        case 5:
          message.proof_type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Proof {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      proof_ops: isSet(object.proof_ops) ? ProofOps.fromJSON(object.proof_ops) : undefined,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      proof_type: isSet(object.proof_type) ? String(object.proof_type) : ""
    };
  },
  toJSON(message: Proof): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.proof_ops !== undefined && (obj.proof_ops = message.proof_ops ? ProofOps.toJSON(message.proof_ops) : undefined);
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.proof_type !== undefined && (obj.proof_type = message.proof_type);
    return obj;
  },
  fromPartial(object: DeepPartial<Proof>): Proof {
    const message = createBaseProof();
    message.key = object.key ?? new Uint8Array();
    message.data = object.data ?? new Uint8Array();
    message.proof_ops = object.proof_ops !== undefined && object.proof_ops !== null ? ProofOps.fromPartial(object.proof_ops) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.proof_type = object.proof_type ?? "";
    return message;
  },
  fromAmino(object: ProofAmino): Proof {
    return {
      key: object.key,
      data: object.data,
      proof_ops: object?.proof_ops ? ProofOps.fromAmino(object.proof_ops) : undefined,
      height: Long.fromString(object.height),
      proof_type: object.proof_type
    };
  },
  toAmino(message: Proof): ProofAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.data = message.data;
    obj.proof_ops = message.proof_ops ? ProofOps.toAmino(message.proof_ops) : undefined;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.proof_type = message.proof_type;
    return obj;
  },
  fromAminoMsg(object: ProofAminoMsg): Proof {
    return Proof.fromAmino(object.value);
  },
  fromProtoMsg(message: ProofProtoMsg): Proof {
    return Proof.decode(message.value);
  },
  toProto(message: Proof): Uint8Array {
    return Proof.encode(message).finish();
  },
  toProtoMsg(message: Proof): ProofProtoMsg {
    return {
      typeUrl: "/quicksilver.claimsmanager.v1.Proof",
      value: Proof.encode(message).finish()
    };
  }
};