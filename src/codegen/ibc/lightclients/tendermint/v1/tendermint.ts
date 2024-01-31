import { Duration, DurationAmino, DurationSDKType } from "../../../../google/protobuf/duration";
import { Height, HeightAmino, HeightSDKType } from "../../../core/client/v1/client";
import { ProofSpec, ProofSpecAmino, ProofSpecSDKType } from "../../../../confio/proofs";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { MerkleRoot, MerkleRootAmino, MerkleRootSDKType } from "../../../core/commitment/v1/commitment";
import { SignedHeader, SignedHeaderAmino, SignedHeaderSDKType } from "../../../../tendermint/types/types";
import { ValidatorSet, ValidatorSetAmino, ValidatorSetSDKType } from "../../../../tendermint/types/validator";
import { Long, isSet, DeepPartial, toTimestamp, fromTimestamp, fromJsonTimestamp, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * ClientState from Tendermint tracks the current validator set, latest height,
 * and a possible frozen height.
 */
export interface ClientState {
  chain_id: string;
  trust_level: Fraction;
  /**
   * duration of the period since the LastestTimestamp during which the
   * submitted headers are valid for upgrade
   */
  trusting_period: Duration;
  /** duration of the staking unbonding period */
  unbonding_period: Duration;
  /** defines how much new (untrusted) header's Time can drift into the future. */
  max_clock_drift: Duration;
  /** Block height when the client was frozen due to a misbehaviour */
  frozen_height: Height;
  /** Latest height the client was updated to */
  latest_height: Height;
  /** Proof specifications used in verifying counterparty state */
  proof_specs: ProofSpec[];
  /**
   * Path at which next upgraded client will be committed.
   * Each element corresponds to the key for a single CommitmentProof in the
   * chained proof. NOTE: ClientState must stored under
   * `{upgradePath}/{upgradeHeight}/clientState` ConsensusState must be stored
   * under `{upgradepath}/{upgradeHeight}/consensusState` For SDK chains using
   * the default upgrade module, upgrade_path should be []string{"upgrade",
   * "upgradedIBCState"}`
   */
  upgrade_path: string[];
  /**
   * This flag, when set to true, will allow governance to recover a client
   * which has expired
   */
  allow_update_after_expiry: boolean;
  /**
   * This flag, when set to true, will allow governance to unfreeze a client
   * whose chain has experienced a misbehaviour event
   */
  allow_update_after_misbehaviour: boolean;
}
export interface ClientStateProtoMsg {
  type_url: "/ibc.lightclients.tendermint.v1.ClientState";
  value: Uint8Array;
}
/**
 * ClientState from Tendermint tracks the current validator set, latest height,
 * and a possible frozen height.
 */
export interface ClientStateAmino {
  chain_id: string;
  trust_level?: FractionAmino;
  /**
   * duration of the period since the LastestTimestamp during which the
   * submitted headers are valid for upgrade
   */
  trusting_period?: DurationAmino;
  /** duration of the staking unbonding period */
  unbonding_period?: DurationAmino;
  /** defines how much new (untrusted) header's Time can drift into the future. */
  max_clock_drift?: DurationAmino;
  /** Block height when the client was frozen due to a misbehaviour */
  frozen_height?: HeightAmino;
  /** Latest height the client was updated to */
  latest_height?: HeightAmino;
  /** Proof specifications used in verifying counterparty state */
  proof_specs: ProofSpecAmino[];
  /**
   * Path at which next upgraded client will be committed.
   * Each element corresponds to the key for a single CommitmentProof in the
   * chained proof. NOTE: ClientState must stored under
   * `{upgradePath}/{upgradeHeight}/clientState` ConsensusState must be stored
   * under `{upgradepath}/{upgradeHeight}/consensusState` For SDK chains using
   * the default upgrade module, upgrade_path should be []string{"upgrade",
   * "upgradedIBCState"}`
   */
  upgrade_path: string[];
  /**
   * This flag, when set to true, will allow governance to recover a client
   * which has expired
   */
  allow_update_after_expiry: boolean;
  /**
   * This flag, when set to true, will allow governance to unfreeze a client
   * whose chain has experienced a misbehaviour event
   */
  allow_update_after_misbehaviour: boolean;
}
export interface ClientStateAminoMsg {
  type: "cosmos-sdk/ClientState";
  value: ClientStateAmino;
}
/**
 * ClientState from Tendermint tracks the current validator set, latest height,
 * and a possible frozen height.
 */
export interface ClientStateSDKType {
  chain_id: string;
  trust_level: FractionSDKType;
  trusting_period: DurationSDKType;
  unbonding_period: DurationSDKType;
  max_clock_drift: DurationSDKType;
  frozen_height: HeightSDKType;
  latest_height: HeightSDKType;
  proof_specs: ProofSpecSDKType[];
  upgrade_path: string[];
  allow_update_after_expiry: boolean;
  allow_update_after_misbehaviour: boolean;
}
/** ConsensusState defines the consensus state from Tendermint. */
export interface ConsensusState {
  /**
   * timestamp that corresponds to the block height in which the ConsensusState
   * was stored.
   */
  timestamp: Date;
  /** commitment root (i.e app hash) */
  root: MerkleRoot;
  next_validators_hash: Uint8Array;
}
export interface ConsensusStateProtoMsg {
  type_url: "/ibc.lightclients.tendermint.v1.ConsensusState";
  value: Uint8Array;
}
/** ConsensusState defines the consensus state from Tendermint. */
export interface ConsensusStateAmino {
  /**
   * timestamp that corresponds to the block height in which the ConsensusState
   * was stored.
   */
  timestamp?: Date;
  /** commitment root (i.e app hash) */
  root?: MerkleRootAmino;
  next_validators_hash: Uint8Array;
}
export interface ConsensusStateAminoMsg {
  type: "cosmos-sdk/ConsensusState";
  value: ConsensusStateAmino;
}
/** ConsensusState defines the consensus state from Tendermint. */
export interface ConsensusStateSDKType {
  timestamp: Date;
  root: MerkleRootSDKType;
  next_validators_hash: Uint8Array;
}
/**
 * Misbehaviour is a wrapper over two conflicting Headers
 * that implements Misbehaviour interface expected by ICS-02
 */
export interface Misbehaviour {
  client_id: string;
  header1: Header;
  header2: Header;
}
export interface MisbehaviourProtoMsg {
  type_url: "/ibc.lightclients.tendermint.v1.Misbehaviour";
  value: Uint8Array;
}
/**
 * Misbehaviour is a wrapper over two conflicting Headers
 * that implements Misbehaviour interface expected by ICS-02
 */
export interface MisbehaviourAmino {
  client_id: string;
  header_1?: HeaderAmino;
  header_2?: HeaderAmino;
}
export interface MisbehaviourAminoMsg {
  type: "cosmos-sdk/Misbehaviour";
  value: MisbehaviourAmino;
}
/**
 * Misbehaviour is a wrapper over two conflicting Headers
 * that implements Misbehaviour interface expected by ICS-02
 */
export interface MisbehaviourSDKType {
  client_id: string;
  header_1: HeaderSDKType;
  header_2: HeaderSDKType;
}
/**
 * Header defines the Tendermint client consensus Header.
 * It encapsulates all the information necessary to update from a trusted
 * Tendermint ConsensusState. The inclusion of TrustedHeight and
 * TrustedValidators allows this update to process correctly, so long as the
 * ConsensusState for the TrustedHeight exists, this removes race conditions
 * among relayers The SignedHeader and ValidatorSet are the new untrusted update
 * fields for the client. The TrustedHeight is the height of a stored
 * ConsensusState on the client that will be used to verify the new untrusted
 * header. The Trusted ConsensusState must be within the unbonding period of
 * current time in order to correctly verify, and the TrustedValidators must
 * hash to TrustedConsensusState.NextValidatorsHash since that is the last
 * trusted validator set at the TrustedHeight.
 */
export interface Header {
  signed_header: SignedHeader;
  validator_set: ValidatorSet;
  trusted_height: Height;
  trusted_validators: ValidatorSet;
}
export interface HeaderProtoMsg {
  type_url: "/ibc.lightclients.tendermint.v1.Header";
  value: Uint8Array;
}
/**
 * Header defines the Tendermint client consensus Header.
 * It encapsulates all the information necessary to update from a trusted
 * Tendermint ConsensusState. The inclusion of TrustedHeight and
 * TrustedValidators allows this update to process correctly, so long as the
 * ConsensusState for the TrustedHeight exists, this removes race conditions
 * among relayers The SignedHeader and ValidatorSet are the new untrusted update
 * fields for the client. The TrustedHeight is the height of a stored
 * ConsensusState on the client that will be used to verify the new untrusted
 * header. The Trusted ConsensusState must be within the unbonding period of
 * current time in order to correctly verify, and the TrustedValidators must
 * hash to TrustedConsensusState.NextValidatorsHash since that is the last
 * trusted validator set at the TrustedHeight.
 */
export interface HeaderAmino {
  signed_header?: SignedHeaderAmino;
  validator_set?: ValidatorSetAmino;
  trusted_height?: HeightAmino;
  trusted_validators?: ValidatorSetAmino;
}
export interface HeaderAminoMsg {
  type: "cosmos-sdk/Header";
  value: HeaderAmino;
}
/**
 * Header defines the Tendermint client consensus Header.
 * It encapsulates all the information necessary to update from a trusted
 * Tendermint ConsensusState. The inclusion of TrustedHeight and
 * TrustedValidators allows this update to process correctly, so long as the
 * ConsensusState for the TrustedHeight exists, this removes race conditions
 * among relayers The SignedHeader and ValidatorSet are the new untrusted update
 * fields for the client. The TrustedHeight is the height of a stored
 * ConsensusState on the client that will be used to verify the new untrusted
 * header. The Trusted ConsensusState must be within the unbonding period of
 * current time in order to correctly verify, and the TrustedValidators must
 * hash to TrustedConsensusState.NextValidatorsHash since that is the last
 * trusted validator set at the TrustedHeight.
 */
export interface HeaderSDKType {
  signed_header: SignedHeaderSDKType;
  validator_set: ValidatorSetSDKType;
  trusted_height: HeightSDKType;
  trusted_validators: ValidatorSetSDKType;
}
/**
 * Fraction defines the protobuf message type for tmmath.Fraction that only
 * supports positive values.
 */
export interface Fraction {
  numerator: Long;
  denominator: Long;
}
export interface FractionProtoMsg {
  type_url: "/ibc.lightclients.tendermint.v1.Fraction";
  value: Uint8Array;
}
/**
 * Fraction defines the protobuf message type for tmmath.Fraction that only
 * supports positive values.
 */
export interface FractionAmino {
  numerator: string;
  denominator: string;
}
export interface FractionAminoMsg {
  type: "cosmos-sdk/Fraction";
  value: FractionAmino;
}
/**
 * Fraction defines the protobuf message type for tmmath.Fraction that only
 * supports positive values.
 */
export interface FractionSDKType {
  numerator: Long;
  denominator: Long;
}
function createBaseClientState(): ClientState {
  return {
    chain_id: "",
    trust_level: Fraction.fromPartial({}),
    trusting_period: Duration.fromPartial({}),
    unbonding_period: Duration.fromPartial({}),
    max_clock_drift: Duration.fromPartial({}),
    frozen_height: Height.fromPartial({}),
    latest_height: Height.fromPartial({}),
    proof_specs: [],
    upgrade_path: [],
    allow_update_after_expiry: false,
    allow_update_after_misbehaviour: false
  };
}
export const ClientState = {
  typeUrl: "/ibc.lightclients.tendermint.v1.ClientState",
  aminoType: "cosmos-sdk/ClientState",
  encode(message: ClientState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain_id !== "") {
      writer.uint32(10).string(message.chain_id);
    }
    if (message.trust_level !== undefined) {
      Fraction.encode(message.trust_level, writer.uint32(18).fork()).ldelim();
    }
    if (message.trusting_period !== undefined) {
      Duration.encode(message.trusting_period, writer.uint32(26).fork()).ldelim();
    }
    if (message.unbonding_period !== undefined) {
      Duration.encode(message.unbonding_period, writer.uint32(34).fork()).ldelim();
    }
    if (message.max_clock_drift !== undefined) {
      Duration.encode(message.max_clock_drift, writer.uint32(42).fork()).ldelim();
    }
    if (message.frozen_height !== undefined) {
      Height.encode(message.frozen_height, writer.uint32(50).fork()).ldelim();
    }
    if (message.latest_height !== undefined) {
      Height.encode(message.latest_height, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.proof_specs) {
      ProofSpec.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.upgrade_path) {
      writer.uint32(74).string(v!);
    }
    if (message.allow_update_after_expiry === true) {
      writer.uint32(80).bool(message.allow_update_after_expiry);
    }
    if (message.allow_update_after_misbehaviour === true) {
      writer.uint32(88).bool(message.allow_update_after_misbehaviour);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ClientState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain_id = reader.string();
          break;
        case 2:
          message.trust_level = Fraction.decode(reader, reader.uint32());
          break;
        case 3:
          message.trusting_period = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.unbonding_period = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.max_clock_drift = Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.frozen_height = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.latest_height = Height.decode(reader, reader.uint32());
          break;
        case 8:
          message.proof_specs.push(ProofSpec.decode(reader, reader.uint32()));
          break;
        case 9:
          message.upgrade_path.push(reader.string());
          break;
        case 10:
          message.allow_update_after_expiry = reader.bool();
          break;
        case 11:
          message.allow_update_after_misbehaviour = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClientState {
    return {
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      trust_level: isSet(object.trust_level) ? Fraction.fromJSON(object.trust_level) : undefined,
      trusting_period: isSet(object.trusting_period) ? Duration.fromJSON(object.trusting_period) : undefined,
      unbonding_period: isSet(object.unbonding_period) ? Duration.fromJSON(object.unbonding_period) : undefined,
      max_clock_drift: isSet(object.max_clock_drift) ? Duration.fromJSON(object.max_clock_drift) : undefined,
      frozen_height: isSet(object.frozen_height) ? Height.fromJSON(object.frozen_height) : undefined,
      latest_height: isSet(object.latest_height) ? Height.fromJSON(object.latest_height) : undefined,
      proof_specs: Array.isArray(object?.proof_specs) ? object.proof_specs.map((e: any) => ProofSpec.fromJSON(e)) : [],
      upgrade_path: Array.isArray(object?.upgrade_path) ? object.upgrade_path.map((e: any) => String(e)) : [],
      allow_update_after_expiry: isSet(object.allow_update_after_expiry) ? Boolean(object.allow_update_after_expiry) : false,
      allow_update_after_misbehaviour: isSet(object.allow_update_after_misbehaviour) ? Boolean(object.allow_update_after_misbehaviour) : false
    };
  },
  toJSON(message: ClientState): unknown {
    const obj: any = {};
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    message.trust_level !== undefined && (obj.trust_level = message.trust_level ? Fraction.toJSON(message.trust_level) : undefined);
    message.trusting_period !== undefined && (obj.trusting_period = message.trusting_period ? Duration.toJSON(message.trusting_period) : undefined);
    message.unbonding_period !== undefined && (obj.unbonding_period = message.unbonding_period ? Duration.toJSON(message.unbonding_period) : undefined);
    message.max_clock_drift !== undefined && (obj.max_clock_drift = message.max_clock_drift ? Duration.toJSON(message.max_clock_drift) : undefined);
    message.frozen_height !== undefined && (obj.frozen_height = message.frozen_height ? Height.toJSON(message.frozen_height) : undefined);
    message.latest_height !== undefined && (obj.latest_height = message.latest_height ? Height.toJSON(message.latest_height) : undefined);
    if (message.proof_specs) {
      obj.proof_specs = message.proof_specs.map(e => e ? ProofSpec.toJSON(e) : undefined);
    } else {
      obj.proof_specs = [];
    }
    if (message.upgrade_path) {
      obj.upgrade_path = message.upgrade_path.map(e => e);
    } else {
      obj.upgrade_path = [];
    }
    message.allow_update_after_expiry !== undefined && (obj.allow_update_after_expiry = message.allow_update_after_expiry);
    message.allow_update_after_misbehaviour !== undefined && (obj.allow_update_after_misbehaviour = message.allow_update_after_misbehaviour);
    return obj;
  },
  fromPartial(object: DeepPartial<ClientState>): ClientState {
    const message = createBaseClientState();
    message.chain_id = object.chain_id ?? "";
    message.trust_level = object.trust_level !== undefined && object.trust_level !== null ? Fraction.fromPartial(object.trust_level) : undefined;
    message.trusting_period = object.trusting_period !== undefined && object.trusting_period !== null ? Duration.fromPartial(object.trusting_period) : undefined;
    message.unbonding_period = object.unbonding_period !== undefined && object.unbonding_period !== null ? Duration.fromPartial(object.unbonding_period) : undefined;
    message.max_clock_drift = object.max_clock_drift !== undefined && object.max_clock_drift !== null ? Duration.fromPartial(object.max_clock_drift) : undefined;
    message.frozen_height = object.frozen_height !== undefined && object.frozen_height !== null ? Height.fromPartial(object.frozen_height) : undefined;
    message.latest_height = object.latest_height !== undefined && object.latest_height !== null ? Height.fromPartial(object.latest_height) : undefined;
    message.proof_specs = object.proof_specs?.map(e => ProofSpec.fromPartial(e)) || [];
    message.upgrade_path = object.upgrade_path?.map(e => e) || [];
    message.allow_update_after_expiry = object.allow_update_after_expiry ?? false;
    message.allow_update_after_misbehaviour = object.allow_update_after_misbehaviour ?? false;
    return message;
  },
  fromAmino(object: ClientStateAmino): ClientState {
    return {
      chain_id: object.chain_id,
      trust_level: object?.trust_level ? Fraction.fromAmino(object.trust_level) : undefined,
      trusting_period: object?.trusting_period ? Duration.fromAmino(object.trusting_period) : undefined,
      unbonding_period: object?.unbonding_period ? Duration.fromAmino(object.unbonding_period) : undefined,
      max_clock_drift: object?.max_clock_drift ? Duration.fromAmino(object.max_clock_drift) : undefined,
      frozen_height: object?.frozen_height ? Height.fromAmino(object.frozen_height) : undefined,
      latest_height: object?.latest_height ? Height.fromAmino(object.latest_height) : undefined,
      proof_specs: Array.isArray(object?.proof_specs) ? object.proof_specs.map((e: any) => ProofSpec.fromAmino(e)) : [],
      upgrade_path: Array.isArray(object?.upgrade_path) ? object.upgrade_path.map((e: any) => e) : [],
      allow_update_after_expiry: object.allow_update_after_expiry,
      allow_update_after_misbehaviour: object.allow_update_after_misbehaviour
    };
  },
  toAmino(message: ClientState): ClientStateAmino {
    const obj: any = {};
    obj.chain_id = message.chain_id;
    obj.trust_level = message.trust_level ? Fraction.toAmino(message.trust_level) : undefined;
    obj.trusting_period = message.trusting_period ? Duration.toAmino(message.trusting_period) : undefined;
    obj.unbonding_period = message.unbonding_period ? Duration.toAmino(message.unbonding_period) : undefined;
    obj.max_clock_drift = message.max_clock_drift ? Duration.toAmino(message.max_clock_drift) : undefined;
    obj.frozen_height = message.frozen_height ? Height.toAmino(message.frozen_height) : {};
    obj.latest_height = message.latest_height ? Height.toAmino(message.latest_height) : {};
    if (message.proof_specs) {
      obj.proof_specs = message.proof_specs.map(e => e ? ProofSpec.toAmino(e) : undefined);
    } else {
      obj.proof_specs = [];
    }
    if (message.upgrade_path) {
      obj.upgrade_path = message.upgrade_path.map(e => e);
    } else {
      obj.upgrade_path = [];
    }
    obj.allow_update_after_expiry = message.allow_update_after_expiry;
    obj.allow_update_after_misbehaviour = message.allow_update_after_misbehaviour;
    return obj;
  },
  fromAminoMsg(object: ClientStateAminoMsg): ClientState {
    return ClientState.fromAmino(object.value);
  },
  toAminoMsg(message: ClientState): ClientStateAminoMsg {
    return {
      type: "cosmos-sdk/ClientState",
      value: ClientState.toAmino(message)
    };
  },
  fromProtoMsg(message: ClientStateProtoMsg): ClientState {
    return ClientState.decode(message.value);
  },
  toProto(message: ClientState): Uint8Array {
    return ClientState.encode(message).finish();
  },
  toProtoMsg(message: ClientState): ClientStateProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.tendermint.v1.ClientState",
      value: ClientState.encode(message).finish()
    };
  }
};
function createBaseConsensusState(): ConsensusState {
  return {
    timestamp: new Date(),
    root: MerkleRoot.fromPartial({}),
    next_validators_hash: new Uint8Array()
  };
}
export const ConsensusState = {
  typeUrl: "/ibc.lightclients.tendermint.v1.ConsensusState",
  aminoType: "cosmos-sdk/ConsensusState",
  encode(message: ConsensusState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
    }
    if (message.root !== undefined) {
      MerkleRoot.encode(message.root, writer.uint32(18).fork()).ldelim();
    }
    if (message.next_validators_hash.length !== 0) {
      writer.uint32(26).bytes(message.next_validators_hash);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.root = MerkleRoot.decode(reader, reader.uint32());
          break;
        case 3:
          message.next_validators_hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsensusState {
    return {
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      root: isSet(object.root) ? MerkleRoot.fromJSON(object.root) : undefined,
      next_validators_hash: isSet(object.next_validators_hash) ? bytesFromBase64(object.next_validators_hash) : new Uint8Array()
    };
  },
  toJSON(message: ConsensusState): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    message.root !== undefined && (obj.root = message.root ? MerkleRoot.toJSON(message.root) : undefined);
    message.next_validators_hash !== undefined && (obj.next_validators_hash = base64FromBytes(message.next_validators_hash !== undefined ? message.next_validators_hash : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<ConsensusState>): ConsensusState {
    const message = createBaseConsensusState();
    message.timestamp = object.timestamp ?? undefined;
    message.root = object.root !== undefined && object.root !== null ? MerkleRoot.fromPartial(object.root) : undefined;
    message.next_validators_hash = object.next_validators_hash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ConsensusStateAmino): ConsensusState {
    return {
      timestamp: object.timestamp,
      root: object?.root ? MerkleRoot.fromAmino(object.root) : undefined,
      next_validators_hash: object.next_validators_hash
    };
  },
  toAmino(message: ConsensusState): ConsensusStateAmino {
    const obj: any = {};
    obj.timestamp = message.timestamp;
    obj.root = message.root ? MerkleRoot.toAmino(message.root) : undefined;
    obj.next_validators_hash = message.next_validators_hash;
    return obj;
  },
  fromAminoMsg(object: ConsensusStateAminoMsg): ConsensusState {
    return ConsensusState.fromAmino(object.value);
  },
  toAminoMsg(message: ConsensusState): ConsensusStateAminoMsg {
    return {
      type: "cosmos-sdk/ConsensusState",
      value: ConsensusState.toAmino(message)
    };
  },
  fromProtoMsg(message: ConsensusStateProtoMsg): ConsensusState {
    return ConsensusState.decode(message.value);
  },
  toProto(message: ConsensusState): Uint8Array {
    return ConsensusState.encode(message).finish();
  },
  toProtoMsg(message: ConsensusState): ConsensusStateProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.tendermint.v1.ConsensusState",
      value: ConsensusState.encode(message).finish()
    };
  }
};
function createBaseMisbehaviour(): Misbehaviour {
  return {
    client_id: "",
    header1: Header.fromPartial({}),
    header2: Header.fromPartial({})
  };
}
export const Misbehaviour = {
  typeUrl: "/ibc.lightclients.tendermint.v1.Misbehaviour",
  aminoType: "cosmos-sdk/Misbehaviour",
  encode(message: Misbehaviour, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    if (message.header1 !== undefined) {
      Header.encode(message.header1, writer.uint32(18).fork()).ldelim();
    }
    if (message.header2 !== undefined) {
      Header.encode(message.header2, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Misbehaviour {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMisbehaviour();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;
        case 2:
          message.header1 = Header.decode(reader, reader.uint32());
          break;
        case 3:
          message.header2 = Header.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Misbehaviour {
    return {
      client_id: isSet(object.client_id) ? String(object.client_id) : "",
      header1: isSet(object.header1) ? Header.fromJSON(object.header1) : undefined,
      header2: isSet(object.header2) ? Header.fromJSON(object.header2) : undefined
    };
  },
  toJSON(message: Misbehaviour): unknown {
    const obj: any = {};
    message.client_id !== undefined && (obj.client_id = message.client_id);
    message.header1 !== undefined && (obj.header1 = message.header1 ? Header.toJSON(message.header1) : undefined);
    message.header2 !== undefined && (obj.header2 = message.header2 ? Header.toJSON(message.header2) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Misbehaviour>): Misbehaviour {
    const message = createBaseMisbehaviour();
    message.client_id = object.client_id ?? "";
    message.header1 = object.header1 !== undefined && object.header1 !== null ? Header.fromPartial(object.header1) : undefined;
    message.header2 = object.header2 !== undefined && object.header2 !== null ? Header.fromPartial(object.header2) : undefined;
    return message;
  },
  fromAmino(object: MisbehaviourAmino): Misbehaviour {
    return {
      client_id: object.client_id,
      header_1: object?.header_1 ? Header.fromAmino(object.header_1) : undefined,
      header_2: object?.header_2 ? Header.fromAmino(object.header_2) : undefined
    };
  },
  toAmino(message: Misbehaviour): MisbehaviourAmino {
    const obj: any = {};
    obj.client_id = message.client_id;
    obj.header_1 = message.header_1 ? Header.toAmino(message.header_1) : undefined;
    obj.header_2 = message.header_2 ? Header.toAmino(message.header_2) : undefined;
    return obj;
  },
  fromAminoMsg(object: MisbehaviourAminoMsg): Misbehaviour {
    return Misbehaviour.fromAmino(object.value);
  },
  toAminoMsg(message: Misbehaviour): MisbehaviourAminoMsg {
    return {
      type: "cosmos-sdk/Misbehaviour",
      value: Misbehaviour.toAmino(message)
    };
  },
  fromProtoMsg(message: MisbehaviourProtoMsg): Misbehaviour {
    return Misbehaviour.decode(message.value);
  },
  toProto(message: Misbehaviour): Uint8Array {
    return Misbehaviour.encode(message).finish();
  },
  toProtoMsg(message: Misbehaviour): MisbehaviourProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.tendermint.v1.Misbehaviour",
      value: Misbehaviour.encode(message).finish()
    };
  }
};
function createBaseHeader(): Header {
  return {
    signed_header: SignedHeader.fromPartial({}),
    validator_set: ValidatorSet.fromPartial({}),
    trusted_height: Height.fromPartial({}),
    trusted_validators: ValidatorSet.fromPartial({})
  };
}
export const Header = {
  typeUrl: "/ibc.lightclients.tendermint.v1.Header",
  aminoType: "cosmos-sdk/Header",
  encode(message: Header, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signed_header !== undefined) {
      SignedHeader.encode(message.signed_header, writer.uint32(10).fork()).ldelim();
    }
    if (message.validator_set !== undefined) {
      ValidatorSet.encode(message.validator_set, writer.uint32(18).fork()).ldelim();
    }
    if (message.trusted_height !== undefined) {
      Height.encode(message.trusted_height, writer.uint32(26).fork()).ldelim();
    }
    if (message.trusted_validators !== undefined) {
      ValidatorSet.encode(message.trusted_validators, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Header {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signed_header = SignedHeader.decode(reader, reader.uint32());
          break;
        case 2:
          message.validator_set = ValidatorSet.decode(reader, reader.uint32());
          break;
        case 3:
          message.trusted_height = Height.decode(reader, reader.uint32());
          break;
        case 4:
          message.trusted_validators = ValidatorSet.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Header {
    return {
      signed_header: isSet(object.signed_header) ? SignedHeader.fromJSON(object.signed_header) : undefined,
      validator_set: isSet(object.validator_set) ? ValidatorSet.fromJSON(object.validator_set) : undefined,
      trusted_height: isSet(object.trusted_height) ? Height.fromJSON(object.trusted_height) : undefined,
      trusted_validators: isSet(object.trusted_validators) ? ValidatorSet.fromJSON(object.trusted_validators) : undefined
    };
  },
  toJSON(message: Header): unknown {
    const obj: any = {};
    message.signed_header !== undefined && (obj.signed_header = message.signed_header ? SignedHeader.toJSON(message.signed_header) : undefined);
    message.validator_set !== undefined && (obj.validator_set = message.validator_set ? ValidatorSet.toJSON(message.validator_set) : undefined);
    message.trusted_height !== undefined && (obj.trusted_height = message.trusted_height ? Height.toJSON(message.trusted_height) : undefined);
    message.trusted_validators !== undefined && (obj.trusted_validators = message.trusted_validators ? ValidatorSet.toJSON(message.trusted_validators) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Header>): Header {
    const message = createBaseHeader();
    message.signed_header = object.signed_header !== undefined && object.signed_header !== null ? SignedHeader.fromPartial(object.signed_header) : undefined;
    message.validator_set = object.validator_set !== undefined && object.validator_set !== null ? ValidatorSet.fromPartial(object.validator_set) : undefined;
    message.trusted_height = object.trusted_height !== undefined && object.trusted_height !== null ? Height.fromPartial(object.trusted_height) : undefined;
    message.trusted_validators = object.trusted_validators !== undefined && object.trusted_validators !== null ? ValidatorSet.fromPartial(object.trusted_validators) : undefined;
    return message;
  },
  fromAmino(object: HeaderAmino): Header {
    return {
      signed_header: object?.signed_header ? SignedHeader.fromAmino(object.signed_header) : undefined,
      validator_set: object?.validator_set ? ValidatorSet.fromAmino(object.validator_set) : undefined,
      trusted_height: object?.trusted_height ? Height.fromAmino(object.trusted_height) : undefined,
      trusted_validators: object?.trusted_validators ? ValidatorSet.fromAmino(object.trusted_validators) : undefined
    };
  },
  toAmino(message: Header): HeaderAmino {
    const obj: any = {};
    obj.signed_header = message.signed_header ? SignedHeader.toAmino(message.signed_header) : undefined;
    obj.validator_set = message.validator_set ? ValidatorSet.toAmino(message.validator_set) : undefined;
    obj.trusted_height = message.trusted_height ? Height.toAmino(message.trusted_height) : {};
    obj.trusted_validators = message.trusted_validators ? ValidatorSet.toAmino(message.trusted_validators) : undefined;
    return obj;
  },
  fromAminoMsg(object: HeaderAminoMsg): Header {
    return Header.fromAmino(object.value);
  },
  toAminoMsg(message: Header): HeaderAminoMsg {
    return {
      type: "cosmos-sdk/Header",
      value: Header.toAmino(message)
    };
  },
  fromProtoMsg(message: HeaderProtoMsg): Header {
    return Header.decode(message.value);
  },
  toProto(message: Header): Uint8Array {
    return Header.encode(message).finish();
  },
  toProtoMsg(message: Header): HeaderProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.tendermint.v1.Header",
      value: Header.encode(message).finish()
    };
  }
};
function createBaseFraction(): Fraction {
  return {
    numerator: Long.UZERO,
    denominator: Long.UZERO
  };
}
export const Fraction = {
  typeUrl: "/ibc.lightclients.tendermint.v1.Fraction",
  aminoType: "cosmos-sdk/Fraction",
  encode(message: Fraction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.numerator.isZero()) {
      writer.uint32(8).uint64(message.numerator);
    }
    if (!message.denominator.isZero()) {
      writer.uint32(16).uint64(message.denominator);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Fraction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFraction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numerator = (reader.uint64() as Long);
          break;
        case 2:
          message.denominator = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Fraction {
    return {
      numerator: isSet(object.numerator) ? Long.fromValue(object.numerator) : Long.UZERO,
      denominator: isSet(object.denominator) ? Long.fromValue(object.denominator) : Long.UZERO
    };
  },
  toJSON(message: Fraction): unknown {
    const obj: any = {};
    message.numerator !== undefined && (obj.numerator = (message.numerator || Long.UZERO).toString());
    message.denominator !== undefined && (obj.denominator = (message.denominator || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Fraction>): Fraction {
    const message = createBaseFraction();
    message.numerator = object.numerator !== undefined && object.numerator !== null ? Long.fromValue(object.numerator) : Long.UZERO;
    message.denominator = object.denominator !== undefined && object.denominator !== null ? Long.fromValue(object.denominator) : Long.UZERO;
    return message;
  },
  fromAmino(object: FractionAmino): Fraction {
    return {
      numerator: Long.fromString(object.numerator),
      denominator: Long.fromString(object.denominator)
    };
  },
  toAmino(message: Fraction): FractionAmino {
    const obj: any = {};
    obj.numerator = message.numerator ? message.numerator.toString() : undefined;
    obj.denominator = message.denominator ? message.denominator.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: FractionAminoMsg): Fraction {
    return Fraction.fromAmino(object.value);
  },
  toAminoMsg(message: Fraction): FractionAminoMsg {
    return {
      type: "cosmos-sdk/Fraction",
      value: Fraction.toAmino(message)
    };
  },
  fromProtoMsg(message: FractionProtoMsg): Fraction {
    return Fraction.decode(message.value);
  },
  toProto(message: Fraction): Uint8Array {
    return Fraction.encode(message).finish();
  },
  toProtoMsg(message: Fraction): FractionProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.tendermint.v1.Fraction",
      value: Fraction.encode(message).finish()
    };
  }
};