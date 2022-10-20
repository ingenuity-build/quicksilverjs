import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export enum ProtocolDataType {
  /** ProtocolDataTypeUndefined - Undefined action (per protobuf spec) */
  ProtocolDataTypeUndefined = 0,
  ProtocolDataTypeConnection = 1,
  ProtocolDataTypeOsmosisParams = 2,
  ProtocolDataTypeLiquidToken = 3,
  ProtocolDataTypeOsmosisPool = 4,
  ProtocolDataTypeCrescentPool = 5,
  ProtocolDataTypeSifchainPool = 6,
  UNRECOGNIZED = -1,
}
export enum ProtocolDataTypeSDKType {
  /** ProtocolDataTypeUndefined - Undefined action (per protobuf spec) */
  ProtocolDataTypeUndefined = 0,
  ProtocolDataTypeConnection = 1,
  ProtocolDataTypeOsmosisParams = 2,
  ProtocolDataTypeLiquidToken = 3,
  ProtocolDataTypeOsmosisPool = 4,
  ProtocolDataTypeCrescentPool = 5,
  ProtocolDataTypeSifchainPool = 6,
  UNRECOGNIZED = -1,
}
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
  validatorSelectionAllocation: string;
  holdingsAllocation: string;
  lockupAllocation: string;
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
  distributionProportions?: DistributionProportions;
}
/** Params holds parameters for the participationrewards module. */

export interface ParamsSDKType {
  /**
   * distribution_proportions defines the proportions of the minted
   * participation rewards;
   */
  distribution_proportions?: DistributionProportionsSDKType;
}
export interface KeyedProtocolData {
  key: string;
  protocolData?: ProtocolData;
}
export interface KeyedProtocolDataSDKType {
  key: string;
  protocol_data?: ProtocolDataSDKType;
}
/**
 * Protocol Data is an arbitrary data type held against a given zone for the
 * determination of rewards.
 */

export interface ProtocolData {
  type: string;
  data: Uint8Array;
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
    validatorSelectionAllocation: "",
    holdingsAllocation: "",
    lockupAllocation: ""
  };
}

export const DistributionProportions = {
  encode(message: DistributionProportions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): DistributionProportions {
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

  fromPartial(object: DeepPartial<DistributionProportions>): DistributionProportions {
    const message = createBaseDistributionProportions();
    message.validatorSelectionAllocation = object.validatorSelectionAllocation ?? "";
    message.holdingsAllocation = object.holdingsAllocation ?? "";
    message.lockupAllocation = object.lockupAllocation ?? "";
    return message;
  }

};

function createBaseParams(): Params {
  return {
    distributionProportions: undefined
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.distributionProportions !== undefined) {
      DistributionProportions.encode(message.distributionProportions, writer.uint32(10).fork()).ldelim();
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
          message.distributionProportions = DistributionProportions.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.distributionProportions = object.distributionProportions !== undefined && object.distributionProportions !== null ? DistributionProportions.fromPartial(object.distributionProportions) : undefined;
    return message;
  }

};

function createBaseKeyedProtocolData(): KeyedProtocolData {
  return {
    key: "",
    protocolData: undefined
  };
}

export const KeyedProtocolData = {
  encode(message: KeyedProtocolData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.protocolData !== undefined) {
      ProtocolData.encode(message.protocolData, writer.uint32(18).fork()).ldelim();
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
          message.protocolData = ProtocolData.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<KeyedProtocolData>): KeyedProtocolData {
    const message = createBaseKeyedProtocolData();
    message.key = object.key ?? "";
    message.protocolData = object.protocolData !== undefined && object.protocolData !== null ? ProtocolData.fromPartial(object.protocolData) : undefined;
    return message;
  }

};

function createBaseProtocolData(): ProtocolData {
  return {
    type: "",
    data: new Uint8Array()
  };
}

export const ProtocolData = {
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

  fromPartial(object: DeepPartial<ProtocolData>): ProtocolData {
    const message = createBaseProtocolData();
    message.type = object.type ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};