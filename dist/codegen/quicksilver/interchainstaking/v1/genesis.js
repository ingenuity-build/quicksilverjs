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
exports.GenesisState = exports.DelegatorIntentsForZone = exports.DelegationsForZone = exports.Params = exports.Params_v1 = void 0;
const interchainstaking_1 = require("./interchainstaking");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseParams_v1() {
    return {
        depositInterval: helpers_1.Long.UZERO,
        validatorsetInterval: helpers_1.Long.UZERO,
        commissionRate: ""
    };
}
exports.Params_v1 = {
    typeUrl: "/quicksilver.interchainstaking.v1.Params_v1",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.depositInterval.isZero()) {
            writer.uint32(8).uint64(message.depositInterval);
        }
        if (!message.validatorsetInterval.isZero()) {
            writer.uint32(16).uint64(message.validatorsetInterval);
        }
        if (message.commissionRate !== "") {
            writer.uint32(26).string(message.commissionRate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams_v1();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositInterval = reader.uint64();
                    break;
                case 2:
                    message.validatorsetInterval = reader.uint64();
                    break;
                case 3:
                    message.commissionRate = reader.string();
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
            depositInterval: (0, helpers_1.isSet)(object.depositInterval) ? helpers_1.Long.fromValue(object.depositInterval) : helpers_1.Long.UZERO,
            validatorsetInterval: (0, helpers_1.isSet)(object.validatorsetInterval) ? helpers_1.Long.fromValue(object.validatorsetInterval) : helpers_1.Long.UZERO,
            commissionRate: (0, helpers_1.isSet)(object.commissionRate) ? String(object.commissionRate) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.depositInterval !== undefined && (obj.depositInterval = (message.depositInterval || helpers_1.Long.UZERO).toString());
        message.validatorsetInterval !== undefined && (obj.validatorsetInterval = (message.validatorsetInterval || helpers_1.Long.UZERO).toString());
        message.commissionRate !== undefined && (obj.commissionRate = message.commissionRate);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams_v1();
        message.depositInterval = object.depositInterval !== undefined && object.depositInterval !== null ? helpers_1.Long.fromValue(object.depositInterval) : helpers_1.Long.UZERO;
        message.validatorsetInterval = object.validatorsetInterval !== undefined && object.validatorsetInterval !== null ? helpers_1.Long.fromValue(object.validatorsetInterval) : helpers_1.Long.UZERO;
        message.commissionRate = object.commissionRate ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            depositInterval: helpers_1.Long.fromString(object.deposit_interval),
            validatorsetInterval: helpers_1.Long.fromString(object.validatorset_interval),
            commissionRate: object.commission_rate
        };
    },
    toAmino(message) {
        const obj = {};
        obj.deposit_interval = message.depositInterval ? message.depositInterval.toString() : undefined;
        obj.validatorset_interval = message.validatorsetInterval ? message.validatorsetInterval.toString() : undefined;
        obj.commission_rate = message.commissionRate;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params_v1.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Params_v1.decode(message.value);
    },
    toProto(message) {
        return exports.Params_v1.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.Params_v1",
            value: exports.Params_v1.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        depositInterval: helpers_1.Long.UZERO,
        validatorsetInterval: helpers_1.Long.UZERO,
        commissionRate: "",
        unbondingEnabled: false
    };
}
exports.Params = {
    typeUrl: "/quicksilver.interchainstaking.v1.Params",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.depositInterval.isZero()) {
            writer.uint32(8).uint64(message.depositInterval);
        }
        if (!message.validatorsetInterval.isZero()) {
            writer.uint32(16).uint64(message.validatorsetInterval);
        }
        if (message.commissionRate !== "") {
            writer.uint32(26).string(message.commissionRate);
        }
        if (message.unbondingEnabled === true) {
            writer.uint32(32).bool(message.unbondingEnabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositInterval = reader.uint64();
                    break;
                case 2:
                    message.validatorsetInterval = reader.uint64();
                    break;
                case 3:
                    message.commissionRate = reader.string();
                    break;
                case 4:
                    message.unbondingEnabled = reader.bool();
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
            depositInterval: (0, helpers_1.isSet)(object.depositInterval) ? helpers_1.Long.fromValue(object.depositInterval) : helpers_1.Long.UZERO,
            validatorsetInterval: (0, helpers_1.isSet)(object.validatorsetInterval) ? helpers_1.Long.fromValue(object.validatorsetInterval) : helpers_1.Long.UZERO,
            commissionRate: (0, helpers_1.isSet)(object.commissionRate) ? String(object.commissionRate) : "",
            unbondingEnabled: (0, helpers_1.isSet)(object.unbondingEnabled) ? Boolean(object.unbondingEnabled) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.depositInterval !== undefined && (obj.depositInterval = (message.depositInterval || helpers_1.Long.UZERO).toString());
        message.validatorsetInterval !== undefined && (obj.validatorsetInterval = (message.validatorsetInterval || helpers_1.Long.UZERO).toString());
        message.commissionRate !== undefined && (obj.commissionRate = message.commissionRate);
        message.unbondingEnabled !== undefined && (obj.unbondingEnabled = message.unbondingEnabled);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.depositInterval = object.depositInterval !== undefined && object.depositInterval !== null ? helpers_1.Long.fromValue(object.depositInterval) : helpers_1.Long.UZERO;
        message.validatorsetInterval = object.validatorsetInterval !== undefined && object.validatorsetInterval !== null ? helpers_1.Long.fromValue(object.validatorsetInterval) : helpers_1.Long.UZERO;
        message.commissionRate = object.commissionRate ?? "";
        message.unbondingEnabled = object.unbondingEnabled ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            depositInterval: helpers_1.Long.fromString(object.deposit_interval),
            validatorsetInterval: helpers_1.Long.fromString(object.validatorset_interval),
            commissionRate: object.commission_rate,
            unbondingEnabled: object.unbonding_enabled
        };
    },
    toAmino(message) {
        const obj = {};
        obj.deposit_interval = message.depositInterval ? message.depositInterval.toString() : undefined;
        obj.validatorset_interval = message.validatorsetInterval ? message.validatorsetInterval.toString() : undefined;
        obj.commission_rate = message.commissionRate;
        obj.unbonding_enabled = message.unbondingEnabled;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
function createBaseDelegationsForZone() {
    return {
        chainId: "",
        delegations: []
    };
}
exports.DelegationsForZone = {
    typeUrl: "/quicksilver.interchainstaking.v1.DelegationsForZone",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        for (const v of message.delegations) {
            interchainstaking_1.Delegation.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegationsForZone();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.delegations.push(interchainstaking_1.Delegation.decode(reader, reader.uint32()));
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
            delegations: Array.isArray(object?.delegations) ? object.delegations.map((e) => interchainstaking_1.Delegation.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        if (message.delegations) {
            obj.delegations = message.delegations.map(e => e ? interchainstaking_1.Delegation.toJSON(e) : undefined);
        }
        else {
            obj.delegations = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelegationsForZone();
        message.chainId = object.chainId ?? "";
        message.delegations = object.delegations?.map(e => interchainstaking_1.Delegation.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            chainId: object.chain_id,
            delegations: Array.isArray(object?.delegations) ? object.delegations.map((e) => interchainstaking_1.Delegation.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        if (message.delegations) {
            obj.delegations = message.delegations.map(e => e ? interchainstaking_1.Delegation.toAmino(e) : undefined);
        }
        else {
            obj.delegations = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DelegationsForZone.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.DelegationsForZone.decode(message.value);
    },
    toProto(message) {
        return exports.DelegationsForZone.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.DelegationsForZone",
            value: exports.DelegationsForZone.encode(message).finish()
        };
    }
};
function createBaseDelegatorIntentsForZone() {
    return {
        chainId: "",
        delegationIntent: [],
        snapshot: false
    };
}
exports.DelegatorIntentsForZone = {
    typeUrl: "/quicksilver.interchainstaking.v1.DelegatorIntentsForZone",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        for (const v of message.delegationIntent) {
            interchainstaking_1.DelegatorIntent.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.snapshot === true) {
            writer.uint32(24).bool(message.snapshot);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegatorIntentsForZone();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.delegationIntent.push(interchainstaking_1.DelegatorIntent.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.snapshot = reader.bool();
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
            delegationIntent: Array.isArray(object?.delegationIntent) ? object.delegationIntent.map((e) => interchainstaking_1.DelegatorIntent.fromJSON(e)) : [],
            snapshot: (0, helpers_1.isSet)(object.snapshot) ? Boolean(object.snapshot) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        if (message.delegationIntent) {
            obj.delegationIntent = message.delegationIntent.map(e => e ? interchainstaking_1.DelegatorIntent.toJSON(e) : undefined);
        }
        else {
            obj.delegationIntent = [];
        }
        message.snapshot !== undefined && (obj.snapshot = message.snapshot);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelegatorIntentsForZone();
        message.chainId = object.chainId ?? "";
        message.delegationIntent = object.delegationIntent?.map(e => interchainstaking_1.DelegatorIntent.fromPartial(e)) || [];
        message.snapshot = object.snapshot ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            chainId: object.chain_id,
            delegationIntent: Array.isArray(object?.delegation_intent) ? object.delegation_intent.map((e) => interchainstaking_1.DelegatorIntent.fromAmino(e)) : [],
            snapshot: object.snapshot
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        if (message.delegationIntent) {
            obj.delegation_intent = message.delegationIntent.map(e => e ? interchainstaking_1.DelegatorIntent.toAmino(e) : undefined);
        }
        else {
            obj.delegation_intent = [];
        }
        obj.snapshot = message.snapshot;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DelegatorIntentsForZone.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.DelegatorIntentsForZone.decode(message.value);
    },
    toProto(message) {
        return exports.DelegatorIntentsForZone.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.DelegatorIntentsForZone",
            value: exports.DelegatorIntentsForZone.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        params: exports.Params.fromPartial({}),
        zones: [],
        receipts: [],
        delegations: [],
        performanceDelegations: [],
        delegatorIntents: [],
        portConnections: [],
        withdrawalRecords: []
    };
}
exports.GenesisState = {
    typeUrl: "/quicksilver.interchainstaking.v1.GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            exports.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.zones) {
            interchainstaking_1.Zone.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.receipts) {
            interchainstaking_1.Receipt.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.delegations) {
            exports.DelegationsForZone.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.performanceDelegations) {
            exports.DelegationsForZone.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.delegatorIntents) {
            exports.DelegatorIntentsForZone.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.portConnections) {
            interchainstaking_1.PortConnectionTuple.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.withdrawalRecords) {
            interchainstaking_1.WithdrawalRecord.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = exports.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.zones.push(interchainstaking_1.Zone.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.receipts.push(interchainstaking_1.Receipt.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.delegations.push(exports.DelegationsForZone.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.performanceDelegations.push(exports.DelegationsForZone.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.delegatorIntents.push(exports.DelegatorIntentsForZone.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.portConnections.push(interchainstaking_1.PortConnectionTuple.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.withdrawalRecords.push(interchainstaking_1.WithdrawalRecord.decode(reader, reader.uint32()));
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
            params: (0, helpers_1.isSet)(object.params) ? exports.Params.fromJSON(object.params) : undefined,
            zones: Array.isArray(object?.zones) ? object.zones.map((e) => interchainstaking_1.Zone.fromJSON(e)) : [],
            receipts: Array.isArray(object?.receipts) ? object.receipts.map((e) => interchainstaking_1.Receipt.fromJSON(e)) : [],
            delegations: Array.isArray(object?.delegations) ? object.delegations.map((e) => exports.DelegationsForZone.fromJSON(e)) : [],
            performanceDelegations: Array.isArray(object?.performanceDelegations) ? object.performanceDelegations.map((e) => exports.DelegationsForZone.fromJSON(e)) : [],
            delegatorIntents: Array.isArray(object?.delegatorIntents) ? object.delegatorIntents.map((e) => exports.DelegatorIntentsForZone.fromJSON(e)) : [],
            portConnections: Array.isArray(object?.portConnections) ? object.portConnections.map((e) => interchainstaking_1.PortConnectionTuple.fromJSON(e)) : [],
            withdrawalRecords: Array.isArray(object?.withdrawalRecords) ? object.withdrawalRecords.map((e) => interchainstaking_1.WithdrawalRecord.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? exports.Params.toJSON(message.params) : undefined);
        if (message.zones) {
            obj.zones = message.zones.map(e => e ? interchainstaking_1.Zone.toJSON(e) : undefined);
        }
        else {
            obj.zones = [];
        }
        if (message.receipts) {
            obj.receipts = message.receipts.map(e => e ? interchainstaking_1.Receipt.toJSON(e) : undefined);
        }
        else {
            obj.receipts = [];
        }
        if (message.delegations) {
            obj.delegations = message.delegations.map(e => e ? exports.DelegationsForZone.toJSON(e) : undefined);
        }
        else {
            obj.delegations = [];
        }
        if (message.performanceDelegations) {
            obj.performanceDelegations = message.performanceDelegations.map(e => e ? exports.DelegationsForZone.toJSON(e) : undefined);
        }
        else {
            obj.performanceDelegations = [];
        }
        if (message.delegatorIntents) {
            obj.delegatorIntents = message.delegatorIntents.map(e => e ? exports.DelegatorIntentsForZone.toJSON(e) : undefined);
        }
        else {
            obj.delegatorIntents = [];
        }
        if (message.portConnections) {
            obj.portConnections = message.portConnections.map(e => e ? interchainstaking_1.PortConnectionTuple.toJSON(e) : undefined);
        }
        else {
            obj.portConnections = [];
        }
        if (message.withdrawalRecords) {
            obj.withdrawalRecords = message.withdrawalRecords.map(e => e ? interchainstaking_1.WithdrawalRecord.toJSON(e) : undefined);
        }
        else {
            obj.withdrawalRecords = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? exports.Params.fromPartial(object.params) : undefined;
        message.zones = object.zones?.map(e => interchainstaking_1.Zone.fromPartial(e)) || [];
        message.receipts = object.receipts?.map(e => interchainstaking_1.Receipt.fromPartial(e)) || [];
        message.delegations = object.delegations?.map(e => exports.DelegationsForZone.fromPartial(e)) || [];
        message.performanceDelegations = object.performanceDelegations?.map(e => exports.DelegationsForZone.fromPartial(e)) || [];
        message.delegatorIntents = object.delegatorIntents?.map(e => exports.DelegatorIntentsForZone.fromPartial(e)) || [];
        message.portConnections = object.portConnections?.map(e => interchainstaking_1.PortConnectionTuple.fromPartial(e)) || [];
        message.withdrawalRecords = object.withdrawalRecords?.map(e => interchainstaking_1.WithdrawalRecord.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? exports.Params.fromAmino(object.params) : undefined,
            zones: Array.isArray(object?.zones) ? object.zones.map((e) => interchainstaking_1.Zone.fromAmino(e)) : [],
            receipts: Array.isArray(object?.receipts) ? object.receipts.map((e) => interchainstaking_1.Receipt.fromAmino(e)) : [],
            delegations: Array.isArray(object?.delegations) ? object.delegations.map((e) => exports.DelegationsForZone.fromAmino(e)) : [],
            performanceDelegations: Array.isArray(object?.performance_delegations) ? object.performance_delegations.map((e) => exports.DelegationsForZone.fromAmino(e)) : [],
            delegatorIntents: Array.isArray(object?.delegator_intents) ? object.delegator_intents.map((e) => exports.DelegatorIntentsForZone.fromAmino(e)) : [],
            portConnections: Array.isArray(object?.port_connections) ? object.port_connections.map((e) => interchainstaking_1.PortConnectionTuple.fromAmino(e)) : [],
            withdrawalRecords: Array.isArray(object?.withdrawal_records) ? object.withdrawal_records.map((e) => interchainstaking_1.WithdrawalRecord.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? exports.Params.toAmino(message.params) : undefined;
        if (message.zones) {
            obj.zones = message.zones.map(e => e ? interchainstaking_1.Zone.toAmino(e) : undefined);
        }
        else {
            obj.zones = [];
        }
        if (message.receipts) {
            obj.receipts = message.receipts.map(e => e ? interchainstaking_1.Receipt.toAmino(e) : undefined);
        }
        else {
            obj.receipts = [];
        }
        if (message.delegations) {
            obj.delegations = message.delegations.map(e => e ? exports.DelegationsForZone.toAmino(e) : undefined);
        }
        else {
            obj.delegations = [];
        }
        if (message.performanceDelegations) {
            obj.performance_delegations = message.performanceDelegations.map(e => e ? exports.DelegationsForZone.toAmino(e) : undefined);
        }
        else {
            obj.performance_delegations = [];
        }
        if (message.delegatorIntents) {
            obj.delegator_intents = message.delegatorIntents.map(e => e ? exports.DelegatorIntentsForZone.toAmino(e) : undefined);
        }
        else {
            obj.delegator_intents = [];
        }
        if (message.portConnections) {
            obj.port_connections = message.portConnections.map(e => e ? interchainstaking_1.PortConnectionTuple.toAmino(e) : undefined);
        }
        else {
            obj.port_connections = [];
        }
        if (message.withdrawalRecords) {
            obj.withdrawal_records = message.withdrawalRecords.map(e => e ? interchainstaking_1.WithdrawalRecord.toAmino(e) : undefined);
        }
        else {
            obj.withdrawal_records = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map