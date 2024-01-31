import { Minter, MinterAmino, MinterSDKType, Params, ParamsAmino, ParamsSDKType } from "./mint";
import { Long, isSet, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the mint module's genesis state. */
export interface GenesisState {
  /** minter is a space for holding current rewards information. */
  minter: Minter;
  /** params defines all the paramaters of the module. */
  params: Params;
  /** current reduction period start epoch */
  reduction_started_epoch: Long;
}
export interface GenesisStateProtoMsg {
  type_url: "/quicksilver.mint.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the mint module's genesis state. */
export interface GenesisStateAmino {
  /** minter is a space for holding current rewards information. */
  minter?: MinterAmino;
  /** params defines all the paramaters of the module. */
  params?: ParamsAmino;
  /** current reduction period start epoch */
  reduction_started_epoch: string;
}
export interface GenesisStateAminoMsg {
  type: "/quicksilver.mint.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the mint module's genesis state. */
export interface GenesisStateSDKType {
  minter: MinterSDKType;
  params: ParamsSDKType;
  reduction_started_epoch: Long;
}
function createBaseGenesisState(): GenesisState {
  return {
    minter: Minter.fromPartial({}),
    params: Params.fromPartial({}),
    reduction_started_epoch: Long.ZERO
  };
}
export const GenesisState = {
  typeUrl: "/quicksilver.mint.v1beta1.GenesisState",
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minter !== undefined) {
      Minter.encode(message.minter, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    if (!message.reduction_started_epoch.isZero()) {
      writer.uint32(24).int64(message.reduction_started_epoch);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minter = Minter.decode(reader, reader.uint32());
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 3:
          message.reduction_started_epoch = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      minter: isSet(object.minter) ? Minter.fromJSON(object.minter) : undefined,
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      reduction_started_epoch: isSet(object.reduction_started_epoch) ? Long.fromValue(object.reduction_started_epoch) : Long.ZERO
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.minter !== undefined && (obj.minter = message.minter ? Minter.toJSON(message.minter) : undefined);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.reduction_started_epoch !== undefined && (obj.reduction_started_epoch = (message.reduction_started_epoch || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.minter = object.minter !== undefined && object.minter !== null ? Minter.fromPartial(object.minter) : undefined;
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.reduction_started_epoch = object.reduction_started_epoch !== undefined && object.reduction_started_epoch !== null ? Long.fromValue(object.reduction_started_epoch) : Long.ZERO;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      minter: object?.minter ? Minter.fromAmino(object.minter) : undefined,
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      reduction_started_epoch: Long.fromString(object.reduction_started_epoch)
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.minter = message.minter ? Minter.toAmino(message.minter) : undefined;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.reduction_started_epoch = message.reduction_started_epoch ? message.reduction_started_epoch.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/quicksilver.mint.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};