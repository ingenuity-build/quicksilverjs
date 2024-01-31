import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
export interface AddProtocolDataProposal {
  title: string;
  description: string;
  type: string;
  data: string;
  key: string;
}
export interface AddProtocolDataProposalProtoMsg {
  type_url: "/quicksilver.participationrewards.v1.AddProtocolDataProposal";
  value: Uint8Array;
}
export interface AddProtocolDataProposalAmino {
  title: string;
  description: string;
  type: string;
  data: string;
  key: string;
}
export interface AddProtocolDataProposalAminoMsg {
  type: "/quicksilver.participationrewards.v1.AddProtocolDataProposal";
  value: AddProtocolDataProposalAmino;
}
export interface AddProtocolDataProposalSDKType {
  title: string;
  description: string;
  type: string;
  data: string;
  key: string;
}
export interface AddProtocolDataProposalWithDeposit {
  title: string;
  description: string;
  protocol: string;
  type: string;
  key: string;
  data: Uint8Array;
  deposit: string;
}
export interface AddProtocolDataProposalWithDepositProtoMsg {
  type_url: "/quicksilver.participationrewards.v1.AddProtocolDataProposalWithDeposit";
  value: Uint8Array;
}
export interface AddProtocolDataProposalWithDepositAmino {
  title: string;
  description: string;
  protocol: string;
  type: string;
  key: string;
  data: Uint8Array;
  deposit: string;
}
export interface AddProtocolDataProposalWithDepositAminoMsg {
  type: "/quicksilver.participationrewards.v1.AddProtocolDataProposalWithDeposit";
  value: AddProtocolDataProposalWithDepositAmino;
}
export interface AddProtocolDataProposalWithDepositSDKType {
  title: string;
  description: string;
  protocol: string;
  type: string;
  key: string;
  data: Uint8Array;
  deposit: string;
}
export interface MsgGovRemoveProtocolData {
  title: string;
  description: string;
  key: string;
  authority: string;
}
export interface MsgGovRemoveProtocolDataProtoMsg {
  type_url: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData";
  value: Uint8Array;
}
export interface MsgGovRemoveProtocolDataAmino {
  title: string;
  description: string;
  key: string;
  authority: string;
}
export interface MsgGovRemoveProtocolDataAminoMsg {
  type: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData";
  value: MsgGovRemoveProtocolDataAmino;
}
export interface MsgGovRemoveProtocolDataSDKType {
  title: string;
  description: string;
  key: string;
  authority: string;
}
/**
 * MsgGovRemoveProtocolDataResponse defines the MsgGovRemoveProtocolData
 * response type.
 */
export interface MsgGovRemoveProtocolDataResponse {}
export interface MsgGovRemoveProtocolDataResponseProtoMsg {
  type_url: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolDataResponse";
  value: Uint8Array;
}
/**
 * MsgGovRemoveProtocolDataResponse defines the MsgGovRemoveProtocolData
 * response type.
 */
export interface MsgGovRemoveProtocolDataResponseAmino {}
export interface MsgGovRemoveProtocolDataResponseAminoMsg {
  type: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolDataResponse";
  value: MsgGovRemoveProtocolDataResponseAmino;
}
/**
 * MsgGovRemoveProtocolDataResponse defines the MsgGovRemoveProtocolData
 * response type.
 */
