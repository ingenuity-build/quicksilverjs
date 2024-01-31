import * as _120 from "./abci/types";
import * as _121 from "./crypto/keys";
import * as _122 from "./crypto/proof";
import * as _123 from "./libs/bits/types";
import * as _124 from "./p2p/types";
import * as _125 from "./types/block";
import * as _126 from "./types/evidence";
import * as _127 from "./types/params";
import * as _128 from "./types/types";
import * as _129 from "./types/validator";
import * as _130 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _120.CheckTxType;
        checkTxTypeToJSON(object: _120.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _120.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _120.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _120.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _120.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _120.EvidenceType;
        evidenceTypeToJSON(object: _120.EvidenceType): string;
        CheckTxType: typeof _120.CheckTxType;
        CheckTxTypeSDKType: typeof _120.CheckTxType;
        CheckTxTypeAmino: typeof _120.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _120.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _120.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultAmino: typeof _120.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _120.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _120.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultAmino: typeof _120.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _120.EvidenceType;
        EvidenceTypeSDKType: typeof _120.EvidenceType;
        EvidenceTypeAmino: typeof _120.EvidenceType;
        Request: {
            typeUrl: string;
            encode(message: _120.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Request;
            fromJSON(object: any): _120.Request;
            toJSON(message: _120.Request): unknown;
            fromPartial(object: {
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    version?: string;
                    block_version?: string | number | import("long").default;
                    p2p_version?: string | number | import("long").default;
                };
                set_option?: {
                    key?: string;
                    value?: string;
                };
                init_chain?: {
                    time?: Date;
                    chain_id?: string;
                    consensus_params?: {
                        block?: {
                            max_bytes?: string | number | import("long").default;
                            max_gas?: string | number | import("long").default;
                        };
                        evidence?: {
                            max_age_num_blocks?: string | number | import("long").default;
                            max_age_duration?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                            max_bytes?: string | number | import("long").default;
                        };
                        validator?: {
                            pub_key_types?: string[];
                        };
                        version?: {
                            app_version?: string | number | import("long").default;
                        };
                    };
                    validators?: {
                        pub_key?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string | number | import("long").default;
                    }[];
                    app_state_bytes?: Uint8Array;
                    initial_height?: string | number | import("long").default;
                };
                query?: {
                    data?: Uint8Array;
                    path?: string;
                    height?: string | number | import("long").default;
                    prove?: boolean;
                };
                begin_block?: {
                    hash?: Uint8Array;
                    header?: {
                        version?: {
                            block?: string | number | import("long").default;
                            app?: string | number | import("long").default;
                        };
                        chain_id?: string;
                        height?: string | number | import("long").default;
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
                    last_commit_info?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: string | number | import("long").default;
                            };
                            signed_last_block?: boolean;
                        }[];
                    };
                    byzantine_validators?: {
                        type?: _120.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: string | number | import("long").default;
                        };
                        height?: string | number | import("long").default;
                        time?: Date;
                        total_voting_power?: string | number | import("long").default;
                    }[];
                };
                check_tx?: {
                    tx?: Uint8Array;
                    type?: _120.CheckTxType;
                };
                deliver_tx?: {
                    tx?: Uint8Array;
                };
                end_block?: {
                    height?: string | number | import("long").default;
                };
                commit?: {};
                list_snapshots?: {};
                offer_snapshot?: {
                    snapshot?: {
                        height?: string | number | import("long").default;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    };
                    app_hash?: Uint8Array;
                };
                load_snapshot_chunk?: {
                    height?: string | number | import("long").default;
                    format?: number;
                    chunk?: number;
                };
                apply_snapshot_chunk?: {
                    index?: number;
                    chunk?: Uint8Array;
                    sender?: string;
                };
            }): _120.Request;
            fromAmino(object: _120.RequestAmino): _120.Request;
            toAmino(message: _120.Request): _120.RequestAmino;
            fromAminoMsg(object: _120.RequestAminoMsg): _120.Request;
            fromProtoMsg(message: _120.RequestProtoMsg): _120.Request;
            toProto(message: _120.Request): Uint8Array;
            toProtoMsg(message: _120.Request): _120.RequestProtoMsg;
        };
        RequestEcho: {
            typeUrl: string;
            encode(message: _120.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.RequestEcho;
            fromJSON(object: any): _120.RequestEcho;
            toJSON(message: _120.RequestEcho): unknown;
            fromPartial(object: {
                message?: string;
            }): _120.RequestEcho;
            fromAmino(object: _120.RequestEchoAmino): _120.RequestEcho;
            toAmino(message: _120.RequestEcho): _120.RequestEchoAmino;
            fromAminoMsg(object: _120.RequestEchoAminoMsg): _120.RequestEcho;
            fromProtoMsg(message: _120.RequestEchoProtoMsg): _120.RequestEcho;
            toProto(message: _120.RequestEcho): Uint8Array;
            toProtoMsg(message: _120.RequestEcho): _120.RequestEchoProtoMsg;
        };
        RequestFlush: {
            typeUrl: string;
            encode(_: _120.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.RequestFlush;
            fromJSON(_: any): _120.RequestFlush;
            toJSON(_: _120.RequestFlush): unknown;
            fromPartial(_: {}): _120.RequestFlush;
            fromAmino(_: _120.RequestFlushAmino): _120.RequestFlush;
            toAmino(_: _120.RequestFlush): _120.RequestFlushAmino;
            fromAminoMsg(object: _120.RequestFlushAminoMsg): _120.RequestFlush;
            fromProtoMsg(message: _120.RequestFlushProtoMsg): _120.RequestFlush;
            toProto(message: _120.RequestFlush): Uint8Array;
            toProtoMsg(message: _120.RequestFlush): _120.RequestFlushProtoMsg;
        };
        RequestInfo: {
            typeUrl: string;
            encode(message: _120.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.RequestInfo;
            fromJSON(object: any): _120.RequestInfo;
            toJSON(message: _120.RequestInfo): unknown;
            fromPartial(object: {
                version?: string;
                block_version?: string | number | import("long").default;
                p2p_version?: string | number | import("long").default;
            }): _120.RequestInfo;
            fromAmino(object: _120.RequestInfoAmino): _120.RequestInfo;
            toAmino(message: _120.RequestInfo): _120.RequestInfoAmino;
            fromAminoMsg(object: _120.RequestInfoAminoMsg): _120.RequestInfo;
            fromProtoMsg(message: _120.RequestInfoProtoMsg): _120.RequestInfo;
            toProto(message: _120.RequestInfo): Uint8Array;
            toProtoMsg(message: _120.RequestInfo): _120.RequestInfoProtoMsg;
        };
        RequestSetOption: {
            typeUrl: string;
            encode(message: _120.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.RequestSetOption;
            fromJSON(object: any): _120.RequestSetOption;
            toJSON(message: _120.RequestSetOption): unknown;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _120.RequestSetOption;
            fromAmino(object: _120.RequestSetOptionAmino): _120.RequestSetOption;
            toAmino(message: _120.RequestSetOption): _120.RequestSetOptionAmino;
            fromAminoMsg(object: _120.RequestSetOptionAminoMsg): _120.RequestSetOption;
            fromProtoMsg(message: _120.RequestSetOptionProtoMsg): _120.RequestSetOption;
            toProto(message: _120.RequestSetOption): Uint8Array;
            toProtoMsg(message: _120.RequestSetOption): _120.RequestSetOptionProtoMsg;
        };
        RequestInitChain: {
            typeUrl: string;
            encode(message: _120.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.RequestInitChain;
            fromJSON(object: any): _120.RequestInitChain;
            toJSON(message: _120.RequestInitChain): unknown;
            fromPartial(object: {
                time?: Date;
                chain_id?: string;
                consensus_params?: {
                    block?: {
                        max_bytes?: string | number | import("long").default;
                        max_gas?: string | number | import("long").default;
                    };
                    evidence?: {
                        max_age_num_blocks?: string | number | import("long").default;
                        max_age_duration?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        max_bytes?: string | number | import("long").default;
                    };
                    validator?: {
                        pub_key_types?: string[];
                    };
                    version?: {
                        app_version?: string | number | import("long").default;
                    };
                };
                validators?: {
                    pub_key?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string | number | import("long").default;
                }[];
                app_state_bytes?: Uint8Array;
                initial_height?: string | number | import("long").default;
            }): _120.RequestInitChain;
            fromAmino(object: _120.RequestInitChainAmino): _120.RequestInitChain;
            toAmino(message: _120.RequestInitChain): _120.RequestInitChainAmino;
            fromAminoMsg(object: _120.RequestInitChainAminoMsg): _120.RequestInitChain;
            fromProtoMsg(message: _120.RequestInitChainProtoMsg): _120.RequestInitChain;
            toProto(message: _120.RequestInitChain): Uint8Array;
            toProtoMsg(message: _120.RequestInitChain): _120.RequestInitChainProtoMsg;
        };
        RequestQuery: {
            typeUrl: string;
            encode(message: _120.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.RequestQuery;
            fromJSON(object: any): _120.RequestQuery;
            toJSON(message: _120.RequestQuery): unknown;
            fromPartial(object: {
                data?: Uint8Array;
                path?: string;
                height?: string | number | import("long").default;
                prove?: boolean;
            }): _120.RequestQuery;
            fromAmino(object: _120.RequestQueryAmino): _120.RequestQuery;
            toAmino(message: _120.RequestQuery): _120.RequestQueryAmino;
            fromAminoMsg(object: _120.RequestQueryAminoMsg): _120.RequestQuery;
            fromProtoMsg(message: _120.RequestQueryProtoMsg): _120.RequestQuery;
            toProto(message: _120.RequestQuery): Uint8Array;
            toProtoMsg(message: _120.RequestQuery): _120.RequestQueryProtoMsg;
        };
        RequestBeginBlock: {
            typeUrl: string;
            encode(message: _120.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.RequestBeginBlock;
            fromJSON(object: any): _120.RequestBeginBlock;
            toJSON(message: _120.RequestBeginBlock): unknown;
            fromPartial(object: {
                hash?: Uint8Array;
                header?: {
                    version?: {
                        block?: string | number | import("long").default;
                        app?: string | number | import("long").default;
                    };
                    chain_id?: string;
                    height?: string | number | import("long").default;
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
                last_commit_info?: {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: string | number | import("long").default;
                        };
                        signed_last_block?: boolean;
                    }[];
                };
                byzantine_validators?: {
                    type?: _120.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: string | number | import("long").default;
                    };
                    height?: string | number | import("long").default;
                    time?: Date;
                    total_voting_power?: string | number | import("long").default;
                }[];
            }): _120.RequestBeginBlock;
            fromAmino(object: _120.RequestBeginBlockAmino): _120.RequestBeginBlock;
            toAmino(message: _120.RequestBeginBlock): _120.RequestBeginBlockAmino;
            fromAminoMsg(object: _120.RequestBeginBlockAminoMsg): _120.RequestBeginBlock;
            fromProtoMsg(message: _120.RequestBeginBlockProtoMsg): _120.RequestBeginBlock;
            toProto(message: _120.RequestBeginBlock): Uint8Array;
            toProtoMsg(message: _120.RequestBeginBlock): _120.RequestBeginBlockProtoMsg;
        };
        RequestCheckTx: {
            typeUrl: string;
            encode(message: _120.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.RequestCheckTx;
            fromJSON(object: any): _120.RequestCheckTx;
            toJSON(message: _120.RequestCheckTx): unknown;
            fromPartial(object: {
                tx?: Uint8Array;
                type?: _120.CheckTxType;
            }): _120.RequestCheckTx;
            fromAmino(object: _120.RequestCheckTxAmino): _120.RequestCheckTx;
            toAmino(message: _120.RequestCheckTx): _120.RequestCheckTxAmino;
            fromAminoMsg(object: _120.RequestCheckTxAminoMsg): _120.RequestCheckTx;
            fromProtoMsg(message: _120.RequestCheckTxProtoMsg): _120.RequestCheckTx;
            toProto(message: _120.RequestCheckTx): Uint8Array;
            toProtoMsg(message: _120.RequestCheckTx): _120.RequestCheckTxProtoMsg;
        };
        RequestDeliverTx: {
            typeUrl: string;
            encode(message: _120.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.RequestDeliverTx;
            fromJSON(object: any): _120.RequestDeliverTx;
            toJSON(message: _120.RequestDeliverTx): unknown;
            fromPartial(object: {
                tx?: Uint8Array;
            }): _120.RequestDeliverTx;
            fromAmino(object: _120.RequestDeliverTxAmino): _120.RequestDeliverTx;
            toAmino(message: _120.RequestDeliverTx): _120.RequestDeliverTxAmino;
            fromAminoMsg(object: _120.RequestDeliverTxAminoMsg): _120.RequestDeliverTx;
            fromProtoMsg(message: _120.RequestDeliverTxProtoMsg): _120.RequestDeliverTx;
            toProto(message: _120.RequestDeliverTx): Uint8Array;
            toProtoMsg(message: _120.RequestDeliverTx): _120.RequestDeliverTxProtoMsg;
        };
        RequestEndBlock: {
            typeUrl: string;
            encode(message: _120.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.RequestEndBlock;
            fromJSON(object: any): _120.RequestEndBlock;
            toJSON(message: _120.RequestEndBlock): unknown;
            fromPartial(object: {
                height?: string | number | import("long").default;
            }): _120.RequestEndBlock;
            fromAmino(object: _120.RequestEndBlockAmino): _120.RequestEndBlock;
            toAmino(message: _120.RequestEndBlock): _120.RequestEndBlockAmino;
            fromAminoMsg(object: _120.RequestEndBlockAminoMsg): _120.RequestEndBlock;
            fromProtoMsg(message: _120.RequestEndBlockProtoMsg): _120.RequestEndBlock;
            toProto(message: _120.RequestEndBlock): Uint8Array;
            toProtoMsg(message: _120.RequestEndBlock): _120.RequestEndBlockProtoMsg;
        };
        RequestCommit: {
            typeUrl: string;
            encode(_: _120.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.RequestCommit;
            fromJSON(_: any): _120.RequestCommit;
            toJSON(_: _120.RequestCommit): unknown;
            fromPartial(_: {}): _120.RequestCommit;
            fromAmino(_: _120.RequestCommitAmino): _120.RequestCommit;
            toAmino(_: _120.RequestCommit): _120.RequestCommitAmino;
            fromAminoMsg(object: _120.RequestCommitAminoMsg): _120.RequestCommit;
            fromProtoMsg(message: _120.RequestCommitProtoMsg): _120.RequestCommit;
            toProto(message: _120.RequestCommit): Uint8Array;
            toProtoMsg(message: _120.RequestCommit): _120.RequestCommitProtoMsg;
        };
        RequestListSnapshots: {
            typeUrl: string;
            encode(_: _120.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.RequestListSnapshots;
            fromJSON(_: any): _120.RequestListSnapshots;
            toJSON(_: _120.RequestListSnapshots): unknown;
            fromPartial(_: {}): _120.RequestListSnapshots;
            fromAmino(_: _120.RequestListSnapshotsAmino): _120.RequestListSnapshots;
            toAmino(_: _120.RequestListSnapshots): _120.RequestListSnapshotsAmino;
            fromAminoMsg(object: _120.RequestListSnapshotsAminoMsg): _120.RequestListSnapshots;
            fromProtoMsg(message: _120.RequestListSnapshotsProtoMsg): _120.RequestListSnapshots;
            toProto(message: _120.RequestListSnapshots): Uint8Array;
            toProtoMsg(message: _120.RequestListSnapshots): _120.RequestListSnapshotsProtoMsg;
        };
        RequestOfferSnapshot: {
            typeUrl: string;
            encode(message: _120.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.RequestOfferSnapshot;
            fromJSON(object: any): _120.RequestOfferSnapshot;
            toJSON(message: _120.RequestOfferSnapshot): unknown;
            fromPartial(object: {
                snapshot?: {
                    height?: string | number | import("long").default;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                };
                app_hash?: Uint8Array;
            }): _120.RequestOfferSnapshot;
            fromAmino(object: _120.RequestOfferSnapshotAmino): _120.RequestOfferSnapshot;
            toAmino(message: _120.RequestOfferSnapshot): _120.RequestOfferSnapshotAmino;
            fromAminoMsg(object: _120.RequestOfferSnapshotAminoMsg): _120.RequestOfferSnapshot;
            fromProtoMsg(message: _120.RequestOfferSnapshotProtoMsg): _120.RequestOfferSnapshot;
            toProto(message: _120.RequestOfferSnapshot): Uint8Array;
            toProtoMsg(message: _120.RequestOfferSnapshot): _120.RequestOfferSnapshotProtoMsg;
        };
        RequestLoadSnapshotChunk: {
            typeUrl: string;
            encode(message: _120.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.RequestLoadSnapshotChunk;
            fromJSON(object: any): _120.RequestLoadSnapshotChunk;
            toJSON(message: _120.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: {
                height?: string | number | import("long").default;
                format?: number;
                chunk?: number;
            }): _120.RequestLoadSnapshotChunk;
            fromAmino(object: _120.RequestLoadSnapshotChunkAmino): _120.RequestLoadSnapshotChunk;
            toAmino(message: _120.RequestLoadSnapshotChunk): _120.RequestLoadSnapshotChunkAmino;
            fromAminoMsg(object: _120.RequestLoadSnapshotChunkAminoMsg): _120.RequestLoadSnapshotChunk;
            fromProtoMsg(message: _120.RequestLoadSnapshotChunkProtoMsg): _120.RequestLoadSnapshotChunk;
            toProto(message: _120.RequestLoadSnapshotChunk): Uint8Array;
            toProtoMsg(message: _120.RequestLoadSnapshotChunk): _120.RequestLoadSnapshotChunkProtoMsg;
        };
        RequestApplySnapshotChunk: {
            typeUrl: string;
            encode(message: _120.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.RequestApplySnapshotChunk;
            fromJSON(object: any): _120.RequestApplySnapshotChunk;
            toJSON(message: _120.RequestApplySnapshotChunk): unknown;
            fromPartial(object: {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            }): _120.RequestApplySnapshotChunk;
            fromAmino(object: _120.RequestApplySnapshotChunkAmino): _120.RequestApplySnapshotChunk;
            toAmino(message: _120.RequestApplySnapshotChunk): _120.RequestApplySnapshotChunkAmino;
            fromAminoMsg(object: _120.RequestApplySnapshotChunkAminoMsg): _120.RequestApplySnapshotChunk;
            fromProtoMsg(message: _120.RequestApplySnapshotChunkProtoMsg): _120.RequestApplySnapshotChunk;
            toProto(message: _120.RequestApplySnapshotChunk): Uint8Array;
            toProtoMsg(message: _120.RequestApplySnapshotChunk): _120.RequestApplySnapshotChunkProtoMsg;
        };
        Response: {
            typeUrl: string;
            encode(message: _120.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Response;
            fromJSON(object: any): _120.Response;
            toJSON(message: _120.Response): unknown;
            fromPartial(object: {
                exception?: {
                    error?: string;
                };
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    data?: string;
                    version?: string;
                    app_version?: string | number | import("long").default;
                    last_block_height?: string | number | import("long").default;
                    last_block_app_hash?: Uint8Array;
                };
                set_option?: {
                    code?: number;
                    log?: string;
                    info?: string;
                };
                init_chain?: {
                    consensus_params?: {
                        block?: {
                            max_bytes?: string | number | import("long").default;
                            max_gas?: string | number | import("long").default;
                        };
                        evidence?: {
                            max_age_num_blocks?: string | number | import("long").default;
                            max_age_duration?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                            max_bytes?: string | number | import("long").default;
                        };
                        validator?: {
                            pub_key_types?: string[];
                        };
                        version?: {
                            app_version?: string | number | import("long").default;
                        };
                    };
                    validators?: {
                        pub_key?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string | number | import("long").default;
                    }[];
                    app_hash?: Uint8Array;
                };
                query?: {
                    code?: number;
                    log?: string;
                    info?: string;
                    index?: string | number | import("long").default;
                    key?: Uint8Array;
                    value?: Uint8Array;
                    proof_ops?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    };
                    height?: string | number | import("long").default;
                    codespace?: string;
                };
                begin_block?: {
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                check_tx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gas_wanted?: string | number | import("long").default;
                    gas_used?: string | number | import("long").default;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                deliver_tx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gas_wanted?: string | number | import("long").default;
                    gas_used?: string | number | import("long").default;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                end_block?: {
                    validator_updates?: {
                        pub_key?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string | number | import("long").default;
                    }[];
                    consensus_param_updates?: {
                        block?: {
                            max_bytes?: string | number | import("long").default;
                            max_gas?: string | number | import("long").default;
                        };
                        evidence?: {
                            max_age_num_blocks?: string | number | import("long").default;
                            max_age_duration?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                            max_bytes?: string | number | import("long").default;
                        };
                        validator?: {
                            pub_key_types?: string[];
                        };
                        version?: {
                            app_version?: string | number | import("long").default;
                        };
                    };
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                commit?: {
                    data?: Uint8Array;
                    retain_height?: string | number | import("long").default;
                };
                list_snapshots?: {
                    snapshots?: {
                        height?: string | number | import("long").default;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[];
                };
                offer_snapshot?: {
                    result?: _120.ResponseOfferSnapshot_Result;
                };
                load_snapshot_chunk?: {
                    chunk?: Uint8Array;
                };
                apply_snapshot_chunk?: {
                    result?: _120.ResponseApplySnapshotChunk_Result;
                    refetch_chunks?: number[];
                    reject_senders?: string[];
                };
            }): _120.Response;
            fromAmino(object: _120.ResponseAmino): _120.Response;
            toAmino(message: _120.Response): _120.ResponseAmino;
            fromAminoMsg(object: _120.ResponseAminoMsg): _120.Response;
            fromProtoMsg(message: _120.ResponseProtoMsg): _120.Response;
            toProto(message: _120.Response): Uint8Array;
            toProtoMsg(message: _120.Response): _120.ResponseProtoMsg;
        };
        ResponseException: {
            typeUrl: string;
            encode(message: _120.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ResponseException;
            fromJSON(object: any): _120.ResponseException;
            toJSON(message: _120.ResponseException): unknown;
            fromPartial(object: {
                error?: string;
            }): _120.ResponseException;
            fromAmino(object: _120.ResponseExceptionAmino): _120.ResponseException;
            toAmino(message: _120.ResponseException): _120.ResponseExceptionAmino;
            fromAminoMsg(object: _120.ResponseExceptionAminoMsg): _120.ResponseException;
            fromProtoMsg(message: _120.ResponseExceptionProtoMsg): _120.ResponseException;
            toProto(message: _120.ResponseException): Uint8Array;
            toProtoMsg(message: _120.ResponseException): _120.ResponseExceptionProtoMsg;
        };
        ResponseEcho: {
            typeUrl: string;
            encode(message: _120.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ResponseEcho;
            fromJSON(object: any): _120.ResponseEcho;
            toJSON(message: _120.ResponseEcho): unknown;
            fromPartial(object: {
                message?: string;
            }): _120.ResponseEcho;
            fromAmino(object: _120.ResponseEchoAmino): _120.ResponseEcho;
            toAmino(message: _120.ResponseEcho): _120.ResponseEchoAmino;
            fromAminoMsg(object: _120.ResponseEchoAminoMsg): _120.ResponseEcho;
            fromProtoMsg(message: _120.ResponseEchoProtoMsg): _120.ResponseEcho;
            toProto(message: _120.ResponseEcho): Uint8Array;
            toProtoMsg(message: _120.ResponseEcho): _120.ResponseEchoProtoMsg;
        };
        ResponseFlush: {
            typeUrl: string;
            encode(_: _120.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ResponseFlush;
            fromJSON(_: any): _120.ResponseFlush;
            toJSON(_: _120.ResponseFlush): unknown;
            fromPartial(_: {}): _120.ResponseFlush;
            fromAmino(_: _120.ResponseFlushAmino): _120.ResponseFlush;
            toAmino(_: _120.ResponseFlush): _120.ResponseFlushAmino;
            fromAminoMsg(object: _120.ResponseFlushAminoMsg): _120.ResponseFlush;
            fromProtoMsg(message: _120.ResponseFlushProtoMsg): _120.ResponseFlush;
            toProto(message: _120.ResponseFlush): Uint8Array;
            toProtoMsg(message: _120.ResponseFlush): _120.ResponseFlushProtoMsg;
        };
        ResponseInfo: {
            typeUrl: string;
            encode(message: _120.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ResponseInfo;
            fromJSON(object: any): _120.ResponseInfo;
            toJSON(message: _120.ResponseInfo): unknown;
            fromPartial(object: {
                data?: string;
                version?: string;
                app_version?: string | number | import("long").default;
                last_block_height?: string | number | import("long").default;
                last_block_app_hash?: Uint8Array;
            }): _120.ResponseInfo;
            fromAmino(object: _120.ResponseInfoAmino): _120.ResponseInfo;
            toAmino(message: _120.ResponseInfo): _120.ResponseInfoAmino;
            fromAminoMsg(object: _120.ResponseInfoAminoMsg): _120.ResponseInfo;
            fromProtoMsg(message: _120.ResponseInfoProtoMsg): _120.ResponseInfo;
            toProto(message: _120.ResponseInfo): Uint8Array;
            toProtoMsg(message: _120.ResponseInfo): _120.ResponseInfoProtoMsg;
        };
        ResponseSetOption: {
            typeUrl: string;
            encode(message: _120.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ResponseSetOption;
            fromJSON(object: any): _120.ResponseSetOption;
            toJSON(message: _120.ResponseSetOption): unknown;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
            }): _120.ResponseSetOption;
            fromAmino(object: _120.ResponseSetOptionAmino): _120.ResponseSetOption;
            toAmino(message: _120.ResponseSetOption): _120.ResponseSetOptionAmino;
            fromAminoMsg(object: _120.ResponseSetOptionAminoMsg): _120.ResponseSetOption;
            fromProtoMsg(message: _120.ResponseSetOptionProtoMsg): _120.ResponseSetOption;
            toProto(message: _120.ResponseSetOption): Uint8Array;
            toProtoMsg(message: _120.ResponseSetOption): _120.ResponseSetOptionProtoMsg;
        };
        ResponseInitChain: {
            typeUrl: string;
            encode(message: _120.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ResponseInitChain;
            fromJSON(object: any): _120.ResponseInitChain;
            toJSON(message: _120.ResponseInitChain): unknown;
            fromPartial(object: {
                consensus_params?: {
                    block?: {
                        max_bytes?: string | number | import("long").default;
                        max_gas?: string | number | import("long").default;
                    };
                    evidence?: {
                        max_age_num_blocks?: string | number | import("long").default;
                        max_age_duration?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        max_bytes?: string | number | import("long").default;
                    };
                    validator?: {
                        pub_key_types?: string[];
                    };
                    version?: {
                        app_version?: string | number | import("long").default;
                    };
                };
                validators?: {
                    pub_key?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string | number | import("long").default;
                }[];
                app_hash?: Uint8Array;
            }): _120.ResponseInitChain;
            fromAmino(object: _120.ResponseInitChainAmino): _120.ResponseInitChain;
            toAmino(message: _120.ResponseInitChain): _120.ResponseInitChainAmino;
            fromAminoMsg(object: _120.ResponseInitChainAminoMsg): _120.ResponseInitChain;
            fromProtoMsg(message: _120.ResponseInitChainProtoMsg): _120.ResponseInitChain;
            toProto(message: _120.ResponseInitChain): Uint8Array;
            toProtoMsg(message: _120.ResponseInitChain): _120.ResponseInitChainProtoMsg;
        };
        ResponseQuery: {
            typeUrl: string;
            encode(message: _120.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ResponseQuery;
            fromJSON(object: any): _120.ResponseQuery;
            toJSON(message: _120.ResponseQuery): unknown;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
                index?: string | number | import("long").default;
                key?: Uint8Array;
                value?: Uint8Array;
                proof_ops?: {
                    ops?: {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                };
                height?: string | number | import("long").default;
                codespace?: string;
            }): _120.ResponseQuery;
            fromAmino(object: _120.ResponseQueryAmino): _120.ResponseQuery;
            toAmino(message: _120.ResponseQuery): _120.ResponseQueryAmino;
            fromAminoMsg(object: _120.ResponseQueryAminoMsg): _120.ResponseQuery;
            fromProtoMsg(message: _120.ResponseQueryProtoMsg): _120.ResponseQuery;
            toProto(message: _120.ResponseQuery): Uint8Array;
            toProtoMsg(message: _120.ResponseQuery): _120.ResponseQueryProtoMsg;
        };
        ResponseBeginBlock: {
            typeUrl: string;
            encode(message: _120.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ResponseBeginBlock;
            fromJSON(object: any): _120.ResponseBeginBlock;
            toJSON(message: _120.ResponseBeginBlock): unknown;
            fromPartial(object: {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _120.ResponseBeginBlock;
            fromAmino(object: _120.ResponseBeginBlockAmino): _120.ResponseBeginBlock;
            toAmino(message: _120.ResponseBeginBlock): _120.ResponseBeginBlockAmino;
            fromAminoMsg(object: _120.ResponseBeginBlockAminoMsg): _120.ResponseBeginBlock;
            fromProtoMsg(message: _120.ResponseBeginBlockProtoMsg): _120.ResponseBeginBlock;
            toProto(message: _120.ResponseBeginBlock): Uint8Array;
            toProtoMsg(message: _120.ResponseBeginBlock): _120.ResponseBeginBlockProtoMsg;
        };
        ResponseCheckTx: {
            typeUrl: string;
            encode(message: _120.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ResponseCheckTx;
            fromJSON(object: any): _120.ResponseCheckTx;
            toJSON(message: _120.ResponseCheckTx): unknown;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gas_wanted?: string | number | import("long").default;
                gas_used?: string | number | import("long").default;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _120.ResponseCheckTx;
            fromAmino(object: _120.ResponseCheckTxAmino): _120.ResponseCheckTx;
            toAmino(message: _120.ResponseCheckTx): _120.ResponseCheckTxAmino;
            fromAminoMsg(object: _120.ResponseCheckTxAminoMsg): _120.ResponseCheckTx;
            fromProtoMsg(message: _120.ResponseCheckTxProtoMsg): _120.ResponseCheckTx;
            toProto(message: _120.ResponseCheckTx): Uint8Array;
            toProtoMsg(message: _120.ResponseCheckTx): _120.ResponseCheckTxProtoMsg;
        };
        ResponseDeliverTx: {
            typeUrl: string;
            encode(message: _120.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ResponseDeliverTx;
            fromJSON(object: any): _120.ResponseDeliverTx;
            toJSON(message: _120.ResponseDeliverTx): unknown;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gas_wanted?: string | number | import("long").default;
                gas_used?: string | number | import("long").default;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _120.ResponseDeliverTx;
            fromAmino(object: _120.ResponseDeliverTxAmino): _120.ResponseDeliverTx;
            toAmino(message: _120.ResponseDeliverTx): _120.ResponseDeliverTxAmino;
            fromAminoMsg(object: _120.ResponseDeliverTxAminoMsg): _120.ResponseDeliverTx;
            fromProtoMsg(message: _120.ResponseDeliverTxProtoMsg): _120.ResponseDeliverTx;
            toProto(message: _120.ResponseDeliverTx): Uint8Array;
            toProtoMsg(message: _120.ResponseDeliverTx): _120.ResponseDeliverTxProtoMsg;
        };
        ResponseEndBlock: {
            typeUrl: string;
            encode(message: _120.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ResponseEndBlock;
            fromJSON(object: any): _120.ResponseEndBlock;
            toJSON(message: _120.ResponseEndBlock): unknown;
            fromPartial(object: {
                validator_updates?: {
                    pub_key?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string | number | import("long").default;
                }[];
                consensus_param_updates?: {
                    block?: {
                        max_bytes?: string | number | import("long").default;
                        max_gas?: string | number | import("long").default;
                    };
                    evidence?: {
                        max_age_num_blocks?: string | number | import("long").default;
                        max_age_duration?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        max_bytes?: string | number | import("long").default;
                    };
                    validator?: {
                        pub_key_types?: string[];
                    };
                    version?: {
                        app_version?: string | number | import("long").default;
                    };
                };
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _120.ResponseEndBlock;
            fromAmino(object: _120.ResponseEndBlockAmino): _120.ResponseEndBlock;
            toAmino(message: _120.ResponseEndBlock): _120.ResponseEndBlockAmino;
            fromAminoMsg(object: _120.ResponseEndBlockAminoMsg): _120.ResponseEndBlock;
            fromProtoMsg(message: _120.ResponseEndBlockProtoMsg): _120.ResponseEndBlock;
            toProto(message: _120.ResponseEndBlock): Uint8Array;
            toProtoMsg(message: _120.ResponseEndBlock): _120.ResponseEndBlockProtoMsg;
        };
        ResponseCommit: {
            typeUrl: string;
            encode(message: _120.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ResponseCommit;
            fromJSON(object: any): _120.ResponseCommit;
            toJSON(message: _120.ResponseCommit): unknown;
            fromPartial(object: {
                data?: Uint8Array;
                retain_height?: string | number | import("long").default;
            }): _120.ResponseCommit;
            fromAmino(object: _120.ResponseCommitAmino): _120.ResponseCommit;
            toAmino(message: _120.ResponseCommit): _120.ResponseCommitAmino;
            fromAminoMsg(object: _120.ResponseCommitAminoMsg): _120.ResponseCommit;
            fromProtoMsg(message: _120.ResponseCommitProtoMsg): _120.ResponseCommit;
            toProto(message: _120.ResponseCommit): Uint8Array;
            toProtoMsg(message: _120.ResponseCommit): _120.ResponseCommitProtoMsg;
        };
        ResponseListSnapshots: {
            typeUrl: string;
            encode(message: _120.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ResponseListSnapshots;
            fromJSON(object: any): _120.ResponseListSnapshots;
            toJSON(message: _120.ResponseListSnapshots): unknown;
            fromPartial(object: {
                snapshots?: {
                    height?: string | number | import("long").default;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[];
            }): _120.ResponseListSnapshots;
            fromAmino(object: _120.ResponseListSnapshotsAmino): _120.ResponseListSnapshots;
            toAmino(message: _120.ResponseListSnapshots): _120.ResponseListSnapshotsAmino;
            fromAminoMsg(object: _120.ResponseListSnapshotsAminoMsg): _120.ResponseListSnapshots;
            fromProtoMsg(message: _120.ResponseListSnapshotsProtoMsg): _120.ResponseListSnapshots;
            toProto(message: _120.ResponseListSnapshots): Uint8Array;
            toProtoMsg(message: _120.ResponseListSnapshots): _120.ResponseListSnapshotsProtoMsg;
        };
        ResponseOfferSnapshot: {
            typeUrl: string;
            encode(message: _120.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ResponseOfferSnapshot;
            fromJSON(object: any): _120.ResponseOfferSnapshot;
            toJSON(message: _120.ResponseOfferSnapshot): unknown;
            fromPartial(object: {
                result?: _120.ResponseOfferSnapshot_Result;
            }): _120.ResponseOfferSnapshot;
            fromAmino(object: _120.ResponseOfferSnapshotAmino): _120.ResponseOfferSnapshot;
            toAmino(message: _120.ResponseOfferSnapshot): _120.ResponseOfferSnapshotAmino;
            fromAminoMsg(object: _120.ResponseOfferSnapshotAminoMsg): _120.ResponseOfferSnapshot;
            fromProtoMsg(message: _120.ResponseOfferSnapshotProtoMsg): _120.ResponseOfferSnapshot;
            toProto(message: _120.ResponseOfferSnapshot): Uint8Array;
            toProtoMsg(message: _120.ResponseOfferSnapshot): _120.ResponseOfferSnapshotProtoMsg;
        };
        ResponseLoadSnapshotChunk: {
            typeUrl: string;
            encode(message: _120.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _120.ResponseLoadSnapshotChunk;
            toJSON(message: _120.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: {
                chunk?: Uint8Array;
            }): _120.ResponseLoadSnapshotChunk;
            fromAmino(object: _120.ResponseLoadSnapshotChunkAmino): _120.ResponseLoadSnapshotChunk;
            toAmino(message: _120.ResponseLoadSnapshotChunk): _120.ResponseLoadSnapshotChunkAmino;
            fromAminoMsg(object: _120.ResponseLoadSnapshotChunkAminoMsg): _120.ResponseLoadSnapshotChunk;
            fromProtoMsg(message: _120.ResponseLoadSnapshotChunkProtoMsg): _120.ResponseLoadSnapshotChunk;
            toProto(message: _120.ResponseLoadSnapshotChunk): Uint8Array;
            toProtoMsg(message: _120.ResponseLoadSnapshotChunk): _120.ResponseLoadSnapshotChunkProtoMsg;
        };
        ResponseApplySnapshotChunk: {
            typeUrl: string;
            encode(message: _120.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ResponseApplySnapshotChunk;
            fromJSON(object: any): _120.ResponseApplySnapshotChunk;
            toJSON(message: _120.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: {
                result?: _120.ResponseApplySnapshotChunk_Result;
                refetch_chunks?: number[];
                reject_senders?: string[];
            }): _120.ResponseApplySnapshotChunk;
            fromAmino(object: _120.ResponseApplySnapshotChunkAmino): _120.ResponseApplySnapshotChunk;
            toAmino(message: _120.ResponseApplySnapshotChunk): _120.ResponseApplySnapshotChunkAmino;
            fromAminoMsg(object: _120.ResponseApplySnapshotChunkAminoMsg): _120.ResponseApplySnapshotChunk;
            fromProtoMsg(message: _120.ResponseApplySnapshotChunkProtoMsg): _120.ResponseApplySnapshotChunk;
            toProto(message: _120.ResponseApplySnapshotChunk): Uint8Array;
            toProtoMsg(message: _120.ResponseApplySnapshotChunk): _120.ResponseApplySnapshotChunkProtoMsg;
        };
        ConsensusParams: {
            typeUrl: string;
            encode(message: _120.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ConsensusParams;
            fromJSON(object: any): _120.ConsensusParams;
            toJSON(message: _120.ConsensusParams): unknown;
            fromPartial(object: {
                block?: {
                    max_bytes?: string | number | import("long").default;
                    max_gas?: string | number | import("long").default;
                };
                evidence?: {
                    max_age_num_blocks?: string | number | import("long").default;
                    max_age_duration?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    max_bytes?: string | number | import("long").default;
                };
                validator?: {
                    pub_key_types?: string[];
                };
                version?: {
                    app_version?: string | number | import("long").default;
                };
            }): _120.ConsensusParams;
            fromAmino(object: _120.ConsensusParamsAmino): _120.ConsensusParams;
            toAmino(message: _120.ConsensusParams): _120.ConsensusParamsAmino;
            fromAminoMsg(object: _120.ConsensusParamsAminoMsg): _120.ConsensusParams;
            fromProtoMsg(message: _120.ConsensusParamsProtoMsg): _120.ConsensusParams;
            toProto(message: _120.ConsensusParams): Uint8Array;
            toProtoMsg(message: _120.ConsensusParams): _120.ConsensusParamsProtoMsg;
        };
        BlockParams: {
            typeUrl: string;
            encode(message: _120.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.BlockParams;
            fromJSON(object: any): _120.BlockParams;
            toJSON(message: _120.BlockParams): unknown;
            fromPartial(object: {
                max_bytes?: string | number | import("long").default;
                max_gas?: string | number | import("long").default;
            }): _120.BlockParams;
            fromAmino(object: _120.BlockParamsAmino): _120.BlockParams;
            toAmino(message: _120.BlockParams): _120.BlockParamsAmino;
            fromAminoMsg(object: _120.BlockParamsAminoMsg): _120.BlockParams;
            fromProtoMsg(message: _120.BlockParamsProtoMsg): _120.BlockParams;
            toProto(message: _120.BlockParams): Uint8Array;
            toProtoMsg(message: _120.BlockParams): _120.BlockParamsProtoMsg;
        };
        LastCommitInfo: {
            typeUrl: string;
            encode(message: _120.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.LastCommitInfo;
            fromJSON(object: any): _120.LastCommitInfo;
            toJSON(message: _120.LastCommitInfo): unknown;
            fromPartial(object: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: string | number | import("long").default;
                    };
                    signed_last_block?: boolean;
                }[];
            }): _120.LastCommitInfo;
            fromAmino(object: _120.LastCommitInfoAmino): _120.LastCommitInfo;
            toAmino(message: _120.LastCommitInfo): _120.LastCommitInfoAmino;
            fromAminoMsg(object: _120.LastCommitInfoAminoMsg): _120.LastCommitInfo;
            fromProtoMsg(message: _120.LastCommitInfoProtoMsg): _120.LastCommitInfo;
            toProto(message: _120.LastCommitInfo): Uint8Array;
            toProtoMsg(message: _120.LastCommitInfo): _120.LastCommitInfoProtoMsg;
        };
        Event: {
            typeUrl: string;
            encode(message: _120.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Event;
            fromJSON(object: any): _120.Event;
            toJSON(message: _120.Event): unknown;
            fromPartial(object: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }): _120.Event;
            fromAmino(object: _120.EventAmino): _120.Event;
            toAmino(message: _120.Event): _120.EventAmino;
            fromAminoMsg(object: _120.EventAminoMsg): _120.Event;
            fromProtoMsg(message: _120.EventProtoMsg): _120.Event;
            toProto(message: _120.Event): Uint8Array;
            toProtoMsg(message: _120.Event): _120.EventProtoMsg;
        };
        EventAttribute: {
            typeUrl: string;
            encode(message: _120.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.EventAttribute;
            fromJSON(object: any): _120.EventAttribute;
            toJSON(message: _120.EventAttribute): unknown;
            fromPartial(object: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }): _120.EventAttribute;
            fromAmino(object: _120.EventAttributeAmino): _120.EventAttribute;
            toAmino(message: _120.EventAttribute): _120.EventAttributeAmino;
            fromAminoMsg(object: _120.EventAttributeAminoMsg): _120.EventAttribute;
            fromProtoMsg(message: _120.EventAttributeProtoMsg): _120.EventAttribute;
            toProto(message: _120.EventAttribute): Uint8Array;
            toProtoMsg(message: _120.EventAttribute): _120.EventAttributeProtoMsg;
        };
        TxResult: {
            typeUrl: string;
            encode(message: _120.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.TxResult;
            fromJSON(object: any): _120.TxResult;
            toJSON(message: _120.TxResult): unknown;
            fromPartial(object: {
                height?: string | number | import("long").default;
                index?: number;
                tx?: Uint8Array;
                result?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gas_wanted?: string | number | import("long").default;
                    gas_used?: string | number | import("long").default;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
            }): _120.TxResult;
            fromAmino(object: _120.TxResultAmino): _120.TxResult;
            toAmino(message: _120.TxResult): _120.TxResultAmino;
            fromAminoMsg(object: _120.TxResultAminoMsg): _120.TxResult;
            fromProtoMsg(message: _120.TxResultProtoMsg): _120.TxResult;
            toProto(message: _120.TxResult): Uint8Array;
            toProtoMsg(message: _120.TxResult): _120.TxResultProtoMsg;
        };
        Validator: {
            typeUrl: string;
            encode(message: _120.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Validator;
            fromJSON(object: any): _120.Validator;
            toJSON(message: _120.Validator): unknown;
            fromPartial(object: {
                address?: Uint8Array;
                power?: string | number | import("long").default;
            }): _120.Validator;
            fromAmino(object: _120.ValidatorAmino): _120.Validator;
            toAmino(message: _120.Validator): _120.ValidatorAmino;
            fromAminoMsg(object: _120.ValidatorAminoMsg): _120.Validator;
            fromProtoMsg(message: _120.ValidatorProtoMsg): _120.Validator;
            toProto(message: _120.Validator): Uint8Array;
            toProtoMsg(message: _120.Validator): _120.ValidatorProtoMsg;
        };
        ValidatorUpdate: {
            typeUrl: string;
            encode(message: _120.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ValidatorUpdate;
            fromJSON(object: any): _120.ValidatorUpdate;
            toJSON(message: _120.ValidatorUpdate): unknown;
            fromPartial(object: {
                pub_key?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: string | number | import("long").default;
            }): _120.ValidatorUpdate;
            fromAmino(object: _120.ValidatorUpdateAmino): _120.ValidatorUpdate;
            toAmino(message: _120.ValidatorUpdate): _120.ValidatorUpdateAmino;
            fromAminoMsg(object: _120.ValidatorUpdateAminoMsg): _120.ValidatorUpdate;
            fromProtoMsg(message: _120.ValidatorUpdateProtoMsg): _120.ValidatorUpdate;
            toProto(message: _120.ValidatorUpdate): Uint8Array;
            toProtoMsg(message: _120.ValidatorUpdate): _120.ValidatorUpdateProtoMsg;
        };
        VoteInfo: {
            typeUrl: string;
            encode(message: _120.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.VoteInfo;
            fromJSON(object: any): _120.VoteInfo;
            toJSON(message: _120.VoteInfo): unknown;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: string | number | import("long").default;
                };
                signed_last_block?: boolean;
            }): _120.VoteInfo;
            fromAmino(object: _120.VoteInfoAmino): _120.VoteInfo;
            toAmino(message: _120.VoteInfo): _120.VoteInfoAmino;
            fromAminoMsg(object: _120.VoteInfoAminoMsg): _120.VoteInfo;
            fromProtoMsg(message: _120.VoteInfoProtoMsg): _120.VoteInfo;
            toProto(message: _120.VoteInfo): Uint8Array;
            toProtoMsg(message: _120.VoteInfo): _120.VoteInfoProtoMsg;
        };
        Evidence: {
            typeUrl: string;
            encode(message: _120.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Evidence;
            fromJSON(object: any): _120.Evidence;
            toJSON(message: _120.Evidence): unknown;
            fromPartial(object: {
                type?: _120.EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: string | number | import("long").default;
                };
                height?: string | number | import("long").default;
                time?: Date;
                total_voting_power?: string | number | import("long").default;
            }): _120.Evidence;
            fromAmino(object: _120.EvidenceAmino): _120.Evidence;
            toAmino(message: _120.Evidence): _120.EvidenceAmino;
            fromAminoMsg(object: _120.EvidenceAminoMsg): _120.Evidence;
            fromProtoMsg(message: _120.EvidenceProtoMsg): _120.Evidence;
            toProto(message: _120.Evidence): Uint8Array;
            toProtoMsg(message: _120.Evidence): _120.EvidenceProtoMsg;
        };
        Snapshot: {
            typeUrl: string;
            encode(message: _120.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Snapshot;
            fromJSON(object: any): _120.Snapshot;
            toJSON(message: _120.Snapshot): unknown;
            fromPartial(object: {
                height?: string | number | import("long").default;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            }): _120.Snapshot;
            fromAmino(object: _120.SnapshotAmino): _120.Snapshot;
            toAmino(message: _120.Snapshot): _120.SnapshotAmino;
            fromAminoMsg(object: _120.SnapshotAminoMsg): _120.Snapshot;
            fromProtoMsg(message: _120.SnapshotProtoMsg): _120.Snapshot;
            toProto(message: _120.Snapshot): Uint8Array;
            toProtoMsg(message: _120.Snapshot): _120.SnapshotProtoMsg;
        };
    };
    const crypto: {
        Proof: {
            typeUrl: string;
            encode(message: _122.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Proof;
            fromJSON(object: any): _122.Proof;
            toJSON(message: _122.Proof): unknown;
            fromPartial(object: {
                total?: string | number | import("long").default;
                index?: string | number | import("long").default;
                leaf_hash?: Uint8Array;
                aunts?: Uint8Array[];
            }): _122.Proof;
            fromAmino(object: _122.ProofAmino): _122.Proof;
            toAmino(message: _122.Proof): _122.ProofAmino;
            fromAminoMsg(object: _122.ProofAminoMsg): _122.Proof;
            fromProtoMsg(message: _122.ProofProtoMsg): _122.Proof;
            toProto(message: _122.Proof): Uint8Array;
            toProtoMsg(message: _122.Proof): _122.ProofProtoMsg;
        };
        ValueOp: {
            typeUrl: string;
            encode(message: _122.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ValueOp;
            fromJSON(object: any): _122.ValueOp;
            toJSON(message: _122.ValueOp): unknown;
            fromPartial(object: {
                key?: Uint8Array;
                proof?: {
                    total?: string | number | import("long").default;
                    index?: string | number | import("long").default;
                    leaf_hash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _122.ValueOp;
            fromAmino(object: _122.ValueOpAmino): _122.ValueOp;
            toAmino(message: _122.ValueOp): _122.ValueOpAmino;
            fromAminoMsg(object: _122.ValueOpAminoMsg): _122.ValueOp;
            fromProtoMsg(message: _122.ValueOpProtoMsg): _122.ValueOp;
            toProto(message: _122.ValueOp): Uint8Array;
            toProtoMsg(message: _122.ValueOp): _122.ValueOpProtoMsg;
        };
        DominoOp: {
            typeUrl: string;
            encode(message: _122.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.DominoOp;
            fromJSON(object: any): _122.DominoOp;
            toJSON(message: _122.DominoOp): unknown;
            fromPartial(object: {
                key?: string;
                input?: string;
                output?: string;
            }): _122.DominoOp;
            fromAmino(object: _122.DominoOpAmino): _122.DominoOp;
            toAmino(message: _122.DominoOp): _122.DominoOpAmino;
            fromAminoMsg(object: _122.DominoOpAminoMsg): _122.DominoOp;
            fromProtoMsg(message: _122.DominoOpProtoMsg): _122.DominoOp;
            toProto(message: _122.DominoOp): Uint8Array;
            toProtoMsg(message: _122.DominoOp): _122.DominoOpProtoMsg;
        };
        ProofOp: {
            typeUrl: string;
            encode(message: _122.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ProofOp;
            fromJSON(object: any): _122.ProofOp;
            toJSON(message: _122.ProofOp): unknown;
            fromPartial(object: {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            }): _122.ProofOp;
            fromAmino(object: _122.ProofOpAmino): _122.ProofOp;
            toAmino(message: _122.ProofOp): _122.ProofOpAmino;
            fromAminoMsg(object: _122.ProofOpAminoMsg): _122.ProofOp;
            fromProtoMsg(message: _122.ProofOpProtoMsg): _122.ProofOp;
            toProto(message: _122.ProofOp): Uint8Array;
            toProtoMsg(message: _122.ProofOp): _122.ProofOpProtoMsg;
        };
        ProofOps: {
            typeUrl: string;
            encode(message: _122.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ProofOps;
            fromJSON(object: any): _122.ProofOps;
            toJSON(message: _122.ProofOps): unknown;
            fromPartial(object: {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            }): _122.ProofOps;
            fromAmino(object: _122.ProofOpsAmino): _122.ProofOps;
            toAmino(message: _122.ProofOps): _122.ProofOpsAmino;
            fromAminoMsg(object: _122.ProofOpsAminoMsg): _122.ProofOps;
            fromProtoMsg(message: _122.ProofOpsProtoMsg): _122.ProofOps;
            toProto(message: _122.ProofOps): Uint8Array;
            toProtoMsg(message: _122.ProofOps): _122.ProofOpsProtoMsg;
        };
        PublicKey: {
            typeUrl: string;
            encode(message: _121.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.PublicKey;
            fromJSON(object: any): _121.PublicKey;
            toJSON(message: _121.PublicKey): unknown;
            fromPartial(object: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            }): _121.PublicKey;
            fromAmino(object: _121.PublicKeyAmino): _121.PublicKey;
            toAmino(message: _121.PublicKey): _121.PublicKeyAmino;
            fromAminoMsg(object: _121.PublicKeyAminoMsg): _121.PublicKey;
            fromProtoMsg(message: _121.PublicKeyProtoMsg): _121.PublicKey;
            toProto(message: _121.PublicKey): Uint8Array;
            toProtoMsg(message: _121.PublicKey): _121.PublicKeyProtoMsg;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                typeUrl: string;
                encode(message: _123.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.BitArray;
                fromJSON(object: any): _123.BitArray;
                toJSON(message: _123.BitArray): unknown;
                fromPartial(object: {
                    bits?: string | number | import("long").default;
                    elems?: (string | number | import("long").default)[];
                }): _123.BitArray;
                fromAmino(object: _123.BitArrayAmino): _123.BitArray;
                toAmino(message: _123.BitArray): _123.BitArrayAmino;
                fromAminoMsg(object: _123.BitArrayAminoMsg): _123.BitArray;
                fromProtoMsg(message: _123.BitArrayProtoMsg): _123.BitArray;
                toProto(message: _123.BitArray): Uint8Array;
                toProtoMsg(message: _123.BitArray): _123.BitArrayProtoMsg;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            typeUrl: string;
            encode(message: _124.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ProtocolVersion;
            fromJSON(object: any): _124.ProtocolVersion;
            toJSON(message: _124.ProtocolVersion): unknown;
            fromPartial(object: {
                p2p?: string | number | import("long").default;
                block?: string | number | import("long").default;
                app?: string | number | import("long").default;
            }): _124.ProtocolVersion;
            fromAmino(object: _124.ProtocolVersionAmino): _124.ProtocolVersion;
            toAmino(message: _124.ProtocolVersion): _124.ProtocolVersionAmino;
            fromAminoMsg(object: _124.ProtocolVersionAminoMsg): _124.ProtocolVersion;
            fromProtoMsg(message: _124.ProtocolVersionProtoMsg): _124.ProtocolVersion;
            toProto(message: _124.ProtocolVersion): Uint8Array;
            toProtoMsg(message: _124.ProtocolVersion): _124.ProtocolVersionProtoMsg;
        };
        NodeInfo: {
            typeUrl: string;
            encode(message: _124.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.NodeInfo;
            fromJSON(object: any): _124.NodeInfo;
            toJSON(message: _124.NodeInfo): unknown;
            fromPartial(object: {
                protocol_version?: {
                    p2p?: string | number | import("long").default;
                    block?: string | number | import("long").default;
                    app?: string | number | import("long").default;
                };
                node_id?: string;
                listen_addr?: string;
                network?: string;
                version?: string;
                channels?: Uint8Array;
                moniker?: string;
                other?: {
                    tx_index?: string;
                    rpc_address?: string;
                };
            }): _124.NodeInfo;
            fromAmino(object: _124.NodeInfoAmino): _124.NodeInfo;
            toAmino(message: _124.NodeInfo): _124.NodeInfoAmino;
            fromAminoMsg(object: _124.NodeInfoAminoMsg): _124.NodeInfo;
            fromProtoMsg(message: _124.NodeInfoProtoMsg): _124.NodeInfo;
            toProto(message: _124.NodeInfo): Uint8Array;
            toProtoMsg(message: _124.NodeInfo): _124.NodeInfoProtoMsg;
        };
        NodeInfoOther: {
            typeUrl: string;
            encode(message: _124.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.NodeInfoOther;
            fromJSON(object: any): _124.NodeInfoOther;
            toJSON(message: _124.NodeInfoOther): unknown;
            fromPartial(object: {
                tx_index?: string;
                rpc_address?: string;
            }): _124.NodeInfoOther;
            fromAmino(object: _124.NodeInfoOtherAmino): _124.NodeInfoOther;
            toAmino(message: _124.NodeInfoOther): _124.NodeInfoOtherAmino;
            fromAminoMsg(object: _124.NodeInfoOtherAminoMsg): _124.NodeInfoOther;
            fromProtoMsg(message: _124.NodeInfoOtherProtoMsg): _124.NodeInfoOther;
            toProto(message: _124.NodeInfoOther): Uint8Array;
            toProtoMsg(message: _124.NodeInfoOther): _124.NodeInfoOtherProtoMsg;
        };
        PeerInfo: {
            typeUrl: string;
            encode(message: _124.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.PeerInfo;
            fromJSON(object: any): _124.PeerInfo;
            toJSON(message: _124.PeerInfo): unknown;
            fromPartial(object: {
                id?: string;
                address_info?: {
                    address?: string;
                    last_dial_success?: Date;
                    last_dial_failure?: Date;
                    dial_failures?: number;
                }[];
                last_connected?: Date;
            }): _124.PeerInfo;
            fromAmino(object: _124.PeerInfoAmino): _124.PeerInfo;
            toAmino(message: _124.PeerInfo): _124.PeerInfoAmino;
            fromAminoMsg(object: _124.PeerInfoAminoMsg): _124.PeerInfo;
            fromProtoMsg(message: _124.PeerInfoProtoMsg): _124.PeerInfo;
            toProto(message: _124.PeerInfo): Uint8Array;
            toProtoMsg(message: _124.PeerInfo): _124.PeerInfoProtoMsg;
        };
        PeerAddressInfo: {
            typeUrl: string;
            encode(message: _124.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.PeerAddressInfo;
            fromJSON(object: any): _124.PeerAddressInfo;
            toJSON(message: _124.PeerAddressInfo): unknown;
            fromPartial(object: {
                address?: string;
                last_dial_success?: Date;
                last_dial_failure?: Date;
                dial_failures?: number;
            }): _124.PeerAddressInfo;
            fromAmino(object: _124.PeerAddressInfoAmino): _124.PeerAddressInfo;
            toAmino(message: _124.PeerAddressInfo): _124.PeerAddressInfoAmino;
            fromAminoMsg(object: _124.PeerAddressInfoAminoMsg): _124.PeerAddressInfo;
            fromProtoMsg(message: _124.PeerAddressInfoProtoMsg): _124.PeerAddressInfo;
            toProto(message: _124.PeerAddressInfo): Uint8Array;
            toProtoMsg(message: _124.PeerAddressInfo): _124.PeerAddressInfoProtoMsg;
        };
    };
    const types: {
        ValidatorSet: {
            typeUrl: string;
            encode(message: _129.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.ValidatorSet;
            fromJSON(object: any): _129.ValidatorSet;
            toJSON(message: _129.ValidatorSet): unknown;
            fromPartial(object: {
                validators?: {
                    address?: Uint8Array;
                    pub_key?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    voting_power?: string | number | import("long").default;
                    proposer_priority?: string | number | import("long").default;
                }[];
                proposer?: {
                    address?: Uint8Array;
                    pub_key?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    voting_power?: string | number | import("long").default;
                    proposer_priority?: string | number | import("long").default;
                };
                total_voting_power?: string | number | import("long").default;
            }): _129.ValidatorSet;
            fromAmino(object: _129.ValidatorSetAmino): _129.ValidatorSet;
            toAmino(message: _129.ValidatorSet): _129.ValidatorSetAmino;
            fromAminoMsg(object: _129.ValidatorSetAminoMsg): _129.ValidatorSet;
            fromProtoMsg(message: _129.ValidatorSetProtoMsg): _129.ValidatorSet;
            toProto(message: _129.ValidatorSet): Uint8Array;
            toProtoMsg(message: _129.ValidatorSet): _129.ValidatorSetProtoMsg;
        };
        Validator: {
            typeUrl: string;
            encode(message: _129.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.Validator;
            fromJSON(object: any): _129.Validator;
            toJSON(message: _129.Validator): unknown;
            fromPartial(object: {
                address?: Uint8Array;
                pub_key?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                voting_power?: string | number | import("long").default;
                proposer_priority?: string | number | import("long").default;
            }): _129.Validator;
            fromAmino(object: _129.ValidatorAmino): _129.Validator;
            toAmino(message: _129.Validator): _129.ValidatorAmino;
            fromAminoMsg(object: _129.ValidatorAminoMsg): _129.Validator;
            fromProtoMsg(message: _129.ValidatorProtoMsg): _129.Validator;
            toProto(message: _129.Validator): Uint8Array;
            toProtoMsg(message: _129.Validator): _129.ValidatorProtoMsg;
        };
        SimpleValidator: {
            typeUrl: string;
            encode(message: _129.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.SimpleValidator;
            fromJSON(object: any): _129.SimpleValidator;
            toJSON(message: _129.SimpleValidator): unknown;
            fromPartial(object: {
                pub_key?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                voting_power?: string | number | import("long").default;
            }): _129.SimpleValidator;
            fromAmino(object: _129.SimpleValidatorAmino): _129.SimpleValidator;
            toAmino(message: _129.SimpleValidator): _129.SimpleValidatorAmino;
            fromAminoMsg(object: _129.SimpleValidatorAminoMsg): _129.SimpleValidator;
            fromProtoMsg(message: _129.SimpleValidatorProtoMsg): _129.SimpleValidator;
            toProto(message: _129.SimpleValidator): Uint8Array;
            toProtoMsg(message: _129.SimpleValidator): _129.SimpleValidatorProtoMsg;
        };
        blockIDFlagFromJSON(object: any): _128.BlockIDFlag;
        blockIDFlagToJSON(object: _128.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _128.SignedMsgType;
        signedMsgTypeToJSON(object: _128.SignedMsgType): string;
        BlockIDFlag: typeof _128.BlockIDFlag;
        BlockIDFlagSDKType: typeof _128.BlockIDFlag;
        BlockIDFlagAmino: typeof _128.BlockIDFlag;
        SignedMsgType: typeof _128.SignedMsgType;
        SignedMsgTypeSDKType: typeof _128.SignedMsgType;
        SignedMsgTypeAmino: typeof _128.SignedMsgType;
        PartSetHeader: {
            typeUrl: string;
            encode(message: _128.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.PartSetHeader;
            fromJSON(object: any): _128.PartSetHeader;
            toJSON(message: _128.PartSetHeader): unknown;
            fromPartial(object: {
                total?: number;
                hash?: Uint8Array;
            }): _128.PartSetHeader;
            fromAmino(object: _128.PartSetHeaderAmino): _128.PartSetHeader;
            toAmino(message: _128.PartSetHeader): _128.PartSetHeaderAmino;
            fromAminoMsg(object: _128.PartSetHeaderAminoMsg): _128.PartSetHeader;
            fromProtoMsg(message: _128.PartSetHeaderProtoMsg): _128.PartSetHeader;
            toProto(message: _128.PartSetHeader): Uint8Array;
            toProtoMsg(message: _128.PartSetHeader): _128.PartSetHeaderProtoMsg;
        };
        Part: {
            typeUrl: string;
            encode(message: _128.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.Part;
            fromJSON(object: any): _128.Part;
            toJSON(message: _128.Part): unknown;
            fromPartial(object: {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: string | number | import("long").default;
                    index?: string | number | import("long").default;
                    leaf_hash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _128.Part;
            fromAmino(object: _128.PartAmino): _128.Part;
            toAmino(message: _128.Part): _128.PartAmino;
            fromAminoMsg(object: _128.PartAminoMsg): _128.Part;
            fromProtoMsg(message: _128.PartProtoMsg): _128.Part;
            toProto(message: _128.Part): Uint8Array;
            toProtoMsg(message: _128.Part): _128.PartProtoMsg;
        };
        BlockID: {
            typeUrl: string;
            encode(message: _128.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.BlockID;
            fromJSON(object: any): _128.BlockID;
            toJSON(message: _128.BlockID): unknown;
            fromPartial(object: {
                hash?: Uint8Array;
                part_set_header?: {
                    total?: number;
                    hash?: Uint8Array;
                };
            }): _128.BlockID;
            fromAmino(object: _128.BlockIDAmino): _128.BlockID;
            toAmino(message: _128.BlockID): _128.BlockIDAmino;
            fromAminoMsg(object: _128.BlockIDAminoMsg): _128.BlockID;
            fromProtoMsg(message: _128.BlockIDProtoMsg): _128.BlockID;
            toProto(message: _128.BlockID): Uint8Array;
            toProtoMsg(message: _128.BlockID): _128.BlockIDProtoMsg;
        };
        Header: {
            typeUrl: string;
            encode(message: _128.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.Header;
            fromJSON(object: any): _128.Header;
            toJSON(message: _128.Header): unknown;
            fromPartial(object: {
                version?: {
                    block?: string | number | import("long").default;
                    app?: string | number | import("long").default;
                };
                chain_id?: string;
                height?: string | number | import("long").default;
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
            }): _128.Header;
            fromAmino(object: _128.HeaderAmino): _128.Header;
            toAmino(message: _128.Header): _128.HeaderAmino;
            fromAminoMsg(object: _128.HeaderAminoMsg): _128.Header;
            fromProtoMsg(message: _128.HeaderProtoMsg): _128.Header;
            toProto(message: _128.Header): Uint8Array;
            toProtoMsg(message: _128.Header): _128.HeaderProtoMsg;
        };
        Data: {
            typeUrl: string;
            encode(message: _128.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.Data;
            fromJSON(object: any): _128.Data;
            toJSON(message: _128.Data): unknown;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _128.Data;
            fromAmino(object: _128.DataAmino): _128.Data;
            toAmino(message: _128.Data): _128.DataAmino;
            fromAminoMsg(object: _128.DataAminoMsg): _128.Data;
            fromProtoMsg(message: _128.DataProtoMsg): _128.Data;
            toProto(message: _128.Data): Uint8Array;
            toProtoMsg(message: _128.Data): _128.DataProtoMsg;
        };
        Vote: {
            typeUrl: string;
            encode(message: _128.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.Vote;
            fromJSON(object: any): _128.Vote;
            toJSON(message: _128.Vote): unknown;
            fromPartial(object: {
                type?: _128.SignedMsgType;
                height?: string | number | import("long").default;
                round?: number;
                block_id?: {
                    hash?: Uint8Array;
                    part_set_header?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                validator_address?: Uint8Array;
                validator_index?: number;
                signature?: Uint8Array;
            }): _128.Vote;
            fromAmino(object: _128.VoteAmino): _128.Vote;
            toAmino(message: _128.Vote): _128.VoteAmino;
            fromAminoMsg(object: _128.VoteAminoMsg): _128.Vote;
            fromProtoMsg(message: _128.VoteProtoMsg): _128.Vote;
            toProto(message: _128.Vote): Uint8Array;
            toProtoMsg(message: _128.Vote): _128.VoteProtoMsg;
        };
        Commit: {
            typeUrl: string;
            encode(message: _128.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.Commit;
            fromJSON(object: any): _128.Commit;
            toJSON(message: _128.Commit): unknown;
            fromPartial(object: {
                height?: string | number | import("long").default;
                round?: number;
                block_id?: {
                    hash?: Uint8Array;
                    part_set_header?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                signatures?: {
                    block_id_flag?: _128.BlockIDFlag;
                    validator_address?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[];
            }): _128.Commit;
            fromAmino(object: _128.CommitAmino): _128.Commit;
            toAmino(message: _128.Commit): _128.CommitAmino;
            fromAminoMsg(object: _128.CommitAminoMsg): _128.Commit;
            fromProtoMsg(message: _128.CommitProtoMsg): _128.Commit;
            toProto(message: _128.Commit): Uint8Array;
            toProtoMsg(message: _128.Commit): _128.CommitProtoMsg;
        };
        CommitSig: {
            typeUrl: string;
            encode(message: _128.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.CommitSig;
            fromJSON(object: any): _128.CommitSig;
            toJSON(message: _128.CommitSig): unknown;
            fromPartial(object: {
                block_id_flag?: _128.BlockIDFlag;
                validator_address?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            }): _128.CommitSig;
            fromAmino(object: _128.CommitSigAmino): _128.CommitSig;
            toAmino(message: _128.CommitSig): _128.CommitSigAmino;
            fromAminoMsg(object: _128.CommitSigAminoMsg): _128.CommitSig;
            fromProtoMsg(message: _128.CommitSigProtoMsg): _128.CommitSig;
            toProto(message: _128.CommitSig): Uint8Array;
            toProtoMsg(message: _128.CommitSig): _128.CommitSigProtoMsg;
        };
        Proposal: {
            typeUrl: string;
            encode(message: _128.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.Proposal;
            fromJSON(object: any): _128.Proposal;
            toJSON(message: _128.Proposal): unknown;
            fromPartial(object: {
                type?: _128.SignedMsgType;
                height?: string | number | import("long").default;
                round?: number;
                pol_round?: number;
                block_id?: {
                    hash?: Uint8Array;
                    part_set_header?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                signature?: Uint8Array;
            }): _128.Proposal;
            fromAmino(object: _128.ProposalAmino): _128.Proposal;
            toAmino(message: _128.Proposal): _128.ProposalAmino;
            fromAminoMsg(object: _128.ProposalAminoMsg): _128.Proposal;
            fromProtoMsg(message: _128.ProposalProtoMsg): _128.Proposal;
            toProto(message: _128.Proposal): Uint8Array;
            toProtoMsg(message: _128.Proposal): _128.ProposalProtoMsg;
        };
        SignedHeader: {
            typeUrl: string;
            encode(message: _128.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.SignedHeader;
            fromJSON(object: any): _128.SignedHeader;
            toJSON(message: _128.SignedHeader): unknown;
            fromPartial(object: {
                header?: {
                    version?: {
                        block?: string | number | import("long").default;
                        app?: string | number | import("long").default;
                    };
                    chain_id?: string;
                    height?: string | number | import("long").default;
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
                    height?: string | number | import("long").default;
                    round?: number;
                    block_id?: {
                        hash?: Uint8Array;
                        part_set_header?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        block_id_flag?: _128.BlockIDFlag;
                        validator_address?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _128.SignedHeader;
            fromAmino(object: _128.SignedHeaderAmino): _128.SignedHeader;
            toAmino(message: _128.SignedHeader): _128.SignedHeaderAmino;
            fromAminoMsg(object: _128.SignedHeaderAminoMsg): _128.SignedHeader;
            fromProtoMsg(message: _128.SignedHeaderProtoMsg): _128.SignedHeader;
            toProto(message: _128.SignedHeader): Uint8Array;
            toProtoMsg(message: _128.SignedHeader): _128.SignedHeaderProtoMsg;
        };
        LightBlock: {
            typeUrl: string;
            encode(message: _128.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.LightBlock;
            fromJSON(object: any): _128.LightBlock;
            toJSON(message: _128.LightBlock): unknown;
            fromPartial(object: {
                signed_header?: {
                    header?: {
                        version?: {
                            block?: string | number | import("long").default;
                            app?: string | number | import("long").default;
                        };
                        chain_id?: string;
                        height?: string | number | import("long").default;
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
                        height?: string | number | import("long").default;
                        round?: number;
                        block_id?: {
                            hash?: Uint8Array;
                            part_set_header?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        signatures?: {
                            block_id_flag?: _128.BlockIDFlag;
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
                        voting_power?: string | number | import("long").default;
                        proposer_priority?: string | number | import("long").default;
                    }[];
                    proposer?: {
                        address?: Uint8Array;
                        pub_key?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        voting_power?: string | number | import("long").default;
                        proposer_priority?: string | number | import("long").default;
                    };
                    total_voting_power?: string | number | import("long").default;
                };
            }): _128.LightBlock;
            fromAmino(object: _128.LightBlockAmino): _128.LightBlock;
            toAmino(message: _128.LightBlock): _128.LightBlockAmino;
            fromAminoMsg(object: _128.LightBlockAminoMsg): _128.LightBlock;
            fromProtoMsg(message: _128.LightBlockProtoMsg): _128.LightBlock;
            toProto(message: _128.LightBlock): Uint8Array;
            toProtoMsg(message: _128.LightBlock): _128.LightBlockProtoMsg;
        };
        BlockMeta: {
            typeUrl: string;
            encode(message: _128.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.BlockMeta;
            fromJSON(object: any): _128.BlockMeta;
            toJSON(message: _128.BlockMeta): unknown;
            fromPartial(object: {
                block_id?: {
                    hash?: Uint8Array;
                    part_set_header?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                block_size?: string | number | import("long").default;
                header?: {
                    version?: {
                        block?: string | number | import("long").default;
                        app?: string | number | import("long").default;
                    };
                    chain_id?: string;
                    height?: string | number | import("long").default;
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
                num_txs?: string | number | import("long").default;
            }): _128.BlockMeta;
            fromAmino(object: _128.BlockMetaAmino): _128.BlockMeta;
            toAmino(message: _128.BlockMeta): _128.BlockMetaAmino;
            fromAminoMsg(object: _128.BlockMetaAminoMsg): _128.BlockMeta;
            fromProtoMsg(message: _128.BlockMetaProtoMsg): _128.BlockMeta;
            toProto(message: _128.BlockMeta): Uint8Array;
            toProtoMsg(message: _128.BlockMeta): _128.BlockMetaProtoMsg;
        };
        TxProof: {
            typeUrl: string;
            encode(message: _128.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.TxProof;
            fromJSON(object: any): _128.TxProof;
            toJSON(message: _128.TxProof): unknown;
            fromPartial(object: {
                root_hash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: string | number | import("long").default;
                    index?: string | number | import("long").default;
                    leaf_hash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _128.TxProof;
            fromAmino(object: _128.TxProofAmino): _128.TxProof;
            toAmino(message: _128.TxProof): _128.TxProofAmino;
            fromAminoMsg(object: _128.TxProofAminoMsg): _128.TxProof;
            fromProtoMsg(message: _128.TxProofProtoMsg): _128.TxProof;
            toProto(message: _128.TxProof): Uint8Array;
            toProtoMsg(message: _128.TxProof): _128.TxProofProtoMsg;
        };
        ConsensusParams: {
            typeUrl: string;
            encode(message: _127.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.ConsensusParams;
            fromJSON(object: any): _127.ConsensusParams;
            toJSON(message: _127.ConsensusParams): unknown;
            fromPartial(object: {
                block?: {
                    max_bytes?: string | number | import("long").default;
                    max_gas?: string | number | import("long").default;
                    time_iota_ms?: string | number | import("long").default;
                };
                evidence?: {
                    max_age_num_blocks?: string | number | import("long").default;
                    max_age_duration?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    max_bytes?: string | number | import("long").default;
                };
                validator?: {
                    pub_key_types?: string[];
                };
                version?: {
                    app_version?: string | number | import("long").default;
                };
            }): _127.ConsensusParams;
            fromAmino(object: _127.ConsensusParamsAmino): _127.ConsensusParams;
            toAmino(message: _127.ConsensusParams): _127.ConsensusParamsAmino;
            fromAminoMsg(object: _127.ConsensusParamsAminoMsg): _127.ConsensusParams;
            fromProtoMsg(message: _127.ConsensusParamsProtoMsg): _127.ConsensusParams;
            toProto(message: _127.ConsensusParams): Uint8Array;
            toProtoMsg(message: _127.ConsensusParams): _127.ConsensusParamsProtoMsg;
        };
        BlockParams: {
            typeUrl: string;
            encode(message: _127.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.BlockParams;
            fromJSON(object: any): _127.BlockParams;
            toJSON(message: _127.BlockParams): unknown;
            fromPartial(object: {
                max_bytes?: string | number | import("long").default;
                max_gas?: string | number | import("long").default;
                time_iota_ms?: string | number | import("long").default;
            }): _127.BlockParams;
            fromAmino(object: _127.BlockParamsAmino): _127.BlockParams;
            toAmino(message: _127.BlockParams): _127.BlockParamsAmino;
            fromAminoMsg(object: _127.BlockParamsAminoMsg): _127.BlockParams;
            fromProtoMsg(message: _127.BlockParamsProtoMsg): _127.BlockParams;
            toProto(message: _127.BlockParams): Uint8Array;
            toProtoMsg(message: _127.BlockParams): _127.BlockParamsProtoMsg;
        };
        EvidenceParams: {
            typeUrl: string;
            encode(message: _127.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.EvidenceParams;
            fromJSON(object: any): _127.EvidenceParams;
            toJSON(message: _127.EvidenceParams): unknown;
            fromPartial(object: {
                max_age_num_blocks?: string | number | import("long").default;
                max_age_duration?: {
                    seconds?: string | number | import("long").default;
                    nanos?: number;
                };
                max_bytes?: string | number | import("long").default;
            }): _127.EvidenceParams;
            fromAmino(object: _127.EvidenceParamsAmino): _127.EvidenceParams;
            toAmino(message: _127.EvidenceParams): _127.EvidenceParamsAmino;
            fromAminoMsg(object: _127.EvidenceParamsAminoMsg): _127.EvidenceParams;
            fromProtoMsg(message: _127.EvidenceParamsProtoMsg): _127.EvidenceParams;
            toProto(message: _127.EvidenceParams): Uint8Array;
            toProtoMsg(message: _127.EvidenceParams): _127.EvidenceParamsProtoMsg;
        };
        ValidatorParams: {
            typeUrl: string;
            encode(message: _127.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.ValidatorParams;
            fromJSON(object: any): _127.ValidatorParams;
            toJSON(message: _127.ValidatorParams): unknown;
            fromPartial(object: {
                pub_key_types?: string[];
            }): _127.ValidatorParams;
            fromAmino(object: _127.ValidatorParamsAmino): _127.ValidatorParams;
            toAmino(message: _127.ValidatorParams): _127.ValidatorParamsAmino;
            fromAminoMsg(object: _127.ValidatorParamsAminoMsg): _127.ValidatorParams;
            fromProtoMsg(message: _127.ValidatorParamsProtoMsg): _127.ValidatorParams;
            toProto(message: _127.ValidatorParams): Uint8Array;
            toProtoMsg(message: _127.ValidatorParams): _127.ValidatorParamsProtoMsg;
        };
        VersionParams: {
            typeUrl: string;
            encode(message: _127.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.VersionParams;
            fromJSON(object: any): _127.VersionParams;
            toJSON(message: _127.VersionParams): unknown;
            fromPartial(object: {
                app_version?: string | number | import("long").default;
            }): _127.VersionParams;
            fromAmino(object: _127.VersionParamsAmino): _127.VersionParams;
            toAmino(message: _127.VersionParams): _127.VersionParamsAmino;
            fromAminoMsg(object: _127.VersionParamsAminoMsg): _127.VersionParams;
            fromProtoMsg(message: _127.VersionParamsProtoMsg): _127.VersionParams;
            toProto(message: _127.VersionParams): Uint8Array;
            toProtoMsg(message: _127.VersionParams): _127.VersionParamsProtoMsg;
        };
        HashedParams: {
            typeUrl: string;
            encode(message: _127.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.HashedParams;
            fromJSON(object: any): _127.HashedParams;
            toJSON(message: _127.HashedParams): unknown;
            fromPartial(object: {
                block_max_bytes?: string | number | import("long").default;
                block_max_gas?: string | number | import("long").default;
            }): _127.HashedParams;
            fromAmino(object: _127.HashedParamsAmino): _127.HashedParams;
            toAmino(message: _127.HashedParams): _127.HashedParamsAmino;
            fromAminoMsg(object: _127.HashedParamsAminoMsg): _127.HashedParams;
            fromProtoMsg(message: _127.HashedParamsProtoMsg): _127.HashedParams;
            toProto(message: _127.HashedParams): Uint8Array;
            toProtoMsg(message: _127.HashedParams): _127.HashedParamsProtoMsg;
        };
        Evidence: {
            typeUrl: string;
            encode(message: _126.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.Evidence;
            fromJSON(object: any): _126.Evidence;
            toJSON(message: _126.Evidence): unknown;
            fromPartial(object: {
                duplicate_vote_evidence?: {
                    vote_a?: {
                        type?: _128.SignedMsgType;
                        height?: string | number | import("long").default;
                        round?: number;
                        block_id?: {
                            hash?: Uint8Array;
                            part_set_header?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validator_address?: Uint8Array;
                        validator_index?: number;
                        signature?: Uint8Array;
                    };
                    vote_b?: {
                        type?: _128.SignedMsgType;
                        height?: string | number | import("long").default;
                        round?: number;
                        block_id?: {
                            hash?: Uint8Array;
                            part_set_header?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validator_address?: Uint8Array;
                        validator_index?: number;
                        signature?: Uint8Array;
                    };
                    total_voting_power?: string | number | import("long").default;
                    validator_power?: string | number | import("long").default;
                    timestamp?: Date;
                };
                light_client_attack_evidence?: {
                    conflicting_block?: {
                        signed_header?: {
                            header?: {
                                version?: {
                                    block?: string | number | import("long").default;
                                    app?: string | number | import("long").default;
                                };
                                chain_id?: string;
                                height?: string | number | import("long").default;
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
                                height?: string | number | import("long").default;
                                round?: number;
                                block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    block_id_flag?: _128.BlockIDFlag;
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
                                voting_power?: string | number | import("long").default;
                                proposer_priority?: string | number | import("long").default;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pub_key?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                voting_power?: string | number | import("long").default;
                                proposer_priority?: string | number | import("long").default;
                            };
                            total_voting_power?: string | number | import("long").default;
                        };
                    };
                    common_height?: string | number | import("long").default;
                    byzantine_validators?: {
                        address?: Uint8Array;
                        pub_key?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        voting_power?: string | number | import("long").default;
                        proposer_priority?: string | number | import("long").default;
                    }[];
                    total_voting_power?: string | number | import("long").default;
                    timestamp?: Date;
                };
            }): _126.Evidence;
            fromAmino(object: _126.EvidenceAmino): _126.Evidence;
            toAmino(message: _126.Evidence): _126.EvidenceAmino;
            fromAminoMsg(object: _126.EvidenceAminoMsg): _126.Evidence;
            fromProtoMsg(message: _126.EvidenceProtoMsg): _126.Evidence;
            toProto(message: _126.Evidence): Uint8Array;
            toProtoMsg(message: _126.Evidence): _126.EvidenceProtoMsg;
        };
        DuplicateVoteEvidence: {
            typeUrl: string;
            encode(message: _126.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.DuplicateVoteEvidence;
            fromJSON(object: any): _126.DuplicateVoteEvidence;
            toJSON(message: _126.DuplicateVoteEvidence): unknown;
            fromPartial(object: {
                vote_a?: {
                    type?: _128.SignedMsgType;
                    height?: string | number | import("long").default;
                    round?: number;
                    block_id?: {
                        hash?: Uint8Array;
                        part_set_header?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: Date;
                    validator_address?: Uint8Array;
                    validator_index?: number;
                    signature?: Uint8Array;
                };
                vote_b?: {
                    type?: _128.SignedMsgType;
                    height?: string | number | import("long").default;
                    round?: number;
                    block_id?: {
                        hash?: Uint8Array;
                        part_set_header?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: Date;
                    validator_address?: Uint8Array;
                    validator_index?: number;
                    signature?: Uint8Array;
                };
                total_voting_power?: string | number | import("long").default;
                validator_power?: string | number | import("long").default;
                timestamp?: Date;
            }): _126.DuplicateVoteEvidence;
            fromAmino(object: _126.DuplicateVoteEvidenceAmino): _126.DuplicateVoteEvidence;
            toAmino(message: _126.DuplicateVoteEvidence): _126.DuplicateVoteEvidenceAmino;
            fromAminoMsg(object: _126.DuplicateVoteEvidenceAminoMsg): _126.DuplicateVoteEvidence;
            fromProtoMsg(message: _126.DuplicateVoteEvidenceProtoMsg): _126.DuplicateVoteEvidence;
            toProto(message: _126.DuplicateVoteEvidence): Uint8Array;
            toProtoMsg(message: _126.DuplicateVoteEvidence): _126.DuplicateVoteEvidenceProtoMsg;
        };
        LightClientAttackEvidence: {
            typeUrl: string;
            encode(message: _126.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.LightClientAttackEvidence;
            fromJSON(object: any): _126.LightClientAttackEvidence;
            toJSON(message: _126.LightClientAttackEvidence): unknown;
            fromPartial(object: {
                conflicting_block?: {
                    signed_header?: {
                        header?: {
                            version?: {
                                block?: string | number | import("long").default;
                                app?: string | number | import("long").default;
                            };
                            chain_id?: string;
                            height?: string | number | import("long").default;
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
                            height?: string | number | import("long").default;
                            round?: number;
                            block_id?: {
                                hash?: Uint8Array;
                                part_set_header?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                block_id_flag?: _128.BlockIDFlag;
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
                            voting_power?: string | number | import("long").default;
                            proposer_priority?: string | number | import("long").default;
                        }[];
                        proposer?: {
                            address?: Uint8Array;
                            pub_key?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            voting_power?: string | number | import("long").default;
                            proposer_priority?: string | number | import("long").default;
                        };
                        total_voting_power?: string | number | import("long").default;
                    };
                };
                common_height?: string | number | import("long").default;
                byzantine_validators?: {
                    address?: Uint8Array;
                    pub_key?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    voting_power?: string | number | import("long").default;
                    proposer_priority?: string | number | import("long").default;
                }[];
                total_voting_power?: string | number | import("long").default;
                timestamp?: Date;
            }): _126.LightClientAttackEvidence;
            fromAmino(object: _126.LightClientAttackEvidenceAmino): _126.LightClientAttackEvidence;
            toAmino(message: _126.LightClientAttackEvidence): _126.LightClientAttackEvidenceAmino;
            fromAminoMsg(object: _126.LightClientAttackEvidenceAminoMsg): _126.LightClientAttackEvidence;
            fromProtoMsg(message: _126.LightClientAttackEvidenceProtoMsg): _126.LightClientAttackEvidence;
            toProto(message: _126.LightClientAttackEvidence): Uint8Array;
            toProtoMsg(message: _126.LightClientAttackEvidence): _126.LightClientAttackEvidenceProtoMsg;
        };
        EvidenceList: {
            typeUrl: string;
            encode(message: _126.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.EvidenceList;
            fromJSON(object: any): _126.EvidenceList;
            toJSON(message: _126.EvidenceList): unknown;
            fromPartial(object: {
                evidence?: {
                    duplicate_vote_evidence?: {
                        vote_a?: {
                            type?: _128.SignedMsgType;
                            height?: string | number | import("long").default;
                            round?: number;
                            block_id?: {
                                hash?: Uint8Array;
                                part_set_header?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validator_address?: Uint8Array;
                            validator_index?: number;
                            signature?: Uint8Array;
                        };
                        vote_b?: {
                            type?: _128.SignedMsgType;
                            height?: string | number | import("long").default;
                            round?: number;
                            block_id?: {
                                hash?: Uint8Array;
                                part_set_header?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validator_address?: Uint8Array;
                            validator_index?: number;
                            signature?: Uint8Array;
                        };
                        total_voting_power?: string | number | import("long").default;
                        validator_power?: string | number | import("long").default;
                        timestamp?: Date;
                    };
                    light_client_attack_evidence?: {
                        conflicting_block?: {
                            signed_header?: {
                                header?: {
                                    version?: {
                                        block?: string | number | import("long").default;
                                        app?: string | number | import("long").default;
                                    };
                                    chain_id?: string;
                                    height?: string | number | import("long").default;
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
                                    height?: string | number | import("long").default;
                                    round?: number;
                                    block_id?: {
                                        hash?: Uint8Array;
                                        part_set_header?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        block_id_flag?: _128.BlockIDFlag;
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
                                    voting_power?: string | number | import("long").default;
                                    proposer_priority?: string | number | import("long").default;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pub_key?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    voting_power?: string | number | import("long").default;
                                    proposer_priority?: string | number | import("long").default;
                                };
                                total_voting_power?: string | number | import("long").default;
                            };
                        };
                        common_height?: string | number | import("long").default;
                        byzantine_validators?: {
                            address?: Uint8Array;
                            pub_key?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            voting_power?: string | number | import("long").default;
                            proposer_priority?: string | number | import("long").default;
                        }[];
                        total_voting_power?: string | number | import("long").default;
                        timestamp?: Date;
                    };
                }[];
            }): _126.EvidenceList;
            fromAmino(object: _126.EvidenceListAmino): _126.EvidenceList;
            toAmino(message: _126.EvidenceList): _126.EvidenceListAmino;
            fromAminoMsg(object: _126.EvidenceListAminoMsg): _126.EvidenceList;
            fromProtoMsg(message: _126.EvidenceListProtoMsg): _126.EvidenceList;
            toProto(message: _126.EvidenceList): Uint8Array;
            toProtoMsg(message: _126.EvidenceList): _126.EvidenceListProtoMsg;
        };
        Block: {
            typeUrl: string;
            encode(message: _125.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Block;
            fromJSON(object: any): _125.Block;
            toJSON(message: _125.Block): unknown;
            fromPartial(object: {
                header?: {
                    version?: {
                        block?: string | number | import("long").default;
                        app?: string | number | import("long").default;
                    };
                    chain_id?: string;
                    height?: string | number | import("long").default;
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
                data?: {
                    txs?: Uint8Array[];
                };
                evidence?: {
                    evidence?: {
                        duplicate_vote_evidence?: {
                            vote_a?: {
                                type?: _128.SignedMsgType;
                                height?: string | number | import("long").default;
                                round?: number;
                                block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validator_address?: Uint8Array;
                                validator_index?: number;
                                signature?: Uint8Array;
                            };
                            vote_b?: {
                                type?: _128.SignedMsgType;
                                height?: string | number | import("long").default;
                                round?: number;
                                block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validator_address?: Uint8Array;
                                validator_index?: number;
                                signature?: Uint8Array;
                            };
                            total_voting_power?: string | number | import("long").default;
                            validator_power?: string | number | import("long").default;
                            timestamp?: Date;
                        };
                        light_client_attack_evidence?: {
                            conflicting_block?: {
                                signed_header?: {
                                    header?: {
                                        version?: {
                                            block?: string | number | import("long").default;
                                            app?: string | number | import("long").default;
                                        };
                                        chain_id?: string;
                                        height?: string | number | import("long").default;
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
                                        height?: string | number | import("long").default;
                                        round?: number;
                                        block_id?: {
                                            hash?: Uint8Array;
                                            part_set_header?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            block_id_flag?: _128.BlockIDFlag;
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
                                        voting_power?: string | number | import("long").default;
                                        proposer_priority?: string | number | import("long").default;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pub_key?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        voting_power?: string | number | import("long").default;
                                        proposer_priority?: string | number | import("long").default;
                                    };
                                    total_voting_power?: string | number | import("long").default;
                                };
                            };
                            common_height?: string | number | import("long").default;
                            byzantine_validators?: {
                                address?: Uint8Array;
                                pub_key?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                voting_power?: string | number | import("long").default;
                                proposer_priority?: string | number | import("long").default;
                            }[];
                            total_voting_power?: string | number | import("long").default;
                            timestamp?: Date;
                        };
                    }[];
                };
                last_commit?: {
                    height?: string | number | import("long").default;
                    round?: number;
                    block_id?: {
                        hash?: Uint8Array;
                        part_set_header?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        block_id_flag?: _128.BlockIDFlag;
                        validator_address?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _125.Block;
            fromAmino(object: _125.BlockAmino): _125.Block;
            toAmino(message: _125.Block): _125.BlockAmino;
            fromAminoMsg(object: _125.BlockAminoMsg): _125.Block;
            fromProtoMsg(message: _125.BlockProtoMsg): _125.Block;
            toProto(message: _125.Block): Uint8Array;
            toProtoMsg(message: _125.Block): _125.BlockProtoMsg;
        };
    };
    const version: {
        App: {
            typeUrl: string;
            encode(message: _130.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.App;
            fromJSON(object: any): _130.App;
            toJSON(message: _130.App): unknown;
            fromPartial(object: {
                protocol?: string | number | import("long").default;
                software?: string;
            }): _130.App;
            fromAmino(object: _130.AppAmino): _130.App;
            toAmino(message: _130.App): _130.AppAmino;
            fromAminoMsg(object: _130.AppAminoMsg): _130.App;
            fromProtoMsg(message: _130.AppProtoMsg): _130.App;
            toProto(message: _130.App): Uint8Array;
            toProtoMsg(message: _130.App): _130.AppProtoMsg;
        };
        Consensus: {
            typeUrl: string;
            encode(message: _130.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.Consensus;
            fromJSON(object: any): _130.Consensus;
            toJSON(message: _130.Consensus): unknown;
            fromPartial(object: {
                block?: string | number | import("long").default;
                app?: string | number | import("long").default;
            }): _130.Consensus;
            fromAmino(object: _130.ConsensusAmino): _130.Consensus;
            toAmino(message: _130.Consensus): _130.ConsensusAmino;
            fromAminoMsg(object: _130.ConsensusAminoMsg): _130.Consensus;
            fromProtoMsg(message: _130.ConsensusProtoMsg): _130.Consensus;
            toProto(message: _130.Consensus): Uint8Array;
            toProtoMsg(message: _130.Consensus): _130.ConsensusProtoMsg;
        };
    };
}
