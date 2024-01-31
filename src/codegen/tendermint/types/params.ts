import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { Long, isSet, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */
export interface ConsensusParams {
  block: BlockParams;
  evidence: EvidenceParams;
  validator: ValidatorParams;
  version: VersionParams;
}
export interface ConsensusParamsProtoMsg {
  type_url: "/tendermint.types.ConsensusParams";
  value: Uint8Array;
}
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */
export interface ConsensusParamsAmino {
  block?: BlockParamsAmino;
  evidence?: EvidenceParamsAmino;
  validator?: ValidatorParamsAmino;
  version?: VersionParamsAmino;
}
export interface ConsensusParamsAminoMsg {
  type: "/tendermint.types.ConsensusParams";
  value: ConsensusParamsAmino;
}
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */
export interface ConsensusParamsSDKType {
  block: BlockParamsSDKType;
  evidence: EvidenceParamsSDKType;
  validator: ValidatorParamsSDKType;
  version: VersionParamsSDKType;
}
/** BlockParams contains limits on the block size. */
export interface BlockParams {
  /**
   * Max block size, in bytes.
   * Note: must be greater than 0
   */
  max_bytes: Long;
  /**
   * Max gas per block.
   * Note: must be greater or equal to -1
   */
  max_gas: Long;
  /**
   * Minimum time increment between consecutive blocks (in milliseconds) If the
   * block header timestamp is ahead of the system clock, decrease this value.
   * 
   * Not exposed to the application.
   */
  time_iota_ms: Long;
}
export interface BlockParamsProtoMsg {
  type_url: "/tendermint.types.BlockParams";
  value: Uint8Array;
}
/** BlockParams contains limits on the block size. */
export interface BlockParamsAmino {
  /**
   * Max block size, in bytes.
   * Note: must be greater than 0
   */
  max_bytes: string;
  /**
   * Max gas per block.
   * Note: must be greater or equal to -1
   */
  max_gas: string;
  /**
   * Minimum time increment between consecutive blocks (in milliseconds) If the
   * block header timestamp is ahead of the system clock, decrease this value.
   * 
   * Not exposed to the application.
   */
  time_iota_ms: string;
}
export interface BlockParamsAminoMsg {
  type: "/tendermint.types.BlockParams";
  value: BlockParamsAmino;
}
/** BlockParams contains limits on the block size. */
export interface BlockParamsSDKType {
  max_bytes: Long;
  max_gas: Long;
  time_iota_ms: Long;
}
/** EvidenceParams determine how we handle evidence of malfeasance. */
export interface EvidenceParams {
  /**
   * Max age of evidence, in blocks.
   * 
   * The basic formula for calculating this is: MaxAgeDuration / {average block
   * time}.
   */
  max_age_num_blocks: Long;
  /**
   * Max age of evidence, in time.
   * 
   * It should correspond with an app's "unbonding period" or other similar
   * mechanism for handling [Nothing-At-Stake
   * attacks](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#what-is-the-nothing-at-stake-problem-and-how-can-it-be-fixed).
   */
  max_age_duration: Duration;
  /**
   * This sets the maximum size of total evidence in bytes that can be committed in a single block.
   * and should fall comfortably under the max block bytes.
   * Default is 1048576 or 1MB
   */
  max_bytes: Long;
}
export interface EvidenceParamsProtoMsg {
  type_url: "/tendermint.types.EvidenceParams";
  value: Uint8Array;
}
/** EvidenceParams determine how we handle evidence of malfeasance. */
export interface EvidenceParamsAmino {
  /**
   * Max age of evidence, in blocks.
   * 
   * The basic formula for calculating this is: MaxAgeDuration / {average block
   * time}.
   */
  max_age_num_blocks: string;
  /**
   * Max age of evidence, in time.
   * 
   * It should correspond with an app's "unbonding period" or other similar
   * mechanism for handling [Nothing-At-Stake
   * attacks](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#what-is-the-nothing-at-stake-problem-and-how-can-it-be-fixed).
   */
  max_age_duration?: DurationAmino;
  /**
   * This sets the maximum size of total evidence in bytes that can be committed in a single block.
   * and should fall comfortably under the max block bytes.
   * Default is 1048576 or 1MB
   */
  max_bytes: string;
}
export interface EvidenceParamsAminoMsg {
  type: "/tendermint.types.EvidenceParams";
  value: EvidenceParamsAmino;
}
/** EvidenceParams determine how we handle evidence of malfeasance. */
export interface EvidenceParamsSDKType {
  max_age_num_blocks: Long;
  max_age_duration: DurationSDKType;
  max_bytes: Long;
}
/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */
export interface ValidatorParams {
  pub_key_types: string[];
}
export interface ValidatorParamsProtoMsg {
  type_url: "/tendermint.types.ValidatorParams";
  value: Uint8Array;
}
/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */
export interface ValidatorParamsAmino {
  pub_key_types: string[];
}
export interface ValidatorParamsAminoMsg {
  type: "/tendermint.types.ValidatorParams";
  value: ValidatorParamsAmino;
}
/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */
export interface ValidatorParamsSDKType {
  pub_key_types: string[];
}
/** VersionParams contains the ABCI application version. */
export interface VersionParams {
  app_version: Long;
}
export interface VersionParamsProtoMsg {
  type_url: "/tendermint.types.VersionParams";
  value: Uint8Array;
}
/** VersionParams contains the ABCI application version. */
export interface VersionParamsAmino {
  app_version: string;
}
export interface VersionParamsAminoMsg {
  type: "/tendermint.types.VersionParams";
  value: VersionParamsAmino;
}
/** VersionParams contains the ABCI application version. */
export interface VersionParamsSDKType {
  app_version: Long;
}
/**
 * HashedParams is a subset of ConsensusParams.
 * 
 * It is hashed into the Header.ConsensusHash.
 */
export interface HashedParams {
  block_max_bytes: Long;
  block_max_gas: Long;
}
export interface HashedParamsProtoMsg {
  type_url: "/tendermint.types.HashedParams";
  value: Uint8Array;
}
/**
 * HashedParams is a subset of ConsensusParams.
 * 
 * It is hashed into the Header.ConsensusHash.
 */
export interface HashedParamsAmino {
  block_max_bytes: string;
  block_max_gas: string;
}
export interface HashedParamsAminoMsg {
  type: "/tendermint.types.HashedParams";
  value: HashedParamsAmino;
}
/**
 * HashedParams is a subset of ConsensusParams.
 * 
 * It is hashed into the Header.ConsensusHash.
 */
export interface HashedParamsSDKType {
  block_max_bytes: Long;
  block_max_gas: Long;
}
function createBaseConsensusParams(): ConsensusParams {
  return {
    block: BlockParams.fromPartial({}),
    evidence: EvidenceParams.fromPartial({}),
    validator: ValidatorParams.fromPartial({}),
    version: VersionParams.fromPartial({})
  };
}
export const ConsensusParams = {
  typeUrl: "/tendermint.types.ConsensusParams",
  encode(message: ConsensusParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.block !== undefined) {
      BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    if (message.evidence !== undefined) {
      EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
    }
    if (message.validator !== undefined) {
      ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
    }
    if (message.version !== undefined) {
      VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = BlockParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.evidence = EvidenceParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.validator = ValidatorParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.version = VersionParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsensusParams {
    return {
      block: isSet(object.block) ? BlockParams.fromJSON(object.block) : undefined,
      evidence: isSet(object.evidence) ? EvidenceParams.fromJSON(object.evidence) : undefined,
      validator: isSet(object.validator) ? ValidatorParams.fromJSON(object.validator) : undefined,
      version: isSet(object.version) ? VersionParams.fromJSON(object.version) : undefined
    };
  },
  toJSON(message: ConsensusParams): unknown {
    const obj: any = {};
    message.block !== undefined && (obj.block = message.block ? BlockParams.toJSON(message.block) : undefined);
    message.evidence !== undefined && (obj.evidence = message.evidence ? EvidenceParams.toJSON(message.evidence) : undefined);
    message.validator !== undefined && (obj.validator = message.validator ? ValidatorParams.toJSON(message.validator) : undefined);
    message.version !== undefined && (obj.version = message.version ? VersionParams.toJSON(message.version) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ConsensusParams>): ConsensusParams {
    const message = createBaseConsensusParams();
    message.block = object.block !== undefined && object.block !== null ? BlockParams.fromPartial(object.block) : undefined;
    message.evidence = object.evidence !== undefined && object.evidence !== null ? EvidenceParams.fromPartial(object.evidence) : undefined;
    message.validator = object.validator !== undefined && object.validator !== null ? ValidatorParams.fromPartial(object.validator) : undefined;
    message.version = object.version !== undefined && object.version !== null ? VersionParams.fromPartial(object.version) : undefined;
    return message;
  },
  fromAmino(object: ConsensusParamsAmino): ConsensusParams {
    return {
      block: object?.block ? BlockParams.fromAmino(object.block) : undefined,
      evidence: object?.evidence ? EvidenceParams.fromAmino(object.evidence) : undefined,
      validator: object?.validator ? ValidatorParams.fromAmino(object.validator) : undefined,
      version: object?.version ? VersionParams.fromAmino(object.version) : undefined
    };
  },
  toAmino(message: ConsensusParams): ConsensusParamsAmino {
    const obj: any = {};
    obj.block = message.block ? BlockParams.toAmino(message.block) : undefined;
    obj.evidence = message.evidence ? EvidenceParams.toAmino(message.evidence) : undefined;
    obj.validator = message.validator ? ValidatorParams.toAmino(message.validator) : undefined;
    obj.version = message.version ? VersionParams.toAmino(message.version) : undefined;
    return obj;
  },
  fromAminoMsg(object: ConsensusParamsAminoMsg): ConsensusParams {
    return ConsensusParams.fromAmino(object.value);
  },
  fromProtoMsg(message: ConsensusParamsProtoMsg): ConsensusParams {
    return ConsensusParams.decode(message.value);
  },
  toProto(message: ConsensusParams): Uint8Array {
    return ConsensusParams.encode(message).finish();
  },
  toProtoMsg(message: ConsensusParams): ConsensusParamsProtoMsg {
    return {
      typeUrl: "/tendermint.types.ConsensusParams",
      value: ConsensusParams.encode(message).finish()
    };
  }
};
function createBaseBlockParams(): BlockParams {
  return {
    max_bytes: Long.ZERO,
    max_gas: Long.ZERO,
    time_iota_ms: Long.ZERO
  };
}
export const BlockParams = {
  typeUrl: "/tendermint.types.BlockParams",
  encode(message: BlockParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.max_bytes.isZero()) {
      writer.uint32(8).int64(message.max_bytes);
    }
    if (!message.max_gas.isZero()) {
      writer.uint32(16).int64(message.max_gas);
    }
    if (!message.time_iota_ms.isZero()) {
      writer.uint32(24).int64(message.time_iota_ms);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BlockParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.max_bytes = (reader.int64() as Long);
          break;
        case 2:
          message.max_gas = (reader.int64() as Long);
          break;
        case 3:
          message.time_iota_ms = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockParams {
    return {
      max_bytes: isSet(object.max_bytes) ? Long.fromValue(object.max_bytes) : Long.ZERO,
      max_gas: isSet(object.max_gas) ? Long.fromValue(object.max_gas) : Long.ZERO,
      time_iota_ms: isSet(object.time_iota_ms) ? Long.fromValue(object.time_iota_ms) : Long.ZERO
    };
  },
  toJSON(message: BlockParams): unknown {
    const obj: any = {};
    message.max_bytes !== undefined && (obj.max_bytes = (message.max_bytes || Long.ZERO).toString());
    message.max_gas !== undefined && (obj.max_gas = (message.max_gas || Long.ZERO).toString());
    message.time_iota_ms !== undefined && (obj.time_iota_ms = (message.time_iota_ms || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<BlockParams>): BlockParams {
    const message = createBaseBlockParams();
    message.max_bytes = object.max_bytes !== undefined && object.max_bytes !== null ? Long.fromValue(object.max_bytes) : Long.ZERO;
    message.max_gas = object.max_gas !== undefined && object.max_gas !== null ? Long.fromValue(object.max_gas) : Long.ZERO;
    message.time_iota_ms = object.time_iota_ms !== undefined && object.time_iota_ms !== null ? Long.fromValue(object.time_iota_ms) : Long.ZERO;
    return message;
  },
  fromAmino(object: BlockParamsAmino): BlockParams {
    return {
      max_bytes: Long.fromString(object.max_bytes),
      max_gas: Long.fromString(object.max_gas),
      time_iota_ms: Long.fromString(object.time_iota_ms)
    };
  },
  toAmino(message: BlockParams): BlockParamsAmino {
    const obj: any = {};
    obj.max_bytes = message.max_bytes ? message.max_bytes.toString() : undefined;
    obj.max_gas = message.max_gas ? message.max_gas.toString() : undefined;
    obj.time_iota_ms = message.time_iota_ms ? message.time_iota_ms.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BlockParamsAminoMsg): BlockParams {
    return BlockParams.fromAmino(object.value);
  },
  fromProtoMsg(message: BlockParamsProtoMsg): BlockParams {
    return BlockParams.decode(message.value);
  },
  toProto(message: BlockParams): Uint8Array {
    return BlockParams.encode(message).finish();
  },
  toProtoMsg(message: BlockParams): BlockParamsProtoMsg {
    return {
      typeUrl: "/tendermint.types.BlockParams",
      value: BlockParams.encode(message).finish()
    };
  }
};
function createBaseEvidenceParams(): EvidenceParams {
  return {
    max_age_num_blocks: Long.ZERO,
    max_age_duration: Duration.fromPartial({}),
    max_bytes: Long.ZERO
  };
}
export const EvidenceParams = {
  typeUrl: "/tendermint.types.EvidenceParams",
  encode(message: EvidenceParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.max_age_num_blocks.isZero()) {
      writer.uint32(8).int64(message.max_age_num_blocks);
    }
    if (message.max_age_duration !== undefined) {
      Duration.encode(message.max_age_duration, writer.uint32(18).fork()).ldelim();
    }
    if (!message.max_bytes.isZero()) {
      writer.uint32(24).int64(message.max_bytes);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EvidenceParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvidenceParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.max_age_num_blocks = (reader.int64() as Long);
          break;
        case 2:
          message.max_age_duration = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.max_bytes = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EvidenceParams {
    return {
      max_age_num_blocks: isSet(object.max_age_num_blocks) ? Long.fromValue(object.max_age_num_blocks) : Long.ZERO,
      max_age_duration: isSet(object.max_age_duration) ? Duration.fromJSON(object.max_age_duration) : undefined,
      max_bytes: isSet(object.max_bytes) ? Long.fromValue(object.max_bytes) : Long.ZERO
    };
  },
  toJSON(message: EvidenceParams): unknown {
    const obj: any = {};
    message.max_age_num_blocks !== undefined && (obj.max_age_num_blocks = (message.max_age_num_blocks || Long.ZERO).toString());
    message.max_age_duration !== undefined && (obj.max_age_duration = message.max_age_duration ? Duration.toJSON(message.max_age_duration) : undefined);
    message.max_bytes !== undefined && (obj.max_bytes = (message.max_bytes || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<EvidenceParams>): EvidenceParams {
    const message = createBaseEvidenceParams();
    message.max_age_num_blocks = object.max_age_num_blocks !== undefined && object.max_age_num_blocks !== null ? Long.fromValue(object.max_age_num_blocks) : Long.ZERO;
    message.max_age_duration = object.max_age_duration !== undefined && object.max_age_duration !== null ? Duration.fromPartial(object.max_age_duration) : undefined;
    message.max_bytes = object.max_bytes !== undefined && object.max_bytes !== null ? Long.fromValue(object.max_bytes) : Long.ZERO;
    return message;
  },
  fromAmino(object: EvidenceParamsAmino): EvidenceParams {
    return {
      max_age_num_blocks: Long.fromString(object.max_age_num_blocks),
      max_age_duration: object?.max_age_duration ? Duration.fromAmino(object.max_age_duration) : undefined,
      max_bytes: Long.fromString(object.max_bytes)
    };
  },
  toAmino(message: EvidenceParams): EvidenceParamsAmino {
    const obj: any = {};
    obj.max_age_num_blocks = message.max_age_num_blocks ? message.max_age_num_blocks.toString() : undefined;
    obj.max_age_duration = message.max_age_duration ? Duration.toAmino(message.max_age_duration) : undefined;
    obj.max_bytes = message.max_bytes ? message.max_bytes.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EvidenceParamsAminoMsg): EvidenceParams {
    return EvidenceParams.fromAmino(object.value);
  },
  fromProtoMsg(message: EvidenceParamsProtoMsg): EvidenceParams {
    return EvidenceParams.decode(message.value);
  },
  toProto(message: EvidenceParams): Uint8Array {
    return EvidenceParams.encode(message).finish();
  },
  toProtoMsg(message: EvidenceParams): EvidenceParamsProtoMsg {
    return {
      typeUrl: "/tendermint.types.EvidenceParams",
      value: EvidenceParams.encode(message).finish()
    };
  }
};
function createBaseValidatorParams(): ValidatorParams {
  return {
    pub_key_types: []
  };
}
export const ValidatorParams = {
  typeUrl: "/tendermint.types.ValidatorParams",
  encode(message: ValidatorParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pub_key_types) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pub_key_types.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorParams {
    return {
      pub_key_types: Array.isArray(object?.pub_key_types) ? object.pub_key_types.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: ValidatorParams): unknown {
    const obj: any = {};
    if (message.pub_key_types) {
      obj.pub_key_types = message.pub_key_types.map(e => e);
    } else {
      obj.pub_key_types = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorParams>): ValidatorParams {
    const message = createBaseValidatorParams();
    message.pub_key_types = object.pub_key_types?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ValidatorParamsAmino): ValidatorParams {
    return {
      pub_key_types: Array.isArray(object?.pub_key_types) ? object.pub_key_types.map((e: any) => e) : []
    };
  },
  toAmino(message: ValidatorParams): ValidatorParamsAmino {
    const obj: any = {};
    if (message.pub_key_types) {
      obj.pub_key_types = message.pub_key_types.map(e => e);
    } else {
      obj.pub_key_types = [];
    }
    return obj;
  },
  fromAminoMsg(object: ValidatorParamsAminoMsg): ValidatorParams {
    return ValidatorParams.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorParamsProtoMsg): ValidatorParams {
    return ValidatorParams.decode(message.value);
  },
  toProto(message: ValidatorParams): Uint8Array {
    return ValidatorParams.encode(message).finish();
  },
  toProtoMsg(message: ValidatorParams): ValidatorParamsProtoMsg {
    return {
      typeUrl: "/tendermint.types.ValidatorParams",
      value: ValidatorParams.encode(message).finish()
    };
  }
};
function createBaseVersionParams(): VersionParams {
  return {
    app_version: Long.UZERO
  };
}
export const VersionParams = {
  typeUrl: "/tendermint.types.VersionParams",
  encode(message: VersionParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.app_version.isZero()) {
      writer.uint32(8).uint64(message.app_version);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): VersionParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersionParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.app_version = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VersionParams {
    return {
      app_version: isSet(object.app_version) ? Long.fromValue(object.app_version) : Long.UZERO
    };
  },
  toJSON(message: VersionParams): unknown {
    const obj: any = {};
    message.app_version !== undefined && (obj.app_version = (message.app_version || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<VersionParams>): VersionParams {
    const message = createBaseVersionParams();
    message.app_version = object.app_version !== undefined && object.app_version !== null ? Long.fromValue(object.app_version) : Long.UZERO;
    return message;
  },
  fromAmino(object: VersionParamsAmino): VersionParams {
    return {
      app_version: Long.fromString(object.app_version)
    };
  },
  toAmino(message: VersionParams): VersionParamsAmino {
    const obj: any = {};
    obj.app_version = message.app_version ? message.app_version.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: VersionParamsAminoMsg): VersionParams {
    return VersionParams.fromAmino(object.value);
  },
  fromProtoMsg(message: VersionParamsProtoMsg): VersionParams {
    return VersionParams.decode(message.value);
  },
  toProto(message: VersionParams): Uint8Array {
    return VersionParams.encode(message).finish();
  },
  toProtoMsg(message: VersionParams): VersionParamsProtoMsg {
    return {
      typeUrl: "/tendermint.types.VersionParams",
      value: VersionParams.encode(message).finish()
    };
  }
};
function createBaseHashedParams(): HashedParams {
  return {
    block_max_bytes: Long.ZERO,
    block_max_gas: Long.ZERO
  };
}
export const HashedParams = {
  typeUrl: "/tendermint.types.HashedParams",
  encode(message: HashedParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.block_max_bytes.isZero()) {
      writer.uint32(8).int64(message.block_max_bytes);
    }
    if (!message.block_max_gas.isZero()) {
      writer.uint32(16).int64(message.block_max_gas);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): HashedParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHashedParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block_max_bytes = (reader.int64() as Long);
          break;
        case 2:
          message.block_max_gas = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HashedParams {
    return {
      block_max_bytes: isSet(object.block_max_bytes) ? Long.fromValue(object.block_max_bytes) : Long.ZERO,
      block_max_gas: isSet(object.block_max_gas) ? Long.fromValue(object.block_max_gas) : Long.ZERO
    };
  },
  toJSON(message: HashedParams): unknown {
    const obj: any = {};
    message.block_max_bytes !== undefined && (obj.block_max_bytes = (message.block_max_bytes || Long.ZERO).toString());
    message.block_max_gas !== undefined && (obj.block_max_gas = (message.block_max_gas || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<HashedParams>): HashedParams {
    const message = createBaseHashedParams();
    message.block_max_bytes = object.block_max_bytes !== undefined && object.block_max_bytes !== null ? Long.fromValue(object.block_max_bytes) : Long.ZERO;
    message.block_max_gas = object.block_max_gas !== undefined && object.block_max_gas !== null ? Long.fromValue(object.block_max_gas) : Long.ZERO;
    return message;
  },
  fromAmino(object: HashedParamsAmino): HashedParams {
    return {
      block_max_bytes: Long.fromString(object.block_max_bytes),
      block_max_gas: Long.fromString(object.block_max_gas)
    };
  },
  toAmino(message: HashedParams): HashedParamsAmino {
    const obj: any = {};
    obj.block_max_bytes = message.block_max_bytes ? message.block_max_bytes.toString() : undefined;
    obj.block_max_gas = message.block_max_gas ? message.block_max_gas.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: HashedParamsAminoMsg): HashedParams {
    return HashedParams.fromAmino(object.value);
  },
  fromProtoMsg(message: HashedParamsProtoMsg): HashedParams {
    return HashedParams.decode(message.value);
  },
  toProto(message: HashedParams): Uint8Array {
    return HashedParams.encode(message).finish();
  },
  toProtoMsg(message: HashedParams): HashedParamsProtoMsg {
    return {
      typeUrl: "/tendermint.types.HashedParams",
      value: HashedParams.encode(message).finish()
    };
  }
};