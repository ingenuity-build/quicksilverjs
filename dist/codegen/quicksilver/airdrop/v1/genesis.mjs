import { Params } from "./params";
import { ZoneDrop, ClaimRecord } from "./airdrop";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        zoneDrops: [],
        claimRecords: []
    };
}
export const GenesisState = {
    typeUrl: "/quicksilver.airdrop.v1.GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.zoneDrops) {
            ZoneDrop.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.claimRecords) {
            ClaimRecord.encode(v, writer.uint32(26).fork()).ldelim();
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
                    message.zoneDrops.push(ZoneDrop.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.claimRecords.push(ClaimRecord.decode(reader, reader.uint32()));
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
            zoneDrops: Array.isArray(object?.zoneDrops) ? object.zoneDrops.map((e) => ZoneDrop.fromJSON(e)) : [],
            claimRecords: Array.isArray(object?.claimRecords) ? object.claimRecords.map((e) => ClaimRecord.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.zoneDrops) {
            obj.zoneDrops = message.zoneDrops.map(e => e ? ZoneDrop.toJSON(e) : undefined);
        }
        else {
            obj.zoneDrops = [];
        }
        if (message.claimRecords) {
            obj.claimRecords = message.claimRecords.map(e => e ? ClaimRecord.toJSON(e) : undefined);
        }
        else {
            obj.claimRecords = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.zoneDrops = object.zoneDrops?.map(e => ZoneDrop.fromPartial(e)) || [];
        message.claimRecords = object.claimRecords?.map(e => ClaimRecord.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? Params.fromAmino(object.params) : undefined,
            zoneDrops: Array.isArray(object?.zone_drops) ? object.zone_drops.map((e) => ZoneDrop.fromAmino(e)) : [],
            claimRecords: Array.isArray(object?.claim_records) ? object.claim_records.map((e) => ClaimRecord.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.zoneDrops) {
            obj.zone_drops = message.zoneDrops.map(e => e ? ZoneDrop.toAmino(e) : undefined);
        }
        else {
            obj.zone_drops = [];
        }
        if (message.claimRecords) {
            obj.claim_records = message.claimRecords.map(e => e ? ClaimRecord.toAmino(e) : undefined);
        }
        else {
            obj.claim_records = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.airdrop.v1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map