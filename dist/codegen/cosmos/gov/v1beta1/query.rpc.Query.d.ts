import * as fm from "../../../grpc-gateway";
import { QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse, QueryParamsRequest, QueryParamsResponse, QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
export declare class Query {
    /** Proposal queries proposal details based on ProposalID. */
    static proposal(request: QueryProposalRequest, initRequest?: fm.InitReq): Promise<QueryProposalResponse>;
    /** Proposals queries all proposals based on given status. */
    static proposals(request: QueryProposalsRequest, initRequest?: fm.InitReq): Promise<QueryProposalsResponse>;
    /** Vote queries voted information based on proposalID, voterAddr. */
    static vote(request: QueryVoteRequest, initRequest?: fm.InitReq): Promise<QueryVoteResponse>;
    /** Votes queries votes of a given proposal. */
    static votes(request: QueryVotesRequest, initRequest?: fm.InitReq): Promise<QueryVotesResponse>;
    /** Params queries all parameters of the gov module. */
    static params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse>;
    /** Deposit queries single deposit information based proposalID, depositAddr. */
    static deposit(request: QueryDepositRequest, initRequest?: fm.InitReq): Promise<QueryDepositResponse>;
    /** Deposits queries all deposits of a single proposal. */
    static deposits(request: QueryDepositsRequest, initRequest?: fm.InitReq): Promise<QueryDepositsResponse>;
    /** TallyResult queries the tally of a proposal vote. */
    static tallyResult(request: QueryTallyResultRequest, initRequest?: fm.InitReq): Promise<QueryTallyResultResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Proposal queries proposal details based on ProposalID. */
    proposal(req: QueryProposalRequest, headers?: HeadersInit): Promise<QueryProposalResponse>;
    /** Proposals queries all proposals based on given status. */
    proposals(req: QueryProposalsRequest, headers?: HeadersInit): Promise<QueryProposalsResponse>;
    /** Vote queries voted information based on proposalID, voterAddr. */
    vote(req: QueryVoteRequest, headers?: HeadersInit): Promise<QueryVoteResponse>;
    /** Votes queries votes of a given proposal. */
    votes(req: QueryVotesRequest, headers?: HeadersInit): Promise<QueryVotesResponse>;
    /** Params queries all parameters of the gov module. */
    params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
    /** Deposit queries single deposit information based proposalID, depositAddr. */
    deposit(req: QueryDepositRequest, headers?: HeadersInit): Promise<QueryDepositResponse>;
    /** Deposits queries all deposits of a single proposal. */
    deposits(req: QueryDepositsRequest, headers?: HeadersInit): Promise<QueryDepositsResponse>;
    /** TallyResult queries the tally of a proposal vote. */
    tallyResult(req: QueryTallyResultRequest, headers?: HeadersInit): Promise<QueryTallyResultResponse>;
}
