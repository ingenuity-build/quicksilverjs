/// <reference types="long" />
import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { ConnectionEnd, ConnectionEndAmino, ConnectionEndSDKType } from "../../../core/connection/v1/connection";
import { Channel, ChannelAmino, ChannelSDKType } from "../../../core/channel/v1/channel";
import { Long, DeepPartial } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * DataType defines the type of solo machine proof being created. This is done
 * to preserve uniqueness of different data sign byte encodings.
 */
export declare enum DataType {
    /** DATA_TYPE_UNINITIALIZED_UNSPECIFIED - Default State */
    DATA_TYPE_UNINITIALIZED_UNSPECIFIED = 0,
    /** DATA_TYPE_CLIENT_STATE - Data type for client state verification */
    DATA_TYPE_CLIENT_STATE = 1,
    /** DATA_TYPE_CONSENSUS_STATE - Data type for consensus state verification */
    DATA_TYPE_CONSENSUS_STATE = 2,
    /** DATA_TYPE_CONNECTION_STATE - Data type for connection state verification */
    DATA_TYPE_CONNECTION_STATE = 3,
    /** DATA_TYPE_CHANNEL_STATE - Data type for channel state verification */
    DATA_TYPE_CHANNEL_STATE = 4,
    /** DATA_TYPE_PACKET_COMMITMENT - Data type for packet commitment verification */
    DATA_TYPE_PACKET_COMMITMENT = 5,
    /** DATA_TYPE_PACKET_ACKNOWLEDGEMENT - Data type for packet acknowledgement verification */
    DATA_TYPE_PACKET_ACKNOWLEDGEMENT = 6,
    /** DATA_TYPE_PACKET_RECEIPT_ABSENCE - Data type for packet receipt absence verification */
    DATA_TYPE_PACKET_RECEIPT_ABSENCE = 7,
    /** DATA_TYPE_NEXT_SEQUENCE_RECV - Data type for next sequence recv verification */
    DATA_TYPE_NEXT_SEQUENCE_RECV = 8,
    /** DATA_TYPE_HEADER - Data type for header verification */
    DATA_TYPE_HEADER = 9,
    UNRECOGNIZED = -1
}
export declare const DataTypeSDKType: typeof DataType;
export declare const DataTypeAmino: typeof DataType;
export declare function dataTypeFromJSON(object: any): DataType;
export declare function dataTypeToJSON(object: DataType): string;
/**
 * ClientState defines a solo machine client that tracks the current consensus
 * state and if the client is frozen.
 */
export interface ClientState {
    /** latest sequence of the client state */
    sequence: Long;
    /** frozen sequence of the solo machine */
    is_frozen: boolean;
    consensus_state: ConsensusState;
    /**
     * when set to true, will allow governance to update a solo machine client.
     * The client will be unfrozen if it is frozen.
     */
    allow_update_after_proposal: boolean;
}
export interface ClientStateProtoMsg {
    type_url: "/ibc.lightclients.solomachine.v2.ClientState";
    value: Uint8Array;
}
/**
 * ClientState defines a solo machine client that tracks the current consensus
 * state and if the client is frozen.
 */
export interface ClientStateAmino {
    /** latest sequence of the client state */
    sequence: string;
    /** frozen sequence of the solo machine */
    is_frozen: boolean;
    consensus_state?: ConsensusStateAmino;
    /**
     * when set to true, will allow governance to update a solo machine client.
     * The client will be unfrozen if it is frozen.
     */
    allow_update_after_proposal: boolean;
}
export interface ClientStateAminoMsg {
    type: "cosmos-sdk/ClientState";
    value: ClientStateAmino;
}
/**
 * ClientState defines a solo machine client that tracks the current consensus
 * state and if the client is frozen.
 */
export interface ClientStateSDKType {
    sequence: Long;
    is_frozen: boolean;
    consensus_state: ConsensusStateSDKType;
    allow_update_after_proposal: boolean;
}
/**
 * ConsensusState defines a solo machine consensus state. The sequence of a
 * consensus state is contained in the "height" key used in storing the
 * consensus state.
 */
