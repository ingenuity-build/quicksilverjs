/// <reference types="long" />
import * as _63 from "./applications/transfer/v1/genesis";
import * as _64 from "./applications/transfer/v1/query";
import * as _65 from "./applications/transfer/v1/transfer";
import * as _66 from "./applications/transfer/v1/tx";
import * as _67 from "./applications/transfer/v2/packet";
import * as _68 from "./core/channel/v1/channel";
import * as _69 from "./core/channel/v1/genesis";
import * as _70 from "./core/channel/v1/query";
import * as _71 from "./core/channel/v1/tx";
import * as _72 from "./core/client/v1/client";
import * as _73 from "./core/client/v1/genesis";
import * as _74 from "./core/client/v1/query";
import * as _75 from "./core/client/v1/tx";
import * as _76 from "./core/commitment/v1/commitment";
import * as _77 from "./core/connection/v1/connection";
import * as _78 from "./core/connection/v1/genesis";
import * as _79 from "./core/connection/v1/query";
import * as _80 from "./core/connection/v1/tx";
import * as _81 from "./lightclients/localhost/v1/localhost";
import * as _82 from "./lightclients/solomachine/v1/solomachine";
import * as _83 from "./lightclients/solomachine/v2/solomachine";
import * as _84 from "./lightclients/tendermint/v1/tendermint";
import * as _180 from "./applications/transfer/v1/query.lcd";
import * as _181 from "./core/channel/v1/query.lcd";
import * as _182 from "./core/client/v1/query.lcd";
import * as _183 from "./core/connection/v1/query.lcd";
import * as _184 from "./applications/transfer/v1/query.rpc.Query";
import * as _185 from "./core/channel/v1/query.rpc.Query";
import * as _186 from "./core/client/v1/query.rpc.Query";
import * as _187 from "./core/connection/v1/query.rpc.Query";
import * as _188 from "./applications/transfer/v1/tx.rpc.msg";
import * as _189 from "./core/channel/v1/tx.rpc.msg";
import * as _190 from "./core/client/v1/tx.rpc.msg";
import * as _191 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                Msg: typeof _188.Msg;
                Query: typeof _184.Query;
                QueryClientImpl: typeof _184.QueryClientImpl;
                LCDQueryClient: typeof _180.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _66.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _66.MsgTransfer): {
                            typeUrl: string;
                            value: _66.MsgTransfer;
                        };
                    };
                    toJSON: {
                        transfer(value: _66.MsgTransfer): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _66.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _66.MsgTransfer): {
                            typeUrl: string;
                            value: _66.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _66.MsgTransfer) => _66.MsgTransferAmino;
                        fromAmino: (object: _66.MsgTransferAmino) => _66.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _66.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgTransfer;
                    fromJSON(object: any): _66.MsgTransfer;
                    toJSON(message: _66.MsgTransfer): unknown;
                    fromPartial(object: {
                        source_port?: string;
                        source_channel?: string;
                        token?: {
                            denom?: string;
                            amount?: string;
                        };
                        sender?: string;
                        receiver?: string;
                        timeout_height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                        timeout_timestamp?: string | number | import("long").Long;
                    }): _66.MsgTransfer;
                    fromAmino(object: _66.MsgTransferAmino): _66.MsgTransfer;
                    toAmino(message: _66.MsgTransfer): _66.MsgTransferAmino;
                    fromAminoMsg(object: _66.MsgTransferAminoMsg): _66.MsgTransfer;
                    toAminoMsg(message: _66.MsgTransfer): _66.MsgTransferAminoMsg;
                    fromProtoMsg(message: _66.MsgTransferProtoMsg): _66.MsgTransfer;
                    toProto(message: _66.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _66.MsgTransfer): _66.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _66.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.MsgTransferResponse;
                    fromJSON(_: any): _66.MsgTransferResponse;
                    toJSON(_: _66.MsgTransferResponse): unknown;
                    fromPartial(_: {}): _66.MsgTransferResponse;
                    fromAmino(_: _66.MsgTransferResponseAmino): _66.MsgTransferResponse;
                    toAmino(_: _66.MsgTransferResponse): _66.MsgTransferResponseAmino;
                    fromAminoMsg(object: _66.MsgTransferResponseAminoMsg): _66.MsgTransferResponse;
                    toAminoMsg(message: _66.MsgTransferResponse): _66.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _66.MsgTransferResponseProtoMsg): _66.MsgTransferResponse;
                    toProto(message: _66.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _66.MsgTransferResponse): _66.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _65.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.DenomTrace;
                    fromJSON(object: any): _65.DenomTrace;
                    toJSON(message: _65.DenomTrace): unknown;
                    fromPartial(object: {
                        path?: string;
                        base_denom?: string;
                    }): _65.DenomTrace;
                    fromAmino(object: _65.DenomTraceAmino): _65.DenomTrace;
                    toAmino(message: _65.DenomTrace): _65.DenomTraceAmino;
                    fromAminoMsg(object: _65.DenomTraceAminoMsg): _65.DenomTrace;
                    toAminoMsg(message: _65.DenomTrace): _65.DenomTraceAminoMsg;
                    fromProtoMsg(message: _65.DenomTraceProtoMsg): _65.DenomTrace;
                    toProto(message: _65.DenomTrace): Uint8Array;
                    toProtoMsg(message: _65.DenomTrace): _65.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _65.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Params;
                    fromJSON(object: any): _65.Params;
                    toJSON(message: _65.Params): unknown;
                    fromPartial(object: {
                        send_enabled?: boolean;
                        receive_enabled?: boolean;
                    }): _65.Params;
                    fromAmino(object: _65.ParamsAmino): _65.Params;
                    toAmino(message: _65.Params): _65.ParamsAmino;
                    fromAminoMsg(object: _65.ParamsAminoMsg): _65.Params;
                    toAminoMsg(message: _65.Params): _65.ParamsAminoMsg;
                    fromProtoMsg(message: _65.ParamsProtoMsg): _65.Params;
                    toProto(message: _65.Params): Uint8Array;
                    toProtoMsg(message: _65.Params): _65.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _64.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryDenomTraceRequest;
                    fromJSON(object: any): _64.QueryDenomTraceRequest;
                    toJSON(message: _64.QueryDenomTraceRequest): unknown;
                    fromPartial(object: {
                        hash?: string;
                    }): _64.QueryDenomTraceRequest;
                    fromAmino(object: _64.QueryDenomTraceRequestAmino): _64.QueryDenomTraceRequest;
                    toAmino(message: _64.QueryDenomTraceRequest): _64.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _64.QueryDenomTraceRequestAminoMsg): _64.QueryDenomTraceRequest;
                    toAminoMsg(message: _64.QueryDenomTraceRequest): _64.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _64.QueryDenomTraceRequestProtoMsg): _64.QueryDenomTraceRequest;
                    toProto(message: _64.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _64.QueryDenomTraceRequest): _64.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _64.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryDenomTraceResponse;
                    fromJSON(object: any): _64.QueryDenomTraceResponse;
                    toJSON(message: _64.QueryDenomTraceResponse): unknown;
                    fromPartial(object: {
                        denom_trace?: {
                            path?: string;
                            base_denom?: string;
                        };
                    }): _64.QueryDenomTraceResponse;
                    fromAmino(object: _64.QueryDenomTraceResponseAmino): _64.QueryDenomTraceResponse;
                    toAmino(message: _64.QueryDenomTraceResponse): _64.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _64.QueryDenomTraceResponseAminoMsg): _64.QueryDenomTraceResponse;
                    toAminoMsg(message: _64.QueryDenomTraceResponse): _64.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _64.QueryDenomTraceResponseProtoMsg): _64.QueryDenomTraceResponse;
                    toProto(message: _64.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _64.QueryDenomTraceResponse): _64.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _64.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryDenomTracesRequest;
                    fromJSON(object: any): _64.QueryDenomTracesRequest;
                    toJSON(message: _64.QueryDenomTracesRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").Long;
                            limit?: string | number | import("long").Long;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _64.QueryDenomTracesRequest;
                    fromAmino(object: _64.QueryDenomTracesRequestAmino): _64.QueryDenomTracesRequest;
                    toAmino(message: _64.QueryDenomTracesRequest): _64.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _64.QueryDenomTracesRequestAminoMsg): _64.QueryDenomTracesRequest;
                    toAminoMsg(message: _64.QueryDenomTracesRequest): _64.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _64.QueryDenomTracesRequestProtoMsg): _64.QueryDenomTracesRequest;
                    toProto(message: _64.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _64.QueryDenomTracesRequest): _64.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _64.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryDenomTracesResponse;
                    fromJSON(object: any): _64.QueryDenomTracesResponse;
                    toJSON(message: _64.QueryDenomTracesResponse): unknown;
                    fromPartial(object: {
                        denom_traces?: {
                            path?: string;
                            base_denom?: string;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: string | number | import("long").Long;
                        };
                    }): _64.QueryDenomTracesResponse;
                    fromAmino(object: _64.QueryDenomTracesResponseAmino): _64.QueryDenomTracesResponse;
                    toAmino(message: _64.QueryDenomTracesResponse): _64.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _64.QueryDenomTracesResponseAminoMsg): _64.QueryDenomTracesResponse;
                    toAminoMsg(message: _64.QueryDenomTracesResponse): _64.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _64.QueryDenomTracesResponseProtoMsg): _64.QueryDenomTracesResponse;
                    toProto(message: _64.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _64.QueryDenomTracesResponse): _64.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _64.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryParamsRequest;
                    fromJSON(_: any): _64.QueryParamsRequest;
                    toJSON(_: _64.QueryParamsRequest): unknown;
                    fromPartial(_: {}): _64.QueryParamsRequest;
                    fromAmino(_: _64.QueryParamsRequestAmino): _64.QueryParamsRequest;
                    toAmino(_: _64.QueryParamsRequest): _64.QueryParamsRequestAmino;
                    fromAminoMsg(object: _64.QueryParamsRequestAminoMsg): _64.QueryParamsRequest;
                    toAminoMsg(message: _64.QueryParamsRequest): _64.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _64.QueryParamsRequestProtoMsg): _64.QueryParamsRequest;
                    toProto(message: _64.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _64.QueryParamsRequest): _64.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _64.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryParamsResponse;
                    fromJSON(object: any): _64.QueryParamsResponse;
                    toJSON(message: _64.QueryParamsResponse): unknown;
                    fromPartial(object: {
                        params?: {
                            send_enabled?: boolean;
                            receive_enabled?: boolean;
                        };
                    }): _64.QueryParamsResponse;
                    fromAmino(object: _64.QueryParamsResponseAmino): _64.QueryParamsResponse;
                    toAmino(message: _64.QueryParamsResponse): _64.QueryParamsResponseAmino;
                    fromAminoMsg(object: _64.QueryParamsResponseAminoMsg): _64.QueryParamsResponse;
                    toAminoMsg(message: _64.QueryParamsResponse): _64.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _64.QueryParamsResponseProtoMsg): _64.QueryParamsResponse;
                    toProto(message: _64.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _64.QueryParamsResponse): _64.QueryParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _63.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.GenesisState;
                    fromJSON(object: any): _63.GenesisState;
                    toJSON(message: _63.GenesisState): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        denom_traces?: {
                            path?: string;
                            base_denom?: string;
                        }[];
                        params?: {
                            send_enabled?: boolean;
                            receive_enabled?: boolean;
                        };
                    }): _63.GenesisState;
                    fromAmino(object: _63.GenesisStateAmino): _63.GenesisState;
                    toAmino(message: _63.GenesisState): _63.GenesisStateAmino;
                    fromAminoMsg(object: _63.GenesisStateAminoMsg): _63.GenesisState;
                    toAminoMsg(message: _63.GenesisState): _63.GenesisStateAminoMsg;
                    fromProtoMsg(message: _63.GenesisStateProtoMsg): _63.GenesisState;
                    toProto(message: _63.GenesisState): Uint8Array;
                    toProtoMsg(message: _63.GenesisState): _63.GenesisStateProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _67.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.FungibleTokenPacketData;
                    fromJSON(object: any): _67.FungibleTokenPacketData;
                    toJSON(message: _67.FungibleTokenPacketData): unknown;
                    fromPartial(object: {
                        denom?: string;
                        amount?: string;
                        sender?: string;
                        receiver?: string;
                    }): _67.FungibleTokenPacketData;
                    fromAmino(object: _67.FungibleTokenPacketDataAmino): _67.FungibleTokenPacketData;
                    toAmino(message: _67.FungibleTokenPacketData): _67.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _67.FungibleTokenPacketDataAminoMsg): _67.FungibleTokenPacketData;
                    toAminoMsg(message: _67.FungibleTokenPacketData): _67.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _67.FungibleTokenPacketDataProtoMsg): _67.FungibleTokenPacketData;
                    toProto(message: _67.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _67.FungibleTokenPacketData): _67.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                Msg: typeof _189.Msg;
                Query: typeof _185.Query;
                QueryClientImpl: typeof _185.QueryClientImpl;
                LCDQueryClient: typeof _181.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _71.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _71.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _71.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _71.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _71.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _71.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _71.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _71.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _71.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _71.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _71.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _71.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _71.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _71.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _71.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _71.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _71.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _71.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _71.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _71.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _71.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _71.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _71.MsgRecvPacket): {
                            typeUrl: string;
                            value: _71.MsgRecvPacket;
                        };
                        timeout(value: _71.MsgTimeout): {
                            typeUrl: string;
                            value: _71.MsgTimeout;
                        };
                        timeoutOnClose(value: _71.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _71.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _71.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _71.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _71.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenTry(value: _71.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenAck(value: _71.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenConfirm(value: _71.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseInit(value: _71.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseConfirm(value: _71.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        recvPacket(value: _71.MsgRecvPacket): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeout(value: _71.MsgTimeout): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeoutOnClose(value: _71.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: unknown;
                        };
                        acknowledgement(value: _71.MsgAcknowledgement): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _71.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _71.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _71.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _71.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _71.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _71.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _71.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _71.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _71.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _71.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _71.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _71.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _71.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _71.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _71.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _71.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _71.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _71.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _71.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _71.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _71.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _71.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _71.MsgRecvPacket): {
                            typeUrl: string;
                            value: _71.MsgRecvPacket;
                        };
                        timeout(value: _71.MsgTimeout): {
                            typeUrl: string;
                            value: _71.MsgTimeout;
                        };
                        timeoutOnClose(value: _71.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _71.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _71.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _71.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _71.MsgChannelOpenInit) => _71.MsgChannelOpenInitAmino;
                        fromAmino: (object: _71.MsgChannelOpenInitAmino) => _71.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _71.MsgChannelOpenTry) => _71.MsgChannelOpenTryAmino;
                        fromAmino: (object: _71.MsgChannelOpenTryAmino) => _71.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _71.MsgChannelOpenAck) => _71.MsgChannelOpenAckAmino;
                        fromAmino: (object: _71.MsgChannelOpenAckAmino) => _71.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _71.MsgChannelOpenConfirm) => _71.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _71.MsgChannelOpenConfirmAmino) => _71.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _71.MsgChannelCloseInit) => _71.MsgChannelCloseInitAmino;
                        fromAmino: (object: _71.MsgChannelCloseInitAmino) => _71.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _71.MsgChannelCloseConfirm) => _71.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _71.MsgChannelCloseConfirmAmino) => _71.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _71.MsgRecvPacket) => _71.MsgRecvPacketAmino;
                        fromAmino: (object: _71.MsgRecvPacketAmino) => _71.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _71.MsgTimeout) => _71.MsgTimeoutAmino;
                        fromAmino: (object: _71.MsgTimeoutAmino) => _71.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _71.MsgTimeoutOnClose) => _71.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _71.MsgTimeoutOnCloseAmino) => _71.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _71.MsgAcknowledgement) => _71.MsgAcknowledgementAmino;
                        fromAmino: (object: _71.MsgAcknowledgementAmino) => _71.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _71.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgChannelOpenInit;
                    fromJSON(object: any): _71.MsgChannelOpenInit;
                    toJSON(message: _71.MsgChannelOpenInit): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel?: {
                            state?: _68.State;
                            ordering?: _68.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                        };
                        signer?: string;
                    }): _71.MsgChannelOpenInit;
                    fromAmino(object: _71.MsgChannelOpenInitAmino): _71.MsgChannelOpenInit;
                    toAmino(message: _71.MsgChannelOpenInit): _71.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _71.MsgChannelOpenInitAminoMsg): _71.MsgChannelOpenInit;
                    toAminoMsg(message: _71.MsgChannelOpenInit): _71.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _71.MsgChannelOpenInitProtoMsg): _71.MsgChannelOpenInit;
                    toProto(message: _71.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _71.MsgChannelOpenInit): _71.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _71.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _71.MsgChannelOpenInitResponse;
                    toJSON(_: _71.MsgChannelOpenInitResponse): unknown;
                    fromPartial(_: {}): _71.MsgChannelOpenInitResponse;
                    fromAmino(_: _71.MsgChannelOpenInitResponseAmino): _71.MsgChannelOpenInitResponse;
                    toAmino(_: _71.MsgChannelOpenInitResponse): _71.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _71.MsgChannelOpenInitResponseAminoMsg): _71.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _71.MsgChannelOpenInitResponse): _71.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _71.MsgChannelOpenInitResponseProtoMsg): _71.MsgChannelOpenInitResponse;
                    toProto(message: _71.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _71.MsgChannelOpenInitResponse): _71.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _71.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgChannelOpenTry;
                    fromJSON(object: any): _71.MsgChannelOpenTry;
                    toJSON(message: _71.MsgChannelOpenTry): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        previous_channel_id?: string;
                        channel?: {
                            state?: _68.State;
                            ordering?: _68.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                        };
                        counterparty_version?: string;
                        proof_init?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                        signer?: string;
                    }): _71.MsgChannelOpenTry;
                    fromAmino(object: _71.MsgChannelOpenTryAmino): _71.MsgChannelOpenTry;
                    toAmino(message: _71.MsgChannelOpenTry): _71.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _71.MsgChannelOpenTryAminoMsg): _71.MsgChannelOpenTry;
                    toAminoMsg(message: _71.MsgChannelOpenTry): _71.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _71.MsgChannelOpenTryProtoMsg): _71.MsgChannelOpenTry;
                    toProto(message: _71.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _71.MsgChannelOpenTry): _71.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _71.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _71.MsgChannelOpenTryResponse;
                    toJSON(_: _71.MsgChannelOpenTryResponse): unknown;
                    fromPartial(_: {}): _71.MsgChannelOpenTryResponse;
                    fromAmino(_: _71.MsgChannelOpenTryResponseAmino): _71.MsgChannelOpenTryResponse;
                    toAmino(_: _71.MsgChannelOpenTryResponse): _71.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _71.MsgChannelOpenTryResponseAminoMsg): _71.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _71.MsgChannelOpenTryResponse): _71.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _71.MsgChannelOpenTryResponseProtoMsg): _71.MsgChannelOpenTryResponse;
                    toProto(message: _71.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _71.MsgChannelOpenTryResponse): _71.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _71.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgChannelOpenAck;
                    fromJSON(object: any): _71.MsgChannelOpenAck;
                    toJSON(message: _71.MsgChannelOpenAck): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        counterparty_channel_id?: string;
                        counterparty_version?: string;
                        proof_try?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                        signer?: string;
                    }): _71.MsgChannelOpenAck;
                    fromAmino(object: _71.MsgChannelOpenAckAmino): _71.MsgChannelOpenAck;
                    toAmino(message: _71.MsgChannelOpenAck): _71.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _71.MsgChannelOpenAckAminoMsg): _71.MsgChannelOpenAck;
                    toAminoMsg(message: _71.MsgChannelOpenAck): _71.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _71.MsgChannelOpenAckProtoMsg): _71.MsgChannelOpenAck;
                    toProto(message: _71.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _71.MsgChannelOpenAck): _71.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _71.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _71.MsgChannelOpenAckResponse;
                    toJSON(_: _71.MsgChannelOpenAckResponse): unknown;
                    fromPartial(_: {}): _71.MsgChannelOpenAckResponse;
                    fromAmino(_: _71.MsgChannelOpenAckResponseAmino): _71.MsgChannelOpenAckResponse;
                    toAmino(_: _71.MsgChannelOpenAckResponse): _71.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _71.MsgChannelOpenAckResponseAminoMsg): _71.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _71.MsgChannelOpenAckResponse): _71.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _71.MsgChannelOpenAckResponseProtoMsg): _71.MsgChannelOpenAckResponse;
                    toProto(message: _71.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _71.MsgChannelOpenAckResponse): _71.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _71.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgChannelOpenConfirm;
                    fromJSON(object: any): _71.MsgChannelOpenConfirm;
                    toJSON(message: _71.MsgChannelOpenConfirm): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        proof_ack?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                        signer?: string;
                    }): _71.MsgChannelOpenConfirm;
                    fromAmino(object: _71.MsgChannelOpenConfirmAmino): _71.MsgChannelOpenConfirm;
                    toAmino(message: _71.MsgChannelOpenConfirm): _71.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _71.MsgChannelOpenConfirmAminoMsg): _71.MsgChannelOpenConfirm;
                    toAminoMsg(message: _71.MsgChannelOpenConfirm): _71.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _71.MsgChannelOpenConfirmProtoMsg): _71.MsgChannelOpenConfirm;
                    toProto(message: _71.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _71.MsgChannelOpenConfirm): _71.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _71.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _71.MsgChannelOpenConfirmResponse;
                    toJSON(_: _71.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial(_: {}): _71.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _71.MsgChannelOpenConfirmResponseAmino): _71.MsgChannelOpenConfirmResponse;
                    toAmino(_: _71.MsgChannelOpenConfirmResponse): _71.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _71.MsgChannelOpenConfirmResponseAminoMsg): _71.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _71.MsgChannelOpenConfirmResponse): _71.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _71.MsgChannelOpenConfirmResponseProtoMsg): _71.MsgChannelOpenConfirmResponse;
                    toProto(message: _71.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _71.MsgChannelOpenConfirmResponse): _71.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _71.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgChannelCloseInit;
                    fromJSON(object: any): _71.MsgChannelCloseInit;
                    toJSON(message: _71.MsgChannelCloseInit): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        signer?: string;
                    }): _71.MsgChannelCloseInit;
                    fromAmino(object: _71.MsgChannelCloseInitAmino): _71.MsgChannelCloseInit;
                    toAmino(message: _71.MsgChannelCloseInit): _71.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _71.MsgChannelCloseInitAminoMsg): _71.MsgChannelCloseInit;
                    toAminoMsg(message: _71.MsgChannelCloseInit): _71.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _71.MsgChannelCloseInitProtoMsg): _71.MsgChannelCloseInit;
                    toProto(message: _71.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _71.MsgChannelCloseInit): _71.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _71.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _71.MsgChannelCloseInitResponse;
                    toJSON(_: _71.MsgChannelCloseInitResponse): unknown;
                    fromPartial(_: {}): _71.MsgChannelCloseInitResponse;
                    fromAmino(_: _71.MsgChannelCloseInitResponseAmino): _71.MsgChannelCloseInitResponse;
                    toAmino(_: _71.MsgChannelCloseInitResponse): _71.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _71.MsgChannelCloseInitResponseAminoMsg): _71.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _71.MsgChannelCloseInitResponse): _71.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _71.MsgChannelCloseInitResponseProtoMsg): _71.MsgChannelCloseInitResponse;
                    toProto(message: _71.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _71.MsgChannelCloseInitResponse): _71.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _71.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgChannelCloseConfirm;
                    fromJSON(object: any): _71.MsgChannelCloseConfirm;
                    toJSON(message: _71.MsgChannelCloseConfirm): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        proof_init?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                        signer?: string;
                    }): _71.MsgChannelCloseConfirm;
                    fromAmino(object: _71.MsgChannelCloseConfirmAmino): _71.MsgChannelCloseConfirm;
                    toAmino(message: _71.MsgChannelCloseConfirm): _71.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _71.MsgChannelCloseConfirmAminoMsg): _71.MsgChannelCloseConfirm;
                    toAminoMsg(message: _71.MsgChannelCloseConfirm): _71.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _71.MsgChannelCloseConfirmProtoMsg): _71.MsgChannelCloseConfirm;
                    toProto(message: _71.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _71.MsgChannelCloseConfirm): _71.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _71.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _71.MsgChannelCloseConfirmResponse;
                    toJSON(_: _71.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial(_: {}): _71.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _71.MsgChannelCloseConfirmResponseAmino): _71.MsgChannelCloseConfirmResponse;
                    toAmino(_: _71.MsgChannelCloseConfirmResponse): _71.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _71.MsgChannelCloseConfirmResponseAminoMsg): _71.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _71.MsgChannelCloseConfirmResponse): _71.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _71.MsgChannelCloseConfirmResponseProtoMsg): _71.MsgChannelCloseConfirmResponse;
                    toProto(message: _71.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _71.MsgChannelCloseConfirmResponse): _71.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _71.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgRecvPacket;
                    fromJSON(object: any): _71.MsgRecvPacket;
                    toJSON(message: _71.MsgRecvPacket): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: string | number | import("long").Long;
                            source_port?: string;
                            source_channel?: string;
                            destination_port?: string;
                            destination_channel?: string;
                            data?: Uint8Array;
                            timeout_height?: {
                                revision_number?: string | number | import("long").Long;
                                revision_height?: string | number | import("long").Long;
                            };
                            timeout_timestamp?: string | number | import("long").Long;
                        };
                        proof_commitment?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                        signer?: string;
                    }): _71.MsgRecvPacket;
                    fromAmino(object: _71.MsgRecvPacketAmino): _71.MsgRecvPacket;
                    toAmino(message: _71.MsgRecvPacket): _71.MsgRecvPacketAmino;
                    fromAminoMsg(object: _71.MsgRecvPacketAminoMsg): _71.MsgRecvPacket;
                    toAminoMsg(message: _71.MsgRecvPacket): _71.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _71.MsgRecvPacketProtoMsg): _71.MsgRecvPacket;
                    toProto(message: _71.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _71.MsgRecvPacket): _71.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _71.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgRecvPacketResponse;
                    fromJSON(_: any): _71.MsgRecvPacketResponse;
                    toJSON(_: _71.MsgRecvPacketResponse): unknown;
                    fromPartial(_: {}): _71.MsgRecvPacketResponse;
                    fromAmino(_: _71.MsgRecvPacketResponseAmino): _71.MsgRecvPacketResponse;
                    toAmino(_: _71.MsgRecvPacketResponse): _71.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _71.MsgRecvPacketResponseAminoMsg): _71.MsgRecvPacketResponse;
                    toAminoMsg(message: _71.MsgRecvPacketResponse): _71.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _71.MsgRecvPacketResponseProtoMsg): _71.MsgRecvPacketResponse;
                    toProto(message: _71.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _71.MsgRecvPacketResponse): _71.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _71.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgTimeout;
                    fromJSON(object: any): _71.MsgTimeout;
                    toJSON(message: _71.MsgTimeout): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: string | number | import("long").Long;
                            source_port?: string;
                            source_channel?: string;
                            destination_port?: string;
                            destination_channel?: string;
                            data?: Uint8Array;
                            timeout_height?: {
                                revision_number?: string | number | import("long").Long;
                                revision_height?: string | number | import("long").Long;
                            };
                            timeout_timestamp?: string | number | import("long").Long;
                        };
                        proof_unreceived?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                        next_sequence_recv?: string | number | import("long").Long;
                        signer?: string;
                    }): _71.MsgTimeout;
                    fromAmino(object: _71.MsgTimeoutAmino): _71.MsgTimeout;
                    toAmino(message: _71.MsgTimeout): _71.MsgTimeoutAmino;
                    fromAminoMsg(object: _71.MsgTimeoutAminoMsg): _71.MsgTimeout;
                    toAminoMsg(message: _71.MsgTimeout): _71.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _71.MsgTimeoutProtoMsg): _71.MsgTimeout;
                    toProto(message: _71.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _71.MsgTimeout): _71.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _71.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgTimeoutResponse;
                    fromJSON(_: any): _71.MsgTimeoutResponse;
                    toJSON(_: _71.MsgTimeoutResponse): unknown;
                    fromPartial(_: {}): _71.MsgTimeoutResponse;
                    fromAmino(_: _71.MsgTimeoutResponseAmino): _71.MsgTimeoutResponse;
                    toAmino(_: _71.MsgTimeoutResponse): _71.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _71.MsgTimeoutResponseAminoMsg): _71.MsgTimeoutResponse;
                    toAminoMsg(message: _71.MsgTimeoutResponse): _71.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _71.MsgTimeoutResponseProtoMsg): _71.MsgTimeoutResponse;
                    toProto(message: _71.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _71.MsgTimeoutResponse): _71.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _71.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgTimeoutOnClose;
                    fromJSON(object: any): _71.MsgTimeoutOnClose;
                    toJSON(message: _71.MsgTimeoutOnClose): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: string | number | import("long").Long;
                            source_port?: string;
                            source_channel?: string;
                            destination_port?: string;
                            destination_channel?: string;
                            data?: Uint8Array;
                            timeout_height?: {
                                revision_number?: string | number | import("long").Long;
                                revision_height?: string | number | import("long").Long;
                            };
                            timeout_timestamp?: string | number | import("long").Long;
                        };
                        proof_unreceived?: Uint8Array;
                        proof_close?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                        next_sequence_recv?: string | number | import("long").Long;
                        signer?: string;
                    }): _71.MsgTimeoutOnClose;
                    fromAmino(object: _71.MsgTimeoutOnCloseAmino): _71.MsgTimeoutOnClose;
                    toAmino(message: _71.MsgTimeoutOnClose): _71.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _71.MsgTimeoutOnCloseAminoMsg): _71.MsgTimeoutOnClose;
                    toAminoMsg(message: _71.MsgTimeoutOnClose): _71.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _71.MsgTimeoutOnCloseProtoMsg): _71.MsgTimeoutOnClose;
                    toProto(message: _71.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _71.MsgTimeoutOnClose): _71.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _71.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _71.MsgTimeoutOnCloseResponse;
                    toJSON(_: _71.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial(_: {}): _71.MsgTimeoutOnCloseResponse;
                    fromAmino(_: _71.MsgTimeoutOnCloseResponseAmino): _71.MsgTimeoutOnCloseResponse;
                    toAmino(_: _71.MsgTimeoutOnCloseResponse): _71.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _71.MsgTimeoutOnCloseResponseAminoMsg): _71.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _71.MsgTimeoutOnCloseResponse): _71.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _71.MsgTimeoutOnCloseResponseProtoMsg): _71.MsgTimeoutOnCloseResponse;
                    toProto(message: _71.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _71.MsgTimeoutOnCloseResponse): _71.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _71.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgAcknowledgement;
                    fromJSON(object: any): _71.MsgAcknowledgement;
                    toJSON(message: _71.MsgAcknowledgement): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: string | number | import("long").Long;
                            source_port?: string;
                            source_channel?: string;
                            destination_port?: string;
                            destination_channel?: string;
                            data?: Uint8Array;
                            timeout_height?: {
                                revision_number?: string | number | import("long").Long;
                                revision_height?: string | number | import("long").Long;
                            };
                            timeout_timestamp?: string | number | import("long").Long;
                        };
                        acknowledgement?: Uint8Array;
                        proof_acked?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                        signer?: string;
                    }): _71.MsgAcknowledgement;
                    fromAmino(object: _71.MsgAcknowledgementAmino): _71.MsgAcknowledgement;
                    toAmino(message: _71.MsgAcknowledgement): _71.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _71.MsgAcknowledgementAminoMsg): _71.MsgAcknowledgement;
                    toAminoMsg(message: _71.MsgAcknowledgement): _71.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _71.MsgAcknowledgementProtoMsg): _71.MsgAcknowledgement;
                    toProto(message: _71.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _71.MsgAcknowledgement): _71.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _71.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgAcknowledgementResponse;
                    fromJSON(_: any): _71.MsgAcknowledgementResponse;
                    toJSON(_: _71.MsgAcknowledgementResponse): unknown;
                    fromPartial(_: {}): _71.MsgAcknowledgementResponse;
                    fromAmino(_: _71.MsgAcknowledgementResponseAmino): _71.MsgAcknowledgementResponse;
                    toAmino(_: _71.MsgAcknowledgementResponse): _71.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _71.MsgAcknowledgementResponseAminoMsg): _71.MsgAcknowledgementResponse;
                    toAminoMsg(message: _71.MsgAcknowledgementResponse): _71.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _71.MsgAcknowledgementResponseProtoMsg): _71.MsgAcknowledgementResponse;
                    toProto(message: _71.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _71.MsgAcknowledgementResponse): _71.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _70.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryChannelRequest;
                    fromJSON(object: any): _70.QueryChannelRequest;
                    toJSON(message: _70.QueryChannelRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                    }): _70.QueryChannelRequest;
                    fromAmino(object: _70.QueryChannelRequestAmino): _70.QueryChannelRequest;
                    toAmino(message: _70.QueryChannelRequest): _70.QueryChannelRequestAmino;
                    fromAminoMsg(object: _70.QueryChannelRequestAminoMsg): _70.QueryChannelRequest;
                    toAminoMsg(message: _70.QueryChannelRequest): _70.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _70.QueryChannelRequestProtoMsg): _70.QueryChannelRequest;
                    toProto(message: _70.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _70.QueryChannelRequest): _70.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _70.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryChannelResponse;
                    fromJSON(object: any): _70.QueryChannelResponse;
                    toJSON(message: _70.QueryChannelResponse): unknown;
                    fromPartial(object: {
                        channel?: {
                            state?: _68.State;
                            ordering?: _68.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                        };
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                    }): _70.QueryChannelResponse;
                    fromAmino(object: _70.QueryChannelResponseAmino): _70.QueryChannelResponse;
                    toAmino(message: _70.QueryChannelResponse): _70.QueryChannelResponseAmino;
                    fromAminoMsg(object: _70.QueryChannelResponseAminoMsg): _70.QueryChannelResponse;
                    toAminoMsg(message: _70.QueryChannelResponse): _70.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _70.QueryChannelResponseProtoMsg): _70.QueryChannelResponse;
                    toProto(message: _70.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _70.QueryChannelResponse): _70.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _70.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryChannelsRequest;
                    fromJSON(object: any): _70.QueryChannelsRequest;
                    toJSON(message: _70.QueryChannelsRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").Long;
                            limit?: string | number | import("long").Long;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _70.QueryChannelsRequest;
                    fromAmino(object: _70.QueryChannelsRequestAmino): _70.QueryChannelsRequest;
                    toAmino(message: _70.QueryChannelsRequest): _70.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _70.QueryChannelsRequestAminoMsg): _70.QueryChannelsRequest;
                    toAminoMsg(message: _70.QueryChannelsRequest): _70.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _70.QueryChannelsRequestProtoMsg): _70.QueryChannelsRequest;
                    toProto(message: _70.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _70.QueryChannelsRequest): _70.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _70.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryChannelsResponse;
                    fromJSON(object: any): _70.QueryChannelsResponse;
                    toJSON(message: _70.QueryChannelsResponse): unknown;
                    fromPartial(object: {
                        channels?: {
                            state?: _68.State;
                            ordering?: _68.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                            port_id?: string;
                            channel_id?: string;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: string | number | import("long").Long;
                        };
                        height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                    }): _70.QueryChannelsResponse;
                    fromAmino(object: _70.QueryChannelsResponseAmino): _70.QueryChannelsResponse;
                    toAmino(message: _70.QueryChannelsResponse): _70.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _70.QueryChannelsResponseAminoMsg): _70.QueryChannelsResponse;
                    toAminoMsg(message: _70.QueryChannelsResponse): _70.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _70.QueryChannelsResponseProtoMsg): _70.QueryChannelsResponse;
                    toProto(message: _70.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _70.QueryChannelsResponse): _70.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _70.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _70.QueryConnectionChannelsRequest;
                    toJSON(message: _70.QueryConnectionChannelsRequest): unknown;
                    fromPartial(object: {
                        connection?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").Long;
                            limit?: string | number | import("long").Long;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _70.QueryConnectionChannelsRequest;
                    fromAmino(object: _70.QueryConnectionChannelsRequestAmino): _70.QueryConnectionChannelsRequest;
                    toAmino(message: _70.QueryConnectionChannelsRequest): _70.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _70.QueryConnectionChannelsRequestAminoMsg): _70.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _70.QueryConnectionChannelsRequest): _70.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _70.QueryConnectionChannelsRequestProtoMsg): _70.QueryConnectionChannelsRequest;
                    toProto(message: _70.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _70.QueryConnectionChannelsRequest): _70.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _70.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _70.QueryConnectionChannelsResponse;
                    toJSON(message: _70.QueryConnectionChannelsResponse): unknown;
                    fromPartial(object: {
                        channels?: {
                            state?: _68.State;
                            ordering?: _68.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                            port_id?: string;
                            channel_id?: string;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: string | number | import("long").Long;
                        };
                        height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                    }): _70.QueryConnectionChannelsResponse;
                    fromAmino(object: _70.QueryConnectionChannelsResponseAmino): _70.QueryConnectionChannelsResponse;
                    toAmino(message: _70.QueryConnectionChannelsResponse): _70.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _70.QueryConnectionChannelsResponseAminoMsg): _70.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _70.QueryConnectionChannelsResponse): _70.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _70.QueryConnectionChannelsResponseProtoMsg): _70.QueryConnectionChannelsResponse;
                    toProto(message: _70.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _70.QueryConnectionChannelsResponse): _70.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _70.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryChannelClientStateRequest;
                    fromJSON(object: any): _70.QueryChannelClientStateRequest;
                    toJSON(message: _70.QueryChannelClientStateRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                    }): _70.QueryChannelClientStateRequest;
                    fromAmino(object: _70.QueryChannelClientStateRequestAmino): _70.QueryChannelClientStateRequest;
                    toAmino(message: _70.QueryChannelClientStateRequest): _70.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _70.QueryChannelClientStateRequestAminoMsg): _70.QueryChannelClientStateRequest;
                    toAminoMsg(message: _70.QueryChannelClientStateRequest): _70.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _70.QueryChannelClientStateRequestProtoMsg): _70.QueryChannelClientStateRequest;
                    toProto(message: _70.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _70.QueryChannelClientStateRequest): _70.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _70.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryChannelClientStateResponse;
                    fromJSON(object: any): _70.QueryChannelClientStateResponse;
                    toJSON(message: _70.QueryChannelClientStateResponse): unknown;
                    fromPartial(object: {
                        identified_client_state?: {
                            client_id?: string;
                            client_state?: {
                                $typeUrl?: string;
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                    }): _70.QueryChannelClientStateResponse;
                    fromAmino(object: _70.QueryChannelClientStateResponseAmino): _70.QueryChannelClientStateResponse;
                    toAmino(message: _70.QueryChannelClientStateResponse): _70.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _70.QueryChannelClientStateResponseAminoMsg): _70.QueryChannelClientStateResponse;
                    toAminoMsg(message: _70.QueryChannelClientStateResponse): _70.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _70.QueryChannelClientStateResponseProtoMsg): _70.QueryChannelClientStateResponse;
                    toProto(message: _70.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _70.QueryChannelClientStateResponse): _70.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _70.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _70.QueryChannelConsensusStateRequest;
                    toJSON(message: _70.QueryChannelConsensusStateRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        revision_number?: string | number | import("long").Long;
                        revision_height?: string | number | import("long").Long;
                    }): _70.QueryChannelConsensusStateRequest;
                    fromAmino(object: _70.QueryChannelConsensusStateRequestAmino): _70.QueryChannelConsensusStateRequest;
                    toAmino(message: _70.QueryChannelConsensusStateRequest): _70.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _70.QueryChannelConsensusStateRequestAminoMsg): _70.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _70.QueryChannelConsensusStateRequest): _70.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _70.QueryChannelConsensusStateRequestProtoMsg): _70.QueryChannelConsensusStateRequest;
                    toProto(message: _70.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _70.QueryChannelConsensusStateRequest): _70.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _70.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _70.QueryChannelConsensusStateResponse;
                    toJSON(message: _70.QueryChannelConsensusStateResponse): unknown;
                    fromPartial(object: {
                        consensus_state?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        client_id?: string;
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                    }): _70.QueryChannelConsensusStateResponse;
                    fromAmino(object: _70.QueryChannelConsensusStateResponseAmino): _70.QueryChannelConsensusStateResponse;
                    toAmino(message: _70.QueryChannelConsensusStateResponse): _70.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _70.QueryChannelConsensusStateResponseAminoMsg): _70.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _70.QueryChannelConsensusStateResponse): _70.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _70.QueryChannelConsensusStateResponseProtoMsg): _70.QueryChannelConsensusStateResponse;
                    toProto(message: _70.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _70.QueryChannelConsensusStateResponse): _70.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _70.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _70.QueryPacketCommitmentRequest;
                    toJSON(message: _70.QueryPacketCommitmentRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        sequence?: string | number | import("long").Long;
                    }): _70.QueryPacketCommitmentRequest;
                    fromAmino(object: _70.QueryPacketCommitmentRequestAmino): _70.QueryPacketCommitmentRequest;
                    toAmino(message: _70.QueryPacketCommitmentRequest): _70.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _70.QueryPacketCommitmentRequestAminoMsg): _70.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _70.QueryPacketCommitmentRequest): _70.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _70.QueryPacketCommitmentRequestProtoMsg): _70.QueryPacketCommitmentRequest;
                    toProto(message: _70.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _70.QueryPacketCommitmentRequest): _70.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _70.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _70.QueryPacketCommitmentResponse;
                    toJSON(message: _70.QueryPacketCommitmentResponse): unknown;
                    fromPartial(object: {
                        commitment?: Uint8Array;
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                    }): _70.QueryPacketCommitmentResponse;
                    fromAmino(object: _70.QueryPacketCommitmentResponseAmino): _70.QueryPacketCommitmentResponse;
                    toAmino(message: _70.QueryPacketCommitmentResponse): _70.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _70.QueryPacketCommitmentResponseAminoMsg): _70.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _70.QueryPacketCommitmentResponse): _70.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _70.QueryPacketCommitmentResponseProtoMsg): _70.QueryPacketCommitmentResponse;
                    toProto(message: _70.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _70.QueryPacketCommitmentResponse): _70.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _70.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _70.QueryPacketCommitmentsRequest;
                    toJSON(message: _70.QueryPacketCommitmentsRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").Long;
                            limit?: string | number | import("long").Long;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _70.QueryPacketCommitmentsRequest;
                    fromAmino(object: _70.QueryPacketCommitmentsRequestAmino): _70.QueryPacketCommitmentsRequest;
                    toAmino(message: _70.QueryPacketCommitmentsRequest): _70.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _70.QueryPacketCommitmentsRequestAminoMsg): _70.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _70.QueryPacketCommitmentsRequest): _70.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _70.QueryPacketCommitmentsRequestProtoMsg): _70.QueryPacketCommitmentsRequest;
                    toProto(message: _70.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _70.QueryPacketCommitmentsRequest): _70.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _70.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _70.QueryPacketCommitmentsResponse;
                    toJSON(message: _70.QueryPacketCommitmentsResponse): unknown;
                    fromPartial(object: {
                        commitments?: {
                            port_id?: string;
                            channel_id?: string;
                            sequence?: string | number | import("long").Long;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: string | number | import("long").Long;
                        };
                        height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                    }): _70.QueryPacketCommitmentsResponse;
                    fromAmino(object: _70.QueryPacketCommitmentsResponseAmino): _70.QueryPacketCommitmentsResponse;
                    toAmino(message: _70.QueryPacketCommitmentsResponse): _70.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _70.QueryPacketCommitmentsResponseAminoMsg): _70.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _70.QueryPacketCommitmentsResponse): _70.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _70.QueryPacketCommitmentsResponseProtoMsg): _70.QueryPacketCommitmentsResponse;
                    toProto(message: _70.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _70.QueryPacketCommitmentsResponse): _70.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _70.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryPacketReceiptRequest;
                    fromJSON(object: any): _70.QueryPacketReceiptRequest;
                    toJSON(message: _70.QueryPacketReceiptRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        sequence?: string | number | import("long").Long;
                    }): _70.QueryPacketReceiptRequest;
                    fromAmino(object: _70.QueryPacketReceiptRequestAmino): _70.QueryPacketReceiptRequest;
                    toAmino(message: _70.QueryPacketReceiptRequest): _70.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _70.QueryPacketReceiptRequestAminoMsg): _70.QueryPacketReceiptRequest;
                    toAminoMsg(message: _70.QueryPacketReceiptRequest): _70.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _70.QueryPacketReceiptRequestProtoMsg): _70.QueryPacketReceiptRequest;
                    toProto(message: _70.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _70.QueryPacketReceiptRequest): _70.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _70.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryPacketReceiptResponse;
                    fromJSON(object: any): _70.QueryPacketReceiptResponse;
                    toJSON(message: _70.QueryPacketReceiptResponse): unknown;
                    fromPartial(object: {
                        received?: boolean;
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                    }): _70.QueryPacketReceiptResponse;
                    fromAmino(object: _70.QueryPacketReceiptResponseAmino): _70.QueryPacketReceiptResponse;
                    toAmino(message: _70.QueryPacketReceiptResponse): _70.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _70.QueryPacketReceiptResponseAminoMsg): _70.QueryPacketReceiptResponse;
                    toAminoMsg(message: _70.QueryPacketReceiptResponse): _70.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _70.QueryPacketReceiptResponseProtoMsg): _70.QueryPacketReceiptResponse;
                    toProto(message: _70.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _70.QueryPacketReceiptResponse): _70.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _70.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _70.QueryPacketAcknowledgementRequest;
                    toJSON(message: _70.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        sequence?: string | number | import("long").Long;
                    }): _70.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _70.QueryPacketAcknowledgementRequestAmino): _70.QueryPacketAcknowledgementRequest;
                    toAmino(message: _70.QueryPacketAcknowledgementRequest): _70.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _70.QueryPacketAcknowledgementRequestAminoMsg): _70.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _70.QueryPacketAcknowledgementRequest): _70.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _70.QueryPacketAcknowledgementRequestProtoMsg): _70.QueryPacketAcknowledgementRequest;
                    toProto(message: _70.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _70.QueryPacketAcknowledgementRequest): _70.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _70.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _70.QueryPacketAcknowledgementResponse;
                    toJSON(message: _70.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial(object: {
                        acknowledgement?: Uint8Array;
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                    }): _70.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _70.QueryPacketAcknowledgementResponseAmino): _70.QueryPacketAcknowledgementResponse;
                    toAmino(message: _70.QueryPacketAcknowledgementResponse): _70.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _70.QueryPacketAcknowledgementResponseAminoMsg): _70.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _70.QueryPacketAcknowledgementResponse): _70.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _70.QueryPacketAcknowledgementResponseProtoMsg): _70.QueryPacketAcknowledgementResponse;
                    toProto(message: _70.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _70.QueryPacketAcknowledgementResponse): _70.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _70.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _70.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _70.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").Long;
                            limit?: string | number | import("long").Long;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                        packet_commitment_sequences?: (string | number | import("long").Long)[];
                    }): _70.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _70.QueryPacketAcknowledgementsRequestAmino): _70.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _70.QueryPacketAcknowledgementsRequest): _70.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _70.QueryPacketAcknowledgementsRequestAminoMsg): _70.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _70.QueryPacketAcknowledgementsRequest): _70.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _70.QueryPacketAcknowledgementsRequestProtoMsg): _70.QueryPacketAcknowledgementsRequest;
                    toProto(message: _70.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _70.QueryPacketAcknowledgementsRequest): _70.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _70.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _70.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _70.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial(object: {
                        acknowledgements?: {
                            port_id?: string;
                            channel_id?: string;
                            sequence?: string | number | import("long").Long;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: string | number | import("long").Long;
                        };
                        height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                    }): _70.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _70.QueryPacketAcknowledgementsResponseAmino): _70.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _70.QueryPacketAcknowledgementsResponse): _70.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _70.QueryPacketAcknowledgementsResponseAminoMsg): _70.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _70.QueryPacketAcknowledgementsResponse): _70.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _70.QueryPacketAcknowledgementsResponseProtoMsg): _70.QueryPacketAcknowledgementsResponse;
                    toProto(message: _70.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _70.QueryPacketAcknowledgementsResponse): _70.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _70.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _70.QueryUnreceivedPacketsRequest;
                    toJSON(message: _70.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        packet_commitment_sequences?: (string | number | import("long").Long)[];
                    }): _70.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _70.QueryUnreceivedPacketsRequestAmino): _70.QueryUnreceivedPacketsRequest;
                    toAmino(message: _70.QueryUnreceivedPacketsRequest): _70.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _70.QueryUnreceivedPacketsRequestAminoMsg): _70.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _70.QueryUnreceivedPacketsRequest): _70.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _70.QueryUnreceivedPacketsRequestProtoMsg): _70.QueryUnreceivedPacketsRequest;
                    toProto(message: _70.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _70.QueryUnreceivedPacketsRequest): _70.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _70.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _70.QueryUnreceivedPacketsResponse;
                    toJSON(message: _70.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial(object: {
                        sequences?: (string | number | import("long").Long)[];
                        height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                    }): _70.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _70.QueryUnreceivedPacketsResponseAmino): _70.QueryUnreceivedPacketsResponse;
                    toAmino(message: _70.QueryUnreceivedPacketsResponse): _70.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _70.QueryUnreceivedPacketsResponseAminoMsg): _70.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _70.QueryUnreceivedPacketsResponse): _70.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _70.QueryUnreceivedPacketsResponseProtoMsg): _70.QueryUnreceivedPacketsResponse;
                    toProto(message: _70.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _70.QueryUnreceivedPacketsResponse): _70.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _70.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _70.QueryUnreceivedAcksRequest;
                    toJSON(message: _70.QueryUnreceivedAcksRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        packet_ack_sequences?: (string | number | import("long").Long)[];
                    }): _70.QueryUnreceivedAcksRequest;
                    fromAmino(object: _70.QueryUnreceivedAcksRequestAmino): _70.QueryUnreceivedAcksRequest;
                    toAmino(message: _70.QueryUnreceivedAcksRequest): _70.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _70.QueryUnreceivedAcksRequestAminoMsg): _70.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _70.QueryUnreceivedAcksRequest): _70.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _70.QueryUnreceivedAcksRequestProtoMsg): _70.QueryUnreceivedAcksRequest;
                    toProto(message: _70.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _70.QueryUnreceivedAcksRequest): _70.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _70.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _70.QueryUnreceivedAcksResponse;
                    toJSON(message: _70.QueryUnreceivedAcksResponse): unknown;
                    fromPartial(object: {
                        sequences?: (string | number | import("long").Long)[];
                        height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                    }): _70.QueryUnreceivedAcksResponse;
                    fromAmino(object: _70.QueryUnreceivedAcksResponseAmino): _70.QueryUnreceivedAcksResponse;
                    toAmino(message: _70.QueryUnreceivedAcksResponse): _70.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _70.QueryUnreceivedAcksResponseAminoMsg): _70.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _70.QueryUnreceivedAcksResponse): _70.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _70.QueryUnreceivedAcksResponseProtoMsg): _70.QueryUnreceivedAcksResponse;
                    toProto(message: _70.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _70.QueryUnreceivedAcksResponse): _70.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _70.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _70.QueryNextSequenceReceiveRequest;
                    toJSON(message: _70.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                    }): _70.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _70.QueryNextSequenceReceiveRequestAmino): _70.QueryNextSequenceReceiveRequest;
                    toAmino(message: _70.QueryNextSequenceReceiveRequest): _70.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _70.QueryNextSequenceReceiveRequestAminoMsg): _70.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _70.QueryNextSequenceReceiveRequest): _70.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _70.QueryNextSequenceReceiveRequestProtoMsg): _70.QueryNextSequenceReceiveRequest;
                    toProto(message: _70.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _70.QueryNextSequenceReceiveRequest): _70.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _70.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _70.QueryNextSequenceReceiveResponse;
                    toJSON(message: _70.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial(object: {
                        next_sequence_receive?: string | number | import("long").Long;
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                    }): _70.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _70.QueryNextSequenceReceiveResponseAmino): _70.QueryNextSequenceReceiveResponse;
                    toAmino(message: _70.QueryNextSequenceReceiveResponse): _70.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _70.QueryNextSequenceReceiveResponseAminoMsg): _70.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _70.QueryNextSequenceReceiveResponse): _70.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _70.QueryNextSequenceReceiveResponseProtoMsg): _70.QueryNextSequenceReceiveResponse;
                    toProto(message: _70.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _70.QueryNextSequenceReceiveResponse): _70.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _69.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.GenesisState;
                    fromJSON(object: any): _69.GenesisState;
                    toJSON(message: _69.GenesisState): unknown;
                    fromPartial(object: {
                        channels?: {
                            state?: _68.State;
                            ordering?: _68.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                            port_id?: string;
                            channel_id?: string;
                        }[];
                        acknowledgements?: {
                            port_id?: string;
                            channel_id?: string;
                            sequence?: string | number | import("long").Long;
                            data?: Uint8Array;
                        }[];
                        commitments?: {
                            port_id?: string;
                            channel_id?: string;
                            sequence?: string | number | import("long").Long;
                            data?: Uint8Array;
                        }[];
                        receipts?: {
                            port_id?: string;
                            channel_id?: string;
                            sequence?: string | number | import("long").Long;
                            data?: Uint8Array;
                        }[];
                        send_sequences?: {
                            port_id?: string;
                            channel_id?: string;
                            sequence?: string | number | import("long").Long;
                        }[];
                        recv_sequences?: {
                            port_id?: string;
                            channel_id?: string;
                            sequence?: string | number | import("long").Long;
                        }[];
                        ack_sequences?: {
                            port_id?: string;
                            channel_id?: string;
                            sequence?: string | number | import("long").Long;
                        }[];
                        next_channel_sequence?: string | number | import("long").Long;
                    }): _69.GenesisState;
                    fromAmino(object: _69.GenesisStateAmino): _69.GenesisState;
                    toAmino(message: _69.GenesisState): _69.GenesisStateAmino;
                    fromAminoMsg(object: _69.GenesisStateAminoMsg): _69.GenesisState;
                    toAminoMsg(message: _69.GenesisState): _69.GenesisStateAminoMsg;
                    fromProtoMsg(message: _69.GenesisStateProtoMsg): _69.GenesisState;
                    toProto(message: _69.GenesisState): Uint8Array;
                    toProtoMsg(message: _69.GenesisState): _69.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _69.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.PacketSequence;
                    fromJSON(object: any): _69.PacketSequence;
                    toJSON(message: _69.PacketSequence): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        sequence?: string | number | import("long").Long;
                    }): _69.PacketSequence;
                    fromAmino(object: _69.PacketSequenceAmino): _69.PacketSequence;
                    toAmino(message: _69.PacketSequence): _69.PacketSequenceAmino;
                    fromAminoMsg(object: _69.PacketSequenceAminoMsg): _69.PacketSequence;
                    toAminoMsg(message: _69.PacketSequence): _69.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _69.PacketSequenceProtoMsg): _69.PacketSequence;
                    toProto(message: _69.PacketSequence): Uint8Array;
                    toProtoMsg(message: _69.PacketSequence): _69.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _68.State;
                stateToJSON(object: _68.State): string;
                orderFromJSON(object: any): _68.Order;
                orderToJSON(object: _68.Order): string;
                State: typeof _68.State;
                StateSDKType: typeof _68.State;
                StateAmino: typeof _68.State;
                Order: typeof _68.Order;
                OrderSDKType: typeof _68.Order;
                OrderAmino: typeof _68.Order;
                Channel: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _68.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.Channel;
                    fromJSON(object: any): _68.Channel;
                    toJSON(message: _68.Channel): unknown;
                    fromPartial(object: {
                        state?: _68.State;
                        ordering?: _68.Order;
                        counterparty?: {
                            port_id?: string;
                            channel_id?: string;
                        };
                        connection_hops?: string[];
                        version?: string;
                    }): _68.Channel;
                    fromAmino(object: _68.ChannelAmino): _68.Channel;
                    toAmino(message: _68.Channel): _68.ChannelAmino;
                    fromAminoMsg(object: _68.ChannelAminoMsg): _68.Channel;
                    toAminoMsg(message: _68.Channel): _68.ChannelAminoMsg;
                    fromProtoMsg(message: _68.ChannelProtoMsg): _68.Channel;
                    toProto(message: _68.Channel): Uint8Array;
                    toProtoMsg(message: _68.Channel): _68.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _68.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.IdentifiedChannel;
                    fromJSON(object: any): _68.IdentifiedChannel;
                    toJSON(message: _68.IdentifiedChannel): unknown;
                    fromPartial(object: {
                        state?: _68.State;
                        ordering?: _68.Order;
                        counterparty?: {
                            port_id?: string;
                            channel_id?: string;
                        };
                        connection_hops?: string[];
                        version?: string;
                        port_id?: string;
                        channel_id?: string;
                    }): _68.IdentifiedChannel;
                    fromAmino(object: _68.IdentifiedChannelAmino): _68.IdentifiedChannel;
                    toAmino(message: _68.IdentifiedChannel): _68.IdentifiedChannelAmino;
                    fromAminoMsg(object: _68.IdentifiedChannelAminoMsg): _68.IdentifiedChannel;
                    toAminoMsg(message: _68.IdentifiedChannel): _68.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _68.IdentifiedChannelProtoMsg): _68.IdentifiedChannel;
                    toProto(message: _68.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _68.IdentifiedChannel): _68.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _68.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.Counterparty;
                    fromJSON(object: any): _68.Counterparty;
                    toJSON(message: _68.Counterparty): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                    }): _68.Counterparty;
                    fromAmino(object: _68.CounterpartyAmino): _68.Counterparty;
                    toAmino(message: _68.Counterparty): _68.CounterpartyAmino;
                    fromAminoMsg(object: _68.CounterpartyAminoMsg): _68.Counterparty;
                    toAminoMsg(message: _68.Counterparty): _68.CounterpartyAminoMsg;
                    fromProtoMsg(message: _68.CounterpartyProtoMsg): _68.Counterparty;
                    toProto(message: _68.Counterparty): Uint8Array;
                    toProtoMsg(message: _68.Counterparty): _68.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _68.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.Packet;
                    fromJSON(object: any): _68.Packet;
                    toJSON(message: _68.Packet): unknown;
                    fromPartial(object: {
                        sequence?: string | number | import("long").Long;
                        source_port?: string;
                        source_channel?: string;
                        destination_port?: string;
                        destination_channel?: string;
                        data?: Uint8Array;
                        timeout_height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                        timeout_timestamp?: string | number | import("long").Long;
                    }): _68.Packet;
                    fromAmino(object: _68.PacketAmino): _68.Packet;
                    toAmino(message: _68.Packet): _68.PacketAmino;
                    fromAminoMsg(object: _68.PacketAminoMsg): _68.Packet;
                    toAminoMsg(message: _68.Packet): _68.PacketAminoMsg;
                    fromProtoMsg(message: _68.PacketProtoMsg): _68.Packet;
                    toProto(message: _68.Packet): Uint8Array;
                    toProtoMsg(message: _68.Packet): _68.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _68.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.PacketState;
                    fromJSON(object: any): _68.PacketState;
                    toJSON(message: _68.PacketState): unknown;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        sequence?: string | number | import("long").Long;
                        data?: Uint8Array;
                    }): _68.PacketState;
                    fromAmino(object: _68.PacketStateAmino): _68.PacketState;
                    toAmino(message: _68.PacketState): _68.PacketStateAmino;
                    fromAminoMsg(object: _68.PacketStateAminoMsg): _68.PacketState;
                    toAminoMsg(message: _68.PacketState): _68.PacketStateAminoMsg;
                    fromProtoMsg(message: _68.PacketStateProtoMsg): _68.PacketState;
                    toProto(message: _68.PacketState): Uint8Array;
                    toProtoMsg(message: _68.PacketState): _68.PacketStateProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _68.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.Acknowledgement;
                    fromJSON(object: any): _68.Acknowledgement;
                    toJSON(message: _68.Acknowledgement): unknown;
                    fromPartial(object: {
                        result?: Uint8Array;
                        error?: string;
                    }): _68.Acknowledgement;
                    fromAmino(object: _68.AcknowledgementAmino): _68.Acknowledgement;
                    toAmino(message: _68.Acknowledgement): _68.AcknowledgementAmino;
                    fromAminoMsg(object: _68.AcknowledgementAminoMsg): _68.Acknowledgement;
                    toAminoMsg(message: _68.Acknowledgement): _68.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _68.AcknowledgementProtoMsg): _68.Acknowledgement;
                    toProto(message: _68.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _68.Acknowledgement): _68.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                Msg: typeof _190.Msg;
                Query: typeof _186.Query;
                QueryClientImpl: typeof _186.QueryClientImpl;
                LCDQueryClient: typeof _182.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _75.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _75.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _75.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _75.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _75.MsgCreateClient): {
                            typeUrl: string;
                            value: _75.MsgCreateClient;
                        };
                        updateClient(value: _75.MsgUpdateClient): {
                            typeUrl: string;
                            value: _75.MsgUpdateClient;
                        };
                        upgradeClient(value: _75.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _75.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _75.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _75.MsgSubmitMisbehaviour;
                        };
                    };
                    toJSON: {
                        createClient(value: _75.MsgCreateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClient(value: _75.MsgUpdateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        upgradeClient(value: _75.MsgUpgradeClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        submitMisbehaviour(value: _75.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _75.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _75.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _75.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _75.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _75.MsgCreateClient): {
                            typeUrl: string;
                            value: _75.MsgCreateClient;
                        };
                        updateClient(value: _75.MsgUpdateClient): {
                            typeUrl: string;
                            value: _75.MsgUpdateClient;
                        };
                        upgradeClient(value: _75.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _75.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _75.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _75.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _75.MsgCreateClient) => _75.MsgCreateClientAmino;
                        fromAmino: (object: _75.MsgCreateClientAmino) => _75.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _75.MsgUpdateClient) => _75.MsgUpdateClientAmino;
                        fromAmino: (object: _75.MsgUpdateClientAmino) => _75.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _75.MsgUpgradeClient) => _75.MsgUpgradeClientAmino;
                        fromAmino: (object: _75.MsgUpgradeClientAmino) => _75.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _75.MsgSubmitMisbehaviour) => _75.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _75.MsgSubmitMisbehaviourAmino) => _75.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _75.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgCreateClient;
                    fromJSON(object: any): _75.MsgCreateClient;
                    toJSON(message: _75.MsgCreateClient): unknown;
                    fromPartial(object: {
                        client_state?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        consensus_state?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _75.MsgCreateClient;
                    fromAmino(object: _75.MsgCreateClientAmino): _75.MsgCreateClient;
                    toAmino(message: _75.MsgCreateClient): _75.MsgCreateClientAmino;
                    fromAminoMsg(object: _75.MsgCreateClientAminoMsg): _75.MsgCreateClient;
                    toAminoMsg(message: _75.MsgCreateClient): _75.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _75.MsgCreateClientProtoMsg): _75.MsgCreateClient;
                    toProto(message: _75.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _75.MsgCreateClient): _75.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _75.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgCreateClientResponse;
                    fromJSON(_: any): _75.MsgCreateClientResponse;
                    toJSON(_: _75.MsgCreateClientResponse): unknown;
                    fromPartial(_: {}): _75.MsgCreateClientResponse;
                    fromAmino(_: _75.MsgCreateClientResponseAmino): _75.MsgCreateClientResponse;
                    toAmino(_: _75.MsgCreateClientResponse): _75.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _75.MsgCreateClientResponseAminoMsg): _75.MsgCreateClientResponse;
                    toAminoMsg(message: _75.MsgCreateClientResponse): _75.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _75.MsgCreateClientResponseProtoMsg): _75.MsgCreateClientResponse;
                    toProto(message: _75.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _75.MsgCreateClientResponse): _75.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _75.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgUpdateClient;
                    fromJSON(object: any): _75.MsgUpdateClient;
                    toJSON(message: _75.MsgUpdateClient): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        header?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _75.MsgUpdateClient;
                    fromAmino(object: _75.MsgUpdateClientAmino): _75.MsgUpdateClient;
                    toAmino(message: _75.MsgUpdateClient): _75.MsgUpdateClientAmino;
                    fromAminoMsg(object: _75.MsgUpdateClientAminoMsg): _75.MsgUpdateClient;
                    toAminoMsg(message: _75.MsgUpdateClient): _75.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _75.MsgUpdateClientProtoMsg): _75.MsgUpdateClient;
                    toProto(message: _75.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _75.MsgUpdateClient): _75.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _75.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgUpdateClientResponse;
                    fromJSON(_: any): _75.MsgUpdateClientResponse;
                    toJSON(_: _75.MsgUpdateClientResponse): unknown;
                    fromPartial(_: {}): _75.MsgUpdateClientResponse;
                    fromAmino(_: _75.MsgUpdateClientResponseAmino): _75.MsgUpdateClientResponse;
                    toAmino(_: _75.MsgUpdateClientResponse): _75.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _75.MsgUpdateClientResponseAminoMsg): _75.MsgUpdateClientResponse;
                    toAminoMsg(message: _75.MsgUpdateClientResponse): _75.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _75.MsgUpdateClientResponseProtoMsg): _75.MsgUpdateClientResponse;
                    toProto(message: _75.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _75.MsgUpdateClientResponse): _75.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _75.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgUpgradeClient;
                    fromJSON(object: any): _75.MsgUpgradeClient;
                    toJSON(message: _75.MsgUpgradeClient): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        client_state?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        consensus_state?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        proof_upgrade_client?: Uint8Array;
                        proof_upgrade_consensus_state?: Uint8Array;
                        signer?: string;
                    }): _75.MsgUpgradeClient;
                    fromAmino(object: _75.MsgUpgradeClientAmino): _75.MsgUpgradeClient;
                    toAmino(message: _75.MsgUpgradeClient): _75.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _75.MsgUpgradeClientAminoMsg): _75.MsgUpgradeClient;
                    toAminoMsg(message: _75.MsgUpgradeClient): _75.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _75.MsgUpgradeClientProtoMsg): _75.MsgUpgradeClient;
                    toProto(message: _75.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _75.MsgUpgradeClient): _75.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _75.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgUpgradeClientResponse;
                    fromJSON(_: any): _75.MsgUpgradeClientResponse;
                    toJSON(_: _75.MsgUpgradeClientResponse): unknown;
                    fromPartial(_: {}): _75.MsgUpgradeClientResponse;
                    fromAmino(_: _75.MsgUpgradeClientResponseAmino): _75.MsgUpgradeClientResponse;
                    toAmino(_: _75.MsgUpgradeClientResponse): _75.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _75.MsgUpgradeClientResponseAminoMsg): _75.MsgUpgradeClientResponse;
                    toAminoMsg(message: _75.MsgUpgradeClientResponse): _75.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _75.MsgUpgradeClientResponseProtoMsg): _75.MsgUpgradeClientResponse;
                    toProto(message: _75.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _75.MsgUpgradeClientResponse): _75.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _75.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _75.MsgSubmitMisbehaviour;
                    toJSON(message: _75.MsgSubmitMisbehaviour): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        misbehaviour?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _75.MsgSubmitMisbehaviour;
                    fromAmino(object: _75.MsgSubmitMisbehaviourAmino): _75.MsgSubmitMisbehaviour;
                    toAmino(message: _75.MsgSubmitMisbehaviour): _75.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _75.MsgSubmitMisbehaviourAminoMsg): _75.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _75.MsgSubmitMisbehaviour): _75.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _75.MsgSubmitMisbehaviourProtoMsg): _75.MsgSubmitMisbehaviour;
                    toProto(message: _75.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _75.MsgSubmitMisbehaviour): _75.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _75.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _75.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _75.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial(_: {}): _75.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _75.MsgSubmitMisbehaviourResponseAmino): _75.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _75.MsgSubmitMisbehaviourResponse): _75.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _75.MsgSubmitMisbehaviourResponseAminoMsg): _75.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _75.MsgSubmitMisbehaviourResponse): _75.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _75.MsgSubmitMisbehaviourResponseProtoMsg): _75.MsgSubmitMisbehaviourResponse;
                    toProto(message: _75.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _75.MsgSubmitMisbehaviourResponse): _75.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _74.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryClientStateRequest;
                    fromJSON(object: any): _74.QueryClientStateRequest;
                    toJSON(message: _74.QueryClientStateRequest): unknown;
                    fromPartial(object: {
                        client_id?: string;
                    }): _74.QueryClientStateRequest;
                    fromAmino(object: _74.QueryClientStateRequestAmino): _74.QueryClientStateRequest;
                    toAmino(message: _74.QueryClientStateRequest): _74.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _74.QueryClientStateRequestAminoMsg): _74.QueryClientStateRequest;
                    toAminoMsg(message: _74.QueryClientStateRequest): _74.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _74.QueryClientStateRequestProtoMsg): _74.QueryClientStateRequest;
                    toProto(message: _74.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _74.QueryClientStateRequest): _74.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _74.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryClientStateResponse;
                    fromJSON(object: any): _74.QueryClientStateResponse;
                    toJSON(message: _74.QueryClientStateResponse): unknown;
                    fromPartial(object: {
                        client_state?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                    }): _74.QueryClientStateResponse;
                    fromAmino(object: _74.QueryClientStateResponseAmino): _74.QueryClientStateResponse;
                    toAmino(message: _74.QueryClientStateResponse): _74.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _74.QueryClientStateResponseAminoMsg): _74.QueryClientStateResponse;
                    toAminoMsg(message: _74.QueryClientStateResponse): _74.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _74.QueryClientStateResponseProtoMsg): _74.QueryClientStateResponse;
                    toProto(message: _74.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _74.QueryClientStateResponse): _74.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _74.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryClientStatesRequest;
                    fromJSON(object: any): _74.QueryClientStatesRequest;
                    toJSON(message: _74.QueryClientStatesRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").Long;
                            limit?: string | number | import("long").Long;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _74.QueryClientStatesRequest;
                    fromAmino(object: _74.QueryClientStatesRequestAmino): _74.QueryClientStatesRequest;
                    toAmino(message: _74.QueryClientStatesRequest): _74.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _74.QueryClientStatesRequestAminoMsg): _74.QueryClientStatesRequest;
                    toAminoMsg(message: _74.QueryClientStatesRequest): _74.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _74.QueryClientStatesRequestProtoMsg): _74.QueryClientStatesRequest;
                    toProto(message: _74.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _74.QueryClientStatesRequest): _74.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _74.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryClientStatesResponse;
                    fromJSON(object: any): _74.QueryClientStatesResponse;
                    toJSON(message: _74.QueryClientStatesResponse): unknown;
                    fromPartial(object: {
                        client_states?: {
                            client_id?: string;
                            client_state?: {
                                $typeUrl?: string;
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: string | number | import("long").Long;
                        };
                    }): _74.QueryClientStatesResponse;
                    fromAmino(object: _74.QueryClientStatesResponseAmino): _74.QueryClientStatesResponse;
                    toAmino(message: _74.QueryClientStatesResponse): _74.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _74.QueryClientStatesResponseAminoMsg): _74.QueryClientStatesResponse;
                    toAminoMsg(message: _74.QueryClientStatesResponse): _74.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _74.QueryClientStatesResponseProtoMsg): _74.QueryClientStatesResponse;
                    toProto(message: _74.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _74.QueryClientStatesResponse): _74.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _74.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryConsensusStateRequest;
                    fromJSON(object: any): _74.QueryConsensusStateRequest;
                    toJSON(message: _74.QueryConsensusStateRequest): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        revision_number?: string | number | import("long").Long;
                        revision_height?: string | number | import("long").Long;
                        latest_height?: boolean;
                    }): _74.QueryConsensusStateRequest;
                    fromAmino(object: _74.QueryConsensusStateRequestAmino): _74.QueryConsensusStateRequest;
                    toAmino(message: _74.QueryConsensusStateRequest): _74.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _74.QueryConsensusStateRequestAminoMsg): _74.QueryConsensusStateRequest;
                    toAminoMsg(message: _74.QueryConsensusStateRequest): _74.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _74.QueryConsensusStateRequestProtoMsg): _74.QueryConsensusStateRequest;
                    toProto(message: _74.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _74.QueryConsensusStateRequest): _74.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _74.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryConsensusStateResponse;
                    fromJSON(object: any): _74.QueryConsensusStateResponse;
                    toJSON(message: _74.QueryConsensusStateResponse): unknown;
                    fromPartial(object: {
                        consensus_state?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                    }): _74.QueryConsensusStateResponse;
                    fromAmino(object: _74.QueryConsensusStateResponseAmino): _74.QueryConsensusStateResponse;
                    toAmino(message: _74.QueryConsensusStateResponse): _74.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _74.QueryConsensusStateResponseAminoMsg): _74.QueryConsensusStateResponse;
                    toAminoMsg(message: _74.QueryConsensusStateResponse): _74.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _74.QueryConsensusStateResponseProtoMsg): _74.QueryConsensusStateResponse;
                    toProto(message: _74.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _74.QueryConsensusStateResponse): _74.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _74.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryConsensusStatesRequest;
                    fromJSON(object: any): _74.QueryConsensusStatesRequest;
                    toJSON(message: _74.QueryConsensusStatesRequest): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").Long;
                            limit?: string | number | import("long").Long;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _74.QueryConsensusStatesRequest;
                    fromAmino(object: _74.QueryConsensusStatesRequestAmino): _74.QueryConsensusStatesRequest;
                    toAmino(message: _74.QueryConsensusStatesRequest): _74.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _74.QueryConsensusStatesRequestAminoMsg): _74.QueryConsensusStatesRequest;
                    toAminoMsg(message: _74.QueryConsensusStatesRequest): _74.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _74.QueryConsensusStatesRequestProtoMsg): _74.QueryConsensusStatesRequest;
                    toProto(message: _74.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _74.QueryConsensusStatesRequest): _74.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _74.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryConsensusStatesResponse;
                    fromJSON(object: any): _74.QueryConsensusStatesResponse;
                    toJSON(message: _74.QueryConsensusStatesResponse): unknown;
                    fromPartial(object: {
                        consensus_states?: {
                            height?: {
                                revision_number?: string | number | import("long").Long;
                                revision_height?: string | number | import("long").Long;
                            };
                            consensus_state?: {
                                $typeUrl?: string;
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: string | number | import("long").Long;
                        };
                    }): _74.QueryConsensusStatesResponse;
                    fromAmino(object: _74.QueryConsensusStatesResponseAmino): _74.QueryConsensusStatesResponse;
                    toAmino(message: _74.QueryConsensusStatesResponse): _74.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _74.QueryConsensusStatesResponseAminoMsg): _74.QueryConsensusStatesResponse;
                    toAminoMsg(message: _74.QueryConsensusStatesResponse): _74.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _74.QueryConsensusStatesResponseProtoMsg): _74.QueryConsensusStatesResponse;
                    toProto(message: _74.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _74.QueryConsensusStatesResponse): _74.QueryConsensusStatesResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _74.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryClientStatusRequest;
                    fromJSON(object: any): _74.QueryClientStatusRequest;
                    toJSON(message: _74.QueryClientStatusRequest): unknown;
                    fromPartial(object: {
                        client_id?: string;
                    }): _74.QueryClientStatusRequest;
                    fromAmino(object: _74.QueryClientStatusRequestAmino): _74.QueryClientStatusRequest;
                    toAmino(message: _74.QueryClientStatusRequest): _74.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _74.QueryClientStatusRequestAminoMsg): _74.QueryClientStatusRequest;
                    toAminoMsg(message: _74.QueryClientStatusRequest): _74.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _74.QueryClientStatusRequestProtoMsg): _74.QueryClientStatusRequest;
                    toProto(message: _74.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _74.QueryClientStatusRequest): _74.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _74.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryClientStatusResponse;
                    fromJSON(object: any): _74.QueryClientStatusResponse;
                    toJSON(message: _74.QueryClientStatusResponse): unknown;
                    fromPartial(object: {
                        status?: string;
                    }): _74.QueryClientStatusResponse;
                    fromAmino(object: _74.QueryClientStatusResponseAmino): _74.QueryClientStatusResponse;
                    toAmino(message: _74.QueryClientStatusResponse): _74.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _74.QueryClientStatusResponseAminoMsg): _74.QueryClientStatusResponse;
                    toAminoMsg(message: _74.QueryClientStatusResponse): _74.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _74.QueryClientStatusResponseProtoMsg): _74.QueryClientStatusResponse;
                    toProto(message: _74.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _74.QueryClientStatusResponse): _74.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _74.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryClientParamsRequest;
                    fromJSON(_: any): _74.QueryClientParamsRequest;
                    toJSON(_: _74.QueryClientParamsRequest): unknown;
                    fromPartial(_: {}): _74.QueryClientParamsRequest;
                    fromAmino(_: _74.QueryClientParamsRequestAmino): _74.QueryClientParamsRequest;
                    toAmino(_: _74.QueryClientParamsRequest): _74.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _74.QueryClientParamsRequestAminoMsg): _74.QueryClientParamsRequest;
                    toAminoMsg(message: _74.QueryClientParamsRequest): _74.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _74.QueryClientParamsRequestProtoMsg): _74.QueryClientParamsRequest;
                    toProto(message: _74.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _74.QueryClientParamsRequest): _74.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _74.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryClientParamsResponse;
                    fromJSON(object: any): _74.QueryClientParamsResponse;
                    toJSON(message: _74.QueryClientParamsResponse): unknown;
                    fromPartial(object: {
                        params?: {
                            allowed_clients?: string[];
                        };
                    }): _74.QueryClientParamsResponse;
                    fromAmino(object: _74.QueryClientParamsResponseAmino): _74.QueryClientParamsResponse;
                    toAmino(message: _74.QueryClientParamsResponse): _74.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _74.QueryClientParamsResponseAminoMsg): _74.QueryClientParamsResponse;
                    toAminoMsg(message: _74.QueryClientParamsResponse): _74.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _74.QueryClientParamsResponseProtoMsg): _74.QueryClientParamsResponse;
                    toProto(message: _74.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _74.QueryClientParamsResponse): _74.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _74.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _74.QueryUpgradedClientStateRequest;
                    toJSON(_: _74.QueryUpgradedClientStateRequest): unknown;
                    fromPartial(_: {}): _74.QueryUpgradedClientStateRequest;
                    fromAmino(_: _74.QueryUpgradedClientStateRequestAmino): _74.QueryUpgradedClientStateRequest;
                    toAmino(_: _74.QueryUpgradedClientStateRequest): _74.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _74.QueryUpgradedClientStateRequestAminoMsg): _74.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _74.QueryUpgradedClientStateRequest): _74.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _74.QueryUpgradedClientStateRequestProtoMsg): _74.QueryUpgradedClientStateRequest;
                    toProto(message: _74.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _74.QueryUpgradedClientStateRequest): _74.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _74.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _74.QueryUpgradedClientStateResponse;
                    toJSON(message: _74.QueryUpgradedClientStateResponse): unknown;
                    fromPartial(object: {
                        upgraded_client_state?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _74.QueryUpgradedClientStateResponse;
                    fromAmino(object: _74.QueryUpgradedClientStateResponseAmino): _74.QueryUpgradedClientStateResponse;
                    toAmino(message: _74.QueryUpgradedClientStateResponse): _74.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _74.QueryUpgradedClientStateResponseAminoMsg): _74.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _74.QueryUpgradedClientStateResponse): _74.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _74.QueryUpgradedClientStateResponseProtoMsg): _74.QueryUpgradedClientStateResponse;
                    toProto(message: _74.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _74.QueryUpgradedClientStateResponse): _74.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _74.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _74.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _74.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial(_: {}): _74.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _74.QueryUpgradedConsensusStateRequestAmino): _74.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _74.QueryUpgradedConsensusStateRequest): _74.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _74.QueryUpgradedConsensusStateRequestAminoMsg): _74.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _74.QueryUpgradedConsensusStateRequest): _74.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _74.QueryUpgradedConsensusStateRequestProtoMsg): _74.QueryUpgradedConsensusStateRequest;
                    toProto(message: _74.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _74.QueryUpgradedConsensusStateRequest): _74.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _74.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _74.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _74.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial(object: {
                        upgraded_consensus_state?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _74.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _74.QueryUpgradedConsensusStateResponseAmino): _74.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _74.QueryUpgradedConsensusStateResponse): _74.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _74.QueryUpgradedConsensusStateResponseAminoMsg): _74.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _74.QueryUpgradedConsensusStateResponse): _74.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _74.QueryUpgradedConsensusStateResponseProtoMsg): _74.QueryUpgradedConsensusStateResponse;
                    toProto(message: _74.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _74.QueryUpgradedConsensusStateResponse): _74.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _73.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.GenesisState;
                    fromJSON(object: any): _73.GenesisState;
                    toJSON(message: _73.GenesisState): unknown;
                    fromPartial(object: {
                        clients?: {
                            client_id?: string;
                            client_state?: {
                                $typeUrl?: string;
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        clients_consensus?: {
                            client_id?: string;
                            consensus_states?: {
                                height?: {
                                    revision_number?: string | number | import("long").Long;
                                    revision_height?: string | number | import("long").Long;
                                };
                                consensus_state?: {
                                    $typeUrl?: string;
                                    type_url?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                        }[];
                        clients_metadata?: {
                            client_id?: string;
                            client_metadata?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[];
                        }[];
                        params?: {
                            allowed_clients?: string[];
                        };
                        create_localhost?: boolean;
                        next_client_sequence?: string | number | import("long").Long;
                    }): _73.GenesisState;
                    fromAmino(object: _73.GenesisStateAmino): _73.GenesisState;
                    toAmino(message: _73.GenesisState): _73.GenesisStateAmino;
                    fromAminoMsg(object: _73.GenesisStateAminoMsg): _73.GenesisState;
                    toAminoMsg(message: _73.GenesisState): _73.GenesisStateAminoMsg;
                    fromProtoMsg(message: _73.GenesisStateProtoMsg): _73.GenesisState;
                    toProto(message: _73.GenesisState): Uint8Array;
                    toProtoMsg(message: _73.GenesisState): _73.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _73.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.GenesisMetadata;
                    fromJSON(object: any): _73.GenesisMetadata;
                    toJSON(message: _73.GenesisMetadata): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _73.GenesisMetadata;
                    fromAmino(object: _73.GenesisMetadataAmino): _73.GenesisMetadata;
                    toAmino(message: _73.GenesisMetadata): _73.GenesisMetadataAmino;
                    fromAminoMsg(object: _73.GenesisMetadataAminoMsg): _73.GenesisMetadata;
                    toAminoMsg(message: _73.GenesisMetadata): _73.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _73.GenesisMetadataProtoMsg): _73.GenesisMetadata;
                    toProto(message: _73.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _73.GenesisMetadata): _73.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _73.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _73.IdentifiedGenesisMetadata;
                    toJSON(message: _73.IdentifiedGenesisMetadata): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        client_metadata?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }): _73.IdentifiedGenesisMetadata;
                    fromAmino(object: _73.IdentifiedGenesisMetadataAmino): _73.IdentifiedGenesisMetadata;
                    toAmino(message: _73.IdentifiedGenesisMetadata): _73.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _73.IdentifiedGenesisMetadataAminoMsg): _73.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _73.IdentifiedGenesisMetadata): _73.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _73.IdentifiedGenesisMetadataProtoMsg): _73.IdentifiedGenesisMetadata;
                    toProto(message: _73.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _73.IdentifiedGenesisMetadata): _73.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _72.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.IdentifiedClientState;
                    fromJSON(object: any): _72.IdentifiedClientState;
                    toJSON(message: _72.IdentifiedClientState): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        client_state?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _72.IdentifiedClientState;
                    fromAmino(object: _72.IdentifiedClientStateAmino): _72.IdentifiedClientState;
                    toAmino(message: _72.IdentifiedClientState): _72.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _72.IdentifiedClientStateAminoMsg): _72.IdentifiedClientState;
                    toAminoMsg(message: _72.IdentifiedClientState): _72.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _72.IdentifiedClientStateProtoMsg): _72.IdentifiedClientState;
                    toProto(message: _72.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _72.IdentifiedClientState): _72.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _72.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.ConsensusStateWithHeight;
                    fromJSON(object: any): _72.ConsensusStateWithHeight;
                    toJSON(message: _72.ConsensusStateWithHeight): unknown;
                    fromPartial(object: {
                        height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                        consensus_state?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _72.ConsensusStateWithHeight;
                    fromAmino(object: _72.ConsensusStateWithHeightAmino): _72.ConsensusStateWithHeight;
                    toAmino(message: _72.ConsensusStateWithHeight): _72.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _72.ConsensusStateWithHeightAminoMsg): _72.ConsensusStateWithHeight;
                    toAminoMsg(message: _72.ConsensusStateWithHeight): _72.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _72.ConsensusStateWithHeightProtoMsg): _72.ConsensusStateWithHeight;
                    toProto(message: _72.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _72.ConsensusStateWithHeight): _72.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _72.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.ClientConsensusStates;
                    fromJSON(object: any): _72.ClientConsensusStates;
                    toJSON(message: _72.ClientConsensusStates): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        consensus_states?: {
                            height?: {
                                revision_number?: string | number | import("long").Long;
                                revision_height?: string | number | import("long").Long;
                            };
                            consensus_state?: {
                                $typeUrl?: string;
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    }): _72.ClientConsensusStates;
                    fromAmino(object: _72.ClientConsensusStatesAmino): _72.ClientConsensusStates;
                    toAmino(message: _72.ClientConsensusStates): _72.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _72.ClientConsensusStatesAminoMsg): _72.ClientConsensusStates;
                    toAminoMsg(message: _72.ClientConsensusStates): _72.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _72.ClientConsensusStatesProtoMsg): _72.ClientConsensusStates;
                    toProto(message: _72.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _72.ClientConsensusStates): _72.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _72.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.ClientUpdateProposal;
                    fromJSON(object: any): _72.ClientUpdateProposal;
                    toJSON(message: _72.ClientUpdateProposal): unknown;
                    fromPartial(object: {
                        $typeUrl?: string;
                        title?: string;
                        description?: string;
                        subject_client_id?: string;
                        substitute_client_id?: string;
                    }): _72.ClientUpdateProposal;
                    fromAmino(object: _72.ClientUpdateProposalAmino): _72.ClientUpdateProposal;
                    toAmino(message: _72.ClientUpdateProposal): _72.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _72.ClientUpdateProposalAminoMsg): _72.ClientUpdateProposal;
                    toAminoMsg(message: _72.ClientUpdateProposal): _72.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _72.ClientUpdateProposalProtoMsg): _72.ClientUpdateProposal;
                    toProto(message: _72.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _72.ClientUpdateProposal): _72.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _72.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.UpgradeProposal;
                    fromJSON(object: any): _72.UpgradeProposal;
                    toJSON(message: _72.UpgradeProposal): unknown;
                    fromPartial(object: {
                        $typeUrl?: string;
                        title?: string;
                        description?: string;
                        plan?: {
                            name?: string;
                            time?: Date;
                            height?: string | number | import("long").Long;
                            info?: string;
                            upgraded_client_state?: {
                                $typeUrl?: string;
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        };
                        upgraded_client_state?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _72.UpgradeProposal;
                    fromAmino(object: _72.UpgradeProposalAmino): _72.UpgradeProposal;
                    toAmino(message: _72.UpgradeProposal): _72.UpgradeProposalAmino;
                    fromAminoMsg(object: _72.UpgradeProposalAminoMsg): _72.UpgradeProposal;
                    toAminoMsg(message: _72.UpgradeProposal): _72.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _72.UpgradeProposalProtoMsg): _72.UpgradeProposal;
                    toProto(message: _72.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _72.UpgradeProposal): _72.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _72.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Height;
                    fromJSON(object: any): _72.Height;
                    toJSON(message: _72.Height): unknown;
                    fromPartial(object: {
                        revision_number?: string | number | import("long").Long;
                        revision_height?: string | number | import("long").Long;
                    }): _72.Height;
                    fromAmino(object: _72.HeightAmino): _72.Height;
                    toAmino(message: _72.Height): _72.HeightAmino;
                    fromAminoMsg(object: _72.HeightAminoMsg): _72.Height;
                    toAminoMsg(message: _72.Height): _72.HeightAminoMsg;
                    fromProtoMsg(message: _72.HeightProtoMsg): _72.Height;
                    toProto(message: _72.Height): Uint8Array;
                    toProtoMsg(message: _72.Height): _72.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _72.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Params;
                    fromJSON(object: any): _72.Params;
                    toJSON(message: _72.Params): unknown;
                    fromPartial(object: {
                        allowed_clients?: string[];
                    }): _72.Params;
                    fromAmino(object: _72.ParamsAmino): _72.Params;
                    toAmino(message: _72.Params): _72.ParamsAmino;
                    fromAminoMsg(object: _72.ParamsAminoMsg): _72.Params;
                    toAminoMsg(message: _72.Params): _72.ParamsAminoMsg;
                    fromProtoMsg(message: _72.ParamsProtoMsg): _72.Params;
                    toProto(message: _72.Params): Uint8Array;
                    toProtoMsg(message: _72.Params): _72.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _76.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MerkleRoot;
                    fromJSON(object: any): _76.MerkleRoot;
                    toJSON(message: _76.MerkleRoot): unknown;
                    fromPartial(object: {
                        hash?: Uint8Array;
                    }): _76.MerkleRoot;
                    fromAmino(object: _76.MerkleRootAmino): _76.MerkleRoot;
                    toAmino(message: _76.MerkleRoot): _76.MerkleRootAmino;
                    fromAminoMsg(object: _76.MerkleRootAminoMsg): _76.MerkleRoot;
                    toAminoMsg(message: _76.MerkleRoot): _76.MerkleRootAminoMsg;
                    fromProtoMsg(message: _76.MerkleRootProtoMsg): _76.MerkleRoot;
                    toProto(message: _76.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _76.MerkleRoot): _76.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _76.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MerklePrefix;
                    fromJSON(object: any): _76.MerklePrefix;
                    toJSON(message: _76.MerklePrefix): unknown;
                    fromPartial(object: {
                        key_prefix?: Uint8Array;
                    }): _76.MerklePrefix;
                    fromAmino(object: _76.MerklePrefixAmino): _76.MerklePrefix;
                    toAmino(message: _76.MerklePrefix): _76.MerklePrefixAmino;
                    fromAminoMsg(object: _76.MerklePrefixAminoMsg): _76.MerklePrefix;
                    toAminoMsg(message: _76.MerklePrefix): _76.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _76.MerklePrefixProtoMsg): _76.MerklePrefix;
                    toProto(message: _76.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _76.MerklePrefix): _76.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _76.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MerklePath;
                    fromJSON(object: any): _76.MerklePath;
                    toJSON(message: _76.MerklePath): unknown;
                    fromPartial(object: {
                        key_path?: string[];
                    }): _76.MerklePath;
                    fromAmino(object: _76.MerklePathAmino): _76.MerklePath;
                    toAmino(message: _76.MerklePath): _76.MerklePathAmino;
                    fromAminoMsg(object: _76.MerklePathAminoMsg): _76.MerklePath;
                    toAminoMsg(message: _76.MerklePath): _76.MerklePathAminoMsg;
                    fromProtoMsg(message: _76.MerklePathProtoMsg): _76.MerklePath;
                    toProto(message: _76.MerklePath): Uint8Array;
                    toProtoMsg(message: _76.MerklePath): _76.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _76.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MerkleProof;
                    fromJSON(object: any): _76.MerkleProof;
                    toJSON(message: _76.MerkleProof): unknown;
                    fromPartial(object: {
                        proofs?: {
                            exist?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prehash_key?: import("../confio/proofs").HashOp;
                                    prehash_value?: import("../confio/proofs").HashOp;
                                    length?: import("../confio/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                            nonexist?: {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehash_key?: import("../confio/proofs").HashOp;
                                        prehash_value?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehash_key?: import("../confio/proofs").HashOp;
                                        prehash_value?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                            };
                            batch?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehash_key?: import("../confio/proofs").HashOp;
                                            prehash_value?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehash_key?: import("../confio/proofs").HashOp;
                                                prehash_value?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehash_key?: import("../confio/proofs").HashOp;
                                                prehash_value?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[];
                            };
                            compressed?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehash_key?: import("../confio/proofs").HashOp;
                                            prehash_value?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehash_key?: import("../confio/proofs").HashOp;
                                                prehash_value?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehash_key?: import("../confio/proofs").HashOp;
                                                prehash_value?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[];
                                lookup_inners?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                        }[];
                    }): _76.MerkleProof;
                    fromAmino(object: _76.MerkleProofAmino): _76.MerkleProof;
                    toAmino(message: _76.MerkleProof): _76.MerkleProofAmino;
                    fromAminoMsg(object: _76.MerkleProofAminoMsg): _76.MerkleProof;
                    toAminoMsg(message: _76.MerkleProof): _76.MerkleProofAminoMsg;
                    fromProtoMsg(message: _76.MerkleProofProtoMsg): _76.MerkleProof;
                    toProto(message: _76.MerkleProof): Uint8Array;
                    toProtoMsg(message: _76.MerkleProof): _76.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                Msg: typeof _191.Msg;
                Query: typeof _187.Query;
                QueryClientImpl: typeof _187.QueryClientImpl;
                LCDQueryClient: typeof _183.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _80.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _80.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _80.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _80.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _80.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _80.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _80.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _80.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _80.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _80.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _80.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _80.MsgConnectionOpenConfirm;
                        };
                    };
                    toJSON: {
                        connectionOpenInit(value: _80.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenTry(value: _80.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenAck(value: _80.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenConfirm(value: _80.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _80.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _80.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _80.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _80.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _80.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _80.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _80.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _80.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _80.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _80.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _80.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _80.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _80.MsgConnectionOpenInit) => _80.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _80.MsgConnectionOpenInitAmino) => _80.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _80.MsgConnectionOpenTry) => _80.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _80.MsgConnectionOpenTryAmino) => _80.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _80.MsgConnectionOpenAck) => _80.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _80.MsgConnectionOpenAckAmino) => _80.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _80.MsgConnectionOpenConfirm) => _80.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _80.MsgConnectionOpenConfirmAmino) => _80.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _80.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgConnectionOpenInit;
                    fromJSON(object: any): _80.MsgConnectionOpenInit;
                    toJSON(message: _80.MsgConnectionOpenInit): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        counterparty?: {
                            client_id?: string;
                            connection_id?: string;
                            prefix?: {
                                key_prefix?: Uint8Array;
                            };
                        };
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        delay_period?: string | number | import("long").Long;
                        signer?: string;
                    }): _80.MsgConnectionOpenInit;
                    fromAmino(object: _80.MsgConnectionOpenInitAmino): _80.MsgConnectionOpenInit;
                    toAmino(message: _80.MsgConnectionOpenInit): _80.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _80.MsgConnectionOpenInitAminoMsg): _80.MsgConnectionOpenInit;
                    toAminoMsg(message: _80.MsgConnectionOpenInit): _80.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _80.MsgConnectionOpenInitProtoMsg): _80.MsgConnectionOpenInit;
                    toProto(message: _80.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _80.MsgConnectionOpenInit): _80.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _80.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _80.MsgConnectionOpenInitResponse;
                    toJSON(_: _80.MsgConnectionOpenInitResponse): unknown;
                    fromPartial(_: {}): _80.MsgConnectionOpenInitResponse;
                    fromAmino(_: _80.MsgConnectionOpenInitResponseAmino): _80.MsgConnectionOpenInitResponse;
                    toAmino(_: _80.MsgConnectionOpenInitResponse): _80.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _80.MsgConnectionOpenInitResponseAminoMsg): _80.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _80.MsgConnectionOpenInitResponse): _80.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _80.MsgConnectionOpenInitResponseProtoMsg): _80.MsgConnectionOpenInitResponse;
                    toProto(message: _80.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _80.MsgConnectionOpenInitResponse): _80.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _80.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgConnectionOpenTry;
                    fromJSON(object: any): _80.MsgConnectionOpenTry;
                    toJSON(message: _80.MsgConnectionOpenTry): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        previous_connection_id?: string;
                        client_state?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        counterparty?: {
                            client_id?: string;
                            connection_id?: string;
                            prefix?: {
                                key_prefix?: Uint8Array;
                            };
                        };
                        delay_period?: string | number | import("long").Long;
                        counterparty_versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        proof_height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                        proof_init?: Uint8Array;
                        proof_client?: Uint8Array;
                        proof_consensus?: Uint8Array;
                        consensus_height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                        signer?: string;
                    }): _80.MsgConnectionOpenTry;
                    fromAmino(object: _80.MsgConnectionOpenTryAmino): _80.MsgConnectionOpenTry;
                    toAmino(message: _80.MsgConnectionOpenTry): _80.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _80.MsgConnectionOpenTryAminoMsg): _80.MsgConnectionOpenTry;
                    toAminoMsg(message: _80.MsgConnectionOpenTry): _80.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _80.MsgConnectionOpenTryProtoMsg): _80.MsgConnectionOpenTry;
                    toProto(message: _80.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _80.MsgConnectionOpenTry): _80.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _80.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _80.MsgConnectionOpenTryResponse;
                    toJSON(_: _80.MsgConnectionOpenTryResponse): unknown;
                    fromPartial(_: {}): _80.MsgConnectionOpenTryResponse;
                    fromAmino(_: _80.MsgConnectionOpenTryResponseAmino): _80.MsgConnectionOpenTryResponse;
                    toAmino(_: _80.MsgConnectionOpenTryResponse): _80.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _80.MsgConnectionOpenTryResponseAminoMsg): _80.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _80.MsgConnectionOpenTryResponse): _80.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _80.MsgConnectionOpenTryResponseProtoMsg): _80.MsgConnectionOpenTryResponse;
                    toProto(message: _80.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _80.MsgConnectionOpenTryResponse): _80.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _80.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgConnectionOpenAck;
                    fromJSON(object: any): _80.MsgConnectionOpenAck;
                    toJSON(message: _80.MsgConnectionOpenAck): unknown;
                    fromPartial(object: {
                        connection_id?: string;
                        counterparty_connection_id?: string;
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        client_state?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        proof_height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                        proof_try?: Uint8Array;
                        proof_client?: Uint8Array;
                        proof_consensus?: Uint8Array;
                        consensus_height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                        signer?: string;
                    }): _80.MsgConnectionOpenAck;
                    fromAmino(object: _80.MsgConnectionOpenAckAmino): _80.MsgConnectionOpenAck;
                    toAmino(message: _80.MsgConnectionOpenAck): _80.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _80.MsgConnectionOpenAckAminoMsg): _80.MsgConnectionOpenAck;
                    toAminoMsg(message: _80.MsgConnectionOpenAck): _80.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _80.MsgConnectionOpenAckProtoMsg): _80.MsgConnectionOpenAck;
                    toProto(message: _80.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _80.MsgConnectionOpenAck): _80.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _80.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _80.MsgConnectionOpenAckResponse;
                    toJSON(_: _80.MsgConnectionOpenAckResponse): unknown;
                    fromPartial(_: {}): _80.MsgConnectionOpenAckResponse;
                    fromAmino(_: _80.MsgConnectionOpenAckResponseAmino): _80.MsgConnectionOpenAckResponse;
                    toAmino(_: _80.MsgConnectionOpenAckResponse): _80.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _80.MsgConnectionOpenAckResponseAminoMsg): _80.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _80.MsgConnectionOpenAckResponse): _80.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _80.MsgConnectionOpenAckResponseProtoMsg): _80.MsgConnectionOpenAckResponse;
                    toProto(message: _80.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _80.MsgConnectionOpenAckResponse): _80.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _80.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _80.MsgConnectionOpenConfirm;
                    toJSON(message: _80.MsgConnectionOpenConfirm): unknown;
                    fromPartial(object: {
                        connection_id?: string;
                        proof_ack?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                        signer?: string;
                    }): _80.MsgConnectionOpenConfirm;
                    fromAmino(object: _80.MsgConnectionOpenConfirmAmino): _80.MsgConnectionOpenConfirm;
                    toAmino(message: _80.MsgConnectionOpenConfirm): _80.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _80.MsgConnectionOpenConfirmAminoMsg): _80.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _80.MsgConnectionOpenConfirm): _80.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _80.MsgConnectionOpenConfirmProtoMsg): _80.MsgConnectionOpenConfirm;
                    toProto(message: _80.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _80.MsgConnectionOpenConfirm): _80.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _80.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _80.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _80.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial(_: {}): _80.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _80.MsgConnectionOpenConfirmResponseAmino): _80.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _80.MsgConnectionOpenConfirmResponse): _80.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _80.MsgConnectionOpenConfirmResponseAminoMsg): _80.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _80.MsgConnectionOpenConfirmResponse): _80.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _80.MsgConnectionOpenConfirmResponseProtoMsg): _80.MsgConnectionOpenConfirmResponse;
                    toProto(message: _80.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _80.MsgConnectionOpenConfirmResponse): _80.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _79.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryConnectionRequest;
                    fromJSON(object: any): _79.QueryConnectionRequest;
                    toJSON(message: _79.QueryConnectionRequest): unknown;
                    fromPartial(object: {
                        connection_id?: string;
                    }): _79.QueryConnectionRequest;
                    fromAmino(object: _79.QueryConnectionRequestAmino): _79.QueryConnectionRequest;
                    toAmino(message: _79.QueryConnectionRequest): _79.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _79.QueryConnectionRequestAminoMsg): _79.QueryConnectionRequest;
                    toAminoMsg(message: _79.QueryConnectionRequest): _79.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _79.QueryConnectionRequestProtoMsg): _79.QueryConnectionRequest;
                    toProto(message: _79.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _79.QueryConnectionRequest): _79.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _79.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryConnectionResponse;
                    fromJSON(object: any): _79.QueryConnectionResponse;
                    toJSON(message: _79.QueryConnectionResponse): unknown;
                    fromPartial(object: {
                        connection?: {
                            client_id?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _77.State;
                            counterparty?: {
                                client_id?: string;
                                connection_id?: string;
                                prefix?: {
                                    key_prefix?: Uint8Array;
                                };
                            };
                            delay_period?: string | number | import("long").Long;
                        };
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                    }): _79.QueryConnectionResponse;
                    fromAmino(object: _79.QueryConnectionResponseAmino): _79.QueryConnectionResponse;
                    toAmino(message: _79.QueryConnectionResponse): _79.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _79.QueryConnectionResponseAminoMsg): _79.QueryConnectionResponse;
                    toAminoMsg(message: _79.QueryConnectionResponse): _79.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _79.QueryConnectionResponseProtoMsg): _79.QueryConnectionResponse;
                    toProto(message: _79.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _79.QueryConnectionResponse): _79.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _79.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryConnectionsRequest;
                    fromJSON(object: any): _79.QueryConnectionsRequest;
                    toJSON(message: _79.QueryConnectionsRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").Long;
                            limit?: string | number | import("long").Long;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _79.QueryConnectionsRequest;
                    fromAmino(object: _79.QueryConnectionsRequestAmino): _79.QueryConnectionsRequest;
                    toAmino(message: _79.QueryConnectionsRequest): _79.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _79.QueryConnectionsRequestAminoMsg): _79.QueryConnectionsRequest;
                    toAminoMsg(message: _79.QueryConnectionsRequest): _79.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _79.QueryConnectionsRequestProtoMsg): _79.QueryConnectionsRequest;
                    toProto(message: _79.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _79.QueryConnectionsRequest): _79.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _79.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryConnectionsResponse;
                    fromJSON(object: any): _79.QueryConnectionsResponse;
                    toJSON(message: _79.QueryConnectionsResponse): unknown;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            client_id?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _77.State;
                            counterparty?: {
                                client_id?: string;
                                connection_id?: string;
                                prefix?: {
                                    key_prefix?: Uint8Array;
                                };
                            };
                            delay_period?: string | number | import("long").Long;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: string | number | import("long").Long;
                        };
                        height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                    }): _79.QueryConnectionsResponse;
                    fromAmino(object: _79.QueryConnectionsResponseAmino): _79.QueryConnectionsResponse;
                    toAmino(message: _79.QueryConnectionsResponse): _79.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _79.QueryConnectionsResponseAminoMsg): _79.QueryConnectionsResponse;
                    toAminoMsg(message: _79.QueryConnectionsResponse): _79.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _79.QueryConnectionsResponseProtoMsg): _79.QueryConnectionsResponse;
                    toProto(message: _79.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _79.QueryConnectionsResponse): _79.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _79.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryClientConnectionsRequest;
                    fromJSON(object: any): _79.QueryClientConnectionsRequest;
                    toJSON(message: _79.QueryClientConnectionsRequest): unknown;
                    fromPartial(object: {
                        client_id?: string;
                    }): _79.QueryClientConnectionsRequest;
                    fromAmino(object: _79.QueryClientConnectionsRequestAmino): _79.QueryClientConnectionsRequest;
                    toAmino(message: _79.QueryClientConnectionsRequest): _79.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _79.QueryClientConnectionsRequestAminoMsg): _79.QueryClientConnectionsRequest;
                    toAminoMsg(message: _79.QueryClientConnectionsRequest): _79.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _79.QueryClientConnectionsRequestProtoMsg): _79.QueryClientConnectionsRequest;
                    toProto(message: _79.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _79.QueryClientConnectionsRequest): _79.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _79.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryClientConnectionsResponse;
                    fromJSON(object: any): _79.QueryClientConnectionsResponse;
                    toJSON(message: _79.QueryClientConnectionsResponse): unknown;
                    fromPartial(object: {
                        connection_paths?: string[];
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                    }): _79.QueryClientConnectionsResponse;
                    fromAmino(object: _79.QueryClientConnectionsResponseAmino): _79.QueryClientConnectionsResponse;
                    toAmino(message: _79.QueryClientConnectionsResponse): _79.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _79.QueryClientConnectionsResponseAminoMsg): _79.QueryClientConnectionsResponse;
                    toAminoMsg(message: _79.QueryClientConnectionsResponse): _79.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _79.QueryClientConnectionsResponseProtoMsg): _79.QueryClientConnectionsResponse;
                    toProto(message: _79.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _79.QueryClientConnectionsResponse): _79.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _79.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _79.QueryConnectionClientStateRequest;
                    toJSON(message: _79.QueryConnectionClientStateRequest): unknown;
                    fromPartial(object: {
                        connection_id?: string;
                    }): _79.QueryConnectionClientStateRequest;
                    fromAmino(object: _79.QueryConnectionClientStateRequestAmino): _79.QueryConnectionClientStateRequest;
                    toAmino(message: _79.QueryConnectionClientStateRequest): _79.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _79.QueryConnectionClientStateRequestAminoMsg): _79.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _79.QueryConnectionClientStateRequest): _79.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _79.QueryConnectionClientStateRequestProtoMsg): _79.QueryConnectionClientStateRequest;
                    toProto(message: _79.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _79.QueryConnectionClientStateRequest): _79.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _79.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _79.QueryConnectionClientStateResponse;
                    toJSON(message: _79.QueryConnectionClientStateResponse): unknown;
                    fromPartial(object: {
                        identified_client_state?: {
                            client_id?: string;
                            client_state?: {
                                $typeUrl?: string;
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                    }): _79.QueryConnectionClientStateResponse;
                    fromAmino(object: _79.QueryConnectionClientStateResponseAmino): _79.QueryConnectionClientStateResponse;
                    toAmino(message: _79.QueryConnectionClientStateResponse): _79.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _79.QueryConnectionClientStateResponseAminoMsg): _79.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _79.QueryConnectionClientStateResponse): _79.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _79.QueryConnectionClientStateResponseProtoMsg): _79.QueryConnectionClientStateResponse;
                    toProto(message: _79.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _79.QueryConnectionClientStateResponse): _79.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _79.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _79.QueryConnectionConsensusStateRequest;
                    toJSON(message: _79.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial(object: {
                        connection_id?: string;
                        revision_number?: string | number | import("long").Long;
                        revision_height?: string | number | import("long").Long;
                    }): _79.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _79.QueryConnectionConsensusStateRequestAmino): _79.QueryConnectionConsensusStateRequest;
                    toAmino(message: _79.QueryConnectionConsensusStateRequest): _79.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _79.QueryConnectionConsensusStateRequestAminoMsg): _79.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _79.QueryConnectionConsensusStateRequest): _79.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _79.QueryConnectionConsensusStateRequestProtoMsg): _79.QueryConnectionConsensusStateRequest;
                    toProto(message: _79.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _79.QueryConnectionConsensusStateRequest): _79.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _79.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _79.QueryConnectionConsensusStateResponse;
                    toJSON(message: _79.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial(object: {
                        consensus_state?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        client_id?: string;
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                    }): _79.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _79.QueryConnectionConsensusStateResponseAmino): _79.QueryConnectionConsensusStateResponse;
                    toAmino(message: _79.QueryConnectionConsensusStateResponse): _79.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _79.QueryConnectionConsensusStateResponseAminoMsg): _79.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _79.QueryConnectionConsensusStateResponse): _79.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _79.QueryConnectionConsensusStateResponseProtoMsg): _79.QueryConnectionConsensusStateResponse;
                    toProto(message: _79.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _79.QueryConnectionConsensusStateResponse): _79.QueryConnectionConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _78.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.GenesisState;
                    fromJSON(object: any): _78.GenesisState;
                    toJSON(message: _78.GenesisState): unknown;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            client_id?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _77.State;
                            counterparty?: {
                                client_id?: string;
                                connection_id?: string;
                                prefix?: {
                                    key_prefix?: Uint8Array;
                                };
                            };
                            delay_period?: string | number | import("long").Long;
                        }[];
                        client_connection_paths?: {
                            client_id?: string;
                            paths?: string[];
                        }[];
                        next_connection_sequence?: string | number | import("long").Long;
                        params?: {
                            max_expected_time_per_block?: string | number | import("long").Long;
                        };
                    }): _78.GenesisState;
                    fromAmino(object: _78.GenesisStateAmino): _78.GenesisState;
                    toAmino(message: _78.GenesisState): _78.GenesisStateAmino;
                    fromAminoMsg(object: _78.GenesisStateAminoMsg): _78.GenesisState;
                    toAminoMsg(message: _78.GenesisState): _78.GenesisStateAminoMsg;
                    fromProtoMsg(message: _78.GenesisStateProtoMsg): _78.GenesisState;
                    toProto(message: _78.GenesisState): Uint8Array;
                    toProtoMsg(message: _78.GenesisState): _78.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _77.State;
                stateToJSON(object: _77.State): string;
                State: typeof _77.State;
                StateSDKType: typeof _77.State;
                StateAmino: typeof _77.State;
                ConnectionEnd: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _77.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.ConnectionEnd;
                    fromJSON(object: any): _77.ConnectionEnd;
                    toJSON(message: _77.ConnectionEnd): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _77.State;
                        counterparty?: {
                            client_id?: string;
                            connection_id?: string;
                            prefix?: {
                                key_prefix?: Uint8Array;
                            };
                        };
                        delay_period?: string | number | import("long").Long;
                    }): _77.ConnectionEnd;
                    fromAmino(object: _77.ConnectionEndAmino): _77.ConnectionEnd;
                    toAmino(message: _77.ConnectionEnd): _77.ConnectionEndAmino;
                    fromAminoMsg(object: _77.ConnectionEndAminoMsg): _77.ConnectionEnd;
                    toAminoMsg(message: _77.ConnectionEnd): _77.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _77.ConnectionEndProtoMsg): _77.ConnectionEnd;
                    toProto(message: _77.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _77.ConnectionEnd): _77.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _77.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.IdentifiedConnection;
                    fromJSON(object: any): _77.IdentifiedConnection;
                    toJSON(message: _77.IdentifiedConnection): unknown;
                    fromPartial(object: {
                        id?: string;
                        client_id?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _77.State;
                        counterparty?: {
                            client_id?: string;
                            connection_id?: string;
                            prefix?: {
                                key_prefix?: Uint8Array;
                            };
                        };
                        delay_period?: string | number | import("long").Long;
                    }): _77.IdentifiedConnection;
                    fromAmino(object: _77.IdentifiedConnectionAmino): _77.IdentifiedConnection;
                    toAmino(message: _77.IdentifiedConnection): _77.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _77.IdentifiedConnectionAminoMsg): _77.IdentifiedConnection;
                    toAminoMsg(message: _77.IdentifiedConnection): _77.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _77.IdentifiedConnectionProtoMsg): _77.IdentifiedConnection;
                    toProto(message: _77.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _77.IdentifiedConnection): _77.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _77.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Counterparty;
                    fromJSON(object: any): _77.Counterparty;
                    toJSON(message: _77.Counterparty): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        connection_id?: string;
                        prefix?: {
                            key_prefix?: Uint8Array;
                        };
                    }): _77.Counterparty;
                    fromAmino(object: _77.CounterpartyAmino): _77.Counterparty;
                    toAmino(message: _77.Counterparty): _77.CounterpartyAmino;
                    fromAminoMsg(object: _77.CounterpartyAminoMsg): _77.Counterparty;
                    toAminoMsg(message: _77.Counterparty): _77.CounterpartyAminoMsg;
                    fromProtoMsg(message: _77.CounterpartyProtoMsg): _77.Counterparty;
                    toProto(message: _77.Counterparty): Uint8Array;
                    toProtoMsg(message: _77.Counterparty): _77.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _77.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.ClientPaths;
                    fromJSON(object: any): _77.ClientPaths;
                    toJSON(message: _77.ClientPaths): unknown;
                    fromPartial(object: {
                        paths?: string[];
                    }): _77.ClientPaths;
                    fromAmino(object: _77.ClientPathsAmino): _77.ClientPaths;
                    toAmino(message: _77.ClientPaths): _77.ClientPathsAmino;
                    fromAminoMsg(object: _77.ClientPathsAminoMsg): _77.ClientPaths;
                    toAminoMsg(message: _77.ClientPaths): _77.ClientPathsAminoMsg;
                    fromProtoMsg(message: _77.ClientPathsProtoMsg): _77.ClientPaths;
                    toProto(message: _77.ClientPaths): Uint8Array;
                    toProtoMsg(message: _77.ClientPaths): _77.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _77.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.ConnectionPaths;
                    fromJSON(object: any): _77.ConnectionPaths;
                    toJSON(message: _77.ConnectionPaths): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        paths?: string[];
                    }): _77.ConnectionPaths;
                    fromAmino(object: _77.ConnectionPathsAmino): _77.ConnectionPaths;
                    toAmino(message: _77.ConnectionPaths): _77.ConnectionPathsAmino;
                    fromAminoMsg(object: _77.ConnectionPathsAminoMsg): _77.ConnectionPaths;
                    toAminoMsg(message: _77.ConnectionPaths): _77.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _77.ConnectionPathsProtoMsg): _77.ConnectionPaths;
                    toProto(message: _77.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _77.ConnectionPaths): _77.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _77.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Version;
                    fromJSON(object: any): _77.Version;
                    toJSON(message: _77.Version): unknown;
                    fromPartial(object: {
                        identifier?: string;
                        features?: string[];
                    }): _77.Version;
                    fromAmino(object: _77.VersionAmino): _77.Version;
                    toAmino(message: _77.Version): _77.VersionAmino;
                    fromAminoMsg(object: _77.VersionAminoMsg): _77.Version;
                    toAminoMsg(message: _77.Version): _77.VersionAminoMsg;
                    fromProtoMsg(message: _77.VersionProtoMsg): _77.Version;
                    toProto(message: _77.Version): Uint8Array;
                    toProtoMsg(message: _77.Version): _77.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _77.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Params;
                    fromJSON(object: any): _77.Params;
                    toJSON(message: _77.Params): unknown;
                    fromPartial(object: {
                        max_expected_time_per_block?: string | number | import("long").Long;
                    }): _77.Params;
                    fromAmino(object: _77.ParamsAmino): _77.Params;
                    toAmino(message: _77.Params): _77.ParamsAmino;
                    fromAminoMsg(object: _77.ParamsAminoMsg): _77.Params;
                    toAminoMsg(message: _77.Params): _77.ParamsAminoMsg;
                    fromProtoMsg(message: _77.ParamsProtoMsg): _77.Params;
                    toProto(message: _77.Params): Uint8Array;
                    toProtoMsg(message: _77.Params): _77.ParamsProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _81.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.ClientState;
                    fromJSON(object: any): _81.ClientState;
                    toJSON(message: _81.ClientState): unknown;
                    fromPartial(object: {
                        chain_id?: string;
                        height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                    }): _81.ClientState;
                    fromAmino(object: _81.ClientStateAmino): _81.ClientState;
                    toAmino(message: _81.ClientState): _81.ClientStateAmino;
                    fromAminoMsg(object: _81.ClientStateAminoMsg): _81.ClientState;
                    toAminoMsg(message: _81.ClientState): _81.ClientStateAminoMsg;
                    fromProtoMsg(message: _81.ClientStateProtoMsg): _81.ClientState;
                    toProto(message: _81.ClientState): Uint8Array;
                    toProtoMsg(message: _81.ClientState): _81.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _82.DataType;
                dataTypeToJSON(object: _82.DataType): string;
                DataType: typeof _82.DataType;
                DataTypeSDKType: typeof _82.DataType;
                DataTypeAmino: typeof _82.DataType;
                ClientState: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _82.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ClientState;
                    fromJSON(object: any): _82.ClientState;
                    toJSON(message: _82.ClientState): unknown;
                    fromPartial(object: {
                        sequence?: string | number | import("long").Long;
                        frozen_sequence?: string | number | import("long").Long;
                        consensus_state?: {
                            public_key?: {
                                $typeUrl?: string;
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: string | number | import("long").Long;
                        };
                        allow_update_after_proposal?: boolean;
                    }): _82.ClientState;
                    fromAmino(object: _82.ClientStateAmino): _82.ClientState;
                    toAmino(message: _82.ClientState): _82.ClientStateAmino;
                    fromAminoMsg(object: _82.ClientStateAminoMsg): _82.ClientState;
                    toAminoMsg(message: _82.ClientState): _82.ClientStateAminoMsg;
                    fromProtoMsg(message: _82.ClientStateProtoMsg): _82.ClientState;
                    toProto(message: _82.ClientState): Uint8Array;
                    toProtoMsg(message: _82.ClientState): _82.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _82.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ConsensusState;
                    fromJSON(object: any): _82.ConsensusState;
                    toJSON(message: _82.ConsensusState): unknown;
                    fromPartial(object: {
                        public_key?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: string | number | import("long").Long;
                    }): _82.ConsensusState;
                    fromAmino(object: _82.ConsensusStateAmino): _82.ConsensusState;
                    toAmino(message: _82.ConsensusState): _82.ConsensusStateAmino;
                    fromAminoMsg(object: _82.ConsensusStateAminoMsg): _82.ConsensusState;
                    toAminoMsg(message: _82.ConsensusState): _82.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _82.ConsensusStateProtoMsg): _82.ConsensusState;
                    toProto(message: _82.ConsensusState): Uint8Array;
                    toProtoMsg(message: _82.ConsensusState): _82.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _82.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Header;
                    fromJSON(object: any): _82.Header;
                    toJSON(message: _82.Header): unknown;
                    fromPartial(object: {
                        sequence?: string | number | import("long").Long;
                        timestamp?: string | number | import("long").Long;
                        signature?: Uint8Array;
                        new_public_key?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        new_diversifier?: string;
                    }): _82.Header;
                    fromAmino(object: _82.HeaderAmino): _82.Header;
                    toAmino(message: _82.Header): _82.HeaderAmino;
                    fromAminoMsg(object: _82.HeaderAminoMsg): _82.Header;
                    toAminoMsg(message: _82.Header): _82.HeaderAminoMsg;
                    fromProtoMsg(message: _82.HeaderProtoMsg): _82.Header;
                    toProto(message: _82.Header): Uint8Array;
                    toProtoMsg(message: _82.Header): _82.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _82.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Misbehaviour;
                    fromJSON(object: any): _82.Misbehaviour;
                    toJSON(message: _82.Misbehaviour): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        sequence?: string | number | import("long").Long;
                        signature_one?: {
                            signature?: Uint8Array;
                            data_type?: _82.DataType;
                            data?: Uint8Array;
                            timestamp?: string | number | import("long").Long;
                        };
                        signature_two?: {
                            signature?: Uint8Array;
                            data_type?: _82.DataType;
                            data?: Uint8Array;
                            timestamp?: string | number | import("long").Long;
                        };
                    }): _82.Misbehaviour;
                    fromAmino(object: _82.MisbehaviourAmino): _82.Misbehaviour;
                    toAmino(message: _82.Misbehaviour): _82.MisbehaviourAmino;
                    fromAminoMsg(object: _82.MisbehaviourAminoMsg): _82.Misbehaviour;
                    toAminoMsg(message: _82.Misbehaviour): _82.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _82.MisbehaviourProtoMsg): _82.Misbehaviour;
                    toProto(message: _82.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _82.Misbehaviour): _82.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _82.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.SignatureAndData;
                    fromJSON(object: any): _82.SignatureAndData;
                    toJSON(message: _82.SignatureAndData): unknown;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        data_type?: _82.DataType;
                        data?: Uint8Array;
                        timestamp?: string | number | import("long").Long;
                    }): _82.SignatureAndData;
                    fromAmino(object: _82.SignatureAndDataAmino): _82.SignatureAndData;
                    toAmino(message: _82.SignatureAndData): _82.SignatureAndDataAmino;
                    fromAminoMsg(object: _82.SignatureAndDataAminoMsg): _82.SignatureAndData;
                    toAminoMsg(message: _82.SignatureAndData): _82.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _82.SignatureAndDataProtoMsg): _82.SignatureAndData;
                    toProto(message: _82.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _82.SignatureAndData): _82.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _82.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.TimestampedSignatureData;
                    fromJSON(object: any): _82.TimestampedSignatureData;
                    toJSON(message: _82.TimestampedSignatureData): unknown;
                    fromPartial(object: {
                        signature_data?: Uint8Array;
                        timestamp?: string | number | import("long").Long;
                    }): _82.TimestampedSignatureData;
                    fromAmino(object: _82.TimestampedSignatureDataAmino): _82.TimestampedSignatureData;
                    toAmino(message: _82.TimestampedSignatureData): _82.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _82.TimestampedSignatureDataAminoMsg): _82.TimestampedSignatureData;
                    toAminoMsg(message: _82.TimestampedSignatureData): _82.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _82.TimestampedSignatureDataProtoMsg): _82.TimestampedSignatureData;
                    toProto(message: _82.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _82.TimestampedSignatureData): _82.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _82.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.SignBytes;
                    fromJSON(object: any): _82.SignBytes;
                    toJSON(message: _82.SignBytes): unknown;
                    fromPartial(object: {
                        sequence?: string | number | import("long").Long;
                        timestamp?: string | number | import("long").Long;
                        diversifier?: string;
                        data_type?: _82.DataType;
                        data?: Uint8Array;
                    }): _82.SignBytes;
                    fromAmino(object: _82.SignBytesAmino): _82.SignBytes;
                    toAmino(message: _82.SignBytes): _82.SignBytesAmino;
                    fromAminoMsg(object: _82.SignBytesAminoMsg): _82.SignBytes;
                    toAminoMsg(message: _82.SignBytes): _82.SignBytesAminoMsg;
                    fromProtoMsg(message: _82.SignBytesProtoMsg): _82.SignBytes;
                    toProto(message: _82.SignBytes): Uint8Array;
                    toProtoMsg(message: _82.SignBytes): _82.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _82.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.HeaderData;
                    fromJSON(object: any): _82.HeaderData;
                    toJSON(message: _82.HeaderData): unknown;
                    fromPartial(object: {
                        new_pub_key?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        new_diversifier?: string;
                    }): _82.HeaderData;
                    fromAmino(object: _82.HeaderDataAmino): _82.HeaderData;
                    toAmino(message: _82.HeaderData): _82.HeaderDataAmino;
                    fromAminoMsg(object: _82.HeaderDataAminoMsg): _82.HeaderData;
                    toAminoMsg(message: _82.HeaderData): _82.HeaderDataAminoMsg;
                    fromProtoMsg(message: _82.HeaderDataProtoMsg): _82.HeaderData;
                    toProto(message: _82.HeaderData): Uint8Array;
                    toProtoMsg(message: _82.HeaderData): _82.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _82.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ClientStateData;
                    fromJSON(object: any): _82.ClientStateData;
                    toJSON(message: _82.ClientStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        client_state?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _82.ClientStateData;
                    fromAmino(object: _82.ClientStateDataAmino): _82.ClientStateData;
                    toAmino(message: _82.ClientStateData): _82.ClientStateDataAmino;
                    fromAminoMsg(object: _82.ClientStateDataAminoMsg): _82.ClientStateData;
                    toAminoMsg(message: _82.ClientStateData): _82.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _82.ClientStateDataProtoMsg): _82.ClientStateData;
                    toProto(message: _82.ClientStateData): Uint8Array;
                    toProtoMsg(message: _82.ClientStateData): _82.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _82.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ConsensusStateData;
                    fromJSON(object: any): _82.ConsensusStateData;
                    toJSON(message: _82.ConsensusStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensus_state?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _82.ConsensusStateData;
                    fromAmino(object: _82.ConsensusStateDataAmino): _82.ConsensusStateData;
                    toAmino(message: _82.ConsensusStateData): _82.ConsensusStateDataAmino;
                    fromAminoMsg(object: _82.ConsensusStateDataAminoMsg): _82.ConsensusStateData;
                    toAminoMsg(message: _82.ConsensusStateData): _82.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _82.ConsensusStateDataProtoMsg): _82.ConsensusStateData;
                    toProto(message: _82.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _82.ConsensusStateData): _82.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _82.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ConnectionStateData;
                    fromJSON(object: any): _82.ConnectionStateData;
                    toJSON(message: _82.ConnectionStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            client_id?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _77.State;
                            counterparty?: {
                                client_id?: string;
                                connection_id?: string;
                                prefix?: {
                                    key_prefix?: Uint8Array;
                                };
                            };
                            delay_period?: string | number | import("long").Long;
                        };
                    }): _82.ConnectionStateData;
                    fromAmino(object: _82.ConnectionStateDataAmino): _82.ConnectionStateData;
                    toAmino(message: _82.ConnectionStateData): _82.ConnectionStateDataAmino;
                    fromAminoMsg(object: _82.ConnectionStateDataAminoMsg): _82.ConnectionStateData;
                    toAminoMsg(message: _82.ConnectionStateData): _82.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _82.ConnectionStateDataProtoMsg): _82.ConnectionStateData;
                    toProto(message: _82.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _82.ConnectionStateData): _82.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _82.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ChannelStateData;
                    fromJSON(object: any): _82.ChannelStateData;
                    toJSON(message: _82.ChannelStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _68.State;
                            ordering?: _68.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                        };
                    }): _82.ChannelStateData;
                    fromAmino(object: _82.ChannelStateDataAmino): _82.ChannelStateData;
                    toAmino(message: _82.ChannelStateData): _82.ChannelStateDataAmino;
                    fromAminoMsg(object: _82.ChannelStateDataAminoMsg): _82.ChannelStateData;
                    toAminoMsg(message: _82.ChannelStateData): _82.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _82.ChannelStateDataProtoMsg): _82.ChannelStateData;
                    toProto(message: _82.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _82.ChannelStateData): _82.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _82.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.PacketCommitmentData;
                    fromJSON(object: any): _82.PacketCommitmentData;
                    toJSON(message: _82.PacketCommitmentData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _82.PacketCommitmentData;
                    fromAmino(object: _82.PacketCommitmentDataAmino): _82.PacketCommitmentData;
                    toAmino(message: _82.PacketCommitmentData): _82.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _82.PacketCommitmentDataAminoMsg): _82.PacketCommitmentData;
                    toAminoMsg(message: _82.PacketCommitmentData): _82.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _82.PacketCommitmentDataProtoMsg): _82.PacketCommitmentData;
                    toProto(message: _82.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _82.PacketCommitmentData): _82.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _82.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.PacketAcknowledgementData;
                    fromJSON(object: any): _82.PacketAcknowledgementData;
                    toJSON(message: _82.PacketAcknowledgementData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _82.PacketAcknowledgementData;
                    fromAmino(object: _82.PacketAcknowledgementDataAmino): _82.PacketAcknowledgementData;
                    toAmino(message: _82.PacketAcknowledgementData): _82.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _82.PacketAcknowledgementDataAminoMsg): _82.PacketAcknowledgementData;
                    toAminoMsg(message: _82.PacketAcknowledgementData): _82.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _82.PacketAcknowledgementDataProtoMsg): _82.PacketAcknowledgementData;
                    toProto(message: _82.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _82.PacketAcknowledgementData): _82.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _82.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.PacketReceiptAbsenceData;
                    fromJSON(object: any): _82.PacketReceiptAbsenceData;
                    toJSON(message: _82.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _82.PacketReceiptAbsenceData;
                    fromAmino(object: _82.PacketReceiptAbsenceDataAmino): _82.PacketReceiptAbsenceData;
                    toAmino(message: _82.PacketReceiptAbsenceData): _82.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _82.PacketReceiptAbsenceDataAminoMsg): _82.PacketReceiptAbsenceData;
                    toAminoMsg(message: _82.PacketReceiptAbsenceData): _82.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _82.PacketReceiptAbsenceDataProtoMsg): _82.PacketReceiptAbsenceData;
                    toProto(message: _82.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _82.PacketReceiptAbsenceData): _82.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _82.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.NextSequenceRecvData;
                    fromJSON(object: any): _82.NextSequenceRecvData;
                    toJSON(message: _82.NextSequenceRecvData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        next_seq_recv?: string | number | import("long").Long;
                    }): _82.NextSequenceRecvData;
                    fromAmino(object: _82.NextSequenceRecvDataAmino): _82.NextSequenceRecvData;
                    toAmino(message: _82.NextSequenceRecvData): _82.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _82.NextSequenceRecvDataAminoMsg): _82.NextSequenceRecvData;
                    toAminoMsg(message: _82.NextSequenceRecvData): _82.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _82.NextSequenceRecvDataProtoMsg): _82.NextSequenceRecvData;
                    toProto(message: _82.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _82.NextSequenceRecvData): _82.NextSequenceRecvDataProtoMsg;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _83.DataType;
                dataTypeToJSON(object: _83.DataType): string;
                DataType: typeof _83.DataType;
                DataTypeSDKType: typeof _83.DataType;
                DataTypeAmino: typeof _83.DataType;
                ClientState: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _83.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ClientState;
                    fromJSON(object: any): _83.ClientState;
                    toJSON(message: _83.ClientState): unknown;
                    fromPartial(object: {
                        sequence?: string | number | import("long").Long;
                        is_frozen?: boolean;
                        consensus_state?: {
                            public_key?: {
                                $typeUrl?: string;
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: string | number | import("long").Long;
                        };
                        allow_update_after_proposal?: boolean;
                    }): _83.ClientState;
                    fromAmino(object: _83.ClientStateAmino): _83.ClientState;
                    toAmino(message: _83.ClientState): _83.ClientStateAmino;
                    fromAminoMsg(object: _83.ClientStateAminoMsg): _83.ClientState;
                    toAminoMsg(message: _83.ClientState): _83.ClientStateAminoMsg;
                    fromProtoMsg(message: _83.ClientStateProtoMsg): _83.ClientState;
                    toProto(message: _83.ClientState): Uint8Array;
                    toProtoMsg(message: _83.ClientState): _83.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _83.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ConsensusState;
                    fromJSON(object: any): _83.ConsensusState;
                    toJSON(message: _83.ConsensusState): unknown;
                    fromPartial(object: {
                        public_key?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: string | number | import("long").Long;
                    }): _83.ConsensusState;
                    fromAmino(object: _83.ConsensusStateAmino): _83.ConsensusState;
                    toAmino(message: _83.ConsensusState): _83.ConsensusStateAmino;
                    fromAminoMsg(object: _83.ConsensusStateAminoMsg): _83.ConsensusState;
                    toAminoMsg(message: _83.ConsensusState): _83.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _83.ConsensusStateProtoMsg): _83.ConsensusState;
                    toProto(message: _83.ConsensusState): Uint8Array;
                    toProtoMsg(message: _83.ConsensusState): _83.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _83.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Header;
                    fromJSON(object: any): _83.Header;
                    toJSON(message: _83.Header): unknown;
                    fromPartial(object: {
                        sequence?: string | number | import("long").Long;
                        timestamp?: string | number | import("long").Long;
                        signature?: Uint8Array;
                        new_public_key?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        new_diversifier?: string;
                    }): _83.Header;
                    fromAmino(object: _83.HeaderAmino): _83.Header;
                    toAmino(message: _83.Header): _83.HeaderAmino;
                    fromAminoMsg(object: _83.HeaderAminoMsg): _83.Header;
                    toAminoMsg(message: _83.Header): _83.HeaderAminoMsg;
                    fromProtoMsg(message: _83.HeaderProtoMsg): _83.Header;
                    toProto(message: _83.Header): Uint8Array;
                    toProtoMsg(message: _83.Header): _83.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _83.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Misbehaviour;
                    fromJSON(object: any): _83.Misbehaviour;
                    toJSON(message: _83.Misbehaviour): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        sequence?: string | number | import("long").Long;
                        signature_one?: {
                            signature?: Uint8Array;
                            data_type?: _83.DataType;
                            data?: Uint8Array;
                            timestamp?: string | number | import("long").Long;
                        };
                        signature_two?: {
                            signature?: Uint8Array;
                            data_type?: _83.DataType;
                            data?: Uint8Array;
                            timestamp?: string | number | import("long").Long;
                        };
                    }): _83.Misbehaviour;
                    fromAmino(object: _83.MisbehaviourAmino): _83.Misbehaviour;
                    toAmino(message: _83.Misbehaviour): _83.MisbehaviourAmino;
                    fromAminoMsg(object: _83.MisbehaviourAminoMsg): _83.Misbehaviour;
                    toAminoMsg(message: _83.Misbehaviour): _83.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _83.MisbehaviourProtoMsg): _83.Misbehaviour;
                    toProto(message: _83.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _83.Misbehaviour): _83.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _83.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.SignatureAndData;
                    fromJSON(object: any): _83.SignatureAndData;
                    toJSON(message: _83.SignatureAndData): unknown;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        data_type?: _83.DataType;
                        data?: Uint8Array;
                        timestamp?: string | number | import("long").Long;
                    }): _83.SignatureAndData;
                    fromAmino(object: _83.SignatureAndDataAmino): _83.SignatureAndData;
                    toAmino(message: _83.SignatureAndData): _83.SignatureAndDataAmino;
                    fromAminoMsg(object: _83.SignatureAndDataAminoMsg): _83.SignatureAndData;
                    toAminoMsg(message: _83.SignatureAndData): _83.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _83.SignatureAndDataProtoMsg): _83.SignatureAndData;
                    toProto(message: _83.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _83.SignatureAndData): _83.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _83.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.TimestampedSignatureData;
                    fromJSON(object: any): _83.TimestampedSignatureData;
                    toJSON(message: _83.TimestampedSignatureData): unknown;
                    fromPartial(object: {
                        signature_data?: Uint8Array;
                        timestamp?: string | number | import("long").Long;
                    }): _83.TimestampedSignatureData;
                    fromAmino(object: _83.TimestampedSignatureDataAmino): _83.TimestampedSignatureData;
                    toAmino(message: _83.TimestampedSignatureData): _83.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _83.TimestampedSignatureDataAminoMsg): _83.TimestampedSignatureData;
                    toAminoMsg(message: _83.TimestampedSignatureData): _83.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _83.TimestampedSignatureDataProtoMsg): _83.TimestampedSignatureData;
                    toProto(message: _83.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _83.TimestampedSignatureData): _83.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _83.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.SignBytes;
                    fromJSON(object: any): _83.SignBytes;
                    toJSON(message: _83.SignBytes): unknown;
                    fromPartial(object: {
                        sequence?: string | number | import("long").Long;
                        timestamp?: string | number | import("long").Long;
                        diversifier?: string;
                        data_type?: _83.DataType;
                        data?: Uint8Array;
                    }): _83.SignBytes;
                    fromAmino(object: _83.SignBytesAmino): _83.SignBytes;
                    toAmino(message: _83.SignBytes): _83.SignBytesAmino;
                    fromAminoMsg(object: _83.SignBytesAminoMsg): _83.SignBytes;
                    toAminoMsg(message: _83.SignBytes): _83.SignBytesAminoMsg;
                    fromProtoMsg(message: _83.SignBytesProtoMsg): _83.SignBytes;
                    toProto(message: _83.SignBytes): Uint8Array;
                    toProtoMsg(message: _83.SignBytes): _83.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _83.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.HeaderData;
                    fromJSON(object: any): _83.HeaderData;
                    toJSON(message: _83.HeaderData): unknown;
                    fromPartial(object: {
                        new_pub_key?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        new_diversifier?: string;
                    }): _83.HeaderData;
                    fromAmino(object: _83.HeaderDataAmino): _83.HeaderData;
                    toAmino(message: _83.HeaderData): _83.HeaderDataAmino;
                    fromAminoMsg(object: _83.HeaderDataAminoMsg): _83.HeaderData;
                    toAminoMsg(message: _83.HeaderData): _83.HeaderDataAminoMsg;
                    fromProtoMsg(message: _83.HeaderDataProtoMsg): _83.HeaderData;
                    toProto(message: _83.HeaderData): Uint8Array;
                    toProtoMsg(message: _83.HeaderData): _83.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _83.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ClientStateData;
                    fromJSON(object: any): _83.ClientStateData;
                    toJSON(message: _83.ClientStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        client_state?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _83.ClientStateData;
                    fromAmino(object: _83.ClientStateDataAmino): _83.ClientStateData;
                    toAmino(message: _83.ClientStateData): _83.ClientStateDataAmino;
                    fromAminoMsg(object: _83.ClientStateDataAminoMsg): _83.ClientStateData;
                    toAminoMsg(message: _83.ClientStateData): _83.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _83.ClientStateDataProtoMsg): _83.ClientStateData;
                    toProto(message: _83.ClientStateData): Uint8Array;
                    toProtoMsg(message: _83.ClientStateData): _83.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _83.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ConsensusStateData;
                    fromJSON(object: any): _83.ConsensusStateData;
                    toJSON(message: _83.ConsensusStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensus_state?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _83.ConsensusStateData;
                    fromAmino(object: _83.ConsensusStateDataAmino): _83.ConsensusStateData;
                    toAmino(message: _83.ConsensusStateData): _83.ConsensusStateDataAmino;
                    fromAminoMsg(object: _83.ConsensusStateDataAminoMsg): _83.ConsensusStateData;
                    toAminoMsg(message: _83.ConsensusStateData): _83.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _83.ConsensusStateDataProtoMsg): _83.ConsensusStateData;
                    toProto(message: _83.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _83.ConsensusStateData): _83.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _83.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ConnectionStateData;
                    fromJSON(object: any): _83.ConnectionStateData;
                    toJSON(message: _83.ConnectionStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            client_id?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _77.State;
                            counterparty?: {
                                client_id?: string;
                                connection_id?: string;
                                prefix?: {
                                    key_prefix?: Uint8Array;
                                };
                            };
                            delay_period?: string | number | import("long").Long;
                        };
                    }): _83.ConnectionStateData;
                    fromAmino(object: _83.ConnectionStateDataAmino): _83.ConnectionStateData;
                    toAmino(message: _83.ConnectionStateData): _83.ConnectionStateDataAmino;
                    fromAminoMsg(object: _83.ConnectionStateDataAminoMsg): _83.ConnectionStateData;
                    toAminoMsg(message: _83.ConnectionStateData): _83.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _83.ConnectionStateDataProtoMsg): _83.ConnectionStateData;
                    toProto(message: _83.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _83.ConnectionStateData): _83.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _83.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ChannelStateData;
                    fromJSON(object: any): _83.ChannelStateData;
                    toJSON(message: _83.ChannelStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _68.State;
                            ordering?: _68.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                        };
                    }): _83.ChannelStateData;
                    fromAmino(object: _83.ChannelStateDataAmino): _83.ChannelStateData;
                    toAmino(message: _83.ChannelStateData): _83.ChannelStateDataAmino;
                    fromAminoMsg(object: _83.ChannelStateDataAminoMsg): _83.ChannelStateData;
                    toAminoMsg(message: _83.ChannelStateData): _83.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _83.ChannelStateDataProtoMsg): _83.ChannelStateData;
                    toProto(message: _83.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _83.ChannelStateData): _83.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _83.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.PacketCommitmentData;
                    fromJSON(object: any): _83.PacketCommitmentData;
                    toJSON(message: _83.PacketCommitmentData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _83.PacketCommitmentData;
                    fromAmino(object: _83.PacketCommitmentDataAmino): _83.PacketCommitmentData;
                    toAmino(message: _83.PacketCommitmentData): _83.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _83.PacketCommitmentDataAminoMsg): _83.PacketCommitmentData;
                    toAminoMsg(message: _83.PacketCommitmentData): _83.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _83.PacketCommitmentDataProtoMsg): _83.PacketCommitmentData;
                    toProto(message: _83.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _83.PacketCommitmentData): _83.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _83.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.PacketAcknowledgementData;
                    fromJSON(object: any): _83.PacketAcknowledgementData;
                    toJSON(message: _83.PacketAcknowledgementData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _83.PacketAcknowledgementData;
                    fromAmino(object: _83.PacketAcknowledgementDataAmino): _83.PacketAcknowledgementData;
                    toAmino(message: _83.PacketAcknowledgementData): _83.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _83.PacketAcknowledgementDataAminoMsg): _83.PacketAcknowledgementData;
                    toAminoMsg(message: _83.PacketAcknowledgementData): _83.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _83.PacketAcknowledgementDataProtoMsg): _83.PacketAcknowledgementData;
                    toProto(message: _83.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _83.PacketAcknowledgementData): _83.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _83.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.PacketReceiptAbsenceData;
                    fromJSON(object: any): _83.PacketReceiptAbsenceData;
                    toJSON(message: _83.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _83.PacketReceiptAbsenceData;
                    fromAmino(object: _83.PacketReceiptAbsenceDataAmino): _83.PacketReceiptAbsenceData;
                    toAmino(message: _83.PacketReceiptAbsenceData): _83.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _83.PacketReceiptAbsenceDataAminoMsg): _83.PacketReceiptAbsenceData;
                    toAminoMsg(message: _83.PacketReceiptAbsenceData): _83.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _83.PacketReceiptAbsenceDataProtoMsg): _83.PacketReceiptAbsenceData;
                    toProto(message: _83.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _83.PacketReceiptAbsenceData): _83.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _83.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.NextSequenceRecvData;
                    fromJSON(object: any): _83.NextSequenceRecvData;
                    toJSON(message: _83.NextSequenceRecvData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        next_seq_recv?: string | number | import("long").Long;
                    }): _83.NextSequenceRecvData;
                    fromAmino(object: _83.NextSequenceRecvDataAmino): _83.NextSequenceRecvData;
                    toAmino(message: _83.NextSequenceRecvData): _83.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _83.NextSequenceRecvDataAminoMsg): _83.NextSequenceRecvData;
                    toAminoMsg(message: _83.NextSequenceRecvData): _83.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _83.NextSequenceRecvDataProtoMsg): _83.NextSequenceRecvData;
                    toProto(message: _83.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _83.NextSequenceRecvData): _83.NextSequenceRecvDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _84.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ClientState;
                    fromJSON(object: any): _84.ClientState;
                    toJSON(message: _84.ClientState): unknown;
                    fromPartial(object: {
                        chain_id?: string;
                        trust_level?: {
                            numerator?: string | number | import("long").Long;
                            denominator?: string | number | import("long").Long;
                        };
                        trusting_period?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        unbonding_period?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        max_clock_drift?: {
                            seconds?: string | number | import("long").Long;
                            nanos?: number;
                        };
                        frozen_height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                        latest_height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                        proof_specs?: {
                            leaf_spec?: {
                                hash?: import("../confio/proofs").HashOp;
                                prehash_key?: import("../confio/proofs").HashOp;
                                prehash_value?: import("../confio/proofs").HashOp;
                                length?: import("../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            inner_spec?: {
                                child_order?: number[];
                                child_size?: number;
                                min_prefix_length?: number;
                                max_prefix_length?: number;
                                empty_child?: Uint8Array;
                                hash?: import("../confio/proofs").HashOp;
                            };
                            max_depth?: number;
                            min_depth?: number;
                        }[];
                        upgrade_path?: string[];
                        allow_update_after_expiry?: boolean;
                        allow_update_after_misbehaviour?: boolean;
                    }): _84.ClientState;
                    fromAmino(object: _84.ClientStateAmino): _84.ClientState;
                    toAmino(message: _84.ClientState): _84.ClientStateAmino;
                    fromAminoMsg(object: _84.ClientStateAminoMsg): _84.ClientState;
                    toAminoMsg(message: _84.ClientState): _84.ClientStateAminoMsg;
                    fromProtoMsg(message: _84.ClientStateProtoMsg): _84.ClientState;
                    toProto(message: _84.ClientState): Uint8Array;
                    toProtoMsg(message: _84.ClientState): _84.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _84.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ConsensusState;
                    fromJSON(object: any): _84.ConsensusState;
                    toJSON(message: _84.ConsensusState): unknown;
                    fromPartial(object: {
                        timestamp?: Date;
                        root?: {
                            hash?: Uint8Array;
                        };
                        next_validators_hash?: Uint8Array;
                    }): _84.ConsensusState;
                    fromAmino(object: _84.ConsensusStateAmino): _84.ConsensusState;
                    toAmino(message: _84.ConsensusState): _84.ConsensusStateAmino;
                    fromAminoMsg(object: _84.ConsensusStateAminoMsg): _84.ConsensusState;
                    toAminoMsg(message: _84.ConsensusState): _84.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _84.ConsensusStateProtoMsg): _84.ConsensusState;
                    toProto(message: _84.ConsensusState): Uint8Array;
                    toProtoMsg(message: _84.ConsensusState): _84.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _84.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Misbehaviour;
                    fromJSON(object: any): _84.Misbehaviour;
                    toJSON(message: _84.Misbehaviour): unknown;
                    fromPartial(object: {
                        client_id?: string;
                        header1?: {
                            signed_header?: {
                                header?: {
                                    version?: {
                                        block?: string | number | import("long").Long;
                                        app?: string | number | import("long").Long;
                                    };
                                    chain_id?: string;
                                    height?: string | number | import("long").Long;
                                    time?: Date;
                                    last_block_id?: {
                                        hash?: Uint8Array;
                                        part_set_header?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    last_commit_hash?: Uint8Array;
                                    data_hash?: Uint8Array;
                                    validators_hash?: Uint8Array;
                                    next_validators_hash?: Uint8Array;
                                    consensus_hash?: Uint8Array;
                                    app_hash?: Uint8Array;
                                    last_results_hash?: Uint8Array;
                                    evidence_hash?: Uint8Array;
                                    proposer_address?: Uint8Array;
                                };
                                commit?: {
                                    height?: string | number | import("long").Long;
                                    round?: number;
                                    block_id?: {
                                        hash?: Uint8Array;
                                        part_set_header?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        block_id_flag?: import("../tendermint/types/types").BlockIDFlag;
                                        validator_address?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validator_set?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pub_key?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    voting_power?: string | number | import("long").Long;
                                    proposer_priority?: string | number | import("long").Long;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pub_key?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    voting_power?: string | number | import("long").Long;
                                    proposer_priority?: string | number | import("long").Long;
                                };
                                total_voting_power?: string | number | import("long").Long;
                            };
                            trusted_height?: {
                                revision_number?: string | number | import("long").Long;
                                revision_height?: string | number | import("long").Long;
                            };
                            trusted_validators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pub_key?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    voting_power?: string | number | import("long").Long;
                                    proposer_priority?: string | number | import("long").Long;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pub_key?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    voting_power?: string | number | import("long").Long;
                                    proposer_priority?: string | number | import("long").Long;
                                };
                                total_voting_power?: string | number | import("long").Long;
                            };
                        };
                        header2?: {
                            signed_header?: {
                                header?: {
                                    version?: {
                                        block?: string | number | import("long").Long;
                                        app?: string | number | import("long").Long;
                                    };
                                    chain_id?: string;
                                    height?: string | number | import("long").Long;
                                    time?: Date;
                                    last_block_id?: {
                                        hash?: Uint8Array;
                                        part_set_header?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    last_commit_hash?: Uint8Array;
                                    data_hash?: Uint8Array;
                                    validators_hash?: Uint8Array;
                                    next_validators_hash?: Uint8Array;
                                    consensus_hash?: Uint8Array;
                                    app_hash?: Uint8Array;
                                    last_results_hash?: Uint8Array;
                                    evidence_hash?: Uint8Array;
                                    proposer_address?: Uint8Array;
                                };
                                commit?: {
                                    height?: string | number | import("long").Long;
                                    round?: number;
                                    block_id?: {
                                        hash?: Uint8Array;
                                        part_set_header?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        block_id_flag?: import("../tendermint/types/types").BlockIDFlag;
                                        validator_address?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validator_set?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pub_key?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    voting_power?: string | number | import("long").Long;
                                    proposer_priority?: string | number | import("long").Long;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pub_key?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    voting_power?: string | number | import("long").Long;
                                    proposer_priority?: string | number | import("long").Long;
                                };
                                total_voting_power?: string | number | import("long").Long;
                            };
                            trusted_height?: {
                                revision_number?: string | number | import("long").Long;
                                revision_height?: string | number | import("long").Long;
                            };
                            trusted_validators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pub_key?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    voting_power?: string | number | import("long").Long;
                                    proposer_priority?: string | number | import("long").Long;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pub_key?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    voting_power?: string | number | import("long").Long;
                                    proposer_priority?: string | number | import("long").Long;
                                };
                                total_voting_power?: string | number | import("long").Long;
                            };
                        };
                    }): _84.Misbehaviour;
                    fromAmino(object: _84.MisbehaviourAmino): _84.Misbehaviour;
                    toAmino(message: _84.Misbehaviour): _84.MisbehaviourAmino;
                    fromAminoMsg(object: _84.MisbehaviourAminoMsg): _84.Misbehaviour;
                    toAminoMsg(message: _84.Misbehaviour): _84.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _84.MisbehaviourProtoMsg): _84.Misbehaviour;
                    toProto(message: _84.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _84.Misbehaviour): _84.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _84.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Header;
                    fromJSON(object: any): _84.Header;
                    toJSON(message: _84.Header): unknown;
                    fromPartial(object: {
                        signed_header?: {
                            header?: {
                                version?: {
                                    block?: string | number | import("long").Long;
                                    app?: string | number | import("long").Long;
                                };
                                chain_id?: string;
                                height?: string | number | import("long").Long;
                                time?: Date;
                                last_block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                last_commit_hash?: Uint8Array;
                                data_hash?: Uint8Array;
                                validators_hash?: Uint8Array;
                                next_validators_hash?: Uint8Array;
                                consensus_hash?: Uint8Array;
                                app_hash?: Uint8Array;
                                last_results_hash?: Uint8Array;
                                evidence_hash?: Uint8Array;
                                proposer_address?: Uint8Array;
                            };
                            commit?: {
                                height?: string | number | import("long").Long;
                                round?: number;
                                block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    block_id_flag?: import("../tendermint/types/types").BlockIDFlag;
                                    validator_address?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        validator_set?: {
                            validators?: {
                                address?: Uint8Array;
                                pub_key?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                voting_power?: string | number | import("long").Long;
                                proposer_priority?: string | number | import("long").Long;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pub_key?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                voting_power?: string | number | import("long").Long;
                                proposer_priority?: string | number | import("long").Long;
                            };
                            total_voting_power?: string | number | import("long").Long;
                        };
                        trusted_height?: {
                            revision_number?: string | number | import("long").Long;
                            revision_height?: string | number | import("long").Long;
                        };
                        trusted_validators?: {
                            validators?: {
                                address?: Uint8Array;
                                pub_key?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                voting_power?: string | number | import("long").Long;
                                proposer_priority?: string | number | import("long").Long;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pub_key?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                voting_power?: string | number | import("long").Long;
                                proposer_priority?: string | number | import("long").Long;
                            };
                            total_voting_power?: string | number | import("long").Long;
                        };
                    }): _84.Header;
                    fromAmino(object: _84.HeaderAmino): _84.Header;
                    toAmino(message: _84.Header): _84.HeaderAmino;
                    fromAminoMsg(object: _84.HeaderAminoMsg): _84.Header;
                    toAminoMsg(message: _84.Header): _84.HeaderAminoMsg;
                    fromProtoMsg(message: _84.HeaderProtoMsg): _84.Header;
                    toProto(message: _84.Header): Uint8Array;
                    toProtoMsg(message: _84.Header): _84.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _84.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Fraction;
                    fromJSON(object: any): _84.Fraction;
                    toJSON(message: _84.Fraction): unknown;
                    fromPartial(object: {
                        numerator?: string | number | import("long").Long;
                        denominator?: string | number | import("long").Long;
                    }): _84.Fraction;
                    fromAmino(object: _84.FractionAmino): _84.Fraction;
                    toAmino(message: _84.Fraction): _84.FractionAmino;
                    fromAminoMsg(object: _84.FractionAminoMsg): _84.Fraction;
                    toAminoMsg(message: _84.Fraction): _84.FractionAminoMsg;
                    fromProtoMsg(message: _84.FractionProtoMsg): _84.Fraction;
                    toProto(message: _84.Fraction): Uint8Array;
                    toProtoMsg(message: _84.Fraction): _84.FractionProtoMsg;
                };
            };
        }
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: any;
                };
                bank: {
                    v1beta1: any;
                };
                distribution: {
                    v1beta1: any;
                };
                gov: {
                    v1beta1: any;
                };
                slashing: {
                    v1beta1: any;
                };
                staking: {
                    v1beta1: any;
                };
                upgrade: {
                    v1beta1: any;
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: any;
                    };
                };
                core: {
                    channel: {
                        v1: any;
                    };
                    client: {
                        v1: any;
                    };
                    connection: {
                        v1: any;
                    };
                };
            };
        }>;
        createGrpcGateWayClient: ({ endpoint }: {
            endpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.rpc.Service").ServiceClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.rpc.Query").QueryClientImpl;
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: _184.QueryClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _185.QueryClientImpl;
                    };
                    client: {
                        v1: _186.QueryClientImpl;
                    };
                    connection: {
                        v1: _187.QueryClientImpl;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: _180.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _181.LCDQueryClient;
                    };
                    client: {
                        v1: _182.LCDQueryClient;
                    };
                    connection: {
                        v1: _183.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
