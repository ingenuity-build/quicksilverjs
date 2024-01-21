"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Receipt = exports.PortConnectionTuple = exports.Delegation = exports.ValidatorIntent = exports.DelegatorIntent = exports.Validator = exports.TransferRecord = exports.RedelegationRecord = exports.UnbondingRecord = exports.WithdrawalRecord = exports.Distribution = exports.ICAAccount = exports.LsmCaps = exports.SubzoneInfo = exports.Zone = void 0;
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseZone() {
    return {
        connectionId: "",
        chainId: "",
        depositAddress: exports.ICAAccount.fromPartial({}),
        withdrawalAddress: exports.ICAAccount.fromPartial({}),
        performanceAddress: exports.ICAAccount.fromPartial({}),
        delegationAddress: exports.ICAAccount.fromPartial({}),
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
        validatorSelectionAllocation: helpers_1.Long.UZERO,
        holdingsAllocation: helpers_1.Long.UZERO,
        lastEpochHeight: helpers_1.Long.ZERO,
        tvl: "",
        unbondingPeriod: helpers_1.Long.ZERO,
        messagesPerTx: helpers_1.Long.ZERO,
        decimals: helpers_1.Long.ZERO,
        unbondingEnabled: false,
        depositsEnabled: false,
        returnToSender: false,
        is118: false,
        subzoneInfo: exports.SubzoneInfo.fromPartial({})
    };
}
exports.Zone = {
    typeUrl: "/quicksilver.interchainstaking.v1.Zone",
    encode(message, writer = _m0.Writer.create()) {
        if (message.connectionId !== "") {
            writer.uint32(10).string(message.connectionId);
        }
        if (message.chainId !== "") {
            writer.uint32(18).string(message.chainId);
        }
        if (message.depositAddress !== undefined) {
            exports.ICAAccount.encode(message.depositAddress, writer.uint32(26).fork()).ldelim();
        }
        if (message.withdrawalAddress !== undefined) {
            exports.ICAAccount.encode(message.withdrawalAddress, writer.uint32(34).fork()).ldelim();
        }
        if (message.performanceAddress !== undefined) {
            exports.ICAAccount.encode(message.performanceAddress, writer.uint32(42).fork()).ldelim();
        }
        if (message.delegationAddress !== undefined) {
            exports.ICAAccount.encode(message.delegationAddress, writer.uint32(50).fork()).ldelim();
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
            exports.Validator.encode(v, writer.uint32(98).fork()).ldelim();
        }
        for (const v of message.aggregateIntent) {
            exports.ValidatorIntent.encode(v, writer.uint32(106).fork()).ldelim();
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
            exports.SubzoneInfo.encode(message.subzoneInfo, writer.uint32(234).fork()).ldelim();
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
                    message.depositAddress = exports.ICAAccount.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.withdrawalAddress = exports.ICAAccount.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.performanceAddress = exports.ICAAccount.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.delegationAddress = exports.ICAAccount.decode(reader, reader.uint32());
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
                    message.validators.push(exports.Validator.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.aggregateIntent.push(exports.ValidatorIntent.decode(reader, reader.uint32()));
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
                    message.subzoneInfo = exports.SubzoneInfo.decode(reader, reader.uint32());
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
            connectionId: (0, helpers_1.isSet)(object.connectionId) ? String(object.connectionId) : "",
            chainId: (0, helpers_1.isSet)(object.chainId) ? String(object.chainId) : "",
            depositAddress: (0, helpers_1.isSet)(object.depositAddress) ? exports.ICAAccount.fromJSON(object.depositAddress) : undefined,
            withdrawalAddress: (0, helpers_1.isSet)(object.withdrawalAddress) ? exports.ICAAccount.fromJSON(object.withdrawalAddress) : undefined,
            performanceAddress: (0, helpers_1.isSet)(object.performanceAddress) ? exports.ICAAccount.fromJSON(object.performanceAddress) : undefined,
            delegationAddress: (0, helpers_1.isSet)(object.delegationAddress) ? exports.ICAAccount.fromJSON(object.delegationAddress) : undefined,
            accountPrefix: (0, helpers_1.isSet)(object.accountPrefix) ? String(object.accountPrefix) : "",
            localDenom: (0, helpers_1.isSet)(object.localDenom) ? String(object.localDenom) : "",
            baseDenom: (0, helpers_1.isSet)(object.baseDenom) ? String(object.baseDenom) : "",
            redemptionRate: (0, helpers_1.isSet)(object.redemptionRate) ? String(object.redemptionRate) : "",
            lastRedemptionRate: (0, helpers_1.isSet)(object.lastRedemptionRate) ? String(object.lastRedemptionRate) : "",
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => exports.Validator.fromJSON(e)) : [],
            aggregateIntent: Array.isArray(object?.aggregateIntent) ? object.aggregateIntent.map((e) => exports.ValidatorIntent.fromJSON(e)) : [],
            multiSend: (0, helpers_1.isSet)(object.multiSend) ? Boolean(object.multiSend) : false,
            liquidityModule: (0, helpers_1.isSet)(object.liquidityModule) ? Boolean(object.liquidityModule) : false,
            withdrawalWaitgroup: (0, helpers_1.isSet)(object.withdrawalWaitgroup) ? Number(object.withdrawalWaitgroup) : 0,
            ibcNextValidatorsHash: (0, helpers_1.isSet)(object.ibcNextValidatorsHash) ? (0, helpers_1.bytesFromBase64)(object.ibcNextValidatorsHash) : new Uint8Array(),
            validatorSelectionAllocation: (0, helpers_1.isSet)(object.validatorSelectionAllocation) ? helpers_1.Long.fromValue(object.validatorSelectionAllocation) : helpers_1.Long.UZERO,
            holdingsAllocation: (0, helpers_1.isSet)(object.holdingsAllocation) ? helpers_1.Long.fromValue(object.holdingsAllocation) : helpers_1.Long.UZERO,
            lastEpochHeight: (0, helpers_1.isSet)(object.lastEpochHeight) ? helpers_1.Long.fromValue(object.lastEpochHeight) : helpers_1.Long.ZERO,
            tvl: (0, helpers_1.isSet)(object.tvl) ? String(object.tvl) : "",
            unbondingPeriod: (0, helpers_1.isSet)(object.unbondingPeriod) ? helpers_1.Long.fromValue(object.unbondingPeriod) : helpers_1.Long.ZERO,
            messagesPerTx: (0, helpers_1.isSet)(object.messagesPerTx) ? helpers_1.Long.fromValue(object.messagesPerTx) : helpers_1.Long.ZERO,
            decimals: (0, helpers_1.isSet)(object.decimals) ? helpers_1.Long.fromValue(object.decimals) : helpers_1.Long.ZERO,
            unbondingEnabled: (0, helpers_1.isSet)(object.unbondingEnabled) ? Boolean(object.unbondingEnabled) : false,
            depositsEnabled: (0, helpers_1.isSet)(object.depositsEnabled) ? Boolean(object.depositsEnabled) : false,
            returnToSender: (0, helpers_1.isSet)(object.returnToSender) ? Boolean(object.returnToSender) : false,
            is118: (0, helpers_1.isSet)(object.is118) ? Boolean(object.is118) : false,
            subzoneInfo: (0, helpers_1.isSet)(object.subzoneInfo) ? exports.SubzoneInfo.fromJSON(object.subzoneInfo) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.depositAddress !== undefined && (obj.depositAddress = message.depositAddress ? exports.ICAAccount.toJSON(message.depositAddress) : undefined);
        message.withdrawalAddress !== undefined && (obj.withdrawalAddress = message.withdrawalAddress ? exports.ICAAccount.toJSON(message.withdrawalAddress) : undefined);
        message.performanceAddress !== undefined && (obj.performanceAddress = message.performanceAddress ? exports.ICAAccount.toJSON(message.performanceAddress) : undefined);
        message.delegationAddress !== undefined && (obj.delegationAddress = message.delegationAddress ? exports.ICAAccount.toJSON(message.delegationAddress) : undefined);
        message.accountPrefix !== undefined && (obj.accountPrefix = message.accountPrefix);
        message.localDenom !== undefined && (obj.localDenom = message.localDenom);
        message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
        message.redemptionRate !== undefined && (obj.redemptionRate = message.redemptionRate);
        message.lastRedemptionRate !== undefined && (obj.lastRedemptionRate = message.lastRedemptionRate);
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        if (message.aggregateIntent) {
            obj.aggregateIntent = message.aggregateIntent.map(e => e ? exports.ValidatorIntent.toJSON(e) : undefined);
        }
        else {
            obj.aggregateIntent = [];
        }
        message.multiSend !== undefined && (obj.multiSend = message.multiSend);
        message.liquidityModule !== undefined && (obj.liquidityModule = message.liquidityModule);
        message.withdrawalWaitgroup !== undefined && (obj.withdrawalWaitgroup = Math.round(message.withdrawalWaitgroup));
        message.ibcNextValidatorsHash !== undefined && (obj.ibcNextValidatorsHash = (0, helpers_1.base64FromBytes)(message.ibcNextValidatorsHash !== undefined ? message.ibcNextValidatorsHash : new Uint8Array()));
        message.validatorSelectionAllocation !== undefined && (obj.validatorSelectionAllocation = (message.validatorSelectionAllocation || helpers_1.Long.UZERO).toString());
        message.holdingsAllocation !== undefined && (obj.holdingsAllocation = (message.holdingsAllocation || helpers_1.Long.UZERO).toString());
        message.lastEpochHeight !== undefined && (obj.lastEpochHeight = (message.lastEpochHeight || helpers_1.Long.ZERO).toString());
        message.tvl !== undefined && (obj.tvl = message.tvl);
        message.unbondingPeriod !== undefined && (obj.unbondingPeriod = (message.unbondingPeriod || helpers_1.Long.ZERO).toString());
        message.messagesPerTx !== undefined && (obj.messagesPerTx = (message.messagesPerTx || helpers_1.Long.ZERO).toString());
        message.decimals !== undefined && (obj.decimals = (message.decimals || helpers_1.Long.ZERO).toString());
        message.unbondingEnabled !== undefined && (obj.unbondingEnabled = message.unbondingEnabled);
        message.depositsEnabled !== undefined && (obj.depositsEnabled = message.depositsEnabled);
        message.returnToSender !== undefined && (obj.returnToSender = message.returnToSender);
        message.is118 !== undefined && (obj.is118 = message.is118);
        message.subzoneInfo !== undefined && (obj.subzoneInfo = message.subzoneInfo ? exports.SubzoneInfo.toJSON(message.subzoneInfo) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseZone();
        message.connectionId = object.connectionId ?? "";
        message.chainId = object.chainId ?? "";
        message.depositAddress = object.depositAddress !== undefined && object.depositAddress !== null ? exports.ICAAccount.fromPartial(object.depositAddress) : undefined;
        message.withdrawalAddress = object.withdrawalAddress !== undefined && object.withdrawalAddress !== null ? exports.ICAAccount.fromPartial(object.withdrawalAddress) : undefined;
        message.performanceAddress = object.performanceAddress !== undefined && object.performanceAddress !== null ? exports.ICAAccount.fromPartial(object.performanceAddress) : undefined;
        message.delegationAddress = object.delegationAddress !== undefined && object.delegationAddress !== null ? exports.ICAAccount.fromPartial(object.delegationAddress) : undefined;
        message.accountPrefix = object.accountPrefix ?? "";
        message.localDenom = object.localDenom ?? "";
        message.baseDenom = object.baseDenom ?? "";
        message.redemptionRate = object.redemptionRate ?? "";
        message.lastRedemptionRate = object.lastRedemptionRate ?? "";
        message.validators = object.validators?.map(e => exports.Validator.fromPartial(e)) || [];
        message.aggregateIntent = object.aggregateIntent?.map(e => exports.ValidatorIntent.fromPartial(e)) || [];
        message.multiSend = object.multiSend ?? false;
        message.liquidityModule = object.liquidityModule ?? false;
        message.withdrawalWaitgroup = object.withdrawalWaitgroup ?? 0;
        message.ibcNextValidatorsHash = object.ibcNextValidatorsHash ?? new Uint8Array();
        message.validatorSelectionAllocation = object.validatorSelectionAllocation !== undefined && object.validatorSelectionAllocation !== null ? helpers_1.Long.fromValue(object.validatorSelectionAllocation) : helpers_1.Long.UZERO;
        message.holdingsAllocation = object.holdingsAllocation !== undefined && object.holdingsAllocation !== null ? helpers_1.Long.fromValue(object.holdingsAllocation) : helpers_1.Long.UZERO;
        message.lastEpochHeight = object.lastEpochHeight !== undefined && object.lastEpochHeight !== null ? helpers_1.Long.fromValue(object.lastEpochHeight) : helpers_1.Long.ZERO;
        message.tvl = object.tvl ?? "";
        message.unbondingPeriod = object.unbondingPeriod !== undefined && object.unbondingPeriod !== null ? helpers_1.Long.fromValue(object.unbondingPeriod) : helpers_1.Long.ZERO;
        message.messagesPerTx = object.messagesPerTx !== undefined && object.messagesPerTx !== null ? helpers_1.Long.fromValue(object.messagesPerTx) : helpers_1.Long.ZERO;
        message.decimals = object.decimals !== undefined && object.decimals !== null ? helpers_1.Long.fromValue(object.decimals) : helpers_1.Long.ZERO;
        message.unbondingEnabled = object.unbondingEnabled ?? false;
        message.depositsEnabled = object.depositsEnabled ?? false;
        message.returnToSender = object.returnToSender ?? false;
        message.is118 = object.is118 ?? false;
        message.subzoneInfo = object.subzoneInfo !== undefined && object.subzoneInfo !== null ? exports.SubzoneInfo.fromPartial(object.subzoneInfo) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            connectionId: object.connection_id,
            chainId: object.chain_id,
            depositAddress: object?.deposit_address ? exports.ICAAccount.fromAmino(object.deposit_address) : undefined,
            withdrawalAddress: object?.withdrawal_address ? exports.ICAAccount.fromAmino(object.withdrawal_address) : undefined,
            performanceAddress: object?.performance_address ? exports.ICAAccount.fromAmino(object.performance_address) : undefined,
            delegationAddress: object?.delegation_address ? exports.ICAAccount.fromAmino(object.delegation_address) : undefined,
            accountPrefix: object.account_prefix,
            localDenom: object.local_denom,
            baseDenom: object.base_denom,
            redemptionRate: object.redemption_rate,
            lastRedemptionRate: object.last_redemption_rate,
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => exports.Validator.fromAmino(e)) : [],
            aggregateIntent: Array.isArray(object?.aggregate_intent) ? object.aggregate_intent.map((e) => exports.ValidatorIntent.fromAmino(e)) : [],
            multiSend: object.multi_send,
            liquidityModule: object.liquidity_module,
            withdrawalWaitgroup: object.withdrawal_waitgroup,
            ibcNextValidatorsHash: object.ibc_next_validators_hash,
            validatorSelectionAllocation: helpers_1.Long.fromString(object.validator_selection_allocation),
            holdingsAllocation: helpers_1.Long.fromString(object.holdings_allocation),
            lastEpochHeight: helpers_1.Long.fromString(object.last_epoch_height),
            tvl: object.tvl,
            unbondingPeriod: helpers_1.Long.fromString(object.unbonding_period),
            messagesPerTx: helpers_1.Long.fromString(object.messages_per_tx),
            decimals: helpers_1.Long.fromString(object.decimals),
            unbondingEnabled: object.unbonding_enabled,
            depositsEnabled: object.deposits_enabled,
            returnToSender: object.return_to_sender,
            is118: object.is_118,
            subzoneInfo: object?.subzoneInfo ? exports.SubzoneInfo.fromAmino(object.subzoneInfo) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.connection_id = message.connectionId;
        obj.chain_id = message.chainId;
        obj.deposit_address = message.depositAddress ? exports.ICAAccount.toAmino(message.depositAddress) : undefined;
        obj.withdrawal_address = message.withdrawalAddress ? exports.ICAAccount.toAmino(message.withdrawalAddress) : undefined;
        obj.performance_address = message.performanceAddress ? exports.ICAAccount.toAmino(message.performanceAddress) : undefined;
        obj.delegation_address = message.delegationAddress ? exports.ICAAccount.toAmino(message.delegationAddress) : undefined;
        obj.account_prefix = message.accountPrefix;
        obj.local_denom = message.localDenom;
        obj.base_denom = message.baseDenom;
        obj.redemption_rate = message.redemptionRate;
        obj.last_redemption_rate = message.lastRedemptionRate;
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.Validator.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        if (message.aggregateIntent) {
            obj.aggregate_intent = message.aggregateIntent.map(e => e ? exports.ValidatorIntent.toAmino(e) : undefined);
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
        obj.subzoneInfo = message.subzoneInfo ? exports.SubzoneInfo.toAmino(message.subzoneInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Zone.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Zone.decode(message.value);
    },
    toProto(message) {
        return exports.Zone.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.Zone",
            value: exports.Zone.encode(message).finish()
        };
    }
};
function createBaseSubzoneInfo() {
    return {
        authority: "",
        baseChainID: ""
    };
}
exports.SubzoneInfo = {
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
            authority: (0, helpers_1.isSet)(object.authority) ? String(object.authority) : "",
            baseChainID: (0, helpers_1.isSet)(object.baseChainID) ? String(object.baseChainID) : ""
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
        return exports.SubzoneInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.SubzoneInfo.decode(message.value);
    },
    toProto(message) {
        return exports.SubzoneInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.SubzoneInfo",
            value: exports.SubzoneInfo.encode(message).finish()
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
exports.LsmCaps = {
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
            validatorCap: (0, helpers_1.isSet)(object.validatorCap) ? String(object.validatorCap) : "",
            validatorBondCap: (0, helpers_1.isSet)(object.validatorBondCap) ? String(object.validatorBondCap) : "",
            globalCap: (0, helpers_1.isSet)(object.globalCap) ? String(object.globalCap) : ""
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
        return exports.LsmCaps.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.LsmCaps.decode(message.value);
    },
    toProto(message) {
        return exports.LsmCaps.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.LsmCaps",
            value: exports.LsmCaps.encode(message).finish()
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
exports.ICAAccount = {
    typeUrl: "/quicksilver.interchainstaking.v1.ICAAccount",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.balance) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.balance.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            balance: Array.isArray(object?.balance) ? object.balance.map((e) => coin_1.Coin.fromJSON(e)) : [],
            portName: (0, helpers_1.isSet)(object.portName) ? String(object.portName) : "",
            withdrawalAddress: (0, helpers_1.isSet)(object.withdrawalAddress) ? String(object.withdrawalAddress) : "",
            balanceWaitgroup: (0, helpers_1.isSet)(object.balanceWaitgroup) ? Number(object.balanceWaitgroup) : 0
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.balance) {
            obj.balance = message.balance.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
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
        message.balance = object.balance?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.portName = object.portName ?? "";
        message.withdrawalAddress = object.withdrawalAddress ?? "";
        message.balanceWaitgroup = object.balanceWaitgroup ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            balance: Array.isArray(object?.balance) ? object.balance.map((e) => coin_1.Coin.fromAmino(e)) : [],
            portName: object.port_name,
            withdrawalAddress: object.withdrawal_address,
            balanceWaitgroup: object.balance_waitgroup
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        if (message.balance) {
            obj.balance = message.balance.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
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
        return exports.ICAAccount.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ICAAccount.decode(message.value);
    },
    toProto(message) {
        return exports.ICAAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.ICAAccount",
            value: exports.ICAAccount.encode(message).finish()
        };
    }
};
function createBaseDistribution() {
    return {
        valoper: "",
        amount: helpers_1.Long.UZERO
    };
}
exports.Distribution = {
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
            valoper: (0, helpers_1.isSet)(object.valoper) ? String(object.valoper) : "",
            amount: (0, helpers_1.isSet)(object.amount) ? helpers_1.Long.fromValue(object.amount) : helpers_1.Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.valoper !== undefined && (obj.valoper = message.valoper);
        message.amount !== undefined && (obj.amount = (message.amount || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDistribution();
        message.valoper = object.valoper ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? helpers_1.Long.fromValue(object.amount) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            valoper: object.valoper,
            amount: helpers_1.Long.fromString(object.amount)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.valoper = message.valoper;
        obj.amount = message.amount ? message.amount.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Distribution.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Distribution.decode(message.value);
    },
    toProto(message) {
        return exports.Distribution.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.Distribution",
            value: exports.Distribution.encode(message).finish()
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
        burnAmount: coin_1.Coin.fromPartial({}),
        txhash: "",
        status: 0,
        completionTime: new Date(),
        requeued: false,
        acknowledged: false,
        epochNumber: helpers_1.Long.ZERO
    };
}
exports.WithdrawalRecord = {
    typeUrl: "/quicksilver.interchainstaking.v1.WithdrawalRecord",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (message.delegator !== "") {
            writer.uint32(18).string(message.delegator);
        }
        for (const v of message.distribution) {
            exports.Distribution.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.recipient !== "") {
            writer.uint32(34).string(message.recipient);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.burnAmount !== undefined) {
            coin_1.Coin.encode(message.burnAmount, writer.uint32(50).fork()).ldelim();
        }
        if (message.txhash !== "") {
            writer.uint32(58).string(message.txhash);
        }
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        if (message.completionTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.completionTime), writer.uint32(74).fork()).ldelim();
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
                    message.distribution.push(exports.Distribution.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.recipient = reader.string();
                    break;
                case 5:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.burnAmount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.txhash = reader.string();
                    break;
                case 8:
                    message.status = reader.int32();
                    break;
                case 9:
                    message.completionTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            chainId: (0, helpers_1.isSet)(object.chainId) ? String(object.chainId) : "",
            delegator: (0, helpers_1.isSet)(object.delegator) ? String(object.delegator) : "",
            distribution: Array.isArray(object?.distribution) ? object.distribution.map((e) => exports.Distribution.fromJSON(e)) : [],
            recipient: (0, helpers_1.isSet)(object.recipient) ? String(object.recipient) : "",
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : [],
            burnAmount: (0, helpers_1.isSet)(object.burnAmount) ? coin_1.Coin.fromJSON(object.burnAmount) : undefined,
            txhash: (0, helpers_1.isSet)(object.txhash) ? String(object.txhash) : "",
            status: (0, helpers_1.isSet)(object.status) ? Number(object.status) : 0,
            completionTime: (0, helpers_1.isSet)(object.completionTime) ? (0, helpers_1.fromJsonTimestamp)(object.completionTime) : undefined,
            requeued: (0, helpers_1.isSet)(object.requeued) ? Boolean(object.requeued) : false,
            acknowledged: (0, helpers_1.isSet)(object.acknowledged) ? Boolean(object.acknowledged) : false,
            epochNumber: (0, helpers_1.isSet)(object.epochNumber) ? helpers_1.Long.fromValue(object.epochNumber) : helpers_1.Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.delegator !== undefined && (obj.delegator = message.delegator);
        if (message.distribution) {
            obj.distribution = message.distribution.map(e => e ? exports.Distribution.toJSON(e) : undefined);
        }
        else {
            obj.distribution = [];
        }
        message.recipient !== undefined && (obj.recipient = message.recipient);
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        message.burnAmount !== undefined && (obj.burnAmount = message.burnAmount ? coin_1.Coin.toJSON(message.burnAmount) : undefined);
        message.txhash !== undefined && (obj.txhash = message.txhash);
        message.status !== undefined && (obj.status = Math.round(message.status));
        message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
        message.requeued !== undefined && (obj.requeued = message.requeued);
        message.acknowledged !== undefined && (obj.acknowledged = message.acknowledged);
        message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || helpers_1.Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseWithdrawalRecord();
        message.chainId = object.chainId ?? "";
        message.delegator = object.delegator ?? "";
        message.distribution = object.distribution?.map(e => exports.Distribution.fromPartial(e)) || [];
        message.recipient = object.recipient ?? "";
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.burnAmount = object.burnAmount !== undefined && object.burnAmount !== null ? coin_1.Coin.fromPartial(object.burnAmount) : undefined;
        message.txhash = object.txhash ?? "";
        message.status = object.status ?? 0;
        message.completionTime = object.completionTime ?? undefined;
        message.requeued = object.requeued ?? false;
        message.acknowledged = object.acknowledged ?? false;
        message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? helpers_1.Long.fromValue(object.epochNumber) : helpers_1.Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            chainId: object.chain_id,
            delegator: object.delegator,
            distribution: Array.isArray(object?.distribution) ? object.distribution.map((e) => exports.Distribution.fromAmino(e)) : [],
            recipient: object.recipient,
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromAmino(e)) : [],
            burnAmount: object?.burn_amount ? coin_1.Coin.fromAmino(object.burn_amount) : undefined,
            txhash: object.txhash,
            status: object.status,
            completionTime: object.completion_time,
            requeued: object.requeued,
            acknowledged: object.acknowledged,
            epochNumber: helpers_1.Long.fromString(object.epoch_number)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        obj.delegator = message.delegator;
        if (message.distribution) {
            obj.distribution = message.distribution.map(e => e ? exports.Distribution.toAmino(e) : undefined);
        }
        else {
            obj.distribution = [];
        }
        obj.recipient = message.recipient;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        obj.burn_amount = message.burnAmount ? coin_1.Coin.toAmino(message.burnAmount) : undefined;
        obj.txhash = message.txhash;
        obj.status = message.status;
        obj.completion_time = message.completionTime;
        obj.requeued = message.requeued;
        obj.acknowledged = message.acknowledged;
        obj.epoch_number = message.epochNumber ? message.epochNumber.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.WithdrawalRecord.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.WithdrawalRecord.decode(message.value);
    },
    toProto(message) {
        return exports.WithdrawalRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.WithdrawalRecord",
            value: exports.WithdrawalRecord.encode(message).finish()
        };
    }
};
function createBaseUnbondingRecord() {
    return {
        chainId: "",
        epochNumber: helpers_1.Long.ZERO,
        validator: "",
        relatedTxhash: []
    };
}
exports.UnbondingRecord = {
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
            chainId: (0, helpers_1.isSet)(object.chainId) ? String(object.chainId) : "",
            epochNumber: (0, helpers_1.isSet)(object.epochNumber) ? helpers_1.Long.fromValue(object.epochNumber) : helpers_1.Long.ZERO,
            validator: (0, helpers_1.isSet)(object.validator) ? String(object.validator) : "",
            relatedTxhash: Array.isArray(object?.relatedTxhash) ? object.relatedTxhash.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || helpers_1.Long.ZERO).toString());
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
        message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? helpers_1.Long.fromValue(object.epochNumber) : helpers_1.Long.ZERO;
        message.validator = object.validator ?? "";
        message.relatedTxhash = object.relatedTxhash?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            chainId: object.chain_id,
            epochNumber: helpers_1.Long.fromString(object.epoch_number),
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
        return exports.UnbondingRecord.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.UnbondingRecord.decode(message.value);
    },
    toProto(message) {
        return exports.UnbondingRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.UnbondingRecord",
            value: exports.UnbondingRecord.encode(message).finish()
        };
    }
};
function createBaseRedelegationRecord() {
    return {
        chainId: "",
        epochNumber: helpers_1.Long.ZERO,
        source: "",
        destination: "",
        amount: helpers_1.Long.ZERO,
        completionTime: new Date()
    };
}
exports.RedelegationRecord = {
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
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.completionTime), writer.uint32(50).fork()).ldelim();
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
                    message.completionTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            chainId: (0, helpers_1.isSet)(object.chainId) ? String(object.chainId) : "",
            epochNumber: (0, helpers_1.isSet)(object.epochNumber) ? helpers_1.Long.fromValue(object.epochNumber) : helpers_1.Long.ZERO,
            source: (0, helpers_1.isSet)(object.source) ? String(object.source) : "",
            destination: (0, helpers_1.isSet)(object.destination) ? String(object.destination) : "",
            amount: (0, helpers_1.isSet)(object.amount) ? helpers_1.Long.fromValue(object.amount) : helpers_1.Long.ZERO,
            completionTime: (0, helpers_1.isSet)(object.completionTime) ? (0, helpers_1.fromJsonTimestamp)(object.completionTime) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || helpers_1.Long.ZERO).toString());
        message.source !== undefined && (obj.source = message.source);
        message.destination !== undefined && (obj.destination = message.destination);
        message.amount !== undefined && (obj.amount = (message.amount || helpers_1.Long.ZERO).toString());
        message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRedelegationRecord();
        message.chainId = object.chainId ?? "";
        message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? helpers_1.Long.fromValue(object.epochNumber) : helpers_1.Long.ZERO;
        message.source = object.source ?? "";
        message.destination = object.destination ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? helpers_1.Long.fromValue(object.amount) : helpers_1.Long.ZERO;
        message.completionTime = object.completionTime ?? undefined;
        return message;
    },
    fromAmino(object) {
        return {
            chainId: object.chain_id,
            epochNumber: helpers_1.Long.fromString(object.epoch_number),
            source: object.source,
            destination: object.destination,
            amount: helpers_1.Long.fromString(object.amount),
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
        return exports.RedelegationRecord.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RedelegationRecord.decode(message.value);
    },
    toProto(message) {
        return exports.RedelegationRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.RedelegationRecord",
            value: exports.RedelegationRecord.encode(message).finish()
        };
    }
};
function createBaseTransferRecord() {
    return {
        sender: "",
        recipient: "",
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.TransferRecord = {
    typeUrl: "/quicksilver.interchainstaking.v1.TransferRecord",
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.recipient !== "") {
            writer.uint32(18).string(message.recipient);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
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
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            recipient: (0, helpers_1.isSet)(object.recipient) ? String(object.recipient) : "",
            amount: (0, helpers_1.isSet)(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTransferRecord();
        message.sender = object.sender ?? "";
        message.recipient = object.recipient ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            recipient: object.recipient,
            amount: object?.amount ? coin_1.Coin.fromAmino(object.amount) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.recipient = message.recipient;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TransferRecord.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.TransferRecord.decode(message.value);
    },
    toProto(message) {
        return exports.TransferRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.TransferRecord",
            value: exports.TransferRecord.encode(message).finish()
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
exports.Validator = {
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
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.jailedSince), writer.uint32(74).fork()).ldelim();
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
                    message.jailedSince = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            valoperAddress: (0, helpers_1.isSet)(object.valoperAddress) ? String(object.valoperAddress) : "",
            commissionRate: (0, helpers_1.isSet)(object.commissionRate) ? String(object.commissionRate) : "",
            delegatorShares: (0, helpers_1.isSet)(object.delegatorShares) ? String(object.delegatorShares) : "",
            votingPower: (0, helpers_1.isSet)(object.votingPower) ? String(object.votingPower) : "",
            score: (0, helpers_1.isSet)(object.score) ? String(object.score) : "",
            status: (0, helpers_1.isSet)(object.status) ? String(object.status) : "",
            jailed: (0, helpers_1.isSet)(object.jailed) ? Boolean(object.jailed) : false,
            tombstoned: (0, helpers_1.isSet)(object.tombstoned) ? Boolean(object.tombstoned) : false,
            jailedSince: (0, helpers_1.isSet)(object.jailedSince) ? (0, helpers_1.fromJsonTimestamp)(object.jailedSince) : undefined,
            validatorBondShares: (0, helpers_1.isSet)(object.validatorBondShares) ? String(object.validatorBondShares) : "",
            liquidShares: (0, helpers_1.isSet)(object.liquidShares) ? String(object.liquidShares) : ""
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
        return exports.Validator.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Validator.decode(message.value);
    },
    toProto(message) {
        return exports.Validator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.Validator",
            value: exports.Validator.encode(message).finish()
        };
    }
};
function createBaseDelegatorIntent() {
    return {
        delegator: "",
        intents: []
    };
}
exports.DelegatorIntent = {
    typeUrl: "/quicksilver.interchainstaking.v1.DelegatorIntent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegator !== "") {
            writer.uint32(10).string(message.delegator);
        }
        for (const v of message.intents) {
            exports.ValidatorIntent.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.intents.push(exports.ValidatorIntent.decode(reader, reader.uint32()));
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
            delegator: (0, helpers_1.isSet)(object.delegator) ? String(object.delegator) : "",
            intents: Array.isArray(object?.intents) ? object.intents.map((e) => exports.ValidatorIntent.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator !== undefined && (obj.delegator = message.delegator);
        if (message.intents) {
            obj.intents = message.intents.map(e => e ? exports.ValidatorIntent.toJSON(e) : undefined);
        }
        else {
            obj.intents = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelegatorIntent();
        message.delegator = object.delegator ?? "";
        message.intents = object.intents?.map(e => exports.ValidatorIntent.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            delegator: object.delegator,
            intents: Array.isArray(object?.intents) ? object.intents.map((e) => exports.ValidatorIntent.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator = message.delegator;
        if (message.intents) {
            obj.intents = message.intents.map(e => e ? exports.ValidatorIntent.toAmino(e) : undefined);
        }
        else {
            obj.intents = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DelegatorIntent.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.DelegatorIntent.decode(message.value);
    },
    toProto(message) {
        return exports.DelegatorIntent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.DelegatorIntent",
            value: exports.DelegatorIntent.encode(message).finish()
        };
    }
};
function createBaseValidatorIntent() {
    return {
        valoperAddress: "",
        weight: ""
    };
}
exports.ValidatorIntent = {
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
            valoperAddress: (0, helpers_1.isSet)(object.valoper_address) ? String(object.valoper_address) : "",
            weight: (0, helpers_1.isSet)(object.weight) ? String(object.weight) : ""
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
        return exports.ValidatorIntent.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ValidatorIntent.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorIntent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.ValidatorIntent",
            value: exports.ValidatorIntent.encode(message).finish()
        };
    }
};
function createBaseDelegation() {
    return {
        delegationAddress: "",
        validatorAddress: "",
        amount: coin_1.Coin.fromPartial({}),
        height: helpers_1.Long.ZERO,
        redelegationEnd: helpers_1.Long.ZERO
    };
}
exports.Delegation = {
    typeUrl: "/quicksilver.interchainstaking.v1.Delegation",
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegationAddress !== "") {
            writer.uint32(10).string(message.delegationAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
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
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
            delegationAddress: (0, helpers_1.isSet)(object.delegationAddress) ? String(object.delegationAddress) : "",
            validatorAddress: (0, helpers_1.isSet)(object.validatorAddress) ? String(object.validatorAddress) : "",
            amount: (0, helpers_1.isSet)(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
            height: (0, helpers_1.isSet)(object.height) ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO,
            redelegationEnd: (0, helpers_1.isSet)(object.redelegationEnd) ? helpers_1.Long.fromValue(object.redelegationEnd) : helpers_1.Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegationAddress !== undefined && (obj.delegationAddress = message.delegationAddress);
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        message.height !== undefined && (obj.height = (message.height || helpers_1.Long.ZERO).toString());
        message.redelegationEnd !== undefined && (obj.redelegationEnd = (message.redelegationEnd || helpers_1.Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelegation();
        message.delegationAddress = object.delegationAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        message.height = object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO;
        message.redelegationEnd = object.redelegationEnd !== undefined && object.redelegationEnd !== null ? helpers_1.Long.fromValue(object.redelegationEnd) : helpers_1.Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            delegationAddress: object.delegation_address,
            validatorAddress: object.validator_address,
            amount: object?.amount ? coin_1.Coin.fromAmino(object.amount) : undefined,
            height: helpers_1.Long.fromString(object.height),
            redelegationEnd: helpers_1.Long.fromString(object.redelegation_end)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegation_address = message.delegationAddress;
        obj.validator_address = message.validatorAddress;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.redelegation_end = message.redelegationEnd ? message.redelegationEnd.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Delegation.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Delegation.decode(message.value);
    },
    toProto(message) {
        return exports.Delegation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.Delegation",
            value: exports.Delegation.encode(message).finish()
        };
    }
};
function createBasePortConnectionTuple() {
    return {
        connectionId: "",
        portId: ""
    };
}
exports.PortConnectionTuple = {
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
            connectionId: (0, helpers_1.isSet)(object.connectionId) ? String(object.connectionId) : "",
            portId: (0, helpers_1.isSet)(object.portId) ? String(object.portId) : ""
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
        return exports.PortConnectionTuple.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.PortConnectionTuple.decode(message.value);
    },
    toProto(message) {
        return exports.PortConnectionTuple.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.PortConnectionTuple",
            value: exports.PortConnectionTuple.encode(message).finish()
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
exports.Receipt = {
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
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.firstSeen !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.firstSeen), writer.uint32(42).fork()).ldelim();
        }
        if (message.completed !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.completed), writer.uint32(50).fork()).ldelim();
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
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.firstSeen = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.completed = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            chainId: (0, helpers_1.isSet)(object.chainId) ? String(object.chainId) : "",
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            txhash: (0, helpers_1.isSet)(object.txhash) ? String(object.txhash) : "",
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : [],
            firstSeen: (0, helpers_1.isSet)(object.firstSeen) ? (0, helpers_1.fromJsonTimestamp)(object.firstSeen) : undefined,
            completed: (0, helpers_1.isSet)(object.completed) ? (0, helpers_1.fromJsonTimestamp)(object.completed) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.sender !== undefined && (obj.sender = message.sender);
        message.txhash !== undefined && (obj.txhash = message.txhash);
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
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
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.firstSeen = object.firstSeen ?? undefined;
        message.completed = object.completed ?? undefined;
        return message;
    },
    fromAmino(object) {
        return {
            chainId: object.chain_id,
            sender: object.sender,
            txhash: object.txhash,
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromAmino(e)) : [],
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
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        obj.first_seen = message.firstSeen;
        obj.completed = message.completed;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Receipt.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Receipt.decode(message.value);
    },
    toProto(message) {
        return exports.Receipt.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.Receipt",
            value: exports.Receipt.encode(message).finish()
        };
    }
};
//# sourceMappingURL=interchainstaking.js.map