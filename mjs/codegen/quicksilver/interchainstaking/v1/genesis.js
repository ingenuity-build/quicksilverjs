import { Delegation, DelegatorIntent, Zone, Receipt, PortConnectionTuple, WithdrawalRecord } from "./interchainstaking";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseParams_v1() {
    return {
        deposit_interval: Long.UZERO,
        validatorset_interval: Long.UZERO,
        commission_rate: ""
    };
}
export const Params_v1 = {
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
            deposit_interval: isSet(object.deposit_interval) ? Long.fromValue(object.deposit_interval) : Long.UZERO,
            validatorset_interval: isSet(object.validatorset_interval) ? Long.fromValue(object.validatorset_interval) : Long.UZERO,
            commission_rate: isSet(object.commission_rate) ? String(object.commission_rate) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.deposit_interval !== undefined && (obj.deposit_interval = (message.deposit_interval || Long.UZERO).toString());
        message.validatorset_interval !== undefined && (obj.validatorset_interval = (message.validatorset_interval || Long.UZERO).toString());
        message.commission_rate !== undefined && (obj.commission_rate = message.commission_rate);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams_v1();
        message.deposit_interval = object.deposit_interval !== undefined && object.deposit_interval !== null ? Long.fromValue(object.deposit_interval) : Long.UZERO;
        message.validatorset_interval = object.validatorset_interval !== undefined && object.validatorset_interval !== null ? Long.fromValue(object.validatorset_interval) : Long.UZERO;
        message.commission_rate = object.commission_rate ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            deposit_interval: Long.fromString(object.deposit_interval),
            validatorset_interval: Long.fromString(object.validatorset_interval),
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
        return Params_v1.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Params_v1.decode(message.value);
    },
    toProto(message) {
        return Params_v1.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.Params_v1",
            value: Params_v1.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        deposit_interval: Long.UZERO,
        validatorset_interval: Long.UZERO,
        commission_rate: "",
        unbonding_enabled: false
    };
}
export const Params = {
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
            deposit_interval: isSet(object.deposit_interval) ? Long.fromValue(object.deposit_interval) : Long.UZERO,
            validatorset_interval: isSet(object.validatorset_interval) ? Long.fromValue(object.validatorset_interval) : Long.UZERO,
            commission_rate: isSet(object.commission_rate) ? String(object.commission_rate) : "",
            unbonding_enabled: isSet(object.unbonding_enabled) ? Boolean(object.unbonding_enabled) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.deposit_interval !== undefined && (obj.deposit_interval = (message.deposit_interval || Long.UZERO).toString());
        message.validatorset_interval !== undefined && (obj.validatorset_interval = (message.validatorset_interval || Long.UZERO).toString());
        message.commission_rate !== undefined && (obj.commission_rate = message.commission_rate);
        message.unbonding_enabled !== undefined && (obj.unbonding_enabled = message.unbonding_enabled);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.deposit_interval = object.deposit_interval !== undefined && object.deposit_interval !== null ? Long.fromValue(object.deposit_interval) : Long.UZERO;
        message.validatorset_interval = object.validatorset_interval !== undefined && object.validatorset_interval !== null ? Long.fromValue(object.validatorset_interval) : Long.UZERO;
        message.commission_rate = object.commission_rate ?? "";
        message.unbonding_enabled = object.unbonding_enabled ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            deposit_interval: Long.fromString(object.deposit_interval),
            validatorset_interval: Long.fromString(object.validatorset_interval),
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
        return Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.Params",
            value: Params.encode(message).finish()
        };
    }
};
function createBaseDelegationsForZone() {
    return {
        chain_id: "",
        delegations: []
    };
}
export const DelegationsForZone = {
    typeUrl: "/quicksilver.interchainstaking.v1.DelegationsForZone",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain_id !== "") {
            writer.uint32(10).string(message.chain_id);
        }
        for (const v of message.delegations) {
            Delegation.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.delegations.push(Delegation.decode(reader, reader.uint32()));
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
            chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
            delegations: Array.isArray(object?.delegations) ? object.delegations.map((e) => Delegation.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        if (message.delegations) {
            obj.delegations = message.delegations.map(e => e ? Delegation.toJSON(e) : undefined);
        }
        else {
            obj.delegations = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelegationsForZone();
        message.chain_id = object.chain_id ?? "";
        message.delegations = object.delegations?.map(e => Delegation.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            chain_id: object.chain_id,
            delegations: Array.isArray(object?.delegations) ? object.delegations.map((e) => Delegation.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chain_id;
        if (message.delegations) {
            obj.delegations = message.delegations.map(e => e ? Delegation.toAmino(e) : undefined);
        }
        else {
            obj.delegations = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return DelegationsForZone.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DelegationsForZone.decode(message.value);
    },
    toProto(message) {
        return DelegationsForZone.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.DelegationsForZone",
            value: DelegationsForZone.encode(message).finish()
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
export const DelegatorIntentsForZone = {
    typeUrl: "/quicksilver.interchainstaking.v1.DelegatorIntentsForZone",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain_id !== "") {
            writer.uint32(10).string(message.chain_id);
        }
        for (const v of message.delegation_intent) {
            DelegatorIntent.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.delegation_intent.push(DelegatorIntent.decode(reader, reader.uint32()));
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
            chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
            delegation_intent: Array.isArray(object?.delegation_intent) ? object.delegation_intent.map((e) => DelegatorIntent.fromJSON(e)) : [],
            snapshot: isSet(object.snapshot) ? Boolean(object.snapshot) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        if (message.delegation_intent) {
            obj.delegation_intent = message.delegation_intent.map(e => e ? DelegatorIntent.toJSON(e) : undefined);
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
        message.delegation_intent = object.delegation_intent?.map(e => DelegatorIntent.fromPartial(e)) || [];
        message.snapshot = object.snapshot ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            chain_id: object.chain_id,
            delegation_intent: Array.isArray(object?.delegation_intent) ? object.delegation_intent.map((e) => DelegatorIntent.fromAmino(e)) : [],
            snapshot: object.snapshot
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chain_id;
        if (message.delegation_intent) {
            obj.delegation_intent = message.delegation_intent.map(e => e ? DelegatorIntent.toAmino(e) : undefined);
        }
        else {
            obj.delegation_intent = [];
        }
        obj.snapshot = message.snapshot;
        return obj;
    },
    fromAminoMsg(object) {
        return DelegatorIntentsForZone.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DelegatorIntentsForZone.decode(message.value);
    },
    toProto(message) {
        return DelegatorIntentsForZone.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.DelegatorIntentsForZone",
            value: DelegatorIntentsForZone.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        zones: [],
        receipts: [],
        delegations: [],
        performance_delegations: [],
        delegator_intents: [],
        port_connections: [],
        withdrawal_records: []
    };
}
export const GenesisState = {
    typeUrl: "/quicksilver.interchainstaking.v1.GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.zones) {
            Zone.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.receipts) {
            Receipt.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.delegations) {
            DelegationsForZone.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.performance_delegations) {
            DelegationsForZone.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.delegator_intents) {
            DelegatorIntentsForZone.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.port_connections) {
            PortConnectionTuple.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.withdrawal_records) {
            WithdrawalRecord.encode(v, writer.uint32(66).fork()).ldelim();
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
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.zones.push(Zone.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.receipts.push(Receipt.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.delegations.push(DelegationsForZone.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.performance_delegations.push(DelegationsForZone.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.delegator_intents.push(DelegatorIntentsForZone.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.port_connections.push(PortConnectionTuple.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.withdrawal_records.push(WithdrawalRecord.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            zones: Array.isArray(object?.zones) ? object.zones.map((e) => Zone.fromJSON(e)) : [],
            receipts: Array.isArray(object?.receipts) ? object.receipts.map((e) => Receipt.fromJSON(e)) : [],
            delegations: Array.isArray(object?.delegations) ? object.delegations.map((e) => DelegationsForZone.fromJSON(e)) : [],
            performance_delegations: Array.isArray(object?.performance_delegations) ? object.performance_delegations.map((e) => DelegationsForZone.fromJSON(e)) : [],
            delegator_intents: Array.isArray(object?.delegator_intents) ? object.delegator_intents.map((e) => DelegatorIntentsForZone.fromJSON(e)) : [],
            port_connections: Array.isArray(object?.port_connections) ? object.port_connections.map((e) => PortConnectionTuple.fromJSON(e)) : [],
            withdrawal_records: Array.isArray(object?.withdrawal_records) ? object.withdrawal_records.map((e) => WithdrawalRecord.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.zones) {
            obj.zones = message.zones.map(e => e ? Zone.toJSON(e) : undefined);
        }
        else {
            obj.zones = [];
        }
        if (message.receipts) {
            obj.receipts = message.receipts.map(e => e ? Receipt.toJSON(e) : undefined);
        }
        else {
            obj.receipts = [];
        }
        if (message.delegations) {
            obj.delegations = message.delegations.map(e => e ? DelegationsForZone.toJSON(e) : undefined);
        }
        else {
            obj.delegations = [];
        }
        if (message.performance_delegations) {
            obj.performance_delegations = message.performance_delegations.map(e => e ? DelegationsForZone.toJSON(e) : undefined);
        }
        else {
            obj.performance_delegations = [];
        }
        if (message.delegator_intents) {
            obj.delegator_intents = message.delegator_intents.map(e => e ? DelegatorIntentsForZone.toJSON(e) : undefined);
        }
        else {
            obj.delegator_intents = [];
        }
        if (message.port_connections) {
            obj.port_connections = message.port_connections.map(e => e ? PortConnectionTuple.toJSON(e) : undefined);
        }
        else {
            obj.port_connections = [];
        }
        if (message.withdrawal_records) {
            obj.withdrawal_records = message.withdrawal_records.map(e => e ? WithdrawalRecord.toJSON(e) : undefined);
        }
        else {
            obj.withdrawal_records = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.zones = object.zones?.map(e => Zone.fromPartial(e)) || [];
        message.receipts = object.receipts?.map(e => Receipt.fromPartial(e)) || [];
        message.delegations = object.delegations?.map(e => DelegationsForZone.fromPartial(e)) || [];
        message.performance_delegations = object.performance_delegations?.map(e => DelegationsForZone.fromPartial(e)) || [];
        message.delegator_intents = object.delegator_intents?.map(e => DelegatorIntentsForZone.fromPartial(e)) || [];
        message.port_connections = object.port_connections?.map(e => PortConnectionTuple.fromPartial(e)) || [];
        message.withdrawal_records = object.withdrawal_records?.map(e => WithdrawalRecord.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? Params.fromAmino(object.params) : undefined,
            zones: Array.isArray(object?.zones) ? object.zones.map((e) => Zone.fromAmino(e)) : [],
            receipts: Array.isArray(object?.receipts) ? object.receipts.map((e) => Receipt.fromAmino(e)) : [],
            delegations: Array.isArray(object?.delegations) ? object.delegations.map((e) => DelegationsForZone.fromAmino(e)) : [],
            performance_delegations: Array.isArray(object?.performance_delegations) ? object.performance_delegations.map((e) => DelegationsForZone.fromAmino(e)) : [],
            delegator_intents: Array.isArray(object?.delegator_intents) ? object.delegator_intents.map((e) => DelegatorIntentsForZone.fromAmino(e)) : [],
            port_connections: Array.isArray(object?.port_connections) ? object.port_connections.map((e) => PortConnectionTuple.fromAmino(e)) : [],
            withdrawal_records: Array.isArray(object?.withdrawal_records) ? object.withdrawal_records.map((e) => WithdrawalRecord.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.zones) {
            obj.zones = message.zones.map(e => e ? Zone.toAmino(e) : undefined);
        }
        else {
            obj.zones = [];
        }
        if (message.receipts) {
            obj.receipts = message.receipts.map(e => e ? Receipt.toAmino(e) : undefined);
        }
        else {
            obj.receipts = [];
        }
        if (message.delegations) {
            obj.delegations = message.delegations.map(e => e ? DelegationsForZone.toAmino(e) : undefined);
        }
        else {
            obj.delegations = [];
        }
        if (message.performance_delegations) {
            obj.performance_delegations = message.performance_delegations.map(e => e ? DelegationsForZone.toAmino(e) : undefined);
        }
        else {
            obj.performance_delegations = [];
        }
        if (message.delegator_intents) {
            obj.delegator_intents = message.delegator_intents.map(e => e ? DelegatorIntentsForZone.toAmino(e) : undefined);
        }
        else {
            obj.delegator_intents = [];
        }
        if (message.port_connections) {
            obj.port_connections = message.port_connections.map(e => e ? PortConnectionTuple.toAmino(e) : undefined);
        }
        else {
            obj.port_connections = [];
        }
        if (message.withdrawal_records) {
            obj.withdrawal_records = message.withdrawal_records.map(e => e ? WithdrawalRecord.toAmino(e) : undefined);
        }
        else {
            obj.withdrawal_records = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map