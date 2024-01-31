import { DenomTrace, Params } from "./transfer";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
function createBaseGenesisState() {
    return {
        port_id: "",
        denom_traces: [],
        params: Params.fromPartial({})
    };
}
export const GenesisState = {
    typeUrl: "/ibc.applications.transfer.v1.GenesisState",
    aminoType: "cosmos-sdk/GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        for (const v of message.denom_traces) {
            DenomTrace.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(26).fork()).ldelim();
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
    fromJSON(object) {
        return {
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            denom_traces: Array.isArray(object?.denom_traces) ? object.denom_traces.map((e) => DenomTrace.fromJSON(e)) : [],
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        if (message.denom_traces) {
            obj.denom_traces = message.denom_traces.map(e => e ? DenomTrace.toJSON(e) : undefined);
        }
        else {
            obj.denom_traces = [];
        }
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.port_id = object.port_id ?? "";
        message.denom_traces = object.denom_traces?.map(e => DenomTrace.fromPartial(e)) || [];
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            port_id: object.port_id,
            denom_traces: Array.isArray(object?.denom_traces) ? object.denom_traces.map((e) => DenomTrace.fromAmino(e)) : [],
            params: object?.params ? Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        if (message.denom_traces) {
            obj.denom_traces = message.denom_traces.map(e => e ? DenomTrace.toAmino(e) : undefined);
        }
        else {
            obj.denom_traces = [];
        }
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
            value: GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map