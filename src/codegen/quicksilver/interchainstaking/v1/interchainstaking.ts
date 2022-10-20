import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial, toTimestamp, fromTimestamp } from "../../../helpers";
export interface Zone {
  connectionId: string;
  chainId: string;
  depositAddress?: ICAAccount;
  withdrawalAddress?: ICAAccount;
  performanceAddress?: ICAAccount;
  delegationAddress?: ICAAccount;
  accountPrefix: string;
  localDenom: string;
  baseDenom: string;
  redemptionRate: string;
  lastRedemptionRate: string;
  validators: Validator[];
  aggregateIntent: ValidatorIntent[];
  multiSend: boolean;
  liquidityModule: boolean;
  withdrawalWaitgroup: number;
  ibcNextValidatorsHash: Uint8Array;
  validatorSelectionAllocation: Long;
  holdingsAllocation: Long;
  /** deprecated remove me. */

  lastEpochHeight: Long;
  tvl: string;
  unbondingPeriod: Long;
}
export interface ZoneSDKType {
  connection_id: string;
  chain_id: string;
  deposit_address?: ICAAccountSDKType;
  withdrawal_address?: ICAAccountSDKType;
  performance_address?: ICAAccountSDKType;
  delegation_address?: ICAAccountSDKType;
  account_prefix: string;
  local_denom: string;
  base_denom: string;
  redemption_rate: string;
  last_redemption_rate: string;
  validators: ValidatorSDKType[];
  aggregate_intent: ValidatorIntentSDKType[];
  multi_send: boolean;
  liquidity_module: boolean;
  withdrawal_waitgroup: number;
  ibc_next_validators_hash: Uint8Array;
  validator_selection_allocation: Long;
  holdings_allocation: Long;
  /** deprecated remove me. */

  last_epoch_height: Long;
  tvl: string;
  unbonding_period: Long;
}
export interface ICAAccount {
  address: string;
  /** balance defines the different coins this balance holds. */

  balance: Coin[];
  portName: string;
  withdrawalAddress: string;
  balanceWaitgroup: number;
}
export interface ICAAccountSDKType {
  address: string;
  /** balance defines the different coins this balance holds. */

  balance: CoinSDKType[];
  port_name: string;
  withdrawal_address: string;
  balance_waitgroup: number;
}
export interface Distribution {
  valoper: string;
  amount: Long;
}
export interface DistributionSDKType {
  valoper: string;
  amount: Long;
}
export interface WithdrawalRecord {
  chainId: string;
  delegator: string;
  distribution: Distribution[];
  recipient: string;
  amount: Coin[];
  burnAmount?: Coin;
  txhash: string;
  status: number;
  completionTime?: Date;
}
export interface WithdrawalRecordSDKType {
  chain_id: string;
  delegator: string;
  distribution: DistributionSDKType[];
  recipient: string;
  amount: CoinSDKType[];
  burn_amount?: CoinSDKType;
  txhash: string;
  status: number;
  completion_time?: Date;
}
export interface UnbondingRecord {
  chainId: string;
  epochNumber: Long;
  validator: string;
  relatedTxhash: string[];
}
export interface UnbondingRecordSDKType {
  chain_id: string;
  epoch_number: Long;
  validator: string;
  related_txhash: string[];
}
export interface RedelegationRecord {
  chainId: string;
  epochNumber: Long;
  delegator: string;
  validator: string;
  amount: Long;
  completionTime?: Date;
}
export interface RedelegationRecordSDKType {
  chain_id: string;
  epoch_number: Long;
  delegator: string;
  validator: string;
  amount: Long;
  completion_time?: Date;
}
export interface TransferRecord {
  sender: string;
  recipient: string;
  amount?: Coin;
}
export interface TransferRecordSDKType {
  sender: string;
  recipient: string;
  amount?: CoinSDKType;
}
export interface Validator {
  valoperAddress: string;
  commissionRate: string;
  delegatorShares: string;
  votingPower: string;
  score: string;
}
export interface ValidatorSDKType {
  valoper_address: string;
  commission_rate: string;
  delegator_shares: string;
  voting_power: string;
  score: string;
}
export interface DelegatorIntent {
  delegator: string;
  intents: ValidatorIntent[];
}
export interface DelegatorIntentSDKType {
  delegator: string;
  intents: ValidatorIntentSDKType[];
}
export interface ValidatorIntent {
  valoperAddress: string;
  weight: string;
}
export interface ValidatorIntentSDKType {
  valoper_address: string;
  weight: string;
}
export interface Delegation {
  delegationAddress: string;
  validatorAddress: string;
  amount?: Coin;
  height: Long;
  redelegationEnd: Long;
}
export interface DelegationSDKType {
  delegation_address: string;
  validator_address: string;
  amount?: CoinSDKType;
  height: Long;
  redelegation_end: Long;
}
export interface PortConnectionTuple {
  connectionId: string;
  portId: string;
}
export interface PortConnectionTupleSDKType {
  connection_id: string;
  port_id: string;
}
export interface Receipt {
  chainId: string;
  sender: string;
  txhash: string;
  amount: Coin[];
}
export interface ReceiptSDKType {
  chain_id: string;
  sender: string;
  txhash: string;
  amount: CoinSDKType[];
}

