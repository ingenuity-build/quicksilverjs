import { LsmCaps, LsmCapsAmino, LsmCapsSDKType } from "./interchainstaking";
import { Long, isSet, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface RegisterZoneProposal {
  title: string;
  description: string;
  connection_id: string;
  base_denom: string;
  local_denom: string;
  account_prefix: string;
  /** deprecated */
  multi_send: boolean;
  liquidity_module: boolean;
  messages_per_tx: Long;
  return_to_sender: boolean;
  deposits_enabled: boolean;
  unbonding_enabled: boolean;
  decimals: Long;
  is118: boolean;
}
export interface RegisterZoneProposalProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.RegisterZoneProposal";
  value: Uint8Array;
}
export interface RegisterZoneProposalAmino {
  title: string;
  description: string;
  connection_id: string;
  base_denom: string;
  local_denom: string;
  account_prefix: string;
  /** deprecated */
  multi_send: boolean;
  liquidity_module: boolean;
  messages_per_tx: string;
  return_to_sender: boolean;
  deposits_enabled: boolean;
  unbonding_enabled: boolean;
  decimals: string;
  is_118: boolean;
}
export interface RegisterZoneProposalAminoMsg {
  type: "/quicksilver.interchainstaking.v1.RegisterZoneProposal";
  value: RegisterZoneProposalAmino;
}
export interface RegisterZoneProposalSDKType {
  title: string;
  description: string;
  connection_id: string;
  base_denom: string;
  local_denom: string;
  account_prefix: string;
  multi_send: boolean;
  liquidity_module: boolean;
  messages_per_tx: Long;
  return_to_sender: boolean;
  deposits_enabled: boolean;
  unbonding_enabled: boolean;
  decimals: Long;
  is_118: boolean;
}
export interface RegisterZoneProposalWithDeposit {
  title: string;
  description: string;
  connection_id: string;
  base_denom: string;
  local_denom: string;
  account_prefix: string;
  multi_send: boolean;
  liquidity_module: boolean;
  deposit: string;
  messages_per_tx: Long;
  return_to_sender: boolean;
  deposits_enabled: boolean;
  unbonding_enabled: boolean;
  decimals: Long;
  is118: boolean;
}
export interface RegisterZoneProposalWithDepositProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.RegisterZoneProposalWithDeposit";
  value: Uint8Array;
}
export interface RegisterZoneProposalWithDepositAmino {
  title: string;
  description: string;
  connection_id: string;
  base_denom: string;
  local_denom: string;
  account_prefix: string;
  multi_send: boolean;
  liquidity_module: boolean;
  deposit: string;
  messages_per_tx: string;
  return_to_sender: boolean;
  deposits_enabled: boolean;
  unbonding_enabled: boolean;
  decimals: string;
  is_118: boolean;
}
export interface RegisterZoneProposalWithDepositAminoMsg {
  type: "/quicksilver.interchainstaking.v1.RegisterZoneProposalWithDeposit";
  value: RegisterZoneProposalWithDepositAmino;
}
export interface RegisterZoneProposalWithDepositSDKType {
  title: string;
  description: string;
  connection_id: string;
  base_denom: string;
  local_denom: string;
  account_prefix: string;
  multi_send: boolean;
  liquidity_module: boolean;
  deposit: string;
  messages_per_tx: Long;
  return_to_sender: boolean;
  deposits_enabled: boolean;
  unbonding_enabled: boolean;
  decimals: Long;
  is_118: boolean;
}
export interface UpdateZoneProposal {
  title: string;
  description: string;
  chain_id: string;
  changes: UpdateZoneValue[];
}
export interface UpdateZoneProposalProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.UpdateZoneProposal";
  value: Uint8Array;
}
export interface UpdateZoneProposalAmino {
  title: string;
  description: string;
  chain_id: string;
  changes: UpdateZoneValueAmino[];
}
export interface UpdateZoneProposalAminoMsg {
  type: "/quicksilver.interchainstaking.v1.UpdateZoneProposal";
  value: UpdateZoneProposalAmino;
}
export interface UpdateZoneProposalSDKType {
  title: string;
  description: string;
  chain_id: string;
  changes: UpdateZoneValueSDKType[];
}
export interface UpdateZoneProposalWithDeposit {
  title: string;
  description: string;
  chain_id: string;
  changes: UpdateZoneValue[];
  deposit: string;
}
export interface UpdateZoneProposalWithDepositProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.UpdateZoneProposalWithDeposit";
  value: Uint8Array;
}
export interface UpdateZoneProposalWithDepositAmino {
  title: string;
  description: string;
  chain_id: string;
  changes: UpdateZoneValueAmino[];
  deposit: string;
}
export interface UpdateZoneProposalWithDepositAminoMsg {
  type: "/quicksilver.interchainstaking.v1.UpdateZoneProposalWithDeposit";
  value: UpdateZoneProposalWithDepositAmino;
}
export interface UpdateZoneProposalWithDepositSDKType {
  title: string;
  description: string;
  chain_id: string;
  changes: UpdateZoneValueSDKType[];
  deposit: string;
}
/**
 * UpdateZoneValue defines an individual parameter change, for use in
 * UpdateZoneProposal.
 */
export interface UpdateZoneValue {
  key: string;
  value: string;
}
export interface UpdateZoneValueProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.UpdateZoneValue";
  value: Uint8Array;
}
/**
 * UpdateZoneValue defines an individual parameter change, for use in
 * UpdateZoneProposal.
 */
