import { Vote, VoteAmino, VoteSDKType, LightBlock, LightBlockAmino, LightBlockSDKType } from "./types";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Validator, ValidatorAmino, ValidatorSDKType } from "./validator";
import { Long, isSet, DeepPartial, toTimestamp, fromTimestamp, fromJsonTimestamp } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Evidence {
  duplicate_vote_evidence?: DuplicateVoteEvidence;
  light_client_attack_evidence?: LightClientAttackEvidence;
}
export interface EvidenceProtoMsg {
  type_url: "/tendermint.types.Evidence";
  value: Uint8Array;
}
export interface EvidenceAmino {
  duplicate_vote_evidence?: DuplicateVoteEvidenceAmino;
  light_client_attack_evidence?: LightClientAttackEvidenceAmino;
}
export interface EvidenceAminoMsg {
  type: "/tendermint.types.Evidence";
  value: EvidenceAmino;
}
export interface EvidenceSDKType {
  duplicate_vote_evidence?: DuplicateVoteEvidenceSDKType;
  light_client_attack_evidence?: LightClientAttackEvidenceSDKType;
}
/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
export interface DuplicateVoteEvidence {
  vote_a: Vote;
  vote_b: Vote;
  total_voting_power: Long;
  validator_power: Long;
  timestamp: Date;
}
export interface DuplicateVoteEvidenceProtoMsg {
  type_url: "/tendermint.types.DuplicateVoteEvidence";
  value: Uint8Array;
}
/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
export interface DuplicateVoteEvidenceAmino {
  vote_a?: VoteAmino;
  vote_b?: VoteAmino;
  total_voting_power: string;
  validator_power: string;
  timestamp?: Date;
}
export interface DuplicateVoteEvidenceAminoMsg {
  type: "/tendermint.types.DuplicateVoteEvidence";
  value: DuplicateVoteEvidenceAmino;
}
/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
export interface DuplicateVoteEvidenceSDKType {
  vote_a: VoteSDKType;
  vote_b: VoteSDKType;
  total_voting_power: Long;
  validator_power: Long;
  timestamp: Date;
}
/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
export interface LightClientAttackEvidence {
  conflicting_block: LightBlock;
  common_height: Long;
  byzantine_validators: Validator[];
  total_voting_power: Long;
  timestamp: Date;
}
export interface LightClientAttackEvidenceProtoMsg {
  type_url: "/tendermint.types.LightClientAttackEvidence";
  value: Uint8Array;
}
/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
export interface LightClientAttackEvidenceAmino {
  conflicting_block?: LightBlockAmino;
  common_height: string;
  byzantine_validators: ValidatorAmino[];
  total_voting_power: string;
  timestamp?: Date;
}
export interface LightClientAttackEvidenceAminoMsg {
  type: "/tendermint.types.LightClientAttackEvidence";
  value: LightClientAttackEvidenceAmino;
}
/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
export interface LightClientAttackEvidenceSDKType {
  conflicting_block: LightBlockSDKType;
  common_height: Long;
  byzantine_validators: ValidatorSDKType[];
  total_voting_power: Long;
  timestamp: Date;
}
export interface EvidenceList {
  evidence: Evidence[];
}
export interface EvidenceListProtoMsg {
  type_url: "/tendermint.types.EvidenceList";
  value: Uint8Array;
}
export interface EvidenceListAmino {
  evidence: EvidenceAmino[];
}
export interface EvidenceListAminoMsg {
  type: "/tendermint.types.EvidenceList";
  value: EvidenceListAmino;
}
export interface EvidenceListSDKType {
  evidence: EvidenceSDKType[];
}
function createBaseEvidence(): Evidence {
  return {
    duplicate_vote_evidence: undefined,
    light_client_attack_evidence: undefined
  };
}
export const Evidence = {
  typeUrl: "/tendermint.types.Evidence",
  encode(message: Evidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.duplicate_vote_evidence !== undefined) {
      DuplicateVoteEvidence.encode(message.duplicate_vote_evidence, writer.uint32(10).fork()).ldelim();
    }
    if (message.light_client_attack_evidence !== undefined) {
      LightClientAttackEvidence.encode(message.light_client_attack_evidence, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Evidence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.duplicate_vote_evidence = DuplicateVoteEvidence.decode(reader, reader.uint32());
          break;
        case 2:
          message.light_client_attack_evidence = LightClientAttackEvidence.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Evidence {
    return {
      duplicate_vote_evidence: isSet(object.duplicate_vote_evidence) ? DuplicateVoteEvidence.fromJSON(object.duplicate_vote_evidence) : undefined,
      light_client_attack_evidence: isSet(object.light_client_attack_evidence) ? LightClientAttackEvidence.fromJSON(object.light_client_attack_evidence) : undefined
    };
  },
  toJSON(message: Evidence): unknown {
    const obj: any = {};
    message.duplicate_vote_evidence !== undefined && (obj.duplicate_vote_evidence = message.duplicate_vote_evidence ? DuplicateVoteEvidence.toJSON(message.duplicate_vote_evidence) : undefined);
    message.light_client_attack_evidence !== undefined && (obj.light_client_attack_evidence = message.light_client_attack_evidence ? LightClientAttackEvidence.toJSON(message.light_client_attack_evidence) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Evidence>): Evidence {
    const message = createBaseEvidence();
    message.duplicate_vote_evidence = object.duplicate_vote_evidence !== undefined && object.duplicate_vote_evidence !== null ? DuplicateVoteEvidence.fromPartial(object.duplicate_vote_evidence) : undefined;
    message.light_client_attack_evidence = object.light_client_attack_evidence !== undefined && object.light_client_attack_evidence !== null ? LightClientAttackEvidence.fromPartial(object.light_client_attack_evidence) : undefined;
    return message;
  },
  fromAmino(object: EvidenceAmino): Evidence {
    return {
      duplicate_vote_evidence: object?.duplicate_vote_evidence ? DuplicateVoteEvidence.fromAmino(object.duplicate_vote_evidence) : undefined,
      light_client_attack_evidence: object?.light_client_attack_evidence ? LightClientAttackEvidence.fromAmino(object.light_client_attack_evidence) : undefined
    };
  },
  toAmino(message: Evidence): EvidenceAmino {
    const obj: any = {};
    obj.duplicate_vote_evidence = message.duplicate_vote_evidence ? DuplicateVoteEvidence.toAmino(message.duplicate_vote_evidence) : undefined;
    obj.light_client_attack_evidence = message.light_client_attack_evidence ? LightClientAttackEvidence.toAmino(message.light_client_attack_evidence) : undefined;
    return obj;
  },
  fromAminoMsg(object: EvidenceAminoMsg): Evidence {
    return Evidence.fromAmino(object.value);
  },
  fromProtoMsg(message: EvidenceProtoMsg): Evidence {
    return Evidence.decode(message.value);
  },
  toProto(message: Evidence): Uint8Array {
    return Evidence.encode(message).finish();
  },
  toProtoMsg(message: Evidence): EvidenceProtoMsg {
    return {
      typeUrl: "/tendermint.types.Evidence",
      value: Evidence.encode(message).finish()
    };
  }
};
function createBaseDuplicateVoteEvidence(): DuplicateVoteEvidence {
  return {
    vote_a: Vote.fromPartial({}),
    vote_b: Vote.fromPartial({}),
    total_voting_power: Long.ZERO,
    validator_power: Long.ZERO,
    timestamp: new Date()
  };
}
export const DuplicateVoteEvidence = {
  typeUrl: "/tendermint.types.DuplicateVoteEvidence",
  encode(message: DuplicateVoteEvidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vote_a !== undefined) {
      Vote.encode(message.vote_a, writer.uint32(10).fork()).ldelim();
    }
    if (message.vote_b !== undefined) {
      Vote.encode(message.vote_b, writer.uint32(18).fork()).ldelim();
    }
    if (!message.total_voting_power.isZero()) {
      writer.uint32(24).int64(message.total_voting_power);
    }
    if (!message.validator_power.isZero()) {
      writer.uint32(32).int64(message.validator_power);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DuplicateVoteEvidence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDuplicateVoteEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote_a = Vote.decode(reader, reader.uint32());
          break;
        case 2:
          message.vote_b = Vote.decode(reader, reader.uint32());
          break;
        case 3:
          message.total_voting_power = (reader.int64() as Long);
          break;
        case 4:
          message.validator_power = (reader.int64() as Long);
          break;
        case 5:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DuplicateVoteEvidence {
    return {
      vote_a: isSet(object.vote_a) ? Vote.fromJSON(object.vote_a) : undefined,
      vote_b: isSet(object.vote_b) ? Vote.fromJSON(object.vote_b) : undefined,
      total_voting_power: isSet(object.total_voting_power) ? Long.fromValue(object.total_voting_power) : Long.ZERO,
      validator_power: isSet(object.validator_power) ? Long.fromValue(object.validator_power) : Long.ZERO,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },
  toJSON(message: DuplicateVoteEvidence): unknown {
    const obj: any = {};
    message.vote_a !== undefined && (obj.vote_a = message.vote_a ? Vote.toJSON(message.vote_a) : undefined);
    message.vote_b !== undefined && (obj.vote_b = message.vote_b ? Vote.toJSON(message.vote_b) : undefined);
    message.total_voting_power !== undefined && (obj.total_voting_power = (message.total_voting_power || Long.ZERO).toString());
    message.validator_power !== undefined && (obj.validator_power = (message.validator_power || Long.ZERO).toString());
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<DuplicateVoteEvidence>): DuplicateVoteEvidence {
    const message = createBaseDuplicateVoteEvidence();
    message.vote_a = object.vote_a !== undefined && object.vote_a !== null ? Vote.fromPartial(object.vote_a) : undefined;
    message.vote_b = object.vote_b !== undefined && object.vote_b !== null ? Vote.fromPartial(object.vote_b) : undefined;
    message.total_voting_power = object.total_voting_power !== undefined && object.total_voting_power !== null ? Long.fromValue(object.total_voting_power) : Long.ZERO;
    message.validator_power = object.validator_power !== undefined && object.validator_power !== null ? Long.fromValue(object.validator_power) : Long.ZERO;
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
  fromAmino(object: DuplicateVoteEvidenceAmino): DuplicateVoteEvidence {
    return {
      vote_a: object?.vote_a ? Vote.fromAmino(object.vote_a) : undefined,
      vote_b: object?.vote_b ? Vote.fromAmino(object.vote_b) : undefined,
      total_voting_power: Long.fromString(object.total_voting_power),
      validator_power: Long.fromString(object.validator_power),
      timestamp: object.timestamp
    };
  },
  toAmino(message: DuplicateVoteEvidence): DuplicateVoteEvidenceAmino {
    const obj: any = {};
    obj.vote_a = message.vote_a ? Vote.toAmino(message.vote_a) : undefined;
    obj.vote_b = message.vote_b ? Vote.toAmino(message.vote_b) : undefined;
    obj.total_voting_power = message.total_voting_power ? message.total_voting_power.toString() : undefined;
    obj.validator_power = message.validator_power ? message.validator_power.toString() : undefined;
    obj.timestamp = message.timestamp;
    return obj;
  },
  fromAminoMsg(object: DuplicateVoteEvidenceAminoMsg): DuplicateVoteEvidence {
    return DuplicateVoteEvidence.fromAmino(object.value);
  },
  fromProtoMsg(message: DuplicateVoteEvidenceProtoMsg): DuplicateVoteEvidence {
    return DuplicateVoteEvidence.decode(message.value);
  },
  toProto(message: DuplicateVoteEvidence): Uint8Array {
    return DuplicateVoteEvidence.encode(message).finish();
  },
  toProtoMsg(message: DuplicateVoteEvidence): DuplicateVoteEvidenceProtoMsg {
    return {
      typeUrl: "/tendermint.types.DuplicateVoteEvidence",
      value: DuplicateVoteEvidence.encode(message).finish()
    };
  }
};
function createBaseLightClientAttackEvidence(): LightClientAttackEvidence {
  return {
    conflicting_block: LightBlock.fromPartial({}),
    common_height: Long.ZERO,
    byzantine_validators: [],
    total_voting_power: Long.ZERO,
    timestamp: new Date()
  };
}
export const LightClientAttackEvidence = {
  typeUrl: "/tendermint.types.LightClientAttackEvidence",
  encode(message: LightClientAttackEvidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.conflicting_block !== undefined) {
      LightBlock.encode(message.conflicting_block, writer.uint32(10).fork()).ldelim();
    }
    if (!message.common_height.isZero()) {
      writer.uint32(16).int64(message.common_height);
    }
    for (const v of message.byzantine_validators) {
      Validator.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (!message.total_voting_power.isZero()) {
      writer.uint32(32).int64(message.total_voting_power);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LightClientAttackEvidence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLightClientAttackEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.conflicting_block = LightBlock.decode(reader, reader.uint32());
          break;
        case 2:
          message.common_height = (reader.int64() as Long);
          break;
        case 3:
          message.byzantine_validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 4:
          message.total_voting_power = (reader.int64() as Long);
          break;
        case 5:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LightClientAttackEvidence {
    return {
      conflicting_block: isSet(object.conflicting_block) ? LightBlock.fromJSON(object.conflicting_block) : undefined,
      common_height: isSet(object.common_height) ? Long.fromValue(object.common_height) : Long.ZERO,
      byzantine_validators: Array.isArray(object?.byzantine_validators) ? object.byzantine_validators.map((e: any) => Validator.fromJSON(e)) : [],
      total_voting_power: isSet(object.total_voting_power) ? Long.fromValue(object.total_voting_power) : Long.ZERO,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
    };
  },
  toJSON(message: LightClientAttackEvidence): unknown {
    const obj: any = {};
    message.conflicting_block !== undefined && (obj.conflicting_block = message.conflicting_block ? LightBlock.toJSON(message.conflicting_block) : undefined);
    message.common_height !== undefined && (obj.common_height = (message.common_height || Long.ZERO).toString());
    if (message.byzantine_validators) {
      obj.byzantine_validators = message.byzantine_validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.byzantine_validators = [];
    }
    message.total_voting_power !== undefined && (obj.total_voting_power = (message.total_voting_power || Long.ZERO).toString());
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<LightClientAttackEvidence>): LightClientAttackEvidence {
    const message = createBaseLightClientAttackEvidence();
    message.conflicting_block = object.conflicting_block !== undefined && object.conflicting_block !== null ? LightBlock.fromPartial(object.conflicting_block) : undefined;
    message.common_height = object.common_height !== undefined && object.common_height !== null ? Long.fromValue(object.common_height) : Long.ZERO;
    message.byzantine_validators = object.byzantine_validators?.map(e => Validator.fromPartial(e)) || [];
    message.total_voting_power = object.total_voting_power !== undefined && object.total_voting_power !== null ? Long.fromValue(object.total_voting_power) : Long.ZERO;
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
  fromAmino(object: LightClientAttackEvidenceAmino): LightClientAttackEvidence {
    return {
      conflicting_block: object?.conflicting_block ? LightBlock.fromAmino(object.conflicting_block) : undefined,
      common_height: Long.fromString(object.common_height),
      byzantine_validators: Array.isArray(object?.byzantine_validators) ? object.byzantine_validators.map((e: any) => Validator.fromAmino(e)) : [],
      total_voting_power: Long.fromString(object.total_voting_power),
      timestamp: object.timestamp
    };
  },
  toAmino(message: LightClientAttackEvidence): LightClientAttackEvidenceAmino {
    const obj: any = {};
    obj.conflicting_block = message.conflicting_block ? LightBlock.toAmino(message.conflicting_block) : undefined;
    obj.common_height = message.common_height ? message.common_height.toString() : undefined;
    if (message.byzantine_validators) {
      obj.byzantine_validators = message.byzantine_validators.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.byzantine_validators = [];
    }
    obj.total_voting_power = message.total_voting_power ? message.total_voting_power.toString() : undefined;
    obj.timestamp = message.timestamp;
    return obj;
  },
  fromAminoMsg(object: LightClientAttackEvidenceAminoMsg): LightClientAttackEvidence {
    return LightClientAttackEvidence.fromAmino(object.value);
  },
  fromProtoMsg(message: LightClientAttackEvidenceProtoMsg): LightClientAttackEvidence {
    return LightClientAttackEvidence.decode(message.value);
  },
  toProto(message: LightClientAttackEvidence): Uint8Array {
    return LightClientAttackEvidence.encode(message).finish();
  },
  toProtoMsg(message: LightClientAttackEvidence): LightClientAttackEvidenceProtoMsg {
    return {
      typeUrl: "/tendermint.types.LightClientAttackEvidence",
      value: LightClientAttackEvidence.encode(message).finish()
    };
  }
};
function createBaseEvidenceList(): EvidenceList {
  return {
    evidence: []
  };
}
export const EvidenceList = {
  typeUrl: "/tendermint.types.EvidenceList",
  encode(message: EvidenceList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.evidence) {
      Evidence.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EvidenceList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvidenceList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidence.push(Evidence.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EvidenceList {
    return {
      evidence: Array.isArray(object?.evidence) ? object.evidence.map((e: any) => Evidence.fromJSON(e)) : []
    };
  },
  toJSON(message: EvidenceList): unknown {
    const obj: any = {};
    if (message.evidence) {
      obj.evidence = message.evidence.map(e => e ? Evidence.toJSON(e) : undefined);
    } else {
      obj.evidence = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<EvidenceList>): EvidenceList {
    const message = createBaseEvidenceList();
    message.evidence = object.evidence?.map(e => Evidence.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EvidenceListAmino): EvidenceList {
    return {
      evidence: Array.isArray(object?.evidence) ? object.evidence.map((e: any) => Evidence.fromAmino(e)) : []
    };
  },
  toAmino(message: EvidenceList): EvidenceListAmino {
    const obj: any = {};
    if (message.evidence) {
      obj.evidence = message.evidence.map(e => e ? Evidence.toAmino(e) : undefined);
    } else {
      obj.evidence = [];
    }
    return obj;
  },
  fromAminoMsg(object: EvidenceListAminoMsg): EvidenceList {
    return EvidenceList.fromAmino(object.value);
  },
  fromProtoMsg(message: EvidenceListProtoMsg): EvidenceList {
    return EvidenceList.decode(message.value);
  },
  toProto(message: EvidenceList): Uint8Array {
    return EvidenceList.encode(message).finish();
  },
  toProtoMsg(message: EvidenceList): EvidenceListProtoMsg {
    return {
      typeUrl: "/tendermint.types.EvidenceList",
      value: EvidenceList.encode(message).finish()
    };
  }
};