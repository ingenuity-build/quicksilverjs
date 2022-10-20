import { ZoneDrop, ZoneDropSDKType } from "./airdrop";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface RegisterZoneDropProposal {
  title: string;
  description: string;
  zoneDrop?: ZoneDrop;
  claimRecords: Uint8Array;
}
export interface RegisterZoneDropProposalSDKType {
  title: string;
  description: string;
  zone_drop?: ZoneDropSDKType;
  claim_records: Uint8Array;
}

function createBaseRegisterZoneDropProposal(): RegisterZoneDropProposal {
  return {
    title: "",
    description: "",
    zoneDrop: undefined,
    claimRecords: new Uint8Array()
  };
}

export const RegisterZoneDropProposal = {
  encode(message: RegisterZoneDropProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.zoneDrop !== undefined) {
      ZoneDrop.encode(message.zoneDrop, writer.uint32(26).fork()).ldelim();
    }

    if (message.claimRecords.length !== 0) {
      writer.uint32(34).bytes(message.claimRecords);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterZoneDropProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterZoneDropProposal();

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
          message.zoneDrop = ZoneDrop.decode(reader, reader.uint32());
          break;

        case 4:
          message.claimRecords = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RegisterZoneDropProposal>): RegisterZoneDropProposal {
    const message = createBaseRegisterZoneDropProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.zoneDrop = object.zoneDrop !== undefined && object.zoneDrop !== null ? ZoneDrop.fromPartial(object.zoneDrop) : undefined;
    message.claimRecords = object.claimRecords ?? new Uint8Array();
    return message;
  }

};