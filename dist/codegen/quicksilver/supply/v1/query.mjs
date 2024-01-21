import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseQuerySupplyRequest() {
    return {};
}
export const QuerySupplyRequest = {
    typeUrl: "/quicksilver.supply.v1.QuerySupplyRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySupplyRequest();
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
        const message = createBaseQuerySupplyRequest();
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
        return QuerySupplyRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySupplyRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySupplyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.supply.v1.QuerySupplyRequest",
            value: QuerySupplyRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySupplyResponse() {
    return {
        supply: Long.UZERO,
        circulatingSupply: Long.UZERO
    };
}
export const QuerySupplyResponse = {
    typeUrl: "/quicksilver.supply.v1.QuerySupplyResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.supply.isZero()) {
            writer.uint32(8).uint64(message.supply);
        }
        if (!message.circulatingSupply.isZero()) {
            writer.uint32(16).uint64(message.circulatingSupply);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySupplyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.supply = reader.uint64();
                    break;
                case 2:
                    message.circulatingSupply = reader.uint64();
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
            supply: isSet(object.supply) ? Long.fromValue(object.supply) : Long.UZERO,
            circulatingSupply: isSet(object.circulatingSupply) ? Long.fromValue(object.circulatingSupply) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.supply !== undefined && (obj.supply = (message.supply || Long.UZERO).toString());
        message.circulatingSupply !== undefined && (obj.circulatingSupply = (message.circulatingSupply || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySupplyResponse();
        message.supply = object.supply !== undefined && object.supply !== null ? Long.fromValue(object.supply) : Long.UZERO;
        message.circulatingSupply = object.circulatingSupply !== undefined && object.circulatingSupply !== null ? Long.fromValue(object.circulatingSupply) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            supply: Long.fromString(object.supply),
            circulatingSupply: Long.fromString(object.circulating_supply)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.supply = message.supply ? message.supply.toString() : undefined;
        obj.circulating_supply = message.circulatingSupply ? message.circulatingSupply.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySupplyResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySupplyResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySupplyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.supply.v1.QuerySupplyResponse",
            value: QuerySupplyResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map