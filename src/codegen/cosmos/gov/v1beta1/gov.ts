import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { CommunityPoolSpendProposal, CommunityPoolSpendProposalProtoMsg, CommunityPoolSpendProposalSDKType, CommunityPoolSpendProposalWithDeposit, CommunityPoolSpendProposalWithDepositProtoMsg, CommunityPoolSpendProposalWithDepositSDKType } from "../../distribution/v1beta1/distribution";
import { ParameterChangeProposal } from "../../params/v1beta1/params";
import { SoftwareUpgradeProposal, CancelSoftwareUpgradeProposal } from "../../upgrade/v1beta1/upgrade";
import { ClientUpdateProposal, UpgradeProposal } from "../../../ibc/core/client/v1/client";
import { Long, isSet, DeepPartial, toTimestamp, fromTimestamp, fromJsonTimestamp, bytesFromBase64, base64FromBytes } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** VoteOption enumerates the valid vote options for a given governance proposal. */
export enum VoteOption {
  /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
  VOTE_OPTION_UNSPECIFIED = 0,
  /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
  VOTE_OPTION_YES = 1,
  /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
  VOTE_OPTION_ABSTAIN = 2,
  /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
  VOTE_OPTION_NO = 3,
  /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
  VOTE_OPTION_NO_WITH_VETO = 4,
  UNRECOGNIZED = -1,
}
export const VoteOptionSDKType = VoteOption;
export const VoteOptionAmino = VoteOption;
export function voteOptionFromJSON(object: any): VoteOption {
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
export function voteOptionToJSON(object: VoteOption): string {
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
export enum ProposalStatus {
  /** PROPOSAL_STATUS_UNSPECIFIED - PROPOSAL_STATUS_UNSPECIFIED defines the default propopsal status. */
  PROPOSAL_STATUS_UNSPECIFIED = 0,
  /**
   * PROPOSAL_STATUS_DEPOSIT_PERIOD - PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
   * period.
   */
  PROPOSAL_STATUS_DEPOSIT_PERIOD = 1,
  /**
   * PROPOSAL_STATUS_VOTING_PERIOD - PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
   * period.
   */
  PROPOSAL_STATUS_VOTING_PERIOD = 2,
  /**
   * PROPOSAL_STATUS_PASSED - PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
   * passed.
   */
  PROPOSAL_STATUS_PASSED = 3,
  /**
   * PROPOSAL_STATUS_REJECTED - PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
   * been rejected.
   */
  PROPOSAL_STATUS_REJECTED = 4,
  /**
   * PROPOSAL_STATUS_FAILED - PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
   * failed.
   */
  PROPOSAL_STATUS_FAILED = 5,
  UNRECOGNIZED = -1,
}
export const ProposalStatusSDKType = ProposalStatus;
export const ProposalStatusAmino = ProposalStatus;
export function proposalStatusFromJSON(object: any): ProposalStatus {
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
export function proposalStatusToJSON(object: ProposalStatus): string {
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
/**
 * WeightedVoteOption defines a unit of vote for vote split.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface WeightedVoteOption {
  option: VoteOption;
  weight: string;
}
export interface WeightedVoteOptionProtoMsg {
  type_url: "/cosmos.gov.v1beta1.WeightedVoteOption";
  value: Uint8Array;
}
/**
 * WeightedVoteOption defines a unit of vote for vote split.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface WeightedVoteOptionAmino {
  option: VoteOption;
  weight: string;
}
export interface WeightedVoteOptionAminoMsg {
  type: "cosmos-sdk/WeightedVoteOption";
  value: WeightedVoteOptionAmino;
}
/**
 * WeightedVoteOption defines a unit of vote for vote split.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface WeightedVoteOptionSDKType {
  option: VoteOption;
  weight: string;
}
/**
 * TextProposal defines a standard text proposal whose changes need to be
 * manually updated in case of approval.
 */
export interface TextProposal {
  $typeUrl?: string;
  title: string;
  description: string;
}
export interface TextProposalProtoMsg {
  type_url: "/cosmos.gov.v1beta1.TextProposal";
  value: Uint8Array;
}
/**
 * TextProposal defines a standard text proposal whose changes need to be
 * manually updated in case of approval.
 */
export interface TextProposalAmino {
  title: string;
  description: string;
}
export interface TextProposalAminoMsg {
  type: "cosmos-sdk/TextProposal";
  value: TextProposalAmino;
}
/**
 * TextProposal defines a standard text proposal whose changes need to be
 * manually updated in case of approval.
 */
export interface TextProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
}
/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface Deposit {
  proposal_id: Long;
  depositor: string;
  amount: Coin[];
}
export interface DepositProtoMsg {
  type_url: "/cosmos.gov.v1beta1.Deposit";
  value: Uint8Array;
}
/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface DepositAmino {
  proposal_id: string;
  depositor: string;
  amount: CoinAmino[];
}
export interface DepositAminoMsg {
  type: "cosmos-sdk/Deposit";
  value: DepositAmino;
}
/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface DepositSDKType {
  proposal_id: Long;
  depositor: string;
  amount: CoinSDKType[];
}
/** Proposal defines the core field members of a governance proposal. */
export interface Proposal {
  proposal_id: Long;
  content: TextProposal | CommunityPoolSpendProposal | CommunityPoolSpendProposalWithDeposit | ParameterChangeProposal | SoftwareUpgradeProposal | CancelSoftwareUpgradeProposal | ClientUpdateProposal | UpgradeProposal | Any | undefined;
  status: ProposalStatus;
  /**
   * final_tally_result is the final tally result of the proposal. When
   * querying a proposal via gRPC, this field is not populated until the
   * proposal's voting period has ended.
   */
  final_tally_result: TallyResult;
  submit_time: Date;
  deposit_end_time: Date;
  total_deposit: Coin[];
  voting_start_time: Date;
  voting_end_time: Date;
}
export interface ProposalProtoMsg {
  type_url: "/cosmos.gov.v1beta1.Proposal";
  value: Uint8Array;
}
export type ProposalEncoded = Omit<Proposal, "content"> & {
  content?: TextProposalProtoMsg | CommunityPoolSpendProposalProtoMsg | CommunityPoolSpendProposalWithDepositProtoMsg | ParameterChangeProposalProtoMsg | SoftwareUpgradeProposalProtoMsg | CancelSoftwareUpgradeProposalProtoMsg | ClientUpdateProposalProtoMsg | UpgradeProposalProtoMsg | AnyProtoMsg | undefined;
};
/** Proposal defines the core field members of a governance proposal. */
export interface ProposalAmino {
  proposal_id: string;
  content?: AnyAmino;
  status: ProposalStatus;
  /**
   * final_tally_result is the final tally result of the proposal. When
   * querying a proposal via gRPC, this field is not populated until the
   * proposal's voting period has ended.
   */
  final_tally_result?: TallyResultAmino;
  submit_time?: Date;
  deposit_end_time?: Date;
  total_deposit: CoinAmino[];
  voting_start_time?: Date;
  voting_end_time?: Date;
}
export interface ProposalAminoMsg {
  type: "cosmos-sdk/Proposal";
  value: ProposalAmino;
}
/** Proposal defines the core field members of a governance proposal. */
export interface ProposalSDKType {
  proposal_id: Long;
  content: TextProposalSDKType | CommunityPoolSpendProposalSDKType | CommunityPoolSpendProposalWithDepositSDKType | ParameterChangeProposalSDKType | SoftwareUpgradeProposalSDKType | CancelSoftwareUpgradeProposalSDKType | ClientUpdateProposalSDKType | UpgradeProposalSDKType | AnySDKType | undefined;
  status: ProposalStatus;
  final_tally_result: TallyResultSDKType;
  submit_time: Date;
  deposit_end_time: Date;
  total_deposit: CoinSDKType[];
  voting_start_time: Date;
  voting_end_time: Date;
}
/** TallyResult defines a standard tally for a governance proposal. */
export interface TallyResult {
  yes: string;
  abstain: string;
  no: string;
  no_with_veto: string;
}
export interface TallyResultProtoMsg {
  type_url: "/cosmos.gov.v1beta1.TallyResult";
  value: Uint8Array;
}
/** TallyResult defines a standard tally for a governance proposal. */
export interface TallyResultAmino {
  yes: string;
  abstain: string;
  no: string;
  no_with_veto: string;
}
export interface TallyResultAminoMsg {
  type: "cosmos-sdk/TallyResult";
  value: TallyResultAmino;
}
/** TallyResult defines a standard tally for a governance proposal. */
export interface TallyResultSDKType {
  yes: string;
  abstain: string;
  no: string;
  no_with_veto: string;
}
/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */
export interface Vote {
  proposal_id: Long;
  voter: string;
  /**
   * Deprecated: Prefer to use `options` instead. This field is set in queries
   * if and only if `len(options) == 1` and that option has weight 1. In all
   * other cases, this field will default to VOTE_OPTION_UNSPECIFIED.
   */
  /** @deprecated */
  option: VoteOption;
  /** Since: cosmos-sdk 0.43 */
  options: WeightedVoteOption[];
}
export interface VoteProtoMsg {
  type_url: "/cosmos.gov.v1beta1.Vote";
  value: Uint8Array;
}
/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */
export interface VoteAmino {
  proposal_id: string;
  voter: string;
  /**
   * Deprecated: Prefer to use `options` instead. This field is set in queries
   * if and only if `len(options) == 1` and that option has weight 1. In all
   * other cases, this field will default to VOTE_OPTION_UNSPECIFIED.
   */
  /** @deprecated */
  option: VoteOption;
  /** Since: cosmos-sdk 0.43 */
  options: WeightedVoteOptionAmino[];
}
export interface VoteAminoMsg {
  type: "cosmos-sdk/Vote";
  value: VoteAmino;
}
/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */
export interface VoteSDKType {
  proposal_id: Long;
  voter: string;
  /** @deprecated */
  option: VoteOption;
  options: WeightedVoteOptionSDKType[];
}
/** DepositParams defines the params for deposits on governance proposals. */
export interface DepositParams {
  /** Minimum deposit for a proposal to enter voting period. */
  min_deposit: Coin[];
  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   *  months.
   */
  max_deposit_period: Duration;
}
export interface DepositParamsProtoMsg {
  type_url: "/cosmos.gov.v1beta1.DepositParams";
  value: Uint8Array;
}
/** DepositParams defines the params for deposits on governance proposals. */
export interface DepositParamsAmino {
  /** Minimum deposit for a proposal to enter voting period. */
  min_deposit: CoinAmino[];
  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   *  months.
   */
  max_deposit_period?: DurationAmino;
}
export interface DepositParamsAminoMsg {
  type: "cosmos-sdk/DepositParams";
  value: DepositParamsAmino;
}
/** DepositParams defines the params for deposits on governance proposals. */
export interface DepositParamsSDKType {
  min_deposit: CoinSDKType[];
  max_deposit_period: DurationSDKType;
}
/** VotingParams defines the params for voting on governance proposals. */
export interface VotingParams {
  /** Length of the voting period. */
  voting_period: Duration;
}
export interface VotingParamsProtoMsg {
  type_url: "/cosmos.gov.v1beta1.VotingParams";
  value: Uint8Array;
}
/** VotingParams defines the params for voting on governance proposals. */
export interface VotingParamsAmino {
  /** Length of the voting period. */
  voting_period?: DurationAmino;
}
export interface VotingParamsAminoMsg {
  type: "cosmos-sdk/VotingParams";
  value: VotingParamsAmino;
}
/** VotingParams defines the params for voting on governance proposals. */
export interface VotingParamsSDKType {
  voting_period: DurationSDKType;
}
/** TallyParams defines the params for tallying votes on governance proposals. */
export interface TallyParams {
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   *  considered valid.
   */
  quorum: Uint8Array;
  /** Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. */
  threshold: Uint8Array;
  /**
   * Minimum value of Veto votes to Total votes ratio for proposal to be
   *  vetoed. Default value: 1/3.
   */
  veto_threshold: Uint8Array;
}
export interface TallyParamsProtoMsg {
  type_url: "/cosmos.gov.v1beta1.TallyParams";
  value: Uint8Array;
}
/** TallyParams defines the params for tallying votes on governance proposals. */
export interface TallyParamsAmino {
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   *  considered valid.
   */
  quorum: Uint8Array;
  /** Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. */
  threshold: Uint8Array;
  /**
   * Minimum value of Veto votes to Total votes ratio for proposal to be
   *  vetoed. Default value: 1/3.
   */
  veto_threshold: Uint8Array;
}
export interface TallyParamsAminoMsg {
  type: "cosmos-sdk/TallyParams";
  value: TallyParamsAmino;
}
/** TallyParams defines the params for tallying votes on governance proposals. */
export interface TallyParamsSDKType {
  quorum: Uint8Array;
  threshold: Uint8Array;
  veto_threshold: Uint8Array;
}
function createBaseWeightedVoteOption(): WeightedVoteOption {
  return {
    option: 0,
    weight: ""
  };
}
export const WeightedVoteOption = {
  typeUrl: "/cosmos.gov.v1beta1.WeightedVoteOption",
  aminoType: "cosmos-sdk/WeightedVoteOption",
  encode(message: WeightedVoteOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.option !== 0) {
      writer.uint32(8).int32(message.option);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): WeightedVoteOption {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightedVoteOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.option = (reader.int32() as any);
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
  fromJSON(object: any): WeightedVoteOption {
    return {
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
      weight: isSet(object.weight) ? String(object.weight) : ""
    };
  },
  toJSON(message: WeightedVoteOption): unknown {
    const obj: any = {};
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },
  fromPartial(object: DeepPartial<WeightedVoteOption>): WeightedVoteOption {
    const message = createBaseWeightedVoteOption();
    message.option = object.option ?? 0;
    message.weight = object.weight ?? "";
    return message;
  },
  fromAmino(object: WeightedVoteOptionAmino): WeightedVoteOption {
    return {
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
      weight: object.weight
    };
  },
  toAmino(message: WeightedVoteOption): WeightedVoteOptionAmino {
    const obj: any = {};
    obj.option = message.option;
    obj.weight = message.weight;
    return obj;
  },
  fromAminoMsg(object: WeightedVoteOptionAminoMsg): WeightedVoteOption {
    return WeightedVoteOption.fromAmino(object.value);
  },
  toAminoMsg(message: WeightedVoteOption): WeightedVoteOptionAminoMsg {
    return {
      type: "cosmos-sdk/WeightedVoteOption",
      value: WeightedVoteOption.toAmino(message)
    };
  },
  fromProtoMsg(message: WeightedVoteOptionProtoMsg): WeightedVoteOption {
    return WeightedVoteOption.decode(message.value);
  },
  toProto(message: WeightedVoteOption): Uint8Array {
    return WeightedVoteOption.encode(message).finish();
  },
  toProtoMsg(message: WeightedVoteOption): WeightedVoteOptionProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.WeightedVoteOption",
      value: WeightedVoteOption.encode(message).finish()
    };
  }
};
function createBaseTextProposal(): TextProposal {
  return {
    $typeUrl: "/cosmos.gov.v1beta1.TextProposal",
    title: "",
    description: ""
  };
}
export const TextProposal = {
  typeUrl: "/cosmos.gov.v1beta1.TextProposal",
  aminoType: "cosmos-sdk/TextProposal",
  encode(message: TextProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TextProposal {
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
  fromJSON(object: any): TextProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  toJSON(message: TextProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },
  fromPartial(object: DeepPartial<TextProposal>): TextProposal {
    const message = createBaseTextProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: TextProposalAmino): TextProposal {
    return {
      title: object.title,
      description: object.description
    };
  },
  toAmino(message: TextProposal): TextProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    return obj;
  },
  fromAminoMsg(object: TextProposalAminoMsg): TextProposal {
    return TextProposal.fromAmino(object.value);
  },
  toAminoMsg(message: TextProposal): TextProposalAminoMsg {
    return {
      type: "cosmos-sdk/TextProposal",
      value: TextProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: TextProposalProtoMsg): TextProposal {
    return TextProposal.decode(message.value);
  },
  toProto(message: TextProposal): Uint8Array {
    return TextProposal.encode(message).finish();
  },
  toProtoMsg(message: TextProposal): TextProposalProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.TextProposal",
      value: TextProposal.encode(message).finish()
    };
  }
};
function createBaseDeposit(): Deposit {
  return {
    proposal_id: Long.UZERO,
    depositor: "",
    amount: []
  };
}
export const Deposit = {
  typeUrl: "/cosmos.gov.v1beta1.Deposit",
  aminoType: "cosmos-sdk/Deposit",
  encode(message: Deposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposal_id.isZero()) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Deposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = (reader.uint64() as Long);
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
  fromJSON(object: any): Deposit {
    return {
      proposal_id: isSet(object.proposal_id) ? Long.fromValue(object.proposal_id) : Long.UZERO,
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: Deposit): unknown {
    const obj: any = {};
    message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || Long.UZERO).toString());
    message.depositor !== undefined && (obj.depositor = message.depositor);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Deposit>): Deposit {
    const message = createBaseDeposit();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? Long.fromValue(object.proposal_id) : Long.UZERO;
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DepositAmino): Deposit {
    return {
      proposal_id: Long.fromString(object.proposal_id),
      depositor: object.depositor,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: Deposit): DepositAmino {
    const obj: any = {};
    obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
    obj.depositor = message.depositor;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: DepositAminoMsg): Deposit {
    return Deposit.fromAmino(object.value);
  },
  toAminoMsg(message: Deposit): DepositAminoMsg {
    return {
      type: "cosmos-sdk/Deposit",
      value: Deposit.toAmino(message)
    };
  },
  fromProtoMsg(message: DepositProtoMsg): Deposit {
    return Deposit.decode(message.value);
  },
  toProto(message: Deposit): Uint8Array {
    return Deposit.encode(message).finish();
  },
  toProtoMsg(message: Deposit): DepositProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.Deposit",
      value: Deposit.encode(message).finish()
    };
  }
};
function createBaseProposal(): Proposal {
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
  encode(message: Proposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposal_id.isZero()) {
      writer.uint32(8).uint64(message.proposal_id);
    }
    if (message.content !== undefined) {
      Any.encode((message.content as Any), writer.uint32(18).fork()).ldelim();
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
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.voting_start_time !== undefined) {
      Timestamp.encode(toTimestamp(message.voting_start_time), writer.uint32(66).fork()).ldelim();
    }
    if (message.voting_end_time !== undefined) {
      Timestamp.encode(toTimestamp(message.voting_end_time), writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = (reader.uint64() as Long);
          break;
        case 2:
          message.content = (Cosmos_govv1beta1Content_InterfaceDecoder(reader) as Any);
          break;
        case 3:
          message.status = (reader.int32() as any);
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
  fromJSON(object: any): Proposal {
    return {
      proposal_id: isSet(object.proposal_id) ? Long.fromValue(object.proposal_id) : Long.UZERO,
      content: isSet(object.content) ? Any.fromJSON(object.content) : undefined,
      status: isSet(object.status) ? proposalStatusFromJSON(object.status) : -1,
      final_tally_result: isSet(object.final_tally_result) ? TallyResult.fromJSON(object.final_tally_result) : undefined,
      submit_time: isSet(object.submit_time) ? fromJsonTimestamp(object.submit_time) : undefined,
      deposit_end_time: isSet(object.deposit_end_time) ? fromJsonTimestamp(object.deposit_end_time) : undefined,
      total_deposit: Array.isArray(object?.total_deposit) ? object.total_deposit.map((e: any) => Coin.fromJSON(e)) : [],
      voting_start_time: isSet(object.voting_start_time) ? fromJsonTimestamp(object.voting_start_time) : undefined,
      voting_end_time: isSet(object.voting_end_time) ? fromJsonTimestamp(object.voting_end_time) : undefined
    };
  },
  toJSON(message: Proposal): unknown {
    const obj: any = {};
    message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || Long.UZERO).toString());
    message.content !== undefined && (obj.content = message.content ? Any.toJSON(message.content) : undefined);
    message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
    message.final_tally_result !== undefined && (obj.final_tally_result = message.final_tally_result ? TallyResult.toJSON(message.final_tally_result) : undefined);
    message.submit_time !== undefined && (obj.submit_time = message.submit_time.toISOString());
    message.deposit_end_time !== undefined && (obj.deposit_end_time = message.deposit_end_time.toISOString());
    if (message.total_deposit) {
      obj.total_deposit = message.total_deposit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.total_deposit = [];
    }
    message.voting_start_time !== undefined && (obj.voting_start_time = message.voting_start_time.toISOString());
    message.voting_end_time !== undefined && (obj.voting_end_time = message.voting_end_time.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<Proposal>): Proposal {
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
  fromAmino(object: ProposalAmino): Proposal {
    return {
      proposal_id: Long.fromString(object.proposal_id),
      content: object?.content ? Cosmos_govv1beta1Content_FromAmino(object.content) : undefined,
      status: isSet(object.status) ? proposalStatusFromJSON(object.status) : -1,
      final_tally_result: object?.final_tally_result ? TallyResult.fromAmino(object.final_tally_result) : undefined,
      submit_time: object.submit_time,
      deposit_end_time: object.deposit_end_time,
      total_deposit: Array.isArray(object?.total_deposit) ? object.total_deposit.map((e: any) => Coin.fromAmino(e)) : [],
      voting_start_time: object.voting_start_time,
      voting_end_time: object.voting_end_time
    };
  },
  toAmino(message: Proposal): ProposalAmino {
    const obj: any = {};
    obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
    obj.content = message.content ? Cosmos_govv1beta1Content_ToAmino((message.content as Any)) : undefined;
    obj.status = message.status;
    obj.final_tally_result = message.final_tally_result ? TallyResult.toAmino(message.final_tally_result) : undefined;
    obj.submit_time = message.submit_time;
    obj.deposit_end_time = message.deposit_end_time;
    if (message.total_deposit) {
      obj.total_deposit = message.total_deposit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_deposit = [];
    }
    obj.voting_start_time = message.voting_start_time;
    obj.voting_end_time = message.voting_end_time;
    return obj;
  },
  fromAminoMsg(object: ProposalAminoMsg): Proposal {
    return Proposal.fromAmino(object.value);
  },
  toAminoMsg(message: Proposal): ProposalAminoMsg {
    return {
      type: "cosmos-sdk/Proposal",
      value: Proposal.toAmino(message)
    };
  },
  fromProtoMsg(message: ProposalProtoMsg): Proposal {
    return Proposal.decode(message.value);
  },
  toProto(message: Proposal): Uint8Array {
    return Proposal.encode(message).finish();
  },
  toProtoMsg(message: Proposal): ProposalProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.Proposal",
      value: Proposal.encode(message).finish()
    };
  }
};
function createBaseTallyResult(): TallyResult {
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
  encode(message: TallyResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): TallyResult {
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
  fromJSON(object: any): TallyResult {
    return {
      yes: isSet(object.yes) ? String(object.yes) : "",
      abstain: isSet(object.abstain) ? String(object.abstain) : "",
      no: isSet(object.no) ? String(object.no) : "",
      no_with_veto: isSet(object.no_with_veto) ? String(object.no_with_veto) : ""
    };
  },
  toJSON(message: TallyResult): unknown {
    const obj: any = {};
    message.yes !== undefined && (obj.yes = message.yes);
    message.abstain !== undefined && (obj.abstain = message.abstain);
    message.no !== undefined && (obj.no = message.no);
    message.no_with_veto !== undefined && (obj.no_with_veto = message.no_with_veto);
    return obj;
  },
  fromPartial(object: DeepPartial<TallyResult>): TallyResult {
    const message = createBaseTallyResult();
    message.yes = object.yes ?? "";
    message.abstain = object.abstain ?? "";
    message.no = object.no ?? "";
    message.no_with_veto = object.no_with_veto ?? "";
    return message;
  },
  fromAmino(object: TallyResultAmino): TallyResult {
    return {
      yes: object.yes,
      abstain: object.abstain,
      no: object.no,
      no_with_veto: object.no_with_veto
    };
  },
  toAmino(message: TallyResult): TallyResultAmino {
    const obj: any = {};
    obj.yes = message.yes;
    obj.abstain = message.abstain;
    obj.no = message.no;
    obj.no_with_veto = message.no_with_veto;
    return obj;
  },
  fromAminoMsg(object: TallyResultAminoMsg): TallyResult {
    return TallyResult.fromAmino(object.value);
  },
  toAminoMsg(message: TallyResult): TallyResultAminoMsg {
    return {
      type: "cosmos-sdk/TallyResult",
      value: TallyResult.toAmino(message)
    };
  },
  fromProtoMsg(message: TallyResultProtoMsg): TallyResult {
    return TallyResult.decode(message.value);
  },
  toProto(message: TallyResult): Uint8Array {
    return TallyResult.encode(message).finish();
  },
  toProtoMsg(message: TallyResult): TallyResultProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.TallyResult",
      value: TallyResult.encode(message).finish()
    };
  }
};
function createBaseVote(): Vote {
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
  encode(message: Vote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      WeightedVoteOption.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Vote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = (reader.uint64() as Long);
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.option = (reader.int32() as any);
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
  fromJSON(object: any): Vote {
    return {
      proposal_id: isSet(object.proposal_id) ? Long.fromValue(object.proposal_id) : Long.UZERO,
      voter: isSet(object.voter) ? String(object.voter) : "",
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
      options: Array.isArray(object?.options) ? object.options.map((e: any) => WeightedVoteOption.fromJSON(e)) : []
    };
  },
  toJSON(message: Vote): unknown {
    const obj: any = {};
    message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    if (message.options) {
      obj.options = message.options.map(e => e ? WeightedVoteOption.toJSON(e) : undefined);
    } else {
      obj.options = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Vote>): Vote {
    const message = createBaseVote();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? Long.fromValue(object.proposal_id) : Long.UZERO;
    message.voter = object.voter ?? "";
    message.option = object.option ?? 0;
    message.options = object.options?.map(e => WeightedVoteOption.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: VoteAmino): Vote {
    return {
      proposal_id: Long.fromString(object.proposal_id),
      voter: object.voter,
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
      options: Array.isArray(object?.options) ? object.options.map((e: any) => WeightedVoteOption.fromAmino(e)) : []
    };
  },
  toAmino(message: Vote): VoteAmino {
    const obj: any = {};
    obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
    obj.voter = message.voter;
    obj.option = message.option;
    if (message.options) {
      obj.options = message.options.map(e => e ? WeightedVoteOption.toAmino(e) : undefined);
    } else {
      obj.options = [];
    }
    return obj;
  },
  fromAminoMsg(object: VoteAminoMsg): Vote {
    return Vote.fromAmino(object.value);
  },
  toAminoMsg(message: Vote): VoteAminoMsg {
    return {
      type: "cosmos-sdk/Vote",
      value: Vote.toAmino(message)
    };
  },
  fromProtoMsg(message: VoteProtoMsg): Vote {
    return Vote.decode(message.value);
  },
  toProto(message: Vote): Uint8Array {
    return Vote.encode(message).finish();
  },
  toProtoMsg(message: Vote): VoteProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.Vote",
      value: Vote.encode(message).finish()
    };
  }
};
function createBaseDepositParams(): DepositParams {
  return {
    min_deposit: [],
    max_deposit_period: Duration.fromPartial({})
  };
}
export const DepositParams = {
  typeUrl: "/cosmos.gov.v1beta1.DepositParams",
  aminoType: "cosmos-sdk/DepositParams",
  encode(message: DepositParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.min_deposit) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.max_deposit_period !== undefined) {
      Duration.encode(message.max_deposit_period, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DepositParams {
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
  fromJSON(object: any): DepositParams {
    return {
      min_deposit: Array.isArray(object?.min_deposit) ? object.min_deposit.map((e: any) => Coin.fromJSON(e)) : [],
      max_deposit_period: isSet(object.max_deposit_period) ? Duration.fromJSON(object.max_deposit_period) : undefined
    };
  },
  toJSON(message: DepositParams): unknown {
    const obj: any = {};
    if (message.min_deposit) {
      obj.min_deposit = message.min_deposit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.min_deposit = [];
    }
    message.max_deposit_period !== undefined && (obj.max_deposit_period = message.max_deposit_period ? Duration.toJSON(message.max_deposit_period) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<DepositParams>): DepositParams {
    const message = createBaseDepositParams();
    message.min_deposit = object.min_deposit?.map(e => Coin.fromPartial(e)) || [];
    message.max_deposit_period = object.max_deposit_period !== undefined && object.max_deposit_period !== null ? Duration.fromPartial(object.max_deposit_period) : undefined;
    return message;
  },
  fromAmino(object: DepositParamsAmino): DepositParams {
    return {
      min_deposit: Array.isArray(object?.min_deposit) ? object.min_deposit.map((e: any) => Coin.fromAmino(e)) : [],
      max_deposit_period: object?.max_deposit_period ? Duration.fromAmino(object.max_deposit_period) : undefined
    };
  },
  toAmino(message: DepositParams): DepositParamsAmino {
    const obj: any = {};
    if (message.min_deposit) {
      obj.min_deposit = message.min_deposit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.min_deposit = [];
    }
    obj.max_deposit_period = message.max_deposit_period ? Duration.toAmino(message.max_deposit_period) : undefined;
    return obj;
  },
  fromAminoMsg(object: DepositParamsAminoMsg): DepositParams {
    return DepositParams.fromAmino(object.value);
  },
  toAminoMsg(message: DepositParams): DepositParamsAminoMsg {
    return {
      type: "cosmos-sdk/DepositParams",
      value: DepositParams.toAmino(message)
    };
  },
  fromProtoMsg(message: DepositParamsProtoMsg): DepositParams {
    return DepositParams.decode(message.value);
  },
  toProto(message: DepositParams): Uint8Array {
    return DepositParams.encode(message).finish();
  },
  toProtoMsg(message: DepositParams): DepositParamsProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.DepositParams",
      value: DepositParams.encode(message).finish()
    };
  }
};
function createBaseVotingParams(): VotingParams {
  return {
    voting_period: Duration.fromPartial({})
  };
}
export const VotingParams = {
  typeUrl: "/cosmos.gov.v1beta1.VotingParams",
  aminoType: "cosmos-sdk/VotingParams",
  encode(message: VotingParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.voting_period !== undefined) {
      Duration.encode(message.voting_period, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): VotingParams {
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
  fromJSON(object: any): VotingParams {
    return {
      voting_period: isSet(object.voting_period) ? Duration.fromJSON(object.voting_period) : undefined
    };
  },
  toJSON(message: VotingParams): unknown {
    const obj: any = {};
    message.voting_period !== undefined && (obj.voting_period = message.voting_period ? Duration.toJSON(message.voting_period) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<VotingParams>): VotingParams {
    const message = createBaseVotingParams();
    message.voting_period = object.voting_period !== undefined && object.voting_period !== null ? Duration.fromPartial(object.voting_period) : undefined;
    return message;
  },
  fromAmino(object: VotingParamsAmino): VotingParams {
    return {
      voting_period: object?.voting_period ? Duration.fromAmino(object.voting_period) : undefined
    };
  },
  toAmino(message: VotingParams): VotingParamsAmino {
    const obj: any = {};
    obj.voting_period = message.voting_period ? Duration.toAmino(message.voting_period) : undefined;
    return obj;
  },
  fromAminoMsg(object: VotingParamsAminoMsg): VotingParams {
    return VotingParams.fromAmino(object.value);
  },
  toAminoMsg(message: VotingParams): VotingParamsAminoMsg {
    return {
      type: "cosmos-sdk/VotingParams",
      value: VotingParams.toAmino(message)
    };
  },
  fromProtoMsg(message: VotingParamsProtoMsg): VotingParams {
    return VotingParams.decode(message.value);
  },
  toProto(message: VotingParams): Uint8Array {
    return VotingParams.encode(message).finish();
  },
  toProtoMsg(message: VotingParams): VotingParamsProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.VotingParams",
      value: VotingParams.encode(message).finish()
    };
  }
};
function createBaseTallyParams(): TallyParams {
  return {
    quorum: new Uint8Array(),
    threshold: new Uint8Array(),
    veto_threshold: new Uint8Array()
  };
}
export const TallyParams = {
  typeUrl: "/cosmos.gov.v1beta1.TallyParams",
  aminoType: "cosmos-sdk/TallyParams",
  encode(message: TallyParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): TallyParams {
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
  fromJSON(object: any): TallyParams {
    return {
      quorum: isSet(object.quorum) ? bytesFromBase64(object.quorum) : new Uint8Array(),
      threshold: isSet(object.threshold) ? bytesFromBase64(object.threshold) : new Uint8Array(),
      veto_threshold: isSet(object.veto_threshold) ? bytesFromBase64(object.veto_threshold) : new Uint8Array()
    };
  },
  toJSON(message: TallyParams): unknown {
    const obj: any = {};
    message.quorum !== undefined && (obj.quorum = base64FromBytes(message.quorum !== undefined ? message.quorum : new Uint8Array()));
    message.threshold !== undefined && (obj.threshold = base64FromBytes(message.threshold !== undefined ? message.threshold : new Uint8Array()));
    message.veto_threshold !== undefined && (obj.veto_threshold = base64FromBytes(message.veto_threshold !== undefined ? message.veto_threshold : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<TallyParams>): TallyParams {
    const message = createBaseTallyParams();
    message.quorum = object.quorum ?? new Uint8Array();
    message.threshold = object.threshold ?? new Uint8Array();
    message.veto_threshold = object.veto_threshold ?? new Uint8Array();
    return message;
  },
  fromAmino(object: TallyParamsAmino): TallyParams {
    return {
      quorum: object.quorum,
      threshold: object.threshold,
      veto_threshold: object.veto_threshold
    };
  },
  toAmino(message: TallyParams): TallyParamsAmino {
    const obj: any = {};
    obj.quorum = message.quorum;
    obj.threshold = message.threshold;
    obj.veto_threshold = message.veto_threshold;
    return obj;
  },
  fromAminoMsg(object: TallyParamsAminoMsg): TallyParams {
    return TallyParams.fromAmino(object.value);
  },
  toAminoMsg(message: TallyParams): TallyParamsAminoMsg {
    return {
      type: "cosmos-sdk/TallyParams",
      value: TallyParams.toAmino(message)
    };
  },
  fromProtoMsg(message: TallyParamsProtoMsg): TallyParams {
    return TallyParams.decode(message.value);
  },
  toProto(message: TallyParams): Uint8Array {
    return TallyParams.encode(message).finish();
  },
  toProtoMsg(message: TallyParams): TallyParamsProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.TallyParams",
      value: TallyParams.encode(message).finish()
    };
  }
};
export const Cosmos_govv1beta1Content_InterfaceDecoder = (input: _m0.Reader | Uint8Array): CommunityPoolSpendProposal | CommunityPoolSpendProposalWithDeposit | TextProposal | SoftwareUpgradeProposal | CancelSoftwareUpgradeProposal | ClientUpdateProposal | UpgradeProposal | Any => {
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
export const Cosmos_govv1beta1Content_FromAmino = (content: AnyAmino) => {
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
export const Cosmos_govv1beta1Content_ToAmino = (content: Any) => {
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