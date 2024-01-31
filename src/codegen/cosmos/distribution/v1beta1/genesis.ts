import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../base/v1beta1/coin";
import { ValidatorAccumulatedCommission, ValidatorAccumulatedCommissionAmino, ValidatorAccumulatedCommissionSDKType, ValidatorHistoricalRewards, ValidatorHistoricalRewardsAmino, ValidatorHistoricalRewardsSDKType, ValidatorCurrentRewards, ValidatorCurrentRewardsAmino, ValidatorCurrentRewardsSDKType, DelegatorStartingInfo, DelegatorStartingInfoAmino, DelegatorStartingInfoSDKType, ValidatorSlashEvent, ValidatorSlashEventAmino, ValidatorSlashEventSDKType, Params, ParamsAmino, ParamsSDKType, FeePool, FeePoolAmino, FeePoolSDKType } from "./distribution";
import { Long, isSet, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * DelegatorWithdrawInfo is the address for where distributions rewards are
 * withdrawn to by default this struct is only used at genesis to feed in
 * default withdraw addresses.
 */
export interface DelegatorWithdrawInfo {
  /** delegator_address is the address of the delegator. */
  delegator_address: string;
  /** withdraw_address is the address to withdraw the delegation rewards to. */
  withdraw_address: string;
}
export interface DelegatorWithdrawInfoProtoMsg {
  type_url: "/cosmos.distribution.v1beta1.DelegatorWithdrawInfo";
  value: Uint8Array;
}
/**
 * DelegatorWithdrawInfo is the address for where distributions rewards are
 * withdrawn to by default this struct is only used at genesis to feed in
 * default withdraw addresses.
 */
export interface DelegatorWithdrawInfoAmino {
  /** delegator_address is the address of the delegator. */
  delegator_address: string;
  /** withdraw_address is the address to withdraw the delegation rewards to. */
  withdraw_address: string;
}
export interface DelegatorWithdrawInfoAminoMsg {
  type: "cosmos-sdk/DelegatorWithdrawInfo";
  value: DelegatorWithdrawInfoAmino;
}
/**
 * DelegatorWithdrawInfo is the address for where distributions rewards are
 * withdrawn to by default this struct is only used at genesis to feed in
 * default withdraw addresses.
 */
export interface DelegatorWithdrawInfoSDKType {
  delegator_address: string;
  withdraw_address: string;
}
/** ValidatorOutstandingRewardsRecord is used for import/export via genesis json. */
export interface ValidatorOutstandingRewardsRecord {
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** outstanding_rewards represents the oustanding rewards of a validator. */
  outstanding_rewards: DecCoin[];
}
export interface ValidatorOutstandingRewardsRecordProtoMsg {
  type_url: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord";
  value: Uint8Array;
}
/** ValidatorOutstandingRewardsRecord is used for import/export via genesis json. */
export interface ValidatorOutstandingRewardsRecordAmino {
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** outstanding_rewards represents the oustanding rewards of a validator. */
  outstanding_rewards: DecCoinAmino[];
}
export interface ValidatorOutstandingRewardsRecordAminoMsg {
  type: "cosmos-sdk/ValidatorOutstandingRewardsRecord";
  value: ValidatorOutstandingRewardsRecordAmino;
}
/** ValidatorOutstandingRewardsRecord is used for import/export via genesis json. */
export interface ValidatorOutstandingRewardsRecordSDKType {
  validator_address: string;
  outstanding_rewards: DecCoinSDKType[];
}
/**
 * ValidatorAccumulatedCommissionRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorAccumulatedCommissionRecord {
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** accumulated is the accumulated commission of a validator. */
  accumulated: ValidatorAccumulatedCommission;
}
export interface ValidatorAccumulatedCommissionRecordProtoMsg {
  type_url: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord";
  value: Uint8Array;
}
/**
 * ValidatorAccumulatedCommissionRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorAccumulatedCommissionRecordAmino {
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** accumulated is the accumulated commission of a validator. */
  accumulated?: ValidatorAccumulatedCommissionAmino;
}
export interface ValidatorAccumulatedCommissionRecordAminoMsg {
  type: "cosmos-sdk/ValidatorAccumulatedCommissionRecord";
  value: ValidatorAccumulatedCommissionRecordAmino;
}
/**
 * ValidatorAccumulatedCommissionRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorAccumulatedCommissionRecordSDKType {
  validator_address: string;
  accumulated: ValidatorAccumulatedCommissionSDKType;
}
/**
 * ValidatorHistoricalRewardsRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorHistoricalRewardsRecord {
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** period defines the period the historical rewards apply to. */
  period: Long;
  /** rewards defines the historical rewards of a validator. */
  rewards: ValidatorHistoricalRewards;
}
export interface ValidatorHistoricalRewardsRecordProtoMsg {
  type_url: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord";
  value: Uint8Array;
}
/**
 * ValidatorHistoricalRewardsRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorHistoricalRewardsRecordAmino {
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** period defines the period the historical rewards apply to. */
  period: string;
  /** rewards defines the historical rewards of a validator. */
  rewards?: ValidatorHistoricalRewardsAmino;
}
export interface ValidatorHistoricalRewardsRecordAminoMsg {
  type: "cosmos-sdk/ValidatorHistoricalRewardsRecord";
  value: ValidatorHistoricalRewardsRecordAmino;
}
/**
 * ValidatorHistoricalRewardsRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorHistoricalRewardsRecordSDKType {
  validator_address: string;
  period: Long;
  rewards: ValidatorHistoricalRewardsSDKType;
}
/** ValidatorCurrentRewardsRecord is used for import / export via genesis json. */
export interface ValidatorCurrentRewardsRecord {
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** rewards defines the current rewards of a validator. */
  rewards: ValidatorCurrentRewards;
}
export interface ValidatorCurrentRewardsRecordProtoMsg {
  type_url: "/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord";
  value: Uint8Array;
}
/** ValidatorCurrentRewardsRecord is used for import / export via genesis json. */
export interface ValidatorCurrentRewardsRecordAmino {
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** rewards defines the current rewards of a validator. */
  rewards?: ValidatorCurrentRewardsAmino;
}
export interface ValidatorCurrentRewardsRecordAminoMsg {
  type: "cosmos-sdk/ValidatorCurrentRewardsRecord";
  value: ValidatorCurrentRewardsRecordAmino;
}
/** ValidatorCurrentRewardsRecord is used for import / export via genesis json. */
export interface ValidatorCurrentRewardsRecordSDKType {
  validator_address: string;
  rewards: ValidatorCurrentRewardsSDKType;
}
/** DelegatorStartingInfoRecord used for import / export via genesis json. */
export interface DelegatorStartingInfoRecord {
  /** delegator_address is the address of the delegator. */
  delegator_address: string;
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** starting_info defines the starting info of a delegator. */
  starting_info: DelegatorStartingInfo;
}
export interface DelegatorStartingInfoRecordProtoMsg {
  type_url: "/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord";
  value: Uint8Array;
}
/** DelegatorStartingInfoRecord used for import / export via genesis json. */
export interface DelegatorStartingInfoRecordAmino {
  /** delegator_address is the address of the delegator. */
  delegator_address: string;
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** starting_info defines the starting info of a delegator. */
  starting_info?: DelegatorStartingInfoAmino;
}
export interface DelegatorStartingInfoRecordAminoMsg {
  type: "cosmos-sdk/DelegatorStartingInfoRecord";
  value: DelegatorStartingInfoRecordAmino;
}
/** DelegatorStartingInfoRecord used for import / export via genesis json. */
export interface DelegatorStartingInfoRecordSDKType {
  delegator_address: string;
  validator_address: string;
  starting_info: DelegatorStartingInfoSDKType;
}
/** ValidatorSlashEventRecord is used for import / export via genesis json. */
export interface ValidatorSlashEventRecord {
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** height defines the block height at which the slash event occured. */
  height: Long;
  /** period is the period of the slash event. */
  period: Long;
  /** validator_slash_event describes the slash event. */
  validator_slash_event: ValidatorSlashEvent;
}
export interface ValidatorSlashEventRecordProtoMsg {
  type_url: "/cosmos.distribution.v1beta1.ValidatorSlashEventRecord";
  value: Uint8Array;
}
/** ValidatorSlashEventRecord is used for import / export via genesis json. */
export interface ValidatorSlashEventRecordAmino {
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** height defines the block height at which the slash event occured. */
  height: string;
  /** period is the period of the slash event. */
  period: string;
  /** validator_slash_event describes the slash event. */
  validator_slash_event?: ValidatorSlashEventAmino;
}
export interface ValidatorSlashEventRecordAminoMsg {
  type: "cosmos-sdk/ValidatorSlashEventRecord";
  value: ValidatorSlashEventRecordAmino;
}
/** ValidatorSlashEventRecord is used for import / export via genesis json. */
export interface ValidatorSlashEventRecordSDKType {
  validator_address: string;
  height: Long;
  period: Long;
  validator_slash_event: ValidatorSlashEventSDKType;
}
/** GenesisState defines the distribution module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params: Params;
  /** fee_pool defines the fee pool at genesis. */
  fee_pool: FeePool;
  /** fee_pool defines the delegator withdraw infos at genesis. */
  delegator_withdraw_infos: DelegatorWithdrawInfo[];
  /** fee_pool defines the previous proposer at genesis. */
  previous_proposer: string;
  /** fee_pool defines the outstanding rewards of all validators at genesis. */
  outstanding_rewards: ValidatorOutstandingRewardsRecord[];
  /** fee_pool defines the accumulated commisions of all validators at genesis. */
  validator_accumulated_commissions: ValidatorAccumulatedCommissionRecord[];
  /** fee_pool defines the historical rewards of all validators at genesis. */
  validator_historical_rewards: ValidatorHistoricalRewardsRecord[];
  /** fee_pool defines the current rewards of all validators at genesis. */
  validator_current_rewards: ValidatorCurrentRewardsRecord[];
  /** fee_pool defines the delegator starting infos at genesis. */
  delegator_starting_infos: DelegatorStartingInfoRecord[];
  /** fee_pool defines the validator slash events at genesis. */
  validator_slash_events: ValidatorSlashEventRecord[];
}
export interface GenesisStateProtoMsg {
  type_url: "/cosmos.distribution.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the distribution module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the paramaters of the module. */
  params?: ParamsAmino;
  /** fee_pool defines the fee pool at genesis. */
  fee_pool?: FeePoolAmino;
  /** fee_pool defines the delegator withdraw infos at genesis. */
  delegator_withdraw_infos: DelegatorWithdrawInfoAmino[];
  /** fee_pool defines the previous proposer at genesis. */
  previous_proposer: string;
  /** fee_pool defines the outstanding rewards of all validators at genesis. */
  outstanding_rewards: ValidatorOutstandingRewardsRecordAmino[];
  /** fee_pool defines the accumulated commisions of all validators at genesis. */
  validator_accumulated_commissions: ValidatorAccumulatedCommissionRecordAmino[];
  /** fee_pool defines the historical rewards of all validators at genesis. */
  validator_historical_rewards: ValidatorHistoricalRewardsRecordAmino[];
  /** fee_pool defines the current rewards of all validators at genesis. */
  validator_current_rewards: ValidatorCurrentRewardsRecordAmino[];
  /** fee_pool defines the delegator starting infos at genesis. */
  delegator_starting_infos: DelegatorStartingInfoRecordAmino[];
  /** fee_pool defines the validator slash events at genesis. */
  validator_slash_events: ValidatorSlashEventRecordAmino[];
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the distribution module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  fee_pool: FeePoolSDKType;
  delegator_withdraw_infos: DelegatorWithdrawInfoSDKType[];
  previous_proposer: string;
  outstanding_rewards: ValidatorOutstandingRewardsRecordSDKType[];
  validator_accumulated_commissions: ValidatorAccumulatedCommissionRecordSDKType[];
  validator_historical_rewards: ValidatorHistoricalRewardsRecordSDKType[];
  validator_current_rewards: ValidatorCurrentRewardsRecordSDKType[];
  delegator_starting_infos: DelegatorStartingInfoRecordSDKType[];
  validator_slash_events: ValidatorSlashEventRecordSDKType[];
}
function createBaseDelegatorWithdrawInfo(): DelegatorWithdrawInfo {
  return {
    delegator_address: "",
    withdraw_address: ""
  };
}
export const DelegatorWithdrawInfo = {
  typeUrl: "/cosmos.distribution.v1beta1.DelegatorWithdrawInfo",
  aminoType: "cosmos-sdk/DelegatorWithdrawInfo",
  encode(message: DelegatorWithdrawInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.withdraw_address !== "") {
      writer.uint32(18).string(message.withdraw_address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorWithdrawInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorWithdrawInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.withdraw_address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegatorWithdrawInfo {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      withdraw_address: isSet(object.withdraw_address) ? String(object.withdraw_address) : ""
    };
  },
  toJSON(message: DelegatorWithdrawInfo): unknown {
    const obj: any = {};
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    message.withdraw_address !== undefined && (obj.withdraw_address = message.withdraw_address);
    return obj;
  },
  fromPartial(object: DeepPartial<DelegatorWithdrawInfo>): DelegatorWithdrawInfo {
    const message = createBaseDelegatorWithdrawInfo();
    message.delegator_address = object.delegator_address ?? "";
    message.withdraw_address = object.withdraw_address ?? "";
    return message;
  },
  fromAmino(object: DelegatorWithdrawInfoAmino): DelegatorWithdrawInfo {
    return {
      delegator_address: object.delegator_address,
      withdraw_address: object.withdraw_address
    };
  },
  toAmino(message: DelegatorWithdrawInfo): DelegatorWithdrawInfoAmino {
    const obj: any = {};
    obj.delegator_address = message.delegator_address;
    obj.withdraw_address = message.withdraw_address;
    return obj;
  },
  fromAminoMsg(object: DelegatorWithdrawInfoAminoMsg): DelegatorWithdrawInfo {
    return DelegatorWithdrawInfo.fromAmino(object.value);
  },
  toAminoMsg(message: DelegatorWithdrawInfo): DelegatorWithdrawInfoAminoMsg {
    return {
      type: "cosmos-sdk/DelegatorWithdrawInfo",
      value: DelegatorWithdrawInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: DelegatorWithdrawInfoProtoMsg): DelegatorWithdrawInfo {
    return DelegatorWithdrawInfo.decode(message.value);
  },
  toProto(message: DelegatorWithdrawInfo): Uint8Array {
    return DelegatorWithdrawInfo.encode(message).finish();
  },
  toProtoMsg(message: DelegatorWithdrawInfo): DelegatorWithdrawInfoProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.DelegatorWithdrawInfo",
      value: DelegatorWithdrawInfo.encode(message).finish()
    };
  }
};
function createBaseValidatorOutstandingRewardsRecord(): ValidatorOutstandingRewardsRecord {
  return {
    validator_address: "",
    outstanding_rewards: []
  };
}
export const ValidatorOutstandingRewardsRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord",
  aminoType: "cosmos-sdk/ValidatorOutstandingRewardsRecord",
  encode(message: ValidatorOutstandingRewardsRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }
    for (const v of message.outstanding_rewards) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorOutstandingRewardsRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorOutstandingRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_address = reader.string();
          break;
        case 2:
          message.outstanding_rewards.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorOutstandingRewardsRecord {
    return {
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      outstanding_rewards: Array.isArray(object?.outstanding_rewards) ? object.outstanding_rewards.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  toJSON(message: ValidatorOutstandingRewardsRecord): unknown {
    const obj: any = {};
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    if (message.outstanding_rewards) {
      obj.outstanding_rewards = message.outstanding_rewards.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.outstanding_rewards = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorOutstandingRewardsRecord>): ValidatorOutstandingRewardsRecord {
    const message = createBaseValidatorOutstandingRewardsRecord();
    message.validator_address = object.validator_address ?? "";
    message.outstanding_rewards = object.outstanding_rewards?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ValidatorOutstandingRewardsRecordAmino): ValidatorOutstandingRewardsRecord {
    return {
      validator_address: object.validator_address,
      outstanding_rewards: Array.isArray(object?.outstanding_rewards) ? object.outstanding_rewards.map((e: any) => DecCoin.fromAmino(e)) : []
    };
  },
  toAmino(message: ValidatorOutstandingRewardsRecord): ValidatorOutstandingRewardsRecordAmino {
    const obj: any = {};
    obj.validator_address = message.validator_address;
    if (message.outstanding_rewards) {
      obj.outstanding_rewards = message.outstanding_rewards.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.outstanding_rewards = [];
    }
    return obj;
  },
  fromAminoMsg(object: ValidatorOutstandingRewardsRecordAminoMsg): ValidatorOutstandingRewardsRecord {
    return ValidatorOutstandingRewardsRecord.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorOutstandingRewardsRecord): ValidatorOutstandingRewardsRecordAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorOutstandingRewardsRecord",
      value: ValidatorOutstandingRewardsRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorOutstandingRewardsRecordProtoMsg): ValidatorOutstandingRewardsRecord {
    return ValidatorOutstandingRewardsRecord.decode(message.value);
  },
  toProto(message: ValidatorOutstandingRewardsRecord): Uint8Array {
    return ValidatorOutstandingRewardsRecord.encode(message).finish();
  },
  toProtoMsg(message: ValidatorOutstandingRewardsRecord): ValidatorOutstandingRewardsRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord",
      value: ValidatorOutstandingRewardsRecord.encode(message).finish()
    };
  }
};
function createBaseValidatorAccumulatedCommissionRecord(): ValidatorAccumulatedCommissionRecord {
  return {
    validator_address: "",
    accumulated: ValidatorAccumulatedCommission.fromPartial({})
  };
}
export const ValidatorAccumulatedCommissionRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord",
  aminoType: "cosmos-sdk/ValidatorAccumulatedCommissionRecord",
  encode(message: ValidatorAccumulatedCommissionRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }
    if (message.accumulated !== undefined) {
      ValidatorAccumulatedCommission.encode(message.accumulated, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorAccumulatedCommissionRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorAccumulatedCommissionRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_address = reader.string();
          break;
        case 2:
          message.accumulated = ValidatorAccumulatedCommission.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorAccumulatedCommissionRecord {
    return {
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      accumulated: isSet(object.accumulated) ? ValidatorAccumulatedCommission.fromJSON(object.accumulated) : undefined
    };
  },
  toJSON(message: ValidatorAccumulatedCommissionRecord): unknown {
    const obj: any = {};
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    message.accumulated !== undefined && (obj.accumulated = message.accumulated ? ValidatorAccumulatedCommission.toJSON(message.accumulated) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorAccumulatedCommissionRecord>): ValidatorAccumulatedCommissionRecord {
    const message = createBaseValidatorAccumulatedCommissionRecord();
    message.validator_address = object.validator_address ?? "";
    message.accumulated = object.accumulated !== undefined && object.accumulated !== null ? ValidatorAccumulatedCommission.fromPartial(object.accumulated) : undefined;
    return message;
  },
  fromAmino(object: ValidatorAccumulatedCommissionRecordAmino): ValidatorAccumulatedCommissionRecord {
    return {
      validator_address: object.validator_address,
      accumulated: object?.accumulated ? ValidatorAccumulatedCommission.fromAmino(object.accumulated) : undefined
    };
  },
  toAmino(message: ValidatorAccumulatedCommissionRecord): ValidatorAccumulatedCommissionRecordAmino {
    const obj: any = {};
    obj.validator_address = message.validator_address;
    obj.accumulated = message.accumulated ? ValidatorAccumulatedCommission.toAmino(message.accumulated) : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorAccumulatedCommissionRecordAminoMsg): ValidatorAccumulatedCommissionRecord {
    return ValidatorAccumulatedCommissionRecord.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorAccumulatedCommissionRecord): ValidatorAccumulatedCommissionRecordAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorAccumulatedCommissionRecord",
      value: ValidatorAccumulatedCommissionRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorAccumulatedCommissionRecordProtoMsg): ValidatorAccumulatedCommissionRecord {
    return ValidatorAccumulatedCommissionRecord.decode(message.value);
  },
  toProto(message: ValidatorAccumulatedCommissionRecord): Uint8Array {
    return ValidatorAccumulatedCommissionRecord.encode(message).finish();
  },
  toProtoMsg(message: ValidatorAccumulatedCommissionRecord): ValidatorAccumulatedCommissionRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord",
      value: ValidatorAccumulatedCommissionRecord.encode(message).finish()
    };
  }
};
function createBaseValidatorHistoricalRewardsRecord(): ValidatorHistoricalRewardsRecord {
  return {
    validator_address: "",
    period: Long.UZERO,
    rewards: ValidatorHistoricalRewards.fromPartial({})
  };
}
export const ValidatorHistoricalRewardsRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord",
  aminoType: "cosmos-sdk/ValidatorHistoricalRewardsRecord",
  encode(message: ValidatorHistoricalRewardsRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }
    if (!message.period.isZero()) {
      writer.uint32(16).uint64(message.period);
    }
    if (message.rewards !== undefined) {
      ValidatorHistoricalRewards.encode(message.rewards, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorHistoricalRewardsRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorHistoricalRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_address = reader.string();
          break;
        case 2:
          message.period = (reader.uint64() as Long);
          break;
        case 3:
          message.rewards = ValidatorHistoricalRewards.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorHistoricalRewardsRecord {
    return {
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      period: isSet(object.period) ? Long.fromValue(object.period) : Long.UZERO,
      rewards: isSet(object.rewards) ? ValidatorHistoricalRewards.fromJSON(object.rewards) : undefined
    };
  },
  toJSON(message: ValidatorHistoricalRewardsRecord): unknown {
    const obj: any = {};
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    message.period !== undefined && (obj.period = (message.period || Long.UZERO).toString());
    message.rewards !== undefined && (obj.rewards = message.rewards ? ValidatorHistoricalRewards.toJSON(message.rewards) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorHistoricalRewardsRecord>): ValidatorHistoricalRewardsRecord {
    const message = createBaseValidatorHistoricalRewardsRecord();
    message.validator_address = object.validator_address ?? "";
    message.period = object.period !== undefined && object.period !== null ? Long.fromValue(object.period) : Long.UZERO;
    message.rewards = object.rewards !== undefined && object.rewards !== null ? ValidatorHistoricalRewards.fromPartial(object.rewards) : undefined;
    return message;
  },
  fromAmino(object: ValidatorHistoricalRewardsRecordAmino): ValidatorHistoricalRewardsRecord {
    return {
      validator_address: object.validator_address,
      period: Long.fromString(object.period),
      rewards: object?.rewards ? ValidatorHistoricalRewards.fromAmino(object.rewards) : undefined
    };
  },
  toAmino(message: ValidatorHistoricalRewardsRecord): ValidatorHistoricalRewardsRecordAmino {
    const obj: any = {};
    obj.validator_address = message.validator_address;
    obj.period = message.period ? message.period.toString() : undefined;
    obj.rewards = message.rewards ? ValidatorHistoricalRewards.toAmino(message.rewards) : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorHistoricalRewardsRecordAminoMsg): ValidatorHistoricalRewardsRecord {
    return ValidatorHistoricalRewardsRecord.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorHistoricalRewardsRecord): ValidatorHistoricalRewardsRecordAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorHistoricalRewardsRecord",
      value: ValidatorHistoricalRewardsRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorHistoricalRewardsRecordProtoMsg): ValidatorHistoricalRewardsRecord {
    return ValidatorHistoricalRewardsRecord.decode(message.value);
  },
  toProto(message: ValidatorHistoricalRewardsRecord): Uint8Array {
    return ValidatorHistoricalRewardsRecord.encode(message).finish();
  },
  toProtoMsg(message: ValidatorHistoricalRewardsRecord): ValidatorHistoricalRewardsRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord",
      value: ValidatorHistoricalRewardsRecord.encode(message).finish()
    };
  }
};
function createBaseValidatorCurrentRewardsRecord(): ValidatorCurrentRewardsRecord {
  return {
    validator_address: "",
    rewards: ValidatorCurrentRewards.fromPartial({})
  };
}
export const ValidatorCurrentRewardsRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord",
  aminoType: "cosmos-sdk/ValidatorCurrentRewardsRecord",
  encode(message: ValidatorCurrentRewardsRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }
    if (message.rewards !== undefined) {
      ValidatorCurrentRewards.encode(message.rewards, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorCurrentRewardsRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorCurrentRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_address = reader.string();
          break;
        case 2:
          message.rewards = ValidatorCurrentRewards.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorCurrentRewardsRecord {
    return {
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      rewards: isSet(object.rewards) ? ValidatorCurrentRewards.fromJSON(object.rewards) : undefined
    };
  },
  toJSON(message: ValidatorCurrentRewardsRecord): unknown {
    const obj: any = {};
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    message.rewards !== undefined && (obj.rewards = message.rewards ? ValidatorCurrentRewards.toJSON(message.rewards) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorCurrentRewardsRecord>): ValidatorCurrentRewardsRecord {
    const message = createBaseValidatorCurrentRewardsRecord();
    message.validator_address = object.validator_address ?? "";
    message.rewards = object.rewards !== undefined && object.rewards !== null ? ValidatorCurrentRewards.fromPartial(object.rewards) : undefined;
    return message;
  },
  fromAmino(object: ValidatorCurrentRewardsRecordAmino): ValidatorCurrentRewardsRecord {
    return {
      validator_address: object.validator_address,
      rewards: object?.rewards ? ValidatorCurrentRewards.fromAmino(object.rewards) : undefined
    };
  },
  toAmino(message: ValidatorCurrentRewardsRecord): ValidatorCurrentRewardsRecordAmino {
    const obj: any = {};
    obj.validator_address = message.validator_address;
    obj.rewards = message.rewards ? ValidatorCurrentRewards.toAmino(message.rewards) : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorCurrentRewardsRecordAminoMsg): ValidatorCurrentRewardsRecord {
    return ValidatorCurrentRewardsRecord.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorCurrentRewardsRecord): ValidatorCurrentRewardsRecordAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorCurrentRewardsRecord",
      value: ValidatorCurrentRewardsRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorCurrentRewardsRecordProtoMsg): ValidatorCurrentRewardsRecord {
    return ValidatorCurrentRewardsRecord.decode(message.value);
  },
  toProto(message: ValidatorCurrentRewardsRecord): Uint8Array {
    return ValidatorCurrentRewardsRecord.encode(message).finish();
  },
  toProtoMsg(message: ValidatorCurrentRewardsRecord): ValidatorCurrentRewardsRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord",
      value: ValidatorCurrentRewardsRecord.encode(message).finish()
    };
  }
};
function createBaseDelegatorStartingInfoRecord(): DelegatorStartingInfoRecord {
  return {
    delegator_address: "",
    validator_address: "",
    starting_info: DelegatorStartingInfo.fromPartial({})
  };
}
export const DelegatorStartingInfoRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord",
  aminoType: "cosmos-sdk/DelegatorStartingInfoRecord",
  encode(message: DelegatorStartingInfoRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    if (message.starting_info !== undefined) {
      DelegatorStartingInfo.encode(message.starting_info, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorStartingInfoRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorStartingInfoRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.validator_address = reader.string();
          break;
        case 3:
          message.starting_info = DelegatorStartingInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegatorStartingInfoRecord {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      starting_info: isSet(object.starting_info) ? DelegatorStartingInfo.fromJSON(object.starting_info) : undefined
    };
  },
  toJSON(message: DelegatorStartingInfoRecord): unknown {
    const obj: any = {};
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    message.starting_info !== undefined && (obj.starting_info = message.starting_info ? DelegatorStartingInfo.toJSON(message.starting_info) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<DelegatorStartingInfoRecord>): DelegatorStartingInfoRecord {
    const message = createBaseDelegatorStartingInfoRecord();
    message.delegator_address = object.delegator_address ?? "";
    message.validator_address = object.validator_address ?? "";
    message.starting_info = object.starting_info !== undefined && object.starting_info !== null ? DelegatorStartingInfo.fromPartial(object.starting_info) : undefined;
    return message;
  },
  fromAmino(object: DelegatorStartingInfoRecordAmino): DelegatorStartingInfoRecord {
    return {
      delegator_address: object.delegator_address,
      validator_address: object.validator_address,
      starting_info: object?.starting_info ? DelegatorStartingInfo.fromAmino(object.starting_info) : undefined
    };
  },
  toAmino(message: DelegatorStartingInfoRecord): DelegatorStartingInfoRecordAmino {
    const obj: any = {};
    obj.delegator_address = message.delegator_address;
    obj.validator_address = message.validator_address;
    obj.starting_info = message.starting_info ? DelegatorStartingInfo.toAmino(message.starting_info) : undefined;
    return obj;
  },
  fromAminoMsg(object: DelegatorStartingInfoRecordAminoMsg): DelegatorStartingInfoRecord {
    return DelegatorStartingInfoRecord.fromAmino(object.value);
  },
  toAminoMsg(message: DelegatorStartingInfoRecord): DelegatorStartingInfoRecordAminoMsg {
    return {
      type: "cosmos-sdk/DelegatorStartingInfoRecord",
      value: DelegatorStartingInfoRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: DelegatorStartingInfoRecordProtoMsg): DelegatorStartingInfoRecord {
    return DelegatorStartingInfoRecord.decode(message.value);
  },
  toProto(message: DelegatorStartingInfoRecord): Uint8Array {
    return DelegatorStartingInfoRecord.encode(message).finish();
  },
  toProtoMsg(message: DelegatorStartingInfoRecord): DelegatorStartingInfoRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord",
      value: DelegatorStartingInfoRecord.encode(message).finish()
    };
  }
};
function createBaseValidatorSlashEventRecord(): ValidatorSlashEventRecord {
  return {
    validator_address: "",
    height: Long.UZERO,
    period: Long.UZERO,
    validator_slash_event: ValidatorSlashEvent.fromPartial({})
  };
}
export const ValidatorSlashEventRecord = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEventRecord",
  aminoType: "cosmos-sdk/ValidatorSlashEventRecord",
  encode(message: ValidatorSlashEventRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }
    if (!message.height.isZero()) {
      writer.uint32(16).uint64(message.height);
    }
    if (!message.period.isZero()) {
      writer.uint32(24).uint64(message.period);
    }
    if (message.validator_slash_event !== undefined) {
      ValidatorSlashEvent.encode(message.validator_slash_event, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSlashEventRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashEventRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_address = reader.string();
          break;
        case 2:
          message.height = (reader.uint64() as Long);
          break;
        case 3:
          message.period = (reader.uint64() as Long);
          break;
        case 4:
          message.validator_slash_event = ValidatorSlashEvent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorSlashEventRecord {
    return {
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
      period: isSet(object.period) ? Long.fromValue(object.period) : Long.UZERO,
      validator_slash_event: isSet(object.validator_slash_event) ? ValidatorSlashEvent.fromJSON(object.validator_slash_event) : undefined
    };
  },
  toJSON(message: ValidatorSlashEventRecord): unknown {
    const obj: any = {};
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    message.height !== undefined && (obj.height = (message.height || Long.UZERO).toString());
    message.period !== undefined && (obj.period = (message.period || Long.UZERO).toString());
    message.validator_slash_event !== undefined && (obj.validator_slash_event = message.validator_slash_event ? ValidatorSlashEvent.toJSON(message.validator_slash_event) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorSlashEventRecord>): ValidatorSlashEventRecord {
    const message = createBaseValidatorSlashEventRecord();
    message.validator_address = object.validator_address ?? "";
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.period = object.period !== undefined && object.period !== null ? Long.fromValue(object.period) : Long.UZERO;
    message.validator_slash_event = object.validator_slash_event !== undefined && object.validator_slash_event !== null ? ValidatorSlashEvent.fromPartial(object.validator_slash_event) : undefined;
    return message;
  },
  fromAmino(object: ValidatorSlashEventRecordAmino): ValidatorSlashEventRecord {
    return {
      validator_address: object.validator_address,
      height: Long.fromString(object.height),
      period: Long.fromString(object.period),
      validator_slash_event: object?.validator_slash_event ? ValidatorSlashEvent.fromAmino(object.validator_slash_event) : undefined
    };
  },
  toAmino(message: ValidatorSlashEventRecord): ValidatorSlashEventRecordAmino {
    const obj: any = {};
    obj.validator_address = message.validator_address;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.period = message.period ? message.period.toString() : undefined;
    obj.validator_slash_event = message.validator_slash_event ? ValidatorSlashEvent.toAmino(message.validator_slash_event) : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorSlashEventRecordAminoMsg): ValidatorSlashEventRecord {
    return ValidatorSlashEventRecord.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorSlashEventRecord): ValidatorSlashEventRecordAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorSlashEventRecord",
      value: ValidatorSlashEventRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorSlashEventRecordProtoMsg): ValidatorSlashEventRecord {
    return ValidatorSlashEventRecord.decode(message.value);
  },
  toProto(message: ValidatorSlashEventRecord): Uint8Array {
    return ValidatorSlashEventRecord.encode(message).finish();
  },
  toProtoMsg(message: ValidatorSlashEventRecord): ValidatorSlashEventRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEventRecord",
      value: ValidatorSlashEventRecord.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    fee_pool: FeePool.fromPartial({}),
    delegator_withdraw_infos: [],
    previous_proposer: "",
    outstanding_rewards: [],
    validator_accumulated_commissions: [],
    validator_historical_rewards: [],
    validator_current_rewards: [],
    delegator_starting_infos: [],
    validator_slash_events: []
  };
}
export const GenesisState = {
  typeUrl: "/cosmos.distribution.v1beta1.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee_pool !== undefined) {
      FeePool.encode(message.fee_pool, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.delegator_withdraw_infos) {
      DelegatorWithdrawInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.previous_proposer !== "") {
      writer.uint32(34).string(message.previous_proposer);
    }
    for (const v of message.outstanding_rewards) {
      ValidatorOutstandingRewardsRecord.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.validator_accumulated_commissions) {
      ValidatorAccumulatedCommissionRecord.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.validator_historical_rewards) {
      ValidatorHistoricalRewardsRecord.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.validator_current_rewards) {
      ValidatorCurrentRewardsRecord.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.delegator_starting_infos) {
      DelegatorStartingInfoRecord.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.validator_slash_events) {
      ValidatorSlashEventRecord.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.fee_pool = FeePool.decode(reader, reader.uint32());
          break;
        case 3:
          message.delegator_withdraw_infos.push(DelegatorWithdrawInfo.decode(reader, reader.uint32()));
          break;
        case 4:
          message.previous_proposer = reader.string();
          break;
        case 5:
          message.outstanding_rewards.push(ValidatorOutstandingRewardsRecord.decode(reader, reader.uint32()));
          break;
        case 6:
          message.validator_accumulated_commissions.push(ValidatorAccumulatedCommissionRecord.decode(reader, reader.uint32()));
          break;
        case 7:
          message.validator_historical_rewards.push(ValidatorHistoricalRewardsRecord.decode(reader, reader.uint32()));
          break;
        case 8:
          message.validator_current_rewards.push(ValidatorCurrentRewardsRecord.decode(reader, reader.uint32()));
          break;
        case 9:
          message.delegator_starting_infos.push(DelegatorStartingInfoRecord.decode(reader, reader.uint32()));
          break;
        case 10:
          message.validator_slash_events.push(ValidatorSlashEventRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      fee_pool: isSet(object.fee_pool) ? FeePool.fromJSON(object.fee_pool) : undefined,
      delegator_withdraw_infos: Array.isArray(object?.delegator_withdraw_infos) ? object.delegator_withdraw_infos.map((e: any) => DelegatorWithdrawInfo.fromJSON(e)) : [],
      previous_proposer: isSet(object.previous_proposer) ? String(object.previous_proposer) : "",
      outstanding_rewards: Array.isArray(object?.outstanding_rewards) ? object.outstanding_rewards.map((e: any) => ValidatorOutstandingRewardsRecord.fromJSON(e)) : [],
      validator_accumulated_commissions: Array.isArray(object?.validator_accumulated_commissions) ? object.validator_accumulated_commissions.map((e: any) => ValidatorAccumulatedCommissionRecord.fromJSON(e)) : [],
      validator_historical_rewards: Array.isArray(object?.validator_historical_rewards) ? object.validator_historical_rewards.map((e: any) => ValidatorHistoricalRewardsRecord.fromJSON(e)) : [],
      validator_current_rewards: Array.isArray(object?.validator_current_rewards) ? object.validator_current_rewards.map((e: any) => ValidatorCurrentRewardsRecord.fromJSON(e)) : [],
      delegator_starting_infos: Array.isArray(object?.delegator_starting_infos) ? object.delegator_starting_infos.map((e: any) => DelegatorStartingInfoRecord.fromJSON(e)) : [],
      validator_slash_events: Array.isArray(object?.validator_slash_events) ? object.validator_slash_events.map((e: any) => ValidatorSlashEventRecord.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.fee_pool !== undefined && (obj.fee_pool = message.fee_pool ? FeePool.toJSON(message.fee_pool) : undefined);
    if (message.delegator_withdraw_infos) {
      obj.delegator_withdraw_infos = message.delegator_withdraw_infos.map(e => e ? DelegatorWithdrawInfo.toJSON(e) : undefined);
    } else {
      obj.delegator_withdraw_infos = [];
    }
    message.previous_proposer !== undefined && (obj.previous_proposer = message.previous_proposer);
    if (message.outstanding_rewards) {
      obj.outstanding_rewards = message.outstanding_rewards.map(e => e ? ValidatorOutstandingRewardsRecord.toJSON(e) : undefined);
    } else {
      obj.outstanding_rewards = [];
    }
    if (message.validator_accumulated_commissions) {
      obj.validator_accumulated_commissions = message.validator_accumulated_commissions.map(e => e ? ValidatorAccumulatedCommissionRecord.toJSON(e) : undefined);
    } else {
      obj.validator_accumulated_commissions = [];
    }
    if (message.validator_historical_rewards) {
      obj.validator_historical_rewards = message.validator_historical_rewards.map(e => e ? ValidatorHistoricalRewardsRecord.toJSON(e) : undefined);
    } else {
      obj.validator_historical_rewards = [];
    }
    if (message.validator_current_rewards) {
      obj.validator_current_rewards = message.validator_current_rewards.map(e => e ? ValidatorCurrentRewardsRecord.toJSON(e) : undefined);
    } else {
      obj.validator_current_rewards = [];
    }
    if (message.delegator_starting_infos) {
      obj.delegator_starting_infos = message.delegator_starting_infos.map(e => e ? DelegatorStartingInfoRecord.toJSON(e) : undefined);
    } else {
      obj.delegator_starting_infos = [];
    }
    if (message.validator_slash_events) {
      obj.validator_slash_events = message.validator_slash_events.map(e => e ? ValidatorSlashEventRecord.toJSON(e) : undefined);
    } else {
      obj.validator_slash_events = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.fee_pool = object.fee_pool !== undefined && object.fee_pool !== null ? FeePool.fromPartial(object.fee_pool) : undefined;
    message.delegator_withdraw_infos = object.delegator_withdraw_infos?.map(e => DelegatorWithdrawInfo.fromPartial(e)) || [];
    message.previous_proposer = object.previous_proposer ?? "";
    message.outstanding_rewards = object.outstanding_rewards?.map(e => ValidatorOutstandingRewardsRecord.fromPartial(e)) || [];
    message.validator_accumulated_commissions = object.validator_accumulated_commissions?.map(e => ValidatorAccumulatedCommissionRecord.fromPartial(e)) || [];
    message.validator_historical_rewards = object.validator_historical_rewards?.map(e => ValidatorHistoricalRewardsRecord.fromPartial(e)) || [];
    message.validator_current_rewards = object.validator_current_rewards?.map(e => ValidatorCurrentRewardsRecord.fromPartial(e)) || [];
    message.delegator_starting_infos = object.delegator_starting_infos?.map(e => DelegatorStartingInfoRecord.fromPartial(e)) || [];
    message.validator_slash_events = object.validator_slash_events?.map(e => ValidatorSlashEventRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      fee_pool: object?.fee_pool ? FeePool.fromAmino(object.fee_pool) : undefined,
      delegator_withdraw_infos: Array.isArray(object?.delegator_withdraw_infos) ? object.delegator_withdraw_infos.map((e: any) => DelegatorWithdrawInfo.fromAmino(e)) : [],
      previous_proposer: object.previous_proposer,
      outstanding_rewards: Array.isArray(object?.outstanding_rewards) ? object.outstanding_rewards.map((e: any) => ValidatorOutstandingRewardsRecord.fromAmino(e)) : [],
      validator_accumulated_commissions: Array.isArray(object?.validator_accumulated_commissions) ? object.validator_accumulated_commissions.map((e: any) => ValidatorAccumulatedCommissionRecord.fromAmino(e)) : [],
      validator_historical_rewards: Array.isArray(object?.validator_historical_rewards) ? object.validator_historical_rewards.map((e: any) => ValidatorHistoricalRewardsRecord.fromAmino(e)) : [],
      validator_current_rewards: Array.isArray(object?.validator_current_rewards) ? object.validator_current_rewards.map((e: any) => ValidatorCurrentRewardsRecord.fromAmino(e)) : [],
      delegator_starting_infos: Array.isArray(object?.delegator_starting_infos) ? object.delegator_starting_infos.map((e: any) => DelegatorStartingInfoRecord.fromAmino(e)) : [],
      validator_slash_events: Array.isArray(object?.validator_slash_events) ? object.validator_slash_events.map((e: any) => ValidatorSlashEventRecord.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.fee_pool = message.fee_pool ? FeePool.toAmino(message.fee_pool) : undefined;
    if (message.delegator_withdraw_infos) {
      obj.delegator_withdraw_infos = message.delegator_withdraw_infos.map(e => e ? DelegatorWithdrawInfo.toAmino(e) : undefined);
    } else {
      obj.delegator_withdraw_infos = [];
    }
    obj.previous_proposer = message.previous_proposer;
    if (message.outstanding_rewards) {
      obj.outstanding_rewards = message.outstanding_rewards.map(e => e ? ValidatorOutstandingRewardsRecord.toAmino(e) : undefined);
    } else {
      obj.outstanding_rewards = [];
    }
    if (message.validator_accumulated_commissions) {
      obj.validator_accumulated_commissions = message.validator_accumulated_commissions.map(e => e ? ValidatorAccumulatedCommissionRecord.toAmino(e) : undefined);
    } else {
      obj.validator_accumulated_commissions = [];
    }
    if (message.validator_historical_rewards) {
      obj.validator_historical_rewards = message.validator_historical_rewards.map(e => e ? ValidatorHistoricalRewardsRecord.toAmino(e) : undefined);
    } else {
      obj.validator_historical_rewards = [];
    }
    if (message.validator_current_rewards) {
      obj.validator_current_rewards = message.validator_current_rewards.map(e => e ? ValidatorCurrentRewardsRecord.toAmino(e) : undefined);
    } else {
      obj.validator_current_rewards = [];
    }
    if (message.delegator_starting_infos) {
      obj.delegator_starting_infos = message.delegator_starting_infos.map(e => e ? DelegatorStartingInfoRecord.toAmino(e) : undefined);
    } else {
      obj.delegator_starting_infos = [];
    }
    if (message.validator_slash_events) {
      obj.validator_slash_events = message.validator_slash_events.map(e => e ? ValidatorSlashEventRecord.toAmino(e) : undefined);
    } else {
      obj.validator_slash_events = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};