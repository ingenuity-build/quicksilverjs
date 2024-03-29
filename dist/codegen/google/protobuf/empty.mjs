import * as _m0 from "protobufjs/minimal";
function createBaseEmpty() {
    return {};
}
export const Empty = {
    typeUrl: "/google.protobuf.Empty",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmpty();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseEmpty();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return Empty.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Empty.decode(message.value);
    },
    toProto(message) {
        return Empty.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.Empty",
            value: Empty.encode(message).finish()
        };
    }
};
//# sourceMappingURL=empty.js.map