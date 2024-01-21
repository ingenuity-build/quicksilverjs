import * as fm from "../../../../grpc-gateway";
import { QueryChannelRequest, QueryChannelResponse, QueryChannelsRequest, QueryChannelsResponse, QueryConnectionChannelsRequest, QueryConnectionChannelsResponse, QueryChannelClientStateRequest, QueryChannelClientStateResponse, QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse, QueryPacketCommitmentRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse, QueryPacketReceiptRequest, QueryPacketReceiptResponse, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse } from "./query";
export declare class Query {
    /** Channel queries an IBC Channel. */
    static channel(request: QueryChannelRequest, initRequest?: fm.InitReq): Promise<QueryChannelResponse>;
    /** Channels queries all the IBC channels of a chain. */
    static channels(request: QueryChannelsRequest, initRequest?: fm.InitReq): Promise<QueryChannelsResponse>;
    /**
     * ConnectionChannels queries all the channels associated with a connection
     * end.
     */
    static connectionChannels(request: QueryConnectionChannelsRequest, initRequest?: fm.InitReq): Promise<QueryConnectionChannelsResponse>;
    /**
     * ChannelClientState queries for the client state for the channel associated
     * with the provided channel identifiers.
     */
    static channelClientState(request: QueryChannelClientStateRequest, initRequest?: fm.InitReq): Promise<QueryChannelClientStateResponse>;
    /**
     * ChannelConsensusState queries for the consensus state for the channel
     * associated with the provided channel identifiers.
     */
    static channelConsensusState(request: QueryChannelConsensusStateRequest, initRequest?: fm.InitReq): Promise<QueryChannelConsensusStateResponse>;
    /** PacketCommitment queries a stored packet commitment hash. */
    static packetCommitment(request: QueryPacketCommitmentRequest, initRequest?: fm.InitReq): Promise<QueryPacketCommitmentResponse>;
    /**
     * PacketCommitments returns all the packet commitments hashes associated
     * with a channel.
     */
    static packetCommitments(request: QueryPacketCommitmentsRequest, initRequest?: fm.InitReq): Promise<QueryPacketCommitmentsResponse>;
    /**
     * PacketReceipt queries if a given packet sequence has been received on the
     * queried chain
     */
    static packetReceipt(request: QueryPacketReceiptRequest, initRequest?: fm.InitReq): Promise<QueryPacketReceiptResponse>;
    /** PacketAcknowledgement queries a stored packet acknowledgement hash. */
    static packetAcknowledgement(request: QueryPacketAcknowledgementRequest, initRequest?: fm.InitReq): Promise<QueryPacketAcknowledgementResponse>;
    /**
     * PacketAcknowledgements returns all the packet acknowledgements associated
     * with a channel.
     */
    static packetAcknowledgements(request: QueryPacketAcknowledgementsRequest, initRequest?: fm.InitReq): Promise<QueryPacketAcknowledgementsResponse>;
    /**
     * UnreceivedPackets returns all the unreceived IBC packets associated with a
     * channel and sequences.
     */
    static unreceivedPackets(request: QueryUnreceivedPacketsRequest, initRequest?: fm.InitReq): Promise<QueryUnreceivedPacketsResponse>;
    /**
     * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
     * with a channel and sequences.
     */
    static unreceivedAcks(request: QueryUnreceivedAcksRequest, initRequest?: fm.InitReq): Promise<QueryUnreceivedAcksResponse>;
    /** NextSequenceReceive returns the next receive sequence for a given channel. */
    static nextSequenceReceive(request: QueryNextSequenceReceiveRequest, initRequest?: fm.InitReq): Promise<QueryNextSequenceReceiveResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Channel queries an IBC Channel. */
    channel(req: QueryChannelRequest, headers?: HeadersInit): Promise<QueryChannelResponse>;
    /** Channels queries all the IBC channels of a chain. */
    channels(req: QueryChannelsRequest, headers?: HeadersInit): Promise<QueryChannelsResponse>;
    /**
     * ConnectionChannels queries all the channels associated with a connection
     * end.
     */
    connectionChannels(req: QueryConnectionChannelsRequest, headers?: HeadersInit): Promise<QueryConnectionChannelsResponse>;
    /**
     * ChannelClientState queries for the client state for the channel associated
     * with the provided channel identifiers.
     */
    channelClientState(req: QueryChannelClientStateRequest, headers?: HeadersInit): Promise<QueryChannelClientStateResponse>;
    /**
     * ChannelConsensusState queries for the consensus state for the channel
     * associated with the provided channel identifiers.
     */
    channelConsensusState(req: QueryChannelConsensusStateRequest, headers?: HeadersInit): Promise<QueryChannelConsensusStateResponse>;
    /** PacketCommitment queries a stored packet commitment hash. */
    packetCommitment(req: QueryPacketCommitmentRequest, headers?: HeadersInit): Promise<QueryPacketCommitmentResponse>;
    /**
     * PacketCommitments returns all the packet commitments hashes associated
     * with a channel.
     */
    packetCommitments(req: QueryPacketCommitmentsRequest, headers?: HeadersInit): Promise<QueryPacketCommitmentsResponse>;
    /**
     * PacketReceipt queries if a given packet sequence has been received on the
     * queried chain
     */
    packetReceipt(req: QueryPacketReceiptRequest, headers?: HeadersInit): Promise<QueryPacketReceiptResponse>;
    /** PacketAcknowledgement queries a stored packet acknowledgement hash. */
    packetAcknowledgement(req: QueryPacketAcknowledgementRequest, headers?: HeadersInit): Promise<QueryPacketAcknowledgementResponse>;
    /**
     * PacketAcknowledgements returns all the packet acknowledgements associated
     * with a channel.
     */
    packetAcknowledgements(req: QueryPacketAcknowledgementsRequest, headers?: HeadersInit): Promise<QueryPacketAcknowledgementsResponse>;
    /**
     * UnreceivedPackets returns all the unreceived IBC packets associated with a
     * channel and sequences.
     */
    unreceivedPackets(req: QueryUnreceivedPacketsRequest, headers?: HeadersInit): Promise<QueryUnreceivedPacketsResponse>;
    /**
     * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
     * with a channel and sequences.
     */
    unreceivedAcks(req: QueryUnreceivedAcksRequest, headers?: HeadersInit): Promise<QueryUnreceivedAcksResponse>;
    /** NextSequenceReceive returns the next receive sequence for a given channel. */
    nextSequenceReceive(req: QueryNextSequenceReceiveRequest, headers?: HeadersInit): Promise<QueryNextSequenceReceiveResponse>;
}
