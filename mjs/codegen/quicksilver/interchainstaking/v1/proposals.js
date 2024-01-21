import { LsmCaps } from "./interchainstaking";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
        messagesPerTx: Long.ZERO,
        returnToSender: false,
        depositsEnabled: false,
        unbondingEnabled: false,
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
            baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
            localDenom: isSet(object.localDenom) ? String(object.localDenom) : "",
            accountPrefix: isSet(object.accountPrefix) ? String(object.accountPrefix) : "",
            multiSend: isSet(object.multiSend) ? Boolean(object.multiSend) : false,
            liquidityModule: isSet(object.liquidityModule) ? Boolean(object.liquidityModule) : false,
            messagesPerTx: isSet(object.messagesPerTx) ? Long.fromValue(object.messagesPerTx) : Long.ZERO,
            returnToSender: isSet(object.returnToSender) ? Boolean(object.returnToSender) : false,
            depositsEnabled: isSet(object.depositsEnabled) ? Boolean(object.depositsEnabled) : false,
            unbondingEnabled: isSet(object.unbondingEnabled) ? Boolean(object.unbondingEnabled) : false,
            decimals: isSet(object.decimals) ? Long.fromValue(object.decimals) : Long.ZERO,
            is118: isSet(object.is118) ? Boolean(object.is118) : false
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
        message.messagesPerTx !== undefined && (obj.messagesPerTx = (message.messagesPerTx || Long.ZERO).toString());
        message.returnToSender !== undefined && (obj.returnToSender = message.returnToSender);
        message.depositsEnabled !== undefined && (obj.depositsEnabled = message.depositsEnabled);
        message.unbondingEnabled !== undefined && (obj.unbondingEnabled = message.unbondingEnabled);
        message.decimals !== undefined && (obj.decimals = (message.decimals || Long.ZERO).toString());
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
        message.messagesPerTx = object.messagesPerTx !== undefined && object.messagesPerTx !== null ? Long.fromValue(object.messagesPerTx) : Long.ZERO;
        message.returnToSender = object.returnToSender ?? false;
        message.depositsEnabled = object.depositsEnabled ?? false;
        message.unbondingEnabled = object.unbondingEnabled ?? false;
        message.decimals = object.decimals !== undefined && object.decimals !== null ? Long.fromValue(object.decimals) : Long.ZERO;
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
            messagesPerTx: Long.fromString(object.messages_per_tx),
            returnToSender: object.return_to_sender,
            depositsEnabled: object.deposits_enabled,
            unbondingEnabled: object.unbonding_enabled,
            decimals: Long.fromString(object.decimals),
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
        connectionId: "",
        baseDenom: "",
        localDenom: "",
        accountPrefix: "",
        multiSend: false,
        liquidityModule: false,
        deposit: "",
        messagesPerTx: Long.ZERO,
        returnToSender: false,
        depositsEnabled: false,
        unbondingEnabled: false,
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
            baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
            localDenom: isSet(object.localDenom) ? String(object.localDenom) : "",
            accountPrefix: isSet(object.accountPrefix) ? String(object.accountPrefix) : "",
            multiSend: isSet(object.multiSend) ? Boolean(object.multiSend) : false,
            liquidityModule: isSet(object.liquidityModule) ? Boolean(object.liquidityModule) : false,
            deposit: isSet(object.deposit) ? String(object.deposit) : "",
            messagesPerTx: isSet(object.messagesPerTx) ? Long.fromValue(object.messagesPerTx) : Long.ZERO,
            returnToSender: isSet(object.returnToSender) ? Boolean(object.returnToSender) : false,
            depositsEnabled: isSet(object.depositsEnabled) ? Boolean(object.depositsEnabled) : false,
            unbondingEnabled: isSet(object.unbondingEnabled) ? Boolean(object.unbondingEnabled) : false,
            decimals: isSet(object.decimals) ? Long.fromValue(object.decimals) : Long.ZERO,
            is118: isSet(object.is118) ? Boolean(object.is118) : false
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
        message.messagesPerTx !== undefined && (obj.messagesPerTx = (message.messagesPerTx || Long.ZERO).toString());
        message.returnToSender !== undefined && (obj.returnToSender = message.returnToSender);
        message.depositsEnabled !== undefined && (obj.depositsEnabled = message.depositsEnabled);
        message.unbondingEnabled !== undefined && (obj.unbondingEnabled = message.unbondingEnabled);
        message.decimals !== undefined && (obj.decimals = (message.decimals || Long.ZERO).toString());
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
        message.messagesPerTx = object.messagesPerTx !== undefined && object.messagesPerTx !== null ? Long.fromValue(object.messagesPerTx) : Long.ZERO;
        message.returnToSender = object.returnToSender ?? false;
        message.depositsEnabled = object.depositsEnabled ?? false;
        message.unbondingEnabled = object.unbondingEnabled ?? false;
        message.decimals = object.decimals !== undefined && object.decimals !== null ? Long.fromValue(object.decimals) : Long.ZERO;
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
            messagesPerTx: Long.fromString(object.messages_per_tx),
            returnToSender: object.return_to_sender,
            depositsEnabled: object.deposits_enabled,
            unbondingEnabled: object.unbonding_enabled,
            decimals: Long.fromString(object.decimals),
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
        chainId: "",
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
        if (message.chainId !== "") {
            writer.uint32(26).string(message.chainId);
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
                    message.chainId = reader.string();
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
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            changes: Array.isArray(object?.changes) ? object.changes.map((e) => UpdateZoneValue.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.chainId !== undefined && (obj.chainId = message.chainId);
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
        message.chainId = object.chainId ?? "";
        message.changes = object.changes?.map(e => UpdateZoneValue.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            chainId: object.chain_id,
            changes: Array.isArray(object?.changes) ? object.changes.map((e) => UpdateZoneValue.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.chain_id = message.chainId;
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
        chainId: "",
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
        if (message.chainId !== "") {
            writer.uint32(26).string(message.chainId);
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
                    message.chainId = reader.string();
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
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            changes: Array.isArray(object?.changes) ? object.changes.map((e) => UpdateZoneValue.fromJSON(e)) : [],
            deposit: isSet(object.deposit) ? String(object.deposit) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.chainId !== undefined && (obj.chainId = message.chainId);
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
        message.chainId = object.chainId ?? "";
        message.changes = object.changes?.map(e => UpdateZoneValue.fromPartial(e)) || [];
        message.deposit = object.deposit ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            chainId: object.chain_id,
            changes: Array.isArray(object?.changes) ? object.changes.map((e) => UpdateZoneValue.fromAmino(e)) : [],
            deposit: object.deposit
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.chain_id = message.chainId;
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
        connectionId: "",
        portId: "",
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
            portId: isSet(object.portId) ? String(object.portId) : "",
            authority: isSet(object.authority) ? String(object.authority) : ""
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
        channelId: "",
        portId: "",
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            portId: isSet(object.portId) ? String(object.portId) : "",
            authority: isSet(object.authority) ? String(object.authority) : ""
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
        chainId: "",
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
        if (message.chainId !== "") {
            writer.uint32(26).string(message.chainId);
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
                    message.chainId = reader.string();
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
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            caps: isSet(object.caps) ? LsmCaps.fromJSON(object.caps) : undefined,
            authority: isSet(object.authority) ? String(object.authority) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.caps !== undefined && (obj.caps = message.caps ? LsmCaps.toJSON(message.caps) : undefined);
        message.authority !== undefined && (obj.authority = message.authority);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgGovSetLsmCaps();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.chainId = object.chainId ?? "";
        message.caps = object.caps !== undefined && object.caps !== null ? LsmCaps.fromPartial(object.caps) : undefined;
        message.authority = object.authority ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            chainId: object.chain_id,
            caps: object?.caps ? LsmCaps.fromAmino(object.caps) : undefined,
            authority: object.authority
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.chain_id = message.chainId;
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