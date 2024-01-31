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
        deposit_interval: helpers_1.Long.UZERO,
        validatorset_interval: helpers_1.Long.UZERO,
        commission_rate: ""
    };
}
exports.Params_v1 = {
    typeUrl: "/quicksilver.interchainstaking.v1.Params_v1",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.deposit_interval.isZero()) {
            writer.uint32(8).uint64(message.deposit_interval);
        }
        if (!message.validatorset_interval.isZero()) {
            writer.uint32(16).uint64(message.validatorset_interval);
        }
        if (message.commission_rate !== "") {
            writer.uint32(26).string(message.commission_rate);
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
                    message.deposit_interval = reader.uint64();
                    break;
                case 2:
                    message.validatorset_interval = reader.uint64();
                    break;
                case 3:
                    message.commission_rate = reader.string();
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
            deposit_interval: (0, helpers_1.isSet)(object.deposit_interval) ? helpers_1.Long.fromValue(object.deposit_interval) : helpers_1.Long.UZERO,
            validatorset_interval: (0, helpers_1.isSet)(object.validatorset_interval) ? helpers_1.Long.fromValue(object.validatorset_interval) : helpers_1.Long.UZERO,
            commission_rate: (0, helpers_1.isSet)(object.commission_rate) ? String(object.commission_rate) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.deposit_interval !== undefined && (obj.deposit_interval = (message.deposit_interval || helpers_1.Long.UZERO).toString());
        message.validatorset_interval !== undefined && (obj.validatorset_interval = (message.validatorset_interval || helpers_1.Long.UZERO).toString());
        message.commission_rate !== undefined && (obj.commission_rate = message.commission_rate);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams_v1();
        message.deposit_interval = object.deposit_interval !== undefined && object.deposit_interval !== null ? helpers_1.Long.fromValue(object.deposit_interval) : helpers_1.Long.UZERO;
        message.validatorset_interval = object.validatorset_interval !== undefined && object.validatorset_interval !== null ? helpers_1.Long.fromValue(object.validatorset_interval) : helpers_1.Long.UZERO;
        message.commission_rate = object.commission_rate ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            deposit_interval: helpers_1.Long.fromString(object.deposit_interval),
            validatorset_interval: helpers_1.Long.fromString(object.validatorset_interval),
            commission_rate: object.commission_rate
        };
    },
    toAmino(message) {
        const obj = {};
        obj.deposit_interval = message.deposit_interval ? message.deposit_interval.toString() : undefined;
        obj.validatorset_interval = message.validatorset_interval ? message.validatorset_interval.toString() : undefined;
        obj.commission_rate = message.commission_rate;
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
        deposit_interval: helpers_1.Long.UZERO,
        validatorset_interval: helpers_1.Long.UZERO,
        commission_rate: "",
        unbonding_enabled: false
    };
}
exports.Params = {
    typeUrl: "/quicksilver.interchainstaking.v1.Params",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.deposit_interval.isZero()) {
            writer.uint32(8).uint64(message.deposit_interval);
        }
        if (!message.validatorset_interval.isZero()) {
            writer.uint32(16).uint64(message.validatorset_interval);
        }
        if (message.commission_rate !== "") {
            writer.uint32(26).string(message.commission_rate);
        }
        if (message.unbonding_enabled === true) {
            writer.uint32(32).bool(message.unbonding_enabled);
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
                    message.deposit_interval = reader.uint64();
                    break;
                case 2:
                    message.validatorset_interval = reader.uint64();
                    break;
                case 3:
                    message.commission_rate = reader.string();
                    break;
                case 4:
                    message.unbonding_enabled = reader.bool();
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
            deposit_interval: (0, helpers_1.isSet)(object.deposit_interval) ? helpers_1.Long.fromValue(object.deposit_interval) : helpers_1.Long.UZERO,
            validatorset_interval: (0, helpers_1.isSet)(object.validatorset_interval) ? helpers_1.Long.fromValue(object.validatorset_interval) : helpers_1.Long.UZERO,
            commission_rate: (0, helpers_1.isSet)(object.commission_rate) ? String(object.commission_rate) : "",
            unbonding_enabled: (0, helpers_1.isSet)(object.unbonding_enabled) ? Boolean(object.unbonding_enabled) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.deposit_interval !== undefined && (obj.deposit_interval = (message.deposit_interval || helpers_1.Long.UZERO).toString());
        message.validatorset_interval !== undefined && (obj.validatorset_interval = (message.validatorset_interval || helpers_1.Long.UZERO).toString());
        message.commission_rate !== undefined && (obj.commission_rate = message.commission_rate);
        message.unbonding_enabled !== undefined && (obj.unbonding_enabled = message.unbonding_enabled);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.deposit_interval = object.deposit_interval !== undefined && object.deposit_interval !== null ? helpers_1.Long.fromValue(object.deposit_interval) : helpers_1.Long.UZERO;
        message.validatorset_interval = object.validatorset_interval !== undefined && object.validatorset_interval !== null ? helpers_1.Long.fromValue(object.validatorset_interval) : helpers_1.Long.UZERO;
        message.commission_rate = object.commission_rate ?? "";
        message.unbonding_enabled = object.unbonding_enabled ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            deposit_interval: helpers_1.Long.fromString(object.deposit_interval),
            validatorset_interval: helpers_1.Long.fromString(object.validatorset_interval),
            commission_rate: object.commission_rate,
            unbonding_enabled: object.unbonding_enabled
        };
    },
    toAmino(message) {
        const obj = {};
        obj.deposit_interval = message.deposit_interval ? message.deposit_interval.toString() : undefined;
        obj.validatorset_interval = message.validatorset_interval ? message.validatorset_interval.toString() : undefined;
        obj.commission_rate = message.commission_rate;
        obj.unbonding_enabled = message.unbonding_enabled;
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
        chain_id: "",
        delegations: []
    };
}
exports.DelegationsForZone = {
    typeUrl: "/quicksilver.interchainstaking.v1.DelegationsForZone",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain_id !== "") {
            writer.uint32(10).string(message.chain_id);
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
                    message.chain_id = reader.string();
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
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : "",
            delegations: Array.isArray(object?.delegations) ? object.delegations.map((e) => interchainstaking_1.Delegation.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
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
        message.chain_id = object.chain_id ?? "";
        message.delegations = object.delegations?.map(e => interchainstaking_1.Delegation.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            chain_id: object.chain_id,
            delegations: Array.isArray(object?.delegations) ? object.delegations.map((e) => interchainstaking_1.Delegation.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chain_id;
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
        chain_id: "",
        delegation_intent: [],
        snapshot: false
    };
}
exports.DelegatorIntentsForZone = {
    typeUrl: "/quicksilver.interchainstaking.v1.DelegatorIntentsForZone",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain_id !== "") {
            writer.uint32(10).string(message.chain_id);
        }
        for (const v of message.delegation_intent) {
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
                    message.chain_id = reader.string();
                    break;
                case 2:
                    message.delegation_intent.push(interchainstaking_1.DelegatorIntent.decode(reader, reader.uint32()));
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
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : "",
            delegation_intent: Array.isArray(object?.delegation_intent) ? object.delegation_intent.map((e) => interchainstaking_1.DelegatorIntent.fromJSON(e)) : [],
            snapshot: (0, helpers_1.isSet)(object.snapshot) ? Boolean(object.snapshot) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        if (message.delegation_intent) {
            obj.delegation_intent = message.delegation_intent.map(e => e ? interchainstaking_1.DelegatorIntent.toJSON(e) : undefined);
        }
        else {
            obj.delegation_intent = [];
        }
        message.snapshot !== undefined && (obj.snapshot = message.snapshot);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelegatorIntentsForZone();
        message.chain_id = object.chain_id ?? "";
        message.delegation_intent = object.delegation_intent?.map(e => interchainstaking_1.DelegatorIntent.fromPartial(e)) || [];
        message.snapshot = object.snapshot ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            chain_id: object.chain_id,
            delegation_intent: Array.isArray(object?.delegation_intent) ? object.delegation_intent.map((e) => interchainstaking_1.DelegatorIntent.fromAmino(e)) : [],
            snapshot: object.snapshot
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chain_id;
        if (message.delegation_intent) {
            obj.delegation_intent = message.delegation_intent.map(e => e ? interchainstaking_1.DelegatorIntent.toAmino(e) : undefined);
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
        performance_delegations: [],
        delegator_intents: [],
        port_connections: [],
        withdrawal_records: []
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
        for (const v of message.performance_delegations) {
            exports.DelegationsForZone.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.delegator_intents) {
            exports.DelegatorIntentsForZone.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.port_connections) {
            interchainstaking_1.PortConnectionTuple.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.withdrawal_records) {
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
                    message.performance_delegations.push(exports.DelegationsForZone.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.delegator_intents.push(exports.DelegatorIntentsForZone.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.port_connections.push(interchainstaking_1.PortConnectionTuple.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.withdrawal_records.push(interchainstaking_1.WithdrawalRecord.decode(reader, reader.uint32()));
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
            performance_delegations: Array.isArray(object?.performance_delegations) ? object.performance_delegations.map((e) => exports.DelegationsForZone.fromJSON(e)) : [],
            delegator_intents: Array.isArray(object?.delegator_intents) ? object.delegator_intents.map((e) => exports.DelegatorIntentsForZone.fromJSON(e)) : [],
            port_connections: Array.isArray(object?.port_connections) ? object.port_connections.map((e) => interchainstaking_1.PortConnectionTuple.fromJSON(e)) : [],
            withdrawal_records: Array.isArray(object?.withdrawal_records) ? object.withdrawal_records.map((e) => interchainstaking_1.WithdrawalRecord.fromJSON(e)) : []
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
        if (message.performance_delegations) {
            obj.performance_delegations = message.performance_delegations.map(e => e ? exports.DelegationsForZone.toJSON(e) : undefined);
        }
        else {
            obj.performance_delegations = [];
        }
        if (message.delegator_intents) {
            obj.delegator_intents = message.delegator_intents.map(e => e ? exports.DelegatorIntentsForZone.toJSON(e) : undefined);
        }
        else {
            obj.delegator_intents = [];
        }
        if (message.port_connections) {
            obj.port_connections = message.port_connections.map(e => e ? interchainstaking_1.PortConnectionTuple.toJSON(e) : undefined);
        }
        else {
            obj.port_connections = [];
        }
        if (message.withdrawal_records) {
            obj.withdrawal_records = message.withdrawal_records.map(e => e ? interchainstaking_1.WithdrawalRecord.toJSON(e) : undefined);
        }
        else {
            obj.withdrawal_records = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? exports.Params.fromPartial(object.params) : undefined;
        message.zones = object.zones?.map(e => interchainstaking_1.Zone.fromPartial(e)) || [];
        message.receipts = object.receipts?.map(e => interchainstaking_1.Receipt.fromPartial(e)) || [];
        message.delegations = object.delegations?.map(e => exports.DelegationsForZone.fromPartial(e)) || [];
        message.performance_delegations = object.performance_delegations?.map(e => exports.DelegationsForZone.fromPartial(e)) || [];
        message.delegator_intents = object.delegator_intents?.map(e => exports.DelegatorIntentsForZone.fromPartial(e)) || [];
        message.port_connections = object.port_connections?.map(e => interchainstaking_1.PortConnectionTuple.fromPartial(e)) || [];
        message.withdrawal_records = object.withdrawal_records?.map(e => interchainstaking_1.WithdrawalRecord.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? exports.Params.fromAmino(object.params) : undefined,
            zones: Array.isArray(object?.zones) ? object.zones.map((e) => interchainstaking_1.Zone.fromAmino(e)) : [],
            receipts: Array.isArray(object?.receipts) ? object.receipts.map((e) => interchainstaking_1.Receipt.fromAmino(e)) : [],
            delegations: Array.isArray(object?.delegations) ? object.delegations.map((e) => exports.DelegationsForZone.fromAmino(e)) : [],
            performance_delegations: Array.isArray(object?.performance_delegations) ? object.performance_delegations.map((e) => exports.DelegationsForZone.fromAmino(e)) : [],
            delegator_intents: Array.isArray(object?.delegator_intents) ? object.delegator_intents.map((e) => exports.DelegatorIntentsForZone.fromAmino(e)) : [],
            port_connections: Array.isArray(object?.port_connections) ? object.port_connections.map((e) => interchainstaking_1.PortConnectionTuple.fromAmino(e)) : [],
            withdrawal_records: Array.isArray(object?.withdrawal_records) ? object.withdrawal_records.map((e) => interchainstaking_1.WithdrawalRecord.fromAmino(e)) : []
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
        if (message.performance_delegations) {
            obj.performance_delegations = message.performance_delegations.map(e => e ? exports.DelegationsForZone.toAmino(e) : undefined);
        }
        else {
            obj.performance_delegations = [];
        }
        if (message.delegator_intents) {
            obj.delegator_intents = message.delegator_intents.map(e => e ? exports.DelegatorIntentsForZone.toAmino(e) : undefined);
        }
        else {
            obj.delegator_intents = [];
        }
        if (message.port_connections) {
            obj.port_connections = message.port_connections.map(e => e ? interchainstaking_1.PortConnectionTuple.toAmino(e) : undefined);
        }
        else {
            obj.port_connections = [];
        }
        if (message.withdrawal_records) {
            obj.withdrawal_records = message.withdrawal_records.map(e => e ? interchainstaking_1.WithdrawalRecord.toAmino(e) : undefined);
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