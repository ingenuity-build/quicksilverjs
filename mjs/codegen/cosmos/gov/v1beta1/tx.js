import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../base/v1beta1/coin";
import { WeightedVoteOption, TextProposal, voteOptionFromJSON, voteOptionToJSON } from "./gov";
import { CommunityPoolSpendProposal, CommunityPoolSpendProposalWithDeposit } from "../../distribution/v1beta1/distribution";
import { SoftwareUpgradeProposal, CancelSoftwareUpgradeProposal } from "../../upgrade/v1beta1/upgrade";
import { ClientUpdateProposal, UpgradeProposal } from "../../../ibc/core/client/v1/client";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseMsgSubmitProposal() {
    return {
        content: Any.fromPartial({}),
        initial_deposit: [],
        proposer: ""
    };
}
export const MsgSubmitProposal = {
    typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
    aminoType: "cosmos-sdk/MsgSubmitProposal",
    encode(message, writer = _m0.Writer.create()) {
        if (message.content !== undefined) {
            Any.encode(message.content, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.initial_deposit) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.proposer !== "") {
            writer.uint32(26).string(message.proposer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.content = Cosmos_govv1beta1Content_InterfaceDecoder(reader);
                    break;
                case 2:
                    message.initial_deposit.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.proposer = reader.string();
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
            content: isSet(object.content) ? Any.fromJSON(object.content) : undefined,
            initial_deposit: Array.isArray(object?.initial_deposit) ? object.initial_deposit.map((e) => Coin.fromJSON(e)) : [],
            proposer: isSet(object.proposer) ? String(object.proposer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.content !== undefined && (obj.content = message.content ? Any.toJSON(message.content) : undefined);
        if (message.initial_deposit) {
            obj.initial_deposit = message.initial_deposit.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.initial_deposit = [];
        }
        message.proposer !== undefined && (obj.proposer = message.proposer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitProposal();
        message.content = object.content !== undefined && object.content !== null ? Any.fromPartial(object.content) : undefined;
        message.initial_deposit = object.initial_deposit?.map(e => Coin.fromPartial(e)) || [];
        message.proposer = object.proposer ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            content: object?.content ? Cosmos_govv1beta1Content_FromAmino(object.content) : undefined,
            initial_deposit: Array.isArray(object?.initial_deposit) ? object.initial_deposit.map((e) => Coin.fromAmino(e)) : [],
            proposer: object.proposer
        };
    },
    toAmino(message) {
        const obj = {};
        obj.content = message.content ? Cosmos_govv1beta1Content_ToAmino(message.content) : undefined;
        if (message.initial_deposit) {
            obj.initial_deposit = message.initial_deposit.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.initial_deposit = [];
        }
        obj.proposer = message.proposer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSubmitProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSubmitProposal",
            value: MsgSubmitProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSubmitProposal.decode(message.value);
    },
    toProto(message) {
        return MsgSubmitProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
            value: MsgSubmitProposal.encode(message).finish()
        };
    }
};
function createBaseMsgSubmitProposalResponse() {
    return {
        proposal_id: Long.UZERO
    };
}
export const MsgSubmitProposalResponse = {
    typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposalResponse",
    aminoType: "cosmos-sdk/MsgSubmitProposalResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposal_id.isZero()) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = reader.uint64();
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
            proposal_id: isSet(object.proposal_id) ? Long.fromValue(object.proposal_id) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitProposalResponse();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? Long.fromValue(object.proposal_id) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            proposal_id: Long.fromString(object.proposal_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSubmitProposalResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSubmitProposalResponse",
            value: MsgSubmitProposalResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSubmitProposalResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSubmitProposalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposalResponse",
            value: MsgSubmitProposalResponse.encode(message).finish()
        };
    }
};
function createBaseMsgVote() {
    return {
        proposal_id: Long.UZERO,
        voter: "",
        option: 0
    };
}
export const MsgVote = {
    typeUrl: "/cosmos.gov.v1beta1.MsgVote",
    aminoType: "cosmos-sdk/MsgVote",
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVote();
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
            option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || Long.UZERO).toString());
        message.voter !== undefined && (obj.voter = message.voter);
        message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgVote();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? Long.fromValue(object.proposal_id) : Long.UZERO;
        message.voter = object.voter ?? "";
        message.option = object.option ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            proposal_id: Long.fromString(object.proposal_id),
            voter: object.voter,
            option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        obj.voter = message.voter;
        obj.option = message.option;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgVote.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgVote",
            value: MsgVote.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgVote.decode(message.value);
    },
    toProto(message) {
        return MsgVote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.MsgVote",
            value: MsgVote.encode(message).finish()
        };
    }
};
function createBaseMsgVoteResponse() {
    return {};
}
export const MsgVoteResponse = {
    typeUrl: "/cosmos.gov.v1beta1.MsgVoteResponse",
    aminoType: "cosmos-sdk/MsgVoteResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVoteResponse();
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgVoteResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgVoteResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgVoteResponse",
            value: MsgVoteResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgVoteResponse.decode(message.value);
    },
    toProto(message) {
        return MsgVoteResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.MsgVoteResponse",
            value: MsgVoteResponse.encode(message).finish()
        };
    }
};
function createBaseMsgVoteWeighted() {
    return {
        proposal_id: Long.UZERO,
        voter: "",
        options: []
    };
}
export const MsgVoteWeighted = {
    typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
    aminoType: "cosmos-sdk/MsgVoteWeighted",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposal_id.isZero()) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        for (const v of message.options) {
            WeightedVoteOption.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVoteWeighted();
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
            options: Array.isArray(object?.options) ? object.options.map((e) => WeightedVoteOption.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || Long.UZERO).toString());
        message.voter !== undefined && (obj.voter = message.voter);
        if (message.options) {
            obj.options = message.options.map(e => e ? WeightedVoteOption.toJSON(e) : undefined);
        }
        else {
            obj.options = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgVoteWeighted();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? Long.fromValue(object.proposal_id) : Long.UZERO;
        message.voter = object.voter ?? "";
        message.options = object.options?.map(e => WeightedVoteOption.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            proposal_id: Long.fromString(object.proposal_id),
            voter: object.voter,
            options: Array.isArray(object?.options) ? object.options.map((e) => WeightedVoteOption.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        obj.voter = message.voter;
        if (message.options) {
            obj.options = message.options.map(e => e ? WeightedVoteOption.toAmino(e) : undefined);
        }
        else {
            obj.options = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgVoteWeighted.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgVoteWeighted",
            value: MsgVoteWeighted.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgVoteWeighted.decode(message.value);
    },
    toProto(message) {
        return MsgVoteWeighted.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
            value: MsgVoteWeighted.encode(message).finish()
        };
    }
};
function createBaseMsgVoteWeightedResponse() {
    return {};
}
export const MsgVoteWeightedResponse = {
    typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeightedResponse",
    aminoType: "cosmos-sdk/MsgVoteWeightedResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVoteWeightedResponse();
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgVoteWeightedResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgVoteWeightedResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgVoteWeightedResponse",
            value: MsgVoteWeightedResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgVoteWeightedResponse.decode(message.value);
    },
    toProto(message) {
        return MsgVoteWeightedResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeightedResponse",
            value: MsgVoteWeightedResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDeposit() {
    return {
        proposal_id: Long.UZERO,
        depositor: "",
        amount: []
    };
}
export const MsgDeposit = {
    typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
    aminoType: "cosmos-sdk/MsgDeposit",
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
        const message = createBaseMsgDeposit();
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
        const message = createBaseMsgDeposit();
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
        return MsgDeposit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgDeposit",
            value: MsgDeposit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgDeposit.decode(message.value);
    },
    toProto(message) {
        return MsgDeposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
            value: MsgDeposit.encode(message).finish()
        };
    }
};
function createBaseMsgDepositResponse() {
    return {};
}
export const MsgDepositResponse = {
    typeUrl: "/cosmos.gov.v1beta1.MsgDepositResponse",
    aminoType: "cosmos-sdk/MsgDepositResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositResponse();
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgDepositResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDepositResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgDepositResponse",
            value: MsgDepositResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgDepositResponse.decode(message.value);
    },
    toProto(message) {
        return MsgDepositResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.MsgDepositResponse",
            value: MsgDepositResponse.encode(message).finish()
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
//# sourceMappingURL=tx.js.map