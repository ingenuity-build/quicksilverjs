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
exports.QueryClientImpl = exports.Query = void 0;
const fm = __importStar(require("../../../../grpc-gateway"));
class Query {
    /** Channel queries an IBC Channel. */
    static channel(request, initRequest) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/${request["port_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["channel_id", "port_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Channels queries all the IBC channels of a chain. */
    static channels(request, initRequest) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * ConnectionChannels queries all the channels associated with a connection
     * end.
     */
    static connectionChannels(request, initRequest) {
        return fm.fetchReq(`/ibc/core/channel/v1/connections/${request["connection"]}/channels?${fm.renderURLSearchParams({
            ...request
        }, ["connection"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * ChannelClientState queries for the client state for the channel associated
     * with the provided channel identifiers.
     */
    static channelClientState(request, initRequest) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/${request["port_id"]}/client_state?${fm.renderURLSearchParams({
            ...request
        }, ["channel_id", "port_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * ChannelConsensusState queries for the consensus state for the channel
     * associated with the provided channel identifiers.
     */
    static channelConsensusState(request, initRequest) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/${request["port_id"]}/consensus_state/revision/${request["revision_number"]}/height/${request["revision_height"]}?${fm.renderURLSearchParams({
            ...request
        }, ["channel_id", "port_id", "revision_number", "revision_height"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** PacketCommitment queries a stored packet commitment hash. */
    static packetCommitment(request, initRequest) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/${request["port_id"]}/packet_commitments/${request["sequence"]}?${fm.renderURLSearchParams({
            ...request
        }, ["channel_id", "port_id", "sequence"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * PacketCommitments returns all the packet commitments hashes associated
     * with a channel.
     */
    static packetCommitments(request, initRequest) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/${request["port_id"]}/packet_commitments?${fm.renderURLSearchParams({
            ...request
        }, ["channel_id", "port_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * PacketReceipt queries if a given packet sequence has been received on the
     * queried chain
     */
    static packetReceipt(request, initRequest) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/${request["port_id"]}/packet_receipts/${request["sequence"]}?${fm.renderURLSearchParams({
            ...request
        }, ["channel_id", "port_id", "sequence"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** PacketAcknowledgement queries a stored packet acknowledgement hash. */
    static packetAcknowledgement(request, initRequest) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/${request["port_id"]}/packet_acks/${request["sequence"]}?${fm.renderURLSearchParams({
            ...request
        }, ["channel_id", "port_id", "sequence"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * PacketAcknowledgements returns all the packet acknowledgements associated
     * with a channel.
     */
    static packetAcknowledgements(request, initRequest) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/${request["port_id"]}/packet_acknowledgements?${fm.renderURLSearchParams({
            ...request
        }, ["channel_id", "port_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * UnreceivedPackets returns all the unreceived IBC packets associated with a
     * channel and sequences.
     */
    static unreceivedPackets(request, initRequest) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/${request["port_id"]}/packet_commitments/${request["packet_commitment_sequences"]}/unreceived_packets?${fm.renderURLSearchParams({
            ...request
        }, ["channel_id", "port_id", "packet_commitment_sequences"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
     * with a channel and sequences.
     */
    static unreceivedAcks(request, initRequest) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/${request["port_id"]}/packet_commitments/${request["packet_ack_sequences"]}/unreceived_acks?${fm.renderURLSearchParams({
            ...request
        }, ["channel_id", "port_id", "packet_ack_sequences"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** NextSequenceReceive returns the next receive sequence for a given channel. */
    static nextSequenceReceive(request, initRequest) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/${request["port_id"]}/next_sequence?${fm.renderURLSearchParams({
            ...request
        }, ["channel_id", "port_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
}
exports.Query = Query;
class QueryClientImpl {
    url;
    constructor(url) {
        this.url = url;
    }
    /** Channel queries an IBC Channel. */
    async channel(req, headers) {
        return Query.channel(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Channels queries all the IBC channels of a chain. */
    async channels(req, headers) {
        return Query.channels(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * ConnectionChannels queries all the channels associated with a connection
     * end.
     */
    async connectionChannels(req, headers) {
        return Query.connectionChannels(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * ChannelClientState queries for the client state for the channel associated
     * with the provided channel identifiers.
     */
    async channelClientState(req, headers) {
        return Query.channelClientState(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * ChannelConsensusState queries for the consensus state for the channel
     * associated with the provided channel identifiers.
     */
    async channelConsensusState(req, headers) {
        return Query.channelConsensusState(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** PacketCommitment queries a stored packet commitment hash. */
    async packetCommitment(req, headers) {
        return Query.packetCommitment(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * PacketCommitments returns all the packet commitments hashes associated
     * with a channel.
     */
    async packetCommitments(req, headers) {
        return Query.packetCommitments(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * PacketReceipt queries if a given packet sequence has been received on the
     * queried chain
     */
    async packetReceipt(req, headers) {
        return Query.packetReceipt(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** PacketAcknowledgement queries a stored packet acknowledgement hash. */
    async packetAcknowledgement(req, headers) {
        return Query.packetAcknowledgement(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * PacketAcknowledgements returns all the packet acknowledgements associated
     * with a channel.
     */
    async packetAcknowledgements(req, headers) {
        return Query.packetAcknowledgements(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * UnreceivedPackets returns all the unreceived IBC packets associated with a
     * channel and sequences.
     */
    async unreceivedPackets(req, headers) {
        return Query.unreceivedPackets(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
     * with a channel and sequences.
     */
    async unreceivedAcks(req, headers) {
        return Query.unreceivedAcks(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** NextSequenceReceive returns the next receive sequence for a given channel. */
    async nextSequenceReceive(req, headers) {
        return Query.nextSequenceReceive(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.QueryClientImpl = QueryClientImpl;
//# sourceMappingURL=query.rpc.Query.js.map