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
exports.Cosmos_cryptoPubKey_ToAmino = exports.Cosmos_cryptoPubKey_FromAmino = exports.Cosmos_cryptoPubKey_InterfaceDecoder = exports.Pool = exports.RedelegationResponse = exports.RedelegationEntryResponse = exports.DelegationResponse = exports.Params = exports.Redelegation = exports.RedelegationEntry = exports.UnbondingDelegationEntry = exports.UnbondingDelegation = exports.Delegation = exports.DVVTriplets = exports.DVVTriplet = exports.DVPairs = exports.DVPair = exports.ValAddresses = exports.Validator = exports.Description = exports.Commission = exports.CommissionRates = exports.HistoricalInfo = exports.bondStatusToJSON = exports.bondStatusFromJSON = exports.BondStatusAmino = exports.BondStatusSDKType = exports.BondStatus = void 0;
const types_1 = require("../../../tendermint/types/types");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const any_1 = require("../../../google/protobuf/any");
const duration_1 = require("../../../google/protobuf/duration");
const coin_1 = require("../../base/v1beta1/coin");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
const encoding_1 = require("@cosmjs/encoding");
const amino_1 = require("@cosmjs/amino");
/** BondStatus is the status of a validator. */
var BondStatus;
(function (BondStatus) {
    /** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */
    BondStatus[BondStatus["BOND_STATUS_UNSPECIFIED"] = 0] = "BOND_STATUS_UNSPECIFIED";
    /** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */
    BondStatus[BondStatus["BOND_STATUS_UNBONDED"] = 1] = "BOND_STATUS_UNBONDED";
    /** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */
    BondStatus[BondStatus["BOND_STATUS_UNBONDING"] = 2] = "BOND_STATUS_UNBONDING";
    /** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */
    BondStatus[BondStatus["BOND_STATUS_BONDED"] = 3] = "BOND_STATUS_BONDED";
    BondStatus[BondStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BondStatus || (exports.BondStatus = BondStatus = {}));
exports.BondStatusSDKType = BondStatus;
exports.BondStatusAmino = BondStatus;
function bondStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "BOND_STATUS_UNSPECIFIED":
            return BondStatus.BOND_STATUS_UNSPECIFIED;
        case 1:
        case "BOND_STATUS_UNBONDED":
            return BondStatus.BOND_STATUS_UNBONDED;
        case 2:
        case "BOND_STATUS_UNBONDING":
            return BondStatus.BOND_STATUS_UNBONDING;
        case 3:
        case "BOND_STATUS_BONDED":
            return BondStatus.BOND_STATUS_BONDED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BondStatus.UNRECOGNIZED;
    }
}
exports.bondStatusFromJSON = bondStatusFromJSON;
function bondStatusToJSON(object) {
    switch (object) {
        case BondStatus.BOND_STATUS_UNSPECIFIED:
            return "BOND_STATUS_UNSPECIFIED";
        case BondStatus.BOND_STATUS_UNBONDED:
            return "BOND_STATUS_UNBONDED";
        case BondStatus.BOND_STATUS_UNBONDING:
            return "BOND_STATUS_UNBONDING";
        case BondStatus.BOND_STATUS_BONDED:
            return "BOND_STATUS_BONDED";
        case BondStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.bondStatusToJSON = bondStatusToJSON;
function createBaseHistoricalInfo() {
    return {
        header: types_1.Header.fromPartial({}),
        valset: []
    };
}
exports.HistoricalInfo = {
    typeUrl: "/cosmos.staking.v1beta1.HistoricalInfo",
    aminoType: "cosmos-sdk/HistoricalInfo",
    encode(message, writer = _m0.Writer.create()) {
        if (message.header !== undefined) {
            types_1.Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.valset) {
            exports.Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHistoricalInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.header = types_1.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.valset.push(exports.Validator.decode(reader, reader.uint32()));
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
            header: (0, helpers_1.isSet)(object.header) ? types_1.Header.fromJSON(object.header) : undefined,
            valset: Array.isArray(object?.valset) ? object.valset.map((e) => exports.Validator.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.header !== undefined && (obj.header = message.header ? types_1.Header.toJSON(message.header) : undefined);
        if (message.valset) {
            obj.valset = message.valset.map(e => e ? exports.Validator.toJSON(e) : undefined);
        }
        else {
            obj.valset = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHistoricalInfo();
        message.header = object.header !== undefined && object.header !== null ? types_1.Header.fromPartial(object.header) : undefined;
        message.valset = object.valset?.map(e => exports.Validator.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            header: object?.header ? types_1.Header.fromAmino(object.header) : undefined,
            valset: Array.isArray(object?.valset) ? object.valset.map((e) => exports.Validator.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.header = message.header ? types_1.Header.toAmino(message.header) : undefined;
        if (message.valset) {
            obj.valset = message.valset.map(e => e ? exports.Validator.toAmino(e) : undefined);
        }
        else {
            obj.valset = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.HistoricalInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/HistoricalInfo",
            value: exports.HistoricalInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.HistoricalInfo.decode(message.value);
    },
    toProto(message) {
        return exports.HistoricalInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.HistoricalInfo",
            value: exports.HistoricalInfo.encode(message).finish()
        };
    }
};
function createBaseCommissionRates() {
    return {
        rate: "",
        max_rate: "",
        max_change_rate: ""
    };
}
exports.CommissionRates = {
    typeUrl: "/cosmos.staking.v1beta1.CommissionRates",
    aminoType: "cosmos-sdk/CommissionRates",
    encode(message, writer = _m0.Writer.create()) {
        if (message.rate !== "") {
            writer.uint32(10).string(message.rate);
        }
        if (message.max_rate !== "") {
            writer.uint32(18).string(message.max_rate);
        }
        if (message.max_change_rate !== "") {
            writer.uint32(26).string(message.max_change_rate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommissionRates();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rate = reader.string();
                    break;
                case 2:
                    message.max_rate = reader.string();
                    break;
                case 3:
                    message.max_change_rate = reader.string();
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
            rate: (0, helpers_1.isSet)(object.rate) ? String(object.rate) : "",
            max_rate: (0, helpers_1.isSet)(object.max_rate) ? String(object.max_rate) : "",
            max_change_rate: (0, helpers_1.isSet)(object.max_change_rate) ? String(object.max_change_rate) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.rate !== undefined && (obj.rate = message.rate);
        message.max_rate !== undefined && (obj.max_rate = message.max_rate);
        message.max_change_rate !== undefined && (obj.max_change_rate = message.max_change_rate);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCommissionRates();
        message.rate = object.rate ?? "";
        message.max_rate = object.max_rate ?? "";
        message.max_change_rate = object.max_change_rate ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            rate: object.rate,
            max_rate: object.max_rate,
            max_change_rate: object.max_change_rate
        };
    },
    toAmino(message) {
        const obj = {};
        obj.rate = message.rate;
        obj.max_rate = message.max_rate;
        obj.max_change_rate = message.max_change_rate;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CommissionRates.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CommissionRates",
            value: exports.CommissionRates.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CommissionRates.decode(message.value);
    },
    toProto(message) {
        return exports.CommissionRates.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.CommissionRates",
            value: exports.CommissionRates.encode(message).finish()
        };
    }
};
function createBaseCommission() {
    return {
        commission_rates: exports.CommissionRates.fromPartial({}),
        update_time: new Date()
    };
}
exports.Commission = {
    typeUrl: "/cosmos.staking.v1beta1.Commission",
    aminoType: "cosmos-sdk/Commission",
    encode(message, writer = _m0.Writer.create()) {
        if (message.commission_rates !== undefined) {
            exports.CommissionRates.encode(message.commission_rates, writer.uint32(10).fork()).ldelim();
        }
        if (message.update_time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.update_time), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommission();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commission_rates = exports.CommissionRates.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.update_time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            commission_rates: (0, helpers_1.isSet)(object.commission_rates) ? exports.CommissionRates.fromJSON(object.commission_rates) : undefined,
            update_time: (0, helpers_1.isSet)(object.update_time) ? (0, helpers_1.fromJsonTimestamp)(object.update_time) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.commission_rates !== undefined && (obj.commission_rates = message.commission_rates ? exports.CommissionRates.toJSON(message.commission_rates) : undefined);
        message.update_time !== undefined && (obj.update_time = message.update_time.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCommission();
        message.commission_rates = object.commission_rates !== undefined && object.commission_rates !== null ? exports.CommissionRates.fromPartial(object.commission_rates) : undefined;
        message.update_time = object.update_time ?? undefined;
        return message;
    },
    fromAmino(object) {
        return {
            commission_rates: object?.commission_rates ? exports.CommissionRates.fromAmino(object.commission_rates) : undefined,
            update_time: object.update_time
        };
    },
    toAmino(message) {
        const obj = {};
        obj.commission_rates = message.commission_rates ? exports.CommissionRates.toAmino(message.commission_rates) : undefined;
        obj.update_time = message.update_time;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Commission.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Commission",
            value: exports.Commission.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Commission.decode(message.value);
    },
    toProto(message) {
        return exports.Commission.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Commission",
            value: exports.Commission.encode(message).finish()
        };
    }
};
function createBaseDescription() {
    return {
        moniker: "",
        identity: "",
        website: "",
        security_contact: "",
        details: ""
    };
}
exports.Description = {
    typeUrl: "/cosmos.staking.v1beta1.Description",
    aminoType: "cosmos-sdk/Description",
    encode(message, writer = _m0.Writer.create()) {
        if (message.moniker !== "") {
            writer.uint32(10).string(message.moniker);
        }
        if (message.identity !== "") {
            writer.uint32(18).string(message.identity);
        }
        if (message.website !== "") {
            writer.uint32(26).string(message.website);
        }
        if (message.security_contact !== "") {
            writer.uint32(34).string(message.security_contact);
        }
        if (message.details !== "") {
            writer.uint32(42).string(message.details);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDescription();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moniker = reader.string();
                    break;
                case 2:
                    message.identity = reader.string();
                    break;
                case 3:
                    message.website = reader.string();
                    break;
                case 4:
                    message.security_contact = reader.string();
                    break;
                case 5:
                    message.details = reader.string();
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
            moniker: (0, helpers_1.isSet)(object.moniker) ? String(object.moniker) : "",
            identity: (0, helpers_1.isSet)(object.identity) ? String(object.identity) : "",
            website: (0, helpers_1.isSet)(object.website) ? String(object.website) : "",
            security_contact: (0, helpers_1.isSet)(object.security_contact) ? String(object.security_contact) : "",
            details: (0, helpers_1.isSet)(object.details) ? String(object.details) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.identity !== undefined && (obj.identity = message.identity);
        message.website !== undefined && (obj.website = message.website);
        message.security_contact !== undefined && (obj.security_contact = message.security_contact);
        message.details !== undefined && (obj.details = message.details);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDescription();
        message.moniker = object.moniker ?? "";
        message.identity = object.identity ?? "";
        message.website = object.website ?? "";
        message.security_contact = object.security_contact ?? "";
        message.details = object.details ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            moniker: object.moniker,
            identity: object.identity,
            website: object.website,
            security_contact: object.security_contact,
            details: object.details
        };
    },
    toAmino(message) {
        const obj = {};
        obj.moniker = message.moniker;
        obj.identity = message.identity;
        obj.website = message.website;
        obj.security_contact = message.security_contact;
        obj.details = message.details;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Description.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Description",
            value: exports.Description.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Description.decode(message.value);
    },
    toProto(message) {
        return exports.Description.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Description",
            value: exports.Description.encode(message).finish()
        };
    }
};
function createBaseValidator() {
    return {
        operator_address: "",
        consensus_pubkey: any_1.Any.fromPartial({}),
        jailed: false,
        status: 0,
        tokens: "",
        delegator_shares: "",
        description: exports.Description.fromPartial({}),
        unbonding_height: helpers_1.Long.ZERO,
        unbonding_time: new Date(),
        commission: exports.Commission.fromPartial({}),
        min_self_delegation: ""
    };
}
exports.Validator = {
    typeUrl: "/cosmos.staking.v1beta1.Validator",
    aminoType: "cosmos-sdk/Validator",
    encode(message, writer = _m0.Writer.create()) {
        if (message.operator_address !== "") {
            writer.uint32(10).string(message.operator_address);
        }
        if (message.consensus_pubkey !== undefined) {
            any_1.Any.encode(message.consensus_pubkey, writer.uint32(18).fork()).ldelim();
        }
        if (message.jailed === true) {
            writer.uint32(24).bool(message.jailed);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.tokens !== "") {
            writer.uint32(42).string(message.tokens);
        }
        if (message.delegator_shares !== "") {
            writer.uint32(50).string(message.delegator_shares);
        }
        if (message.description !== undefined) {
            exports.Description.encode(message.description, writer.uint32(58).fork()).ldelim();
        }
        if (!message.unbonding_height.isZero()) {
            writer.uint32(64).int64(message.unbonding_height);
        }
        if (message.unbonding_time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.unbonding_time), writer.uint32(74).fork()).ldelim();
        }
        if (message.commission !== undefined) {
            exports.Commission.encode(message.commission, writer.uint32(82).fork()).ldelim();
        }
        if (message.min_self_delegation !== "") {
            writer.uint32(90).string(message.min_self_delegation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operator_address = reader.string();
                    break;
                case 2:
                    message.consensus_pubkey = (0, exports.Cosmos_cryptoPubKey_InterfaceDecoder)(reader);
                    break;
                case 3:
                    message.jailed = reader.bool();
                    break;
                case 4:
                    message.status = reader.int32();
                    break;
                case 5:
                    message.tokens = reader.string();
                    break;
                case 6:
                    message.delegator_shares = reader.string();
                    break;
                case 7:
                    message.description = exports.Description.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.unbonding_height = reader.int64();
                    break;
                case 9:
                    message.unbonding_time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.commission = exports.Commission.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.min_self_delegation = reader.string();
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
            operator_address: (0, helpers_1.isSet)(object.operator_address) ? String(object.operator_address) : "",
            consensus_pubkey: (0, helpers_1.isSet)(object.consensus_pubkey) ? any_1.Any.fromJSON(object.consensus_pubkey) : undefined,
            jailed: (0, helpers_1.isSet)(object.jailed) ? Boolean(object.jailed) : false,
            status: (0, helpers_1.isSet)(object.status) ? bondStatusFromJSON(object.status) : -1,
            tokens: (0, helpers_1.isSet)(object.tokens) ? String(object.tokens) : "",
            delegator_shares: (0, helpers_1.isSet)(object.delegator_shares) ? String(object.delegator_shares) : "",
            description: (0, helpers_1.isSet)(object.description) ? exports.Description.fromJSON(object.description) : undefined,
            unbonding_height: (0, helpers_1.isSet)(object.unbonding_height) ? helpers_1.Long.fromValue(object.unbonding_height) : helpers_1.Long.ZERO,
            unbonding_time: (0, helpers_1.isSet)(object.unbonding_time) ? (0, helpers_1.fromJsonTimestamp)(object.unbonding_time) : undefined,
            commission: (0, helpers_1.isSet)(object.commission) ? exports.Commission.fromJSON(object.commission) : undefined,
            min_self_delegation: (0, helpers_1.isSet)(object.min_self_delegation) ? String(object.min_self_delegation) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.operator_address !== undefined && (obj.operator_address = message.operator_address);
        message.consensus_pubkey !== undefined && (obj.consensus_pubkey = message.consensus_pubkey ? any_1.Any.toJSON(message.consensus_pubkey) : undefined);
        message.jailed !== undefined && (obj.jailed = message.jailed);
        message.status !== undefined && (obj.status = bondStatusToJSON(message.status));
        message.tokens !== undefined && (obj.tokens = message.tokens);
        message.delegator_shares !== undefined && (obj.delegator_shares = message.delegator_shares);
        message.description !== undefined && (obj.description = message.description ? exports.Description.toJSON(message.description) : undefined);
        message.unbonding_height !== undefined && (obj.unbonding_height = (message.unbonding_height || helpers_1.Long.ZERO).toString());
        message.unbonding_time !== undefined && (obj.unbonding_time = message.unbonding_time.toISOString());
        message.commission !== undefined && (obj.commission = message.commission ? exports.Commission.toJSON(message.commission) : undefined);
        message.min_self_delegation !== undefined && (obj.min_self_delegation = message.min_self_delegation);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidator();
        message.operator_address = object.operator_address ?? "";
        message.consensus_pubkey = object.consensus_pubkey !== undefined && object.consensus_pubkey !== null ? any_1.Any.fromPartial(object.consensus_pubkey) : undefined;
        message.jailed = object.jailed ?? false;
        message.status = object.status ?? 0;
        message.tokens = object.tokens ?? "";
        message.delegator_shares = object.delegator_shares ?? "";
        message.description = object.description !== undefined && object.description !== null ? exports.Description.fromPartial(object.description) : undefined;
        message.unbonding_height = object.unbonding_height !== undefined && object.unbonding_height !== null ? helpers_1.Long.fromValue(object.unbonding_height) : helpers_1.Long.ZERO;
        message.unbonding_time = object.unbonding_time ?? undefined;
        message.commission = object.commission !== undefined && object.commission !== null ? exports.Commission.fromPartial(object.commission) : undefined;
        message.min_self_delegation = object.min_self_delegation ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            operator_address: object.operator_address,
            consensus_pubkey: (0, amino_1.encodeBech32Pubkey)({
                type: "tendermint/PubKeySecp256k1",
                value: (0, encoding_1.toBase64)(object.consensus_pubkey.value)
            }, "cosmos"),
            jailed: object.jailed,
            status: (0, helpers_1.isSet)(object.status) ? bondStatusFromJSON(object.status) : -1,
            tokens: object.tokens,
            delegator_shares: object.delegator_shares,
            description: object?.description ? exports.Description.fromAmino(object.description) : undefined,
            unbonding_height: helpers_1.Long.fromString(object.unbonding_height),
            unbonding_time: object.unbonding_time,
            commission: object?.commission ? exports.Commission.fromAmino(object.commission) : undefined,
            min_self_delegation: object.min_self_delegation
        };
    },
    toAmino(message) {
        const obj = {};
        obj.operator_address = message.operator_address;
        obj.consensus_pubkey = message.consensus_pubkey ? {
            typeUrl: "/cosmos.crypto.secp256k1.PubKey",
            value: (0, encoding_1.fromBase64)((0, amino_1.decodeBech32Pubkey)(message.consensus_pubkey).value)
        } : undefined;
        obj.jailed = message.jailed;
        obj.status = message.status;
        obj.tokens = message.tokens;
        obj.delegator_shares = message.delegator_shares;
        obj.description = message.description ? exports.Description.toAmino(message.description) : undefined;
        obj.unbonding_height = message.unbonding_height ? message.unbonding_height.toString() : undefined;
        obj.unbonding_time = message.unbonding_time;
        obj.commission = message.commission ? exports.Commission.toAmino(message.commission) : undefined;
        obj.min_self_delegation = message.min_self_delegation;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Validator.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Validator",
            value: exports.Validator.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Validator.decode(message.value);
    },
    toProto(message) {
        return exports.Validator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Validator",
            value: exports.Validator.encode(message).finish()
        };
    }
};
function createBaseValAddresses() {
    return {
        addresses: []
    };
}
exports.ValAddresses = {
    typeUrl: "/cosmos.staking.v1beta1.ValAddresses",
    aminoType: "cosmos-sdk/ValAddresses",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.addresses) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValAddresses();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addresses.push(reader.string());
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
            addresses: Array.isArray(object?.addresses) ? object.addresses.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.addresses) {
            obj.addresses = message.addresses.map(e => e);
        }
        else {
            obj.addresses = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValAddresses();
        message.addresses = object.addresses?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            addresses: Array.isArray(object?.addresses) ? object.addresses.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.addresses) {
            obj.addresses = message.addresses.map(e => e);
        }
        else {
            obj.addresses = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValAddresses.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValAddresses",
            value: exports.ValAddresses.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValAddresses.decode(message.value);
    },
    toProto(message) {
        return exports.ValAddresses.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.ValAddresses",
            value: exports.ValAddresses.encode(message).finish()
        };
    }
};
function createBaseDVPair() {
    return {
        delegator_address: "",
        validator_address: ""
    };
}
exports.DVPair = {
    typeUrl: "/cosmos.staking.v1beta1.DVPair",
    aminoType: "cosmos-sdk/DVPair",
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDVPair();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.validator_address = reader.string();
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
            delegator_address: (0, helpers_1.isSet)(object.delegator_address) ? String(object.delegator_address) : "",
            validator_address: (0, helpers_1.isSet)(object.validator_address) ? String(object.validator_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDVPair();
        message.delegator_address = object.delegator_address ?? "";
        message.validator_address = object.validator_address ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            delegator_address: object.delegator_address,
            validator_address: object.validator_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.validator_address = message.validator_address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DVPair.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DVPair",
            value: exports.DVPair.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DVPair.decode(message.value);
    },
    toProto(message) {
        return exports.DVPair.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DVPair",
            value: exports.DVPair.encode(message).finish()
        };
    }
};
function createBaseDVPairs() {
    return {
        pairs: []
    };
}
exports.DVPairs = {
    typeUrl: "/cosmos.staking.v1beta1.DVPairs",
    aminoType: "cosmos-sdk/DVPairs",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.pairs) {
            exports.DVPair.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDVPairs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pairs.push(exports.DVPair.decode(reader, reader.uint32()));
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
            pairs: Array.isArray(object?.pairs) ? object.pairs.map((e) => exports.DVPair.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pairs) {
            obj.pairs = message.pairs.map(e => e ? exports.DVPair.toJSON(e) : undefined);
        }
        else {
            obj.pairs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDVPairs();
        message.pairs = object.pairs?.map(e => exports.DVPair.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            pairs: Array.isArray(object?.pairs) ? object.pairs.map((e) => exports.DVPair.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.pairs) {
            obj.pairs = message.pairs.map(e => e ? exports.DVPair.toAmino(e) : undefined);
        }
        else {
            obj.pairs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DVPairs.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DVPairs",
            value: exports.DVPairs.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DVPairs.decode(message.value);
    },
    toProto(message) {
        return exports.DVPairs.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DVPairs",
            value: exports.DVPairs.encode(message).finish()
        };
    }
};
function createBaseDVVTriplet() {
    return {
        delegator_address: "",
        validator_src_address: "",
        validator_dst_address: ""
    };
}
exports.DVVTriplet = {
    typeUrl: "/cosmos.staking.v1beta1.DVVTriplet",
    aminoType: "cosmos-sdk/DVVTriplet",
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_src_address !== "") {
            writer.uint32(18).string(message.validator_src_address);
        }
        if (message.validator_dst_address !== "") {
            writer.uint32(26).string(message.validator_dst_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDVVTriplet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.validator_src_address = reader.string();
                    break;
                case 3:
                    message.validator_dst_address = reader.string();
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
            delegator_address: (0, helpers_1.isSet)(object.delegator_address) ? String(object.delegator_address) : "",
            validator_src_address: (0, helpers_1.isSet)(object.validator_src_address) ? String(object.validator_src_address) : "",
            validator_dst_address: (0, helpers_1.isSet)(object.validator_dst_address) ? String(object.validator_dst_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_src_address !== undefined && (obj.validator_src_address = message.validator_src_address);
        message.validator_dst_address !== undefined && (obj.validator_dst_address = message.validator_dst_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDVVTriplet();
        message.delegator_address = object.delegator_address ?? "";
        message.validator_src_address = object.validator_src_address ?? "";
        message.validator_dst_address = object.validator_dst_address ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            delegator_address: object.delegator_address,
            validator_src_address: object.validator_src_address,
            validator_dst_address: object.validator_dst_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.validator_src_address = message.validator_src_address;
        obj.validator_dst_address = message.validator_dst_address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DVVTriplet.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DVVTriplet",
            value: exports.DVVTriplet.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DVVTriplet.decode(message.value);
    },
    toProto(message) {
        return exports.DVVTriplet.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DVVTriplet",
            value: exports.DVVTriplet.encode(message).finish()
        };
    }
};
function createBaseDVVTriplets() {
    return {
        triplets: []
    };
}
exports.DVVTriplets = {
    typeUrl: "/cosmos.staking.v1beta1.DVVTriplets",
    aminoType: "cosmos-sdk/DVVTriplets",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.triplets) {
            exports.DVVTriplet.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDVVTriplets();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triplets.push(exports.DVVTriplet.decode(reader, reader.uint32()));
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
            triplets: Array.isArray(object?.triplets) ? object.triplets.map((e) => exports.DVVTriplet.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.triplets) {
            obj.triplets = message.triplets.map(e => e ? exports.DVVTriplet.toJSON(e) : undefined);
        }
        else {
            obj.triplets = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDVVTriplets();
        message.triplets = object.triplets?.map(e => exports.DVVTriplet.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            triplets: Array.isArray(object?.triplets) ? object.triplets.map((e) => exports.DVVTriplet.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.triplets) {
            obj.triplets = message.triplets.map(e => e ? exports.DVVTriplet.toAmino(e) : undefined);
        }
        else {
            obj.triplets = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DVVTriplets.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DVVTriplets",
            value: exports.DVVTriplets.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DVVTriplets.decode(message.value);
    },
    toProto(message) {
        return exports.DVVTriplets.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DVVTriplets",
            value: exports.DVVTriplets.encode(message).finish()
        };
    }
};
function createBaseDelegation() {
    return {
        delegator_address: "",
        validator_address: "",
        shares: ""
    };
}
exports.Delegation = {
    typeUrl: "/cosmos.staking.v1beta1.Delegation",
    aminoType: "cosmos-sdk/Delegation",
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        if (message.shares !== "") {
            writer.uint32(26).string(message.shares);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.validator_address = reader.string();
                    break;
                case 3:
                    message.shares = reader.string();
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
            delegator_address: (0, helpers_1.isSet)(object.delegator_address) ? String(object.delegator_address) : "",
            validator_address: (0, helpers_1.isSet)(object.validator_address) ? String(object.validator_address) : "",
            shares: (0, helpers_1.isSet)(object.shares) ? String(object.shares) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.shares !== undefined && (obj.shares = message.shares);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelegation();
        message.delegator_address = object.delegator_address ?? "";
        message.validator_address = object.validator_address ?? "";
        message.shares = object.shares ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            delegator_address: object.delegator_address,
            validator_address: object.validator_address,
            shares: object.shares
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.validator_address = message.validator_address;
        obj.shares = message.shares;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Delegation.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Delegation",
            value: exports.Delegation.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Delegation.decode(message.value);
    },
    toProto(message) {
        return exports.Delegation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Delegation",
            value: exports.Delegation.encode(message).finish()
        };
    }
};
function createBaseUnbondingDelegation() {
    return {
        delegator_address: "",
        validator_address: "",
        entries: []
    };
}
exports.UnbondingDelegation = {
    typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegation",
    aminoType: "cosmos-sdk/UnbondingDelegation",
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        for (const v of message.entries) {
            exports.UnbondingDelegationEntry.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnbondingDelegation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.validator_address = reader.string();
                    break;
                case 3:
                    message.entries.push(exports.UnbondingDelegationEntry.decode(reader, reader.uint32()));
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
            delegator_address: (0, helpers_1.isSet)(object.delegator_address) ? String(object.delegator_address) : "",
            validator_address: (0, helpers_1.isSet)(object.validator_address) ? String(object.validator_address) : "",
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => exports.UnbondingDelegationEntry.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.UnbondingDelegationEntry.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUnbondingDelegation();
        message.delegator_address = object.delegator_address ?? "";
        message.validator_address = object.validator_address ?? "";
        message.entries = object.entries?.map(e => exports.UnbondingDelegationEntry.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            delegator_address: object.delegator_address,
            validator_address: object.validator_address,
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => exports.UnbondingDelegationEntry.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.validator_address = message.validator_address;
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.UnbondingDelegationEntry.toAmino(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UnbondingDelegation.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/UnbondingDelegation",
            value: exports.UnbondingDelegation.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UnbondingDelegation.decode(message.value);
    },
    toProto(message) {
        return exports.UnbondingDelegation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegation",
            value: exports.UnbondingDelegation.encode(message).finish()
        };
    }
};
function createBaseUnbondingDelegationEntry() {
    return {
        creation_height: helpers_1.Long.ZERO,
        completion_time: new Date(),
        initial_balance: "",
        balance: ""
    };
}
exports.UnbondingDelegationEntry = {
    typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegationEntry",
    aminoType: "cosmos-sdk/UnbondingDelegationEntry",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.creation_height.isZero()) {
            writer.uint32(8).int64(message.creation_height);
        }
        if (message.completion_time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.completion_time), writer.uint32(18).fork()).ldelim();
        }
        if (message.initial_balance !== "") {
            writer.uint32(26).string(message.initial_balance);
        }
        if (message.balance !== "") {
            writer.uint32(34).string(message.balance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnbondingDelegationEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creation_height = reader.int64();
                    break;
                case 2:
                    message.completion_time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.initial_balance = reader.string();
                    break;
                case 4:
                    message.balance = reader.string();
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
            creation_height: (0, helpers_1.isSet)(object.creation_height) ? helpers_1.Long.fromValue(object.creation_height) : helpers_1.Long.ZERO,
            completion_time: (0, helpers_1.isSet)(object.completion_time) ? (0, helpers_1.fromJsonTimestamp)(object.completion_time) : undefined,
            initial_balance: (0, helpers_1.isSet)(object.initial_balance) ? String(object.initial_balance) : "",
            balance: (0, helpers_1.isSet)(object.balance) ? String(object.balance) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.creation_height !== undefined && (obj.creation_height = (message.creation_height || helpers_1.Long.ZERO).toString());
        message.completion_time !== undefined && (obj.completion_time = message.completion_time.toISOString());
        message.initial_balance !== undefined && (obj.initial_balance = message.initial_balance);
        message.balance !== undefined && (obj.balance = message.balance);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUnbondingDelegationEntry();
        message.creation_height = object.creation_height !== undefined && object.creation_height !== null ? helpers_1.Long.fromValue(object.creation_height) : helpers_1.Long.ZERO;
        message.completion_time = object.completion_time ?? undefined;
        message.initial_balance = object.initial_balance ?? "";
        message.balance = object.balance ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            creation_height: helpers_1.Long.fromString(object.creation_height),
            completion_time: object.completion_time,
            initial_balance: object.initial_balance,
            balance: object.balance
        };
    },
    toAmino(message) {
        const obj = {};
        obj.creation_height = message.creation_height ? message.creation_height.toString() : undefined;
        obj.completion_time = message.completion_time;
        obj.initial_balance = message.initial_balance;
        obj.balance = message.balance;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UnbondingDelegationEntry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/UnbondingDelegationEntry",
            value: exports.UnbondingDelegationEntry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UnbondingDelegationEntry.decode(message.value);
    },
    toProto(message) {
        return exports.UnbondingDelegationEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegationEntry",
            value: exports.UnbondingDelegationEntry.encode(message).finish()
        };
    }
};
function createBaseRedelegationEntry() {
    return {
        creation_height: helpers_1.Long.ZERO,
        completion_time: new Date(),
        initial_balance: "",
        shares_dst: ""
    };
}
exports.RedelegationEntry = {
    typeUrl: "/cosmos.staking.v1beta1.RedelegationEntry",
    aminoType: "cosmos-sdk/RedelegationEntry",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.creation_height.isZero()) {
            writer.uint32(8).int64(message.creation_height);
        }
        if (message.completion_time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.completion_time), writer.uint32(18).fork()).ldelim();
        }
        if (message.initial_balance !== "") {
            writer.uint32(26).string(message.initial_balance);
        }
        if (message.shares_dst !== "") {
            writer.uint32(34).string(message.shares_dst);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegationEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creation_height = reader.int64();
                    break;
                case 2:
                    message.completion_time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.initial_balance = reader.string();
                    break;
                case 4:
                    message.shares_dst = reader.string();
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
            creation_height: (0, helpers_1.isSet)(object.creation_height) ? helpers_1.Long.fromValue(object.creation_height) : helpers_1.Long.ZERO,
            completion_time: (0, helpers_1.isSet)(object.completion_time) ? (0, helpers_1.fromJsonTimestamp)(object.completion_time) : undefined,
            initial_balance: (0, helpers_1.isSet)(object.initial_balance) ? String(object.initial_balance) : "",
            shares_dst: (0, helpers_1.isSet)(object.shares_dst) ? String(object.shares_dst) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.creation_height !== undefined && (obj.creation_height = (message.creation_height || helpers_1.Long.ZERO).toString());
        message.completion_time !== undefined && (obj.completion_time = message.completion_time.toISOString());
        message.initial_balance !== undefined && (obj.initial_balance = message.initial_balance);
        message.shares_dst !== undefined && (obj.shares_dst = message.shares_dst);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRedelegationEntry();
        message.creation_height = object.creation_height !== undefined && object.creation_height !== null ? helpers_1.Long.fromValue(object.creation_height) : helpers_1.Long.ZERO;
        message.completion_time = object.completion_time ?? undefined;
        message.initial_balance = object.initial_balance ?? "";
        message.shares_dst = object.shares_dst ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            creation_height: helpers_1.Long.fromString(object.creation_height),
            completion_time: object.completion_time,
            initial_balance: object.initial_balance,
            shares_dst: object.shares_dst
        };
    },
    toAmino(message) {
        const obj = {};
        obj.creation_height = message.creation_height ? message.creation_height.toString() : undefined;
        obj.completion_time = message.completion_time;
        obj.initial_balance = message.initial_balance;
        obj.shares_dst = message.shares_dst;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RedelegationEntry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/RedelegationEntry",
            value: exports.RedelegationEntry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.RedelegationEntry.decode(message.value);
    },
    toProto(message) {
        return exports.RedelegationEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.RedelegationEntry",
            value: exports.RedelegationEntry.encode(message).finish()
        };
    }
};
function createBaseRedelegation() {
    return {
        delegator_address: "",
        validator_src_address: "",
        validator_dst_address: "",
        entries: []
    };
}
exports.Redelegation = {
    typeUrl: "/cosmos.staking.v1beta1.Redelegation",
    aminoType: "cosmos-sdk/Redelegation",
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_src_address !== "") {
            writer.uint32(18).string(message.validator_src_address);
        }
        if (message.validator_dst_address !== "") {
            writer.uint32(26).string(message.validator_dst_address);
        }
        for (const v of message.entries) {
            exports.RedelegationEntry.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.validator_src_address = reader.string();
                    break;
                case 3:
                    message.validator_dst_address = reader.string();
                    break;
                case 4:
                    message.entries.push(exports.RedelegationEntry.decode(reader, reader.uint32()));
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
            delegator_address: (0, helpers_1.isSet)(object.delegator_address) ? String(object.delegator_address) : "",
            validator_src_address: (0, helpers_1.isSet)(object.validator_src_address) ? String(object.validator_src_address) : "",
            validator_dst_address: (0, helpers_1.isSet)(object.validator_dst_address) ? String(object.validator_dst_address) : "",
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => exports.RedelegationEntry.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_src_address !== undefined && (obj.validator_src_address = message.validator_src_address);
        message.validator_dst_address !== undefined && (obj.validator_dst_address = message.validator_dst_address);
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.RedelegationEntry.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRedelegation();
        message.delegator_address = object.delegator_address ?? "";
        message.validator_src_address = object.validator_src_address ?? "";
        message.validator_dst_address = object.validator_dst_address ?? "";
        message.entries = object.entries?.map(e => exports.RedelegationEntry.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            delegator_address: object.delegator_address,
            validator_src_address: object.validator_src_address,
            validator_dst_address: object.validator_dst_address,
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => exports.RedelegationEntry.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.validator_src_address = message.validator_src_address;
        obj.validator_dst_address = message.validator_dst_address;
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.RedelegationEntry.toAmino(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Redelegation.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Redelegation",
            value: exports.Redelegation.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Redelegation.decode(message.value);
    },
    toProto(message) {
        return exports.Redelegation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Redelegation",
            value: exports.Redelegation.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        unbonding_time: duration_1.Duration.fromPartial({}),
        max_validators: 0,
        max_entries: 0,
        historical_entries: 0,
        bond_denom: "",
        min_commission_rate: ""
    };
}
exports.Params = {
    typeUrl: "/cosmos.staking.v1beta1.Params",
    aminoType: "cosmos-sdk/Params",
    encode(message, writer = _m0.Writer.create()) {
        if (message.unbonding_time !== undefined) {
            duration_1.Duration.encode(message.unbonding_time, writer.uint32(10).fork()).ldelim();
        }
        if (message.max_validators !== 0) {
            writer.uint32(16).uint32(message.max_validators);
        }
        if (message.max_entries !== 0) {
            writer.uint32(24).uint32(message.max_entries);
        }
        if (message.historical_entries !== 0) {
            writer.uint32(32).uint32(message.historical_entries);
        }
        if (message.bond_denom !== "") {
            writer.uint32(42).string(message.bond_denom);
        }
        if (message.min_commission_rate !== "") {
            writer.uint32(50).string(message.min_commission_rate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unbonding_time = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.max_validators = reader.uint32();
                    break;
                case 3:
                    message.max_entries = reader.uint32();
                    break;
                case 4:
                    message.historical_entries = reader.uint32();
                    break;
                case 5:
                    message.bond_denom = reader.string();
                    break;
                case 6:
                    message.min_commission_rate = reader.string();
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
            unbonding_time: (0, helpers_1.isSet)(object.unbonding_time) ? duration_1.Duration.fromJSON(object.unbonding_time) : undefined,
            max_validators: (0, helpers_1.isSet)(object.max_validators) ? Number(object.max_validators) : 0,
            max_entries: (0, helpers_1.isSet)(object.max_entries) ? Number(object.max_entries) : 0,
            historical_entries: (0, helpers_1.isSet)(object.historical_entries) ? Number(object.historical_entries) : 0,
            bond_denom: (0, helpers_1.isSet)(object.bond_denom) ? String(object.bond_denom) : "",
            min_commission_rate: (0, helpers_1.isSet)(object.min_commission_rate) ? String(object.min_commission_rate) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.unbonding_time !== undefined && (obj.unbonding_time = message.unbonding_time ? duration_1.Duration.toJSON(message.unbonding_time) : undefined);
        message.max_validators !== undefined && (obj.max_validators = Math.round(message.max_validators));
        message.max_entries !== undefined && (obj.max_entries = Math.round(message.max_entries));
        message.historical_entries !== undefined && (obj.historical_entries = Math.round(message.historical_entries));
        message.bond_denom !== undefined && (obj.bond_denom = message.bond_denom);
        message.min_commission_rate !== undefined && (obj.min_commission_rate = message.min_commission_rate);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.unbonding_time = object.unbonding_time !== undefined && object.unbonding_time !== null ? duration_1.Duration.fromPartial(object.unbonding_time) : undefined;
        message.max_validators = object.max_validators ?? 0;
        message.max_entries = object.max_entries ?? 0;
        message.historical_entries = object.historical_entries ?? 0;
        message.bond_denom = object.bond_denom ?? "";
        message.min_commission_rate = object.min_commission_rate ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            unbonding_time: object?.unbonding_time ? duration_1.Duration.fromAmino(object.unbonding_time) : undefined,
            max_validators: object.max_validators,
            max_entries: object.max_entries,
            historical_entries: object.historical_entries,
            bond_denom: object.bond_denom,
            min_commission_rate: object.min_commission_rate
        };
    },
    toAmino(message) {
        const obj = {};
        obj.unbonding_time = message.unbonding_time ? duration_1.Duration.toAmino(message.unbonding_time) : undefined;
        obj.max_validators = message.max_validators;
        obj.max_entries = message.max_entries;
        obj.historical_entries = message.historical_entries;
        obj.bond_denom = message.bond_denom;
        obj.min_commission_rate = message.min_commission_rate;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
function createBaseDelegationResponse() {
    return {
        delegation: exports.Delegation.fromPartial({}),
        balance: coin_1.Coin.fromPartial({})
    };
}
exports.DelegationResponse = {
    typeUrl: "/cosmos.staking.v1beta1.DelegationResponse",
    aminoType: "cosmos-sdk/DelegationResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegation !== undefined) {
            exports.Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
        }
        if (message.balance !== undefined) {
            coin_1.Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegation = exports.Delegation.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.balance = coin_1.Coin.decode(reader, reader.uint32());
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
            delegation: (0, helpers_1.isSet)(object.delegation) ? exports.Delegation.fromJSON(object.delegation) : undefined,
            balance: (0, helpers_1.isSet)(object.balance) ? coin_1.Coin.fromJSON(object.balance) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegation !== undefined && (obj.delegation = message.delegation ? exports.Delegation.toJSON(message.delegation) : undefined);
        message.balance !== undefined && (obj.balance = message.balance ? coin_1.Coin.toJSON(message.balance) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelegationResponse();
        message.delegation = object.delegation !== undefined && object.delegation !== null ? exports.Delegation.fromPartial(object.delegation) : undefined;
        message.balance = object.balance !== undefined && object.balance !== null ? coin_1.Coin.fromPartial(object.balance) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            delegation: object?.delegation ? exports.Delegation.fromAmino(object.delegation) : undefined,
            balance: object?.balance ? coin_1.Coin.fromAmino(object.balance) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegation = message.delegation ? exports.Delegation.toAmino(message.delegation) : undefined;
        obj.balance = message.balance ? coin_1.Coin.toAmino(message.balance) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DelegationResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DelegationResponse",
            value: exports.DelegationResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DelegationResponse.decode(message.value);
    },
    toProto(message) {
        return exports.DelegationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DelegationResponse",
            value: exports.DelegationResponse.encode(message).finish()
        };
    }
};
function createBaseRedelegationEntryResponse() {
    return {
        redelegation_entry: exports.RedelegationEntry.fromPartial({}),
        balance: ""
    };
}
exports.RedelegationEntryResponse = {
    typeUrl: "/cosmos.staking.v1beta1.RedelegationEntryResponse",
    aminoType: "cosmos-sdk/RedelegationEntryResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.redelegation_entry !== undefined) {
            exports.RedelegationEntry.encode(message.redelegation_entry, writer.uint32(10).fork()).ldelim();
        }
        if (message.balance !== "") {
            writer.uint32(34).string(message.balance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegationEntryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redelegation_entry = exports.RedelegationEntry.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.balance = reader.string();
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
            redelegation_entry: (0, helpers_1.isSet)(object.redelegation_entry) ? exports.RedelegationEntry.fromJSON(object.redelegation_entry) : undefined,
            balance: (0, helpers_1.isSet)(object.balance) ? String(object.balance) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.redelegation_entry !== undefined && (obj.redelegation_entry = message.redelegation_entry ? exports.RedelegationEntry.toJSON(message.redelegation_entry) : undefined);
        message.balance !== undefined && (obj.balance = message.balance);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRedelegationEntryResponse();
        message.redelegation_entry = object.redelegation_entry !== undefined && object.redelegation_entry !== null ? exports.RedelegationEntry.fromPartial(object.redelegation_entry) : undefined;
        message.balance = object.balance ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            redelegation_entry: object?.redelegation_entry ? exports.RedelegationEntry.fromAmino(object.redelegation_entry) : undefined,
            balance: object.balance
        };
    },
    toAmino(message) {
        const obj = {};
        obj.redelegation_entry = message.redelegation_entry ? exports.RedelegationEntry.toAmino(message.redelegation_entry) : undefined;
        obj.balance = message.balance;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RedelegationEntryResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/RedelegationEntryResponse",
            value: exports.RedelegationEntryResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.RedelegationEntryResponse.decode(message.value);
    },
    toProto(message) {
        return exports.RedelegationEntryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.RedelegationEntryResponse",
            value: exports.RedelegationEntryResponse.encode(message).finish()
        };
    }
};
function createBaseRedelegationResponse() {
    return {
        redelegation: exports.Redelegation.fromPartial({}),
        entries: []
    };
}
exports.RedelegationResponse = {
    typeUrl: "/cosmos.staking.v1beta1.RedelegationResponse",
    aminoType: "cosmos-sdk/RedelegationResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.redelegation !== undefined) {
            exports.Redelegation.encode(message.redelegation, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.entries) {
            exports.RedelegationEntryResponse.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redelegation = exports.Redelegation.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.entries.push(exports.RedelegationEntryResponse.decode(reader, reader.uint32()));
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
            redelegation: (0, helpers_1.isSet)(object.redelegation) ? exports.Redelegation.fromJSON(object.redelegation) : undefined,
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => exports.RedelegationEntryResponse.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.redelegation !== undefined && (obj.redelegation = message.redelegation ? exports.Redelegation.toJSON(message.redelegation) : undefined);
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.RedelegationEntryResponse.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRedelegationResponse();
        message.redelegation = object.redelegation !== undefined && object.redelegation !== null ? exports.Redelegation.fromPartial(object.redelegation) : undefined;
        message.entries = object.entries?.map(e => exports.RedelegationEntryResponse.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            redelegation: object?.redelegation ? exports.Redelegation.fromAmino(object.redelegation) : undefined,
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => exports.RedelegationEntryResponse.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.redelegation = message.redelegation ? exports.Redelegation.toAmino(message.redelegation) : undefined;
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.RedelegationEntryResponse.toAmino(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RedelegationResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/RedelegationResponse",
            value: exports.RedelegationResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.RedelegationResponse.decode(message.value);
    },
    toProto(message) {
        return exports.RedelegationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.RedelegationResponse",
            value: exports.RedelegationResponse.encode(message).finish()
        };
    }
};
function createBasePool() {
    return {
        not_bonded_tokens: "",
        bonded_tokens: ""
    };
}
exports.Pool = {
    typeUrl: "/cosmos.staking.v1beta1.Pool",
    aminoType: "cosmos-sdk/Pool",
    encode(message, writer = _m0.Writer.create()) {
        if (message.not_bonded_tokens !== "") {
            writer.uint32(10).string(message.not_bonded_tokens);
        }
        if (message.bonded_tokens !== "") {
            writer.uint32(18).string(message.bonded_tokens);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.not_bonded_tokens = reader.string();
                    break;
                case 2:
                    message.bonded_tokens = reader.string();
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
            not_bonded_tokens: (0, helpers_1.isSet)(object.not_bonded_tokens) ? String(object.not_bonded_tokens) : "",
            bonded_tokens: (0, helpers_1.isSet)(object.bonded_tokens) ? String(object.bonded_tokens) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.not_bonded_tokens !== undefined && (obj.not_bonded_tokens = message.not_bonded_tokens);
        message.bonded_tokens !== undefined && (obj.bonded_tokens = message.bonded_tokens);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePool();
        message.not_bonded_tokens = object.not_bonded_tokens ?? "";
        message.bonded_tokens = object.bonded_tokens ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            not_bonded_tokens: object.not_bonded_tokens,
            bonded_tokens: object.bonded_tokens
        };
    },
    toAmino(message) {
        const obj = {};
        obj.not_bonded_tokens = message.not_bonded_tokens;
        obj.bonded_tokens = message.bonded_tokens;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Pool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Pool",
            value: exports.Pool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Pool.decode(message.value);
    },
    toProto(message) {
        return exports.Pool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Pool",
            value: exports.Pool.encode(message).finish()
        };
    }
};
const Cosmos_cryptoPubKey_InterfaceDecoder = (input) => {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const data = any_1.Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        default:
            return data;
    }
};
exports.Cosmos_cryptoPubKey_InterfaceDecoder = Cosmos_cryptoPubKey_InterfaceDecoder;
const Cosmos_cryptoPubKey_FromAmino = (content) => {
    return (0, amino_1.encodeBech32Pubkey)({
        type: "tendermint/PubKeySecp256k1",
        value: (0, encoding_1.toBase64)(content.value)
    }, "cosmos");
};
exports.Cosmos_cryptoPubKey_FromAmino = Cosmos_cryptoPubKey_FromAmino;
const Cosmos_cryptoPubKey_ToAmino = (content) => {
    return {
        typeUrl: "/cosmos.crypto.secp256k1.PubKey",
        value: (0, encoding_1.fromBase64)((0, amino_1.decodeBech32Pubkey)(content).value)
    };
};
exports.Cosmos_cryptoPubKey_ToAmino = Cosmos_cryptoPubKey_ToAmino;
//# sourceMappingURL=staking.js.map