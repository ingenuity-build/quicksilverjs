import { Delegation, DelegatorIntent, Zone, Receipt, PortConnectionTuple, WithdrawalRecord } from "./interchainstaking";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseParams_v1() {
    return {
        depositInterval: Long.UZERO,
        validatorsetInterval: Long.UZERO,
        commissionRate: ""
    };
}
export const Params_v1 = {
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
            depositInterval: isSet(object.depositInterval) ? Long.fromValue(object.depositInterval) : Long.UZERO,
            validatorsetInterval: isSet(object.validatorsetInterval) ? Long.fromValue(object.validatorsetInterval) : Long.UZERO,
            commissionRate: isSet(object.commissionRate) ? String(object.commissionRate) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.depositInterval !== undefined && (obj.depositInterval = (message.depositInterval || Long.UZERO).toString());
        message.validatorsetInterval !== undefined && (obj.validatorsetInterval = (message.validatorsetInterval || Long.UZERO).toString());
        message.commissionRate !== undefined && (obj.commissionRate = message.commissionRate);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams_v1();
        message.depositInterval = object.depositInterval !== undefined && object.depositInterval !== null ? Long.fromValue(object.depositInterval) : Long.UZERO;
        message.validatorsetInterval = object.validatorsetInterval !== undefined && object.validatorsetInterval !== null ? Long.fromValue(object.validatorsetInterval) : Long.UZERO;
        message.commissionRate = object.commissionRate ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            depositInterval: Long.fromString(object.deposit_interval),
            validatorsetInterval: Long.fromString(object.validatorset_interval),
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
        depositInterval: Long.UZERO,
        validatorsetInterval: Long.UZERO,
        commissionRate: "",
        unbondingEnabled: false
    };
}
export const Params = {
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
            depositInterval: isSet(object.depositInterval) ? Long.fromValue(object.depositInterval) : Long.UZERO,
            validatorsetInterval: isSet(object.validatorsetInterval) ? Long.fromValue(object.validatorsetInterval) : Long.UZERO,
            commissionRate: isSet(object.commissionRate) ? String(object.commissionRate) : "",
            unbondingEnabled: isSet(object.unbondingEnabled) ? Boolean(object.unbondingEnabled) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.depositInterval !== undefined && (obj.depositInterval = (message.depositInterval || Long.UZERO).toString());
        message.validatorsetInterval !== undefined && (obj.validatorsetInterval = (message.validatorsetInterval || Long.UZERO).toString());
        message.commissionRate !== undefined && (obj.commissionRate = message.commissionRate);
        message.unbondingEnabled !== undefined && (obj.unbondingEnabled = message.unbondingEnabled);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.depositInterval = object.depositInterval !== undefined && object.depositInterval !== null ? Long.fromValue(object.depositInterval) : Long.UZERO;
        message.validatorsetInterval = object.validatorsetInterval !== undefined && object.validatorsetInterval !== null ? Long.fromValue(object.validatorsetInterval) : Long.UZERO;
        message.commissionRate = object.commissionRate ?? "";
        message.unbondingEnabled = object.unbondingEnabled ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            depositInterval: Long.fromString(object.deposit_interval),
            validatorsetInterval: Long.fromString(object.validatorset_interval),
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
        chainId: "",
        delegations: []
    };
}
export const DelegationsForZone = {
    typeUrl: "/quicksilver.interchainstaking.v1.DelegationsForZone",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
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
                    message.chainId = reader.string();
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
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            delegations: Array.isArray(object?.delegations) ? object.delegations.map((e) => Delegation.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
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
        message.chainId = object.chainId ?? "";
        message.delegations = object.delegations?.map(e => Delegation.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            chainId: object.chain_id,
            delegations: Array.isArray(object?.delegations) ? object.delegations.map((e) => Delegation.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
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
        chainId: "",
        delegationIntent: [],
        snapshot: false
    };
}
export const DelegatorIntentsForZone = {
    typeUrl: "/quicksilver.interchainstaking.v1.DelegatorIntentsForZone",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        for (const v of message.delegationIntent) {
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
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.delegationIntent.push(DelegatorIntent.decode(reader, reader.uint32()));
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
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            delegationIntent: Array.isArray(object?.delegationIntent) ? object.delegationIntent.map((e) => DelegatorIntent.fromJSON(e)) : [],
            snapshot: isSet(object.snapshot) ? Boolean(object.snapshot) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        if (message.delegationIntent) {
            obj.delegationIntent = message.delegationIntent.map(e => e ? DelegatorIntent.toJSON(e) : undefined);
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
        message.delegationIntent = object.delegationIntent?.map(e => DelegatorIntent.fromPartial(e)) || [];
        message.snapshot = object.snapshot ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            chainId: object.chain_id,
            delegationIntent: Array.isArray(object?.delegation_intent) ? object.delegation_intent.map((e) => DelegatorIntent.fromAmino(e)) : [],
            snapshot: object.snapshot
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        if (message.delegationIntent) {
            obj.delegation_intent = message.delegationIntent.map(e => e ? DelegatorIntent.toAmino(e) : undefined);
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
        performanceDelegations: [],
        delegatorIntents: [],
        portConnections: [],
        withdrawalRecords: []
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
        for (const v of message.performanceDelegations) {
            DelegationsForZone.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.delegatorIntents) {
            DelegatorIntentsForZone.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.portConnections) {
            PortConnectionTuple.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.withdrawalRecords) {
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
                    message.performanceDelegations.push(DelegationsForZone.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.delegatorIntents.push(DelegatorIntentsForZone.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.portConnections.push(PortConnectionTuple.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.withdrawalRecords.push(WithdrawalRecord.decode(reader, reader.uint32()));
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
            performanceDelegations: Array.isArray(object?.performanceDelegations) ? object.performanceDelegations.map((e) => DelegationsForZone.fromJSON(e)) : [],
            delegatorIntents: Array.isArray(object?.delegatorIntents) ? object.delegatorIntents.map((e) => DelegatorIntentsForZone.fromJSON(e)) : [],
            portConnections: Array.isArray(object?.portConnections) ? object.portConnections.map((e) => PortConnectionTuple.fromJSON(e)) : [],
            withdrawalRecords: Array.isArray(object?.withdrawalRecords) ? object.withdrawalRecords.map((e) => WithdrawalRecord.fromJSON(e)) : []
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
        if (message.performanceDelegations) {
            obj.performanceDelegations = message.performanceDelegations.map(e => e ? DelegationsForZone.toJSON(e) : undefined);
        }
        else {
            obj.performanceDelegations = [];
        }
        if (message.delegatorIntents) {
            obj.delegatorIntents = message.delegatorIntents.map(e => e ? DelegatorIntentsForZone.toJSON(e) : undefined);
        }
        else {
            obj.delegatorIntents = [];
        }
        if (message.portConnections) {
            obj.portConnections = message.portConnections.map(e => e ? PortConnectionTuple.toJSON(e) : undefined);
        }
        else {
            obj.portConnections = [];
        }
        if (message.withdrawalRecords) {
            obj.withdrawalRecords = message.withdrawalRecords.map(e => e ? WithdrawalRecord.toJSON(e) : undefined);
        }
        else {
            obj.withdrawalRecords = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.zones = object.zones?.map(e => Zone.fromPartial(e)) || [];
        message.receipts = object.receipts?.map(e => Receipt.fromPartial(e)) || [];
        message.delegations = object.delegations?.map(e => DelegationsForZone.fromPartial(e)) || [];
        message.performanceDelegations = object.performanceDelegations?.map(e => DelegationsForZone.fromPartial(e)) || [];
        message.delegatorIntents = object.delegatorIntents?.map(e => DelegatorIntentsForZone.fromPartial(e)) || [];
        message.portConnections = object.portConnections?.map(e => PortConnectionTuple.fromPartial(e)) || [];
        message.withdrawalRecords = object.withdrawalRecords?.map(e => WithdrawalRecord.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? Params.fromAmino(object.params) : undefined,
            zones: Array.isArray(object?.zones) ? object.zones.map((e) => Zone.fromAmino(e)) : [],
            receipts: Array.isArray(object?.receipts) ? object.receipts.map((e) => Receipt.fromAmino(e)) : [],
            delegations: Array.isArray(object?.delegations) ? object.delegations.map((e) => DelegationsForZone.fromAmino(e)) : [],
            performanceDelegations: Array.isArray(object?.performance_delegations) ? object.performance_delegations.map((e) => DelegationsForZone.fromAmino(e)) : [],
            delegatorIntents: Array.isArray(object?.delegator_intents) ? object.delegator_intents.map((e) => DelegatorIntentsForZone.fromAmino(e)) : [],
            portConnections: Array.isArray(object?.port_connections) ? object.port_connections.map((e) => PortConnectionTuple.fromAmino(e)) : [],
            withdrawalRecords: Array.isArray(object?.withdrawal_records) ? object.withdrawal_records.map((e) => WithdrawalRecord.fromAmino(e)) : []
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
        if (message.performanceDelegations) {
            obj.performance_delegations = message.performanceDelegations.map(e => e ? DelegationsForZone.toAmino(e) : undefined);
        }
        else {
            obj.performance_delegations = [];
        }
        if (message.delegatorIntents) {
            obj.delegator_intents = message.delegatorIntents.map(e => e ? DelegatorIntentsForZone.toAmino(e) : undefined);
        }
        else {
            obj.delegator_intents = [];
        }
        if (message.portConnections) {
            obj.port_connections = message.portConnections.map(e => e ? PortConnectionTuple.toAmino(e) : undefined);
        }
        else {
            obj.port_connections = [];
        }
        if (message.withdrawalRecords) {
            obj.withdrawal_records = message.withdrawalRecords.map(e => e ? WithdrawalRecord.toAmino(e) : undefined);
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