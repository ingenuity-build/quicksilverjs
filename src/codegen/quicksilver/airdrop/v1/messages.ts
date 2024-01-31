import { Proof, ProofAmino, ProofSDKType } from "../../claimsmanager/v1/claimsmanager";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgClaim {
  chain_id: string;
  action: Long;
  address: string;
  proofs: Proof[];
}
export interface MsgClaimProtoMsg {
  type_url: "/quicksilver.airdrop.v1.MsgClaim";
  value: Uint8Array;
}
export interface MsgClaimAmino {
  chain_id: string;
  action: string;
  address: string;
  proofs: ProofAmino[];
}
export interface MsgClaimAminoMsg {
  type: "/quicksilver.airdrop.v1.MsgClaim";
  value: MsgClaimAmino;
}
export interface MsgClaimSDKType {
  chain_id: string;
  action: Long;
  address: string;
  proofs: ProofSDKType[];
}
export interface MsgClaimResponse {
  amount: Long;
}
export interface MsgClaimResponseProtoMsg {
  type_url: "/quicksilver.airdrop.v1.MsgClaimResponse";
  value: Uint8Array;
}
export interface MsgClaimResponseAmino {
  amount: string;
}
export interface MsgClaimResponseAminoMsg {
  type: "/quicksilver.airdrop.v1.MsgClaimResponse";
  value: MsgClaimResponseAmino;
}
export interface MsgClaimResponseSDKType {
  amount: Long;
}
/** MsgIncentivePoolSpend represents a message to send coins from one account to another. */
export interface MsgIncentivePoolSpend {
  authority: string;
  to_address: string;
  amount: Coin[];
}
export interface MsgIncentivePoolSpendProtoMsg {
  type_url: "/quicksilver.airdrop.v1.MsgIncentivePoolSpend";
  value: Uint8Array;
}
/** MsgIncentivePoolSpend represents a message to send coins from one account to another. */
export interface MsgIncentivePoolSpendAmino {
  authority: string;
  to_address: string;
  amount: CoinAmino[];
}
export interface MsgIncentivePoolSpendAminoMsg {
  type: "/quicksilver.airdrop.v1.MsgIncentivePoolSpend";
  value: MsgIncentivePoolSpendAmino;
}
/** MsgIncentivePoolSpend represents a message to send coins from one account to another. */
export interface MsgIncentivePoolSpendSDKType {
  authority: string;
  to_address: string;
  amount: CoinSDKType[];
}
/** MsgIncentivePoolSpendResponse defines the MsgIncentivePoolSpend response type. */
export interface MsgIncentivePoolSpendResponse {}
export interface MsgIncentivePoolSpendResponseProtoMsg {
  type_url: "/quicksilver.airdrop.v1.MsgIncentivePoolSpendResponse";
  value: Uint8Array;
}
/** MsgIncentivePoolSpendResponse defines the MsgIncentivePoolSpend response type. */
export interface MsgIncentivePoolSpendResponseAmino {}
export interface MsgIncentivePoolSpendResponseAminoMsg {
  type: "/quicksilver.airdrop.v1.MsgIncentivePoolSpendResponse";
  value: MsgIncentivePoolSpendResponseAmino;
}
/** MsgIncentivePoolSpendResponse defines the MsgIncentivePoolSpend response type. */
export interface MsgIncentivePoolSpendResponseSDKType {}
function createBaseMsgClaim(): MsgClaim {
  return {
    chain_id: "",
    action: Long.ZERO,
    address: "",
    proofs: []
  };
}
export const MsgClaim = {
  typeUrl: "/quicksilver.airdrop.v1.MsgClaim",
  encode(message: MsgClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain_id !== "") {
      writer.uint32(10).string(message.chain_id);
    }
    if (!message.action.isZero()) {
      writer.uint32(16).int64(message.action);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    for (const v of message.proofs) {
      Proof.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain_id = reader.string();
          break;
        case 2:
          message.action = (reader.int64() as Long);
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.proofs.push(Proof.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgClaim {
    return {
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      action: isSet(object.action) ? Long.fromValue(object.action) : Long.ZERO,
      address: isSet(object.address) ? String(object.address) : "",
      proofs: Array.isArray(object?.proofs) ? object.proofs.map((e: any) => Proof.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgClaim): unknown {
    const obj: any = {};
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    message.action !== undefined && (obj.action = (message.action || Long.ZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    if (message.proofs) {
      obj.proofs = message.proofs.map(e => e ? Proof.toJSON(e) : undefined);
    } else {
      obj.proofs = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgClaim>): MsgClaim {
    const message = createBaseMsgClaim();
    message.chain_id = object.chain_id ?? "";
    message.action = object.action !== undefined && object.action !== null ? Long.fromValue(object.action) : Long.ZERO;
    message.address = object.address ?? "";
    message.proofs = object.proofs?.map(e => Proof.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgClaimAmino): MsgClaim {
    return {
      chain_id: object.chain_id,
      action: Long.fromString(object.action),
      address: object.address,
      proofs: Array.isArray(object?.proofs) ? object.proofs.map((e: any) => Proof.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgClaim): MsgClaimAmino {
    const obj: any = {};
    obj.chain_id = message.chain_id;
    obj.action = message.action ? message.action.toString() : undefined;
    obj.address = message.address;
    if (message.proofs) {
      obj.proofs = message.proofs.map(e => e ? Proof.toAmino(e) : undefined);
    } else {
      obj.proofs = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgClaimAminoMsg): MsgClaim {
    return MsgClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimProtoMsg): MsgClaim {
    return MsgClaim.decode(message.value);
  },
  toProto(message: MsgClaim): Uint8Array {
    return MsgClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgClaim): MsgClaimProtoMsg {
    return {
      typeUrl: "/quicksilver.airdrop.v1.MsgClaim",
      value: MsgClaim.encode(message).finish()
    };
  }
};
function createBaseMsgClaimResponse(): MsgClaimResponse {
  return {
    amount: Long.UZERO
  };
}
export const MsgClaimResponse = {
  typeUrl: "/quicksilver.airdrop.v1.MsgClaimResponse",
  encode(message: MsgClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.amount.isZero()) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgClaimResponse {
    return {
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO
    };
  },
  toJSON(message: MsgClaimResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = (message.amount || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgClaimResponse>): MsgClaimResponse {
    const message = createBaseMsgClaimResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  },
  fromAmino(object: MsgClaimResponseAmino): MsgClaimResponse {
    return {
      amount: Long.fromString(object.amount)
    };
  },
  toAmino(message: MsgClaimResponse): MsgClaimResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? message.amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgClaimResponseAminoMsg): MsgClaimResponse {
    return MsgClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimResponseProtoMsg): MsgClaimResponse {
    return MsgClaimResponse.decode(message.value);
  },
  toProto(message: MsgClaimResponse): Uint8Array {
    return MsgClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimResponse): MsgClaimResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.airdrop.v1.MsgClaimResponse",
      value: MsgClaimResponse.encode(message).finish()
    };
  }
};
function createBaseMsgIncentivePoolSpend(): MsgIncentivePoolSpend {
  return {
    authority: "",
    to_address: "",
    amount: []
  };
}
export const MsgIncentivePoolSpend = {
  typeUrl: "/quicksilver.airdrop.v1.MsgIncentivePoolSpend",
  encode(message: MsgIncentivePoolSpend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.to_address !== "") {
      writer.uint32(18).string(message.to_address);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIncentivePoolSpend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIncentivePoolSpend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.to_address = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgIncentivePoolSpend {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      to_address: isSet(object.to_address) ? String(object.to_address) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgIncentivePoolSpend): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.to_address !== undefined && (obj.to_address = message.to_address);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgIncentivePoolSpend>): MsgIncentivePoolSpend {
    const message = createBaseMsgIncentivePoolSpend();
    message.authority = object.authority ?? "";
    message.to_address = object.to_address ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgIncentivePoolSpendAmino): MsgIncentivePoolSpend {
    return {
      authority: object.authority,
      to_address: object.to_address,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgIncentivePoolSpend): MsgIncentivePoolSpendAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.to_address = message.to_address;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgIncentivePoolSpendAminoMsg): MsgIncentivePoolSpend {
    return MsgIncentivePoolSpend.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgIncentivePoolSpendProtoMsg): MsgIncentivePoolSpend {
    return MsgIncentivePoolSpend.decode(message.value);
  },
  toProto(message: MsgIncentivePoolSpend): Uint8Array {
    return MsgIncentivePoolSpend.encode(message).finish();
  },
  toProtoMsg(message: MsgIncentivePoolSpend): MsgIncentivePoolSpendProtoMsg {
    return {
      typeUrl: "/quicksilver.airdrop.v1.MsgIncentivePoolSpend",
      value: MsgIncentivePoolSpend.encode(message).finish()
    };
  }
};
function createBaseMsgIncentivePoolSpendResponse(): MsgIncentivePoolSpendResponse {
  return {};
}
export const MsgIncentivePoolSpendResponse = {
  typeUrl: "/quicksilver.airdrop.v1.MsgIncentivePoolSpendResponse",
  encode(_: MsgIncentivePoolSpendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIncentivePoolSpendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIncentivePoolSpendResponse();
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
  fromJSON(_: any): MsgIncentivePoolSpendResponse {
    return {};
  },
  toJSON(_: MsgIncentivePoolSpendResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgIncentivePoolSpendResponse>): MsgIncentivePoolSpendResponse {
    const message = createBaseMsgIncentivePoolSpendResponse();
    return message;
  },
  fromAmino(_: MsgIncentivePoolSpendResponseAmino): MsgIncentivePoolSpendResponse {
    return {};
  },
  toAmino(_: MsgIncentivePoolSpendResponse): MsgIncentivePoolSpendResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgIncentivePoolSpendResponseAminoMsg): MsgIncentivePoolSpendResponse {
    return MsgIncentivePoolSpendResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgIncentivePoolSpendResponseProtoMsg): MsgIncentivePoolSpendResponse {
    return MsgIncentivePoolSpendResponse.decode(message.value);
  },
  toProto(message: MsgIncentivePoolSpendResponse): Uint8Array {
    return MsgIncentivePoolSpendResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgIncentivePoolSpendResponse): MsgIncentivePoolSpendResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.airdrop.v1.MsgIncentivePoolSpendResponse",
      value: MsgIncentivePoolSpendResponse.encode(message).finish()
    };
  }
};