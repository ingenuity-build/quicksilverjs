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
exports.LastValidatorPower = exports.GenesisState = void 0;
const staking_1 = require("./staking");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseGenesisState() {
    return {
        params: staking_1.Params.fromPartial({}),
        last_total_power: new Uint8Array(),
        last_validator_powers: [],
        validators: [],
        delegations: [],
        unbonding_delegations: [],
        redelegations: [],
        exported: false
    };
}
exports.GenesisState = {
    typeUrl: "/cosmos.staking.v1beta1.GenesisState",
    aminoType: "cosmos-sdk/GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            staking_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.last_total_power.length !== 0) {
            writer.uint32(18).bytes(message.last_total_power);
        }
        for (const v of message.last_validator_powers) {
            exports.LastValidatorPower.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.validators) {
            staking_1.Validator.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.delegations) {
            staking_1.Delegation.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.unbonding_delegations) {
            staking_1.UnbondingDelegation.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.redelegations) {
            staking_1.Redelegation.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.exported === true) {
            writer.uint32(64).bool(message.exported);
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
                    message.params = staking_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.last_total_power = reader.bytes();
                    break;
                case 3:
                    message.last_validator_powers.push(exports.LastValidatorPower.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.validators.push(staking_1.Validator.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.delegations.push(staking_1.Delegation.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.unbonding_delegations.push(staking_1.UnbondingDelegation.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.redelegations.push(staking_1.Redelegation.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.exported = reader.bool();
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
            params: (0, helpers_1.isSet)(object.params) ? staking_1.Params.fromJSON(object.params) : undefined,
            last_total_power: (0, helpers_1.isSet)(object.last_total_power) ? (0, helpers_1.bytesFromBase64)(object.last_total_power) : new Uint8Array(),
            last_validator_powers: Array.isArray(object?.last_validator_powers) ? object.last_validator_powers.map((e) => exports.LastValidatorPower.fromJSON(e)) : [],
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => staking_1.Validator.fromJSON(e)) : [],
            delegations: Array.isArray(object?.delegations) ? object.delegations.map((e) => staking_1.Delegation.fromJSON(e)) : [],
            unbonding_delegations: Array.isArray(object?.unbonding_delegations) ? object.unbonding_delegations.map((e) => staking_1.UnbondingDelegation.fromJSON(e)) : [],
            redelegations: Array.isArray(object?.redelegations) ? object.redelegations.map((e) => staking_1.Redelegation.fromJSON(e)) : [],
            exported: (0, helpers_1.isSet)(object.exported) ? Boolean(object.exported) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? staking_1.Params.toJSON(message.params) : undefined);
        message.last_total_power !== undefined && (obj.last_total_power = (0, helpers_1.base64FromBytes)(message.last_total_power !== undefined ? message.last_total_power : new Uint8Array()));
        if (message.last_validator_powers) {
            obj.last_validator_powers = message.last_validator_powers.map(e => e ? exports.LastValidatorPower.toJSON(e) : undefined);
        }
        else {
            obj.last_validator_powers = [];
        }
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? staking_1.Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        if (message.delegations) {
            obj.delegations = message.delegations.map(e => e ? staking_1.Delegation.toJSON(e) : undefined);
        }
        else {
            obj.delegations = [];
        }
        if (message.unbonding_delegations) {
            obj.unbonding_delegations = message.unbonding_delegations.map(e => e ? staking_1.UnbondingDelegation.toJSON(e) : undefined);
        }
        else {
            obj.unbonding_delegations = [];
        }
        if (message.redelegations) {
            obj.redelegations = message.redelegations.map(e => e ? staking_1.Redelegation.toJSON(e) : undefined);
        }
        else {
            obj.redelegations = [];
        }
        message.exported !== undefined && (obj.exported = message.exported);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? staking_1.Params.fromPartial(object.params) : undefined;
        message.last_total_power = object.last_total_power ?? new Uint8Array();
        message.last_validator_powers = object.last_validator_powers?.map(e => exports.LastValidatorPower.fromPartial(e)) || [];
        message.validators = object.validators?.map(e => staking_1.Validator.fromPartial(e)) || [];
        message.delegations = object.delegations?.map(e => staking_1.Delegation.fromPartial(e)) || [];
        message.unbonding_delegations = object.unbonding_delegations?.map(e => staking_1.UnbondingDelegation.fromPartial(e)) || [];
        message.redelegations = object.redelegations?.map(e => staking_1.Redelegation.fromPartial(e)) || [];
        message.exported = object.exported ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? staking_1.Params.fromAmino(object.params) : undefined,
            last_total_power: object.last_total_power,
            last_validator_powers: Array.isArray(object?.last_validator_powers) ? object.last_validator_powers.map((e) => exports.LastValidatorPower.fromAmino(e)) : [],
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => staking_1.Validator.fromAmino(e)) : [],
            delegations: Array.isArray(object?.delegations) ? object.delegations.map((e) => staking_1.Delegation.fromAmino(e)) : [],
            unbonding_delegations: Array.isArray(object?.unbonding_delegations) ? object.unbonding_delegations.map((e) => staking_1.UnbondingDelegation.fromAmino(e)) : [],
            redelegations: Array.isArray(object?.redelegations) ? object.redelegations.map((e) => staking_1.Redelegation.fromAmino(e)) : [],
            exported: object.exported
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? staking_1.Params.toAmino(message.params) : undefined;
        obj.last_total_power = message.last_total_power;
        if (message.last_validator_powers) {
            obj.last_validator_powers = message.last_validator_powers.map(e => e ? exports.LastValidatorPower.toAmino(e) : undefined);
        }
        else {
            obj.last_validator_powers = [];
        }
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? staking_1.Validator.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        if (message.delegations) {
            obj.delegations = message.delegations.map(e => e ? staking_1.Delegation.toAmino(e) : undefined);
        }
        else {
            obj.delegations = [];
        }
        if (message.unbonding_delegations) {
            obj.unbonding_delegations = message.unbonding_delegations.map(e => e ? staking_1.UnbondingDelegation.toAmino(e) : undefined);
        }
        else {
            obj.unbonding_delegations = [];
        }
        if (message.redelegations) {
            obj.redelegations = message.redelegations.map(e => e ? staking_1.Redelegation.toAmino(e) : undefined);
        }
        else {
            obj.redelegations = [];
        }
        obj.exported = message.exported;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
            value: exports.GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
function createBaseLastValidatorPower() {
    return {
        address: "",
        power: helpers_1.Long.ZERO
    };
}
exports.LastValidatorPower = {
    typeUrl: "/cosmos.staking.v1beta1.LastValidatorPower",
    aminoType: "cosmos-sdk/LastValidatorPower",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (!message.power.isZero()) {
            writer.uint32(16).int64(message.power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLastValidatorPower();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.power = reader.int64();
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            power: (0, helpers_1.isSet)(object.power) ? helpers_1.Long.fromValue(object.power) : helpers_1.Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.power !== undefined && (obj.power = (message.power || helpers_1.Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLastValidatorPower();
        message.address = object.address ?? "";
        message.power = object.power !== undefined && object.power !== null ? helpers_1.Long.fromValue(object.power) : helpers_1.Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            power: helpers_1.Long.fromString(object.power)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.power = message.power ? message.power.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.LastValidatorPower.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/LastValidatorPower",
            value: exports.LastValidatorPower.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.LastValidatorPower.decode(message.value);
    },
    toProto(message) {
        return exports.LastValidatorPower.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.LastValidatorPower",
            value: exports.LastValidatorPower.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map