import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Long, isSet, bytesFromBase64, base64FromBytes, toTimestamp, fromTimestamp, fromJsonTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseZone() {
    return {
        connectionId: "",
        chainId: "",
        depositAddress: ICAAccount.fromPartial({}),
        withdrawalAddress: ICAAccount.fromPartial({}),
        performanceAddress: ICAAccount.fromPartial({}),
        delegationAddress: ICAAccount.fromPartial({}),
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
        unbondingPeriod: Long.ZERO,
        messagesPerTx: Long.ZERO,
        decimals: Long.ZERO,
        unbondingEnabled: false,
        depositsEnabled: false,
        returnToSender: false,
        is118: false,
        subzoneInfo: SubzoneInfo.fromPartial({})
    };
}
export const Zone = {
    typeUrl: "/quicksilver.interchainstaking.v1.Zone",
    encode(message, writer = _m0.Writer.create()) {
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
            Validator.encode(v, writer.uint32(98).fork()).ldelim();
        }
        for (const v of message.aggregateIntent) {
            ValidatorIntent.encode(v, writer.uint32(106).fork()).ldelim();
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
        if (!message.messagesPerTx.isZero()) {
            writer.uint32(184).int64(message.messagesPerTx);
        }
        if (!message.decimals.isZero()) {
            writer.uint32(192).int64(message.decimals);
        }
        if (message.unbondingEnabled === true) {
            writer.uint32(200).bool(message.unbondingEnabled);
        }
        if (message.depositsEnabled === true) {
            writer.uint32(208).bool(message.depositsEnabled);
        }
        if (message.returnToSender === true) {
            writer.uint32(216).bool(message.returnToSender);
        }
        if (message.is118 === true) {
            writer.uint32(224).bool(message.is118);
        }
        if (message.subzoneInfo !== undefined) {
            SubzoneInfo.encode(message.subzoneInfo, writer.uint32(234).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
                    message.validatorSelectionAllocation = reader.uint64();
                    break;
                case 19:
                    message.holdingsAllocation = reader.uint64();
                    break;
                case 20:
                    message.lastEpochHeight = reader.int64();
                    break;
                case 21:
                    message.tvl = reader.string();
                    break;
                case 22:
                    message.unbondingPeriod = reader.int64();
                    break;
                case 23:
                    message.messagesPerTx = reader.int64();
                    break;
                case 24:
                    message.decimals = reader.int64();
                    break;
                case 25:
                    message.unbondingEnabled = reader.bool();
                    break;
                case 26:
                    message.depositsEnabled = reader.bool();
                    break;
                case 27:
                    message.returnToSender = reader.bool();
                    break;
                case 28:
                    message.is118 = reader.bool();
                    break;
                case 29:
                    message.subzoneInfo = SubzoneInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            depositAddress: isSet(object.depositAddress) ? ICAAccount.fromJSON(object.depositAddress) : undefined,
            withdrawalAddress: isSet(object.withdrawalAddress) ? ICAAccount.fromJSON(object.withdrawalAddress) : undefined,
            performanceAddress: isSet(object.performanceAddress) ? ICAAccount.fromJSON(object.performanceAddress) : undefined,
            delegationAddress: isSet(object.delegationAddress) ? ICAAccount.fromJSON(object.delegationAddress) : undefined,
            accountPrefix: isSet(object.accountPrefix) ? String(object.accountPrefix) : "",
            localDenom: isSet(object.localDenom) ? String(object.localDenom) : "",
            baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
            redemptionRate: isSet(object.redemptionRate) ? String(object.redemptionRate) : "",
            lastRedemptionRate: isSet(object.lastRedemptionRate) ? String(object.lastRedemptionRate) : "",
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => Validator.fromJSON(e)) : [],
            aggregateIntent: Array.isArray(object?.aggregateIntent) ? object.aggregateIntent.map((e) => ValidatorIntent.fromJSON(e)) : [],
            multiSend: isSet(object.multiSend) ? Boolean(object.multiSend) : false,
            liquidityModule: isSet(object.liquidityModule) ? Boolean(object.liquidityModule) : false,
            withdrawalWaitgroup: isSet(object.withdrawalWaitgroup) ? Number(object.withdrawalWaitgroup) : 0,
            ibcNextValidatorsHash: isSet(object.ibcNextValidatorsHash) ? bytesFromBase64(object.ibcNextValidatorsHash) : new Uint8Array(),
            validatorSelectionAllocation: isSet(object.validatorSelectionAllocation) ? Long.fromValue(object.validatorSelectionAllocation) : Long.UZERO,
            holdingsAllocation: isSet(object.holdingsAllocation) ? Long.fromValue(object.holdingsAllocation) : Long.UZERO,
            lastEpochHeight: isSet(object.lastEpochHeight) ? Long.fromValue(object.lastEpochHeight) : Long.ZERO,
            tvl: isSet(object.tvl) ? String(object.tvl) : "",
            unbondingPeriod: isSet(object.unbondingPeriod) ? Long.fromValue(object.unbondingPeriod) : Long.ZERO,
            messagesPerTx: isSet(object.messagesPerTx) ? Long.fromValue(object.messagesPerTx) : Long.ZERO,
            decimals: isSet(object.decimals) ? Long.fromValue(object.decimals) : Long.ZERO,
            unbondingEnabled: isSet(object.unbondingEnabled) ? Boolean(object.unbondingEnabled) : false,
            depositsEnabled: isSet(object.depositsEnabled) ? Boolean(object.depositsEnabled) : false,
            returnToSender: isSet(object.returnToSender) ? Boolean(object.returnToSender) : false,
            is118: isSet(object.is118) ? Boolean(object.is118) : false,
            subzoneInfo: isSet(object.subzoneInfo) ? SubzoneInfo.fromJSON(object.subzoneInfo) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.depositAddress !== undefined && (obj.depositAddress = message.depositAddress ? ICAAccount.toJSON(message.depositAddress) : undefined);
        message.withdrawalAddress !== undefined && (obj.withdrawalAddress = message.withdrawalAddress ? ICAAccount.toJSON(message.withdrawalAddress) : undefined);
        message.performanceAddress !== undefined && (obj.performanceAddress = message.performanceAddress ? ICAAccount.toJSON(message.performanceAddress) : undefined);
        message.delegationAddress !== undefined && (obj.delegationAddress = message.delegationAddress ? ICAAccount.toJSON(message.delegationAddress) : undefined);
        message.accountPrefix !== undefined && (obj.accountPrefix = message.accountPrefix);
        message.localDenom !== undefined && (obj.localDenom = message.localDenom);
        message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
        message.redemptionRate !== undefined && (obj.redemptionRate = message.redemptionRate);
        message.lastRedemptionRate !== undefined && (obj.lastRedemptionRate = message.lastRedemptionRate);
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        if (message.aggregateIntent) {
            obj.aggregateIntent = message.aggregateIntent.map(e => e ? ValidatorIntent.toJSON(e) : undefined);
        }
        else {
            obj.aggregateIntent = [];
        }
        message.multiSend !== undefined && (obj.multiSend = message.multiSend);
        message.liquidityModule !== undefined && (obj.liquidityModule = message.liquidityModule);
        message.withdrawalWaitgroup !== undefined && (obj.withdrawalWaitgroup = Math.round(message.withdrawalWaitgroup));
        message.ibcNextValidatorsHash !== undefined && (obj.ibcNextValidatorsHash = base64FromBytes(message.ibcNextValidatorsHash !== undefined ? message.ibcNextValidatorsHash : new Uint8Array()));
        message.validatorSelectionAllocation !== undefined && (obj.validatorSelectionAllocation = (message.validatorSelectionAllocation || Long.UZERO).toString());
        message.holdingsAllocation !== undefined && (obj.holdingsAllocation = (message.holdingsAllocation || Long.UZERO).toString());
        message.lastEpochHeight !== undefined && (obj.lastEpochHeight = (message.lastEpochHeight || Long.ZERO).toString());
        message.tvl !== undefined && (obj.tvl = message.tvl);
        message.unbondingPeriod !== undefined && (obj.unbondingPeriod = (message.unbondingPeriod || Long.ZERO).toString());
        message.messagesPerTx !== undefined && (obj.messagesPerTx = (message.messagesPerTx || Long.ZERO).toString());
        message.decimals !== undefined && (obj.decimals = (message.decimals || Long.ZERO).toString());
        message.unbondingEnabled !== undefined && (obj.unbondingEnabled = message.unbondingEnabled);
        message.depositsEnabled !== undefined && (obj.depositsEnabled = message.depositsEnabled);
        message.returnToSender !== undefined && (obj.returnToSender = message.returnToSender);
        message.is118 !== undefined && (obj.is118 = message.is118);
        message.subzoneInfo !== undefined && (obj.subzoneInfo = message.subzoneInfo ? SubzoneInfo.toJSON(message.subzoneInfo) : undefined);
        return obj;
    },
    fromPartial(object) {
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
        message.messagesPerTx = object.messagesPerTx !== undefined && object.messagesPerTx !== null ? Long.fromValue(object.messagesPerTx) : Long.ZERO;
        message.decimals = object.decimals !== undefined && object.decimals !== null ? Long.fromValue(object.decimals) : Long.ZERO;
        message.unbondingEnabled = object.unbondingEnabled ?? false;
        message.depositsEnabled = object.depositsEnabled ?? false;
        message.returnToSender = object.returnToSender ?? false;
        message.is118 = object.is118 ?? false;
        message.subzoneInfo = object.subzoneInfo !== undefined && object.subzoneInfo !== null ? SubzoneInfo.fromPartial(object.subzoneInfo) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            connectionId: object.connection_id,
            chainId: object.chain_id,
            depositAddress: object?.deposit_address ? ICAAccount.fromAmino(object.deposit_address) : undefined,
            withdrawalAddress: object?.withdrawal_address ? ICAAccount.fromAmino(object.withdrawal_address) : undefined,
            performanceAddress: object?.performance_address ? ICAAccount.fromAmino(object.performance_address) : undefined,
            delegationAddress: object?.delegation_address ? ICAAccount.fromAmino(object.delegation_address) : undefined,
            accountPrefix: object.account_prefix,
            localDenom: object.local_denom,
            baseDenom: object.base_denom,
            redemptionRate: object.redemption_rate,
            lastRedemptionRate: object.last_redemption_rate,
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => Validator.fromAmino(e)) : [],
            aggregateIntent: Array.isArray(object?.aggregate_intent) ? object.aggregate_intent.map((e) => ValidatorIntent.fromAmino(e)) : [],
            multiSend: object.multi_send,
            liquidityModule: object.liquidity_module,
            withdrawalWaitgroup: object.withdrawal_waitgroup,
            ibcNextValidatorsHash: object.ibc_next_validators_hash,
            validatorSelectionAllocation: Long.fromString(object.validator_selection_allocation),
            holdingsAllocation: Long.fromString(object.holdings_allocation),
            lastEpochHeight: Long.fromString(object.last_epoch_height),
            tvl: object.tvl,
            unbondingPeriod: Long.fromString(object.unbonding_period),
            messagesPerTx: Long.fromString(object.messages_per_tx),
            decimals: Long.fromString(object.decimals),
            unbondingEnabled: object.unbonding_enabled,
            depositsEnabled: object.deposits_enabled,
            returnToSender: object.return_to_sender,
            is118: object.is_118,
            subzoneInfo: object?.subzoneInfo ? SubzoneInfo.fromAmino(object.subzoneInfo) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.connection_id = message.connectionId;
        obj.chain_id = message.chainId;
        obj.deposit_address = message.depositAddress ? ICAAccount.toAmino(message.depositAddress) : undefined;
        obj.withdrawal_address = message.withdrawalAddress ? ICAAccount.toAmino(message.withdrawalAddress) : undefined;
        obj.performance_address = message.performanceAddress ? ICAAccount.toAmino(message.performanceAddress) : undefined;
        obj.delegation_address = message.delegationAddress ? ICAAccount.toAmino(message.delegationAddress) : undefined;
        obj.account_prefix = message.accountPrefix;
        obj.local_denom = message.localDenom;
        obj.base_denom = message.baseDenom;
        obj.redemption_rate = message.redemptionRate;
        obj.last_redemption_rate = message.lastRedemptionRate;
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        if (message.aggregateIntent) {
            obj.aggregate_intent = message.aggregateIntent.map(e => e ? ValidatorIntent.toAmino(e) : undefined);
        }
        else {
            obj.aggregate_intent = [];
        }
        obj.multi_send = message.multiSend;
        obj.liquidity_module = message.liquidityModule;
        obj.withdrawal_waitgroup = message.withdrawalWaitgroup;
        obj.ibc_next_validators_hash = message.ibcNextValidatorsHash;
        obj.validator_selection_allocation = message.validatorSelectionAllocation ? message.validatorSelectionAllocation.toString() : undefined;
        obj.holdings_allocation = message.holdingsAllocation ? message.holdingsAllocation.toString() : undefined;
        obj.last_epoch_height = message.lastEpochHeight ? message.lastEpochHeight.toString() : undefined;
        obj.tvl = message.tvl;
        obj.unbonding_period = message.unbondingPeriod ? message.unbondingPeriod.toString() : undefined;
        obj.messages_per_tx = message.messagesPerTx ? message.messagesPerTx.toString() : undefined;
        obj.decimals = message.decimals ? message.decimals.toString() : undefined;
        obj.unbonding_enabled = message.unbondingEnabled;
        obj.deposits_enabled = message.depositsEnabled;
        obj.return_to_sender = message.returnToSender;
        obj.is_118 = message.is118;
        obj.subzoneInfo = message.subzoneInfo ? SubzoneInfo.toAmino(message.subzoneInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Zone.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Zone.decode(message.value);
    },
    toProto(message) {
        return Zone.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.Zone",
            value: Zone.encode(message).finish()
        };
    }
};
function createBaseSubzoneInfo() {
    return {
        authority: "",
        baseChainID: ""
    };
}
export const SubzoneInfo = {
    typeUrl: "/quicksilver.interchainstaking.v1.SubzoneInfo",
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.baseChainID !== "") {
            writer.uint32(18).string(message.baseChainID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubzoneInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.baseChainID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            authority: isSet(object.authority) ? String(object.authority) : "",
            baseChainID: isSet(object.baseChainID) ? String(object.baseChainID) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.baseChainID !== undefined && (obj.baseChainID = message.baseChainID);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSubzoneInfo();
        message.authority = object.authority ?? "";
        message.baseChainID = object.baseChainID ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            authority: object.authority,
            baseChainID: object.base_chainID
        };
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority;
        obj.base_chainID = message.baseChainID;
        return obj;
    },
    fromAminoMsg(object) {
        return SubzoneInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SubzoneInfo.decode(message.value);
    },
    toProto(message) {
        return SubzoneInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.SubzoneInfo",
            value: SubzoneInfo.encode(message).finish()
        };
    }
};
function createBaseLsmCaps() {
    return {
        validatorCap: "",
        validatorBondCap: "",
        globalCap: ""
    };
}
export const LsmCaps = {
    typeUrl: "/quicksilver.interchainstaking.v1.LsmCaps",
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorCap !== "") {
            writer.uint32(10).string(message.validatorCap);
        }
        if (message.validatorBondCap !== "") {
            writer.uint32(18).string(message.validatorBondCap);
        }
        if (message.globalCap !== "") {
            writer.uint32(26).string(message.globalCap);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLsmCaps();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorCap = reader.string();
                    break;
                case 2:
                    message.validatorBondCap = reader.string();
                    break;
                case 3:
                    message.globalCap = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            validatorCap: isSet(object.validatorCap) ? String(object.validatorCap) : "",
            validatorBondCap: isSet(object.validatorBondCap) ? String(object.validatorBondCap) : "",
            globalCap: isSet(object.globalCap) ? String(object.globalCap) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorCap !== undefined && (obj.validatorCap = message.validatorCap);
        message.validatorBondCap !== undefined && (obj.validatorBondCap = message.validatorBondCap);
        message.globalCap !== undefined && (obj.globalCap = message.globalCap);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLsmCaps();
        message.validatorCap = object.validatorCap ?? "";
        message.validatorBondCap = object.validatorBondCap ?? "";
        message.globalCap = object.globalCap ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            validatorCap: object.validator_cap,
            validatorBondCap: object.validator_bond_cap,
            globalCap: object.global_cap
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_cap = message.validatorCap;
        obj.validator_bond_cap = message.validatorBondCap;
        obj.global_cap = message.globalCap;
        return obj;
    },
    fromAminoMsg(object) {
        return LsmCaps.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return LsmCaps.decode(message.value);
    },
    toProto(message) {
        return LsmCaps.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.LsmCaps",
            value: LsmCaps.encode(message).finish()
        };
    }
};
function createBaseICAAccount() {
    return {
        address: "",
        balance: [],
        portName: "",
        withdrawalAddress: "",
        balanceWaitgroup: 0
    };
}
export const ICAAccount = {
    typeUrl: "/quicksilver.interchainstaking.v1.ICAAccount",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.balance) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            address: isSet(object.address) ? String(object.address) : "",
            balance: Array.isArray(object?.balance) ? object.balance.map((e) => Coin.fromJSON(e)) : [],
            portName: isSet(object.portName) ? String(object.portName) : "",
            withdrawalAddress: isSet(object.withdrawalAddress) ? String(object.withdrawalAddress) : "",
            balanceWaitgroup: isSet(object.balanceWaitgroup) ? Number(object.balanceWaitgroup) : 0
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.balance) {
            obj.balance = message.balance.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.balance = [];
        }
        message.portName !== undefined && (obj.portName = message.portName);
        message.withdrawalAddress !== undefined && (obj.withdrawalAddress = message.withdrawalAddress);
        message.balanceWaitgroup !== undefined && (obj.balanceWaitgroup = Math.round(message.balanceWaitgroup));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseICAAccount();
        message.address = object.address ?? "";
        message.balance = object.balance?.map(e => Coin.fromPartial(e)) || [];
        message.portName = object.portName ?? "";
        message.withdrawalAddress = object.withdrawalAddress ?? "";
        message.balanceWaitgroup = object.balanceWaitgroup ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            balance: Array.isArray(object?.balance) ? object.balance.map((e) => Coin.fromAmino(e)) : [],
            portName: object.port_name,
            withdrawalAddress: object.withdrawal_address,
            balanceWaitgroup: object.balance_waitgroup
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        if (message.balance) {
            obj.balance = message.balance.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.balance = [];
        }
        obj.port_name = message.portName;
        obj.withdrawal_address = message.withdrawalAddress;
        obj.balance_waitgroup = message.balanceWaitgroup;
        return obj;
    },
    fromAminoMsg(object) {
        return ICAAccount.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ICAAccount.decode(message.value);
    },
    toProto(message) {
        return ICAAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.ICAAccount",
            value: ICAAccount.encode(message).finish()
        };
    }
};
function createBaseDistribution() {
    return {
        valoper: "",
        amount: Long.UZERO
    };
}
export const Distribution = {
    typeUrl: "/quicksilver.interchainstaking.v1.Distribution",
    encode(message, writer = _m0.Writer.create()) {
        if (message.valoper !== "") {
            writer.uint32(10).string(message.valoper);
        }
        if (!message.amount.isZero()) {
            writer.uint32(16).uint64(message.amount);
        }
        return writer;
    },
    decode(input, length) {
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
                    message.amount = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            valoper: isSet(object.valoper) ? String(object.valoper) : "",
            amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.valoper !== undefined && (obj.valoper = message.valoper);
        message.amount !== undefined && (obj.amount = (message.amount || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDistribution();
        message.valoper = object.valoper ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            valoper: object.valoper,
            amount: Long.fromString(object.amount)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.valoper = message.valoper;
        obj.amount = message.amount ? message.amount.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Distribution.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Distribution.decode(message.value);
    },
    toProto(message) {
        return Distribution.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.Distribution",
            value: Distribution.encode(message).finish()
        };
    }
};
function createBaseWithdrawalRecord() {
    return {
        chainId: "",
        delegator: "",
        distribution: [],
        recipient: "",
        amount: [],
        burnAmount: Coin.fromPartial({}),
        txhash: "",
        status: 0,
        completionTime: new Date(),
        requeued: false,
        acknowledged: false,
        epochNumber: Long.ZERO
    };
}
export const WithdrawalRecord = {
    typeUrl: "/quicksilver.interchainstaking.v1.WithdrawalRecord",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (message.delegator !== "") {
            writer.uint32(18).string(message.delegator);
        }
        for (const v of message.distribution) {
            Distribution.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.recipient !== "") {
            writer.uint32(34).string(message.recipient);
        }
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(42).fork()).ldelim();
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
        if (message.requeued === true) {
            writer.uint32(80).bool(message.requeued);
        }
        if (message.acknowledged === true) {
            writer.uint32(88).bool(message.acknowledged);
        }
        if (!message.epochNumber.isZero()) {
            writer.uint32(96).int64(message.epochNumber);
        }
        return writer;
    },
    decode(input, length) {
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
                case 10:
                    message.requeued = reader.bool();
                    break;
                case 11:
                    message.acknowledged = reader.bool();
                    break;
                case 12:
                    message.epochNumber = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            delegator: isSet(object.delegator) ? String(object.delegator) : "",
            distribution: Array.isArray(object?.distribution) ? object.distribution.map((e) => Distribution.fromJSON(e)) : [],
            recipient: isSet(object.recipient) ? String(object.recipient) : "",
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => Coin.fromJSON(e)) : [],
            burnAmount: isSet(object.burnAmount) ? Coin.fromJSON(object.burnAmount) : undefined,
            txhash: isSet(object.txhash) ? String(object.txhash) : "",
            status: isSet(object.status) ? Number(object.status) : 0,
            completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined,
            requeued: isSet(object.requeued) ? Boolean(object.requeued) : false,
            acknowledged: isSet(object.acknowledged) ? Boolean(object.acknowledged) : false,
            epochNumber: isSet(object.epochNumber) ? Long.fromValue(object.epochNumber) : Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.delegator !== undefined && (obj.delegator = message.delegator);
        if (message.distribution) {
            obj.distribution = message.distribution.map(e => e ? Distribution.toJSON(e) : undefined);
        }
        else {
            obj.distribution = [];
        }
        message.recipient !== undefined && (obj.recipient = message.recipient);
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        message.burnAmount !== undefined && (obj.burnAmount = message.burnAmount ? Coin.toJSON(message.burnAmount) : undefined);
        message.txhash !== undefined && (obj.txhash = message.txhash);
        message.status !== undefined && (obj.status = Math.round(message.status));
        message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
        message.requeued !== undefined && (obj.requeued = message.requeued);
        message.acknowledged !== undefined && (obj.acknowledged = message.acknowledged);
        message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
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
        message.requeued = object.requeued ?? false;
        message.acknowledged = object.acknowledged ?? false;
        message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? Long.fromValue(object.epochNumber) : Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            chainId: object.chain_id,
            delegator: object.delegator,
            distribution: Array.isArray(object?.distribution) ? object.distribution.map((e) => Distribution.fromAmino(e)) : [],
            recipient: object.recipient,
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => Coin.fromAmino(e)) : [],
            burnAmount: object?.burn_amount ? Coin.fromAmino(object.burn_amount) : undefined,
            txhash: object.txhash,
            status: object.status,
            completionTime: object.completion_time,
            requeued: object.requeued,
            acknowledged: object.acknowledged,
            epochNumber: Long.fromString(object.epoch_number)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        obj.delegator = message.delegator;
        if (message.distribution) {
            obj.distribution = message.distribution.map(e => e ? Distribution.toAmino(e) : undefined);
        }
        else {
            obj.distribution = [];
        }
        obj.recipient = message.recipient;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        obj.burn_amount = message.burnAmount ? Coin.toAmino(message.burnAmount) : undefined;
        obj.txhash = message.txhash;
        obj.status = message.status;
        obj.completion_time = message.completionTime;
        obj.requeued = message.requeued;
        obj.acknowledged = message.acknowledged;
        obj.epoch_number = message.epochNumber ? message.epochNumber.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return WithdrawalRecord.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return WithdrawalRecord.decode(message.value);
    },
    toProto(message) {
        return WithdrawalRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.WithdrawalRecord",
            value: WithdrawalRecord.encode(message).finish()
        };
    }
};
function createBaseUnbondingRecord() {
    return {
        chainId: "",
        epochNumber: Long.ZERO,
        validator: "",
        relatedTxhash: []
    };
}
export const UnbondingRecord = {
    typeUrl: "/quicksilver.interchainstaking.v1.UnbondingRecord",
    encode(message, writer = _m0.Writer.create()) {
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
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
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
                    message.epochNumber = reader.int64();
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
    fromJSON(object) {
        return {
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            epochNumber: isSet(object.epochNumber) ? Long.fromValue(object.epochNumber) : Long.ZERO,
            validator: isSet(object.validator) ? String(object.validator) : "",
            relatedTxhash: Array.isArray(object?.relatedTxhash) ? object.relatedTxhash.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || Long.ZERO).toString());
        message.validator !== undefined && (obj.validator = message.validator);
        if (message.relatedTxhash) {
            obj.relatedTxhash = message.relatedTxhash.map(e => e);
        }
        else {
            obj.relatedTxhash = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUnbondingRecord();
        message.chainId = object.chainId ?? "";
        message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? Long.fromValue(object.epochNumber) : Long.ZERO;
        message.validator = object.validator ?? "";
        message.relatedTxhash = object.relatedTxhash?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            chainId: object.chain_id,
            epochNumber: Long.fromString(object.epoch_number),
            validator: object.validator,
            relatedTxhash: Array.isArray(object?.related_txhash) ? object.related_txhash.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        obj.epoch_number = message.epochNumber ? message.epochNumber.toString() : undefined;
        obj.validator = message.validator;
        if (message.relatedTxhash) {
            obj.related_txhash = message.relatedTxhash.map(e => e);
        }
        else {
            obj.related_txhash = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return UnbondingRecord.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return UnbondingRecord.decode(message.value);
    },
    toProto(message) {
        return UnbondingRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.UnbondingRecord",
            value: UnbondingRecord.encode(message).finish()
        };
    }
};
function createBaseRedelegationRecord() {
    return {
        chainId: "",
        epochNumber: Long.ZERO,
        source: "",
        destination: "",
        amount: Long.ZERO,
        completionTime: new Date()
    };
}
export const RedelegationRecord = {
    typeUrl: "/quicksilver.interchainstaking.v1.RedelegationRecord",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (!message.epochNumber.isZero()) {
            writer.uint32(16).int64(message.epochNumber);
        }
        if (message.source !== "") {
            writer.uint32(26).string(message.source);
        }
        if (message.destination !== "") {
            writer.uint32(34).string(message.destination);
        }
        if (!message.amount.isZero()) {
            writer.uint32(40).int64(message.amount);
        }
        if (message.completionTime !== undefined) {
            Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
                    message.epochNumber = reader.int64();
                    break;
                case 3:
                    message.source = reader.string();
                    break;
                case 4:
                    message.destination = reader.string();
                    break;
                case 5:
                    message.amount = reader.int64();
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
    fromJSON(object) {
        return {
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            epochNumber: isSet(object.epochNumber) ? Long.fromValue(object.epochNumber) : Long.ZERO,
            source: isSet(object.source) ? String(object.source) : "",
            destination: isSet(object.destination) ? String(object.destination) : "",
            amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.ZERO,
            completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || Long.ZERO).toString());
        message.source !== undefined && (obj.source = message.source);
        message.destination !== undefined && (obj.destination = message.destination);
        message.amount !== undefined && (obj.amount = (message.amount || Long.ZERO).toString());
        message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRedelegationRecord();
        message.chainId = object.chainId ?? "";
        message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? Long.fromValue(object.epochNumber) : Long.ZERO;
        message.source = object.source ?? "";
        message.destination = object.destination ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.ZERO;
        message.completionTime = object.completionTime ?? undefined;
        return message;
    },
    fromAmino(object) {
        return {
            chainId: object.chain_id,
            epochNumber: Long.fromString(object.epoch_number),
            source: object.source,
            destination: object.destination,
            amount: Long.fromString(object.amount),
            completionTime: object.completion_time
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        obj.epoch_number = message.epochNumber ? message.epochNumber.toString() : undefined;
        obj.source = message.source;
        obj.destination = message.destination;
        obj.amount = message.amount ? message.amount.toString() : undefined;
        obj.completion_time = message.completionTime;
        return obj;
    },
    fromAminoMsg(object) {
        return RedelegationRecord.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RedelegationRecord.decode(message.value);
    },
    toProto(message) {
        return RedelegationRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.RedelegationRecord",
            value: RedelegationRecord.encode(message).finish()
        };
    }
};
function createBaseTransferRecord() {
    return {
        sender: "",
        recipient: "",
        amount: Coin.fromPartial({})
    };
}
export const TransferRecord = {
    typeUrl: "/quicksilver.interchainstaking.v1.TransferRecord",
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? String(object.sender) : "",
            recipient: isSet(object.recipient) ? String(object.recipient) : "",
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTransferRecord();
        message.sender = object.sender ?? "";
        message.recipient = object.recipient ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            recipient: object.recipient,
            amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.recipient = message.recipient;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return TransferRecord.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TransferRecord.decode(message.value);
    },
    toProto(message) {
        return TransferRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.TransferRecord",
            value: TransferRecord.encode(message).finish()
        };
    }
};
function createBaseValidator() {
    return {
        valoperAddress: "",
        commissionRate: "",
        delegatorShares: "",
        votingPower: "",
        score: "",
        status: "",
        jailed: false,
        tombstoned: false,
        jailedSince: new Date(),
        validatorBondShares: "",
        liquidShares: ""
    };
}
export const Validator = {
    typeUrl: "/quicksilver.interchainstaking.v1.Validator",
    encode(message, writer = _m0.Writer.create()) {
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
        if (message.status !== "") {
            writer.uint32(50).string(message.status);
        }
        if (message.jailed === true) {
            writer.uint32(56).bool(message.jailed);
        }
        if (message.tombstoned === true) {
            writer.uint32(64).bool(message.tombstoned);
        }
        if (message.jailedSince !== undefined) {
            Timestamp.encode(toTimestamp(message.jailedSince), writer.uint32(74).fork()).ldelim();
        }
        if (message.validatorBondShares !== "") {
            writer.uint32(82).string(message.validatorBondShares);
        }
        if (message.liquidShares !== "") {
            writer.uint32(90).string(message.liquidShares);
        }
        return writer;
    },
    decode(input, length) {
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
                case 6:
                    message.status = reader.string();
                    break;
                case 7:
                    message.jailed = reader.bool();
                    break;
                case 8:
                    message.tombstoned = reader.bool();
                    break;
                case 9:
                    message.jailedSince = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.validatorBondShares = reader.string();
                    break;
                case 11:
                    message.liquidShares = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            valoperAddress: isSet(object.valoperAddress) ? String(object.valoperAddress) : "",
            commissionRate: isSet(object.commissionRate) ? String(object.commissionRate) : "",
            delegatorShares: isSet(object.delegatorShares) ? String(object.delegatorShares) : "",
            votingPower: isSet(object.votingPower) ? String(object.votingPower) : "",
            score: isSet(object.score) ? String(object.score) : "",
            status: isSet(object.status) ? String(object.status) : "",
            jailed: isSet(object.jailed) ? Boolean(object.jailed) : false,
            tombstoned: isSet(object.tombstoned) ? Boolean(object.tombstoned) : false,
            jailedSince: isSet(object.jailedSince) ? fromJsonTimestamp(object.jailedSince) : undefined,
            validatorBondShares: isSet(object.validatorBondShares) ? String(object.validatorBondShares) : "",
            liquidShares: isSet(object.liquidShares) ? String(object.liquidShares) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.valoperAddress !== undefined && (obj.valoperAddress = message.valoperAddress);
        message.commissionRate !== undefined && (obj.commissionRate = message.commissionRate);
        message.delegatorShares !== undefined && (obj.delegatorShares = message.delegatorShares);
        message.votingPower !== undefined && (obj.votingPower = message.votingPower);
        message.score !== undefined && (obj.score = message.score);
        message.status !== undefined && (obj.status = message.status);
        message.jailed !== undefined && (obj.jailed = message.jailed);
        message.tombstoned !== undefined && (obj.tombstoned = message.tombstoned);
        message.jailedSince !== undefined && (obj.jailedSince = message.jailedSince.toISOString());
        message.validatorBondShares !== undefined && (obj.validatorBondShares = message.validatorBondShares);
        message.liquidShares !== undefined && (obj.liquidShares = message.liquidShares);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidator();
        message.valoperAddress = object.valoperAddress ?? "";
        message.commissionRate = object.commissionRate ?? "";
        message.delegatorShares = object.delegatorShares ?? "";
        message.votingPower = object.votingPower ?? "";
        message.score = object.score ?? "";
        message.status = object.status ?? "";
        message.jailed = object.jailed ?? false;
        message.tombstoned = object.tombstoned ?? false;
        message.jailedSince = object.jailedSince ?? undefined;
        message.validatorBondShares = object.validatorBondShares ?? "";
        message.liquidShares = object.liquidShares ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            valoperAddress: object.valoper_address,
            commissionRate: object.commission_rate,
            delegatorShares: object.delegator_shares,
            votingPower: object.voting_power,
            score: object.score,
            status: object.status,
            jailed: object.jailed,
            tombstoned: object.tombstoned,
            jailedSince: object.jailed_since,
            validatorBondShares: object.validator_bond_shares,
            liquidShares: object.liquid_shares
        };
    },
    toAmino(message) {
        const obj = {};
        obj.valoper_address = message.valoperAddress;
        obj.commission_rate = message.commissionRate;
        obj.delegator_shares = message.delegatorShares;
        obj.voting_power = message.votingPower;
        obj.score = message.score;
        obj.status = message.status;
        obj.jailed = message.jailed;
        obj.tombstoned = message.tombstoned;
        obj.jailed_since = message.jailedSince;
        obj.validator_bond_shares = message.validatorBondShares;
        obj.liquid_shares = message.liquidShares;
        return obj;
    },
    fromAminoMsg(object) {
        return Validator.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Validator.decode(message.value);
    },
    toProto(message) {
        return Validator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.Validator",
            value: Validator.encode(message).finish()
        };
    }
};
function createBaseDelegatorIntent() {
    return {
        delegator: "",
        intents: []
    };
}
export const DelegatorIntent = {
    typeUrl: "/quicksilver.interchainstaking.v1.DelegatorIntent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegator !== "") {
            writer.uint32(10).string(message.delegator);
        }
        for (const v of message.intents) {
            ValidatorIntent.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            delegator: isSet(object.delegator) ? String(object.delegator) : "",
            intents: Array.isArray(object?.intents) ? object.intents.map((e) => ValidatorIntent.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator !== undefined && (obj.delegator = message.delegator);
        if (message.intents) {
            obj.intents = message.intents.map(e => e ? ValidatorIntent.toJSON(e) : undefined);
        }
        else {
            obj.intents = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelegatorIntent();
        message.delegator = object.delegator ?? "";
        message.intents = object.intents?.map(e => ValidatorIntent.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            delegator: object.delegator,
            intents: Array.isArray(object?.intents) ? object.intents.map((e) => ValidatorIntent.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator = message.delegator;
        if (message.intents) {
            obj.intents = message.intents.map(e => e ? ValidatorIntent.toAmino(e) : undefined);
        }
        else {
            obj.intents = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return DelegatorIntent.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DelegatorIntent.decode(message.value);
    },
    toProto(message) {
        return DelegatorIntent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.DelegatorIntent",
            value: DelegatorIntent.encode(message).finish()
        };
    }
};
function createBaseValidatorIntent() {
    return {
        valoperAddress: "",
        weight: ""
    };
}
export const ValidatorIntent = {
    typeUrl: "/quicksilver.interchainstaking.v1.ValidatorIntent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.valoperAddress !== "") {
            writer.uint32(10).string(message.valoperAddress);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(message.weight);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            valoperAddress: isSet(object.valoper_address) ? String(object.valoper_address) : "",
            weight: isSet(object.weight) ? String(object.weight) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.valoperAddress !== undefined && (obj.valoper_address = message.valoperAddress);
        message.weight !== undefined && (obj.weight = message.weight);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorIntent();
        message.valoperAddress = object.valoperAddress ?? "";
        message.weight = object.weight ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            valoperAddress: object.valoper_address,
            weight: object.weight
        };
    },
    toAmino(message) {
        const obj = {};
        obj.valoper_address = message.valoperAddress;
        obj.weight = message.weight;
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorIntent.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ValidatorIntent.decode(message.value);
    },
    toProto(message) {
        return ValidatorIntent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.ValidatorIntent",
            value: ValidatorIntent.encode(message).finish()
        };
    }
};
function createBaseDelegation() {
    return {
        delegationAddress: "",
        validatorAddress: "",
        amount: Coin.fromPartial({}),
        height: Long.ZERO,
        redelegationEnd: Long.ZERO
    };
}
export const Delegation = {
    typeUrl: "/quicksilver.interchainstaking.v1.Delegation",
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                    message.height = reader.int64();
                    break;
                case 5:
                    message.redelegationEnd = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            delegationAddress: isSet(object.delegationAddress) ? String(object.delegationAddress) : "",
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
            height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
            redelegationEnd: isSet(object.redelegationEnd) ? Long.fromValue(object.redelegationEnd) : Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegationAddress !== undefined && (obj.delegationAddress = message.delegationAddress);
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
        message.redelegationEnd !== undefined && (obj.redelegationEnd = (message.redelegationEnd || Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelegation();
        message.delegationAddress = object.delegationAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
        message.redelegationEnd = object.redelegationEnd !== undefined && object.redelegationEnd !== null ? Long.fromValue(object.redelegationEnd) : Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            delegationAddress: object.delegation_address,
            validatorAddress: object.validator_address,
            amount: object?.amount ? Coin.fromAmino(object.amount) : undefined,
            height: Long.fromString(object.height),
            redelegationEnd: Long.fromString(object.redelegation_end)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegation_address = message.delegationAddress;
        obj.validator_address = message.validatorAddress;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.redelegation_end = message.redelegationEnd ? message.redelegationEnd.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Delegation.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Delegation.decode(message.value);
    },
    toProto(message) {
        return Delegation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.Delegation",
            value: Delegation.encode(message).finish()
        };
    }
};
function createBasePortConnectionTuple() {
    return {
        connectionId: "",
        portId: ""
    };
}
export const PortConnectionTuple = {
    typeUrl: "/quicksilver.interchainstaking.v1.PortConnectionTuple",
    encode(message, writer = _m0.Writer.create()) {
        if (message.connectionId !== "") {
            writer.uint32(10).string(message.connectionId);
        }
        if (message.portId !== "") {
            writer.uint32(18).string(message.portId);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
            portId: isSet(object.portId) ? String(object.portId) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.portId !== undefined && (obj.portId = message.portId);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePortConnectionTuple();
        message.connectionId = object.connectionId ?? "";
        message.portId = object.portId ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            connectionId: object.connection_id,
            portId: object.port_id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.connection_id = message.connectionId;
        obj.port_id = message.portId;
        return obj;
    },
    fromAminoMsg(object) {
        return PortConnectionTuple.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PortConnectionTuple.decode(message.value);
    },
    toProto(message) {
        return PortConnectionTuple.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.PortConnectionTuple",
            value: PortConnectionTuple.encode(message).finish()
        };
    }
};
function createBaseReceipt() {
    return {
        chainId: "",
        sender: "",
        txhash: "",
        amount: [],
        firstSeen: undefined,
        completed: undefined
    };
}
export const Receipt = {
    typeUrl: "/quicksilver.interchainstaking.v1.Receipt",
    encode(message, writer = _m0.Writer.create()) {
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
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.firstSeen !== undefined) {
            Timestamp.encode(toTimestamp(message.firstSeen), writer.uint32(42).fork()).ldelim();
        }
        if (message.completed !== undefined) {
            Timestamp.encode(toTimestamp(message.completed), writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
                case 5:
                    message.firstSeen = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.completed = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            sender: isSet(object.sender) ? String(object.sender) : "",
            txhash: isSet(object.txhash) ? String(object.txhash) : "",
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => Coin.fromJSON(e)) : [],
            firstSeen: isSet(object.firstSeen) ? fromJsonTimestamp(object.firstSeen) : undefined,
            completed: isSet(object.completed) ? fromJsonTimestamp(object.completed) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.sender !== undefined && (obj.sender = message.sender);
        message.txhash !== undefined && (obj.txhash = message.txhash);
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        message.firstSeen !== undefined && (obj.firstSeen = message.firstSeen.toISOString());
        message.completed !== undefined && (obj.completed = message.completed.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseReceipt();
        message.chainId = object.chainId ?? "";
        message.sender = object.sender ?? "";
        message.txhash = object.txhash ?? "";
        message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
        message.firstSeen = object.firstSeen ?? undefined;
        message.completed = object.completed ?? undefined;
        return message;
    },
    fromAmino(object) {
        return {
            chainId: object.chain_id,
            sender: object.sender,
            txhash: object.txhash,
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => Coin.fromAmino(e)) : [],
            firstSeen: object?.first_seen,
            completed: object?.completed
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        obj.sender = message.sender;
        obj.txhash = message.txhash;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        obj.first_seen = message.firstSeen;
        obj.completed = message.completed;
        return obj;
    },
    fromAminoMsg(object) {
        return Receipt.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Receipt.decode(message.value);
    },
    toProto(message) {
        return Receipt.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.Receipt",
            value: Receipt.encode(message).finish()
        };
    }
};
//# sourceMappingURL=interchainstaking.js.map