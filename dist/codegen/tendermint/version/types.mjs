import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseApp() {
    return {
        protocol: Long.UZERO,
        software: ""
    };
}
export const App = {
    typeUrl: "/tendermint.version.App",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.protocol.isZero()) {
            writer.uint32(8).uint64(message.protocol);
        }
        if (message.software !== "") {
            writer.uint32(18).string(message.software);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseApp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.protocol = reader.uint64();
                    break;
                case 2:
                    message.software = reader.string();
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
            protocol: isSet(object.protocol) ? Long.fromValue(object.protocol) : Long.UZERO,
            software: isSet(object.software) ? String(object.software) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.protocol !== undefined && (obj.protocol = (message.protocol || Long.UZERO).toString());
        message.software !== undefined && (obj.software = message.software);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseApp();
        message.protocol = object.protocol !== undefined && object.protocol !== null ? Long.fromValue(object.protocol) : Long.UZERO;
        message.software = object.software ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            protocol: Long.fromString(object.protocol),
            software: object.software
        };
    },
    toAmino(message) {
        const obj = {};
        obj.protocol = message.protocol ? message.protocol.toString() : undefined;
        obj.software = message.software;
        return obj;
    },
    fromAminoMsg(object) {
        return App.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return App.decode(message.value);
    },
    toProto(message) {
        return App.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.version.App",
            value: App.encode(message).finish()
        };
    }
};
function createBaseConsensus() {
    return {
        block: Long.UZERO,
        app: Long.UZERO
    };
}
export const Consensus = {
    typeUrl: "/tendermint.version.Consensus",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.block.isZero()) {
            writer.uint32(8).uint64(message.block);
        }
        if (!message.app.isZero()) {
            writer.uint32(16).uint64(message.app);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block = reader.uint64();
                    break;
                case 2:
                    message.app = reader.uint64();
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
            block: isSet(object.block) ? Long.fromValue(object.block) : Long.UZERO,
            app: isSet(object.app) ? Long.fromValue(object.app) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.block !== undefined && (obj.block = (message.block || Long.UZERO).toString());
        message.app !== undefined && (obj.app = (message.app || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConsensus();
        message.block = object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : Long.UZERO;
        message.app = object.app !== undefined && object.app !== null ? Long.fromValue(object.app) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            block: Long.fromString(object.block),
            app: Long.fromString(object.app)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.block = message.block ? message.block.toString() : undefined;
        obj.app = message.app ? message.app.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Consensus.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Consensus.decode(message.value);
    },
    toProto(message) {
        return Consensus.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.version.Consensus",
            value: Consensus.encode(message).finish()
        };
    }
};
//# sourceMappingURL=types.js.map