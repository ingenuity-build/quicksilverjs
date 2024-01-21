import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BondStatus, Description, DescriptionAmino, DescriptionSDKType, Commission, CommissionAmino, CommissionSDKType, bondStatusFromJSON, bondStatusToJSON } from "../../../cosmos/staking/v1beta1/staking";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Long, toTimestamp, fromTimestamp, isSet, fromJsonTimestamp, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { toBase64, fromBase64 } from "@cosmjs/encoding";
import { encodeBech32Pubkey, decodeBech32Pubkey } from "@cosmjs/amino";
/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */
export interface Validator {
  /**
   * operator_address defines the address of the validator's operator; bech
   * encoded in JSON.
   */
  operatorAddress: string;
  /**
   * consensus_pubkey is the consensus public key of the validator, as a
   * Protobuf Any.
   */
  consensusPubkey: Any | undefined;
  /**
   * jailed defined whether the validator has been jailed from bonded status or
   * not.
   */
  jailed: boolean;
  /** status is the validator status (bonded/unbonding/unbonded). */
  status: BondStatus;
  /** tokens define the delegated tokens (incl. self-delegation). */
  tokens: string;
  /** delegator_shares defines total shares issued to a validator's delegators. */
  delegatorShares: string;
  /** description defines the description terms for the validator. */
  description: Description;
  /**
   * unbonding_height defines, if unbonding, the height at which this validator
   * has begun unbonding.
   */
  unbondingHeight: Long;
  /**
   * unbonding_time defines, if unbonding, the min time for the validator to
   * complete unbonding.
   */
  unbondingTime: Date;
  /** commission defines the commission parameters. */
  commission: Commission;
  /**
   * Deprecated: This field has been deprecated with LSM in favor of the
   * validator bond
   */
  /** @deprecated */
  minSelfDelegation: string;
  /**
   * strictly positive if this validator's unbonding has been stopped by
   * external modules
   */
  unbondingOnHoldRefCount: Long;
  /**
   * list of unbonding ids, each uniquely identifing an unbonding of this
   * validator
   */
  unbondingIds: Long[];
  /** Number of shares self bonded from the validator */
  validatorBondShares: string;
  /** Number of shares either tokenized or owned by a liquid staking provider */
  liquidShares: string;
}
export interface ValidatorProtoMsg {
  typeUrl: "/cosmos.lsmstaking.v1beta1.Validator";
  value: Uint8Array;
}
export type ValidatorEncoded = Omit<Validator, "consensusPubkey"> & {
  /**
   * consensus_pubkey is the consensus public key of the validator, as a
   * Protobuf Any.
   */
  consensusPubkey?: AnyProtoMsg | undefined;
};
/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */
export interface ValidatorAmino {
  /**
   * operator_address defines the address of the validator's operator; bech
   * encoded in JSON.
   */
  operator_address: string;
  /**
   * consensus_pubkey is the consensus public key of the validator, as a
   * Protobuf Any.
   */
  consensus_pubkey?: AnyAmino;
  /**
   * jailed defined whether the validator has been jailed from bonded status or
   * not.
   */
  jailed: boolean;
  /** status is the validator status (bonded/unbonding/unbonded). */
  status: BondStatus;
  /** tokens define the delegated tokens (incl. self-delegation). */
  tokens: string;
  /** delegator_shares defines total shares issued to a validator's delegators. */
  delegator_shares: string;
  /** description defines the description terms for the validator. */
  description?: DescriptionAmino;
  /**
   * unbonding_height defines, if unbonding, the height at which this validator
   * has begun unbonding.
   */
  unbonding_height: string;
  /**
   * unbonding_time defines, if unbonding, the min time for the validator to
   * complete unbonding.
   */
  unbonding_time?: Date;
  /** commission defines the commission parameters. */
  commission?: CommissionAmino;
  /**
   * Deprecated: This field has been deprecated with LSM in favor of the
   * validator bond
   */
  /** @deprecated */
  min_self_delegation: string;
  /**
   * strictly positive if this validator's unbonding has been stopped by
   * external modules
   */
  unbonding_on_hold_ref_count: string;
  /**
   * list of unbonding ids, each uniquely identifing an unbonding of this
   * validator
   */
  unbonding_ids: string[];
  /** Number of shares self bonded from the validator */
  validator_bond_shares: string;
  /** Number of shares either tokenized or owned by a liquid staking provider */
  liquid_shares: string;
}
export interface ValidatorAminoMsg {
  type: "cosmos-sdk/Validator";
  value: ValidatorAmino;
}
/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */
export interface ValidatorSDKType {
  operator_address: string;
  consensus_pubkey: AnySDKType | undefined;
  jailed: boolean;
  status: BondStatus;
  tokens: string;
  delegator_shares: string;
  description: DescriptionSDKType;
  unbonding_height: Long;
  unbonding_time: Date;
  commission: CommissionSDKType;
  /** @deprecated */
  min_self_delegation: string;
  unbonding_on_hold_ref_count: Long;
  unbonding_ids: Long[];
  validator_bond_shares: string;
  liquid_shares: string;
}
export interface QueryValidatorsResponse {
  /** validators contains all the queried validators. */
  validators: Validator[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
export interface QueryValidatorsResponseProtoMsg {
  typeUrl: "/cosmos.lsmstaking.v1beta1.QueryValidatorsResponse";
  value: Uint8Array;
}
export interface QueryValidatorsResponseAmino {
  /** validators contains all the queried validators. */
  validators: ValidatorAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryValidatorsResponseAminoMsg {
  type: "cosmos-sdk/QueryValidatorsResponse";
  value: QueryValidatorsResponseAmino;
}
export interface QueryValidatorsResponseSDKType {
  validators: ValidatorSDKType[];
  pagination: PageResponseSDKType;
}
function createBaseValidator(): Validator {
  return {
    operatorAddress: "",
    consensusPubkey: Any.fromPartial({}),
    jailed: false,
    status: 0,
    tokens: "",
    delegatorShares: "",
    description: Description.fromPartial({}),
    unbondingHeight: Long.ZERO,
    unbondingTime: new Date(),
    commission: Commission.fromPartial({}),
    minSelfDelegation: "",
    unbondingOnHoldRefCount: Long.ZERO,
    unbondingIds: [],
    validatorBondShares: "",
    liquidShares: ""
  };
}
export const Validator = {
  typeUrl: "/cosmos.lsmstaking.v1beta1.Validator",
  aminoType: "cosmos-sdk/Validator",
  encode(message: Validator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.consensusPubkey !== undefined) {
      Any.encode((message.consensusPubkey as Any), writer.uint32(18).fork()).ldelim();
    }
    if (message.jailed === true) {
      writer.uint32(24).bool(message.jailed);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.tokens !== "") {
      writer.uint32(42).string(message.tokens);
    }
    if (message.delegatorShares !== "") {
      writer.uint32(50).string(message.delegatorShares);
    }
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(58).fork()).ldelim();
    }
    if (!message.unbondingHeight.isZero()) {
      writer.uint32(64).int64(message.unbondingHeight);
    }
    if (message.unbondingTime !== undefined) {
      Timestamp.encode(toTimestamp(message.unbondingTime), writer.uint32(74).fork()).ldelim();
    }
    if (message.commission !== undefined) {
      Commission.encode(message.commission, writer.uint32(82).fork()).ldelim();
    }
    if (message.minSelfDelegation !== "") {
      writer.uint32(90).string(message.minSelfDelegation);
    }
    if (!message.unbondingOnHoldRefCount.isZero()) {
      writer.uint32(96).int64(message.unbondingOnHoldRefCount);
    }
    writer.uint32(106).fork();
    for (const v of message.unbondingIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.validatorBondShares !== "") {
      writer.uint32(114).string(message.validatorBondShares);
    }
    if (message.liquidShares !== "") {
      writer.uint32(122).string(message.liquidShares);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Validator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 2:
          message.consensusPubkey = (Cosmos_cryptoPubKey_InterfaceDecoder(reader) as Any);
          break;
        case 3:
          message.jailed = reader.bool();
          break;
        case 4:
          message.status = (reader.int32() as any);
          break;
        case 5:
          message.tokens = reader.string();
          break;
        case 6:
          message.delegatorShares = reader.string();
          break;
        case 7:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 8:
          message.unbondingHeight = (reader.int64() as Long);
          break;
        case 9:
          message.unbondingTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 10:
          message.commission = Commission.decode(reader, reader.uint32());
          break;
        case 11:
          message.minSelfDelegation = reader.string();
          break;
        case 12:
          message.unbondingOnHoldRefCount = (reader.int64() as Long);
          break;
        case 13:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unbondingIds.push((reader.uint64() as Long));
            }
          } else {
            message.unbondingIds.push((reader.uint64() as Long));
          }
          break;
        case 14:
          message.validatorBondShares = reader.string();
          break;
        case 15:
          message.liquidShares = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Validator {
    return {
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      consensusPubkey: isSet(object.consensusPubkey) ? Any.fromJSON(object.consensusPubkey) : undefined,
      jailed: isSet(object.jailed) ? Boolean(object.jailed) : false,
      status: isSet(object.status) ? bondStatusFromJSON(object.status) : -1,
      tokens: isSet(object.tokens) ? String(object.tokens) : "",
      delegatorShares: isSet(object.delegatorShares) ? String(object.delegatorShares) : "",
      description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
      unbondingHeight: isSet(object.unbondingHeight) ? Long.fromValue(object.unbondingHeight) : Long.ZERO,
      unbondingTime: isSet(object.unbondingTime) ? fromJsonTimestamp(object.unbondingTime) : undefined,
      commission: isSet(object.commission) ? Commission.fromJSON(object.commission) : undefined,
      minSelfDelegation: isSet(object.minSelfDelegation) ? String(object.minSelfDelegation) : "",
      unbondingOnHoldRefCount: isSet(object.unbondingOnHoldRefCount) ? Long.fromValue(object.unbondingOnHoldRefCount) : Long.ZERO,
      unbondingIds: Array.isArray(object?.unbondingIds) ? object.unbondingIds.map((e: any) => Long.fromValue(e)) : [],
      validatorBondShares: isSet(object.validatorBondShares) ? String(object.validatorBondShares) : "",
      liquidShares: isSet(object.liquidShares) ? String(object.liquidShares) : ""
    };
  },
  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    message.consensusPubkey !== undefined && (obj.consensusPubkey = message.consensusPubkey ? Any.toJSON(message.consensusPubkey) : undefined);
    message.jailed !== undefined && (obj.jailed = message.jailed);
    message.status !== undefined && (obj.status = bondStatusToJSON(message.status));
    message.tokens !== undefined && (obj.tokens = message.tokens);
    message.delegatorShares !== undefined && (obj.delegatorShares = message.delegatorShares);
    message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    message.unbondingHeight !== undefined && (obj.unbondingHeight = (message.unbondingHeight || Long.ZERO).toString());
    message.unbondingTime !== undefined && (obj.unbondingTime = message.unbondingTime.toISOString());
    message.commission !== undefined && (obj.commission = message.commission ? Commission.toJSON(message.commission) : undefined);
    message.minSelfDelegation !== undefined && (obj.minSelfDelegation = message.minSelfDelegation);
    message.unbondingOnHoldRefCount !== undefined && (obj.unbondingOnHoldRefCount = (message.unbondingOnHoldRefCount || Long.ZERO).toString());
    if (message.unbondingIds) {
      obj.unbondingIds = message.unbondingIds.map(e => (e || Long.UZERO).toString());
    } else {
      obj.unbondingIds = [];
    }
    message.validatorBondShares !== undefined && (obj.validatorBondShares = message.validatorBondShares);
    message.liquidShares !== undefined && (obj.liquidShares = message.liquidShares);
    return obj;
  },
  fromPartial(object: DeepPartial<Validator>): Validator {
    const message = createBaseValidator();
    message.operatorAddress = object.operatorAddress ?? "";
    message.consensusPubkey = object.consensusPubkey !== undefined && object.consensusPubkey !== null ? Any.fromPartial(object.consensusPubkey) : undefined;
    message.jailed = object.jailed ?? false;
    message.status = object.status ?? 0;
    message.tokens = object.tokens ?? "";
    message.delegatorShares = object.delegatorShares ?? "";
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    message.unbondingHeight = object.unbondingHeight !== undefined && object.unbondingHeight !== null ? Long.fromValue(object.unbondingHeight) : Long.ZERO;
    message.unbondingTime = object.unbondingTime ?? undefined;
    message.commission = object.commission !== undefined && object.commission !== null ? Commission.fromPartial(object.commission) : undefined;
    message.minSelfDelegation = object.minSelfDelegation ?? "";
    message.unbondingOnHoldRefCount = object.unbondingOnHoldRefCount !== undefined && object.unbondingOnHoldRefCount !== null ? Long.fromValue(object.unbondingOnHoldRefCount) : Long.ZERO;
    message.unbondingIds = object.unbondingIds?.map(e => Long.fromValue(e)) || [];
    message.validatorBondShares = object.validatorBondShares ?? "";
    message.liquidShares = object.liquidShares ?? "";
    return message;
  },
  fromAmino(object: ValidatorAmino): Validator {
    return {
      operatorAddress: object.operator_address,
      consensusPubkey: encodeBech32Pubkey({
        type: "tendermint/PubKeySecp256k1",
        value: toBase64(object.consensus_pubkey.value)
      }, "cosmos"),
      jailed: object.jailed,
      status: isSet(object.status) ? bondStatusFromJSON(object.status) : -1,
      tokens: object.tokens,
      delegatorShares: object.delegator_shares,
      description: object?.description ? Description.fromAmino(object.description) : undefined,
      unbondingHeight: Long.fromString(object.unbonding_height),
      unbondingTime: object.unbonding_time,
      commission: object?.commission ? Commission.fromAmino(object.commission) : undefined,
      minSelfDelegation: object.min_self_delegation,
      unbondingOnHoldRefCount: Long.fromString(object.unbonding_on_hold_ref_count),
      unbondingIds: Array.isArray(object?.unbonding_ids) ? object.unbonding_ids.map((e: any) => e) : [],
      validatorBondShares: object.validator_bond_shares,
      liquidShares: object.liquid_shares
    };
  },
  toAmino(message: Validator): ValidatorAmino {
    const obj: any = {};
    obj.operator_address = message.operatorAddress;
    obj.consensus_pubkey = message.consensusPubkey ? {
      typeUrl: "/cosmos.crypto.secp256k1.PubKey",
      value: fromBase64(decodeBech32Pubkey(message.consensusPubkey).value)
    } : undefined;
    obj.jailed = message.jailed;
    obj.status = message.status;
    obj.tokens = message.tokens;
    obj.delegator_shares = message.delegatorShares;
    obj.description = message.description ? Description.toAmino(message.description) : undefined;
    obj.unbonding_height = message.unbondingHeight ? message.unbondingHeight.toString() : undefined;
    obj.unbonding_time = message.unbondingTime;
    obj.commission = message.commission ? Commission.toAmino(message.commission) : undefined;
    obj.min_self_delegation = message.minSelfDelegation;
    obj.unbonding_on_hold_ref_count = message.unbondingOnHoldRefCount ? message.unbondingOnHoldRefCount.toString() : undefined;
    if (message.unbondingIds) {
      obj.unbonding_ids = message.unbondingIds.map(e => e);
    } else {
      obj.unbonding_ids = [];
    }
    obj.validator_bond_shares = message.validatorBondShares;
    obj.liquid_shares = message.liquidShares;
    return obj;
  },
  fromAminoMsg(object: ValidatorAminoMsg): Validator {
    return Validator.fromAmino(object.value);
  },
  toAminoMsg(message: Validator): ValidatorAminoMsg {
    return {
      type: "cosmos-sdk/Validator",
      value: Validator.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorProtoMsg): Validator {
    return Validator.decode(message.value);
  },
  toProto(message: Validator): Uint8Array {
    return Validator.encode(message).finish();
  },
  toProtoMsg(message: Validator): ValidatorProtoMsg {
    return {
      typeUrl: "/cosmos.lsmstaking.v1beta1.Validator",
      value: Validator.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorsResponse(): QueryValidatorsResponse {
  return {
    validators: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryValidatorsResponse = {
  typeUrl: "/cosmos.lsmstaking.v1beta1.QueryValidatorsResponse",
  aminoType: "cosmos-sdk/QueryValidatorsResponse",
  encode(message: QueryValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryValidatorsResponse): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryValidatorsResponse>): QueryValidatorsResponse {
    const message = createBaseQueryValidatorsResponse();
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryValidatorsResponseAmino): QueryValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryValidatorsResponse): QueryValidatorsResponseAmino {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.validators = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorsResponseAminoMsg): QueryValidatorsResponse {
    return QueryValidatorsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorsResponse): QueryValidatorsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorsResponse",
      value: QueryValidatorsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryValidatorsResponseProtoMsg): QueryValidatorsResponse {
    return QueryValidatorsResponse.decode(message.value);
  },
  toProto(message: QueryValidatorsResponse): Uint8Array {
    return QueryValidatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorsResponse): QueryValidatorsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.lsmstaking.v1beta1.QueryValidatorsResponse",
      value: QueryValidatorsResponse.encode(message).finish()
    };
  }
};
export const Cosmos_cryptoPubKey_InterfaceDecoder = (input: _m0.Reader | Uint8Array): Any => {
  const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
export const Cosmos_cryptoPubKey_FromAmino = (content: AnyAmino) => {
  return encodeBech32Pubkey({
    type: "tendermint/PubKeySecp256k1",
    value: toBase64(content.value)
  }, "cosmos");
};
export const Cosmos_cryptoPubKey_ToAmino = (content: Any) => {
  return {
    typeUrl: "/cosmos.crypto.secp256k1.PubKey",
    value: fromBase64(decodeBech32Pubkey(content).value)
  };
};