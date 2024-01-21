import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Zone {
    connectionId: string;
    chainId: string;
    depositAddress: ICAAccount;
    withdrawalAddress: ICAAccount;
    performanceAddress: ICAAccount;
    delegationAddress: ICAAccount;
    accountPrefix: string;
    localDenom: string;
    baseDenom: string;
    redemptionRate: string;
    lastRedemptionRate: string;
    validators: Validator[];
    aggregateIntent: ValidatorIntent[];
    /** deprecated */
    multiSend: boolean;
    liquidityModule: boolean;
    withdrawalWaitgroup: number;
    ibcNextValidatorsHash: Uint8Array;
    validatorSelectionAllocation: Long;
    holdingsAllocation: Long;
    /** deprecated */
    lastEpochHeight: Long;
    tvl: string;
    unbondingPeriod: Long;
    messagesPerTx: Long;
    decimals: Long;
    unbondingEnabled: boolean;
    depositsEnabled: boolean;
    returnToSender: boolean;
    is118: boolean;
    subzoneInfo: SubzoneInfo;
}
export interface ZoneProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.Zone";
    value: Uint8Array;
}
export interface ZoneAmino {
    connection_id: string;
    chain_id: string;
    deposit_address?: ICAAccountAmino;
    withdrawal_address?: ICAAccountAmino;
    performance_address?: ICAAccountAmino;
    delegation_address?: ICAAccountAmino;
    account_prefix: string;
    local_denom: string;
    base_denom: string;
    redemption_rate: string;
    last_redemption_rate: string;
    validators: ValidatorAmino[];
    aggregate_intent: ValidatorIntentAmino[];
    /** deprecated */
    multi_send: boolean;
    liquidity_module: boolean;
    withdrawal_waitgroup: number;
    ibc_next_validators_hash: Uint8Array;
    validator_selection_allocation: string;
    holdings_allocation: string;
    /** deprecated */
    last_epoch_height: string;
    tvl: string;
    unbonding_period: string;
    messages_per_tx: string;
    decimals: string;
    unbonding_enabled: boolean;
    deposits_enabled: boolean;
    return_to_sender: boolean;
    is_118: boolean;
    subzoneInfo?: SubzoneInfoAmino;
}
export interface ZoneAminoMsg {
    type: "/quicksilver.interchainstaking.v1.Zone";
    value: ZoneAmino;
}
export interface ZoneSDKType {
    connection_id: string;
    chain_id: string;
    deposit_address: ICAAccountSDKType;
    withdrawal_address: ICAAccountSDKType;
    performance_address: ICAAccountSDKType;
    delegation_address: ICAAccountSDKType;
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
    last_epoch_height: Long;
    tvl: string;
    unbonding_period: Long;
    messages_per_tx: Long;
    decimals: Long;
    unbonding_enabled: boolean;
    deposits_enabled: boolean;
    return_to_sender: boolean;
    is_118: boolean;
    subzoneInfo: SubzoneInfoSDKType;
}
export interface SubzoneInfo {
    authority: string;
    baseChainID: string;
}
export interface SubzoneInfoProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.SubzoneInfo";
    value: Uint8Array;
}
export interface SubzoneInfoAmino {
    authority: string;
    base_chainID: string;
}
export interface SubzoneInfoAminoMsg {
    type: "/quicksilver.interchainstaking.v1.SubzoneInfo";
    value: SubzoneInfoAmino;
}
export interface SubzoneInfoSDKType {
    authority: string;
    base_chainID: string;
}
export interface LsmCaps {
    validatorCap: string;
    validatorBondCap: string;
    globalCap: string;
}
export interface LsmCapsProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.LsmCaps";
    value: Uint8Array;
}
export interface LsmCapsAmino {
    validator_cap: string;
    validator_bond_cap: string;
    global_cap: string;
}
export interface LsmCapsAminoMsg {
    type: "/quicksilver.interchainstaking.v1.LsmCaps";
    value: LsmCapsAmino;
}
export interface LsmCapsSDKType {
    validator_cap: string;
    validator_bond_cap: string;
    global_cap: string;
}
export interface ICAAccount {
    address: string;
    /** balance defines the different coins this balance holds. */
    balance: Coin[];
    portName: string;
    withdrawalAddress: string;
    balanceWaitgroup: number;
}
export interface ICAAccountProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.ICAAccount";
    value: Uint8Array;
}
export interface ICAAccountAmino {
    address: string;
    /** balance defines the different coins this balance holds. */
    balance: CoinAmino[];
    port_name: string;
    withdrawal_address: string;
    balance_waitgroup: number;
}
export interface ICAAccountAminoMsg {
    type: "/quicksilver.interchainstaking.v1.ICAAccount";
    value: ICAAccountAmino;
}
export interface ICAAccountSDKType {
    address: string;
    balance: CoinSDKType[];
    port_name: string;
    withdrawal_address: string;
    balance_waitgroup: number;
}
export interface Distribution {
    valoper: string;
    amount: Long;
}
export interface DistributionProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.Distribution";
    value: Uint8Array;
}
export interface DistributionAmino {
    valoper: string;
    amount: string;
}
export interface DistributionAminoMsg {
    type: "/quicksilver.interchainstaking.v1.Distribution";
    value: DistributionAmino;
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
    burnAmount: Coin;
    txhash: string;
    status: number;
    completionTime: Date;
    requeued: boolean;
    acknowledged: boolean;
    epochNumber: Long;
}
export interface WithdrawalRecordProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.WithdrawalRecord";
    value: Uint8Array;
}
export interface WithdrawalRecordAmino {
    chain_id: string;
    delegator: string;
    distribution: DistributionAmino[];
    recipient: string;
    amount: CoinAmino[];
    burn_amount?: CoinAmino;
    txhash: string;
    status: number;
    completion_time?: Date;
    requeued: boolean;
    acknowledged: boolean;
    epoch_number: string;
}
export interface WithdrawalRecordAminoMsg {
    type: "/quicksilver.interchainstaking.v1.WithdrawalRecord";
    value: WithdrawalRecordAmino;
}
export interface WithdrawalRecordSDKType {
    chain_id: string;
    delegator: string;
    distribution: DistributionSDKType[];
    recipient: string;
    amount: CoinSDKType[];
    burn_amount: CoinSDKType;
    txhash: string;
    status: number;
    completion_time: Date;
    requeued: boolean;
    acknowledged: boolean;
    epoch_number: Long;
}
export interface UnbondingRecord {
    chainId: string;
    epochNumber: Long;
    validator: string;
    relatedTxhash: string[];
}
export interface UnbondingRecordProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.UnbondingRecord";
    value: Uint8Array;
}
export interface UnbondingRecordAmino {
    chain_id: string;
    epoch_number: string;
    validator: string;
    related_txhash: string[];
}
export interface UnbondingRecordAminoMsg {
    type: "/quicksilver.interchainstaking.v1.UnbondingRecord";
    value: UnbondingRecordAmino;
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
    source: string;
    destination: string;
    amount: Long;
    completionTime: Date;
}
export interface RedelegationRecordProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.RedelegationRecord";
    value: Uint8Array;
}
export interface RedelegationRecordAmino {
    chain_id: string;
    epoch_number: string;
    source: string;
    destination: string;
    amount: string;
    completion_time?: Date;
}
export interface RedelegationRecordAminoMsg {
    type: "/quicksilver.interchainstaking.v1.RedelegationRecord";
    value: RedelegationRecordAmino;
}
export interface RedelegationRecordSDKType {
    chain_id: string;
    epoch_number: Long;
    source: string;
    destination: string;
    amount: Long;
    completion_time: Date;
}
export interface TransferRecord {
    sender: string;
    recipient: string;
    amount: Coin;
}
export interface TransferRecordProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.TransferRecord";
    value: Uint8Array;
}
export interface TransferRecordAmino {
    sender: string;
    recipient: string;
    amount?: CoinAmino;
}
export interface TransferRecordAminoMsg {
    type: "/quicksilver.interchainstaking.v1.TransferRecord";
    value: TransferRecordAmino;
}
export interface TransferRecordSDKType {
    sender: string;
    recipient: string;
    amount: CoinSDKType;
}
export interface Validator {
    valoperAddress: string;
    commissionRate: string;
    delegatorShares: string;
    votingPower: string;
    score: string;
    status: string;
    jailed: boolean;
    tombstoned: boolean;
    jailedSince: Date;
    /** Number of shares self bonded from the validator */
    validatorBondShares: string;
    /** Number of shares either tokenized or owned by a liquid staking provider */
    liquidShares: string;
}
export interface ValidatorProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.Validator";
    value: Uint8Array;
}
export interface ValidatorAmino {
    valoper_address: string;
    commission_rate: string;
    delegator_shares: string;
    voting_power: string;
    score: string;
    status: string;
    jailed: boolean;
    tombstoned: boolean;
    jailed_since?: Date;
    /** Number of shares self bonded from the validator */
    validator_bond_shares: string;
    /** Number of shares either tokenized or owned by a liquid staking provider */
    liquid_shares: string;
}
export interface ValidatorAminoMsg {
    type: "/quicksilver.interchainstaking.v1.Validator";
    value: ValidatorAmino;
}
export interface ValidatorSDKType {
    valoper_address: string;
    commission_rate: string;
    delegator_shares: string;
    voting_power: string;
    score: string;
    status: string;
    jailed: boolean;
    tombstoned: boolean;
    jailed_since: Date;
    validator_bond_shares: string;
    liquid_shares: string;
}
export interface DelegatorIntent {
    delegator: string;
    intents: ValidatorIntent[];
}
export interface DelegatorIntentProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.DelegatorIntent";
    value: Uint8Array;
}
export interface DelegatorIntentAmino {
    delegator: string;
    intents: ValidatorIntentAmino[];
}
export interface DelegatorIntentAminoMsg {
    type: "/quicksilver.interchainstaking.v1.DelegatorIntent";
    value: DelegatorIntentAmino;
}
export interface DelegatorIntentSDKType {
    delegator: string;
    intents: ValidatorIntentSDKType[];
}
export interface ValidatorIntent {
    valoperAddress: string;
    weight: string;
}
export interface ValidatorIntentProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.ValidatorIntent";
    value: Uint8Array;
}
export interface ValidatorIntentAmino {
    valoper_address: string;
    weight: string;
}
export interface ValidatorIntentAminoMsg {
    type: "/quicksilver.interchainstaking.v1.ValidatorIntent";
    value: ValidatorIntentAmino;
}
export interface ValidatorIntentSDKType {
    valoper_address: string;
    weight: string;
}
export interface Delegation {
    delegationAddress: string;
    validatorAddress: string;
    amount: Coin;
    height: Long;
    redelegationEnd: Long;
}
export interface DelegationProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.Delegation";
    value: Uint8Array;
}
export interface DelegationAmino {
    delegation_address: string;
    validator_address: string;
    amount?: CoinAmino;
    height: string;
    redelegation_end: string;
}
export interface DelegationAminoMsg {
    type: "/quicksilver.interchainstaking.v1.Delegation";
    value: DelegationAmino;
}
export interface DelegationSDKType {
    delegation_address: string;
    validator_address: string;
    amount: CoinSDKType;
    height: Long;
    redelegation_end: Long;
}
export interface PortConnectionTuple {
    connectionId: string;
    portId: string;
}
export interface PortConnectionTupleProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.PortConnectionTuple";
    value: Uint8Array;
}
export interface PortConnectionTupleAmino {
    connection_id: string;
    port_id: string;
}
export interface PortConnectionTupleAminoMsg {
    type: "/quicksilver.interchainstaking.v1.PortConnectionTuple";
    value: PortConnectionTupleAmino;
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
    firstSeen?: Date;
    completed?: Date;
}
export interface ReceiptProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.Receipt";
    value: Uint8Array;
}
export interface ReceiptAmino {
    chain_id: string;
    sender: string;
    txhash: string;
    amount: CoinAmino[];
    first_seen?: Date;
    completed?: Date;
}
export interface ReceiptAminoMsg {
    type: "/quicksilver.interchainstaking.v1.Receipt";
    value: ReceiptAmino;
}
export interface ReceiptSDKType {
    chain_id: string;
    sender: string;
    txhash: string;
    amount: CoinSDKType[];
    first_seen?: Date;
    completed?: Date;
}
export declare const Zone: {
    typeUrl: string;
    encode(message: Zone, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Zone;
    fromJSON(object: any): Zone;
    toJSON(message: Zone): unknown;
    fromPartial(object: DeepPartial<Zone>): Zone;
    fromAmino(object: ZoneAmino): Zone;
    toAmino(message: Zone): ZoneAmino;
    fromAminoMsg(object: ZoneAminoMsg): Zone;
    fromProtoMsg(message: ZoneProtoMsg): Zone;
    toProto(message: Zone): Uint8Array;
    toProtoMsg(message: Zone): ZoneProtoMsg;
};
export declare const SubzoneInfo: {
    typeUrl: string;
    encode(message: SubzoneInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubzoneInfo;
    fromJSON(object: any): SubzoneInfo;
    toJSON(message: SubzoneInfo): unknown;
    fromPartial(object: DeepPartial<SubzoneInfo>): SubzoneInfo;
    fromAmino(object: SubzoneInfoAmino): SubzoneInfo;
    toAmino(message: SubzoneInfo): SubzoneInfoAmino;
    fromAminoMsg(object: SubzoneInfoAminoMsg): SubzoneInfo;
    fromProtoMsg(message: SubzoneInfoProtoMsg): SubzoneInfo;
    toProto(message: SubzoneInfo): Uint8Array;
    toProtoMsg(message: SubzoneInfo): SubzoneInfoProtoMsg;
};
export declare const LsmCaps: {
    typeUrl: string;
    encode(message: LsmCaps, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LsmCaps;
    fromJSON(object: any): LsmCaps;
    toJSON(message: LsmCaps): unknown;
    fromPartial(object: DeepPartial<LsmCaps>): LsmCaps;
    fromAmino(object: LsmCapsAmino): LsmCaps;
    toAmino(message: LsmCaps): LsmCapsAmino;
    fromAminoMsg(object: LsmCapsAminoMsg): LsmCaps;
    fromProtoMsg(message: LsmCapsProtoMsg): LsmCaps;
    toProto(message: LsmCaps): Uint8Array;
    toProtoMsg(message: LsmCaps): LsmCapsProtoMsg;
};
export declare const ICAAccount: {
    typeUrl: string;
    encode(message: ICAAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ICAAccount;
    fromJSON(object: any): ICAAccount;
    toJSON(message: ICAAccount): unknown;
    fromPartial(object: DeepPartial<ICAAccount>): ICAAccount;
    fromAmino(object: ICAAccountAmino): ICAAccount;
    toAmino(message: ICAAccount): ICAAccountAmino;
    fromAminoMsg(object: ICAAccountAminoMsg): ICAAccount;
    fromProtoMsg(message: ICAAccountProtoMsg): ICAAccount;
    toProto(message: ICAAccount): Uint8Array;
    toProtoMsg(message: ICAAccount): ICAAccountProtoMsg;
};
export declare const Distribution: {
    typeUrl: string;
    encode(message: Distribution, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Distribution;
    fromJSON(object: any): Distribution;
    toJSON(message: Distribution): unknown;
    fromPartial(object: DeepPartial<Distribution>): Distribution;
    fromAmino(object: DistributionAmino): Distribution;
    toAmino(message: Distribution): DistributionAmino;
    fromAminoMsg(object: DistributionAminoMsg): Distribution;
    fromProtoMsg(message: DistributionProtoMsg): Distribution;
    toProto(message: Distribution): Uint8Array;
    toProtoMsg(message: Distribution): DistributionProtoMsg;
};
export declare const WithdrawalRecord: {
    typeUrl: string;
    encode(message: WithdrawalRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawalRecord;
    fromJSON(object: any): WithdrawalRecord;
    toJSON(message: WithdrawalRecord): unknown;
    fromPartial(object: DeepPartial<WithdrawalRecord>): WithdrawalRecord;
    fromAmino(object: WithdrawalRecordAmino): WithdrawalRecord;
    toAmino(message: WithdrawalRecord): WithdrawalRecordAmino;
    fromAminoMsg(object: WithdrawalRecordAminoMsg): WithdrawalRecord;
    fromProtoMsg(message: WithdrawalRecordProtoMsg): WithdrawalRecord;
    toProto(message: WithdrawalRecord): Uint8Array;
    toProtoMsg(message: WithdrawalRecord): WithdrawalRecordProtoMsg;
};
export declare const UnbondingRecord: {
    typeUrl: string;
    encode(message: UnbondingRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingRecord;
    fromJSON(object: any): UnbondingRecord;
    toJSON(message: UnbondingRecord): unknown;
    fromPartial(object: DeepPartial<UnbondingRecord>): UnbondingRecord;
    fromAmino(object: UnbondingRecordAmino): UnbondingRecord;
    toAmino(message: UnbondingRecord): UnbondingRecordAmino;
    fromAminoMsg(object: UnbondingRecordAminoMsg): UnbondingRecord;
    fromProtoMsg(message: UnbondingRecordProtoMsg): UnbondingRecord;
    toProto(message: UnbondingRecord): Uint8Array;
    toProtoMsg(message: UnbondingRecord): UnbondingRecordProtoMsg;
};
export declare const RedelegationRecord: {
    typeUrl: string;
    encode(message: RedelegationRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RedelegationRecord;
    fromJSON(object: any): RedelegationRecord;
    toJSON(message: RedelegationRecord): unknown;
    fromPartial(object: DeepPartial<RedelegationRecord>): RedelegationRecord;
    fromAmino(object: RedelegationRecordAmino): RedelegationRecord;
    toAmino(message: RedelegationRecord): RedelegationRecordAmino;
    fromAminoMsg(object: RedelegationRecordAminoMsg): RedelegationRecord;
    fromProtoMsg(message: RedelegationRecordProtoMsg): RedelegationRecord;
    toProto(message: RedelegationRecord): Uint8Array;
    toProtoMsg(message: RedelegationRecord): RedelegationRecordProtoMsg;
};
export declare const TransferRecord: {
    typeUrl: string;
    encode(message: TransferRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransferRecord;
    fromJSON(object: any): TransferRecord;
    toJSON(message: TransferRecord): unknown;
    fromPartial(object: DeepPartial<TransferRecord>): TransferRecord;
    fromAmino(object: TransferRecordAmino): TransferRecord;
    toAmino(message: TransferRecord): TransferRecordAmino;
    fromAminoMsg(object: TransferRecordAminoMsg): TransferRecord;
    fromProtoMsg(message: TransferRecordProtoMsg): TransferRecord;
    toProto(message: TransferRecord): Uint8Array;
    toProtoMsg(message: TransferRecord): TransferRecordProtoMsg;
};
export declare const Validator: {
    typeUrl: string;
    encode(message: Validator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Validator;
    fromJSON(object: any): Validator;
    toJSON(message: Validator): unknown;
    fromPartial(object: DeepPartial<Validator>): Validator;
    fromAmino(object: ValidatorAmino): Validator;
    toAmino(message: Validator): ValidatorAmino;
    fromAminoMsg(object: ValidatorAminoMsg): Validator;
    fromProtoMsg(message: ValidatorProtoMsg): Validator;
    toProto(message: Validator): Uint8Array;
    toProtoMsg(message: Validator): ValidatorProtoMsg;
};
export declare const DelegatorIntent: {
    typeUrl: string;
    encode(message: DelegatorIntent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorIntent;
    fromJSON(object: any): DelegatorIntent;
    toJSON(message: DelegatorIntent): unknown;
    fromPartial(object: DeepPartial<DelegatorIntent>): DelegatorIntent;
    fromAmino(object: DelegatorIntentAmino): DelegatorIntent;
    toAmino(message: DelegatorIntent): DelegatorIntentAmino;
    fromAminoMsg(object: DelegatorIntentAminoMsg): DelegatorIntent;
    fromProtoMsg(message: DelegatorIntentProtoMsg): DelegatorIntent;
    toProto(message: DelegatorIntent): Uint8Array;
    toProtoMsg(message: DelegatorIntent): DelegatorIntentProtoMsg;
};
export declare const ValidatorIntent: {
    typeUrl: string;
    encode(message: ValidatorIntent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorIntent;
    fromJSON(object: any): ValidatorIntent;
    toJSON(message: ValidatorIntent): unknown;
    fromPartial(object: DeepPartial<ValidatorIntent>): ValidatorIntent;
    fromAmino(object: ValidatorIntentAmino): ValidatorIntent;
    toAmino(message: ValidatorIntent): ValidatorIntentAmino;
    fromAminoMsg(object: ValidatorIntentAminoMsg): ValidatorIntent;
    fromProtoMsg(message: ValidatorIntentProtoMsg): ValidatorIntent;
    toProto(message: ValidatorIntent): Uint8Array;
    toProtoMsg(message: ValidatorIntent): ValidatorIntentProtoMsg;
};
export declare const Delegation: {
    typeUrl: string;
    encode(message: Delegation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Delegation;
    fromJSON(object: any): Delegation;
    toJSON(message: Delegation): unknown;
    fromPartial(object: DeepPartial<Delegation>): Delegation;
    fromAmino(object: DelegationAmino): Delegation;
    toAmino(message: Delegation): DelegationAmino;
    fromAminoMsg(object: DelegationAminoMsg): Delegation;
    fromProtoMsg(message: DelegationProtoMsg): Delegation;
    toProto(message: Delegation): Uint8Array;
    toProtoMsg(message: Delegation): DelegationProtoMsg;
};
export declare const PortConnectionTuple: {
    typeUrl: string;
    encode(message: PortConnectionTuple, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PortConnectionTuple;
    fromJSON(object: any): PortConnectionTuple;
    toJSON(message: PortConnectionTuple): unknown;
    fromPartial(object: DeepPartial<PortConnectionTuple>): PortConnectionTuple;
    fromAmino(object: PortConnectionTupleAmino): PortConnectionTuple;
    toAmino(message: PortConnectionTuple): PortConnectionTupleAmino;
    fromAminoMsg(object: PortConnectionTupleAminoMsg): PortConnectionTuple;
    fromProtoMsg(message: PortConnectionTupleProtoMsg): PortConnectionTuple;
    toProto(message: PortConnectionTuple): Uint8Array;
    toProtoMsg(message: PortConnectionTuple): PortConnectionTupleProtoMsg;
};
export declare const Receipt: {
    typeUrl: string;
    encode(message: Receipt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Receipt;
    fromJSON(object: any): Receipt;
    toJSON(message: Receipt): unknown;
    fromPartial(object: DeepPartial<Receipt>): Receipt;
    fromAmino(object: ReceiptAmino): Receipt;
    toAmino(message: Receipt): ReceiptAmino;
    fromAminoMsg(object: ReceiptAminoMsg): Receipt;
    fromProtoMsg(message: ReceiptProtoMsg): Receipt;
    toProto(message: Receipt): Uint8Array;
    toProtoMsg(message: Receipt): ReceiptProtoMsg;
};
