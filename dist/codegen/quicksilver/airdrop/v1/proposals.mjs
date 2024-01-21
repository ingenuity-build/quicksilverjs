import { ZoneDrop } from "./airdrop";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseRegisterZoneDropProposal() {
    return {
        title: "",
        description: "",
        zoneDrop: ZoneDrop.fromPartial({}),
        claimRecords: new Uint8Array()
    };
}
export const RegisterZoneDropProposal = {
    typeUrl: "/quicksilver.airdrop.v1.RegisterZoneDropProposal",
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            zoneDrop: isSet(object.zoneDrop) ? ZoneDrop.fromJSON(object.zoneDrop) : undefined,
            claimRecords: isSet(object.claimRecords) ? bytesFromBase64(object.claimRecords) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.zoneDrop !== undefined && (obj.zoneDrop = message.zoneDrop ? ZoneDrop.toJSON(message.zoneDrop) : undefined);
        message.claimRecords !== undefined && (obj.claimRecords = base64FromBytes(message.claimRecords !== undefined ? message.claimRecords : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRegisterZoneDropProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.zoneDrop = object.zoneDrop !== undefined && object.zoneDrop !== null ? ZoneDrop.fromPartial(object.zoneDrop) : undefined;
        message.claimRecords = object.claimRecords ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            zoneDrop: object?.zone_drop ? ZoneDrop.fromAmino(object.zone_drop) : undefined,
            claimRecords: object.claim_records
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.zone_drop = message.zoneDrop ? ZoneDrop.toAmino(message.zoneDrop) : undefined;
        obj.claim_records = message.claimRecords;
        return obj;
    },
    fromAminoMsg(object) {
        return RegisterZoneDropProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RegisterZoneDropProposal.decode(message.value);
    },
    toProto(message) {
        return RegisterZoneDropProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.RegisterZoneDropProposal",
            value: RegisterZoneDropProposal.encode(message).finish()
        };
    }
};
//# sourceMappingURL=proposals.js.map