import { Any } from "../../../../google/protobuf/any";
import { Event } from "../../../../tendermint/abci/types";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseTxResponse() {
    return {
        height: Long.ZERO,
        txhash: "",
        codespace: "",
        code: 0,
        data: "",
        raw_log: "",
        logs: [],
        info: "",
        gas_wanted: Long.ZERO,
        gas_used: Long.ZERO,
        tx: Any.fromPartial({}),
        timestamp: "",
        events: []
    };
}
export const TxResponse = {
    typeUrl: "/cosmos.base.abci.v1beta1.TxResponse",
    aminoType: "cosmos-sdk/TxResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        if (message.txhash !== "") {
            writer.uint32(18).string(message.txhash);
        }
        if (message.codespace !== "") {
            writer.uint32(26).string(message.codespace);
        }
        if (message.code !== 0) {
            writer.uint32(32).uint32(message.code);
        }
        if (message.data !== "") {
            writer.uint32(42).string(message.data);
        }
        if (message.raw_log !== "") {
            writer.uint32(50).string(message.raw_log);
        }
        for (const v of message.logs) {
            ABCIMessageLog.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.info !== "") {
            writer.uint32(66).string(message.info);
        }
        if (!message.gas_wanted.isZero()) {
            writer.uint32(72).int64(message.gas_wanted);
        }
        if (!message.gas_used.isZero()) {
            writer.uint32(80).int64(message.gas_used);
        }
        if (message.tx !== undefined) {
            Any.encode(message.tx, writer.uint32(90).fork()).ldelim();
        }
        if (message.timestamp !== "") {
            writer.uint32(98).string(message.timestamp);
        }
        for (const v of message.events) {
            Event.encode(v, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.txhash = reader.string();
                    break;
                case 3:
                    message.codespace = reader.string();
                    break;
                case 4:
                    message.code = reader.uint32();
                    break;
                case 5:
                    message.data = reader.string();
                    break;
                case 6:
                    message.raw_log = reader.string();
                    break;
                case 7:
                    message.logs.push(ABCIMessageLog.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.info = reader.string();
                    break;
                case 9:
                    message.gas_wanted = reader.int64();
                    break;
                case 10:
                    message.gas_used = reader.int64();
                    break;
                case 11:
                    message.tx = Any.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.timestamp = reader.string();
                    break;
                case 13:
                    message.events.push(Event.decode(reader, reader.uint32()));
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
            height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
            txhash: isSet(object.txhash) ? String(object.txhash) : "",
            codespace: isSet(object.codespace) ? String(object.codespace) : "",
            code: isSet(object.code) ? Number(object.code) : 0,
            data: isSet(object.data) ? String(object.data) : "",
            raw_log: isSet(object.raw_log) ? String(object.raw_log) : "",
            logs: Array.isArray(object?.logs) ? object.logs.map((e) => ABCIMessageLog.fromJSON(e)) : [],
            info: isSet(object.info) ? String(object.info) : "",
            gas_wanted: isSet(object.gas_wanted) ? Long.fromValue(object.gas_wanted) : Long.ZERO,
            gas_used: isSet(object.gas_used) ? Long.fromValue(object.gas_used) : Long.ZERO,
            tx: isSet(object.tx) ? Any.fromJSON(object.tx) : undefined,
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "",
            events: Array.isArray(object?.events) ? object.events.map((e) => Event.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
        message.txhash !== undefined && (obj.txhash = message.txhash);
        message.codespace !== undefined && (obj.codespace = message.codespace);
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.data !== undefined && (obj.data = message.data);
        message.raw_log !== undefined && (obj.raw_log = message.raw_log);
        if (message.logs) {
            obj.logs = message.logs.map(e => e ? ABCIMessageLog.toJSON(e) : undefined);
        }
        else {
            obj.logs = [];
        }
        message.info !== undefined && (obj.info = message.info);
        message.gas_wanted !== undefined && (obj.gas_wanted = (message.gas_wanted || Long.ZERO).toString());
        message.gas_used !== undefined && (obj.gas_used = (message.gas_used || Long.ZERO).toString());
        message.tx !== undefined && (obj.tx = message.tx ? Any.toJSON(message.tx) : undefined);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        if (message.events) {
            obj.events = message.events.map(e => e ? Event.toJSON(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxResponse();
        message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
        message.txhash = object.txhash ?? "";
        message.codespace = object.codespace ?? "";
        message.code = object.code ?? 0;
        message.data = object.data ?? "";
        message.raw_log = object.raw_log ?? "";
        message.logs = object.logs?.map(e => ABCIMessageLog.fromPartial(e)) || [];
        message.info = object.info ?? "";
        message.gas_wanted = object.gas_wanted !== undefined && object.gas_wanted !== null ? Long.fromValue(object.gas_wanted) : Long.ZERO;
        message.gas_used = object.gas_used !== undefined && object.gas_used !== null ? Long.fromValue(object.gas_used) : Long.ZERO;
        message.tx = object.tx !== undefined && object.tx !== null ? Any.fromPartial(object.tx) : undefined;
        message.timestamp = object.timestamp ?? "";
        message.events = object.events?.map(e => Event.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            height: Long.fromString(object.height),
            txhash: object.txhash,
            codespace: object.codespace,
            code: object.code,
            data: object.data,
            raw_log: object.raw_log,
            logs: Array.isArray(object?.logs) ? object.logs.map((e) => ABCIMessageLog.fromAmino(e)) : [],
            info: object.info,
            gas_wanted: Long.fromString(object.gas_wanted),
            gas_used: Long.fromString(object.gas_used),
            tx: object?.tx ? Any.fromAmino(object.tx) : undefined,
            timestamp: object.timestamp,
            events: Array.isArray(object?.events) ? object.events.map((e) => Event.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.txhash = message.txhash;
        obj.codespace = message.codespace;
        obj.code = message.code;
        obj.data = message.data;
        obj.raw_log = message.raw_log;
        if (message.logs) {
            obj.logs = message.logs.map(e => e ? ABCIMessageLog.toAmino(e) : undefined);
        }
        else {
            obj.logs = [];
        }
        obj.info = message.info;
        obj.gas_wanted = message.gas_wanted ? message.gas_wanted.toString() : undefined;
        obj.gas_used = message.gas_used ? message.gas_used.toString() : undefined;
        obj.tx = message.tx ? Any.toAmino(message.tx) : undefined;
        obj.timestamp = message.timestamp;
        if (message.events) {
            obj.events = message.events.map(e => e ? Event.toAmino(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return TxResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TxResponse",
            value: TxResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return TxResponse.decode(message.value);
    },
    toProto(message) {
        return TxResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.TxResponse",
            value: TxResponse.encode(message).finish()
        };
    }
};
function createBaseABCIMessageLog() {
    return {
        msg_index: 0,
        log: "",
        events: []
    };
}
export const ABCIMessageLog = {
    typeUrl: "/cosmos.base.abci.v1beta1.ABCIMessageLog",
    aminoType: "cosmos-sdk/ABCIMessageLog",
    encode(message, writer = _m0.Writer.create()) {
        if (message.msg_index !== 0) {
            writer.uint32(8).uint32(message.msg_index);
        }
        if (message.log !== "") {
            writer.uint32(18).string(message.log);
        }
        for (const v of message.events) {
            StringEvent.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseABCIMessageLog();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg_index = reader.uint32();
                    break;
                case 2:
                    message.log = reader.string();
                    break;
                case 3:
                    message.events.push(StringEvent.decode(reader, reader.uint32()));
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
            msg_index: isSet(object.msg_index) ? Number(object.msg_index) : 0,
            log: isSet(object.log) ? String(object.log) : "",
            events: Array.isArray(object?.events) ? object.events.map((e) => StringEvent.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.msg_index !== undefined && (obj.msg_index = Math.round(message.msg_index));
        message.log !== undefined && (obj.log = message.log);
        if (message.events) {
            obj.events = message.events.map(e => e ? StringEvent.toJSON(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseABCIMessageLog();
        message.msg_index = object.msg_index ?? 0;
        message.log = object.log ?? "";
        message.events = object.events?.map(e => StringEvent.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            msg_index: object.msg_index,
            log: object.log,
            events: Array.isArray(object?.events) ? object.events.map((e) => StringEvent.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.msg_index = message.msg_index;
        obj.log = message.log;
        if (message.events) {
            obj.events = message.events.map(e => e ? StringEvent.toAmino(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ABCIMessageLog.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ABCIMessageLog",
            value: ABCIMessageLog.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ABCIMessageLog.decode(message.value);
    },
    toProto(message) {
        return ABCIMessageLog.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.ABCIMessageLog",
            value: ABCIMessageLog.encode(message).finish()
        };
    }
};
function createBaseStringEvent() {
    return {
        type: "",
        attributes: []
    };
}
export const StringEvent = {
    typeUrl: "/cosmos.base.abci.v1beta1.StringEvent",
    aminoType: "cosmos-sdk/StringEvent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        for (const v of message.attributes) {
            Attribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStringEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.attributes.push(Attribute.decode(reader, reader.uint32()));
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
            type: isSet(object.type) ? String(object.type) : "",
            attributes: Array.isArray(object?.attributes) ? object.attributes.map((e) => Attribute.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseStringEvent();
        message.type = object.type ?? "";
        message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            type: object.type,
            attributes: Array.isArray(object?.attributes) ? object.attributes.map((e) => Attribute.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type;
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return StringEvent.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/StringEvent",
            value: StringEvent.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return StringEvent.decode(message.value);
    },
    toProto(message) {
        return StringEvent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.StringEvent",
            value: StringEvent.encode(message).finish()
        };
    }
};
function createBaseAttribute() {
    return {
        key: "",
        value: ""
    };
}
export const Attribute = {
    typeUrl: "/cosmos.base.abci.v1beta1.Attribute",
    aminoType: "cosmos-sdk/Attribute",
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAttribute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? String(object.value) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAttribute();
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            key: object.key,
            value: object.value
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return Attribute.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Attribute",
            value: Attribute.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Attribute.decode(message.value);
    },
    toProto(message) {
        return Attribute.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.Attribute",
            value: Attribute.encode(message).finish()
        };
    }
};
function createBaseGasInfo() {
    return {
        gas_wanted: Long.UZERO,
        gas_used: Long.UZERO
    };
}
export const GasInfo = {
    typeUrl: "/cosmos.base.abci.v1beta1.GasInfo",
    aminoType: "cosmos-sdk/GasInfo",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.gas_wanted.isZero()) {
            writer.uint32(8).uint64(message.gas_wanted);
        }
        if (!message.gas_used.isZero()) {
            writer.uint32(16).uint64(message.gas_used);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGasInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gas_wanted = reader.uint64();
                    break;
                case 2:
                    message.gas_used = reader.uint64();
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
            gas_wanted: isSet(object.gas_wanted) ? Long.fromValue(object.gas_wanted) : Long.UZERO,
            gas_used: isSet(object.gas_used) ? Long.fromValue(object.gas_used) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.gas_wanted !== undefined && (obj.gas_wanted = (message.gas_wanted || Long.UZERO).toString());
        message.gas_used !== undefined && (obj.gas_used = (message.gas_used || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGasInfo();
        message.gas_wanted = object.gas_wanted !== undefined && object.gas_wanted !== null ? Long.fromValue(object.gas_wanted) : Long.UZERO;
        message.gas_used = object.gas_used !== undefined && object.gas_used !== null ? Long.fromValue(object.gas_used) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            gas_wanted: Long.fromString(object.gas_wanted),
            gas_used: Long.fromString(object.gas_used)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.gas_wanted = message.gas_wanted ? message.gas_wanted.toString() : undefined;
        obj.gas_used = message.gas_used ? message.gas_used.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GasInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GasInfo",
            value: GasInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GasInfo.decode(message.value);
    },
    toProto(message) {
        return GasInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.GasInfo",
            value: GasInfo.encode(message).finish()
        };
    }
};
function createBaseResult() {
    return {
        data: new Uint8Array(),
        log: "",
        events: [],
        msg_responses: []
    };
}
export const Result = {
    typeUrl: "/cosmos.base.abci.v1beta1.Result",
    aminoType: "cosmos-sdk/Result",
    encode(message, writer = _m0.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        if (message.log !== "") {
            writer.uint32(18).string(message.log);
        }
        for (const v of message.events) {
            Event.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.msg_responses) {
            Any.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                case 2:
                    message.log = reader.string();
                    break;
                case 3:
                    message.events.push(Event.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.msg_responses.push(Any.decode(reader, reader.uint32()));
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
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            log: isSet(object.log) ? String(object.log) : "",
            events: Array.isArray(object?.events) ? object.events.map((e) => Event.fromJSON(e)) : [],
            msg_responses: Array.isArray(object?.msg_responses) ? object.msg_responses.map((e) => Any.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.log !== undefined && (obj.log = message.log);
        if (message.events) {
            obj.events = message.events.map(e => e ? Event.toJSON(e) : undefined);
        }
        else {
            obj.events = [];
        }
        if (message.msg_responses) {
            obj.msg_responses = message.msg_responses.map(e => e ? Any.toJSON(e) : undefined);
        }
        else {
            obj.msg_responses = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResult();
        message.data = object.data ?? new Uint8Array();
        message.log = object.log ?? "";
        message.events = object.events?.map(e => Event.fromPartial(e)) || [];
        message.msg_responses = object.msg_responses?.map(e => Any.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            data: object.data,
            log: object.log,
            events: Array.isArray(object?.events) ? object.events.map((e) => Event.fromAmino(e)) : [],
            msg_responses: Array.isArray(object?.msg_responses) ? object.msg_responses.map((e) => Any.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data;
        obj.log = message.log;
        if (message.events) {
            obj.events = message.events.map(e => e ? Event.toAmino(e) : undefined);
        }
        else {
            obj.events = [];
        }
        if (message.msg_responses) {
            obj.msg_responses = message.msg_responses.map(e => e ? Any.toAmino(e) : undefined);
        }
        else {
            obj.msg_responses = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Result.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Result",
            value: Result.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Result.decode(message.value);
    },
    toProto(message) {
        return Result.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.Result",
            value: Result.encode(message).finish()
        };
    }
};
function createBaseSimulationResponse() {
    return {
        gas_info: GasInfo.fromPartial({}),
        result: Result.fromPartial({})
    };
}
export const SimulationResponse = {
    typeUrl: "/cosmos.base.abci.v1beta1.SimulationResponse",
    aminoType: "cosmos-sdk/SimulationResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.gas_info !== undefined) {
            GasInfo.encode(message.gas_info, writer.uint32(10).fork()).ldelim();
        }
        if (message.result !== undefined) {
            Result.encode(message.result, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSimulationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gas_info = GasInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.result = Result.decode(reader, reader.uint32());
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
            gas_info: isSet(object.gas_info) ? GasInfo.fromJSON(object.gas_info) : undefined,
            result: isSet(object.result) ? Result.fromJSON(object.result) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.gas_info !== undefined && (obj.gas_info = message.gas_info ? GasInfo.toJSON(message.gas_info) : undefined);
        message.result !== undefined && (obj.result = message.result ? Result.toJSON(message.result) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSimulationResponse();
        message.gas_info = object.gas_info !== undefined && object.gas_info !== null ? GasInfo.fromPartial(object.gas_info) : undefined;
        message.result = object.result !== undefined && object.result !== null ? Result.fromPartial(object.result) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            gas_info: object?.gas_info ? GasInfo.fromAmino(object.gas_info) : undefined,
            result: object?.result ? Result.fromAmino(object.result) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.gas_info = message.gas_info ? GasInfo.toAmino(message.gas_info) : undefined;
        obj.result = message.result ? Result.toAmino(message.result) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SimulationResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SimulationResponse",
            value: SimulationResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SimulationResponse.decode(message.value);
    },
    toProto(message) {
        return SimulationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.SimulationResponse",
            value: SimulationResponse.encode(message).finish()
        };
    }
};
function createBaseMsgData() {
    return {
        msg_type: "",
        data: new Uint8Array()
    };
}
export const MsgData = {
    typeUrl: "/cosmos.base.abci.v1beta1.MsgData",
    aminoType: "cosmos-sdk/MsgData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.msg_type !== "") {
            writer.uint32(10).string(message.msg_type);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg_type = reader.string();
                    break;
                case 2:
                    message.data = reader.bytes();
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
            msg_type: isSet(object.msg_type) ? String(object.msg_type) : "",
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.msg_type !== undefined && (obj.msg_type = message.msg_type);
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgData();
        message.msg_type = object.msg_type ?? "";
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            msg_type: object.msg_type,
            data: object.data
        };
    },
    toAmino(message) {
        const obj = {};
        obj.msg_type = message.msg_type;
        obj.data = message.data;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgData",
            value: MsgData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgData.decode(message.value);
    },
    toProto(message) {
        return MsgData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.MsgData",
            value: MsgData.encode(message).finish()
        };
    }
};
function createBaseTxMsgData() {
    return {
        data: [],
        msg_responses: []
    };
}
export const TxMsgData = {
    typeUrl: "/cosmos.base.abci.v1beta1.TxMsgData",
    aminoType: "cosmos-sdk/TxMsgData",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.data) {
            MsgData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.msg_responses) {
            Any.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxMsgData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(MsgData.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.msg_responses.push(Any.decode(reader, reader.uint32()));
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
            data: Array.isArray(object?.data) ? object.data.map((e) => MsgData.fromJSON(e)) : [],
            msg_responses: Array.isArray(object?.msg_responses) ? object.msg_responses.map((e) => Any.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map(e => e ? MsgData.toJSON(e) : undefined);
        }
        else {
            obj.data = [];
        }
        if (message.msg_responses) {
            obj.msg_responses = message.msg_responses.map(e => e ? Any.toJSON(e) : undefined);
        }
        else {
            obj.msg_responses = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxMsgData();
        message.data = object.data?.map(e => MsgData.fromPartial(e)) || [];
        message.msg_responses = object.msg_responses?.map(e => Any.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            data: Array.isArray(object?.data) ? object.data.map((e) => MsgData.fromAmino(e)) : [],
            msg_responses: Array.isArray(object?.msg_responses) ? object.msg_responses.map((e) => Any.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map(e => e ? MsgData.toAmino(e) : undefined);
        }
        else {
            obj.data = [];
        }
        if (message.msg_responses) {
            obj.msg_responses = message.msg_responses.map(e => e ? Any.toAmino(e) : undefined);
        }
        else {
            obj.msg_responses = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return TxMsgData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TxMsgData",
            value: TxMsgData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return TxMsgData.decode(message.value);
    },
    toProto(message) {
        return TxMsgData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.TxMsgData",
            value: TxMsgData.encode(message).finish()
        };
    }
};
function createBaseSearchTxsResult() {
    return {
        total_count: Long.UZERO,
        count: Long.UZERO,
        page_number: Long.UZERO,
        page_total: Long.UZERO,
        limit: Long.UZERO,
        txs: []
    };
}
export const SearchTxsResult = {
    typeUrl: "/cosmos.base.abci.v1beta1.SearchTxsResult",
    aminoType: "cosmos-sdk/SearchTxsResult",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.total_count.isZero()) {
            writer.uint32(8).uint64(message.total_count);
        }
        if (!message.count.isZero()) {
            writer.uint32(16).uint64(message.count);
        }
        if (!message.page_number.isZero()) {
            writer.uint32(24).uint64(message.page_number);
        }
        if (!message.page_total.isZero()) {
            writer.uint32(32).uint64(message.page_total);
        }
        if (!message.limit.isZero()) {
            writer.uint32(40).uint64(message.limit);
        }
        for (const v of message.txs) {
            TxResponse.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSearchTxsResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total_count = reader.uint64();
                    break;
                case 2:
                    message.count = reader.uint64();
                    break;
                case 3:
                    message.page_number = reader.uint64();
                    break;
                case 4:
                    message.page_total = reader.uint64();
                    break;
                case 5:
                    message.limit = reader.uint64();
                    break;
                case 6:
                    message.txs.push(TxResponse.decode(reader, reader.uint32()));
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
            total_count: isSet(object.total_count) ? Long.fromValue(object.total_count) : Long.UZERO,
            count: isSet(object.count) ? Long.fromValue(object.count) : Long.UZERO,
            page_number: isSet(object.page_number) ? Long.fromValue(object.page_number) : Long.UZERO,
            page_total: isSet(object.page_total) ? Long.fromValue(object.page_total) : Long.UZERO,
            limit: isSet(object.limit) ? Long.fromValue(object.limit) : Long.UZERO,
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => TxResponse.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.total_count !== undefined && (obj.total_count = (message.total_count || Long.UZERO).toString());
        message.count !== undefined && (obj.count = (message.count || Long.UZERO).toString());
        message.page_number !== undefined && (obj.page_number = (message.page_number || Long.UZERO).toString());
        message.page_total !== undefined && (obj.page_total = (message.page_total || Long.UZERO).toString());
        message.limit !== undefined && (obj.limit = (message.limit || Long.UZERO).toString());
        if (message.txs) {
            obj.txs = message.txs.map(e => e ? TxResponse.toJSON(e) : undefined);
        }
        else {
            obj.txs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSearchTxsResult();
        message.total_count = object.total_count !== undefined && object.total_count !== null ? Long.fromValue(object.total_count) : Long.UZERO;
        message.count = object.count !== undefined && object.count !== null ? Long.fromValue(object.count) : Long.UZERO;
        message.page_number = object.page_number !== undefined && object.page_number !== null ? Long.fromValue(object.page_number) : Long.UZERO;
        message.page_total = object.page_total !== undefined && object.page_total !== null ? Long.fromValue(object.page_total) : Long.UZERO;
        message.limit = object.limit !== undefined && object.limit !== null ? Long.fromValue(object.limit) : Long.UZERO;
        message.txs = object.txs?.map(e => TxResponse.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            total_count: Long.fromString(object.total_count),
            count: Long.fromString(object.count),
            page_number: Long.fromString(object.page_number),
            page_total: Long.fromString(object.page_total),
            limit: Long.fromString(object.limit),
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => TxResponse.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.total_count = message.total_count ? message.total_count.toString() : undefined;
        obj.count = message.count ? message.count.toString() : undefined;
        obj.page_number = message.page_number ? message.page_number.toString() : undefined;
        obj.page_total = message.page_total ? message.page_total.toString() : undefined;
        obj.limit = message.limit ? message.limit.toString() : undefined;
        if (message.txs) {
            obj.txs = message.txs.map(e => e ? TxResponse.toAmino(e) : undefined);
        }
        else {
            obj.txs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return SearchTxsResult.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SearchTxsResult",
            value: SearchTxsResult.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SearchTxsResult.decode(message.value);
    },
    toProto(message) {
        return SearchTxsResult.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.SearchTxsResult",
            value: SearchTxsResult.encode(message).finish()
        };
    }
};
//# sourceMappingURL=abci.js.map