function createBaseZone(): Zone {
  return {
    connectionId: "",
    chainId: "",
    depositAddress: undefined,
    withdrawalAddress: undefined,
    performanceAddress: undefined,
    delegationAddress: undefined,
    accountPrefix: "",
    localDenom: "",
    baseDenom: "",
    redemptionRate: "",
    lastRedemptionRate: "",
    validators: [],
    aggregateIntent: [],
    multiSend: false,
    liquidityModule: false,
    withdrawalWaitgroup: 0,
    ibcNextValidatorsHash: new Uint8Array(),
    validatorSelectionAllocation: Long.UZERO,
    holdingsAllocation: Long.UZERO,
    lastEpochHeight: Long.ZERO,
    tvl: "",
    unbondingPeriod: Long.ZERO
  };
}

export const Zone = {
  encode(message: Zone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }

    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }

    if (message.depositAddress !== undefined) {
      ICAAccount.encode(message.depositAddress, writer.uint32(26).fork()).ldelim();
    }

    if (message.withdrawalAddress !== undefined) {
      ICAAccount.encode(message.withdrawalAddress, writer.uint32(34).fork()).ldelim();
    }

    if (message.performanceAddress !== undefined) {
      ICAAccount.encode(message.performanceAddress, writer.uint32(42).fork()).ldelim();
    }

    if (message.delegationAddress !== undefined) {
      ICAAccount.encode(message.delegationAddress, writer.uint32(50).fork()).ldelim();
    }

    if (message.accountPrefix !== "") {
      writer.uint32(58).string(message.accountPrefix);
    }

    if (message.localDenom !== "") {
      writer.uint32(66).string(message.localDenom);
    }

    if (message.baseDenom !== "") {
      writer.uint32(74).string(message.baseDenom);
    }

    if (message.redemptionRate !== "") {
      writer.uint32(82).string(message.redemptionRate);
    }

    if (message.lastRedemptionRate !== "") {
      writer.uint32(90).string(message.lastRedemptionRate);
    }

    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(98).fork()).ldelim();
    }

    for (const v of message.aggregateIntent) {
      ValidatorIntent.encode(v!, writer.uint32(106).fork()).ldelim();
    }

    if (message.multiSend === true) {
      writer.uint32(112).bool(message.multiSend);
    }

    if (message.liquidityModule === true) {
      writer.uint32(120).bool(message.liquidityModule);
    }

    if (message.withdrawalWaitgroup !== 0) {
      writer.uint32(128).uint32(message.withdrawalWaitgroup);
    }

    if (message.ibcNextValidatorsHash.length !== 0) {
      writer.uint32(138).bytes(message.ibcNextValidatorsHash);
    }

    if (!message.validatorSelectionAllocation.isZero()) {
      writer.uint32(144).uint64(message.validatorSelectionAllocation);
    }

    if (!message.holdingsAllocation.isZero()) {
      writer.uint32(152).uint64(message.holdingsAllocation);
    }

    if (!message.lastEpochHeight.isZero()) {
      writer.uint32(160).int64(message.lastEpochHeight);
    }

    if (message.tvl !== "") {
      writer.uint32(170).string(message.tvl);
    }

    if (!message.unbondingPeriod.isZero()) {
      writer.uint32(176).int64(message.unbondingPeriod);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Zone {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseZone();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;

        case 2:
          message.chainId = reader.string();
          break;

        case 3:
          message.depositAddress = ICAAccount.decode(reader, reader.uint32());
          break;

        case 4:
          message.withdrawalAddress = ICAAccount.decode(reader, reader.uint32());
          break;

        case 5:
          message.performanceAddress = ICAAccount.decode(reader, reader.uint32());
          break;

        case 6:
          message.delegationAddress = ICAAccount.decode(reader, reader.uint32());
          break;

        case 7:
          message.accountPrefix = reader.string();
          break;

        case 8:
          message.localDenom = reader.string();
          break;

        case 9:
          message.baseDenom = reader.string();
          break;

        case 10:
          message.redemptionRate = reader.string();
          break;

        case 11:
          message.lastRedemptionRate = reader.string();
          break;

        case 12:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;

        case 13:
          message.aggregateIntent.push(ValidatorIntent.decode(reader, reader.uint32()));
          break;

        case 14:
          message.multiSend = reader.bool();
          break;

        case 15:
          message.liquidityModule = reader.bool();
          break;

        case 16:
          message.withdrawalWaitgroup = reader.uint32();
          break;

        case 17:
          message.ibcNextValidatorsHash = reader.bytes();
          break;

        case 18:
          message.validatorSelectionAllocation = (reader.uint64() as Long);
          break;

        case 19:
          message.holdingsAllocation = (reader.uint64() as Long);
          break;

        case 20:
          message.lastEpochHeight = (reader.int64() as Long);
          break;

        case 21:
          message.tvl = reader.string();
          break;

        case 22:
          message.unbondingPeriod = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Zone>): Zone {
    const message = createBaseZone();
    message.connectionId = object.connectionId ?? "";
    message.chainId = object.chainId ?? "";
    message.depositAddress = object.depositAddress !== undefined && object.depositAddress !== null ? ICAAccount.fromPartial(object.depositAddress) : undefined;
    message.withdrawalAddress = object.withdrawalAddress !== undefined && object.withdrawalAddress !== null ? ICAAccount.fromPartial(object.withdrawalAddress) : undefined;
    message.performanceAddress = object.performanceAddress !== undefined && object.performanceAddress !== null ? ICAAccount.fromPartial(object.performanceAddress) : undefined;
    message.delegationAddress = object.delegationAddress !== undefined && object.delegationAddress !== null ? ICAAccount.fromPartial(object.delegationAddress) : undefined;
    message.accountPrefix = object.accountPrefix ?? "";
    message.localDenom = object.localDenom ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.redemptionRate = object.redemptionRate ?? "";
    message.lastRedemptionRate = object.lastRedemptionRate ?? "";
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.aggregateIntent = object.aggregateIntent?.map(e => ValidatorIntent.fromPartial(e)) || [];
    message.multiSend = object.multiSend ?? false;
    message.liquidityModule = object.liquidityModule ?? false;
    message.withdrawalWaitgroup = object.withdrawalWaitgroup ?? 0;
    message.ibcNextValidatorsHash = object.ibcNextValidatorsHash ?? new Uint8Array();
    message.validatorSelectionAllocation = object.validatorSelectionAllocation !== undefined && object.validatorSelectionAllocation !== null ? Long.fromValue(object.validatorSelectionAllocation) : Long.UZERO;
    message.holdingsAllocation = object.holdingsAllocation !== undefined && object.holdingsAllocation !== null ? Long.fromValue(object.holdingsAllocation) : Long.UZERO;
    message.lastEpochHeight = object.lastEpochHeight !== undefined && object.lastEpochHeight !== null ? Long.fromValue(object.lastEpochHeight) : Long.ZERO;
    message.tvl = object.tvl ?? "";
    message.unbondingPeriod = object.unbondingPeriod !== undefined && object.unbondingPeriod !== null ? Long.fromValue(object.unbondingPeriod) : Long.ZERO;
    return message;
  }

};

