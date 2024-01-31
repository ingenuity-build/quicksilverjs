import { PublicKey, PublicKeyAmino, PublicKeySDKType } from "../crypto/keys";
import { Long, isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface ValidatorSet {
  validators: Validator[];
  proposer: Validator;
  total_voting_power: Long;
}
export interface ValidatorSetProtoMsg {
  type_url: "/tendermint.types.ValidatorSet";
  value: Uint8Array;
}
export interface ValidatorSetAmino {
  validators: ValidatorAmino[];
  proposer?: ValidatorAmino;
  total_voting_power: string;
}
export interface ValidatorSetAminoMsg {
  type: "/tendermint.types.ValidatorSet";
  value: ValidatorSetAmino;
}
export interface ValidatorSetSDKType {
  validators: ValidatorSDKType[];
  proposer: ValidatorSDKType;
  total_voting_power: Long;
}
export interface Validator {
  address: Uint8Array;
  pub_key: PublicKey;
  voting_power: Long;
  proposer_priority: Long;
}
export interface ValidatorProtoMsg {
  type_url: "/tendermint.types.Validator";
  value: Uint8Array;
}
export interface ValidatorAmino {
  address: Uint8Array;
  pub_key?: PublicKeyAmino;
  voting_power: string;
  proposer_priority: string;
}
export interface ValidatorAminoMsg {
  type: "/tendermint.types.Validator";
  value: ValidatorAmino;
}
export interface ValidatorSDKType {
  address: Uint8Array;
  pub_key: PublicKeySDKType;
  voting_power: Long;
  proposer_priority: Long;
}
export interface SimpleValidator {
  pub_key: PublicKey;
  voting_power: Long;
}
export interface SimpleValidatorProtoMsg {
  type_url: "/tendermint.types.SimpleValidator";
  value: Uint8Array;
}
export interface SimpleValidatorAmino {
  pub_key?: PublicKeyAmino;
  voting_power: string;
}
export interface SimpleValidatorAminoMsg {
  type: "/tendermint.types.SimpleValidator";
  value: SimpleValidatorAmino;
}
export interface SimpleValidatorSDKType {
  pub_key: PublicKeySDKType;
  voting_power: Long;
}
function createBaseValidatorSet(): ValidatorSet {
  return {
    validators: [],
    proposer: Validator.fromPartial({}),
    total_voting_power: Long.ZERO
  };
}
export const ValidatorSet = {
  typeUrl: "/tendermint.types.ValidatorSet",
  encode(message: ValidatorSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.proposer !== undefined) {
      Validator.encode(message.proposer, writer.uint32(18).fork()).ldelim();
    }
    if (!message.total_voting_power.isZero()) {
      writer.uint32(24).int64(message.total_voting_power);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.proposer = Validator.decode(reader, reader.uint32());
          break;
        case 3:
          message.total_voting_power = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorSet {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      proposer: isSet(object.proposer) ? Validator.fromJSON(object.proposer) : undefined,
      total_voting_power: isSet(object.total_voting_power) ? Long.fromValue(object.total_voting_power) : Long.ZERO
    };
  },
  toJSON(message: ValidatorSet): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.proposer !== undefined && (obj.proposer = message.proposer ? Validator.toJSON(message.proposer) : undefined);
    message.total_voting_power !== undefined && (obj.total_voting_power = (message.total_voting_power || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorSet>): ValidatorSet {
    const message = createBaseValidatorSet();
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.proposer = object.proposer !== undefined && object.proposer !== null ? Validator.fromPartial(object.proposer) : undefined;
    message.total_voting_power = object.total_voting_power !== undefined && object.total_voting_power !== null ? Long.fromValue(object.total_voting_power) : Long.ZERO;
    return message;
  },
  fromAmino(object: ValidatorSetAmino): ValidatorSet {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromAmino(e)) : [],
      proposer: object?.proposer ? Validator.fromAmino(object.proposer) : undefined,
      total_voting_power: Long.fromString(object.total_voting_power)
    };
  },
  toAmino(message: ValidatorSet): ValidatorSetAmino {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.validators = [];
    }
    obj.proposer = message.proposer ? Validator.toAmino(message.proposer) : undefined;
    obj.total_voting_power = message.total_voting_power ? message.total_voting_power.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorSetAminoMsg): ValidatorSet {
    return ValidatorSet.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorSetProtoMsg): ValidatorSet {
    return ValidatorSet.decode(message.value);
  },
  toProto(message: ValidatorSet): Uint8Array {
    return ValidatorSet.encode(message).finish();
  },
  toProtoMsg(message: ValidatorSet): ValidatorSetProtoMsg {
    return {
      typeUrl: "/tendermint.types.ValidatorSet",
      value: ValidatorSet.encode(message).finish()
    };
  }
};
function createBaseValidator(): Validator {
  return {
    address: new Uint8Array(),
    pub_key: PublicKey.fromPartial({}),
    voting_power: Long.ZERO,
    proposer_priority: Long.ZERO
  };
}
export const Validator = {
  typeUrl: "/tendermint.types.Validator",
  encode(message: Validator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.pub_key !== undefined) {
      PublicKey.encode(message.pub_key, writer.uint32(18).fork()).ldelim();
    }
    if (!message.voting_power.isZero()) {
      writer.uint32(24).int64(message.voting_power);
    }
    if (!message.proposer_priority.isZero()) {
      writer.uint32(32).int64(message.proposer_priority);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Validator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 2:
          message.pub_key = PublicKey.decode(reader, reader.uint32());
          break;
        case 3:
          message.voting_power = (reader.int64() as Long);
          break;
        case 4:
          message.proposer_priority = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Validator {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      pub_key: isSet(object.pub_key) ? PublicKey.fromJSON(object.pub_key) : undefined,
      voting_power: isSet(object.voting_power) ? Long.fromValue(object.voting_power) : Long.ZERO,
      proposer_priority: isSet(object.proposer_priority) ? Long.fromValue(object.proposer_priority) : Long.ZERO
    };
  },
  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    message.pub_key !== undefined && (obj.pub_key = message.pub_key ? PublicKey.toJSON(message.pub_key) : undefined);
    message.voting_power !== undefined && (obj.voting_power = (message.voting_power || Long.ZERO).toString());
    message.proposer_priority !== undefined && (obj.proposer_priority = (message.proposer_priority || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Validator>): Validator {
    const message = createBaseValidator();
    message.address = object.address ?? new Uint8Array();
    message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? PublicKey.fromPartial(object.pub_key) : undefined;
    message.voting_power = object.voting_power !== undefined && object.voting_power !== null ? Long.fromValue(object.voting_power) : Long.ZERO;
    message.proposer_priority = object.proposer_priority !== undefined && object.proposer_priority !== null ? Long.fromValue(object.proposer_priority) : Long.ZERO;
    return message;
  },
  fromAmino(object: ValidatorAmino): Validator {
    return {
      address: object.address,
      pub_key: object?.pub_key ? PublicKey.fromAmino(object.pub_key) : undefined,
      voting_power: Long.fromString(object.voting_power),
      proposer_priority: Long.fromString(object.proposer_priority)
    };
  },
  toAmino(message: Validator): ValidatorAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.pub_key = message.pub_key ? PublicKey.toAmino(message.pub_key) : undefined;
    obj.voting_power = message.voting_power ? message.voting_power.toString() : undefined;
    obj.proposer_priority = message.proposer_priority ? message.proposer_priority.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorAminoMsg): Validator {
    return Validator.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorProtoMsg): Validator {
    return Validator.decode(message.value);
  },
  toProto(message: Validator): Uint8Array {
    return Validator.encode(message).finish();
  },
  toProtoMsg(message: Validator): ValidatorProtoMsg {
    return {
      typeUrl: "/tendermint.types.Validator",
      value: Validator.encode(message).finish()
    };
  }
};
function createBaseSimpleValidator(): SimpleValidator {
  return {
    pub_key: PublicKey.fromPartial({}),
    voting_power: Long.ZERO
  };
}
export const SimpleValidator = {
  typeUrl: "/tendermint.types.SimpleValidator",
  encode(message: SimpleValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pub_key !== undefined) {
      PublicKey.encode(message.pub_key, writer.uint32(10).fork()).ldelim();
    }
    if (!message.voting_power.isZero()) {
      writer.uint32(16).int64(message.voting_power);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SimpleValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimpleValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pub_key = PublicKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.voting_power = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SimpleValidator {
    return {
      pub_key: isSet(object.pub_key) ? PublicKey.fromJSON(object.pub_key) : undefined,
      voting_power: isSet(object.voting_power) ? Long.fromValue(object.voting_power) : Long.ZERO
    };
  },
  toJSON(message: SimpleValidator): unknown {
    const obj: any = {};
    message.pub_key !== undefined && (obj.pub_key = message.pub_key ? PublicKey.toJSON(message.pub_key) : undefined);
    message.voting_power !== undefined && (obj.voting_power = (message.voting_power || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<SimpleValidator>): SimpleValidator {
    const message = createBaseSimpleValidator();
    message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? PublicKey.fromPartial(object.pub_key) : undefined;
    message.voting_power = object.voting_power !== undefined && object.voting_power !== null ? Long.fromValue(object.voting_power) : Long.ZERO;
    return message;
  },
  fromAmino(object: SimpleValidatorAmino): SimpleValidator {
    return {
      pub_key: object?.pub_key ? PublicKey.fromAmino(object.pub_key) : undefined,
      voting_power: Long.fromString(object.voting_power)
    };
  },
  toAmino(message: SimpleValidator): SimpleValidatorAmino {
    const obj: any = {};
    obj.pub_key = message.pub_key ? PublicKey.toAmino(message.pub_key) : undefined;
    obj.voting_power = message.voting_power ? message.voting_power.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SimpleValidatorAminoMsg): SimpleValidator {
    return SimpleValidator.fromAmino(object.value);
  },
  fromProtoMsg(message: SimpleValidatorProtoMsg): SimpleValidator {
    return SimpleValidator.decode(message.value);
  },
  toProto(message: SimpleValidator): Uint8Array {
    return SimpleValidator.encode(message).finish();
  },
  toProtoMsg(message: SimpleValidator): SimpleValidatorProtoMsg {
    return {
      typeUrl: "/tendermint.types.SimpleValidator",
      value: SimpleValidator.encode(message).finish()
    };
  }
};