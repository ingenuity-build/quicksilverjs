import { DecCoin, DecCoinAmino, DecCoinSDKType, Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { Long, isSet, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the set of params for the distribution module. */
export interface Params {
  community_tax: string;
  base_proposer_reward: string;
  bonus_proposer_reward: string;
  withdraw_addr_enabled: boolean;
}
export interface ParamsProtoMsg {
  type_url: "/cosmos.distribution.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the set of params for the distribution module. */
export interface ParamsAmino {
  community_tax: string;
  base_proposer_reward: string;
  bonus_proposer_reward: string;
  withdraw_addr_enabled: boolean;
}
export interface ParamsAminoMsg {
  type: "cosmos-sdk/Params";
  value: ParamsAmino;
}
/** Params defines the set of params for the distribution module. */
export interface ParamsSDKType {
  community_tax: string;
  base_proposer_reward: string;
  bonus_proposer_reward: string;
  withdraw_addr_enabled: boolean;
}
/**
 * ValidatorHistoricalRewards represents historical rewards for a validator.
 * Height is implicit within the store key.
 * Cumulative reward ratio is the sum from the zeroeth period
 * until this period of rewards / tokens, per the spec.
 * The reference count indicates the number of objects
 * which might need to reference this historical entry at any point.
 * ReferenceCount =
 *    number of outstanding delegations which ended the associated period (and
 *    might need to read that record)
 *  + number of slashes which ended the associated period (and might need to
 *  read that record)
 *  + one per validator for the zeroeth period, set on initialization
 */
export interface ValidatorHistoricalRewards {
  cumulative_reward_ratio: DecCoin[];
  reference_count: number;
}
export interface ValidatorHistoricalRewardsProtoMsg {
  type_url: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewards";
  value: Uint8Array;
}
/**
 * ValidatorHistoricalRewards represents historical rewards for a validator.
 * Height is implicit within the store key.
 * Cumulative reward ratio is the sum from the zeroeth period
 * until this period of rewards / tokens, per the spec.
 * The reference count indicates the number of objects
 * which might need to reference this historical entry at any point.
 * ReferenceCount =
 *    number of outstanding delegations which ended the associated period (and
 *    might need to read that record)
 *  + number of slashes which ended the associated period (and might need to
 *  read that record)
 *  + one per validator for the zeroeth period, set on initialization
 */
export interface ValidatorHistoricalRewardsAmino {
  cumulative_reward_ratio: DecCoinAmino[];
  reference_count: number;
}
export interface ValidatorHistoricalRewardsAminoMsg {
  type: "cosmos-sdk/ValidatorHistoricalRewards";
  value: ValidatorHistoricalRewardsAmino;
}
/**
 * ValidatorHistoricalRewards represents historical rewards for a validator.
 * Height is implicit within the store key.
 * Cumulative reward ratio is the sum from the zeroeth period
 * until this period of rewards / tokens, per the spec.
 * The reference count indicates the number of objects
 * which might need to reference this historical entry at any point.
 * ReferenceCount =
 *    number of outstanding delegations which ended the associated period (and
 *    might need to read that record)
 *  + number of slashes which ended the associated period (and might need to
 *  read that record)
 *  + one per validator for the zeroeth period, set on initialization
 */
export interface ValidatorHistoricalRewardsSDKType {
  cumulative_reward_ratio: DecCoinSDKType[];
  reference_count: number;
}
/**
 * ValidatorCurrentRewards represents current rewards and current
 * period for a validator kept as a running counter and incremented
 * each block as long as the validator's tokens remain constant.
 */
export interface ValidatorCurrentRewards {
  rewards: DecCoin[];
  period: Long;
}
export interface ValidatorCurrentRewardsProtoMsg {
  type_url: "/cosmos.distribution.v1beta1.ValidatorCurrentRewards";
  value: Uint8Array;
}
/**
 * ValidatorCurrentRewards represents current rewards and current
 * period for a validator kept as a running counter and incremented
 * each block as long as the validator's tokens remain constant.
 */
export interface ValidatorCurrentRewardsAmino {
  rewards: DecCoinAmino[];
  period: string;
}
export interface ValidatorCurrentRewardsAminoMsg {
  type: "cosmos-sdk/ValidatorCurrentRewards";
  value: ValidatorCurrentRewardsAmino;
}
/**
 * ValidatorCurrentRewards represents current rewards and current
 * period for a validator kept as a running counter and incremented
 * each block as long as the validator's tokens remain constant.
 */
export interface ValidatorCurrentRewardsSDKType {
  rewards: DecCoinSDKType[];
  period: Long;
}
/**
 * ValidatorAccumulatedCommission represents accumulated commission
 * for a validator kept as a running counter, can be withdrawn at any time.
 */
export interface ValidatorAccumulatedCommission {
  commission: DecCoin[];
}
export interface ValidatorAccumulatedCommissionProtoMsg {
  type_url: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission";
  value: Uint8Array;
}
/**
 * ValidatorAccumulatedCommission represents accumulated commission
 * for a validator kept as a running counter, can be withdrawn at any time.
 */
export interface ValidatorAccumulatedCommissionAmino {
  commission: DecCoinAmino[];
}
export interface ValidatorAccumulatedCommissionAminoMsg {
  type: "cosmos-sdk/ValidatorAccumulatedCommission";
  value: ValidatorAccumulatedCommissionAmino;
}
/**
 * ValidatorAccumulatedCommission represents accumulated commission
 * for a validator kept as a running counter, can be withdrawn at any time.
 */
export interface ValidatorAccumulatedCommissionSDKType {
  commission: DecCoinSDKType[];
}
/**
 * ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards
 * for a validator inexpensive to track, allows simple sanity checks.
 */
export interface ValidatorOutstandingRewards {
  rewards: DecCoin[];
}
export interface ValidatorOutstandingRewardsProtoMsg {
  type_url: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewards";
  value: Uint8Array;
}
/**
 * ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards
 * for a validator inexpensive to track, allows simple sanity checks.
 */
export interface ValidatorOutstandingRewardsAmino {
  rewards: DecCoinAmino[];
}
export interface ValidatorOutstandingRewardsAminoMsg {
  type: "cosmos-sdk/ValidatorOutstandingRewards";
  value: ValidatorOutstandingRewardsAmino;
}
/**
 * ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards
 * for a validator inexpensive to track, allows simple sanity checks.
 */
export interface ValidatorOutstandingRewardsSDKType {
  rewards: DecCoinSDKType[];
}
/**
 * ValidatorSlashEvent represents a validator slash event.
 * Height is implicit within the store key.
 * This is needed to calculate appropriate amount of staking tokens
 * for delegations which are withdrawn after a slash has occurred.
 */
export interface ValidatorSlashEvent {
  validator_period: Long;
  fraction: string;
}
export interface ValidatorSlashEventProtoMsg {
  type_url: "/cosmos.distribution.v1beta1.ValidatorSlashEvent";
  value: Uint8Array;
}
/**
 * ValidatorSlashEvent represents a validator slash event.
 * Height is implicit within the store key.
 * This is needed to calculate appropriate amount of staking tokens
 * for delegations which are withdrawn after a slash has occurred.
 */
export interface ValidatorSlashEventAmino {
  validator_period: string;
  fraction: string;
}
export interface ValidatorSlashEventAminoMsg {
  type: "cosmos-sdk/ValidatorSlashEvent";
  value: ValidatorSlashEventAmino;
}
/**
 * ValidatorSlashEvent represents a validator slash event.
 * Height is implicit within the store key.
 * This is needed to calculate appropriate amount of staking tokens
 * for delegations which are withdrawn after a slash has occurred.
 */
export interface ValidatorSlashEventSDKType {
  validator_period: Long;
  fraction: string;
}
/** ValidatorSlashEvents is a collection of ValidatorSlashEvent messages. */
export interface ValidatorSlashEvents {
  validator_slash_events: ValidatorSlashEvent[];
}
export interface ValidatorSlashEventsProtoMsg {
  type_url: "/cosmos.distribution.v1beta1.ValidatorSlashEvents";
  value: Uint8Array;
}
/** ValidatorSlashEvents is a collection of ValidatorSlashEvent messages. */
export interface ValidatorSlashEventsAmino {
  validator_slash_events: ValidatorSlashEventAmino[];
}
export interface ValidatorSlashEventsAminoMsg {
  type: "cosmos-sdk/ValidatorSlashEvents";
  value: ValidatorSlashEventsAmino;
}
/** ValidatorSlashEvents is a collection of ValidatorSlashEvent messages. */
export interface ValidatorSlashEventsSDKType {
  validator_slash_events: ValidatorSlashEventSDKType[];
}
/** FeePool is the global fee pool for distribution. */
export interface FeePool {
  community_pool: DecCoin[];
}
export interface FeePoolProtoMsg {
  type_url: "/cosmos.distribution.v1beta1.FeePool";
  value: Uint8Array;
}
/** FeePool is the global fee pool for distribution. */
export interface FeePoolAmino {
  community_pool: DecCoinAmino[];
}
export interface FeePoolAminoMsg {
  type: "cosmos-sdk/FeePool";
  value: FeePoolAmino;
}
/** FeePool is the global fee pool for distribution. */
export interface FeePoolSDKType {
  community_pool: DecCoinSDKType[];
}
/**
 * CommunityPoolSpendProposal details a proposal for use of community funds,
 * together with how many coins are proposed to be spent, and to which
 * recipient account.
 */
export interface CommunityPoolSpendProposal {
  $typeUrl?: string;
  title: string;
  description: string;
  recipient: string;
  amount: Coin[];
}
export interface CommunityPoolSpendProposalProtoMsg {
  type_url: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal";
  value: Uint8Array;
}
/**
 * CommunityPoolSpendProposal details a proposal for use of community funds,
 * together with how many coins are proposed to be spent, and to which
 * recipient account.
 */
export interface CommunityPoolSpendProposalAmino {
  title: string;
  description: string;
  recipient: string;
  amount: CoinAmino[];
}
export interface CommunityPoolSpendProposalAminoMsg {
  type: "cosmos-sdk/CommunityPoolSpendProposal";
  value: CommunityPoolSpendProposalAmino;
}
/**
 * CommunityPoolSpendProposal details a proposal for use of community funds,
 * together with how many coins are proposed to be spent, and to which
 * recipient account.
 */
export interface CommunityPoolSpendProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  recipient: string;
  amount: CoinSDKType[];
}
/**
 * DelegatorStartingInfo represents the starting info for a delegator reward
 * period. It tracks the previous validator period, the delegation's amount of
 * staking token, and the creation height (to check later on if any slashes have
 * occurred). NOTE: Even though validators are slashed to whole staking tokens,
 * the delegators within the validator may be left with less than a full token,
 * thus sdk.Dec is used.
 */
export interface DelegatorStartingInfo {
  previous_period: Long;
  stake: string;
  height: Long;
}
export interface DelegatorStartingInfoProtoMsg {
  type_url: "/cosmos.distribution.v1beta1.DelegatorStartingInfo";
  value: Uint8Array;
}
/**
 * DelegatorStartingInfo represents the starting info for a delegator reward
 * period. It tracks the previous validator period, the delegation's amount of
 * staking token, and the creation height (to check later on if any slashes have
 * occurred). NOTE: Even though validators are slashed to whole staking tokens,
 * the delegators within the validator may be left with less than a full token,
 * thus sdk.Dec is used.
 */
export interface DelegatorStartingInfoAmino {
  previous_period: string;
  stake: string;
  height: string;
}
export interface DelegatorStartingInfoAminoMsg {
  type: "cosmos-sdk/DelegatorStartingInfo";
  value: DelegatorStartingInfoAmino;
}
/**
 * DelegatorStartingInfo represents the starting info for a delegator reward
 * period. It tracks the previous validator period, the delegation's amount of
 * staking token, and the creation height (to check later on if any slashes have
 * occurred). NOTE: Even though validators are slashed to whole staking tokens,
 * the delegators within the validator may be left with less than a full token,
 * thus sdk.Dec is used.
 */
export interface DelegatorStartingInfoSDKType {
  previous_period: Long;
  stake: string;
  height: Long;
}
/**
 * DelegationDelegatorReward represents the properties
 * of a delegator's delegation reward.
 */
export interface DelegationDelegatorReward {
  validator_address: string;
  reward: DecCoin[];
}
export interface DelegationDelegatorRewardProtoMsg {
  type_url: "/cosmos.distribution.v1beta1.DelegationDelegatorReward";
  value: Uint8Array;
}
/**
 * DelegationDelegatorReward represents the properties
 * of a delegator's delegation reward.
 */
export interface DelegationDelegatorRewardAmino {
  validator_address: string;
  reward: DecCoinAmino[];
}
export interface DelegationDelegatorRewardAminoMsg {
  type: "cosmos-sdk/DelegationDelegatorReward";
  value: DelegationDelegatorRewardAmino;
}
/**
 * DelegationDelegatorReward represents the properties
 * of a delegator's delegation reward.
 */
export interface DelegationDelegatorRewardSDKType {
  validator_address: string;
  reward: DecCoinSDKType[];
}
/**
 * CommunityPoolSpendProposalWithDeposit defines a CommunityPoolSpendProposal
 * with a deposit
 */
export interface CommunityPoolSpendProposalWithDeposit {
  $typeUrl?: string;
  title: string;
  description: string;
  recipient: string;
  amount: string;
  deposit: string;
}
export interface CommunityPoolSpendProposalWithDepositProtoMsg {
  type_url: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit";
  value: Uint8Array;
}
/**
 * CommunityPoolSpendProposalWithDeposit defines a CommunityPoolSpendProposal
 * with a deposit
 */
export interface CommunityPoolSpendProposalWithDepositAmino {
  title: string;
  description: string;
  recipient: string;
  amount: string;
  deposit: string;
}
export interface CommunityPoolSpendProposalWithDepositAminoMsg {
  type: "cosmos-sdk/CommunityPoolSpendProposalWithDeposit";
  value: CommunityPoolSpendProposalWithDepositAmino;
}
/**
 * CommunityPoolSpendProposalWithDeposit defines a CommunityPoolSpendProposal
 * with a deposit
 */
export interface CommunityPoolSpendProposalWithDepositSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  recipient: string;
  amount: string;
  deposit: string;
}
function createBaseParams(): Params {
  return {
    community_tax: "",
    base_proposer_reward: "",
    bonus_proposer_reward: "",
    withdraw_addr_enabled: false
  };
}
export const Params = {
  typeUrl: "/cosmos.distribution.v1beta1.Params",
  aminoType: "cosmos-sdk/Params",
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.community_tax !== "") {
      writer.uint32(10).string(message.community_tax);
    }
    if (message.base_proposer_reward !== "") {
      writer.uint32(18).string(message.base_proposer_reward);
    }
    if (message.bonus_proposer_reward !== "") {
      writer.uint32(26).string(message.bonus_proposer_reward);
    }
    if (message.withdraw_addr_enabled === true) {
      writer.uint32(32).bool(message.withdraw_addr_enabled);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.community_tax = reader.string();
          break;
        case 2:
          message.base_proposer_reward = reader.string();
          break;
        case 3:
          message.bonus_proposer_reward = reader.string();
          break;
        case 4:
          message.withdraw_addr_enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      community_tax: isSet(object.community_tax) ? String(object.community_tax) : "",
      base_proposer_reward: isSet(object.base_proposer_reward) ? String(object.base_proposer_reward) : "",
      bonus_proposer_reward: isSet(object.bonus_proposer_reward) ? String(object.bonus_proposer_reward) : "",
      withdraw_addr_enabled: isSet(object.withdraw_addr_enabled) ? Boolean(object.withdraw_addr_enabled) : false
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.community_tax !== undefined && (obj.community_tax = message.community_tax);
    message.base_proposer_reward !== undefined && (obj.base_proposer_reward = message.base_proposer_reward);
    message.bonus_proposer_reward !== undefined && (obj.bonus_proposer_reward = message.bonus_proposer_reward);
    message.withdraw_addr_enabled !== undefined && (obj.withdraw_addr_enabled = message.withdraw_addr_enabled);
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.community_tax = object.community_tax ?? "";
    message.base_proposer_reward = object.base_proposer_reward ?? "";
    message.bonus_proposer_reward = object.bonus_proposer_reward ?? "";
    message.withdraw_addr_enabled = object.withdraw_addr_enabled ?? false;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      community_tax: object.community_tax,
      base_proposer_reward: object.base_proposer_reward,
      bonus_proposer_reward: object.bonus_proposer_reward,
      withdraw_addr_enabled: object.withdraw_addr_enabled
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.community_tax = message.community_tax;
    obj.base_proposer_reward = message.base_proposer_reward;
    obj.bonus_proposer_reward = message.bonus_proposer_reward;
    obj.withdraw_addr_enabled = message.withdraw_addr_enabled;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseValidatorHistoricalRewards(): ValidatorHistoricalRewards {
  return {
    cumulative_reward_ratio: [],
    reference_count: 0
  };
}
export const ValidatorHistoricalRewards = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewards",
  aminoType: "cosmos-sdk/ValidatorHistoricalRewards",
  encode(message: ValidatorHistoricalRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.cumulative_reward_ratio) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.reference_count !== 0) {
      writer.uint32(16).uint32(message.reference_count);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorHistoricalRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorHistoricalRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cumulative_reward_ratio.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.reference_count = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorHistoricalRewards {
    return {
      cumulative_reward_ratio: Array.isArray(object?.cumulative_reward_ratio) ? object.cumulative_reward_ratio.map((e: any) => DecCoin.fromJSON(e)) : [],
      reference_count: isSet(object.reference_count) ? Number(object.reference_count) : 0
    };
  },
  toJSON(message: ValidatorHistoricalRewards): unknown {
    const obj: any = {};
    if (message.cumulative_reward_ratio) {
      obj.cumulative_reward_ratio = message.cumulative_reward_ratio.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.cumulative_reward_ratio = [];
    }
    message.reference_count !== undefined && (obj.reference_count = Math.round(message.reference_count));
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorHistoricalRewards>): ValidatorHistoricalRewards {
    const message = createBaseValidatorHistoricalRewards();
    message.cumulative_reward_ratio = object.cumulative_reward_ratio?.map(e => DecCoin.fromPartial(e)) || [];
    message.reference_count = object.reference_count ?? 0;
    return message;
  },
  fromAmino(object: ValidatorHistoricalRewardsAmino): ValidatorHistoricalRewards {
    return {
      cumulative_reward_ratio: Array.isArray(object?.cumulative_reward_ratio) ? object.cumulative_reward_ratio.map((e: any) => DecCoin.fromAmino(e)) : [],
      reference_count: object.reference_count
    };
  },
  toAmino(message: ValidatorHistoricalRewards): ValidatorHistoricalRewardsAmino {
    const obj: any = {};
    if (message.cumulative_reward_ratio) {
      obj.cumulative_reward_ratio = message.cumulative_reward_ratio.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.cumulative_reward_ratio = [];
    }
    obj.reference_count = message.reference_count;
    return obj;
  },
  fromAminoMsg(object: ValidatorHistoricalRewardsAminoMsg): ValidatorHistoricalRewards {
    return ValidatorHistoricalRewards.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorHistoricalRewards): ValidatorHistoricalRewardsAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorHistoricalRewards",
      value: ValidatorHistoricalRewards.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorHistoricalRewardsProtoMsg): ValidatorHistoricalRewards {
    return ValidatorHistoricalRewards.decode(message.value);
  },
  toProto(message: ValidatorHistoricalRewards): Uint8Array {
    return ValidatorHistoricalRewards.encode(message).finish();
  },
  toProtoMsg(message: ValidatorHistoricalRewards): ValidatorHistoricalRewardsProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewards",
      value: ValidatorHistoricalRewards.encode(message).finish()
    };
  }
};
function createBaseValidatorCurrentRewards(): ValidatorCurrentRewards {
  return {
    rewards: [],
    period: Long.UZERO
  };
}
export const ValidatorCurrentRewards = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewards",
  aminoType: "cosmos-sdk/ValidatorCurrentRewards",
  encode(message: ValidatorCurrentRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (!message.period.isZero()) {
      writer.uint32(16).uint64(message.period);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorCurrentRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorCurrentRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.period = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorCurrentRewards {
    return {
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DecCoin.fromJSON(e)) : [],
      period: isSet(object.period) ? Long.fromValue(object.period) : Long.UZERO
    };
  },
  toJSON(message: ValidatorCurrentRewards): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    message.period !== undefined && (obj.period = (message.period || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorCurrentRewards>): ValidatorCurrentRewards {
    const message = createBaseValidatorCurrentRewards();
    message.rewards = object.rewards?.map(e => DecCoin.fromPartial(e)) || [];
    message.period = object.period !== undefined && object.period !== null ? Long.fromValue(object.period) : Long.UZERO;
    return message;
  },
  fromAmino(object: ValidatorCurrentRewardsAmino): ValidatorCurrentRewards {
    return {
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DecCoin.fromAmino(e)) : [],
      period: Long.fromString(object.period)
    };
  },
  toAmino(message: ValidatorCurrentRewards): ValidatorCurrentRewardsAmino {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.rewards = [];
    }
    obj.period = message.period ? message.period.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorCurrentRewardsAminoMsg): ValidatorCurrentRewards {
    return ValidatorCurrentRewards.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorCurrentRewards): ValidatorCurrentRewardsAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorCurrentRewards",
      value: ValidatorCurrentRewards.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorCurrentRewardsProtoMsg): ValidatorCurrentRewards {
    return ValidatorCurrentRewards.decode(message.value);
  },
  toProto(message: ValidatorCurrentRewards): Uint8Array {
    return ValidatorCurrentRewards.encode(message).finish();
  },
  toProtoMsg(message: ValidatorCurrentRewards): ValidatorCurrentRewardsProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewards",
      value: ValidatorCurrentRewards.encode(message).finish()
    };
  }
};
function createBaseValidatorAccumulatedCommission(): ValidatorAccumulatedCommission {
  return {
    commission: []
  };
}
export const ValidatorAccumulatedCommission = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission",
  aminoType: "cosmos-sdk/ValidatorAccumulatedCommission",
  encode(message: ValidatorAccumulatedCommission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.commission) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorAccumulatedCommission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorAccumulatedCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commission.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorAccumulatedCommission {
    return {
      commission: Array.isArray(object?.commission) ? object.commission.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  toJSON(message: ValidatorAccumulatedCommission): unknown {
    const obj: any = {};
    if (message.commission) {
      obj.commission = message.commission.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.commission = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorAccumulatedCommission>): ValidatorAccumulatedCommission {
    const message = createBaseValidatorAccumulatedCommission();
    message.commission = object.commission?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ValidatorAccumulatedCommissionAmino): ValidatorAccumulatedCommission {
    return {
      commission: Array.isArray(object?.commission) ? object.commission.map((e: any) => DecCoin.fromAmino(e)) : []
    };
  },
  toAmino(message: ValidatorAccumulatedCommission): ValidatorAccumulatedCommissionAmino {
    const obj: any = {};
    if (message.commission) {
      obj.commission = message.commission.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.commission = [];
    }
    return obj;
  },
  fromAminoMsg(object: ValidatorAccumulatedCommissionAminoMsg): ValidatorAccumulatedCommission {
    return ValidatorAccumulatedCommission.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorAccumulatedCommission): ValidatorAccumulatedCommissionAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorAccumulatedCommission",
      value: ValidatorAccumulatedCommission.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorAccumulatedCommissionProtoMsg): ValidatorAccumulatedCommission {
    return ValidatorAccumulatedCommission.decode(message.value);
  },
  toProto(message: ValidatorAccumulatedCommission): Uint8Array {
    return ValidatorAccumulatedCommission.encode(message).finish();
  },
  toProtoMsg(message: ValidatorAccumulatedCommission): ValidatorAccumulatedCommissionProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission",
      value: ValidatorAccumulatedCommission.encode(message).finish()
    };
  }
};
function createBaseValidatorOutstandingRewards(): ValidatorOutstandingRewards {
  return {
    rewards: []
  };
}
export const ValidatorOutstandingRewards = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewards",
  aminoType: "cosmos-sdk/ValidatorOutstandingRewards",
  encode(message: ValidatorOutstandingRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorOutstandingRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorOutstandingRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorOutstandingRewards {
    return {
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  toJSON(message: ValidatorOutstandingRewards): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorOutstandingRewards>): ValidatorOutstandingRewards {
    const message = createBaseValidatorOutstandingRewards();
    message.rewards = object.rewards?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ValidatorOutstandingRewardsAmino): ValidatorOutstandingRewards {
    return {
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DecCoin.fromAmino(e)) : []
    };
  },
  toAmino(message: ValidatorOutstandingRewards): ValidatorOutstandingRewardsAmino {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromAminoMsg(object: ValidatorOutstandingRewardsAminoMsg): ValidatorOutstandingRewards {
    return ValidatorOutstandingRewards.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorOutstandingRewards): ValidatorOutstandingRewardsAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorOutstandingRewards",
      value: ValidatorOutstandingRewards.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorOutstandingRewardsProtoMsg): ValidatorOutstandingRewards {
    return ValidatorOutstandingRewards.decode(message.value);
  },
  toProto(message: ValidatorOutstandingRewards): Uint8Array {
    return ValidatorOutstandingRewards.encode(message).finish();
  },
  toProtoMsg(message: ValidatorOutstandingRewards): ValidatorOutstandingRewardsProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewards",
      value: ValidatorOutstandingRewards.encode(message).finish()
    };
  }
};
function createBaseValidatorSlashEvent(): ValidatorSlashEvent {
  return {
    validator_period: Long.UZERO,
    fraction: ""
  };
}
export const ValidatorSlashEvent = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvent",
  aminoType: "cosmos-sdk/ValidatorSlashEvent",
  encode(message: ValidatorSlashEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.validator_period.isZero()) {
      writer.uint32(8).uint64(message.validator_period);
    }
    if (message.fraction !== "") {
      writer.uint32(18).string(message.fraction);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSlashEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_period = (reader.uint64() as Long);
          break;
        case 2:
          message.fraction = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorSlashEvent {
    return {
      validator_period: isSet(object.validator_period) ? Long.fromValue(object.validator_period) : Long.UZERO,
      fraction: isSet(object.fraction) ? String(object.fraction) : ""
    };
  },
  toJSON(message: ValidatorSlashEvent): unknown {
    const obj: any = {};
    message.validator_period !== undefined && (obj.validator_period = (message.validator_period || Long.UZERO).toString());
    message.fraction !== undefined && (obj.fraction = message.fraction);
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorSlashEvent>): ValidatorSlashEvent {
    const message = createBaseValidatorSlashEvent();
    message.validator_period = object.validator_period !== undefined && object.validator_period !== null ? Long.fromValue(object.validator_period) : Long.UZERO;
    message.fraction = object.fraction ?? "";
    return message;
  },
  fromAmino(object: ValidatorSlashEventAmino): ValidatorSlashEvent {
    return {
      validator_period: Long.fromString(object.validator_period),
      fraction: object.fraction
    };
  },
  toAmino(message: ValidatorSlashEvent): ValidatorSlashEventAmino {
    const obj: any = {};
    obj.validator_period = message.validator_period ? message.validator_period.toString() : undefined;
    obj.fraction = message.fraction;
    return obj;
  },
  fromAminoMsg(object: ValidatorSlashEventAminoMsg): ValidatorSlashEvent {
    return ValidatorSlashEvent.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorSlashEvent): ValidatorSlashEventAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorSlashEvent",
      value: ValidatorSlashEvent.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorSlashEventProtoMsg): ValidatorSlashEvent {
    return ValidatorSlashEvent.decode(message.value);
  },
  toProto(message: ValidatorSlashEvent): Uint8Array {
    return ValidatorSlashEvent.encode(message).finish();
  },
  toProtoMsg(message: ValidatorSlashEvent): ValidatorSlashEventProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvent",
      value: ValidatorSlashEvent.encode(message).finish()
    };
  }
};
function createBaseValidatorSlashEvents(): ValidatorSlashEvents {
  return {
    validator_slash_events: []
  };
}
export const ValidatorSlashEvents = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvents",
  aminoType: "cosmos-sdk/ValidatorSlashEvents",
  encode(message: ValidatorSlashEvents, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validator_slash_events) {
      ValidatorSlashEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSlashEvents {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashEvents();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_slash_events.push(ValidatorSlashEvent.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorSlashEvents {
    return {
      validator_slash_events: Array.isArray(object?.validator_slash_events) ? object.validator_slash_events.map((e: any) => ValidatorSlashEvent.fromJSON(e)) : []
    };
  },
  toJSON(message: ValidatorSlashEvents): unknown {
    const obj: any = {};
    if (message.validator_slash_events) {
      obj.validator_slash_events = message.validator_slash_events.map(e => e ? ValidatorSlashEvent.toJSON(e) : undefined);
    } else {
      obj.validator_slash_events = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorSlashEvents>): ValidatorSlashEvents {
    const message = createBaseValidatorSlashEvents();
    message.validator_slash_events = object.validator_slash_events?.map(e => ValidatorSlashEvent.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ValidatorSlashEventsAmino): ValidatorSlashEvents {
    return {
      validator_slash_events: Array.isArray(object?.validator_slash_events) ? object.validator_slash_events.map((e: any) => ValidatorSlashEvent.fromAmino(e)) : []
    };
  },
  toAmino(message: ValidatorSlashEvents): ValidatorSlashEventsAmino {
    const obj: any = {};
    if (message.validator_slash_events) {
      obj.validator_slash_events = message.validator_slash_events.map(e => e ? ValidatorSlashEvent.toAmino(e) : undefined);
    } else {
      obj.validator_slash_events = [];
    }
    return obj;
  },
  fromAminoMsg(object: ValidatorSlashEventsAminoMsg): ValidatorSlashEvents {
    return ValidatorSlashEvents.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorSlashEvents): ValidatorSlashEventsAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorSlashEvents",
      value: ValidatorSlashEvents.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorSlashEventsProtoMsg): ValidatorSlashEvents {
    return ValidatorSlashEvents.decode(message.value);
  },
  toProto(message: ValidatorSlashEvents): Uint8Array {
    return ValidatorSlashEvents.encode(message).finish();
  },
  toProtoMsg(message: ValidatorSlashEvents): ValidatorSlashEventsProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvents",
      value: ValidatorSlashEvents.encode(message).finish()
    };
  }
};
function createBaseFeePool(): FeePool {
  return {
    community_pool: []
  };
}
export const FeePool = {
  typeUrl: "/cosmos.distribution.v1beta1.FeePool",
  aminoType: "cosmos-sdk/FeePool",
  encode(message: FeePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.community_pool) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): FeePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.community_pool.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FeePool {
    return {
      community_pool: Array.isArray(object?.community_pool) ? object.community_pool.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  toJSON(message: FeePool): unknown {
    const obj: any = {};
    if (message.community_pool) {
      obj.community_pool = message.community_pool.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.community_pool = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<FeePool>): FeePool {
    const message = createBaseFeePool();
    message.community_pool = object.community_pool?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: FeePoolAmino): FeePool {
    return {
      community_pool: Array.isArray(object?.community_pool) ? object.community_pool.map((e: any) => DecCoin.fromAmino(e)) : []
    };
  },
  toAmino(message: FeePool): FeePoolAmino {
    const obj: any = {};
    if (message.community_pool) {
      obj.community_pool = message.community_pool.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.community_pool = [];
    }
    return obj;
  },
  fromAminoMsg(object: FeePoolAminoMsg): FeePool {
    return FeePool.fromAmino(object.value);
  },
  toAminoMsg(message: FeePool): FeePoolAminoMsg {
    return {
      type: "cosmos-sdk/FeePool",
      value: FeePool.toAmino(message)
    };
  },
  fromProtoMsg(message: FeePoolProtoMsg): FeePool {
    return FeePool.decode(message.value);
  },
  toProto(message: FeePool): Uint8Array {
    return FeePool.encode(message).finish();
  },
  toProtoMsg(message: FeePool): FeePoolProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.FeePool",
      value: FeePool.encode(message).finish()
    };
  }
};
function createBaseCommunityPoolSpendProposal(): CommunityPoolSpendProposal {
  return {
    $typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
    title: "",
    description: "",
    recipient: "",
    amount: []
  };
}
export const CommunityPoolSpendProposal = {
  typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
  aminoType: "cosmos-sdk/CommunityPoolSpendProposal",
  encode(message: CommunityPoolSpendProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolSpendProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolSpendProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        case 4:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CommunityPoolSpendProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: CommunityPoolSpendProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<CommunityPoolSpendProposal>): CommunityPoolSpendProposal {
    const message = createBaseCommunityPoolSpendProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CommunityPoolSpendProposalAmino): CommunityPoolSpendProposal {
    return {
      title: object.title,
      description: object.description,
      recipient: object.recipient,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: CommunityPoolSpendProposal): CommunityPoolSpendProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.recipient = message.recipient;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: CommunityPoolSpendProposalAminoMsg): CommunityPoolSpendProposal {
    return CommunityPoolSpendProposal.fromAmino(object.value);
  },
  toAminoMsg(message: CommunityPoolSpendProposal): CommunityPoolSpendProposalAminoMsg {
    return {
      type: "cosmos-sdk/CommunityPoolSpendProposal",
      value: CommunityPoolSpendProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: CommunityPoolSpendProposalProtoMsg): CommunityPoolSpendProposal {
    return CommunityPoolSpendProposal.decode(message.value);
  },
  toProto(message: CommunityPoolSpendProposal): Uint8Array {
    return CommunityPoolSpendProposal.encode(message).finish();
  },
  toProtoMsg(message: CommunityPoolSpendProposal): CommunityPoolSpendProposalProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
      value: CommunityPoolSpendProposal.encode(message).finish()
    };
  }
};
function createBaseDelegatorStartingInfo(): DelegatorStartingInfo {
  return {
    previous_period: Long.UZERO,
    stake: "",
    height: Long.UZERO
  };
}
export const DelegatorStartingInfo = {
  typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfo",
  aminoType: "cosmos-sdk/DelegatorStartingInfo",
  encode(message: DelegatorStartingInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.previous_period.isZero()) {
      writer.uint32(8).uint64(message.previous_period);
    }
    if (message.stake !== "") {
      writer.uint32(18).string(message.stake);
    }
    if (!message.height.isZero()) {
      writer.uint32(24).uint64(message.height);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorStartingInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorStartingInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.previous_period = (reader.uint64() as Long);
          break;
        case 2:
          message.stake = reader.string();
          break;
        case 3:
          message.height = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegatorStartingInfo {
    return {
      previous_period: isSet(object.previous_period) ? Long.fromValue(object.previous_period) : Long.UZERO,
      stake: isSet(object.stake) ? String(object.stake) : "",
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO
    };
  },
  toJSON(message: DelegatorStartingInfo): unknown {
    const obj: any = {};
    message.previous_period !== undefined && (obj.previous_period = (message.previous_period || Long.UZERO).toString());
    message.stake !== undefined && (obj.stake = message.stake);
    message.height !== undefined && (obj.height = (message.height || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<DelegatorStartingInfo>): DelegatorStartingInfo {
    const message = createBaseDelegatorStartingInfo();
    message.previous_period = object.previous_period !== undefined && object.previous_period !== null ? Long.fromValue(object.previous_period) : Long.UZERO;
    message.stake = object.stake ?? "";
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    return message;
  },
  fromAmino(object: DelegatorStartingInfoAmino): DelegatorStartingInfo {
    return {
      previous_period: Long.fromString(object.previous_period),
      stake: object.stake,
      height: Long.fromString(object.height)
    };
  },
  toAmino(message: DelegatorStartingInfo): DelegatorStartingInfoAmino {
    const obj: any = {};
    obj.previous_period = message.previous_period ? message.previous_period.toString() : undefined;
    obj.stake = message.stake;
    obj.height = message.height ? message.height.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: DelegatorStartingInfoAminoMsg): DelegatorStartingInfo {
    return DelegatorStartingInfo.fromAmino(object.value);
  },
  toAminoMsg(message: DelegatorStartingInfo): DelegatorStartingInfoAminoMsg {
    return {
      type: "cosmos-sdk/DelegatorStartingInfo",
      value: DelegatorStartingInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: DelegatorStartingInfoProtoMsg): DelegatorStartingInfo {
    return DelegatorStartingInfo.decode(message.value);
  },
  toProto(message: DelegatorStartingInfo): Uint8Array {
    return DelegatorStartingInfo.encode(message).finish();
  },
  toProtoMsg(message: DelegatorStartingInfo): DelegatorStartingInfoProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfo",
      value: DelegatorStartingInfo.encode(message).finish()
    };
  }
};
function createBaseDelegationDelegatorReward(): DelegationDelegatorReward {
  return {
    validator_address: "",
    reward: []
  };
}
export const DelegationDelegatorReward = {
  typeUrl: "/cosmos.distribution.v1beta1.DelegationDelegatorReward",
  aminoType: "cosmos-sdk/DelegationDelegatorReward",
  encode(message: DelegationDelegatorReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }
    for (const v of message.reward) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DelegationDelegatorReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationDelegatorReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_address = reader.string();
          break;
        case 2:
          message.reward.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegationDelegatorReward {
    return {
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      reward: Array.isArray(object?.reward) ? object.reward.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  toJSON(message: DelegationDelegatorReward): unknown {
    const obj: any = {};
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    if (message.reward) {
      obj.reward = message.reward.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.reward = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<DelegationDelegatorReward>): DelegationDelegatorReward {
    const message = createBaseDelegationDelegatorReward();
    message.validator_address = object.validator_address ?? "";
    message.reward = object.reward?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DelegationDelegatorRewardAmino): DelegationDelegatorReward {
    return {
      validator_address: object.validator_address,
      reward: Array.isArray(object?.reward) ? object.reward.map((e: any) => DecCoin.fromAmino(e)) : []
    };
  },
  toAmino(message: DelegationDelegatorReward): DelegationDelegatorRewardAmino {
    const obj: any = {};
    obj.validator_address = message.validator_address;
    if (message.reward) {
      obj.reward = message.reward.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.reward = [];
    }
    return obj;
  },
  fromAminoMsg(object: DelegationDelegatorRewardAminoMsg): DelegationDelegatorReward {
    return DelegationDelegatorReward.fromAmino(object.value);
  },
  toAminoMsg(message: DelegationDelegatorReward): DelegationDelegatorRewardAminoMsg {
    return {
      type: "cosmos-sdk/DelegationDelegatorReward",
      value: DelegationDelegatorReward.toAmino(message)
    };
  },
  fromProtoMsg(message: DelegationDelegatorRewardProtoMsg): DelegationDelegatorReward {
    return DelegationDelegatorReward.decode(message.value);
  },
  toProto(message: DelegationDelegatorReward): Uint8Array {
    return DelegationDelegatorReward.encode(message).finish();
  },
  toProtoMsg(message: DelegationDelegatorReward): DelegationDelegatorRewardProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.DelegationDelegatorReward",
      value: DelegationDelegatorReward.encode(message).finish()
    };
  }
};
function createBaseCommunityPoolSpendProposalWithDeposit(): CommunityPoolSpendProposalWithDeposit {
  return {
    $typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
    title: "",
    description: "",
    recipient: "",
    amount: "",
    deposit: ""
  };
}
export const CommunityPoolSpendProposalWithDeposit = {
  typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
  aminoType: "cosmos-sdk/CommunityPoolSpendProposalWithDeposit",
  encode(message: CommunityPoolSpendProposalWithDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.deposit !== "") {
      writer.uint32(42).string(message.deposit);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolSpendProposalWithDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolSpendProposalWithDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.deposit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CommunityPoolSpendProposalWithDeposit {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },
  toJSON(message: CommunityPoolSpendProposalWithDeposit): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.amount !== undefined && (obj.amount = message.amount);
    message.deposit !== undefined && (obj.deposit = message.deposit);
    return obj;
  },
  fromPartial(object: DeepPartial<CommunityPoolSpendProposalWithDeposit>): CommunityPoolSpendProposalWithDeposit {
    const message = createBaseCommunityPoolSpendProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount ?? "";
    message.deposit = object.deposit ?? "";
    return message;
  },
  fromAmino(object: CommunityPoolSpendProposalWithDepositAmino): CommunityPoolSpendProposalWithDeposit {
    return {
      title: object.title,
      description: object.description,
      recipient: object.recipient,
      amount: object.amount,
      deposit: object.deposit
    };
  },
  toAmino(message: CommunityPoolSpendProposalWithDeposit): CommunityPoolSpendProposalWithDepositAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.recipient = message.recipient;
    obj.amount = message.amount;
    obj.deposit = message.deposit;
    return obj;
  },
  fromAminoMsg(object: CommunityPoolSpendProposalWithDepositAminoMsg): CommunityPoolSpendProposalWithDeposit {
    return CommunityPoolSpendProposalWithDeposit.fromAmino(object.value);
  },
  toAminoMsg(message: CommunityPoolSpendProposalWithDeposit): CommunityPoolSpendProposalWithDepositAminoMsg {
    return {
      type: "cosmos-sdk/CommunityPoolSpendProposalWithDeposit",
      value: CommunityPoolSpendProposalWithDeposit.toAmino(message)
    };
  },
  fromProtoMsg(message: CommunityPoolSpendProposalWithDepositProtoMsg): CommunityPoolSpendProposalWithDeposit {
    return CommunityPoolSpendProposalWithDeposit.decode(message.value);
  },
  toProto(message: CommunityPoolSpendProposalWithDeposit): Uint8Array {
    return CommunityPoolSpendProposalWithDeposit.encode(message).finish();
  },
  toProtoMsg(message: CommunityPoolSpendProposalWithDeposit): CommunityPoolSpendProposalWithDepositProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
      value: CommunityPoolSpendProposalWithDeposit.encode(message).finish()
    };
  }
};