function createBaseICAAccount(): ICAAccount {
  return {
    address: "",
    balance: [],
    portName: "",
    withdrawalAddress: "",
    balanceWaitgroup: 0
  };
}

export const ICAAccount = {
  encode(message: ICAAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    for (const v of message.balance) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.portName !== "") {
      writer.uint32(26).string(message.portName);
    }

    if (message.withdrawalAddress !== "") {
      writer.uint32(34).string(message.withdrawalAddress);
    }

    if (message.balanceWaitgroup !== 0) {
      writer.uint32(40).uint32(message.balanceWaitgroup);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ICAAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseICAAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.balance.push(Coin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.portName = reader.string();
          break;

        case 4:
          message.withdrawalAddress = reader.string();
          break;

        case 5:
          message.balanceWaitgroup = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ICAAccount>): ICAAccount {
    const message = createBaseICAAccount();
    message.address = object.address ?? "";
    message.balance = object.balance?.map(e => Coin.fromPartial(e)) || [];
    message.portName = object.portName ?? "";
    message.withdrawalAddress = object.withdrawalAddress ?? "";
    message.balanceWaitgroup = object.balanceWaitgroup ?? 0;
    return message;
  }

};

function createBaseDistribution(): Distribution {
  return {
    valoper: "",
    amount: Long.UZERO
  };
}

export const Distribution = {
  encode(message: Distribution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valoper !== "") {
      writer.uint32(10).string(message.valoper);
    }

    if (!message.amount.isZero()) {
      writer.uint32(16).uint64(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Distribution {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistribution();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.valoper = reader.string();
          break;

        case 2:
          message.amount = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Distribution>): Distribution {
    const message = createBaseDistribution();
    message.valoper = object.valoper ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  }

};

function createBaseWithdrawalRecord(): WithdrawalRecord {
  return {
    chainId: "",
    delegator: "",
    distribution: [],
    recipient: "",
    amount: [],
    burnAmount: undefined,
    txhash: "",
    status: 0,
    completionTime: undefined
  };
}

export const WithdrawalRecord = {
  encode(message: WithdrawalRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }

    if (message.delegator !== "") {
      writer.uint32(18).string(message.delegator);
    }

    for (const v of message.distribution) {
      Distribution.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }

    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    if (message.burnAmount !== undefined) {
      Coin.encode(message.burnAmount, writer.uint32(50).fork()).ldelim();
    }

    if (message.txhash !== "") {
      writer.uint32(58).string(message.txhash);
    }

    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }

    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(74).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawalRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawalRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;

        case 2:
          message.delegator = reader.string();
          break;

        case 3:
          message.distribution.push(Distribution.decode(reader, reader.uint32()));
          break;

        case 4:
          message.recipient = reader.string();
          break;

        case 5:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        case 6:
          message.burnAmount = Coin.decode(reader, reader.uint32());
          break;

        case 7:
          message.txhash = reader.string();
          break;

        case 8:
          message.status = reader.int32();
          break;

        case 9:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<WithdrawalRecord>): WithdrawalRecord {
    const message = createBaseWithdrawalRecord();
    message.chainId = object.chainId ?? "";
    message.delegator = object.delegator ?? "";
    message.distribution = object.distribution?.map(e => Distribution.fromPartial(e)) || [];
    message.recipient = object.recipient ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.burnAmount = object.burnAmount !== undefined && object.burnAmount !== null ? Coin.fromPartial(object.burnAmount) : undefined;
    message.txhash = object.txhash ?? "";
    message.status = object.status ?? 0;
    message.completionTime = object.completionTime ?? undefined;
    return message;
  }

};

function createBaseUnbondingRecord(): UnbondingRecord {
  return {
    chainId: "",
    epochNumber: Long.ZERO,
    validator: "",
    relatedTxhash: []
  };
}

export const UnbondingRecord = {
  encode(message: UnbondingRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }

    if (!message.epochNumber.isZero()) {
      writer.uint32(16).int64(message.epochNumber);
    }

    if (message.validator !== "") {
      writer.uint32(26).string(message.validator);
    }

    for (const v of message.relatedTxhash) {
      writer.uint32(34).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;

        case 2:
          message.epochNumber = (reader.int64() as Long);
          break;

        case 3:
          message.validator = reader.string();
          break;

        case 4:
          message.relatedTxhash.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<UnbondingRecord>): UnbondingRecord {
    const message = createBaseUnbondingRecord();
    message.chainId = object.chainId ?? "";
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? Long.fromValue(object.epochNumber) : Long.ZERO;
    message.validator = object.validator ?? "";
    message.relatedTxhash = object.relatedTxhash?.map(e => e) || [];
    return message;
  }

};

function createBaseRedelegationRecord(): RedelegationRecord {
  return {
    chainId: "",
    epochNumber: Long.ZERO,
    delegator: "",
    validator: "",
    amount: Long.ZERO,
    completionTime: undefined
  };
}

export const RedelegationRecord = {
  encode(message: RedelegationRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }

    if (!message.epochNumber.isZero()) {
      writer.uint32(16).int64(message.epochNumber);
    }

    if (message.delegator !== "") {
      writer.uint32(26).string(message.delegator);
    }

    if (message.validator !== "") {
      writer.uint32(34).string(message.validator);
    }

    if (!message.amount.isZero()) {
      writer.uint32(40).int64(message.amount);
    }

    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RedelegationRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;

        case 2:
          message.epochNumber = (reader.int64() as Long);
          break;

        case 3:
          message.delegator = reader.string();
          break;

        case 4:
          message.validator = reader.string();
          break;

        case 5:
          message.amount = (reader.int64() as Long);
          break;

        case 6:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RedelegationRecord>): RedelegationRecord {
    const message = createBaseRedelegationRecord();
    message.chainId = object.chainId ?? "";
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? Long.fromValue(object.epochNumber) : Long.ZERO;
    message.delegator = object.delegator ?? "";
    message.validator = object.validator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.ZERO;
    message.completionTime = object.completionTime ?? undefined;
    return message;
  }

};

