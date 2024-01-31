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
exports.MsgGovSetLsmCapsResponse = exports.MsgGovSetLsmCaps = exports.MsgGovCloseChannelResponse = exports.MsgGovCloseChannel = exports.MsgGovReopenChannelResponse = exports.MsgGovReopenChannel = exports.UpdateZoneValue = exports.UpdateZoneProposalWithDeposit = exports.UpdateZoneProposal = exports.RegisterZoneProposalWithDeposit = exports.RegisterZoneProposal = void 0;
const interchainstaking_1 = require("./interchainstaking");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
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
        messages_per_tx: helpers_1.Long.ZERO,
        return_to_sender: false,
        deposits_enabled: false,
        unbonding_enabled: false,
        decimals: helpers_1.Long.ZERO,
        is118: false
    };
}
exports.RegisterZoneProposal = {
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            connection_id: (0, helpers_1.isSet)(object.connection_id) ? String(object.connection_id) : "",
            base_denom: (0, helpers_1.isSet)(object.base_denom) ? String(object.base_denom) : "",
            local_denom: (0, helpers_1.isSet)(object.local_denom) ? String(object.local_denom) : "",
            account_prefix: (0, helpers_1.isSet)(object.account_prefix) ? String(object.account_prefix) : "",
            multi_send: (0, helpers_1.isSet)(object.multi_send) ? Boolean(object.multi_send) : false,
            liquidity_module: (0, helpers_1.isSet)(object.liquidity_module) ? Boolean(object.liquidity_module) : false,
            messages_per_tx: (0, helpers_1.isSet)(object.messages_per_tx) ? helpers_1.Long.fromValue(object.messages_per_tx) : helpers_1.Long.ZERO,
            return_to_sender: (0, helpers_1.isSet)(object.return_to_sender) ? Boolean(object.return_to_sender) : false,
            deposits_enabled: (0, helpers_1.isSet)(object.deposits_enabled) ? Boolean(object.deposits_enabled) : false,
            unbonding_enabled: (0, helpers_1.isSet)(object.unbonding_enabled) ? Boolean(object.unbonding_enabled) : false,
            decimals: (0, helpers_1.isSet)(object.decimals) ? helpers_1.Long.fromValue(object.decimals) : helpers_1.Long.ZERO,
            is118: (0, helpers_1.isSet)(object.is118) ? Boolean(object.is118) : false
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
        message.messages_per_tx !== undefined && (obj.messages_per_tx = (message.messages_per_tx || helpers_1.Long.ZERO).toString());
        message.return_to_sender !== undefined && (obj.return_to_sender = message.return_to_sender);
        message.deposits_enabled !== undefined && (obj.deposits_enabled = message.deposits_enabled);
        message.unbonding_enabled !== undefined && (obj.unbonding_enabled = message.unbonding_enabled);
        message.decimals !== undefined && (obj.decimals = (message.decimals || helpers_1.Long.ZERO).toString());
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
        message.messages_per_tx = object.messages_per_tx !== undefined && object.messages_per_tx !== null ? helpers_1.Long.fromValue(object.messages_per_tx) : helpers_1.Long.ZERO;
        message.return_to_sender = object.return_to_sender ?? false;
        message.deposits_enabled = object.deposits_enabled ?? false;
        message.unbonding_enabled = object.unbonding_enabled ?? false;
        message.decimals = object.decimals !== undefined && object.decimals !== null ? helpers_1.Long.fromValue(object.decimals) : helpers_1.Long.ZERO;
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
            messages_per_tx: helpers_1.Long.fromString(object.messages_per_tx),
            return_to_sender: object.return_to_sender,
            deposits_enabled: object.deposits_enabled,
            unbonding_enabled: object.unbonding_enabled,
            decimals: helpers_1.Long.fromString(object.decimals),
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
        return exports.RegisterZoneProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RegisterZoneProposal.decode(message.value);
    },
    toProto(message) {
        return exports.RegisterZoneProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.RegisterZoneProposal",
            value: exports.RegisterZoneProposal.encode(message).finish()
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
        messages_per_tx: helpers_1.Long.ZERO,
        return_to_sender: false,
        deposits_enabled: false,
        unbonding_enabled: false,
        decimals: helpers_1.Long.ZERO,
        is118: false
    };
}
exports.RegisterZoneProposalWithDeposit = {
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            connection_id: (0, helpers_1.isSet)(object.connection_id) ? String(object.connection_id) : "",
            base_denom: (0, helpers_1.isSet)(object.base_denom) ? String(object.base_denom) : "",
            local_denom: (0, helpers_1.isSet)(object.local_denom) ? String(object.local_denom) : "",
            account_prefix: (0, helpers_1.isSet)(object.account_prefix) ? String(object.account_prefix) : "",
            multi_send: (0, helpers_1.isSet)(object.multi_send) ? Boolean(object.multi_send) : false,
            liquidity_module: (0, helpers_1.isSet)(object.liquidity_module) ? Boolean(object.liquidity_module) : false,
            deposit: (0, helpers_1.isSet)(object.deposit) ? String(object.deposit) : "",
            messages_per_tx: (0, helpers_1.isSet)(object.messages_per_tx) ? helpers_1.Long.fromValue(object.messages_per_tx) : helpers_1.Long.ZERO,
            return_to_sender: (0, helpers_1.isSet)(object.return_to_sender) ? Boolean(object.return_to_sender) : false,
            deposits_enabled: (0, helpers_1.isSet)(object.deposits_enabled) ? Boolean(object.deposits_enabled) : false,
            unbonding_enabled: (0, helpers_1.isSet)(object.unbonding_enabled) ? Boolean(object.unbonding_enabled) : false,
            decimals: (0, helpers_1.isSet)(object.decimals) ? helpers_1.Long.fromValue(object.decimals) : helpers_1.Long.ZERO,
            is118: (0, helpers_1.isSet)(object.is118) ? Boolean(object.is118) : false
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
        message.messages_per_tx !== undefined && (obj.messages_per_tx = (message.messages_per_tx || helpers_1.Long.ZERO).toString());
        message.return_to_sender !== undefined && (obj.return_to_sender = message.return_to_sender);
        message.deposits_enabled !== undefined && (obj.deposits_enabled = message.deposits_enabled);
        message.unbonding_enabled !== undefined && (obj.unbonding_enabled = message.unbonding_enabled);
        message.decimals !== undefined && (obj.decimals = (message.decimals || helpers_1.Long.ZERO).toString());
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
        message.messages_per_tx = object.messages_per_tx !== undefined && object.messages_per_tx !== null ? helpers_1.Long.fromValue(object.messages_per_tx) : helpers_1.Long.ZERO;
        message.return_to_sender = object.return_to_sender ?? false;
        message.deposits_enabled = object.deposits_enabled ?? false;
        message.unbonding_enabled = object.unbonding_enabled ?? false;
        message.decimals = object.decimals !== undefined && object.decimals !== null ? helpers_1.Long.fromValue(object.decimals) : helpers_1.Long.ZERO;
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
            messages_per_tx: helpers_1.Long.fromString(object.messages_per_tx),
            return_to_sender: object.return_to_sender,
            deposits_enabled: object.deposits_enabled,
            unbonding_enabled: object.unbonding_enabled,
            decimals: helpers_1.Long.fromString(object.decimals),
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
        return exports.RegisterZoneProposalWithDeposit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RegisterZoneProposalWithDeposit.decode(message.value);
    },
    toProto(message) {
        return exports.RegisterZoneProposalWithDeposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.RegisterZoneProposalWithDeposit",
            value: exports.RegisterZoneProposalWithDeposit.encode(message).finish()
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
exports.UpdateZoneProposal = {
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
            exports.UpdateZoneValue.encode(v, writer.uint32(34).fork()).ldelim();
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
                    message.changes.push(exports.UpdateZoneValue.decode(reader, reader.uint32()));
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : "",
            changes: Array.isArray(object?.changes) ? object.changes.map((e) => exports.UpdateZoneValue.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        if (message.changes) {
            obj.changes = message.changes.map(e => e ? exports.UpdateZoneValue.toJSON(e) : undefined);
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
        message.changes = object.changes?.map(e => exports.UpdateZoneValue.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            chain_id: object.chain_id,
            changes: Array.isArray(object?.changes) ? object.changes.map((e) => exports.UpdateZoneValue.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.chain_id = message.chain_id;
        if (message.changes) {
            obj.changes = message.changes.map(e => e ? exports.UpdateZoneValue.toAmino(e) : undefined);
        }
        else {
            obj.changes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UpdateZoneProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.UpdateZoneProposal.decode(message.value);
    },
    toProto(message) {
        return exports.UpdateZoneProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.UpdateZoneProposal",
            value: exports.UpdateZoneProposal.encode(message).finish()
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
exports.UpdateZoneProposalWithDeposit = {
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
            exports.UpdateZoneValue.encode(v, writer.uint32(34).fork()).ldelim();
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
                    message.changes.push(exports.UpdateZoneValue.decode(reader, reader.uint32()));
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : "",
            changes: Array.isArray(object?.changes) ? object.changes.map((e) => exports.UpdateZoneValue.fromJSON(e)) : [],
            deposit: (0, helpers_1.isSet)(object.deposit) ? String(object.deposit) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        if (message.changes) {
            obj.changes = message.changes.map(e => e ? exports.UpdateZoneValue.toJSON(e) : undefined);
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
        message.changes = object.changes?.map(e => exports.UpdateZoneValue.fromPartial(e)) || [];
        message.deposit = object.deposit ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            chain_id: object.chain_id,
            changes: Array.isArray(object?.changes) ? object.changes.map((e) => exports.UpdateZoneValue.fromAmino(e)) : [],
            deposit: object.deposit
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.chain_id = message.chain_id;
        if (message.changes) {
            obj.changes = message.changes.map(e => e ? exports.UpdateZoneValue.toAmino(e) : undefined);
        }
        else {
            obj.changes = [];
        }
        obj.deposit = message.deposit;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UpdateZoneProposalWithDeposit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.UpdateZoneProposalWithDeposit.decode(message.value);
    },
    toProto(message) {
        return exports.UpdateZoneProposalWithDeposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.UpdateZoneProposalWithDeposit",
            value: exports.UpdateZoneProposalWithDeposit.encode(message).finish()
        };
    }
};
function createBaseUpdateZoneValue() {
    return {
        key: "",
        value: ""
    };
}
exports.UpdateZoneValue = {
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
            key: (0, helpers_1.isSet)(object.key) ? String(object.key) : "",
            value: (0, helpers_1.isSet)(object.value) ? String(object.value) : ""
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
        return exports.UpdateZoneValue.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.UpdateZoneValue.decode(message.value);
    },
    toProto(message) {
        return exports.UpdateZoneValue.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.UpdateZoneValue",
            value: exports.UpdateZoneValue.encode(message).finish()
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
exports.MsgGovReopenChannel = {
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            connection_id: (0, helpers_1.isSet)(object.connection_id) ? String(object.connection_id) : "",
            port_id: (0, helpers_1.isSet)(object.port_id) ? String(object.port_id) : "",
            authority: (0, helpers_1.isSet)(object.authority) ? String(object.authority) : ""
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
        return exports.MsgGovReopenChannel.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgGovReopenChannel.decode(message.value);
    },
    toProto(message) {
        return exports.MsgGovReopenChannel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannel",
            value: exports.MsgGovReopenChannel.encode(message).finish()
        };
    }
};
function createBaseMsgGovReopenChannelResponse() {
    return {};
}
exports.MsgGovReopenChannelResponse = {
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
        return exports.MsgGovReopenChannelResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgGovReopenChannelResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgGovReopenChannelResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannelResponse",
            value: exports.MsgGovReopenChannelResponse.encode(message).finish()
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
exports.MsgGovCloseChannel = {
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            channel_id: (0, helpers_1.isSet)(object.channel_id) ? String(object.channel_id) : "",
            port_id: (0, helpers_1.isSet)(object.port_id) ? String(object.port_id) : "",
            authority: (0, helpers_1.isSet)(object.authority) ? String(object.authority) : ""
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
        return exports.MsgGovCloseChannel.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgGovCloseChannel.decode(message.value);
    },
    toProto(message) {
        return exports.MsgGovCloseChannel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannel",
            value: exports.MsgGovCloseChannel.encode(message).finish()
        };
    }
};
function createBaseMsgGovCloseChannelResponse() {
    return {};
}
exports.MsgGovCloseChannelResponse = {
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
        return exports.MsgGovCloseChannelResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgGovCloseChannelResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgGovCloseChannelResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannelResponse",
            value: exports.MsgGovCloseChannelResponse.encode(message).finish()
        };
    }
};
function createBaseMsgGovSetLsmCaps() {
    return {
        title: "",
        description: "",
        chain_id: "",
        caps: interchainstaking_1.LsmCaps.fromPartial({}),
        authority: ""
    };
}
exports.MsgGovSetLsmCaps = {
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
            interchainstaking_1.LsmCaps.encode(message.caps, writer.uint32(34).fork()).ldelim();
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
                    message.caps = interchainstaking_1.LsmCaps.decode(reader, reader.uint32());
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : "",
            caps: (0, helpers_1.isSet)(object.caps) ? interchainstaking_1.LsmCaps.fromJSON(object.caps) : undefined,
            authority: (0, helpers_1.isSet)(object.authority) ? String(object.authority) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.caps !== undefined && (obj.caps = message.caps ? interchainstaking_1.LsmCaps.toJSON(message.caps) : undefined);
        message.authority !== undefined && (obj.authority = message.authority);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgGovSetLsmCaps();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.chain_id = object.chain_id ?? "";
        message.caps = object.caps !== undefined && object.caps !== null ? interchainstaking_1.LsmCaps.fromPartial(object.caps) : undefined;
        message.authority = object.authority ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            chain_id: object.chain_id,
            caps: object?.caps ? interchainstaking_1.LsmCaps.fromAmino(object.caps) : undefined,
            authority: object.authority
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.chain_id = message.chain_id;
        obj.caps = message.caps ? interchainstaking_1.LsmCaps.toAmino(message.caps) : undefined;
        obj.authority = message.authority;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgGovSetLsmCaps.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgGovSetLsmCaps.decode(message.value);
    },
    toProto(message) {
        return exports.MsgGovSetLsmCaps.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps",
            value: exports.MsgGovSetLsmCaps.encode(message).finish()
        };
    }
};
function createBaseMsgGovSetLsmCapsResponse() {
    return {};
}
exports.MsgGovSetLsmCapsResponse = {
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
        return exports.MsgGovSetLsmCapsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgGovSetLsmCapsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgGovSetLsmCapsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCapsResponse",
            value: exports.MsgGovSetLsmCapsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=proposals.js.map