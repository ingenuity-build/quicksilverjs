import { Params, Validator, Delegation, UnbondingDelegation, Redelegation } from "./staking";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        last_total_power: new Uint8Array(),
        last_validator_powers: [],
        validators: [],
        delegations: [],
        unbonding_delegations: [],
        redelegations: [],
        exported: false
    };
}
export const GenesisState = {
    typeUrl: "/cosmos.staking.v1beta1.GenesisState",
    aminoType: "cosmos-sdk/GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.last_total_power.length !== 0) {
            writer.uint32(18).bytes(message.last_total_power);
        }
        for (const v of message.last_validator_powers) {
            LastValidatorPower.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.validators) {
            Validator.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.delegations) {
            Delegation.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.unbonding_delegations) {
            UnbondingDelegation.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.redelegations) {
            Redelegation.encode(v, writer.uint32(58).fork()).ldelim();
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
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.last_total_power = reader.bytes();
                    break;
                case 3:
                    message.last_validator_powers.push(LastValidatorPower.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.validators.push(Validator.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.delegations.push(Delegation.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.unbonding_delegations.push(UnbondingDelegation.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.redelegations.push(Redelegation.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            last_total_power: isSet(object.last_total_power) ? bytesFromBase64(object.last_total_power) : new Uint8Array(),
            last_validator_powers: Array.isArray(object?.last_validator_powers) ? object.last_validator_powers.map((e) => LastValidatorPower.fromJSON(e)) : [],
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => Validator.fromJSON(e)) : [],
            delegations: Array.isArray(object?.delegations) ? object.delegations.map((e) => Delegation.fromJSON(e)) : [],
            unbonding_delegations: Array.isArray(object?.unbonding_delegations) ? object.unbonding_delegations.map((e) => UnbondingDelegation.fromJSON(e)) : [],
            redelegations: Array.isArray(object?.redelegations) ? object.redelegations.map((e) => Redelegation.fromJSON(e)) : [],
            exported: isSet(object.exported) ? Boolean(object.exported) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        message.last_total_power !== undefined && (obj.last_total_power = base64FromBytes(message.last_total_power !== undefined ? message.last_total_power : new Uint8Array()));
        if (message.last_validator_powers) {
            obj.last_validator_powers = message.last_validator_powers.map(e => e ? LastValidatorPower.toJSON(e) : undefined);
        }
        else {
            obj.last_validator_powers = [];
        }
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        if (message.delegations) {
            obj.delegations = message.delegations.map(e => e ? Delegation.toJSON(e) : undefined);
        }
        else {
            obj.delegations = [];
        }
        if (message.unbonding_delegations) {
            obj.unbonding_delegations = message.unbonding_delegations.map(e => e ? UnbondingDelegation.toJSON(e) : undefined);
        }
        else {
            obj.unbonding_delegations = [];
        }
        if (message.redelegations) {
            obj.redelegations = message.redelegations.map(e => e ? Redelegation.toJSON(e) : undefined);
        }
        else {
            obj.redelegations = [];
        }
        message.exported !== undefined && (obj.exported = message.exported);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.last_total_power = object.last_total_power ?? new Uint8Array();
        message.last_validator_powers = object.last_validator_powers?.map(e => LastValidatorPower.fromPartial(e)) || [];
        message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
        message.delegations = object.delegations?.map(e => Delegation.fromPartial(e)) || [];
        message.unbonding_delegations = object.unbonding_delegations?.map(e => UnbondingDelegation.fromPartial(e)) || [];
        message.redelegations = object.redelegations?.map(e => Redelegation.fromPartial(e)) || [];
        message.exported = object.exported ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? Params.fromAmino(object.params) : undefined,
            last_total_power: object.last_total_power,
            last_validator_powers: Array.isArray(object?.last_validator_powers) ? object.last_validator_powers.map((e) => LastValidatorPower.fromAmino(e)) : [],
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => Validator.fromAmino(e)) : [],
            delegations: Array.isArray(object?.delegations) ? object.delegations.map((e) => Delegation.fromAmino(e)) : [],
            unbonding_delegations: Array.isArray(object?.unbonding_delegations) ? object.unbonding_delegations.map((e) => UnbondingDelegation.fromAmino(e)) : [],
            redelegations: Array.isArray(object?.redelegations) ? object.redelegations.map((e) => Redelegation.fromAmino(e)) : [],
            exported: object.exported
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        obj.last_total_power = message.last_total_power;
        if (message.last_validator_powers) {
            obj.last_validator_powers = message.last_validator_powers.map(e => e ? LastValidatorPower.toAmino(e) : undefined);
        }
        else {
            obj.last_validator_powers = [];
        }
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        if (message.delegations) {
            obj.delegations = message.delegations.map(e => e ? Delegation.toAmino(e) : undefined);
        }
        else {
            obj.delegations = [];
        }
        if (message.unbonding_delegations) {
            obj.unbonding_delegations = message.unbonding_delegations.map(e => e ? UnbondingDelegation.toAmino(e) : undefined);
        }
        else {
            obj.unbonding_delegations = [];
        }
        if (message.redelegations) {
            obj.redelegations = message.redelegations.map(e => e ? Redelegation.toAmino(e) : undefined);
        }
        else {
            obj.redelegations = [];
        }
        obj.exported = message.exported;
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
            typeUrl: "/cosmos.staking.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
function createBaseLastValidatorPower() {
    return {
        address: "",
        power: Long.ZERO
    };
}
export const LastValidatorPower = {
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
            address: isSet(object.address) ? String(object.address) : "",
            power: isSet(object.power) ? Long.fromValue(object.power) : Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.power !== undefined && (obj.power = (message.power || Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLastValidatorPower();
        message.address = object.address ?? "";
        message.power = object.power !== undefined && object.power !== null ? Long.fromValue(object.power) : Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            power: Long.fromString(object.power)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.power = message.power ? message.power.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return LastValidatorPower.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/LastValidatorPower",
            value: LastValidatorPower.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return LastValidatorPower.decode(message.value);
    },
    toProto(message) {
        return LastValidatorPower.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.LastValidatorPower",
            value: LastValidatorPower.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map