function createBaseTransferRecord(): TransferRecord {
  return {
    sender: "",
    recipient: "",
    amount: undefined
  };
}

export const TransferRecord = {
  encode(message: TransferRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransferRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.recipient = reader.string();
          break;

        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TransferRecord>): TransferRecord {
    const message = createBaseTransferRecord();
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseValidator(): Validator {
  return {
    valoperAddress: "",
    commissionRate: "",
    delegatorShares: "",
    votingPower: "",
    score: ""
  };
}

export const Validator = {
  encode(message: Validator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valoperAddress !== "") {
      writer.uint32(10).string(message.valoperAddress);
    }

    if (message.commissionRate !== "") {
      writer.uint32(18).string(message.commissionRate);
    }

    if (message.delegatorShares !== "") {
      writer.uint32(26).string(message.delegatorShares);
    }

    if (message.votingPower !== "") {
      writer.uint32(34).string(message.votingPower);
    }

    if (message.score !== "") {
      writer.uint32(42).string(message.score);
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
          message.valoperAddress = reader.string();
          break;

        case 2:
          message.commissionRate = reader.string();
          break;

        case 3:
          message.delegatorShares = reader.string();
          break;

        case 4:
          message.votingPower = reader.string();
          break;

        case 5:
          message.score = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Validator>): Validator {
    const message = createBaseValidator();
    message.valoperAddress = object.valoperAddress ?? "";
    message.commissionRate = object.commissionRate ?? "";
    message.delegatorShares = object.delegatorShares ?? "";
    message.votingPower = object.votingPower ?? "";
    message.score = object.score ?? "";
    return message;
  }

};

function createBaseDelegatorIntent(): DelegatorIntent {
  return {
    delegator: "",
    intents: []
  };
}

export const DelegatorIntent = {
  encode(message: DelegatorIntent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }

    for (const v of message.intents) {
      ValidatorIntent.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorIntent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorIntent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;

        case 2:
          message.intents.push(ValidatorIntent.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DelegatorIntent>): DelegatorIntent {
    const message = createBaseDelegatorIntent();
    message.delegator = object.delegator ?? "";
    message.intents = object.intents?.map(e => ValidatorIntent.fromPartial(e)) || [];
    return message;
  }

};

function createBaseValidatorIntent(): ValidatorIntent {
  return {
    valoperAddress: "",
    weight: ""
  };
}

export const ValidatorIntent = {
  encode(message: ValidatorIntent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valoperAddress !== "") {
      writer.uint32(10).string(message.valoperAddress);
    }

    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorIntent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorIntent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.valoperAddress = reader.string();
          break;

        case 2:
          message.weight = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ValidatorIntent>): ValidatorIntent {
    const message = createBaseValidatorIntent();
    message.valoperAddress = object.valoperAddress ?? "";
    message.weight = object.weight ?? "";
    return message;
  }

};

function createBaseDelegation(): Delegation {
  return {
    delegationAddress: "",
    validatorAddress: "",
    amount: undefined,
    height: Long.ZERO,
    redelegationEnd: Long.ZERO
  };
}

export const Delegation = {
  encode(message: Delegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegationAddress !== "") {
      writer.uint32(10).string(message.delegationAddress);
    }

    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    if (!message.height.isZero()) {
      writer.uint32(32).int64(message.height);
    }

    if (!message.redelegationEnd.isZero()) {
      writer.uint32(40).int64(message.redelegationEnd);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Delegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegationAddress = reader.string();
          break;

        case 2:
          message.validatorAddress = reader.string();
          break;

        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.height = (reader.int64() as Long);
          break;

        case 5:
          message.redelegationEnd = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Delegation>): Delegation {
    const message = createBaseDelegation();
    message.delegationAddress = object.delegationAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.redelegationEnd = object.redelegationEnd !== undefined && object.redelegationEnd !== null ? Long.fromValue(object.redelegationEnd) : Long.ZERO;
    return message;
  }

};

function createBasePortConnectionTuple(): PortConnectionTuple {
  return {
    connectionId: "",
    portId: ""
  };
}

export const PortConnectionTuple = {
  encode(message: PortConnectionTuple, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }

    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PortConnectionTuple {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePortConnectionTuple();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;

        case 2:
          message.portId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PortConnectionTuple>): PortConnectionTuple {
    const message = createBasePortConnectionTuple();
    message.connectionId = object.connectionId ?? "";
    message.portId = object.portId ?? "";
    return message;
  }

};

function createBaseReceipt(): Receipt {
  return {
    chainId: "",
    sender: "",
    txhash: "",
    amount: []
  };
}

export const Receipt = {
  encode(message: Receipt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }

    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }

    if (message.txhash !== "") {
      writer.uint32(26).string(message.txhash);
    }

    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Receipt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReceipt();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;

        case 2:
          message.sender = reader.string();
          break;

        case 3:
          message.txhash = reader.string();
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

  fromPartial(object: DeepPartial<Receipt>): Receipt {
    const message = createBaseReceipt();
    message.chainId = object.chainId ?? "";
    message.sender = object.sender ?? "";
    message.txhash = object.txhash ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};