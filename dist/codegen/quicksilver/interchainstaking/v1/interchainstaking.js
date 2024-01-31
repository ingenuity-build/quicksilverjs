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
        connection_id: "",
        chain_id: "",
        deposit_address: exports.ICAAccount.fromPartial({}),
        withdrawal_address: exports.ICAAccount.fromPartial({}),
        performance_address: exports.ICAAccount.fromPartial({}),
        delegation_address: exports.ICAAccount.fromPartial({}),
        account_prefix: "",
        local_denom: "",
        base_denom: "",
        redemption_rate: "",
        last_redemption_rate: "",
        validators: [],
        aggregate_intent: [],
        multi_send: false,
        liquidity_module: false,
        withdrawal_waitgroup: 0,
        ibc_next_validators_hash: new Uint8Array(),
        validator_selection_allocation: helpers_1.Long.UZERO,
        holdings_allocation: helpers_1.Long.UZERO,
        last_epoch_height: helpers_1.Long.ZERO,
        tvl: "",
        unbonding_period: helpers_1.Long.ZERO,
        messages_per_tx: helpers_1.Long.ZERO,
        decimals: helpers_1.Long.ZERO,
        unbonding_enabled: false,
        deposits_enabled: false,
        return_to_sender: false,
        is118: false,
        subzoneInfo: exports.SubzoneInfo.fromPartial({})
    };
}
exports.Zone = {
    typeUrl: "/quicksilver.interchainstaking.v1.Zone",
    encode(message, writer = _m0.Writer.create()) {
        if (message.connection_id !== "") {
            writer.uint32(10).string(message.connection_id);
        }
        if (message.chain_id !== "") {
            writer.uint32(18).string(message.chain_id);
        }
        if (message.deposit_address !== undefined) {
            exports.ICAAccount.encode(message.deposit_address, writer.uint32(26).fork()).ldelim();
        }
        if (message.withdrawal_address !== undefined) {
            exports.ICAAccount.encode(message.withdrawal_address, writer.uint32(34).fork()).ldelim();
        }
        if (message.performance_address !== undefined) {
            exports.ICAAccount.encode(message.performance_address, writer.uint32(42).fork()).ldelim();
        }
        if (message.delegation_address !== undefined) {
            exports.ICAAccount.encode(message.delegation_address, writer.uint32(50).fork()).ldelim();
        }
        if (message.account_prefix !== "") {
            writer.uint32(58).string(message.account_prefix);
        }
        if (message.local_denom !== "") {
            writer.uint32(66).string(message.local_denom);
        }
        if (message.base_denom !== "") {
            writer.uint32(74).string(message.base_denom);
        }
        if (message.redemption_rate !== "") {
            writer.uint32(82).string(message.redemption_rate);
        }
        if (message.last_redemption_rate !== "") {
            writer.uint32(90).string(message.last_redemption_rate);
        }
        for (const v of message.validators) {
            exports.Validator.encode(v, writer.uint32(98).fork()).ldelim();
        }
        for (const v of message.aggregate_intent) {
            exports.ValidatorIntent.encode(v, writer.uint32(106).fork()).ldelim();
        }
        if (message.multi_send === true) {
            writer.uint32(112).bool(message.multi_send);
        }
        if (message.liquidity_module === true) {
            writer.uint32(120).bool(message.liquidity_module);
        }
        if (message.withdrawal_waitgroup !== 0) {
            writer.uint32(128).uint32(message.withdrawal_waitgroup);
        }
        if (message.ibc_next_validators_hash.length !== 0) {
            writer.uint32(138).bytes(message.ibc_next_validators_hash);
        }
        if (!message.validator_selection_allocation.isZero()) {
            writer.uint32(144).uint64(message.validator_selection_allocation);
        }
        if (!message.holdings_allocation.isZero()) {
            writer.uint32(152).uint64(message.holdings_allocation);
        }
        if (!message.last_epoch_height.isZero()) {
            writer.uint32(160).int64(message.last_epoch_height);
        }
        if (message.tvl !== "") {
            writer.uint32(170).string(message.tvl);
        }
        if (!message.unbonding_period.isZero()) {
            writer.uint32(176).int64(message.unbonding_period);
        }
        if (!message.messages_per_tx.isZero()) {
            writer.uint32(184).int64(message.messages_per_tx);
        }
        if (!message.decimals.isZero()) {
            writer.uint32(192).int64(message.decimals);
        }
        if (message.unbonding_enabled === true) {
            writer.uint32(200).bool(message.unbonding_enabled);
        }
        if (message.deposits_enabled === true) {
            writer.uint32(208).bool(message.deposits_enabled);
        }
        if (message.return_to_sender === true) {
            writer.uint32(216).bool(message.return_to_sender);
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
                    message.connection_id = reader.string();
                    break;
                case 2:
                    message.chain_id = reader.string();
                    break;
                case 3:
                    message.deposit_address = exports.ICAAccount.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.withdrawal_address = exports.ICAAccount.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.performance_address = exports.ICAAccount.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.delegation_address = exports.ICAAccount.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.account_prefix = reader.string();
                    break;
                case 8:
                    message.local_denom = reader.string();
                    break;
                case 9:
                    message.base_denom = reader.string();
                    break;
                case 10:
                    message.redemption_rate = reader.string();
                    break;
                case 11:
                    message.last_redemption_rate = reader.string();
                    break;
                case 12:
                    message.validators.push(exports.Validator.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.aggregate_intent.push(exports.ValidatorIntent.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.multi_send = reader.bool();
                    break;
                case 15:
                    message.liquidity_module = reader.bool();
                    break;
                case 16:
                    message.withdrawal_waitgroup = reader.uint32();
                    break;
                case 17:
                    message.ibc_next_validators_hash = reader.bytes();
                    break;
                case 18:
                    message.validator_selection_allocation = reader.uint64();
                    break;
                case 19:
                    message.holdings_allocation = reader.uint64();
                    break;
                case 20:
                    message.last_epoch_height = reader.int64();
                    break;
                case 21:
                    message.tvl = reader.string();
                    break;
                case 22:
                    message.unbonding_period = reader.int64();
                    break;
                case 23:
                    message.messages_per_tx = reader.int64();
                    break;
                case 24:
                    message.decimals = reader.int64();
                    break;
                case 25:
                    message.unbonding_enabled = reader.bool();
                    break;
                case 26:
                    message.deposits_enabled = reader.bool();
                    break;
                case 27:
                    message.return_to_sender = reader.bool();
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
            connection_id: (0, helpers_1.isSet)(object.connection_id) ? String(object.connection_id) : "",
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : "",
            deposit_address: (0, helpers_1.isSet)(object.deposit_address) ? exports.ICAAccount.fromJSON(object.deposit_address) : undefined,
            withdrawal_address: (0, helpers_1.isSet)(object.withdrawal_address) ? exports.ICAAccount.fromJSON(object.withdrawal_address) : undefined,
            performance_address: (0, helpers_1.isSet)(object.performance_address) ? exports.ICAAccount.fromJSON(object.performance_address) : undefined,
            delegation_address: (0, helpers_1.isSet)(object.delegation_address) ? exports.ICAAccount.fromJSON(object.delegation_address) : undefined,
            account_prefix: (0, helpers_1.isSet)(object.account_prefix) ? String(object.account_prefix) : "",
            local_denom: (0, helpers_1.isSet)(object.local_denom) ? String(object.local_denom) : "",
            base_denom: (0, helpers_1.isSet)(object.base_denom) ? String(object.base_denom) : "",
            redemption_rate: (0, helpers_1.isSet)(object.redemption_rate) ? String(object.redemption_rate) : "",
            last_redemption_rate: (0, helpers_1.isSet)(object.last_redemption_rate) ? String(object.last_redemption_rate) : "",
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => exports.Validator.fromJSON(e)) : [],
            aggregate_intent: Array.isArray(object?.aggregate_intent) ? object.aggregate_intent.map((e) => exports.ValidatorIntent.fromJSON(e)) : [],
            multi_send: (0, helpers_1.isSet)(object.multi_send) ? Boolean(object.multi_send) : false,
            liquidity_module: (0, helpers_1.isSet)(object.liquidity_module) ? Boolean(object.liquidity_module) : false,
            withdrawal_waitgroup: (0, helpers_1.isSet)(object.withdrawal_waitgroup) ? Number(object.withdrawal_waitgroup) : 0,
            ibc_next_validators_hash: (0, helpers_1.isSet)(object.ibc_next_validators_hash) ? (0, helpers_1.bytesFromBase64)(object.ibc_next_validators_hash) : new Uint8Array(),
            validator_selection_allocation: (0, helpers_1.isSet)(object.validator_selection_allocation) ? helpers_1.Long.fromValue(object.validator_selection_allocation) : helpers_1.Long.UZERO,
            holdings_allocation: (0, helpers_1.isSet)(object.holdings_allocation) ? helpers_1.Long.fromValue(object.holdings_allocation) : helpers_1.Long.UZERO,
            last_epoch_height: (0, helpers_1.isSet)(object.last_epoch_height) ? helpers_1.Long.fromValue(object.last_epoch_height) : helpers_1.Long.ZERO,
            tvl: (0, helpers_1.isSet)(object.tvl) ? String(object.tvl) : "",
            unbonding_period: (0, helpers_1.isSet)(object.unbonding_period) ? helpers_1.Long.fromValue(object.unbonding_period) : helpers_1.Long.ZERO,
            messages_per_tx: (0, helpers_1.isSet)(object.messages_per_tx) ? helpers_1.Long.fromValue(object.messages_per_tx) : helpers_1.Long.ZERO,
            decimals: (0, helpers_1.isSet)(object.decimals) ? helpers_1.Long.fromValue(object.decimals) : helpers_1.Long.ZERO,
            unbonding_enabled: (0, helpers_1.isSet)(object.unbonding_enabled) ? Boolean(object.unbonding_enabled) : false,
            deposits_enabled: (0, helpers_1.isSet)(object.deposits_enabled) ? Boolean(object.deposits_enabled) : false,
            return_to_sender: (0, helpers_1.isSet)(object.return_to_sender) ? Boolean(object.return_to_sender) : false,
            is118: (0, helpers_1.isSet)(object.is118) ? Boolean(object.is118) : false,
            subzoneInfo: (0, helpers_1.isSet)(object.subzoneInfo) ? exports.SubzoneInfo.fromJSON(object.subzoneInfo) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection_id !== undefined && (obj.connection_id = message.connection_id);
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.deposit_address !== undefined && (obj.deposit_address = message.deposit_address ? exports.ICAAccount.toJSON(message.deposit_address) : undefined);
        message.withdrawal_address !== undefined && (obj.withdrawal_address = message.withdrawal_address ? exports.ICAAccount.toJSON(message.withdrawal_address) : undefined);
        message.performance_address !== undefined && (obj.performance_address = message.performance_address ? exports.ICAAccount.toJSON(message.performance_address) : undefined);
        message.delegation_address !== undefined && (obj.delegation_address = message.delegation_address ? exports.ICAAccount.toJSON(message.delegation_address) : undefined);
        message.account_prefix !== undefined && (obj.account_prefix = message.account_prefix);
        message.local_denom !== undefined && (obj.local_denom = message.local_denom);
        message.base_denom !== undefined && (obj.base_denom = message.base_denom);
        message.redemption_rate !== undefined && (obj.redemption_rate = message.redemption_rate);
        message.last_redemption_rate !== undefined && (obj.last_redemption_rate = message.last_redemption_rate);
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        if (message.aggregate_intent) {
            obj.aggregate_intent = message.aggregate_intent.map(e => e ? exports.ValidatorIntent.toJSON(e) : undefined);
        }
        else {
            obj.aggregate_intent = [];
        }
        message.multi_send !== undefined && (obj.multi_send = message.multi_send);
        message.liquidity_module !== undefined && (obj.liquidity_module = message.liquidity_module);
        message.withdrawal_waitgroup !== undefined && (obj.withdrawal_waitgroup = Math.round(message.withdrawal_waitgroup));
        message.ibc_next_validators_hash !== undefined && (obj.ibc_next_validators_hash = (0, helpers_1.base64FromBytes)(message.ibc_next_validators_hash !== undefined ? message.ibc_next_validators_hash : new Uint8Array()));
        message.validator_selection_allocation !== undefined && (obj.validator_selection_allocation = (message.validator_selection_allocation || helpers_1.Long.UZERO).toString());
        message.holdings_allocation !== undefined && (obj.holdings_allocation = (message.holdings_allocation || helpers_1.Long.UZERO).toString());
        message.last_epoch_height !== undefined && (obj.last_epoch_height = (message.last_epoch_height || helpers_1.Long.ZERO).toString());
        message.tvl !== undefined && (obj.tvl = message.tvl);
        message.unbonding_period !== undefined && (obj.unbonding_period = (message.unbonding_period || helpers_1.Long.ZERO).toString());
        message.messages_per_tx !== undefined && (obj.messages_per_tx = (message.messages_per_tx || helpers_1.Long.ZERO).toString());
        message.decimals !== undefined && (obj.decimals = (message.decimals || helpers_1.Long.ZERO).toString());
        message.unbonding_enabled !== undefined && (obj.unbonding_enabled = message.unbonding_enabled);
        message.deposits_enabled !== undefined && (obj.deposits_enabled = message.deposits_enabled);
        message.return_to_sender !== undefined && (obj.return_to_sender = message.return_to_sender);
        message.is118 !== undefined && (obj.is118 = message.is118);
        message.subzoneInfo !== undefined && (obj.subzoneInfo = message.subzoneInfo ? exports.SubzoneInfo.toJSON(message.subzoneInfo) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseZone();
        message.connection_id = object.connection_id ?? "";
        message.chain_id = object.chain_id ?? "";
        message.deposit_address = object.deposit_address !== undefined && object.deposit_address !== null ? exports.ICAAccount.fromPartial(object.deposit_address) : undefined;
        message.withdrawal_address = object.withdrawal_address !== undefined && object.withdrawal_address !== null ? exports.ICAAccount.fromPartial(object.withdrawal_address) : undefined;
        message.performance_address = object.performance_address !== undefined && object.performance_address !== null ? exports.ICAAccount.fromPartial(object.performance_address) : undefined;
        message.delegation_address = object.delegation_address !== undefined && object.delegation_address !== null ? exports.ICAAccount.fromPartial(object.delegation_address) : undefined;
        message.account_prefix = object.account_prefix ?? "";
        message.local_denom = object.local_denom ?? "";
        message.base_denom = object.base_denom ?? "";
        message.redemption_rate = object.redemption_rate ?? "";
        message.last_redemption_rate = object.last_redemption_rate ?? "";
        message.validators = object.validators?.map(e => exports.Validator.fromPartial(e)) || [];
        message.aggregate_intent = object.aggregate_intent?.map(e => exports.ValidatorIntent.fromPartial(e)) || [];
        message.multi_send = object.multi_send ?? false;
        message.liquidity_module = object.liquidity_module ?? false;
        message.withdrawal_waitgroup = object.withdrawal_waitgroup ?? 0;
        message.ibc_next_validators_hash = object.ibc_next_validators_hash ?? new Uint8Array();
        message.validator_selection_allocation = object.validator_selection_allocation !== undefined && object.validator_selection_allocation !== null ? helpers_1.Long.fromValue(object.validator_selection_allocation) : helpers_1.Long.UZERO;
        message.holdings_allocation = object.holdings_allocation !== undefined && object.holdings_allocation !== null ? helpers_1.Long.fromValue(object.holdings_allocation) : helpers_1.Long.UZERO;
        message.last_epoch_height = object.last_epoch_height !== undefined && object.last_epoch_height !== null ? helpers_1.Long.fromValue(object.last_epoch_height) : helpers_1.Long.ZERO;
        message.tvl = object.tvl ?? "";
        message.unbonding_period = object.unbonding_period !== undefined && object.unbonding_period !== null ? helpers_1.Long.fromValue(object.unbonding_period) : helpers_1.Long.ZERO;
        message.messages_per_tx = object.messages_per_tx !== undefined && object.messages_per_tx !== null ? helpers_1.Long.fromValue(object.messages_per_tx) : helpers_1.Long.ZERO;
        message.decimals = object.decimals !== undefined && object.decimals !== null ? helpers_1.Long.fromValue(object.decimals) : helpers_1.Long.ZERO;
        message.unbonding_enabled = object.unbonding_enabled ?? false;
        message.deposits_enabled = object.deposits_enabled ?? false;
        message.return_to_sender = object.return_to_sender ?? false;
        message.is118 = object.is118 ?? false;
        message.subzoneInfo = object.subzoneInfo !== undefined && object.subzoneInfo !== null ? exports.SubzoneInfo.fromPartial(object.subzoneInfo) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            connection_id: object.connection_id,
            chain_id: object.chain_id,
            deposit_address: object?.deposit_address ? exports.ICAAccount.fromAmino(object.deposit_address) : undefined,
            withdrawal_address: object?.withdrawal_address ? exports.ICAAccount.fromAmino(object.withdrawal_address) : undefined,
            performance_address: object?.performance_address ? exports.ICAAccount.fromAmino(object.performance_address) : undefined,
            delegation_address: object?.delegation_address ? exports.ICAAccount.fromAmino(object.delegation_address) : undefined,
            account_prefix: object.account_prefix,
            local_denom: object.local_denom,
            base_denom: object.base_denom,
            redemption_rate: object.redemption_rate,
            last_redemption_rate: object.last_redemption_rate,
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => exports.Validator.fromAmino(e)) : [],
            aggregate_intent: Array.isArray(object?.aggregate_intent) ? object.aggregate_intent.map((e) => exports.ValidatorIntent.fromAmino(e)) : [],
            multi_send: object.multi_send,
            liquidity_module: object.liquidity_module,
            withdrawal_waitgroup: object.withdrawal_waitgroup,
            ibc_next_validators_hash: object.ibc_next_validators_hash,
            validator_selection_allocation: helpers_1.Long.fromString(object.validator_selection_allocation),
            holdings_allocation: helpers_1.Long.fromString(object.holdings_allocation),
            last_epoch_height: helpers_1.Long.fromString(object.last_epoch_height),
            tvl: object.tvl,
            unbonding_period: helpers_1.Long.fromString(object.unbonding_period),
            messages_per_tx: helpers_1.Long.fromString(object.messages_per_tx),
            decimals: helpers_1.Long.fromString(object.decimals),
            unbonding_enabled: object.unbonding_enabled,
            deposits_enabled: object.deposits_enabled,
            return_to_sender: object.return_to_sender,
            is_118: object.is_118,
            subzoneInfo: object?.subzoneInfo ? exports.SubzoneInfo.fromAmino(object.subzoneInfo) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.connection_id = message.connection_id;
        obj.chain_id = message.chain_id;
        obj.deposit_address = message.deposit_address ? exports.ICAAccount.toAmino(message.deposit_address) : undefined;
        obj.withdrawal_address = message.withdrawal_address ? exports.ICAAccount.toAmino(message.withdrawal_address) : undefined;
        obj.performance_address = message.performance_address ? exports.ICAAccount.toAmino(message.performance_address) : undefined;
        obj.delegation_address = message.delegation_address ? exports.ICAAccount.toAmino(message.delegation_address) : undefined;
        obj.account_prefix = message.account_prefix;
        obj.local_denom = message.local_denom;
        obj.base_denom = message.base_denom;
        obj.redemption_rate = message.redemption_rate;
        obj.last_redemption_rate = message.last_redemption_rate;
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.Validator.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        if (message.aggregate_intent) {
            obj.aggregate_intent = message.aggregate_intent.map(e => e ? exports.ValidatorIntent.toAmino(e) : undefined);
        }
        else {
            obj.aggregate_intent = [];
        }
        obj.multi_send = message.multi_send;
        obj.liquidity_module = message.liquidity_module;
        obj.withdrawal_waitgroup = message.withdrawal_waitgroup;
        obj.ibc_next_validators_hash = message.ibc_next_validators_hash;
        obj.validator_selection_allocation = message.validator_selection_allocation ? message.validator_selection_allocation.toString() : undefined;
        obj.holdings_allocation = message.holdings_allocation ? message.holdings_allocation.toString() : undefined;
        obj.last_epoch_height = message.last_epoch_height ? message.last_epoch_height.toString() : undefined;
        obj.tvl = message.tvl;
        obj.unbonding_period = message.unbonding_period ? message.unbonding_period.toString() : undefined;
        obj.messages_per_tx = message.messages_per_tx ? message.messages_per_tx.toString() : undefined;
        obj.decimals = message.decimals ? message.decimals.toString() : undefined;
        obj.unbonding_enabled = message.unbonding_enabled;
        obj.deposits_enabled = message.deposits_enabled;
        obj.return_to_sender = message.return_to_sender;
        obj.is_118 = message.is_118;
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
        base_chainID: ""
    };
}
exports.SubzoneInfo = {
    typeUrl: "/quicksilver.interchainstaking.v1.SubzoneInfo",
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.base_chainID !== "") {
            writer.uint32(18).string(message.base_chainID);
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
                    message.base_chainID = reader.string();
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
            base_chainID: (0, helpers_1.isSet)(object.base_chainID) ? String(object.base_chainID) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.base_chainID !== undefined && (obj.base_chainID = message.base_chainID);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSubzoneInfo();
        message.authority = object.authority ?? "";
        message.base_chainID = object.base_chainID ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            authority: object.authority,
            base_chainID: object.base_chainID
        };
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority;
        obj.base_chainID = message.base_chainID;
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
        validator_cap: "",
        validator_bond_cap: "",
        global_cap: ""
    };
}
exports.LsmCaps = {
    typeUrl: "/quicksilver.interchainstaking.v1.LsmCaps",
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator_cap !== "") {
            writer.uint32(10).string(message.validator_cap);
        }
        if (message.validator_bond_cap !== "") {
            writer.uint32(18).string(message.validator_bond_cap);
        }
        if (message.global_cap !== "") {
            writer.uint32(26).string(message.global_cap);
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
                    message.validator_cap = reader.string();
                    break;
                case 2:
                    message.validator_bond_cap = reader.string();
                    break;
                case 3:
                    message.global_cap = reader.string();
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
            validator_cap: (0, helpers_1.isSet)(object.validator_cap) ? String(object.validator_cap) : "",
            validator_bond_cap: (0, helpers_1.isSet)(object.validator_bond_cap) ? String(object.validator_bond_cap) : "",
            global_cap: (0, helpers_1.isSet)(object.global_cap) ? String(object.global_cap) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_cap !== undefined && (obj.validator_cap = message.validator_cap);
        message.validator_bond_cap !== undefined && (obj.validator_bond_cap = message.validator_bond_cap);
        message.global_cap !== undefined && (obj.global_cap = message.global_cap);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLsmCaps();
        message.validator_cap = object.validator_cap ?? "";
        message.validator_bond_cap = object.validator_bond_cap ?? "";
        message.global_cap = object.global_cap ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            validator_cap: object.validator_cap,
            validator_bond_cap: object.validator_bond_cap,
            global_cap: object.global_cap
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_cap = message.validator_cap;
        obj.validator_bond_cap = message.validator_bond_cap;
        obj.global_cap = message.global_cap;
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
        port_name: "",
        withdrawal_address: "",
        balance_waitgroup: 0
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
        if (message.port_name !== "") {
            writer.uint32(26).string(message.port_name);
        }
        if (message.withdrawal_address !== "") {
            writer.uint32(34).string(message.withdrawal_address);
        }
        if (message.balance_waitgroup !== 0) {
            writer.uint32(40).uint32(message.balance_waitgroup);
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
                    message.port_name = reader.string();
                    break;
                case 4:
                    message.withdrawal_address = reader.string();
                    break;
                case 5:
                    message.balance_waitgroup = reader.uint32();
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
            port_name: (0, helpers_1.isSet)(object.port_name) ? String(object.port_name) : "",
            withdrawal_address: (0, helpers_1.isSet)(object.withdrawal_address) ? String(object.withdrawal_address) : "",
            balance_waitgroup: (0, helpers_1.isSet)(object.balance_waitgroup) ? Number(object.balance_waitgroup) : 0
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
        message.port_name !== undefined && (obj.port_name = message.port_name);
        message.withdrawal_address !== undefined && (obj.withdrawal_address = message.withdrawal_address);
        message.balance_waitgroup !== undefined && (obj.balance_waitgroup = Math.round(message.balance_waitgroup));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseICAAccount();
        message.address = object.address ?? "";
        message.balance = object.balance?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.port_name = object.port_name ?? "";
        message.withdrawal_address = object.withdrawal_address ?? "";
        message.balance_waitgroup = object.balance_waitgroup ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            balance: Array.isArray(object?.balance) ? object.balance.map((e) => coin_1.Coin.fromAmino(e)) : [],
            port_name: object.port_name,
            withdrawal_address: object.withdrawal_address,
            balance_waitgroup: object.balance_waitgroup
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
        obj.port_name = message.port_name;
        obj.withdrawal_address = message.withdrawal_address;
        obj.balance_waitgroup = message.balance_waitgroup;
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
        chain_id: "",
        delegator: "",
        distribution: [],
        recipient: "",
        amount: [],
        burn_amount: coin_1.Coin.fromPartial({}),
        txhash: "",
        status: 0,
        completion_time: new Date(),
        requeued: false,
        acknowledged: false,
        epoch_number: helpers_1.Long.ZERO
    };
}
exports.WithdrawalRecord = {
    typeUrl: "/quicksilver.interchainstaking.v1.WithdrawalRecord",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain_id !== "") {
            writer.uint32(10).string(message.chain_id);
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
        if (message.burn_amount !== undefined) {
            coin_1.Coin.encode(message.burn_amount, writer.uint32(50).fork()).ldelim();
        }
        if (message.txhash !== "") {
            writer.uint32(58).string(message.txhash);
        }
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        if (message.completion_time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.completion_time), writer.uint32(74).fork()).ldelim();
        }
        if (message.requeued === true) {
            writer.uint32(80).bool(message.requeued);
        }
        if (message.acknowledged === true) {
            writer.uint32(88).bool(message.acknowledged);
        }
        if (!message.epoch_number.isZero()) {
            writer.uint32(96).int64(message.epoch_number);
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
                    message.chain_id = reader.string();
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
                    message.burn_amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.txhash = reader.string();
                    break;
                case 8:
                    message.status = reader.int32();
                    break;
                case 9:
                    message.completion_time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.requeued = reader.bool();
                    break;
                case 11:
                    message.acknowledged = reader.bool();
                    break;
                case 12:
                    message.epoch_number = reader.int64();
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
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : "",
            delegator: (0, helpers_1.isSet)(object.delegator) ? String(object.delegator) : "",
            distribution: Array.isArray(object?.distribution) ? object.distribution.map((e) => exports.Distribution.fromJSON(e)) : [],
            recipient: (0, helpers_1.isSet)(object.recipient) ? String(object.recipient) : "",
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : [],
            burn_amount: (0, helpers_1.isSet)(object.burn_amount) ? coin_1.Coin.fromJSON(object.burn_amount) : undefined,
            txhash: (0, helpers_1.isSet)(object.txhash) ? String(object.txhash) : "",
            status: (0, helpers_1.isSet)(object.status) ? Number(object.status) : 0,
            completion_time: (0, helpers_1.isSet)(object.completion_time) ? (0, helpers_1.fromJsonTimestamp)(object.completion_time) : undefined,
            requeued: (0, helpers_1.isSet)(object.requeued) ? Boolean(object.requeued) : false,
            acknowledged: (0, helpers_1.isSet)(object.acknowledged) ? Boolean(object.acknowledged) : false,
            epoch_number: (0, helpers_1.isSet)(object.epoch_number) ? helpers_1.Long.fromValue(object.epoch_number) : helpers_1.Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
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
        message.burn_amount !== undefined && (obj.burn_amount = message.burn_amount ? coin_1.Coin.toJSON(message.burn_amount) : undefined);
        message.txhash !== undefined && (obj.txhash = message.txhash);
        message.status !== undefined && (obj.status = Math.round(message.status));
        message.completion_time !== undefined && (obj.completion_time = message.completion_time.toISOString());
        message.requeued !== undefined && (obj.requeued = message.requeued);
        message.acknowledged !== undefined && (obj.acknowledged = message.acknowledged);
        message.epoch_number !== undefined && (obj.epoch_number = (message.epoch_number || helpers_1.Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseWithdrawalRecord();
        message.chain_id = object.chain_id ?? "";
        message.delegator = object.delegator ?? "";
        message.distribution = object.distribution?.map(e => exports.Distribution.fromPartial(e)) || [];
        message.recipient = object.recipient ?? "";
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.burn_amount = object.burn_amount !== undefined && object.burn_amount !== null ? coin_1.Coin.fromPartial(object.burn_amount) : undefined;
        message.txhash = object.txhash ?? "";
        message.status = object.status ?? 0;
        message.completion_time = object.completion_time ?? undefined;
        message.requeued = object.requeued ?? false;
        message.acknowledged = object.acknowledged ?? false;
        message.epoch_number = object.epoch_number !== undefined && object.epoch_number !== null ? helpers_1.Long.fromValue(object.epoch_number) : helpers_1.Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            chain_id: object.chain_id,
            delegator: object.delegator,
            distribution: Array.isArray(object?.distribution) ? object.distribution.map((e) => exports.Distribution.fromAmino(e)) : [],
            recipient: object.recipient,
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromAmino(e)) : [],
            burn_amount: object?.burn_amount ? coin_1.Coin.fromAmino(object.burn_amount) : undefined,
            txhash: object.txhash,
            status: object.status,
            completion_time: object.completion_time,
            requeued: object.requeued,
            acknowledged: object.acknowledged,
            epoch_number: helpers_1.Long.fromString(object.epoch_number)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chain_id;
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
        obj.burn_amount = message.burn_amount ? coin_1.Coin.toAmino(message.burn_amount) : undefined;
        obj.txhash = message.txhash;
        obj.status = message.status;
        obj.completion_time = message.completion_time;
        obj.requeued = message.requeued;
        obj.acknowledged = message.acknowledged;
        obj.epoch_number = message.epoch_number ? message.epoch_number.toString() : undefined;
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
        chain_id: "",
        epoch_number: helpers_1.Long.ZERO,
        validator: "",
        related_txhash: []
    };
}
exports.UnbondingRecord = {
    typeUrl: "/quicksilver.interchainstaking.v1.UnbondingRecord",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain_id !== "") {
            writer.uint32(10).string(message.chain_id);
        }
        if (!message.epoch_number.isZero()) {
            writer.uint32(16).int64(message.epoch_number);
        }
        if (message.validator !== "") {
            writer.uint32(26).string(message.validator);
        }
        for (const v of message.related_txhash) {
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
                    message.chain_id = reader.string();
                    break;
                case 2:
                    message.epoch_number = reader.int64();
                    break;
                case 3:
                    message.validator = reader.string();
                    break;
                case 4:
                    message.related_txhash.push(reader.string());
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
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : "",
            epoch_number: (0, helpers_1.isSet)(object.epoch_number) ? helpers_1.Long.fromValue(object.epoch_number) : helpers_1.Long.ZERO,
            validator: (0, helpers_1.isSet)(object.validator) ? String(object.validator) : "",
            related_txhash: Array.isArray(object?.related_txhash) ? object.related_txhash.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.epoch_number !== undefined && (obj.epoch_number = (message.epoch_number || helpers_1.Long.ZERO).toString());
        message.validator !== undefined && (obj.validator = message.validator);
        if (message.related_txhash) {
            obj.related_txhash = message.related_txhash.map(e => e);
        }
        else {
            obj.related_txhash = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUnbondingRecord();
        message.chain_id = object.chain_id ?? "";
        message.epoch_number = object.epoch_number !== undefined && object.epoch_number !== null ? helpers_1.Long.fromValue(object.epoch_number) : helpers_1.Long.ZERO;
        message.validator = object.validator ?? "";
        message.related_txhash = object.related_txhash?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            chain_id: object.chain_id,
            epoch_number: helpers_1.Long.fromString(object.epoch_number),
            validator: object.validator,
            related_txhash: Array.isArray(object?.related_txhash) ? object.related_txhash.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chain_id;
        obj.epoch_number = message.epoch_number ? message.epoch_number.toString() : undefined;
        obj.validator = message.validator;
        if (message.related_txhash) {
            obj.related_txhash = message.related_txhash.map(e => e);
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
        chain_id: "",
        epoch_number: helpers_1.Long.ZERO,
        source: "",
        destination: "",
        amount: helpers_1.Long.ZERO,
        completion_time: new Date()
    };
}
exports.RedelegationRecord = {
    typeUrl: "/quicksilver.interchainstaking.v1.RedelegationRecord",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain_id !== "") {
            writer.uint32(10).string(message.chain_id);
        }
        if (!message.epoch_number.isZero()) {
            writer.uint32(16).int64(message.epoch_number);
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
        if (message.completion_time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.completion_time), writer.uint32(50).fork()).ldelim();
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
                    message.chain_id = reader.string();
                    break;
                case 2:
                    message.epoch_number = reader.int64();
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
                    message.completion_time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : "",
            epoch_number: (0, helpers_1.isSet)(object.epoch_number) ? helpers_1.Long.fromValue(object.epoch_number) : helpers_1.Long.ZERO,
            source: (0, helpers_1.isSet)(object.source) ? String(object.source) : "",
            destination: (0, helpers_1.isSet)(object.destination) ? String(object.destination) : "",
            amount: (0, helpers_1.isSet)(object.amount) ? helpers_1.Long.fromValue(object.amount) : helpers_1.Long.ZERO,
            completion_time: (0, helpers_1.isSet)(object.completion_time) ? (0, helpers_1.fromJsonTimestamp)(object.completion_time) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.epoch_number !== undefined && (obj.epoch_number = (message.epoch_number || helpers_1.Long.ZERO).toString());
        message.source !== undefined && (obj.source = message.source);
        message.destination !== undefined && (obj.destination = message.destination);
        message.amount !== undefined && (obj.amount = (message.amount || helpers_1.Long.ZERO).toString());
        message.completion_time !== undefined && (obj.completion_time = message.completion_time.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRedelegationRecord();
        message.chain_id = object.chain_id ?? "";
        message.epoch_number = object.epoch_number !== undefined && object.epoch_number !== null ? helpers_1.Long.fromValue(object.epoch_number) : helpers_1.Long.ZERO;
        message.source = object.source ?? "";
        message.destination = object.destination ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? helpers_1.Long.fromValue(object.amount) : helpers_1.Long.ZERO;
        message.completion_time = object.completion_time ?? undefined;
        return message;
    },
    fromAmino(object) {
        return {
            chain_id: object.chain_id,
            epoch_number: helpers_1.Long.fromString(object.epoch_number),
            source: object.source,
            destination: object.destination,
            amount: helpers_1.Long.fromString(object.amount),
            completion_time: object.completion_time
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chain_id;
        obj.epoch_number = message.epoch_number ? message.epoch_number.toString() : undefined;
        obj.source = message.source;
        obj.destination = message.destination;
        obj.amount = message.amount ? message.amount.toString() : undefined;
        obj.completion_time = message.completion_time;
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
        valoper_address: "",
        commission_rate: "",
        delegator_shares: "",
        voting_power: "",
        score: "",
        status: "",
        jailed: false,
        tombstoned: false,
        jailed_since: new Date(),
        validator_bond_shares: "",
        liquid_shares: ""
    };
}
exports.Validator = {
    typeUrl: "/quicksilver.interchainstaking.v1.Validator",
    encode(message, writer = _m0.Writer.create()) {
        if (message.valoper_address !== "") {
            writer.uint32(10).string(message.valoper_address);
        }
        if (message.commission_rate !== "") {
            writer.uint32(18).string(message.commission_rate);
        }
        if (message.delegator_shares !== "") {
            writer.uint32(26).string(message.delegator_shares);
        }
        if (message.voting_power !== "") {
            writer.uint32(34).string(message.voting_power);
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
        if (message.jailed_since !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.jailed_since), writer.uint32(74).fork()).ldelim();
        }
        if (message.validator_bond_shares !== "") {
            writer.uint32(82).string(message.validator_bond_shares);
        }
        if (message.liquid_shares !== "") {
            writer.uint32(90).string(message.liquid_shares);
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
                    message.valoper_address = reader.string();
                    break;
                case 2:
                    message.commission_rate = reader.string();
                    break;
                case 3:
                    message.delegator_shares = reader.string();
                    break;
                case 4:
                    message.voting_power = reader.string();
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
                    message.jailed_since = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.validator_bond_shares = reader.string();
                    break;
                case 11:
                    message.liquid_shares = reader.string();
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
            valoper_address: (0, helpers_1.isSet)(object.valoper_address) ? String(object.valoper_address) : "",
            commission_rate: (0, helpers_1.isSet)(object.commission_rate) ? String(object.commission_rate) : "",
            delegator_shares: (0, helpers_1.isSet)(object.delegator_shares) ? String(object.delegator_shares) : "",
            voting_power: (0, helpers_1.isSet)(object.voting_power) ? String(object.voting_power) : "",
            score: (0, helpers_1.isSet)(object.score) ? String(object.score) : "",
            status: (0, helpers_1.isSet)(object.status) ? String(object.status) : "",
            jailed: (0, helpers_1.isSet)(object.jailed) ? Boolean(object.jailed) : false,
            tombstoned: (0, helpers_1.isSet)(object.tombstoned) ? Boolean(object.tombstoned) : false,
            jailed_since: (0, helpers_1.isSet)(object.jailed_since) ? (0, helpers_1.fromJsonTimestamp)(object.jailed_since) : undefined,
            validator_bond_shares: (0, helpers_1.isSet)(object.validator_bond_shares) ? String(object.validator_bond_shares) : "",
            liquid_shares: (0, helpers_1.isSet)(object.liquid_shares) ? String(object.liquid_shares) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.valoper_address !== undefined && (obj.valoper_address = message.valoper_address);
        message.commission_rate !== undefined && (obj.commission_rate = message.commission_rate);
        message.delegator_shares !== undefined && (obj.delegator_shares = message.delegator_shares);
        message.voting_power !== undefined && (obj.voting_power = message.voting_power);
        message.score !== undefined && (obj.score = message.score);
        message.status !== undefined && (obj.status = message.status);
        message.jailed !== undefined && (obj.jailed = message.jailed);
        message.tombstoned !== undefined && (obj.tombstoned = message.tombstoned);
        message.jailed_since !== undefined && (obj.jailed_since = message.jailed_since.toISOString());
        message.validator_bond_shares !== undefined && (obj.validator_bond_shares = message.validator_bond_shares);
        message.liquid_shares !== undefined && (obj.liquid_shares = message.liquid_shares);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidator();
        message.valoper_address = object.valoper_address ?? "";
        message.commission_rate = object.commission_rate ?? "";
        message.delegator_shares = object.delegator_shares ?? "";
        message.voting_power = object.voting_power ?? "";
        message.score = object.score ?? "";
        message.status = object.status ?? "";
        message.jailed = object.jailed ?? false;
        message.tombstoned = object.tombstoned ?? false;
        message.jailed_since = object.jailed_since ?? undefined;
        message.validator_bond_shares = object.validator_bond_shares ?? "";
        message.liquid_shares = object.liquid_shares ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            valoper_address: object.valoper_address,
            commission_rate: object.commission_rate,
            delegator_shares: object.delegator_shares,
            voting_power: object.voting_power,
            score: object.score,
            status: object.status,
            jailed: object.jailed,
            tombstoned: object.tombstoned,
            jailed_since: object.jailed_since,
            validator_bond_shares: object.validator_bond_shares,
            liquid_shares: object.liquid_shares
        };
    },
    toAmino(message) {
        const obj = {};
        obj.valoper_address = message.valoper_address;
        obj.commission_rate = message.commission_rate;
        obj.delegator_shares = message.delegator_shares;
        obj.voting_power = message.voting_power;
        obj.score = message.score;
        obj.status = message.status;
        obj.jailed = message.jailed;
        obj.tombstoned = message.tombstoned;
        obj.jailed_since = message.jailed_since;
        obj.validator_bond_shares = message.validator_bond_shares;
        obj.liquid_shares = message.liquid_shares;
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
        valoper_address: "",
        weight: ""
    };
}
exports.ValidatorIntent = {
    typeUrl: "/quicksilver.interchainstaking.v1.ValidatorIntent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.valoper_address !== "") {
            writer.uint32(10).string(message.valoper_address);
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
                    message.valoper_address = reader.string();
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
            valoper_address: (0, helpers_1.isSet)(object.valoper_address) ? String(object.valoper_address) : "",
            weight: (0, helpers_1.isSet)(object.weight) ? String(object.weight) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.valoper_address !== undefined && (obj.valoper_address = message.valoper_address);
        message.weight !== undefined && (obj.weight = message.weight);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorIntent();
        message.valoper_address = object.valoper_address ?? "";
        message.weight = object.weight ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            valoper_address: object.valoper_address,
            weight: object.weight
        };
    },
    toAmino(message) {
        const obj = {};
        obj.valoper_address = message.valoper_address;
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
        delegation_address: "",
        validator_address: "",
        amount: coin_1.Coin.fromPartial({}),
        height: helpers_1.Long.ZERO,
        redelegation_end: helpers_1.Long.ZERO
    };
}
exports.Delegation = {
    typeUrl: "/quicksilver.interchainstaking.v1.Delegation",
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegation_address !== "") {
            writer.uint32(10).string(message.delegation_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        if (!message.height.isZero()) {
            writer.uint32(32).int64(message.height);
        }
        if (!message.redelegation_end.isZero()) {
            writer.uint32(40).int64(message.redelegation_end);
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
                    message.delegation_address = reader.string();
                    break;
                case 2:
                    message.validator_address = reader.string();
                    break;
                case 3:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.height = reader.int64();
                    break;
                case 5:
                    message.redelegation_end = reader.int64();
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
            delegation_address: (0, helpers_1.isSet)(object.delegation_address) ? String(object.delegation_address) : "",
            validator_address: (0, helpers_1.isSet)(object.validator_address) ? String(object.validator_address) : "",
            amount: (0, helpers_1.isSet)(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
            height: (0, helpers_1.isSet)(object.height) ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO,
            redelegation_end: (0, helpers_1.isSet)(object.redelegation_end) ? helpers_1.Long.fromValue(object.redelegation_end) : helpers_1.Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegation_address !== undefined && (obj.delegation_address = message.delegation_address);
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        message.height !== undefined && (obj.height = (message.height || helpers_1.Long.ZERO).toString());
        message.redelegation_end !== undefined && (obj.redelegation_end = (message.redelegation_end || helpers_1.Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelegation();
        message.delegation_address = object.delegation_address ?? "";
        message.validator_address = object.validator_address ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        message.height = object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO;
        message.redelegation_end = object.redelegation_end !== undefined && object.redelegation_end !== null ? helpers_1.Long.fromValue(object.redelegation_end) : helpers_1.Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            delegation_address: object.delegation_address,
            validator_address: object.validator_address,
            amount: object?.amount ? coin_1.Coin.fromAmino(object.amount) : undefined,
            height: helpers_1.Long.fromString(object.height),
            redelegation_end: helpers_1.Long.fromString(object.redelegation_end)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegation_address = message.delegation_address;
        obj.validator_address = message.validator_address;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.redelegation_end = message.redelegation_end ? message.redelegation_end.toString() : undefined;
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
        connection_id: "",
        port_id: ""
    };
}
exports.PortConnectionTuple = {
    typeUrl: "/quicksilver.interchainstaking.v1.PortConnectionTuple",
    encode(message, writer = _m0.Writer.create()) {
        if (message.connection_id !== "") {
            writer.uint32(10).string(message.connection_id);
        }
        if (message.port_id !== "") {
            writer.uint32(18).string(message.port_id);
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
                    message.connection_id = reader.string();
                    break;
                case 2:
                    message.port_id = reader.string();
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
            connection_id: (0, helpers_1.isSet)(object.connection_id) ? String(object.connection_id) : "",
            port_id: (0, helpers_1.isSet)(object.port_id) ? String(object.port_id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection_id !== undefined && (obj.connection_id = message.connection_id);
        message.port_id !== undefined && (obj.port_id = message.port_id);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePortConnectionTuple();
        message.connection_id = object.connection_id ?? "";
        message.port_id = object.port_id ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            connection_id: object.connection_id,
            port_id: object.port_id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.connection_id = message.connection_id;
        obj.port_id = message.port_id;
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
        chain_id: "",
        sender: "",
        txhash: "",
        amount: [],
        first_seen: undefined,
        completed: undefined
    };
}
exports.Receipt = {
    typeUrl: "/quicksilver.interchainstaking.v1.Receipt",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain_id !== "") {
            writer.uint32(10).string(message.chain_id);
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
        if (message.first_seen !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.first_seen), writer.uint32(42).fork()).ldelim();
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
                    message.chain_id = reader.string();
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
                    message.first_seen = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : "",
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            txhash: (0, helpers_1.isSet)(object.txhash) ? String(object.txhash) : "",
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : [],
            first_seen: (0, helpers_1.isSet)(object.first_seen) ? (0, helpers_1.fromJsonTimestamp)(object.first_seen) : undefined,
            completed: (0, helpers_1.isSet)(object.completed) ? (0, helpers_1.fromJsonTimestamp)(object.completed) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.sender !== undefined && (obj.sender = message.sender);
        message.txhash !== undefined && (obj.txhash = message.txhash);
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        message.first_seen !== undefined && (obj.first_seen = message.first_seen.toISOString());
        message.completed !== undefined && (obj.completed = message.completed.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseReceipt();
        message.chain_id = object.chain_id ?? "";
        message.sender = object.sender ?? "";
        message.txhash = object.txhash ?? "";
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.first_seen = object.first_seen ?? undefined;
        message.completed = object.completed ?? undefined;
        return message;
    },
    fromAmino(object) {
        return {
            chain_id: object.chain_id,
            sender: object.sender,
            txhash: object.txhash,
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromAmino(e)) : [],
            first_seen: object?.first_seen,
            completed: object?.completed
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chain_id;
        obj.sender = message.sender;
        obj.txhash = message.txhash;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        obj.first_seen = message.first_seen;
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