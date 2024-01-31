import { LsmCaps } from "./interchainstaking";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseRegisterZoneProposal() {
    return {
        title: "",
        description: "",
        connection_id: "",
        base_denom: "",
        local_denom: "",
        account_prefix: "",
        multi_send: false,
        liquidity_module: false,
        messages_per_tx: Long.ZERO,
        return_to_sender: false,
        deposits_enabled: false,
        unbonding_enabled: false,
        decimals: Long.ZERO,
        is118: false
    };
}
export const RegisterZoneProposal = {
    typeUrl: "/quicksilver.interchainstaking.v1.RegisterZoneProposal",
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.connection_id !== "") {
            writer.uint32(26).string(message.connection_id);
        }
        if (message.base_denom !== "") {
            writer.uint32(34).string(message.base_denom);
        }
        if (message.local_denom !== "") {
            writer.uint32(42).string(message.local_denom);
        }
        if (message.account_prefix !== "") {
            writer.uint32(50).string(message.account_prefix);
        }
        if (message.multi_send === true) {
            writer.uint32(56).bool(message.multi_send);
        }
        if (message.liquidity_module === true) {
            writer.uint32(64).bool(message.liquidity_module);
        }
        if (!message.messages_per_tx.isZero()) {
            writer.uint32(72).int64(message.messages_per_tx);
        }
        if (message.return_to_sender === true) {
            writer.uint32(80).bool(message.return_to_sender);
        }
        if (message.deposits_enabled === true) {
            writer.uint32(88).bool(message.deposits_enabled);
        }
        if (message.unbonding_enabled === true) {
            writer.uint32(96).bool(message.unbonding_enabled);
        }
        if (!message.decimals.isZero()) {
            writer.uint32(104).int64(message.decimals);
        }
        if (message.is118 === true) {
            writer.uint32(112).bool(message.is118);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterZoneProposal();
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
                    message.connection_id = reader.string();
                    break;
                case 4:
                    message.base_denom = reader.string();
                    break;
                case 5:
                    message.local_denom = reader.string();
                    break;
                case 6:
                    message.account_prefix = reader.string();
                    break;
                case 7:
                    message.multi_send = reader.bool();
                    break;
                case 8:
                    message.liquidity_module = reader.bool();
                    break;
                case 9:
                    message.messages_per_tx = reader.int64();
                    break;
                case 10:
                    message.return_to_sender = reader.bool();
                    break;
                case 11:
                    message.deposits_enabled = reader.bool();
                    break;
                case 12:
                    message.unbonding_enabled = reader.bool();
                    break;
                case 13:
                    message.decimals = reader.int64();
                    break;
                case 14:
                    message.is118 = reader.bool();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            connection_id: isSet(object.connection_id) ? String(object.connection_id) : "",
            base_denom: isSet(object.base_denom) ? String(object.base_denom) : "",
            local_denom: isSet(object.local_denom) ? String(object.local_denom) : "",
            account_prefix: isSet(object.account_prefix) ? String(object.account_prefix) : "",
            multi_send: isSet(object.multi_send) ? Boolean(object.multi_send) : false,
            liquidity_module: isSet(object.liquidity_module) ? Boolean(object.liquidity_module) : false,
            messages_per_tx: isSet(object.messages_per_tx) ? Long.fromValue(object.messages_per_tx) : Long.ZERO,
            return_to_sender: isSet(object.return_to_sender) ? Boolean(object.return_to_sender) : false,
            deposits_enabled: isSet(object.deposits_enabled) ? Boolean(object.deposits_enabled) : false,
            unbonding_enabled: isSet(object.unbonding_enabled) ? Boolean(object.unbonding_enabled) : false,
            decimals: isSet(object.decimals) ? Long.fromValue(object.decimals) : Long.ZERO,
            is118: isSet(object.is118) ? Boolean(object.is118) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.connection_id !== undefined && (obj.connection_id = message.connection_id);
        message.base_denom !== undefined && (obj.base_denom = message.base_denom);
        message.local_denom !== undefined && (obj.local_denom = message.local_denom);
        message.account_prefix !== undefined && (obj.account_prefix = message.account_prefix);
        message.multi_send !== undefined && (obj.multi_send = message.multi_send);
        message.liquidity_module !== undefined && (obj.liquidity_module = message.liquidity_module);
        message.messages_per_tx !== undefined && (obj.messages_per_tx = (message.messages_per_tx || Long.ZERO).toString());
        message.return_to_sender !== undefined && (obj.return_to_sender = message.return_to_sender);
        message.deposits_enabled !== undefined && (obj.deposits_enabled = message.deposits_enabled);
        message.unbonding_enabled !== undefined && (obj.unbonding_enabled = message.unbonding_enabled);
        message.decimals !== undefined && (obj.decimals = (message.decimals || Long.ZERO).toString());
        message.is118 !== undefined && (obj.is118 = message.is118);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRegisterZoneProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.connection_id = object.connection_id ?? "";
        message.base_denom = object.base_denom ?? "";
        message.local_denom = object.local_denom ?? "";
        message.account_prefix = object.account_prefix ?? "";
        message.multi_send = object.multi_send ?? false;
        message.liquidity_module = object.liquidity_module ?? false;
        message.messages_per_tx = object.messages_per_tx !== undefined && object.messages_per_tx !== null ? Long.fromValue(object.messages_per_tx) : Long.ZERO;
        message.return_to_sender = object.return_to_sender ?? false;
        message.deposits_enabled = object.deposits_enabled ?? false;
        message.unbonding_enabled = object.unbonding_enabled ?? false;
        message.decimals = object.decimals !== undefined && object.decimals !== null ? Long.fromValue(object.decimals) : Long.ZERO;
        message.is118 = object.is118 ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            connection_id: object.connection_id,
            base_denom: object.base_denom,
            local_denom: object.local_denom,
            account_prefix: object.account_prefix,
            multi_send: object.multi_send,
            liquidity_module: object.liquidity_module,
            messages_per_tx: Long.fromString(object.messages_per_tx),
            return_to_sender: object.return_to_sender,
            deposits_enabled: object.deposits_enabled,
            unbonding_enabled: object.unbonding_enabled,
            decimals: Long.fromString(object.decimals),
            is_118: object.is_118
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.connection_id = message.connection_id;
        obj.base_denom = message.base_denom;
        obj.local_denom = message.local_denom;
        obj.account_prefix = message.account_prefix;
        obj.multi_send = message.multi_send;
        obj.liquidity_module = message.liquidity_module;
        obj.messages_per_tx = message.messages_per_tx ? message.messages_per_tx.toString() : undefined;
        obj.return_to_sender = message.return_to_sender;
        obj.deposits_enabled = message.deposits_enabled;
        obj.unbonding_enabled = message.unbonding_enabled;
        obj.decimals = message.decimals ? message.decimals.toString() : undefined;
        obj.is_118 = message.is_118;
        return obj;
    },
    fromAminoMsg(object) {
        return RegisterZoneProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RegisterZoneProposal.decode(message.value);
    },
    toProto(message) {
        return RegisterZoneProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.RegisterZoneProposal",
            value: RegisterZoneProposal.encode(message).finish()
        };
    }
};
function createBaseRegisterZoneProposalWithDeposit() {
    return {
        title: "",
        description: "",
        connection_id: "",
        base_denom: "",
        local_denom: "",
        account_prefix: "",
        multi_send: false,
        liquidity_module: false,
        deposit: "",
        messages_per_tx: Long.ZERO,
        return_to_sender: false,
        deposits_enabled: false,
        unbonding_enabled: false,
        decimals: Long.ZERO,
        is118: false
    };
}
export const RegisterZoneProposalWithDeposit = {
    typeUrl: "/quicksilver.interchainstaking.v1.RegisterZoneProposalWithDeposit",
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.connection_id !== "") {
            writer.uint32(26).string(message.connection_id);
        }
        if (message.base_denom !== "") {
            writer.uint32(34).string(message.base_denom);
        }
        if (message.local_denom !== "") {
            writer.uint32(42).string(message.local_denom);
        }
        if (message.account_prefix !== "") {
            writer.uint32(50).string(message.account_prefix);
        }
        if (message.multi_send === true) {
            writer.uint32(56).bool(message.multi_send);
        }
        if (message.liquidity_module === true) {
            writer.uint32(64).bool(message.liquidity_module);
        }
        if (message.deposit !== "") {
            writer.uint32(74).string(message.deposit);
        }
        if (!message.messages_per_tx.isZero()) {
            writer.uint32(80).int64(message.messages_per_tx);
        }
        if (message.return_to_sender === true) {
            writer.uint32(88).bool(message.return_to_sender);
        }
        if (message.deposits_enabled === true) {
            writer.uint32(96).bool(message.deposits_enabled);
        }
        if (message.unbonding_enabled === true) {
            writer.uint32(104).bool(message.unbonding_enabled);
        }
        if (!message.decimals.isZero()) {
            writer.uint32(112).int64(message.decimals);
        }
        if (message.is118 === true) {
            writer.uint32(120).bool(message.is118);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterZoneProposalWithDeposit();
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
                    message.connection_id = reader.string();
                    break;
                case 4:
                    message.base_denom = reader.string();
                    break;
                case 5:
                    message.local_denom = reader.string();
                    break;
                case 6:
                    message.account_prefix = reader.string();
                    break;
                case 7:
                    message.multi_send = reader.bool();
                    break;
                case 8:
                    message.liquidity_module = reader.bool();
                    break;
                case 9:
                    message.deposit = reader.string();
                    break;
                case 10:
                    message.messages_per_tx = reader.int64();
                    break;
                case 11:
                    message.return_to_sender = reader.bool();
                    break;
                case 12:
                    message.deposits_enabled = reader.bool();
                    break;
                case 13:
                    message.unbonding_enabled = reader.bool();
                    break;
                case 14:
                    message.decimals = reader.int64();
                    break;
                case 15:
                    message.is118 = reader.bool();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            connection_id: isSet(object.connection_id) ? String(object.connection_id) : "",
            base_denom: isSet(object.base_denom) ? String(object.base_denom) : "",
            local_denom: isSet(object.local_denom) ? String(object.local_denom) : "",
            account_prefix: isSet(object.account_prefix) ? String(object.account_prefix) : "",
            multi_send: isSet(object.multi_send) ? Boolean(object.multi_send) : false,
            liquidity_module: isSet(object.liquidity_module) ? Boolean(object.liquidity_module) : false,
            deposit: isSet(object.deposit) ? String(object.deposit) : "",
            messages_per_tx: isSet(object.messages_per_tx) ? Long.fromValue(object.messages_per_tx) : Long.ZERO,
            return_to_sender: isSet(object.return_to_sender) ? Boolean(object.return_to_sender) : false,
            deposits_enabled: isSet(object.deposits_enabled) ? Boolean(object.deposits_enabled) : false,
            unbonding_enabled: isSet(object.unbonding_enabled) ? Boolean(object.unbonding_enabled) : false,
            decimals: isSet(object.decimals) ? Long.fromValue(object.decimals) : Long.ZERO,
            is118: isSet(object.is118) ? Boolean(object.is118) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.connection_id !== undefined && (obj.connection_id = message.connection_id);
        message.base_denom !== undefined && (obj.base_denom = message.base_denom);
        message.local_denom !== undefined && (obj.local_denom = message.local_denom);
        message.account_prefix !== undefined && (obj.account_prefix = message.account_prefix);
        message.multi_send !== undefined && (obj.multi_send = message.multi_send);
        message.liquidity_module !== undefined && (obj.liquidity_module = message.liquidity_module);
        message.deposit !== undefined && (obj.deposit = message.deposit);
        message.messages_per_tx !== undefined && (obj.messages_per_tx = (message.messages_per_tx || Long.ZERO).toString());
        message.return_to_sender !== undefined && (obj.return_to_sender = message.return_to_sender);
        message.deposits_enabled !== undefined && (obj.deposits_enabled = message.deposits_enabled);
        message.unbonding_enabled !== undefined && (obj.unbonding_enabled = message.unbonding_enabled);
        message.decimals !== undefined && (obj.decimals = (message.decimals || Long.ZERO).toString());
        message.is118 !== undefined && (obj.is118 = message.is118);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRegisterZoneProposalWithDeposit();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.connection_id = object.connection_id ?? "";
        message.base_denom = object.base_denom ?? "";
        message.local_denom = object.local_denom ?? "";
        message.account_prefix = object.account_prefix ?? "";
        message.multi_send = object.multi_send ?? false;
        message.liquidity_module = object.liquidity_module ?? false;
        message.deposit = object.deposit ?? "";
        message.messages_per_tx = object.messages_per_tx !== undefined && object.messages_per_tx !== null ? Long.fromValue(object.messages_per_tx) : Long.ZERO;
        message.return_to_sender = object.return_to_sender ?? false;
        message.deposits_enabled = object.deposits_enabled ?? false;
        message.unbonding_enabled = object.unbonding_enabled ?? false;
        message.decimals = object.decimals !== undefined && object.decimals !== null ? Long.fromValue(object.decimals) : Long.ZERO;
        message.is118 = object.is118 ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            connection_id: object.connection_id,
            base_denom: object.base_denom,
            local_denom: object.local_denom,
            account_prefix: object.account_prefix,
            multi_send: object.multi_send,
            liquidity_module: object.liquidity_module,
            deposit: object.deposit,
            messages_per_tx: Long.fromString(object.messages_per_tx),
            return_to_sender: object.return_to_sender,
            deposits_enabled: object.deposits_enabled,
            unbonding_enabled: object.unbonding_enabled,
            decimals: Long.fromString(object.decimals),
            is_118: object.is_118
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.connection_id = message.connection_id;
        obj.base_denom = message.base_denom;
        obj.local_denom = message.local_denom;
        obj.account_prefix = message.account_prefix;
        obj.multi_send = message.multi_send;
        obj.liquidity_module = message.liquidity_module;
        obj.deposit = message.deposit;
        obj.messages_per_tx = message.messages_per_tx ? message.messages_per_tx.toString() : undefined;
        obj.return_to_sender = message.return_to_sender;
        obj.deposits_enabled = message.deposits_enabled;
        obj.unbonding_enabled = message.unbonding_enabled;
        obj.decimals = message.decimals ? message.decimals.toString() : undefined;
        obj.is_118 = message.is_118;
        return obj;
    },
    fromAminoMsg(object) {
        return RegisterZoneProposalWithDeposit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RegisterZoneProposalWithDeposit.decode(message.value);
    },
    toProto(message) {
        return RegisterZoneProposalWithDeposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.RegisterZoneProposalWithDeposit",
            value: RegisterZoneProposalWithDeposit.encode(message).finish()
        };
    }
};
function createBaseUpdateZoneProposal() {
    return {
        title: "",
        description: "",
        chain_id: "",
        changes: []
    };
}
export const UpdateZoneProposal = {
    typeUrl: "/quicksilver.interchainstaking.v1.UpdateZoneProposal",
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.chain_id !== "") {
            writer.uint32(26).string(message.chain_id);
        }
        for (const v of message.changes) {
            UpdateZoneValue.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateZoneProposal();
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
                    message.chain_id = reader.string();
                    break;
                case 4:
                    message.changes.push(UpdateZoneValue.decode(reader, reader.uint32()));
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
            changes: Array.isArray(object?.changes) ? object.changes.map((e) => UpdateZoneValue.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        if (message.changes) {
            obj.changes = message.changes.map(e => e ? UpdateZoneValue.toJSON(e) : undefined);
        }
        else {
            obj.changes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUpdateZoneProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.chain_id = object.chain_id ?? "";
        message.changes = object.changes?.map(e => UpdateZoneValue.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            chain_id: object.chain_id,
            changes: Array.isArray(object?.changes) ? object.changes.map((e) => UpdateZoneValue.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.chain_id = message.chain_id;
        if (message.changes) {
            obj.changes = message.changes.map(e => e ? UpdateZoneValue.toAmino(e) : undefined);
        }
        else {
            obj.changes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return UpdateZoneProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return UpdateZoneProposal.decode(message.value);
    },
    toProto(message) {
        return UpdateZoneProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.UpdateZoneProposal",
            value: UpdateZoneProposal.encode(message).finish()
        };
    }
};
function createBaseUpdateZoneProposalWithDeposit() {
    return {
        title: "",
        description: "",
        chain_id: "",
        changes: [],
        deposit: ""
    };
}
export const UpdateZoneProposalWithDeposit = {
    typeUrl: "/quicksilver.interchainstaking.v1.UpdateZoneProposalWithDeposit",
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.chain_id !== "") {
            writer.uint32(26).string(message.chain_id);
        }
        for (const v of message.changes) {
            UpdateZoneValue.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.deposit !== "") {
            writer.uint32(42).string(message.deposit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateZoneProposalWithDeposit();
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
                    message.chain_id = reader.string();
                    break;
                case 4:
                    message.changes.push(UpdateZoneValue.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        return {
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
            changes: Array.isArray(object?.changes) ? object.changes.map((e) => UpdateZoneValue.fromJSON(e)) : [],
            deposit: isSet(object.deposit) ? String(object.deposit) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        if (message.changes) {
            obj.changes = message.changes.map(e => e ? UpdateZoneValue.toJSON(e) : undefined);
        }
        else {
            obj.changes = [];
        }
        message.deposit !== undefined && (obj.deposit = message.deposit);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUpdateZoneProposalWithDeposit();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.chain_id = object.chain_id ?? "";
        message.changes = object.changes?.map(e => UpdateZoneValue.fromPartial(e)) || [];
        message.deposit = object.deposit ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            chain_id: object.chain_id,
            changes: Array.isArray(object?.changes) ? object.changes.map((e) => UpdateZoneValue.fromAmino(e)) : [],
            deposit: object.deposit
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.chain_id = message.chain_id;
        if (message.changes) {
            obj.changes = message.changes.map(e => e ? UpdateZoneValue.toAmino(e) : undefined);
        }
        else {
            obj.changes = [];
        }
        obj.deposit = message.deposit;
        return obj;
    },
    fromAminoMsg(object) {
        return UpdateZoneProposalWithDeposit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return UpdateZoneProposalWithDeposit.decode(message.value);
    },
    toProto(message) {
        return UpdateZoneProposalWithDeposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.UpdateZoneProposalWithDeposit",
            value: UpdateZoneProposalWithDeposit.encode(message).finish()
        };
    }
};
function createBaseUpdateZoneValue() {
    return {
        key: "",
        value: ""
    };
}
export const UpdateZoneValue = {
    typeUrl: "/quicksilver.interchainstaking.v1.UpdateZoneValue",
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateZoneValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? String(object.value) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUpdateZoneValue();
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            key: object.key,
            value: object.value
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return UpdateZoneValue.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return UpdateZoneValue.decode(message.value);
    },
    toProto(message) {
        return UpdateZoneValue.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.UpdateZoneValue",
            value: UpdateZoneValue.encode(message).finish()
        };
    }
};
function createBaseMsgGovReopenChannel() {
    return {
        title: "",
        description: "",
        connection_id: "",
        port_id: "",
        authority: ""
    };
}
export const MsgGovReopenChannel = {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannel",
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.connection_id !== "") {
            writer.uint32(26).string(message.connection_id);
        }
        if (message.port_id !== "") {
            writer.uint32(34).string(message.port_id);
        }
        if (message.authority !== "") {
            writer.uint32(42).string(message.authority);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgGovReopenChannel();
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
                    message.connection_id = reader.string();
                    break;
                case 4:
                    message.port_id = reader.string();
                    break;
                case 5:
                    message.authority = reader.string();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            connection_id: isSet(object.connection_id) ? String(object.connection_id) : "",
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            authority: isSet(object.authority) ? String(object.authority) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.connection_id !== undefined && (obj.connection_id = message.connection_id);
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.authority !== undefined && (obj.authority = message.authority);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgGovReopenChannel();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.connection_id = object.connection_id ?? "";
        message.port_id = object.port_id ?? "";
        message.authority = object.authority ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            connection_id: object.connection_id,
            port_id: object.port_id,
            authority: object.authority
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.connection_id = message.connection_id;
        obj.port_id = message.port_id;
        obj.authority = message.authority;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgGovReopenChannel.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgGovReopenChannel.decode(message.value);
    },
    toProto(message) {
        return MsgGovReopenChannel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannel",
            value: MsgGovReopenChannel.encode(message).finish()
        };
    }
};
function createBaseMsgGovReopenChannelResponse() {
    return {};
}
export const MsgGovReopenChannelResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannelResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgGovReopenChannelResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgGovReopenChannelResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgGovReopenChannelResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgGovReopenChannelResponse.decode(message.value);
    },
    toProto(message) {
        return MsgGovReopenChannelResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannelResponse",
            value: MsgGovReopenChannelResponse.encode(message).finish()
        };
    }
};
function createBaseMsgGovCloseChannel() {
    return {
        title: "",
        description: "",
        channel_id: "",
        port_id: "",
        authority: ""
    };
}
export const MsgGovCloseChannel = {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannel",
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.channel_id !== "") {
            writer.uint32(26).string(message.channel_id);
        }
        if (message.port_id !== "") {
            writer.uint32(34).string(message.port_id);
        }
        if (message.authority !== "") {
            writer.uint32(42).string(message.authority);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgGovCloseChannel();
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
                    message.channel_id = reader.string();
                    break;
                case 4:
                    message.port_id = reader.string();
                    break;
                case 5:
                    message.authority = reader.string();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            authority: isSet(object.authority) ? String(object.authority) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.authority !== undefined && (obj.authority = message.authority);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgGovCloseChannel();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.channel_id = object.channel_id ?? "";
        message.port_id = object.port_id ?? "";
        message.authority = object.authority ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            channel_id: object.channel_id,
            port_id: object.port_id,
            authority: object.authority
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.channel_id = message.channel_id;
        obj.port_id = message.port_id;
        obj.authority = message.authority;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgGovCloseChannel.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgGovCloseChannel.decode(message.value);
    },
    toProto(message) {
        return MsgGovCloseChannel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannel",
            value: MsgGovCloseChannel.encode(message).finish()
        };
    }
};
function createBaseMsgGovCloseChannelResponse() {
    return {};
}
export const MsgGovCloseChannelResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannelResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgGovCloseChannelResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgGovCloseChannelResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgGovCloseChannelResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgGovCloseChannelResponse.decode(message.value);
    },
    toProto(message) {
        return MsgGovCloseChannelResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannelResponse",
            value: MsgGovCloseChannelResponse.encode(message).finish()
        };
    }
};
function createBaseMsgGovSetLsmCaps() {
    return {
        title: "",
        description: "",
        chain_id: "",
        caps: LsmCaps.fromPartial({}),
        authority: ""
    };
}
export const MsgGovSetLsmCaps = {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps",
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.chain_id !== "") {
            writer.uint32(26).string(message.chain_id);
        }
        if (message.caps !== undefined) {
            LsmCaps.encode(message.caps, writer.uint32(34).fork()).ldelim();
        }
        if (message.authority !== "") {
            writer.uint32(42).string(message.authority);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgGovSetLsmCaps();
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
                    message.chain_id = reader.string();
                    break;
                case 4:
                    message.caps = LsmCaps.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.authority = reader.string();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
            caps: isSet(object.caps) ? LsmCaps.fromJSON(object.caps) : undefined,
            authority: isSet(object.authority) ? String(object.authority) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.caps !== undefined && (obj.caps = message.caps ? LsmCaps.toJSON(message.caps) : undefined);
        message.authority !== undefined && (obj.authority = message.authority);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgGovSetLsmCaps();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.chain_id = object.chain_id ?? "";
        message.caps = object.caps !== undefined && object.caps !== null ? LsmCaps.fromPartial(object.caps) : undefined;
        message.authority = object.authority ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            chain_id: object.chain_id,
            caps: object?.caps ? LsmCaps.fromAmino(object.caps) : undefined,
            authority: object.authority
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.chain_id = message.chain_id;
        obj.caps = message.caps ? LsmCaps.toAmino(message.caps) : undefined;
        obj.authority = message.authority;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgGovSetLsmCaps.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgGovSetLsmCaps.decode(message.value);
    },
    toProto(message) {
        return MsgGovSetLsmCaps.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps",
            value: MsgGovSetLsmCaps.encode(message).finish()
        };
    }
};
function createBaseMsgGovSetLsmCapsResponse() {
    return {};
}
export const MsgGovSetLsmCapsResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCapsResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgGovSetLsmCapsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgGovSetLsmCapsResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgGovSetLsmCapsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgGovSetLsmCapsResponse.decode(message.value);
    },
    toProto(message) {
        return MsgGovSetLsmCapsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCapsResponse",
            value: MsgGovSetLsmCapsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=proposals.js.map