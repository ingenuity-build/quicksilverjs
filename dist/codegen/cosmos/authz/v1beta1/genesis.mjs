import { GrantAuthorization } from "./authz";
import * as _m0 from "protobufjs/minimal";
function createBaseGenesisState() {
    return {
        authorization: []
    };
}
export const GenesisState = {
    typeUrl: "/cosmos.authz.v1beta1.GenesisState",
    aminoType: "cosmos-sdk/GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.authorization) {
            GrantAuthorization.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.authorization.push(GrantAuthorization.decode(reader, reader.uint32()));
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
            authorization: Array.isArray(object?.authorization) ? object.authorization.map((e) => GrantAuthorization.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.authorization) {
            obj.authorization = message.authorization.map(e => e ? GrantAuthorization.toJSON(e) : undefined);
        }
        else {
            obj.authorization = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.authorization = object.authorization?.map(e => GrantAuthorization.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            authorization: Array.isArray(object?.authorization) ? object.authorization.map((e) => GrantAuthorization.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.authorization) {
            obj.authorization = message.authorization.map(e => e ? GrantAuthorization.toAmino(e) : undefined);
        }
        else {
            obj.authorization = [];
        }
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
            typeUrl: "/cosmos.authz.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map