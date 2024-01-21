import { Query } from "./interchainquery";
import * as _m0 from "protobufjs/minimal";
function createBaseGenesisState() {
    return {
        queries: []
    };
}
export const GenesisState = {
    typeUrl: "/quicksilver.interchainquery.v1.GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.queries) {
            Query.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.queries.push(Query.decode(reader, reader.uint32()));
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
            queries: Array.isArray(object?.queries) ? object.queries.map((e) => Query.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.queries) {
            obj.queries = message.queries.map(e => e ? Query.toJSON(e) : undefined);
        }
        else {
            obj.queries = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.queries = object.queries?.map(e => Query.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            queries: Array.isArray(object?.queries) ? object.queries.map((e) => Query.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.queries) {
            obj.queries = message.queries.map(e => e ? Query.toAmino(e) : undefined);
        }
        else {
            obj.queries = [];
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
            typeUrl: "/quicksilver.interchainquery.v1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map