export interface UpdateZoneValueAmino {
  key: string;
  value: string;
}
export interface UpdateZoneValueAminoMsg {
  type: "/quicksilver.interchainstaking.v1.UpdateZoneValue";
  value: UpdateZoneValueAmino;
}
/**
 * UpdateZoneValue defines an individual parameter change, for use in
 * UpdateZoneProposal.
 */
export interface UpdateZoneValueSDKType {
  key: string;
  value: string;
}
export interface MsgGovReopenChannel {
  title: string;
  description: string;
  connection_id: string;
  port_id: string;
  authority: string;
}
export interface MsgGovReopenChannelProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.MsgGovReopenChannel";
  value: Uint8Array;
}
export interface MsgGovReopenChannelAmino {
  title: string;
  description: string;
  connection_id: string;
  port_id: string;
  authority: string;
}
export interface MsgGovReopenChannelAminoMsg {
  type: "/quicksilver.interchainstaking.v1.MsgGovReopenChannel";
  value: MsgGovReopenChannelAmino;
}
export interface MsgGovReopenChannelSDKType {
  title: string;
  description: string;
  connection_id: string;
  port_id: string;
  authority: string;
}
/** MsgGovReopenChannelResponse defines the MsgGovReopenChannel response type. */
export interface MsgGovReopenChannelResponse {}
export interface MsgGovReopenChannelResponseProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.MsgGovReopenChannelResponse";
  value: Uint8Array;
}
/** MsgGovReopenChannelResponse defines the MsgGovReopenChannel response type. */
export interface MsgGovReopenChannelResponseAmino {}
export interface MsgGovReopenChannelResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.MsgGovReopenChannelResponse";
  value: MsgGovReopenChannelResponseAmino;
}
/** MsgGovReopenChannelResponse defines the MsgGovReopenChannel response type. */
export interface MsgGovReopenChannelResponseSDKType {}
export interface MsgGovCloseChannel {
  title: string;
  description: string;
  channel_id: string;
  port_id: string;
  authority: string;
}
export interface MsgGovCloseChannelProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.MsgGovCloseChannel";
  value: Uint8Array;
}
export interface MsgGovCloseChannelAmino {
  title: string;
  description: string;
  channel_id: string;
  port_id: string;
  authority: string;
}
export interface MsgGovCloseChannelAminoMsg {
  type: "/quicksilver.interchainstaking.v1.MsgGovCloseChannel";
  value: MsgGovCloseChannelAmino;
}
export interface MsgGovCloseChannelSDKType {
  title: string;
  description: string;
  channel_id: string;
  port_id: string;
  authority: string;
}
/** MsgGovCloseChannelResponse defines the MsgGovCloseChannel response type. */
export interface MsgGovCloseChannelResponse {}
export interface MsgGovCloseChannelResponseProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.MsgGovCloseChannelResponse";
  value: Uint8Array;
}
/** MsgGovCloseChannelResponse defines the MsgGovCloseChannel response type. */
export interface MsgGovCloseChannelResponseAmino {}
export interface MsgGovCloseChannelResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.MsgGovCloseChannelResponse";
  value: MsgGovCloseChannelResponseAmino;
}
/** MsgGovCloseChannelResponse defines the MsgGovCloseChannel response type. */
export interface MsgGovCloseChannelResponseSDKType {}
export interface MsgGovSetLsmCaps {
  title: string;
  description: string;
  chain_id: string;
  caps: LsmCaps;
  authority: string;
}
export interface MsgGovSetLsmCapsProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps";
  value: Uint8Array;
}
export interface MsgGovSetLsmCapsAmino {
  title: string;
  description: string;
  chain_id: string;
  caps?: LsmCapsAmino;
  authority: string;
}
export interface MsgGovSetLsmCapsAminoMsg {
  type: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps";
  value: MsgGovSetLsmCapsAmino;
}
export interface MsgGovSetLsmCapsSDKType {
  title: string;
  description: string;
  chain_id: string;
  caps: LsmCapsSDKType;
  authority: string;
}
export interface MsgGovSetLsmCapsResponse {}
export interface MsgGovSetLsmCapsResponseProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCapsResponse";
  value: Uint8Array;
}
export interface MsgGovSetLsmCapsResponseAmino {}
export interface MsgGovSetLsmCapsResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCapsResponse";
  value: MsgGovSetLsmCapsResponseAmino;
}
export interface MsgGovSetLsmCapsResponseSDKType {}
function createBaseRegisterZoneProposal(): RegisterZoneProposal {
  return {
    title: "",
    description: "",
    connection_id: "",
    base_denom: "",
    local_denom: "",
    account_prefix: "",
    multi_send: false,
    liquidity_module: false,
    messages_per_tx: Long.ZERO,
    return_to_sender: false,
    deposits_enabled: false,
    unbonding_enabled: false,
    decimals: Long.ZERO,
    is118: false
  };
}
export const RegisterZoneProposal = {
  typeUrl: "/quicksilver.interchainstaking.v1.RegisterZoneProposal",
  encode(message: RegisterZoneProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.connection_id !== "") {
      writer.uint32(26).string(message.connection_id);
    }
    if (message.base_denom !== "") {
      writer.uint32(34).string(message.base_denom);
    }
    if (message.local_denom !== "") {
      writer.uint32(42).string(message.local_denom);
    }
    if (message.account_prefix !== "") {
      writer.uint32(50).string(message.account_prefix);
    }
    if (message.multi_send === true) {
      writer.uint32(56).bool(message.multi_send);
    }
    if (message.liquidity_module === true) {
      writer.uint32(64).bool(message.liquidity_module);
    }
    if (!message.messages_per_tx.isZero()) {
      writer.uint32(72).int64(message.messages_per_tx);
    }
    if (message.return_to_sender === true) {
      writer.uint32(80).bool(message.return_to_sender);
    }
    if (message.deposits_enabled === true) {
      writer.uint32(88).bool(message.deposits_enabled);
    }
    if (message.unbonding_enabled === true) {
      writer.uint32(96).bool(message.unbonding_enabled);
    }
    if (!message.decimals.isZero()) {
      writer.uint32(104).int64(message.decimals);
    }
    if (message.is118 === true) {
      writer.uint32(112).bool(message.is118);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterZoneProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterZoneProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.connection_id = reader.string();
          break;
        case 4:
          message.base_denom = reader.string();
          break;
        case 5:
          message.local_denom = reader.string();
          break;
        case 6:
          message.account_prefix = reader.string();
          break;
        case 7:
          message.multi_send = reader.bool();
          break;
        case 8:
          message.liquidity_module = reader.bool();
          break;
        case 9:
          message.messages_per_tx = (reader.int64() as Long);
          break;
        case 10:
          message.return_to_sender = reader.bool();
          break;
        case 11:
          message.deposits_enabled = reader.bool();
          break;
        case 12:
          message.unbonding_enabled = reader.bool();
          break;
        case 13:
          message.decimals = (reader.int64() as Long);
          break;
        case 14:
          message.is118 = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RegisterZoneProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      connection_id: isSet(object.connection_id) ? String(object.connection_id) : "",
      base_denom: isSet(object.base_denom) ? String(object.base_denom) : "",
      local_denom: isSet(object.local_denom) ? String(object.local_denom) : "",
      account_prefix: isSet(object.account_prefix) ? String(object.account_prefix) : "",
      multi_send: isSet(object.multi_send) ? Boolean(object.multi_send) : false,
      liquidity_module: isSet(object.liquidity_module) ? Boolean(object.liquidity_module) : false,
      messages_per_tx: isSet(object.messages_per_tx) ? Long.fromValue(object.messages_per_tx) : Long.ZERO,
      return_to_sender: isSet(object.return_to_sender) ? Boolean(object.return_to_sender) : false,
      deposits_enabled: isSet(object.deposits_enabled) ? Boolean(object.deposits_enabled) : false,
      unbonding_enabled: isSet(object.unbonding_enabled) ? Boolean(object.unbonding_enabled) : false,
      decimals: isSet(object.decimals) ? Long.fromValue(object.decimals) : Long.ZERO,
      is118: isSet(object.is118) ? Boolean(object.is118) : false
    };
  },
  toJSON(message: RegisterZoneProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.connection_id !== undefined && (obj.connection_id = message.connection_id);
    message.base_denom !== undefined && (obj.base_denom = message.base_denom);
    message.local_denom !== undefined && (obj.local_denom = message.local_denom);
    message.account_prefix !== undefined && (obj.account_prefix = message.account_prefix);
    message.multi_send !== undefined && (obj.multi_send = message.multi_send);
    message.liquidity_module !== undefined && (obj.liquidity_module = message.liquidity_module);
    message.messages_per_tx !== undefined && (obj.messages_per_tx = (message.messages_per_tx || Long.ZERO).toString());
    message.return_to_sender !== undefined && (obj.return_to_sender = message.return_to_sender);
    message.deposits_enabled !== undefined && (obj.deposits_enabled = message.deposits_enabled);
    message.unbonding_enabled !== undefined && (obj.unbonding_enabled = message.unbonding_enabled);
    message.decimals !== undefined && (obj.decimals = (message.decimals || Long.ZERO).toString());
    message.is118 !== undefined && (obj.is118 = message.is118);
    return obj;
  },
  fromPartial(object: DeepPartial<RegisterZoneProposal>): RegisterZoneProposal {
    const message = createBaseRegisterZoneProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.connection_id = object.connection_id ?? "";
    message.base_denom = object.base_denom ?? "";
    message.local_denom = object.local_denom ?? "";
    message.account_prefix = object.account_prefix ?? "";
    message.multi_send = object.multi_send ?? false;
    message.liquidity_module = object.liquidity_module ?? false;
    message.messages_per_tx = object.messages_per_tx !== undefined && object.messages_per_tx !== null ? Long.fromValue(object.messages_per_tx) : Long.ZERO;
    message.return_to_sender = object.return_to_sender ?? false;
    message.deposits_enabled = object.deposits_enabled ?? false;
    message.unbonding_enabled = object.unbonding_enabled ?? false;
    message.decimals = object.decimals !== undefined && object.decimals !== null ? Long.fromValue(object.decimals) : Long.ZERO;
    message.is118 = object.is118 ?? false;
    return message;
  },
  fromAmino(object: RegisterZoneProposalAmino): RegisterZoneProposal {
    return {
      title: object.title,
      description: object.description,
      connection_id: object.connection_id,
      base_denom: object.base_denom,
      local_denom: object.local_denom,
      account_prefix: object.account_prefix,
      multi_send: object.multi_send,
      liquidity_module: object.liquidity_module,
      messages_per_tx: Long.fromString(object.messages_per_tx),
      return_to_sender: object.return_to_sender,
      deposits_enabled: object.deposits_enabled,
      unbonding_enabled: object.unbonding_enabled,
      decimals: Long.fromString(object.decimals),
      is_118: object.is_118
    };
  },
  toAmino(message: RegisterZoneProposal): RegisterZoneProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.connection_id = message.connection_id;
    obj.base_denom = message.base_denom;
    obj.local_denom = message.local_denom;
    obj.account_prefix = message.account_prefix;
    obj.multi_send = message.multi_send;
    obj.liquidity_module = message.liquidity_module;
    obj.messages_per_tx = message.messages_per_tx ? message.messages_per_tx.toString() : undefined;
    obj.return_to_sender = message.return_to_sender;
    obj.deposits_enabled = message.deposits_enabled;
    obj.unbonding_enabled = message.unbonding_enabled;
    obj.decimals = message.decimals ? message.decimals.toString() : undefined;
    obj.is_118 = message.is_118;
    return obj;
  },
  fromAminoMsg(object: RegisterZoneProposalAminoMsg): RegisterZoneProposal {
    return RegisterZoneProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisterZoneProposalProtoMsg): RegisterZoneProposal {
    return RegisterZoneProposal.decode(message.value);
  },
  toProto(message: RegisterZoneProposal): Uint8Array {
    return RegisterZoneProposal.encode(message).finish();
  },
  toProtoMsg(message: RegisterZoneProposal): RegisterZoneProposalProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.RegisterZoneProposal",
      value: RegisterZoneProposal.encode(message).finish()
    };
  }
};
function createBaseRegisterZoneProposalWithDeposit(): RegisterZoneProposalWithDeposit {
  return {
    title: "",
    description: "",
    connection_id: "",
    base_denom: "",
    local_denom: "",
    account_prefix: "",
    multi_send: false,
    liquidity_module: false,
    deposit: "",
    messages_per_tx: Long.ZERO,
    return_to_sender: false,
    deposits_enabled: false,
    unbonding_enabled: false,
    decimals: Long.ZERO,
    is118: false
  };
}
export const RegisterZoneProposalWithDeposit = {
  typeUrl: "/quicksilver.interchainstaking.v1.RegisterZoneProposalWithDeposit",
  encode(message: RegisterZoneProposalWithDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.connection_id !== "") {
      writer.uint32(26).string(message.connection_id);
    }
    if (message.base_denom !== "") {
      writer.uint32(34).string(message.base_denom);
    }
    if (message.local_denom !== "") {
      writer.uint32(42).string(message.local_denom);
    }
    if (message.account_prefix !== "") {
      writer.uint32(50).string(message.account_prefix);
    }
    if (message.multi_send === true) {
      writer.uint32(56).bool(message.multi_send);
    }
    if (message.liquidity_module === true) {
      writer.uint32(64).bool(message.liquidity_module);
    }
    if (message.deposit !== "") {
      writer.uint32(74).string(message.deposit);
    }
    if (!message.messages_per_tx.isZero()) {
      writer.uint32(80).int64(message.messages_per_tx);
    }
    if (message.return_to_sender === true) {
      writer.uint32(88).bool(message.return_to_sender);
    }
    if (message.deposits_enabled === true) {
      writer.uint32(96).bool(message.deposits_enabled);
    }
    if (message.unbonding_enabled === true) {
      writer.uint32(104).bool(message.unbonding_enabled);
    }
    if (!message.decimals.isZero()) {
      writer.uint32(112).int64(message.decimals);
    }
    if (message.is118 === true) {
      writer.uint32(120).bool(message.is118);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterZoneProposalWithDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterZoneProposalWithDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.connection_id = reader.string();
          break;
        case 4:
          message.base_denom = reader.string();
          break;
        case 5:
          message.local_denom = reader.string();
          break;
        case 6:
          message.account_prefix = reader.string();
          break;
        case 7:
          message.multi_send = reader.bool();
          break;
        case 8:
          message.liquidity_module = reader.bool();
          break;
        case 9:
          message.deposit = reader.string();
          break;
        case 10:
          message.messages_per_tx = (reader.int64() as Long);
          break;
        case 11:
          message.return_to_sender = reader.bool();
          break;
        case 12:
          message.deposits_enabled = reader.bool();
          break;
        case 13:
          message.unbonding_enabled = reader.bool();
          break;
        case 14:
          message.decimals = (reader.int64() as Long);
          break;
        case 15:
          message.is118 = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RegisterZoneProposalWithDeposit {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      connection_id: isSet(object.connection_id) ? String(object.connection_id) : "",
      base_denom: isSet(object.base_denom) ? String(object.base_denom) : "",
      local_denom: isSet(object.local_denom) ? String(object.local_denom) : "",
      account_prefix: isSet(object.account_prefix) ? String(object.account_prefix) : "",
      multi_send: isSet(object.multi_send) ? Boolean(object.multi_send) : false,
      liquidity_module: isSet(object.liquidity_module) ? Boolean(object.liquidity_module) : false,
      deposit: isSet(object.deposit) ? String(object.deposit) : "",
      messages_per_tx: isSet(object.messages_per_tx) ? Long.fromValue(object.messages_per_tx) : Long.ZERO,
      return_to_sender: isSet(object.return_to_sender) ? Boolean(object.return_to_sender) : false,
      deposits_enabled: isSet(object.deposits_enabled) ? Boolean(object.deposits_enabled) : false,
      unbonding_enabled: isSet(object.unbonding_enabled) ? Boolean(object.unbonding_enabled) : false,
      decimals: isSet(object.decimals) ? Long.fromValue(object.decimals) : Long.ZERO,
      is118: isSet(object.is118) ? Boolean(object.is118) : false
    };
  },
  toJSON(message: RegisterZoneProposalWithDeposit): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.connection_id !== undefined && (obj.connection_id = message.connection_id);
    message.base_denom !== undefined && (obj.base_denom = message.base_denom);
    message.local_denom !== undefined && (obj.local_denom = message.local_denom);
    message.account_prefix !== undefined && (obj.account_prefix = message.account_prefix);
    message.multi_send !== undefined && (obj.multi_send = message.multi_send);
    message.liquidity_module !== undefined && (obj.liquidity_module = message.liquidity_module);
    message.deposit !== undefined && (obj.deposit = message.deposit);
    message.messages_per_tx !== undefined && (obj.messages_per_tx = (message.messages_per_tx || Long.ZERO).toString());
    message.return_to_sender !== undefined && (obj.return_to_sender = message.return_to_sender);
    message.deposits_enabled !== undefined && (obj.deposits_enabled = message.deposits_enabled);
    message.unbonding_enabled !== undefined && (obj.unbonding_enabled = message.unbonding_enabled);
    message.decimals !== undefined && (obj.decimals = (message.decimals || Long.ZERO).toString());
    message.is118 !== undefined && (obj.is118 = message.is118);
    return obj;
  },
  fromPartial(object: DeepPartial<RegisterZoneProposalWithDeposit>): RegisterZoneProposalWithDeposit {
    const message = createBaseRegisterZoneProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.connection_id = object.connection_id ?? "";
    message.base_denom = object.base_denom ?? "";
    message.local_denom = object.local_denom ?? "";
    message.account_prefix = object.account_prefix ?? "";
    message.multi_send = object.multi_send ?? false;
    message.liquidity_module = object.liquidity_module ?? false;
    message.deposit = object.deposit ?? "";
    message.messages_per_tx = object.messages_per_tx !== undefined && object.messages_per_tx !== null ? Long.fromValue(object.messages_per_tx) : Long.ZERO;
    message.return_to_sender = object.return_to_sender ?? false;
    message.deposits_enabled = object.deposits_enabled ?? false;
    message.unbonding_enabled = object.unbonding_enabled ?? false;
    message.decimals = object.decimals !== undefined && object.decimals !== null ? Long.fromValue(object.decimals) : Long.ZERO;
    message.is118 = object.is118 ?? false;
    return message;
  },
  fromAmino(object: RegisterZoneProposalWithDepositAmino): RegisterZoneProposalWithDeposit {
    return {
      title: object.title,
      description: object.description,
      connection_id: object.connection_id,
      base_denom: object.base_denom,
      local_denom: object.local_denom,
      account_prefix: object.account_prefix,
      multi_send: object.multi_send,
      liquidity_module: object.liquidity_module,
      deposit: object.deposit,
      messages_per_tx: Long.fromString(object.messages_per_tx),
      return_to_sender: object.return_to_sender,
      deposits_enabled: object.deposits_enabled,
      unbonding_enabled: object.unbonding_enabled,
      decimals: Long.fromString(object.decimals),
      is_118: object.is_118
    };
  },
  toAmino(message: RegisterZoneProposalWithDeposit): RegisterZoneProposalWithDepositAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.connection_id = message.connection_id;
    obj.base_denom = message.base_denom;
    obj.local_denom = message.local_denom;
    obj.account_prefix = message.account_prefix;
    obj.multi_send = message.multi_send;
    obj.liquidity_module = message.liquidity_module;
    obj.deposit = message.deposit;
    obj.messages_per_tx = message.messages_per_tx ? message.messages_per_tx.toString() : undefined;
    obj.return_to_sender = message.return_to_sender;
    obj.deposits_enabled = message.deposits_enabled;
    obj.unbonding_enabled = message.unbonding_enabled;
    obj.decimals = message.decimals ? message.decimals.toString() : undefined;
    obj.is_118 = message.is_118;
    return obj;
  },
  fromAminoMsg(object: RegisterZoneProposalWithDepositAminoMsg): RegisterZoneProposalWithDeposit {
    return RegisterZoneProposalWithDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisterZoneProposalWithDepositProtoMsg): RegisterZoneProposalWithDeposit {
    return RegisterZoneProposalWithDeposit.decode(message.value);
  },
  toProto(message: RegisterZoneProposalWithDeposit): Uint8Array {
    return RegisterZoneProposalWithDeposit.encode(message).finish();
  },
  toProtoMsg(message: RegisterZoneProposalWithDeposit): RegisterZoneProposalWithDepositProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.RegisterZoneProposalWithDeposit",
      value: RegisterZoneProposalWithDeposit.encode(message).finish()
    };
  }
};
function createBaseUpdateZoneProposal(): UpdateZoneProposal {
  return {
    title: "",
    description: "",
    chain_id: "",
    changes: []
  };
}
export const UpdateZoneProposal = {
  typeUrl: "/quicksilver.interchainstaking.v1.UpdateZoneProposal",
  encode(message: UpdateZoneProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.chain_id !== "") {
      writer.uint32(26).string(message.chain_id);
    }
    for (const v of message.changes) {
      UpdateZoneValue.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateZoneProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateZoneProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.chain_id = reader.string();
          break;
        case 4:
          message.changes.push(UpdateZoneValue.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpdateZoneProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      changes: Array.isArray(object?.changes) ? object.changes.map((e: any) => UpdateZoneValue.fromJSON(e)) : []
    };
  },
  toJSON(message: UpdateZoneProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    if (message.changes) {
      obj.changes = message.changes.map(e => e ? UpdateZoneValue.toJSON(e) : undefined);
    } else {
      obj.changes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<UpdateZoneProposal>): UpdateZoneProposal {
    const message = createBaseUpdateZoneProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.chain_id = object.chain_id ?? "";
    message.changes = object.changes?.map(e => UpdateZoneValue.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: UpdateZoneProposalAmino): UpdateZoneProposal {
    return {
      title: object.title,
      description: object.description,
      chain_id: object.chain_id,
      changes: Array.isArray(object?.changes) ? object.changes.map((e: any) => UpdateZoneValue.fromAmino(e)) : []
    };
  },
  toAmino(message: UpdateZoneProposal): UpdateZoneProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.chain_id = message.chain_id;
    if (message.changes) {
      obj.changes = message.changes.map(e => e ? UpdateZoneValue.toAmino(e) : undefined);
    } else {
      obj.changes = [];
    }
    return obj;
  },
  fromAminoMsg(object: UpdateZoneProposalAminoMsg): UpdateZoneProposal {
    return UpdateZoneProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateZoneProposalProtoMsg): UpdateZoneProposal {
    return UpdateZoneProposal.decode(message.value);
  },
  toProto(message: UpdateZoneProposal): Uint8Array {
    return UpdateZoneProposal.encode(message).finish();
  },
  toProtoMsg(message: UpdateZoneProposal): UpdateZoneProposalProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.UpdateZoneProposal",
      value: UpdateZoneProposal.encode(message).finish()
    };
  }
};
function createBaseUpdateZoneProposalWithDeposit(): UpdateZoneProposalWithDeposit {
  return {
    title: "",
    description: "",
    chain_id: "",
    changes: [],
    deposit: ""
  };
}
export const UpdateZoneProposalWithDeposit = {
  typeUrl: "/quicksilver.interchainstaking.v1.UpdateZoneProposalWithDeposit",
  encode(message: UpdateZoneProposalWithDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.chain_id !== "") {
      writer.uint32(26).string(message.chain_id);
    }
    for (const v of message.changes) {
      UpdateZoneValue.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.deposit !== "") {
      writer.uint32(42).string(message.deposit);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateZoneProposalWithDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateZoneProposalWithDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.chain_id = reader.string();
          break;
        case 4:
          message.changes.push(UpdateZoneValue.decode(reader, reader.uint32()));
          break;
        case 5:
          message.deposit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpdateZoneProposalWithDeposit {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      changes: Array.isArray(object?.changes) ? object.changes.map((e: any) => UpdateZoneValue.fromJSON(e)) : [],
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },
  toJSON(message: UpdateZoneProposalWithDeposit): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    if (message.changes) {
      obj.changes = message.changes.map(e => e ? UpdateZoneValue.toJSON(e) : undefined);
    } else {
      obj.changes = [];
    }
    message.deposit !== undefined && (obj.deposit = message.deposit);
    return obj;
  },
  fromPartial(object: DeepPartial<UpdateZoneProposalWithDeposit>): UpdateZoneProposalWithDeposit {
    const message = createBaseUpdateZoneProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.chain_id = object.chain_id ?? "";
    message.changes = object.changes?.map(e => UpdateZoneValue.fromPartial(e)) || [];
    message.deposit = object.deposit ?? "";
    return message;
  },
  fromAmino(object: UpdateZoneProposalWithDepositAmino): UpdateZoneProposalWithDeposit {
    return {
      title: object.title,
      description: object.description,
      chain_id: object.chain_id,
      changes: Array.isArray(object?.changes) ? object.changes.map((e: any) => UpdateZoneValue.fromAmino(e)) : [],
      deposit: object.deposit
    };
  },
  toAmino(message: UpdateZoneProposalWithDeposit): UpdateZoneProposalWithDepositAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.chain_id = message.chain_id;
    if (message.changes) {
      obj.changes = message.changes.map(e => e ? UpdateZoneValue.toAmino(e) : undefined);
    } else {
      obj.changes = [];
    }
    obj.deposit = message.deposit;
    return obj;
  },
  fromAminoMsg(object: UpdateZoneProposalWithDepositAminoMsg): UpdateZoneProposalWithDeposit {
    return UpdateZoneProposalWithDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateZoneProposalWithDepositProtoMsg): UpdateZoneProposalWithDeposit {
    return UpdateZoneProposalWithDeposit.decode(message.value);
  },
  toProto(message: UpdateZoneProposalWithDeposit): Uint8Array {
    return UpdateZoneProposalWithDeposit.encode(message).finish();
  },
  toProtoMsg(message: UpdateZoneProposalWithDeposit): UpdateZoneProposalWithDepositProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.UpdateZoneProposalWithDeposit",
      value: UpdateZoneProposalWithDeposit.encode(message).finish()
    };
  }
};
function createBaseUpdateZoneValue(): UpdateZoneValue {
  return {
    key: "",
    value: ""
  };
}
export const UpdateZoneValue = {
  typeUrl: "/quicksilver.interchainstaking.v1.UpdateZoneValue",
  encode(message: UpdateZoneValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateZoneValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateZoneValue();
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
  fromJSON(object: any): UpdateZoneValue {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: UpdateZoneValue): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: DeepPartial<UpdateZoneValue>): UpdateZoneValue {
    const message = createBaseUpdateZoneValue();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: UpdateZoneValueAmino): UpdateZoneValue {
    return {
      key: object.key,
      value: object.value
    };
  },
  toAmino(message: UpdateZoneValue): UpdateZoneValueAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: UpdateZoneValueAminoMsg): UpdateZoneValue {
    return UpdateZoneValue.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateZoneValueProtoMsg): UpdateZoneValue {
    return UpdateZoneValue.decode(message.value);
  },
  toProto(message: UpdateZoneValue): Uint8Array {
    return UpdateZoneValue.encode(message).finish();
  },
  toProtoMsg(message: UpdateZoneValue): UpdateZoneValueProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.UpdateZoneValue",
      value: UpdateZoneValue.encode(message).finish()
    };
  }
};
function createBaseMsgGovReopenChannel(): MsgGovReopenChannel {
  return {
    title: "",
    description: "",
    connection_id: "",
    port_id: "",
    authority: ""
  };
}
export const MsgGovReopenChannel = {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannel",
  encode(message: MsgGovReopenChannel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.connection_id !== "") {
      writer.uint32(26).string(message.connection_id);
    }
    if (message.port_id !== "") {
      writer.uint32(34).string(message.port_id);
    }
    if (message.authority !== "") {
      writer.uint32(42).string(message.authority);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGovReopenChannel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGovReopenChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.connection_id = reader.string();
          break;
        case 4:
          message.port_id = reader.string();
          break;
        case 5:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgGovReopenChannel {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      connection_id: isSet(object.connection_id) ? String(object.connection_id) : "",
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      authority: isSet(object.authority) ? String(object.authority) : ""
    };
  },
  toJSON(message: MsgGovReopenChannel): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.connection_id !== undefined && (obj.connection_id = message.connection_id);
    message.port_id !== undefined && (obj.port_id = message.port_id);
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgGovReopenChannel>): MsgGovReopenChannel {
    const message = createBaseMsgGovReopenChannel();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.connection_id = object.connection_id ?? "";
    message.port_id = object.port_id ?? "";
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object: MsgGovReopenChannelAmino): MsgGovReopenChannel {
    return {
      title: object.title,
      description: object.description,
      connection_id: object.connection_id,
      port_id: object.port_id,
      authority: object.authority
    };
  },
  toAmino(message: MsgGovReopenChannel): MsgGovReopenChannelAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.connection_id = message.connection_id;
    obj.port_id = message.port_id;
    obj.authority = message.authority;
    return obj;
  },
  fromAminoMsg(object: MsgGovReopenChannelAminoMsg): MsgGovReopenChannel {
    return MsgGovReopenChannel.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovReopenChannelProtoMsg): MsgGovReopenChannel {
    return MsgGovReopenChannel.decode(message.value);
  },
  toProto(message: MsgGovReopenChannel): Uint8Array {
    return MsgGovReopenChannel.encode(message).finish();
  },
  toProtoMsg(message: MsgGovReopenChannel): MsgGovReopenChannelProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannel",
      value: MsgGovReopenChannel.encode(message).finish()
    };
  }
};
function createBaseMsgGovReopenChannelResponse(): MsgGovReopenChannelResponse {
  return {};
}
export const MsgGovReopenChannelResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannelResponse",
  encode(_: MsgGovReopenChannelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGovReopenChannelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGovReopenChannelResponse();
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
  fromJSON(_: any): MsgGovReopenChannelResponse {
    return {};
  },
  toJSON(_: MsgGovReopenChannelResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgGovReopenChannelResponse>): MsgGovReopenChannelResponse {
    const message = createBaseMsgGovReopenChannelResponse();
    return message;
  },
  fromAmino(_: MsgGovReopenChannelResponseAmino): MsgGovReopenChannelResponse {
    return {};
  },
  toAmino(_: MsgGovReopenChannelResponse): MsgGovReopenChannelResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgGovReopenChannelResponseAminoMsg): MsgGovReopenChannelResponse {
    return MsgGovReopenChannelResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovReopenChannelResponseProtoMsg): MsgGovReopenChannelResponse {
    return MsgGovReopenChannelResponse.decode(message.value);
  },
  toProto(message: MsgGovReopenChannelResponse): Uint8Array {
    return MsgGovReopenChannelResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGovReopenChannelResponse): MsgGovReopenChannelResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannelResponse",
      value: MsgGovReopenChannelResponse.encode(message).finish()
    };
  }
};
function createBaseMsgGovCloseChannel(): MsgGovCloseChannel {
  return {
    title: "",
    description: "",
    channel_id: "",
    port_id: "",
    authority: ""
  };
}
export const MsgGovCloseChannel = {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannel",
  encode(message: MsgGovCloseChannel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.channel_id !== "") {
      writer.uint32(26).string(message.channel_id);
    }
    if (message.port_id !== "") {
      writer.uint32(34).string(message.port_id);
    }
    if (message.authority !== "") {
      writer.uint32(42).string(message.authority);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGovCloseChannel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGovCloseChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.channel_id = reader.string();
          break;
        case 4:
          message.port_id = reader.string();
          break;
        case 5:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgGovCloseChannel {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      authority: isSet(object.authority) ? String(object.authority) : ""
    };
  },
  toJSON(message: MsgGovCloseChannel): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.channel_id !== undefined && (obj.channel_id = message.channel_id);
    message.port_id !== undefined && (obj.port_id = message.port_id);
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgGovCloseChannel>): MsgGovCloseChannel {
    const message = createBaseMsgGovCloseChannel();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.channel_id = object.channel_id ?? "";
    message.port_id = object.port_id ?? "";
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object: MsgGovCloseChannelAmino): MsgGovCloseChannel {
    return {
      title: object.title,
      description: object.description,
      channel_id: object.channel_id,
      port_id: object.port_id,
      authority: object.authority
    };
  },
  toAmino(message: MsgGovCloseChannel): MsgGovCloseChannelAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.channel_id = message.channel_id;
    obj.port_id = message.port_id;
    obj.authority = message.authority;
    return obj;
  },
  fromAminoMsg(object: MsgGovCloseChannelAminoMsg): MsgGovCloseChannel {
    return MsgGovCloseChannel.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovCloseChannelProtoMsg): MsgGovCloseChannel {
    return MsgGovCloseChannel.decode(message.value);
  },
  toProto(message: MsgGovCloseChannel): Uint8Array {
    return MsgGovCloseChannel.encode(message).finish();
  },
  toProtoMsg(message: MsgGovCloseChannel): MsgGovCloseChannelProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannel",
      value: MsgGovCloseChannel.encode(message).finish()
    };
  }
};
function createBaseMsgGovCloseChannelResponse(): MsgGovCloseChannelResponse {
  return {};
}
export const MsgGovCloseChannelResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannelResponse",
  encode(_: MsgGovCloseChannelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGovCloseChannelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGovCloseChannelResponse();
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
  fromJSON(_: any): MsgGovCloseChannelResponse {
    return {};
  },
  toJSON(_: MsgGovCloseChannelResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgGovCloseChannelResponse>): MsgGovCloseChannelResponse {
    const message = createBaseMsgGovCloseChannelResponse();
    return message;
  },
  fromAmino(_: MsgGovCloseChannelResponseAmino): MsgGovCloseChannelResponse {
    return {};
  },
  toAmino(_: MsgGovCloseChannelResponse): MsgGovCloseChannelResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgGovCloseChannelResponseAminoMsg): MsgGovCloseChannelResponse {
    return MsgGovCloseChannelResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovCloseChannelResponseProtoMsg): MsgGovCloseChannelResponse {
    return MsgGovCloseChannelResponse.decode(message.value);
  },
  toProto(message: MsgGovCloseChannelResponse): Uint8Array {
    return MsgGovCloseChannelResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGovCloseChannelResponse): MsgGovCloseChannelResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannelResponse",
      value: MsgGovCloseChannelResponse.encode(message).finish()
    };
  }
};
function createBaseMsgGovSetLsmCaps(): MsgGovSetLsmCaps {
  return {
    title: "",
    description: "",
    chain_id: "",
    caps: LsmCaps.fromPartial({}),
    authority: ""
  };
}
export const MsgGovSetLsmCaps = {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps",
  encode(message: MsgGovSetLsmCaps, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.chain_id !== "") {
      writer.uint32(26).string(message.chain_id);
    }
    if (message.caps !== undefined) {
      LsmCaps.encode(message.caps, writer.uint32(34).fork()).ldelim();
    }
    if (message.authority !== "") {
      writer.uint32(42).string(message.authority);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGovSetLsmCaps {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGovSetLsmCaps();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.chain_id = reader.string();
          break;
        case 4:
          message.caps = LsmCaps.decode(reader, reader.uint32());
          break;
        case 5:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgGovSetLsmCaps {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      caps: isSet(object.caps) ? LsmCaps.fromJSON(object.caps) : undefined,
      authority: isSet(object.authority) ? String(object.authority) : ""
    };
  },
  toJSON(message: MsgGovSetLsmCaps): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    message.caps !== undefined && (obj.caps = message.caps ? LsmCaps.toJSON(message.caps) : undefined);
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgGovSetLsmCaps>): MsgGovSetLsmCaps {
    const message = createBaseMsgGovSetLsmCaps();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.chain_id = object.chain_id ?? "";
    message.caps = object.caps !== undefined && object.caps !== null ? LsmCaps.fromPartial(object.caps) : undefined;
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object: MsgGovSetLsmCapsAmino): MsgGovSetLsmCaps {
    return {
      title: object.title,
      description: object.description,
      chain_id: object.chain_id,
      caps: object?.caps ? LsmCaps.fromAmino(object.caps) : undefined,
      authority: object.authority
    };
  },
  toAmino(message: MsgGovSetLsmCaps): MsgGovSetLsmCapsAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.chain_id = message.chain_id;
    obj.caps = message.caps ? LsmCaps.toAmino(message.caps) : undefined;
    obj.authority = message.authority;
    return obj;
  },
  fromAminoMsg(object: MsgGovSetLsmCapsAminoMsg): MsgGovSetLsmCaps {
    return MsgGovSetLsmCaps.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovSetLsmCapsProtoMsg): MsgGovSetLsmCaps {
    return MsgGovSetLsmCaps.decode(message.value);
  },
  toProto(message: MsgGovSetLsmCaps): Uint8Array {
    return MsgGovSetLsmCaps.encode(message).finish();
  },
  toProtoMsg(message: MsgGovSetLsmCaps): MsgGovSetLsmCapsProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps",
      value: MsgGovSetLsmCaps.encode(message).finish()
    };
  }
};
function createBaseMsgGovSetLsmCapsResponse(): MsgGovSetLsmCapsResponse {
  return {};
}
export const MsgGovSetLsmCapsResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCapsResponse",
  encode(_: MsgGovSetLsmCapsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGovSetLsmCapsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGovSetLsmCapsResponse();
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
  fromJSON(_: any): MsgGovSetLsmCapsResponse {
    return {};
  },
  toJSON(_: MsgGovSetLsmCapsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgGovSetLsmCapsResponse>): MsgGovSetLsmCapsResponse {
    const message = createBaseMsgGovSetLsmCapsResponse();
    return message;
  },
  fromAmino(_: MsgGovSetLsmCapsResponseAmino): MsgGovSetLsmCapsResponse {
    return {};
  },
  toAmino(_: MsgGovSetLsmCapsResponse): MsgGovSetLsmCapsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgGovSetLsmCapsResponseAminoMsg): MsgGovSetLsmCapsResponse {
    return MsgGovSetLsmCapsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovSetLsmCapsResponseProtoMsg): MsgGovSetLsmCapsResponse {
    return MsgGovSetLsmCapsResponse.decode(message.value);
  },
  toProto(message: MsgGovSetLsmCapsResponse): Uint8Array {
    return MsgGovSetLsmCapsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGovSetLsmCapsResponse): MsgGovSetLsmCapsResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCapsResponse",
      value: MsgGovSetLsmCapsResponse.encode(message).finish()
    };
  }
};