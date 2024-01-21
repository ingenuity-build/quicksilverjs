import { Minter, Params } from "./mint";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseGenesisState() {
    return {
        minter: Minter.fromPartial({}),
        params: Params.fromPartial({}),
        reductionStartedEpoch: Long.ZERO
    };
}
export const GenesisState = {
    typeUrl: "/quicksilver.mint.v1beta1.GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        if (message.minter !== undefined) {
            Minter.encode(message.minter, writer.uint32(10).fork()).ldelim();
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        if (!message.reductionStartedEpoch.isZero()) {
            writer.uint32(24).int64(message.reductionStartedEpoch);
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
                    message.minter = Minter.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.reductionStartedEpoch = reader.int64();
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
            minter: isSet(object.minter) ? Minter.fromJSON(object.minter) : undefined,
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            reductionStartedEpoch: isSet(object.reductionStartedEpoch) ? Long.fromValue(object.reductionStartedEpoch) : Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.minter !== undefined && (obj.minter = message.minter ? Minter.toJSON(message.minter) : undefined);
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        message.reductionStartedEpoch !== undefined && (obj.reductionStartedEpoch = (message.reductionStartedEpoch || Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.minter = object.minter !== undefined && object.minter !== null ? Minter.fromPartial(object.minter) : undefined;
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.reductionStartedEpoch = object.reductionStartedEpoch !== undefined && object.reductionStartedEpoch !== null ? Long.fromValue(object.reductionStartedEpoch) : Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            minter: object?.minter ? Minter.fromAmino(object.minter) : undefined,
            params: object?.params ? Params.fromAmino(object.params) : undefined,
            reductionStartedEpoch: Long.fromString(object.reduction_started_epoch)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.minter = message.minter ? Minter.toAmino(message.minter) : undefined;
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        obj.reduction_started_epoch = message.reductionStartedEpoch ? message.reductionStartedEpoch.toString() : undefined;
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
            typeUrl: "/quicksilver.mint.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map