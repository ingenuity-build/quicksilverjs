import { Duration } from "../../../../google/protobuf/duration";
import { Height } from "../../../core/client/v1/client";
import { ProofSpec } from "../../../../confio/proofs";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { MerkleRoot } from "../../../core/commitment/v1/commitment";
import { SignedHeader } from "../../../../tendermint/types/types";
import { ValidatorSet } from "../../../../tendermint/types/validator";
import { Long, isSet, toTimestamp, fromTimestamp, fromJsonTimestamp, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseClientState() {
    return {
        chain_id: "",
        trust_level: Fraction.fromPartial({}),
        trusting_period: Duration.fromPartial({}),
        unbonding_period: Duration.fromPartial({}),
        max_clock_drift: Duration.fromPartial({}),
        frozen_height: Height.fromPartial({}),
        latest_height: Height.fromPartial({}),
        proof_specs: [],
        upgrade_path: [],
        allow_update_after_expiry: false,
        allow_update_after_misbehaviour: false
    };
}
export const ClientState = {
    typeUrl: "/ibc.lightclients.tendermint.v1.ClientState",
    aminoType: "cosmos-sdk/ClientState",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain_id !== "") {
            writer.uint32(10).string(message.chain_id);
        }
        if (message.trust_level !== undefined) {
            Fraction.encode(message.trust_level, writer.uint32(18).fork()).ldelim();
        }
        if (message.trusting_period !== undefined) {
            Duration.encode(message.trusting_period, writer.uint32(26).fork()).ldelim();
        }
        if (message.unbonding_period !== undefined) {
            Duration.encode(message.unbonding_period, writer.uint32(34).fork()).ldelim();
        }
        if (message.max_clock_drift !== undefined) {
            Duration.encode(message.max_clock_drift, writer.uint32(42).fork()).ldelim();
        }
        if (message.frozen_height !== undefined) {
            Height.encode(message.frozen_height, writer.uint32(50).fork()).ldelim();
        }
        if (message.latest_height !== undefined) {
            Height.encode(message.latest_height, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.proof_specs) {
            ProofSpec.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.upgrade_path) {
            writer.uint32(74).string(v);
        }
        if (message.allow_update_after_expiry === true) {
            writer.uint32(80).bool(message.allow_update_after_expiry);
        }
        if (message.allow_update_after_misbehaviour === true) {
            writer.uint32(88).bool(message.allow_update_after_misbehaviour);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain_id = reader.string();
                    break;
                case 2:
                    message.trust_level = Fraction.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.trusting_period = Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.unbonding_period = Duration.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.max_clock_drift = Duration.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.frozen_height = Height.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.latest_height = Height.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.proof_specs.push(ProofSpec.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.upgrade_path.push(reader.string());
                    break;
                case 10:
                    message.allow_update_after_expiry = reader.bool();
                    break;
                case 11:
                    message.allow_update_after_misbehaviour = reader.bool();
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
            chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
            trust_level: isSet(object.trust_level) ? Fraction.fromJSON(object.trust_level) : undefined,
            trusting_period: isSet(object.trusting_period) ? Duration.fromJSON(object.trusting_period) : undefined,
            unbonding_period: isSet(object.unbonding_period) ? Duration.fromJSON(object.unbonding_period) : undefined,
            max_clock_drift: isSet(object.max_clock_drift) ? Duration.fromJSON(object.max_clock_drift) : undefined,
            frozen_height: isSet(object.frozen_height) ? Height.fromJSON(object.frozen_height) : undefined,
            latest_height: isSet(object.latest_height) ? Height.fromJSON(object.latest_height) : undefined,
            proof_specs: Array.isArray(object?.proof_specs) ? object.proof_specs.map((e) => ProofSpec.fromJSON(e)) : [],
            upgrade_path: Array.isArray(object?.upgrade_path) ? object.upgrade_path.map((e) => String(e)) : [],
            allow_update_after_expiry: isSet(object.allow_update_after_expiry) ? Boolean(object.allow_update_after_expiry) : false,
            allow_update_after_misbehaviour: isSet(object.allow_update_after_misbehaviour) ? Boolean(object.allow_update_after_misbehaviour) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.trust_level !== undefined && (obj.trust_level = message.trust_level ? Fraction.toJSON(message.trust_level) : undefined);
        message.trusting_period !== undefined && (obj.trusting_period = message.trusting_period ? Duration.toJSON(message.trusting_period) : undefined);
        message.unbonding_period !== undefined && (obj.unbonding_period = message.unbonding_period ? Duration.toJSON(message.unbonding_period) : undefined);
        message.max_clock_drift !== undefined && (obj.max_clock_drift = message.max_clock_drift ? Duration.toJSON(message.max_clock_drift) : undefined);
        message.frozen_height !== undefined && (obj.frozen_height = message.frozen_height ? Height.toJSON(message.frozen_height) : undefined);
        message.latest_height !== undefined && (obj.latest_height = message.latest_height ? Height.toJSON(message.latest_height) : undefined);
        if (message.proof_specs) {
            obj.proof_specs = message.proof_specs.map(e => e ? ProofSpec.toJSON(e) : undefined);
        }
        else {
            obj.proof_specs = [];
        }
        if (message.upgrade_path) {
            obj.upgrade_path = message.upgrade_path.map(e => e);
        }
        else {
            obj.upgrade_path = [];
        }
        message.allow_update_after_expiry !== undefined && (obj.allow_update_after_expiry = message.allow_update_after_expiry);
        message.allow_update_after_misbehaviour !== undefined && (obj.allow_update_after_misbehaviour = message.allow_update_after_misbehaviour);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClientState();
        message.chain_id = object.chain_id ?? "";
        message.trust_level = object.trust_level !== undefined && object.trust_level !== null ? Fraction.fromPartial(object.trust_level) : undefined;
        message.trusting_period = object.trusting_period !== undefined && object.trusting_period !== null ? Duration.fromPartial(object.trusting_period) : undefined;
        message.unbonding_period = object.unbonding_period !== undefined && object.unbonding_period !== null ? Duration.fromPartial(object.unbonding_period) : undefined;
        message.max_clock_drift = object.max_clock_drift !== undefined && object.max_clock_drift !== null ? Duration.fromPartial(object.max_clock_drift) : undefined;
        message.frozen_height = object.frozen_height !== undefined && object.frozen_height !== null ? Height.fromPartial(object.frozen_height) : undefined;
        message.latest_height = object.latest_height !== undefined && object.latest_height !== null ? Height.fromPartial(object.latest_height) : undefined;
        message.proof_specs = object.proof_specs?.map(e => ProofSpec.fromPartial(e)) || [];
        message.upgrade_path = object.upgrade_path?.map(e => e) || [];
        message.allow_update_after_expiry = object.allow_update_after_expiry ?? false;
        message.allow_update_after_misbehaviour = object.allow_update_after_misbehaviour ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            chain_id: object.chain_id,
            trust_level: object?.trust_level ? Fraction.fromAmino(object.trust_level) : undefined,
            trusting_period: object?.trusting_period ? Duration.fromAmino(object.trusting_period) : undefined,
            unbonding_period: object?.unbonding_period ? Duration.fromAmino(object.unbonding_period) : undefined,
            max_clock_drift: object?.max_clock_drift ? Duration.fromAmino(object.max_clock_drift) : undefined,
            frozen_height: object?.frozen_height ? Height.fromAmino(object.frozen_height) : undefined,
            latest_height: object?.latest_height ? Height.fromAmino(object.latest_height) : undefined,
            proof_specs: Array.isArray(object?.proof_specs) ? object.proof_specs.map((e) => ProofSpec.fromAmino(e)) : [],
            upgrade_path: Array.isArray(object?.upgrade_path) ? object.upgrade_path.map((e) => e) : [],
            allow_update_after_expiry: object.allow_update_after_expiry,
            allow_update_after_misbehaviour: object.allow_update_after_misbehaviour
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chain_id;
        obj.trust_level = message.trust_level ? Fraction.toAmino(message.trust_level) : undefined;
        obj.trusting_period = message.trusting_period ? Duration.toAmino(message.trusting_period) : undefined;
        obj.unbonding_period = message.unbonding_period ? Duration.toAmino(message.unbonding_period) : undefined;
        obj.max_clock_drift = message.max_clock_drift ? Duration.toAmino(message.max_clock_drift) : undefined;
        obj.frozen_height = message.frozen_height ? Height.toAmino(message.frozen_height) : {};
        obj.latest_height = message.latest_height ? Height.toAmino(message.latest_height) : {};
        if (message.proof_specs) {
            obj.proof_specs = message.proof_specs.map(e => e ? ProofSpec.toAmino(e) : undefined);
        }
        else {
            obj.proof_specs = [];
        }
        if (message.upgrade_path) {
            obj.upgrade_path = message.upgrade_path.map(e => e);
        }
        else {
            obj.upgrade_path = [];
        }
        obj.allow_update_after_expiry = message.allow_update_after_expiry;
        obj.allow_update_after_misbehaviour = message.allow_update_after_misbehaviour;
        return obj;
    },
    fromAminoMsg(object) {
        return ClientState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ClientState",
            value: ClientState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ClientState.decode(message.value);
    },
    toProto(message) {
        return ClientState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.tendermint.v1.ClientState",
            value: ClientState.encode(message).finish()
        };
    }
};
function createBaseConsensusState() {
    return {
        timestamp: new Date(),
        root: MerkleRoot.fromPartial({}),
        next_validators_hash: new Uint8Array()
    };
}
export const ConsensusState = {
    typeUrl: "/ibc.lightclients.tendermint.v1.ConsensusState",
    aminoType: "cosmos-sdk/ConsensusState",
    encode(message, writer = _m0.Writer.create()) {
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
        }
        if (message.root !== undefined) {
            MerkleRoot.encode(message.root, writer.uint32(18).fork()).ldelim();
        }
        if (message.next_validators_hash.length !== 0) {
            writer.uint32(26).bytes(message.next_validators_hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.root = MerkleRoot.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.next_validators_hash = reader.bytes();
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
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
            root: isSet(object.root) ? MerkleRoot.fromJSON(object.root) : undefined,
            next_validators_hash: isSet(object.next_validators_hash) ? bytesFromBase64(object.next_validators_hash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        message.root !== undefined && (obj.root = message.root ? MerkleRoot.toJSON(message.root) : undefined);
        message.next_validators_hash !== undefined && (obj.next_validators_hash = base64FromBytes(message.next_validators_hash !== undefined ? message.next_validators_hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConsensusState();
        message.timestamp = object.timestamp ?? undefined;
        message.root = object.root !== undefined && object.root !== null ? MerkleRoot.fromPartial(object.root) : undefined;
        message.next_validators_hash = object.next_validators_hash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            timestamp: object.timestamp,
            root: object?.root ? MerkleRoot.fromAmino(object.root) : undefined,
            next_validators_hash: object.next_validators_hash
        };
    },
    toAmino(message) {
        const obj = {};
        obj.timestamp = message.timestamp;
        obj.root = message.root ? MerkleRoot.toAmino(message.root) : undefined;
        obj.next_validators_hash = message.next_validators_hash;
        return obj;
    },
    fromAminoMsg(object) {
        return ConsensusState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConsensusState",
            value: ConsensusState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ConsensusState.decode(message.value);
    },
    toProto(message) {
        return ConsensusState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.tendermint.v1.ConsensusState",
            value: ConsensusState.encode(message).finish()
        };
    }
};
function createBaseMisbehaviour() {
    return {
        client_id: "",
        header1: Header.fromPartial({}),
        header2: Header.fromPartial({})
    };
}
export const Misbehaviour = {
    typeUrl: "/ibc.lightclients.tendermint.v1.Misbehaviour",
    aminoType: "cosmos-sdk/Misbehaviour",
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.header1 !== undefined) {
            Header.encode(message.header1, writer.uint32(18).fork()).ldelim();
        }
        if (message.header2 !== undefined) {
            Header.encode(message.header2, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMisbehaviour();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.header1 = Header.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.header2 = Header.decode(reader, reader.uint32());
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
            client_id: isSet(object.client_id) ? String(object.client_id) : "",
            header1: isSet(object.header1) ? Header.fromJSON(object.header1) : undefined,
            header2: isSet(object.header2) ? Header.fromJSON(object.header2) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.header1 !== undefined && (obj.header1 = message.header1 ? Header.toJSON(message.header1) : undefined);
        message.header2 !== undefined && (obj.header2 = message.header2 ? Header.toJSON(message.header2) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMisbehaviour();
        message.client_id = object.client_id ?? "";
        message.header1 = object.header1 !== undefined && object.header1 !== null ? Header.fromPartial(object.header1) : undefined;
        message.header2 = object.header2 !== undefined && object.header2 !== null ? Header.fromPartial(object.header2) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            client_id: object.client_id,
            header_1: object?.header_1 ? Header.fromAmino(object.header_1) : undefined,
            header_2: object?.header_2 ? Header.fromAmino(object.header_2) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        obj.header_1 = message.header_1 ? Header.toAmino(message.header_1) : undefined;
        obj.header_2 = message.header_2 ? Header.toAmino(message.header_2) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Misbehaviour.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Misbehaviour",
            value: Misbehaviour.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Misbehaviour.decode(message.value);
    },
    toProto(message) {
        return Misbehaviour.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.tendermint.v1.Misbehaviour",
            value: Misbehaviour.encode(message).finish()
        };
    }
};
function createBaseHeader() {
    return {
        signed_header: SignedHeader.fromPartial({}),
        validator_set: ValidatorSet.fromPartial({}),
        trusted_height: Height.fromPartial({}),
        trusted_validators: ValidatorSet.fromPartial({})
    };
}
export const Header = {
    typeUrl: "/ibc.lightclients.tendermint.v1.Header",
    aminoType: "cosmos-sdk/Header",
    encode(message, writer = _m0.Writer.create()) {
        if (message.signed_header !== undefined) {
            SignedHeader.encode(message.signed_header, writer.uint32(10).fork()).ldelim();
        }
        if (message.validator_set !== undefined) {
            ValidatorSet.encode(message.validator_set, writer.uint32(18).fork()).ldelim();
        }
        if (message.trusted_height !== undefined) {
            Height.encode(message.trusted_height, writer.uint32(26).fork()).ldelim();
        }
        if (message.trusted_validators !== undefined) {
            ValidatorSet.encode(message.trusted_validators, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signed_header = SignedHeader.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validator_set = ValidatorSet.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.trusted_height = Height.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.trusted_validators = ValidatorSet.decode(reader, reader.uint32());
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
            signed_header: isSet(object.signed_header) ? SignedHeader.fromJSON(object.signed_header) : undefined,
            validator_set: isSet(object.validator_set) ? ValidatorSet.fromJSON(object.validator_set) : undefined,
            trusted_height: isSet(object.trusted_height) ? Height.fromJSON(object.trusted_height) : undefined,
            trusted_validators: isSet(object.trusted_validators) ? ValidatorSet.fromJSON(object.trusted_validators) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.signed_header !== undefined && (obj.signed_header = message.signed_header ? SignedHeader.toJSON(message.signed_header) : undefined);
        message.validator_set !== undefined && (obj.validator_set = message.validator_set ? ValidatorSet.toJSON(message.validator_set) : undefined);
        message.trusted_height !== undefined && (obj.trusted_height = message.trusted_height ? Height.toJSON(message.trusted_height) : undefined);
        message.trusted_validators !== undefined && (obj.trusted_validators = message.trusted_validators ? ValidatorSet.toJSON(message.trusted_validators) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHeader();
        message.signed_header = object.signed_header !== undefined && object.signed_header !== null ? SignedHeader.fromPartial(object.signed_header) : undefined;
        message.validator_set = object.validator_set !== undefined && object.validator_set !== null ? ValidatorSet.fromPartial(object.validator_set) : undefined;
        message.trusted_height = object.trusted_height !== undefined && object.trusted_height !== null ? Height.fromPartial(object.trusted_height) : undefined;
        message.trusted_validators = object.trusted_validators !== undefined && object.trusted_validators !== null ? ValidatorSet.fromPartial(object.trusted_validators) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            signed_header: object?.signed_header ? SignedHeader.fromAmino(object.signed_header) : undefined,
            validator_set: object?.validator_set ? ValidatorSet.fromAmino(object.validator_set) : undefined,
            trusted_height: object?.trusted_height ? Height.fromAmino(object.trusted_height) : undefined,
            trusted_validators: object?.trusted_validators ? ValidatorSet.fromAmino(object.trusted_validators) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.signed_header = message.signed_header ? SignedHeader.toAmino(message.signed_header) : undefined;
        obj.validator_set = message.validator_set ? ValidatorSet.toAmino(message.validator_set) : undefined;
        obj.trusted_height = message.trusted_height ? Height.toAmino(message.trusted_height) : {};
        obj.trusted_validators = message.trusted_validators ? ValidatorSet.toAmino(message.trusted_validators) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Header.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Header",
            value: Header.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Header.decode(message.value);
    },
    toProto(message) {
        return Header.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.tendermint.v1.Header",
            value: Header.encode(message).finish()
        };
    }
};
function createBaseFraction() {
    return {
        numerator: Long.UZERO,
        denominator: Long.UZERO
    };
}
export const Fraction = {
    typeUrl: "/ibc.lightclients.tendermint.v1.Fraction",
    aminoType: "cosmos-sdk/Fraction",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.numerator.isZero()) {
            writer.uint32(8).uint64(message.numerator);
        }
        if (!message.denominator.isZero()) {
            writer.uint32(16).uint64(message.denominator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFraction();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.numerator = reader.uint64();
                    break;
                case 2:
                    message.denominator = reader.uint64();
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
            numerator: isSet(object.numerator) ? Long.fromValue(object.numerator) : Long.UZERO,
            denominator: isSet(object.denominator) ? Long.fromValue(object.denominator) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.numerator !== undefined && (obj.numerator = (message.numerator || Long.UZERO).toString());
        message.denominator !== undefined && (obj.denominator = (message.denominator || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFraction();
        message.numerator = object.numerator !== undefined && object.numerator !== null ? Long.fromValue(object.numerator) : Long.UZERO;
        message.denominator = object.denominator !== undefined && object.denominator !== null ? Long.fromValue(object.denominator) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            numerator: Long.fromString(object.numerator),
            denominator: Long.fromString(object.denominator)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.numerator = message.numerator ? message.numerator.toString() : undefined;
        obj.denominator = message.denominator ? message.denominator.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Fraction.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Fraction",
            value: Fraction.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Fraction.decode(message.value);
    },
    toProto(message) {
        return Fraction.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.tendermint.v1.Fraction",
            value: Fraction.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tendermint.js.map