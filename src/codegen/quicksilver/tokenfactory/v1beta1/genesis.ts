import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { DenomAuthorityMetadata, DenomAuthorityMetadataAmino, DenomAuthorityMetadataSDKType } from "./authorityMetadata";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisState {
  /** params defines the paramaters of the module. */
  params: Params;
  factory_denoms: GenesisDenom[];
}
export interface GenesisStateProtoMsg {
  type_url: "/quicksilver.tokenfactory.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisStateAmino {
  /** params defines the paramaters of the module. */
  params?: ParamsAmino;
  factory_denoms: GenesisDenomAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/quicksilver.tokenfactory.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  factory_denoms: GenesisDenomSDKType[];
}
/**
 * GenesisDenom defines a tokenfactory denom that is defined within genesis
 * state. The structure contains DenomAuthorityMetadata which defines the
 * denom's admin.
 */
export interface GenesisDenom {
  denom: string;
  authority_metadata: DenomAuthorityMetadata;
}
export interface GenesisDenomProtoMsg {
  type_url: "/quicksilver.tokenfactory.v1beta1.GenesisDenom";
  value: Uint8Array;
}
/**
 * GenesisDenom defines a tokenfactory denom that is defined within genesis
 * state. The structure contains DenomAuthorityMetadata which defines the
 * denom's admin.
 */
export interface GenesisDenomAmino {
  denom: string;
  authority_metadata?: DenomAuthorityMetadataAmino;
}
export interface GenesisDenomAminoMsg {
  type: "/quicksilver.tokenfactory.v1beta1.GenesisDenom";
  value: GenesisDenomAmino;
}
/**
 * GenesisDenom defines a tokenfactory denom that is defined within genesis
 * state. The structure contains DenomAuthorityMetadata which defines the
 * denom's admin.
 */
export interface GenesisDenomSDKType {
  denom: string;
  authority_metadata: DenomAuthorityMetadataSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    factory_denoms: []
  };
}
export const GenesisState = {
  typeUrl: "/quicksilver.tokenfactory.v1beta1.GenesisState",
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.factory_denoms) {
      GenesisDenom.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.factory_denoms.push(GenesisDenom.decode(reader, reader.uint32()));
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
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      factory_denoms: Array.isArray(object?.factory_denoms) ? object.factory_denoms.map((e: any) => GenesisDenom.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.factory_denoms) {
      obj.factory_denoms = message.factory_denoms.map(e => e ? GenesisDenom.toJSON(e) : undefined);
    } else {
      obj.factory_denoms = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.factory_denoms = object.factory_denoms?.map(e => GenesisDenom.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      factory_denoms: Array.isArray(object?.factory_denoms) ? object.factory_denoms.map((e: any) => GenesisDenom.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.factory_denoms) {
      obj.factory_denoms = message.factory_denoms.map(e => e ? GenesisDenom.toAmino(e) : undefined);
    } else {
      obj.factory_denoms = [];
    }
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
      typeUrl: "/quicksilver.tokenfactory.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseGenesisDenom(): GenesisDenom {
  return {
    denom: "",
    authority_metadata: DenomAuthorityMetadata.fromPartial({})
  };
}
export const GenesisDenom = {
  typeUrl: "/quicksilver.tokenfactory.v1beta1.GenesisDenom",
  encode(message: GenesisDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.authority_metadata !== undefined) {
      DenomAuthorityMetadata.encode(message.authority_metadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.authority_metadata = DenomAuthorityMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisDenom {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      authority_metadata: isSet(object.authority_metadata) ? DenomAuthorityMetadata.fromJSON(object.authority_metadata) : undefined
    };
  },
  toJSON(message: GenesisDenom): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.authority_metadata !== undefined && (obj.authority_metadata = message.authority_metadata ? DenomAuthorityMetadata.toJSON(message.authority_metadata) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisDenom>): GenesisDenom {
    const message = createBaseGenesisDenom();
    message.denom = object.denom ?? "";
    message.authority_metadata = object.authority_metadata !== undefined && object.authority_metadata !== null ? DenomAuthorityMetadata.fromPartial(object.authority_metadata) : undefined;
    return message;
  },
  fromAmino(object: GenesisDenomAmino): GenesisDenom {
    return {
      denom: object.denom,
      authority_metadata: object?.authority_metadata ? DenomAuthorityMetadata.fromAmino(object.authority_metadata) : undefined
    };
  },
  toAmino(message: GenesisDenom): GenesisDenomAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.authority_metadata = message.authority_metadata ? DenomAuthorityMetadata.toAmino(message.authority_metadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisDenomAminoMsg): GenesisDenom {
    return GenesisDenom.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisDenomProtoMsg): GenesisDenom {
    return GenesisDenom.decode(message.value);
  },
  toProto(message: GenesisDenom): Uint8Array {
    return GenesisDenom.encode(message).finish();
  },
  toProtoMsg(message: GenesisDenom): GenesisDenomProtoMsg {
    return {
      typeUrl: "/quicksilver.tokenfactory.v1beta1.GenesisDenom",
      value: GenesisDenom.encode(message).finish()
    };
  }
};