import * as _85 from "./airdrop/v1/airdrop";
import * as _86 from "./airdrop/v1/genesis";
import * as _87 from "./airdrop/v1/messages";
import * as _88 from "./airdrop/v1/params";
import * as _89 from "./airdrop/v1/proposals";
import * as _90 from "./airdrop/v1/query";
import * as _91 from "./claimsmanager/v1/claimsmanager";
import * as _92 from "./claimsmanager/v1/genesis";
import * as _94 from "./claimsmanager/v1/query";
import * as _95 from "./epochs/v1/genesis";
import * as _96 from "./epochs/v1/query";
import * as _97 from "./interchainquery/v1/genesis";
import * as _98 from "./interchainquery/v1/interchainquery";
import * as _99 from "./interchainquery/v1/messages";
import * as _100 from "./interchainquery/v1/query";
import * as _101 from "./interchainstaking/v1/genesis";
import * as _102 from "./interchainstaking/v1/interchainstaking";
import * as _103 from "./interchainstaking/v1/messages";
import * as _104 from "./interchainstaking/v1/proposals";
import * as _105 from "./interchainstaking/v1/query";
import * as _106 from "./mint/v1beta1/genesis";
import * as _107 from "./mint/v1beta1/mint";
import * as _108 from "./mint/v1beta1/query";
import * as _109 from "./participationrewards/v1/genesis";
import * as _110 from "./participationrewards/v1/messages";
import * as _111 from "./participationrewards/v1/participationrewards";
import * as _112 from "./participationrewards/v1/proposals";
import * as _113 from "./participationrewards/v1/query";
import * as _114 from "./supply/v1/query";
import * as _115 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _116 from "./tokenfactory/v1beta1/genesis";
import * as _117 from "./tokenfactory/v1beta1/params";
import * as _118 from "./tokenfactory/v1beta1/query";
import * as _119 from "./tokenfactory/v1beta1/tx";
import * as _202 from "./airdrop/v1/query.lcd";
import * as _203 from "./claimsmanager/v1/query.lcd";
import * as _204 from "./epochs/v1/query.lcd";
import * as _205 from "./interchainstaking/v1/query.lcd";
import * as _206 from "./mint/v1beta1/query.lcd";
import * as _207 from "./participationrewards/v1/query.lcd";
import * as _208 from "./supply/v1/query.lcd";
import * as _209 from "./tokenfactory/v1beta1/query.lcd";
import * as _210 from "./airdrop/v1/query.rpc.Query";
import * as _211 from "./claimsmanager/v1/query.rpc.Query";
import * as _212 from "./epochs/v1/query.rpc.Query";
import * as _213 from "./interchainstaking/v1/query.rpc.Query";
import * as _214 from "./mint/v1beta1/query.rpc.Query";
import * as _215 from "./participationrewards/v1/query.rpc.Query";
import * as _216 from "./supply/v1/query.rpc.Query";
import * as _217 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _218 from "./airdrop/v1/messages.rpc.msg";
import * as _219 from "./interchainquery/v1/messages.rpc.msg";
import * as _220 from "./interchainstaking/v1/messages.rpc.msg";
import * as _221 from "./participationrewards/v1/messages.rpc.msg";
import * as _222 from "./tokenfactory/v1beta1/tx.rpc.msg";
export declare namespace quicksilver {
    namespace airdrop {
        const v1: {
            Msg: typeof _218.Msg;
            Query: typeof _210.Query;
            QueryClientImpl: typeof _210.QueryClientImpl;
            LCDQueryClient: typeof _202.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    claim(value: _87.MsgClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    incentivePoolSpend(value: _87.MsgIncentivePoolSpend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    claim(value: _87.MsgClaim): {
                        typeUrl: string;
                        value: _87.MsgClaim;
                    };
                    incentivePoolSpend(value: _87.MsgIncentivePoolSpend): {
                        typeUrl: string;
                        value: _87.MsgIncentivePoolSpend;
                    };
                };
                toJSON: {
                    claim(value: _87.MsgClaim): {
                        typeUrl: string;
                        value: unknown;
                    };
                    incentivePoolSpend(value: _87.MsgIncentivePoolSpend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    claim(value: any): {
                        typeUrl: string;
                        value: _87.MsgClaim;
                    };
                    incentivePoolSpend(value: any): {
                        typeUrl: string;
                        value: _87.MsgIncentivePoolSpend;
                    };
                };
                fromPartial: {
                    claim(value: _87.MsgClaim): {
                        typeUrl: string;
                        value: _87.MsgClaim;
                    };
                    incentivePoolSpend(value: _87.MsgIncentivePoolSpend): {
                        typeUrl: string;
                        value: _87.MsgIncentivePoolSpend;
                    };
                };
            };
            AminoConverter: {
                "/quicksilver.airdrop.v1.MsgClaim": {
                    aminoType: string;
                    toAmino: (message: _87.MsgClaim) => _87.MsgClaimAmino;
                    fromAmino: (object: _87.MsgClaimAmino) => _87.MsgClaim;
                };
                "/quicksilver.airdrop.v1.MsgIncentivePoolSpend": {
                    aminoType: string;
                    toAmino: (message: _87.MsgIncentivePoolSpend) => _87.MsgIncentivePoolSpendAmino;
                    fromAmino: (object: _87.MsgIncentivePoolSpendAmino) => _87.MsgIncentivePoolSpend;
                };
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _90.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryParamsRequest;
                fromJSON(_: any): _90.QueryParamsRequest;
                toJSON(_: _90.QueryParamsRequest): unknown;
                fromPartial(_: {}): _90.QueryParamsRequest;
                fromAmino(_: _90.QueryParamsRequestAmino): _90.QueryParamsRequest;
                toAmino(_: _90.QueryParamsRequest): _90.QueryParamsRequestAmino;
                fromAminoMsg(object: _90.QueryParamsRequestAminoMsg): _90.QueryParamsRequest;
                fromProtoMsg(message: _90.QueryParamsRequestProtoMsg): _90.QueryParamsRequest;
                toProto(message: _90.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _90.QueryParamsRequest): _90.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _90.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryParamsResponse;
                fromJSON(object: any): _90.QueryParamsResponse;
                toJSON(message: _90.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {};
                }): _90.QueryParamsResponse;
                fromAmino(object: _90.QueryParamsResponseAmino): _90.QueryParamsResponse;
                toAmino(message: _90.QueryParamsResponse): _90.QueryParamsResponseAmino;
                fromAminoMsg(object: _90.QueryParamsResponseAminoMsg): _90.QueryParamsResponse;
                fromProtoMsg(message: _90.QueryParamsResponseProtoMsg): _90.QueryParamsResponse;
                toProto(message: _90.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _90.QueryParamsResponse): _90.QueryParamsResponseProtoMsg;
            };
            QueryZoneDropRequest: {
                typeUrl: string;
                encode(message: _90.QueryZoneDropRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryZoneDropRequest;
                fromJSON(object: any): _90.QueryZoneDropRequest;
                toJSON(message: _90.QueryZoneDropRequest): unknown;
                fromPartial(object: {
                    chainId?: string;
                }): _90.QueryZoneDropRequest;
                fromAmino(object: _90.QueryZoneDropRequestAmino): _90.QueryZoneDropRequest;
                toAmino(message: _90.QueryZoneDropRequest): _90.QueryZoneDropRequestAmino;
                fromAminoMsg(object: _90.QueryZoneDropRequestAminoMsg): _90.QueryZoneDropRequest;
                fromProtoMsg(message: _90.QueryZoneDropRequestProtoMsg): _90.QueryZoneDropRequest;
                toProto(message: _90.QueryZoneDropRequest): Uint8Array;
                toProtoMsg(message: _90.QueryZoneDropRequest): _90.QueryZoneDropRequestProtoMsg;
            };
            QueryZoneDropResponse: {
                typeUrl: string;
                encode(message: _90.QueryZoneDropResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryZoneDropResponse;
                fromJSON(object: any): _90.QueryZoneDropResponse;
                toJSON(message: _90.QueryZoneDropResponse): unknown;
                fromPartial(object: {
                    zoneDrop?: {
                        chainId?: string;
                        startTime?: Date;
                        duration?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        decay?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        allocation?: string | number | import("long").default;
                        actions?: string[];
                        isConcluded?: boolean;
                    };
                }): _90.QueryZoneDropResponse;
                fromAmino(object: _90.QueryZoneDropResponseAmino): _90.QueryZoneDropResponse;
                toAmino(message: _90.QueryZoneDropResponse): _90.QueryZoneDropResponseAmino;
                fromAminoMsg(object: _90.QueryZoneDropResponseAminoMsg): _90.QueryZoneDropResponse;
                fromProtoMsg(message: _90.QueryZoneDropResponseProtoMsg): _90.QueryZoneDropResponse;
                toProto(message: _90.QueryZoneDropResponse): Uint8Array;
                toProtoMsg(message: _90.QueryZoneDropResponse): _90.QueryZoneDropResponseProtoMsg;
            };
            QueryAccountBalanceRequest: {
                typeUrl: string;
                encode(message: _90.QueryAccountBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryAccountBalanceRequest;
                fromJSON(object: any): _90.QueryAccountBalanceRequest;
                toJSON(message: _90.QueryAccountBalanceRequest): unknown;
                fromPartial(object: {
                    chainId?: string;
                }): _90.QueryAccountBalanceRequest;
                fromAmino(object: _90.QueryAccountBalanceRequestAmino): _90.QueryAccountBalanceRequest;
                toAmino(message: _90.QueryAccountBalanceRequest): _90.QueryAccountBalanceRequestAmino;
                fromAminoMsg(object: _90.QueryAccountBalanceRequestAminoMsg): _90.QueryAccountBalanceRequest;
                fromProtoMsg(message: _90.QueryAccountBalanceRequestProtoMsg): _90.QueryAccountBalanceRequest;
                toProto(message: _90.QueryAccountBalanceRequest): Uint8Array;
                toProtoMsg(message: _90.QueryAccountBalanceRequest): _90.QueryAccountBalanceRequestProtoMsg;
            };
            QueryAccountBalanceResponse: {
                typeUrl: string;
                encode(message: _90.QueryAccountBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryAccountBalanceResponse;
                fromJSON(object: any): _90.QueryAccountBalanceResponse;
                toJSON(message: _90.QueryAccountBalanceResponse): unknown;
                fromPartial(object: {
                    accountBalance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _90.QueryAccountBalanceResponse;
                fromAmino(object: _90.QueryAccountBalanceResponseAmino): _90.QueryAccountBalanceResponse;
                toAmino(message: _90.QueryAccountBalanceResponse): _90.QueryAccountBalanceResponseAmino;
                fromAminoMsg(object: _90.QueryAccountBalanceResponseAminoMsg): _90.QueryAccountBalanceResponse;
                fromProtoMsg(message: _90.QueryAccountBalanceResponseProtoMsg): _90.QueryAccountBalanceResponse;
                toProto(message: _90.QueryAccountBalanceResponse): Uint8Array;
                toProtoMsg(message: _90.QueryAccountBalanceResponse): _90.QueryAccountBalanceResponseProtoMsg;
            };
            QueryZoneDropsRequest: {
                typeUrl: string;
                encode(message: _90.QueryZoneDropsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryZoneDropsRequest;
                fromJSON(object: any): _90.QueryZoneDropsRequest;
                toJSON(message: _90.QueryZoneDropsRequest): unknown;
                fromPartial(object: {
                    status?: _85.Status;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _90.QueryZoneDropsRequest;
                fromAmino(object: _90.QueryZoneDropsRequestAmino): _90.QueryZoneDropsRequest;
                toAmino(message: _90.QueryZoneDropsRequest): _90.QueryZoneDropsRequestAmino;
                fromAminoMsg(object: _90.QueryZoneDropsRequestAminoMsg): _90.QueryZoneDropsRequest;
                fromProtoMsg(message: _90.QueryZoneDropsRequestProtoMsg): _90.QueryZoneDropsRequest;
                toProto(message: _90.QueryZoneDropsRequest): Uint8Array;
                toProtoMsg(message: _90.QueryZoneDropsRequest): _90.QueryZoneDropsRequestProtoMsg;
            };
            QueryZoneDropsResponse: {
                typeUrl: string;
                encode(message: _90.QueryZoneDropsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryZoneDropsResponse;
                fromJSON(object: any): _90.QueryZoneDropsResponse;
                toJSON(message: _90.QueryZoneDropsResponse): unknown;
                fromPartial(object: {
                    zoneDrops?: {
                        chainId?: string;
                        startTime?: Date;
                        duration?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        decay?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        allocation?: string | number | import("long").default;
                        actions?: string[];
                        isConcluded?: boolean;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _90.QueryZoneDropsResponse;
                fromAmino(object: _90.QueryZoneDropsResponseAmino): _90.QueryZoneDropsResponse;
                toAmino(message: _90.QueryZoneDropsResponse): _90.QueryZoneDropsResponseAmino;
                fromAminoMsg(object: _90.QueryZoneDropsResponseAminoMsg): _90.QueryZoneDropsResponse;
                fromProtoMsg(message: _90.QueryZoneDropsResponseProtoMsg): _90.QueryZoneDropsResponse;
                toProto(message: _90.QueryZoneDropsResponse): Uint8Array;
                toProtoMsg(message: _90.QueryZoneDropsResponse): _90.QueryZoneDropsResponseProtoMsg;
            };
            QueryClaimRecordRequest: {
                typeUrl: string;
                encode(message: _90.QueryClaimRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryClaimRecordRequest;
                fromJSON(object: any): _90.QueryClaimRecordRequest;
                toJSON(message: _90.QueryClaimRecordRequest): unknown;
                fromPartial(object: {
                    chainId?: string;
                    address?: string;
                }): _90.QueryClaimRecordRequest;
                fromAmino(object: _90.QueryClaimRecordRequestAmino): _90.QueryClaimRecordRequest;
                toAmino(message: _90.QueryClaimRecordRequest): _90.QueryClaimRecordRequestAmino;
                fromAminoMsg(object: _90.QueryClaimRecordRequestAminoMsg): _90.QueryClaimRecordRequest;
                fromProtoMsg(message: _90.QueryClaimRecordRequestProtoMsg): _90.QueryClaimRecordRequest;
                toProto(message: _90.QueryClaimRecordRequest): Uint8Array;
                toProtoMsg(message: _90.QueryClaimRecordRequest): _90.QueryClaimRecordRequestProtoMsg;
            };
            QueryClaimRecordResponse: {
                typeUrl: string;
                encode(message: _90.QueryClaimRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryClaimRecordResponse;
                fromJSON(object: any): _90.QueryClaimRecordResponse;
                toJSON(message: _90.QueryClaimRecordResponse): unknown;
                fromPartial(object: {
                    claimRecord?: {
                        chainId?: string;
                        address?: string;
                        actionsCompleted?: {
                            [x: number]: {
                                completeTime?: Date;
                                claimAmount?: string | number | import("long").default;
                            };
                        };
                        maxAllocation?: string | number | import("long").default;
                        baseValue?: string | number | import("long").default;
                    };
                }): _90.QueryClaimRecordResponse;
                fromAmino(object: _90.QueryClaimRecordResponseAmino): _90.QueryClaimRecordResponse;
                toAmino(message: _90.QueryClaimRecordResponse): _90.QueryClaimRecordResponseAmino;
                fromAminoMsg(object: _90.QueryClaimRecordResponseAminoMsg): _90.QueryClaimRecordResponse;
                fromProtoMsg(message: _90.QueryClaimRecordResponseProtoMsg): _90.QueryClaimRecordResponse;
                toProto(message: _90.QueryClaimRecordResponse): Uint8Array;
                toProtoMsg(message: _90.QueryClaimRecordResponse): _90.QueryClaimRecordResponseProtoMsg;
            };
            QueryClaimRecordsRequest: {
                typeUrl: string;
                encode(message: _90.QueryClaimRecordsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryClaimRecordsRequest;
                fromJSON(object: any): _90.QueryClaimRecordsRequest;
                toJSON(message: _90.QueryClaimRecordsRequest): unknown;
                fromPartial(object: {
                    chainId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _90.QueryClaimRecordsRequest;
                fromAmino(object: _90.QueryClaimRecordsRequestAmino): _90.QueryClaimRecordsRequest;
                toAmino(message: _90.QueryClaimRecordsRequest): _90.QueryClaimRecordsRequestAmino;
                fromAminoMsg(object: _90.QueryClaimRecordsRequestAminoMsg): _90.QueryClaimRecordsRequest;
                fromProtoMsg(message: _90.QueryClaimRecordsRequestProtoMsg): _90.QueryClaimRecordsRequest;
                toProto(message: _90.QueryClaimRecordsRequest): Uint8Array;
                toProtoMsg(message: _90.QueryClaimRecordsRequest): _90.QueryClaimRecordsRequestProtoMsg;
            };
            QueryClaimRecordsResponse: {
                typeUrl: string;
                encode(message: _90.QueryClaimRecordsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryClaimRecordsResponse;
                fromJSON(object: any): _90.QueryClaimRecordsResponse;
                toJSON(message: _90.QueryClaimRecordsResponse): unknown;
                fromPartial(object: {
                    claimRecords?: {
                        chainId?: string;
                        address?: string;
                        actionsCompleted?: {
                            [x: number]: {
                                completeTime?: Date;
                                claimAmount?: string | number | import("long").default;
                            };
                        };
                        maxAllocation?: string | number | import("long").default;
                        baseValue?: string | number | import("long").default;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _90.QueryClaimRecordsResponse;
                fromAmino(object: _90.QueryClaimRecordsResponseAmino): _90.QueryClaimRecordsResponse;
                toAmino(message: _90.QueryClaimRecordsResponse): _90.QueryClaimRecordsResponseAmino;
                fromAminoMsg(object: _90.QueryClaimRecordsResponseAminoMsg): _90.QueryClaimRecordsResponse;
                fromProtoMsg(message: _90.QueryClaimRecordsResponseProtoMsg): _90.QueryClaimRecordsResponse;
                toProto(message: _90.QueryClaimRecordsResponse): Uint8Array;
                toProtoMsg(message: _90.QueryClaimRecordsResponse): _90.QueryClaimRecordsResponseProtoMsg;
            };
            RegisterZoneDropProposal: {
                typeUrl: string;
                encode(message: _89.RegisterZoneDropProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.RegisterZoneDropProposal;
                fromJSON(object: any): _89.RegisterZoneDropProposal;
                toJSON(message: _89.RegisterZoneDropProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    zoneDrop?: {
                        chainId?: string;
                        startTime?: Date;
                        duration?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        decay?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        allocation?: string | number | import("long").default;
                        actions?: string[];
                        isConcluded?: boolean;
                    };
                    claimRecords?: Uint8Array;
                }): _89.RegisterZoneDropProposal;
                fromAmino(object: _89.RegisterZoneDropProposalAmino): _89.RegisterZoneDropProposal;
                toAmino(message: _89.RegisterZoneDropProposal): _89.RegisterZoneDropProposalAmino;
                fromAminoMsg(object: _89.RegisterZoneDropProposalAminoMsg): _89.RegisterZoneDropProposal;
                fromProtoMsg(message: _89.RegisterZoneDropProposalProtoMsg): _89.RegisterZoneDropProposal;
                toProto(message: _89.RegisterZoneDropProposal): Uint8Array;
                toProtoMsg(message: _89.RegisterZoneDropProposal): _89.RegisterZoneDropProposalProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(_: _88.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Params;
                fromJSON(_: any): _88.Params;
                toJSON(_: _88.Params): unknown;
                fromPartial(_: {}): _88.Params;
                fromAmino(_: _88.ParamsAmino): _88.Params;
                toAmino(_: _88.Params): _88.ParamsAmino;
                fromAminoMsg(object: _88.ParamsAminoMsg): _88.Params;
                fromProtoMsg(message: _88.ParamsProtoMsg): _88.Params;
                toProto(message: _88.Params): Uint8Array;
                toProtoMsg(message: _88.Params): _88.ParamsProtoMsg;
            };
            MsgClaim: {
                typeUrl: string;
                encode(message: _87.MsgClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgClaim;
                fromJSON(object: any): _87.MsgClaim;
                toJSON(message: _87.MsgClaim): unknown;
                fromPartial(object: {
                    chainId?: string;
                    action?: string | number | import("long").default;
                    address?: string;
                    proofs?: {
                        key?: Uint8Array;
                        data?: Uint8Array;
                        proofOps?: {
                            ops?: {
                                type?: string;
                                key?: Uint8Array;
                                data?: Uint8Array;
                            }[];
                        };
                        height?: string | number | import("long").default;
                        proofType?: string;
                    }[];
                }): _87.MsgClaim;
                fromAmino(object: _87.MsgClaimAmino): _87.MsgClaim;
                toAmino(message: _87.MsgClaim): _87.MsgClaimAmino;
                fromAminoMsg(object: _87.MsgClaimAminoMsg): _87.MsgClaim;
                fromProtoMsg(message: _87.MsgClaimProtoMsg): _87.MsgClaim;
                toProto(message: _87.MsgClaim): Uint8Array;
                toProtoMsg(message: _87.MsgClaim): _87.MsgClaimProtoMsg;
            };
            MsgClaimResponse: {
                typeUrl: string;
                encode(message: _87.MsgClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgClaimResponse;
                fromJSON(object: any): _87.MsgClaimResponse;
                toJSON(message: _87.MsgClaimResponse): unknown;
                fromPartial(object: {
                    amount?: string | number | import("long").default;
                }): _87.MsgClaimResponse;
                fromAmino(object: _87.MsgClaimResponseAmino): _87.MsgClaimResponse;
                toAmino(message: _87.MsgClaimResponse): _87.MsgClaimResponseAmino;
                fromAminoMsg(object: _87.MsgClaimResponseAminoMsg): _87.MsgClaimResponse;
                fromProtoMsg(message: _87.MsgClaimResponseProtoMsg): _87.MsgClaimResponse;
                toProto(message: _87.MsgClaimResponse): Uint8Array;
                toProtoMsg(message: _87.MsgClaimResponse): _87.MsgClaimResponseProtoMsg;
            };
            MsgIncentivePoolSpend: {
                typeUrl: string;
                encode(message: _87.MsgIncentivePoolSpend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgIncentivePoolSpend;
                fromJSON(object: any): _87.MsgIncentivePoolSpend;
                toJSON(message: _87.MsgIncentivePoolSpend): unknown;
                fromPartial(object: {
                    authority?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _87.MsgIncentivePoolSpend;
                fromAmino(object: _87.MsgIncentivePoolSpendAmino): _87.MsgIncentivePoolSpend;
                toAmino(message: _87.MsgIncentivePoolSpend): _87.MsgIncentivePoolSpendAmino;
                fromAminoMsg(object: _87.MsgIncentivePoolSpendAminoMsg): _87.MsgIncentivePoolSpend;
                fromProtoMsg(message: _87.MsgIncentivePoolSpendProtoMsg): _87.MsgIncentivePoolSpend;
                toProto(message: _87.MsgIncentivePoolSpend): Uint8Array;
                toProtoMsg(message: _87.MsgIncentivePoolSpend): _87.MsgIncentivePoolSpendProtoMsg;
            };
            MsgIncentivePoolSpendResponse: {
                typeUrl: string;
                encode(_: _87.MsgIncentivePoolSpendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgIncentivePoolSpendResponse;
                fromJSON(_: any): _87.MsgIncentivePoolSpendResponse;
                toJSON(_: _87.MsgIncentivePoolSpendResponse): unknown;
                fromPartial(_: {}): _87.MsgIncentivePoolSpendResponse;
                fromAmino(_: _87.MsgIncentivePoolSpendResponseAmino): _87.MsgIncentivePoolSpendResponse;
                toAmino(_: _87.MsgIncentivePoolSpendResponse): _87.MsgIncentivePoolSpendResponseAmino;
                fromAminoMsg(object: _87.MsgIncentivePoolSpendResponseAminoMsg): _87.MsgIncentivePoolSpendResponse;
                fromProtoMsg(message: _87.MsgIncentivePoolSpendResponseProtoMsg): _87.MsgIncentivePoolSpendResponse;
                toProto(message: _87.MsgIncentivePoolSpendResponse): Uint8Array;
                toProtoMsg(message: _87.MsgIncentivePoolSpendResponse): _87.MsgIncentivePoolSpendResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _86.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.GenesisState;
                fromJSON(object: any): _86.GenesisState;
                toJSON(message: _86.GenesisState): unknown;
                fromPartial(object: {
                    params?: {};
                    zoneDrops?: {
                        chainId?: string;
                        startTime?: Date;
                        duration?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        decay?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        allocation?: string | number | import("long").default;
                        actions?: string[];
                        isConcluded?: boolean;
                    }[];
                    claimRecords?: {
                        chainId?: string;
                        address?: string;
                        actionsCompleted?: {
                            [x: number]: {
                                completeTime?: Date;
                                claimAmount?: string | number | import("long").default;
                            };
                        };
                        maxAllocation?: string | number | import("long").default;
                        baseValue?: string | number | import("long").default;
                    }[];
                }): _86.GenesisState;
                fromAmino(object: _86.GenesisStateAmino): _86.GenesisState;
                toAmino(message: _86.GenesisState): _86.GenesisStateAmino;
                fromAminoMsg(object: _86.GenesisStateAminoMsg): _86.GenesisState;
                fromProtoMsg(message: _86.GenesisStateProtoMsg): _86.GenesisState;
                toProto(message: _86.GenesisState): Uint8Array;
                toProtoMsg(message: _86.GenesisState): _86.GenesisStateProtoMsg;
            };
            actionFromJSON(object: any): _85.Action;
            actionToJSON(object: _85.Action): string;
            statusFromJSON(object: any): _85.Status;
            statusToJSON(object: _85.Status): string;
            Action: typeof _85.Action;
            ActionSDKType: typeof _85.Action;
            ActionAmino: typeof _85.Action;
            Status: typeof _85.Status;
            StatusSDKType: typeof _85.Status;
            StatusAmino: typeof _85.Status;
            ZoneDrop: {
                typeUrl: string;
                encode(message: _85.ZoneDrop, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ZoneDrop;
                fromJSON(object: any): _85.ZoneDrop;
                toJSON(message: _85.ZoneDrop): unknown;
                fromPartial(object: {
                    chainId?: string;
                    startTime?: Date;
                    duration?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    decay?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    allocation?: string | number | import("long").default;
                    actions?: string[];
                    isConcluded?: boolean;
                }): _85.ZoneDrop;
                fromAmino(object: _85.ZoneDropAmino): _85.ZoneDrop;
                toAmino(message: _85.ZoneDrop): _85.ZoneDropAmino;
                fromAminoMsg(object: _85.ZoneDropAminoMsg): _85.ZoneDrop;
                fromProtoMsg(message: _85.ZoneDropProtoMsg): _85.ZoneDrop;
                toProto(message: _85.ZoneDrop): Uint8Array;
                toProtoMsg(message: _85.ZoneDrop): _85.ZoneDropProtoMsg;
            };
            ClaimRecord_ActionsCompletedEntry: {
                encode(message: _85.ClaimRecord_ActionsCompletedEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ClaimRecord_ActionsCompletedEntry;
                fromJSON(object: any): _85.ClaimRecord_ActionsCompletedEntry;
                toJSON(message: _85.ClaimRecord_ActionsCompletedEntry): unknown;
                fromPartial(object: {
                    key?: number;
                    value?: {
                        completeTime?: Date;
                        claimAmount?: string | number | import("long").default;
                    };
                }): _85.ClaimRecord_ActionsCompletedEntry;
                fromAmino(object: _85.ClaimRecord_ActionsCompletedEntryAmino): _85.ClaimRecord_ActionsCompletedEntry;
                toAmino(message: _85.ClaimRecord_ActionsCompletedEntry): _85.ClaimRecord_ActionsCompletedEntryAmino;
                fromAminoMsg(object: _85.ClaimRecord_ActionsCompletedEntryAminoMsg): _85.ClaimRecord_ActionsCompletedEntry;
                fromProtoMsg(message: _85.ClaimRecord_ActionsCompletedEntryProtoMsg): _85.ClaimRecord_ActionsCompletedEntry;
                toProto(message: _85.ClaimRecord_ActionsCompletedEntry): Uint8Array;
            };
            ClaimRecord: {
                typeUrl: string;
                encode(message: _85.ClaimRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ClaimRecord;
                fromJSON(object: any): _85.ClaimRecord;
                toJSON(message: _85.ClaimRecord): unknown;
                fromPartial(object: {
                    chainId?: string;
                    address?: string;
                    actionsCompleted?: {
                        [x: number]: {
                            completeTime?: Date;
                            claimAmount?: string | number | import("long").default;
                        };
                    };
                    maxAllocation?: string | number | import("long").default;
                    baseValue?: string | number | import("long").default;
                }): _85.ClaimRecord;
                fromAmino(object: _85.ClaimRecordAmino): _85.ClaimRecord;
                toAmino(message: _85.ClaimRecord): _85.ClaimRecordAmino;
                fromAminoMsg(object: _85.ClaimRecordAminoMsg): _85.ClaimRecord;
                fromProtoMsg(message: _85.ClaimRecordProtoMsg): _85.ClaimRecord;
                toProto(message: _85.ClaimRecord): Uint8Array;
                toProtoMsg(message: _85.ClaimRecord): _85.ClaimRecordProtoMsg;
            };
            CompletedAction: {
                typeUrl: string;
                encode(message: _85.CompletedAction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.CompletedAction;
                fromJSON(object: any): _85.CompletedAction;
                toJSON(message: _85.CompletedAction): unknown;
                fromPartial(object: {
                    completeTime?: Date;
                    claimAmount?: string | number | import("long").default;
                }): _85.CompletedAction;
                fromAmino(object: _85.CompletedActionAmino): _85.CompletedAction;
                toAmino(message: _85.CompletedAction): _85.CompletedActionAmino;
                fromAminoMsg(object: _85.CompletedActionAminoMsg): _85.CompletedAction;
                fromProtoMsg(message: _85.CompletedActionProtoMsg): _85.CompletedAction;
                toProto(message: _85.CompletedAction): Uint8Array;
                toProtoMsg(message: _85.CompletedAction): _85.CompletedActionProtoMsg;
            };
        };
    }
    namespace claimsmanager {
        const v1: {
            Query: typeof _211.Query;
            QueryClientImpl: typeof _211.QueryClientImpl;
            LCDQueryClient: typeof _203.LCDQueryClient;
            QueryClaimsRequest: {
                typeUrl: string;
                encode(message: _94.QueryClaimsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryClaimsRequest;
                fromJSON(object: any): _94.QueryClaimsRequest;
                toJSON(message: _94.QueryClaimsRequest): unknown;
                fromPartial(object: {
                    chainId?: string;
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _94.QueryClaimsRequest;
                fromAmino(object: _94.QueryClaimsRequestAmino): _94.QueryClaimsRequest;
                toAmino(message: _94.QueryClaimsRequest): _94.QueryClaimsRequestAmino;
                fromAminoMsg(object: _94.QueryClaimsRequestAminoMsg): _94.QueryClaimsRequest;
                fromProtoMsg(message: _94.QueryClaimsRequestProtoMsg): _94.QueryClaimsRequest;
                toProto(message: _94.QueryClaimsRequest): Uint8Array;
                toProtoMsg(message: _94.QueryClaimsRequest): _94.QueryClaimsRequestProtoMsg;
            };
            QueryClaimsResponse: {
                typeUrl: string;
                encode(message: _94.QueryClaimsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryClaimsResponse;
                fromJSON(object: any): _94.QueryClaimsResponse;
                toJSON(message: _94.QueryClaimsResponse): unknown;
                fromPartial(object: {
                    claims?: {
                        userAddress?: string;
                        chainId?: string;
                        module?: _91.ClaimType;
                        sourceChainId?: string;
                        amount?: string | number | import("long").default;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _94.QueryClaimsResponse;
                fromAmino(object: _94.QueryClaimsResponseAmino): _94.QueryClaimsResponse;
                toAmino(message: _94.QueryClaimsResponse): _94.QueryClaimsResponseAmino;
                fromAminoMsg(object: _94.QueryClaimsResponseAminoMsg): _94.QueryClaimsResponse;
                fromProtoMsg(message: _94.QueryClaimsResponseProtoMsg): _94.QueryClaimsResponse;
                toProto(message: _94.QueryClaimsResponse): Uint8Array;
                toProtoMsg(message: _94.QueryClaimsResponse): _94.QueryClaimsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _92.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.GenesisState;
                fromJSON(object: any): _92.GenesisState;
                toJSON(message: _92.GenesisState): unknown;
                fromPartial(object: {
                    params?: {};
                    claims?: {
                        userAddress?: string;
                        chainId?: string;
                        module?: _91.ClaimType;
                        sourceChainId?: string;
                        amount?: string | number | import("long").default;
                    }[];
                }): _92.GenesisState;
                fromAmino(object: _92.GenesisStateAmino): _92.GenesisState;
                toAmino(message: _92.GenesisState): _92.GenesisStateAmino;
                fromAminoMsg(object: _92.GenesisStateAminoMsg): _92.GenesisState;
                fromProtoMsg(message: _92.GenesisStateProtoMsg): _92.GenesisState;
                toProto(message: _92.GenesisState): Uint8Array;
                toProtoMsg(message: _92.GenesisState): _92.GenesisStateProtoMsg;
            };
            claimTypeFromJSON(object: any): _91.ClaimType;
            claimTypeToJSON(object: _91.ClaimType): string;
            ClaimType: typeof _91.ClaimType;
            ClaimTypeSDKType: typeof _91.ClaimType;
            ClaimTypeAmino: typeof _91.ClaimType;
            Params: {
                typeUrl: string;
                encode(_: _91.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Params;
                fromJSON(_: any): _91.Params;
                toJSON(_: _91.Params): unknown;
                fromPartial(_: {}): _91.Params;
                fromAmino(_: _91.ParamsAmino): _91.Params;
                toAmino(_: _91.Params): _91.ParamsAmino;
                fromAminoMsg(object: _91.ParamsAminoMsg): _91.Params;
                fromProtoMsg(message: _91.ParamsProtoMsg): _91.Params;
                toProto(message: _91.Params): Uint8Array;
                toProtoMsg(message: _91.Params): _91.ParamsProtoMsg;
            };
            Claim: {
                typeUrl: string;
                encode(message: _91.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Claim;
                fromJSON(object: any): _91.Claim;
                toJSON(message: _91.Claim): unknown;
                fromPartial(object: {
                    userAddress?: string;
                    chainId?: string;
                    module?: _91.ClaimType;
                    sourceChainId?: string;
                    amount?: string | number | import("long").default;
                }): _91.Claim;
                fromAmino(object: _91.ClaimAmino): _91.Claim;
                toAmino(message: _91.Claim): _91.ClaimAmino;
                fromAminoMsg(object: _91.ClaimAminoMsg): _91.Claim;
                fromProtoMsg(message: _91.ClaimProtoMsg): _91.Claim;
                toProto(message: _91.Claim): Uint8Array;
                toProtoMsg(message: _91.Claim): _91.ClaimProtoMsg;
            };
            Proof: {
                typeUrl: string;
                encode(message: _91.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Proof;
                fromJSON(object: any): _91.Proof;
                toJSON(message: _91.Proof): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                    data?: Uint8Array;
                    proofOps?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    };
                    height?: string | number | import("long").default;
                    proofType?: string;
                }): _91.Proof;
                fromAmino(object: _91.ProofAmino): _91.Proof;
                toAmino(message: _91.Proof): _91.ProofAmino;
                fromAminoMsg(object: _91.ProofAminoMsg): _91.Proof;
                fromProtoMsg(message: _91.ProofProtoMsg): _91.Proof;
                toProto(message: _91.Proof): Uint8Array;
                toProtoMsg(message: _91.Proof): _91.ProofProtoMsg;
            };
        };
    }
    namespace epochs {
        const v1: {
            Query: typeof _212.Query;
            QueryClientImpl: typeof _212.QueryClientImpl;
            LCDQueryClient: typeof _204.LCDQueryClient;
            QueryEpochsInfoRequest: {
                typeUrl: string;
                encode(message: _96.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryEpochsInfoRequest;
                fromJSON(object: any): _96.QueryEpochsInfoRequest;
                toJSON(message: _96.QueryEpochsInfoRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _96.QueryEpochsInfoRequest;
                fromAmino(object: _96.QueryEpochsInfoRequestAmino): _96.QueryEpochsInfoRequest;
                toAmino(message: _96.QueryEpochsInfoRequest): _96.QueryEpochsInfoRequestAmino;
                fromAminoMsg(object: _96.QueryEpochsInfoRequestAminoMsg): _96.QueryEpochsInfoRequest;
                fromProtoMsg(message: _96.QueryEpochsInfoRequestProtoMsg): _96.QueryEpochsInfoRequest;
                toProto(message: _96.QueryEpochsInfoRequest): Uint8Array;
                toProtoMsg(message: _96.QueryEpochsInfoRequest): _96.QueryEpochsInfoRequestProtoMsg;
            };
            QueryEpochsInfoResponse: {
                typeUrl: string;
                encode(message: _96.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryEpochsInfoResponse;
                fromJSON(object: any): _96.QueryEpochsInfoResponse;
                toJSON(message: _96.QueryEpochsInfoResponse): unknown;
                fromPartial(object: {
                    epochs?: {
                        identifier?: string;
                        startTime?: Date;
                        duration?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        currentEpoch?: string | number | import("long").default;
                        currentEpochStartTime?: Date;
                        epochCountingStarted?: boolean;
                        currentEpochStartHeight?: string | number | import("long").default;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _96.QueryEpochsInfoResponse;
                fromAmino(object: _96.QueryEpochsInfoResponseAmino): _96.QueryEpochsInfoResponse;
                toAmino(message: _96.QueryEpochsInfoResponse): _96.QueryEpochsInfoResponseAmino;
                fromAminoMsg(object: _96.QueryEpochsInfoResponseAminoMsg): _96.QueryEpochsInfoResponse;
                fromProtoMsg(message: _96.QueryEpochsInfoResponseProtoMsg): _96.QueryEpochsInfoResponse;
                toProto(message: _96.QueryEpochsInfoResponse): Uint8Array;
                toProtoMsg(message: _96.QueryEpochsInfoResponse): _96.QueryEpochsInfoResponseProtoMsg;
            };
            QueryCurrentEpochRequest: {
                typeUrl: string;
                encode(message: _96.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryCurrentEpochRequest;
                fromJSON(object: any): _96.QueryCurrentEpochRequest;
                toJSON(message: _96.QueryCurrentEpochRequest): unknown;
                fromPartial(object: {
                    identifier?: string;
                }): _96.QueryCurrentEpochRequest;
                fromAmino(object: _96.QueryCurrentEpochRequestAmino): _96.QueryCurrentEpochRequest;
                toAmino(message: _96.QueryCurrentEpochRequest): _96.QueryCurrentEpochRequestAmino;
                fromAminoMsg(object: _96.QueryCurrentEpochRequestAminoMsg): _96.QueryCurrentEpochRequest;
                fromProtoMsg(message: _96.QueryCurrentEpochRequestProtoMsg): _96.QueryCurrentEpochRequest;
                toProto(message: _96.QueryCurrentEpochRequest): Uint8Array;
                toProtoMsg(message: _96.QueryCurrentEpochRequest): _96.QueryCurrentEpochRequestProtoMsg;
            };
            QueryCurrentEpochResponse: {
                typeUrl: string;
                encode(message: _96.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryCurrentEpochResponse;
                fromJSON(object: any): _96.QueryCurrentEpochResponse;
                toJSON(message: _96.QueryCurrentEpochResponse): unknown;
                fromPartial(object: {
                    currentEpoch?: string | number | import("long").default;
                }): _96.QueryCurrentEpochResponse;
                fromAmino(object: _96.QueryCurrentEpochResponseAmino): _96.QueryCurrentEpochResponse;
                toAmino(message: _96.QueryCurrentEpochResponse): _96.QueryCurrentEpochResponseAmino;
                fromAminoMsg(object: _96.QueryCurrentEpochResponseAminoMsg): _96.QueryCurrentEpochResponse;
                fromProtoMsg(message: _96.QueryCurrentEpochResponseProtoMsg): _96.QueryCurrentEpochResponse;
                toProto(message: _96.QueryCurrentEpochResponse): Uint8Array;
                toProtoMsg(message: _96.QueryCurrentEpochResponse): _96.QueryCurrentEpochResponseProtoMsg;
            };
            EpochInfo: {
                typeUrl: string;
                encode(message: _95.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.EpochInfo;
                fromJSON(object: any): _95.EpochInfo;
                toJSON(message: _95.EpochInfo): unknown;
                fromPartial(object: {
                    identifier?: string;
                    startTime?: Date;
                    duration?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    currentEpoch?: string | number | import("long").default;
                    currentEpochStartTime?: Date;
                    epochCountingStarted?: boolean;
                    currentEpochStartHeight?: string | number | import("long").default;
                }): _95.EpochInfo;
                fromAmino(object: _95.EpochInfoAmino): _95.EpochInfo;
                toAmino(message: _95.EpochInfo): _95.EpochInfoAmino;
                fromAminoMsg(object: _95.EpochInfoAminoMsg): _95.EpochInfo;
                fromProtoMsg(message: _95.EpochInfoProtoMsg): _95.EpochInfo;
                toProto(message: _95.EpochInfo): Uint8Array;
                toProtoMsg(message: _95.EpochInfo): _95.EpochInfoProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _95.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.GenesisState;
                fromJSON(object: any): _95.GenesisState;
                toJSON(message: _95.GenesisState): unknown;
                fromPartial(object: {
                    epochs?: {
                        identifier?: string;
                        startTime?: Date;
                        duration?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        currentEpoch?: string | number | import("long").default;
                        currentEpochStartTime?: Date;
                        epochCountingStarted?: boolean;
                        currentEpochStartHeight?: string | number | import("long").default;
                    }[];
                }): _95.GenesisState;
                fromAmino(object: _95.GenesisStateAmino): _95.GenesisState;
                toAmino(message: _95.GenesisState): _95.GenesisStateAmino;
                fromAminoMsg(object: _95.GenesisStateAminoMsg): _95.GenesisState;
                fromProtoMsg(message: _95.GenesisStateProtoMsg): _95.GenesisState;
                toProto(message: _95.GenesisState): Uint8Array;
                toProtoMsg(message: _95.GenesisState): _95.GenesisStateProtoMsg;
            };
        };
    }
    namespace interchainquery {
        const v1: {
            Msg: typeof _219.Msg;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitQueryResponse(value: _99.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitQueryResponse(value: _99.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _99.MsgSubmitQueryResponse;
                    };
                };
                toJSON: {
                    submitQueryResponse(value: _99.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitQueryResponse(value: any): {
                        typeUrl: string;
                        value: _99.MsgSubmitQueryResponse;
                    };
                };
                fromPartial: {
                    submitQueryResponse(value: _99.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _99.MsgSubmitQueryResponse;
                    };
                };
            };
            AminoConverter: {
                "/quicksilver.interchainquery.v1.MsgSubmitQueryResponse": {
                    aminoType: string;
                    toAmino: (message: _99.MsgSubmitQueryResponse) => _99.MsgSubmitQueryResponseAmino;
                    fromAmino: (object: _99.MsgSubmitQueryResponseAmino) => _99.MsgSubmitQueryResponse;
                };
            };
            QueryRequestsRequest: {
                typeUrl: string;
                encode(message: _100.QueryRequestsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryRequestsRequest;
                fromJSON(object: any): _100.QueryRequestsRequest;
                toJSON(message: _100.QueryRequestsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                    chainId?: string;
                }): _100.QueryRequestsRequest;
                fromAmino(object: _100.QueryRequestsRequestAmino): _100.QueryRequestsRequest;
                toAmino(message: _100.QueryRequestsRequest): _100.QueryRequestsRequestAmino;
                fromAminoMsg(object: _100.QueryRequestsRequestAminoMsg): _100.QueryRequestsRequest;
                fromProtoMsg(message: _100.QueryRequestsRequestProtoMsg): _100.QueryRequestsRequest;
                toProto(message: _100.QueryRequestsRequest): Uint8Array;
                toProtoMsg(message: _100.QueryRequestsRequest): _100.QueryRequestsRequestProtoMsg;
            };
            QueryRequestsResponse: {
                typeUrl: string;
                encode(message: _100.QueryRequestsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryRequestsResponse;
                fromJSON(object: any): _100.QueryRequestsResponse;
                toJSON(message: _100.QueryRequestsResponse): unknown;
                fromPartial(object: {
                    queries?: {
                        id?: string;
                        connectionId?: string;
                        chainId?: string;
                        queryType?: string;
                        request?: Uint8Array;
                        period?: string;
                        lastHeight?: string;
                        callbackId?: string;
                        ttl?: string | number | import("long").default;
                        lastEmission?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _100.QueryRequestsResponse;
                fromAmino(object: _100.QueryRequestsResponseAmino): _100.QueryRequestsResponse;
                toAmino(message: _100.QueryRequestsResponse): _100.QueryRequestsResponseAmino;
                fromAminoMsg(object: _100.QueryRequestsResponseAminoMsg): _100.QueryRequestsResponse;
                fromProtoMsg(message: _100.QueryRequestsResponseProtoMsg): _100.QueryRequestsResponse;
                toProto(message: _100.QueryRequestsResponse): Uint8Array;
                toProtoMsg(message: _100.QueryRequestsResponse): _100.QueryRequestsResponseProtoMsg;
            };
            GetTxWithProofResponse: {
                typeUrl: string;
                encode(message: _100.GetTxWithProofResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.GetTxWithProofResponse;
                fromJSON(object: any): _100.GetTxWithProofResponse;
                toJSON(message: _100.GetTxWithProofResponse): unknown;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                $typeUrl?: string;
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: string | number | import("long").default;
                            extensionOptions?: {
                                $typeUrl?: string;
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                $typeUrl?: string;
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    $typeUrl?: string;
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: import("../cosmos/tx/signing/v1beta1/signing").SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: string | number | import("long").default;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: string | number | import("long").default;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    txResponse?: {
                        height?: string | number | import("long").default;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: string | number | import("long").default;
                        gasUsed?: string | number | import("long").default;
                        tx?: {
                            $typeUrl?: string;
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    };
                    proof?: {
                        rootHash?: Uint8Array;
                        data?: Uint8Array;
                        proof?: {
                            total?: string | number | import("long").default;
                            index?: string | number | import("long").default;
                            leafHash?: Uint8Array;
                            aunts?: Uint8Array[];
                        };
                    };
                    header?: {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: string | number | import("long").default;
                                    app?: string | number | import("long").default;
                                };
                                chainId?: string;
                                height?: string | number | import("long").default;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            commit?: {
                                height?: string | number | import("long").default;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        validatorSet?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string | number | import("long").default;
                                proposerPriority?: string | number | import("long").default;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string | number | import("long").default;
                                proposerPriority?: string | number | import("long").default;
                            };
                            totalVotingPower?: string | number | import("long").default;
                        };
                        trustedHeight?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                        trustedValidators?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string | number | import("long").default;
                                proposerPriority?: string | number | import("long").default;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string | number | import("long").default;
                                proposerPriority?: string | number | import("long").default;
                            };
                            totalVotingPower?: string | number | import("long").default;
                        };
                    };
                    txBytes?: Uint8Array;
                }): _100.GetTxWithProofResponse;
                fromAmino(object: _100.GetTxWithProofResponseAmino): _100.GetTxWithProofResponse;
                toAmino(message: _100.GetTxWithProofResponse): _100.GetTxWithProofResponseAmino;
                fromAminoMsg(object: _100.GetTxWithProofResponseAminoMsg): _100.GetTxWithProofResponse;
                fromProtoMsg(message: _100.GetTxWithProofResponseProtoMsg): _100.GetTxWithProofResponse;
                toProto(message: _100.GetTxWithProofResponse): Uint8Array;
                toProtoMsg(message: _100.GetTxWithProofResponse): _100.GetTxWithProofResponseProtoMsg;
            };
            MsgSubmitQueryResponse: {
                typeUrl: string;
                encode(message: _99.MsgSubmitQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgSubmitQueryResponse;
                fromJSON(object: any): _99.MsgSubmitQueryResponse;
                toJSON(message: _99.MsgSubmitQueryResponse): unknown;
                fromPartial(object: {
                    chainId?: string;
                    queryId?: string;
                    result?: Uint8Array;
                    proofOps?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    };
                    height?: string | number | import("long").default;
                    fromAddress?: string;
                }): _99.MsgSubmitQueryResponse;
                fromAmino(object: _99.MsgSubmitQueryResponseAmino): _99.MsgSubmitQueryResponse;
                toAmino(message: _99.MsgSubmitQueryResponse): _99.MsgSubmitQueryResponseAmino;
                fromAminoMsg(object: _99.MsgSubmitQueryResponseAminoMsg): _99.MsgSubmitQueryResponse;
                fromProtoMsg(message: _99.MsgSubmitQueryResponseProtoMsg): _99.MsgSubmitQueryResponse;
                toProto(message: _99.MsgSubmitQueryResponse): Uint8Array;
                toProtoMsg(message: _99.MsgSubmitQueryResponse): _99.MsgSubmitQueryResponseProtoMsg;
            };
            MsgSubmitQueryResponseResponse: {
                typeUrl: string;
                encode(_: _99.MsgSubmitQueryResponseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgSubmitQueryResponseResponse;
                fromJSON(_: any): _99.MsgSubmitQueryResponseResponse;
                toJSON(_: _99.MsgSubmitQueryResponseResponse): unknown;
                fromPartial(_: {}): _99.MsgSubmitQueryResponseResponse;
                fromAmino(_: _99.MsgSubmitQueryResponseResponseAmino): _99.MsgSubmitQueryResponseResponse;
                toAmino(_: _99.MsgSubmitQueryResponseResponse): _99.MsgSubmitQueryResponseResponseAmino;
                fromAminoMsg(object: _99.MsgSubmitQueryResponseResponseAminoMsg): _99.MsgSubmitQueryResponseResponse;
                fromProtoMsg(message: _99.MsgSubmitQueryResponseResponseProtoMsg): _99.MsgSubmitQueryResponseResponse;
                toProto(message: _99.MsgSubmitQueryResponseResponse): Uint8Array;
                toProtoMsg(message: _99.MsgSubmitQueryResponseResponse): _99.MsgSubmitQueryResponseResponseProtoMsg;
            };
            Query: {
                typeUrl: string;
                encode(message: _98.Query, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Query;
                fromJSON(object: any): _98.Query;
                toJSON(message: _98.Query): unknown;
                fromPartial(object: {
                    id?: string;
                    connectionId?: string;
                    chainId?: string;
                    queryType?: string;
                    request?: Uint8Array;
                    period?: string;
                    lastHeight?: string;
                    callbackId?: string;
                    ttl?: string | number | import("long").default;
                    lastEmission?: string;
                }): _98.Query;
                fromAmino(object: _98.QueryAmino): _98.Query;
                toAmino(message: _98.Query): _98.QueryAmino;
                fromAminoMsg(object: _98.QueryAminoMsg): _98.Query;
                fromProtoMsg(message: _98.QueryProtoMsg): _98.Query;
                toProto(message: _98.Query): Uint8Array;
                toProtoMsg(message: _98.Query): _98.QueryProtoMsg;
            };
            DataPoint: {
                typeUrl: string;
                encode(message: _98.DataPoint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.DataPoint;
                fromJSON(object: any): _98.DataPoint;
                toJSON(message: _98.DataPoint): unknown;
                fromPartial(object: {
                    id?: string;
                    remoteHeight?: string;
                    localHeight?: string;
                    value?: Uint8Array;
                }): _98.DataPoint;
                fromAmino(object: _98.DataPointAmino): _98.DataPoint;
                toAmino(message: _98.DataPoint): _98.DataPointAmino;
                fromAminoMsg(object: _98.DataPointAminoMsg): _98.DataPoint;
                fromProtoMsg(message: _98.DataPointProtoMsg): _98.DataPoint;
                toProto(message: _98.DataPoint): Uint8Array;
                toProtoMsg(message: _98.DataPoint): _98.DataPointProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _97.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.GenesisState;
                fromJSON(object: any): _97.GenesisState;
                toJSON(message: _97.GenesisState): unknown;
                fromPartial(object: {
                    queries?: {
                        id?: string;
                        connectionId?: string;
                        chainId?: string;
                        queryType?: string;
                        request?: Uint8Array;
                        period?: string;
                        lastHeight?: string;
                        callbackId?: string;
                        ttl?: string | number | import("long").default;
                        lastEmission?: string;
                    }[];
                }): _97.GenesisState;
                fromAmino(object: _97.GenesisStateAmino): _97.GenesisState;
                toAmino(message: _97.GenesisState): _97.GenesisStateAmino;
                fromAminoMsg(object: _97.GenesisStateAminoMsg): _97.GenesisState;
                fromProtoMsg(message: _97.GenesisStateProtoMsg): _97.GenesisState;
                toProto(message: _97.GenesisState): Uint8Array;
                toProtoMsg(message: _97.GenesisState): _97.GenesisStateProtoMsg;
            };
        };
    }
    namespace interchainstaking {
        const v1: {
            Msg: typeof _220.Msg;
            Query: typeof _213.Query;
            QueryClientImpl: typeof _213.QueryClientImpl;
            LCDQueryClient: typeof _205.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    requestRedemption(value: _103.MsgRequestRedemption): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    signalIntent(value: _103.MsgSignalIntent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    govCloseChannel(value: _104.MsgGovCloseChannel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    govReopenChannel(value: _104.MsgGovReopenChannel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    govSetLsmCaps(value: _104.MsgGovSetLsmCaps): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    requestRedemption(value: _103.MsgRequestRedemption): {
                        typeUrl: string;
                        value: _103.MsgRequestRedemption;
                    };
                    signalIntent(value: _103.MsgSignalIntent): {
                        typeUrl: string;
                        value: _103.MsgSignalIntent;
                    };
                    govCloseChannel(value: _104.MsgGovCloseChannel): {
                        typeUrl: string;
                        value: _104.MsgGovCloseChannel;
                    };
                    govReopenChannel(value: _104.MsgGovReopenChannel): {
                        typeUrl: string;
                        value: _104.MsgGovReopenChannel;
                    };
                    govSetLsmCaps(value: _104.MsgGovSetLsmCaps): {
                        typeUrl: string;
                        value: _104.MsgGovSetLsmCaps;
                    };
                };
                toJSON: {
                    requestRedemption(value: _103.MsgRequestRedemption): {
                        typeUrl: string;
                        value: unknown;
                    };
                    signalIntent(value: _103.MsgSignalIntent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    govCloseChannel(value: _104.MsgGovCloseChannel): {
                        typeUrl: string;
                        value: unknown;
                    };
                    govReopenChannel(value: _104.MsgGovReopenChannel): {
                        typeUrl: string;
                        value: unknown;
                    };
                    govSetLsmCaps(value: _104.MsgGovSetLsmCaps): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    requestRedemption(value: any): {
                        typeUrl: string;
                        value: _103.MsgRequestRedemption;
                    };
                    signalIntent(value: any): {
                        typeUrl: string;
                        value: _103.MsgSignalIntent;
                    };
                    govCloseChannel(value: any): {
                        typeUrl: string;
                        value: _104.MsgGovCloseChannel;
                    };
                    govReopenChannel(value: any): {
                        typeUrl: string;
                        value: _104.MsgGovReopenChannel;
                    };
                    govSetLsmCaps(value: any): {
                        typeUrl: string;
                        value: _104.MsgGovSetLsmCaps;
                    };
                };
                fromPartial: {
                    requestRedemption(value: _103.MsgRequestRedemption): {
                        typeUrl: string;
                        value: _103.MsgRequestRedemption;
                    };
                    signalIntent(value: _103.MsgSignalIntent): {
                        typeUrl: string;
                        value: _103.MsgSignalIntent;
                    };
                    govCloseChannel(value: _104.MsgGovCloseChannel): {
                        typeUrl: string;
                        value: _104.MsgGovCloseChannel;
                    };
                    govReopenChannel(value: _104.MsgGovReopenChannel): {
                        typeUrl: string;
                        value: _104.MsgGovReopenChannel;
                    };
                    govSetLsmCaps(value: _104.MsgGovSetLsmCaps): {
                        typeUrl: string;
                        value: _104.MsgGovSetLsmCaps;
                    };
                };
            };
            AminoConverter: {
                "/quicksilver.interchainstaking.v1.MsgRequestRedemption": {
                    aminoType: string;
                    toAmino: (message: _103.MsgRequestRedemption) => _103.MsgRequestRedemptionAmino;
                    fromAmino: (object: _103.MsgRequestRedemptionAmino) => _103.MsgRequestRedemption;
                };
                "/quicksilver.interchainstaking.v1.MsgSignalIntent": {
                    aminoType: string;
                    toAmino: (message: _103.MsgSignalIntent) => _103.MsgSignalIntentAmino;
                    fromAmino: (object: _103.MsgSignalIntentAmino) => _103.MsgSignalIntent;
                };
                "/quicksilver.interchainstaking.v1.MsgGovCloseChannel": {
                    aminoType: string;
                    toAmino: (message: _104.MsgGovCloseChannel) => _104.MsgGovCloseChannelAmino;
                    fromAmino: (object: _104.MsgGovCloseChannelAmino) => _104.MsgGovCloseChannel;
                };
                "/quicksilver.interchainstaking.v1.MsgGovReopenChannel": {
                    aminoType: string;
                    toAmino: (message: _104.MsgGovReopenChannel) => _104.MsgGovReopenChannelAmino;
                    fromAmino: (object: _104.MsgGovReopenChannelAmino) => _104.MsgGovReopenChannel;
                };
                "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps": {
                    aminoType: string;
                    toAmino: (message: _104.MsgGovSetLsmCaps) => _104.MsgGovSetLsmCapsAmino;
                    fromAmino: (object: _104.MsgGovSetLsmCapsAmino) => _104.MsgGovSetLsmCaps;
                };
            };
            Statistics: {
                typeUrl: string;
                encode(message: _105.Statistics, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Statistics;
                fromJSON(object: any): _105.Statistics;
                toJSON(message: _105.Statistics): unknown;
                fromPartial(object: {
                    chainId?: string;
                    deposited?: string | number | import("long").default;
                    deposits?: string | number | import("long").default;
                    depositors?: string | number | import("long").default;
                    delegated?: string | number | import("long").default;
                    supply?: string | number | import("long").default;
                    distanceToTarget?: string;
                }): _105.Statistics;
                fromAmino(object: _105.StatisticsAmino): _105.Statistics;
                toAmino(message: _105.Statistics): _105.StatisticsAmino;
                fromAminoMsg(object: _105.StatisticsAminoMsg): _105.Statistics;
                fromProtoMsg(message: _105.StatisticsProtoMsg): _105.Statistics;
                toProto(message: _105.Statistics): Uint8Array;
                toProtoMsg(message: _105.Statistics): _105.StatisticsProtoMsg;
            };
            QueryZonesRequest: {
                typeUrl: string;
                encode(message: _105.QueryZonesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryZonesRequest;
                fromJSON(object: any): _105.QueryZonesRequest;
                toJSON(message: _105.QueryZonesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _105.QueryZonesRequest;
                fromAmino(object: _105.QueryZonesRequestAmino): _105.QueryZonesRequest;
                toAmino(message: _105.QueryZonesRequest): _105.QueryZonesRequestAmino;
                fromAminoMsg(object: _105.QueryZonesRequestAminoMsg): _105.QueryZonesRequest;
                fromProtoMsg(message: _105.QueryZonesRequestProtoMsg): _105.QueryZonesRequest;
                toProto(message: _105.QueryZonesRequest): Uint8Array;
                toProtoMsg(message: _105.QueryZonesRequest): _105.QueryZonesRequestProtoMsg;
            };
            QueryZonesResponse: {
                typeUrl: string;
                encode(message: _105.QueryZonesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryZonesResponse;
                fromJSON(object: any): _105.QueryZonesResponse;
                toJSON(message: _105.QueryZonesResponse): unknown;
                fromPartial(object: {
                    zones?: {
                        connectionId?: string;
                        chainId?: string;
                        depositAddress?: {
                            address?: string;
                            balance?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            portName?: string;
                            withdrawalAddress?: string;
                            balanceWaitgroup?: number;
                        };
                        withdrawalAddress?: {
                            address?: string;
                            balance?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            portName?: string;
                            withdrawalAddress?: string;
                            balanceWaitgroup?: number;
                        };
                        performanceAddress?: {
                            address?: string;
                            balance?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            portName?: string;
                            withdrawalAddress?: string;
                            balanceWaitgroup?: number;
                        };
                        delegationAddress?: {
                            address?: string;
                            balance?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            portName?: string;
                            withdrawalAddress?: string;
                            balanceWaitgroup?: number;
                        };
                        accountPrefix?: string;
                        localDenom?: string;
                        baseDenom?: string;
                        redemptionRate?: string;
                        lastRedemptionRate?: string;
                        validators?: {
                            valoperAddress?: string;
                            commissionRate?: string;
                            delegatorShares?: string;
                            votingPower?: string;
                            score?: string;
                            status?: string;
                            jailed?: boolean;
                            tombstoned?: boolean;
                            jailedSince?: Date;
                            validatorBondShares?: string;
                            liquidShares?: string;
                        }[];
                        aggregateIntent?: {
                            valoperAddress?: string;
                            weight?: string;
                        }[];
                        multiSend?: boolean;
                        liquidityModule?: boolean;
                        withdrawalWaitgroup?: number;
                        ibcNextValidatorsHash?: Uint8Array;
                        validatorSelectionAllocation?: string | number | import("long").default;
                        holdingsAllocation?: string | number | import("long").default;
                        lastEpochHeight?: string | number | import("long").default;
                        tvl?: string;
                        unbondingPeriod?: string | number | import("long").default;
                        messagesPerTx?: string | number | import("long").default;
                        decimals?: string | number | import("long").default;
                        unbondingEnabled?: boolean;
                        depositsEnabled?: boolean;
                        returnToSender?: boolean;
                        is118?: boolean;
                        subzoneInfo?: {
                            authority?: string;
                            baseChainID?: string;
                        };
                    }[];
                    stats?: {
                        chainId?: string;
                        deposited?: string | number | import("long").default;
                        deposits?: string | number | import("long").default;
                        depositors?: string | number | import("long").default;
                        delegated?: string | number | import("long").default;
                        supply?: string | number | import("long").default;
                        distanceToTarget?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _105.QueryZonesResponse;
                fromAmino(object: _105.QueryZonesResponseAmino): _105.QueryZonesResponse;
                toAmino(message: _105.QueryZonesResponse): _105.QueryZonesResponseAmino;
                fromAminoMsg(object: _105.QueryZonesResponseAminoMsg): _105.QueryZonesResponse;
                fromProtoMsg(message: _105.QueryZonesResponseProtoMsg): _105.QueryZonesResponse;
                toProto(message: _105.QueryZonesResponse): Uint8Array;
                toProtoMsg(message: _105.QueryZonesResponse): _105.QueryZonesResponseProtoMsg;
            };
            QueryZoneRequest: {
                typeUrl: string;
                encode(message: _105.QueryZoneRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryZoneRequest;
                fromJSON(object: any): _105.QueryZoneRequest;
                toJSON(message: _105.QueryZoneRequest): unknown;
                fromPartial(object: {
                    chainId?: string;
                }): _105.QueryZoneRequest;
                fromAmino(object: _105.QueryZoneRequestAmino): _105.QueryZoneRequest;
                toAmino(message: _105.QueryZoneRequest): _105.QueryZoneRequestAmino;
                fromAminoMsg(object: _105.QueryZoneRequestAminoMsg): _105.QueryZoneRequest;
                fromProtoMsg(message: _105.QueryZoneRequestProtoMsg): _105.QueryZoneRequest;
                toProto(message: _105.QueryZoneRequest): Uint8Array;
                toProtoMsg(message: _105.QueryZoneRequest): _105.QueryZoneRequestProtoMsg;
            };
            QueryZoneResponse: {
                typeUrl: string;
                encode(message: _105.QueryZoneResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryZoneResponse;
                fromJSON(object: any): _105.QueryZoneResponse;
                toJSON(message: _105.QueryZoneResponse): unknown;
                fromPartial(object: {
                    zone?: {
                        connectionId?: string;
                        chainId?: string;
                        depositAddress?: {
                            address?: string;
                            balance?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            portName?: string;
                            withdrawalAddress?: string;
                            balanceWaitgroup?: number;
                        };
                        withdrawalAddress?: {
                            address?: string;
                            balance?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            portName?: string;
                            withdrawalAddress?: string;
                            balanceWaitgroup?: number;
                        };
                        performanceAddress?: {
                            address?: string;
                            balance?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            portName?: string;
                            withdrawalAddress?: string;
                            balanceWaitgroup?: number;
                        };
                        delegationAddress?: {
                            address?: string;
                            balance?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            portName?: string;
                            withdrawalAddress?: string;
                            balanceWaitgroup?: number;
                        };
                        accountPrefix?: string;
                        localDenom?: string;
                        baseDenom?: string;
                        redemptionRate?: string;
                        lastRedemptionRate?: string;
                        validators?: {
                            valoperAddress?: string;
                            commissionRate?: string;
                            delegatorShares?: string;
                            votingPower?: string;
                            score?: string;
                            status?: string;
                            jailed?: boolean;
                            tombstoned?: boolean;
                            jailedSince?: Date;
                            validatorBondShares?: string;
                            liquidShares?: string;
                        }[];
                        aggregateIntent?: {
                            valoperAddress?: string;
                            weight?: string;
                        }[];
                        multiSend?: boolean;
                        liquidityModule?: boolean;
                        withdrawalWaitgroup?: number;
                        ibcNextValidatorsHash?: Uint8Array;
                        validatorSelectionAllocation?: string | number | import("long").default;
                        holdingsAllocation?: string | number | import("long").default;
                        lastEpochHeight?: string | number | import("long").default;
                        tvl?: string;
                        unbondingPeriod?: string | number | import("long").default;
                        messagesPerTx?: string | number | import("long").default;
                        decimals?: string | number | import("long").default;
                        unbondingEnabled?: boolean;
                        depositsEnabled?: boolean;
                        returnToSender?: boolean;
                        is118?: boolean;
                        subzoneInfo?: {
                            authority?: string;
                            baseChainID?: string;
                        };
                    };
                    stats?: {
                        chainId?: string;
                        deposited?: string | number | import("long").default;
                        deposits?: string | number | import("long").default;
                        depositors?: string | number | import("long").default;
                        delegated?: string | number | import("long").default;
                        supply?: string | number | import("long").default;
                        distanceToTarget?: string;
                    };
                }): _105.QueryZoneResponse;
                fromAmino(object: _105.QueryZoneResponseAmino): _105.QueryZoneResponse;
                toAmino(message: _105.QueryZoneResponse): _105.QueryZoneResponseAmino;
                fromAminoMsg(object: _105.QueryZoneResponseAminoMsg): _105.QueryZoneResponse;
                fromProtoMsg(message: _105.QueryZoneResponseProtoMsg): _105.QueryZoneResponse;
                toProto(message: _105.QueryZoneResponse): Uint8Array;
                toProtoMsg(message: _105.QueryZoneResponse): _105.QueryZoneResponseProtoMsg;
            };
            QueryZoneValidatorsRequest: {
                typeUrl: string;
                encode(message: _105.QueryZoneValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryZoneValidatorsRequest;
                fromJSON(object: any): _105.QueryZoneValidatorsRequest;
                toJSON(message: _105.QueryZoneValidatorsRequest): unknown;
                fromPartial(object: {
                    chainId?: string;
                    status?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _105.QueryZoneValidatorsRequest;
                fromAmino(object: _105.QueryZoneValidatorsRequestAmino): _105.QueryZoneValidatorsRequest;
                toAmino(message: _105.QueryZoneValidatorsRequest): _105.QueryZoneValidatorsRequestAmino;
                fromAminoMsg(object: _105.QueryZoneValidatorsRequestAminoMsg): _105.QueryZoneValidatorsRequest;
                fromProtoMsg(message: _105.QueryZoneValidatorsRequestProtoMsg): _105.QueryZoneValidatorsRequest;
                toProto(message: _105.QueryZoneValidatorsRequest): Uint8Array;
                toProtoMsg(message: _105.QueryZoneValidatorsRequest): _105.QueryZoneValidatorsRequestProtoMsg;
            };
            QueryZoneValidatorsResponse: {
                typeUrl: string;
                encode(message: _105.QueryZoneValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryZoneValidatorsResponse;
                fromJSON(object: any): _105.QueryZoneValidatorsResponse;
                toJSON(message: _105.QueryZoneValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: {
                        valoperAddress?: string;
                        commissionRate?: string;
                        delegatorShares?: string;
                        votingPower?: string;
                        score?: string;
                        status?: string;
                        jailed?: boolean;
                        tombstoned?: boolean;
                        jailedSince?: Date;
                        validatorBondShares?: string;
                        liquidShares?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _105.QueryZoneValidatorsResponse;
                fromAmino(object: _105.QueryZoneValidatorsResponseAmino): _105.QueryZoneValidatorsResponse;
                toAmino(message: _105.QueryZoneValidatorsResponse): _105.QueryZoneValidatorsResponseAmino;
                fromAminoMsg(object: _105.QueryZoneValidatorsResponseAminoMsg): _105.QueryZoneValidatorsResponse;
                fromProtoMsg(message: _105.QueryZoneValidatorsResponseProtoMsg): _105.QueryZoneValidatorsResponse;
                toProto(message: _105.QueryZoneValidatorsResponse): Uint8Array;
                toProtoMsg(message: _105.QueryZoneValidatorsResponse): _105.QueryZoneValidatorsResponseProtoMsg;
            };
            QueryDepositAccountForChainRequest: {
                typeUrl: string;
                encode(message: _105.QueryDepositAccountForChainRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryDepositAccountForChainRequest;
                fromJSON(object: any): _105.QueryDepositAccountForChainRequest;
                toJSON(message: _105.QueryDepositAccountForChainRequest): unknown;
                fromPartial(object: {
                    chainId?: string;
                }): _105.QueryDepositAccountForChainRequest;
                fromAmino(object: _105.QueryDepositAccountForChainRequestAmino): _105.QueryDepositAccountForChainRequest;
                toAmino(message: _105.QueryDepositAccountForChainRequest): _105.QueryDepositAccountForChainRequestAmino;
                fromAminoMsg(object: _105.QueryDepositAccountForChainRequestAminoMsg): _105.QueryDepositAccountForChainRequest;
                fromProtoMsg(message: _105.QueryDepositAccountForChainRequestProtoMsg): _105.QueryDepositAccountForChainRequest;
                toProto(message: _105.QueryDepositAccountForChainRequest): Uint8Array;
                toProtoMsg(message: _105.QueryDepositAccountForChainRequest): _105.QueryDepositAccountForChainRequestProtoMsg;
            };
            QueryDepositAccountForChainResponse: {
                typeUrl: string;
                encode(message: _105.QueryDepositAccountForChainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryDepositAccountForChainResponse;
                fromJSON(object: any): _105.QueryDepositAccountForChainResponse;
                toJSON(message: _105.QueryDepositAccountForChainResponse): unknown;
                fromPartial(object: {
                    depositAccountAddress?: string;
                }): _105.QueryDepositAccountForChainResponse;
                fromAmino(object: _105.QueryDepositAccountForChainResponseAmino): _105.QueryDepositAccountForChainResponse;
                toAmino(message: _105.QueryDepositAccountForChainResponse): _105.QueryDepositAccountForChainResponseAmino;
                fromAminoMsg(object: _105.QueryDepositAccountForChainResponseAminoMsg): _105.QueryDepositAccountForChainResponse;
                fromProtoMsg(message: _105.QueryDepositAccountForChainResponseProtoMsg): _105.QueryDepositAccountForChainResponse;
                toProto(message: _105.QueryDepositAccountForChainResponse): Uint8Array;
                toProtoMsg(message: _105.QueryDepositAccountForChainResponse): _105.QueryDepositAccountForChainResponseProtoMsg;
            };
            QueryDelegatorIntentRequest: {
                typeUrl: string;
                encode(message: _105.QueryDelegatorIntentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryDelegatorIntentRequest;
                fromJSON(object: any): _105.QueryDelegatorIntentRequest;
                toJSON(message: _105.QueryDelegatorIntentRequest): unknown;
                fromPartial(object: {
                    chainId?: string;
                    delegatorAddress?: string;
                }): _105.QueryDelegatorIntentRequest;
                fromAmino(object: _105.QueryDelegatorIntentRequestAmino): _105.QueryDelegatorIntentRequest;
                toAmino(message: _105.QueryDelegatorIntentRequest): _105.QueryDelegatorIntentRequestAmino;
                fromAminoMsg(object: _105.QueryDelegatorIntentRequestAminoMsg): _105.QueryDelegatorIntentRequest;
                fromProtoMsg(message: _105.QueryDelegatorIntentRequestProtoMsg): _105.QueryDelegatorIntentRequest;
                toProto(message: _105.QueryDelegatorIntentRequest): Uint8Array;
                toProtoMsg(message: _105.QueryDelegatorIntentRequest): _105.QueryDelegatorIntentRequestProtoMsg;
            };
            QueryDelegatorIntentResponse: {
                typeUrl: string;
                encode(message: _105.QueryDelegatorIntentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryDelegatorIntentResponse;
                fromJSON(object: any): _105.QueryDelegatorIntentResponse;
                toJSON(message: _105.QueryDelegatorIntentResponse): unknown;
                fromPartial(object: {
                    intent?: {
                        delegator?: string;
                        intents?: {
                            valoperAddress?: string;
                            weight?: string;
                        }[];
                    };
                }): _105.QueryDelegatorIntentResponse;
                fromAmino(object: _105.QueryDelegatorIntentResponseAmino): _105.QueryDelegatorIntentResponse;
                toAmino(message: _105.QueryDelegatorIntentResponse): _105.QueryDelegatorIntentResponseAmino;
                fromAminoMsg(object: _105.QueryDelegatorIntentResponseAminoMsg): _105.QueryDelegatorIntentResponse;
                fromProtoMsg(message: _105.QueryDelegatorIntentResponseProtoMsg): _105.QueryDelegatorIntentResponse;
                toProto(message: _105.QueryDelegatorIntentResponse): Uint8Array;
                toProtoMsg(message: _105.QueryDelegatorIntentResponse): _105.QueryDelegatorIntentResponseProtoMsg;
            };
            QueryDelegatorIntentsRequest: {
                typeUrl: string;
                encode(message: _105.QueryDelegatorIntentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryDelegatorIntentsRequest;
                fromJSON(object: any): _105.QueryDelegatorIntentsRequest;
                toJSON(message: _105.QueryDelegatorIntentsRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _105.QueryDelegatorIntentsRequest;
                fromAmino(object: _105.QueryDelegatorIntentsRequestAmino): _105.QueryDelegatorIntentsRequest;
                toAmino(message: _105.QueryDelegatorIntentsRequest): _105.QueryDelegatorIntentsRequestAmino;
                fromAminoMsg(object: _105.QueryDelegatorIntentsRequestAminoMsg): _105.QueryDelegatorIntentsRequest;
                fromProtoMsg(message: _105.QueryDelegatorIntentsRequestProtoMsg): _105.QueryDelegatorIntentsRequest;
                toProto(message: _105.QueryDelegatorIntentsRequest): Uint8Array;
                toProtoMsg(message: _105.QueryDelegatorIntentsRequest): _105.QueryDelegatorIntentsRequestProtoMsg;
            };
            DelegatorIntentsResponse: {
                typeUrl: string;
                encode(message: _105.DelegatorIntentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.DelegatorIntentsResponse;
                fromJSON(object: any): _105.DelegatorIntentsResponse;
                toJSON(message: _105.DelegatorIntentsResponse): unknown;
                fromPartial(object: {
                    chainId?: string;
                    intent?: {
                        delegator?: string;
                        intents?: {
                            valoperAddress?: string;
                            weight?: string;
                        }[];
                    };
                }): _105.DelegatorIntentsResponse;
                fromAmino(object: _105.DelegatorIntentsResponseAmino): _105.DelegatorIntentsResponse;
                toAmino(message: _105.DelegatorIntentsResponse): _105.DelegatorIntentsResponseAmino;
                fromAminoMsg(object: _105.DelegatorIntentsResponseAminoMsg): _105.DelegatorIntentsResponse;
                fromProtoMsg(message: _105.DelegatorIntentsResponseProtoMsg): _105.DelegatorIntentsResponse;
                toProto(message: _105.DelegatorIntentsResponse): Uint8Array;
                toProtoMsg(message: _105.DelegatorIntentsResponse): _105.DelegatorIntentsResponseProtoMsg;
            };
            QueryDelegatorIntentsResponse: {
                typeUrl: string;
                encode(message: _105.QueryDelegatorIntentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryDelegatorIntentsResponse;
                fromJSON(object: any): _105.QueryDelegatorIntentsResponse;
                toJSON(message: _105.QueryDelegatorIntentsResponse): unknown;
                fromPartial(object: {
                    intents?: {
                        chainId?: string;
                        intent?: {
                            delegator?: string;
                            intents?: {
                                valoperAddress?: string;
                                weight?: string;
                            }[];
                        };
                    }[];
                }): _105.QueryDelegatorIntentsResponse;
                fromAmino(object: _105.QueryDelegatorIntentsResponseAmino): _105.QueryDelegatorIntentsResponse;
                toAmino(message: _105.QueryDelegatorIntentsResponse): _105.QueryDelegatorIntentsResponseAmino;
                fromAminoMsg(object: _105.QueryDelegatorIntentsResponseAminoMsg): _105.QueryDelegatorIntentsResponse;
                fromProtoMsg(message: _105.QueryDelegatorIntentsResponseProtoMsg): _105.QueryDelegatorIntentsResponse;
                toProto(message: _105.QueryDelegatorIntentsResponse): Uint8Array;
                toProtoMsg(message: _105.QueryDelegatorIntentsResponse): _105.QueryDelegatorIntentsResponseProtoMsg;
            };
            QueryDelegationsRequest: {
                typeUrl: string;
                encode(message: _105.QueryDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryDelegationsRequest;
                fromJSON(object: any): _105.QueryDelegationsRequest;
                toJSON(message: _105.QueryDelegationsRequest): unknown;
                fromPartial(object: {
                    chainId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _105.QueryDelegationsRequest;
                fromAmino(object: _105.QueryDelegationsRequestAmino): _105.QueryDelegationsRequest;
                toAmino(message: _105.QueryDelegationsRequest): _105.QueryDelegationsRequestAmino;
                fromAminoMsg(object: _105.QueryDelegationsRequestAminoMsg): _105.QueryDelegationsRequest;
                fromProtoMsg(message: _105.QueryDelegationsRequestProtoMsg): _105.QueryDelegationsRequest;
                toProto(message: _105.QueryDelegationsRequest): Uint8Array;
                toProtoMsg(message: _105.QueryDelegationsRequest): _105.QueryDelegationsRequestProtoMsg;
            };
            QueryDelegationsResponse: {
                typeUrl: string;
                encode(message: _105.QueryDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryDelegationsResponse;
                fromJSON(object: any): _105.QueryDelegationsResponse;
                toJSON(message: _105.QueryDelegationsResponse): unknown;
                fromPartial(object: {
                    delegations?: {
                        delegationAddress?: string;
                        validatorAddress?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                        height?: string | number | import("long").default;
                        redelegationEnd?: string | number | import("long").default;
                    }[];
                    tvl?: string | number | import("long").default;
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _105.QueryDelegationsResponse;
                fromAmino(object: _105.QueryDelegationsResponseAmino): _105.QueryDelegationsResponse;
                toAmino(message: _105.QueryDelegationsResponse): _105.QueryDelegationsResponseAmino;
                fromAminoMsg(object: _105.QueryDelegationsResponseAminoMsg): _105.QueryDelegationsResponse;
                fromProtoMsg(message: _105.QueryDelegationsResponseProtoMsg): _105.QueryDelegationsResponse;
                toProto(message: _105.QueryDelegationsResponse): Uint8Array;
                toProtoMsg(message: _105.QueryDelegationsResponse): _105.QueryDelegationsResponseProtoMsg;
            };
            QueryReceiptsRequest: {
                typeUrl: string;
                encode(message: _105.QueryReceiptsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryReceiptsRequest;
                fromJSON(object: any): _105.QueryReceiptsRequest;
                toJSON(message: _105.QueryReceiptsRequest): unknown;
                fromPartial(object: {
                    chainId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _105.QueryReceiptsRequest;
                fromAmino(object: _105.QueryReceiptsRequestAmino): _105.QueryReceiptsRequest;
                toAmino(message: _105.QueryReceiptsRequest): _105.QueryReceiptsRequestAmino;
                fromAminoMsg(object: _105.QueryReceiptsRequestAminoMsg): _105.QueryReceiptsRequest;
                fromProtoMsg(message: _105.QueryReceiptsRequestProtoMsg): _105.QueryReceiptsRequest;
                toProto(message: _105.QueryReceiptsRequest): Uint8Array;
                toProtoMsg(message: _105.QueryReceiptsRequest): _105.QueryReceiptsRequestProtoMsg;
            };
            QueryReceiptsResponse: {
                typeUrl: string;
                encode(message: _105.QueryReceiptsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryReceiptsResponse;
                fromJSON(object: any): _105.QueryReceiptsResponse;
                toJSON(message: _105.QueryReceiptsResponse): unknown;
                fromPartial(object: {
                    receipts?: {
                        chainId?: string;
                        sender?: string;
                        txhash?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        firstSeen?: Date;
                        completed?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _105.QueryReceiptsResponse;
                fromAmino(object: _105.QueryReceiptsResponseAmino): _105.QueryReceiptsResponse;
                toAmino(message: _105.QueryReceiptsResponse): _105.QueryReceiptsResponseAmino;
                fromAminoMsg(object: _105.QueryReceiptsResponseAminoMsg): _105.QueryReceiptsResponse;
                fromProtoMsg(message: _105.QueryReceiptsResponseProtoMsg): _105.QueryReceiptsResponse;
                toProto(message: _105.QueryReceiptsResponse): Uint8Array;
                toProtoMsg(message: _105.QueryReceiptsResponse): _105.QueryReceiptsResponseProtoMsg;
            };
            QueryTxStatusRequest: {
                typeUrl: string;
                encode(message: _105.QueryTxStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryTxStatusRequest;
                fromJSON(object: any): _105.QueryTxStatusRequest;
                toJSON(message: _105.QueryTxStatusRequest): unknown;
                fromPartial(object: {
                    chainId?: string;
                    txHash?: string;
                }): _105.QueryTxStatusRequest;
                fromAmino(object: _105.QueryTxStatusRequestAmino): _105.QueryTxStatusRequest;
                toAmino(message: _105.QueryTxStatusRequest): _105.QueryTxStatusRequestAmino;
                fromAminoMsg(object: _105.QueryTxStatusRequestAminoMsg): _105.QueryTxStatusRequest;
                fromProtoMsg(message: _105.QueryTxStatusRequestProtoMsg): _105.QueryTxStatusRequest;
                toProto(message: _105.QueryTxStatusRequest): Uint8Array;
                toProtoMsg(message: _105.QueryTxStatusRequest): _105.QueryTxStatusRequestProtoMsg;
            };
            QueryTxStatusResponse: {
                typeUrl: string;
                encode(message: _105.QueryTxStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryTxStatusResponse;
                fromJSON(object: any): _105.QueryTxStatusResponse;
                toJSON(message: _105.QueryTxStatusResponse): unknown;
                fromPartial(object: {
                    receipt?: {
                        chainId?: string;
                        sender?: string;
                        txhash?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        firstSeen?: Date;
                        completed?: Date;
                    };
                }): _105.QueryTxStatusResponse;
                fromAmino(object: _105.QueryTxStatusResponseAmino): _105.QueryTxStatusResponse;
                toAmino(message: _105.QueryTxStatusResponse): _105.QueryTxStatusResponseAmino;
                fromAminoMsg(object: _105.QueryTxStatusResponseAminoMsg): _105.QueryTxStatusResponse;
                fromProtoMsg(message: _105.QueryTxStatusResponseProtoMsg): _105.QueryTxStatusResponse;
                toProto(message: _105.QueryTxStatusResponse): Uint8Array;
                toProtoMsg(message: _105.QueryTxStatusResponse): _105.QueryTxStatusResponseProtoMsg;
            };
            QueryWithdrawalRecordsRequest: {
                typeUrl: string;
                encode(message: _105.QueryWithdrawalRecordsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryWithdrawalRecordsRequest;
                fromJSON(object: any): _105.QueryWithdrawalRecordsRequest;
                toJSON(message: _105.QueryWithdrawalRecordsRequest): unknown;
                fromPartial(object: {
                    chainId?: string;
                    delegatorAddress?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _105.QueryWithdrawalRecordsRequest;
                fromAmino(object: _105.QueryWithdrawalRecordsRequestAmino): _105.QueryWithdrawalRecordsRequest;
                toAmino(message: _105.QueryWithdrawalRecordsRequest): _105.QueryWithdrawalRecordsRequestAmino;
                fromAminoMsg(object: _105.QueryWithdrawalRecordsRequestAminoMsg): _105.QueryWithdrawalRecordsRequest;
                fromProtoMsg(message: _105.QueryWithdrawalRecordsRequestProtoMsg): _105.QueryWithdrawalRecordsRequest;
                toProto(message: _105.QueryWithdrawalRecordsRequest): Uint8Array;
                toProtoMsg(message: _105.QueryWithdrawalRecordsRequest): _105.QueryWithdrawalRecordsRequestProtoMsg;
            };
            QueryWithdrawalRecordsResponse: {
                typeUrl: string;
                encode(message: _105.QueryWithdrawalRecordsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryWithdrawalRecordsResponse;
                fromJSON(object: any): _105.QueryWithdrawalRecordsResponse;
                toJSON(message: _105.QueryWithdrawalRecordsResponse): unknown;
                fromPartial(object: {
                    withdrawals?: {
                        chainId?: string;
                        delegator?: string;
                        distribution?: {
                            valoper?: string;
                            amount?: string | number | import("long").default;
                        }[];
                        recipient?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        burnAmount?: {
                            denom?: string;
                            amount?: string;
                        };
                        txhash?: string;
                        status?: number;
                        completionTime?: Date;
                        requeued?: boolean;
                        acknowledged?: boolean;
                        epochNumber?: string | number | import("long").default;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _105.QueryWithdrawalRecordsResponse;
                fromAmino(object: _105.QueryWithdrawalRecordsResponseAmino): _105.QueryWithdrawalRecordsResponse;
                toAmino(message: _105.QueryWithdrawalRecordsResponse): _105.QueryWithdrawalRecordsResponseAmino;
                fromAminoMsg(object: _105.QueryWithdrawalRecordsResponseAminoMsg): _105.QueryWithdrawalRecordsResponse;
                fromProtoMsg(message: _105.QueryWithdrawalRecordsResponseProtoMsg): _105.QueryWithdrawalRecordsResponse;
                toProto(message: _105.QueryWithdrawalRecordsResponse): Uint8Array;
                toProtoMsg(message: _105.QueryWithdrawalRecordsResponse): _105.QueryWithdrawalRecordsResponseProtoMsg;
            };
            QueryUserWithdrawalRecordsRequest: {
                typeUrl: string;
                encode(message: _105.QueryUserWithdrawalRecordsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryUserWithdrawalRecordsRequest;
                fromJSON(object: any): _105.QueryUserWithdrawalRecordsRequest;
                toJSON(message: _105.QueryUserWithdrawalRecordsRequest): unknown;
                fromPartial(object: {
                    userAddress?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _105.QueryUserWithdrawalRecordsRequest;
                fromAmino(object: _105.QueryUserWithdrawalRecordsRequestAmino): _105.QueryUserWithdrawalRecordsRequest;
                toAmino(message: _105.QueryUserWithdrawalRecordsRequest): _105.QueryUserWithdrawalRecordsRequestAmino;
                fromAminoMsg(object: _105.QueryUserWithdrawalRecordsRequestAminoMsg): _105.QueryUserWithdrawalRecordsRequest;
                fromProtoMsg(message: _105.QueryUserWithdrawalRecordsRequestProtoMsg): _105.QueryUserWithdrawalRecordsRequest;
                toProto(message: _105.QueryUserWithdrawalRecordsRequest): Uint8Array;
                toProtoMsg(message: _105.QueryUserWithdrawalRecordsRequest): _105.QueryUserWithdrawalRecordsRequestProtoMsg;
            };
            QueryUnbondingRecordsRequest: {
                typeUrl: string;
                encode(message: _105.QueryUnbondingRecordsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryUnbondingRecordsRequest;
                fromJSON(object: any): _105.QueryUnbondingRecordsRequest;
                toJSON(message: _105.QueryUnbondingRecordsRequest): unknown;
                fromPartial(object: {
                    chainId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _105.QueryUnbondingRecordsRequest;
                fromAmino(object: _105.QueryUnbondingRecordsRequestAmino): _105.QueryUnbondingRecordsRequest;
                toAmino(message: _105.QueryUnbondingRecordsRequest): _105.QueryUnbondingRecordsRequestAmino;
                fromAminoMsg(object: _105.QueryUnbondingRecordsRequestAminoMsg): _105.QueryUnbondingRecordsRequest;
                fromProtoMsg(message: _105.QueryUnbondingRecordsRequestProtoMsg): _105.QueryUnbondingRecordsRequest;
                toProto(message: _105.QueryUnbondingRecordsRequest): Uint8Array;
                toProtoMsg(message: _105.QueryUnbondingRecordsRequest): _105.QueryUnbondingRecordsRequestProtoMsg;
            };
            QueryUnbondingRecordsResponse: {
                typeUrl: string;
                encode(message: _105.QueryUnbondingRecordsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryUnbondingRecordsResponse;
                fromJSON(object: any): _105.QueryUnbondingRecordsResponse;
                toJSON(message: _105.QueryUnbondingRecordsResponse): unknown;
                fromPartial(object: {
                    unbondings?: {
                        chainId?: string;
                        epochNumber?: string | number | import("long").default;
                        validator?: string;
                        relatedTxhash?: string[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _105.QueryUnbondingRecordsResponse;
                fromAmino(object: _105.QueryUnbondingRecordsResponseAmino): _105.QueryUnbondingRecordsResponse;
                toAmino(message: _105.QueryUnbondingRecordsResponse): _105.QueryUnbondingRecordsResponseAmino;
                fromAminoMsg(object: _105.QueryUnbondingRecordsResponseAminoMsg): _105.QueryUnbondingRecordsResponse;
                fromProtoMsg(message: _105.QueryUnbondingRecordsResponseProtoMsg): _105.QueryUnbondingRecordsResponse;
                toProto(message: _105.QueryUnbondingRecordsResponse): Uint8Array;
                toProtoMsg(message: _105.QueryUnbondingRecordsResponse): _105.QueryUnbondingRecordsResponseProtoMsg;
            };
            QueryRedelegationRecordsRequest: {
                typeUrl: string;
                encode(message: _105.QueryRedelegationRecordsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryRedelegationRecordsRequest;
                fromJSON(object: any): _105.QueryRedelegationRecordsRequest;
                toJSON(message: _105.QueryRedelegationRecordsRequest): unknown;
                fromPartial(object: {
                    chainId?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _105.QueryRedelegationRecordsRequest;
                fromAmino(object: _105.QueryRedelegationRecordsRequestAmino): _105.QueryRedelegationRecordsRequest;
                toAmino(message: _105.QueryRedelegationRecordsRequest): _105.QueryRedelegationRecordsRequestAmino;
                fromAminoMsg(object: _105.QueryRedelegationRecordsRequestAminoMsg): _105.QueryRedelegationRecordsRequest;
                fromProtoMsg(message: _105.QueryRedelegationRecordsRequestProtoMsg): _105.QueryRedelegationRecordsRequest;
                toProto(message: _105.QueryRedelegationRecordsRequest): Uint8Array;
                toProtoMsg(message: _105.QueryRedelegationRecordsRequest): _105.QueryRedelegationRecordsRequestProtoMsg;
            };
            QueryRedelegationRecordsResponse: {
                typeUrl: string;
                encode(message: _105.QueryRedelegationRecordsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryRedelegationRecordsResponse;
                fromJSON(object: any): _105.QueryRedelegationRecordsResponse;
                toJSON(message: _105.QueryRedelegationRecordsResponse): unknown;
                fromPartial(object: {
                    redelegations?: {
                        chainId?: string;
                        epochNumber?: string | number | import("long").default;
                        source?: string;
                        destination?: string;
                        amount?: string | number | import("long").default;
                        completionTime?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _105.QueryRedelegationRecordsResponse;
                fromAmino(object: _105.QueryRedelegationRecordsResponseAmino): _105.QueryRedelegationRecordsResponse;
                toAmino(message: _105.QueryRedelegationRecordsResponse): _105.QueryRedelegationRecordsResponseAmino;
                fromAminoMsg(object: _105.QueryRedelegationRecordsResponseAminoMsg): _105.QueryRedelegationRecordsResponse;
                fromProtoMsg(message: _105.QueryRedelegationRecordsResponseProtoMsg): _105.QueryRedelegationRecordsResponse;
                toProto(message: _105.QueryRedelegationRecordsResponse): Uint8Array;
                toProtoMsg(message: _105.QueryRedelegationRecordsResponse): _105.QueryRedelegationRecordsResponseProtoMsg;
            };
            QueryMappedAccountsRequest: {
                typeUrl: string;
                encode(message: _105.QueryMappedAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryMappedAccountsRequest;
                fromJSON(object: any): _105.QueryMappedAccountsRequest;
                toJSON(message: _105.QueryMappedAccountsRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _105.QueryMappedAccountsRequest;
                fromAmino(object: _105.QueryMappedAccountsRequestAmino): _105.QueryMappedAccountsRequest;
                toAmino(message: _105.QueryMappedAccountsRequest): _105.QueryMappedAccountsRequestAmino;
                fromAminoMsg(object: _105.QueryMappedAccountsRequestAminoMsg): _105.QueryMappedAccountsRequest;
                fromProtoMsg(message: _105.QueryMappedAccountsRequestProtoMsg): _105.QueryMappedAccountsRequest;
                toProto(message: _105.QueryMappedAccountsRequest): Uint8Array;
                toProtoMsg(message: _105.QueryMappedAccountsRequest): _105.QueryMappedAccountsRequestProtoMsg;
            };
            QueryMappedAccountsResponse_RemoteAddressMapEntry: {
                encode(message: _105.QueryMappedAccountsResponse_RemoteAddressMapEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryMappedAccountsResponse_RemoteAddressMapEntry;
                fromJSON(object: any): _105.QueryMappedAccountsResponse_RemoteAddressMapEntry;
                toJSON(message: _105.QueryMappedAccountsResponse_RemoteAddressMapEntry): unknown;
                fromPartial(object: {
                    key?: string;
                    value?: Uint8Array;
                }): _105.QueryMappedAccountsResponse_RemoteAddressMapEntry;
                fromAmino(object: _105.QueryMappedAccountsResponse_RemoteAddressMapEntryAmino): _105.QueryMappedAccountsResponse_RemoteAddressMapEntry;
                toAmino(message: _105.QueryMappedAccountsResponse_RemoteAddressMapEntry): _105.QueryMappedAccountsResponse_RemoteAddressMapEntryAmino;
                fromAminoMsg(object: _105.QueryMappedAccountsResponse_RemoteAddressMapEntryAminoMsg): _105.QueryMappedAccountsResponse_RemoteAddressMapEntry;
                fromProtoMsg(message: _105.QueryMappedAccountsResponse_RemoteAddressMapEntryProtoMsg): _105.QueryMappedAccountsResponse_RemoteAddressMapEntry;
                toProto(message: _105.QueryMappedAccountsResponse_RemoteAddressMapEntry): Uint8Array;
            };
            QueryMappedAccountsResponse: {
                typeUrl: string;
                encode(message: _105.QueryMappedAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryMappedAccountsResponse;
                fromJSON(object: any): _105.QueryMappedAccountsResponse;
                toJSON(message: _105.QueryMappedAccountsResponse): unknown;
                fromPartial(object: {
                    RemoteAddressMap?: {
                        [x: string]: Uint8Array;
                    };
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _105.QueryMappedAccountsResponse;
                fromAmino(object: _105.QueryMappedAccountsResponseAmino): _105.QueryMappedAccountsResponse;
                toAmino(message: _105.QueryMappedAccountsResponse): _105.QueryMappedAccountsResponseAmino;
                fromAminoMsg(object: _105.QueryMappedAccountsResponseAminoMsg): _105.QueryMappedAccountsResponse;
                fromProtoMsg(message: _105.QueryMappedAccountsResponseProtoMsg): _105.QueryMappedAccountsResponse;
                toProto(message: _105.QueryMappedAccountsResponse): Uint8Array;
                toProtoMsg(message: _105.QueryMappedAccountsResponse): _105.QueryMappedAccountsResponseProtoMsg;
            };
            RegisterZoneProposal: {
                typeUrl: string;
                encode(message: _104.RegisterZoneProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.RegisterZoneProposal;
                fromJSON(object: any): _104.RegisterZoneProposal;
                toJSON(message: _104.RegisterZoneProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    connectionId?: string;
                    baseDenom?: string;
                    localDenom?: string;
                    accountPrefix?: string;
                    multiSend?: boolean;
                    liquidityModule?: boolean;
                    messagesPerTx?: string | number | import("long").default;
                    returnToSender?: boolean;
                    depositsEnabled?: boolean;
                    unbondingEnabled?: boolean;
                    decimals?: string | number | import("long").default;
                    is118?: boolean;
                }): _104.RegisterZoneProposal;
                fromAmino(object: _104.RegisterZoneProposalAmino): _104.RegisterZoneProposal;
                toAmino(message: _104.RegisterZoneProposal): _104.RegisterZoneProposalAmino;
                fromAminoMsg(object: _104.RegisterZoneProposalAminoMsg): _104.RegisterZoneProposal;
                fromProtoMsg(message: _104.RegisterZoneProposalProtoMsg): _104.RegisterZoneProposal;
                toProto(message: _104.RegisterZoneProposal): Uint8Array;
                toProtoMsg(message: _104.RegisterZoneProposal): _104.RegisterZoneProposalProtoMsg;
            };
            RegisterZoneProposalWithDeposit: {
                typeUrl: string;
                encode(message: _104.RegisterZoneProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.RegisterZoneProposalWithDeposit;
                fromJSON(object: any): _104.RegisterZoneProposalWithDeposit;
                toJSON(message: _104.RegisterZoneProposalWithDeposit): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    connectionId?: string;
                    baseDenom?: string;
                    localDenom?: string;
                    accountPrefix?: string;
                    multiSend?: boolean;
                    liquidityModule?: boolean;
                    deposit?: string;
                    messagesPerTx?: string | number | import("long").default;
                    returnToSender?: boolean;
                    depositsEnabled?: boolean;
                    unbondingEnabled?: boolean;
                    decimals?: string | number | import("long").default;
                    is118?: boolean;
                }): _104.RegisterZoneProposalWithDeposit;
                fromAmino(object: _104.RegisterZoneProposalWithDepositAmino): _104.RegisterZoneProposalWithDeposit;
                toAmino(message: _104.RegisterZoneProposalWithDeposit): _104.RegisterZoneProposalWithDepositAmino;
                fromAminoMsg(object: _104.RegisterZoneProposalWithDepositAminoMsg): _104.RegisterZoneProposalWithDeposit;
                fromProtoMsg(message: _104.RegisterZoneProposalWithDepositProtoMsg): _104.RegisterZoneProposalWithDeposit;
                toProto(message: _104.RegisterZoneProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _104.RegisterZoneProposalWithDeposit): _104.RegisterZoneProposalWithDepositProtoMsg;
            };
            UpdateZoneProposal: {
                typeUrl: string;
                encode(message: _104.UpdateZoneProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.UpdateZoneProposal;
                fromJSON(object: any): _104.UpdateZoneProposal;
                toJSON(message: _104.UpdateZoneProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    chainId?: string;
                    changes?: {
                        key?: string;
                        value?: string;
                    }[];
                }): _104.UpdateZoneProposal;
                fromAmino(object: _104.UpdateZoneProposalAmino): _104.UpdateZoneProposal;
                toAmino(message: _104.UpdateZoneProposal): _104.UpdateZoneProposalAmino;
                fromAminoMsg(object: _104.UpdateZoneProposalAminoMsg): _104.UpdateZoneProposal;
                fromProtoMsg(message: _104.UpdateZoneProposalProtoMsg): _104.UpdateZoneProposal;
                toProto(message: _104.UpdateZoneProposal): Uint8Array;
                toProtoMsg(message: _104.UpdateZoneProposal): _104.UpdateZoneProposalProtoMsg;
            };
            UpdateZoneProposalWithDeposit: {
                typeUrl: string;
                encode(message: _104.UpdateZoneProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.UpdateZoneProposalWithDeposit;
                fromJSON(object: any): _104.UpdateZoneProposalWithDeposit;
                toJSON(message: _104.UpdateZoneProposalWithDeposit): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    chainId?: string;
                    changes?: {
                        key?: string;
                        value?: string;
                    }[];
                    deposit?: string;
                }): _104.UpdateZoneProposalWithDeposit;
                fromAmino(object: _104.UpdateZoneProposalWithDepositAmino): _104.UpdateZoneProposalWithDeposit;
                toAmino(message: _104.UpdateZoneProposalWithDeposit): _104.UpdateZoneProposalWithDepositAmino;
                fromAminoMsg(object: _104.UpdateZoneProposalWithDepositAminoMsg): _104.UpdateZoneProposalWithDeposit;
                fromProtoMsg(message: _104.UpdateZoneProposalWithDepositProtoMsg): _104.UpdateZoneProposalWithDeposit;
                toProto(message: _104.UpdateZoneProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _104.UpdateZoneProposalWithDeposit): _104.UpdateZoneProposalWithDepositProtoMsg;
            };
            UpdateZoneValue: {
                typeUrl: string;
                encode(message: _104.UpdateZoneValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.UpdateZoneValue;
                fromJSON(object: any): _104.UpdateZoneValue;
                toJSON(message: _104.UpdateZoneValue): unknown;
                fromPartial(object: {
                    key?: string;
                    value?: string;
                }): _104.UpdateZoneValue;
                fromAmino(object: _104.UpdateZoneValueAmino): _104.UpdateZoneValue;
                toAmino(message: _104.UpdateZoneValue): _104.UpdateZoneValueAmino;
                fromAminoMsg(object: _104.UpdateZoneValueAminoMsg): _104.UpdateZoneValue;
                fromProtoMsg(message: _104.UpdateZoneValueProtoMsg): _104.UpdateZoneValue;
                toProto(message: _104.UpdateZoneValue): Uint8Array;
                toProtoMsg(message: _104.UpdateZoneValue): _104.UpdateZoneValueProtoMsg;
            };
            MsgGovReopenChannel: {
                typeUrl: string;
                encode(message: _104.MsgGovReopenChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgGovReopenChannel;
                fromJSON(object: any): _104.MsgGovReopenChannel;
                toJSON(message: _104.MsgGovReopenChannel): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    connectionId?: string;
                    portId?: string;
                    authority?: string;
                }): _104.MsgGovReopenChannel;
                fromAmino(object: _104.MsgGovReopenChannelAmino): _104.MsgGovReopenChannel;
                toAmino(message: _104.MsgGovReopenChannel): _104.MsgGovReopenChannelAmino;
                fromAminoMsg(object: _104.MsgGovReopenChannelAminoMsg): _104.MsgGovReopenChannel;
                fromProtoMsg(message: _104.MsgGovReopenChannelProtoMsg): _104.MsgGovReopenChannel;
                toProto(message: _104.MsgGovReopenChannel): Uint8Array;
                toProtoMsg(message: _104.MsgGovReopenChannel): _104.MsgGovReopenChannelProtoMsg;
            };
            MsgGovReopenChannelResponse: {
                typeUrl: string;
                encode(_: _104.MsgGovReopenChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgGovReopenChannelResponse;
                fromJSON(_: any): _104.MsgGovReopenChannelResponse;
                toJSON(_: _104.MsgGovReopenChannelResponse): unknown;
                fromPartial(_: {}): _104.MsgGovReopenChannelResponse;
                fromAmino(_: _104.MsgGovReopenChannelResponseAmino): _104.MsgGovReopenChannelResponse;
                toAmino(_: _104.MsgGovReopenChannelResponse): _104.MsgGovReopenChannelResponseAmino;
                fromAminoMsg(object: _104.MsgGovReopenChannelResponseAminoMsg): _104.MsgGovReopenChannelResponse;
                fromProtoMsg(message: _104.MsgGovReopenChannelResponseProtoMsg): _104.MsgGovReopenChannelResponse;
                toProto(message: _104.MsgGovReopenChannelResponse): Uint8Array;
                toProtoMsg(message: _104.MsgGovReopenChannelResponse): _104.MsgGovReopenChannelResponseProtoMsg;
            };
            MsgGovCloseChannel: {
                typeUrl: string;
                encode(message: _104.MsgGovCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgGovCloseChannel;
                fromJSON(object: any): _104.MsgGovCloseChannel;
                toJSON(message: _104.MsgGovCloseChannel): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    channelId?: string;
                    portId?: string;
                    authority?: string;
                }): _104.MsgGovCloseChannel;
                fromAmino(object: _104.MsgGovCloseChannelAmino): _104.MsgGovCloseChannel;
                toAmino(message: _104.MsgGovCloseChannel): _104.MsgGovCloseChannelAmino;
                fromAminoMsg(object: _104.MsgGovCloseChannelAminoMsg): _104.MsgGovCloseChannel;
                fromProtoMsg(message: _104.MsgGovCloseChannelProtoMsg): _104.MsgGovCloseChannel;
                toProto(message: _104.MsgGovCloseChannel): Uint8Array;
                toProtoMsg(message: _104.MsgGovCloseChannel): _104.MsgGovCloseChannelProtoMsg;
            };
            MsgGovCloseChannelResponse: {
                typeUrl: string;
                encode(_: _104.MsgGovCloseChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgGovCloseChannelResponse;
                fromJSON(_: any): _104.MsgGovCloseChannelResponse;
                toJSON(_: _104.MsgGovCloseChannelResponse): unknown;
                fromPartial(_: {}): _104.MsgGovCloseChannelResponse;
                fromAmino(_: _104.MsgGovCloseChannelResponseAmino): _104.MsgGovCloseChannelResponse;
                toAmino(_: _104.MsgGovCloseChannelResponse): _104.MsgGovCloseChannelResponseAmino;
                fromAminoMsg(object: _104.MsgGovCloseChannelResponseAminoMsg): _104.MsgGovCloseChannelResponse;
                fromProtoMsg(message: _104.MsgGovCloseChannelResponseProtoMsg): _104.MsgGovCloseChannelResponse;
                toProto(message: _104.MsgGovCloseChannelResponse): Uint8Array;
                toProtoMsg(message: _104.MsgGovCloseChannelResponse): _104.MsgGovCloseChannelResponseProtoMsg;
            };
            MsgGovSetLsmCaps: {
                typeUrl: string;
                encode(message: _104.MsgGovSetLsmCaps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgGovSetLsmCaps;
                fromJSON(object: any): _104.MsgGovSetLsmCaps;
                toJSON(message: _104.MsgGovSetLsmCaps): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    chainId?: string;
                    caps?: {
                        validatorCap?: string;
                        validatorBondCap?: string;
                        globalCap?: string;
                    };
                    authority?: string;
                }): _104.MsgGovSetLsmCaps;
                fromAmino(object: _104.MsgGovSetLsmCapsAmino): _104.MsgGovSetLsmCaps;
                toAmino(message: _104.MsgGovSetLsmCaps): _104.MsgGovSetLsmCapsAmino;
                fromAminoMsg(object: _104.MsgGovSetLsmCapsAminoMsg): _104.MsgGovSetLsmCaps;
                fromProtoMsg(message: _104.MsgGovSetLsmCapsProtoMsg): _104.MsgGovSetLsmCaps;
                toProto(message: _104.MsgGovSetLsmCaps): Uint8Array;
                toProtoMsg(message: _104.MsgGovSetLsmCaps): _104.MsgGovSetLsmCapsProtoMsg;
            };
            MsgGovSetLsmCapsResponse: {
                typeUrl: string;
                encode(_: _104.MsgGovSetLsmCapsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MsgGovSetLsmCapsResponse;
                fromJSON(_: any): _104.MsgGovSetLsmCapsResponse;
                toJSON(_: _104.MsgGovSetLsmCapsResponse): unknown;
                fromPartial(_: {}): _104.MsgGovSetLsmCapsResponse;
                fromAmino(_: _104.MsgGovSetLsmCapsResponseAmino): _104.MsgGovSetLsmCapsResponse;
                toAmino(_: _104.MsgGovSetLsmCapsResponse): _104.MsgGovSetLsmCapsResponseAmino;
                fromAminoMsg(object: _104.MsgGovSetLsmCapsResponseAminoMsg): _104.MsgGovSetLsmCapsResponse;
                fromProtoMsg(message: _104.MsgGovSetLsmCapsResponseProtoMsg): _104.MsgGovSetLsmCapsResponse;
                toProto(message: _104.MsgGovSetLsmCapsResponse): Uint8Array;
                toProtoMsg(message: _104.MsgGovSetLsmCapsResponse): _104.MsgGovSetLsmCapsResponseProtoMsg;
            };
            MsgRequestRedemption: {
                typeUrl: string;
                aminoType: string;
                encode(message: _103.MsgRequestRedemption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.MsgRequestRedemption;
                fromJSON(object: any): _103.MsgRequestRedemption;
                toJSON(message: _103.MsgRequestRedemption): unknown;
                fromPartial(object: {
                    value?: {
                        denom?: string;
                        amount?: string;
                    };
                    destinationAddress?: string;
                    fromAddress?: string;
                }): _103.MsgRequestRedemption;
                fromAmino(object: _103.MsgRequestRedemptionAmino): _103.MsgRequestRedemption;
                toAmino(message: _103.MsgRequestRedemption): _103.MsgRequestRedemptionAmino;
                fromAminoMsg(object: _103.MsgRequestRedemptionAminoMsg): _103.MsgRequestRedemption;
                toAminoMsg(message: _103.MsgRequestRedemption): _103.MsgRequestRedemptionAminoMsg;
                fromProtoMsg(message: _103.MsgRequestRedemptionProtoMsg): _103.MsgRequestRedemption;
                toProto(message: _103.MsgRequestRedemption): Uint8Array;
                toProtoMsg(message: _103.MsgRequestRedemption): _103.MsgRequestRedemptionProtoMsg;
            };
            MsgRequestRedemptionResponse: {
                typeUrl: string;
                encode(_: _103.MsgRequestRedemptionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.MsgRequestRedemptionResponse;
                fromJSON(_: any): _103.MsgRequestRedemptionResponse;
                toJSON(_: _103.MsgRequestRedemptionResponse): unknown;
                fromPartial(_: {}): _103.MsgRequestRedemptionResponse;
                fromAmino(_: _103.MsgRequestRedemptionResponseAmino): _103.MsgRequestRedemptionResponse;
                toAmino(_: _103.MsgRequestRedemptionResponse): _103.MsgRequestRedemptionResponseAmino;
                fromAminoMsg(object: _103.MsgRequestRedemptionResponseAminoMsg): _103.MsgRequestRedemptionResponse;
                fromProtoMsg(message: _103.MsgRequestRedemptionResponseProtoMsg): _103.MsgRequestRedemptionResponse;
                toProto(message: _103.MsgRequestRedemptionResponse): Uint8Array;
                toProtoMsg(message: _103.MsgRequestRedemptionResponse): _103.MsgRequestRedemptionResponseProtoMsg;
            };
            MsgSignalIntent: {
                typeUrl: string;
                aminoType: string;
                encode(message: _103.MsgSignalIntent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.MsgSignalIntent;
                fromJSON(object: any): _103.MsgSignalIntent;
                toJSON(message: _103.MsgSignalIntent): unknown;
                fromPartial(object: {
                    chainId?: string;
                    intents?: string;
                    fromAddress?: string;
                }): _103.MsgSignalIntent;
                fromAmino(object: _103.MsgSignalIntentAmino): _103.MsgSignalIntent;
                toAmino(message: _103.MsgSignalIntent): _103.MsgSignalIntentAmino;
                fromAminoMsg(object: _103.MsgSignalIntentAminoMsg): _103.MsgSignalIntent;
                toAminoMsg(message: _103.MsgSignalIntent): _103.MsgSignalIntentAminoMsg;
                fromProtoMsg(message: _103.MsgSignalIntentProtoMsg): _103.MsgSignalIntent;
                toProto(message: _103.MsgSignalIntent): Uint8Array;
                toProtoMsg(message: _103.MsgSignalIntent): _103.MsgSignalIntentProtoMsg;
            };
            MsgSignalIntentResponse: {
                typeUrl: string;
                encode(_: _103.MsgSignalIntentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.MsgSignalIntentResponse;
                fromJSON(_: any): _103.MsgSignalIntentResponse;
                toJSON(_: _103.MsgSignalIntentResponse): unknown;
                fromPartial(_: {}): _103.MsgSignalIntentResponse;
                fromAmino(_: _103.MsgSignalIntentResponseAmino): _103.MsgSignalIntentResponse;
                toAmino(_: _103.MsgSignalIntentResponse): _103.MsgSignalIntentResponseAmino;
                fromAminoMsg(object: _103.MsgSignalIntentResponseAminoMsg): _103.MsgSignalIntentResponse;
                fromProtoMsg(message: _103.MsgSignalIntentResponseProtoMsg): _103.MsgSignalIntentResponse;
                toProto(message: _103.MsgSignalIntentResponse): Uint8Array;
                toProtoMsg(message: _103.MsgSignalIntentResponse): _103.MsgSignalIntentResponseProtoMsg;
            };
            Zone: {
                typeUrl: string;
                encode(message: _102.Zone, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Zone;
                fromJSON(object: any): _102.Zone;
                toJSON(message: _102.Zone): unknown;
                fromPartial(object: {
                    connectionId?: string;
                    chainId?: string;
                    depositAddress?: {
                        address?: string;
                        balance?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        portName?: string;
                        withdrawalAddress?: string;
                        balanceWaitgroup?: number;
                    };
                    withdrawalAddress?: {
                        address?: string;
                        balance?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        portName?: string;
                        withdrawalAddress?: string;
                        balanceWaitgroup?: number;
                    };
                    performanceAddress?: {
                        address?: string;
                        balance?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        portName?: string;
                        withdrawalAddress?: string;
                        balanceWaitgroup?: number;
                    };
                    delegationAddress?: {
                        address?: string;
                        balance?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        portName?: string;
                        withdrawalAddress?: string;
                        balanceWaitgroup?: number;
                    };
                    accountPrefix?: string;
                    localDenom?: string;
                    baseDenom?: string;
                    redemptionRate?: string;
                    lastRedemptionRate?: string;
                    validators?: {
                        valoperAddress?: string;
                        commissionRate?: string;
                        delegatorShares?: string;
                        votingPower?: string;
                        score?: string;
                        status?: string;
                        jailed?: boolean;
                        tombstoned?: boolean;
                        jailedSince?: Date;
                        validatorBondShares?: string;
                        liquidShares?: string;
                    }[];
                    aggregateIntent?: {
                        valoperAddress?: string;
                        weight?: string;
                    }[];
                    multiSend?: boolean;
                    liquidityModule?: boolean;
                    withdrawalWaitgroup?: number;
                    ibcNextValidatorsHash?: Uint8Array;
                    validatorSelectionAllocation?: string | number | import("long").default;
                    holdingsAllocation?: string | number | import("long").default;
                    lastEpochHeight?: string | number | import("long").default;
                    tvl?: string;
                    unbondingPeriod?: string | number | import("long").default;
                    messagesPerTx?: string | number | import("long").default;
                    decimals?: string | number | import("long").default;
                    unbondingEnabled?: boolean;
                    depositsEnabled?: boolean;
                    returnToSender?: boolean;
                    is118?: boolean;
                    subzoneInfo?: {
                        authority?: string;
                        baseChainID?: string;
                    };
                }): _102.Zone;
                fromAmino(object: _102.ZoneAmino): _102.Zone;
                toAmino(message: _102.Zone): _102.ZoneAmino;
                fromAminoMsg(object: _102.ZoneAminoMsg): _102.Zone;
                fromProtoMsg(message: _102.ZoneProtoMsg): _102.Zone;
                toProto(message: _102.Zone): Uint8Array;
                toProtoMsg(message: _102.Zone): _102.ZoneProtoMsg;
            };
            SubzoneInfo: {
                typeUrl: string;
                encode(message: _102.SubzoneInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.SubzoneInfo;
                fromJSON(object: any): _102.SubzoneInfo;
                toJSON(message: _102.SubzoneInfo): unknown;
                fromPartial(object: {
                    authority?: string;
                    baseChainID?: string;
                }): _102.SubzoneInfo;
                fromAmino(object: _102.SubzoneInfoAmino): _102.SubzoneInfo;
                toAmino(message: _102.SubzoneInfo): _102.SubzoneInfoAmino;
                fromAminoMsg(object: _102.SubzoneInfoAminoMsg): _102.SubzoneInfo;
                fromProtoMsg(message: _102.SubzoneInfoProtoMsg): _102.SubzoneInfo;
                toProto(message: _102.SubzoneInfo): Uint8Array;
                toProtoMsg(message: _102.SubzoneInfo): _102.SubzoneInfoProtoMsg;
            };
            LsmCaps: {
                typeUrl: string;
                encode(message: _102.LsmCaps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.LsmCaps;
                fromJSON(object: any): _102.LsmCaps;
                toJSON(message: _102.LsmCaps): unknown;
                fromPartial(object: {
                    validatorCap?: string;
                    validatorBondCap?: string;
                    globalCap?: string;
                }): _102.LsmCaps;
                fromAmino(object: _102.LsmCapsAmino): _102.LsmCaps;
                toAmino(message: _102.LsmCaps): _102.LsmCapsAmino;
                fromAminoMsg(object: _102.LsmCapsAminoMsg): _102.LsmCaps;
                fromProtoMsg(message: _102.LsmCapsProtoMsg): _102.LsmCaps;
                toProto(message: _102.LsmCaps): Uint8Array;
                toProtoMsg(message: _102.LsmCaps): _102.LsmCapsProtoMsg;
            };
            ICAAccount: {
                typeUrl: string;
                encode(message: _102.ICAAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ICAAccount;
                fromJSON(object: any): _102.ICAAccount;
                toJSON(message: _102.ICAAccount): unknown;
                fromPartial(object: {
                    address?: string;
                    balance?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    portName?: string;
                    withdrawalAddress?: string;
                    balanceWaitgroup?: number;
                }): _102.ICAAccount;
                fromAmino(object: _102.ICAAccountAmino): _102.ICAAccount;
                toAmino(message: _102.ICAAccount): _102.ICAAccountAmino;
                fromAminoMsg(object: _102.ICAAccountAminoMsg): _102.ICAAccount;
                fromProtoMsg(message: _102.ICAAccountProtoMsg): _102.ICAAccount;
                toProto(message: _102.ICAAccount): Uint8Array;
                toProtoMsg(message: _102.ICAAccount): _102.ICAAccountProtoMsg;
            };
            Distribution: {
                typeUrl: string;
                encode(message: _102.Distribution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Distribution;
                fromJSON(object: any): _102.Distribution;
                toJSON(message: _102.Distribution): unknown;
                fromPartial(object: {
                    valoper?: string;
                    amount?: string | number | import("long").default;
                }): _102.Distribution;
                fromAmino(object: _102.DistributionAmino): _102.Distribution;
                toAmino(message: _102.Distribution): _102.DistributionAmino;
                fromAminoMsg(object: _102.DistributionAminoMsg): _102.Distribution;
                fromProtoMsg(message: _102.DistributionProtoMsg): _102.Distribution;
                toProto(message: _102.Distribution): Uint8Array;
                toProtoMsg(message: _102.Distribution): _102.DistributionProtoMsg;
            };
            WithdrawalRecord: {
                typeUrl: string;
                encode(message: _102.WithdrawalRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.WithdrawalRecord;
                fromJSON(object: any): _102.WithdrawalRecord;
                toJSON(message: _102.WithdrawalRecord): unknown;
                fromPartial(object: {
                    chainId?: string;
                    delegator?: string;
                    distribution?: {
                        valoper?: string;
                        amount?: string | number | import("long").default;
                    }[];
                    recipient?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    burnAmount?: {
                        denom?: string;
                        amount?: string;
                    };
                    txhash?: string;
                    status?: number;
                    completionTime?: Date;
                    requeued?: boolean;
                    acknowledged?: boolean;
                    epochNumber?: string | number | import("long").default;
                }): _102.WithdrawalRecord;
                fromAmino(object: _102.WithdrawalRecordAmino): _102.WithdrawalRecord;
                toAmino(message: _102.WithdrawalRecord): _102.WithdrawalRecordAmino;
                fromAminoMsg(object: _102.WithdrawalRecordAminoMsg): _102.WithdrawalRecord;
                fromProtoMsg(message: _102.WithdrawalRecordProtoMsg): _102.WithdrawalRecord;
                toProto(message: _102.WithdrawalRecord): Uint8Array;
                toProtoMsg(message: _102.WithdrawalRecord): _102.WithdrawalRecordProtoMsg;
            };
            UnbondingRecord: {
                typeUrl: string;
                encode(message: _102.UnbondingRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.UnbondingRecord;
                fromJSON(object: any): _102.UnbondingRecord;
                toJSON(message: _102.UnbondingRecord): unknown;
                fromPartial(object: {
                    chainId?: string;
                    epochNumber?: string | number | import("long").default;
                    validator?: string;
                    relatedTxhash?: string[];
                }): _102.UnbondingRecord;
                fromAmino(object: _102.UnbondingRecordAmino): _102.UnbondingRecord;
                toAmino(message: _102.UnbondingRecord): _102.UnbondingRecordAmino;
                fromAminoMsg(object: _102.UnbondingRecordAminoMsg): _102.UnbondingRecord;
                fromProtoMsg(message: _102.UnbondingRecordProtoMsg): _102.UnbondingRecord;
                toProto(message: _102.UnbondingRecord): Uint8Array;
                toProtoMsg(message: _102.UnbondingRecord): _102.UnbondingRecordProtoMsg;
            };
            RedelegationRecord: {
                typeUrl: string;
                encode(message: _102.RedelegationRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.RedelegationRecord;
                fromJSON(object: any): _102.RedelegationRecord;
                toJSON(message: _102.RedelegationRecord): unknown;
                fromPartial(object: {
                    chainId?: string;
                    epochNumber?: string | number | import("long").default;
                    source?: string;
                    destination?: string;
                    amount?: string | number | import("long").default;
                    completionTime?: Date;
                }): _102.RedelegationRecord;
                fromAmino(object: _102.RedelegationRecordAmino): _102.RedelegationRecord;
                toAmino(message: _102.RedelegationRecord): _102.RedelegationRecordAmino;
                fromAminoMsg(object: _102.RedelegationRecordAminoMsg): _102.RedelegationRecord;
                fromProtoMsg(message: _102.RedelegationRecordProtoMsg): _102.RedelegationRecord;
                toProto(message: _102.RedelegationRecord): Uint8Array;
                toProtoMsg(message: _102.RedelegationRecord): _102.RedelegationRecordProtoMsg;
            };
            TransferRecord: {
                typeUrl: string;
                encode(message: _102.TransferRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.TransferRecord;
                fromJSON(object: any): _102.TransferRecord;
                toJSON(message: _102.TransferRecord): unknown;
                fromPartial(object: {
                    sender?: string;
                    recipient?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _102.TransferRecord;
                fromAmino(object: _102.TransferRecordAmino): _102.TransferRecord;
                toAmino(message: _102.TransferRecord): _102.TransferRecordAmino;
                fromAminoMsg(object: _102.TransferRecordAminoMsg): _102.TransferRecord;
                fromProtoMsg(message: _102.TransferRecordProtoMsg): _102.TransferRecord;
                toProto(message: _102.TransferRecord): Uint8Array;
                toProtoMsg(message: _102.TransferRecord): _102.TransferRecordProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _102.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Validator;
                fromJSON(object: any): _102.Validator;
                toJSON(message: _102.Validator): unknown;
                fromPartial(object: {
                    valoperAddress?: string;
                    commissionRate?: string;
                    delegatorShares?: string;
                    votingPower?: string;
                    score?: string;
                    status?: string;
                    jailed?: boolean;
                    tombstoned?: boolean;
                    jailedSince?: Date;
                    validatorBondShares?: string;
                    liquidShares?: string;
                }): _102.Validator;
                fromAmino(object: _102.ValidatorAmino): _102.Validator;
                toAmino(message: _102.Validator): _102.ValidatorAmino;
                fromAminoMsg(object: _102.ValidatorAminoMsg): _102.Validator;
                fromProtoMsg(message: _102.ValidatorProtoMsg): _102.Validator;
                toProto(message: _102.Validator): Uint8Array;
                toProtoMsg(message: _102.Validator): _102.ValidatorProtoMsg;
            };
            DelegatorIntent: {
                typeUrl: string;
                encode(message: _102.DelegatorIntent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.DelegatorIntent;
                fromJSON(object: any): _102.DelegatorIntent;
                toJSON(message: _102.DelegatorIntent): unknown;
                fromPartial(object: {
                    delegator?: string;
                    intents?: {
                        valoperAddress?: string;
                        weight?: string;
                    }[];
                }): _102.DelegatorIntent;
                fromAmino(object: _102.DelegatorIntentAmino): _102.DelegatorIntent;
                toAmino(message: _102.DelegatorIntent): _102.DelegatorIntentAmino;
                fromAminoMsg(object: _102.DelegatorIntentAminoMsg): _102.DelegatorIntent;
                fromProtoMsg(message: _102.DelegatorIntentProtoMsg): _102.DelegatorIntent;
                toProto(message: _102.DelegatorIntent): Uint8Array;
                toProtoMsg(message: _102.DelegatorIntent): _102.DelegatorIntentProtoMsg;
            };
            ValidatorIntent: {
                typeUrl: string;
                encode(message: _102.ValidatorIntent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ValidatorIntent;
                fromJSON(object: any): _102.ValidatorIntent;
                toJSON(message: _102.ValidatorIntent): unknown;
                fromPartial(object: {
                    valoperAddress?: string;
                    weight?: string;
                }): _102.ValidatorIntent;
                fromAmino(object: _102.ValidatorIntentAmino): _102.ValidatorIntent;
                toAmino(message: _102.ValidatorIntent): _102.ValidatorIntentAmino;
                fromAminoMsg(object: _102.ValidatorIntentAminoMsg): _102.ValidatorIntent;
                fromProtoMsg(message: _102.ValidatorIntentProtoMsg): _102.ValidatorIntent;
                toProto(message: _102.ValidatorIntent): Uint8Array;
                toProtoMsg(message: _102.ValidatorIntent): _102.ValidatorIntentProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _102.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Delegation;
                fromJSON(object: any): _102.Delegation;
                toJSON(message: _102.Delegation): unknown;
                fromPartial(object: {
                    delegationAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    height?: string | number | import("long").default;
                    redelegationEnd?: string | number | import("long").default;
                }): _102.Delegation;
                fromAmino(object: _102.DelegationAmino): _102.Delegation;
                toAmino(message: _102.Delegation): _102.DelegationAmino;
                fromAminoMsg(object: _102.DelegationAminoMsg): _102.Delegation;
                fromProtoMsg(message: _102.DelegationProtoMsg): _102.Delegation;
                toProto(message: _102.Delegation): Uint8Array;
                toProtoMsg(message: _102.Delegation): _102.DelegationProtoMsg;
            };
            PortConnectionTuple: {
                typeUrl: string;
                encode(message: _102.PortConnectionTuple, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.PortConnectionTuple;
                fromJSON(object: any): _102.PortConnectionTuple;
                toJSON(message: _102.PortConnectionTuple): unknown;
                fromPartial(object: {
                    connectionId?: string;
                    portId?: string;
                }): _102.PortConnectionTuple;
                fromAmino(object: _102.PortConnectionTupleAmino): _102.PortConnectionTuple;
                toAmino(message: _102.PortConnectionTuple): _102.PortConnectionTupleAmino;
                fromAminoMsg(object: _102.PortConnectionTupleAminoMsg): _102.PortConnectionTuple;
                fromProtoMsg(message: _102.PortConnectionTupleProtoMsg): _102.PortConnectionTuple;
                toProto(message: _102.PortConnectionTuple): Uint8Array;
                toProtoMsg(message: _102.PortConnectionTuple): _102.PortConnectionTupleProtoMsg;
            };
            Receipt: {
                typeUrl: string;
                encode(message: _102.Receipt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Receipt;
                fromJSON(object: any): _102.Receipt;
                toJSON(message: _102.Receipt): unknown;
                fromPartial(object: {
                    chainId?: string;
                    sender?: string;
                    txhash?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    firstSeen?: Date;
                    completed?: Date;
                }): _102.Receipt;
                fromAmino(object: _102.ReceiptAmino): _102.Receipt;
                toAmino(message: _102.Receipt): _102.ReceiptAmino;
                fromAminoMsg(object: _102.ReceiptAminoMsg): _102.Receipt;
                fromProtoMsg(message: _102.ReceiptProtoMsg): _102.Receipt;
                toProto(message: _102.Receipt): Uint8Array;
                toProtoMsg(message: _102.Receipt): _102.ReceiptProtoMsg;
            };
            Params_v1: {
                typeUrl: string;
                encode(message: _101.Params_v1, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Params_v1;
                fromJSON(object: any): _101.Params_v1;
                toJSON(message: _101.Params_v1): unknown;
                fromPartial(object: {
                    depositInterval?: string | number | import("long").default;
                    validatorsetInterval?: string | number | import("long").default;
                    commissionRate?: string;
                }): _101.Params_v1;
                fromAmino(object: _101.Params_v1Amino): _101.Params_v1;
                toAmino(message: _101.Params_v1): _101.Params_v1Amino;
                fromAminoMsg(object: _101.Params_v1AminoMsg): _101.Params_v1;
                fromProtoMsg(message: _101.Params_v1ProtoMsg): _101.Params_v1;
                toProto(message: _101.Params_v1): Uint8Array;
                toProtoMsg(message: _101.Params_v1): _101.Params_v1ProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _101.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Params;
                fromJSON(object: any): _101.Params;
                toJSON(message: _101.Params): unknown;
                fromPartial(object: {
                    depositInterval?: string | number | import("long").default;
                    validatorsetInterval?: string | number | import("long").default;
                    commissionRate?: string;
                    unbondingEnabled?: boolean;
                }): _101.Params;
                fromAmino(object: _101.ParamsAmino): _101.Params;
                toAmino(message: _101.Params): _101.ParamsAmino;
                fromAminoMsg(object: _101.ParamsAminoMsg): _101.Params;
                fromProtoMsg(message: _101.ParamsProtoMsg): _101.Params;
                toProto(message: _101.Params): Uint8Array;
                toProtoMsg(message: _101.Params): _101.ParamsProtoMsg;
            };
            DelegationsForZone: {
                typeUrl: string;
                encode(message: _101.DelegationsForZone, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.DelegationsForZone;
                fromJSON(object: any): _101.DelegationsForZone;
                toJSON(message: _101.DelegationsForZone): unknown;
                fromPartial(object: {
                    chainId?: string;
                    delegations?: {
                        delegationAddress?: string;
                        validatorAddress?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                        height?: string | number | import("long").default;
                        redelegationEnd?: string | number | import("long").default;
                    }[];
                }): _101.DelegationsForZone;
                fromAmino(object: _101.DelegationsForZoneAmino): _101.DelegationsForZone;
                toAmino(message: _101.DelegationsForZone): _101.DelegationsForZoneAmino;
                fromAminoMsg(object: _101.DelegationsForZoneAminoMsg): _101.DelegationsForZone;
                fromProtoMsg(message: _101.DelegationsForZoneProtoMsg): _101.DelegationsForZone;
                toProto(message: _101.DelegationsForZone): Uint8Array;
                toProtoMsg(message: _101.DelegationsForZone): _101.DelegationsForZoneProtoMsg;
            };
            DelegatorIntentsForZone: {
                typeUrl: string;
                encode(message: _101.DelegatorIntentsForZone, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.DelegatorIntentsForZone;
                fromJSON(object: any): _101.DelegatorIntentsForZone;
                toJSON(message: _101.DelegatorIntentsForZone): unknown;
                fromPartial(object: {
                    chainId?: string;
                    delegationIntent?: {
                        delegator?: string;
                        intents?: {
                            valoperAddress?: string;
                            weight?: string;
                        }[];
                    }[];
                    snapshot?: boolean;
                }): _101.DelegatorIntentsForZone;
                fromAmino(object: _101.DelegatorIntentsForZoneAmino): _101.DelegatorIntentsForZone;
                toAmino(message: _101.DelegatorIntentsForZone): _101.DelegatorIntentsForZoneAmino;
                fromAminoMsg(object: _101.DelegatorIntentsForZoneAminoMsg): _101.DelegatorIntentsForZone;
                fromProtoMsg(message: _101.DelegatorIntentsForZoneProtoMsg): _101.DelegatorIntentsForZone;
                toProto(message: _101.DelegatorIntentsForZone): Uint8Array;
                toProtoMsg(message: _101.DelegatorIntentsForZone): _101.DelegatorIntentsForZoneProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _101.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.GenesisState;
                fromJSON(object: any): _101.GenesisState;
                toJSON(message: _101.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        depositInterval?: string | number | import("long").default;
                        validatorsetInterval?: string | number | import("long").default;
                        commissionRate?: string;
                        unbondingEnabled?: boolean;
                    };
                    zones?: {
                        connectionId?: string;
                        chainId?: string;
                        depositAddress?: {
                            address?: string;
                            balance?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            portName?: string;
                            withdrawalAddress?: string;
                            balanceWaitgroup?: number;
                        };
                        withdrawalAddress?: {
                            address?: string;
                            balance?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            portName?: string;
                            withdrawalAddress?: string;
                            balanceWaitgroup?: number;
                        };
                        performanceAddress?: {
                            address?: string;
                            balance?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            portName?: string;
                            withdrawalAddress?: string;
                            balanceWaitgroup?: number;
                        };
                        delegationAddress?: {
                            address?: string;
                            balance?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            portName?: string;
                            withdrawalAddress?: string;
                            balanceWaitgroup?: number;
                        };
                        accountPrefix?: string;
                        localDenom?: string;
                        baseDenom?: string;
                        redemptionRate?: string;
                        lastRedemptionRate?: string;
                        validators?: {
                            valoperAddress?: string;
                            commissionRate?: string;
                            delegatorShares?: string;
                            votingPower?: string;
                            score?: string;
                            status?: string;
                            jailed?: boolean;
                            tombstoned?: boolean;
                            jailedSince?: Date;
                            validatorBondShares?: string;
                            liquidShares?: string;
                        }[];
                        aggregateIntent?: {
                            valoperAddress?: string;
                            weight?: string;
                        }[];
                        multiSend?: boolean;
                        liquidityModule?: boolean;
                        withdrawalWaitgroup?: number;
                        ibcNextValidatorsHash?: Uint8Array;
                        validatorSelectionAllocation?: string | number | import("long").default;
                        holdingsAllocation?: string | number | import("long").default;
                        lastEpochHeight?: string | number | import("long").default;
                        tvl?: string;
                        unbondingPeriod?: string | number | import("long").default;
                        messagesPerTx?: string | number | import("long").default;
                        decimals?: string | number | import("long").default;
                        unbondingEnabled?: boolean;
                        depositsEnabled?: boolean;
                        returnToSender?: boolean;
                        is118?: boolean;
                        subzoneInfo?: {
                            authority?: string;
                            baseChainID?: string;
                        };
                    }[];
                    receipts?: {
                        chainId?: string;
                        sender?: string;
                        txhash?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        firstSeen?: Date;
                        completed?: Date;
                    }[];
                    delegations?: {
                        chainId?: string;
                        delegations?: {
                            delegationAddress?: string;
                            validatorAddress?: string;
                            amount?: {
                                denom?: string;
                                amount?: string;
                            };
                            height?: string | number | import("long").default;
                            redelegationEnd?: string | number | import("long").default;
                        }[];
                    }[];
                    performanceDelegations?: {
                        chainId?: string;
                        delegations?: {
                            delegationAddress?: string;
                            validatorAddress?: string;
                            amount?: {
                                denom?: string;
                                amount?: string;
                            };
                            height?: string | number | import("long").default;
                            redelegationEnd?: string | number | import("long").default;
                        }[];
                    }[];
                    delegatorIntents?: {
                        chainId?: string;
                        delegationIntent?: {
                            delegator?: string;
                            intents?: {
                                valoperAddress?: string;
                                weight?: string;
                            }[];
                        }[];
                        snapshot?: boolean;
                    }[];
                    portConnections?: {
                        connectionId?: string;
                        portId?: string;
                    }[];
                    withdrawalRecords?: {
                        chainId?: string;
                        delegator?: string;
                        distribution?: {
                            valoper?: string;
                            amount?: string | number | import("long").default;
                        }[];
                        recipient?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        burnAmount?: {
                            denom?: string;
                            amount?: string;
                        };
                        txhash?: string;
                        status?: number;
                        completionTime?: Date;
                        requeued?: boolean;
                        acknowledged?: boolean;
                        epochNumber?: string | number | import("long").default;
                    }[];
                }): _101.GenesisState;
                fromAmino(object: _101.GenesisStateAmino): _101.GenesisState;
                toAmino(message: _101.GenesisState): _101.GenesisStateAmino;
                fromAminoMsg(object: _101.GenesisStateAminoMsg): _101.GenesisState;
                fromProtoMsg(message: _101.GenesisStateProtoMsg): _101.GenesisState;
                toProto(message: _101.GenesisState): Uint8Array;
                toProtoMsg(message: _101.GenesisState): _101.GenesisStateProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            Query: typeof _214.Query;
            QueryClientImpl: typeof _214.QueryClientImpl;
            LCDQueryClient: typeof _206.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _108.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryParamsRequest;
                fromJSON(_: any): _108.QueryParamsRequest;
                toJSON(_: _108.QueryParamsRequest): unknown;
                fromPartial(_: {}): _108.QueryParamsRequest;
                fromAmino(_: _108.QueryParamsRequestAmino): _108.QueryParamsRequest;
                toAmino(_: _108.QueryParamsRequest): _108.QueryParamsRequestAmino;
                fromAminoMsg(object: _108.QueryParamsRequestAminoMsg): _108.QueryParamsRequest;
                fromProtoMsg(message: _108.QueryParamsRequestProtoMsg): _108.QueryParamsRequest;
                toProto(message: _108.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _108.QueryParamsRequest): _108.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _108.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryParamsResponse;
                fromJSON(object: any): _108.QueryParamsResponse;
                toJSON(message: _108.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        mintDenom?: string;
                        genesisEpochProvisions?: string;
                        epochIdentifier?: string;
                        reductionPeriodInEpochs?: string | number | import("long").default;
                        reductionFactor?: string;
                        distributionProportions?: {
                            staking?: string;
                            poolIncentives?: string;
                            participationRewards?: string;
                            communityPool?: string;
                        };
                        mintingRewardsDistributionStartEpoch?: string | number | import("long").default;
                    };
                }): _108.QueryParamsResponse;
                fromAmino(object: _108.QueryParamsResponseAmino): _108.QueryParamsResponse;
                toAmino(message: _108.QueryParamsResponse): _108.QueryParamsResponseAmino;
                fromAminoMsg(object: _108.QueryParamsResponseAminoMsg): _108.QueryParamsResponse;
                fromProtoMsg(message: _108.QueryParamsResponseProtoMsg): _108.QueryParamsResponse;
                toProto(message: _108.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _108.QueryParamsResponse): _108.QueryParamsResponseProtoMsg;
            };
            QueryEpochProvisionsRequest: {
                typeUrl: string;
                encode(_: _108.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryEpochProvisionsRequest;
                fromJSON(_: any): _108.QueryEpochProvisionsRequest;
                toJSON(_: _108.QueryEpochProvisionsRequest): unknown;
                fromPartial(_: {}): _108.QueryEpochProvisionsRequest;
                fromAmino(_: _108.QueryEpochProvisionsRequestAmino): _108.QueryEpochProvisionsRequest;
                toAmino(_: _108.QueryEpochProvisionsRequest): _108.QueryEpochProvisionsRequestAmino;
                fromAminoMsg(object: _108.QueryEpochProvisionsRequestAminoMsg): _108.QueryEpochProvisionsRequest;
                fromProtoMsg(message: _108.QueryEpochProvisionsRequestProtoMsg): _108.QueryEpochProvisionsRequest;
                toProto(message: _108.QueryEpochProvisionsRequest): Uint8Array;
                toProtoMsg(message: _108.QueryEpochProvisionsRequest): _108.QueryEpochProvisionsRequestProtoMsg;
            };
            QueryEpochProvisionsResponse: {
                typeUrl: string;
                encode(message: _108.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryEpochProvisionsResponse;
                fromJSON(object: any): _108.QueryEpochProvisionsResponse;
                toJSON(message: _108.QueryEpochProvisionsResponse): unknown;
                fromPartial(object: {
                    epochProvisions?: Uint8Array;
                }): _108.QueryEpochProvisionsResponse;
                fromAmino(object: _108.QueryEpochProvisionsResponseAmino): _108.QueryEpochProvisionsResponse;
                toAmino(message: _108.QueryEpochProvisionsResponse): _108.QueryEpochProvisionsResponseAmino;
                fromAminoMsg(object: _108.QueryEpochProvisionsResponseAminoMsg): _108.QueryEpochProvisionsResponse;
                fromProtoMsg(message: _108.QueryEpochProvisionsResponseProtoMsg): _108.QueryEpochProvisionsResponse;
                toProto(message: _108.QueryEpochProvisionsResponse): Uint8Array;
                toProtoMsg(message: _108.QueryEpochProvisionsResponse): _108.QueryEpochProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _107.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Minter;
                fromJSON(object: any): _107.Minter;
                toJSON(message: _107.Minter): unknown;
                fromPartial(object: {
                    epochProvisions?: string;
                }): _107.Minter;
                fromAmino(object: _107.MinterAmino): _107.Minter;
                toAmino(message: _107.Minter): _107.MinterAmino;
                fromAminoMsg(object: _107.MinterAminoMsg): _107.Minter;
                fromProtoMsg(message: _107.MinterProtoMsg): _107.Minter;
                toProto(message: _107.Minter): Uint8Array;
                toProtoMsg(message: _107.Minter): _107.MinterProtoMsg;
            };
            DistributionProportions: {
                typeUrl: string;
                encode(message: _107.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.DistributionProportions;
                fromJSON(object: any): _107.DistributionProportions;
                toJSON(message: _107.DistributionProportions): unknown;
                fromPartial(object: {
                    staking?: string;
                    poolIncentives?: string;
                    participationRewards?: string;
                    communityPool?: string;
                }): _107.DistributionProportions;
                fromAmino(object: _107.DistributionProportionsAmino): _107.DistributionProportions;
                toAmino(message: _107.DistributionProportions): _107.DistributionProportionsAmino;
                fromAminoMsg(object: _107.DistributionProportionsAminoMsg): _107.DistributionProportions;
                fromProtoMsg(message: _107.DistributionProportionsProtoMsg): _107.DistributionProportions;
                toProto(message: _107.DistributionProportions): Uint8Array;
                toProtoMsg(message: _107.DistributionProportions): _107.DistributionProportionsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _107.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Params;
                fromJSON(object: any): _107.Params;
                toJSON(message: _107.Params): unknown;
                fromPartial(object: {
                    mintDenom?: string;
                    genesisEpochProvisions?: string;
                    epochIdentifier?: string;
                    reductionPeriodInEpochs?: string | number | import("long").default;
                    reductionFactor?: string;
                    distributionProportions?: {
                        staking?: string;
                        poolIncentives?: string;
                        participationRewards?: string;
                        communityPool?: string;
                    };
                    mintingRewardsDistributionStartEpoch?: string | number | import("long").default;
                }): _107.Params;
                fromAmino(object: _107.ParamsAmino): _107.Params;
                toAmino(message: _107.Params): _107.ParamsAmino;
                fromAminoMsg(object: _107.ParamsAminoMsg): _107.Params;
                fromProtoMsg(message: _107.ParamsProtoMsg): _107.Params;
                toProto(message: _107.Params): Uint8Array;
                toProtoMsg(message: _107.Params): _107.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _106.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.GenesisState;
                fromJSON(object: any): _106.GenesisState;
                toJSON(message: _106.GenesisState): unknown;
                fromPartial(object: {
                    minter?: {
                        epochProvisions?: string;
                    };
                    params?: {
                        mintDenom?: string;
                        genesisEpochProvisions?: string;
                        epochIdentifier?: string;
                        reductionPeriodInEpochs?: string | number | import("long").default;
                        reductionFactor?: string;
                        distributionProportions?: {
                            staking?: string;
                            poolIncentives?: string;
                            participationRewards?: string;
                            communityPool?: string;
                        };
                        mintingRewardsDistributionStartEpoch?: string | number | import("long").default;
                    };
                    reductionStartedEpoch?: string | number | import("long").default;
                }): _106.GenesisState;
                fromAmino(object: _106.GenesisStateAmino): _106.GenesisState;
                toAmino(message: _106.GenesisState): _106.GenesisStateAmino;
                fromAminoMsg(object: _106.GenesisStateAminoMsg): _106.GenesisState;
                fromProtoMsg(message: _106.GenesisStateProtoMsg): _106.GenesisState;
                toProto(message: _106.GenesisState): Uint8Array;
                toProtoMsg(message: _106.GenesisState): _106.GenesisStateProtoMsg;
            };
        };
    }
    namespace participationrewards {
        const v1: {
            Msg: typeof _221.Msg;
            Query: typeof _215.Query;
            QueryClientImpl: typeof _215.QueryClientImpl;
            LCDQueryClient: typeof _207.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitClaim(value: _110.MsgSubmitClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    govRemoveProtocolData(value: _112.MsgGovRemoveProtocolData): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitClaim(value: _110.MsgSubmitClaim): {
                        typeUrl: string;
                        value: _110.MsgSubmitClaim;
                    };
                    govRemoveProtocolData(value: _112.MsgGovRemoveProtocolData): {
                        typeUrl: string;
                        value: _112.MsgGovRemoveProtocolData;
                    };
                };
                toJSON: {
                    submitClaim(value: _110.MsgSubmitClaim): {
                        typeUrl: string;
                        value: unknown;
                    };
                    govRemoveProtocolData(value: _112.MsgGovRemoveProtocolData): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitClaim(value: any): {
                        typeUrl: string;
                        value: _110.MsgSubmitClaim;
                    };
                    govRemoveProtocolData(value: any): {
                        typeUrl: string;
                        value: _112.MsgGovRemoveProtocolData;
                    };
                };
                fromPartial: {
                    submitClaim(value: _110.MsgSubmitClaim): {
                        typeUrl: string;
                        value: _110.MsgSubmitClaim;
                    };
                    govRemoveProtocolData(value: _112.MsgGovRemoveProtocolData): {
                        typeUrl: string;
                        value: _112.MsgGovRemoveProtocolData;
                    };
                };
            };
            AminoConverter: {
                "/quicksilver.participationrewards.v1.MsgSubmitClaim": {
                    aminoType: string;
                    toAmino: (message: _110.MsgSubmitClaim) => _110.MsgSubmitClaimAmino;
                    fromAmino: (object: _110.MsgSubmitClaimAmino) => _110.MsgSubmitClaim;
                };
                "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData": {
                    aminoType: string;
                    toAmino: (message: _112.MsgGovRemoveProtocolData) => _112.MsgGovRemoveProtocolDataAmino;
                    fromAmino: (object: _112.MsgGovRemoveProtocolDataAmino) => _112.MsgGovRemoveProtocolData;
                };
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _113.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryParamsRequest;
                fromJSON(_: any): _113.QueryParamsRequest;
                toJSON(_: _113.QueryParamsRequest): unknown;
                fromPartial(_: {}): _113.QueryParamsRequest;
                fromAmino(_: _113.QueryParamsRequestAmino): _113.QueryParamsRequest;
                toAmino(_: _113.QueryParamsRequest): _113.QueryParamsRequestAmino;
                fromAminoMsg(object: _113.QueryParamsRequestAminoMsg): _113.QueryParamsRequest;
                fromProtoMsg(message: _113.QueryParamsRequestProtoMsg): _113.QueryParamsRequest;
                toProto(message: _113.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _113.QueryParamsRequest): _113.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _113.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryParamsResponse;
                fromJSON(object: any): _113.QueryParamsResponse;
                toJSON(message: _113.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        distributionProportions?: {
                            validatorSelectionAllocation?: string;
                            holdingsAllocation?: string;
                            lockupAllocation?: string;
                        };
                        claimsEnabled?: boolean;
                    };
                }): _113.QueryParamsResponse;
                fromAmino(object: _113.QueryParamsResponseAmino): _113.QueryParamsResponse;
                toAmino(message: _113.QueryParamsResponse): _113.QueryParamsResponseAmino;
                fromAminoMsg(object: _113.QueryParamsResponseAminoMsg): _113.QueryParamsResponse;
                fromProtoMsg(message: _113.QueryParamsResponseProtoMsg): _113.QueryParamsResponse;
                toProto(message: _113.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _113.QueryParamsResponse): _113.QueryParamsResponseProtoMsg;
            };
            QueryProtocolDataRequest: {
                typeUrl: string;
                encode(message: _113.QueryProtocolDataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryProtocolDataRequest;
                fromJSON(object: any): _113.QueryProtocolDataRequest;
                toJSON(message: _113.QueryProtocolDataRequest): unknown;
                fromPartial(object: {
                    type?: string;
                    key?: string;
                }): _113.QueryProtocolDataRequest;
                fromAmino(object: _113.QueryProtocolDataRequestAmino): _113.QueryProtocolDataRequest;
                toAmino(message: _113.QueryProtocolDataRequest): _113.QueryProtocolDataRequestAmino;
                fromAminoMsg(object: _113.QueryProtocolDataRequestAminoMsg): _113.QueryProtocolDataRequest;
                fromProtoMsg(message: _113.QueryProtocolDataRequestProtoMsg): _113.QueryProtocolDataRequest;
                toProto(message: _113.QueryProtocolDataRequest): Uint8Array;
                toProtoMsg(message: _113.QueryProtocolDataRequest): _113.QueryProtocolDataRequestProtoMsg;
            };
            QueryProtocolDataResponse: {
                typeUrl: string;
                encode(message: _113.QueryProtocolDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryProtocolDataResponse;
                fromJSON(object: any): _113.QueryProtocolDataResponse;
                toJSON(message: _113.QueryProtocolDataResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array[];
                }): _113.QueryProtocolDataResponse;
                fromAmino(object: _113.QueryProtocolDataResponseAmino): _113.QueryProtocolDataResponse;
                toAmino(message: _113.QueryProtocolDataResponse): _113.QueryProtocolDataResponseAmino;
                fromAminoMsg(object: _113.QueryProtocolDataResponseAminoMsg): _113.QueryProtocolDataResponse;
                fromProtoMsg(message: _113.QueryProtocolDataResponseProtoMsg): _113.QueryProtocolDataResponse;
                toProto(message: _113.QueryProtocolDataResponse): Uint8Array;
                toProtoMsg(message: _113.QueryProtocolDataResponse): _113.QueryProtocolDataResponseProtoMsg;
            };
            AddProtocolDataProposal: {
                typeUrl: string;
                encode(message: _112.AddProtocolDataProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.AddProtocolDataProposal;
                fromJSON(object: any): _112.AddProtocolDataProposal;
                toJSON(message: _112.AddProtocolDataProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    type?: string;
                    data?: string;
                    key?: string;
                }): _112.AddProtocolDataProposal;
                fromAmino(object: _112.AddProtocolDataProposalAmino): _112.AddProtocolDataProposal;
                toAmino(message: _112.AddProtocolDataProposal): _112.AddProtocolDataProposalAmino;
                fromAminoMsg(object: _112.AddProtocolDataProposalAminoMsg): _112.AddProtocolDataProposal;
                fromProtoMsg(message: _112.AddProtocolDataProposalProtoMsg): _112.AddProtocolDataProposal;
                toProto(message: _112.AddProtocolDataProposal): Uint8Array;
                toProtoMsg(message: _112.AddProtocolDataProposal): _112.AddProtocolDataProposalProtoMsg;
            };
            AddProtocolDataProposalWithDeposit: {
                typeUrl: string;
                encode(message: _112.AddProtocolDataProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.AddProtocolDataProposalWithDeposit;
                fromJSON(object: any): _112.AddProtocolDataProposalWithDeposit;
                toJSON(message: _112.AddProtocolDataProposalWithDeposit): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    protocol?: string;
                    type?: string;
                    key?: string;
                    data?: Uint8Array;
                    deposit?: string;
                }): _112.AddProtocolDataProposalWithDeposit;
                fromAmino(object: _112.AddProtocolDataProposalWithDepositAmino): _112.AddProtocolDataProposalWithDeposit;
                toAmino(message: _112.AddProtocolDataProposalWithDeposit): _112.AddProtocolDataProposalWithDepositAmino;
                fromAminoMsg(object: _112.AddProtocolDataProposalWithDepositAminoMsg): _112.AddProtocolDataProposalWithDeposit;
                fromProtoMsg(message: _112.AddProtocolDataProposalWithDepositProtoMsg): _112.AddProtocolDataProposalWithDeposit;
                toProto(message: _112.AddProtocolDataProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _112.AddProtocolDataProposalWithDeposit): _112.AddProtocolDataProposalWithDepositProtoMsg;
            };
            MsgGovRemoveProtocolData: {
                typeUrl: string;
                encode(message: _112.MsgGovRemoveProtocolData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgGovRemoveProtocolData;
                fromJSON(object: any): _112.MsgGovRemoveProtocolData;
                toJSON(message: _112.MsgGovRemoveProtocolData): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    key?: string;
                    authority?: string;
                }): _112.MsgGovRemoveProtocolData;
                fromAmino(object: _112.MsgGovRemoveProtocolDataAmino): _112.MsgGovRemoveProtocolData;
                toAmino(message: _112.MsgGovRemoveProtocolData): _112.MsgGovRemoveProtocolDataAmino;
                fromAminoMsg(object: _112.MsgGovRemoveProtocolDataAminoMsg): _112.MsgGovRemoveProtocolData;
                fromProtoMsg(message: _112.MsgGovRemoveProtocolDataProtoMsg): _112.MsgGovRemoveProtocolData;
                toProto(message: _112.MsgGovRemoveProtocolData): Uint8Array;
                toProtoMsg(message: _112.MsgGovRemoveProtocolData): _112.MsgGovRemoveProtocolDataProtoMsg;
            };
            MsgGovRemoveProtocolDataResponse: {
                typeUrl: string;
                encode(_: _112.MsgGovRemoveProtocolDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgGovRemoveProtocolDataResponse;
                fromJSON(_: any): _112.MsgGovRemoveProtocolDataResponse;
                toJSON(_: _112.MsgGovRemoveProtocolDataResponse): unknown;
                fromPartial(_: {}): _112.MsgGovRemoveProtocolDataResponse;
                fromAmino(_: _112.MsgGovRemoveProtocolDataResponseAmino): _112.MsgGovRemoveProtocolDataResponse;
                toAmino(_: _112.MsgGovRemoveProtocolDataResponse): _112.MsgGovRemoveProtocolDataResponseAmino;
                fromAminoMsg(object: _112.MsgGovRemoveProtocolDataResponseAminoMsg): _112.MsgGovRemoveProtocolDataResponse;
                fromProtoMsg(message: _112.MsgGovRemoveProtocolDataResponseProtoMsg): _112.MsgGovRemoveProtocolDataResponse;
                toProto(message: _112.MsgGovRemoveProtocolDataResponse): Uint8Array;
                toProtoMsg(message: _112.MsgGovRemoveProtocolDataResponse): _112.MsgGovRemoveProtocolDataResponseProtoMsg;
            };
            protocolDataTypeFromJSON(object: any): _111.ProtocolDataType;
            protocolDataTypeToJSON(object: _111.ProtocolDataType): string;
            ProtocolDataType: typeof _111.ProtocolDataType;
            ProtocolDataTypeSDKType: typeof _111.ProtocolDataType;
            ProtocolDataTypeAmino: typeof _111.ProtocolDataType;
            DistributionProportions: {
                typeUrl: string;
                encode(message: _111.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.DistributionProportions;
                fromJSON(object: any): _111.DistributionProportions;
                toJSON(message: _111.DistributionProportions): unknown;
                fromPartial(object: {
                    validatorSelectionAllocation?: string;
                    holdingsAllocation?: string;
                    lockupAllocation?: string;
                }): _111.DistributionProportions;
                fromAmino(object: _111.DistributionProportionsAmino): _111.DistributionProportions;
                toAmino(message: _111.DistributionProportions): _111.DistributionProportionsAmino;
                fromAminoMsg(object: _111.DistributionProportionsAminoMsg): _111.DistributionProportions;
                fromProtoMsg(message: _111.DistributionProportionsProtoMsg): _111.DistributionProportions;
                toProto(message: _111.DistributionProportions): Uint8Array;
                toProtoMsg(message: _111.DistributionProportions): _111.DistributionProportionsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _111.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Params;
                fromJSON(object: any): _111.Params;
                toJSON(message: _111.Params): unknown;
                fromPartial(object: {
                    distributionProportions?: {
                        validatorSelectionAllocation?: string;
                        holdingsAllocation?: string;
                        lockupAllocation?: string;
                    };
                    claimsEnabled?: boolean;
                }): _111.Params;
                fromAmino(object: _111.ParamsAmino): _111.Params;
                toAmino(message: _111.Params): _111.ParamsAmino;
                fromAminoMsg(object: _111.ParamsAminoMsg): _111.Params;
                fromProtoMsg(message: _111.ParamsProtoMsg): _111.Params;
                toProto(message: _111.Params): Uint8Array;
                toProtoMsg(message: _111.Params): _111.ParamsProtoMsg;
            };
            KeyedProtocolData: {
                typeUrl: string;
                encode(message: _111.KeyedProtocolData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.KeyedProtocolData;
                fromJSON(object: any): _111.KeyedProtocolData;
                toJSON(message: _111.KeyedProtocolData): unknown;
                fromPartial(object: {
                    key?: string;
                    protocolData?: {
                        type?: string;
                        data?: Uint8Array;
                    };
                }): _111.KeyedProtocolData;
                fromAmino(object: _111.KeyedProtocolDataAmino): _111.KeyedProtocolData;
                toAmino(message: _111.KeyedProtocolData): _111.KeyedProtocolDataAmino;
                fromAminoMsg(object: _111.KeyedProtocolDataAminoMsg): _111.KeyedProtocolData;
                fromProtoMsg(message: _111.KeyedProtocolDataProtoMsg): _111.KeyedProtocolData;
                toProto(message: _111.KeyedProtocolData): Uint8Array;
                toProtoMsg(message: _111.KeyedProtocolData): _111.KeyedProtocolDataProtoMsg;
            };
            ProtocolData: {
                typeUrl: string;
                encode(message: _111.ProtocolData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ProtocolData;
                fromJSON(object: any): _111.ProtocolData;
                toJSON(message: _111.ProtocolData): unknown;
                fromPartial(object: {
                    type?: string;
                    data?: Uint8Array;
                }): _111.ProtocolData;
                fromAmino(object: _111.ProtocolDataAmino): _111.ProtocolData;
                toAmino(message: _111.ProtocolData): _111.ProtocolDataAmino;
                fromAminoMsg(object: _111.ProtocolDataAminoMsg): _111.ProtocolData;
                fromProtoMsg(message: _111.ProtocolDataProtoMsg): _111.ProtocolData;
                toProto(message: _111.ProtocolData): Uint8Array;
                toProtoMsg(message: _111.ProtocolData): _111.ProtocolDataProtoMsg;
            };
            MsgSubmitClaim: {
                typeUrl: string;
                aminoType: string;
                encode(message: _110.MsgSubmitClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgSubmitClaim;
                fromJSON(object: any): _110.MsgSubmitClaim;
                toJSON(message: _110.MsgSubmitClaim): unknown;
                fromPartial(object: {
                    userAddress?: string;
                    zone?: string;
                    srcZone?: string;
                    claimType?: _91.ClaimType;
                    proofs?: {
                        key?: Uint8Array;
                        data?: Uint8Array;
                        proofOps?: {
                            ops?: {
                                type?: string;
                                key?: Uint8Array;
                                data?: Uint8Array;
                            }[];
                        };
                        height?: string | number | import("long").default;
                        proofType?: string;
                    }[];
                }): _110.MsgSubmitClaim;
                fromAmino(object: _110.MsgSubmitClaimAmino): _110.MsgSubmitClaim;
                toAmino(message: _110.MsgSubmitClaim): _110.MsgSubmitClaimAmino;
                fromAminoMsg(object: _110.MsgSubmitClaimAminoMsg): _110.MsgSubmitClaim;
                toAminoMsg(message: _110.MsgSubmitClaim): _110.MsgSubmitClaimAminoMsg;
                fromProtoMsg(message: _110.MsgSubmitClaimProtoMsg): _110.MsgSubmitClaim;
                toProto(message: _110.MsgSubmitClaim): Uint8Array;
                toProtoMsg(message: _110.MsgSubmitClaim): _110.MsgSubmitClaimProtoMsg;
            };
            MsgSubmitClaimResponse: {
                typeUrl: string;
                encode(_: _110.MsgSubmitClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgSubmitClaimResponse;
                fromJSON(_: any): _110.MsgSubmitClaimResponse;
                toJSON(_: _110.MsgSubmitClaimResponse): unknown;
                fromPartial(_: {}): _110.MsgSubmitClaimResponse;
                fromAmino(_: _110.MsgSubmitClaimResponseAmino): _110.MsgSubmitClaimResponse;
                toAmino(_: _110.MsgSubmitClaimResponse): _110.MsgSubmitClaimResponseAmino;
                fromAminoMsg(object: _110.MsgSubmitClaimResponseAminoMsg): _110.MsgSubmitClaimResponse;
                fromProtoMsg(message: _110.MsgSubmitClaimResponseProtoMsg): _110.MsgSubmitClaimResponse;
                toProto(message: _110.MsgSubmitClaimResponse): Uint8Array;
                toProtoMsg(message: _110.MsgSubmitClaimResponse): _110.MsgSubmitClaimResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _109.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.GenesisState;
                fromJSON(object: any): _109.GenesisState;
                toJSON(message: _109.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        distributionProportions?: {
                            validatorSelectionAllocation?: string;
                            holdingsAllocation?: string;
                            lockupAllocation?: string;
                        };
                        claimsEnabled?: boolean;
                    };
                    protocolData?: {
                        key?: string;
                        protocolData?: {
                            type?: string;
                            data?: Uint8Array;
                        };
                    }[];
                }): _109.GenesisState;
                fromAmino(object: _109.GenesisStateAmino): _109.GenesisState;
                toAmino(message: _109.GenesisState): _109.GenesisStateAmino;
                fromAminoMsg(object: _109.GenesisStateAminoMsg): _109.GenesisState;
                fromProtoMsg(message: _109.GenesisStateProtoMsg): _109.GenesisState;
                toProto(message: _109.GenesisState): Uint8Array;
                toProtoMsg(message: _109.GenesisState): _109.GenesisStateProtoMsg;
            };
        };
    }
    namespace supply {
        const v1: {
            Query: typeof _216.Query;
            QueryClientImpl: typeof _216.QueryClientImpl;
            LCDQueryClient: typeof _208.LCDQueryClient;
            QuerySupplyRequest: {
                typeUrl: string;
                encode(_: _114.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QuerySupplyRequest;
                fromJSON(_: any): _114.QuerySupplyRequest;
                toJSON(_: _114.QuerySupplyRequest): unknown;
                fromPartial(_: {}): _114.QuerySupplyRequest;
                fromAmino(_: _114.QuerySupplyRequestAmino): _114.QuerySupplyRequest;
                toAmino(_: _114.QuerySupplyRequest): _114.QuerySupplyRequestAmino;
                fromAminoMsg(object: _114.QuerySupplyRequestAminoMsg): _114.QuerySupplyRequest;
                fromProtoMsg(message: _114.QuerySupplyRequestProtoMsg): _114.QuerySupplyRequest;
                toProto(message: _114.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _114.QuerySupplyRequest): _114.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _114.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QuerySupplyResponse;
                fromJSON(object: any): _114.QuerySupplyResponse;
                toJSON(message: _114.QuerySupplyResponse): unknown;
                fromPartial(object: {
                    supply?: string | number | import("long").default;
                    circulatingSupply?: string | number | import("long").default;
                }): _114.QuerySupplyResponse;
                fromAmino(object: _114.QuerySupplyResponseAmino): _114.QuerySupplyResponse;
                toAmino(message: _114.QuerySupplyResponse): _114.QuerySupplyResponseAmino;
                fromAminoMsg(object: _114.QuerySupplyResponseAminoMsg): _114.QuerySupplyResponse;
                fromProtoMsg(message: _114.QuerySupplyResponseProtoMsg): _114.QuerySupplyResponse;
                toProto(message: _114.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _114.QuerySupplyResponse): _114.QuerySupplyResponseProtoMsg;
            };
        };
    }
    namespace tokenfactory {
        const v1beta1: {
            Msg: typeof _222.Msg;
            Query: typeof _217.Query;
            QueryClientImpl: typeof _217.QueryClientImpl;
            LCDQueryClient: typeof _209.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _119.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _119.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _119.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _119.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _119.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _119.MsgCreateDenom): {
                        typeUrl: string;
                        value: _119.MsgCreateDenom;
                    };
                    mint(value: _119.MsgMint): {
                        typeUrl: string;
                        value: _119.MsgMint;
                    };
                    burn(value: _119.MsgBurn): {
                        typeUrl: string;
                        value: _119.MsgBurn;
                    };
                    changeAdmin(value: _119.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _119.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _119.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _119.MsgSetDenomMetadata;
                    };
                };
                toJSON: {
                    createDenom(value: _119.MsgCreateDenom): {
                        typeUrl: string;
                        value: unknown;
                    };
                    mint(value: _119.MsgMint): {
                        typeUrl: string;
                        value: unknown;
                    };
                    burn(value: _119.MsgBurn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    changeAdmin(value: _119.MsgChangeAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setDenomMetadata(value: _119.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createDenom(value: any): {
                        typeUrl: string;
                        value: _119.MsgCreateDenom;
                    };
                    mint(value: any): {
                        typeUrl: string;
                        value: _119.MsgMint;
                    };
                    burn(value: any): {
                        typeUrl: string;
                        value: _119.MsgBurn;
                    };
                    changeAdmin(value: any): {
                        typeUrl: string;
                        value: _119.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: any): {
                        typeUrl: string;
                        value: _119.MsgSetDenomMetadata;
                    };
                };
                fromPartial: {
                    createDenom(value: _119.MsgCreateDenom): {
                        typeUrl: string;
                        value: _119.MsgCreateDenom;
                    };
                    mint(value: _119.MsgMint): {
                        typeUrl: string;
                        value: _119.MsgMint;
                    };
                    burn(value: _119.MsgBurn): {
                        typeUrl: string;
                        value: _119.MsgBurn;
                    };
                    changeAdmin(value: _119.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _119.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _119.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _119.MsgSetDenomMetadata;
                    };
                };
            };
            AminoConverter: {
                "/quicksilver.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: (message: _119.MsgCreateDenom) => _119.MsgCreateDenomAmino;
                    fromAmino: (object: _119.MsgCreateDenomAmino) => _119.MsgCreateDenom;
                };
                "/quicksilver.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: (message: _119.MsgMint) => _119.MsgMintAmino;
                    fromAmino: (object: _119.MsgMintAmino) => _119.MsgMint;
                };
                "/quicksilver.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: (message: _119.MsgBurn) => _119.MsgBurnAmino;
                    fromAmino: (object: _119.MsgBurnAmino) => _119.MsgBurn;
                };
                "/quicksilver.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: (message: _119.MsgChangeAdmin) => _119.MsgChangeAdminAmino;
                    fromAmino: (object: _119.MsgChangeAdminAmino) => _119.MsgChangeAdmin;
                };
                "/quicksilver.tokenfactory.v1beta1.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: (message: _119.MsgSetDenomMetadata) => _119.MsgSetDenomMetadataAmino;
                    fromAmino: (object: _119.MsgSetDenomMetadataAmino) => _119.MsgSetDenomMetadata;
                };
            };
            MsgCreateDenom: {
                typeUrl: string;
                encode(message: _119.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgCreateDenom;
                fromJSON(object: any): _119.MsgCreateDenom;
                toJSON(message: _119.MsgCreateDenom): unknown;
                fromPartial(object: {
                    sender?: string;
                    subdenom?: string;
                }): _119.MsgCreateDenom;
                fromAmino(object: _119.MsgCreateDenomAmino): _119.MsgCreateDenom;
                toAmino(message: _119.MsgCreateDenom): _119.MsgCreateDenomAmino;
                fromAminoMsg(object: _119.MsgCreateDenomAminoMsg): _119.MsgCreateDenom;
                fromProtoMsg(message: _119.MsgCreateDenomProtoMsg): _119.MsgCreateDenom;
                toProto(message: _119.MsgCreateDenom): Uint8Array;
                toProtoMsg(message: _119.MsgCreateDenom): _119.MsgCreateDenomProtoMsg;
            };
            MsgCreateDenomResponse: {
                typeUrl: string;
                encode(message: _119.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgCreateDenomResponse;
                fromJSON(object: any): _119.MsgCreateDenomResponse;
                toJSON(message: _119.MsgCreateDenomResponse): unknown;
                fromPartial(object: {
                    newTokenDenom?: string;
                }): _119.MsgCreateDenomResponse;
                fromAmino(object: _119.MsgCreateDenomResponseAmino): _119.MsgCreateDenomResponse;
                toAmino(message: _119.MsgCreateDenomResponse): _119.MsgCreateDenomResponseAmino;
                fromAminoMsg(object: _119.MsgCreateDenomResponseAminoMsg): _119.MsgCreateDenomResponse;
                fromProtoMsg(message: _119.MsgCreateDenomResponseProtoMsg): _119.MsgCreateDenomResponse;
                toProto(message: _119.MsgCreateDenomResponse): Uint8Array;
                toProtoMsg(message: _119.MsgCreateDenomResponse): _119.MsgCreateDenomResponseProtoMsg;
            };
            MsgMint: {
                typeUrl: string;
                encode(message: _119.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgMint;
                fromJSON(object: any): _119.MsgMint;
                toJSON(message: _119.MsgMint): unknown;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _119.MsgMint;
                fromAmino(object: _119.MsgMintAmino): _119.MsgMint;
                toAmino(message: _119.MsgMint): _119.MsgMintAmino;
                fromAminoMsg(object: _119.MsgMintAminoMsg): _119.MsgMint;
                fromProtoMsg(message: _119.MsgMintProtoMsg): _119.MsgMint;
                toProto(message: _119.MsgMint): Uint8Array;
                toProtoMsg(message: _119.MsgMint): _119.MsgMintProtoMsg;
            };
            MsgMintResponse: {
                typeUrl: string;
                encode(_: _119.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgMintResponse;
                fromJSON(_: any): _119.MsgMintResponse;
                toJSON(_: _119.MsgMintResponse): unknown;
                fromPartial(_: {}): _119.MsgMintResponse;
                fromAmino(_: _119.MsgMintResponseAmino): _119.MsgMintResponse;
                toAmino(_: _119.MsgMintResponse): _119.MsgMintResponseAmino;
                fromAminoMsg(object: _119.MsgMintResponseAminoMsg): _119.MsgMintResponse;
                fromProtoMsg(message: _119.MsgMintResponseProtoMsg): _119.MsgMintResponse;
                toProto(message: _119.MsgMintResponse): Uint8Array;
                toProtoMsg(message: _119.MsgMintResponse): _119.MsgMintResponseProtoMsg;
            };
            MsgBurn: {
                typeUrl: string;
                encode(message: _119.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgBurn;
                fromJSON(object: any): _119.MsgBurn;
                toJSON(message: _119.MsgBurn): unknown;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _119.MsgBurn;
                fromAmino(object: _119.MsgBurnAmino): _119.MsgBurn;
                toAmino(message: _119.MsgBurn): _119.MsgBurnAmino;
                fromAminoMsg(object: _119.MsgBurnAminoMsg): _119.MsgBurn;
                fromProtoMsg(message: _119.MsgBurnProtoMsg): _119.MsgBurn;
                toProto(message: _119.MsgBurn): Uint8Array;
                toProtoMsg(message: _119.MsgBurn): _119.MsgBurnProtoMsg;
            };
            MsgBurnResponse: {
                typeUrl: string;
                encode(_: _119.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgBurnResponse;
                fromJSON(_: any): _119.MsgBurnResponse;
                toJSON(_: _119.MsgBurnResponse): unknown;
                fromPartial(_: {}): _119.MsgBurnResponse;
                fromAmino(_: _119.MsgBurnResponseAmino): _119.MsgBurnResponse;
                toAmino(_: _119.MsgBurnResponse): _119.MsgBurnResponseAmino;
                fromAminoMsg(object: _119.MsgBurnResponseAminoMsg): _119.MsgBurnResponse;
                fromProtoMsg(message: _119.MsgBurnResponseProtoMsg): _119.MsgBurnResponse;
                toProto(message: _119.MsgBurnResponse): Uint8Array;
                toProtoMsg(message: _119.MsgBurnResponse): _119.MsgBurnResponseProtoMsg;
            };
            MsgChangeAdmin: {
                typeUrl: string;
                encode(message: _119.MsgChangeAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgChangeAdmin;
                fromJSON(object: any): _119.MsgChangeAdmin;
                toJSON(message: _119.MsgChangeAdmin): unknown;
                fromPartial(object: {
                    sender?: string;
                    denom?: string;
                    newAdmin?: string;
                }): _119.MsgChangeAdmin;
                fromAmino(object: _119.MsgChangeAdminAmino): _119.MsgChangeAdmin;
                toAmino(message: _119.MsgChangeAdmin): _119.MsgChangeAdminAmino;
                fromAminoMsg(object: _119.MsgChangeAdminAminoMsg): _119.MsgChangeAdmin;
                fromProtoMsg(message: _119.MsgChangeAdminProtoMsg): _119.MsgChangeAdmin;
                toProto(message: _119.MsgChangeAdmin): Uint8Array;
                toProtoMsg(message: _119.MsgChangeAdmin): _119.MsgChangeAdminProtoMsg;
            };
            MsgChangeAdminResponse: {
                typeUrl: string;
                encode(_: _119.MsgChangeAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgChangeAdminResponse;
                fromJSON(_: any): _119.MsgChangeAdminResponse;
                toJSON(_: _119.MsgChangeAdminResponse): unknown;
                fromPartial(_: {}): _119.MsgChangeAdminResponse;
                fromAmino(_: _119.MsgChangeAdminResponseAmino): _119.MsgChangeAdminResponse;
                toAmino(_: _119.MsgChangeAdminResponse): _119.MsgChangeAdminResponseAmino;
                fromAminoMsg(object: _119.MsgChangeAdminResponseAminoMsg): _119.MsgChangeAdminResponse;
                fromProtoMsg(message: _119.MsgChangeAdminResponseProtoMsg): _119.MsgChangeAdminResponse;
                toProto(message: _119.MsgChangeAdminResponse): Uint8Array;
                toProtoMsg(message: _119.MsgChangeAdminResponse): _119.MsgChangeAdminResponseProtoMsg;
            };
            MsgSetDenomMetadata: {
                typeUrl: string;
                encode(message: _119.MsgSetDenomMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgSetDenomMetadata;
                fromJSON(object: any): _119.MsgSetDenomMetadata;
                toJSON(message: _119.MsgSetDenomMetadata): unknown;
                fromPartial(object: {
                    sender?: string;
                    metadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    };
                }): _119.MsgSetDenomMetadata;
                fromAmino(object: _119.MsgSetDenomMetadataAmino): _119.MsgSetDenomMetadata;
                toAmino(message: _119.MsgSetDenomMetadata): _119.MsgSetDenomMetadataAmino;
                fromAminoMsg(object: _119.MsgSetDenomMetadataAminoMsg): _119.MsgSetDenomMetadata;
                fromProtoMsg(message: _119.MsgSetDenomMetadataProtoMsg): _119.MsgSetDenomMetadata;
                toProto(message: _119.MsgSetDenomMetadata): Uint8Array;
                toProtoMsg(message: _119.MsgSetDenomMetadata): _119.MsgSetDenomMetadataProtoMsg;
            };
            MsgSetDenomMetadataResponse: {
                typeUrl: string;
                encode(_: _119.MsgSetDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgSetDenomMetadataResponse;
                fromJSON(_: any): _119.MsgSetDenomMetadataResponse;
                toJSON(_: _119.MsgSetDenomMetadataResponse): unknown;
                fromPartial(_: {}): _119.MsgSetDenomMetadataResponse;
                fromAmino(_: _119.MsgSetDenomMetadataResponseAmino): _119.MsgSetDenomMetadataResponse;
                toAmino(_: _119.MsgSetDenomMetadataResponse): _119.MsgSetDenomMetadataResponseAmino;
                fromAminoMsg(object: _119.MsgSetDenomMetadataResponseAminoMsg): _119.MsgSetDenomMetadataResponse;
                fromProtoMsg(message: _119.MsgSetDenomMetadataResponseProtoMsg): _119.MsgSetDenomMetadataResponse;
                toProto(message: _119.MsgSetDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _119.MsgSetDenomMetadataResponse): _119.MsgSetDenomMetadataResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _118.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryParamsRequest;
                fromJSON(_: any): _118.QueryParamsRequest;
                toJSON(_: _118.QueryParamsRequest): unknown;
                fromPartial(_: {}): _118.QueryParamsRequest;
                fromAmino(_: _118.QueryParamsRequestAmino): _118.QueryParamsRequest;
                toAmino(_: _118.QueryParamsRequest): _118.QueryParamsRequestAmino;
                fromAminoMsg(object: _118.QueryParamsRequestAminoMsg): _118.QueryParamsRequest;
                fromProtoMsg(message: _118.QueryParamsRequestProtoMsg): _118.QueryParamsRequest;
                toProto(message: _118.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _118.QueryParamsRequest): _118.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _118.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryParamsResponse;
                fromJSON(object: any): _118.QueryParamsResponse;
                toJSON(message: _118.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        denomCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _118.QueryParamsResponse;
                fromAmino(object: _118.QueryParamsResponseAmino): _118.QueryParamsResponse;
                toAmino(message: _118.QueryParamsResponse): _118.QueryParamsResponseAmino;
                fromAminoMsg(object: _118.QueryParamsResponseAminoMsg): _118.QueryParamsResponse;
                fromProtoMsg(message: _118.QueryParamsResponseProtoMsg): _118.QueryParamsResponse;
                toProto(message: _118.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _118.QueryParamsResponse): _118.QueryParamsResponseProtoMsg;
            };
            QueryDenomAuthorityMetadataRequest: {
                typeUrl: string;
                encode(message: _118.QueryDenomAuthorityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryDenomAuthorityMetadataRequest;
                fromJSON(object: any): _118.QueryDenomAuthorityMetadataRequest;
                toJSON(message: _118.QueryDenomAuthorityMetadataRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _118.QueryDenomAuthorityMetadataRequest;
                fromAmino(object: _118.QueryDenomAuthorityMetadataRequestAmino): _118.QueryDenomAuthorityMetadataRequest;
                toAmino(message: _118.QueryDenomAuthorityMetadataRequest): _118.QueryDenomAuthorityMetadataRequestAmino;
                fromAminoMsg(object: _118.QueryDenomAuthorityMetadataRequestAminoMsg): _118.QueryDenomAuthorityMetadataRequest;
                fromProtoMsg(message: _118.QueryDenomAuthorityMetadataRequestProtoMsg): _118.QueryDenomAuthorityMetadataRequest;
                toProto(message: _118.QueryDenomAuthorityMetadataRequest): Uint8Array;
                toProtoMsg(message: _118.QueryDenomAuthorityMetadataRequest): _118.QueryDenomAuthorityMetadataRequestProtoMsg;
            };
            QueryDenomAuthorityMetadataResponse: {
                typeUrl: string;
                encode(message: _118.QueryDenomAuthorityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryDenomAuthorityMetadataResponse;
                fromJSON(object: any): _118.QueryDenomAuthorityMetadataResponse;
                toJSON(message: _118.QueryDenomAuthorityMetadataResponse): unknown;
                fromPartial(object: {
                    authorityMetadata?: {
                        admin?: string;
                    };
                }): _118.QueryDenomAuthorityMetadataResponse;
                fromAmino(object: _118.QueryDenomAuthorityMetadataResponseAmino): _118.QueryDenomAuthorityMetadataResponse;
                toAmino(message: _118.QueryDenomAuthorityMetadataResponse): _118.QueryDenomAuthorityMetadataResponseAmino;
                fromAminoMsg(object: _118.QueryDenomAuthorityMetadataResponseAminoMsg): _118.QueryDenomAuthorityMetadataResponse;
                fromProtoMsg(message: _118.QueryDenomAuthorityMetadataResponseProtoMsg): _118.QueryDenomAuthorityMetadataResponse;
                toProto(message: _118.QueryDenomAuthorityMetadataResponse): Uint8Array;
                toProtoMsg(message: _118.QueryDenomAuthorityMetadataResponse): _118.QueryDenomAuthorityMetadataResponseProtoMsg;
            };
            QueryDenomsFromCreatorRequest: {
                typeUrl: string;
                encode(message: _118.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryDenomsFromCreatorRequest;
                fromJSON(object: any): _118.QueryDenomsFromCreatorRequest;
                toJSON(message: _118.QueryDenomsFromCreatorRequest): unknown;
                fromPartial(object: {
                    creator?: string;
                }): _118.QueryDenomsFromCreatorRequest;
                fromAmino(object: _118.QueryDenomsFromCreatorRequestAmino): _118.QueryDenomsFromCreatorRequest;
                toAmino(message: _118.QueryDenomsFromCreatorRequest): _118.QueryDenomsFromCreatorRequestAmino;
                fromAminoMsg(object: _118.QueryDenomsFromCreatorRequestAminoMsg): _118.QueryDenomsFromCreatorRequest;
                fromProtoMsg(message: _118.QueryDenomsFromCreatorRequestProtoMsg): _118.QueryDenomsFromCreatorRequest;
                toProto(message: _118.QueryDenomsFromCreatorRequest): Uint8Array;
                toProtoMsg(message: _118.QueryDenomsFromCreatorRequest): _118.QueryDenomsFromCreatorRequestProtoMsg;
            };
            QueryDenomsFromCreatorResponse: {
                typeUrl: string;
                encode(message: _118.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryDenomsFromCreatorResponse;
                fromJSON(object: any): _118.QueryDenomsFromCreatorResponse;
                toJSON(message: _118.QueryDenomsFromCreatorResponse): unknown;
                fromPartial(object: {
                    denoms?: string[];
                }): _118.QueryDenomsFromCreatorResponse;
                fromAmino(object: _118.QueryDenomsFromCreatorResponseAmino): _118.QueryDenomsFromCreatorResponse;
                toAmino(message: _118.QueryDenomsFromCreatorResponse): _118.QueryDenomsFromCreatorResponseAmino;
                fromAminoMsg(object: _118.QueryDenomsFromCreatorResponseAminoMsg): _118.QueryDenomsFromCreatorResponse;
                fromProtoMsg(message: _118.QueryDenomsFromCreatorResponseProtoMsg): _118.QueryDenomsFromCreatorResponse;
                toProto(message: _118.QueryDenomsFromCreatorResponse): Uint8Array;
                toProtoMsg(message: _118.QueryDenomsFromCreatorResponse): _118.QueryDenomsFromCreatorResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _117.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.Params;
                fromJSON(object: any): _117.Params;
                toJSON(message: _117.Params): unknown;
                fromPartial(object: {
                    denomCreationFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _117.Params;
                fromAmino(object: _117.ParamsAmino): _117.Params;
                toAmino(message: _117.Params): _117.ParamsAmino;
                fromAminoMsg(object: _117.ParamsAminoMsg): _117.Params;
                fromProtoMsg(message: _117.ParamsProtoMsg): _117.Params;
                toProto(message: _117.Params): Uint8Array;
                toProtoMsg(message: _117.Params): _117.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _116.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.GenesisState;
                fromJSON(object: any): _116.GenesisState;
                toJSON(message: _116.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        denomCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    factoryDenoms?: {
                        denom?: string;
                        authorityMetadata?: {
                            admin?: string;
                        };
                    }[];
                }): _116.GenesisState;
                fromAmino(object: _116.GenesisStateAmino): _116.GenesisState;
                toAmino(message: _116.GenesisState): _116.GenesisStateAmino;
                fromAminoMsg(object: _116.GenesisStateAminoMsg): _116.GenesisState;
                fromProtoMsg(message: _116.GenesisStateProtoMsg): _116.GenesisState;
                toProto(message: _116.GenesisState): Uint8Array;
                toProtoMsg(message: _116.GenesisState): _116.GenesisStateProtoMsg;
            };
            GenesisDenom: {
                typeUrl: string;
                encode(message: _116.GenesisDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.GenesisDenom;
                fromJSON(object: any): _116.GenesisDenom;
                toJSON(message: _116.GenesisDenom): unknown;
                fromPartial(object: {
                    denom?: string;
                    authorityMetadata?: {
                        admin?: string;
                    };
                }): _116.GenesisDenom;
                fromAmino(object: _116.GenesisDenomAmino): _116.GenesisDenom;
                toAmino(message: _116.GenesisDenom): _116.GenesisDenomAmino;
                fromAminoMsg(object: _116.GenesisDenomAminoMsg): _116.GenesisDenom;
                fromProtoMsg(message: _116.GenesisDenomProtoMsg): _116.GenesisDenom;
                toProto(message: _116.GenesisDenom): Uint8Array;
                toProtoMsg(message: _116.GenesisDenom): _116.GenesisDenomProtoMsg;
            };
            DenomAuthorityMetadata: {
                typeUrl: string;
                encode(message: _115.DenomAuthorityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.DenomAuthorityMetadata;
                fromJSON(object: any): _115.DenomAuthorityMetadata;
                toJSON(message: _115.DenomAuthorityMetadata): unknown;
                fromPartial(object: {
                    admin?: string;
                }): _115.DenomAuthorityMetadata;
                fromAmino(object: _115.DenomAuthorityMetadataAmino): _115.DenomAuthorityMetadata;
                toAmino(message: _115.DenomAuthorityMetadata): _115.DenomAuthorityMetadataAmino;
                fromAminoMsg(object: _115.DenomAuthorityMetadataAminoMsg): _115.DenomAuthorityMetadata;
                fromProtoMsg(message: _115.DenomAuthorityMetadataProtoMsg): _115.DenomAuthorityMetadata;
                toProto(message: _115.DenomAuthorityMetadata): Uint8Array;
                toProtoMsg(message: _115.DenomAuthorityMetadata): _115.DenomAuthorityMetadataProtoMsg;
            };
        };
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
            quicksilver: {
                airdrop: {
                    v1: any;
                };
                interchainquery: {
                    v1: any;
                };
                interchainstaking: {
                    v1: any;
                };
                participationrewards: {
                    v1: any;
                };
                tokenfactory: {
                    v1beta1: any;
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
            quicksilver: {
                airdrop: {
                    v1: _210.QueryClientImpl;
                };
                claimsmanager: {
                    v1: _211.QueryClientImpl;
                };
                epochs: {
                    v1: _212.QueryClientImpl;
                };
                interchainstaking: {
                    v1: _213.QueryClientImpl;
                };
                mint: {
                    v1beta1: _214.QueryClientImpl;
                };
                participationrewards: {
                    v1: _215.QueryClientImpl;
                };
                supply: {
                    v1: _216.QueryClientImpl;
                };
                tokenfactory: {
                    v1beta1: _217.QueryClientImpl;
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
            quicksilver: {
                airdrop: {
                    v1: _202.LCDQueryClient;
                };
                claimsmanager: {
                    v1: _203.LCDQueryClient;
                };
                epochs: {
                    v1: _204.LCDQueryClient;
                };
                interchainstaking: {
                    v1: _205.LCDQueryClient;
                };
                mint: {
                    v1beta1: _206.LCDQueryClient;
                };
                participationrewards: {
                    v1: _207.LCDQueryClient;
                };
                supply: {
                    v1: _208.LCDQueryClient;
                };
                tokenfactory: {
                    v1beta1: _209.LCDQueryClient;
                };
            };
        }>;
    };
}