export interface ConsensusState {
    /** public key of the solo machine */
    public_key: Any;
    /**
     * diversifier allows the same public key to be re-used across different solo
     * machine clients (potentially on different chains) without being considered
     * misbehaviour.
     */
    diversifier: string;
    timestamp: Long;
}
export interface ConsensusStateProtoMsg {
    type_url: "/ibc.lightclients.solomachine.v2.ConsensusState";
    value: Uint8Array;
}
/**
 * ConsensusState defines a solo machine consensus state. The sequence of a
 * consensus state is contained in the "height" key used in storing the
 * consensus state.
 */
export interface ConsensusStateAmino {
    /** public key of the solo machine */
    public_key?: AnyAmino;
    /**
     * diversifier allows the same public key to be re-used across different solo
     * machine clients (potentially on different chains) without being considered
     * misbehaviour.
     */
    diversifier: string;
    timestamp: string;
}
export interface ConsensusStateAminoMsg {
    type: "cosmos-sdk/ConsensusState";
    value: ConsensusStateAmino;
}
/**
 * ConsensusState defines a solo machine consensus state. The sequence of a
 * consensus state is contained in the "height" key used in storing the
 * consensus state.
 */
export interface ConsensusStateSDKType {
    public_key: AnySDKType;
    diversifier: string;
    timestamp: Long;
}
/** Header defines a solo machine consensus header */
export interface Header {
    /** sequence to update solo machine public key at */
    sequence: Long;
    timestamp: Long;
    signature: Uint8Array;
    new_public_key: Any;
    new_diversifier: string;
}
export interface HeaderProtoMsg {
    type_url: "/ibc.lightclients.solomachine.v2.Header";
    value: Uint8Array;
}
/** Header defines a solo machine consensus header */
export interface HeaderAmino {
    /** sequence to update solo machine public key at */
    sequence: string;
    timestamp: string;
    signature: Uint8Array;
    new_public_key?: AnyAmino;
    new_diversifier: string;
}
export interface HeaderAminoMsg {
    type: "cosmos-sdk/Header";
    value: HeaderAmino;
}
/** Header defines a solo machine consensus header */
export interface HeaderSDKType {
    sequence: Long;
    timestamp: Long;
    signature: Uint8Array;
    new_public_key: AnySDKType;
    new_diversifier: string;
}
/**
 * Misbehaviour defines misbehaviour for a solo machine which consists
 * of a sequence and two signatures over different messages at that sequence.
 */
export interface Misbehaviour {
    client_id: string;
    sequence: Long;
    signature_one: SignatureAndData;
    signature_two: SignatureAndData;
}
export interface MisbehaviourProtoMsg {
    type_url: "/ibc.lightclients.solomachine.v2.Misbehaviour";
    value: Uint8Array;
}
/**
 * Misbehaviour defines misbehaviour for a solo machine which consists
 * of a sequence and two signatures over different messages at that sequence.
 */
export interface MisbehaviourAmino {
    client_id: string;
    sequence: string;
    signature_one?: SignatureAndDataAmino;
    signature_two?: SignatureAndDataAmino;
}
export interface MisbehaviourAminoMsg {
    type: "cosmos-sdk/Misbehaviour";
    value: MisbehaviourAmino;
}
/**
 * Misbehaviour defines misbehaviour for a solo machine which consists
 * of a sequence and two signatures over different messages at that sequence.
 */
export interface MisbehaviourSDKType {
    client_id: string;
    sequence: Long;
    signature_one: SignatureAndDataSDKType;
    signature_two: SignatureAndDataSDKType;
}
/**
 * SignatureAndData contains a signature and the data signed over to create that
 * signature.
 */
export interface SignatureAndData {
    signature: Uint8Array;
    data_type: DataType;
    data: Uint8Array;
    timestamp: Long;
}
export interface SignatureAndDataProtoMsg {
    type_url: "/ibc.lightclients.solomachine.v2.SignatureAndData";
    value: Uint8Array;
}
/**
 * SignatureAndData contains a signature and the data signed over to create that
 * signature.
 */
export interface SignatureAndDataAmino {
    signature: Uint8Array;
    data_type: DataType;
    data: Uint8Array;
    timestamp: string;
}
export interface SignatureAndDataAminoMsg {
    type: "cosmos-sdk/SignatureAndData";
    value: SignatureAndDataAmino;
}
/**
 * SignatureAndData contains a signature and the data signed over to create that
 * signature.
 */
