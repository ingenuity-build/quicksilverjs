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
exports.ModuleVersion = exports.CancelSoftwareUpgradeProposal = exports.SoftwareUpgradeProposal = exports.Plan = void 0;
const timestamp_1 = require("../../../google/protobuf/timestamp");
const any_1 = require("../../../google/protobuf/any");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBasePlan() {
    return {
        name: "",
        time: new Date(),
        height: helpers_1.Long.ZERO,
        info: "",
        upgraded_client_state: any_1.Any.fromPartial({})
    };
}
exports.Plan = {
    typeUrl: "/cosmos.upgrade.v1beta1.Plan",
    aminoType: "cosmos-sdk/Plan",
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.time), writer.uint32(18).fork()).ldelim();
        }
        if (!message.height.isZero()) {
            writer.uint32(24).int64(message.height);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (message.upgraded_client_state !== undefined) {
            any_1.Any.encode(message.upgraded_client_state, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlan();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.upgraded_client_state = any_1.Any.decode(reader, reader.uint32());
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
            name: (0, helpers_1.isSet)(object.name) ? String(object.name) : "",
            time: (0, helpers_1.isSet)(object.time) ? (0, helpers_1.fromJsonTimestamp)(object.time) : undefined,
            height: (0, helpers_1.isSet)(object.height) ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO,
            info: (0, helpers_1.isSet)(object.info) ? String(object.info) : "",
            upgraded_client_state: (0, helpers_1.isSet)(object.upgraded_client_state) ? any_1.Any.fromJSON(object.upgraded_client_state) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.height !== undefined && (obj.height = (message.height || helpers_1.Long.ZERO).toString());
        message.info !== undefined && (obj.info = message.info);
        message.upgraded_client_state !== undefined && (obj.upgraded_client_state = message.upgraded_client_state ? any_1.Any.toJSON(message.upgraded_client_state) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePlan();
        message.name = object.name ?? "";
        message.time = object.time ?? undefined;
        message.height = object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO;
        message.info = object.info ?? "";
        message.upgraded_client_state = object.upgraded_client_state !== undefined && object.upgraded_client_state !== null ? any_1.Any.fromPartial(object.upgraded_client_state) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            name: object.name,
            time: object.time,
            height: helpers_1.Long.fromString(object.height),
            info: object.info,
            upgraded_client_state: object?.upgraded_client_state ? any_1.Any.fromAmino(object.upgraded_client_state) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.time = message.time;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.info = message.info;
        obj.upgraded_client_state = message.upgraded_client_state ? any_1.Any.toAmino(message.upgraded_client_state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Plan.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Plan",
            value: exports.Plan.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Plan.decode(message.value);
    },
    toProto(message) {
        return exports.Plan.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.Plan",
            value: exports.Plan.encode(message).finish()
        };
    }
};
function createBaseSoftwareUpgradeProposal() {
    return {
        $typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
        title: "",
        description: "",
        plan: exports.Plan.fromPartial({})
    };
}
exports.SoftwareUpgradeProposal = {
    typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
    aminoType: "cosmos-sdk/SoftwareUpgradeProposal",
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.plan !== undefined) {
            exports.Plan.encode(message.plan, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSoftwareUpgradeProposal();
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
                    message.plan = exports.Plan.decode(reader, reader.uint32());
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
            plan: (0, helpers_1.isSet)(object.plan) ? exports.Plan.fromJSON(object.plan) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.plan !== undefined && (obj.plan = message.plan ? exports.Plan.toJSON(message.plan) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSoftwareUpgradeProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.plan = object.plan !== undefined && object.plan !== null ? exports.Plan.fromPartial(object.plan) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            plan: object?.plan ? exports.Plan.fromAmino(object.plan) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.plan = message.plan ? exports.Plan.toAmino(message.plan) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SoftwareUpgradeProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SoftwareUpgradeProposal",
            value: exports.SoftwareUpgradeProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SoftwareUpgradeProposal.decode(message.value);
    },
    toProto(message) {
        return exports.SoftwareUpgradeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
            value: exports.SoftwareUpgradeProposal.encode(message).finish()
        };
    }
};
function createBaseCancelSoftwareUpgradeProposal() {
    return {
        $typeUrl: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
        title: "",
        description: ""
    };
}
exports.CancelSoftwareUpgradeProposal = {
    typeUrl: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
    aminoType: "cosmos-sdk/CancelSoftwareUpgradeProposal",
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCancelSoftwareUpgradeProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
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
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCancelSoftwareUpgradeProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CancelSoftwareUpgradeProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CancelSoftwareUpgradeProposal",
            value: exports.CancelSoftwareUpgradeProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CancelSoftwareUpgradeProposal.decode(message.value);
    },
    toProto(message) {
        return exports.CancelSoftwareUpgradeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
            value: exports.CancelSoftwareUpgradeProposal.encode(message).finish()
        };
    }
};
function createBaseModuleVersion() {
    return {
        name: "",
        version: helpers_1.Long.UZERO
    };
}
exports.ModuleVersion = {
    typeUrl: "/cosmos.upgrade.v1beta1.ModuleVersion",
    aminoType: "cosmos-sdk/ModuleVersion",
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (!message.version.isZero()) {
            writer.uint32(16).uint64(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleVersion();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.version = reader.uint64();
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
            name: (0, helpers_1.isSet)(object.name) ? String(object.name) : "",
            version: (0, helpers_1.isSet)(object.version) ? helpers_1.Long.fromValue(object.version) : helpers_1.Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.version !== undefined && (obj.version = (message.version || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModuleVersion();
        message.name = object.name ?? "";
        message.version = object.version !== undefined && object.version !== null ? helpers_1.Long.fromValue(object.version) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            name: object.name,
            version: helpers_1.Long.fromString(object.version)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.version = message.version ? message.version.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ModuleVersion.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ModuleVersion",
            value: exports.ModuleVersion.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ModuleVersion.decode(message.value);
    },
    toProto(message) {
        return exports.ModuleVersion.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.upgrade.v1beta1.ModuleVersion",
            value: exports.ModuleVersion.encode(message).finish()
        };
    }
};
//# sourceMappingURL=upgrade.js.map