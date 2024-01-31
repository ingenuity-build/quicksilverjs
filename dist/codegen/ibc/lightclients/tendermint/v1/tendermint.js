"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fraction = exports.Header = exports.Misbehaviour = exports.ConsensusState = exports.ClientState = void 0;
const duration_1 = require("../../../../google/protobuf/duration");
const client_1 = require("../../../core/client/v1/client");
const proofs_1 = require("../../../../confio/proofs");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const commitment_1 = require("../../../core/commitment/v1/commitment");
const types_1 = require("../../../../tendermint/types/types");
const validator_1 = require("../../../../tendermint/types/validator");
const helpers_1 = require("../../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseClientState() {
    return {
        chain_id: "",
        trust_level: exports.Fraction.fromPartial({}),
        trusting_period: duration_1.Duration.fromPartial({}),
        unbonding_period: duration_1.Duration.fromPartial({}),
        max_clock_drift: duration_1.Duration.fromPartial({}),
        frozen_height: client_1.Height.fromPartial({}),
        latest_height: client_1.Height.fromPartial({}),
        proof_specs: [],
        upgrade_path: [],
        allow_update_after_expiry: false,
        allow_update_after_misbehaviour: false
    };
}
exports.ClientState = {
    typeUrl: "/ibc.lightclients.tendermint.v1.ClientState",
    aminoType: "cosmos-sdk/ClientState",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain_id !== "") {
            writer.uint32(10).string(message.chain_id);
        }
        if (message.trust_level !== undefined) {
            exports.Fraction.encode(message.trust_level, writer.uint32(18).fork()).ldelim();
        }
        if (message.trusting_period !== undefined) {
            duration_1.Duration.encode(message.trusting_period, writer.uint32(26).fork()).ldelim();
        }
        if (message.unbonding_period !== undefined) {
            duration_1.Duration.encode(message.unbonding_period, writer.uint32(34).fork()).ldelim();
        }
        if (message.max_clock_drift !== undefined) {
            duration_1.Duration.encode(message.max_clock_drift, writer.uint32(42).fork()).ldelim();
        }
        if (message.frozen_height !== undefined) {
            client_1.Height.encode(message.frozen_height, writer.uint32(50).fork()).ldelim();
        }
        if (message.latest_height !== undefined) {
            client_1.Height.encode(message.latest_height, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.proof_specs) {
            proofs_1.ProofSpec.encode(v, writer.uint32(66).fork()).ldelim();
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
                    message.trust_level = exports.Fraction.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.trusting_period = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.unbonding_period = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.max_clock_drift = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.frozen_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.latest_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.proof_specs.push(proofs_1.ProofSpec.decode(reader, reader.uint32()));
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
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : "",
            trust_level: (0, helpers_1.isSet)(object.trust_level) ? exports.Fraction.fromJSON(object.trust_level) : undefined,
            trusting_period: (0, helpers_1.isSet)(object.trusting_period) ? duration_1.Duration.fromJSON(object.trusting_period) : undefined,
            unbonding_period: (0, helpers_1.isSet)(object.unbonding_period) ? duration_1.Duration.fromJSON(object.unbonding_period) : undefined,
            max_clock_drift: (0, helpers_1.isSet)(object.max_clock_drift) ? duration_1.Duration.fromJSON(object.max_clock_drift) : undefined,
            frozen_height: (0, helpers_1.isSet)(object.frozen_height) ? client_1.Height.fromJSON(object.frozen_height) : undefined,
            latest_height: (0, helpers_1.isSet)(object.latest_height) ? client_1.Height.fromJSON(object.latest_height) : undefined,
            proof_specs: Array.isArray(object?.proof_specs) ? object.proof_specs.map((e) => proofs_1.ProofSpec.fromJSON(e)) : [],
            upgrade_path: Array.isArray(object?.upgrade_path) ? object.upgrade_path.map((e) => String(e)) : [],
            allow_update_after_expiry: (0, helpers_1.isSet)(object.allow_update_after_expiry) ? Boolean(object.allow_update_after_expiry) : false,
            allow_update_after_misbehaviour: (0, helpers_1.isSet)(object.allow_update_after_misbehaviour) ? Boolean(object.allow_update_after_misbehaviour) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.trust_level !== undefined && (obj.trust_level = message.trust_level ? exports.Fraction.toJSON(message.trust_level) : undefined);
        message.trusting_period !== undefined && (obj.trusting_period = message.trusting_period ? duration_1.Duration.toJSON(message.trusting_period) : undefined);
        message.unbonding_period !== undefined && (obj.unbonding_period = message.unbonding_period ? duration_1.Duration.toJSON(message.unbonding_period) : undefined);
        message.max_clock_drift !== undefined && (obj.max_clock_drift = message.max_clock_drift ? duration_1.Duration.toJSON(message.max_clock_drift) : undefined);
        message.frozen_height !== undefined && (obj.frozen_height = message.frozen_height ? client_1.Height.toJSON(message.frozen_height) : undefined);
        message.latest_height !== undefined && (obj.latest_height = message.latest_height ? client_1.Height.toJSON(message.latest_height) : undefined);
        if (message.proof_specs) {
            obj.proof_specs = message.proof_specs.map(e => e ? proofs_1.ProofSpec.toJSON(e) : undefined);
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
        message.trust_level = object.trust_level !== undefined && object.trust_level !== null ? exports.Fraction.fromPartial(object.trust_level) : undefined;
        message.trusting_period = object.trusting_period !== undefined && object.trusting_period !== null ? duration_1.Duration.fromPartial(object.trusting_period) : undefined;
        message.unbonding_period = object.unbonding_period !== undefined && object.unbonding_period !== null ? duration_1.Duration.fromPartial(object.unbonding_period) : undefined;
        message.max_clock_drift = object.max_clock_drift !== undefined && object.max_clock_drift !== null ? duration_1.Duration.fromPartial(object.max_clock_drift) : undefined;
        message.frozen_height = object.frozen_height !== undefined && object.frozen_height !== null ? client_1.Height.fromPartial(object.frozen_height) : undefined;
        message.latest_height = object.latest_height !== undefined && object.latest_height !== null ? client_1.Height.fromPartial(object.latest_height) : undefined;
        message.proof_specs = object.proof_specs?.map(e => proofs_1.ProofSpec.fromPartial(e)) || [];
        message.upgrade_path = object.upgrade_path?.map(e => e) || [];
        message.allow_update_after_expiry = object.allow_update_after_expiry ?? false;
        message.allow_update_after_misbehaviour = object.allow_update_after_misbehaviour ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            chain_id: object.chain_id,
            trust_level: object?.trust_level ? exports.Fraction.fromAmino(object.trust_level) : undefined,
            trusting_period: object?.trusting_period ? duration_1.Duration.fromAmino(object.trusting_period) : undefined,
            unbonding_period: object?.unbonding_period ? duration_1.Duration.fromAmino(object.unbonding_period) : undefined,
            max_clock_drift: object?.max_clock_drift ? duration_1.Duration.fromAmino(object.max_clock_drift) : undefined,
            frozen_height: object?.frozen_height ? client_1.Height.fromAmino(object.frozen_height) : undefined,
            latest_height: object?.latest_height ? client_1.Height.fromAmino(object.latest_height) : undefined,
            proof_specs: Array.isArray(object?.proof_specs) ? object.proof_specs.map((e) => proofs_1.ProofSpec.fromAmino(e)) : [],
            upgrade_path: Array.isArray(object?.upgrade_path) ? object.upgrade_path.map((e) => e) : [],
            allow_update_after_expiry: object.allow_update_after_expiry,
            allow_update_after_misbehaviour: object.allow_update_after_misbehaviour
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chain_id;
        obj.trust_level = message.trust_level ? exports.Fraction.toAmino(message.trust_level) : undefined;
        obj.trusting_period = message.trusting_period ? duration_1.Duration.toAmino(message.trusting_period) : undefined;
        obj.unbonding_period = message.unbonding_period ? duration_1.Duration.toAmino(message.unbonding_period) : undefined;
        obj.max_clock_drift = message.max_clock_drift ? duration_1.Duration.toAmino(message.max_clock_drift) : undefined;
        obj.frozen_height = message.frozen_height ? client_1.Height.toAmino(message.frozen_height) : {};
        obj.latest_height = message.latest_height ? client_1.Height.toAmino(message.latest_height) : {};
        if (message.proof_specs) {
            obj.proof_specs = message.proof_specs.map(e => e ? proofs_1.ProofSpec.toAmino(e) : undefined);
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
        return exports.ClientState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ClientState",
            value: exports.ClientState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ClientState.decode(message.value);
    },
    toProto(message) {
        return exports.ClientState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.tendermint.v1.ClientState",
            value: exports.ClientState.encode(message).finish()
        };
    }
};
function createBaseConsensusState() {
    return {
        timestamp: new Date(),
        root: commitment_1.MerkleRoot.fromPartial({}),
        next_validators_hash: new Uint8Array()
    };
}
exports.ConsensusState = {
    typeUrl: "/ibc.lightclients.tendermint.v1.ConsensusState",
    aminoType: "cosmos-sdk/ConsensusState",
    encode(message, writer = _m0.Writer.create()) {
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(10).fork()).ldelim();
        }
        if (message.root !== undefined) {
            commitment_1.MerkleRoot.encode(message.root, writer.uint32(18).fork()).ldelim();
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
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.root = commitment_1.MerkleRoot.decode(reader, reader.uint32());
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
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? (0, helpers_1.fromJsonTimestamp)(object.timestamp) : undefined,
            root: (0, helpers_1.isSet)(object.root) ? commitment_1.MerkleRoot.fromJSON(object.root) : undefined,
            next_validators_hash: (0, helpers_1.isSet)(object.next_validators_hash) ? (0, helpers_1.bytesFromBase64)(object.next_validators_hash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        message.root !== undefined && (obj.root = message.root ? commitment_1.MerkleRoot.toJSON(message.root) : undefined);
        message.next_validators_hash !== undefined && (obj.next_validators_hash = (0, helpers_1.base64FromBytes)(message.next_validators_hash !== undefined ? message.next_validators_hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConsensusState();
        message.timestamp = object.timestamp ?? undefined;
        message.root = object.root !== undefined && object.root !== null ? commitment_1.MerkleRoot.fromPartial(object.root) : undefined;
        message.next_validators_hash = object.next_validators_hash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            timestamp: object.timestamp,
            root: object?.root ? commitment_1.MerkleRoot.fromAmino(object.root) : undefined,
            next_validators_hash: object.next_validators_hash
        };
    },
    toAmino(message) {
        const obj = {};
        obj.timestamp = message.timestamp;
        obj.root = message.root ? commitment_1.MerkleRoot.toAmino(message.root) : undefined;
        obj.next_validators_hash = message.next_validators_hash;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConsensusState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConsensusState",
            value: exports.ConsensusState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ConsensusState.decode(message.value);
    },
    toProto(message) {
        return exports.ConsensusState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.tendermint.v1.ConsensusState",
            value: exports.ConsensusState.encode(message).finish()
        };
    }
};
function createBaseMisbehaviour() {
    return {
        client_id: "",
        header1: exports.Header.fromPartial({}),
        header2: exports.Header.fromPartial({})
    };
}
exports.Misbehaviour = {
    typeUrl: "/ibc.lightclients.tendermint.v1.Misbehaviour",
    aminoType: "cosmos-sdk/Misbehaviour",
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.header1 !== undefined) {
            exports.Header.encode(message.header1, writer.uint32(18).fork()).ldelim();
        }
        if (message.header2 !== undefined) {
            exports.Header.encode(message.header2, writer.uint32(26).fork()).ldelim();
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
                    message.header1 = exports.Header.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.header2 = exports.Header.decode(reader, reader.uint32());
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
            client_id: (0, helpers_1.isSet)(object.client_id) ? String(object.client_id) : "",
            header1: (0, helpers_1.isSet)(object.header1) ? exports.Header.fromJSON(object.header1) : undefined,
            header2: (0, helpers_1.isSet)(object.header2) ? exports.Header.fromJSON(object.header2) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.header1 !== undefined && (obj.header1 = message.header1 ? exports.Header.toJSON(message.header1) : undefined);
        message.header2 !== undefined && (obj.header2 = message.header2 ? exports.Header.toJSON(message.header2) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMisbehaviour();
        message.client_id = object.client_id ?? "";
        message.header1 = object.header1 !== undefined && object.header1 !== null ? exports.Header.fromPartial(object.header1) : undefined;
        message.header2 = object.header2 !== undefined && object.header2 !== null ? exports.Header.fromPartial(object.header2) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            client_id: object.client_id,
            header_1: object?.header_1 ? exports.Header.fromAmino(object.header_1) : undefined,
            header_2: object?.header_2 ? exports.Header.fromAmino(object.header_2) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        obj.header_1 = message.header_1 ? exports.Header.toAmino(message.header_1) : undefined;
        obj.header_2 = message.header_2 ? exports.Header.toAmino(message.header_2) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Misbehaviour.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Misbehaviour",
            value: exports.Misbehaviour.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Misbehaviour.decode(message.value);
    },
    toProto(message) {
        return exports.Misbehaviour.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.tendermint.v1.Misbehaviour",
            value: exports.Misbehaviour.encode(message).finish()
        };
    }
};
function createBaseHeader() {
    return {
        signed_header: types_1.SignedHeader.fromPartial({}),
        validator_set: validator_1.ValidatorSet.fromPartial({}),
        trusted_height: client_1.Height.fromPartial({}),
        trusted_validators: validator_1.ValidatorSet.fromPartial({})
    };
}
exports.Header = {
    typeUrl: "/ibc.lightclients.tendermint.v1.Header",
    aminoType: "cosmos-sdk/Header",
    encode(message, writer = _m0.Writer.create()) {
        if (message.signed_header !== undefined) {
            types_1.SignedHeader.encode(message.signed_header, writer.uint32(10).fork()).ldelim();
        }
        if (message.validator_set !== undefined) {
            validator_1.ValidatorSet.encode(message.validator_set, writer.uint32(18).fork()).ldelim();
        }
        if (message.trusted_height !== undefined) {
            client_1.Height.encode(message.trusted_height, writer.uint32(26).fork()).ldelim();
        }
        if (message.trusted_validators !== undefined) {
            validator_1.ValidatorSet.encode(message.trusted_validators, writer.uint32(34).fork()).ldelim();
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
                    message.signed_header = types_1.SignedHeader.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validator_set = validator_1.ValidatorSet.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.trusted_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.trusted_validators = validator_1.ValidatorSet.decode(reader, reader.uint32());
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
            signed_header: (0, helpers_1.isSet)(object.signed_header) ? types_1.SignedHeader.fromJSON(object.signed_header) : undefined,
            validator_set: (0, helpers_1.isSet)(object.validator_set) ? validator_1.ValidatorSet.fromJSON(object.validator_set) : undefined,
            trusted_height: (0, helpers_1.isSet)(object.trusted_height) ? client_1.Height.fromJSON(object.trusted_height) : undefined,
            trusted_validators: (0, helpers_1.isSet)(object.trusted_validators) ? validator_1.ValidatorSet.fromJSON(object.trusted_validators) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.signed_header !== undefined && (obj.signed_header = message.signed_header ? types_1.SignedHeader.toJSON(message.signed_header) : undefined);
        message.validator_set !== undefined && (obj.validator_set = message.validator_set ? validator_1.ValidatorSet.toJSON(message.validator_set) : undefined);
        message.trusted_height !== undefined && (obj.trusted_height = message.trusted_height ? client_1.Height.toJSON(message.trusted_height) : undefined);
        message.trusted_validators !== undefined && (obj.trusted_validators = message.trusted_validators ? validator_1.ValidatorSet.toJSON(message.trusted_validators) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHeader();
        message.signed_header = object.signed_header !== undefined && object.signed_header !== null ? types_1.SignedHeader.fromPartial(object.signed_header) : undefined;
        message.validator_set = object.validator_set !== undefined && object.validator_set !== null ? validator_1.ValidatorSet.fromPartial(object.validator_set) : undefined;
        message.trusted_height = object.trusted_height !== undefined && object.trusted_height !== null ? client_1.Height.fromPartial(object.trusted_height) : undefined;
        message.trusted_validators = object.trusted_validators !== undefined && object.trusted_validators !== null ? validator_1.ValidatorSet.fromPartial(object.trusted_validators) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            signed_header: object?.signed_header ? types_1.SignedHeader.fromAmino(object.signed_header) : undefined,
            validator_set: object?.validator_set ? validator_1.ValidatorSet.fromAmino(object.validator_set) : undefined,
            trusted_height: object?.trusted_height ? client_1.Height.fromAmino(object.trusted_height) : undefined,
            trusted_validators: object?.trusted_validators ? validator_1.ValidatorSet.fromAmino(object.trusted_validators) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.signed_header = message.signed_header ? types_1.SignedHeader.toAmino(message.signed_header) : undefined;
        obj.validator_set = message.validator_set ? validator_1.ValidatorSet.toAmino(message.validator_set) : undefined;
        obj.trusted_height = message.trusted_height ? client_1.Height.toAmino(message.trusted_height) : {};
        obj.trusted_validators = message.trusted_validators ? validator_1.ValidatorSet.toAmino(message.trusted_validators) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Header.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Header",
            value: exports.Header.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Header.decode(message.value);
    },
    toProto(message) {
        return exports.Header.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.tendermint.v1.Header",
            value: exports.Header.encode(message).finish()
        };
    }
};
function createBaseFraction() {
    return {
        numerator: helpers_1.Long.UZERO,
        denominator: helpers_1.Long.UZERO
    };
}
exports.Fraction = {
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
            numerator: (0, helpers_1.isSet)(object.numerator) ? helpers_1.Long.fromValue(object.numerator) : helpers_1.Long.UZERO,
            denominator: (0, helpers_1.isSet)(object.denominator) ? helpers_1.Long.fromValue(object.denominator) : helpers_1.Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.numerator !== undefined && (obj.numerator = (message.numerator || helpers_1.Long.UZERO).toString());
        message.denominator !== undefined && (obj.denominator = (message.denominator || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFraction();
        message.numerator = object.numerator !== undefined && object.numerator !== null ? helpers_1.Long.fromValue(object.numerator) : helpers_1.Long.UZERO;
        message.denominator = object.denominator !== undefined && object.denominator !== null ? helpers_1.Long.fromValue(object.denominator) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            numerator: helpers_1.Long.fromString(object.numerator),
            denominator: helpers_1.Long.fromString(object.denominator)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.numerator = message.numerator ? message.numerator.toString() : undefined;
        obj.denominator = message.denominator ? message.denominator.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Fraction.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Fraction",
            value: exports.Fraction.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Fraction.decode(message.value);
    },
    toProto(message) {
        return exports.Fraction.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.tendermint.v1.Fraction",
            value: exports.Fraction.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tendermint.js.map