export interface SignatureAndDataSDKType {
    signature: Uint8Array;
    data_type: DataType;
    data: Uint8Array;
    timestamp: Long;
}
/**
 * TimestampedSignatureData contains the signature data and the timestamp of the
 * signature.
 */
export interface TimestampedSignatureData {
    signature_data: Uint8Array;
    timestamp: Long;
}
export interface TimestampedSignatureDataProtoMsg {
    type_url: "/ibc.lightclients.solomachine.v2.TimestampedSignatureData";
    value: Uint8Array;
}
/**
 * TimestampedSignatureData contains the signature data and the timestamp of the
 * signature.
 */
export interface TimestampedSignatureDataAmino {
    signature_data: Uint8Array;
    timestamp: string;
}
export interface TimestampedSignatureDataAminoMsg {
    type: "cosmos-sdk/TimestampedSignatureData";
    value: TimestampedSignatureDataAmino;
}
/**
 * TimestampedSignatureData contains the signature data and the timestamp of the
 * signature.
 */
export interface TimestampedSignatureDataSDKType {
    signature_data: Uint8Array;
    timestamp: Long;
}
/** SignBytes defines the signed bytes used for signature verification. */
export interface SignBytes {
    sequence: Long;
    timestamp: Long;
    diversifier: string;
    /** type of the data used */
    data_type: DataType;
    /** marshaled data */
    data: Uint8Array;
}
export interface SignBytesProtoMsg {
    type_url: "/ibc.lightclients.solomachine.v2.SignBytes";
    value: Uint8Array;
}
/** SignBytes defines the signed bytes used for signature verification. */
export interface SignBytesAmino {
    sequence: string;
    timestamp: string;
    diversifier: string;
    /** type of the data used */
    data_type: DataType;
    /** marshaled data */
    data: Uint8Array;
}
export interface SignBytesAminoMsg {
    type: "cosmos-sdk/SignBytes";
    value: SignBytesAmino;
}
/** SignBytes defines the signed bytes used for signature verification. */
export interface SignBytesSDKType {
    sequence: Long;
    timestamp: Long;
    diversifier: string;
    data_type: DataType;
    data: Uint8Array;
}
/** HeaderData returns the SignBytes data for update verification. */
export interface HeaderData {
    /** header public key */
    new_pub_key: Any;
    /** header diversifier */
    new_diversifier: string;
}
export interface HeaderDataProtoMsg {
    type_url: "/ibc.lightclients.solomachine.v2.HeaderData";
    value: Uint8Array;
}
/** HeaderData returns the SignBytes data for update verification. */
export interface HeaderDataAmino {
    /** header public key */
    new_pub_key?: AnyAmino;
    /** header diversifier */
    new_diversifier: string;
}
export interface HeaderDataAminoMsg {
    type: "cosmos-sdk/HeaderData";
    value: HeaderDataAmino;
}
/** HeaderData returns the SignBytes data for update verification. */
export interface HeaderDataSDKType {
    new_pub_key: AnySDKType;
    new_diversifier: string;
}
/** ClientStateData returns the SignBytes data for client state verification. */
export interface ClientStateData {
    path: Uint8Array;
    client_state: Any;
}
export interface ClientStateDataProtoMsg {
    type_url: "/ibc.lightclients.solomachine.v2.ClientStateData";
    value: Uint8Array;
}
/** ClientStateData returns the SignBytes data for client state verification. */
export interface ClientStateDataAmino {
    path: Uint8Array;
    client_state?: AnyAmino;
}
export interface ClientStateDataAminoMsg {
    type: "cosmos-sdk/ClientStateData";
    value: ClientStateDataAmino;
}
/** ClientStateData returns the SignBytes data for client state verification. */
export interface ClientStateDataSDKType {
    path: Uint8Array;
    client_state: AnySDKType;
}
/**
 * ConsensusStateData returns the SignBytes data for consensus state
 * verification.
 */
export interface ConsensusStateData {
    path: Uint8Array;
    consensus_state: Any;
}
export interface ConsensusStateDataProtoMsg {
    type_url: "/ibc.lightclients.solomachine.v2.ConsensusStateData";
    value: Uint8Array;
}
/**
 * ConsensusStateData returns the SignBytes data for consensus state
 * verification.
 */