export interface MsgGovRemoveProtocolDataResponseSDKType {}
function createBaseAddProtocolDataProposal(): AddProtocolDataProposal {
  return {
    title: "",
    description: "",
    type: "",
    data: "",
    key: ""
  };
}
export const AddProtocolDataProposal = {
  typeUrl: "/quicksilver.participationrewards.v1.AddProtocolDataProposal",
  encode(message: AddProtocolDataProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.type !== "") {
      writer.uint32(34).string(message.type);
    }
    if (message.data !== "") {
      writer.uint32(42).string(message.data);
    }
    if (message.key !== "") {
      writer.uint32(50).string(message.key);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AddProtocolDataProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddProtocolDataProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 4:
          message.type = reader.string();
          break;
        case 5:
          message.data = reader.string();
          break;
        case 6:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AddProtocolDataProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      type: isSet(object.type) ? String(object.type) : "",
      data: isSet(object.data) ? String(object.data) : "",
      key: isSet(object.key) ? String(object.key) : ""
    };
  },
  toJSON(message: AddProtocolDataProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.type !== undefined && (obj.type = message.type);
    message.data !== undefined && (obj.data = message.data);
    message.key !== undefined && (obj.key = message.key);
    return obj;
  },
  fromPartial(object: DeepPartial<AddProtocolDataProposal>): AddProtocolDataProposal {
    const message = createBaseAddProtocolDataProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.type = object.type ?? "";
    message.data = object.data ?? "";
    message.key = object.key ?? "";
    return message;
  },
  fromAmino(object: AddProtocolDataProposalAmino): AddProtocolDataProposal {
    return {
      title: object.title,
      description: object.description,
      type: object.type,
      data: object.data,
      key: object.key
    };
  },
  toAmino(message: AddProtocolDataProposal): AddProtocolDataProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.type = message.type;
    obj.data = message.data;
    obj.key = message.key;
    return obj;
  },
  fromAminoMsg(object: AddProtocolDataProposalAminoMsg): AddProtocolDataProposal {
    return AddProtocolDataProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: AddProtocolDataProposalProtoMsg): AddProtocolDataProposal {
    return AddProtocolDataProposal.decode(message.value);
  },
  toProto(message: AddProtocolDataProposal): Uint8Array {
    return AddProtocolDataProposal.encode(message).finish();
  },
  toProtoMsg(message: AddProtocolDataProposal): AddProtocolDataProposalProtoMsg {
    return {
      typeUrl: "/quicksilver.participationrewards.v1.AddProtocolDataProposal",
      value: AddProtocolDataProposal.encode(message).finish()
    };
  }
};
function createBaseAddProtocolDataProposalWithDeposit(): AddProtocolDataProposalWithDeposit {
  return {
    title: "",
    description: "",
    protocol: "",
    type: "",
    key: "",
    data: new Uint8Array(),
    deposit: ""
  };
}
export const AddProtocolDataProposalWithDeposit = {
  typeUrl: "/quicksilver.participationrewards.v1.AddProtocolDataProposalWithDeposit",
  encode(message: AddProtocolDataProposalWithDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.protocol !== "") {
      writer.uint32(26).string(message.protocol);
    }
    if (message.type !== "") {
      writer.uint32(34).string(message.type);
    }
    if (message.key !== "") {
      writer.uint32(42).string(message.key);
    }
    if (message.data.length !== 0) {
      writer.uint32(50).bytes(message.data);
    }
    if (message.deposit !== "") {
      writer.uint32(58).string(message.deposit);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AddProtocolDataProposalWithDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddProtocolDataProposalWithDeposit();
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
          message.protocol = reader.string();
          break;
        case 4:
          message.type = reader.string();
          break;
        case 5:
          message.key = reader.string();
          break;
        case 6:
          message.data = reader.bytes();
          break;
        case 7:
          message.deposit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AddProtocolDataProposalWithDeposit {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      protocol: isSet(object.protocol) ? String(object.protocol) : "",
      type: isSet(object.type) ? String(object.type) : "",
      key: isSet(object.key) ? String(object.key) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },
  toJSON(message: AddProtocolDataProposalWithDeposit): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.protocol !== undefined && (obj.protocol = message.protocol);
    message.type !== undefined && (obj.type = message.type);
    message.key !== undefined && (obj.key = message.key);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.deposit !== undefined && (obj.deposit = message.deposit);
    return obj;
  },
  fromPartial(object: DeepPartial<AddProtocolDataProposalWithDeposit>): AddProtocolDataProposalWithDeposit {
    const message = createBaseAddProtocolDataProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.protocol = object.protocol ?? "";
    message.type = object.type ?? "";
    message.key = object.key ?? "";
    message.data = object.data ?? new Uint8Array();
    message.deposit = object.deposit ?? "";
    return message;
  },
  fromAmino(object: AddProtocolDataProposalWithDepositAmino): AddProtocolDataProposalWithDeposit {
    return {
      title: object.title,
      description: object.description,
      protocol: object.protocol,
      type: object.type,
      key: object.key,
      data: object.data,
      deposit: object.deposit
    };
  },
  toAmino(message: AddProtocolDataProposalWithDeposit): AddProtocolDataProposalWithDepositAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.protocol = message.protocol;
    obj.type = message.type;
    obj.key = message.key;
    obj.data = message.data;
    obj.deposit = message.deposit;
    return obj;
  },
  fromAminoMsg(object: AddProtocolDataProposalWithDepositAminoMsg): AddProtocolDataProposalWithDeposit {
    return AddProtocolDataProposalWithDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: AddProtocolDataProposalWithDepositProtoMsg): AddProtocolDataProposalWithDeposit {
    return AddProtocolDataProposalWithDeposit.decode(message.value);
  },
  toProto(message: AddProtocolDataProposalWithDeposit): Uint8Array {
    return AddProtocolDataProposalWithDeposit.encode(message).finish();
  },
  toProtoMsg(message: AddProtocolDataProposalWithDeposit): AddProtocolDataProposalWithDepositProtoMsg {
    return {
      typeUrl: "/quicksilver.participationrewards.v1.AddProtocolDataProposalWithDeposit",
      value: AddProtocolDataProposalWithDeposit.encode(message).finish()
    };
  }
};
function createBaseMsgGovRemoveProtocolData(): MsgGovRemoveProtocolData {
  return {
    title: "",
    description: "",
    key: "",
    authority: ""
  };
}
export const MsgGovRemoveProtocolData = {
  typeUrl: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData",
  encode(message: MsgGovRemoveProtocolData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.key !== "") {
      writer.uint32(26).string(message.key);
    }
    if (message.authority !== "") {
      writer.uint32(34).string(message.authority);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGovRemoveProtocolData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGovRemoveProtocolData();
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
          message.key = reader.string();
          break;
        case 4:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgGovRemoveProtocolData {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      key: isSet(object.key) ? String(object.key) : "",
      authority: isSet(object.authority) ? String(object.authority) : ""
    };
  },
  toJSON(message: MsgGovRemoveProtocolData): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.key !== undefined && (obj.key = message.key);
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgGovRemoveProtocolData>): MsgGovRemoveProtocolData {
    const message = createBaseMsgGovRemoveProtocolData();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.key = object.key ?? "";
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object: MsgGovRemoveProtocolDataAmino): MsgGovRemoveProtocolData {
    return {
      title: object.title,
      description: object.description,
      key: object.key,
      authority: object.authority
    };
  },
  toAmino(message: MsgGovRemoveProtocolData): MsgGovRemoveProtocolDataAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.key = message.key;
    obj.authority = message.authority;
    return obj;
  },
  fromAminoMsg(object: MsgGovRemoveProtocolDataAminoMsg): MsgGovRemoveProtocolData {
    return MsgGovRemoveProtocolData.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovRemoveProtocolDataProtoMsg): MsgGovRemoveProtocolData {
    return MsgGovRemoveProtocolData.decode(message.value);
  },
  toProto(message: MsgGovRemoveProtocolData): Uint8Array {
    return MsgGovRemoveProtocolData.encode(message).finish();
  },
  toProtoMsg(message: MsgGovRemoveProtocolData): MsgGovRemoveProtocolDataProtoMsg {
    return {
      typeUrl: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData",
      value: MsgGovRemoveProtocolData.encode(message).finish()
    };
  }
};
function createBaseMsgGovRemoveProtocolDataResponse(): MsgGovRemoveProtocolDataResponse {
  return {};
}
export const MsgGovRemoveProtocolDataResponse = {
  typeUrl: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolDataResponse",
  encode(_: MsgGovRemoveProtocolDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGovRemoveProtocolDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGovRemoveProtocolDataResponse();
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
  fromJSON(_: any): MsgGovRemoveProtocolDataResponse {
    return {};
  },
  toJSON(_: MsgGovRemoveProtocolDataResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgGovRemoveProtocolDataResponse>): MsgGovRemoveProtocolDataResponse {
    const message = createBaseMsgGovRemoveProtocolDataResponse();
    return message;
  },
  fromAmino(_: MsgGovRemoveProtocolDataResponseAmino): MsgGovRemoveProtocolDataResponse {
    return {};
  },
  toAmino(_: MsgGovRemoveProtocolDataResponse): MsgGovRemoveProtocolDataResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgGovRemoveProtocolDataResponseAminoMsg): MsgGovRemoveProtocolDataResponse {
    return MsgGovRemoveProtocolDataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovRemoveProtocolDataResponseProtoMsg): MsgGovRemoveProtocolDataResponse {
    return MsgGovRemoveProtocolDataResponse.decode(message.value);
  },
  toProto(message: MsgGovRemoveProtocolDataResponse): Uint8Array {
    return MsgGovRemoveProtocolDataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGovRemoveProtocolDataResponse): MsgGovRemoveProtocolDataResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolDataResponse",
      value: MsgGovRemoveProtocolDataResponse.encode(message).finish()
    };
  }
};