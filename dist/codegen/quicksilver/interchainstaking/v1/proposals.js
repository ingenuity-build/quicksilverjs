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
        connectionId: "",
        baseDenom: "",
        localDenom: "",
        accountPrefix: "",
        multiSend: false,
        liquidityModule: false,
        messagesPerTx: helpers_1.Long.ZERO,
        returnToSender: false,
        depositsEnabled: false,
        unbondingEnabled: false,
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
        if (message.connectionId !== "") {
            writer.uint32(26).string(message.connectionId);
        }
        if (message.baseDenom !== "") {
            writer.uint32(34).string(message.baseDenom);
        }
        if (message.localDenom !== "") {
            writer.uint32(42).string(message.localDenom);
        }
        if (message.accountPrefix !== "") {
            writer.uint32(50).string(message.accountPrefix);
        }
        if (message.multiSend === true) {
            writer.uint32(56).bool(message.multiSend);
        }
        if (message.liquidityModule === true) {
            writer.uint32(64).bool(message.liquidityModule);
        }
        if (!message.messagesPerTx.isZero()) {
            writer.uint32(72).int64(message.messagesPerTx);
        }
        if (message.returnToSender === true) {
            writer.uint32(80).bool(message.returnToSender);
        }
        if (message.depositsEnabled === true) {
            writer.uint32(88).bool(message.depositsEnabled);
        }
        if (message.unbondingEnabled === true) {
            writer.uint32(96).bool(message.unbondingEnabled);
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
                    message.connectionId = reader.string();
                    break;
                case 4:
                    message.baseDenom = reader.string();
                    break;
                case 5:
                    message.localDenom = reader.string();
                    break;
                case 6:
                    message.accountPrefix = reader.string();
                    break;
                case 7:
                    message.multiSend = reader.bool();
                    break;
                case 8:
                    message.liquidityModule = reader.bool();
                    break;
                case 9:
                    message.messagesPerTx = reader.int64();
                    break;
                case 10:
                    message.returnToSender = reader.bool();
                    break;
                case 11:
                    message.depositsEnabled = reader.bool();
                    break;
                case 12:
                    message.unbondingEnabled = reader.bool();
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
            connectionId: (0, helpers_1.isSet)(object.connectionId) ? String(object.connectionId) : "",
            baseDenom: (0, helpers_1.isSet)(object.baseDenom) ? String(object.baseDenom) : "",
            localDenom: (0, helpers_1.isSet)(object.localDenom) ? String(object.localDenom) : "",
            accountPrefix: (0, helpers_1.isSet)(object.accountPrefix) ? String(object.accountPrefix) : "",
            multiSend: (0, helpers_1.isSet)(object.multiSend) ? Boolean(object.multiSend) : false,
            liquidityModule: (0, helpers_1.isSet)(object.liquidityModule) ? Boolean(object.liquidityModule) : false,
            messagesPerTx: (0, helpers_1.isSet)(object.messagesPerTx) ? helpers_1.Long.fromValue(object.messagesPerTx) : helpers_1.Long.ZERO,
            returnToSender: (0, helpers_1.isSet)(object.returnToSender) ? Boolean(object.returnToSender) : false,
            depositsEnabled: (0, helpers_1.isSet)(object.depositsEnabled) ? Boolean(object.depositsEnabled) : false,
            unbondingEnabled: (0, helpers_1.isSet)(object.unbondingEnabled) ? Boolean(object.unbondingEnabled) : false,
            decimals: (0, helpers_1.isSet)(object.decimals) ? helpers_1.Long.fromValue(object.decimals) : helpers_1.Long.ZERO,
            is118: (0, helpers_1.isSet)(object.is118) ? Boolean(object.is118) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
        message.localDenom !== undefined && (obj.localDenom = message.localDenom);
        message.accountPrefix !== undefined && (obj.accountPrefix = message.accountPrefix);
        message.multiSend !== undefined && (obj.multiSend = message.multiSend);
        message.liquidityModule !== undefined && (obj.liquidityModule = message.liquidityModule);
        message.messagesPerTx !== undefined && (obj.messagesPerTx = (message.messagesPerTx || helpers_1.Long.ZERO).toString());
        message.returnToSender !== undefined && (obj.returnToSender = message.returnToSender);
        message.depositsEnabled !== undefined && (obj.depositsEnabled = message.depositsEnabled);
        message.unbondingEnabled !== undefined && (obj.unbondingEnabled = message.unbondingEnabled);
        message.decimals !== undefined && (obj.decimals = (message.decimals || helpers_1.Long.ZERO).toString());
        message.is118 !== undefined && (obj.is118 = message.is118);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRegisterZoneProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.connectionId = object.connectionId ?? "";
        message.baseDenom = object.baseDenom ?? "";
        message.localDenom = object.localDenom ?? "";
        message.accountPrefix = object.accountPrefix ?? "";
        message.multiSend = object.multiSend ?? false;
        message.liquidityModule = object.liquidityModule ?? false;
        message.messagesPerTx = object.messagesPerTx !== undefined && object.messagesPerTx !== null ? helpers_1.Long.fromValue(object.messagesPerTx) : helpers_1.Long.ZERO;
        message.returnToSender = object.returnToSender ?? false;
        message.depositsEnabled = object.depositsEnabled ?? false;
        message.unbondingEnabled = object.unbondingEnabled ?? false;
        message.decimals = object.decimals !== undefined && object.decimals !== null ? helpers_1.Long.fromValue(object.decimals) : helpers_1.Long.ZERO;
        message.is118 = object.is118 ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            connectionId: object.connection_id,
            baseDenom: object.base_denom,
            localDenom: object.local_denom,
            accountPrefix: object.account_prefix,
            multiSend: object.multi_send,
            liquidityModule: object.liquidity_module,
            messagesPerTx: helpers_1.Long.fromString(object.messages_per_tx),
            returnToSender: object.return_to_sender,
            depositsEnabled: object.deposits_enabled,
            unbondingEnabled: object.unbonding_enabled,
            decimals: helpers_1.Long.fromString(object.decimals),
            is118: object.is_118
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.connection_id = message.connectionId;
        obj.base_denom = message.baseDenom;
        obj.local_denom = message.localDenom;
        obj.account_prefix = message.accountPrefix;
        obj.multi_send = message.multiSend;
        obj.liquidity_module = message.liquidityModule;
        obj.messages_per_tx = message.messagesPerTx ? message.messagesPerTx.toString() : undefined;
        obj.return_to_sender = message.returnToSender;
        obj.deposits_enabled = message.depositsEnabled;
        obj.unbonding_enabled = message.unbondingEnabled;
        obj.decimals = message.decimals ? message.decimals.toString() : undefined;
        obj.is_118 = message.is118;
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
        connectionId: "",
        baseDenom: "",
        localDenom: "",
        accountPrefix: "",
        multiSend: false,
        liquidityModule: false,
        deposit: "",
        messagesPerTx: helpers_1.Long.ZERO,
        returnToSender: false,
        depositsEnabled: false,
        unbondingEnabled: false,
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
        if (message.connectionId !== "") {
            writer.uint32(26).string(message.connectionId);
        }
        if (message.baseDenom !== "") {
            writer.uint32(34).string(message.baseDenom);
        }
        if (message.localDenom !== "") {
            writer.uint32(42).string(message.localDenom);
        }
        if (message.accountPrefix !== "") {
            writer.uint32(50).string(message.accountPrefix);
        }
        if (message.multiSend === true) {
            writer.uint32(56).bool(message.multiSend);
        }
        if (message.liquidityModule === true) {
            writer.uint32(64).bool(message.liquidityModule);
        }
        if (message.deposit !== "") {
            writer.uint32(74).string(message.deposit);
        }
        if (!message.messagesPerTx.isZero()) {
            writer.uint32(80).int64(message.messagesPerTx);
        }
        if (message.returnToSender === true) {
            writer.uint32(88).bool(message.returnToSender);
        }
        if (message.depositsEnabled === true) {
            writer.uint32(96).bool(message.depositsEnabled);
        }
        if (message.unbondingEnabled === true) {
            writer.uint32(104).bool(message.unbondingEnabled);
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
                    message.connectionId = reader.string();
                    break;
                case 4:
                    message.baseDenom = reader.string();
                    break;
                case 5:
                    message.localDenom = reader.string();
                    break;
                case 6:
                    message.accountPrefix = reader.string();
                    break;
                case 7:
                    message.multiSend = reader.bool();
                    break;
                case 8:
                    message.liquidityModule = reader.bool();
                    break;
                case 9:
                    message.deposit = reader.string();
                    break;
                case 10:
                    message.messagesPerTx = reader.int64();
                    break;
                case 11:
                    message.returnToSender = reader.bool();
                    break;
                case 12:
                    message.depositsEnabled = reader.bool();
                    break;
                case 13:
                    message.unbondingEnabled = reader.bool();
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
            connectionId: (0, helpers_1.isSet)(object.connectionId) ? String(object.connectionId) : "",
            baseDenom: (0, helpers_1.isSet)(object.baseDenom) ? String(object.baseDenom) : "",
            localDenom: (0, helpers_1.isSet)(object.localDenom) ? String(object.localDenom) : "",
            accountPrefix: (0, helpers_1.isSet)(object.accountPrefix) ? String(object.accountPrefix) : "",
            multiSend: (0, helpers_1.isSet)(object.multiSend) ? Boolean(object.multiSend) : false,
            liquidityModule: (0, helpers_1.isSet)(object.liquidityModule) ? Boolean(object.liquidityModule) : false,
            deposit: (0, helpers_1.isSet)(object.deposit) ? String(object.deposit) : "",
            messagesPerTx: (0, helpers_1.isSet)(object.messagesPerTx) ? helpers_1.Long.fromValue(object.messagesPerTx) : helpers_1.Long.ZERO,
            returnToSender: (0, helpers_1.isSet)(object.returnToSender) ? Boolean(object.returnToSender) : false,
            depositsEnabled: (0, helpers_1.isSet)(object.depositsEnabled) ? Boolean(object.depositsEnabled) : false,
            unbondingEnabled: (0, helpers_1.isSet)(object.unbondingEnabled) ? Boolean(object.unbondingEnabled) : false,
            decimals: (0, helpers_1.isSet)(object.decimals) ? helpers_1.Long.fromValue(object.decimals) : helpers_1.Long.ZERO,
            is118: (0, helpers_1.isSet)(object.is118) ? Boolean(object.is118) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
        message.localDenom !== undefined && (obj.localDenom = message.localDenom);
        message.accountPrefix !== undefined && (obj.accountPrefix = message.accountPrefix);
        message.multiSend !== undefined && (obj.multiSend = message.multiSend);
        message.liquidityModule !== undefined && (obj.liquidityModule = message.liquidityModule);
        message.deposit !== undefined && (obj.deposit = message.deposit);
        message.messagesPerTx !== undefined && (obj.messagesPerTx = (message.messagesPerTx || helpers_1.Long.ZERO).toString());
        message.returnToSender !== undefined && (obj.returnToSender = message.returnToSender);
        message.depositsEnabled !== undefined && (obj.depositsEnabled = message.depositsEnabled);
        message.unbondingEnabled !== undefined && (obj.unbondingEnabled = message.unbondingEnabled);
        message.decimals !== undefined && (obj.decimals = (message.decimals || helpers_1.Long.ZERO).toString());
        message.is118 !== undefined && (obj.is118 = message.is118);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRegisterZoneProposalWithDeposit();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.connectionId = object.connectionId ?? "";
        message.baseDenom = object.baseDenom ?? "";
        message.localDenom = object.localDenom ?? "";
        message.accountPrefix = object.accountPrefix ?? "";
        message.multiSend = object.multiSend ?? false;
        message.liquidityModule = object.liquidityModule ?? false;
        message.deposit = object.deposit ?? "";
        message.messagesPerTx = object.messagesPerTx !== undefined && object.messagesPerTx !== null ? helpers_1.Long.fromValue(object.messagesPerTx) : helpers_1.Long.ZERO;
        message.returnToSender = object.returnToSender ?? false;
        message.depositsEnabled = object.depositsEnabled ?? false;
        message.unbondingEnabled = object.unbondingEnabled ?? false;
        message.decimals = object.decimals !== undefined && object.decimals !== null ? helpers_1.Long.fromValue(object.decimals) : helpers_1.Long.ZERO;
        message.is118 = object.is118 ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            connectionId: object.connection_id,
            baseDenom: object.base_denom,
            localDenom: object.local_denom,
            accountPrefix: object.account_prefix,
            multiSend: object.multi_send,
            liquidityModule: object.liquidity_module,
            deposit: object.deposit,
            messagesPerTx: helpers_1.Long.fromString(object.messages_per_tx),
            returnToSender: object.return_to_sender,
            depositsEnabled: object.deposits_enabled,
            unbondingEnabled: object.unbonding_enabled,
            decimals: helpers_1.Long.fromString(object.decimals),
            is118: object.is_118
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.connection_id = message.connectionId;
        obj.base_denom = message.baseDenom;
        obj.local_denom = message.localDenom;
        obj.account_prefix = message.accountPrefix;
        obj.multi_send = message.multiSend;
        obj.liquidity_module = message.liquidityModule;
        obj.deposit = message.deposit;
        obj.messages_per_tx = message.messagesPerTx ? message.messagesPerTx.toString() : undefined;
        obj.return_to_sender = message.returnToSender;
        obj.deposits_enabled = message.depositsEnabled;
        obj.unbonding_enabled = message.unbondingEnabled;
        obj.decimals = message.decimals ? message.decimals.toString() : undefined;
        obj.is_118 = message.is118;
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
        chainId: "",
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
        if (message.chainId !== "") {
            writer.uint32(26).string(message.chainId);
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
                    message.chainId = reader.string();
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
            chainId: (0, helpers_1.isSet)(object.chainId) ? String(object.chainId) : "",
            changes: Array.isArray(object?.changes) ? object.changes.map((e) => exports.UpdateZoneValue.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.chainId !== undefined && (obj.chainId = message.chainId);
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
        message.chainId = object.chainId ?? "";
        message.changes = object.changes?.map(e => exports.UpdateZoneValue.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            chainId: object.chain_id,
            changes: Array.isArray(object?.changes) ? object.changes.map((e) => exports.UpdateZoneValue.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.chain_id = message.chainId;
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
        chainId: "",
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
        if (message.chainId !== "") {
            writer.uint32(26).string(message.chainId);
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
                    message.chainId = reader.string();
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
            chainId: (0, helpers_1.isSet)(object.chainId) ? String(object.chainId) : "",
            changes: Array.isArray(object?.changes) ? object.changes.map((e) => exports.UpdateZoneValue.fromJSON(e)) : [],
            deposit: (0, helpers_1.isSet)(object.deposit) ? String(object.deposit) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.chainId !== undefined && (obj.chainId = message.chainId);
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
        message.chainId = object.chainId ?? "";
        message.changes = object.changes?.map(e => exports.UpdateZoneValue.fromPartial(e)) || [];
        message.deposit = object.deposit ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            chainId: object.chain_id,
            changes: Array.isArray(object?.changes) ? object.changes.map((e) => exports.UpdateZoneValue.fromAmino(e)) : [],
            deposit: object.deposit
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.chain_id = message.chainId;
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
        connectionId: "",
        portId: "",
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
        if (message.connectionId !== "") {
            writer.uint32(26).string(message.connectionId);
        }
        if (message.portId !== "") {
            writer.uint32(34).string(message.portId);
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
                    message.connectionId = reader.string();
                    break;
                case 4:
                    message.portId = reader.string();
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
            connectionId: (0, helpers_1.isSet)(object.connectionId) ? String(object.connectionId) : "",
            portId: (0, helpers_1.isSet)(object.portId) ? String(object.portId) : "",
            authority: (0, helpers_1.isSet)(object.authority) ? String(object.authority) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.portId !== undefined && (obj.portId = message.portId);
        message.authority !== undefined && (obj.authority = message.authority);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgGovReopenChannel();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.connectionId = object.connectionId ?? "";
        message.portId = object.portId ?? "";
        message.authority = object.authority ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            connectionId: object.connection_id,
            portId: object.port_id,
            authority: object.authority
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.connection_id = message.connectionId;
        obj.port_id = message.portId;
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
        channelId: "",
        portId: "",
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
        if (message.channelId !== "") {
            writer.uint32(26).string(message.channelId);
        }
        if (message.portId !== "") {
            writer.uint32(34).string(message.portId);
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
                    message.channelId = reader.string();
                    break;
                case 4:
                    message.portId = reader.string();
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
            channelId: (0, helpers_1.isSet)(object.channelId) ? String(object.channelId) : "",
            portId: (0, helpers_1.isSet)(object.portId) ? String(object.portId) : "",
            authority: (0, helpers_1.isSet)(object.authority) ? String(object.authority) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.portId !== undefined && (obj.portId = message.portId);
        message.authority !== undefined && (obj.authority = message.authority);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgGovCloseChannel();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.channelId = object.channelId ?? "";
        message.portId = object.portId ?? "";
        message.authority = object.authority ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            channelId: object.channel_id,
            portId: object.port_id,
            authority: object.authority
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.channel_id = message.channelId;
        obj.port_id = message.portId;
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
        chainId: "",
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
        if (message.chainId !== "") {
            writer.uint32(26).string(message.chainId);
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
                    message.chainId = reader.string();
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
            chainId: (0, helpers_1.isSet)(object.chainId) ? String(object.chainId) : "",
            caps: (0, helpers_1.isSet)(object.caps) ? interchainstaking_1.LsmCaps.fromJSON(object.caps) : undefined,
            authority: (0, helpers_1.isSet)(object.authority) ? String(object.authority) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.caps !== undefined && (obj.caps = message.caps ? interchainstaking_1.LsmCaps.toJSON(message.caps) : undefined);
        message.authority !== undefined && (obj.authority = message.authority);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgGovSetLsmCaps();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.chainId = object.chainId ?? "";
        message.caps = object.caps !== undefined && object.caps !== null ? interchainstaking_1.LsmCaps.fromPartial(object.caps) : undefined;
        message.authority = object.authority ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            chainId: object.chain_id,
            caps: object?.caps ? interchainstaking_1.LsmCaps.fromAmino(object.caps) : undefined,
            authority: object.authority
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.chain_id = message.chainId;
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