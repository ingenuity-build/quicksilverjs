import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export var ProtocolDataType;
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
})(ProtocolDataType || (ProtocolDataType = {}));
export const ProtocolDataTypeSDKType = ProtocolDataType;
export const ProtocolDataTypeAmino = ProtocolDataType;
export function protocolDataTypeFromJSON(object) {
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
export function protocolDataTypeToJSON(object) {
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
function createBaseDistributionProportions() {
    return {
        validator_selection_allocation: "",
        holdings_allocation: "",
        lockup_allocation: ""
    };
}
export const DistributionProportions = {
    typeUrl: "/quicksilver.participationrewards.v1.DistributionProportions",
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator_selection_allocation !== "") {
            writer.uint32(10).string(message.validator_selection_allocation);
        }
        if (message.holdings_allocation !== "") {
            writer.uint32(18).string(message.holdings_allocation);
        }
        if (message.lockup_allocation !== "") {
            writer.uint32(26).string(message.lockup_allocation);
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
                    message.validator_selection_allocation = reader.string();
                    break;
                case 2:
                    message.holdings_allocation = reader.string();
                    break;
                case 3:
                    message.lockup_allocation = reader.string();
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
            validator_selection_allocation: isSet(object.validator_selection_allocation) ? String(object.validator_selection_allocation) : "",
            holdings_allocation: isSet(object.holdings_allocation) ? String(object.holdings_allocation) : "",
            lockup_allocation: isSet(object.lockup_allocation) ? String(object.lockup_allocation) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_selection_allocation !== undefined && (obj.validator_selection_allocation = message.validator_selection_allocation);
        message.holdings_allocation !== undefined && (obj.holdings_allocation = message.holdings_allocation);
        message.lockup_allocation !== undefined && (obj.lockup_allocation = message.lockup_allocation);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDistributionProportions();
        message.validator_selection_allocation = object.validator_selection_allocation ?? "";
        message.holdings_allocation = object.holdings_allocation ?? "";
        message.lockup_allocation = object.lockup_allocation ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            validator_selection_allocation: object.validator_selection_allocation,
            holdings_allocation: object.holdings_allocation,
            lockup_allocation: object.lockup_allocation
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_selection_allocation = message.validator_selection_allocation;
        obj.holdings_allocation = message.holdings_allocation;
        obj.lockup_allocation = message.lockup_allocation;
        return obj;
    },
    fromAminoMsg(object) {
        return DistributionProportions.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return DistributionProportions.decode(message.value);
    },
    toProto(message) {
        return DistributionProportions.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.participationrewards.v1.DistributionProportions",
            value: DistributionProportions.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        distribution_proportions: DistributionProportions.fromPartial({}),
        claims_enabled: false
    };
}
export const Params = {
    typeUrl: "/quicksilver.participationrewards.v1.Params",
    encode(message, writer = _m0.Writer.create()) {
        if (message.distribution_proportions !== undefined) {
            DistributionProportions.encode(message.distribution_proportions, writer.uint32(10).fork()).ldelim();
        }
        if (message.claims_enabled === true) {
            writer.uint32(16).bool(message.claims_enabled);
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
                    message.distribution_proportions = DistributionProportions.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.claims_enabled = reader.bool();
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
            distribution_proportions: isSet(object.distribution_proportions) ? DistributionProportions.fromJSON(object.distribution_proportions) : undefined,
            claims_enabled: isSet(object.claims_enabled) ? Boolean(object.claims_enabled) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.distribution_proportions !== undefined && (obj.distribution_proportions = message.distribution_proportions ? DistributionProportions.toJSON(message.distribution_proportions) : undefined);
        message.claims_enabled !== undefined && (obj.claims_enabled = message.claims_enabled);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.distribution_proportions = object.distribution_proportions !== undefined && object.distribution_proportions !== null ? DistributionProportions.fromPartial(object.distribution_proportions) : undefined;
        message.claims_enabled = object.claims_enabled ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            distribution_proportions: object?.distribution_proportions ? DistributionProportions.fromAmino(object.distribution_proportions) : undefined,
            claims_enabled: object.claims_enabled
        };
    },
    toAmino(message) {
        const obj = {};
        obj.distribution_proportions = message.distribution_proportions ? DistributionProportions.toAmino(message.distribution_proportions) : undefined;
        obj.claims_enabled = message.claims_enabled;
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
            typeUrl: "/quicksilver.participationrewards.v1.Params",
            value: Params.encode(message).finish()
        };
    }
};
function createBaseKeyedProtocolData() {
    return {
        key: "",
        protocol_data: ProtocolData.fromPartial({})
    };
}
export const KeyedProtocolData = {
    typeUrl: "/quicksilver.participationrewards.v1.KeyedProtocolData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.protocol_data !== undefined) {
            ProtocolData.encode(message.protocol_data, writer.uint32(18).fork()).ldelim();
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
                    message.protocol_data = ProtocolData.decode(reader, reader.uint32());
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
            protocol_data: isSet(object.protocol_data) ? ProtocolData.fromJSON(object.protocol_data) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.protocol_data !== undefined && (obj.protocol_data = message.protocol_data ? ProtocolData.toJSON(message.protocol_data) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseKeyedProtocolData();
        message.key = object.key ?? "";
        message.protocol_data = object.protocol_data !== undefined && object.protocol_data !== null ? ProtocolData.fromPartial(object.protocol_data) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            key: object.key,
            protocol_data: object?.protocol_data ? ProtocolData.fromAmino(object.protocol_data) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.protocol_data = message.protocol_data ? ProtocolData.toAmino(message.protocol_data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return KeyedProtocolData.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return KeyedProtocolData.decode(message.value);
    },
    toProto(message) {
        return KeyedProtocolData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.participationrewards.v1.KeyedProtocolData",
            value: KeyedProtocolData.encode(message).finish()
        };
    }
};
function createBaseProtocolData() {
    return {
        type: "",
        data: new Uint8Array()
    };
}
export const ProtocolData = {
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
            type: isSet(object.type) ? String(object.type) : "",
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
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
        return ProtocolData.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ProtocolData.decode(message.value);
    },
    toProto(message) {
        return ProtocolData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.participationrewards.v1.ProtocolData",
            value: ProtocolData.encode(message).finish()
        };
    }
};
//# sourceMappingURL=participationrewards.js.map