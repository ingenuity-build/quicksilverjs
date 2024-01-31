import { DenomTrace, DenomTraceAmino, DenomTraceSDKType, Params, ParamsAmino, ParamsSDKType } from "./transfer";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../../helpers";
/** GenesisState defines the ibc-transfer genesis state */
export interface GenesisState {
  port_id: string;
  denom_traces: DenomTrace[];
  params: Params;
}
export interface GenesisStateProtoMsg {
  type_url: "/ibc.applications.transfer.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the ibc-transfer genesis state */
export interface GenesisStateAmino {
  port_id: string;
  denom_traces: DenomTraceAmino[];
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the ibc-transfer genesis state */
export interface GenesisStateSDKType {
  port_id: string;
  denom_traces: DenomTraceSDKType[];
  params: ParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    port_id: "",
    denom_traces: [],
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/ibc.applications.transfer.v1.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    for (const v of message.denom_traces) {
      DenomTrace.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
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
          message.port_id = reader.string();
          break;
        case 2:
          message.denom_traces.push(DenomTrace.decode(reader, reader.uint32()));
          break;
        case 3:
          message.params = Params.decode(reader, reader.uint32());
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
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      denom_traces: Array.isArray(object?.denom_traces) ? object.denom_traces.map((e: any) => DenomTrace.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.port_id !== undefined && (obj.port_id = message.port_id);
    if (message.denom_traces) {
      obj.denom_traces = message.denom_traces.map(e => e ? DenomTrace.toJSON(e) : undefined);
    } else {
      obj.denom_traces = [];
    }
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.port_id = object.port_id ?? "";
    message.denom_traces = object.denom_traces?.map(e => DenomTrace.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      port_id: object.port_id,
      denom_traces: Array.isArray(object?.denom_traces) ? object.denom_traces.map((e: any) => DenomTrace.fromAmino(e)) : [],
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.port_id = message.port_id;
    if (message.denom_traces) {
      obj.denom_traces = message.denom_traces.map(e => e ? DenomTrace.toAmino(e) : undefined);
    } else {
      obj.denom_traces = [];
    }
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};