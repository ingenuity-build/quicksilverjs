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
exports.CompletedAction = exports.ClaimRecord = exports.ClaimRecord_ActionsCompletedEntry = exports.ZoneDrop = exports.statusToJSON = exports.statusFromJSON = exports.StatusAmino = exports.StatusSDKType = exports.Status = exports.actionToJSON = exports.actionFromJSON = exports.ActionAmino = exports.ActionSDKType = exports.Action = void 0;
const timestamp_1 = require("../../../google/protobuf/timestamp");
const duration_1 = require("../../../google/protobuf/duration");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
/** Action is used as an enum to denote specific actions or tasks. */
var Action;
(function (Action) {
    /** ActionUndefined - Undefined action (per protobuf spec) */
    Action[Action["ActionUndefined"] = 0] = "ActionUndefined";
    /** ActionInitialClaim - Initial claim action */
    Action[Action["ActionInitialClaim"] = 1] = "ActionInitialClaim";
    /** ActionDepositT1 - Deposit tier 1 (e.g. > 5% of base_value) */
    Action[Action["ActionDepositT1"] = 2] = "ActionDepositT1";
    /** ActionDepositT2 - Deposit tier 2 (e.g. > 10% of base_value) */
    Action[Action["ActionDepositT2"] = 3] = "ActionDepositT2";
    /** ActionDepositT3 - Deposit tier 3 (e.g. > 15% of base_value) */
    Action[Action["ActionDepositT3"] = 4] = "ActionDepositT3";
    /** ActionDepositT4 - Deposit tier 4 (e.g. > 22% of base_value) */
    Action[Action["ActionDepositT4"] = 5] = "ActionDepositT4";
    /** ActionDepositT5 - Deposit tier 5 (e.g. > 30% of base_value) */
    Action[Action["ActionDepositT5"] = 6] = "ActionDepositT5";
    /** ActionStakeQCK - Active QCK delegation */
    Action[Action["ActionStakeQCK"] = 7] = "ActionStakeQCK";
    /** ActionSignalIntent - Intent is set */
    Action[Action["ActionSignalIntent"] = 8] = "ActionSignalIntent";
    /** ActionQSGov - Cast governance vote on QS */
    Action[Action["ActionQSGov"] = 9] = "ActionQSGov";
    /** ActionGbP - Governance By Proxy (GbP): cast vote on remote zone */
    Action[Action["ActionGbP"] = 10] = "ActionGbP";
    /** ActionOsmosis - Provide liquidity on Osmosis */
    Action[Action["ActionOsmosis"] = 11] = "ActionOsmosis";
    Action[Action["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Action || (exports.Action = Action = {}));
exports.ActionSDKType = Action;
exports.ActionAmino = Action;
function actionFromJSON(object) {
    switch (object) {
        case 0:
        case "ActionUndefined":
            return Action.ActionUndefined;
        case 1:
        case "ActionInitialClaim":
            return Action.ActionInitialClaim;
        case 2:
        case "ActionDepositT1":
            return Action.ActionDepositT1;
        case 3:
        case "ActionDepositT2":
            return Action.ActionDepositT2;
        case 4:
        case "ActionDepositT3":
            return Action.ActionDepositT3;
        case 5:
        case "ActionDepositT4":
            return Action.ActionDepositT4;
        case 6:
        case "ActionDepositT5":
            return Action.ActionDepositT5;
        case 7:
        case "ActionStakeQCK":
            return Action.ActionStakeQCK;
        case 8:
        case "ActionSignalIntent":
            return Action.ActionSignalIntent;
        case 9:
        case "ActionQSGov":
            return Action.ActionQSGov;
        case 10:
        case "ActionGbP":
            return Action.ActionGbP;
        case 11:
        case "ActionOsmosis":
            return Action.ActionOsmosis;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Action.UNRECOGNIZED;
    }
}
exports.actionFromJSON = actionFromJSON;
function actionToJSON(object) {
    switch (object) {
        case Action.ActionUndefined:
            return "ActionUndefined";
        case Action.ActionInitialClaim:
            return "ActionInitialClaim";
        case Action.ActionDepositT1:
            return "ActionDepositT1";
        case Action.ActionDepositT2:
            return "ActionDepositT2";
        case Action.ActionDepositT3:
            return "ActionDepositT3";
        case Action.ActionDepositT4:
            return "ActionDepositT4";
        case Action.ActionDepositT5:
            return "ActionDepositT5";
        case Action.ActionStakeQCK:
            return "ActionStakeQCK";
        case Action.ActionSignalIntent:
            return "ActionSignalIntent";
        case Action.ActionQSGov:
            return "ActionQSGov";
        case Action.ActionGbP:
            return "ActionGbP";
        case Action.ActionOsmosis:
            return "ActionOsmosis";
        case Action.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.actionToJSON = actionToJSON;
/** Status is used as an enum to denote zone status. */
var Status;
(function (Status) {
    Status[Status["StatusUndefined"] = 0] = "StatusUndefined";
    Status[Status["StatusActive"] = 1] = "StatusActive";
    Status[Status["StatusFuture"] = 2] = "StatusFuture";
    Status[Status["StatusExpired"] = 3] = "StatusExpired";
    Status[Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Status || (exports.Status = Status = {}));
exports.StatusSDKType = Status;
exports.StatusAmino = Status;
function statusFromJSON(object) {
    switch (object) {
        case 0:
        case "StatusUndefined":
            return Status.StatusUndefined;
        case 1:
        case "StatusActive":
            return Status.StatusActive;
        case 2:
        case "StatusFuture":
            return Status.StatusFuture;
        case 3:
        case "StatusExpired":
            return Status.StatusExpired;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Status.UNRECOGNIZED;
    }
}
exports.statusFromJSON = statusFromJSON;
function statusToJSON(object) {
    switch (object) {
        case Status.StatusUndefined:
            return "StatusUndefined";
        case Status.StatusActive:
            return "StatusActive";
        case Status.StatusFuture:
            return "StatusFuture";
        case Status.StatusExpired:
            return "StatusExpired";
        case Status.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.statusToJSON = statusToJSON;
function createBaseZoneDrop() {
    return {
        chainId: "",
        startTime: new Date(),
        duration: duration_1.Duration.fromPartial({}),
        decay: duration_1.Duration.fromPartial({}),
        allocation: helpers_1.Long.UZERO,
        actions: [],
        isConcluded: false
    };
}
exports.ZoneDrop = {
    typeUrl: "/quicksilver.airdrop.v1.ZoneDrop",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.startTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
        }
        if (message.decay !== undefined) {
            duration_1.Duration.encode(message.decay, writer.uint32(34).fork()).ldelim();
        }
        if (!message.allocation.isZero()) {
            writer.uint32(40).uint64(message.allocation);
        }
        for (const v of message.actions) {
            writer.uint32(50).string(v);
        }
        if (message.isConcluded === true) {
            writer.uint32(56).bool(message.isConcluded);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseZoneDrop();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.startTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.decay = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.allocation = reader.uint64();
                    break;
                case 6:
                    message.actions.push(reader.string());
                    break;
                case 7:
                    message.isConcluded = reader.bool();
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
            startTime: (0, helpers_1.isSet)(object.startTime) ? (0, helpers_1.fromJsonTimestamp)(object.startTime) : undefined,
            duration: (0, helpers_1.isSet)(object.duration) ? duration_1.Duration.fromJSON(object.duration) : undefined,
            decay: (0, helpers_1.isSet)(object.decay) ? duration_1.Duration.fromJSON(object.decay) : undefined,
            allocation: (0, helpers_1.isSet)(object.allocation) ? helpers_1.Long.fromValue(object.allocation) : helpers_1.Long.UZERO,
            actions: Array.isArray(object?.actions) ? object.actions.map((e) => String(e)) : [],
            isConcluded: (0, helpers_1.isSet)(object.isConcluded) ? Boolean(object.isConcluded) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        message.decay !== undefined && (obj.decay = message.decay ? duration_1.Duration.toJSON(message.decay) : undefined);
        message.allocation !== undefined && (obj.allocation = (message.allocation || helpers_1.Long.UZERO).toString());
        if (message.actions) {
            obj.actions = message.actions.map(e => e);
        }
        else {
            obj.actions = [];
        }
        message.isConcluded !== undefined && (obj.isConcluded = message.isConcluded);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseZoneDrop();
        message.chainId = object.chainId ?? "";
        message.startTime = object.startTime ?? undefined;
        message.duration = object.duration !== undefined && object.duration !== null ? duration_1.Duration.fromPartial(object.duration) : undefined;
        message.decay = object.decay !== undefined && object.decay !== null ? duration_1.Duration.fromPartial(object.decay) : undefined;
        message.allocation = object.allocation !== undefined && object.allocation !== null ? helpers_1.Long.fromValue(object.allocation) : helpers_1.Long.UZERO;
        message.actions = object.actions?.map(e => e) || [];
        message.isConcluded = object.isConcluded ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            chainId: object.chain_id,
            startTime: object.start_time,
            duration: object?.duration ? duration_1.Duration.fromAmino(object.duration) : undefined,
            decay: object?.decay ? duration_1.Duration.fromAmino(object.decay) : undefined,
            allocation: helpers_1.Long.fromString(object.allocation),
            actions: Array.isArray(object?.actions) ? object.actions.map((e) => e) : [],
            isConcluded: object.is_concluded
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        obj.start_time = message.startTime;
        obj.duration = message.duration ? duration_1.Duration.toAmino(message.duration) : undefined;
        obj.decay = message.decay ? duration_1.Duration.toAmino(message.decay) : undefined;
        obj.allocation = message.allocation ? message.allocation.toString() : undefined;
        if (message.actions) {
            obj.actions = message.actions.map(e => e);
        }
        else {
            obj.actions = [];
        }
        obj.is_concluded = message.isConcluded;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ZoneDrop.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ZoneDrop.decode(message.value);
    },
    toProto(message) {
        return exports.ZoneDrop.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.ZoneDrop",
            value: exports.ZoneDrop.encode(message).finish()
        };
    }
};
function createBaseClaimRecord_ActionsCompletedEntry() {
    return {
        key: 0,
        value: exports.CompletedAction.fromPartial({})
    };
}
exports.ClaimRecord_ActionsCompletedEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== 0) {
            writer.uint32(8).int32(message.key);
        }
        if (message.value !== undefined) {
            exports.CompletedAction.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClaimRecord_ActionsCompletedEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.int32();
                    break;
                case 2:
                    message.value = exports.CompletedAction.decode(reader, reader.uint32());
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
            key: (0, helpers_1.isSet)(object.key) ? Number(object.key) : 0,
            value: (0, helpers_1.isSet)(object.value) ? exports.CompletedAction.fromJSON(object.value) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = Math.round(message.key));
        message.value !== undefined && (obj.value = message.value ? exports.CompletedAction.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClaimRecord_ActionsCompletedEntry();
        message.key = object.key ?? 0;
        message.value = object.value !== undefined && object.value !== null ? exports.CompletedAction.fromPartial(object.value) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            key: object.key,
            value: object?.value ? exports.CompletedAction.fromAmino(object.value) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value ? exports.CompletedAction.toAmino(message.value) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ClaimRecord_ActionsCompletedEntry.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ClaimRecord_ActionsCompletedEntry.decode(message.value);
    },
    toProto(message) {
        return exports.ClaimRecord_ActionsCompletedEntry.encode(message).finish();
    }
};
function createBaseClaimRecord() {
    return {
        chainId: "",
        address: "",
        actionsCompleted: {},
        maxAllocation: helpers_1.Long.UZERO,
        baseValue: helpers_1.Long.UZERO
    };
}
exports.ClaimRecord = {
    typeUrl: "/quicksilver.airdrop.v1.ClaimRecord",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        Object.entries(message.actionsCompleted).forEach(([key, value]) => {
            exports.ClaimRecord_ActionsCompletedEntry.encode({
                key: key,
                value
            }, writer.uint32(26).fork()).ldelim();
        });
        if (!message.maxAllocation.isZero()) {
            writer.uint32(32).uint64(message.maxAllocation);
        }
        if (!message.baseValue.isZero()) {
            writer.uint32(40).uint64(message.baseValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClaimRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    const entry3 = exports.ClaimRecord_ActionsCompletedEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.actionsCompleted[entry3.key] = entry3.value;
                    }
                    break;
                case 4:
                    message.maxAllocation = reader.uint64();
                    break;
                case 5:
                    message.baseValue = reader.uint64();
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            actionsCompleted: (0, helpers_1.isObject)(object.actionsCompleted) ? Object.entries(object.actionsCompleted).reduce((acc, [key, value]) => {
                acc[Number(key)] = exports.CompletedAction.fromJSON(value);
                return acc;
            }, {}) : {},
            maxAllocation: (0, helpers_1.isSet)(object.maxAllocation) ? helpers_1.Long.fromValue(object.maxAllocation) : helpers_1.Long.UZERO,
            baseValue: (0, helpers_1.isSet)(object.baseValue) ? helpers_1.Long.fromValue(object.baseValue) : helpers_1.Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.address !== undefined && (obj.address = message.address);
        obj.actionsCompleted = {};
        if (message.actionsCompleted) {
            Object.entries(message.actionsCompleted).forEach(([k, v]) => {
                obj.actionsCompleted[k] = exports.CompletedAction.toJSON(v);
            });
        }
        message.maxAllocation !== undefined && (obj.maxAllocation = (message.maxAllocation || helpers_1.Long.UZERO).toString());
        message.baseValue !== undefined && (obj.baseValue = (message.baseValue || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClaimRecord();
        message.chainId = object.chainId ?? "";
        message.address = object.address ?? "";
        message.actionsCompleted = Object.entries(object.actionsCompleted ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[Number(key)] = exports.CompletedAction.fromPartial(value);
            }
            return acc;
        }, {});
        message.maxAllocation = object.maxAllocation !== undefined && object.maxAllocation !== null ? helpers_1.Long.fromValue(object.maxAllocation) : helpers_1.Long.UZERO;
        message.baseValue = object.baseValue !== undefined && object.baseValue !== null ? helpers_1.Long.fromValue(object.baseValue) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            chainId: object.chain_id,
            address: object.address,
            actionsCompleted: (0, helpers_1.isObject)(object.actions_completed) ? Object.entries(object.actions_completed).reduce((acc, [key, value]) => {
                acc[Number(key)] = exports.CompletedAction.fromAmino(value);
                return acc;
            }, {}) : {},
            maxAllocation: helpers_1.Long.fromString(object.max_allocation),
            baseValue: helpers_1.Long.fromString(object.base_value)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        obj.address = message.address;
        obj.actions_completed = {};
        if (message.actionsCompleted) {
            Object.entries(message.actionsCompleted).forEach(([k, v]) => {
                obj.actions_completed[k] = exports.CompletedAction.toAmino(v);
            });
        }
        obj.max_allocation = message.maxAllocation ? message.maxAllocation.toString() : undefined;
        obj.base_value = message.baseValue ? message.baseValue.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ClaimRecord.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ClaimRecord.decode(message.value);
    },
    toProto(message) {
        return exports.ClaimRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.ClaimRecord",
            value: exports.ClaimRecord.encode(message).finish()
        };
    }
};
function createBaseCompletedAction() {
    return {
        completeTime: new Date(),
        claimAmount: helpers_1.Long.UZERO
    };
}
exports.CompletedAction = {
    typeUrl: "/quicksilver.airdrop.v1.CompletedAction",
    encode(message, writer = _m0.Writer.create()) {
        if (message.completeTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.completeTime), writer.uint32(10).fork()).ldelim();
        }
        if (!message.claimAmount.isZero()) {
            writer.uint32(16).uint64(message.claimAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompletedAction();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.completeTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.claimAmount = reader.uint64();
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
            completeTime: (0, helpers_1.isSet)(object.completeTime) ? (0, helpers_1.fromJsonTimestamp)(object.completeTime) : undefined,
            claimAmount: (0, helpers_1.isSet)(object.claimAmount) ? helpers_1.Long.fromValue(object.claimAmount) : helpers_1.Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.completeTime !== undefined && (obj.completeTime = message.completeTime.toISOString());
        message.claimAmount !== undefined && (obj.claimAmount = (message.claimAmount || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCompletedAction();
        message.completeTime = object.completeTime ?? undefined;
        message.claimAmount = object.claimAmount !== undefined && object.claimAmount !== null ? helpers_1.Long.fromValue(object.claimAmount) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            completeTime: object.complete_time,
            claimAmount: helpers_1.Long.fromString(object.claim_amount)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.complete_time = message.completeTime;
        obj.claim_amount = message.claimAmount ? message.claimAmount.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CompletedAction.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.CompletedAction.decode(message.value);
    },
    toProto(message) {
        return exports.CompletedAction.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.CompletedAction",
            value: exports.CompletedAction.encode(message).finish()
        };
    }
};
//# sourceMappingURL=airdrop.js.map