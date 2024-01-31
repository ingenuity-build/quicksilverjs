import { Params, ValidatorSigningInfo } from "./slashing";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        signing_infos: [],
        missed_blocks: []
    };
}
export const GenesisState = {
    typeUrl: "/cosmos.slashing.v1beta1.GenesisState",
    aminoType: "cosmos-sdk/GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.signing_infos) {
            SigningInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.missed_blocks) {
            ValidatorMissedBlocks.encode(v, writer.uint32(26).fork()).ldelim();
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
                    message.signing_infos.push(SigningInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.missed_blocks.push(ValidatorMissedBlocks.decode(reader, reader.uint32()));
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
            signing_infos: Array.isArray(object?.signing_infos) ? object.signing_infos.map((e) => SigningInfo.fromJSON(e)) : [],
            missed_blocks: Array.isArray(object?.missed_blocks) ? object.missed_blocks.map((e) => ValidatorMissedBlocks.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.signing_infos) {
            obj.signing_infos = message.signing_infos.map(e => e ? SigningInfo.toJSON(e) : undefined);
        }
        else {
            obj.signing_infos = [];
        }
        if (message.missed_blocks) {
            obj.missed_blocks = message.missed_blocks.map(e => e ? ValidatorMissedBlocks.toJSON(e) : undefined);
        }
        else {
            obj.missed_blocks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.signing_infos = object.signing_infos?.map(e => SigningInfo.fromPartial(e)) || [];
        message.missed_blocks = object.missed_blocks?.map(e => ValidatorMissedBlocks.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? Params.fromAmino(object.params) : undefined,
            signing_infos: Array.isArray(object?.signing_infos) ? object.signing_infos.map((e) => SigningInfo.fromAmino(e)) : [],
            missed_blocks: Array.isArray(object?.missed_blocks) ? object.missed_blocks.map((e) => ValidatorMissedBlocks.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.signing_infos) {
            obj.signing_infos = message.signing_infos.map(e => e ? SigningInfo.toAmino(e) : undefined);
        }
        else {
            obj.signing_infos = [];
        }
        if (message.missed_blocks) {
            obj.missed_blocks = message.missed_blocks.map(e => e ? ValidatorMissedBlocks.toAmino(e) : undefined);
        }
        else {
            obj.missed_blocks = [];
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
            typeUrl: "/cosmos.slashing.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
function createBaseSigningInfo() {
    return {
        address: "",
        validator_signing_info: ValidatorSigningInfo.fromPartial({})
    };
}
export const SigningInfo = {
    typeUrl: "/cosmos.slashing.v1beta1.SigningInfo",
    aminoType: "cosmos-sdk/SigningInfo",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.validator_signing_info !== undefined) {
            ValidatorSigningInfo.encode(message.validator_signing_info, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSigningInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.validator_signing_info = ValidatorSigningInfo.decode(reader, reader.uint32());
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
            address: isSet(object.address) ? String(object.address) : "",
            validator_signing_info: isSet(object.validator_signing_info) ? ValidatorSigningInfo.fromJSON(object.validator_signing_info) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.validator_signing_info !== undefined && (obj.validator_signing_info = message.validator_signing_info ? ValidatorSigningInfo.toJSON(message.validator_signing_info) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSigningInfo();
        message.address = object.address ?? "";
        message.validator_signing_info = object.validator_signing_info !== undefined && object.validator_signing_info !== null ? ValidatorSigningInfo.fromPartial(object.validator_signing_info) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            validator_signing_info: object?.validator_signing_info ? ValidatorSigningInfo.fromAmino(object.validator_signing_info) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.validator_signing_info = message.validator_signing_info ? ValidatorSigningInfo.toAmino(message.validator_signing_info) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SigningInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SigningInfo",
            value: SigningInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SigningInfo.decode(message.value);
    },
    toProto(message) {
        return SigningInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.SigningInfo",
            value: SigningInfo.encode(message).finish()
        };
    }
};
function createBaseValidatorMissedBlocks() {
    return {
        address: "",
        missed_blocks: []
    };
}
export const ValidatorMissedBlocks = {
    typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlocks",
    aminoType: "cosmos-sdk/ValidatorMissedBlocks",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.missed_blocks) {
            MissedBlock.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorMissedBlocks();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.missed_blocks.push(MissedBlock.decode(reader, reader.uint32()));
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
            address: isSet(object.address) ? String(object.address) : "",
            missed_blocks: Array.isArray(object?.missed_blocks) ? object.missed_blocks.map((e) => MissedBlock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.missed_blocks) {
            obj.missed_blocks = message.missed_blocks.map(e => e ? MissedBlock.toJSON(e) : undefined);
        }
        else {
            obj.missed_blocks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorMissedBlocks();
        message.address = object.address ?? "";
        message.missed_blocks = object.missed_blocks?.map(e => MissedBlock.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            missed_blocks: Array.isArray(object?.missed_blocks) ? object.missed_blocks.map((e) => MissedBlock.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        if (message.missed_blocks) {
            obj.missed_blocks = message.missed_blocks.map(e => e ? MissedBlock.toAmino(e) : undefined);
        }
        else {
            obj.missed_blocks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorMissedBlocks.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorMissedBlocks",
            value: ValidatorMissedBlocks.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValidatorMissedBlocks.decode(message.value);
    },
    toProto(message) {
        return ValidatorMissedBlocks.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlocks",
            value: ValidatorMissedBlocks.encode(message).finish()
        };
    }
};
function createBaseMissedBlock() {
    return {
        index: Long.ZERO,
        missed: false
    };
}
export const MissedBlock = {
    typeUrl: "/cosmos.slashing.v1beta1.MissedBlock",
    aminoType: "cosmos-sdk/MissedBlock",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.index.isZero()) {
            writer.uint32(8).int64(message.index);
        }
        if (message.missed === true) {
            writer.uint32(16).bool(message.missed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMissedBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.int64();
                    break;
                case 2:
                    message.missed = reader.bool();
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
            index: isSet(object.index) ? Long.fromValue(object.index) : Long.ZERO,
            missed: isSet(object.missed) ? Boolean(object.missed) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = (message.index || Long.ZERO).toString());
        message.missed !== undefined && (obj.missed = message.missed);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMissedBlock();
        message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.ZERO;
        message.missed = object.missed ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            index: Long.fromString(object.index),
            missed: object.missed
        };
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index ? message.index.toString() : undefined;
        obj.missed = message.missed;
        return obj;
    },
    fromAminoMsg(object) {
        return MissedBlock.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MissedBlock",
            value: MissedBlock.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MissedBlock.decode(message.value);
    },
    toProto(message) {
        return MissedBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.MissedBlock",
            value: MissedBlock.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map