export interface ConsensusStateDataAmino {
    path: Uint8Array;
    consensus_state?: AnyAmino;
}
export interface ConsensusStateDataAminoMsg {
    type: "cosmos-sdk/ConsensusStateData";
    value: ConsensusStateDataAmino;
}
/**
 * ConsensusStateData returns the SignBytes data for consensus state
 * verification.
 */
export interface ConsensusStateDataSDKType {
    path: Uint8Array;
    consensus_state: AnySDKType;
}
/**
 * ConnectionStateData returns the SignBytes data for connection state
 * verification.
 */
export interface ConnectionStateData {
    path: Uint8Array;
    connection: ConnectionEnd;
}
export interface ConnectionStateDataProtoMsg {
    type_url: "/ibc.lightclients.solomachine.v2.ConnectionStateData";
    value: Uint8Array;
}
/**
 * ConnectionStateData returns the SignBytes data for connection state
 * verification.
 */
export interface ConnectionStateDataAmino {
    path: Uint8Array;
    connection?: ConnectionEndAmino;
}
export interface ConnectionStateDataAminoMsg {
    type: "cosmos-sdk/ConnectionStateData";
    value: ConnectionStateDataAmino;
}
/**
 * ConnectionStateData returns the SignBytes data for connection state
 * verification.
 */
export interface ConnectionStateDataSDKType {
    path: Uint8Array;
    connection: ConnectionEndSDKType;
}
/**
 * ChannelStateData returns the SignBytes data for channel state
 * verification.
 */
export interface ChannelStateData {
    path: Uint8Array;
    channel: Channel;
}
export interface ChannelStateDataProtoMsg {
    type_url: "/ibc.lightclients.solomachine.v2.ChannelStateData";
    value: Uint8Array;
}
/**
 * ChannelStateData returns the SignBytes data for channel state
 * verification.
 */
export interface ChannelStateDataAmino {
    path: Uint8Array;
    channel?: ChannelAmino;
}
export interface ChannelStateDataAminoMsg {
    type: "cosmos-sdk/ChannelStateData";
    value: ChannelStateDataAmino;
}
/**
 * ChannelStateData returns the SignBytes data for channel state
 * verification.
 */
export interface ChannelStateDataSDKType {
    path: Uint8Array;
    channel: ChannelSDKType;
}
/**
 * PacketCommitmentData returns the SignBytes data for packet commitment
 * verification.
 */
export interface PacketCommitmentData {
    path: Uint8Array;
    commitment: Uint8Array;
}
export interface PacketCommitmentDataProtoMsg {
    type_url: "/ibc.lightclients.solomachine.v2.PacketCommitmentData";
    value: Uint8Array;
}
/**
 * PacketCommitmentData returns the SignBytes data for packet commitment
 * verification.
 */
export interface PacketCommitmentDataAmino {
    path: Uint8Array;
    commitment: Uint8Array;
}
export interface PacketCommitmentDataAminoMsg {
    type: "cosmos-sdk/PacketCommitmentData";
    value: PacketCommitmentDataAmino;
}
/**
 * PacketCommitmentData returns the SignBytes data for packet commitment
 * verification.
 */
export interface PacketCommitmentDataSDKType {
    path: Uint8Array;
    commitment: Uint8Array;
}
/**
 * PacketAcknowledgementData returns the SignBytes data for acknowledgement
 * verification.
 */
export interface PacketAcknowledgementData {
    path: Uint8Array;
    acknowledgement: Uint8Array;
}
export interface PacketAcknowledgementDataProtoMsg {
    type_url: "/ibc.lightclients.solomachine.v2.PacketAcknowledgementData";
    value: Uint8Array;
}
/**
 * PacketAcknowledgementData returns the SignBytes data for acknowledgement
 * verification.
 */
export interface PacketAcknowledgementDataAmino {
    path: Uint8Array;
    acknowledgement: Uint8Array;
}
export interface PacketAcknowledgementDataAminoMsg {
    type: "cosmos-sdk/PacketAcknowledgementData";
    value: PacketAcknowledgementDataAmino;
}
/**
 * PacketAcknowledgementData returns the SignBytes data for acknowledgement
 * verification.
 */
