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
exports.ProtocolData = exports.KeyedProtocolData = exports.Params = exports.DistributionProportions = exports.protocolDataTypeToJSON = exports.protocolDataTypeFromJSON = exports.ProtocolDataTypeAmino = exports.ProtocolDataTypeSDKType = exports.ProtocolDataType = void 0;
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../../helpers");
var ProtocolDataType;
(function (ProtocolDataType) {
    /** ProtocolDataTypeUndefined - Undefined action (per protobuf spec) */
    ProtocolDataType[ProtocolDataType["ProtocolDataTypeUndefined"] = 0] = "ProtocolDataTypeUndefined";
    ProtocolDataType[ProtocolDataType["ProtocolDataTypeConnection"] = 1] = "ProtocolDataTypeConnection";
    ProtocolDataType[ProtocolDataType["ProtocolDataTypeOsmosisParams"] = 2] = "ProtocolDataTypeOsmosisParams";
    ProtocolDataType[ProtocolDataType["ProtocolDataTypeLiquidToken"] = 3] = "ProtocolDataTypeLiquidToken";
    ProtocolDataType[ProtocolDataType["ProtocolDataTypeOsmosisPool"] = 4] = "ProtocolDataTypeOsmosisPool";
    ProtocolDataType[ProtocolDataType["ProtocolDataTypeCrescentPool"] = 5] = "ProtocolDataTypeCrescentPool";
    ProtocolDataType[ProtocolDataType["ProtocolDataTypeSifchainPool"] = 6] = "ProtocolDataTypeSifchainPool";
    ProtocolDataType[ProtocolDataType["ProtocolDataTypeUmeeParams"] = 7] = "ProtocolDataTypeUmeeParams";
    ProtocolDataType[ProtocolDataType["ProtocolDataTypeUmeeReserves"] = 8] = "ProtocolDataTypeUmeeReserves";
    ProtocolDataType[ProtocolDataType["ProtocolDataTypeUmeeInterestScalar"] = 9] = "ProtocolDataTypeUmeeInterestScalar";
    ProtocolDataType[ProtocolDataType["ProtocolDataTypeUmeeTotalBorrows"] = 10] = "ProtocolDataTypeUmeeTotalBorrows";
    ProtocolDataType[ProtocolDataType["ProtocolDataTypeUmeeUTokenSupply"] = 11] = "ProtocolDataTypeUmeeUTokenSupply";
    ProtocolDataType[ProtocolDataType["ProtocolDataTypeUmeeLeverageModuleBalance"] = 12] = "ProtocolDataTypeUmeeLeverageModuleBalance";
    ProtocolDataType[ProtocolDataType["ProtocolDataTypeCrescentParams"] = 13] = "ProtocolDataTypeCrescentParams";
    ProtocolDataType[ProtocolDataType["ProtocolDataTypeCrescentReserveAddressBalance"] = 14] = "ProtocolDataTypeCrescentReserveAddressBalance";
    ProtocolDataType[ProtocolDataType["ProtocolDataTypeCrescentPoolCoinSupply"] = 15] = "ProtocolDataTypeCrescentPoolCoinSupply";
    ProtocolDataType[ProtocolDataType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProtocolDataType || (exports.ProtocolDataType = ProtocolDataType = {}));
exports.ProtocolDataTypeSDKType = ProtocolDataType;
exports.ProtocolDataTypeAmino = ProtocolDataType;
function protocolDataTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "ProtocolDataTypeUndefined":
            return ProtocolDataType.ProtocolDataTypeUndefined;
        case 1:
        case "ProtocolDataTypeConnection":
            return ProtocolDataType.ProtocolDataTypeConnection;
        case 2:
        case "ProtocolDataTypeOsmosisParams":
            return ProtocolDataType.ProtocolDataTypeOsmosisParams;
        case 3:
        case "ProtocolDataTypeLiquidToken":
            return ProtocolDataType.ProtocolDataTypeLiquidToken;
        case 4:
        case "ProtocolDataTypeOsmosisPool":
            return ProtocolDataType.ProtocolDataTypeOsmosisPool;
        case 5:
        case "ProtocolDataTypeCrescentPool":
            return ProtocolDataType.ProtocolDataTypeCrescentPool;
        case 6:
        case "ProtocolDataTypeSifchainPool":
            return ProtocolDataType.ProtocolDataTypeSifchainPool;
        case 7:
        case "ProtocolDataTypeUmeeParams":
            return ProtocolDataType.ProtocolDataTypeUmeeParams;
        case 8:
        case "ProtocolDataTypeUmeeReserves":
            return ProtocolDataType.ProtocolDataTypeUmeeReserves;
        case 9:
        case "ProtocolDataTypeUmeeInterestScalar":
            return ProtocolDataType.ProtocolDataTypeUmeeInterestScalar;
        case 10:
        case "ProtocolDataTypeUmeeTotalBorrows":
            return ProtocolDataType.ProtocolDataTypeUmeeTotalBorrows;
        case 11:
        case "ProtocolDataTypeUmeeUTokenSupply":
            return ProtocolDataType.ProtocolDataTypeUmeeUTokenSupply;
        case 12:
        case "ProtocolDataTypeUmeeLeverageModuleBalance":
            return ProtocolDataType.ProtocolDataTypeUmeeLeverageModuleBalance;
        case 13:
        case "ProtocolDataTypeCrescentParams":
            return ProtocolDataType.ProtocolDataTypeCrescentParams;
        case 14:
        case "ProtocolDataTypeCrescentReserveAddressBalance":
            return ProtocolDataType.ProtocolDataTypeCrescentReserveAddressBalance;
        case 15:
        case "ProtocolDataTypeCrescentPoolCoinSupply":
            return ProtocolDataType.ProtocolDataTypeCrescentPoolCoinSupply;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ProtocolDataType.UNRECOGNIZED;
    }
}
exports.protocolDataTypeFromJSON = protocolDataTypeFromJSON;
function protocolDataTypeToJSON(object) {
    switch (object) {
        case ProtocolDataType.ProtocolDataTypeUndefined:
            return "ProtocolDataTypeUndefined";
        case ProtocolDataType.ProtocolDataTypeConnection:
            return "ProtocolDataTypeConnection";
        case ProtocolDataType.ProtocolDataTypeOsmosisParams:
            return "ProtocolDataTypeOsmosisParams";
        case ProtocolDataType.ProtocolDataTypeLiquidToken:
            return "ProtocolDataTypeLiquidToken";
        case ProtocolDataType.ProtocolDataTypeOsmosisPool:
            return "ProtocolDataTypeOsmosisPool";
        case ProtocolDataType.ProtocolDataTypeCrescentPool:
            return "ProtocolDataTypeCrescentPool";
        case ProtocolDataType.ProtocolDataTypeSifchainPool:
            return "ProtocolDataTypeSifchainPool";
        case ProtocolDataType.ProtocolDataTypeUmeeParams:
            return "ProtocolDataTypeUmeeParams";
        case ProtocolDataType.ProtocolDataTypeUmeeReserves:
            return "ProtocolDataTypeUmeeReserves";
        case ProtocolDataType.ProtocolDataTypeUmeeInterestScalar:
            return "ProtocolDataTypeUmeeInterestScalar";
        case ProtocolDataType.ProtocolDataTypeUmeeTotalBorrows:
            return "ProtocolDataTypeUmeeTotalBorrows";
        case ProtocolDataType.ProtocolDataTypeUmeeUTokenSupply:
            return "ProtocolDataTypeUmeeUTokenSupply";
        case ProtocolDataType.ProtocolDataTypeUmeeLeverageModuleBalance:
            return "ProtocolDataTypeUmeeLeverageModuleBalance";
        case ProtocolDataType.ProtocolDataTypeCrescentParams:
            return "ProtocolDataTypeCrescentParams";
        case ProtocolDataType.ProtocolDataTypeCrescentReserveAddressBalance:
            return "ProtocolDataTypeCrescentReserveAddressBalance";
        case ProtocolDataType.ProtocolDataTypeCrescentPoolCoinSupply:
            return "ProtocolDataTypeCrescentPoolCoinSupply";
        case ProtocolDataType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.protocolDataTypeToJSON = protocolDataTypeToJSON;
function createBaseDistributionProportions() {
    return {
        validatorSelectionAllocation: "",
        holdingsAllocation: "",
        lockupAllocation: ""
    };
}
exports.DistributionProportions = {
    typeUrl: "/quicksilver.participationrewards.v1.DistributionProportions",
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorSelectionAllocation !== "") {
            writer.uint32(10).string(message.validatorSelectionAllocation);
        }
        if (message.holdingsAllocation !== "") {
            writer.uint32(18).string(message.holdingsAllocation);
        }
        if (message.lockupAllocation !== "") {
            writer.uint32(26).string(message.lockupAllocation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDistributionProportions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorSelectionAllocation = reader.string();
                    break;
                case 2:
                    message.holdingsAllocation = reader.string();
                    break;
                case 3:
                    message.lockupAllocation = reader.string();
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
            validatorSelectionAllocation: (0, helpers_1.isSet)(object.validatorSelectionAllocation) ? String(object.validatorSelectionAllocation) : "",
            holdingsAllocation: (0, helpers_1.isSet)(object.holdingsAllocation) ? String(object.holdingsAllocation) : "",
            lockupAllocation: (0, helpers_1.isSet)(object.lockupAllocation) ? String(object.lockupAllocation) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorSelectionAllocation !== undefined && (obj.validatorSelectionAllocation = message.validatorSelectionAllocation);
        message.holdingsAllocation !== undefined && (obj.holdingsAllocation = message.holdingsAllocation);
        message.lockupAllocation !== undefined && (obj.lockupAllocation = message.lockupAllocation);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDistributionProportions();
        message.validatorSelectionAllocation = object.validatorSelectionAllocation ?? "";
        message.holdingsAllocation = object.holdingsAllocation ?? "";
        message.lockupAllocation = object.lockupAllocation ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            validatorSelectionAllocation: object.validator_selection_allocation,
            holdingsAllocation: object.holdings_allocation,
            lockupAllocation: object.lockup_allocation
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_selection_allocation = message.validatorSelectionAllocation;
        obj.holdings_allocation = message.holdingsAllocation;
        obj.lockup_allocation = message.lockupAllocation;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DistributionProportions.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.DistributionProportions.decode(message.value);
    },
    toProto(message) {
        return exports.DistributionProportions.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.participationrewards.v1.DistributionProportions",
            value: exports.DistributionProportions.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        distributionProportions: exports.DistributionProportions.fromPartial({}),
        claimsEnabled: false
    };
}
exports.Params = {
    typeUrl: "/quicksilver.participationrewards.v1.Params",
    encode(message, writer = _m0.Writer.create()) {
        if (message.distributionProportions !== undefined) {
            exports.DistributionProportions.encode(message.distributionProportions, writer.uint32(10).fork()).ldelim();
        }
        if (message.claimsEnabled === true) {
            writer.uint32(16).bool(message.claimsEnabled);
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
                    message.distributionProportions = exports.DistributionProportions.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.claimsEnabled = reader.bool();
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
            distributionProportions: (0, helpers_1.isSet)(object.distributionProportions) ? exports.DistributionProportions.fromJSON(object.distributionProportions) : undefined,
            claimsEnabled: (0, helpers_1.isSet)(object.claimsEnabled) ? Boolean(object.claimsEnabled) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.distributionProportions !== undefined && (obj.distributionProportions = message.distributionProportions ? exports.DistributionProportions.toJSON(message.distributionProportions) : undefined);
        message.claimsEnabled !== undefined && (obj.claimsEnabled = message.claimsEnabled);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.distributionProportions = object.distributionProportions !== undefined && object.distributionProportions !== null ? exports.DistributionProportions.fromPartial(object.distributionProportions) : undefined;
        message.claimsEnabled = object.claimsEnabled ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            distributionProportions: object?.distribution_proportions ? exports.DistributionProportions.fromAmino(object.distribution_proportions) : undefined,
            claimsEnabled: object.claims_enabled
        };
    },
    toAmino(message) {
        const obj = {};
        obj.distribution_proportions = message.distributionProportions ? exports.DistributionProportions.toAmino(message.distributionProportions) : undefined;
        obj.claims_enabled = message.claimsEnabled;
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
            typeUrl: "/quicksilver.participationrewards.v1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
function createBaseKeyedProtocolData() {
    return {
        key: "",
        protocolData: exports.ProtocolData.fromPartial({})
    };
}
exports.KeyedProtocolData = {
    typeUrl: "/quicksilver.participationrewards.v1.KeyedProtocolData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.protocolData !== undefined) {
            exports.ProtocolData.encode(message.protocolData, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKeyedProtocolData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.protocolData = exports.ProtocolData.decode(reader, reader.uint32());
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
            protocolData: (0, helpers_1.isSet)(object.protocolData) ? exports.ProtocolData.fromJSON(object.protocolData) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.protocolData !== undefined && (obj.protocolData = message.protocolData ? exports.ProtocolData.toJSON(message.protocolData) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseKeyedProtocolData();
        message.key = object.key ?? "";
        message.protocolData = object.protocolData !== undefined && object.protocolData !== null ? exports.ProtocolData.fromPartial(object.protocolData) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            key: object.key,
            protocolData: object?.protocol_data ? exports.ProtocolData.fromAmino(object.protocol_data) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.protocol_data = message.protocolData ? exports.ProtocolData.toAmino(message.protocolData) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.KeyedProtocolData.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.KeyedProtocolData.decode(message.value);
    },
    toProto(message) {
        return exports.KeyedProtocolData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.participationrewards.v1.KeyedProtocolData",
            value: exports.KeyedProtocolData.encode(message).finish()
        };
    }
};
function createBaseProtocolData() {
    return {
        type: "",
        data: new Uint8Array()
    };
}
exports.ProtocolData = {
    typeUrl: "/quicksilver.participationrewards.v1.ProtocolData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProtocolData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.data = reader.bytes();
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
            type: (0, helpers_1.isSet)(object.type) ? String(object.type) : "",
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProtocolData();
        message.type = object.type ?? "";
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            type: object.type,
            data: object.data
        };
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type;
        obj.data = message.data;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ProtocolData.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ProtocolData.decode(message.value);
    },
    toProto(message) {
        return exports.ProtocolData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.participationrewards.v1.ProtocolData",
            value: exports.ProtocolData.encode(message).finish()
        };
    }
};
//# sourceMappingURL=participationrewards.js.map