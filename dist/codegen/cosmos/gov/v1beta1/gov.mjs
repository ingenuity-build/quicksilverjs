import { Coin } from "../../base/v1beta1/coin";
import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { CommunityPoolSpendProposal, CommunityPoolSpendProposalWithDeposit } from "../../distribution/v1beta1/distribution";
import { SoftwareUpgradeProposal, CancelSoftwareUpgradeProposal } from "../../upgrade/v1beta1/upgrade";
import { ClientUpdateProposal, UpgradeProposal } from "../../../ibc/core/client/v1/client";
import { Long, isSet, toTimestamp, fromTimestamp, fromJsonTimestamp, bytesFromBase64, base64FromBytes } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** VoteOption enumerates the valid vote options for a given governance proposal. */
export var VoteOption;
(function (VoteOption) {
    /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
    VoteOption[VoteOption["VOTE_OPTION_UNSPECIFIED"] = 0] = "VOTE_OPTION_UNSPECIFIED";
    /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
    VoteOption[VoteOption["VOTE_OPTION_YES"] = 1] = "VOTE_OPTION_YES";
    /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
    VoteOption[VoteOption["VOTE_OPTION_ABSTAIN"] = 2] = "VOTE_OPTION_ABSTAIN";
    /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
    VoteOption[VoteOption["VOTE_OPTION_NO"] = 3] = "VOTE_OPTION_NO";
    /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
    VoteOption[VoteOption["VOTE_OPTION_NO_WITH_VETO"] = 4] = "VOTE_OPTION_NO_WITH_VETO";
    VoteOption[VoteOption["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(VoteOption || (VoteOption = {}));
export const VoteOptionSDKType = VoteOption;
export const VoteOptionAmino = VoteOption;
export function voteOptionFromJSON(object) {
    switch (object) {
        case 0:
        case "VOTE_OPTION_UNSPECIFIED":
            return VoteOption.VOTE_OPTION_UNSPECIFIED;
        case 1:
        case "VOTE_OPTION_YES":
            return VoteOption.VOTE_OPTION_YES;
        case 2:
        case "VOTE_OPTION_ABSTAIN":
            return VoteOption.VOTE_OPTION_ABSTAIN;
        case 3:
        case "VOTE_OPTION_NO":
            return VoteOption.VOTE_OPTION_NO;
        case 4:
        case "VOTE_OPTION_NO_WITH_VETO":
            return VoteOption.VOTE_OPTION_NO_WITH_VETO;
        case -1:
        case "UNRECOGNIZED":
        default:
            return VoteOption.UNRECOGNIZED;
    }
}
export function voteOptionToJSON(object) {
    switch (object) {
        case VoteOption.VOTE_OPTION_UNSPECIFIED:
            return "VOTE_OPTION_UNSPECIFIED";
        case VoteOption.VOTE_OPTION_YES:
            return "VOTE_OPTION_YES";
        case VoteOption.VOTE_OPTION_ABSTAIN:
            return "VOTE_OPTION_ABSTAIN";
        case VoteOption.VOTE_OPTION_NO:
            return "VOTE_OPTION_NO";
        case VoteOption.VOTE_OPTION_NO_WITH_VETO:
            return "VOTE_OPTION_NO_WITH_VETO";
        case VoteOption.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** ProposalStatus enumerates the valid statuses of a proposal. */
export var ProposalStatus;
(function (ProposalStatus) {
    /** PROPOSAL_STATUS_UNSPECIFIED - PROPOSAL_STATUS_UNSPECIFIED defines the default propopsal status. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_UNSPECIFIED"] = 0] = "PROPOSAL_STATUS_UNSPECIFIED";
    /**
     * PROPOSAL_STATUS_DEPOSIT_PERIOD - PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
     * period.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_DEPOSIT_PERIOD"] = 1] = "PROPOSAL_STATUS_DEPOSIT_PERIOD";
    /**
     * PROPOSAL_STATUS_VOTING_PERIOD - PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
     * period.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_VOTING_PERIOD"] = 2] = "PROPOSAL_STATUS_VOTING_PERIOD";
    /**
     * PROPOSAL_STATUS_PASSED - PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
     * passed.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_PASSED"] = 3] = "PROPOSAL_STATUS_PASSED";
    /**
     * PROPOSAL_STATUS_REJECTED - PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
     * been rejected.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_REJECTED"] = 4] = "PROPOSAL_STATUS_REJECTED";
    /**
     * PROPOSAL_STATUS_FAILED - PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
     * failed.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_FAILED"] = 5] = "PROPOSAL_STATUS_FAILED";
    ProposalStatus[ProposalStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProposalStatus || (ProposalStatus = {}));
export const ProposalStatusSDKType = ProposalStatus;
export const ProposalStatusAmino = ProposalStatus;
export function proposalStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "PROPOSAL_STATUS_UNSPECIFIED":
            return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
        case 1:
        case "PROPOSAL_STATUS_DEPOSIT_PERIOD":
            return ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD;
        case 2:
        case "PROPOSAL_STATUS_VOTING_PERIOD":
            return ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD;
        case 3:
        case "PROPOSAL_STATUS_PASSED":
            return ProposalStatus.PROPOSAL_STATUS_PASSED;
        case 4:
        case "PROPOSAL_STATUS_REJECTED":
            return ProposalStatus.PROPOSAL_STATUS_REJECTED;
        case 5:
        case "PROPOSAL_STATUS_FAILED":
            return ProposalStatus.PROPOSAL_STATUS_FAILED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ProposalStatus.UNRECOGNIZED;
    }
}
export function proposalStatusToJSON(object) {
    switch (object) {
        case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
            return "PROPOSAL_STATUS_UNSPECIFIED";
        case ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD:
            return "PROPOSAL_STATUS_DEPOSIT_PERIOD";
        case ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD:
            return "PROPOSAL_STATUS_VOTING_PERIOD";
        case ProposalStatus.PROPOSAL_STATUS_PASSED:
            return "PROPOSAL_STATUS_PASSED";
        case ProposalStatus.PROPOSAL_STATUS_REJECTED:
            return "PROPOSAL_STATUS_REJECTED";
        case ProposalStatus.PROPOSAL_STATUS_FAILED:
            return "PROPOSAL_STATUS_FAILED";
        case ProposalStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseWeightedVoteOption() {
    return {
        option: 0,
        weight: ""
    };
}
export const WeightedVoteOption = {
    typeUrl: "/cosmos.gov.v1beta1.WeightedVoteOption",
    aminoType: "cosmos-sdk/WeightedVoteOption",
    encode(message, writer = _m0.Writer.create()) {
        if (message.option !== 0) {
            writer.uint32(8).int32(message.option);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(message.weight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWeightedVoteOption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.option = reader.int32();
                    break;
                case 2:
                    message.weight = reader.string();
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
            option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
            weight: isSet(object.weight) ? String(object.weight) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
        message.weight !== undefined && (obj.weight = message.weight);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseWeightedVoteOption();
        message.option = object.option ?? 0;
        message.weight = object.weight ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
            weight: object.weight
        };
    },
    toAmino(message) {
        const obj = {};
        obj.option = message.option;
        obj.weight = message.weight;
        return obj;
    },
    fromAminoMsg(object) {
        return WeightedVoteOption.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/WeightedVoteOption",
            value: WeightedVoteOption.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return WeightedVoteOption.decode(message.value);
    },
    toProto(message) {
        return WeightedVoteOption.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.WeightedVoteOption",
            value: WeightedVoteOption.encode(message).finish()
        };
    }
};
function createBaseTextProposal() {
    return {
        $typeUrl: "/cosmos.gov.v1beta1.TextProposal",
        title: "",
        description: ""
    };
}
export const TextProposal = {
    typeUrl: "/cosmos.gov.v1beta1.TextProposal",
    aminoType: "cosmos-sdk/TextProposal",
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTextProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
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
            description: isSet(object.description) ? String(object.description) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTextProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        return obj;
    },
    fromAminoMsg(object) {
        return TextProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TextProposal",
            value: TextProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return TextProposal.decode(message.value);
    },
    toProto(message) {
        return TextProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.TextProposal",
            value: TextProposal.encode(message).finish()
        };
    }
};
function createBaseDeposit() {
    return {
        proposal_id: Long.UZERO,
        depositor: "",
        amount: []
    };
}
export const Deposit = {
    typeUrl: "/cosmos.gov.v1beta1.Deposit",
    aminoType: "cosmos-sdk/Deposit",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposal_id.isZero()) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.depositor !== "") {
            writer.uint32(18).string(message.depositor);
        }
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = reader.uint64();
                    break;
                case 2:
                    message.depositor = reader.string();
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
    fromJSON(object) {
        return {
            proposal_id: isSet(object.proposal_id) ? Long.fromValue(object.proposal_id) : Long.UZERO,
            depositor: isSet(object.depositor) ? String(object.depositor) : "",
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || Long.UZERO).toString());
        message.depositor !== undefined && (obj.depositor = message.depositor);
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDeposit();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? Long.fromValue(object.proposal_id) : Long.UZERO;
        message.depositor = object.depositor ?? "";
        message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            proposal_id: Long.fromString(object.proposal_id),
            depositor: object.depositor,
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        obj.depositor = message.depositor;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Deposit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Deposit",
            value: Deposit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Deposit.decode(message.value);
    },
    toProto(message) {
        return Deposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.Deposit",
            value: Deposit.encode(message).finish()
        };
    }
};
function createBaseProposal() {
    return {
        proposal_id: Long.UZERO,
        content: Any.fromPartial({}),
        status: 0,
        final_tally_result: TallyResult.fromPartial({}),
        submit_time: new Date(),
        deposit_end_time: new Date(),
        total_deposit: [],
        voting_start_time: new Date(),
        voting_end_time: new Date()
    };
}
export const Proposal = {
    typeUrl: "/cosmos.gov.v1beta1.Proposal",
    aminoType: "cosmos-sdk/Proposal",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposal_id.isZero()) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.content !== undefined) {
            Any.encode(message.content, writer.uint32(18).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(24).int32(message.status);
        }
        if (message.final_tally_result !== undefined) {
            TallyResult.encode(message.final_tally_result, writer.uint32(34).fork()).ldelim();
        }
        if (message.submit_time !== undefined) {
            Timestamp.encode(toTimestamp(message.submit_time), writer.uint32(42).fork()).ldelim();
        }
        if (message.deposit_end_time !== undefined) {
            Timestamp.encode(toTimestamp(message.deposit_end_time), writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.total_deposit) {
            Coin.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.voting_start_time !== undefined) {
            Timestamp.encode(toTimestamp(message.voting_start_time), writer.uint32(66).fork()).ldelim();
        }
        if (message.voting_end_time !== undefined) {
            Timestamp.encode(toTimestamp(message.voting_end_time), writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = reader.uint64();
                    break;
                case 2:
                    message.content = Cosmos_govv1beta1Content_InterfaceDecoder(reader);
                    break;
                case 3:
                    message.status = reader.int32();
                    break;
                case 4:
                    message.final_tally_result = TallyResult.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.submit_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.deposit_end_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.total_deposit.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.voting_start_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.voting_end_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            proposal_id: isSet(object.proposal_id) ? Long.fromValue(object.proposal_id) : Long.UZERO,
            content: isSet(object.content) ? Any.fromJSON(object.content) : undefined,
            status: isSet(object.status) ? proposalStatusFromJSON(object.status) : -1,
            final_tally_result: isSet(object.final_tally_result) ? TallyResult.fromJSON(object.final_tally_result) : undefined,
            submit_time: isSet(object.submit_time) ? fromJsonTimestamp(object.submit_time) : undefined,
            deposit_end_time: isSet(object.deposit_end_time) ? fromJsonTimestamp(object.deposit_end_time) : undefined,
            total_deposit: Array.isArray(object?.total_deposit) ? object.total_deposit.map((e) => Coin.fromJSON(e)) : [],
            voting_start_time: isSet(object.voting_start_time) ? fromJsonTimestamp(object.voting_start_time) : undefined,
            voting_end_time: isSet(object.voting_end_time) ? fromJsonTimestamp(object.voting_end_time) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || Long.UZERO).toString());
        message.content !== undefined && (obj.content = message.content ? Any.toJSON(message.content) : undefined);
        message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
        message.final_tally_result !== undefined && (obj.final_tally_result = message.final_tally_result ? TallyResult.toJSON(message.final_tally_result) : undefined);
        message.submit_time !== undefined && (obj.submit_time = message.submit_time.toISOString());
        message.deposit_end_time !== undefined && (obj.deposit_end_time = message.deposit_end_time.toISOString());
        if (message.total_deposit) {
            obj.total_deposit = message.total_deposit.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.total_deposit = [];
        }
        message.voting_start_time !== undefined && (obj.voting_start_time = message.voting_start_time.toISOString());
        message.voting_end_time !== undefined && (obj.voting_end_time = message.voting_end_time.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProposal();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? Long.fromValue(object.proposal_id) : Long.UZERO;
        message.content = object.content !== undefined && object.content !== null ? Any.fromPartial(object.content) : undefined;
        message.status = object.status ?? 0;
        message.final_tally_result = object.final_tally_result !== undefined && object.final_tally_result !== null ? TallyResult.fromPartial(object.final_tally_result) : undefined;
        message.submit_time = object.submit_time ?? undefined;
        message.deposit_end_time = object.deposit_end_time ?? undefined;
        message.total_deposit = object.total_deposit?.map(e => Coin.fromPartial(e)) || [];
        message.voting_start_time = object.voting_start_time ?? undefined;
        message.voting_end_time = object.voting_end_time ?? undefined;
        return message;
    },
    fromAmino(object) {
        return {
            proposal_id: Long.fromString(object.proposal_id),
            content: object?.content ? Cosmos_govv1beta1Content_FromAmino(object.content) : undefined,
            status: isSet(object.status) ? proposalStatusFromJSON(object.status) : -1,
            final_tally_result: object?.final_tally_result ? TallyResult.fromAmino(object.final_tally_result) : undefined,
            submit_time: object.submit_time,
            deposit_end_time: object.deposit_end_time,
            total_deposit: Array.isArray(object?.total_deposit) ? object.total_deposit.map((e) => Coin.fromAmino(e)) : [],
            voting_start_time: object.voting_start_time,
            voting_end_time: object.voting_end_time
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        obj.content = message.content ? Cosmos_govv1beta1Content_ToAmino(message.content) : undefined;
        obj.status = message.status;
        obj.final_tally_result = message.final_tally_result ? TallyResult.toAmino(message.final_tally_result) : undefined;
        obj.submit_time = message.submit_time;
        obj.deposit_end_time = message.deposit_end_time;
        if (message.total_deposit) {
            obj.total_deposit = message.total_deposit.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.total_deposit = [];
        }
        obj.voting_start_time = message.voting_start_time;
        obj.voting_end_time = message.voting_end_time;
        return obj;
    },
    fromAminoMsg(object) {
        return Proposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Proposal",
            value: Proposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Proposal.decode(message.value);
    },
    toProto(message) {
        return Proposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.Proposal",
            value: Proposal.encode(message).finish()
        };
    }
};
function createBaseTallyResult() {
    return {
        yes: "",
        abstain: "",
        no: "",
        no_with_veto: ""
    };
}
export const TallyResult = {
    typeUrl: "/cosmos.gov.v1beta1.TallyResult",
    aminoType: "cosmos-sdk/TallyResult",
    encode(message, writer = _m0.Writer.create()) {
        if (message.yes !== "") {
            writer.uint32(10).string(message.yes);
        }
        if (message.abstain !== "") {
            writer.uint32(18).string(message.abstain);
        }
        if (message.no !== "") {
            writer.uint32(26).string(message.no);
        }
        if (message.no_with_veto !== "") {
            writer.uint32(34).string(message.no_with_veto);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTallyResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.yes = reader.string();
                    break;
                case 2:
                    message.abstain = reader.string();
                    break;
                case 3:
                    message.no = reader.string();
                    break;
                case 4:
                    message.no_with_veto = reader.string();
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
            yes: isSet(object.yes) ? String(object.yes) : "",
            abstain: isSet(object.abstain) ? String(object.abstain) : "",
            no: isSet(object.no) ? String(object.no) : "",
            no_with_veto: isSet(object.no_with_veto) ? String(object.no_with_veto) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.yes !== undefined && (obj.yes = message.yes);
        message.abstain !== undefined && (obj.abstain = message.abstain);
        message.no !== undefined && (obj.no = message.no);
        message.no_with_veto !== undefined && (obj.no_with_veto = message.no_with_veto);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTallyResult();
        message.yes = object.yes ?? "";
        message.abstain = object.abstain ?? "";
        message.no = object.no ?? "";
        message.no_with_veto = object.no_with_veto ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            yes: object.yes,
            abstain: object.abstain,
            no: object.no,
            no_with_veto: object.no_with_veto
        };
    },
    toAmino(message) {
        const obj = {};
        obj.yes = message.yes;
        obj.abstain = message.abstain;
        obj.no = message.no;
        obj.no_with_veto = message.no_with_veto;
        return obj;
    },
    fromAminoMsg(object) {
        return TallyResult.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TallyResult",
            value: TallyResult.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return TallyResult.decode(message.value);
    },
    toProto(message) {
        return TallyResult.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.TallyResult",
            value: TallyResult.encode(message).finish()
        };
    }
};
function createBaseVote() {
    return {
        proposal_id: Long.UZERO,
        voter: "",
        option: 0,
        options: []
    };
}
export const Vote = {
    typeUrl: "/cosmos.gov.v1beta1.Vote",
    aminoType: "cosmos-sdk/Vote",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposal_id.isZero()) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        if (message.option !== 0) {
            writer.uint32(24).int32(message.option);
        }
        for (const v of message.options) {
            WeightedVoteOption.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = reader.uint64();
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                case 3:
                    message.option = reader.int32();
                    break;
                case 4:
                    message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
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
            proposal_id: isSet(object.proposal_id) ? Long.fromValue(object.proposal_id) : Long.UZERO,
            voter: isSet(object.voter) ? String(object.voter) : "",
            option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
            options: Array.isArray(object?.options) ? object.options.map((e) => WeightedVoteOption.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || Long.UZERO).toString());
        message.voter !== undefined && (obj.voter = message.voter);
        message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
        if (message.options) {
            obj.options = message.options.map(e => e ? WeightedVoteOption.toJSON(e) : undefined);
        }
        else {
            obj.options = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVote();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? Long.fromValue(object.proposal_id) : Long.UZERO;
        message.voter = object.voter ?? "";
        message.option = object.option ?? 0;
        message.options = object.options?.map(e => WeightedVoteOption.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            proposal_id: Long.fromString(object.proposal_id),
            voter: object.voter,
            option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
            options: Array.isArray(object?.options) ? object.options.map((e) => WeightedVoteOption.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        obj.voter = message.voter;
        obj.option = message.option;
        if (message.options) {
            obj.options = message.options.map(e => e ? WeightedVoteOption.toAmino(e) : undefined);
        }
        else {
            obj.options = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Vote.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Vote",
            value: Vote.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Vote.decode(message.value);
    },
    toProto(message) {
        return Vote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.Vote",
            value: Vote.encode(message).finish()
        };
    }
};
function createBaseDepositParams() {
    return {
        min_deposit: [],
        max_deposit_period: Duration.fromPartial({})
    };
}
export const DepositParams = {
    typeUrl: "/cosmos.gov.v1beta1.DepositParams",
    aminoType: "cosmos-sdk/DepositParams",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.min_deposit) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.max_deposit_period !== undefined) {
            Duration.encode(message.max_deposit_period, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDepositParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.min_deposit.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.max_deposit_period = Duration.decode(reader, reader.uint32());
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
            min_deposit: Array.isArray(object?.min_deposit) ? object.min_deposit.map((e) => Coin.fromJSON(e)) : [],
            max_deposit_period: isSet(object.max_deposit_period) ? Duration.fromJSON(object.max_deposit_period) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.min_deposit) {
            obj.min_deposit = message.min_deposit.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.min_deposit = [];
        }
        message.max_deposit_period !== undefined && (obj.max_deposit_period = message.max_deposit_period ? Duration.toJSON(message.max_deposit_period) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDepositParams();
        message.min_deposit = object.min_deposit?.map(e => Coin.fromPartial(e)) || [];
        message.max_deposit_period = object.max_deposit_period !== undefined && object.max_deposit_period !== null ? Duration.fromPartial(object.max_deposit_period) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            min_deposit: Array.isArray(object?.min_deposit) ? object.min_deposit.map((e) => Coin.fromAmino(e)) : [],
            max_deposit_period: object?.max_deposit_period ? Duration.fromAmino(object.max_deposit_period) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.min_deposit) {
            obj.min_deposit = message.min_deposit.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.min_deposit = [];
        }
        obj.max_deposit_period = message.max_deposit_period ? Duration.toAmino(message.max_deposit_period) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return DepositParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DepositParams",
            value: DepositParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return DepositParams.decode(message.value);
    },
    toProto(message) {
        return DepositParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.DepositParams",
            value: DepositParams.encode(message).finish()
        };
    }
};
function createBaseVotingParams() {
    return {
        voting_period: Duration.fromPartial({})
    };
}
export const VotingParams = {
    typeUrl: "/cosmos.gov.v1beta1.VotingParams",
    aminoType: "cosmos-sdk/VotingParams",
    encode(message, writer = _m0.Writer.create()) {
        if (message.voting_period !== undefined) {
            Duration.encode(message.voting_period, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVotingParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voting_period = Duration.decode(reader, reader.uint32());
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
            voting_period: isSet(object.voting_period) ? Duration.fromJSON(object.voting_period) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.voting_period !== undefined && (obj.voting_period = message.voting_period ? Duration.toJSON(message.voting_period) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVotingParams();
        message.voting_period = object.voting_period !== undefined && object.voting_period !== null ? Duration.fromPartial(object.voting_period) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            voting_period: object?.voting_period ? Duration.fromAmino(object.voting_period) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.voting_period = message.voting_period ? Duration.toAmino(message.voting_period) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return VotingParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/VotingParams",
            value: VotingParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return VotingParams.decode(message.value);
    },
    toProto(message) {
        return VotingParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.VotingParams",
            value: VotingParams.encode(message).finish()
        };
    }
};
function createBaseTallyParams() {
    return {
        quorum: new Uint8Array(),
        threshold: new Uint8Array(),
        veto_threshold: new Uint8Array()
    };
}
export const TallyParams = {
    typeUrl: "/cosmos.gov.v1beta1.TallyParams",
    aminoType: "cosmos-sdk/TallyParams",
    encode(message, writer = _m0.Writer.create()) {
        if (message.quorum.length !== 0) {
            writer.uint32(10).bytes(message.quorum);
        }
        if (message.threshold.length !== 0) {
            writer.uint32(18).bytes(message.threshold);
        }
        if (message.veto_threshold.length !== 0) {
            writer.uint32(26).bytes(message.veto_threshold);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTallyParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quorum = reader.bytes();
                    break;
                case 2:
                    message.threshold = reader.bytes();
                    break;
                case 3:
                    message.veto_threshold = reader.bytes();
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
            quorum: isSet(object.quorum) ? bytesFromBase64(object.quorum) : new Uint8Array(),
            threshold: isSet(object.threshold) ? bytesFromBase64(object.threshold) : new Uint8Array(),
            veto_threshold: isSet(object.veto_threshold) ? bytesFromBase64(object.veto_threshold) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.quorum !== undefined && (obj.quorum = base64FromBytes(message.quorum !== undefined ? message.quorum : new Uint8Array()));
        message.threshold !== undefined && (obj.threshold = base64FromBytes(message.threshold !== undefined ? message.threshold : new Uint8Array()));
        message.veto_threshold !== undefined && (obj.veto_threshold = base64FromBytes(message.veto_threshold !== undefined ? message.veto_threshold : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTallyParams();
        message.quorum = object.quorum ?? new Uint8Array();
        message.threshold = object.threshold ?? new Uint8Array();
        message.veto_threshold = object.veto_threshold ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            quorum: object.quorum,
            threshold: object.threshold,
            veto_threshold: object.veto_threshold
        };
    },
    toAmino(message) {
        const obj = {};
        obj.quorum = message.quorum;
        obj.threshold = message.threshold;
        obj.veto_threshold = message.veto_threshold;
        return obj;
    },
    fromAminoMsg(object) {
        return TallyParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TallyParams",
            value: TallyParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return TallyParams.decode(message.value);
    },
    toProto(message) {
        return TallyParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.TallyParams",
            value: TallyParams.encode(message).finish()
        };
    }
};
export const Cosmos_govv1beta1Content_InterfaceDecoder = (input) => {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const data = Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal":
            return CommunityPoolSpendProposal.decode(data.value);
        case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit":
            return CommunityPoolSpendProposalWithDeposit.decode(data.value);
        case "/cosmos.gov.v1beta1.TextProposal":
            return TextProposal.decode(data.value);
        case "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal":
            return SoftwareUpgradeProposal.decode(data.value);
        case "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal":
            return CancelSoftwareUpgradeProposal.decode(data.value);
        case "/ibc.core.client.v1.ClientUpdateProposal":
            return ClientUpdateProposal.decode(data.value);
        case "/ibc.core.client.v1.UpgradeProposal":
            return UpgradeProposal.decode(data.value);
        default:
            return data;
    }
};
export const Cosmos_govv1beta1Content_FromAmino = (content) => {
    switch (content.type) {
        case "cosmos-sdk/CommunityPoolSpendProposal":
            return Any.fromPartial({
                typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
                value: CommunityPoolSpendProposal.encode(CommunityPoolSpendProposal.fromPartial(CommunityPoolSpendProposal.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/CommunityPoolSpendProposalWithDeposit":
            return Any.fromPartial({
                typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
                value: CommunityPoolSpendProposalWithDeposit.encode(CommunityPoolSpendProposalWithDeposit.fromPartial(CommunityPoolSpendProposalWithDeposit.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/TextProposal":
            return Any.fromPartial({
                typeUrl: "/cosmos.gov.v1beta1.TextProposal",
                value: TextProposal.encode(TextProposal.fromPartial(TextProposal.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/SoftwareUpgradeProposal":
            return Any.fromPartial({
                typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
                value: SoftwareUpgradeProposal.encode(SoftwareUpgradeProposal.fromPartial(SoftwareUpgradeProposal.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/CancelSoftwareUpgradeProposal":
            return Any.fromPartial({
                typeUrl: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
                value: CancelSoftwareUpgradeProposal.encode(CancelSoftwareUpgradeProposal.fromPartial(CancelSoftwareUpgradeProposal.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/ClientUpdateProposal":
            return Any.fromPartial({
                typeUrl: "/ibc.core.client.v1.ClientUpdateProposal",
                value: ClientUpdateProposal.encode(ClientUpdateProposal.fromPartial(ClientUpdateProposal.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/UpgradeProposal":
            return Any.fromPartial({
                typeUrl: "/ibc.core.client.v1.UpgradeProposal",
                value: UpgradeProposal.encode(UpgradeProposal.fromPartial(UpgradeProposal.fromAmino(content.value))).finish()
            });
        default:
            return Any.fromAmino(content);
    }
};
export const Cosmos_govv1beta1Content_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal":
            return {
                type: "cosmos-sdk/CommunityPoolSpendProposal",
                value: CommunityPoolSpendProposal.toAmino(CommunityPoolSpendProposal.decode(content.value))
            };
        case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit":
            return {
                type: "cosmos-sdk/CommunityPoolSpendProposalWithDeposit",
                value: CommunityPoolSpendProposalWithDeposit.toAmino(CommunityPoolSpendProposalWithDeposit.decode(content.value))
            };
        case "/cosmos.gov.v1beta1.TextProposal":
            return {
                type: "cosmos-sdk/TextProposal",
                value: TextProposal.toAmino(TextProposal.decode(content.value))
            };
        case "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal":
            return {
                type: "cosmos-sdk/SoftwareUpgradeProposal",
                value: SoftwareUpgradeProposal.toAmino(SoftwareUpgradeProposal.decode(content.value))
            };
        case "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal":
            return {
                type: "cosmos-sdk/CancelSoftwareUpgradeProposal",
                value: CancelSoftwareUpgradeProposal.toAmino(CancelSoftwareUpgradeProposal.decode(content.value))
            };
        case "/ibc.core.client.v1.ClientUpdateProposal":
            return {
                type: "cosmos-sdk/ClientUpdateProposal",
                value: ClientUpdateProposal.toAmino(ClientUpdateProposal.decode(content.value))
            };
        case "/ibc.core.client.v1.UpgradeProposal":
            return {
                type: "cosmos-sdk/UpgradeProposal",
                value: UpgradeProposal.toAmino(UpgradeProposal.decode(content.value))
            };
        default:
            return Any.toAmino(content);
    }
};
//# sourceMappingURL=gov.js.map