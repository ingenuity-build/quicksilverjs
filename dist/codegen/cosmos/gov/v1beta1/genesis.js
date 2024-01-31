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
exports.GenesisState = void 0;
const gov_1 = require("./gov");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseGenesisState() {
    return {
        starting_proposal_id: helpers_1.Long.UZERO,
        deposits: [],
        votes: [],
        proposals: [],
        deposit_params: gov_1.DepositParams.fromPartial({}),
        voting_params: gov_1.VotingParams.fromPartial({}),
        tally_params: gov_1.TallyParams.fromPartial({})
    };
}
exports.GenesisState = {
    typeUrl: "/cosmos.gov.v1beta1.GenesisState",
    aminoType: "cosmos-sdk/GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.starting_proposal_id.isZero()) {
            writer.uint32(8).uint64(message.starting_proposal_id);
        }
        for (const v of message.deposits) {
            gov_1.Deposit.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.votes) {
            gov_1.Vote.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.proposals) {
            gov_1.Proposal.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.deposit_params !== undefined) {
            gov_1.DepositParams.encode(message.deposit_params, writer.uint32(42).fork()).ldelim();
        }
        if (message.voting_params !== undefined) {
            gov_1.VotingParams.encode(message.voting_params, writer.uint32(50).fork()).ldelim();
        }
        if (message.tally_params !== undefined) {
            gov_1.TallyParams.encode(message.tally_params, writer.uint32(58).fork()).ldelim();
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
                    message.starting_proposal_id = reader.uint64();
                    break;
                case 2:
                    message.deposits.push(gov_1.Deposit.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.votes.push(gov_1.Vote.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.proposals.push(gov_1.Proposal.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.deposit_params = gov_1.DepositParams.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.voting_params = gov_1.VotingParams.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.tally_params = gov_1.TallyParams.decode(reader, reader.uint32());
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
            starting_proposal_id: (0, helpers_1.isSet)(object.starting_proposal_id) ? helpers_1.Long.fromValue(object.starting_proposal_id) : helpers_1.Long.UZERO,
            deposits: Array.isArray(object?.deposits) ? object.deposits.map((e) => gov_1.Deposit.fromJSON(e)) : [],
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => gov_1.Vote.fromJSON(e)) : [],
            proposals: Array.isArray(object?.proposals) ? object.proposals.map((e) => gov_1.Proposal.fromJSON(e)) : [],
            deposit_params: (0, helpers_1.isSet)(object.deposit_params) ? gov_1.DepositParams.fromJSON(object.deposit_params) : undefined,
            voting_params: (0, helpers_1.isSet)(object.voting_params) ? gov_1.VotingParams.fromJSON(object.voting_params) : undefined,
            tally_params: (0, helpers_1.isSet)(object.tally_params) ? gov_1.TallyParams.fromJSON(object.tally_params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.starting_proposal_id !== undefined && (obj.starting_proposal_id = (message.starting_proposal_id || helpers_1.Long.UZERO).toString());
        if (message.deposits) {
            obj.deposits = message.deposits.map(e => e ? gov_1.Deposit.toJSON(e) : undefined);
        }
        else {
            obj.deposits = [];
        }
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? gov_1.Vote.toJSON(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? gov_1.Proposal.toJSON(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        message.deposit_params !== undefined && (obj.deposit_params = message.deposit_params ? gov_1.DepositParams.toJSON(message.deposit_params) : undefined);
        message.voting_params !== undefined && (obj.voting_params = message.voting_params ? gov_1.VotingParams.toJSON(message.voting_params) : undefined);
        message.tally_params !== undefined && (obj.tally_params = message.tally_params ? gov_1.TallyParams.toJSON(message.tally_params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.starting_proposal_id = object.starting_proposal_id !== undefined && object.starting_proposal_id !== null ? helpers_1.Long.fromValue(object.starting_proposal_id) : helpers_1.Long.UZERO;
        message.deposits = object.deposits?.map(e => gov_1.Deposit.fromPartial(e)) || [];
        message.votes = object.votes?.map(e => gov_1.Vote.fromPartial(e)) || [];
        message.proposals = object.proposals?.map(e => gov_1.Proposal.fromPartial(e)) || [];
        message.deposit_params = object.deposit_params !== undefined && object.deposit_params !== null ? gov_1.DepositParams.fromPartial(object.deposit_params) : undefined;
        message.voting_params = object.voting_params !== undefined && object.voting_params !== null ? gov_1.VotingParams.fromPartial(object.voting_params) : undefined;
        message.tally_params = object.tally_params !== undefined && object.tally_params !== null ? gov_1.TallyParams.fromPartial(object.tally_params) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            starting_proposal_id: helpers_1.Long.fromString(object.starting_proposal_id),
            deposits: Array.isArray(object?.deposits) ? object.deposits.map((e) => gov_1.Deposit.fromAmino(e)) : [],
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => gov_1.Vote.fromAmino(e)) : [],
            proposals: Array.isArray(object?.proposals) ? object.proposals.map((e) => gov_1.Proposal.fromAmino(e)) : [],
            deposit_params: object?.deposit_params ? gov_1.DepositParams.fromAmino(object.deposit_params) : undefined,
            voting_params: object?.voting_params ? gov_1.VotingParams.fromAmino(object.voting_params) : undefined,
            tally_params: object?.tally_params ? gov_1.TallyParams.fromAmino(object.tally_params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.starting_proposal_id = message.starting_proposal_id ? message.starting_proposal_id.toString() : undefined;
        if (message.deposits) {
            obj.deposits = message.deposits.map(e => e ? gov_1.Deposit.toAmino(e) : undefined);
        }
        else {
            obj.deposits = [];
        }
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? gov_1.Vote.toAmino(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? gov_1.Proposal.toAmino(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        obj.deposit_params = message.deposit_params ? gov_1.DepositParams.toAmino(message.deposit_params) : undefined;
        obj.voting_params = message.voting_params ? gov_1.VotingParams.toAmino(message.voting_params) : undefined;
        obj.tally_params = message.tally_params ? gov_1.TallyParams.toAmino(message.tally_params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
            value: exports.GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map