import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
export enum ProtocolDataType {
  /** ProtocolDataTypeUndefined - Undefined action (per protobuf spec) */
  ProtocolDataTypeUndefined = 0,
  ProtocolDataTypeConnection = 1,
  ProtocolDataTypeOsmosisParams = 2,
  ProtocolDataTypeLiquidToken = 3,
  ProtocolDataTypeOsmosisPool = 4,
  ProtocolDataTypeCrescentPool = 5,
  ProtocolDataTypeSifchainPool = 6,
  ProtocolDataTypeUmeeParams = 7,
  ProtocolDataTypeUmeeReserves = 8,
  ProtocolDataTypeUmeeInterestScalar = 9,
  ProtocolDataTypeUmeeTotalBorrows = 10,
  ProtocolDataTypeUmeeUTokenSupply = 11,
  ProtocolDataTypeUmeeLeverageModuleBalance = 12,
  ProtocolDataTypeCrescentParams = 13,
  ProtocolDataTypeCrescentReserveAddressBalance = 14,
  ProtocolDataTypeCrescentPoolCoinSupply = 15,
  UNRECOGNIZED = -1,
}
export const ProtocolDataTypeSDKType = ProtocolDataType;
export const ProtocolDataTypeAmino = ProtocolDataType;
export function protocolDataTypeFromJSON(object: any): ProtocolDataType {
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
export function protocolDataTypeToJSON(object: ProtocolDataType): string {
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
/**
 * DistributionProportions defines the proportions of minted QCK that is to be
 * allocated as participation rewards.
 */
export interface DistributionProportions {
  validator_selection_allocation: string;
  holdings_allocation: string;
  lockup_allocation: string;
}
export interface DistributionProportionsProtoMsg {
  type_url: "/quicksilver.participationrewards.v1.DistributionProportions";
  value: Uint8Array;
}
/**
 * DistributionProportions defines the proportions of minted QCK that is to be
 * allocated as participation rewards.
 */
export interface DistributionProportionsAmino {
  validator_selection_allocation: string;
  holdings_allocation: string;
  lockup_allocation: string;
}
export interface DistributionProportionsAminoMsg {
  type: "/quicksilver.participationrewards.v1.DistributionProportions";
  value: DistributionProportionsAmino;
}
/**
 * DistributionProportions defines the proportions of minted QCK that is to be
 * allocated as participation rewards.
 */
export interface DistributionProportionsSDKType {
  validator_selection_allocation: string;
  holdings_allocation: string;
  lockup_allocation: string;
}
/** Params holds parameters for the participationrewards module. */
export interface Params {
  /**
   * distribution_proportions defines the proportions of the minted
   * participation rewards;
   */
  distribution_proportions: DistributionProportions;
  claims_enabled: boolean;
}
export interface ParamsProtoMsg {
  type_url: "/quicksilver.participationrewards.v1.Params";
  value: Uint8Array;
}
/** Params holds parameters for the participationrewards module. */
export interface ParamsAmino {
  /**
   * distribution_proportions defines the proportions of the minted
   * participation rewards;
   */
  distribution_proportions?: DistributionProportionsAmino;
  claims_enabled: boolean;
}
export interface ParamsAminoMsg {
  type: "/quicksilver.participationrewards.v1.Params";
  value: ParamsAmino;
}
/** Params holds parameters for the participationrewards module. */
export interface ParamsSDKType {
  distribution_proportions: DistributionProportionsSDKType;
  claims_enabled: boolean;
}
export interface KeyedProtocolData {
  key: string;
  protocol_data: ProtocolData;
}
export interface KeyedProtocolDataProtoMsg {
  type_url: "/quicksilver.participationrewards.v1.KeyedProtocolData";
  value: Uint8Array;
}
export interface KeyedProtocolDataAmino {
  key: string;
  protocol_data?: ProtocolDataAmino;
}
export interface KeyedProtocolDataAminoMsg {
  type: "/quicksilver.participationrewards.v1.KeyedProtocolData";
  value: KeyedProtocolDataAmino;
}
export interface KeyedProtocolDataSDKType {
  key: string;
  protocol_data: ProtocolDataSDKType;
}
/**
 * Protocol Data is an arbitrary data type held against a given zone for the
 * determination of rewards.
 */
export interface ProtocolData {
  type: string;
  data: Uint8Array;
}
export interface ProtocolDataProtoMsg {
  type_url: "/quicksilver.participationrewards.v1.ProtocolData";
  value: Uint8Array;
}
/**
 * Protocol Data is an arbitrary data type held against a given zone for the
 * determination of rewards.
 */
export interface ProtocolDataAmino {
  type: string;
  data: Uint8Array;
}
export interface ProtocolDataAminoMsg {
  type: "/quicksilver.participationrewards.v1.ProtocolData";
  value: ProtocolDataAmino;
}
/**
 * Protocol Data is an arbitrary data type held against a given zone for the
 * determination of rewards.
 */
export interface ProtocolDataSDKType {
  type: string;
  data: Uint8Array;
}
function createBaseDistributionProportions(): DistributionProportions {
  return {
    validator_selection_allocation: "",
    holdings_allocation: "",
    lockup_allocation: ""
  };
}
export const DistributionProportions = {
  typeUrl: "/quicksilver.participationrewards.v1.DistributionProportions",
  encode(message: DistributionProportions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): DistributionProportions {
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
  fromJSON(object: any): DistributionProportions {
    return {
      validator_selection_allocation: isSet(object.validator_selection_allocation) ? String(object.validator_selection_allocation) : "",
      holdings_allocation: isSet(object.holdings_allocation) ? String(object.holdings_allocation) : "",
      lockup_allocation: isSet(object.lockup_allocation) ? String(object.lockup_allocation) : ""
    };
  },
  toJSON(message: DistributionProportions): unknown {
    const obj: any = {};
    message.validator_selection_allocation !== undefined && (obj.validator_selection_allocation = message.validator_selection_allocation);
    message.holdings_allocation !== undefined && (obj.holdings_allocation = message.holdings_allocation);
    message.lockup_allocation !== undefined && (obj.lockup_allocation = message.lockup_allocation);
    return obj;
  },
  fromPartial(object: DeepPartial<DistributionProportions>): DistributionProportions {
    const message = createBaseDistributionProportions();
    message.validator_selection_allocation = object.validator_selection_allocation ?? "";
    message.holdings_allocation = object.holdings_allocation ?? "";
    message.lockup_allocation = object.lockup_allocation ?? "";
    return message;
  },
  fromAmino(object: DistributionProportionsAmino): DistributionProportions {
    return {
      validator_selection_allocation: object.validator_selection_allocation,
      holdings_allocation: object.holdings_allocation,
      lockup_allocation: object.lockup_allocation
    };
  },
  toAmino(message: DistributionProportions): DistributionProportionsAmino {
    const obj: any = {};
    obj.validator_selection_allocation = message.validator_selection_allocation;
    obj.holdings_allocation = message.holdings_allocation;
    obj.lockup_allocation = message.lockup_allocation;
    return obj;
  },
  fromAminoMsg(object: DistributionProportionsAminoMsg): DistributionProportions {
    return DistributionProportions.fromAmino(object.value);
  },
  fromProtoMsg(message: DistributionProportionsProtoMsg): DistributionProportions {
    return DistributionProportions.decode(message.value);
  },
  toProto(message: DistributionProportions): Uint8Array {
    return DistributionProportions.encode(message).finish();
  },
  toProtoMsg(message: DistributionProportions): DistributionProportionsProtoMsg {
    return {
      typeUrl: "/quicksilver.participationrewards.v1.DistributionProportions",
      value: DistributionProportions.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    distribution_proportions: DistributionProportions.fromPartial({}),
    claims_enabled: false
  };
}
export const Params = {
  typeUrl: "/quicksilver.participationrewards.v1.Params",
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.distribution_proportions !== undefined) {
      DistributionProportions.encode(message.distribution_proportions, writer.uint32(10).fork()).ldelim();
    }
    if (message.claims_enabled === true) {
      writer.uint32(16).bool(message.claims_enabled);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
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
  fromJSON(object: any): Params {
    return {
      distribution_proportions: isSet(object.distribution_proportions) ? DistributionProportions.fromJSON(object.distribution_proportions) : undefined,
      claims_enabled: isSet(object.claims_enabled) ? Boolean(object.claims_enabled) : false
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.distribution_proportions !== undefined && (obj.distribution_proportions = message.distribution_proportions ? DistributionProportions.toJSON(message.distribution_proportions) : undefined);
    message.claims_enabled !== undefined && (obj.claims_enabled = message.claims_enabled);
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.distribution_proportions = object.distribution_proportions !== undefined && object.distribution_proportions !== null ? DistributionProportions.fromPartial(object.distribution_proportions) : undefined;
    message.claims_enabled = object.claims_enabled ?? false;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      distribution_proportions: object?.distribution_proportions ? DistributionProportions.fromAmino(object.distribution_proportions) : undefined,
      claims_enabled: object.claims_enabled
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.distribution_proportions = message.distribution_proportions ? DistributionProportions.toAmino(message.distribution_proportions) : undefined;
    obj.claims_enabled = message.claims_enabled;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/quicksilver.participationrewards.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseKeyedProtocolData(): KeyedProtocolData {
  return {
    key: "",
    protocol_data: ProtocolData.fromPartial({})
  };
}
export const KeyedProtocolData = {
  typeUrl: "/quicksilver.participationrewards.v1.KeyedProtocolData",
  encode(message: KeyedProtocolData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.protocol_data !== undefined) {
      ProtocolData.encode(message.protocol_data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): KeyedProtocolData {
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
  fromJSON(object: any): KeyedProtocolData {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      protocol_data: isSet(object.protocol_data) ? ProtocolData.fromJSON(object.protocol_data) : undefined
    };
  },
  toJSON(message: KeyedProtocolData): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.protocol_data !== undefined && (obj.protocol_data = message.protocol_data ? ProtocolData.toJSON(message.protocol_data) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<KeyedProtocolData>): KeyedProtocolData {
    const message = createBaseKeyedProtocolData();
    message.key = object.key ?? "";
    message.protocol_data = object.protocol_data !== undefined && object.protocol_data !== null ? ProtocolData.fromPartial(object.protocol_data) : undefined;
    return message;
  },
  fromAmino(object: KeyedProtocolDataAmino): KeyedProtocolData {
    return {
      key: object.key,
      protocol_data: object?.protocol_data ? ProtocolData.fromAmino(object.protocol_data) : undefined
    };
  },
  toAmino(message: KeyedProtocolData): KeyedProtocolDataAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.protocol_data = message.protocol_data ? ProtocolData.toAmino(message.protocol_data) : undefined;
    return obj;
  },
  fromAminoMsg(object: KeyedProtocolDataAminoMsg): KeyedProtocolData {
    return KeyedProtocolData.fromAmino(object.value);
  },
  fromProtoMsg(message: KeyedProtocolDataProtoMsg): KeyedProtocolData {
    return KeyedProtocolData.decode(message.value);
  },
  toProto(message: KeyedProtocolData): Uint8Array {
    return KeyedProtocolData.encode(message).finish();
  },
  toProtoMsg(message: KeyedProtocolData): KeyedProtocolDataProtoMsg {
    return {
      typeUrl: "/quicksilver.participationrewards.v1.KeyedProtocolData",
      value: KeyedProtocolData.encode(message).finish()
    };
  }
};
function createBaseProtocolData(): ProtocolData {
  return {
    type: "",
    data: new Uint8Array()
  };
}
export const ProtocolData = {
  typeUrl: "/quicksilver.participationrewards.v1.ProtocolData",
  encode(message: ProtocolData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ProtocolData {
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
  fromJSON(object: any): ProtocolData {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message: ProtocolData): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<ProtocolData>): ProtocolData {
    const message = createBaseProtocolData();
    message.type = object.type ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ProtocolDataAmino): ProtocolData {
    return {
      type: object.type,
      data: object.data
    };
  },
  toAmino(message: ProtocolData): ProtocolDataAmino {
    const obj: any = {};
    obj.type = message.type;
    obj.data = message.data;
    return obj;
  },
  fromAminoMsg(object: ProtocolDataAminoMsg): ProtocolData {
    return ProtocolData.fromAmino(object.value);
  },
  fromProtoMsg(message: ProtocolDataProtoMsg): ProtocolData {
    return ProtocolData.decode(message.value);
  },
  toProto(message: ProtocolData): Uint8Array {
    return ProtocolData.encode(message).finish();
  },
  toProtoMsg(message: ProtocolData): ProtocolDataProtoMsg {
    return {
      typeUrl: "/quicksilver.participationrewards.v1.ProtocolData",
      value: ProtocolData.encode(message).finish()
    };
  }
};