import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Long, isSet, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 */
export interface BaseAccount {
  $typeUrl?: string;
  address: string;
  pub_key: Any;
  account_number: Long;
  sequence: Long;
}
export interface BaseAccountProtoMsg {
  type_url: "/cosmos.auth.v1beta1.BaseAccount";
  value: Uint8Array;
}
/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 */
export interface BaseAccountAmino {
  address: string;
  pub_key?: AnyAmino;
  account_number: string;
  sequence: string;
}
export interface BaseAccountAminoMsg {
  type: "cosmos-sdk/BaseAccount";
  value: BaseAccountAmino;
}
/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 */
export interface BaseAccountSDKType {
  $typeUrl?: string;
  address: string;
  pub_key: AnySDKType;
  account_number: Long;
  sequence: Long;
}
/** ModuleAccount defines an account for modules that holds coins on a pool. */
export interface ModuleAccount {
  $typeUrl?: string;
  base_account: BaseAccount;
  name: string;
  permissions: string[];
}
export interface ModuleAccountProtoMsg {
  type_url: "/cosmos.auth.v1beta1.ModuleAccount";
  value: Uint8Array;
}
/** ModuleAccount defines an account for modules that holds coins on a pool. */
export interface ModuleAccountAmino {
  base_account?: BaseAccountAmino;
  name: string;
  permissions: string[];
}
export interface ModuleAccountAminoMsg {
  type: "cosmos-sdk/ModuleAccount";
  value: ModuleAccountAmino;
}
/** ModuleAccount defines an account for modules that holds coins on a pool. */
export interface ModuleAccountSDKType {
  $typeUrl?: string;
  base_account: BaseAccountSDKType;
  name: string;
  permissions: string[];
}
/** Params defines the parameters for the auth module. */
export interface Params {
  max_memo_characters: Long;
  tx_sig_limit: Long;
  tx_size_cost_per_byte: Long;
  sig_verify_cost_ed25519: Long;
  sig_verify_cost_secp256k1: Long;
}
export interface ParamsProtoMsg {
  type_url: "/cosmos.auth.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the auth module. */
export interface ParamsAmino {
  max_memo_characters: string;
  tx_sig_limit: string;
  tx_size_cost_per_byte: string;
  sig_verify_cost_ed25519: string;
  sig_verify_cost_secp256k1: string;
}
export interface ParamsAminoMsg {
  type: "cosmos-sdk/Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the auth module. */
export interface ParamsSDKType {
  max_memo_characters: Long;
  tx_sig_limit: Long;
  tx_size_cost_per_byte: Long;
  sig_verify_cost_ed25519: Long;
  sig_verify_cost_secp256k1: Long;
}
function createBaseBaseAccount(): BaseAccount {
  return {
    $typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
    address: "",
    pub_key: Any.fromPartial({}),
    account_number: Long.UZERO,
    sequence: Long.UZERO
  };
}
export const BaseAccount = {
  typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
  aminoType: "cosmos-sdk/BaseAccount",
  encode(message: BaseAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pub_key !== undefined) {
      Any.encode(message.pub_key, writer.uint32(18).fork()).ldelim();
    }
    if (!message.account_number.isZero()) {
      writer.uint32(24).uint64(message.account_number);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(32).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BaseAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pub_key = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.account_number = (reader.uint64() as Long);
          break;
        case 4:
          message.sequence = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BaseAccount {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pub_key: isSet(object.pub_key) ? Any.fromJSON(object.pub_key) : undefined,
      account_number: isSet(object.account_number) ? Long.fromValue(object.account_number) : Long.UZERO,
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO
    };
  },
  toJSON(message: BaseAccount): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pub_key !== undefined && (obj.pub_key = message.pub_key ? Any.toJSON(message.pub_key) : undefined);
    message.account_number !== undefined && (obj.account_number = (message.account_number || Long.UZERO).toString());
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<BaseAccount>): BaseAccount {
    const message = createBaseBaseAccount();
    message.address = object.address ?? "";
    message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? Any.fromPartial(object.pub_key) : undefined;
    message.account_number = object.account_number !== undefined && object.account_number !== null ? Long.fromValue(object.account_number) : Long.UZERO;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    return message;
  },
  fromAmino(object: BaseAccountAmino): BaseAccount {
    return {
      address: object.address,
      pub_key: object?.pub_key ? Any.fromAmino(object.pub_key) : undefined,
      account_number: Long.fromString(object.account_number),
      sequence: Long.fromString(object.sequence)
    };
  },
  toAmino(message: BaseAccount): BaseAccountAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.pub_key = message.pub_key ? Any.toAmino(message.pub_key) : undefined;
    obj.account_number = message.account_number ? message.account_number.toString() : undefined;
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BaseAccountAminoMsg): BaseAccount {
    return BaseAccount.fromAmino(object.value);
  },
  toAminoMsg(message: BaseAccount): BaseAccountAminoMsg {
    return {
      type: "cosmos-sdk/BaseAccount",
      value: BaseAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: BaseAccountProtoMsg): BaseAccount {
    return BaseAccount.decode(message.value);
  },
  toProto(message: BaseAccount): Uint8Array {
    return BaseAccount.encode(message).finish();
  },
  toProtoMsg(message: BaseAccount): BaseAccountProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
      value: BaseAccount.encode(message).finish()
    };
  }
};
function createBaseModuleAccount(): ModuleAccount {
  return {
    $typeUrl: "/cosmos.auth.v1beta1.ModuleAccount",
    base_account: BaseAccount.fromPartial({}),
    name: "",
    permissions: []
  };
}
export const ModuleAccount = {
  typeUrl: "/cosmos.auth.v1beta1.ModuleAccount",
  aminoType: "cosmos-sdk/ModuleAccount",
  encode(message: ModuleAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base_account !== undefined) {
      BaseAccount.encode(message.base_account, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.permissions) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base_account = BaseAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.permissions.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ModuleAccount {
    return {
      base_account: isSet(object.base_account) ? BaseAccount.fromJSON(object.base_account) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      permissions: Array.isArray(object?.permissions) ? object.permissions.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: ModuleAccount): unknown {
    const obj: any = {};
    message.base_account !== undefined && (obj.base_account = message.base_account ? BaseAccount.toJSON(message.base_account) : undefined);
    message.name !== undefined && (obj.name = message.name);
    if (message.permissions) {
      obj.permissions = message.permissions.map(e => e);
    } else {
      obj.permissions = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ModuleAccount>): ModuleAccount {
    const message = createBaseModuleAccount();
    message.base_account = object.base_account !== undefined && object.base_account !== null ? BaseAccount.fromPartial(object.base_account) : undefined;
    message.name = object.name ?? "";
    message.permissions = object.permissions?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ModuleAccountAmino): ModuleAccount {
    return {
      base_account: object?.base_account ? BaseAccount.fromAmino(object.base_account) : undefined,
      name: object.name,
      permissions: Array.isArray(object?.permissions) ? object.permissions.map((e: any) => e) : []
    };
  },
  toAmino(message: ModuleAccount): ModuleAccountAmino {
    const obj: any = {};
    obj.base_account = message.base_account ? BaseAccount.toAmino(message.base_account) : undefined;
    obj.name = message.name;
    if (message.permissions) {
      obj.permissions = message.permissions.map(e => e);
    } else {
      obj.permissions = [];
    }
    return obj;
  },
  fromAminoMsg(object: ModuleAccountAminoMsg): ModuleAccount {
    return ModuleAccount.fromAmino(object.value);
  },
  toAminoMsg(message: ModuleAccount): ModuleAccountAminoMsg {
    return {
      type: "cosmos-sdk/ModuleAccount",
      value: ModuleAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleAccountProtoMsg): ModuleAccount {
    return ModuleAccount.decode(message.value);
  },
  toProto(message: ModuleAccount): Uint8Array {
    return ModuleAccount.encode(message).finish();
  },
  toProtoMsg(message: ModuleAccount): ModuleAccountProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.ModuleAccount",
      value: ModuleAccount.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    max_memo_characters: Long.UZERO,
    tx_sig_limit: Long.UZERO,
    tx_size_cost_per_byte: Long.UZERO,
    sig_verify_cost_ed25519: Long.UZERO,
    sig_verify_cost_secp256k1: Long.UZERO
  };
}
export const Params = {
  typeUrl: "/cosmos.auth.v1beta1.Params",
  aminoType: "cosmos-sdk/Params",
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.max_memo_characters.isZero()) {
      writer.uint32(8).uint64(message.max_memo_characters);
    }
    if (!message.tx_sig_limit.isZero()) {
      writer.uint32(16).uint64(message.tx_sig_limit);
    }
    if (!message.tx_size_cost_per_byte.isZero()) {
      writer.uint32(24).uint64(message.tx_size_cost_per_byte);
    }
    if (!message.sig_verify_cost_ed25519.isZero()) {
      writer.uint32(32).uint64(message.sig_verify_cost_ed25519);
    }
    if (!message.sig_verify_cost_secp256k1.isZero()) {
      writer.uint32(40).uint64(message.sig_verify_cost_secp256k1);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.max_memo_characters = (reader.uint64() as Long);
          break;
        case 2:
          message.tx_sig_limit = (reader.uint64() as Long);
          break;
        case 3:
          message.tx_size_cost_per_byte = (reader.uint64() as Long);
          break;
        case 4:
          message.sig_verify_cost_ed25519 = (reader.uint64() as Long);
          break;
        case 5:
          message.sig_verify_cost_secp256k1 = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      max_memo_characters: isSet(object.max_memo_characters) ? Long.fromValue(object.max_memo_characters) : Long.UZERO,
      tx_sig_limit: isSet(object.tx_sig_limit) ? Long.fromValue(object.tx_sig_limit) : Long.UZERO,
      tx_size_cost_per_byte: isSet(object.tx_size_cost_per_byte) ? Long.fromValue(object.tx_size_cost_per_byte) : Long.UZERO,
      sig_verify_cost_ed25519: isSet(object.sig_verify_cost_ed25519) ? Long.fromValue(object.sig_verify_cost_ed25519) : Long.UZERO,
      sig_verify_cost_secp256k1: isSet(object.sig_verify_cost_secp256k1) ? Long.fromValue(object.sig_verify_cost_secp256k1) : Long.UZERO
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.max_memo_characters !== undefined && (obj.max_memo_characters = (message.max_memo_characters || Long.UZERO).toString());
    message.tx_sig_limit !== undefined && (obj.tx_sig_limit = (message.tx_sig_limit || Long.UZERO).toString());
    message.tx_size_cost_per_byte !== undefined && (obj.tx_size_cost_per_byte = (message.tx_size_cost_per_byte || Long.UZERO).toString());
    message.sig_verify_cost_ed25519 !== undefined && (obj.sig_verify_cost_ed25519 = (message.sig_verify_cost_ed25519 || Long.UZERO).toString());
    message.sig_verify_cost_secp256k1 !== undefined && (obj.sig_verify_cost_secp256k1 = (message.sig_verify_cost_secp256k1 || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.max_memo_characters = object.max_memo_characters !== undefined && object.max_memo_characters !== null ? Long.fromValue(object.max_memo_characters) : Long.UZERO;
    message.tx_sig_limit = object.tx_sig_limit !== undefined && object.tx_sig_limit !== null ? Long.fromValue(object.tx_sig_limit) : Long.UZERO;
    message.tx_size_cost_per_byte = object.tx_size_cost_per_byte !== undefined && object.tx_size_cost_per_byte !== null ? Long.fromValue(object.tx_size_cost_per_byte) : Long.UZERO;
    message.sig_verify_cost_ed25519 = object.sig_verify_cost_ed25519 !== undefined && object.sig_verify_cost_ed25519 !== null ? Long.fromValue(object.sig_verify_cost_ed25519) : Long.UZERO;
    message.sig_verify_cost_secp256k1 = object.sig_verify_cost_secp256k1 !== undefined && object.sig_verify_cost_secp256k1 !== null ? Long.fromValue(object.sig_verify_cost_secp256k1) : Long.UZERO;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      max_memo_characters: Long.fromString(object.max_memo_characters),
      tx_sig_limit: Long.fromString(object.tx_sig_limit),
      tx_size_cost_per_byte: Long.fromString(object.tx_size_cost_per_byte),
      sig_verify_cost_ed25519: Long.fromString(object.sig_verify_cost_ed25519),
      sig_verify_cost_secp256k1: Long.fromString(object.sig_verify_cost_secp256k1)
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.max_memo_characters = message.max_memo_characters ? message.max_memo_characters.toString() : undefined;
    obj.tx_sig_limit = message.tx_sig_limit ? message.tx_sig_limit.toString() : undefined;
    obj.tx_size_cost_per_byte = message.tx_size_cost_per_byte ? message.tx_size_cost_per_byte.toString() : undefined;
    obj.sig_verify_cost_ed25519 = message.sig_verify_cost_ed25519 ? message.sig_verify_cost_ed25519.toString() : undefined;
    obj.sig_verify_cost_secp256k1 = message.sig_verify_cost_secp256k1 ? message.sig_verify_cost_secp256k1.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};