export interface PacketAcknowledgementDataSDKType {
    path: Uint8Array;
    acknowledgement: Uint8Array;
}
/**
 * PacketReceiptAbsenceData returns the SignBytes data for
 * packet receipt absence verification.
 */
export interface PacketReceiptAbsenceData {
    path: Uint8Array;
}
export interface PacketReceiptAbsenceDataProtoMsg {
    type_url: "/ibc.lightclients.solomachine.v2.PacketReceiptAbsenceData";
    value: Uint8Array;
}
/**
 * PacketReceiptAbsenceData returns the SignBytes data for
 * packet receipt absence verification.
 */
export interface PacketReceiptAbsenceDataAmino {
    path: Uint8Array;
}
export interface PacketReceiptAbsenceDataAminoMsg {
    type: "cosmos-sdk/PacketReceiptAbsenceData";
    value: PacketReceiptAbsenceDataAmino;
}
/**
 * PacketReceiptAbsenceData returns the SignBytes data for
 * packet receipt absence verification.
 */
export interface PacketReceiptAbsenceDataSDKType {
    path: Uint8Array;
}
/**
 * NextSequenceRecvData returns the SignBytes data for verification of the next
 * sequence to be received.
 */
export interface NextSequenceRecvData {
    path: Uint8Array;
    next_seq_recv: Long;
}
export interface NextSequenceRecvDataProtoMsg {
    type_url: "/ibc.lightclients.solomachine.v2.NextSequenceRecvData";
    value: Uint8Array;
}
/**
 * NextSequenceRecvData returns the SignBytes data for verification of the next
 * sequence to be received.
 */
export interface NextSequenceRecvDataAmino {
    path: Uint8Array;
    next_seq_recv: string;
}
export interface NextSequenceRecvDataAminoMsg {
    type: "cosmos-sdk/NextSequenceRecvData";
    value: NextSequenceRecvDataAmino;
}
/**
 * NextSequenceRecvData returns the SignBytes data for verification of the next
 * sequence to be received.
 */
