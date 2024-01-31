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
exports.RegisterZoneDropProposal = void 0;
const airdrop_1 = require("./airdrop");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../../helpers");
function createBaseRegisterZoneDropProposal() {
    return {
        title: "",
        description: "",
        zone_drop: airdrop_1.ZoneDrop.fromPartial({}),
        claim_records: new Uint8Array()
    };
}
exports.RegisterZoneDropProposal = {
    typeUrl: "/quicksilver.airdrop.v1.RegisterZoneDropProposal",
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.zone_drop !== undefined) {
            airdrop_1.ZoneDrop.encode(message.zone_drop, writer.uint32(26).fork()).ldelim();
        }
        if (message.claim_records.length !== 0) {
            writer.uint32(34).bytes(message.claim_records);
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
                    message.zone_drop = airdrop_1.ZoneDrop.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.claim_records = reader.bytes();
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            zone_drop: (0, helpers_1.isSet)(object.zone_drop) ? airdrop_1.ZoneDrop.fromJSON(object.zone_drop) : undefined,
            claim_records: (0, helpers_1.isSet)(object.claim_records) ? (0, helpers_1.bytesFromBase64)(object.claim_records) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.zone_drop !== undefined && (obj.zone_drop = message.zone_drop ? airdrop_1.ZoneDrop.toJSON(message.zone_drop) : undefined);
        message.claim_records !== undefined && (obj.claim_records = (0, helpers_1.base64FromBytes)(message.claim_records !== undefined ? message.claim_records : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRegisterZoneDropProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.zone_drop = object.zone_drop !== undefined && object.zone_drop !== null ? airdrop_1.ZoneDrop.fromPartial(object.zone_drop) : undefined;
        message.claim_records = object.claim_records ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            zone_drop: object?.zone_drop ? airdrop_1.ZoneDrop.fromAmino(object.zone_drop) : undefined,
            claim_records: object.claim_records
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.zone_drop = message.zone_drop ? airdrop_1.ZoneDrop.toAmino(message.zone_drop) : undefined;
        obj.claim_records = message.claim_records;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RegisterZoneDropProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RegisterZoneDropProposal.decode(message.value);
    },
    toProto(message) {
        return exports.RegisterZoneDropProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.RegisterZoneDropProposal",
            value: exports.RegisterZoneDropProposal.encode(message).finish()
        };
    }
};
//# sourceMappingURL=proposals.js.map