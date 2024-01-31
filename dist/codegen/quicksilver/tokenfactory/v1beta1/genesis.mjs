import { Params } from "./params";
import { DenomAuthorityMetadata } from "./authorityMetadata";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        factory_denoms: []
    };
}
export const GenesisState = {
    typeUrl: "/quicksilver.tokenfactory.v1beta1.GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.factory_denoms) {
            GenesisDenom.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            factory_denoms: Array.isArray(object?.factory_denoms) ? object.factory_denoms.map((e) => GenesisDenom.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.factory_denoms) {
            obj.factory_denoms = message.factory_denoms.map(e => e ? GenesisDenom.toJSON(e) : undefined);
        }
        else {
            obj.factory_denoms = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.factory_denoms = object.factory_denoms?.map(e => GenesisDenom.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? Params.fromAmino(object.params) : undefined,
            factory_denoms: Array.isArray(object?.factory_denoms) ? object.factory_denoms.map((e) => GenesisDenom.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.factory_denoms) {
            obj.factory_denoms = message.factory_denoms.map(e => e ? GenesisDenom.toAmino(e) : undefined);
        }
        else {
            obj.factory_denoms = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.tokenfactory.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
function createBaseGenesisDenom() {
    return {
        denom: "",
        authority_metadata: DenomAuthorityMetadata.fromPartial({})
    };
}
export const GenesisDenom = {
    typeUrl: "/quicksilver.tokenfactory.v1beta1.GenesisDenom",
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.authority_metadata !== undefined) {
            DenomAuthorityMetadata.encode(message.authority_metadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            denom: isSet(object.denom) ? String(object.denom) : "",
            authority_metadata: isSet(object.authority_metadata) ? DenomAuthorityMetadata.fromJSON(object.authority_metadata) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.authority_metadata !== undefined && (obj.authority_metadata = message.authority_metadata ? DenomAuthorityMetadata.toJSON(message.authority_metadata) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisDenom();
        message.denom = object.denom ?? "";
        message.authority_metadata = object.authority_metadata !== undefined && object.authority_metadata !== null ? DenomAuthorityMetadata.fromPartial(object.authority_metadata) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            denom: object.denom,
            authority_metadata: object?.authority_metadata ? DenomAuthorityMetadata.fromAmino(object.authority_metadata) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.authority_metadata = message.authority_metadata ? DenomAuthorityMetadata.toAmino(message.authority_metadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisDenom.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisDenom.decode(message.value);
    },
    toProto(message) {
        return GenesisDenom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.tokenfactory.v1beta1.GenesisDenom",
            value: GenesisDenom.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map