export interface NextSequenceRecvDataSDKType {
    path: Uint8Array;
    next_seq_recv: Long;
}
export declare const ClientState: {
    typeUrl: string;
    aminoType: string;
    encode(message: ClientState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClientState;
    fromJSON(object: any): ClientState;
    toJSON(message: ClientState): unknown;
    fromPartial(object: DeepPartial<ClientState>): ClientState;
    fromAmino(object: ClientStateAmino): ClientState;
    toAmino(message: ClientState): ClientStateAmino;
    fromAminoMsg(object: ClientStateAminoMsg): ClientState;
    toAminoMsg(message: ClientState): ClientStateAminoMsg;
    fromProtoMsg(message: ClientStateProtoMsg): ClientState;
    toProto(message: ClientState): Uint8Array;
    toProtoMsg(message: ClientState): ClientStateProtoMsg;
};
export declare const ConsensusState: {
    typeUrl: string;
    aminoType: string;
    encode(message: ConsensusState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusState;
    fromJSON(object: any): ConsensusState;
    toJSON(message: ConsensusState): unknown;
    fromPartial(object: DeepPartial<ConsensusState>): ConsensusState;
    fromAmino(object: ConsensusStateAmino): ConsensusState;
    toAmino(message: ConsensusState): ConsensusStateAmino;
    fromAminoMsg(object: ConsensusStateAminoMsg): ConsensusState;
    toAminoMsg(message: ConsensusState): ConsensusStateAminoMsg;
    fromProtoMsg(message: ConsensusStateProtoMsg): ConsensusState;
    toProto(message: ConsensusState): Uint8Array;
    toProtoMsg(message: ConsensusState): ConsensusStateProtoMsg;
};
export declare const Header: {
    typeUrl: string;
    aminoType: string;
    encode(message: Header, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Header;
    fromJSON(object: any): Header;
    toJSON(message: Header): unknown;
    fromPartial(object: DeepPartial<Header>): Header;
    fromAmino(object: HeaderAmino): Header;
    toAmino(message: Header): HeaderAmino;
    fromAminoMsg(object: HeaderAminoMsg): Header;
    toAminoMsg(message: Header): HeaderAminoMsg;
    fromProtoMsg(message: HeaderProtoMsg): Header;
    toProto(message: Header): Uint8Array;
    toProtoMsg(message: Header): HeaderProtoMsg;
};
export declare const Misbehaviour: {
    typeUrl: string;
    aminoType: string;
    encode(message: Misbehaviour, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Misbehaviour;
    fromJSON(object: any): Misbehaviour;
    toJSON(message: Misbehaviour): unknown;
    fromPartial(object: DeepPartial<Misbehaviour>): Misbehaviour;
    fromAmino(object: MisbehaviourAmino): Misbehaviour;
    toAmino(message: Misbehaviour): MisbehaviourAmino;
    fromAminoMsg(object: MisbehaviourAminoMsg): Misbehaviour;
    toAminoMsg(message: Misbehaviour): MisbehaviourAminoMsg;
    fromProtoMsg(message: MisbehaviourProtoMsg): Misbehaviour;
    toProto(message: Misbehaviour): Uint8Array;
    toProtoMsg(message: Misbehaviour): MisbehaviourProtoMsg;
};
export declare const SignatureAndData: {
    typeUrl: string;
    aminoType: string;
    encode(message: SignatureAndData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignatureAndData;
    fromJSON(object: any): SignatureAndData;
    toJSON(message: SignatureAndData): unknown;
    fromPartial(object: DeepPartial<SignatureAndData>): SignatureAndData;
    fromAmino(object: SignatureAndDataAmino): SignatureAndData;
    toAmino(message: SignatureAndData): SignatureAndDataAmino;
    fromAminoMsg(object: SignatureAndDataAminoMsg): SignatureAndData;
    toAminoMsg(message: SignatureAndData): SignatureAndDataAminoMsg;
    fromProtoMsg(message: SignatureAndDataProtoMsg): SignatureAndData;
    toProto(message: SignatureAndData): Uint8Array;
    toProtoMsg(message: SignatureAndData): SignatureAndDataProtoMsg;
};
export declare const TimestampedSignatureData: {
    typeUrl: string;
    aminoType: string;
    encode(message: TimestampedSignatureData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TimestampedSignatureData;
    fromJSON(object: any): TimestampedSignatureData;
    toJSON(message: TimestampedSignatureData): unknown;
    fromPartial(object: DeepPartial<TimestampedSignatureData>): TimestampedSignatureData;
    fromAmino(object: TimestampedSignatureDataAmino): TimestampedSignatureData;
    toAmino(message: TimestampedSignatureData): TimestampedSignatureDataAmino;
    fromAminoMsg(object: TimestampedSignatureDataAminoMsg): TimestampedSignatureData;
    toAminoMsg(message: TimestampedSignatureData): TimestampedSignatureDataAminoMsg;
    fromProtoMsg(message: TimestampedSignatureDataProtoMsg): TimestampedSignatureData;
    toProto(message: TimestampedSignatureData): Uint8Array;
    toProtoMsg(message: TimestampedSignatureData): TimestampedSignatureDataProtoMsg;
};
export declare const SignBytes: {
    typeUrl: string;
    aminoType: string;
    encode(message: SignBytes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignBytes;
    fromJSON(object: any): SignBytes;
    toJSON(message: SignBytes): unknown;
    fromPartial(object: DeepPartial<SignBytes>): SignBytes;
    fromAmino(object: SignBytesAmino): SignBytes;
    toAmino(message: SignBytes): SignBytesAmino;
    fromAminoMsg(object: SignBytesAminoMsg): SignBytes;
    toAminoMsg(message: SignBytes): SignBytesAminoMsg;
    fromProtoMsg(message: SignBytesProtoMsg): SignBytes;
    toProto(message: SignBytes): Uint8Array;
    toProtoMsg(message: SignBytes): SignBytesProtoMsg;
};
export declare const HeaderData: {
    typeUrl: string;
    aminoType: string;
    encode(message: HeaderData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HeaderData;
    fromJSON(object: any): HeaderData;
    toJSON(message: HeaderData): unknown;
    fromPartial(object: DeepPartial<HeaderData>): HeaderData;
    fromAmino(object: HeaderDataAmino): HeaderData;
    toAmino(message: HeaderData): HeaderDataAmino;
    fromAminoMsg(object: HeaderDataAminoMsg): HeaderData;
    toAminoMsg(message: HeaderData): HeaderDataAminoMsg;
    fromProtoMsg(message: HeaderDataProtoMsg): HeaderData;
    toProto(message: HeaderData): Uint8Array;
    toProtoMsg(message: HeaderData): HeaderDataProtoMsg;
};
export declare const ClientStateData: {
    typeUrl: string;
    aminoType: string;
    encode(message: ClientStateData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClientStateData;
    fromJSON(object: any): ClientStateData;
    toJSON(message: ClientStateData): unknown;
    fromPartial(object: DeepPartial<ClientStateData>): ClientStateData;
    fromAmino(object: ClientStateDataAmino): ClientStateData;
    toAmino(message: ClientStateData): ClientStateDataAmino;
    fromAminoMsg(object: ClientStateDataAminoMsg): ClientStateData;
    toAminoMsg(message: ClientStateData): ClientStateDataAminoMsg;
    fromProtoMsg(message: ClientStateDataProtoMsg): ClientStateData;
    toProto(message: ClientStateData): Uint8Array;
    toProtoMsg(message: ClientStateData): ClientStateDataProtoMsg;
};
export declare const ConsensusStateData: {
    typeUrl: string;
    aminoType: string;
    encode(message: ConsensusStateData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusStateData;
    fromJSON(object: any): ConsensusStateData;
    toJSON(message: ConsensusStateData): unknown;
    fromPartial(object: DeepPartial<ConsensusStateData>): ConsensusStateData;
    fromAmino(object: ConsensusStateDataAmino): ConsensusStateData;
    toAmino(message: ConsensusStateData): ConsensusStateDataAmino;
    fromAminoMsg(object: ConsensusStateDataAminoMsg): ConsensusStateData;
    toAminoMsg(message: ConsensusStateData): ConsensusStateDataAminoMsg;
    fromProtoMsg(message: ConsensusStateDataProtoMsg): ConsensusStateData;
    toProto(message: ConsensusStateData): Uint8Array;
    toProtoMsg(message: ConsensusStateData): ConsensusStateDataProtoMsg;
};
export declare const ConnectionStateData: {
    typeUrl: string;
    aminoType: string;
    encode(message: ConnectionStateData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionStateData;
    fromJSON(object: any): ConnectionStateData;
    toJSON(message: ConnectionStateData): unknown;
    fromPartial(object: DeepPartial<ConnectionStateData>): ConnectionStateData;
    fromAmino(object: ConnectionStateDataAmino): ConnectionStateData;
    toAmino(message: ConnectionStateData): ConnectionStateDataAmino;
    fromAminoMsg(object: ConnectionStateDataAminoMsg): ConnectionStateData;
    toAminoMsg(message: ConnectionStateData): ConnectionStateDataAminoMsg;
    fromProtoMsg(message: ConnectionStateDataProtoMsg): ConnectionStateData;
    toProto(message: ConnectionStateData): Uint8Array;
    toProtoMsg(message: ConnectionStateData): ConnectionStateDataProtoMsg;
};
export declare const ChannelStateData: {
    typeUrl: string;
    aminoType: string;
    encode(message: ChannelStateData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChannelStateData;
    fromJSON(object: any): ChannelStateData;
    toJSON(message: ChannelStateData): unknown;
    fromPartial(object: DeepPartial<ChannelStateData>): ChannelStateData;
    fromAmino(object: ChannelStateDataAmino): ChannelStateData;
    toAmino(message: ChannelStateData): ChannelStateDataAmino;
    fromAminoMsg(object: ChannelStateDataAminoMsg): ChannelStateData;
    toAminoMsg(message: ChannelStateData): ChannelStateDataAminoMsg;
    fromProtoMsg(message: ChannelStateDataProtoMsg): ChannelStateData;
    toProto(message: ChannelStateData): Uint8Array;
    toProtoMsg(message: ChannelStateData): ChannelStateDataProtoMsg;
};
export declare const PacketCommitmentData: {
    typeUrl: string;
    aminoType: string;
    encode(message: PacketCommitmentData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PacketCommitmentData;
    fromJSON(object: any): PacketCommitmentData;
    toJSON(message: PacketCommitmentData): unknown;
    fromPartial(object: DeepPartial<PacketCommitmentData>): PacketCommitmentData;
    fromAmino(object: PacketCommitmentDataAmino): PacketCommitmentData;
    toAmino(message: PacketCommitmentData): PacketCommitmentDataAmino;
    fromAminoMsg(object: PacketCommitmentDataAminoMsg): PacketCommitmentData;
    toAminoMsg(message: PacketCommitmentData): PacketCommitmentDataAminoMsg;
    fromProtoMsg(message: PacketCommitmentDataProtoMsg): PacketCommitmentData;
    toProto(message: PacketCommitmentData): Uint8Array;
    toProtoMsg(message: PacketCommitmentData): PacketCommitmentDataProtoMsg;
};
export declare const PacketAcknowledgementData: {
    typeUrl: string;
    aminoType: string;
    encode(message: PacketAcknowledgementData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PacketAcknowledgementData;
    fromJSON(object: any): PacketAcknowledgementData;
    toJSON(message: PacketAcknowledgementData): unknown;
    fromPartial(object: DeepPartial<PacketAcknowledgementData>): PacketAcknowledgementData;
    fromAmino(object: PacketAcknowledgementDataAmino): PacketAcknowledgementData;
    toAmino(message: PacketAcknowledgementData): PacketAcknowledgementDataAmino;
    fromAminoMsg(object: PacketAcknowledgementDataAminoMsg): PacketAcknowledgementData;
    toAminoMsg(message: PacketAcknowledgementData): PacketAcknowledgementDataAminoMsg;
    fromProtoMsg(message: PacketAcknowledgementDataProtoMsg): PacketAcknowledgementData;
    toProto(message: PacketAcknowledgementData): Uint8Array;
    toProtoMsg(message: PacketAcknowledgementData): PacketAcknowledgementDataProtoMsg;
};
export declare const PacketReceiptAbsenceData: {
    typeUrl: string;
    aminoType: string;
    encode(message: PacketReceiptAbsenceData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PacketReceiptAbsenceData;
    fromJSON(object: any): PacketReceiptAbsenceData;
    toJSON(message: PacketReceiptAbsenceData): unknown;
    fromPartial(object: DeepPartial<PacketReceiptAbsenceData>): PacketReceiptAbsenceData;
    fromAmino(object: PacketReceiptAbsenceDataAmino): PacketReceiptAbsenceData;
    toAmino(message: PacketReceiptAbsenceData): PacketReceiptAbsenceDataAmino;
    fromAminoMsg(object: PacketReceiptAbsenceDataAminoMsg): PacketReceiptAbsenceData;
    toAminoMsg(message: PacketReceiptAbsenceData): PacketReceiptAbsenceDataAminoMsg;
    fromProtoMsg(message: PacketReceiptAbsenceDataProtoMsg): PacketReceiptAbsenceData;
    toProto(message: PacketReceiptAbsenceData): Uint8Array;
    toProtoMsg(message: PacketReceiptAbsenceData): PacketReceiptAbsenceDataProtoMsg;
};
export declare const NextSequenceRecvData: {
    typeUrl: string;
    aminoType: string;
    encode(message: NextSequenceRecvData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NextSequenceRecvData;
    fromJSON(object: any): NextSequenceRecvData;
    toJSON(message: NextSequenceRecvData): unknown;
    fromPartial(object: DeepPartial<NextSequenceRecvData>): NextSequenceRecvData;
    fromAmino(object: NextSequenceRecvDataAmino): NextSequenceRecvData;
    toAmino(message: NextSequenceRecvData): NextSequenceRecvDataAmino;
    fromAminoMsg(object: NextSequenceRecvDataAminoMsg): NextSequenceRecvData;
    toAminoMsg(message: NextSequenceRecvData): NextSequenceRecvDataAminoMsg;
    fromProtoMsg(message: NextSequenceRecvDataProtoMsg): NextSequenceRecvData;
    toProto(message: NextSequenceRecvData): Uint8Array;
    toProtoMsg(message: NextSequenceRecvData): NextSequenceRecvDataProtoMsg;
};
