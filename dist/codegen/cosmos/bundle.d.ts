import * as _3 from "./auth/v1beta1/auth";
import * as _4 from "./auth/v1beta1/genesis";
import * as _5 from "./auth/v1beta1/query";
import * as _6 from "./authz/v1beta1/authz";
import * as _7 from "./authz/v1beta1/event";
import * as _8 from "./authz/v1beta1/genesis";
import * as _9 from "./authz/v1beta1/query";
import * as _10 from "./authz/v1beta1/tx";
import * as _11 from "./bank/v1beta1/authz";
import * as _12 from "./bank/v1beta1/bank";
import * as _13 from "./bank/v1beta1/genesis";
import * as _14 from "./bank/v1beta1/query";
import * as _15 from "./bank/v1beta1/tx";
import * as _16 from "./base/abci/v1beta1/abci";
import * as _17 from "./base/query/v1beta1/pagination";
import * as _18 from "./base/reflection/v2alpha1/reflection";
import * as _19 from "./base/v1beta1/coin";
import * as _20 from "./crypto/ed25519/keys";
import * as _21 from "./crypto/hd/v1/hd";
import * as _22 from "./crypto/keyring/v1/record";
import * as _23 from "./crypto/multisig/keys";
import * as _24 from "./crypto/secp256k1/keys";
import * as _25 from "./crypto/secp256r1/keys";
import * as _26 from "./distribution/v1beta1/distribution";
import * as _27 from "./distribution/v1beta1/genesis";
import * as _28 from "./distribution/v1beta1/query";
import * as _29 from "./distribution/v1beta1/tx";
import * as _30 from "./gov/v1beta1/genesis";
import * as _31 from "./gov/v1beta1/gov";
import * as _32 from "./gov/v1beta1/query";
import * as _33 from "./gov/v1beta1/tx";
import * as _34 from "./mint/v1beta1/genesis";
import * as _35 from "./mint/v1beta1/mint";
import * as _36 from "./mint/v1beta1/query";
import * as _37 from "./slashing/v1beta1/genesis";
import * as _38 from "./slashing/v1beta1/query";
import * as _39 from "./slashing/v1beta1/slashing";
import * as _40 from "./slashing/v1beta1/tx";
import * as _41 from "./staking/v1beta1/authz";
import * as _42 from "./staking/v1beta1/genesis";
import * as _43 from "./staking/v1beta1/lsm";
import * as _44 from "./staking/v1beta1/query";
import * as _45 from "./staking/v1beta1/staking";
import * as _46 from "./staking/v1beta1/tx";
import * as _47 from "../quicksilver/lsm-types/v1/types";
import * as _48 from "./tx/signing/v1beta1/signing";
import * as _49 from "./tx/v1beta1/service";
import * as _50 from "./tx/v1beta1/tx";
import * as _51 from "./upgrade/v1beta1/query";
import * as _52 from "./upgrade/v1beta1/tx";
import * as _53 from "./upgrade/v1beta1/upgrade";
import * as _54 from "../quicksilver/lsm-types/v1/validator";
import * as _145 from "./auth/v1beta1/query.lcd";
import * as _146 from "./authz/v1beta1/query.lcd";
import * as _147 from "./bank/v1beta1/query.lcd";
import * as _148 from "./distribution/v1beta1/query.lcd";
import * as _149 from "./gov/v1beta1/query.lcd";
import * as _150 from "./mint/v1beta1/query.lcd";
import * as _151 from "./slashing/v1beta1/query.lcd";
import * as _152 from "./staking/v1beta1/query.lcd";
import * as _153 from "./tx/v1beta1/service.lcd";
import * as _154 from "./upgrade/v1beta1/query.lcd";
import * as _155 from "./auth/v1beta1/query.rpc.Query";
import * as _156 from "./authz/v1beta1/query.rpc.Query";
import * as _157 from "./bank/v1beta1/query.rpc.Query";
import * as _158 from "./distribution/v1beta1/query.rpc.Query";
import * as _159 from "./gov/v1beta1/query.rpc.Query";
import * as _160 from "./mint/v1beta1/query.rpc.Query";
import * as _161 from "./slashing/v1beta1/query.rpc.Query";
import * as _162 from "./staking/v1beta1/query.rpc.Query";
import * as _163 from "./tx/v1beta1/service.rpc.Service";
import * as _164 from "./upgrade/v1beta1/query.rpc.Query";
import * as _165 from "./authz/v1beta1/tx.rpc.msg";
import * as _166 from "./bank/v1beta1/tx.rpc.msg";
import * as _167 from "./distribution/v1beta1/tx.rpc.msg";
import * as _168 from "./gov/v1beta1/tx.rpc.msg";
import * as _169 from "./slashing/v1beta1/tx.rpc.msg";
import * as _170 from "./staking/v1beta1/tx.rpc.msg";
import * as _171 from "./upgrade/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            Query: typeof _155.Query;
            QueryClientImpl: typeof _155.QueryClientImpl;
            LCDQueryClient: typeof _145.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _5.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryAccountsRequest;
                fromJSON(object: any): _5.QueryAccountsRequest;
                toJSON(message: _5.QueryAccountsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _5.QueryAccountsRequest;
                fromAmino(object: _5.QueryAccountsRequestAmino): _5.QueryAccountsRequest;
                toAmino(message: _5.QueryAccountsRequest): _5.QueryAccountsRequestAmino;
                fromAminoMsg(object: _5.QueryAccountsRequestAminoMsg): _5.QueryAccountsRequest;
                toAminoMsg(message: _5.QueryAccountsRequest): _5.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _5.QueryAccountsRequestProtoMsg): _5.QueryAccountsRequest;
                toProto(message: _5.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _5.QueryAccountsRequest): _5.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _5.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryAccountsResponse;
                fromJSON(object: any): _5.QueryAccountsResponse;
                toJSON(message: _5.QueryAccountsResponse): unknown;
                fromPartial(object: {
                    accounts?: {
                        $typeUrl?: string;
                        type_url?: string;
                        value?: Uint8Array;
                    }[] | ({
                        $typeUrl?: string;
                        type_url?: string;
                        value?: Uint8Array;
                    } | {
                        $typeUrl?: string;
                        address?: string;
                        pub_key?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        account_number?: string | number | import("long").default;
                        sequence?: string | number | import("long").default;
                    })[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _5.QueryAccountsResponse;
                fromAmino(object: _5.QueryAccountsResponseAmino): _5.QueryAccountsResponse;
                toAmino(message: _5.QueryAccountsResponse): _5.QueryAccountsResponseAmino;
                fromAminoMsg(object: _5.QueryAccountsResponseAminoMsg): _5.QueryAccountsResponse;
                toAminoMsg(message: _5.QueryAccountsResponse): _5.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _5.QueryAccountsResponseProtoMsg): _5.QueryAccountsResponse;
                toProto(message: _5.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _5.QueryAccountsResponse): _5.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _5.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryAccountRequest;
                fromJSON(object: any): _5.QueryAccountRequest;
                toJSON(message: _5.QueryAccountRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _5.QueryAccountRequest;
                fromAmino(object: _5.QueryAccountRequestAmino): _5.QueryAccountRequest;
                toAmino(message: _5.QueryAccountRequest): _5.QueryAccountRequestAmino;
                fromAminoMsg(object: _5.QueryAccountRequestAminoMsg): _5.QueryAccountRequest;
                toAminoMsg(message: _5.QueryAccountRequest): _5.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _5.QueryAccountRequestProtoMsg): _5.QueryAccountRequest;
                toProto(message: _5.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _5.QueryAccountRequest): _5.QueryAccountRequestProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                aminoType: string;
                encode(_: _5.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryModuleAccountsRequest;
                fromJSON(_: any): _5.QueryModuleAccountsRequest;
                toJSON(_: _5.QueryModuleAccountsRequest): unknown;
                fromPartial(_: {}): _5.QueryModuleAccountsRequest;
                fromAmino(_: _5.QueryModuleAccountsRequestAmino): _5.QueryModuleAccountsRequest;
                toAmino(_: _5.QueryModuleAccountsRequest): _5.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _5.QueryModuleAccountsRequestAminoMsg): _5.QueryModuleAccountsRequest;
                toAminoMsg(message: _5.QueryModuleAccountsRequest): _5.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _5.QueryModuleAccountsRequestProtoMsg): _5.QueryModuleAccountsRequest;
                toProto(message: _5.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _5.QueryModuleAccountsRequest): _5.QueryModuleAccountsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _5.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryParamsResponse;
                fromJSON(object: any): _5.QueryParamsResponse;
                toJSON(message: _5.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        max_memo_characters?: string | number | import("long").default;
                        tx_sig_limit?: string | number | import("long").default;
                        tx_size_cost_per_byte?: string | number | import("long").default;
                        sig_verify_cost_ed25519?: string | number | import("long").default;
                        sig_verify_cost_secp256k1?: string | number | import("long").default;
                    };
                }): _5.QueryParamsResponse;
                fromAmino(object: _5.QueryParamsResponseAmino): _5.QueryParamsResponse;
                toAmino(message: _5.QueryParamsResponse): _5.QueryParamsResponseAmino;
                fromAminoMsg(object: _5.QueryParamsResponseAminoMsg): _5.QueryParamsResponse;
                toAminoMsg(message: _5.QueryParamsResponse): _5.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _5.QueryParamsResponseProtoMsg): _5.QueryParamsResponse;
                toProto(message: _5.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _5.QueryParamsResponse): _5.QueryParamsResponseProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _5.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryAccountResponse;
                fromJSON(object: any): _5.QueryAccountResponse;
                toJSON(message: _5.QueryAccountResponse): unknown;
                fromPartial(object: {
                    account?: {
                        $typeUrl?: string;
                        type_url?: string;
                        value?: Uint8Array;
                    } | {
                        $typeUrl?: string;
                        address?: string;
                        pub_key?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        account_number?: string | number | import("long").default;
                        sequence?: string | number | import("long").default;
                    };
                }): _5.QueryAccountResponse;
                fromAmino(object: _5.QueryAccountResponseAmino): _5.QueryAccountResponse;
                toAmino(message: _5.QueryAccountResponse): _5.QueryAccountResponseAmino;
                fromAminoMsg(object: _5.QueryAccountResponseAminoMsg): _5.QueryAccountResponse;
                toAminoMsg(message: _5.QueryAccountResponse): _5.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _5.QueryAccountResponseProtoMsg): _5.QueryAccountResponse;
                toProto(message: _5.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _5.QueryAccountResponse): _5.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                aminoType: string;
                encode(_: _5.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryParamsRequest;
                fromJSON(_: any): _5.QueryParamsRequest;
                toJSON(_: _5.QueryParamsRequest): unknown;
                fromPartial(_: {}): _5.QueryParamsRequest;
                fromAmino(_: _5.QueryParamsRequestAmino): _5.QueryParamsRequest;
                toAmino(_: _5.QueryParamsRequest): _5.QueryParamsRequestAmino;
                fromAminoMsg(object: _5.QueryParamsRequestAminoMsg): _5.QueryParamsRequest;
                toAminoMsg(message: _5.QueryParamsRequest): _5.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _5.QueryParamsRequestProtoMsg): _5.QueryParamsRequest;
                toProto(message: _5.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _5.QueryParamsRequest): _5.QueryParamsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _5.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryModuleAccountsResponse;
                fromJSON(object: any): _5.QueryModuleAccountsResponse;
                toJSON(message: _5.QueryModuleAccountsResponse): unknown;
                fromPartial(object: {
                    accounts?: {
                        $typeUrl?: string;
                        type_url?: string;
                        value?: Uint8Array;
                    }[] | ({
                        $typeUrl?: string;
                        type_url?: string;
                        value?: Uint8Array;
                    } | {
                        $typeUrl?: string;
                        base_account?: {
                            $typeUrl?: string;
                            address?: string;
                            pub_key?: {
                                $typeUrl?: string;
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            account_number?: string | number | import("long").default;
                            sequence?: string | number | import("long").default;
                        };
                        name?: string;
                        permissions?: string[];
                    })[];
                }): _5.QueryModuleAccountsResponse;
                fromAmino(object: _5.QueryModuleAccountsResponseAmino): _5.QueryModuleAccountsResponse;
                toAmino(message: _5.QueryModuleAccountsResponse): _5.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _5.QueryModuleAccountsResponseAminoMsg): _5.QueryModuleAccountsResponse;
                toAminoMsg(message: _5.QueryModuleAccountsResponse): _5.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _5.QueryModuleAccountsResponseProtoMsg): _5.QueryModuleAccountsResponse;
                toProto(message: _5.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _5.QueryModuleAccountsResponse): _5.QueryModuleAccountsResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                aminoType: string;
                encode(_: _5.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.Bech32PrefixRequest;
                fromJSON(_: any): _5.Bech32PrefixRequest;
                toJSON(_: _5.Bech32PrefixRequest): unknown;
                fromPartial(_: {}): _5.Bech32PrefixRequest;
                fromAmino(_: _5.Bech32PrefixRequestAmino): _5.Bech32PrefixRequest;
                toAmino(_: _5.Bech32PrefixRequest): _5.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _5.Bech32PrefixRequestAminoMsg): _5.Bech32PrefixRequest;
                toAminoMsg(message: _5.Bech32PrefixRequest): _5.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _5.Bech32PrefixRequestProtoMsg): _5.Bech32PrefixRequest;
                toProto(message: _5.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _5.Bech32PrefixRequest): _5.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _5.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.Bech32PrefixResponse;
                fromJSON(object: any): _5.Bech32PrefixResponse;
                toJSON(message: _5.Bech32PrefixResponse): unknown;
                fromPartial(object: {
                    bech32_prefix?: string;
                }): _5.Bech32PrefixResponse;
                fromAmino(object: _5.Bech32PrefixResponseAmino): _5.Bech32PrefixResponse;
                toAmino(message: _5.Bech32PrefixResponse): _5.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _5.Bech32PrefixResponseAminoMsg): _5.Bech32PrefixResponse;
                toAminoMsg(message: _5.Bech32PrefixResponse): _5.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _5.Bech32PrefixResponseProtoMsg): _5.Bech32PrefixResponse;
                toProto(message: _5.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _5.Bech32PrefixResponse): _5.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _5.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.AddressBytesToStringRequest;
                fromJSON(object: any): _5.AddressBytesToStringRequest;
                toJSON(message: _5.AddressBytesToStringRequest): unknown;
                fromPartial(object: {
                    address_bytes?: Uint8Array;
                }): _5.AddressBytesToStringRequest;
                fromAmino(object: _5.AddressBytesToStringRequestAmino): _5.AddressBytesToStringRequest;
                toAmino(message: _5.AddressBytesToStringRequest): _5.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _5.AddressBytesToStringRequestAminoMsg): _5.AddressBytesToStringRequest;
                toAminoMsg(message: _5.AddressBytesToStringRequest): _5.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _5.AddressBytesToStringRequestProtoMsg): _5.AddressBytesToStringRequest;
                toProto(message: _5.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _5.AddressBytesToStringRequest): _5.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _5.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.AddressBytesToStringResponse;
                fromJSON(object: any): _5.AddressBytesToStringResponse;
                toJSON(message: _5.AddressBytesToStringResponse): unknown;
                fromPartial(object: {
                    address_string?: string;
                }): _5.AddressBytesToStringResponse;
                fromAmino(object: _5.AddressBytesToStringResponseAmino): _5.AddressBytesToStringResponse;
                toAmino(message: _5.AddressBytesToStringResponse): _5.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _5.AddressBytesToStringResponseAminoMsg): _5.AddressBytesToStringResponse;
                toAminoMsg(message: _5.AddressBytesToStringResponse): _5.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _5.AddressBytesToStringResponseProtoMsg): _5.AddressBytesToStringResponse;
                toProto(message: _5.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _5.AddressBytesToStringResponse): _5.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _5.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.AddressStringToBytesRequest;
                fromJSON(object: any): _5.AddressStringToBytesRequest;
                toJSON(message: _5.AddressStringToBytesRequest): unknown;
                fromPartial(object: {
                    address_string?: string;
                }): _5.AddressStringToBytesRequest;
                fromAmino(object: _5.AddressStringToBytesRequestAmino): _5.AddressStringToBytesRequest;
                toAmino(message: _5.AddressStringToBytesRequest): _5.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _5.AddressStringToBytesRequestAminoMsg): _5.AddressStringToBytesRequest;
                toAminoMsg(message: _5.AddressStringToBytesRequest): _5.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _5.AddressStringToBytesRequestProtoMsg): _5.AddressStringToBytesRequest;
                toProto(message: _5.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _5.AddressStringToBytesRequest): _5.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _5.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.AddressStringToBytesResponse;
                fromJSON(object: any): _5.AddressStringToBytesResponse;
                toJSON(message: _5.AddressStringToBytesResponse): unknown;
                fromPartial(object: {
                    address_bytes?: Uint8Array;
                }): _5.AddressStringToBytesResponse;
                fromAmino(object: _5.AddressStringToBytesResponseAmino): _5.AddressStringToBytesResponse;
                toAmino(message: _5.AddressStringToBytesResponse): _5.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _5.AddressStringToBytesResponseAminoMsg): _5.AddressStringToBytesResponse;
                toAminoMsg(message: _5.AddressStringToBytesResponse): _5.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _5.AddressStringToBytesResponseProtoMsg): _5.AddressStringToBytesResponse;
                toProto(message: _5.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _5.AddressStringToBytesResponse): _5.AddressStringToBytesResponseProtoMsg;
            };
            Cosmos_authAccountI_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _3.BaseAccount;
            Cosmos_authAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmos_authModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _3.ModuleAccount;
            Cosmos_authModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                aminoType: string;
                encode(message: _4.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.GenesisState;
                fromJSON(object: any): _4.GenesisState;
                toJSON(message: _4.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        max_memo_characters?: string | number | import("long").default;
                        tx_sig_limit?: string | number | import("long").default;
                        tx_size_cost_per_byte?: string | number | import("long").default;
                        sig_verify_cost_ed25519?: string | number | import("long").default;
                        sig_verify_cost_secp256k1?: string | number | import("long").default;
                    };
                    accounts?: {
                        $typeUrl?: string;
                        type_url?: string;
                        value?: Uint8Array;
                    }[];
                }): _4.GenesisState;
                fromAmino(object: _4.GenesisStateAmino): _4.GenesisState;
                toAmino(message: _4.GenesisState): _4.GenesisStateAmino;
                fromAminoMsg(object: _4.GenesisStateAminoMsg): _4.GenesisState;
                toAminoMsg(message: _4.GenesisState): _4.GenesisStateAminoMsg;
                fromProtoMsg(message: _4.GenesisStateProtoMsg): _4.GenesisState;
                toProto(message: _4.GenesisState): Uint8Array;
                toProtoMsg(message: _4.GenesisState): _4.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                aminoType: string;
                encode(message: _3.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.BaseAccount;
                fromJSON(object: any): _3.BaseAccount;
                toJSON(message: _3.BaseAccount): unknown;
                fromPartial(object: {
                    $typeUrl?: string;
                    address?: string;
                    pub_key?: {
                        $typeUrl?: string;
                        type_url?: string;
                        value?: Uint8Array;
                    };
                    account_number?: string | number | import("long").default;
                    sequence?: string | number | import("long").default;
                }): _3.BaseAccount;
                fromAmino(object: _3.BaseAccountAmino): _3.BaseAccount;
                toAmino(message: _3.BaseAccount): _3.BaseAccountAmino;
                fromAminoMsg(object: _3.BaseAccountAminoMsg): _3.BaseAccount;
                toAminoMsg(message: _3.BaseAccount): _3.BaseAccountAminoMsg;
                fromProtoMsg(message: _3.BaseAccountProtoMsg): _3.BaseAccount;
                toProto(message: _3.BaseAccount): Uint8Array;
                toProtoMsg(message: _3.BaseAccount): _3.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                aminoType: string;
                encode(message: _3.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.ModuleAccount;
                fromJSON(object: any): _3.ModuleAccount;
                toJSON(message: _3.ModuleAccount): unknown;
                fromPartial(object: {
                    $typeUrl?: string;
                    base_account?: {
                        $typeUrl?: string;
                        address?: string;
                        pub_key?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        account_number?: string | number | import("long").default;
                        sequence?: string | number | import("long").default;
                    };
                    name?: string;
                    permissions?: string[];
                }): _3.ModuleAccount;
                fromAmino(object: _3.ModuleAccountAmino): _3.ModuleAccount;
                toAmino(message: _3.ModuleAccount): _3.ModuleAccountAmino;
                fromAminoMsg(object: _3.ModuleAccountAminoMsg): _3.ModuleAccount;
                toAminoMsg(message: _3.ModuleAccount): _3.ModuleAccountAminoMsg;
                fromProtoMsg(message: _3.ModuleAccountProtoMsg): _3.ModuleAccount;
                toProto(message: _3.ModuleAccount): Uint8Array;
                toProtoMsg(message: _3.ModuleAccount): _3.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                aminoType: string;
                encode(message: _3.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.Params;
                fromJSON(object: any): _3.Params;
                toJSON(message: _3.Params): unknown;
                fromPartial(object: {
                    max_memo_characters?: string | number | import("long").default;
                    tx_sig_limit?: string | number | import("long").default;
                    tx_size_cost_per_byte?: string | number | import("long").default;
                    sig_verify_cost_ed25519?: string | number | import("long").default;
                    sig_verify_cost_secp256k1?: string | number | import("long").default;
                }): _3.Params;
                fromAmino(object: _3.ParamsAmino): _3.Params;
                toAmino(message: _3.Params): _3.ParamsAmino;
                fromAminoMsg(object: _3.ParamsAminoMsg): _3.Params;
                toAminoMsg(message: _3.Params): _3.ParamsAminoMsg;
                fromProtoMsg(message: _3.ParamsProtoMsg): _3.Params;
                toProto(message: _3.Params): Uint8Array;
                toProtoMsg(message: _3.Params): _3.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            Msg: typeof _165.Msg;
            Query: typeof _156.Query;
            QueryClientImpl: typeof _156.QueryClientImpl;
            LCDQueryClient: typeof _146.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _10.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _10.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _10.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _10.MsgGrant): {
                        typeUrl: string;
                        value: _10.MsgGrant;
                    };
                    exec(value: _10.MsgExec): {
                        typeUrl: string;
                        value: _10.MsgExec;
                    };
                    revoke(value: _10.MsgRevoke): {
                        typeUrl: string;
                        value: _10.MsgRevoke;
                    };
                };
                toJSON: {
                    grant(value: _10.MsgGrant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _10.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revoke(value: _10.MsgRevoke): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _10.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _10.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _10.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _10.MsgGrant): {
                        typeUrl: string;
                        value: _10.MsgGrant;
                    };
                    exec(value: _10.MsgExec): {
                        typeUrl: string;
                        value: _10.MsgExec;
                    };
                    revoke(value: _10.MsgRevoke): {
                        typeUrl: string;
                        value: _10.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _10.MsgGrant) => _10.MsgGrantAmino;
                    fromAmino: (object: _10.MsgGrantAmino) => _10.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _10.MsgExec) => _10.MsgExecAmino;
                    fromAmino: (object: _10.MsgExecAmino) => _10.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _10.MsgRevoke) => _10.MsgRevokeAmino;
                    fromAmino: (object: _10.MsgRevokeAmino) => _10.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                aminoType: string;
                encode(message: _10.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgGrant;
                fromJSON(object: any): _10.MsgGrant;
                toJSON(message: _10.MsgGrant): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    grant?: {
                        authorization?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        } | {
                            $typeUrl?: string;
                            spend_limit?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        } | {
                            $typeUrl?: string;
                            max_tokens?: {
                                denom?: string;
                                amount?: string;
                            };
                            allow_list?: {
                                address?: string[];
                            };
                            deny_list?: {
                                address?: string[];
                            };
                            authorization_type?: _41.AuthorizationType;
                        } | {
                            $typeUrl?: string;
                            msg?: string;
                        };
                        expiration?: Date;
                    };
                }): _10.MsgGrant;
                fromAmino(object: _10.MsgGrantAmino): _10.MsgGrant;
                toAmino(message: _10.MsgGrant): _10.MsgGrantAmino;
                fromAminoMsg(object: _10.MsgGrantAminoMsg): _10.MsgGrant;
                toAminoMsg(message: _10.MsgGrant): _10.MsgGrantAminoMsg;
                fromProtoMsg(message: _10.MsgGrantProtoMsg): _10.MsgGrant;
                toProto(message: _10.MsgGrant): Uint8Array;
                toProtoMsg(message: _10.MsgGrant): _10.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _10.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgExecResponse;
                fromJSON(object: any): _10.MsgExecResponse;
                toJSON(message: _10.MsgExecResponse): unknown;
                fromPartial(object: {
                    results?: Uint8Array[];
                }): _10.MsgExecResponse;
                fromAmino(object: _10.MsgExecResponseAmino): _10.MsgExecResponse;
                toAmino(message: _10.MsgExecResponse): _10.MsgExecResponseAmino;
                fromAminoMsg(object: _10.MsgExecResponseAminoMsg): _10.MsgExecResponse;
                toAminoMsg(message: _10.MsgExecResponse): _10.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _10.MsgExecResponseProtoMsg): _10.MsgExecResponse;
                toProto(message: _10.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _10.MsgExecResponse): _10.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                aminoType: string;
                encode(message: _10.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgExec;
                fromJSON(object: any): _10.MsgExec;
                toJSON(message: _10.MsgExec): unknown;
                fromPartial(object: {
                    grantee?: string;
                    msgs?: {
                        $typeUrl?: string;
                        type_url?: string;
                        value?: Uint8Array;
                    }[];
                }): _10.MsgExec;
                fromAmino(object: _10.MsgExecAmino): _10.MsgExec;
                toAmino(message: _10.MsgExec): _10.MsgExecAmino;
                fromAminoMsg(object: _10.MsgExecAminoMsg): _10.MsgExec;
                toAminoMsg(message: _10.MsgExec): _10.MsgExecAminoMsg;
                fromProtoMsg(message: _10.MsgExecProtoMsg): _10.MsgExec;
                toProto(message: _10.MsgExec): Uint8Array;
                toProtoMsg(message: _10.MsgExec): _10.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                aminoType: string;
                encode(_: _10.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgGrantResponse;
                fromJSON(_: any): _10.MsgGrantResponse;
                toJSON(_: _10.MsgGrantResponse): unknown;
                fromPartial(_: {}): _10.MsgGrantResponse;
                fromAmino(_: _10.MsgGrantResponseAmino): _10.MsgGrantResponse;
                toAmino(_: _10.MsgGrantResponse): _10.MsgGrantResponseAmino;
                fromAminoMsg(object: _10.MsgGrantResponseAminoMsg): _10.MsgGrantResponse;
                toAminoMsg(message: _10.MsgGrantResponse): _10.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _10.MsgGrantResponseProtoMsg): _10.MsgGrantResponse;
                toProto(message: _10.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _10.MsgGrantResponse): _10.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                aminoType: string;
                encode(message: _10.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgRevoke;
                fromJSON(object: any): _10.MsgRevoke;
                toJSON(message: _10.MsgRevoke): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msg_type_url?: string;
                }): _10.MsgRevoke;
                fromAmino(object: _10.MsgRevokeAmino): _10.MsgRevoke;
                toAmino(message: _10.MsgRevoke): _10.MsgRevokeAmino;
                fromAminoMsg(object: _10.MsgRevokeAminoMsg): _10.MsgRevoke;
                toAminoMsg(message: _10.MsgRevoke): _10.MsgRevokeAminoMsg;
                fromProtoMsg(message: _10.MsgRevokeProtoMsg): _10.MsgRevoke;
                toProto(message: _10.MsgRevoke): Uint8Array;
                toProtoMsg(message: _10.MsgRevoke): _10.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                aminoType: string;
                encode(_: _10.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgRevokeResponse;
                fromJSON(_: any): _10.MsgRevokeResponse;
                toJSON(_: _10.MsgRevokeResponse): unknown;
                fromPartial(_: {}): _10.MsgRevokeResponse;
                fromAmino(_: _10.MsgRevokeResponseAmino): _10.MsgRevokeResponse;
                toAmino(_: _10.MsgRevokeResponse): _10.MsgRevokeResponseAmino;
                fromAminoMsg(object: _10.MsgRevokeResponseAminoMsg): _10.MsgRevokeResponse;
                toAminoMsg(message: _10.MsgRevokeResponse): _10.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _10.MsgRevokeResponseProtoMsg): _10.MsgRevokeResponse;
                toProto(message: _10.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _10.MsgRevokeResponse): _10.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmos_authzAuthorization_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _11.SendAuthorization | _41.StakeAuthorization | _6.GenericAuthorization;
            Cosmos_authzAuthorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authzAuthorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _9.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryGrantsRequest;
                fromJSON(object: any): _9.QueryGrantsRequest;
                toJSON(message: _9.QueryGrantsRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msg_type_url?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _9.QueryGrantsRequest;
                fromAmino(object: _9.QueryGrantsRequestAmino): _9.QueryGrantsRequest;
                toAmino(message: _9.QueryGrantsRequest): _9.QueryGrantsRequestAmino;
                fromAminoMsg(object: _9.QueryGrantsRequestAminoMsg): _9.QueryGrantsRequest;
                toAminoMsg(message: _9.QueryGrantsRequest): _9.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _9.QueryGrantsRequestProtoMsg): _9.QueryGrantsRequest;
                toProto(message: _9.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryGrantsRequest): _9.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _9.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryGrantsResponse;
                fromJSON(object: any): _9.QueryGrantsResponse;
                toJSON(message: _9.QueryGrantsResponse): unknown;
                fromPartial(object: {
                    grants?: {
                        authorization?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        } | {
                            $typeUrl?: string;
                            spend_limit?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        } | {
                            $typeUrl?: string;
                            max_tokens?: {
                                denom?: string;
                                amount?: string;
                            };
                            allow_list?: {
                                address?: string[];
                            };
                            deny_list?: {
                                address?: string[];
                            };
                            authorization_type?: _41.AuthorizationType;
                        } | {
                            $typeUrl?: string;
                            msg?: string;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _9.QueryGrantsResponse;
                fromAmino(object: _9.QueryGrantsResponseAmino): _9.QueryGrantsResponse;
                toAmino(message: _9.QueryGrantsResponse): _9.QueryGrantsResponseAmino;
                fromAminoMsg(object: _9.QueryGrantsResponseAminoMsg): _9.QueryGrantsResponse;
                toAminoMsg(message: _9.QueryGrantsResponse): _9.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _9.QueryGrantsResponseProtoMsg): _9.QueryGrantsResponse;
                toProto(message: _9.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryGrantsResponse): _9.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _9.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryGranterGrantsRequest;
                fromJSON(object: any): _9.QueryGranterGrantsRequest;
                toJSON(message: _9.QueryGranterGrantsRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _9.QueryGranterGrantsRequest;
                fromAmino(object: _9.QueryGranterGrantsRequestAmino): _9.QueryGranterGrantsRequest;
                toAmino(message: _9.QueryGranterGrantsRequest): _9.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _9.QueryGranterGrantsRequestAminoMsg): _9.QueryGranterGrantsRequest;
                toAminoMsg(message: _9.QueryGranterGrantsRequest): _9.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _9.QueryGranterGrantsRequestProtoMsg): _9.QueryGranterGrantsRequest;
                toProto(message: _9.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryGranterGrantsRequest): _9.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _9.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryGranterGrantsResponse;
                fromJSON(object: any): _9.QueryGranterGrantsResponse;
                toJSON(message: _9.QueryGranterGrantsResponse): unknown;
                fromPartial(object: {
                    grants?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        } | {
                            $typeUrl?: string;
                            spend_limit?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        } | {
                            $typeUrl?: string;
                            max_tokens?: {
                                denom?: string;
                                amount?: string;
                            };
                            allow_list?: {
                                address?: string[];
                            };
                            deny_list?: {
                                address?: string[];
                            };
                            authorization_type?: _41.AuthorizationType;
                        } | {
                            $typeUrl?: string;
                            msg?: string;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _9.QueryGranterGrantsResponse;
                fromAmino(object: _9.QueryGranterGrantsResponseAmino): _9.QueryGranterGrantsResponse;
                toAmino(message: _9.QueryGranterGrantsResponse): _9.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _9.QueryGranterGrantsResponseAminoMsg): _9.QueryGranterGrantsResponse;
                toAminoMsg(message: _9.QueryGranterGrantsResponse): _9.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _9.QueryGranterGrantsResponseProtoMsg): _9.QueryGranterGrantsResponse;
                toProto(message: _9.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryGranterGrantsResponse): _9.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _9.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryGranteeGrantsRequest;
                fromJSON(object: any): _9.QueryGranteeGrantsRequest;
                toJSON(message: _9.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: {
                    grantee?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _9.QueryGranteeGrantsRequest;
                fromAmino(object: _9.QueryGranteeGrantsRequestAmino): _9.QueryGranteeGrantsRequest;
                toAmino(message: _9.QueryGranteeGrantsRequest): _9.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _9.QueryGranteeGrantsRequestAminoMsg): _9.QueryGranteeGrantsRequest;
                toAminoMsg(message: _9.QueryGranteeGrantsRequest): _9.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _9.QueryGranteeGrantsRequestProtoMsg): _9.QueryGranteeGrantsRequest;
                toProto(message: _9.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryGranteeGrantsRequest): _9.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _9.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryGranteeGrantsResponse;
                fromJSON(object: any): _9.QueryGranteeGrantsResponse;
                toJSON(message: _9.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: {
                    grants?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        } | {
                            $typeUrl?: string;
                            spend_limit?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        } | {
                            $typeUrl?: string;
                            max_tokens?: {
                                denom?: string;
                                amount?: string;
                            };
                            allow_list?: {
                                address?: string[];
                            };
                            deny_list?: {
                                address?: string[];
                            };
                            authorization_type?: _41.AuthorizationType;
                        } | {
                            $typeUrl?: string;
                            msg?: string;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _9.QueryGranteeGrantsResponse;
                fromAmino(object: _9.QueryGranteeGrantsResponseAmino): _9.QueryGranteeGrantsResponse;
                toAmino(message: _9.QueryGranteeGrantsResponse): _9.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _9.QueryGranteeGrantsResponseAminoMsg): _9.QueryGranteeGrantsResponse;
                toAminoMsg(message: _9.QueryGranteeGrantsResponse): _9.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _9.QueryGranteeGrantsResponseProtoMsg): _9.QueryGranteeGrantsResponse;
                toProto(message: _9.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryGranteeGrantsResponse): _9.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                aminoType: string;
                encode(message: _8.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GenesisState;
                fromJSON(object: any): _8.GenesisState;
                toJSON(message: _8.GenesisState): unknown;
                fromPartial(object: {
                    authorization?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        } | {
                            $typeUrl?: string;
                            spend_limit?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        } | {
                            $typeUrl?: string;
                            max_tokens?: {
                                denom?: string;
                                amount?: string;
                            };
                            allow_list?: {
                                address?: string[];
                            };
                            deny_list?: {
                                address?: string[];
                            };
                            authorization_type?: _41.AuthorizationType;
                        } | {
                            $typeUrl?: string;
                            msg?: string;
                        };
                        expiration?: Date;
                    }[];
                }): _8.GenesisState;
                fromAmino(object: _8.GenesisStateAmino): _8.GenesisState;
                toAmino(message: _8.GenesisState): _8.GenesisStateAmino;
                fromAminoMsg(object: _8.GenesisStateAminoMsg): _8.GenesisState;
                toAminoMsg(message: _8.GenesisState): _8.GenesisStateAminoMsg;
                fromProtoMsg(message: _8.GenesisStateProtoMsg): _8.GenesisState;
                toProto(message: _8.GenesisState): Uint8Array;
                toProtoMsg(message: _8.GenesisState): _8.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                aminoType: string;
                encode(message: _7.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.EventGrant;
                fromJSON(object: any): _7.EventGrant;
                toJSON(message: _7.EventGrant): unknown;
                fromPartial(object: {
                    msg_type_url?: string;
                    granter?: string;
                    grantee?: string;
                }): _7.EventGrant;
                fromAmino(object: _7.EventGrantAmino): _7.EventGrant;
                toAmino(message: _7.EventGrant): _7.EventGrantAmino;
                fromAminoMsg(object: _7.EventGrantAminoMsg): _7.EventGrant;
                toAminoMsg(message: _7.EventGrant): _7.EventGrantAminoMsg;
                fromProtoMsg(message: _7.EventGrantProtoMsg): _7.EventGrant;
                toProto(message: _7.EventGrant): Uint8Array;
                toProtoMsg(message: _7.EventGrant): _7.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                aminoType: string;
                encode(message: _7.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.EventRevoke;
                fromJSON(object: any): _7.EventRevoke;
                toJSON(message: _7.EventRevoke): unknown;
                fromPartial(object: {
                    msg_type_url?: string;
                    granter?: string;
                    grantee?: string;
                }): _7.EventRevoke;
                fromAmino(object: _7.EventRevokeAmino): _7.EventRevoke;
                toAmino(message: _7.EventRevoke): _7.EventRevokeAmino;
                fromAminoMsg(object: _7.EventRevokeAminoMsg): _7.EventRevoke;
                toAminoMsg(message: _7.EventRevoke): _7.EventRevokeAminoMsg;
                fromProtoMsg(message: _7.EventRevokeProtoMsg): _7.EventRevoke;
                toProto(message: _7.EventRevoke): Uint8Array;
                toProtoMsg(message: _7.EventRevoke): _7.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                aminoType: string;
                encode(message: _6.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.GenericAuthorization;
                fromJSON(object: any): _6.GenericAuthorization;
                toJSON(message: _6.GenericAuthorization): unknown;
                fromPartial(object: {
                    $typeUrl?: string;
                    msg?: string;
                }): _6.GenericAuthorization;
                fromAmino(object: _6.GenericAuthorizationAmino): _6.GenericAuthorization;
                toAmino(message: _6.GenericAuthorization): _6.GenericAuthorizationAmino;
                fromAminoMsg(object: _6.GenericAuthorizationAminoMsg): _6.GenericAuthorization;
                toAminoMsg(message: _6.GenericAuthorization): _6.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _6.GenericAuthorizationProtoMsg): _6.GenericAuthorization;
                toProto(message: _6.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _6.GenericAuthorization): _6.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                aminoType: string;
                encode(message: _6.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.Grant;
                fromJSON(object: any): _6.Grant;
                toJSON(message: _6.Grant): unknown;
                fromPartial(object: {
                    authorization?: {
                        $typeUrl?: string;
                        type_url?: string;
                        value?: Uint8Array;
                    } | {
                        $typeUrl?: string;
                        spend_limit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    } | {
                        $typeUrl?: string;
                        max_tokens?: {
                            denom?: string;
                            amount?: string;
                        };
                        allow_list?: {
                            address?: string[];
                        };
                        deny_list?: {
                            address?: string[];
                        };
                        authorization_type?: _41.AuthorizationType;
                    } | {
                        $typeUrl?: string;
                        msg?: string;
                    };
                    expiration?: Date;
                }): _6.Grant;
                fromAmino(object: _6.GrantAmino): _6.Grant;
                toAmino(message: _6.Grant): _6.GrantAmino;
                fromAminoMsg(object: _6.GrantAminoMsg): _6.Grant;
                toAminoMsg(message: _6.Grant): _6.GrantAminoMsg;
                fromProtoMsg(message: _6.GrantProtoMsg): _6.Grant;
                toProto(message: _6.Grant): Uint8Array;
                toProtoMsg(message: _6.Grant): _6.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                aminoType: string;
                encode(message: _6.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.GrantAuthorization;
                fromJSON(object: any): _6.GrantAuthorization;
                toJSON(message: _6.GrantAuthorization): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    authorization?: {
                        $typeUrl?: string;
                        type_url?: string;
                        value?: Uint8Array;
                    } | {
                        $typeUrl?: string;
                        spend_limit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    } | {
                        $typeUrl?: string;
                        max_tokens?: {
                            denom?: string;
                            amount?: string;
                        };
                        allow_list?: {
                            address?: string[];
                        };
                        deny_list?: {
                            address?: string[];
                        };
                        authorization_type?: _41.AuthorizationType;
                    } | {
                        $typeUrl?: string;
                        msg?: string;
                    };
                    expiration?: Date;
                }): _6.GrantAuthorization;
                fromAmino(object: _6.GrantAuthorizationAmino): _6.GrantAuthorization;
                toAmino(message: _6.GrantAuthorization): _6.GrantAuthorizationAmino;
                fromAminoMsg(object: _6.GrantAuthorizationAminoMsg): _6.GrantAuthorization;
                toAminoMsg(message: _6.GrantAuthorization): _6.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _6.GrantAuthorizationProtoMsg): _6.GrantAuthorization;
                toProto(message: _6.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _6.GrantAuthorization): _6.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                aminoType: string;
                encode(message: _6.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.GrantQueueItem;
                fromJSON(object: any): _6.GrantQueueItem;
                toJSON(message: _6.GrantQueueItem): unknown;
                fromPartial(object: {
                    msg_type_urls?: string[];
                }): _6.GrantQueueItem;
                fromAmino(object: _6.GrantQueueItemAmino): _6.GrantQueueItem;
                toAmino(message: _6.GrantQueueItem): _6.GrantQueueItemAmino;
                fromAminoMsg(object: _6.GrantQueueItemAminoMsg): _6.GrantQueueItem;
                toAminoMsg(message: _6.GrantQueueItem): _6.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _6.GrantQueueItemProtoMsg): _6.GrantQueueItem;
                toProto(message: _6.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _6.GrantQueueItem): _6.GrantQueueItemProtoMsg;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            Msg: typeof _166.Msg;
            Query: typeof _157.Query;
            QueryClientImpl: typeof _157.QueryClientImpl;
            LCDQueryClient: typeof _147.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _15.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _15.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _15.MsgSend): {
                        typeUrl: string;
                        value: _15.MsgSend;
                    };
                    multiSend(value: _15.MsgMultiSend): {
                        typeUrl: string;
                        value: _15.MsgMultiSend;
                    };
                };
                toJSON: {
                    send(value: _15.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _15.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _15.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _15.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _15.MsgSend): {
                        typeUrl: string;
                        value: _15.MsgSend;
                    };
                    multiSend(value: _15.MsgMultiSend): {
                        typeUrl: string;
                        value: _15.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _15.MsgSend) => _15.MsgSendAmino;
                    fromAmino: (object: _15.MsgSendAmino) => _15.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _15.MsgMultiSend) => _15.MsgMultiSendAmino;
                    fromAmino: (object: _15.MsgMultiSendAmino) => _15.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                aminoType: string;
                encode(message: _15.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgSend;
                fromJSON(object: any): _15.MsgSend;
                toJSON(message: _15.MsgSend): unknown;
                fromPartial(object: {
                    from_address?: string;
                    to_address?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _15.MsgSend;
                fromAmino(object: _15.MsgSendAmino): _15.MsgSend;
                toAmino(message: _15.MsgSend): _15.MsgSendAmino;
                fromAminoMsg(object: _15.MsgSendAminoMsg): _15.MsgSend;
                toAminoMsg(message: _15.MsgSend): _15.MsgSendAminoMsg;
                fromProtoMsg(message: _15.MsgSendProtoMsg): _15.MsgSend;
                toProto(message: _15.MsgSend): Uint8Array;
                toProtoMsg(message: _15.MsgSend): _15.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                aminoType: string;
                encode(_: _15.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgSendResponse;
                fromJSON(_: any): _15.MsgSendResponse;
                toJSON(_: _15.MsgSendResponse): unknown;
                fromPartial(_: {}): _15.MsgSendResponse;
                fromAmino(_: _15.MsgSendResponseAmino): _15.MsgSendResponse;
                toAmino(_: _15.MsgSendResponse): _15.MsgSendResponseAmino;
                fromAminoMsg(object: _15.MsgSendResponseAminoMsg): _15.MsgSendResponse;
                toAminoMsg(message: _15.MsgSendResponse): _15.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _15.MsgSendResponseProtoMsg): _15.MsgSendResponse;
                toProto(message: _15.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _15.MsgSendResponse): _15.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                aminoType: string;
                encode(message: _15.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgMultiSend;
                fromJSON(object: any): _15.MsgMultiSend;
                toJSON(message: _15.MsgMultiSend): unknown;
                fromPartial(object: {
                    inputs?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    outputs?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _15.MsgMultiSend;
                fromAmino(object: _15.MsgMultiSendAmino): _15.MsgMultiSend;
                toAmino(message: _15.MsgMultiSend): _15.MsgMultiSendAmino;
                fromAminoMsg(object: _15.MsgMultiSendAminoMsg): _15.MsgMultiSend;
                toAminoMsg(message: _15.MsgMultiSend): _15.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _15.MsgMultiSendProtoMsg): _15.MsgMultiSend;
                toProto(message: _15.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _15.MsgMultiSend): _15.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                aminoType: string;
                encode(_: _15.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgMultiSendResponse;
                fromJSON(_: any): _15.MsgMultiSendResponse;
                toJSON(_: _15.MsgMultiSendResponse): unknown;
                fromPartial(_: {}): _15.MsgMultiSendResponse;
                fromAmino(_: _15.MsgMultiSendResponseAmino): _15.MsgMultiSendResponse;
                toAmino(_: _15.MsgMultiSendResponse): _15.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _15.MsgMultiSendResponseAminoMsg): _15.MsgMultiSendResponse;
                toAminoMsg(message: _15.MsgMultiSendResponse): _15.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _15.MsgMultiSendResponseProtoMsg): _15.MsgMultiSendResponse;
                toProto(message: _15.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _15.MsgMultiSendResponse): _15.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _14.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryBalanceRequest;
                fromJSON(object: any): _14.QueryBalanceRequest;
                toJSON(message: _14.QueryBalanceRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    denom?: string;
                }): _14.QueryBalanceRequest;
                fromAmino(object: _14.QueryBalanceRequestAmino): _14.QueryBalanceRequest;
                toAmino(message: _14.QueryBalanceRequest): _14.QueryBalanceRequestAmino;
                fromAminoMsg(object: _14.QueryBalanceRequestAminoMsg): _14.QueryBalanceRequest;
                toAminoMsg(message: _14.QueryBalanceRequest): _14.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _14.QueryBalanceRequestProtoMsg): _14.QueryBalanceRequest;
                toProto(message: _14.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _14.QueryBalanceRequest): _14.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _14.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryBalanceResponse;
                fromJSON(object: any): _14.QueryBalanceResponse;
                toJSON(message: _14.QueryBalanceResponse): unknown;
                fromPartial(object: {
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _14.QueryBalanceResponse;
                fromAmino(object: _14.QueryBalanceResponseAmino): _14.QueryBalanceResponse;
                toAmino(message: _14.QueryBalanceResponse): _14.QueryBalanceResponseAmino;
                fromAminoMsg(object: _14.QueryBalanceResponseAminoMsg): _14.QueryBalanceResponse;
                toAminoMsg(message: _14.QueryBalanceResponse): _14.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _14.QueryBalanceResponseProtoMsg): _14.QueryBalanceResponse;
                toProto(message: _14.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _14.QueryBalanceResponse): _14.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _14.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryAllBalancesRequest;
                fromJSON(object: any): _14.QueryAllBalancesRequest;
                toJSON(message: _14.QueryAllBalancesRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _14.QueryAllBalancesRequest;
                fromAmino(object: _14.QueryAllBalancesRequestAmino): _14.QueryAllBalancesRequest;
                toAmino(message: _14.QueryAllBalancesRequest): _14.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _14.QueryAllBalancesRequestAminoMsg): _14.QueryAllBalancesRequest;
                toAminoMsg(message: _14.QueryAllBalancesRequest): _14.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _14.QueryAllBalancesRequestProtoMsg): _14.QueryAllBalancesRequest;
                toProto(message: _14.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _14.QueryAllBalancesRequest): _14.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _14.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryAllBalancesResponse;
                fromJSON(object: any): _14.QueryAllBalancesResponse;
                toJSON(message: _14.QueryAllBalancesResponse): unknown;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _14.QueryAllBalancesResponse;
                fromAmino(object: _14.QueryAllBalancesResponseAmino): _14.QueryAllBalancesResponse;
                toAmino(message: _14.QueryAllBalancesResponse): _14.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _14.QueryAllBalancesResponseAminoMsg): _14.QueryAllBalancesResponse;
                toAminoMsg(message: _14.QueryAllBalancesResponse): _14.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _14.QueryAllBalancesResponseProtoMsg): _14.QueryAllBalancesResponse;
                toProto(message: _14.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _14.QueryAllBalancesResponse): _14.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _14.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QuerySpendableBalancesRequest;
                fromJSON(object: any): _14.QuerySpendableBalancesRequest;
                toJSON(message: _14.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _14.QuerySpendableBalancesRequest;
                fromAmino(object: _14.QuerySpendableBalancesRequestAmino): _14.QuerySpendableBalancesRequest;
                toAmino(message: _14.QuerySpendableBalancesRequest): _14.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _14.QuerySpendableBalancesRequestAminoMsg): _14.QuerySpendableBalancesRequest;
                toAminoMsg(message: _14.QuerySpendableBalancesRequest): _14.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _14.QuerySpendableBalancesRequestProtoMsg): _14.QuerySpendableBalancesRequest;
                toProto(message: _14.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _14.QuerySpendableBalancesRequest): _14.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _14.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QuerySpendableBalancesResponse;
                fromJSON(object: any): _14.QuerySpendableBalancesResponse;
                toJSON(message: _14.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _14.QuerySpendableBalancesResponse;
                fromAmino(object: _14.QuerySpendableBalancesResponseAmino): _14.QuerySpendableBalancesResponse;
                toAmino(message: _14.QuerySpendableBalancesResponse): _14.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _14.QuerySpendableBalancesResponseAminoMsg): _14.QuerySpendableBalancesResponse;
                toAminoMsg(message: _14.QuerySpendableBalancesResponse): _14.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _14.QuerySpendableBalancesResponseProtoMsg): _14.QuerySpendableBalancesResponse;
                toProto(message: _14.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _14.QuerySpendableBalancesResponse): _14.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _14.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryTotalSupplyRequest;
                fromJSON(object: any): _14.QueryTotalSupplyRequest;
                toJSON(message: _14.QueryTotalSupplyRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _14.QueryTotalSupplyRequest;
                fromAmino(object: _14.QueryTotalSupplyRequestAmino): _14.QueryTotalSupplyRequest;
                toAmino(message: _14.QueryTotalSupplyRequest): _14.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _14.QueryTotalSupplyRequestAminoMsg): _14.QueryTotalSupplyRequest;
                toAminoMsg(message: _14.QueryTotalSupplyRequest): _14.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _14.QueryTotalSupplyRequestProtoMsg): _14.QueryTotalSupplyRequest;
                toProto(message: _14.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _14.QueryTotalSupplyRequest): _14.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _14.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryTotalSupplyResponse;
                fromJSON(object: any): _14.QueryTotalSupplyResponse;
                toJSON(message: _14.QueryTotalSupplyResponse): unknown;
                fromPartial(object: {
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _14.QueryTotalSupplyResponse;
                fromAmino(object: _14.QueryTotalSupplyResponseAmino): _14.QueryTotalSupplyResponse;
                toAmino(message: _14.QueryTotalSupplyResponse): _14.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _14.QueryTotalSupplyResponseAminoMsg): _14.QueryTotalSupplyResponse;
                toAminoMsg(message: _14.QueryTotalSupplyResponse): _14.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _14.QueryTotalSupplyResponseProtoMsg): _14.QueryTotalSupplyResponse;
                toProto(message: _14.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _14.QueryTotalSupplyResponse): _14.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _14.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QuerySupplyOfRequest;
                fromJSON(object: any): _14.QuerySupplyOfRequest;
                toJSON(message: _14.QuerySupplyOfRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _14.QuerySupplyOfRequest;
                fromAmino(object: _14.QuerySupplyOfRequestAmino): _14.QuerySupplyOfRequest;
                toAmino(message: _14.QuerySupplyOfRequest): _14.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _14.QuerySupplyOfRequestAminoMsg): _14.QuerySupplyOfRequest;
                toAminoMsg(message: _14.QuerySupplyOfRequest): _14.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _14.QuerySupplyOfRequestProtoMsg): _14.QuerySupplyOfRequest;
                toProto(message: _14.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _14.QuerySupplyOfRequest): _14.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _14.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QuerySupplyOfResponse;
                fromJSON(object: any): _14.QuerySupplyOfResponse;
                toJSON(message: _14.QuerySupplyOfResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _14.QuerySupplyOfResponse;
                fromAmino(object: _14.QuerySupplyOfResponseAmino): _14.QuerySupplyOfResponse;
                toAmino(message: _14.QuerySupplyOfResponse): _14.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _14.QuerySupplyOfResponseAminoMsg): _14.QuerySupplyOfResponse;
                toAminoMsg(message: _14.QuerySupplyOfResponse): _14.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _14.QuerySupplyOfResponseProtoMsg): _14.QuerySupplyOfResponse;
                toProto(message: _14.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _14.QuerySupplyOfResponse): _14.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                aminoType: string;
                encode(_: _14.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryParamsRequest;
                fromJSON(_: any): _14.QueryParamsRequest;
                toJSON(_: _14.QueryParamsRequest): unknown;
                fromPartial(_: {}): _14.QueryParamsRequest;
                fromAmino(_: _14.QueryParamsRequestAmino): _14.QueryParamsRequest;
                toAmino(_: _14.QueryParamsRequest): _14.QueryParamsRequestAmino;
                fromAminoMsg(object: _14.QueryParamsRequestAminoMsg): _14.QueryParamsRequest;
                toAminoMsg(message: _14.QueryParamsRequest): _14.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _14.QueryParamsRequestProtoMsg): _14.QueryParamsRequest;
                toProto(message: _14.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _14.QueryParamsRequest): _14.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _14.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryParamsResponse;
                fromJSON(object: any): _14.QueryParamsResponse;
                toJSON(message: _14.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        send_enabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        default_send_enabled?: boolean;
                    };
                }): _14.QueryParamsResponse;
                fromAmino(object: _14.QueryParamsResponseAmino): _14.QueryParamsResponse;
                toAmino(message: _14.QueryParamsResponse): _14.QueryParamsResponseAmino;
                fromAminoMsg(object: _14.QueryParamsResponseAminoMsg): _14.QueryParamsResponse;
                toAminoMsg(message: _14.QueryParamsResponse): _14.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _14.QueryParamsResponseProtoMsg): _14.QueryParamsResponse;
                toProto(message: _14.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _14.QueryParamsResponse): _14.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _14.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryDenomsMetadataRequest;
                fromJSON(object: any): _14.QueryDenomsMetadataRequest;
                toJSON(message: _14.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _14.QueryDenomsMetadataRequest;
                fromAmino(object: _14.QueryDenomsMetadataRequestAmino): _14.QueryDenomsMetadataRequest;
                toAmino(message: _14.QueryDenomsMetadataRequest): _14.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _14.QueryDenomsMetadataRequestAminoMsg): _14.QueryDenomsMetadataRequest;
                toAminoMsg(message: _14.QueryDenomsMetadataRequest): _14.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _14.QueryDenomsMetadataRequestProtoMsg): _14.QueryDenomsMetadataRequest;
                toProto(message: _14.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _14.QueryDenomsMetadataRequest): _14.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _14.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryDenomsMetadataResponse;
                fromJSON(object: any): _14.QueryDenomsMetadataResponse;
                toJSON(message: _14.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: {
                    metadatas?: {
                        description?: string;
                        denom_units?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uri_hash?: string;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _14.QueryDenomsMetadataResponse;
                fromAmino(object: _14.QueryDenomsMetadataResponseAmino): _14.QueryDenomsMetadataResponse;
                toAmino(message: _14.QueryDenomsMetadataResponse): _14.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _14.QueryDenomsMetadataResponseAminoMsg): _14.QueryDenomsMetadataResponse;
                toAminoMsg(message: _14.QueryDenomsMetadataResponse): _14.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _14.QueryDenomsMetadataResponseProtoMsg): _14.QueryDenomsMetadataResponse;
                toProto(message: _14.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _14.QueryDenomsMetadataResponse): _14.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _14.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryDenomMetadataRequest;
                fromJSON(object: any): _14.QueryDenomMetadataRequest;
                toJSON(message: _14.QueryDenomMetadataRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _14.QueryDenomMetadataRequest;
                fromAmino(object: _14.QueryDenomMetadataRequestAmino): _14.QueryDenomMetadataRequest;
                toAmino(message: _14.QueryDenomMetadataRequest): _14.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _14.QueryDenomMetadataRequestAminoMsg): _14.QueryDenomMetadataRequest;
                toAminoMsg(message: _14.QueryDenomMetadataRequest): _14.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _14.QueryDenomMetadataRequestProtoMsg): _14.QueryDenomMetadataRequest;
                toProto(message: _14.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _14.QueryDenomMetadataRequest): _14.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _14.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryDenomMetadataResponse;
                fromJSON(object: any): _14.QueryDenomMetadataResponse;
                toJSON(message: _14.QueryDenomMetadataResponse): unknown;
                fromPartial(object: {
                    metadata?: {
                        description?: string;
                        denom_units?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uri_hash?: string;
                    };
                }): _14.QueryDenomMetadataResponse;
                fromAmino(object: _14.QueryDenomMetadataResponseAmino): _14.QueryDenomMetadataResponse;
                toAmino(message: _14.QueryDenomMetadataResponse): _14.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _14.QueryDenomMetadataResponseAminoMsg): _14.QueryDenomMetadataResponse;
                toAminoMsg(message: _14.QueryDenomMetadataResponse): _14.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _14.QueryDenomMetadataResponseProtoMsg): _14.QueryDenomMetadataResponse;
                toProto(message: _14.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _14.QueryDenomMetadataResponse): _14.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _14.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryDenomOwnersRequest;
                fromJSON(object: any): _14.QueryDenomOwnersRequest;
                toJSON(message: _14.QueryDenomOwnersRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _14.QueryDenomOwnersRequest;
                fromAmino(object: _14.QueryDenomOwnersRequestAmino): _14.QueryDenomOwnersRequest;
                toAmino(message: _14.QueryDenomOwnersRequest): _14.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _14.QueryDenomOwnersRequestAminoMsg): _14.QueryDenomOwnersRequest;
                toAminoMsg(message: _14.QueryDenomOwnersRequest): _14.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _14.QueryDenomOwnersRequestProtoMsg): _14.QueryDenomOwnersRequest;
                toProto(message: _14.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _14.QueryDenomOwnersRequest): _14.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                aminoType: string;
                encode(message: _14.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.DenomOwner;
                fromJSON(object: any): _14.DenomOwner;
                toJSON(message: _14.DenomOwner): unknown;
                fromPartial(object: {
                    address?: string;
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _14.DenomOwner;
                fromAmino(object: _14.DenomOwnerAmino): _14.DenomOwner;
                toAmino(message: _14.DenomOwner): _14.DenomOwnerAmino;
                fromAminoMsg(object: _14.DenomOwnerAminoMsg): _14.DenomOwner;
                toAminoMsg(message: _14.DenomOwner): _14.DenomOwnerAminoMsg;
                fromProtoMsg(message: _14.DenomOwnerProtoMsg): _14.DenomOwner;
                toProto(message: _14.DenomOwner): Uint8Array;
                toProtoMsg(message: _14.DenomOwner): _14.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _14.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryDenomOwnersResponse;
                fromJSON(object: any): _14.QueryDenomOwnersResponse;
                toJSON(message: _14.QueryDenomOwnersResponse): unknown;
                fromPartial(object: {
                    denom_owners?: {
                        address?: string;
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _14.QueryDenomOwnersResponse;
                fromAmino(object: _14.QueryDenomOwnersResponseAmino): _14.QueryDenomOwnersResponse;
                toAmino(message: _14.QueryDenomOwnersResponse): _14.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _14.QueryDenomOwnersResponseAminoMsg): _14.QueryDenomOwnersResponse;
                toAminoMsg(message: _14.QueryDenomOwnersResponse): _14.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _14.QueryDenomOwnersResponseProtoMsg): _14.QueryDenomOwnersResponse;
                toProto(message: _14.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _14.QueryDenomOwnersResponse): _14.QueryDenomOwnersResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                aminoType: string;
                encode(message: _13.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.GenesisState;
                fromJSON(object: any): _13.GenesisState;
                toJSON(message: _13.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        send_enabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        default_send_enabled?: boolean;
                    };
                    balances?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    denom_metadata?: {
                        description?: string;
                        denom_units?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uri_hash?: string;
                    }[];
                }): _13.GenesisState;
                fromAmino(object: _13.GenesisStateAmino): _13.GenesisState;
                toAmino(message: _13.GenesisState): _13.GenesisStateAmino;
                fromAminoMsg(object: _13.GenesisStateAminoMsg): _13.GenesisState;
                toAminoMsg(message: _13.GenesisState): _13.GenesisStateAminoMsg;
                fromProtoMsg(message: _13.GenesisStateProtoMsg): _13.GenesisState;
                toProto(message: _13.GenesisState): Uint8Array;
                toProtoMsg(message: _13.GenesisState): _13.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                aminoType: string;
                encode(message: _13.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Balance;
                fromJSON(object: any): _13.Balance;
                toJSON(message: _13.Balance): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _13.Balance;
                fromAmino(object: _13.BalanceAmino): _13.Balance;
                toAmino(message: _13.Balance): _13.BalanceAmino;
                fromAminoMsg(object: _13.BalanceAminoMsg): _13.Balance;
                toAminoMsg(message: _13.Balance): _13.BalanceAminoMsg;
                fromProtoMsg(message: _13.BalanceProtoMsg): _13.Balance;
                toProto(message: _13.Balance): Uint8Array;
                toProtoMsg(message: _13.Balance): _13.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                aminoType: string;
                encode(message: _12.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Params;
                fromJSON(object: any): _12.Params;
                toJSON(message: _12.Params): unknown;
                fromPartial(object: {
                    send_enabled?: {
                        denom?: string;
                        enabled?: boolean;
                    }[];
                    default_send_enabled?: boolean;
                }): _12.Params;
                fromAmino(object: _12.ParamsAmino): _12.Params;
                toAmino(message: _12.Params): _12.ParamsAmino;
                fromAminoMsg(object: _12.ParamsAminoMsg): _12.Params;
                toAminoMsg(message: _12.Params): _12.ParamsAminoMsg;
                fromProtoMsg(message: _12.ParamsProtoMsg): _12.Params;
                toProto(message: _12.Params): Uint8Array;
                toProtoMsg(message: _12.Params): _12.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                aminoType: string;
                encode(message: _12.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.SendEnabled;
                fromJSON(object: any): _12.SendEnabled;
                toJSON(message: _12.SendEnabled): unknown;
                fromPartial(object: {
                    denom?: string;
                    enabled?: boolean;
                }): _12.SendEnabled;
                fromAmino(object: _12.SendEnabledAmino): _12.SendEnabled;
                toAmino(message: _12.SendEnabled): _12.SendEnabledAmino;
                fromAminoMsg(object: _12.SendEnabledAminoMsg): _12.SendEnabled;
                toAminoMsg(message: _12.SendEnabled): _12.SendEnabledAminoMsg;
                fromProtoMsg(message: _12.SendEnabledProtoMsg): _12.SendEnabled;
                toProto(message: _12.SendEnabled): Uint8Array;
                toProtoMsg(message: _12.SendEnabled): _12.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                aminoType: string;
                encode(message: _12.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Input;
                fromJSON(object: any): _12.Input;
                toJSON(message: _12.Input): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _12.Input;
                fromAmino(object: _12.InputAmino): _12.Input;
                toAmino(message: _12.Input): _12.InputAmino;
                fromAminoMsg(object: _12.InputAminoMsg): _12.Input;
                toAminoMsg(message: _12.Input): _12.InputAminoMsg;
                fromProtoMsg(message: _12.InputProtoMsg): _12.Input;
                toProto(message: _12.Input): Uint8Array;
                toProtoMsg(message: _12.Input): _12.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                aminoType: string;
                encode(message: _12.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Output;
                fromJSON(object: any): _12.Output;
                toJSON(message: _12.Output): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _12.Output;
                fromAmino(object: _12.OutputAmino): _12.Output;
                toAmino(message: _12.Output): _12.OutputAmino;
                fromAminoMsg(object: _12.OutputAminoMsg): _12.Output;
                toAminoMsg(message: _12.Output): _12.OutputAminoMsg;
                fromProtoMsg(message: _12.OutputProtoMsg): _12.Output;
                toProto(message: _12.Output): Uint8Array;
                toProtoMsg(message: _12.Output): _12.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                aminoType: string;
                encode(message: _12.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Supply;
                fromJSON(object: any): _12.Supply;
                toJSON(message: _12.Supply): unknown;
                fromPartial(object: {
                    $typeUrl?: string;
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _12.Supply;
                fromAmino(object: _12.SupplyAmino): _12.Supply;
                toAmino(message: _12.Supply): _12.SupplyAmino;
                fromAminoMsg(object: _12.SupplyAminoMsg): _12.Supply;
                toAminoMsg(message: _12.Supply): _12.SupplyAminoMsg;
                fromProtoMsg(message: _12.SupplyProtoMsg): _12.Supply;
                toProto(message: _12.Supply): Uint8Array;
                toProtoMsg(message: _12.Supply): _12.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                aminoType: string;
                encode(message: _12.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.DenomUnit;
                fromJSON(object: any): _12.DenomUnit;
                toJSON(message: _12.DenomUnit): unknown;
                fromPartial(object: {
                    denom?: string;
                    exponent?: number;
                    aliases?: string[];
                }): _12.DenomUnit;
                fromAmino(object: _12.DenomUnitAmino): _12.DenomUnit;
                toAmino(message: _12.DenomUnit): _12.DenomUnitAmino;
                fromAminoMsg(object: _12.DenomUnitAminoMsg): _12.DenomUnit;
                toAminoMsg(message: _12.DenomUnit): _12.DenomUnitAminoMsg;
                fromProtoMsg(message: _12.DenomUnitProtoMsg): _12.DenomUnit;
                toProto(message: _12.DenomUnit): Uint8Array;
                toProtoMsg(message: _12.DenomUnit): _12.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                aminoType: string;
                encode(message: _12.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Metadata;
                fromJSON(object: any): _12.Metadata;
                toJSON(message: _12.Metadata): unknown;
                fromPartial(object: {
                    description?: string;
                    denom_units?: {
                        denom?: string;
                        exponent?: number;
                        aliases?: string[];
                    }[];
                    base?: string;
                    display?: string;
                    name?: string;
                    symbol?: string;
                    uri?: string;
                    uri_hash?: string;
                }): _12.Metadata;
                fromAmino(object: _12.MetadataAmino): _12.Metadata;
                toAmino(message: _12.Metadata): _12.MetadataAmino;
                fromAminoMsg(object: _12.MetadataAminoMsg): _12.Metadata;
                toAminoMsg(message: _12.Metadata): _12.MetadataAminoMsg;
                fromProtoMsg(message: _12.MetadataProtoMsg): _12.Metadata;
                toProto(message: _12.Metadata): Uint8Array;
                toProtoMsg(message: _12.Metadata): _12.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                aminoType: string;
                encode(message: _11.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.SendAuthorization;
                fromJSON(object: any): _11.SendAuthorization;
                toJSON(message: _11.SendAuthorization): unknown;
                fromPartial(object: {
                    $typeUrl?: string;
                    spend_limit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _11.SendAuthorization;
                fromAmino(object: _11.SendAuthorizationAmino): _11.SendAuthorization;
                toAmino(message: _11.SendAuthorization): _11.SendAuthorizationAmino;
                fromAminoMsg(object: _11.SendAuthorizationAminoMsg): _11.SendAuthorization;
                toAminoMsg(message: _11.SendAuthorization): _11.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _11.SendAuthorizationProtoMsg): _11.SendAuthorization;
                toProto(message: _11.SendAuthorization): Uint8Array;
                toProtoMsg(message: _11.SendAuthorization): _11.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _16.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.TxResponse;
                    fromJSON(object: any): _16.TxResponse;
                    toJSON(message: _16.TxResponse): unknown;
                    fromPartial(object: {
                        height?: string | number | import("long").default;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        raw_log?: string;
                        logs?: {
                            msg_index?: number;
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
                        gas_wanted?: string | number | import("long").default;
                        gas_used?: string | number | import("long").default;
                        tx?: {
                            $typeUrl?: string;
                            type_url?: string;
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
                    }): _16.TxResponse;
                    fromAmino(object: _16.TxResponseAmino): _16.TxResponse;
                    toAmino(message: _16.TxResponse): _16.TxResponseAmino;
                    fromAminoMsg(object: _16.TxResponseAminoMsg): _16.TxResponse;
                    toAminoMsg(message: _16.TxResponse): _16.TxResponseAminoMsg;
                    fromProtoMsg(message: _16.TxResponseProtoMsg): _16.TxResponse;
                    toProto(message: _16.TxResponse): Uint8Array;
                    toProtoMsg(message: _16.TxResponse): _16.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _16.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.ABCIMessageLog;
                    fromJSON(object: any): _16.ABCIMessageLog;
                    toJSON(message: _16.ABCIMessageLog): unknown;
                    fromPartial(object: {
                        msg_index?: number;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                        }[];
                    }): _16.ABCIMessageLog;
                    fromAmino(object: _16.ABCIMessageLogAmino): _16.ABCIMessageLog;
                    toAmino(message: _16.ABCIMessageLog): _16.ABCIMessageLogAmino;
                    fromAminoMsg(object: _16.ABCIMessageLogAminoMsg): _16.ABCIMessageLog;
                    toAminoMsg(message: _16.ABCIMessageLog): _16.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _16.ABCIMessageLogProtoMsg): _16.ABCIMessageLog;
                    toProto(message: _16.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _16.ABCIMessageLog): _16.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _16.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.StringEvent;
                    fromJSON(object: any): _16.StringEvent;
                    toJSON(message: _16.StringEvent): unknown;
                    fromPartial(object: {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    }): _16.StringEvent;
                    fromAmino(object: _16.StringEventAmino): _16.StringEvent;
                    toAmino(message: _16.StringEvent): _16.StringEventAmino;
                    fromAminoMsg(object: _16.StringEventAminoMsg): _16.StringEvent;
                    toAminoMsg(message: _16.StringEvent): _16.StringEventAminoMsg;
                    fromProtoMsg(message: _16.StringEventProtoMsg): _16.StringEvent;
                    toProto(message: _16.StringEvent): Uint8Array;
                    toProtoMsg(message: _16.StringEvent): _16.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _16.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.Attribute;
                    fromJSON(object: any): _16.Attribute;
                    toJSON(message: _16.Attribute): unknown;
                    fromPartial(object: {
                        key?: string;
                        value?: string;
                    }): _16.Attribute;
                    fromAmino(object: _16.AttributeAmino): _16.Attribute;
                    toAmino(message: _16.Attribute): _16.AttributeAmino;
                    fromAminoMsg(object: _16.AttributeAminoMsg): _16.Attribute;
                    toAminoMsg(message: _16.Attribute): _16.AttributeAminoMsg;
                    fromProtoMsg(message: _16.AttributeProtoMsg): _16.Attribute;
                    toProto(message: _16.Attribute): Uint8Array;
                    toProtoMsg(message: _16.Attribute): _16.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _16.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.GasInfo;
                    fromJSON(object: any): _16.GasInfo;
                    toJSON(message: _16.GasInfo): unknown;
                    fromPartial(object: {
                        gas_wanted?: string | number | import("long").default;
                        gas_used?: string | number | import("long").default;
                    }): _16.GasInfo;
                    fromAmino(object: _16.GasInfoAmino): _16.GasInfo;
                    toAmino(message: _16.GasInfo): _16.GasInfoAmino;
                    fromAminoMsg(object: _16.GasInfoAminoMsg): _16.GasInfo;
                    toAminoMsg(message: _16.GasInfo): _16.GasInfoAminoMsg;
                    fromProtoMsg(message: _16.GasInfoProtoMsg): _16.GasInfo;
                    toProto(message: _16.GasInfo): Uint8Array;
                    toProtoMsg(message: _16.GasInfo): _16.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _16.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.Result;
                    fromJSON(object: any): _16.Result;
                    toJSON(message: _16.Result): unknown;
                    fromPartial(object: {
                        data?: Uint8Array;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                        msg_responses?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        }[];
                    }): _16.Result;
                    fromAmino(object: _16.ResultAmino): _16.Result;
                    toAmino(message: _16.Result): _16.ResultAmino;
                    fromAminoMsg(object: _16.ResultAminoMsg): _16.Result;
                    toAminoMsg(message: _16.Result): _16.ResultAminoMsg;
                    fromProtoMsg(message: _16.ResultProtoMsg): _16.Result;
                    toProto(message: _16.Result): Uint8Array;
                    toProtoMsg(message: _16.Result): _16.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _16.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.SimulationResponse;
                    fromJSON(object: any): _16.SimulationResponse;
                    toJSON(message: _16.SimulationResponse): unknown;
                    fromPartial(object: {
                        gas_info?: {
                            gas_wanted?: string | number | import("long").default;
                            gas_used?: string | number | import("long").default;
                        };
                        result?: {
                            data?: Uint8Array;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    index?: boolean;
                                }[];
                            }[];
                            msg_responses?: {
                                $typeUrl?: string;
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                        };
                    }): _16.SimulationResponse;
                    fromAmino(object: _16.SimulationResponseAmino): _16.SimulationResponse;
                    toAmino(message: _16.SimulationResponse): _16.SimulationResponseAmino;
                    fromAminoMsg(object: _16.SimulationResponseAminoMsg): _16.SimulationResponse;
                    toAminoMsg(message: _16.SimulationResponse): _16.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _16.SimulationResponseProtoMsg): _16.SimulationResponse;
                    toProto(message: _16.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _16.SimulationResponse): _16.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _16.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgData;
                    fromJSON(object: any): _16.MsgData;
                    toJSON(message: _16.MsgData): unknown;
                    fromPartial(object: {
                        msg_type?: string;
                        data?: Uint8Array;
                    }): _16.MsgData;
                    fromAmino(object: _16.MsgDataAmino): _16.MsgData;
                    toAmino(message: _16.MsgData): _16.MsgDataAmino;
                    fromAminoMsg(object: _16.MsgDataAminoMsg): _16.MsgData;
                    toAminoMsg(message: _16.MsgData): _16.MsgDataAminoMsg;
                    fromProtoMsg(message: _16.MsgDataProtoMsg): _16.MsgData;
                    toProto(message: _16.MsgData): Uint8Array;
                    toProtoMsg(message: _16.MsgData): _16.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _16.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.TxMsgData;
                    fromJSON(object: any): _16.TxMsgData;
                    toJSON(message: _16.TxMsgData): unknown;
                    fromPartial(object: {
                        data?: {
                            msg_type?: string;
                            data?: Uint8Array;
                        }[];
                        msg_responses?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        }[];
                    }): _16.TxMsgData;
                    fromAmino(object: _16.TxMsgDataAmino): _16.TxMsgData;
                    toAmino(message: _16.TxMsgData): _16.TxMsgDataAmino;
                    fromAminoMsg(object: _16.TxMsgDataAminoMsg): _16.TxMsgData;
                    toAminoMsg(message: _16.TxMsgData): _16.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _16.TxMsgDataProtoMsg): _16.TxMsgData;
                    toProto(message: _16.TxMsgData): Uint8Array;
                    toProtoMsg(message: _16.TxMsgData): _16.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _16.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.SearchTxsResult;
                    fromJSON(object: any): _16.SearchTxsResult;
                    toJSON(message: _16.SearchTxsResult): unknown;
                    fromPartial(object: {
                        total_count?: string | number | import("long").default;
                        count?: string | number | import("long").default;
                        page_number?: string | number | import("long").default;
                        page_total?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        txs?: {
                            height?: string | number | import("long").default;
                            txhash?: string;
                            codespace?: string;
                            code?: number;
                            data?: string;
                            raw_log?: string;
                            logs?: {
                                msg_index?: number;
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
                            gas_wanted?: string | number | import("long").default;
                            gas_used?: string | number | import("long").default;
                            tx?: {
                                $typeUrl?: string;
                                type_url?: string;
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
                        }[];
                    }): _16.SearchTxsResult;
                    fromAmino(object: _16.SearchTxsResultAmino): _16.SearchTxsResult;
                    toAmino(message: _16.SearchTxsResult): _16.SearchTxsResultAmino;
                    fromAminoMsg(object: _16.SearchTxsResultAminoMsg): _16.SearchTxsResult;
                    toAminoMsg(message: _16.SearchTxsResult): _16.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _16.SearchTxsResultProtoMsg): _16.SearchTxsResult;
                    toProto(message: _16.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _16.SearchTxsResult): _16.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _17.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.PageRequest;
                    fromJSON(object: any): _17.PageRequest;
                    toJSON(message: _17.PageRequest): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    }): _17.PageRequest;
                    fromAmino(object: _17.PageRequestAmino): _17.PageRequest;
                    toAmino(message: _17.PageRequest): _17.PageRequestAmino;
                    fromAminoMsg(object: _17.PageRequestAminoMsg): _17.PageRequest;
                    toAminoMsg(message: _17.PageRequest): _17.PageRequestAminoMsg;
                    fromProtoMsg(message: _17.PageRequestProtoMsg): _17.PageRequest;
                    toProto(message: _17.PageRequest): Uint8Array;
                    toProtoMsg(message: _17.PageRequest): _17.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _17.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.PageResponse;
                    fromJSON(object: any): _17.PageResponse;
                    toJSON(message: _17.PageResponse): unknown;
                    fromPartial(object: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    }): _17.PageResponse;
                    fromAmino(object: _17.PageResponseAmino): _17.PageResponse;
                    toAmino(message: _17.PageResponse): _17.PageResponseAmino;
                    fromAminoMsg(object: _17.PageResponseAminoMsg): _17.PageResponse;
                    toAminoMsg(message: _17.PageResponse): _17.PageResponseAminoMsg;
                    fromProtoMsg(message: _17.PageResponseProtoMsg): _17.PageResponse;
                    toProto(message: _17.PageResponse): Uint8Array;
                    toProtoMsg(message: _17.PageResponse): _17.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _18.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.AppDescriptor;
                    fromJSON(object: any): _18.AppDescriptor;
                    toJSON(message: _18.AppDescriptor): unknown;
                    fromPartial(object: {
                        authn?: {
                            sign_modes?: {
                                name?: string;
                                number?: number;
                                authn_info_provider_method_fullname?: string;
                            }[];
                        };
                        chain?: {
                            id?: string;
                        };
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interface_accepting_messages?: {
                                    fullname?: string;
                                    field_descriptor_names?: string[];
                                }[];
                                interface_implementers?: {
                                    fullname?: string;
                                    type_url?: string;
                                }[];
                            }[];
                        };
                        configuration?: {
                            bech32_account_address_prefix?: string;
                        };
                        query_services?: {
                            query_services?: {
                                fullname?: string;
                                is_module?: boolean;
                                methods?: {
                                    name?: string;
                                    full_query_path?: string;
                                }[];
                            }[];
                        };
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msg_type_url?: string;
                            }[];
                        };
                    }): _18.AppDescriptor;
                    fromAmino(object: _18.AppDescriptorAmino): _18.AppDescriptor;
                    toAmino(message: _18.AppDescriptor): _18.AppDescriptorAmino;
                    fromAminoMsg(object: _18.AppDescriptorAminoMsg): _18.AppDescriptor;
                    toAminoMsg(message: _18.AppDescriptor): _18.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _18.AppDescriptorProtoMsg): _18.AppDescriptor;
                    toProto(message: _18.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _18.AppDescriptor): _18.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _18.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.TxDescriptor;
                    fromJSON(object: any): _18.TxDescriptor;
                    toJSON(message: _18.TxDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        msgs?: {
                            msg_type_url?: string;
                        }[];
                    }): _18.TxDescriptor;
                    fromAmino(object: _18.TxDescriptorAmino): _18.TxDescriptor;
                    toAmino(message: _18.TxDescriptor): _18.TxDescriptorAmino;
                    fromAminoMsg(object: _18.TxDescriptorAminoMsg): _18.TxDescriptor;
                    toAminoMsg(message: _18.TxDescriptor): _18.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _18.TxDescriptorProtoMsg): _18.TxDescriptor;
                    toProto(message: _18.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _18.TxDescriptor): _18.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _18.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.AuthnDescriptor;
                    fromJSON(object: any): _18.AuthnDescriptor;
                    toJSON(message: _18.AuthnDescriptor): unknown;
                    fromPartial(object: {
                        sign_modes?: {
                            name?: string;
                            number?: number;
                            authn_info_provider_method_fullname?: string;
                        }[];
                    }): _18.AuthnDescriptor;
                    fromAmino(object: _18.AuthnDescriptorAmino): _18.AuthnDescriptor;
                    toAmino(message: _18.AuthnDescriptor): _18.AuthnDescriptorAmino;
                    fromAminoMsg(object: _18.AuthnDescriptorAminoMsg): _18.AuthnDescriptor;
                    toAminoMsg(message: _18.AuthnDescriptor): _18.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _18.AuthnDescriptorProtoMsg): _18.AuthnDescriptor;
                    toProto(message: _18.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _18.AuthnDescriptor): _18.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _18.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.SigningModeDescriptor;
                    fromJSON(object: any): _18.SigningModeDescriptor;
                    toJSON(message: _18.SigningModeDescriptor): unknown;
                    fromPartial(object: {
                        name?: string;
                        number?: number;
                        authn_info_provider_method_fullname?: string;
                    }): _18.SigningModeDescriptor;
                    fromAmino(object: _18.SigningModeDescriptorAmino): _18.SigningModeDescriptor;
                    toAmino(message: _18.SigningModeDescriptor): _18.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _18.SigningModeDescriptorAminoMsg): _18.SigningModeDescriptor;
                    toAminoMsg(message: _18.SigningModeDescriptor): _18.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _18.SigningModeDescriptorProtoMsg): _18.SigningModeDescriptor;
                    toProto(message: _18.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _18.SigningModeDescriptor): _18.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _18.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ChainDescriptor;
                    fromJSON(object: any): _18.ChainDescriptor;
                    toJSON(message: _18.ChainDescriptor): unknown;
                    fromPartial(object: {
                        id?: string;
                    }): _18.ChainDescriptor;
                    fromAmino(object: _18.ChainDescriptorAmino): _18.ChainDescriptor;
                    toAmino(message: _18.ChainDescriptor): _18.ChainDescriptorAmino;
                    fromAminoMsg(object: _18.ChainDescriptorAminoMsg): _18.ChainDescriptor;
                    toAminoMsg(message: _18.ChainDescriptor): _18.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _18.ChainDescriptorProtoMsg): _18.ChainDescriptor;
                    toProto(message: _18.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _18.ChainDescriptor): _18.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _18.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.CodecDescriptor;
                    fromJSON(object: any): _18.CodecDescriptor;
                    toJSON(message: _18.CodecDescriptor): unknown;
                    fromPartial(object: {
                        interfaces?: {
                            fullname?: string;
                            interface_accepting_messages?: {
                                fullname?: string;
                                field_descriptor_names?: string[];
                            }[];
                            interface_implementers?: {
                                fullname?: string;
                                type_url?: string;
                            }[];
                        }[];
                    }): _18.CodecDescriptor;
                    fromAmino(object: _18.CodecDescriptorAmino): _18.CodecDescriptor;
                    toAmino(message: _18.CodecDescriptor): _18.CodecDescriptorAmino;
                    fromAminoMsg(object: _18.CodecDescriptorAminoMsg): _18.CodecDescriptor;
                    toAminoMsg(message: _18.CodecDescriptor): _18.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _18.CodecDescriptorProtoMsg): _18.CodecDescriptor;
                    toProto(message: _18.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _18.CodecDescriptor): _18.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _18.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.InterfaceDescriptor;
                    fromJSON(object: any): _18.InterfaceDescriptor;
                    toJSON(message: _18.InterfaceDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        interface_accepting_messages?: {
                            fullname?: string;
                            field_descriptor_names?: string[];
                        }[];
                        interface_implementers?: {
                            fullname?: string;
                            type_url?: string;
                        }[];
                    }): _18.InterfaceDescriptor;
                    fromAmino(object: _18.InterfaceDescriptorAmino): _18.InterfaceDescriptor;
                    toAmino(message: _18.InterfaceDescriptor): _18.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _18.InterfaceDescriptorAminoMsg): _18.InterfaceDescriptor;
                    toAminoMsg(message: _18.InterfaceDescriptor): _18.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _18.InterfaceDescriptorProtoMsg): _18.InterfaceDescriptor;
                    toProto(message: _18.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _18.InterfaceDescriptor): _18.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _18.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _18.InterfaceImplementerDescriptor;
                    toJSON(message: _18.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        type_url?: string;
                    }): _18.InterfaceImplementerDescriptor;
                    fromAmino(object: _18.InterfaceImplementerDescriptorAmino): _18.InterfaceImplementerDescriptor;
                    toAmino(message: _18.InterfaceImplementerDescriptor): _18.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _18.InterfaceImplementerDescriptorAminoMsg): _18.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _18.InterfaceImplementerDescriptor): _18.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _18.InterfaceImplementerDescriptorProtoMsg): _18.InterfaceImplementerDescriptor;
                    toProto(message: _18.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _18.InterfaceImplementerDescriptor): _18.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _18.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _18.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _18.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        field_descriptor_names?: string[];
                    }): _18.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _18.InterfaceAcceptingMessageDescriptorAmino): _18.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _18.InterfaceAcceptingMessageDescriptor): _18.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _18.InterfaceAcceptingMessageDescriptorAminoMsg): _18.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _18.InterfaceAcceptingMessageDescriptor): _18.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _18.InterfaceAcceptingMessageDescriptorProtoMsg): _18.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _18.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _18.InterfaceAcceptingMessageDescriptor): _18.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _18.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ConfigurationDescriptor;
                    fromJSON(object: any): _18.ConfigurationDescriptor;
                    toJSON(message: _18.ConfigurationDescriptor): unknown;
                    fromPartial(object: {
                        bech32_account_address_prefix?: string;
                    }): _18.ConfigurationDescriptor;
                    fromAmino(object: _18.ConfigurationDescriptorAmino): _18.ConfigurationDescriptor;
                    toAmino(message: _18.ConfigurationDescriptor): _18.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _18.ConfigurationDescriptorAminoMsg): _18.ConfigurationDescriptor;
                    toAminoMsg(message: _18.ConfigurationDescriptor): _18.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _18.ConfigurationDescriptorProtoMsg): _18.ConfigurationDescriptor;
                    toProto(message: _18.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _18.ConfigurationDescriptor): _18.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _18.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgDescriptor;
                    fromJSON(object: any): _18.MsgDescriptor;
                    toJSON(message: _18.MsgDescriptor): unknown;
                    fromPartial(object: {
                        msg_type_url?: string;
                    }): _18.MsgDescriptor;
                    fromAmino(object: _18.MsgDescriptorAmino): _18.MsgDescriptor;
                    toAmino(message: _18.MsgDescriptor): _18.MsgDescriptorAmino;
                    fromAminoMsg(object: _18.MsgDescriptorAminoMsg): _18.MsgDescriptor;
                    toAminoMsg(message: _18.MsgDescriptor): _18.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _18.MsgDescriptorProtoMsg): _18.MsgDescriptor;
                    toProto(message: _18.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _18.MsgDescriptor): _18.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _18.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _18.GetAuthnDescriptorRequest;
                    toJSON(_: _18.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: {}): _18.GetAuthnDescriptorRequest;
                    fromAmino(_: _18.GetAuthnDescriptorRequestAmino): _18.GetAuthnDescriptorRequest;
                    toAmino(_: _18.GetAuthnDescriptorRequest): _18.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _18.GetAuthnDescriptorRequestAminoMsg): _18.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _18.GetAuthnDescriptorRequest): _18.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _18.GetAuthnDescriptorRequestProtoMsg): _18.GetAuthnDescriptorRequest;
                    toProto(message: _18.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _18.GetAuthnDescriptorRequest): _18.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _18.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _18.GetAuthnDescriptorResponse;
                    toJSON(message: _18.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: {
                        authn?: {
                            sign_modes?: {
                                name?: string;
                                number?: number;
                                authn_info_provider_method_fullname?: string;
                            }[];
                        };
                    }): _18.GetAuthnDescriptorResponse;
                    fromAmino(object: _18.GetAuthnDescriptorResponseAmino): _18.GetAuthnDescriptorResponse;
                    toAmino(message: _18.GetAuthnDescriptorResponse): _18.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _18.GetAuthnDescriptorResponseAminoMsg): _18.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _18.GetAuthnDescriptorResponse): _18.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _18.GetAuthnDescriptorResponseProtoMsg): _18.GetAuthnDescriptorResponse;
                    toProto(message: _18.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _18.GetAuthnDescriptorResponse): _18.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _18.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetChainDescriptorRequest;
                    fromJSON(_: any): _18.GetChainDescriptorRequest;
                    toJSON(_: _18.GetChainDescriptorRequest): unknown;
                    fromPartial(_: {}): _18.GetChainDescriptorRequest;
                    fromAmino(_: _18.GetChainDescriptorRequestAmino): _18.GetChainDescriptorRequest;
                    toAmino(_: _18.GetChainDescriptorRequest): _18.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _18.GetChainDescriptorRequestAminoMsg): _18.GetChainDescriptorRequest;
                    toAminoMsg(message: _18.GetChainDescriptorRequest): _18.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _18.GetChainDescriptorRequestProtoMsg): _18.GetChainDescriptorRequest;
                    toProto(message: _18.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _18.GetChainDescriptorRequest): _18.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _18.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetChainDescriptorResponse;
                    fromJSON(object: any): _18.GetChainDescriptorResponse;
                    toJSON(message: _18.GetChainDescriptorResponse): unknown;
                    fromPartial(object: {
                        chain?: {
                            id?: string;
                        };
                    }): _18.GetChainDescriptorResponse;
                    fromAmino(object: _18.GetChainDescriptorResponseAmino): _18.GetChainDescriptorResponse;
                    toAmino(message: _18.GetChainDescriptorResponse): _18.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _18.GetChainDescriptorResponseAminoMsg): _18.GetChainDescriptorResponse;
                    toAminoMsg(message: _18.GetChainDescriptorResponse): _18.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _18.GetChainDescriptorResponseProtoMsg): _18.GetChainDescriptorResponse;
                    toProto(message: _18.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _18.GetChainDescriptorResponse): _18.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _18.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetCodecDescriptorRequest;
                    fromJSON(_: any): _18.GetCodecDescriptorRequest;
                    toJSON(_: _18.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: {}): _18.GetCodecDescriptorRequest;
                    fromAmino(_: _18.GetCodecDescriptorRequestAmino): _18.GetCodecDescriptorRequest;
                    toAmino(_: _18.GetCodecDescriptorRequest): _18.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _18.GetCodecDescriptorRequestAminoMsg): _18.GetCodecDescriptorRequest;
                    toAminoMsg(message: _18.GetCodecDescriptorRequest): _18.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _18.GetCodecDescriptorRequestProtoMsg): _18.GetCodecDescriptorRequest;
                    toProto(message: _18.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _18.GetCodecDescriptorRequest): _18.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _18.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetCodecDescriptorResponse;
                    fromJSON(object: any): _18.GetCodecDescriptorResponse;
                    toJSON(message: _18.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: {
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interface_accepting_messages?: {
                                    fullname?: string;
                                    field_descriptor_names?: string[];
                                }[];
                                interface_implementers?: {
                                    fullname?: string;
                                    type_url?: string;
                                }[];
                            }[];
                        };
                    }): _18.GetCodecDescriptorResponse;
                    fromAmino(object: _18.GetCodecDescriptorResponseAmino): _18.GetCodecDescriptorResponse;
                    toAmino(message: _18.GetCodecDescriptorResponse): _18.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _18.GetCodecDescriptorResponseAminoMsg): _18.GetCodecDescriptorResponse;
                    toAminoMsg(message: _18.GetCodecDescriptorResponse): _18.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _18.GetCodecDescriptorResponseProtoMsg): _18.GetCodecDescriptorResponse;
                    toProto(message: _18.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _18.GetCodecDescriptorResponse): _18.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _18.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _18.GetConfigurationDescriptorRequest;
                    toJSON(_: _18.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: {}): _18.GetConfigurationDescriptorRequest;
                    fromAmino(_: _18.GetConfigurationDescriptorRequestAmino): _18.GetConfigurationDescriptorRequest;
                    toAmino(_: _18.GetConfigurationDescriptorRequest): _18.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _18.GetConfigurationDescriptorRequestAminoMsg): _18.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _18.GetConfigurationDescriptorRequest): _18.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _18.GetConfigurationDescriptorRequestProtoMsg): _18.GetConfigurationDescriptorRequest;
                    toProto(message: _18.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _18.GetConfigurationDescriptorRequest): _18.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _18.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _18.GetConfigurationDescriptorResponse;
                    toJSON(message: _18.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: {
                        config?: {
                            bech32_account_address_prefix?: string;
                        };
                    }): _18.GetConfigurationDescriptorResponse;
                    fromAmino(object: _18.GetConfigurationDescriptorResponseAmino): _18.GetConfigurationDescriptorResponse;
                    toAmino(message: _18.GetConfigurationDescriptorResponse): _18.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _18.GetConfigurationDescriptorResponseAminoMsg): _18.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _18.GetConfigurationDescriptorResponse): _18.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _18.GetConfigurationDescriptorResponseProtoMsg): _18.GetConfigurationDescriptorResponse;
                    toProto(message: _18.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _18.GetConfigurationDescriptorResponse): _18.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _18.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _18.GetQueryServicesDescriptorRequest;
                    toJSON(_: _18.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: {}): _18.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _18.GetQueryServicesDescriptorRequestAmino): _18.GetQueryServicesDescriptorRequest;
                    toAmino(_: _18.GetQueryServicesDescriptorRequest): _18.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _18.GetQueryServicesDescriptorRequestAminoMsg): _18.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _18.GetQueryServicesDescriptorRequest): _18.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _18.GetQueryServicesDescriptorRequestProtoMsg): _18.GetQueryServicesDescriptorRequest;
                    toProto(message: _18.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _18.GetQueryServicesDescriptorRequest): _18.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _18.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _18.GetQueryServicesDescriptorResponse;
                    toJSON(message: _18.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: {
                        queries?: {
                            query_services?: {
                                fullname?: string;
                                is_module?: boolean;
                                methods?: {
                                    name?: string;
                                    full_query_path?: string;
                                }[];
                            }[];
                        };
                    }): _18.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _18.GetQueryServicesDescriptorResponseAmino): _18.GetQueryServicesDescriptorResponse;
                    toAmino(message: _18.GetQueryServicesDescriptorResponse): _18.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _18.GetQueryServicesDescriptorResponseAminoMsg): _18.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _18.GetQueryServicesDescriptorResponse): _18.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _18.GetQueryServicesDescriptorResponseProtoMsg): _18.GetQueryServicesDescriptorResponse;
                    toProto(message: _18.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _18.GetQueryServicesDescriptorResponse): _18.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _18.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetTxDescriptorRequest;
                    fromJSON(_: any): _18.GetTxDescriptorRequest;
                    toJSON(_: _18.GetTxDescriptorRequest): unknown;
                    fromPartial(_: {}): _18.GetTxDescriptorRequest;
                    fromAmino(_: _18.GetTxDescriptorRequestAmino): _18.GetTxDescriptorRequest;
                    toAmino(_: _18.GetTxDescriptorRequest): _18.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _18.GetTxDescriptorRequestAminoMsg): _18.GetTxDescriptorRequest;
                    toAminoMsg(message: _18.GetTxDescriptorRequest): _18.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _18.GetTxDescriptorRequestProtoMsg): _18.GetTxDescriptorRequest;
                    toProto(message: _18.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _18.GetTxDescriptorRequest): _18.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _18.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetTxDescriptorResponse;
                    fromJSON(object: any): _18.GetTxDescriptorResponse;
                    toJSON(message: _18.GetTxDescriptorResponse): unknown;
                    fromPartial(object: {
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msg_type_url?: string;
                            }[];
                        };
                    }): _18.GetTxDescriptorResponse;
                    fromAmino(object: _18.GetTxDescriptorResponseAmino): _18.GetTxDescriptorResponse;
                    toAmino(message: _18.GetTxDescriptorResponse): _18.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _18.GetTxDescriptorResponseAminoMsg): _18.GetTxDescriptorResponse;
                    toAminoMsg(message: _18.GetTxDescriptorResponse): _18.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _18.GetTxDescriptorResponseProtoMsg): _18.GetTxDescriptorResponse;
                    toProto(message: _18.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _18.GetTxDescriptorResponse): _18.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _18.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryServicesDescriptor;
                    fromJSON(object: any): _18.QueryServicesDescriptor;
                    toJSON(message: _18.QueryServicesDescriptor): unknown;
                    fromPartial(object: {
                        query_services?: {
                            fullname?: string;
                            is_module?: boolean;
                            methods?: {
                                name?: string;
                                full_query_path?: string;
                            }[];
                        }[];
                    }): _18.QueryServicesDescriptor;
                    fromAmino(object: _18.QueryServicesDescriptorAmino): _18.QueryServicesDescriptor;
                    toAmino(message: _18.QueryServicesDescriptor): _18.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _18.QueryServicesDescriptorAminoMsg): _18.QueryServicesDescriptor;
                    toAminoMsg(message: _18.QueryServicesDescriptor): _18.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _18.QueryServicesDescriptorProtoMsg): _18.QueryServicesDescriptor;
                    toProto(message: _18.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _18.QueryServicesDescriptor): _18.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _18.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryServiceDescriptor;
                    fromJSON(object: any): _18.QueryServiceDescriptor;
                    toJSON(message: _18.QueryServiceDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        is_module?: boolean;
                        methods?: {
                            name?: string;
                            full_query_path?: string;
                        }[];
                    }): _18.QueryServiceDescriptor;
                    fromAmino(object: _18.QueryServiceDescriptorAmino): _18.QueryServiceDescriptor;
                    toAmino(message: _18.QueryServiceDescriptor): _18.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _18.QueryServiceDescriptorAminoMsg): _18.QueryServiceDescriptor;
                    toAminoMsg(message: _18.QueryServiceDescriptor): _18.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _18.QueryServiceDescriptorProtoMsg): _18.QueryServiceDescriptor;
                    toProto(message: _18.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _18.QueryServiceDescriptor): _18.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _18.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryMethodDescriptor;
                    fromJSON(object: any): _18.QueryMethodDescriptor;
                    toJSON(message: _18.QueryMethodDescriptor): unknown;
                    fromPartial(object: {
                        name?: string;
                        full_query_path?: string;
                    }): _18.QueryMethodDescriptor;
                    fromAmino(object: _18.QueryMethodDescriptorAmino): _18.QueryMethodDescriptor;
                    toAmino(message: _18.QueryMethodDescriptor): _18.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _18.QueryMethodDescriptorAminoMsg): _18.QueryMethodDescriptor;
                    toAminoMsg(message: _18.QueryMethodDescriptor): _18.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _18.QueryMethodDescriptorProtoMsg): _18.QueryMethodDescriptor;
                    toProto(message: _18.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _18.QueryMethodDescriptor): _18.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                aminoType: string;
                encode(message: _19.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Coin;
                fromJSON(object: any): _19.Coin;
                toJSON(message: _19.Coin): unknown;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _19.Coin;
                fromAmino(object: _19.CoinAmino): _19.Coin;
                toAmino(message: _19.Coin): _19.CoinAmino;
                fromAminoMsg(object: _19.CoinAminoMsg): _19.Coin;
                toAminoMsg(message: _19.Coin): _19.CoinAminoMsg;
                fromProtoMsg(message: _19.CoinProtoMsg): _19.Coin;
                toProto(message: _19.Coin): Uint8Array;
                toProtoMsg(message: _19.Coin): _19.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                aminoType: string;
                encode(message: _19.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.DecCoin;
                fromJSON(object: any): _19.DecCoin;
                toJSON(message: _19.DecCoin): unknown;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _19.DecCoin;
                fromAmino(object: _19.DecCoinAmino): _19.DecCoin;
                toAmino(message: _19.DecCoin): _19.DecCoinAmino;
                fromAminoMsg(object: _19.DecCoinAminoMsg): _19.DecCoin;
                toAminoMsg(message: _19.DecCoin): _19.DecCoinAminoMsg;
                fromProtoMsg(message: _19.DecCoinProtoMsg): _19.DecCoin;
                toProto(message: _19.DecCoin): Uint8Array;
                toProtoMsg(message: _19.DecCoin): _19.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                aminoType: string;
                encode(message: _19.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.IntProto;
                fromJSON(object: any): _19.IntProto;
                toJSON(message: _19.IntProto): unknown;
                fromPartial(object: {
                    int?: string;
                }): _19.IntProto;
                fromAmino(object: _19.IntProtoAmino): _19.IntProto;
                toAmino(message: _19.IntProto): _19.IntProtoAmino;
                fromAminoMsg(object: _19.IntProtoAminoMsg): _19.IntProto;
                toAminoMsg(message: _19.IntProto): _19.IntProtoAminoMsg;
                fromProtoMsg(message: _19.IntProtoProtoMsg): _19.IntProto;
                toProto(message: _19.IntProto): Uint8Array;
                toProtoMsg(message: _19.IntProto): _19.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                aminoType: string;
                encode(message: _19.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.DecProto;
                fromJSON(object: any): _19.DecProto;
                toJSON(message: _19.DecProto): unknown;
                fromPartial(object: {
                    dec?: string;
                }): _19.DecProto;
                fromAmino(object: _19.DecProtoAmino): _19.DecProto;
                toAmino(message: _19.DecProto): _19.DecProtoAmino;
                fromAminoMsg(object: _19.DecProtoAminoMsg): _19.DecProto;
                toAminoMsg(message: _19.DecProto): _19.DecProtoAminoMsg;
                fromProtoMsg(message: _19.DecProtoProtoMsg): _19.DecProto;
                toProto(message: _19.DecProto): Uint8Array;
                toProtoMsg(message: _19.DecProto): _19.DecProtoProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                aminoType: string;
                encode(message: _20.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.PubKey;
                fromJSON(object: any): _20.PubKey;
                toJSON(message: _20.PubKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _20.PubKey;
                fromAmino(object: _20.PubKeyAmino): _20.PubKey;
                toAmino(message: _20.PubKey): _20.PubKeyAmino;
                fromAminoMsg(object: _20.PubKeyAminoMsg): _20.PubKey;
                toAminoMsg(message: _20.PubKey): _20.PubKeyAminoMsg;
                fromProtoMsg(message: _20.PubKeyProtoMsg): _20.PubKey;
                toProto(message: _20.PubKey): Uint8Array;
                toProtoMsg(message: _20.PubKey): _20.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                aminoType: string;
                encode(message: _20.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.PrivKey;
                fromJSON(object: any): _20.PrivKey;
                toJSON(message: _20.PrivKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _20.PrivKey;
                fromAmino(object: _20.PrivKeyAmino): _20.PrivKey;
                toAmino(message: _20.PrivKey): _20.PrivKeyAmino;
                fromAminoMsg(object: _20.PrivKeyAminoMsg): _20.PrivKey;
                toAminoMsg(message: _20.PrivKey): _20.PrivKeyAminoMsg;
                fromProtoMsg(message: _20.PrivKeyProtoMsg): _20.PrivKey;
                toProto(message: _20.PrivKey): Uint8Array;
                toProtoMsg(message: _20.PrivKey): _20.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _21.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.BIP44Params;
                    fromJSON(object: any): _21.BIP44Params;
                    toJSON(message: _21.BIP44Params): unknown;
                    fromPartial(object: {
                        purpose?: number;
                        coin_type?: number;
                        account?: number;
                        change?: boolean;
                        address_index?: number;
                    }): _21.BIP44Params;
                    fromAmino(object: _21.BIP44ParamsAmino): _21.BIP44Params;
                    toAmino(message: _21.BIP44Params): _21.BIP44ParamsAmino;
                    fromAminoMsg(object: _21.BIP44ParamsAminoMsg): _21.BIP44Params;
                    toAminoMsg(message: _21.BIP44Params): _21.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _21.BIP44ParamsProtoMsg): _21.BIP44Params;
                    toProto(message: _21.BIP44Params): Uint8Array;
                    toProtoMsg(message: _21.BIP44Params): _21.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _22.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.Record;
                    fromJSON(object: any): _22.Record;
                    toJSON(message: _22.Record): unknown;
                    fromPartial(object: {
                        name?: string;
                        pub_key?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        local?: {
                            priv_key?: {
                                $typeUrl?: string;
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            priv_key_type?: string;
                        };
                        ledger?: {
                            path?: {
                                purpose?: number;
                                coin_type?: number;
                                account?: number;
                                change?: boolean;
                                address_index?: number;
                            };
                        };
                        multi?: {};
                        offline?: {};
                    }): _22.Record;
                    fromAmino(object: _22.RecordAmino): _22.Record;
                    toAmino(message: _22.Record): _22.RecordAmino;
                    fromAminoMsg(object: _22.RecordAminoMsg): _22.Record;
                    toAminoMsg(message: _22.Record): _22.RecordAminoMsg;
                    fromProtoMsg(message: _22.RecordProtoMsg): _22.Record;
                    toProto(message: _22.Record): Uint8Array;
                    toProtoMsg(message: _22.Record): _22.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _22.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.Record_Local;
                    fromJSON(object: any): _22.Record_Local;
                    toJSON(message: _22.Record_Local): unknown;
                    fromPartial(object: {
                        priv_key?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        priv_key_type?: string;
                    }): _22.Record_Local;
                    fromAmino(object: _22.Record_LocalAmino): _22.Record_Local;
                    toAmino(message: _22.Record_Local): _22.Record_LocalAmino;
                    fromAminoMsg(object: _22.Record_LocalAminoMsg): _22.Record_Local;
                    toAminoMsg(message: _22.Record_Local): _22.Record_LocalAminoMsg;
                    fromProtoMsg(message: _22.Record_LocalProtoMsg): _22.Record_Local;
                    toProto(message: _22.Record_Local): Uint8Array;
                    toProtoMsg(message: _22.Record_Local): _22.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _22.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.Record_Ledger;
                    fromJSON(object: any): _22.Record_Ledger;
                    toJSON(message: _22.Record_Ledger): unknown;
                    fromPartial(object: {
                        path?: {
                            purpose?: number;
                            coin_type?: number;
                            account?: number;
                            change?: boolean;
                            address_index?: number;
                        };
                    }): _22.Record_Ledger;
                    fromAmino(object: _22.Record_LedgerAmino): _22.Record_Ledger;
                    toAmino(message: _22.Record_Ledger): _22.Record_LedgerAmino;
                    fromAminoMsg(object: _22.Record_LedgerAminoMsg): _22.Record_Ledger;
                    toAminoMsg(message: _22.Record_Ledger): _22.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _22.Record_LedgerProtoMsg): _22.Record_Ledger;
                    toProto(message: _22.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _22.Record_Ledger): _22.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _22.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.Record_Multi;
                    fromJSON(_: any): _22.Record_Multi;
                    toJSON(_: _22.Record_Multi): unknown;
                    fromPartial(_: {}): _22.Record_Multi;
                    fromAmino(_: _22.Record_MultiAmino): _22.Record_Multi;
                    toAmino(_: _22.Record_Multi): _22.Record_MultiAmino;
                    fromAminoMsg(object: _22.Record_MultiAminoMsg): _22.Record_Multi;
                    toAminoMsg(message: _22.Record_Multi): _22.Record_MultiAminoMsg;
                    fromProtoMsg(message: _22.Record_MultiProtoMsg): _22.Record_Multi;
                    toProto(message: _22.Record_Multi): Uint8Array;
                    toProtoMsg(message: _22.Record_Multi): _22.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _22.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.Record_Offline;
                    fromJSON(_: any): _22.Record_Offline;
                    toJSON(_: _22.Record_Offline): unknown;
                    fromPartial(_: {}): _22.Record_Offline;
                    fromAmino(_: _22.Record_OfflineAmino): _22.Record_Offline;
                    toAmino(_: _22.Record_Offline): _22.Record_OfflineAmino;
                    fromAminoMsg(object: _22.Record_OfflineAminoMsg): _22.Record_Offline;
                    toAminoMsg(message: _22.Record_Offline): _22.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _22.Record_OfflineProtoMsg): _22.Record_Offline;
                    toProto(message: _22.Record_Offline): Uint8Array;
                    toProtoMsg(message: _22.Record_Offline): _22.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                aminoType: string;
                encode(message: _23.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.LegacyAminoPubKey;
                fromJSON(object: any): _23.LegacyAminoPubKey;
                toJSON(message: _23.LegacyAminoPubKey): unknown;
                fromPartial(object: {
                    threshold?: number;
                    public_keys?: {
                        $typeUrl?: string;
                        type_url?: string;
                        value?: Uint8Array;
                    }[];
                }): _23.LegacyAminoPubKey;
                fromAmino(object: _23.LegacyAminoPubKeyAmino): _23.LegacyAminoPubKey;
                toAmino(message: _23.LegacyAminoPubKey): _23.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _23.LegacyAminoPubKeyAminoMsg): _23.LegacyAminoPubKey;
                toAminoMsg(message: _23.LegacyAminoPubKey): _23.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _23.LegacyAminoPubKeyProtoMsg): _23.LegacyAminoPubKey;
                toProto(message: _23.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _23.LegacyAminoPubKey): _23.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                aminoType: string;
                encode(message: _24.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.PubKey;
                fromJSON(object: any): _24.PubKey;
                toJSON(message: _24.PubKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _24.PubKey;
                fromAmino(object: _24.PubKeyAmino): _24.PubKey;
                toAmino(message: _24.PubKey): _24.PubKeyAmino;
                fromAminoMsg(object: _24.PubKeyAminoMsg): _24.PubKey;
                toAminoMsg(message: _24.PubKey): _24.PubKeyAminoMsg;
                fromProtoMsg(message: _24.PubKeyProtoMsg): _24.PubKey;
                toProto(message: _24.PubKey): Uint8Array;
                toProtoMsg(message: _24.PubKey): _24.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                aminoType: string;
                encode(message: _24.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.PrivKey;
                fromJSON(object: any): _24.PrivKey;
                toJSON(message: _24.PrivKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _24.PrivKey;
                fromAmino(object: _24.PrivKeyAmino): _24.PrivKey;
                toAmino(message: _24.PrivKey): _24.PrivKeyAmino;
                fromAminoMsg(object: _24.PrivKeyAminoMsg): _24.PrivKey;
                toAminoMsg(message: _24.PrivKey): _24.PrivKeyAminoMsg;
                fromProtoMsg(message: _24.PrivKeyProtoMsg): _24.PrivKey;
                toProto(message: _24.PrivKey): Uint8Array;
                toProtoMsg(message: _24.PrivKey): _24.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                aminoType: string;
                encode(message: _25.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.PubKey;
                fromJSON(object: any): _25.PubKey;
                toJSON(message: _25.PubKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _25.PubKey;
                fromAmino(object: _25.PubKeyAmino): _25.PubKey;
                toAmino(message: _25.PubKey): _25.PubKeyAmino;
                fromAminoMsg(object: _25.PubKeyAminoMsg): _25.PubKey;
                toAminoMsg(message: _25.PubKey): _25.PubKeyAminoMsg;
                fromProtoMsg(message: _25.PubKeyProtoMsg): _25.PubKey;
                toProto(message: _25.PubKey): Uint8Array;
                toProtoMsg(message: _25.PubKey): _25.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                aminoType: string;
                encode(message: _25.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.PrivKey;
                fromJSON(object: any): _25.PrivKey;
                toJSON(message: _25.PrivKey): unknown;
                fromPartial(object: {
                    secret?: Uint8Array;
                }): _25.PrivKey;
                fromAmino(object: _25.PrivKeyAmino): _25.PrivKey;
                toAmino(message: _25.PrivKey): _25.PrivKeyAmino;
                fromAminoMsg(object: _25.PrivKeyAminoMsg): _25.PrivKey;
                toAminoMsg(message: _25.PrivKey): _25.PrivKeyAminoMsg;
                fromProtoMsg(message: _25.PrivKeyProtoMsg): _25.PrivKey;
                toProto(message: _25.PrivKey): Uint8Array;
                toProtoMsg(message: _25.PrivKey): _25.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            Msg: typeof _167.Msg;
            Query: typeof _158.Query;
            QueryClientImpl: typeof _158.QueryClientImpl;
            LCDQueryClient: typeof _148.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _29.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _29.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _29.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _29.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _29.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _29.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _29.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _29.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _29.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _29.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _29.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _29.MsgFundCommunityPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _29.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _29.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _29.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _29.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _29.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _29.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _29.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _29.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _29.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _29.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _29.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _29.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _29.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _29.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _29.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _29.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _29.MsgSetWithdrawAddress) => _29.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _29.MsgSetWithdrawAddressAmino) => _29.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _29.MsgWithdrawDelegatorReward) => _29.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _29.MsgWithdrawDelegatorRewardAmino) => _29.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _29.MsgWithdrawValidatorCommission) => _29.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _29.MsgWithdrawValidatorCommissionAmino) => _29.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _29.MsgFundCommunityPool) => _29.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _29.MsgFundCommunityPoolAmino) => _29.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                aminoType: string;
                encode(message: _29.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgSetWithdrawAddress;
                fromJSON(object: any): _29.MsgSetWithdrawAddress;
                toJSON(message: _29.MsgSetWithdrawAddress): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                    withdraw_address?: string;
                }): _29.MsgSetWithdrawAddress;
                fromAmino(object: _29.MsgSetWithdrawAddressAmino): _29.MsgSetWithdrawAddress;
                toAmino(message: _29.MsgSetWithdrawAddress): _29.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _29.MsgSetWithdrawAddressAminoMsg): _29.MsgSetWithdrawAddress;
                toAminoMsg(message: _29.MsgSetWithdrawAddress): _29.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _29.MsgSetWithdrawAddressProtoMsg): _29.MsgSetWithdrawAddress;
                toProto(message: _29.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _29.MsgSetWithdrawAddress): _29.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                aminoType: string;
                encode(_: _29.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _29.MsgSetWithdrawAddressResponse;
                toJSON(_: _29.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: {}): _29.MsgSetWithdrawAddressResponse;
                fromAmino(_: _29.MsgSetWithdrawAddressResponseAmino): _29.MsgSetWithdrawAddressResponse;
                toAmino(_: _29.MsgSetWithdrawAddressResponse): _29.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _29.MsgSetWithdrawAddressResponseAminoMsg): _29.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _29.MsgSetWithdrawAddressResponse): _29.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _29.MsgSetWithdrawAddressResponseProtoMsg): _29.MsgSetWithdrawAddressResponse;
                toProto(message: _29.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _29.MsgSetWithdrawAddressResponse): _29.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                aminoType: string;
                encode(message: _29.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _29.MsgWithdrawDelegatorReward;
                toJSON(message: _29.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_address?: string;
                }): _29.MsgWithdrawDelegatorReward;
                fromAmino(object: _29.MsgWithdrawDelegatorRewardAmino): _29.MsgWithdrawDelegatorReward;
                toAmino(message: _29.MsgWithdrawDelegatorReward): _29.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _29.MsgWithdrawDelegatorRewardAminoMsg): _29.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _29.MsgWithdrawDelegatorReward): _29.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _29.MsgWithdrawDelegatorRewardProtoMsg): _29.MsgWithdrawDelegatorReward;
                toProto(message: _29.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _29.MsgWithdrawDelegatorReward): _29.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _29.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _29.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _29.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _29.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _29.MsgWithdrawDelegatorRewardResponseAmino): _29.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _29.MsgWithdrawDelegatorRewardResponse): _29.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _29.MsgWithdrawDelegatorRewardResponseAminoMsg): _29.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _29.MsgWithdrawDelegatorRewardResponse): _29.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _29.MsgWithdrawDelegatorRewardResponseProtoMsg): _29.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _29.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _29.MsgWithdrawDelegatorRewardResponse): _29.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                aminoType: string;
                encode(message: _29.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _29.MsgWithdrawValidatorCommission;
                toJSON(message: _29.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: {
                    validator_address?: string;
                }): _29.MsgWithdrawValidatorCommission;
                fromAmino(object: _29.MsgWithdrawValidatorCommissionAmino): _29.MsgWithdrawValidatorCommission;
                toAmino(message: _29.MsgWithdrawValidatorCommission): _29.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _29.MsgWithdrawValidatorCommissionAminoMsg): _29.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _29.MsgWithdrawValidatorCommission): _29.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _29.MsgWithdrawValidatorCommissionProtoMsg): _29.MsgWithdrawValidatorCommission;
                toProto(message: _29.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _29.MsgWithdrawValidatorCommission): _29.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _29.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _29.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _29.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _29.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _29.MsgWithdrawValidatorCommissionResponseAmino): _29.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _29.MsgWithdrawValidatorCommissionResponse): _29.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _29.MsgWithdrawValidatorCommissionResponseAminoMsg): _29.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _29.MsgWithdrawValidatorCommissionResponse): _29.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _29.MsgWithdrawValidatorCommissionResponseProtoMsg): _29.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _29.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _29.MsgWithdrawValidatorCommissionResponse): _29.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                aminoType: string;
                encode(message: _29.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgFundCommunityPool;
                fromJSON(object: any): _29.MsgFundCommunityPool;
                toJSON(message: _29.MsgFundCommunityPool): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    depositor?: string;
                }): _29.MsgFundCommunityPool;
                fromAmino(object: _29.MsgFundCommunityPoolAmino): _29.MsgFundCommunityPool;
                toAmino(message: _29.MsgFundCommunityPool): _29.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _29.MsgFundCommunityPoolAminoMsg): _29.MsgFundCommunityPool;
                toAminoMsg(message: _29.MsgFundCommunityPool): _29.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _29.MsgFundCommunityPoolProtoMsg): _29.MsgFundCommunityPool;
                toProto(message: _29.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _29.MsgFundCommunityPool): _29.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                aminoType: string;
                encode(_: _29.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _29.MsgFundCommunityPoolResponse;
                toJSON(_: _29.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: {}): _29.MsgFundCommunityPoolResponse;
                fromAmino(_: _29.MsgFundCommunityPoolResponseAmino): _29.MsgFundCommunityPoolResponse;
                toAmino(_: _29.MsgFundCommunityPoolResponse): _29.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _29.MsgFundCommunityPoolResponseAminoMsg): _29.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _29.MsgFundCommunityPoolResponse): _29.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _29.MsgFundCommunityPoolResponseProtoMsg): _29.MsgFundCommunityPoolResponse;
                toProto(message: _29.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _29.MsgFundCommunityPoolResponse): _29.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                aminoType: string;
                encode(_: _28.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryParamsRequest;
                fromJSON(_: any): _28.QueryParamsRequest;
                toJSON(_: _28.QueryParamsRequest): unknown;
                fromPartial(_: {}): _28.QueryParamsRequest;
                fromAmino(_: _28.QueryParamsRequestAmino): _28.QueryParamsRequest;
                toAmino(_: _28.QueryParamsRequest): _28.QueryParamsRequestAmino;
                fromAminoMsg(object: _28.QueryParamsRequestAminoMsg): _28.QueryParamsRequest;
                toAminoMsg(message: _28.QueryParamsRequest): _28.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _28.QueryParamsRequestProtoMsg): _28.QueryParamsRequest;
                toProto(message: _28.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _28.QueryParamsRequest): _28.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _28.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryParamsResponse;
                fromJSON(object: any): _28.QueryParamsResponse;
                toJSON(message: _28.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        community_tax?: string;
                        base_proposer_reward?: string;
                        bonus_proposer_reward?: string;
                        withdraw_addr_enabled?: boolean;
                    };
                }): _28.QueryParamsResponse;
                fromAmino(object: _28.QueryParamsResponseAmino): _28.QueryParamsResponse;
                toAmino(message: _28.QueryParamsResponse): _28.QueryParamsResponseAmino;
                fromAminoMsg(object: _28.QueryParamsResponseAminoMsg): _28.QueryParamsResponse;
                toAminoMsg(message: _28.QueryParamsResponse): _28.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _28.QueryParamsResponseProtoMsg): _28.QueryParamsResponse;
                toProto(message: _28.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _28.QueryParamsResponse): _28.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _28.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _28.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _28.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: {
                    validator_address?: string;
                }): _28.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _28.QueryValidatorOutstandingRewardsRequestAmino): _28.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _28.QueryValidatorOutstandingRewardsRequest): _28.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _28.QueryValidatorOutstandingRewardsRequestAminoMsg): _28.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _28.QueryValidatorOutstandingRewardsRequest): _28.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _28.QueryValidatorOutstandingRewardsRequestProtoMsg): _28.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _28.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _28.QueryValidatorOutstandingRewardsRequest): _28.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _28.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _28.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _28.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: {
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _28.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _28.QueryValidatorOutstandingRewardsResponseAmino): _28.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _28.QueryValidatorOutstandingRewardsResponse): _28.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _28.QueryValidatorOutstandingRewardsResponseAminoMsg): _28.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _28.QueryValidatorOutstandingRewardsResponse): _28.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _28.QueryValidatorOutstandingRewardsResponseProtoMsg): _28.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _28.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _28.QueryValidatorOutstandingRewardsResponse): _28.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _28.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryValidatorCommissionRequest;
                fromJSON(object: any): _28.QueryValidatorCommissionRequest;
                toJSON(message: _28.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: {
                    validator_address?: string;
                }): _28.QueryValidatorCommissionRequest;
                fromAmino(object: _28.QueryValidatorCommissionRequestAmino): _28.QueryValidatorCommissionRequest;
                toAmino(message: _28.QueryValidatorCommissionRequest): _28.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _28.QueryValidatorCommissionRequestAminoMsg): _28.QueryValidatorCommissionRequest;
                toAminoMsg(message: _28.QueryValidatorCommissionRequest): _28.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _28.QueryValidatorCommissionRequestProtoMsg): _28.QueryValidatorCommissionRequest;
                toProto(message: _28.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _28.QueryValidatorCommissionRequest): _28.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _28.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryValidatorCommissionResponse;
                fromJSON(object: any): _28.QueryValidatorCommissionResponse;
                toJSON(message: _28.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: {
                    commission?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _28.QueryValidatorCommissionResponse;
                fromAmino(object: _28.QueryValidatorCommissionResponseAmino): _28.QueryValidatorCommissionResponse;
                toAmino(message: _28.QueryValidatorCommissionResponse): _28.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _28.QueryValidatorCommissionResponseAminoMsg): _28.QueryValidatorCommissionResponse;
                toAminoMsg(message: _28.QueryValidatorCommissionResponse): _28.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _28.QueryValidatorCommissionResponseProtoMsg): _28.QueryValidatorCommissionResponse;
                toProto(message: _28.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _28.QueryValidatorCommissionResponse): _28.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _28.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryValidatorSlashesRequest;
                fromJSON(object: any): _28.QueryValidatorSlashesRequest;
                toJSON(message: _28.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: {
                    validator_address?: string;
                    starting_height?: string | number | import("long").default;
                    ending_height?: string | number | import("long").default;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _28.QueryValidatorSlashesRequest;
                fromAmino(object: _28.QueryValidatorSlashesRequestAmino): _28.QueryValidatorSlashesRequest;
                toAmino(message: _28.QueryValidatorSlashesRequest): _28.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _28.QueryValidatorSlashesRequestAminoMsg): _28.QueryValidatorSlashesRequest;
                toAminoMsg(message: _28.QueryValidatorSlashesRequest): _28.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _28.QueryValidatorSlashesRequestProtoMsg): _28.QueryValidatorSlashesRequest;
                toProto(message: _28.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _28.QueryValidatorSlashesRequest): _28.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _28.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryValidatorSlashesResponse;
                fromJSON(object: any): _28.QueryValidatorSlashesResponse;
                toJSON(message: _28.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: {
                    slashes?: {
                        validator_period?: string | number | import("long").default;
                        fraction?: string;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _28.QueryValidatorSlashesResponse;
                fromAmino(object: _28.QueryValidatorSlashesResponseAmino): _28.QueryValidatorSlashesResponse;
                toAmino(message: _28.QueryValidatorSlashesResponse): _28.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _28.QueryValidatorSlashesResponseAminoMsg): _28.QueryValidatorSlashesResponse;
                toAminoMsg(message: _28.QueryValidatorSlashesResponse): _28.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _28.QueryValidatorSlashesResponseProtoMsg): _28.QueryValidatorSlashesResponse;
                toProto(message: _28.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _28.QueryValidatorSlashesResponse): _28.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _28.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryDelegationRewardsRequest;
                fromJSON(object: any): _28.QueryDelegationRewardsRequest;
                toJSON(message: _28.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_address?: string;
                }): _28.QueryDelegationRewardsRequest;
                fromAmino(object: _28.QueryDelegationRewardsRequestAmino): _28.QueryDelegationRewardsRequest;
                toAmino(message: _28.QueryDelegationRewardsRequest): _28.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _28.QueryDelegationRewardsRequestAminoMsg): _28.QueryDelegationRewardsRequest;
                toAminoMsg(message: _28.QueryDelegationRewardsRequest): _28.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _28.QueryDelegationRewardsRequestProtoMsg): _28.QueryDelegationRewardsRequest;
                toProto(message: _28.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _28.QueryDelegationRewardsRequest): _28.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _28.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryDelegationRewardsResponse;
                fromJSON(object: any): _28.QueryDelegationRewardsResponse;
                toJSON(message: _28.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _28.QueryDelegationRewardsResponse;
                fromAmino(object: _28.QueryDelegationRewardsResponseAmino): _28.QueryDelegationRewardsResponse;
                toAmino(message: _28.QueryDelegationRewardsResponse): _28.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _28.QueryDelegationRewardsResponseAminoMsg): _28.QueryDelegationRewardsResponse;
                toAminoMsg(message: _28.QueryDelegationRewardsResponse): _28.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _28.QueryDelegationRewardsResponseProtoMsg): _28.QueryDelegationRewardsResponse;
                toProto(message: _28.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _28.QueryDelegationRewardsResponse): _28.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _28.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _28.QueryDelegationTotalRewardsRequest;
                toJSON(message: _28.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                }): _28.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _28.QueryDelegationTotalRewardsRequestAmino): _28.QueryDelegationTotalRewardsRequest;
                toAmino(message: _28.QueryDelegationTotalRewardsRequest): _28.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _28.QueryDelegationTotalRewardsRequestAminoMsg): _28.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _28.QueryDelegationTotalRewardsRequest): _28.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _28.QueryDelegationTotalRewardsRequestProtoMsg): _28.QueryDelegationTotalRewardsRequest;
                toProto(message: _28.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _28.QueryDelegationTotalRewardsRequest): _28.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _28.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _28.QueryDelegationTotalRewardsResponse;
                toJSON(message: _28.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: {
                    rewards?: {
                        validator_address?: string;
                        reward?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _28.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _28.QueryDelegationTotalRewardsResponseAmino): _28.QueryDelegationTotalRewardsResponse;
                toAmino(message: _28.QueryDelegationTotalRewardsResponse): _28.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _28.QueryDelegationTotalRewardsResponseAminoMsg): _28.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _28.QueryDelegationTotalRewardsResponse): _28.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _28.QueryDelegationTotalRewardsResponseProtoMsg): _28.QueryDelegationTotalRewardsResponse;
                toProto(message: _28.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _28.QueryDelegationTotalRewardsResponse): _28.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _28.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _28.QueryDelegatorValidatorsRequest;
                toJSON(message: _28.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                }): _28.QueryDelegatorValidatorsRequest;
                fromAmino(object: _28.QueryDelegatorValidatorsRequestAmino): _28.QueryDelegatorValidatorsRequest;
                toAmino(message: _28.QueryDelegatorValidatorsRequest): _28.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _28.QueryDelegatorValidatorsRequestAminoMsg): _28.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _28.QueryDelegatorValidatorsRequest): _28.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _28.QueryDelegatorValidatorsRequestProtoMsg): _28.QueryDelegatorValidatorsRequest;
                toProto(message: _28.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _28.QueryDelegatorValidatorsRequest): _28.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _28.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _28.QueryDelegatorValidatorsResponse;
                toJSON(message: _28.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: string[];
                }): _28.QueryDelegatorValidatorsResponse;
                fromAmino(object: _28.QueryDelegatorValidatorsResponseAmino): _28.QueryDelegatorValidatorsResponse;
                toAmino(message: _28.QueryDelegatorValidatorsResponse): _28.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _28.QueryDelegatorValidatorsResponseAminoMsg): _28.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _28.QueryDelegatorValidatorsResponse): _28.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _28.QueryDelegatorValidatorsResponseProtoMsg): _28.QueryDelegatorValidatorsResponse;
                toProto(message: _28.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _28.QueryDelegatorValidatorsResponse): _28.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _28.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _28.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _28.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                }): _28.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _28.QueryDelegatorWithdrawAddressRequestAmino): _28.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _28.QueryDelegatorWithdrawAddressRequest): _28.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _28.QueryDelegatorWithdrawAddressRequestAminoMsg): _28.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _28.QueryDelegatorWithdrawAddressRequest): _28.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _28.QueryDelegatorWithdrawAddressRequestProtoMsg): _28.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _28.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _28.QueryDelegatorWithdrawAddressRequest): _28.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _28.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _28.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _28.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: {
                    withdraw_address?: string;
                }): _28.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _28.QueryDelegatorWithdrawAddressResponseAmino): _28.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _28.QueryDelegatorWithdrawAddressResponse): _28.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _28.QueryDelegatorWithdrawAddressResponseAminoMsg): _28.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _28.QueryDelegatorWithdrawAddressResponse): _28.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _28.QueryDelegatorWithdrawAddressResponseProtoMsg): _28.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _28.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _28.QueryDelegatorWithdrawAddressResponse): _28.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                aminoType: string;
                encode(_: _28.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryCommunityPoolRequest;
                fromJSON(_: any): _28.QueryCommunityPoolRequest;
                toJSON(_: _28.QueryCommunityPoolRequest): unknown;
                fromPartial(_: {}): _28.QueryCommunityPoolRequest;
                fromAmino(_: _28.QueryCommunityPoolRequestAmino): _28.QueryCommunityPoolRequest;
                toAmino(_: _28.QueryCommunityPoolRequest): _28.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _28.QueryCommunityPoolRequestAminoMsg): _28.QueryCommunityPoolRequest;
                toAminoMsg(message: _28.QueryCommunityPoolRequest): _28.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _28.QueryCommunityPoolRequestProtoMsg): _28.QueryCommunityPoolRequest;
                toProto(message: _28.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _28.QueryCommunityPoolRequest): _28.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _28.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryCommunityPoolResponse;
                fromJSON(object: any): _28.QueryCommunityPoolResponse;
                toJSON(message: _28.QueryCommunityPoolResponse): unknown;
                fromPartial(object: {
                    pool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _28.QueryCommunityPoolResponse;
                fromAmino(object: _28.QueryCommunityPoolResponseAmino): _28.QueryCommunityPoolResponse;
                toAmino(message: _28.QueryCommunityPoolResponse): _28.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _28.QueryCommunityPoolResponseAminoMsg): _28.QueryCommunityPoolResponse;
                toAminoMsg(message: _28.QueryCommunityPoolResponse): _28.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _28.QueryCommunityPoolResponseProtoMsg): _28.QueryCommunityPoolResponse;
                toProto(message: _28.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _28.QueryCommunityPoolResponse): _28.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                aminoType: string;
                encode(message: _27.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.DelegatorWithdrawInfo;
                fromJSON(object: any): _27.DelegatorWithdrawInfo;
                toJSON(message: _27.DelegatorWithdrawInfo): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                    withdraw_address?: string;
                }): _27.DelegatorWithdrawInfo;
                fromAmino(object: _27.DelegatorWithdrawInfoAmino): _27.DelegatorWithdrawInfo;
                toAmino(message: _27.DelegatorWithdrawInfo): _27.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _27.DelegatorWithdrawInfoAminoMsg): _27.DelegatorWithdrawInfo;
                toAminoMsg(message: _27.DelegatorWithdrawInfo): _27.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _27.DelegatorWithdrawInfoProtoMsg): _27.DelegatorWithdrawInfo;
                toProto(message: _27.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _27.DelegatorWithdrawInfo): _27.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                aminoType: string;
                encode(message: _27.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _27.ValidatorOutstandingRewardsRecord;
                toJSON(message: _27.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: {
                    validator_address?: string;
                    outstanding_rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _27.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _27.ValidatorOutstandingRewardsRecordAmino): _27.ValidatorOutstandingRewardsRecord;
                toAmino(message: _27.ValidatorOutstandingRewardsRecord): _27.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _27.ValidatorOutstandingRewardsRecordAminoMsg): _27.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _27.ValidatorOutstandingRewardsRecord): _27.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _27.ValidatorOutstandingRewardsRecordProtoMsg): _27.ValidatorOutstandingRewardsRecord;
                toProto(message: _27.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _27.ValidatorOutstandingRewardsRecord): _27.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                aminoType: string;
                encode(message: _27.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _27.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _27.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: {
                    validator_address?: string;
                    accumulated?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _27.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _27.ValidatorAccumulatedCommissionRecordAmino): _27.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _27.ValidatorAccumulatedCommissionRecord): _27.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _27.ValidatorAccumulatedCommissionRecordAminoMsg): _27.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _27.ValidatorAccumulatedCommissionRecord): _27.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _27.ValidatorAccumulatedCommissionRecordProtoMsg): _27.ValidatorAccumulatedCommissionRecord;
                toProto(message: _27.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _27.ValidatorAccumulatedCommissionRecord): _27.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                aminoType: string;
                encode(message: _27.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _27.ValidatorHistoricalRewardsRecord;
                toJSON(message: _27.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: {
                    validator_address?: string;
                    period?: string | number | import("long").default;
                    rewards?: {
                        cumulative_reward_ratio?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        reference_count?: number;
                    };
                }): _27.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _27.ValidatorHistoricalRewardsRecordAmino): _27.ValidatorHistoricalRewardsRecord;
                toAmino(message: _27.ValidatorHistoricalRewardsRecord): _27.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _27.ValidatorHistoricalRewardsRecordAminoMsg): _27.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _27.ValidatorHistoricalRewardsRecord): _27.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _27.ValidatorHistoricalRewardsRecordProtoMsg): _27.ValidatorHistoricalRewardsRecord;
                toProto(message: _27.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _27.ValidatorHistoricalRewardsRecord): _27.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                aminoType: string;
                encode(message: _27.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _27.ValidatorCurrentRewardsRecord;
                toJSON(message: _27.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: {
                    validator_address?: string;
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        period?: string | number | import("long").default;
                    };
                }): _27.ValidatorCurrentRewardsRecord;
                fromAmino(object: _27.ValidatorCurrentRewardsRecordAmino): _27.ValidatorCurrentRewardsRecord;
                toAmino(message: _27.ValidatorCurrentRewardsRecord): _27.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _27.ValidatorCurrentRewardsRecordAminoMsg): _27.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _27.ValidatorCurrentRewardsRecord): _27.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _27.ValidatorCurrentRewardsRecordProtoMsg): _27.ValidatorCurrentRewardsRecord;
                toProto(message: _27.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _27.ValidatorCurrentRewardsRecord): _27.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                aminoType: string;
                encode(message: _27.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.DelegatorStartingInfoRecord;
                fromJSON(object: any): _27.DelegatorStartingInfoRecord;
                toJSON(message: _27.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_address?: string;
                    starting_info?: {
                        previous_period?: string | number | import("long").default;
                        stake?: string;
                        height?: string | number | import("long").default;
                    };
                }): _27.DelegatorStartingInfoRecord;
                fromAmino(object: _27.DelegatorStartingInfoRecordAmino): _27.DelegatorStartingInfoRecord;
                toAmino(message: _27.DelegatorStartingInfoRecord): _27.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _27.DelegatorStartingInfoRecordAminoMsg): _27.DelegatorStartingInfoRecord;
                toAminoMsg(message: _27.DelegatorStartingInfoRecord): _27.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _27.DelegatorStartingInfoRecordProtoMsg): _27.DelegatorStartingInfoRecord;
                toProto(message: _27.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _27.DelegatorStartingInfoRecord): _27.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                aminoType: string;
                encode(message: _27.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.ValidatorSlashEventRecord;
                fromJSON(object: any): _27.ValidatorSlashEventRecord;
                toJSON(message: _27.ValidatorSlashEventRecord): unknown;
                fromPartial(object: {
                    validator_address?: string;
                    height?: string | number | import("long").default;
                    period?: string | number | import("long").default;
                    validator_slash_event?: {
                        validator_period?: string | number | import("long").default;
                        fraction?: string;
                    };
                }): _27.ValidatorSlashEventRecord;
                fromAmino(object: _27.ValidatorSlashEventRecordAmino): _27.ValidatorSlashEventRecord;
                toAmino(message: _27.ValidatorSlashEventRecord): _27.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _27.ValidatorSlashEventRecordAminoMsg): _27.ValidatorSlashEventRecord;
                toAminoMsg(message: _27.ValidatorSlashEventRecord): _27.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _27.ValidatorSlashEventRecordProtoMsg): _27.ValidatorSlashEventRecord;
                toProto(message: _27.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _27.ValidatorSlashEventRecord): _27.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                aminoType: string;
                encode(message: _27.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GenesisState;
                fromJSON(object: any): _27.GenesisState;
                toJSON(message: _27.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        community_tax?: string;
                        base_proposer_reward?: string;
                        bonus_proposer_reward?: string;
                        withdraw_addr_enabled?: boolean;
                    };
                    fee_pool?: {
                        community_pool?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    delegator_withdraw_infos?: {
                        delegator_address?: string;
                        withdraw_address?: string;
                    }[];
                    previous_proposer?: string;
                    outstanding_rewards?: {
                        validator_address?: string;
                        outstanding_rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    validator_accumulated_commissions?: {
                        validator_address?: string;
                        accumulated?: {
                            commission?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[];
                    validator_historical_rewards?: {
                        validator_address?: string;
                        period?: string | number | import("long").default;
                        rewards?: {
                            cumulative_reward_ratio?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            reference_count?: number;
                        };
                    }[];
                    validator_current_rewards?: {
                        validator_address?: string;
                        rewards?: {
                            rewards?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            period?: string | number | import("long").default;
                        };
                    }[];
                    delegator_starting_infos?: {
                        delegator_address?: string;
                        validator_address?: string;
                        starting_info?: {
                            previous_period?: string | number | import("long").default;
                            stake?: string;
                            height?: string | number | import("long").default;
                        };
                    }[];
                    validator_slash_events?: {
                        validator_address?: string;
                        height?: string | number | import("long").default;
                        period?: string | number | import("long").default;
                        validator_slash_event?: {
                            validator_period?: string | number | import("long").default;
                            fraction?: string;
                        };
                    }[];
                }): _27.GenesisState;
                fromAmino(object: _27.GenesisStateAmino): _27.GenesisState;
                toAmino(message: _27.GenesisState): _27.GenesisStateAmino;
                fromAminoMsg(object: _27.GenesisStateAminoMsg): _27.GenesisState;
                toAminoMsg(message: _27.GenesisState): _27.GenesisStateAminoMsg;
                fromProtoMsg(message: _27.GenesisStateProtoMsg): _27.GenesisState;
                toProto(message: _27.GenesisState): Uint8Array;
                toProtoMsg(message: _27.GenesisState): _27.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                aminoType: string;
                encode(message: _26.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Params;
                fromJSON(object: any): _26.Params;
                toJSON(message: _26.Params): unknown;
                fromPartial(object: {
                    community_tax?: string;
                    base_proposer_reward?: string;
                    bonus_proposer_reward?: string;
                    withdraw_addr_enabled?: boolean;
                }): _26.Params;
                fromAmino(object: _26.ParamsAmino): _26.Params;
                toAmino(message: _26.Params): _26.ParamsAmino;
                fromAminoMsg(object: _26.ParamsAminoMsg): _26.Params;
                toAminoMsg(message: _26.Params): _26.ParamsAminoMsg;
                fromProtoMsg(message: _26.ParamsProtoMsg): _26.Params;
                toProto(message: _26.Params): Uint8Array;
                toProtoMsg(message: _26.Params): _26.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                aminoType: string;
                encode(message: _26.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.ValidatorHistoricalRewards;
                fromJSON(object: any): _26.ValidatorHistoricalRewards;
                toJSON(message: _26.ValidatorHistoricalRewards): unknown;
                fromPartial(object: {
                    cumulative_reward_ratio?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    reference_count?: number;
                }): _26.ValidatorHistoricalRewards;
                fromAmino(object: _26.ValidatorHistoricalRewardsAmino): _26.ValidatorHistoricalRewards;
                toAmino(message: _26.ValidatorHistoricalRewards): _26.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _26.ValidatorHistoricalRewardsAminoMsg): _26.ValidatorHistoricalRewards;
                toAminoMsg(message: _26.ValidatorHistoricalRewards): _26.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _26.ValidatorHistoricalRewardsProtoMsg): _26.ValidatorHistoricalRewards;
                toProto(message: _26.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _26.ValidatorHistoricalRewards): _26.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                aminoType: string;
                encode(message: _26.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.ValidatorCurrentRewards;
                fromJSON(object: any): _26.ValidatorCurrentRewards;
                toJSON(message: _26.ValidatorCurrentRewards): unknown;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    period?: string | number | import("long").default;
                }): _26.ValidatorCurrentRewards;
                fromAmino(object: _26.ValidatorCurrentRewardsAmino): _26.ValidatorCurrentRewards;
                toAmino(message: _26.ValidatorCurrentRewards): _26.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _26.ValidatorCurrentRewardsAminoMsg): _26.ValidatorCurrentRewards;
                toAminoMsg(message: _26.ValidatorCurrentRewards): _26.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _26.ValidatorCurrentRewardsProtoMsg): _26.ValidatorCurrentRewards;
                toProto(message: _26.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _26.ValidatorCurrentRewards): _26.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                aminoType: string;
                encode(message: _26.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.ValidatorAccumulatedCommission;
                fromJSON(object: any): _26.ValidatorAccumulatedCommission;
                toJSON(message: _26.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: {
                    commission?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _26.ValidatorAccumulatedCommission;
                fromAmino(object: _26.ValidatorAccumulatedCommissionAmino): _26.ValidatorAccumulatedCommission;
                toAmino(message: _26.ValidatorAccumulatedCommission): _26.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _26.ValidatorAccumulatedCommissionAminoMsg): _26.ValidatorAccumulatedCommission;
                toAminoMsg(message: _26.ValidatorAccumulatedCommission): _26.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _26.ValidatorAccumulatedCommissionProtoMsg): _26.ValidatorAccumulatedCommission;
                toProto(message: _26.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _26.ValidatorAccumulatedCommission): _26.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                aminoType: string;
                encode(message: _26.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.ValidatorOutstandingRewards;
                fromJSON(object: any): _26.ValidatorOutstandingRewards;
                toJSON(message: _26.ValidatorOutstandingRewards): unknown;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _26.ValidatorOutstandingRewards;
                fromAmino(object: _26.ValidatorOutstandingRewardsAmino): _26.ValidatorOutstandingRewards;
                toAmino(message: _26.ValidatorOutstandingRewards): _26.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _26.ValidatorOutstandingRewardsAminoMsg): _26.ValidatorOutstandingRewards;
                toAminoMsg(message: _26.ValidatorOutstandingRewards): _26.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _26.ValidatorOutstandingRewardsProtoMsg): _26.ValidatorOutstandingRewards;
                toProto(message: _26.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _26.ValidatorOutstandingRewards): _26.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                aminoType: string;
                encode(message: _26.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.ValidatorSlashEvent;
                fromJSON(object: any): _26.ValidatorSlashEvent;
                toJSON(message: _26.ValidatorSlashEvent): unknown;
                fromPartial(object: {
                    validator_period?: string | number | import("long").default;
                    fraction?: string;
                }): _26.ValidatorSlashEvent;
                fromAmino(object: _26.ValidatorSlashEventAmino): _26.ValidatorSlashEvent;
                toAmino(message: _26.ValidatorSlashEvent): _26.ValidatorSlashEventAmino;
                fromAminoMsg(object: _26.ValidatorSlashEventAminoMsg): _26.ValidatorSlashEvent;
                toAminoMsg(message: _26.ValidatorSlashEvent): _26.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _26.ValidatorSlashEventProtoMsg): _26.ValidatorSlashEvent;
                toProto(message: _26.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _26.ValidatorSlashEvent): _26.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                aminoType: string;
                encode(message: _26.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.ValidatorSlashEvents;
                fromJSON(object: any): _26.ValidatorSlashEvents;
                toJSON(message: _26.ValidatorSlashEvents): unknown;
                fromPartial(object: {
                    validator_slash_events?: {
                        validator_period?: string | number | import("long").default;
                        fraction?: string;
                    }[];
                }): _26.ValidatorSlashEvents;
                fromAmino(object: _26.ValidatorSlashEventsAmino): _26.ValidatorSlashEvents;
                toAmino(message: _26.ValidatorSlashEvents): _26.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _26.ValidatorSlashEventsAminoMsg): _26.ValidatorSlashEvents;
                toAminoMsg(message: _26.ValidatorSlashEvents): _26.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _26.ValidatorSlashEventsProtoMsg): _26.ValidatorSlashEvents;
                toProto(message: _26.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _26.ValidatorSlashEvents): _26.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                aminoType: string;
                encode(message: _26.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.FeePool;
                fromJSON(object: any): _26.FeePool;
                toJSON(message: _26.FeePool): unknown;
                fromPartial(object: {
                    community_pool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _26.FeePool;
                fromAmino(object: _26.FeePoolAmino): _26.FeePool;
                toAmino(message: _26.FeePool): _26.FeePoolAmino;
                fromAminoMsg(object: _26.FeePoolAminoMsg): _26.FeePool;
                toAminoMsg(message: _26.FeePool): _26.FeePoolAminoMsg;
                fromProtoMsg(message: _26.FeePoolProtoMsg): _26.FeePool;
                toProto(message: _26.FeePool): Uint8Array;
                toProtoMsg(message: _26.FeePool): _26.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                aminoType: string;
                encode(message: _26.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.CommunityPoolSpendProposal;
                fromJSON(object: any): _26.CommunityPoolSpendProposal;
                toJSON(message: _26.CommunityPoolSpendProposal): unknown;
                fromPartial(object: {
                    $typeUrl?: string;
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _26.CommunityPoolSpendProposal;
                fromAmino(object: _26.CommunityPoolSpendProposalAmino): _26.CommunityPoolSpendProposal;
                toAmino(message: _26.CommunityPoolSpendProposal): _26.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _26.CommunityPoolSpendProposalAminoMsg): _26.CommunityPoolSpendProposal;
                toAminoMsg(message: _26.CommunityPoolSpendProposal): _26.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _26.CommunityPoolSpendProposalProtoMsg): _26.CommunityPoolSpendProposal;
                toProto(message: _26.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _26.CommunityPoolSpendProposal): _26.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                aminoType: string;
                encode(message: _26.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.DelegatorStartingInfo;
                fromJSON(object: any): _26.DelegatorStartingInfo;
                toJSON(message: _26.DelegatorStartingInfo): unknown;
                fromPartial(object: {
                    previous_period?: string | number | import("long").default;
                    stake?: string;
                    height?: string | number | import("long").default;
                }): _26.DelegatorStartingInfo;
                fromAmino(object: _26.DelegatorStartingInfoAmino): _26.DelegatorStartingInfo;
                toAmino(message: _26.DelegatorStartingInfo): _26.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _26.DelegatorStartingInfoAminoMsg): _26.DelegatorStartingInfo;
                toAminoMsg(message: _26.DelegatorStartingInfo): _26.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _26.DelegatorStartingInfoProtoMsg): _26.DelegatorStartingInfo;
                toProto(message: _26.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _26.DelegatorStartingInfo): _26.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                aminoType: string;
                encode(message: _26.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.DelegationDelegatorReward;
                fromJSON(object: any): _26.DelegationDelegatorReward;
                toJSON(message: _26.DelegationDelegatorReward): unknown;
                fromPartial(object: {
                    validator_address?: string;
                    reward?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _26.DelegationDelegatorReward;
                fromAmino(object: _26.DelegationDelegatorRewardAmino): _26.DelegationDelegatorReward;
                toAmino(message: _26.DelegationDelegatorReward): _26.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _26.DelegationDelegatorRewardAminoMsg): _26.DelegationDelegatorReward;
                toAminoMsg(message: _26.DelegationDelegatorReward): _26.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _26.DelegationDelegatorRewardProtoMsg): _26.DelegationDelegatorReward;
                toProto(message: _26.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _26.DelegationDelegatorReward): _26.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                aminoType: string;
                encode(message: _26.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _26.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _26.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: {
                    $typeUrl?: string;
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: string;
                    deposit?: string;
                }): _26.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _26.CommunityPoolSpendProposalWithDepositAmino): _26.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _26.CommunityPoolSpendProposalWithDeposit): _26.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _26.CommunityPoolSpendProposalWithDepositAminoMsg): _26.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _26.CommunityPoolSpendProposalWithDeposit): _26.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _26.CommunityPoolSpendProposalWithDepositProtoMsg): _26.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _26.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _26.CommunityPoolSpendProposalWithDeposit): _26.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            Msg: typeof _168.Msg;
            Query: typeof _159.Query;
            QueryClientImpl: typeof _159.QueryClientImpl;
            LCDQueryClient: typeof _149.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _33.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _33.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _33.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _33.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _33.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _33.MsgSubmitProposal;
                    };
                    vote(value: _33.MsgVote): {
                        typeUrl: string;
                        value: _33.MsgVote;
                    };
                    voteWeighted(value: _33.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _33.MsgVoteWeighted;
                    };
                    deposit(value: _33.MsgDeposit): {
                        typeUrl: string;
                        value: _33.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _33.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _33.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _33.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _33.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _33.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _33.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _33.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _33.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _33.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _33.MsgSubmitProposal;
                    };
                    vote(value: _33.MsgVote): {
                        typeUrl: string;
                        value: _33.MsgVote;
                    };
                    voteWeighted(value: _33.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _33.MsgVoteWeighted;
                    };
                    deposit(value: _33.MsgDeposit): {
                        typeUrl: string;
                        value: _33.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _33.MsgSubmitProposal) => _33.MsgSubmitProposalAmino;
                    fromAmino: (object: _33.MsgSubmitProposalAmino) => _33.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _33.MsgVote) => _33.MsgVoteAmino;
                    fromAmino: (object: _33.MsgVoteAmino) => _33.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _33.MsgVoteWeighted) => _33.MsgVoteWeightedAmino;
                    fromAmino: (object: _33.MsgVoteWeightedAmino) => _33.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _33.MsgDeposit) => _33.MsgDepositAmino;
                    fromAmino: (object: _33.MsgDepositAmino) => _33.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                aminoType: string;
                encode(message: _33.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgSubmitProposal;
                fromJSON(object: any): _33.MsgSubmitProposal;
                toJSON(message: _33.MsgSubmitProposal): unknown;
                fromPartial(object: {
                    content?: any;
                    initial_deposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    proposer?: string;
                }): _33.MsgSubmitProposal;
                fromAmino(object: _33.MsgSubmitProposalAmino): _33.MsgSubmitProposal;
                toAmino(message: _33.MsgSubmitProposal): _33.MsgSubmitProposalAmino;
                fromAminoMsg(object: _33.MsgSubmitProposalAminoMsg): _33.MsgSubmitProposal;
                toAminoMsg(message: _33.MsgSubmitProposal): _33.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _33.MsgSubmitProposalProtoMsg): _33.MsgSubmitProposal;
                toProto(message: _33.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _33.MsgSubmitProposal): _33.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _33.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgSubmitProposalResponse;
                fromJSON(object: any): _33.MsgSubmitProposalResponse;
                toJSON(message: _33.MsgSubmitProposalResponse): unknown;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                }): _33.MsgSubmitProposalResponse;
                fromAmino(object: _33.MsgSubmitProposalResponseAmino): _33.MsgSubmitProposalResponse;
                toAmino(message: _33.MsgSubmitProposalResponse): _33.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _33.MsgSubmitProposalResponseAminoMsg): _33.MsgSubmitProposalResponse;
                toAminoMsg(message: _33.MsgSubmitProposalResponse): _33.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _33.MsgSubmitProposalResponseProtoMsg): _33.MsgSubmitProposalResponse;
                toProto(message: _33.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _33.MsgSubmitProposalResponse): _33.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                aminoType: string;
                encode(message: _33.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgVote;
                fromJSON(object: any): _33.MsgVote;
                toJSON(message: _33.MsgVote): unknown;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    voter?: string;
                    option?: _31.VoteOption;
                }): _33.MsgVote;
                fromAmino(object: _33.MsgVoteAmino): _33.MsgVote;
                toAmino(message: _33.MsgVote): _33.MsgVoteAmino;
                fromAminoMsg(object: _33.MsgVoteAminoMsg): _33.MsgVote;
                toAminoMsg(message: _33.MsgVote): _33.MsgVoteAminoMsg;
                fromProtoMsg(message: _33.MsgVoteProtoMsg): _33.MsgVote;
                toProto(message: _33.MsgVote): Uint8Array;
                toProtoMsg(message: _33.MsgVote): _33.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                aminoType: string;
                encode(_: _33.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgVoteResponse;
                fromJSON(_: any): _33.MsgVoteResponse;
                toJSON(_: _33.MsgVoteResponse): unknown;
                fromPartial(_: {}): _33.MsgVoteResponse;
                fromAmino(_: _33.MsgVoteResponseAmino): _33.MsgVoteResponse;
                toAmino(_: _33.MsgVoteResponse): _33.MsgVoteResponseAmino;
                fromAminoMsg(object: _33.MsgVoteResponseAminoMsg): _33.MsgVoteResponse;
                toAminoMsg(message: _33.MsgVoteResponse): _33.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _33.MsgVoteResponseProtoMsg): _33.MsgVoteResponse;
                toProto(message: _33.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _33.MsgVoteResponse): _33.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                aminoType: string;
                encode(message: _33.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgVoteWeighted;
                fromJSON(object: any): _33.MsgVoteWeighted;
                toJSON(message: _33.MsgVoteWeighted): unknown;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    voter?: string;
                    options?: {
                        option?: _31.VoteOption;
                        weight?: string;
                    }[];
                }): _33.MsgVoteWeighted;
                fromAmino(object: _33.MsgVoteWeightedAmino): _33.MsgVoteWeighted;
                toAmino(message: _33.MsgVoteWeighted): _33.MsgVoteWeightedAmino;
                fromAminoMsg(object: _33.MsgVoteWeightedAminoMsg): _33.MsgVoteWeighted;
                toAminoMsg(message: _33.MsgVoteWeighted): _33.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _33.MsgVoteWeightedProtoMsg): _33.MsgVoteWeighted;
                toProto(message: _33.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _33.MsgVoteWeighted): _33.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                aminoType: string;
                encode(_: _33.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgVoteWeightedResponse;
                fromJSON(_: any): _33.MsgVoteWeightedResponse;
                toJSON(_: _33.MsgVoteWeightedResponse): unknown;
                fromPartial(_: {}): _33.MsgVoteWeightedResponse;
                fromAmino(_: _33.MsgVoteWeightedResponseAmino): _33.MsgVoteWeightedResponse;
                toAmino(_: _33.MsgVoteWeightedResponse): _33.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _33.MsgVoteWeightedResponseAminoMsg): _33.MsgVoteWeightedResponse;
                toAminoMsg(message: _33.MsgVoteWeightedResponse): _33.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _33.MsgVoteWeightedResponseProtoMsg): _33.MsgVoteWeightedResponse;
                toProto(message: _33.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _33.MsgVoteWeightedResponse): _33.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                aminoType: string;
                encode(message: _33.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgDeposit;
                fromJSON(object: any): _33.MsgDeposit;
                toJSON(message: _33.MsgDeposit): unknown;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _33.MsgDeposit;
                fromAmino(object: _33.MsgDepositAmino): _33.MsgDeposit;
                toAmino(message: _33.MsgDeposit): _33.MsgDepositAmino;
                fromAminoMsg(object: _33.MsgDepositAminoMsg): _33.MsgDeposit;
                toAminoMsg(message: _33.MsgDeposit): _33.MsgDepositAminoMsg;
                fromProtoMsg(message: _33.MsgDepositProtoMsg): _33.MsgDeposit;
                toProto(message: _33.MsgDeposit): Uint8Array;
                toProtoMsg(message: _33.MsgDeposit): _33.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                aminoType: string;
                encode(_: _33.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgDepositResponse;
                fromJSON(_: any): _33.MsgDepositResponse;
                toJSON(_: _33.MsgDepositResponse): unknown;
                fromPartial(_: {}): _33.MsgDepositResponse;
                fromAmino(_: _33.MsgDepositResponseAmino): _33.MsgDepositResponse;
                toAmino(_: _33.MsgDepositResponse): _33.MsgDepositResponseAmino;
                fromAminoMsg(object: _33.MsgDepositResponseAminoMsg): _33.MsgDepositResponse;
                toAminoMsg(message: _33.MsgDepositResponse): _33.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _33.MsgDepositResponseProtoMsg): _33.MsgDepositResponse;
                toProto(message: _33.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _33.MsgDepositResponse): _33.MsgDepositResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _26.CommunityPoolSpendProposal | _26.CommunityPoolSpendProposalWithDeposit | _53.SoftwareUpgradeProposal | _53.CancelSoftwareUpgradeProposal | import("../ibc/core/client/v1/client").ClientUpdateProposal | import("../ibc/core/client/v1/client").UpgradeProposal | _31.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _32.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryProposalRequest;
                fromJSON(object: any): _32.QueryProposalRequest;
                toJSON(message: _32.QueryProposalRequest): unknown;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                }): _32.QueryProposalRequest;
                fromAmino(object: _32.QueryProposalRequestAmino): _32.QueryProposalRequest;
                toAmino(message: _32.QueryProposalRequest): _32.QueryProposalRequestAmino;
                fromAminoMsg(object: _32.QueryProposalRequestAminoMsg): _32.QueryProposalRequest;
                toAminoMsg(message: _32.QueryProposalRequest): _32.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _32.QueryProposalRequestProtoMsg): _32.QueryProposalRequest;
                toProto(message: _32.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _32.QueryProposalRequest): _32.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _32.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryProposalResponse;
                fromJSON(object: any): _32.QueryProposalResponse;
                toJSON(message: _32.QueryProposalResponse): unknown;
                fromPartial(object: {
                    proposal?: {
                        proposal_id?: string | number | import("long").default;
                        content?: any;
                        status?: _31.ProposalStatus;
                        final_tally_result?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            no_with_veto?: string;
                        };
                        submit_time?: Date;
                        deposit_end_time?: Date;
                        total_deposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        voting_start_time?: Date;
                        voting_end_time?: Date;
                    };
                }): _32.QueryProposalResponse;
                fromAmino(object: _32.QueryProposalResponseAmino): _32.QueryProposalResponse;
                toAmino(message: _32.QueryProposalResponse): _32.QueryProposalResponseAmino;
                fromAminoMsg(object: _32.QueryProposalResponseAminoMsg): _32.QueryProposalResponse;
                toAminoMsg(message: _32.QueryProposalResponse): _32.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _32.QueryProposalResponseProtoMsg): _32.QueryProposalResponse;
                toProto(message: _32.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _32.QueryProposalResponse): _32.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _32.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryProposalsRequest;
                fromJSON(object: any): _32.QueryProposalsRequest;
                toJSON(message: _32.QueryProposalsRequest): unknown;
                fromPartial(object: {
                    proposal_status?: _31.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _32.QueryProposalsRequest;
                fromAmino(object: _32.QueryProposalsRequestAmino): _32.QueryProposalsRequest;
                toAmino(message: _32.QueryProposalsRequest): _32.QueryProposalsRequestAmino;
                fromAminoMsg(object: _32.QueryProposalsRequestAminoMsg): _32.QueryProposalsRequest;
                toAminoMsg(message: _32.QueryProposalsRequest): _32.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _32.QueryProposalsRequestProtoMsg): _32.QueryProposalsRequest;
                toProto(message: _32.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _32.QueryProposalsRequest): _32.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _32.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryProposalsResponse;
                fromJSON(object: any): _32.QueryProposalsResponse;
                toJSON(message: _32.QueryProposalsResponse): unknown;
                fromPartial(object: {
                    proposals?: {
                        proposal_id?: string | number | import("long").default;
                        content?: any;
                        status?: _31.ProposalStatus;
                        final_tally_result?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            no_with_veto?: string;
                        };
                        submit_time?: Date;
                        deposit_end_time?: Date;
                        total_deposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        voting_start_time?: Date;
                        voting_end_time?: Date;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _32.QueryProposalsResponse;
                fromAmino(object: _32.QueryProposalsResponseAmino): _32.QueryProposalsResponse;
                toAmino(message: _32.QueryProposalsResponse): _32.QueryProposalsResponseAmino;
                fromAminoMsg(object: _32.QueryProposalsResponseAminoMsg): _32.QueryProposalsResponse;
                toAminoMsg(message: _32.QueryProposalsResponse): _32.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _32.QueryProposalsResponseProtoMsg): _32.QueryProposalsResponse;
                toProto(message: _32.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _32.QueryProposalsResponse): _32.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _32.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryVoteRequest;
                fromJSON(object: any): _32.QueryVoteRequest;
                toJSON(message: _32.QueryVoteRequest): unknown;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    voter?: string;
                }): _32.QueryVoteRequest;
                fromAmino(object: _32.QueryVoteRequestAmino): _32.QueryVoteRequest;
                toAmino(message: _32.QueryVoteRequest): _32.QueryVoteRequestAmino;
                fromAminoMsg(object: _32.QueryVoteRequestAminoMsg): _32.QueryVoteRequest;
                toAminoMsg(message: _32.QueryVoteRequest): _32.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _32.QueryVoteRequestProtoMsg): _32.QueryVoteRequest;
                toProto(message: _32.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _32.QueryVoteRequest): _32.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _32.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryVoteResponse;
                fromJSON(object: any): _32.QueryVoteResponse;
                toJSON(message: _32.QueryVoteResponse): unknown;
                fromPartial(object: {
                    vote?: {
                        proposal_id?: string | number | import("long").default;
                        voter?: string;
                        option?: _31.VoteOption;
                        options?: {
                            option?: _31.VoteOption;
                            weight?: string;
                        }[];
                    };
                }): _32.QueryVoteResponse;
                fromAmino(object: _32.QueryVoteResponseAmino): _32.QueryVoteResponse;
                toAmino(message: _32.QueryVoteResponse): _32.QueryVoteResponseAmino;
                fromAminoMsg(object: _32.QueryVoteResponseAminoMsg): _32.QueryVoteResponse;
                toAminoMsg(message: _32.QueryVoteResponse): _32.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _32.QueryVoteResponseProtoMsg): _32.QueryVoteResponse;
                toProto(message: _32.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _32.QueryVoteResponse): _32.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _32.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryVotesRequest;
                fromJSON(object: any): _32.QueryVotesRequest;
                toJSON(message: _32.QueryVotesRequest): unknown;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _32.QueryVotesRequest;
                fromAmino(object: _32.QueryVotesRequestAmino): _32.QueryVotesRequest;
                toAmino(message: _32.QueryVotesRequest): _32.QueryVotesRequestAmino;
                fromAminoMsg(object: _32.QueryVotesRequestAminoMsg): _32.QueryVotesRequest;
                toAminoMsg(message: _32.QueryVotesRequest): _32.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _32.QueryVotesRequestProtoMsg): _32.QueryVotesRequest;
                toProto(message: _32.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _32.QueryVotesRequest): _32.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _32.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryVotesResponse;
                fromJSON(object: any): _32.QueryVotesResponse;
                toJSON(message: _32.QueryVotesResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposal_id?: string | number | import("long").default;
                        voter?: string;
                        option?: _31.VoteOption;
                        options?: {
                            option?: _31.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _32.QueryVotesResponse;
                fromAmino(object: _32.QueryVotesResponseAmino): _32.QueryVotesResponse;
                toAmino(message: _32.QueryVotesResponse): _32.QueryVotesResponseAmino;
                fromAminoMsg(object: _32.QueryVotesResponseAminoMsg): _32.QueryVotesResponse;
                toAminoMsg(message: _32.QueryVotesResponse): _32.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _32.QueryVotesResponseProtoMsg): _32.QueryVotesResponse;
                toProto(message: _32.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _32.QueryVotesResponse): _32.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _32.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryParamsRequest;
                fromJSON(object: any): _32.QueryParamsRequest;
                toJSON(message: _32.QueryParamsRequest): unknown;
                fromPartial(object: {
                    params_type?: string;
                }): _32.QueryParamsRequest;
                fromAmino(object: _32.QueryParamsRequestAmino): _32.QueryParamsRequest;
                toAmino(message: _32.QueryParamsRequest): _32.QueryParamsRequestAmino;
                fromAminoMsg(object: _32.QueryParamsRequestAminoMsg): _32.QueryParamsRequest;
                toAminoMsg(message: _32.QueryParamsRequest): _32.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _32.QueryParamsRequestProtoMsg): _32.QueryParamsRequest;
                toProto(message: _32.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _32.QueryParamsRequest): _32.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _32.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryParamsResponse;
                fromJSON(object: any): _32.QueryParamsResponse;
                toJSON(message: _32.QueryParamsResponse): unknown;
                fromPartial(object: {
                    voting_params?: {
                        voting_period?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                    deposit_params?: {
                        min_deposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        max_deposit_period?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                    tally_params?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        veto_threshold?: Uint8Array;
                    };
                }): _32.QueryParamsResponse;
                fromAmino(object: _32.QueryParamsResponseAmino): _32.QueryParamsResponse;
                toAmino(message: _32.QueryParamsResponse): _32.QueryParamsResponseAmino;
                fromAminoMsg(object: _32.QueryParamsResponseAminoMsg): _32.QueryParamsResponse;
                toAminoMsg(message: _32.QueryParamsResponse): _32.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _32.QueryParamsResponseProtoMsg): _32.QueryParamsResponse;
                toProto(message: _32.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _32.QueryParamsResponse): _32.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _32.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryDepositRequest;
                fromJSON(object: any): _32.QueryDepositRequest;
                toJSON(message: _32.QueryDepositRequest): unknown;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    depositor?: string;
                }): _32.QueryDepositRequest;
                fromAmino(object: _32.QueryDepositRequestAmino): _32.QueryDepositRequest;
                toAmino(message: _32.QueryDepositRequest): _32.QueryDepositRequestAmino;
                fromAminoMsg(object: _32.QueryDepositRequestAminoMsg): _32.QueryDepositRequest;
                toAminoMsg(message: _32.QueryDepositRequest): _32.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _32.QueryDepositRequestProtoMsg): _32.QueryDepositRequest;
                toProto(message: _32.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _32.QueryDepositRequest): _32.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _32.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryDepositResponse;
                fromJSON(object: any): _32.QueryDepositResponse;
                toJSON(message: _32.QueryDepositResponse): unknown;
                fromPartial(object: {
                    deposit?: {
                        proposal_id?: string | number | import("long").default;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _32.QueryDepositResponse;
                fromAmino(object: _32.QueryDepositResponseAmino): _32.QueryDepositResponse;
                toAmino(message: _32.QueryDepositResponse): _32.QueryDepositResponseAmino;
                fromAminoMsg(object: _32.QueryDepositResponseAminoMsg): _32.QueryDepositResponse;
                toAminoMsg(message: _32.QueryDepositResponse): _32.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _32.QueryDepositResponseProtoMsg): _32.QueryDepositResponse;
                toProto(message: _32.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _32.QueryDepositResponse): _32.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _32.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryDepositsRequest;
                fromJSON(object: any): _32.QueryDepositsRequest;
                toJSON(message: _32.QueryDepositsRequest): unknown;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _32.QueryDepositsRequest;
                fromAmino(object: _32.QueryDepositsRequestAmino): _32.QueryDepositsRequest;
                toAmino(message: _32.QueryDepositsRequest): _32.QueryDepositsRequestAmino;
                fromAminoMsg(object: _32.QueryDepositsRequestAminoMsg): _32.QueryDepositsRequest;
                toAminoMsg(message: _32.QueryDepositsRequest): _32.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _32.QueryDepositsRequestProtoMsg): _32.QueryDepositsRequest;
                toProto(message: _32.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _32.QueryDepositsRequest): _32.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _32.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryDepositsResponse;
                fromJSON(object: any): _32.QueryDepositsResponse;
                toJSON(message: _32.QueryDepositsResponse): unknown;
                fromPartial(object: {
                    deposits?: {
                        proposal_id?: string | number | import("long").default;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _32.QueryDepositsResponse;
                fromAmino(object: _32.QueryDepositsResponseAmino): _32.QueryDepositsResponse;
                toAmino(message: _32.QueryDepositsResponse): _32.QueryDepositsResponseAmino;
                fromAminoMsg(object: _32.QueryDepositsResponseAminoMsg): _32.QueryDepositsResponse;
                toAminoMsg(message: _32.QueryDepositsResponse): _32.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _32.QueryDepositsResponseProtoMsg): _32.QueryDepositsResponse;
                toProto(message: _32.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _32.QueryDepositsResponse): _32.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _32.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryTallyResultRequest;
                fromJSON(object: any): _32.QueryTallyResultRequest;
                toJSON(message: _32.QueryTallyResultRequest): unknown;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                }): _32.QueryTallyResultRequest;
                fromAmino(object: _32.QueryTallyResultRequestAmino): _32.QueryTallyResultRequest;
                toAmino(message: _32.QueryTallyResultRequest): _32.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _32.QueryTallyResultRequestAminoMsg): _32.QueryTallyResultRequest;
                toAminoMsg(message: _32.QueryTallyResultRequest): _32.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _32.QueryTallyResultRequestProtoMsg): _32.QueryTallyResultRequest;
                toProto(message: _32.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _32.QueryTallyResultRequest): _32.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _32.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryTallyResultResponse;
                fromJSON(object: any): _32.QueryTallyResultResponse;
                toJSON(message: _32.QueryTallyResultResponse): unknown;
                fromPartial(object: {
                    tally?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        no_with_veto?: string;
                    };
                }): _32.QueryTallyResultResponse;
                fromAmino(object: _32.QueryTallyResultResponseAmino): _32.QueryTallyResultResponse;
                toAmino(message: _32.QueryTallyResultResponse): _32.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _32.QueryTallyResultResponseAminoMsg): _32.QueryTallyResultResponse;
                toAminoMsg(message: _32.QueryTallyResultResponse): _32.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _32.QueryTallyResultResponseProtoMsg): _32.QueryTallyResultResponse;
                toProto(message: _32.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _32.QueryTallyResultResponse): _32.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _31.VoteOption;
            voteOptionToJSON(object: _31.VoteOption): string;
            proposalStatusFromJSON(object: any): _31.ProposalStatus;
            proposalStatusToJSON(object: _31.ProposalStatus): string;
            VoteOption: typeof _31.VoteOption;
            VoteOptionSDKType: typeof _31.VoteOption;
            VoteOptionAmino: typeof _31.VoteOption;
            ProposalStatus: typeof _31.ProposalStatus;
            ProposalStatusSDKType: typeof _31.ProposalStatus;
            ProposalStatusAmino: typeof _31.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                aminoType: string;
                encode(message: _31.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.WeightedVoteOption;
                fromJSON(object: any): _31.WeightedVoteOption;
                toJSON(message: _31.WeightedVoteOption): unknown;
                fromPartial(object: {
                    option?: _31.VoteOption;
                    weight?: string;
                }): _31.WeightedVoteOption;
                fromAmino(object: _31.WeightedVoteOptionAmino): _31.WeightedVoteOption;
                toAmino(message: _31.WeightedVoteOption): _31.WeightedVoteOptionAmino;
                fromAminoMsg(object: _31.WeightedVoteOptionAminoMsg): _31.WeightedVoteOption;
                toAminoMsg(message: _31.WeightedVoteOption): _31.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _31.WeightedVoteOptionProtoMsg): _31.WeightedVoteOption;
                toProto(message: _31.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _31.WeightedVoteOption): _31.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                aminoType: string;
                encode(message: _31.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.TextProposal;
                fromJSON(object: any): _31.TextProposal;
                toJSON(message: _31.TextProposal): unknown;
                fromPartial(object: {
                    $typeUrl?: string;
                    title?: string;
                    description?: string;
                }): _31.TextProposal;
                fromAmino(object: _31.TextProposalAmino): _31.TextProposal;
                toAmino(message: _31.TextProposal): _31.TextProposalAmino;
                fromAminoMsg(object: _31.TextProposalAminoMsg): _31.TextProposal;
                toAminoMsg(message: _31.TextProposal): _31.TextProposalAminoMsg;
                fromProtoMsg(message: _31.TextProposalProtoMsg): _31.TextProposal;
                toProto(message: _31.TextProposal): Uint8Array;
                toProtoMsg(message: _31.TextProposal): _31.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                aminoType: string;
                encode(message: _31.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Deposit;
                fromJSON(object: any): _31.Deposit;
                toJSON(message: _31.Deposit): unknown;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _31.Deposit;
                fromAmino(object: _31.DepositAmino): _31.Deposit;
                toAmino(message: _31.Deposit): _31.DepositAmino;
                fromAminoMsg(object: _31.DepositAminoMsg): _31.Deposit;
                toAminoMsg(message: _31.Deposit): _31.DepositAminoMsg;
                fromProtoMsg(message: _31.DepositProtoMsg): _31.Deposit;
                toProto(message: _31.Deposit): Uint8Array;
                toProtoMsg(message: _31.Deposit): _31.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                aminoType: string;
                encode(message: _31.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Proposal;
                fromJSON(object: any): _31.Proposal;
                toJSON(message: _31.Proposal): unknown;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    content?: any;
                    status?: _31.ProposalStatus;
                    final_tally_result?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        no_with_veto?: string;
                    };
                    submit_time?: Date;
                    deposit_end_time?: Date;
                    total_deposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    voting_start_time?: Date;
                    voting_end_time?: Date;
                }): _31.Proposal;
                fromAmino(object: _31.ProposalAmino): _31.Proposal;
                toAmino(message: _31.Proposal): _31.ProposalAmino;
                fromAminoMsg(object: _31.ProposalAminoMsg): _31.Proposal;
                toAminoMsg(message: _31.Proposal): _31.ProposalAminoMsg;
                fromProtoMsg(message: _31.ProposalProtoMsg): _31.Proposal;
                toProto(message: _31.Proposal): Uint8Array;
                toProtoMsg(message: _31.Proposal): _31.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                aminoType: string;
                encode(message: _31.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.TallyResult;
                fromJSON(object: any): _31.TallyResult;
                toJSON(message: _31.TallyResult): unknown;
                fromPartial(object: {
                    yes?: string;
                    abstain?: string;
                    no?: string;
                    no_with_veto?: string;
                }): _31.TallyResult;
                fromAmino(object: _31.TallyResultAmino): _31.TallyResult;
                toAmino(message: _31.TallyResult): _31.TallyResultAmino;
                fromAminoMsg(object: _31.TallyResultAminoMsg): _31.TallyResult;
                toAminoMsg(message: _31.TallyResult): _31.TallyResultAminoMsg;
                fromProtoMsg(message: _31.TallyResultProtoMsg): _31.TallyResult;
                toProto(message: _31.TallyResult): Uint8Array;
                toProtoMsg(message: _31.TallyResult): _31.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                aminoType: string;
                encode(message: _31.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Vote;
                fromJSON(object: any): _31.Vote;
                toJSON(message: _31.Vote): unknown;
                fromPartial(object: {
                    proposal_id?: string | number | import("long").default;
                    voter?: string;
                    option?: _31.VoteOption;
                    options?: {
                        option?: _31.VoteOption;
                        weight?: string;
                    }[];
                }): _31.Vote;
                fromAmino(object: _31.VoteAmino): _31.Vote;
                toAmino(message: _31.Vote): _31.VoteAmino;
                fromAminoMsg(object: _31.VoteAminoMsg): _31.Vote;
                toAminoMsg(message: _31.Vote): _31.VoteAminoMsg;
                fromProtoMsg(message: _31.VoteProtoMsg): _31.Vote;
                toProto(message: _31.Vote): Uint8Array;
                toProtoMsg(message: _31.Vote): _31.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                aminoType: string;
                encode(message: _31.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.DepositParams;
                fromJSON(object: any): _31.DepositParams;
                toJSON(message: _31.DepositParams): unknown;
                fromPartial(object: {
                    min_deposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    max_deposit_period?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                }): _31.DepositParams;
                fromAmino(object: _31.DepositParamsAmino): _31.DepositParams;
                toAmino(message: _31.DepositParams): _31.DepositParamsAmino;
                fromAminoMsg(object: _31.DepositParamsAminoMsg): _31.DepositParams;
                toAminoMsg(message: _31.DepositParams): _31.DepositParamsAminoMsg;
                fromProtoMsg(message: _31.DepositParamsProtoMsg): _31.DepositParams;
                toProto(message: _31.DepositParams): Uint8Array;
                toProtoMsg(message: _31.DepositParams): _31.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                aminoType: string;
                encode(message: _31.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.VotingParams;
                fromJSON(object: any): _31.VotingParams;
                toJSON(message: _31.VotingParams): unknown;
                fromPartial(object: {
                    voting_period?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                }): _31.VotingParams;
                fromAmino(object: _31.VotingParamsAmino): _31.VotingParams;
                toAmino(message: _31.VotingParams): _31.VotingParamsAmino;
                fromAminoMsg(object: _31.VotingParamsAminoMsg): _31.VotingParams;
                toAminoMsg(message: _31.VotingParams): _31.VotingParamsAminoMsg;
                fromProtoMsg(message: _31.VotingParamsProtoMsg): _31.VotingParams;
                toProto(message: _31.VotingParams): Uint8Array;
                toProtoMsg(message: _31.VotingParams): _31.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                aminoType: string;
                encode(message: _31.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.TallyParams;
                fromJSON(object: any): _31.TallyParams;
                toJSON(message: _31.TallyParams): unknown;
                fromPartial(object: {
                    quorum?: Uint8Array;
                    threshold?: Uint8Array;
                    veto_threshold?: Uint8Array;
                }): _31.TallyParams;
                fromAmino(object: _31.TallyParamsAmino): _31.TallyParams;
                toAmino(message: _31.TallyParams): _31.TallyParamsAmino;
                fromAminoMsg(object: _31.TallyParamsAminoMsg): _31.TallyParams;
                toAminoMsg(message: _31.TallyParams): _31.TallyParamsAminoMsg;
                fromProtoMsg(message: _31.TallyParamsProtoMsg): _31.TallyParams;
                toProto(message: _31.TallyParams): Uint8Array;
                toProtoMsg(message: _31.TallyParams): _31.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                aminoType: string;
                encode(message: _30.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GenesisState;
                fromJSON(object: any): _30.GenesisState;
                toJSON(message: _30.GenesisState): unknown;
                fromPartial(object: {
                    starting_proposal_id?: string | number | import("long").default;
                    deposits?: {
                        proposal_id?: string | number | import("long").default;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    votes?: {
                        proposal_id?: string | number | import("long").default;
                        voter?: string;
                        option?: _31.VoteOption;
                        options?: {
                            option?: _31.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    proposals?: {
                        proposal_id?: string | number | import("long").default;
                        content?: any;
                        status?: _31.ProposalStatus;
                        final_tally_result?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            no_with_veto?: string;
                        };
                        submit_time?: Date;
                        deposit_end_time?: Date;
                        total_deposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        voting_start_time?: Date;
                        voting_end_time?: Date;
                    }[];
                    deposit_params?: {
                        min_deposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        max_deposit_period?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                    voting_params?: {
                        voting_period?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                    tally_params?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        veto_threshold?: Uint8Array;
                    };
                }): _30.GenesisState;
                fromAmino(object: _30.GenesisStateAmino): _30.GenesisState;
                toAmino(message: _30.GenesisState): _30.GenesisStateAmino;
                fromAminoMsg(object: _30.GenesisStateAminoMsg): _30.GenesisState;
                toAminoMsg(message: _30.GenesisState): _30.GenesisStateAminoMsg;
                fromProtoMsg(message: _30.GenesisStateProtoMsg): _30.GenesisState;
                toProto(message: _30.GenesisState): Uint8Array;
                toProtoMsg(message: _30.GenesisState): _30.GenesisStateProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            Query: typeof _160.Query;
            QueryClientImpl: typeof _160.QueryClientImpl;
            LCDQueryClient: typeof _150.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                aminoType: string;
                encode(_: _36.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryParamsRequest;
                fromJSON(_: any): _36.QueryParamsRequest;
                toJSON(_: _36.QueryParamsRequest): unknown;
                fromPartial(_: {}): _36.QueryParamsRequest;
                fromAmino(_: _36.QueryParamsRequestAmino): _36.QueryParamsRequest;
                toAmino(_: _36.QueryParamsRequest): _36.QueryParamsRequestAmino;
                fromAminoMsg(object: _36.QueryParamsRequestAminoMsg): _36.QueryParamsRequest;
                toAminoMsg(message: _36.QueryParamsRequest): _36.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _36.QueryParamsRequestProtoMsg): _36.QueryParamsRequest;
                toProto(message: _36.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _36.QueryParamsRequest): _36.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _36.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryParamsResponse;
                fromJSON(object: any): _36.QueryParamsResponse;
                toJSON(message: _36.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        mint_denom?: string;
                        inflation_rate_change?: string;
                        inflation_max?: string;
                        inflation_min?: string;
                        goal_bonded?: string;
                        blocks_per_year?: string | number | import("long").default;
                    };
                }): _36.QueryParamsResponse;
                fromAmino(object: _36.QueryParamsResponseAmino): _36.QueryParamsResponse;
                toAmino(message: _36.QueryParamsResponse): _36.QueryParamsResponseAmino;
                fromAminoMsg(object: _36.QueryParamsResponseAminoMsg): _36.QueryParamsResponse;
                toAminoMsg(message: _36.QueryParamsResponse): _36.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _36.QueryParamsResponseProtoMsg): _36.QueryParamsResponse;
                toProto(message: _36.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _36.QueryParamsResponse): _36.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                aminoType: string;
                encode(_: _36.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryInflationRequest;
                fromJSON(_: any): _36.QueryInflationRequest;
                toJSON(_: _36.QueryInflationRequest): unknown;
                fromPartial(_: {}): _36.QueryInflationRequest;
                fromAmino(_: _36.QueryInflationRequestAmino): _36.QueryInflationRequest;
                toAmino(_: _36.QueryInflationRequest): _36.QueryInflationRequestAmino;
                fromAminoMsg(object: _36.QueryInflationRequestAminoMsg): _36.QueryInflationRequest;
                toAminoMsg(message: _36.QueryInflationRequest): _36.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _36.QueryInflationRequestProtoMsg): _36.QueryInflationRequest;
                toProto(message: _36.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _36.QueryInflationRequest): _36.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _36.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryInflationResponse;
                fromJSON(object: any): _36.QueryInflationResponse;
                toJSON(message: _36.QueryInflationResponse): unknown;
                fromPartial(object: {
                    inflation?: Uint8Array;
                }): _36.QueryInflationResponse;
                fromAmino(object: _36.QueryInflationResponseAmino): _36.QueryInflationResponse;
                toAmino(message: _36.QueryInflationResponse): _36.QueryInflationResponseAmino;
                fromAminoMsg(object: _36.QueryInflationResponseAminoMsg): _36.QueryInflationResponse;
                toAminoMsg(message: _36.QueryInflationResponse): _36.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _36.QueryInflationResponseProtoMsg): _36.QueryInflationResponse;
                toProto(message: _36.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _36.QueryInflationResponse): _36.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                aminoType: string;
                encode(_: _36.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _36.QueryAnnualProvisionsRequest;
                toJSON(_: _36.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: {}): _36.QueryAnnualProvisionsRequest;
                fromAmino(_: _36.QueryAnnualProvisionsRequestAmino): _36.QueryAnnualProvisionsRequest;
                toAmino(_: _36.QueryAnnualProvisionsRequest): _36.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _36.QueryAnnualProvisionsRequestAminoMsg): _36.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _36.QueryAnnualProvisionsRequest): _36.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _36.QueryAnnualProvisionsRequestProtoMsg): _36.QueryAnnualProvisionsRequest;
                toProto(message: _36.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _36.QueryAnnualProvisionsRequest): _36.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _36.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _36.QueryAnnualProvisionsResponse;
                toJSON(message: _36.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: {
                    annual_provisions?: Uint8Array;
                }): _36.QueryAnnualProvisionsResponse;
                fromAmino(object: _36.QueryAnnualProvisionsResponseAmino): _36.QueryAnnualProvisionsResponse;
                toAmino(message: _36.QueryAnnualProvisionsResponse): _36.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _36.QueryAnnualProvisionsResponseAminoMsg): _36.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _36.QueryAnnualProvisionsResponse): _36.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _36.QueryAnnualProvisionsResponseProtoMsg): _36.QueryAnnualProvisionsResponse;
                toProto(message: _36.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _36.QueryAnnualProvisionsResponse): _36.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                aminoType: string;
                encode(message: _35.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.Minter;
                fromJSON(object: any): _35.Minter;
                toJSON(message: _35.Minter): unknown;
                fromPartial(object: {
                    inflation?: string;
                    annual_provisions?: string;
                }): _35.Minter;
                fromAmino(object: _35.MinterAmino): _35.Minter;
                toAmino(message: _35.Minter): _35.MinterAmino;
                fromAminoMsg(object: _35.MinterAminoMsg): _35.Minter;
                toAminoMsg(message: _35.Minter): _35.MinterAminoMsg;
                fromProtoMsg(message: _35.MinterProtoMsg): _35.Minter;
                toProto(message: _35.Minter): Uint8Array;
                toProtoMsg(message: _35.Minter): _35.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                aminoType: string;
                encode(message: _35.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.Params;
                fromJSON(object: any): _35.Params;
                toJSON(message: _35.Params): unknown;
                fromPartial(object: {
                    mint_denom?: string;
                    inflation_rate_change?: string;
                    inflation_max?: string;
                    inflation_min?: string;
                    goal_bonded?: string;
                    blocks_per_year?: string | number | import("long").default;
                }): _35.Params;
                fromAmino(object: _35.ParamsAmino): _35.Params;
                toAmino(message: _35.Params): _35.ParamsAmino;
                fromAminoMsg(object: _35.ParamsAminoMsg): _35.Params;
                toAminoMsg(message: _35.Params): _35.ParamsAminoMsg;
                fromProtoMsg(message: _35.ParamsProtoMsg): _35.Params;
                toProto(message: _35.Params): Uint8Array;
                toProtoMsg(message: _35.Params): _35.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                aminoType: string;
                encode(message: _34.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.GenesisState;
                fromJSON(object: any): _34.GenesisState;
                toJSON(message: _34.GenesisState): unknown;
                fromPartial(object: {
                    minter?: {
                        inflation?: string;
                        annual_provisions?: string;
                    };
                    params?: {
                        mint_denom?: string;
                        inflation_rate_change?: string;
                        inflation_max?: string;
                        inflation_min?: string;
                        goal_bonded?: string;
                        blocks_per_year?: string | number | import("long").default;
                    };
                }): _34.GenesisState;
                fromAmino(object: _34.GenesisStateAmino): _34.GenesisState;
                toAmino(message: _34.GenesisState): _34.GenesisStateAmino;
                fromAminoMsg(object: _34.GenesisStateAminoMsg): _34.GenesisState;
                toAminoMsg(message: _34.GenesisState): _34.GenesisStateAminoMsg;
                fromProtoMsg(message: _34.GenesisStateProtoMsg): _34.GenesisState;
                toProto(message: _34.GenesisState): Uint8Array;
                toProtoMsg(message: _34.GenesisState): _34.GenesisStateProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            Msg: typeof _169.Msg;
            Query: typeof _161.Query;
            QueryClientImpl: typeof _161.QueryClientImpl;
            LCDQueryClient: typeof _151.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _40.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _40.MsgUnjail): {
                        typeUrl: string;
                        value: _40.MsgUnjail;
                    };
                };
                toJSON: {
                    unjail(value: _40.MsgUnjail): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _40.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _40.MsgUnjail): {
                        typeUrl: string;
                        value: _40.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _40.MsgUnjail) => _40.MsgUnjailAmino;
                    fromAmino: (object: _40.MsgUnjailAmino) => _40.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                aminoType: string;
                encode(message: _40.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgUnjail;
                fromJSON(object: any): _40.MsgUnjail;
                toJSON(message: _40.MsgUnjail): unknown;
                fromPartial(object: {
                    validator_addr?: string;
                }): _40.MsgUnjail;
                fromAmino(object: _40.MsgUnjailAmino): _40.MsgUnjail;
                toAmino(message: _40.MsgUnjail): _40.MsgUnjailAmino;
                fromAminoMsg(object: _40.MsgUnjailAminoMsg): _40.MsgUnjail;
                toAminoMsg(message: _40.MsgUnjail): _40.MsgUnjailAminoMsg;
                fromProtoMsg(message: _40.MsgUnjailProtoMsg): _40.MsgUnjail;
                toProto(message: _40.MsgUnjail): Uint8Array;
                toProtoMsg(message: _40.MsgUnjail): _40.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                aminoType: string;
                encode(_: _40.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgUnjailResponse;
                fromJSON(_: any): _40.MsgUnjailResponse;
                toJSON(_: _40.MsgUnjailResponse): unknown;
                fromPartial(_: {}): _40.MsgUnjailResponse;
                fromAmino(_: _40.MsgUnjailResponseAmino): _40.MsgUnjailResponse;
                toAmino(_: _40.MsgUnjailResponse): _40.MsgUnjailResponseAmino;
                fromAminoMsg(object: _40.MsgUnjailResponseAminoMsg): _40.MsgUnjailResponse;
                toAminoMsg(message: _40.MsgUnjailResponse): _40.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _40.MsgUnjailResponseProtoMsg): _40.MsgUnjailResponse;
                toProto(message: _40.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _40.MsgUnjailResponse): _40.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                aminoType: string;
                encode(message: _39.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorSigningInfo;
                fromJSON(object: any): _39.ValidatorSigningInfo;
                toJSON(message: _39.ValidatorSigningInfo): unknown;
                fromPartial(object: {
                    address?: string;
                    start_height?: string | number | import("long").default;
                    index_offset?: string | number | import("long").default;
                    jailed_until?: Date;
                    tombstoned?: boolean;
                    missed_blocks_counter?: string | number | import("long").default;
                }): _39.ValidatorSigningInfo;
                fromAmino(object: _39.ValidatorSigningInfoAmino): _39.ValidatorSigningInfo;
                toAmino(message: _39.ValidatorSigningInfo): _39.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _39.ValidatorSigningInfoAminoMsg): _39.ValidatorSigningInfo;
                toAminoMsg(message: _39.ValidatorSigningInfo): _39.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _39.ValidatorSigningInfoProtoMsg): _39.ValidatorSigningInfo;
                toProto(message: _39.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _39.ValidatorSigningInfo): _39.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                aminoType: string;
                encode(message: _39.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.Params;
                fromJSON(object: any): _39.Params;
                toJSON(message: _39.Params): unknown;
                fromPartial(object: {
                    signed_blocks_window?: string | number | import("long").default;
                    min_signed_per_window?: Uint8Array;
                    downtime_jail_duration?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    slash_fraction_double_sign?: Uint8Array;
                    slash_fraction_downtime?: Uint8Array;
                }): _39.Params;
                fromAmino(object: _39.ParamsAmino): _39.Params;
                toAmino(message: _39.Params): _39.ParamsAmino;
                fromAminoMsg(object: _39.ParamsAminoMsg): _39.Params;
                toAminoMsg(message: _39.Params): _39.ParamsAminoMsg;
                fromProtoMsg(message: _39.ParamsProtoMsg): _39.Params;
                toProto(message: _39.Params): Uint8Array;
                toProtoMsg(message: _39.Params): _39.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                aminoType: string;
                encode(_: _38.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryParamsRequest;
                fromJSON(_: any): _38.QueryParamsRequest;
                toJSON(_: _38.QueryParamsRequest): unknown;
                fromPartial(_: {}): _38.QueryParamsRequest;
                fromAmino(_: _38.QueryParamsRequestAmino): _38.QueryParamsRequest;
                toAmino(_: _38.QueryParamsRequest): _38.QueryParamsRequestAmino;
                fromAminoMsg(object: _38.QueryParamsRequestAminoMsg): _38.QueryParamsRequest;
                toAminoMsg(message: _38.QueryParamsRequest): _38.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _38.QueryParamsRequestProtoMsg): _38.QueryParamsRequest;
                toProto(message: _38.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryParamsRequest): _38.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _38.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryParamsResponse;
                fromJSON(object: any): _38.QueryParamsResponse;
                toJSON(message: _38.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        signed_blocks_window?: string | number | import("long").default;
                        min_signed_per_window?: Uint8Array;
                        downtime_jail_duration?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        slash_fraction_double_sign?: Uint8Array;
                        slash_fraction_downtime?: Uint8Array;
                    };
                }): _38.QueryParamsResponse;
                fromAmino(object: _38.QueryParamsResponseAmino): _38.QueryParamsResponse;
                toAmino(message: _38.QueryParamsResponse): _38.QueryParamsResponseAmino;
                fromAminoMsg(object: _38.QueryParamsResponseAminoMsg): _38.QueryParamsResponse;
                toAminoMsg(message: _38.QueryParamsResponse): _38.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _38.QueryParamsResponseProtoMsg): _38.QueryParamsResponse;
                toProto(message: _38.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryParamsResponse): _38.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _38.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QuerySigningInfoRequest;
                fromJSON(object: any): _38.QuerySigningInfoRequest;
                toJSON(message: _38.QuerySigningInfoRequest): unknown;
                fromPartial(object: {
                    cons_address?: string;
                }): _38.QuerySigningInfoRequest;
                fromAmino(object: _38.QuerySigningInfoRequestAmino): _38.QuerySigningInfoRequest;
                toAmino(message: _38.QuerySigningInfoRequest): _38.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _38.QuerySigningInfoRequestAminoMsg): _38.QuerySigningInfoRequest;
                toAminoMsg(message: _38.QuerySigningInfoRequest): _38.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _38.QuerySigningInfoRequestProtoMsg): _38.QuerySigningInfoRequest;
                toProto(message: _38.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _38.QuerySigningInfoRequest): _38.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _38.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QuerySigningInfoResponse;
                fromJSON(object: any): _38.QuerySigningInfoResponse;
                toJSON(message: _38.QuerySigningInfoResponse): unknown;
                fromPartial(object: {
                    val_signing_info?: {
                        address?: string;
                        start_height?: string | number | import("long").default;
                        index_offset?: string | number | import("long").default;
                        jailed_until?: Date;
                        tombstoned?: boolean;
                        missed_blocks_counter?: string | number | import("long").default;
                    };
                }): _38.QuerySigningInfoResponse;
                fromAmino(object: _38.QuerySigningInfoResponseAmino): _38.QuerySigningInfoResponse;
                toAmino(message: _38.QuerySigningInfoResponse): _38.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _38.QuerySigningInfoResponseAminoMsg): _38.QuerySigningInfoResponse;
                toAminoMsg(message: _38.QuerySigningInfoResponse): _38.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _38.QuerySigningInfoResponseProtoMsg): _38.QuerySigningInfoResponse;
                toProto(message: _38.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _38.QuerySigningInfoResponse): _38.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _38.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QuerySigningInfosRequest;
                fromJSON(object: any): _38.QuerySigningInfosRequest;
                toJSON(message: _38.QuerySigningInfosRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _38.QuerySigningInfosRequest;
                fromAmino(object: _38.QuerySigningInfosRequestAmino): _38.QuerySigningInfosRequest;
                toAmino(message: _38.QuerySigningInfosRequest): _38.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _38.QuerySigningInfosRequestAminoMsg): _38.QuerySigningInfosRequest;
                toAminoMsg(message: _38.QuerySigningInfosRequest): _38.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _38.QuerySigningInfosRequestProtoMsg): _38.QuerySigningInfosRequest;
                toProto(message: _38.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _38.QuerySigningInfosRequest): _38.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _38.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QuerySigningInfosResponse;
                fromJSON(object: any): _38.QuerySigningInfosResponse;
                toJSON(message: _38.QuerySigningInfosResponse): unknown;
                fromPartial(object: {
                    info?: {
                        address?: string;
                        start_height?: string | number | import("long").default;
                        index_offset?: string | number | import("long").default;
                        jailed_until?: Date;
                        tombstoned?: boolean;
                        missed_blocks_counter?: string | number | import("long").default;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _38.QuerySigningInfosResponse;
                fromAmino(object: _38.QuerySigningInfosResponseAmino): _38.QuerySigningInfosResponse;
                toAmino(message: _38.QuerySigningInfosResponse): _38.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _38.QuerySigningInfosResponseAminoMsg): _38.QuerySigningInfosResponse;
                toAminoMsg(message: _38.QuerySigningInfosResponse): _38.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _38.QuerySigningInfosResponseProtoMsg): _38.QuerySigningInfosResponse;
                toProto(message: _38.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _38.QuerySigningInfosResponse): _38.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                aminoType: string;
                encode(message: _37.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.GenesisState;
                fromJSON(object: any): _37.GenesisState;
                toJSON(message: _37.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        signed_blocks_window?: string | number | import("long").default;
                        min_signed_per_window?: Uint8Array;
                        downtime_jail_duration?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        slash_fraction_double_sign?: Uint8Array;
                        slash_fraction_downtime?: Uint8Array;
                    };
                    signing_infos?: {
                        address?: string;
                        validator_signing_info?: {
                            address?: string;
                            start_height?: string | number | import("long").default;
                            index_offset?: string | number | import("long").default;
                            jailed_until?: Date;
                            tombstoned?: boolean;
                            missed_blocks_counter?: string | number | import("long").default;
                        };
                    }[];
                    missed_blocks?: {
                        address?: string;
                        missed_blocks?: {
                            index?: string | number | import("long").default;
                            missed?: boolean;
                        }[];
                    }[];
                }): _37.GenesisState;
                fromAmino(object: _37.GenesisStateAmino): _37.GenesisState;
                toAmino(message: _37.GenesisState): _37.GenesisStateAmino;
                fromAminoMsg(object: _37.GenesisStateAminoMsg): _37.GenesisState;
                toAminoMsg(message: _37.GenesisState): _37.GenesisStateAminoMsg;
                fromProtoMsg(message: _37.GenesisStateProtoMsg): _37.GenesisState;
                toProto(message: _37.GenesisState): Uint8Array;
                toProtoMsg(message: _37.GenesisState): _37.GenesisStateProtoMsg;
            };
            SigningInfo: {
                typeUrl: string;
                aminoType: string;
                encode(message: _37.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.SigningInfo;
                fromJSON(object: any): _37.SigningInfo;
                toJSON(message: _37.SigningInfo): unknown;
                fromPartial(object: {
                    address?: string;
                    validator_signing_info?: {
                        address?: string;
                        start_height?: string | number | import("long").default;
                        index_offset?: string | number | import("long").default;
                        jailed_until?: Date;
                        tombstoned?: boolean;
                        missed_blocks_counter?: string | number | import("long").default;
                    };
                }): _37.SigningInfo;
                fromAmino(object: _37.SigningInfoAmino): _37.SigningInfo;
                toAmino(message: _37.SigningInfo): _37.SigningInfoAmino;
                fromAminoMsg(object: _37.SigningInfoAminoMsg): _37.SigningInfo;
                toAminoMsg(message: _37.SigningInfo): _37.SigningInfoAminoMsg;
                fromProtoMsg(message: _37.SigningInfoProtoMsg): _37.SigningInfo;
                toProto(message: _37.SigningInfo): Uint8Array;
                toProtoMsg(message: _37.SigningInfo): _37.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                aminoType: string;
                encode(message: _37.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.ValidatorMissedBlocks;
                fromJSON(object: any): _37.ValidatorMissedBlocks;
                toJSON(message: _37.ValidatorMissedBlocks): unknown;
                fromPartial(object: {
                    address?: string;
                    missed_blocks?: {
                        index?: string | number | import("long").default;
                        missed?: boolean;
                    }[];
                }): _37.ValidatorMissedBlocks;
                fromAmino(object: _37.ValidatorMissedBlocksAmino): _37.ValidatorMissedBlocks;
                toAmino(message: _37.ValidatorMissedBlocks): _37.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _37.ValidatorMissedBlocksAminoMsg): _37.ValidatorMissedBlocks;
                toAminoMsg(message: _37.ValidatorMissedBlocks): _37.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _37.ValidatorMissedBlocksProtoMsg): _37.ValidatorMissedBlocks;
                toProto(message: _37.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _37.ValidatorMissedBlocks): _37.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                aminoType: string;
                encode(message: _37.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MissedBlock;
                fromJSON(object: any): _37.MissedBlock;
                toJSON(message: _37.MissedBlock): unknown;
                fromPartial(object: {
                    index?: string | number | import("long").default;
                    missed?: boolean;
                }): _37.MissedBlock;
                fromAmino(object: _37.MissedBlockAmino): _37.MissedBlock;
                toAmino(message: _37.MissedBlock): _37.MissedBlockAmino;
                fromAminoMsg(object: _37.MissedBlockAminoMsg): _37.MissedBlock;
                toAminoMsg(message: _37.MissedBlock): _37.MissedBlockAminoMsg;
                fromProtoMsg(message: _37.MissedBlockProtoMsg): _37.MissedBlock;
                toProto(message: _37.MissedBlock): Uint8Array;
                toProtoMsg(message: _37.MissedBlock): _37.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            Msg: typeof _170.Msg;
            Query: typeof _162.Query;
            QueryClientImpl: typeof _162.QueryClientImpl;
            LCDQueryClient: typeof _152.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _46.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _46.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _46.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _46.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _46.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    tokenizeShares(value: _43.MsgTokenizeShares): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    redeemTokensForShares(value: _43.MsgRedeemTokensForShares): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _46.MsgCreateValidator): {
                        typeUrl: string;
                        value: _46.MsgCreateValidator;
                    };
                    editValidator(value: _46.MsgEditValidator): {
                        typeUrl: string;
                        value: _46.MsgEditValidator;
                    };
                    delegate(value: _46.MsgDelegate): {
                        typeUrl: string;
                        value: _46.MsgDelegate;
                    };
                    beginRedelegate(value: _46.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _46.MsgBeginRedelegate;
                    };
                    undelegate(value: _46.MsgUndelegate): {
                        typeUrl: string;
                        value: _46.MsgUndelegate;
                    };
                    tokenizeShares(value: _43.MsgTokenizeShares): {
                        typeUrl: string;
                        value: _43.MsgTokenizeShares;
                    };
                    redeemTokensForShares(value: _43.MsgRedeemTokensForShares): {
                        typeUrl: string;
                        value: _43.MsgRedeemTokensForShares;
                    };
                };
                toJSON: {
                    createValidator(value: _46.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _46.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _46.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _46.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _46.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    tokenizeShares(value: _43.MsgTokenizeShares): {
                        typeUrl: string;
                        value: unknown;
                    };
                    redeemTokensForShares(value: _43.MsgRedeemTokensForShares): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _46.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _46.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _46.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _46.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _46.MsgUndelegate;
                    };
                    tokenizeShares(value: any): {
                        typeUrl: string;
                        value: _43.MsgTokenizeShares;
                    };
                    redeemTokensForShares(value: any): {
                        typeUrl: string;
                        value: _43.MsgRedeemTokensForShares;
                    };
                };
                fromPartial: {
                    createValidator(value: _46.MsgCreateValidator): {
                        typeUrl: string;
                        value: _46.MsgCreateValidator;
                    };
                    editValidator(value: _46.MsgEditValidator): {
                        typeUrl: string;
                        value: _46.MsgEditValidator;
                    };
                    delegate(value: _46.MsgDelegate): {
                        typeUrl: string;
                        value: _46.MsgDelegate;
                    };
                    beginRedelegate(value: _46.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _46.MsgBeginRedelegate;
                    };
                    undelegate(value: _46.MsgUndelegate): {
                        typeUrl: string;
                        value: _46.MsgUndelegate;
                    };
                    tokenizeShares(value: _43.MsgTokenizeShares): {
                        typeUrl: string;
                        value: _43.MsgTokenizeShares;
                    };
                    redeemTokensForShares(value: _43.MsgRedeemTokensForShares): {
                        typeUrl: string;
                        value: _43.MsgRedeemTokensForShares;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _46.MsgCreateValidator) => _46.MsgCreateValidatorAmino;
                    fromAmino: (object: _46.MsgCreateValidatorAmino) => _46.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _46.MsgEditValidator) => _46.MsgEditValidatorAmino;
                    fromAmino: (object: _46.MsgEditValidatorAmino) => _46.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _46.MsgDelegate) => _46.MsgDelegateAmino;
                    fromAmino: (object: _46.MsgDelegateAmino) => _46.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _46.MsgBeginRedelegate) => _46.MsgBeginRedelegateAmino;
                    fromAmino: (object: _46.MsgBeginRedelegateAmino) => _46.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _46.MsgUndelegate) => _46.MsgUndelegateAmino;
                    fromAmino: (object: _46.MsgUndelegateAmino) => _46.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgTokenizeShares": {
                    aminoType: string;
                    toAmino: (message: _43.MsgTokenizeShares) => _43.MsgTokenizeSharesAmino;
                    fromAmino: (object: _43.MsgTokenizeSharesAmino) => _43.MsgTokenizeShares;
                };
                "/cosmos.staking.v1beta1.MsgRedeemTokensForShares": {
                    aminoType: string;
                    toAmino: (message: _43.MsgRedeemTokensForShares) => _43.MsgRedeemTokensForSharesAmino;
                    fromAmino: (object: _43.MsgRedeemTokensForSharesAmino) => _43.MsgRedeemTokensForShares;
                };
            };
            tokenizeShareLockStatusFromJSON(object: any): _47.TokenizeShareLockStatus;
            tokenizeShareLockStatusToJSON(object: _47.TokenizeShareLockStatus): string;
            TokenizeShareLockStatus: typeof _47.TokenizeShareLockStatus;
            TokenizeShareLockStatusSDKType: typeof _47.TokenizeShareLockStatus;
            TokenizeShareLockStatusAmino: typeof _47.TokenizeShareLockStatus;
            TokenizeShareRecordReward: {
                typeUrl: string;
                aminoType: string;
                encode(message: _47.TokenizeShareRecordReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.TokenizeShareRecordReward;
                fromJSON(object: any): _47.TokenizeShareRecordReward;
                toJSON(message: _47.TokenizeShareRecordReward): unknown;
                fromPartial(object: {
                    record_id?: string | number | import("long").default;
                    reward?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _47.TokenizeShareRecordReward;
                fromAmino(object: _47.TokenizeShareRecordRewardAmino): _47.TokenizeShareRecordReward;
                toAmino(message: _47.TokenizeShareRecordReward): _47.TokenizeShareRecordRewardAmino;
                fromAminoMsg(object: _47.TokenizeShareRecordRewardAminoMsg): _47.TokenizeShareRecordReward;
                toAminoMsg(message: _47.TokenizeShareRecordReward): _47.TokenizeShareRecordRewardAminoMsg;
                fromProtoMsg(message: _47.TokenizeShareRecordRewardProtoMsg): _47.TokenizeShareRecordReward;
                toProto(message: _47.TokenizeShareRecordReward): Uint8Array;
                toProtoMsg(message: _47.TokenizeShareRecordReward): _47.TokenizeShareRecordRewardProtoMsg;
            };
            QueryTokenizeShareRecordRewardRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _47.QueryTokenizeShareRecordRewardRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryTokenizeShareRecordRewardRequest;
                fromJSON(object: any): _47.QueryTokenizeShareRecordRewardRequest;
                toJSON(message: _47.QueryTokenizeShareRecordRewardRequest): unknown;
                fromPartial(object: {
                    owner_address?: string;
                }): _47.QueryTokenizeShareRecordRewardRequest;
                fromAmino(object: _47.QueryTokenizeShareRecordRewardRequestAmino): _47.QueryTokenizeShareRecordRewardRequest;
                toAmino(message: _47.QueryTokenizeShareRecordRewardRequest): _47.QueryTokenizeShareRecordRewardRequestAmino;
                fromAminoMsg(object: _47.QueryTokenizeShareRecordRewardRequestAminoMsg): _47.QueryTokenizeShareRecordRewardRequest;
                toAminoMsg(message: _47.QueryTokenizeShareRecordRewardRequest): _47.QueryTokenizeShareRecordRewardRequestAminoMsg;
                fromProtoMsg(message: _47.QueryTokenizeShareRecordRewardRequestProtoMsg): _47.QueryTokenizeShareRecordRewardRequest;
                toProto(message: _47.QueryTokenizeShareRecordRewardRequest): Uint8Array;
                toProtoMsg(message: _47.QueryTokenizeShareRecordRewardRequest): _47.QueryTokenizeShareRecordRewardRequestProtoMsg;
            };
            QueryTokenizeShareRecordRewardResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _47.QueryTokenizeShareRecordRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryTokenizeShareRecordRewardResponse;
                fromJSON(object: any): _47.QueryTokenizeShareRecordRewardResponse;
                toJSON(message: _47.QueryTokenizeShareRecordRewardResponse): unknown;
                fromPartial(object: {
                    rewards?: {
                        record_id?: string | number | import("long").default;
                        reward?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _47.QueryTokenizeShareRecordRewardResponse;
                fromAmino(object: _47.QueryTokenizeShareRecordRewardResponseAmino): _47.QueryTokenizeShareRecordRewardResponse;
                toAmino(message: _47.QueryTokenizeShareRecordRewardResponse): _47.QueryTokenizeShareRecordRewardResponseAmino;
                fromAminoMsg(object: _47.QueryTokenizeShareRecordRewardResponseAminoMsg): _47.QueryTokenizeShareRecordRewardResponse;
                toAminoMsg(message: _47.QueryTokenizeShareRecordRewardResponse): _47.QueryTokenizeShareRecordRewardResponseAminoMsg;
                fromProtoMsg(message: _47.QueryTokenizeShareRecordRewardResponseProtoMsg): _47.QueryTokenizeShareRecordRewardResponse;
                toProto(message: _47.QueryTokenizeShareRecordRewardResponse): Uint8Array;
                toProtoMsg(message: _47.QueryTokenizeShareRecordRewardResponse): _47.QueryTokenizeShareRecordRewardResponseProtoMsg;
            };
            MsgWithdrawTokenizeShareRecordReward: {
                typeUrl: string;
                aminoType: string;
                encode(message: _47.MsgWithdrawTokenizeShareRecordReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgWithdrawTokenizeShareRecordReward;
                fromJSON(object: any): _47.MsgWithdrawTokenizeShareRecordReward;
                toJSON(message: _47.MsgWithdrawTokenizeShareRecordReward): unknown;
                fromPartial(object: {
                    owner_address?: string;
                    record_id?: string | number | import("long").default;
                }): _47.MsgWithdrawTokenizeShareRecordReward;
                fromAmino(object: _47.MsgWithdrawTokenizeShareRecordRewardAmino): _47.MsgWithdrawTokenizeShareRecordReward;
                toAmino(message: _47.MsgWithdrawTokenizeShareRecordReward): _47.MsgWithdrawTokenizeShareRecordRewardAmino;
                fromAminoMsg(object: _47.MsgWithdrawTokenizeShareRecordRewardAminoMsg): _47.MsgWithdrawTokenizeShareRecordReward;
                toAminoMsg(message: _47.MsgWithdrawTokenizeShareRecordReward): _47.MsgWithdrawTokenizeShareRecordRewardAminoMsg;
                fromProtoMsg(message: _47.MsgWithdrawTokenizeShareRecordRewardProtoMsg): _47.MsgWithdrawTokenizeShareRecordReward;
                toProto(message: _47.MsgWithdrawTokenizeShareRecordReward): Uint8Array;
                toProtoMsg(message: _47.MsgWithdrawTokenizeShareRecordReward): _47.MsgWithdrawTokenizeShareRecordRewardProtoMsg;
            };
            MsgWithdrawTokenizeShareRecordRewardResponse: {
                typeUrl: string;
                aminoType: string;
                encode(_: _47.MsgWithdrawTokenizeShareRecordRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgWithdrawTokenizeShareRecordRewardResponse;
                fromJSON(_: any): _47.MsgWithdrawTokenizeShareRecordRewardResponse;
                toJSON(_: _47.MsgWithdrawTokenizeShareRecordRewardResponse): unknown;
                fromPartial(_: {}): _47.MsgWithdrawTokenizeShareRecordRewardResponse;
                fromAmino(_: _47.MsgWithdrawTokenizeShareRecordRewardResponseAmino): _47.MsgWithdrawTokenizeShareRecordRewardResponse;
                toAmino(_: _47.MsgWithdrawTokenizeShareRecordRewardResponse): _47.MsgWithdrawTokenizeShareRecordRewardResponseAmino;
                fromAminoMsg(object: _47.MsgWithdrawTokenizeShareRecordRewardResponseAminoMsg): _47.MsgWithdrawTokenizeShareRecordRewardResponse;
                toAminoMsg(message: _47.MsgWithdrawTokenizeShareRecordRewardResponse): _47.MsgWithdrawTokenizeShareRecordRewardResponseAminoMsg;
                fromProtoMsg(message: _47.MsgWithdrawTokenizeShareRecordRewardResponseProtoMsg): _47.MsgWithdrawTokenizeShareRecordRewardResponse;
                toProto(message: _47.MsgWithdrawTokenizeShareRecordRewardResponse): Uint8Array;
                toProtoMsg(message: _47.MsgWithdrawTokenizeShareRecordRewardResponse): _47.MsgWithdrawTokenizeShareRecordRewardResponseProtoMsg;
            };
            MsgWithdrawAllTokenizeShareRecordReward: {
                typeUrl: string;
                aminoType: string;
                encode(message: _47.MsgWithdrawAllTokenizeShareRecordReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgWithdrawAllTokenizeShareRecordReward;
                fromJSON(object: any): _47.MsgWithdrawAllTokenizeShareRecordReward;
                toJSON(message: _47.MsgWithdrawAllTokenizeShareRecordReward): unknown;
                fromPartial(object: {
                    owner_address?: string;
                }): _47.MsgWithdrawAllTokenizeShareRecordReward;
                fromAmino(object: _47.MsgWithdrawAllTokenizeShareRecordRewardAmino): _47.MsgWithdrawAllTokenizeShareRecordReward;
                toAmino(message: _47.MsgWithdrawAllTokenizeShareRecordReward): _47.MsgWithdrawAllTokenizeShareRecordRewardAmino;
                fromAminoMsg(object: _47.MsgWithdrawAllTokenizeShareRecordRewardAminoMsg): _47.MsgWithdrawAllTokenizeShareRecordReward;
                toAminoMsg(message: _47.MsgWithdrawAllTokenizeShareRecordReward): _47.MsgWithdrawAllTokenizeShareRecordRewardAminoMsg;
                fromProtoMsg(message: _47.MsgWithdrawAllTokenizeShareRecordRewardProtoMsg): _47.MsgWithdrawAllTokenizeShareRecordReward;
                toProto(message: _47.MsgWithdrawAllTokenizeShareRecordReward): Uint8Array;
                toProtoMsg(message: _47.MsgWithdrawAllTokenizeShareRecordReward): _47.MsgWithdrawAllTokenizeShareRecordRewardProtoMsg;
            };
            MsgWithdrawAllTokenizeShareRecordRewardResponse: {
                typeUrl: string;
                aminoType: string;
                encode(_: _47.MsgWithdrawAllTokenizeShareRecordRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgWithdrawAllTokenizeShareRecordRewardResponse;
                fromJSON(_: any): _47.MsgWithdrawAllTokenizeShareRecordRewardResponse;
                toJSON(_: _47.MsgWithdrawAllTokenizeShareRecordRewardResponse): unknown;
                fromPartial(_: {}): _47.MsgWithdrawAllTokenizeShareRecordRewardResponse;
                fromAmino(_: _47.MsgWithdrawAllTokenizeShareRecordRewardResponseAmino): _47.MsgWithdrawAllTokenizeShareRecordRewardResponse;
                toAmino(_: _47.MsgWithdrawAllTokenizeShareRecordRewardResponse): _47.MsgWithdrawAllTokenizeShareRecordRewardResponseAmino;
                fromAminoMsg(object: _47.MsgWithdrawAllTokenizeShareRecordRewardResponseAminoMsg): _47.MsgWithdrawAllTokenizeShareRecordRewardResponse;
                toAminoMsg(message: _47.MsgWithdrawAllTokenizeShareRecordRewardResponse): _47.MsgWithdrawAllTokenizeShareRecordRewardResponseAminoMsg;
                fromProtoMsg(message: _47.MsgWithdrawAllTokenizeShareRecordRewardResponseProtoMsg): _47.MsgWithdrawAllTokenizeShareRecordRewardResponse;
                toProto(message: _47.MsgWithdrawAllTokenizeShareRecordRewardResponse): Uint8Array;
                toProtoMsg(message: _47.MsgWithdrawAllTokenizeShareRecordRewardResponse): _47.MsgWithdrawAllTokenizeShareRecordRewardResponseProtoMsg;
            };
            QueryTokenizeShareRecordByIdRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _47.QueryTokenizeShareRecordByIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryTokenizeShareRecordByIdRequest;
                fromJSON(object: any): _47.QueryTokenizeShareRecordByIdRequest;
                toJSON(message: _47.QueryTokenizeShareRecordByIdRequest): unknown;
                fromPartial(object: {
                    id?: string | number | import("long").default;
                }): _47.QueryTokenizeShareRecordByIdRequest;
                fromAmino(object: _47.QueryTokenizeShareRecordByIdRequestAmino): _47.QueryTokenizeShareRecordByIdRequest;
                toAmino(message: _47.QueryTokenizeShareRecordByIdRequest): _47.QueryTokenizeShareRecordByIdRequestAmino;
                fromAminoMsg(object: _47.QueryTokenizeShareRecordByIdRequestAminoMsg): _47.QueryTokenizeShareRecordByIdRequest;
                toAminoMsg(message: _47.QueryTokenizeShareRecordByIdRequest): _47.QueryTokenizeShareRecordByIdRequestAminoMsg;
                fromProtoMsg(message: _47.QueryTokenizeShareRecordByIdRequestProtoMsg): _47.QueryTokenizeShareRecordByIdRequest;
                toProto(message: _47.QueryTokenizeShareRecordByIdRequest): Uint8Array;
                toProtoMsg(message: _47.QueryTokenizeShareRecordByIdRequest): _47.QueryTokenizeShareRecordByIdRequestProtoMsg;
            };
            QueryTokenizeShareRecordByIdResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _47.QueryTokenizeShareRecordByIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryTokenizeShareRecordByIdResponse;
                fromJSON(object: any): _47.QueryTokenizeShareRecordByIdResponse;
                toJSON(message: _47.QueryTokenizeShareRecordByIdResponse): unknown;
                fromPartial(object: {
                    record?: {
                        id?: string | number | import("long").default;
                        owner?: string;
                        module_account?: string;
                        validator?: string;
                    };
                }): _47.QueryTokenizeShareRecordByIdResponse;
                fromAmino(object: _47.QueryTokenizeShareRecordByIdResponseAmino): _47.QueryTokenizeShareRecordByIdResponse;
                toAmino(message: _47.QueryTokenizeShareRecordByIdResponse): _47.QueryTokenizeShareRecordByIdResponseAmino;
                fromAminoMsg(object: _47.QueryTokenizeShareRecordByIdResponseAminoMsg): _47.QueryTokenizeShareRecordByIdResponse;
                toAminoMsg(message: _47.QueryTokenizeShareRecordByIdResponse): _47.QueryTokenizeShareRecordByIdResponseAminoMsg;
                fromProtoMsg(message: _47.QueryTokenizeShareRecordByIdResponseProtoMsg): _47.QueryTokenizeShareRecordByIdResponse;
                toProto(message: _47.QueryTokenizeShareRecordByIdResponse): Uint8Array;
                toProtoMsg(message: _47.QueryTokenizeShareRecordByIdResponse): _47.QueryTokenizeShareRecordByIdResponseProtoMsg;
            };
            QueryTokenizeShareRecordByDenomRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _47.QueryTokenizeShareRecordByDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryTokenizeShareRecordByDenomRequest;
                fromJSON(object: any): _47.QueryTokenizeShareRecordByDenomRequest;
                toJSON(message: _47.QueryTokenizeShareRecordByDenomRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _47.QueryTokenizeShareRecordByDenomRequest;
                fromAmino(object: _47.QueryTokenizeShareRecordByDenomRequestAmino): _47.QueryTokenizeShareRecordByDenomRequest;
                toAmino(message: _47.QueryTokenizeShareRecordByDenomRequest): _47.QueryTokenizeShareRecordByDenomRequestAmino;
                fromAminoMsg(object: _47.QueryTokenizeShareRecordByDenomRequestAminoMsg): _47.QueryTokenizeShareRecordByDenomRequest;
                toAminoMsg(message: _47.QueryTokenizeShareRecordByDenomRequest): _47.QueryTokenizeShareRecordByDenomRequestAminoMsg;
                fromProtoMsg(message: _47.QueryTokenizeShareRecordByDenomRequestProtoMsg): _47.QueryTokenizeShareRecordByDenomRequest;
                toProto(message: _47.QueryTokenizeShareRecordByDenomRequest): Uint8Array;
                toProtoMsg(message: _47.QueryTokenizeShareRecordByDenomRequest): _47.QueryTokenizeShareRecordByDenomRequestProtoMsg;
            };
            QueryTokenizeShareRecordByDenomResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _47.QueryTokenizeShareRecordByDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryTokenizeShareRecordByDenomResponse;
                fromJSON(object: any): _47.QueryTokenizeShareRecordByDenomResponse;
                toJSON(message: _47.QueryTokenizeShareRecordByDenomResponse): unknown;
                fromPartial(object: {
                    record?: {
                        id?: string | number | import("long").default;
                        owner?: string;
                        module_account?: string;
                        validator?: string;
                    };
                }): _47.QueryTokenizeShareRecordByDenomResponse;
                fromAmino(object: _47.QueryTokenizeShareRecordByDenomResponseAmino): _47.QueryTokenizeShareRecordByDenomResponse;
                toAmino(message: _47.QueryTokenizeShareRecordByDenomResponse): _47.QueryTokenizeShareRecordByDenomResponseAmino;
                fromAminoMsg(object: _47.QueryTokenizeShareRecordByDenomResponseAminoMsg): _47.QueryTokenizeShareRecordByDenomResponse;
                toAminoMsg(message: _47.QueryTokenizeShareRecordByDenomResponse): _47.QueryTokenizeShareRecordByDenomResponseAminoMsg;
                fromProtoMsg(message: _47.QueryTokenizeShareRecordByDenomResponseProtoMsg): _47.QueryTokenizeShareRecordByDenomResponse;
                toProto(message: _47.QueryTokenizeShareRecordByDenomResponse): Uint8Array;
                toProtoMsg(message: _47.QueryTokenizeShareRecordByDenomResponse): _47.QueryTokenizeShareRecordByDenomResponseProtoMsg;
            };
            QueryTokenizeShareRecordsOwnedRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _47.QueryTokenizeShareRecordsOwnedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryTokenizeShareRecordsOwnedRequest;
                fromJSON(object: any): _47.QueryTokenizeShareRecordsOwnedRequest;
                toJSON(message: _47.QueryTokenizeShareRecordsOwnedRequest): unknown;
                fromPartial(object: {
                    owner?: string;
                }): _47.QueryTokenizeShareRecordsOwnedRequest;
                fromAmino(object: _47.QueryTokenizeShareRecordsOwnedRequestAmino): _47.QueryTokenizeShareRecordsOwnedRequest;
                toAmino(message: _47.QueryTokenizeShareRecordsOwnedRequest): _47.QueryTokenizeShareRecordsOwnedRequestAmino;
                fromAminoMsg(object: _47.QueryTokenizeShareRecordsOwnedRequestAminoMsg): _47.QueryTokenizeShareRecordsOwnedRequest;
                toAminoMsg(message: _47.QueryTokenizeShareRecordsOwnedRequest): _47.QueryTokenizeShareRecordsOwnedRequestAminoMsg;
                fromProtoMsg(message: _47.QueryTokenizeShareRecordsOwnedRequestProtoMsg): _47.QueryTokenizeShareRecordsOwnedRequest;
                toProto(message: _47.QueryTokenizeShareRecordsOwnedRequest): Uint8Array;
                toProtoMsg(message: _47.QueryTokenizeShareRecordsOwnedRequest): _47.QueryTokenizeShareRecordsOwnedRequestProtoMsg;
            };
            QueryTokenizeShareRecordsOwnedResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _47.QueryTokenizeShareRecordsOwnedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryTokenizeShareRecordsOwnedResponse;
                fromJSON(object: any): _47.QueryTokenizeShareRecordsOwnedResponse;
                toJSON(message: _47.QueryTokenizeShareRecordsOwnedResponse): unknown;
                fromPartial(object: {
                    records?: {
                        id?: string | number | import("long").default;
                        owner?: string;
                        module_account?: string;
                        validator?: string;
                    }[];
                }): _47.QueryTokenizeShareRecordsOwnedResponse;
                fromAmino(object: _47.QueryTokenizeShareRecordsOwnedResponseAmino): _47.QueryTokenizeShareRecordsOwnedResponse;
                toAmino(message: _47.QueryTokenizeShareRecordsOwnedResponse): _47.QueryTokenizeShareRecordsOwnedResponseAmino;
                fromAminoMsg(object: _47.QueryTokenizeShareRecordsOwnedResponseAminoMsg): _47.QueryTokenizeShareRecordsOwnedResponse;
                toAminoMsg(message: _47.QueryTokenizeShareRecordsOwnedResponse): _47.QueryTokenizeShareRecordsOwnedResponseAminoMsg;
                fromProtoMsg(message: _47.QueryTokenizeShareRecordsOwnedResponseProtoMsg): _47.QueryTokenizeShareRecordsOwnedResponse;
                toProto(message: _47.QueryTokenizeShareRecordsOwnedResponse): Uint8Array;
                toProtoMsg(message: _47.QueryTokenizeShareRecordsOwnedResponse): _47.QueryTokenizeShareRecordsOwnedResponseProtoMsg;
            };
            QueryAllTokenizeShareRecordsRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _47.QueryAllTokenizeShareRecordsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryAllTokenizeShareRecordsRequest;
                fromJSON(object: any): _47.QueryAllTokenizeShareRecordsRequest;
                toJSON(message: _47.QueryAllTokenizeShareRecordsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _47.QueryAllTokenizeShareRecordsRequest;
                fromAmino(object: _47.QueryAllTokenizeShareRecordsRequestAmino): _47.QueryAllTokenizeShareRecordsRequest;
                toAmino(message: _47.QueryAllTokenizeShareRecordsRequest): _47.QueryAllTokenizeShareRecordsRequestAmino;
                fromAminoMsg(object: _47.QueryAllTokenizeShareRecordsRequestAminoMsg): _47.QueryAllTokenizeShareRecordsRequest;
                toAminoMsg(message: _47.QueryAllTokenizeShareRecordsRequest): _47.QueryAllTokenizeShareRecordsRequestAminoMsg;
                fromProtoMsg(message: _47.QueryAllTokenizeShareRecordsRequestProtoMsg): _47.QueryAllTokenizeShareRecordsRequest;
                toProto(message: _47.QueryAllTokenizeShareRecordsRequest): Uint8Array;
                toProtoMsg(message: _47.QueryAllTokenizeShareRecordsRequest): _47.QueryAllTokenizeShareRecordsRequestProtoMsg;
            };
            QueryAllTokenizeShareRecordsResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _47.QueryAllTokenizeShareRecordsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryAllTokenizeShareRecordsResponse;
                fromJSON(object: any): _47.QueryAllTokenizeShareRecordsResponse;
                toJSON(message: _47.QueryAllTokenizeShareRecordsResponse): unknown;
                fromPartial(object: {
                    records?: {
                        id?: string | number | import("long").default;
                        owner?: string;
                        module_account?: string;
                        validator?: string;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _47.QueryAllTokenizeShareRecordsResponse;
                fromAmino(object: _47.QueryAllTokenizeShareRecordsResponseAmino): _47.QueryAllTokenizeShareRecordsResponse;
                toAmino(message: _47.QueryAllTokenizeShareRecordsResponse): _47.QueryAllTokenizeShareRecordsResponseAmino;
                fromAminoMsg(object: _47.QueryAllTokenizeShareRecordsResponseAminoMsg): _47.QueryAllTokenizeShareRecordsResponse;
                toAminoMsg(message: _47.QueryAllTokenizeShareRecordsResponse): _47.QueryAllTokenizeShareRecordsResponseAminoMsg;
                fromProtoMsg(message: _47.QueryAllTokenizeShareRecordsResponseProtoMsg): _47.QueryAllTokenizeShareRecordsResponse;
                toProto(message: _47.QueryAllTokenizeShareRecordsResponse): Uint8Array;
                toProtoMsg(message: _47.QueryAllTokenizeShareRecordsResponse): _47.QueryAllTokenizeShareRecordsResponseProtoMsg;
            };
            QueryLastTokenizeShareRecordIdRequest: {
                typeUrl: string;
                aminoType: string;
                encode(_: _47.QueryLastTokenizeShareRecordIdRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryLastTokenizeShareRecordIdRequest;
                fromJSON(_: any): _47.QueryLastTokenizeShareRecordIdRequest;
                toJSON(_: _47.QueryLastTokenizeShareRecordIdRequest): unknown;
                fromPartial(_: {}): _47.QueryLastTokenizeShareRecordIdRequest;
                fromAmino(_: _47.QueryLastTokenizeShareRecordIdRequestAmino): _47.QueryLastTokenizeShareRecordIdRequest;
                toAmino(_: _47.QueryLastTokenizeShareRecordIdRequest): _47.QueryLastTokenizeShareRecordIdRequestAmino;
                fromAminoMsg(object: _47.QueryLastTokenizeShareRecordIdRequestAminoMsg): _47.QueryLastTokenizeShareRecordIdRequest;
                toAminoMsg(message: _47.QueryLastTokenizeShareRecordIdRequest): _47.QueryLastTokenizeShareRecordIdRequestAminoMsg;
                fromProtoMsg(message: _47.QueryLastTokenizeShareRecordIdRequestProtoMsg): _47.QueryLastTokenizeShareRecordIdRequest;
                toProto(message: _47.QueryLastTokenizeShareRecordIdRequest): Uint8Array;
                toProtoMsg(message: _47.QueryLastTokenizeShareRecordIdRequest): _47.QueryLastTokenizeShareRecordIdRequestProtoMsg;
            };
            QueryLastTokenizeShareRecordIdResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _47.QueryLastTokenizeShareRecordIdResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryLastTokenizeShareRecordIdResponse;
                fromJSON(object: any): _47.QueryLastTokenizeShareRecordIdResponse;
                toJSON(message: _47.QueryLastTokenizeShareRecordIdResponse): unknown;
                fromPartial(object: {
                    id?: string | number | import("long").default;
                }): _47.QueryLastTokenizeShareRecordIdResponse;
                fromAmino(object: _47.QueryLastTokenizeShareRecordIdResponseAmino): _47.QueryLastTokenizeShareRecordIdResponse;
                toAmino(message: _47.QueryLastTokenizeShareRecordIdResponse): _47.QueryLastTokenizeShareRecordIdResponseAmino;
                fromAminoMsg(object: _47.QueryLastTokenizeShareRecordIdResponseAminoMsg): _47.QueryLastTokenizeShareRecordIdResponse;
                toAminoMsg(message: _47.QueryLastTokenizeShareRecordIdResponse): _47.QueryLastTokenizeShareRecordIdResponseAminoMsg;
                fromProtoMsg(message: _47.QueryLastTokenizeShareRecordIdResponseProtoMsg): _47.QueryLastTokenizeShareRecordIdResponse;
                toProto(message: _47.QueryLastTokenizeShareRecordIdResponse): Uint8Array;
                toProtoMsg(message: _47.QueryLastTokenizeShareRecordIdResponse): _47.QueryLastTokenizeShareRecordIdResponseProtoMsg;
            };
            QueryTotalTokenizeSharedAssetsRequest: {
                typeUrl: string;
                aminoType: string;
                encode(_: _47.QueryTotalTokenizeSharedAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryTotalTokenizeSharedAssetsRequest;
                fromJSON(_: any): _47.QueryTotalTokenizeSharedAssetsRequest;
                toJSON(_: _47.QueryTotalTokenizeSharedAssetsRequest): unknown;
                fromPartial(_: {}): _47.QueryTotalTokenizeSharedAssetsRequest;
                fromAmino(_: _47.QueryTotalTokenizeSharedAssetsRequestAmino): _47.QueryTotalTokenizeSharedAssetsRequest;
                toAmino(_: _47.QueryTotalTokenizeSharedAssetsRequest): _47.QueryTotalTokenizeSharedAssetsRequestAmino;
                fromAminoMsg(object: _47.QueryTotalTokenizeSharedAssetsRequestAminoMsg): _47.QueryTotalTokenizeSharedAssetsRequest;
                toAminoMsg(message: _47.QueryTotalTokenizeSharedAssetsRequest): _47.QueryTotalTokenizeSharedAssetsRequestAminoMsg;
                fromProtoMsg(message: _47.QueryTotalTokenizeSharedAssetsRequestProtoMsg): _47.QueryTotalTokenizeSharedAssetsRequest;
                toProto(message: _47.QueryTotalTokenizeSharedAssetsRequest): Uint8Array;
                toProtoMsg(message: _47.QueryTotalTokenizeSharedAssetsRequest): _47.QueryTotalTokenizeSharedAssetsRequestProtoMsg;
            };
            QueryTotalTokenizeSharedAssetsResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _47.QueryTotalTokenizeSharedAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryTotalTokenizeSharedAssetsResponse;
                fromJSON(object: any): _47.QueryTotalTokenizeSharedAssetsResponse;
                toJSON(message: _47.QueryTotalTokenizeSharedAssetsResponse): unknown;
                fromPartial(object: {
                    value?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _47.QueryTotalTokenizeSharedAssetsResponse;
                fromAmino(object: _47.QueryTotalTokenizeSharedAssetsResponseAmino): _47.QueryTotalTokenizeSharedAssetsResponse;
                toAmino(message: _47.QueryTotalTokenizeSharedAssetsResponse): _47.QueryTotalTokenizeSharedAssetsResponseAmino;
                fromAminoMsg(object: _47.QueryTotalTokenizeSharedAssetsResponseAminoMsg): _47.QueryTotalTokenizeSharedAssetsResponse;
                toAminoMsg(message: _47.QueryTotalTokenizeSharedAssetsResponse): _47.QueryTotalTokenizeSharedAssetsResponseAminoMsg;
                fromProtoMsg(message: _47.QueryTotalTokenizeSharedAssetsResponseProtoMsg): _47.QueryTotalTokenizeSharedAssetsResponse;
                toProto(message: _47.QueryTotalTokenizeSharedAssetsResponse): Uint8Array;
                toProtoMsg(message: _47.QueryTotalTokenizeSharedAssetsResponse): _47.QueryTotalTokenizeSharedAssetsResponseProtoMsg;
            };
            QueryTotalLiquidStaked: {
                typeUrl: string;
                aminoType: string;
                encode(_: _47.QueryTotalLiquidStaked, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryTotalLiquidStaked;
                fromJSON(_: any): _47.QueryTotalLiquidStaked;
                toJSON(_: _47.QueryTotalLiquidStaked): unknown;
                fromPartial(_: {}): _47.QueryTotalLiquidStaked;
                fromAmino(_: _47.QueryTotalLiquidStakedAmino): _47.QueryTotalLiquidStaked;
                toAmino(_: _47.QueryTotalLiquidStaked): _47.QueryTotalLiquidStakedAmino;
                fromAminoMsg(object: _47.QueryTotalLiquidStakedAminoMsg): _47.QueryTotalLiquidStaked;
                toAminoMsg(message: _47.QueryTotalLiquidStaked): _47.QueryTotalLiquidStakedAminoMsg;
                fromProtoMsg(message: _47.QueryTotalLiquidStakedProtoMsg): _47.QueryTotalLiquidStaked;
                toProto(message: _47.QueryTotalLiquidStaked): Uint8Array;
                toProtoMsg(message: _47.QueryTotalLiquidStaked): _47.QueryTotalLiquidStakedProtoMsg;
            };
            QueryTotalLiquidStakedResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _47.QueryTotalLiquidStakedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryTotalLiquidStakedResponse;
                fromJSON(object: any): _47.QueryTotalLiquidStakedResponse;
                toJSON(message: _47.QueryTotalLiquidStakedResponse): unknown;
                fromPartial(object: {
                    tokens?: string;
                }): _47.QueryTotalLiquidStakedResponse;
                fromAmino(object: _47.QueryTotalLiquidStakedResponseAmino): _47.QueryTotalLiquidStakedResponse;
                toAmino(message: _47.QueryTotalLiquidStakedResponse): _47.QueryTotalLiquidStakedResponseAmino;
                fromAminoMsg(object: _47.QueryTotalLiquidStakedResponseAminoMsg): _47.QueryTotalLiquidStakedResponse;
                toAminoMsg(message: _47.QueryTotalLiquidStakedResponse): _47.QueryTotalLiquidStakedResponseAminoMsg;
                fromProtoMsg(message: _47.QueryTotalLiquidStakedResponseProtoMsg): _47.QueryTotalLiquidStakedResponse;
                toProto(message: _47.QueryTotalLiquidStakedResponse): Uint8Array;
                toProtoMsg(message: _47.QueryTotalLiquidStakedResponse): _47.QueryTotalLiquidStakedResponseProtoMsg;
            };
            QueryTokenizeShareLockInfo: {
                typeUrl: string;
                aminoType: string;
                encode(message: _47.QueryTokenizeShareLockInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryTokenizeShareLockInfo;
                fromJSON(object: any): _47.QueryTokenizeShareLockInfo;
                toJSON(message: _47.QueryTokenizeShareLockInfo): unknown;
                fromPartial(object: {
                    address?: string;
                }): _47.QueryTokenizeShareLockInfo;
                fromAmino(object: _47.QueryTokenizeShareLockInfoAmino): _47.QueryTokenizeShareLockInfo;
                toAmino(message: _47.QueryTokenizeShareLockInfo): _47.QueryTokenizeShareLockInfoAmino;
                fromAminoMsg(object: _47.QueryTokenizeShareLockInfoAminoMsg): _47.QueryTokenizeShareLockInfo;
                toAminoMsg(message: _47.QueryTokenizeShareLockInfo): _47.QueryTokenizeShareLockInfoAminoMsg;
                fromProtoMsg(message: _47.QueryTokenizeShareLockInfoProtoMsg): _47.QueryTokenizeShareLockInfo;
                toProto(message: _47.QueryTokenizeShareLockInfo): Uint8Array;
                toProtoMsg(message: _47.QueryTokenizeShareLockInfo): _47.QueryTokenizeShareLockInfoProtoMsg;
            };
            QueryTokenizeShareLockInfoResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _47.QueryTokenizeShareLockInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryTokenizeShareLockInfoResponse;
                fromJSON(object: any): _47.QueryTokenizeShareLockInfoResponse;
                toJSON(message: _47.QueryTokenizeShareLockInfoResponse): unknown;
                fromPartial(object: {
                    status?: string;
                    expiration_time?: string;
                }): _47.QueryTokenizeShareLockInfoResponse;
                fromAmino(object: _47.QueryTokenizeShareLockInfoResponseAmino): _47.QueryTokenizeShareLockInfoResponse;
                toAmino(message: _47.QueryTokenizeShareLockInfoResponse): _47.QueryTokenizeShareLockInfoResponseAmino;
                fromAminoMsg(object: _47.QueryTokenizeShareLockInfoResponseAminoMsg): _47.QueryTokenizeShareLockInfoResponse;
                toAminoMsg(message: _47.QueryTokenizeShareLockInfoResponse): _47.QueryTokenizeShareLockInfoResponseAminoMsg;
                fromProtoMsg(message: _47.QueryTokenizeShareLockInfoResponseProtoMsg): _47.QueryTokenizeShareLockInfoResponse;
                toProto(message: _47.QueryTokenizeShareLockInfoResponse): Uint8Array;
                toProtoMsg(message: _47.QueryTokenizeShareLockInfoResponse): _47.QueryTokenizeShareLockInfoResponseProtoMsg;
            };
            TokenizeShareRecord: {
                typeUrl: string;
                aminoType: string;
                encode(message: _47.TokenizeShareRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.TokenizeShareRecord;
                fromJSON(object: any): _47.TokenizeShareRecord;
                toJSON(message: _47.TokenizeShareRecord): unknown;
                fromPartial(object: {
                    id?: string | number | import("long").default;
                    owner?: string;
                    module_account?: string;
                    validator?: string;
                }): _47.TokenizeShareRecord;
                fromAmino(object: _47.TokenizeShareRecordAmino): _47.TokenizeShareRecord;
                toAmino(message: _47.TokenizeShareRecord): _47.TokenizeShareRecordAmino;
                fromAminoMsg(object: _47.TokenizeShareRecordAminoMsg): _47.TokenizeShareRecord;
                toAminoMsg(message: _47.TokenizeShareRecord): _47.TokenizeShareRecordAminoMsg;
                fromProtoMsg(message: _47.TokenizeShareRecordProtoMsg): _47.TokenizeShareRecord;
                toProto(message: _47.TokenizeShareRecord): Uint8Array;
                toProtoMsg(message: _47.TokenizeShareRecord): _47.TokenizeShareRecordProtoMsg;
            };
            PendingTokenizeShareAuthorizations: {
                typeUrl: string;
                aminoType: string;
                encode(message: _47.PendingTokenizeShareAuthorizations, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.PendingTokenizeShareAuthorizations;
                fromJSON(object: any): _47.PendingTokenizeShareAuthorizations;
                toJSON(message: _47.PendingTokenizeShareAuthorizations): unknown;
                fromPartial(object: {
                    addresses?: string[];
                }): _47.PendingTokenizeShareAuthorizations;
                fromAmino(object: _47.PendingTokenizeShareAuthorizationsAmino): _47.PendingTokenizeShareAuthorizations;
                toAmino(message: _47.PendingTokenizeShareAuthorizations): _47.PendingTokenizeShareAuthorizationsAmino;
                fromAminoMsg(object: _47.PendingTokenizeShareAuthorizationsAminoMsg): _47.PendingTokenizeShareAuthorizations;
                toAminoMsg(message: _47.PendingTokenizeShareAuthorizations): _47.PendingTokenizeShareAuthorizationsAminoMsg;
                fromProtoMsg(message: _47.PendingTokenizeShareAuthorizationsProtoMsg): _47.PendingTokenizeShareAuthorizations;
                toProto(message: _47.PendingTokenizeShareAuthorizations): Uint8Array;
                toProtoMsg(message: _47.PendingTokenizeShareAuthorizations): _47.PendingTokenizeShareAuthorizationsProtoMsg;
            };
            MsgUnbondValidator: {
                typeUrl: string;
                aminoType: string;
                encode(message: _47.MsgUnbondValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgUnbondValidator;
                fromJSON(object: any): _47.MsgUnbondValidator;
                toJSON(message: _47.MsgUnbondValidator): unknown;
                fromPartial(object: {
                    validator_address?: string;
                }): _47.MsgUnbondValidator;
                fromAmino(object: _47.MsgUnbondValidatorAmino): _47.MsgUnbondValidator;
                toAmino(message: _47.MsgUnbondValidator): _47.MsgUnbondValidatorAmino;
                fromAminoMsg(object: _47.MsgUnbondValidatorAminoMsg): _47.MsgUnbondValidator;
                toAminoMsg(message: _47.MsgUnbondValidator): _47.MsgUnbondValidatorAminoMsg;
                fromProtoMsg(message: _47.MsgUnbondValidatorProtoMsg): _47.MsgUnbondValidator;
                toProto(message: _47.MsgUnbondValidator): Uint8Array;
                toProtoMsg(message: _47.MsgUnbondValidator): _47.MsgUnbondValidatorProtoMsg;
            };
            MsgUnbondValidatorResponse: {
                typeUrl: string;
                aminoType: string;
                encode(_: _47.MsgUnbondValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgUnbondValidatorResponse;
                fromJSON(_: any): _47.MsgUnbondValidatorResponse;
                toJSON(_: _47.MsgUnbondValidatorResponse): unknown;
                fromPartial(_: {}): _47.MsgUnbondValidatorResponse;
                fromAmino(_: _47.MsgUnbondValidatorResponseAmino): _47.MsgUnbondValidatorResponse;
                toAmino(_: _47.MsgUnbondValidatorResponse): _47.MsgUnbondValidatorResponseAmino;
                fromAminoMsg(object: _47.MsgUnbondValidatorResponseAminoMsg): _47.MsgUnbondValidatorResponse;
                toAminoMsg(message: _47.MsgUnbondValidatorResponse): _47.MsgUnbondValidatorResponseAminoMsg;
                fromProtoMsg(message: _47.MsgUnbondValidatorResponseProtoMsg): _47.MsgUnbondValidatorResponse;
                toProto(message: _47.MsgUnbondValidatorResponse): Uint8Array;
                toProtoMsg(message: _47.MsgUnbondValidatorResponse): _47.MsgUnbondValidatorResponseProtoMsg;
            };
            MsgTokenizeShares: {
                typeUrl: string;
                aminoType: string;
                encode(message: _47.MsgTokenizeShares, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgTokenizeShares;
                fromJSON(object: any): _47.MsgTokenizeShares;
                toJSON(message: _47.MsgTokenizeShares): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_address?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                    tokenized_share_owner?: string;
                }): _47.MsgTokenizeShares;
                fromAmino(object: _47.MsgTokenizeSharesAmino): _47.MsgTokenizeShares;
                toAmino(message: _47.MsgTokenizeShares): _47.MsgTokenizeSharesAmino;
                fromAminoMsg(object: _47.MsgTokenizeSharesAminoMsg): _47.MsgTokenizeShares;
                toAminoMsg(message: _47.MsgTokenizeShares): _47.MsgTokenizeSharesAminoMsg;
                fromProtoMsg(message: _47.MsgTokenizeSharesProtoMsg): _47.MsgTokenizeShares;
                toProto(message: _47.MsgTokenizeShares): Uint8Array;
                toProtoMsg(message: _47.MsgTokenizeShares): _47.MsgTokenizeSharesProtoMsg;
            };
            MsgTokenizeSharesResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _47.MsgTokenizeSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgTokenizeSharesResponse;
                fromJSON(object: any): _47.MsgTokenizeSharesResponse;
                toJSON(message: _47.MsgTokenizeSharesResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _47.MsgTokenizeSharesResponse;
                fromAmino(object: _47.MsgTokenizeSharesResponseAmino): _47.MsgTokenizeSharesResponse;
                toAmino(message: _47.MsgTokenizeSharesResponse): _47.MsgTokenizeSharesResponseAmino;
                fromAminoMsg(object: _47.MsgTokenizeSharesResponseAminoMsg): _47.MsgTokenizeSharesResponse;
                toAminoMsg(message: _47.MsgTokenizeSharesResponse): _47.MsgTokenizeSharesResponseAminoMsg;
                fromProtoMsg(message: _47.MsgTokenizeSharesResponseProtoMsg): _47.MsgTokenizeSharesResponse;
                toProto(message: _47.MsgTokenizeSharesResponse): Uint8Array;
                toProtoMsg(message: _47.MsgTokenizeSharesResponse): _47.MsgTokenizeSharesResponseProtoMsg;
            };
            MsgRedeemTokensForShares: {
                typeUrl: string;
                aminoType: string;
                encode(message: _47.MsgRedeemTokensForShares, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgRedeemTokensForShares;
                fromJSON(object: any): _47.MsgRedeemTokensForShares;
                toJSON(message: _47.MsgRedeemTokensForShares): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _47.MsgRedeemTokensForShares;
                fromAmino(object: _47.MsgRedeemTokensForSharesAmino): _47.MsgRedeemTokensForShares;
                toAmino(message: _47.MsgRedeemTokensForShares): _47.MsgRedeemTokensForSharesAmino;
                fromAminoMsg(object: _47.MsgRedeemTokensForSharesAminoMsg): _47.MsgRedeemTokensForShares;
                toAminoMsg(message: _47.MsgRedeemTokensForShares): _47.MsgRedeemTokensForSharesAminoMsg;
                fromProtoMsg(message: _47.MsgRedeemTokensForSharesProtoMsg): _47.MsgRedeemTokensForShares;
                toProto(message: _47.MsgRedeemTokensForShares): Uint8Array;
                toProtoMsg(message: _47.MsgRedeemTokensForShares): _47.MsgRedeemTokensForSharesProtoMsg;
            };
            MsgRedeemTokensForSharesResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _47.MsgRedeemTokensForSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgRedeemTokensForSharesResponse;
                fromJSON(object: any): _47.MsgRedeemTokensForSharesResponse;
                toJSON(message: _47.MsgRedeemTokensForSharesResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _47.MsgRedeemTokensForSharesResponse;
                fromAmino(object: _47.MsgRedeemTokensForSharesResponseAmino): _47.MsgRedeemTokensForSharesResponse;
                toAmino(message: _47.MsgRedeemTokensForSharesResponse): _47.MsgRedeemTokensForSharesResponseAmino;
                fromAminoMsg(object: _47.MsgRedeemTokensForSharesResponseAminoMsg): _47.MsgRedeemTokensForSharesResponse;
                toAminoMsg(message: _47.MsgRedeemTokensForSharesResponse): _47.MsgRedeemTokensForSharesResponseAminoMsg;
                fromProtoMsg(message: _47.MsgRedeemTokensForSharesResponseProtoMsg): _47.MsgRedeemTokensForSharesResponse;
                toProto(message: _47.MsgRedeemTokensForSharesResponse): Uint8Array;
                toProtoMsg(message: _47.MsgRedeemTokensForSharesResponse): _47.MsgRedeemTokensForSharesResponseProtoMsg;
            };
            MsgTransferTokenizeShareRecord: {
                typeUrl: string;
                aminoType: string;
                encode(message: _47.MsgTransferTokenizeShareRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgTransferTokenizeShareRecord;
                fromJSON(object: any): _47.MsgTransferTokenizeShareRecord;
                toJSON(message: _47.MsgTransferTokenizeShareRecord): unknown;
                fromPartial(object: {
                    tokenize_share_record_id?: string | number | import("long").default;
                    sender?: string;
                    new_owner?: string;
                }): _47.MsgTransferTokenizeShareRecord;
                fromAmino(object: _47.MsgTransferTokenizeShareRecordAmino): _47.MsgTransferTokenizeShareRecord;
                toAmino(message: _47.MsgTransferTokenizeShareRecord): _47.MsgTransferTokenizeShareRecordAmino;
                fromAminoMsg(object: _47.MsgTransferTokenizeShareRecordAminoMsg): _47.MsgTransferTokenizeShareRecord;
                toAminoMsg(message: _47.MsgTransferTokenizeShareRecord): _47.MsgTransferTokenizeShareRecordAminoMsg;
                fromProtoMsg(message: _47.MsgTransferTokenizeShareRecordProtoMsg): _47.MsgTransferTokenizeShareRecord;
                toProto(message: _47.MsgTransferTokenizeShareRecord): Uint8Array;
                toProtoMsg(message: _47.MsgTransferTokenizeShareRecord): _47.MsgTransferTokenizeShareRecordProtoMsg;
            };
            MsgTransferTokenizeShareRecordResponse: {
                typeUrl: string;
                aminoType: string;
                encode(_: _47.MsgTransferTokenizeShareRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgTransferTokenizeShareRecordResponse;
                fromJSON(_: any): _47.MsgTransferTokenizeShareRecordResponse;
                toJSON(_: _47.MsgTransferTokenizeShareRecordResponse): unknown;
                fromPartial(_: {}): _47.MsgTransferTokenizeShareRecordResponse;
                fromAmino(_: _47.MsgTransferTokenizeShareRecordResponseAmino): _47.MsgTransferTokenizeShareRecordResponse;
                toAmino(_: _47.MsgTransferTokenizeShareRecordResponse): _47.MsgTransferTokenizeShareRecordResponseAmino;
                fromAminoMsg(object: _47.MsgTransferTokenizeShareRecordResponseAminoMsg): _47.MsgTransferTokenizeShareRecordResponse;
                toAminoMsg(message: _47.MsgTransferTokenizeShareRecordResponse): _47.MsgTransferTokenizeShareRecordResponseAminoMsg;
                fromProtoMsg(message: _47.MsgTransferTokenizeShareRecordResponseProtoMsg): _47.MsgTransferTokenizeShareRecordResponse;
                toProto(message: _47.MsgTransferTokenizeShareRecordResponse): Uint8Array;
                toProtoMsg(message: _47.MsgTransferTokenizeShareRecordResponse): _47.MsgTransferTokenizeShareRecordResponseProtoMsg;
            };
            MsgDisableTokenizeShares: {
                typeUrl: string;
                aminoType: string;
                encode(message: _47.MsgDisableTokenizeShares, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgDisableTokenizeShares;
                fromJSON(object: any): _47.MsgDisableTokenizeShares;
                toJSON(message: _47.MsgDisableTokenizeShares): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                }): _47.MsgDisableTokenizeShares;
                fromAmino(object: _47.MsgDisableTokenizeSharesAmino): _47.MsgDisableTokenizeShares;
                toAmino(message: _47.MsgDisableTokenizeShares): _47.MsgDisableTokenizeSharesAmino;
                fromAminoMsg(object: _47.MsgDisableTokenizeSharesAminoMsg): _47.MsgDisableTokenizeShares;
                toAminoMsg(message: _47.MsgDisableTokenizeShares): _47.MsgDisableTokenizeSharesAminoMsg;
                fromProtoMsg(message: _47.MsgDisableTokenizeSharesProtoMsg): _47.MsgDisableTokenizeShares;
                toProto(message: _47.MsgDisableTokenizeShares): Uint8Array;
                toProtoMsg(message: _47.MsgDisableTokenizeShares): _47.MsgDisableTokenizeSharesProtoMsg;
            };
            MsgDisableTokenizeSharesResponse: {
                typeUrl: string;
                aminoType: string;
                encode(_: _47.MsgDisableTokenizeSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgDisableTokenizeSharesResponse;
                fromJSON(_: any): _47.MsgDisableTokenizeSharesResponse;
                toJSON(_: _47.MsgDisableTokenizeSharesResponse): unknown;
                fromPartial(_: {}): _47.MsgDisableTokenizeSharesResponse;
                fromAmino(_: _47.MsgDisableTokenizeSharesResponseAmino): _47.MsgDisableTokenizeSharesResponse;
                toAmino(_: _47.MsgDisableTokenizeSharesResponse): _47.MsgDisableTokenizeSharesResponseAmino;
                fromAminoMsg(object: _47.MsgDisableTokenizeSharesResponseAminoMsg): _47.MsgDisableTokenizeSharesResponse;
                toAminoMsg(message: _47.MsgDisableTokenizeSharesResponse): _47.MsgDisableTokenizeSharesResponseAminoMsg;
                fromProtoMsg(message: _47.MsgDisableTokenizeSharesResponseProtoMsg): _47.MsgDisableTokenizeSharesResponse;
                toProto(message: _47.MsgDisableTokenizeSharesResponse): Uint8Array;
                toProtoMsg(message: _47.MsgDisableTokenizeSharesResponse): _47.MsgDisableTokenizeSharesResponseProtoMsg;
            };
            MsgEnableTokenizeShares: {
                typeUrl: string;
                aminoType: string;
                encode(message: _47.MsgEnableTokenizeShares, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgEnableTokenizeShares;
                fromJSON(object: any): _47.MsgEnableTokenizeShares;
                toJSON(message: _47.MsgEnableTokenizeShares): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                }): _47.MsgEnableTokenizeShares;
                fromAmino(object: _47.MsgEnableTokenizeSharesAmino): _47.MsgEnableTokenizeShares;
                toAmino(message: _47.MsgEnableTokenizeShares): _47.MsgEnableTokenizeSharesAmino;
                fromAminoMsg(object: _47.MsgEnableTokenizeSharesAminoMsg): _47.MsgEnableTokenizeShares;
                toAminoMsg(message: _47.MsgEnableTokenizeShares): _47.MsgEnableTokenizeSharesAminoMsg;
                fromProtoMsg(message: _47.MsgEnableTokenizeSharesProtoMsg): _47.MsgEnableTokenizeShares;
                toProto(message: _47.MsgEnableTokenizeShares): Uint8Array;
                toProtoMsg(message: _47.MsgEnableTokenizeShares): _47.MsgEnableTokenizeSharesProtoMsg;
            };
            MsgEnableTokenizeSharesResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _47.MsgEnableTokenizeSharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgEnableTokenizeSharesResponse;
                fromJSON(object: any): _47.MsgEnableTokenizeSharesResponse;
                toJSON(message: _47.MsgEnableTokenizeSharesResponse): unknown;
                fromPartial(object: {
                    completion_time?: Date;
                }): _47.MsgEnableTokenizeSharesResponse;
                fromAmino(object: _47.MsgEnableTokenizeSharesResponseAmino): _47.MsgEnableTokenizeSharesResponse;
                toAmino(message: _47.MsgEnableTokenizeSharesResponse): _47.MsgEnableTokenizeSharesResponseAmino;
                fromAminoMsg(object: _47.MsgEnableTokenizeSharesResponseAminoMsg): _47.MsgEnableTokenizeSharesResponse;
                toAminoMsg(message: _47.MsgEnableTokenizeSharesResponse): _47.MsgEnableTokenizeSharesResponseAminoMsg;
                fromProtoMsg(message: _47.MsgEnableTokenizeSharesResponseProtoMsg): _47.MsgEnableTokenizeSharesResponse;
                toProto(message: _47.MsgEnableTokenizeSharesResponse): Uint8Array;
                toProtoMsg(message: _47.MsgEnableTokenizeSharesResponse): _47.MsgEnableTokenizeSharesResponseProtoMsg;
            };
            MsgValidatorBond: {
                typeUrl: string;
                aminoType: string;
                encode(message: _47.MsgValidatorBond, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgValidatorBond;
                fromJSON(object: any): _47.MsgValidatorBond;
                toJSON(message: _47.MsgValidatorBond): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_address?: string;
                }): _47.MsgValidatorBond;
                fromAmino(object: _47.MsgValidatorBondAmino): _47.MsgValidatorBond;
                toAmino(message: _47.MsgValidatorBond): _47.MsgValidatorBondAmino;
                fromAminoMsg(object: _47.MsgValidatorBondAminoMsg): _47.MsgValidatorBond;
                toAminoMsg(message: _47.MsgValidatorBond): _47.MsgValidatorBondAminoMsg;
                fromProtoMsg(message: _47.MsgValidatorBondProtoMsg): _47.MsgValidatorBond;
                toProto(message: _47.MsgValidatorBond): Uint8Array;
                toProtoMsg(message: _47.MsgValidatorBond): _47.MsgValidatorBondProtoMsg;
            };
            MsgValidatorBondResponse: {
                typeUrl: string;
                aminoType: string;
                encode(_: _47.MsgValidatorBondResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgValidatorBondResponse;
                fromJSON(_: any): _47.MsgValidatorBondResponse;
                toJSON(_: _47.MsgValidatorBondResponse): unknown;
                fromPartial(_: {}): _47.MsgValidatorBondResponse;
                fromAmino(_: _47.MsgValidatorBondResponseAmino): _47.MsgValidatorBondResponse;
                toAmino(_: _47.MsgValidatorBondResponse): _47.MsgValidatorBondResponseAmino;
                fromAminoMsg(object: _47.MsgValidatorBondResponseAminoMsg): _47.MsgValidatorBondResponse;
                toAminoMsg(message: _47.MsgValidatorBondResponse): _47.MsgValidatorBondResponseAminoMsg;
                fromProtoMsg(message: _47.MsgValidatorBondResponseProtoMsg): _47.MsgValidatorBondResponse;
                toProto(message: _47.MsgValidatorBondResponse): Uint8Array;
                toProtoMsg(message: _47.MsgValidatorBondResponse): _47.MsgValidatorBondResponseProtoMsg;
            };
            MsgCreateValidator: {
                typeUrl: string;
                aminoType: string;
                encode(message: _46.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.MsgCreateValidator;
                fromJSON(object: any): _46.MsgCreateValidator;
                toJSON(message: _46.MsgCreateValidator): unknown;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        security_contact?: string;
                        details?: string;
                    };
                    commission?: {
                        rate?: string;
                        max_rate?: string;
                        max_change_rate?: string;
                    };
                    min_self_delegation?: string;
                    delegator_address?: string;
                    validator_address?: string;
                    pubkey?: {
                        $typeUrl?: string;
                        type_url?: string;
                        value?: Uint8Array;
                    };
                    value?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _46.MsgCreateValidator;
                fromAmino(object: _46.MsgCreateValidatorAmino): _46.MsgCreateValidator;
                toAmino(message: _46.MsgCreateValidator): _46.MsgCreateValidatorAmino;
                fromAminoMsg(object: _46.MsgCreateValidatorAminoMsg): _46.MsgCreateValidator;
                toAminoMsg(message: _46.MsgCreateValidator): _46.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _46.MsgCreateValidatorProtoMsg): _46.MsgCreateValidator;
                toProto(message: _46.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _46.MsgCreateValidator): _46.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                aminoType: string;
                encode(_: _46.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.MsgCreateValidatorResponse;
                fromJSON(_: any): _46.MsgCreateValidatorResponse;
                toJSON(_: _46.MsgCreateValidatorResponse): unknown;
                fromPartial(_: {}): _46.MsgCreateValidatorResponse;
                fromAmino(_: _46.MsgCreateValidatorResponseAmino): _46.MsgCreateValidatorResponse;
                toAmino(_: _46.MsgCreateValidatorResponse): _46.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _46.MsgCreateValidatorResponseAminoMsg): _46.MsgCreateValidatorResponse;
                toAminoMsg(message: _46.MsgCreateValidatorResponse): _46.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _46.MsgCreateValidatorResponseProtoMsg): _46.MsgCreateValidatorResponse;
                toProto(message: _46.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _46.MsgCreateValidatorResponse): _46.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                aminoType: string;
                encode(message: _46.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.MsgEditValidator;
                fromJSON(object: any): _46.MsgEditValidator;
                toJSON(message: _46.MsgEditValidator): unknown;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        security_contact?: string;
                        details?: string;
                    };
                    validator_address?: string;
                    commission_rate?: string;
                    min_self_delegation?: string;
                }): _46.MsgEditValidator;
                fromAmino(object: _46.MsgEditValidatorAmino): _46.MsgEditValidator;
                toAmino(message: _46.MsgEditValidator): _46.MsgEditValidatorAmino;
                fromAminoMsg(object: _46.MsgEditValidatorAminoMsg): _46.MsgEditValidator;
                toAminoMsg(message: _46.MsgEditValidator): _46.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _46.MsgEditValidatorProtoMsg): _46.MsgEditValidator;
                toProto(message: _46.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _46.MsgEditValidator): _46.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                aminoType: string;
                encode(_: _46.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.MsgEditValidatorResponse;
                fromJSON(_: any): _46.MsgEditValidatorResponse;
                toJSON(_: _46.MsgEditValidatorResponse): unknown;
                fromPartial(_: {}): _46.MsgEditValidatorResponse;
                fromAmino(_: _46.MsgEditValidatorResponseAmino): _46.MsgEditValidatorResponse;
                toAmino(_: _46.MsgEditValidatorResponse): _46.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _46.MsgEditValidatorResponseAminoMsg): _46.MsgEditValidatorResponse;
                toAminoMsg(message: _46.MsgEditValidatorResponse): _46.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _46.MsgEditValidatorResponseProtoMsg): _46.MsgEditValidatorResponse;
                toProto(message: _46.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _46.MsgEditValidatorResponse): _46.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                aminoType: string;
                encode(message: _46.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.MsgDelegate;
                fromJSON(object: any): _46.MsgDelegate;
                toJSON(message: _46.MsgDelegate): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_address?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _46.MsgDelegate;
                fromAmino(object: _46.MsgDelegateAmino): _46.MsgDelegate;
                toAmino(message: _46.MsgDelegate): _46.MsgDelegateAmino;
                fromAminoMsg(object: _46.MsgDelegateAminoMsg): _46.MsgDelegate;
                toAminoMsg(message: _46.MsgDelegate): _46.MsgDelegateAminoMsg;
                fromProtoMsg(message: _46.MsgDelegateProtoMsg): _46.MsgDelegate;
                toProto(message: _46.MsgDelegate): Uint8Array;
                toProtoMsg(message: _46.MsgDelegate): _46.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                aminoType: string;
                encode(_: _46.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.MsgDelegateResponse;
                fromJSON(_: any): _46.MsgDelegateResponse;
                toJSON(_: _46.MsgDelegateResponse): unknown;
                fromPartial(_: {}): _46.MsgDelegateResponse;
                fromAmino(_: _46.MsgDelegateResponseAmino): _46.MsgDelegateResponse;
                toAmino(_: _46.MsgDelegateResponse): _46.MsgDelegateResponseAmino;
                fromAminoMsg(object: _46.MsgDelegateResponseAminoMsg): _46.MsgDelegateResponse;
                toAminoMsg(message: _46.MsgDelegateResponse): _46.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _46.MsgDelegateResponseProtoMsg): _46.MsgDelegateResponse;
                toProto(message: _46.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _46.MsgDelegateResponse): _46.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                aminoType: string;
                encode(message: _46.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.MsgBeginRedelegate;
                fromJSON(object: any): _46.MsgBeginRedelegate;
                toJSON(message: _46.MsgBeginRedelegate): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_src_address?: string;
                    validator_dst_address?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _46.MsgBeginRedelegate;
                fromAmino(object: _46.MsgBeginRedelegateAmino): _46.MsgBeginRedelegate;
                toAmino(message: _46.MsgBeginRedelegate): _46.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _46.MsgBeginRedelegateAminoMsg): _46.MsgBeginRedelegate;
                toAminoMsg(message: _46.MsgBeginRedelegate): _46.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _46.MsgBeginRedelegateProtoMsg): _46.MsgBeginRedelegate;
                toProto(message: _46.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _46.MsgBeginRedelegate): _46.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _46.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.MsgBeginRedelegateResponse;
                fromJSON(object: any): _46.MsgBeginRedelegateResponse;
                toJSON(message: _46.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: {
                    completion_time?: Date;
                }): _46.MsgBeginRedelegateResponse;
                fromAmino(object: _46.MsgBeginRedelegateResponseAmino): _46.MsgBeginRedelegateResponse;
                toAmino(message: _46.MsgBeginRedelegateResponse): _46.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _46.MsgBeginRedelegateResponseAminoMsg): _46.MsgBeginRedelegateResponse;
                toAminoMsg(message: _46.MsgBeginRedelegateResponse): _46.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _46.MsgBeginRedelegateResponseProtoMsg): _46.MsgBeginRedelegateResponse;
                toProto(message: _46.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _46.MsgBeginRedelegateResponse): _46.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                aminoType: string;
                encode(message: _46.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.MsgUndelegate;
                fromJSON(object: any): _46.MsgUndelegate;
                toJSON(message: _46.MsgUndelegate): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_address?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _46.MsgUndelegate;
                fromAmino(object: _46.MsgUndelegateAmino): _46.MsgUndelegate;
                toAmino(message: _46.MsgUndelegate): _46.MsgUndelegateAmino;
                fromAminoMsg(object: _46.MsgUndelegateAminoMsg): _46.MsgUndelegate;
                toAminoMsg(message: _46.MsgUndelegate): _46.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _46.MsgUndelegateProtoMsg): _46.MsgUndelegate;
                toProto(message: _46.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _46.MsgUndelegate): _46.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _46.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.MsgUndelegateResponse;
                fromJSON(object: any): _46.MsgUndelegateResponse;
                toJSON(message: _46.MsgUndelegateResponse): unknown;
                fromPartial(object: {
                    completion_time?: Date;
                }): _46.MsgUndelegateResponse;
                fromAmino(object: _46.MsgUndelegateResponseAmino): _46.MsgUndelegateResponse;
                toAmino(message: _46.MsgUndelegateResponse): _46.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _46.MsgUndelegateResponseAminoMsg): _46.MsgUndelegateResponse;
                toAminoMsg(message: _46.MsgUndelegateResponse): _46.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _46.MsgUndelegateResponseProtoMsg): _46.MsgUndelegateResponse;
                toProto(message: _46.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _46.MsgUndelegateResponse): _46.MsgUndelegateResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => string;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => {
                typeUrl: string;
                value: Uint8Array;
            };
            bondStatusFromJSON(object: any): _45.BondStatus;
            bondStatusToJSON(object: _45.BondStatus): string;
            BondStatus: typeof _45.BondStatus;
            BondStatusSDKType: typeof _45.BondStatus;
            BondStatusAmino: typeof _45.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                aminoType: string;
                encode(message: _45.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.HistoricalInfo;
                fromJSON(object: any): _45.HistoricalInfo;
                toJSON(message: _45.HistoricalInfo): unknown;
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
                    valset?: {
                        operator_address?: string;
                        consensus_pubkey?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _45.BondStatus;
                        tokens?: string;
                        delegator_shares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            security_contact?: string;
                            details?: string;
                        };
                        unbonding_height?: string | number | import("long").default;
                        unbonding_time?: Date;
                        commission?: {
                            commission_rates?: {
                                rate?: string;
                                max_rate?: string;
                                max_change_rate?: string;
                            };
                            update_time?: Date;
                        };
                        min_self_delegation?: string;
                    }[];
                }): _45.HistoricalInfo;
                fromAmino(object: _45.HistoricalInfoAmino): _45.HistoricalInfo;
                toAmino(message: _45.HistoricalInfo): _45.HistoricalInfoAmino;
                fromAminoMsg(object: _45.HistoricalInfoAminoMsg): _45.HistoricalInfo;
                toAminoMsg(message: _45.HistoricalInfo): _45.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _45.HistoricalInfoProtoMsg): _45.HistoricalInfo;
                toProto(message: _45.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _45.HistoricalInfo): _45.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                aminoType: string;
                encode(message: _45.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.CommissionRates;
                fromJSON(object: any): _45.CommissionRates;
                toJSON(message: _45.CommissionRates): unknown;
                fromPartial(object: {
                    rate?: string;
                    max_rate?: string;
                    max_change_rate?: string;
                }): _45.CommissionRates;
                fromAmino(object: _45.CommissionRatesAmino): _45.CommissionRates;
                toAmino(message: _45.CommissionRates): _45.CommissionRatesAmino;
                fromAminoMsg(object: _45.CommissionRatesAminoMsg): _45.CommissionRates;
                toAminoMsg(message: _45.CommissionRates): _45.CommissionRatesAminoMsg;
                fromProtoMsg(message: _45.CommissionRatesProtoMsg): _45.CommissionRates;
                toProto(message: _45.CommissionRates): Uint8Array;
                toProtoMsg(message: _45.CommissionRates): _45.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                aminoType: string;
                encode(message: _45.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Commission;
                fromJSON(object: any): _45.Commission;
                toJSON(message: _45.Commission): unknown;
                fromPartial(object: {
                    commission_rates?: {
                        rate?: string;
                        max_rate?: string;
                        max_change_rate?: string;
                    };
                    update_time?: Date;
                }): _45.Commission;
                fromAmino(object: _45.CommissionAmino): _45.Commission;
                toAmino(message: _45.Commission): _45.CommissionAmino;
                fromAminoMsg(object: _45.CommissionAminoMsg): _45.Commission;
                toAminoMsg(message: _45.Commission): _45.CommissionAminoMsg;
                fromProtoMsg(message: _45.CommissionProtoMsg): _45.Commission;
                toProto(message: _45.Commission): Uint8Array;
                toProtoMsg(message: _45.Commission): _45.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                aminoType: string;
                encode(message: _45.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Description;
                fromJSON(object: any): _45.Description;
                toJSON(message: _45.Description): unknown;
                fromPartial(object: {
                    moniker?: string;
                    identity?: string;
                    website?: string;
                    security_contact?: string;
                    details?: string;
                }): _45.Description;
                fromAmino(object: _45.DescriptionAmino): _45.Description;
                toAmino(message: _45.Description): _45.DescriptionAmino;
                fromAminoMsg(object: _45.DescriptionAminoMsg): _45.Description;
                toAminoMsg(message: _45.Description): _45.DescriptionAminoMsg;
                fromProtoMsg(message: _45.DescriptionProtoMsg): _45.Description;
                toProto(message: _45.Description): Uint8Array;
                toProtoMsg(message: _45.Description): _45.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                aminoType: string;
                encode(message: _45.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Validator;
                fromJSON(object: any): _45.Validator;
                toJSON(message: _45.Validator): unknown;
                fromPartial(object: {
                    operator_address?: string;
                    consensus_pubkey?: {
                        $typeUrl?: string;
                        type_url?: string;
                        value?: Uint8Array;
                    };
                    jailed?: boolean;
                    status?: _45.BondStatus;
                    tokens?: string;
                    delegator_shares?: string;
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        security_contact?: string;
                        details?: string;
                    };
                    unbonding_height?: string | number | import("long").default;
                    unbonding_time?: Date;
                    commission?: {
                        commission_rates?: {
                            rate?: string;
                            max_rate?: string;
                            max_change_rate?: string;
                        };
                        update_time?: Date;
                    };
                    min_self_delegation?: string;
                }): _45.Validator;
                fromAmino(object: _45.ValidatorAmino): _45.Validator;
                toAmino(message: _45.Validator): _45.ValidatorAmino;
                fromAminoMsg(object: _45.ValidatorAminoMsg): _45.Validator;
                toAminoMsg(message: _45.Validator): _45.ValidatorAminoMsg;
                fromProtoMsg(message: _45.ValidatorProtoMsg): _45.Validator;
                toProto(message: _45.Validator): Uint8Array;
                toProtoMsg(message: _45.Validator): _45.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                aminoType: string;
                encode(message: _45.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.ValAddresses;
                fromJSON(object: any): _45.ValAddresses;
                toJSON(message: _45.ValAddresses): unknown;
                fromPartial(object: {
                    addresses?: string[];
                }): _45.ValAddresses;
                fromAmino(object: _45.ValAddressesAmino): _45.ValAddresses;
                toAmino(message: _45.ValAddresses): _45.ValAddressesAmino;
                fromAminoMsg(object: _45.ValAddressesAminoMsg): _45.ValAddresses;
                toAminoMsg(message: _45.ValAddresses): _45.ValAddressesAminoMsg;
                fromProtoMsg(message: _45.ValAddressesProtoMsg): _45.ValAddresses;
                toProto(message: _45.ValAddresses): Uint8Array;
                toProtoMsg(message: _45.ValAddresses): _45.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                aminoType: string;
                encode(message: _45.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.DVPair;
                fromJSON(object: any): _45.DVPair;
                toJSON(message: _45.DVPair): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_address?: string;
                }): _45.DVPair;
                fromAmino(object: _45.DVPairAmino): _45.DVPair;
                toAmino(message: _45.DVPair): _45.DVPairAmino;
                fromAminoMsg(object: _45.DVPairAminoMsg): _45.DVPair;
                toAminoMsg(message: _45.DVPair): _45.DVPairAminoMsg;
                fromProtoMsg(message: _45.DVPairProtoMsg): _45.DVPair;
                toProto(message: _45.DVPair): Uint8Array;
                toProtoMsg(message: _45.DVPair): _45.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                aminoType: string;
                encode(message: _45.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.DVPairs;
                fromJSON(object: any): _45.DVPairs;
                toJSON(message: _45.DVPairs): unknown;
                fromPartial(object: {
                    pairs?: {
                        delegator_address?: string;
                        validator_address?: string;
                    }[];
                }): _45.DVPairs;
                fromAmino(object: _45.DVPairsAmino): _45.DVPairs;
                toAmino(message: _45.DVPairs): _45.DVPairsAmino;
                fromAminoMsg(object: _45.DVPairsAminoMsg): _45.DVPairs;
                toAminoMsg(message: _45.DVPairs): _45.DVPairsAminoMsg;
                fromProtoMsg(message: _45.DVPairsProtoMsg): _45.DVPairs;
                toProto(message: _45.DVPairs): Uint8Array;
                toProtoMsg(message: _45.DVPairs): _45.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                aminoType: string;
                encode(message: _45.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.DVVTriplet;
                fromJSON(object: any): _45.DVVTriplet;
                toJSON(message: _45.DVVTriplet): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_src_address?: string;
                    validator_dst_address?: string;
                }): _45.DVVTriplet;
                fromAmino(object: _45.DVVTripletAmino): _45.DVVTriplet;
                toAmino(message: _45.DVVTriplet): _45.DVVTripletAmino;
                fromAminoMsg(object: _45.DVVTripletAminoMsg): _45.DVVTriplet;
                toAminoMsg(message: _45.DVVTriplet): _45.DVVTripletAminoMsg;
                fromProtoMsg(message: _45.DVVTripletProtoMsg): _45.DVVTriplet;
                toProto(message: _45.DVVTriplet): Uint8Array;
                toProtoMsg(message: _45.DVVTriplet): _45.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                aminoType: string;
                encode(message: _45.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.DVVTriplets;
                fromJSON(object: any): _45.DVVTriplets;
                toJSON(message: _45.DVVTriplets): unknown;
                fromPartial(object: {
                    triplets?: {
                        delegator_address?: string;
                        validator_src_address?: string;
                        validator_dst_address?: string;
                    }[];
                }): _45.DVVTriplets;
                fromAmino(object: _45.DVVTripletsAmino): _45.DVVTriplets;
                toAmino(message: _45.DVVTriplets): _45.DVVTripletsAmino;
                fromAminoMsg(object: _45.DVVTripletsAminoMsg): _45.DVVTriplets;
                toAminoMsg(message: _45.DVVTriplets): _45.DVVTripletsAminoMsg;
                fromProtoMsg(message: _45.DVVTripletsProtoMsg): _45.DVVTriplets;
                toProto(message: _45.DVVTriplets): Uint8Array;
                toProtoMsg(message: _45.DVVTriplets): _45.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                aminoType: string;
                encode(message: _45.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Delegation;
                fromJSON(object: any): _45.Delegation;
                toJSON(message: _45.Delegation): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_address?: string;
                    shares?: string;
                }): _45.Delegation;
                fromAmino(object: _45.DelegationAmino): _45.Delegation;
                toAmino(message: _45.Delegation): _45.DelegationAmino;
                fromAminoMsg(object: _45.DelegationAminoMsg): _45.Delegation;
                toAminoMsg(message: _45.Delegation): _45.DelegationAminoMsg;
                fromProtoMsg(message: _45.DelegationProtoMsg): _45.Delegation;
                toProto(message: _45.Delegation): Uint8Array;
                toProtoMsg(message: _45.Delegation): _45.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                aminoType: string;
                encode(message: _45.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.UnbondingDelegation;
                fromJSON(object: any): _45.UnbondingDelegation;
                toJSON(message: _45.UnbondingDelegation): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_address?: string;
                    entries?: {
                        creation_height?: string | number | import("long").default;
                        completion_time?: Date;
                        initial_balance?: string;
                        balance?: string;
                    }[];
                }): _45.UnbondingDelegation;
                fromAmino(object: _45.UnbondingDelegationAmino): _45.UnbondingDelegation;
                toAmino(message: _45.UnbondingDelegation): _45.UnbondingDelegationAmino;
                fromAminoMsg(object: _45.UnbondingDelegationAminoMsg): _45.UnbondingDelegation;
                toAminoMsg(message: _45.UnbondingDelegation): _45.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _45.UnbondingDelegationProtoMsg): _45.UnbondingDelegation;
                toProto(message: _45.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _45.UnbondingDelegation): _45.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                aminoType: string;
                encode(message: _45.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.UnbondingDelegationEntry;
                fromJSON(object: any): _45.UnbondingDelegationEntry;
                toJSON(message: _45.UnbondingDelegationEntry): unknown;
                fromPartial(object: {
                    creation_height?: string | number | import("long").default;
                    completion_time?: Date;
                    initial_balance?: string;
                    balance?: string;
                }): _45.UnbondingDelegationEntry;
                fromAmino(object: _45.UnbondingDelegationEntryAmino): _45.UnbondingDelegationEntry;
                toAmino(message: _45.UnbondingDelegationEntry): _45.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _45.UnbondingDelegationEntryAminoMsg): _45.UnbondingDelegationEntry;
                toAminoMsg(message: _45.UnbondingDelegationEntry): _45.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _45.UnbondingDelegationEntryProtoMsg): _45.UnbondingDelegationEntry;
                toProto(message: _45.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _45.UnbondingDelegationEntry): _45.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                aminoType: string;
                encode(message: _45.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.RedelegationEntry;
                fromJSON(object: any): _45.RedelegationEntry;
                toJSON(message: _45.RedelegationEntry): unknown;
                fromPartial(object: {
                    creation_height?: string | number | import("long").default;
                    completion_time?: Date;
                    initial_balance?: string;
                    shares_dst?: string;
                }): _45.RedelegationEntry;
                fromAmino(object: _45.RedelegationEntryAmino): _45.RedelegationEntry;
                toAmino(message: _45.RedelegationEntry): _45.RedelegationEntryAmino;
                fromAminoMsg(object: _45.RedelegationEntryAminoMsg): _45.RedelegationEntry;
                toAminoMsg(message: _45.RedelegationEntry): _45.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _45.RedelegationEntryProtoMsg): _45.RedelegationEntry;
                toProto(message: _45.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _45.RedelegationEntry): _45.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                aminoType: string;
                encode(message: _45.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Redelegation;
                fromJSON(object: any): _45.Redelegation;
                toJSON(message: _45.Redelegation): unknown;
                fromPartial(object: {
                    delegator_address?: string;
                    validator_src_address?: string;
                    validator_dst_address?: string;
                    entries?: {
                        creation_height?: string | number | import("long").default;
                        completion_time?: Date;
                        initial_balance?: string;
                        shares_dst?: string;
                    }[];
                }): _45.Redelegation;
                fromAmino(object: _45.RedelegationAmino): _45.Redelegation;
                toAmino(message: _45.Redelegation): _45.RedelegationAmino;
                fromAminoMsg(object: _45.RedelegationAminoMsg): _45.Redelegation;
                toAminoMsg(message: _45.Redelegation): _45.RedelegationAminoMsg;
                fromProtoMsg(message: _45.RedelegationProtoMsg): _45.Redelegation;
                toProto(message: _45.Redelegation): Uint8Array;
                toProtoMsg(message: _45.Redelegation): _45.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                aminoType: string;
                encode(message: _45.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Params;
                fromJSON(object: any): _45.Params;
                toJSON(message: _45.Params): unknown;
                fromPartial(object: {
                    unbonding_time?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    max_validators?: number;
                    max_entries?: number;
                    historical_entries?: number;
                    bond_denom?: string;
                    min_commission_rate?: string;
                }): _45.Params;
                fromAmino(object: _45.ParamsAmino): _45.Params;
                toAmino(message: _45.Params): _45.ParamsAmino;
                fromAminoMsg(object: _45.ParamsAminoMsg): _45.Params;
                toAminoMsg(message: _45.Params): _45.ParamsAminoMsg;
                fromProtoMsg(message: _45.ParamsProtoMsg): _45.Params;
                toProto(message: _45.Params): Uint8Array;
                toProtoMsg(message: _45.Params): _45.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _45.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.DelegationResponse;
                fromJSON(object: any): _45.DelegationResponse;
                toJSON(message: _45.DelegationResponse): unknown;
                fromPartial(object: {
                    delegation?: {
                        delegator_address?: string;
                        validator_address?: string;
                        shares?: string;
                    };
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _45.DelegationResponse;
                fromAmino(object: _45.DelegationResponseAmino): _45.DelegationResponse;
                toAmino(message: _45.DelegationResponse): _45.DelegationResponseAmino;
                fromAminoMsg(object: _45.DelegationResponseAminoMsg): _45.DelegationResponse;
                toAminoMsg(message: _45.DelegationResponse): _45.DelegationResponseAminoMsg;
                fromProtoMsg(message: _45.DelegationResponseProtoMsg): _45.DelegationResponse;
                toProto(message: _45.DelegationResponse): Uint8Array;
                toProtoMsg(message: _45.DelegationResponse): _45.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _45.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.RedelegationEntryResponse;
                fromJSON(object: any): _45.RedelegationEntryResponse;
                toJSON(message: _45.RedelegationEntryResponse): unknown;
                fromPartial(object: {
                    redelegation_entry?: {
                        creation_height?: string | number | import("long").default;
                        completion_time?: Date;
                        initial_balance?: string;
                        shares_dst?: string;
                    };
                    balance?: string;
                }): _45.RedelegationEntryResponse;
                fromAmino(object: _45.RedelegationEntryResponseAmino): _45.RedelegationEntryResponse;
                toAmino(message: _45.RedelegationEntryResponse): _45.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _45.RedelegationEntryResponseAminoMsg): _45.RedelegationEntryResponse;
                toAminoMsg(message: _45.RedelegationEntryResponse): _45.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _45.RedelegationEntryResponseProtoMsg): _45.RedelegationEntryResponse;
                toProto(message: _45.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _45.RedelegationEntryResponse): _45.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _45.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.RedelegationResponse;
                fromJSON(object: any): _45.RedelegationResponse;
                toJSON(message: _45.RedelegationResponse): unknown;
                fromPartial(object: {
                    redelegation?: {
                        delegator_address?: string;
                        validator_src_address?: string;
                        validator_dst_address?: string;
                        entries?: {
                            creation_height?: string | number | import("long").default;
                            completion_time?: Date;
                            initial_balance?: string;
                            shares_dst?: string;
                        }[];
                    };
                    entries?: {
                        redelegation_entry?: {
                            creation_height?: string | number | import("long").default;
                            completion_time?: Date;
                            initial_balance?: string;
                            shares_dst?: string;
                        };
                        balance?: string;
                    }[];
                }): _45.RedelegationResponse;
                fromAmino(object: _45.RedelegationResponseAmino): _45.RedelegationResponse;
                toAmino(message: _45.RedelegationResponse): _45.RedelegationResponseAmino;
                fromAminoMsg(object: _45.RedelegationResponseAminoMsg): _45.RedelegationResponse;
                toAminoMsg(message: _45.RedelegationResponse): _45.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _45.RedelegationResponseProtoMsg): _45.RedelegationResponse;
                toProto(message: _45.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _45.RedelegationResponse): _45.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                aminoType: string;
                encode(message: _45.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Pool;
                fromJSON(object: any): _45.Pool;
                toJSON(message: _45.Pool): unknown;
                fromPartial(object: {
                    not_bonded_tokens?: string;
                    bonded_tokens?: string;
                }): _45.Pool;
                fromAmino(object: _45.PoolAmino): _45.Pool;
                toAmino(message: _45.Pool): _45.PoolAmino;
                fromAminoMsg(object: _45.PoolAminoMsg): _45.Pool;
                toAminoMsg(message: _45.Pool): _45.PoolAminoMsg;
                fromProtoMsg(message: _45.PoolProtoMsg): _45.Pool;
                toProto(message: _45.Pool): Uint8Array;
                toProtoMsg(message: _45.Pool): _45.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _44.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryValidatorsRequest;
                fromJSON(object: any): _44.QueryValidatorsRequest;
                toJSON(message: _44.QueryValidatorsRequest): unknown;
                fromPartial(object: {
                    status?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _44.QueryValidatorsRequest;
                fromAmino(object: _44.QueryValidatorsRequestAmino): _44.QueryValidatorsRequest;
                toAmino(message: _44.QueryValidatorsRequest): _44.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _44.QueryValidatorsRequestAminoMsg): _44.QueryValidatorsRequest;
                toAminoMsg(message: _44.QueryValidatorsRequest): _44.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _44.QueryValidatorsRequestProtoMsg): _44.QueryValidatorsRequest;
                toProto(message: _44.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _44.QueryValidatorsRequest): _44.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _44.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryValidatorsResponse;
                fromJSON(object: any): _44.QueryValidatorsResponse;
                toJSON(message: _44.QueryValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: {
                        operator_address?: string;
                        consensus_pubkey?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _45.BondStatus;
                        tokens?: string;
                        delegator_shares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            security_contact?: string;
                            details?: string;
                        };
                        unbonding_height?: string | number | import("long").default;
                        unbonding_time?: Date;
                        commission?: {
                            commission_rates?: {
                                rate?: string;
                                max_rate?: string;
                                max_change_rate?: string;
                            };
                            update_time?: Date;
                        };
                        min_self_delegation?: string;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _44.QueryValidatorsResponse;
                fromAmino(object: _44.QueryValidatorsResponseAmino): _44.QueryValidatorsResponse;
                toAmino(message: _44.QueryValidatorsResponse): _44.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _44.QueryValidatorsResponseAminoMsg): _44.QueryValidatorsResponse;
                toAminoMsg(message: _44.QueryValidatorsResponse): _44.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _44.QueryValidatorsResponseProtoMsg): _44.QueryValidatorsResponse;
                toProto(message: _44.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _44.QueryValidatorsResponse): _44.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _44.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryValidatorRequest;
                fromJSON(object: any): _44.QueryValidatorRequest;
                toJSON(message: _44.QueryValidatorRequest): unknown;
                fromPartial(object: {
                    validator_addr?: string;
                }): _44.QueryValidatorRequest;
                fromAmino(object: _44.QueryValidatorRequestAmino): _44.QueryValidatorRequest;
                toAmino(message: _44.QueryValidatorRequest): _44.QueryValidatorRequestAmino;
                fromAminoMsg(object: _44.QueryValidatorRequestAminoMsg): _44.QueryValidatorRequest;
                toAminoMsg(message: _44.QueryValidatorRequest): _44.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _44.QueryValidatorRequestProtoMsg): _44.QueryValidatorRequest;
                toProto(message: _44.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _44.QueryValidatorRequest): _44.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _44.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryValidatorResponse;
                fromJSON(object: any): _44.QueryValidatorResponse;
                toJSON(message: _44.QueryValidatorResponse): unknown;
                fromPartial(object: {
                    validator?: {
                        operator_address?: string;
                        consensus_pubkey?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _45.BondStatus;
                        tokens?: string;
                        delegator_shares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            security_contact?: string;
                            details?: string;
                        };
                        unbonding_height?: string | number | import("long").default;
                        unbonding_time?: Date;
                        commission?: {
                            commission_rates?: {
                                rate?: string;
                                max_rate?: string;
                                max_change_rate?: string;
                            };
                            update_time?: Date;
                        };
                        min_self_delegation?: string;
                    };
                }): _44.QueryValidatorResponse;
                fromAmino(object: _44.QueryValidatorResponseAmino): _44.QueryValidatorResponse;
                toAmino(message: _44.QueryValidatorResponse): _44.QueryValidatorResponseAmino;
                fromAminoMsg(object: _44.QueryValidatorResponseAminoMsg): _44.QueryValidatorResponse;
                toAminoMsg(message: _44.QueryValidatorResponse): _44.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _44.QueryValidatorResponseProtoMsg): _44.QueryValidatorResponse;
                toProto(message: _44.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _44.QueryValidatorResponse): _44.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _44.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _44.QueryValidatorDelegationsRequest;
                toJSON(message: _44.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: {
                    validator_addr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _44.QueryValidatorDelegationsRequest;
                fromAmino(object: _44.QueryValidatorDelegationsRequestAmino): _44.QueryValidatorDelegationsRequest;
                toAmino(message: _44.QueryValidatorDelegationsRequest): _44.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _44.QueryValidatorDelegationsRequestAminoMsg): _44.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _44.QueryValidatorDelegationsRequest): _44.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _44.QueryValidatorDelegationsRequestProtoMsg): _44.QueryValidatorDelegationsRequest;
                toProto(message: _44.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _44.QueryValidatorDelegationsRequest): _44.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _44.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _44.QueryValidatorDelegationsResponse;
                toJSON(message: _44.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: {
                    delegation_responses?: {
                        delegation?: {
                            delegator_address?: string;
                            validator_address?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _44.QueryValidatorDelegationsResponse;
                fromAmino(object: _44.QueryValidatorDelegationsResponseAmino): _44.QueryValidatorDelegationsResponse;
                toAmino(message: _44.QueryValidatorDelegationsResponse): _44.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _44.QueryValidatorDelegationsResponseAminoMsg): _44.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _44.QueryValidatorDelegationsResponse): _44.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _44.QueryValidatorDelegationsResponseProtoMsg): _44.QueryValidatorDelegationsResponse;
                toProto(message: _44.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _44.QueryValidatorDelegationsResponse): _44.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _44.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _44.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _44.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: {
                    validator_addr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _44.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _44.QueryValidatorUnbondingDelegationsRequestAmino): _44.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _44.QueryValidatorUnbondingDelegationsRequest): _44.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _44.QueryValidatorUnbondingDelegationsRequestAminoMsg): _44.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _44.QueryValidatorUnbondingDelegationsRequest): _44.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _44.QueryValidatorUnbondingDelegationsRequestProtoMsg): _44.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _44.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _44.QueryValidatorUnbondingDelegationsRequest): _44.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _44.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _44.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _44.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: {
                    unbonding_responses?: {
                        delegator_address?: string;
                        validator_address?: string;
                        entries?: {
                            creation_height?: string | number | import("long").default;
                            completion_time?: Date;
                            initial_balance?: string;
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _44.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _44.QueryValidatorUnbondingDelegationsResponseAmino): _44.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _44.QueryValidatorUnbondingDelegationsResponse): _44.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _44.QueryValidatorUnbondingDelegationsResponseAminoMsg): _44.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _44.QueryValidatorUnbondingDelegationsResponse): _44.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _44.QueryValidatorUnbondingDelegationsResponseProtoMsg): _44.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _44.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _44.QueryValidatorUnbondingDelegationsResponse): _44.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _44.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryDelegationRequest;
                fromJSON(object: any): _44.QueryDelegationRequest;
                toJSON(message: _44.QueryDelegationRequest): unknown;
                fromPartial(object: {
                    delegator_addr?: string;
                    validator_addr?: string;
                }): _44.QueryDelegationRequest;
                fromAmino(object: _44.QueryDelegationRequestAmino): _44.QueryDelegationRequest;
                toAmino(message: _44.QueryDelegationRequest): _44.QueryDelegationRequestAmino;
                fromAminoMsg(object: _44.QueryDelegationRequestAminoMsg): _44.QueryDelegationRequest;
                toAminoMsg(message: _44.QueryDelegationRequest): _44.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _44.QueryDelegationRequestProtoMsg): _44.QueryDelegationRequest;
                toProto(message: _44.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _44.QueryDelegationRequest): _44.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _44.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryDelegationResponse;
                fromJSON(object: any): _44.QueryDelegationResponse;
                toJSON(message: _44.QueryDelegationResponse): unknown;
                fromPartial(object: {
                    delegation_response?: {
                        delegation?: {
                            delegator_address?: string;
                            validator_address?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _44.QueryDelegationResponse;
                fromAmino(object: _44.QueryDelegationResponseAmino): _44.QueryDelegationResponse;
                toAmino(message: _44.QueryDelegationResponse): _44.QueryDelegationResponseAmino;
                fromAminoMsg(object: _44.QueryDelegationResponseAminoMsg): _44.QueryDelegationResponse;
                toAminoMsg(message: _44.QueryDelegationResponse): _44.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _44.QueryDelegationResponseProtoMsg): _44.QueryDelegationResponse;
                toProto(message: _44.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _44.QueryDelegationResponse): _44.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _44.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _44.QueryUnbondingDelegationRequest;
                toJSON(message: _44.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: {
                    delegator_addr?: string;
                    validator_addr?: string;
                }): _44.QueryUnbondingDelegationRequest;
                fromAmino(object: _44.QueryUnbondingDelegationRequestAmino): _44.QueryUnbondingDelegationRequest;
                toAmino(message: _44.QueryUnbondingDelegationRequest): _44.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _44.QueryUnbondingDelegationRequestAminoMsg): _44.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _44.QueryUnbondingDelegationRequest): _44.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _44.QueryUnbondingDelegationRequestProtoMsg): _44.QueryUnbondingDelegationRequest;
                toProto(message: _44.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _44.QueryUnbondingDelegationRequest): _44.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _44.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _44.QueryUnbondingDelegationResponse;
                toJSON(message: _44.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: {
                    unbond?: {
                        delegator_address?: string;
                        validator_address?: string;
                        entries?: {
                            creation_height?: string | number | import("long").default;
                            completion_time?: Date;
                            initial_balance?: string;
                            balance?: string;
                        }[];
                    };
                }): _44.QueryUnbondingDelegationResponse;
                fromAmino(object: _44.QueryUnbondingDelegationResponseAmino): _44.QueryUnbondingDelegationResponse;
                toAmino(message: _44.QueryUnbondingDelegationResponse): _44.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _44.QueryUnbondingDelegationResponseAminoMsg): _44.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _44.QueryUnbondingDelegationResponse): _44.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _44.QueryUnbondingDelegationResponseProtoMsg): _44.QueryUnbondingDelegationResponse;
                toProto(message: _44.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _44.QueryUnbondingDelegationResponse): _44.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _44.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _44.QueryDelegatorDelegationsRequest;
                toJSON(message: _44.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: {
                    delegator_addr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _44.QueryDelegatorDelegationsRequest;
                fromAmino(object: _44.QueryDelegatorDelegationsRequestAmino): _44.QueryDelegatorDelegationsRequest;
                toAmino(message: _44.QueryDelegatorDelegationsRequest): _44.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _44.QueryDelegatorDelegationsRequestAminoMsg): _44.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _44.QueryDelegatorDelegationsRequest): _44.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _44.QueryDelegatorDelegationsRequestProtoMsg): _44.QueryDelegatorDelegationsRequest;
                toProto(message: _44.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _44.QueryDelegatorDelegationsRequest): _44.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _44.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _44.QueryDelegatorDelegationsResponse;
                toJSON(message: _44.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: {
                    delegation_responses?: {
                        delegation?: {
                            delegator_address?: string;
                            validator_address?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _44.QueryDelegatorDelegationsResponse;
                fromAmino(object: _44.QueryDelegatorDelegationsResponseAmino): _44.QueryDelegatorDelegationsResponse;
                toAmino(message: _44.QueryDelegatorDelegationsResponse): _44.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _44.QueryDelegatorDelegationsResponseAminoMsg): _44.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _44.QueryDelegatorDelegationsResponse): _44.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _44.QueryDelegatorDelegationsResponseProtoMsg): _44.QueryDelegatorDelegationsResponse;
                toProto(message: _44.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _44.QueryDelegatorDelegationsResponse): _44.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _44.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _44.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _44.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: {
                    delegator_addr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _44.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _44.QueryDelegatorUnbondingDelegationsRequestAmino): _44.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _44.QueryDelegatorUnbondingDelegationsRequest): _44.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _44.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _44.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _44.QueryDelegatorUnbondingDelegationsRequest): _44.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _44.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _44.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _44.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _44.QueryDelegatorUnbondingDelegationsRequest): _44.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _44.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _44.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _44.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: {
                    unbonding_responses?: {
                        delegator_address?: string;
                        validator_address?: string;
                        entries?: {
                            creation_height?: string | number | import("long").default;
                            completion_time?: Date;
                            initial_balance?: string;
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _44.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _44.QueryDelegatorUnbondingDelegationsResponseAmino): _44.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _44.QueryDelegatorUnbondingDelegationsResponse): _44.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _44.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _44.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _44.QueryDelegatorUnbondingDelegationsResponse): _44.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _44.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _44.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _44.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _44.QueryDelegatorUnbondingDelegationsResponse): _44.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _44.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryRedelegationsRequest;
                fromJSON(object: any): _44.QueryRedelegationsRequest;
                toJSON(message: _44.QueryRedelegationsRequest): unknown;
                fromPartial(object: {
                    delegator_addr?: string;
                    src_validator_addr?: string;
                    dst_validator_addr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _44.QueryRedelegationsRequest;
                fromAmino(object: _44.QueryRedelegationsRequestAmino): _44.QueryRedelegationsRequest;
                toAmino(message: _44.QueryRedelegationsRequest): _44.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _44.QueryRedelegationsRequestAminoMsg): _44.QueryRedelegationsRequest;
                toAminoMsg(message: _44.QueryRedelegationsRequest): _44.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _44.QueryRedelegationsRequestProtoMsg): _44.QueryRedelegationsRequest;
                toProto(message: _44.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _44.QueryRedelegationsRequest): _44.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _44.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryRedelegationsResponse;
                fromJSON(object: any): _44.QueryRedelegationsResponse;
                toJSON(message: _44.QueryRedelegationsResponse): unknown;
                fromPartial(object: {
                    redelegation_responses?: {
                        redelegation?: {
                            delegator_address?: string;
                            validator_src_address?: string;
                            validator_dst_address?: string;
                            entries?: {
                                creation_height?: string | number | import("long").default;
                                completion_time?: Date;
                                initial_balance?: string;
                                shares_dst?: string;
                            }[];
                        };
                        entries?: {
                            redelegation_entry?: {
                                creation_height?: string | number | import("long").default;
                                completion_time?: Date;
                                initial_balance?: string;
                                shares_dst?: string;
                            };
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _44.QueryRedelegationsResponse;
                fromAmino(object: _44.QueryRedelegationsResponseAmino): _44.QueryRedelegationsResponse;
                toAmino(message: _44.QueryRedelegationsResponse): _44.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _44.QueryRedelegationsResponseAminoMsg): _44.QueryRedelegationsResponse;
                toAminoMsg(message: _44.QueryRedelegationsResponse): _44.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _44.QueryRedelegationsResponseProtoMsg): _44.QueryRedelegationsResponse;
                toProto(message: _44.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _44.QueryRedelegationsResponse): _44.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _44.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _44.QueryDelegatorValidatorsRequest;
                toJSON(message: _44.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: {
                    delegator_addr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _44.QueryDelegatorValidatorsRequest;
                fromAmino(object: _44.QueryDelegatorValidatorsRequestAmino): _44.QueryDelegatorValidatorsRequest;
                toAmino(message: _44.QueryDelegatorValidatorsRequest): _44.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _44.QueryDelegatorValidatorsRequestAminoMsg): _44.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _44.QueryDelegatorValidatorsRequest): _44.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _44.QueryDelegatorValidatorsRequestProtoMsg): _44.QueryDelegatorValidatorsRequest;
                toProto(message: _44.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _44.QueryDelegatorValidatorsRequest): _44.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _44.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _44.QueryDelegatorValidatorsResponse;
                toJSON(message: _44.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: {
                        operator_address?: string;
                        consensus_pubkey?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _45.BondStatus;
                        tokens?: string;
                        delegator_shares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            security_contact?: string;
                            details?: string;
                        };
                        unbonding_height?: string | number | import("long").default;
                        unbonding_time?: Date;
                        commission?: {
                            commission_rates?: {
                                rate?: string;
                                max_rate?: string;
                                max_change_rate?: string;
                            };
                            update_time?: Date;
                        };
                        min_self_delegation?: string;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _44.QueryDelegatorValidatorsResponse;
                fromAmino(object: _44.QueryDelegatorValidatorsResponseAmino): _44.QueryDelegatorValidatorsResponse;
                toAmino(message: _44.QueryDelegatorValidatorsResponse): _44.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _44.QueryDelegatorValidatorsResponseAminoMsg): _44.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _44.QueryDelegatorValidatorsResponse): _44.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _44.QueryDelegatorValidatorsResponseProtoMsg): _44.QueryDelegatorValidatorsResponse;
                toProto(message: _44.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _44.QueryDelegatorValidatorsResponse): _44.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _44.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _44.QueryDelegatorValidatorRequest;
                toJSON(message: _44.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: {
                    delegator_addr?: string;
                    validator_addr?: string;
                }): _44.QueryDelegatorValidatorRequest;
                fromAmino(object: _44.QueryDelegatorValidatorRequestAmino): _44.QueryDelegatorValidatorRequest;
                toAmino(message: _44.QueryDelegatorValidatorRequest): _44.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _44.QueryDelegatorValidatorRequestAminoMsg): _44.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _44.QueryDelegatorValidatorRequest): _44.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _44.QueryDelegatorValidatorRequestProtoMsg): _44.QueryDelegatorValidatorRequest;
                toProto(message: _44.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _44.QueryDelegatorValidatorRequest): _44.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _44.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _44.QueryDelegatorValidatorResponse;
                toJSON(message: _44.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: {
                    validator?: {
                        operator_address?: string;
                        consensus_pubkey?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _45.BondStatus;
                        tokens?: string;
                        delegator_shares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            security_contact?: string;
                            details?: string;
                        };
                        unbonding_height?: string | number | import("long").default;
                        unbonding_time?: Date;
                        commission?: {
                            commission_rates?: {
                                rate?: string;
                                max_rate?: string;
                                max_change_rate?: string;
                            };
                            update_time?: Date;
                        };
                        min_self_delegation?: string;
                    };
                }): _44.QueryDelegatorValidatorResponse;
                fromAmino(object: _44.QueryDelegatorValidatorResponseAmino): _44.QueryDelegatorValidatorResponse;
                toAmino(message: _44.QueryDelegatorValidatorResponse): _44.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _44.QueryDelegatorValidatorResponseAminoMsg): _44.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _44.QueryDelegatorValidatorResponse): _44.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _44.QueryDelegatorValidatorResponseProtoMsg): _44.QueryDelegatorValidatorResponse;
                toProto(message: _44.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _44.QueryDelegatorValidatorResponse): _44.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _44.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryHistoricalInfoRequest;
                fromJSON(object: any): _44.QueryHistoricalInfoRequest;
                toJSON(message: _44.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: {
                    height?: string | number | import("long").default;
                }): _44.QueryHistoricalInfoRequest;
                fromAmino(object: _44.QueryHistoricalInfoRequestAmino): _44.QueryHistoricalInfoRequest;
                toAmino(message: _44.QueryHistoricalInfoRequest): _44.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _44.QueryHistoricalInfoRequestAminoMsg): _44.QueryHistoricalInfoRequest;
                toAminoMsg(message: _44.QueryHistoricalInfoRequest): _44.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _44.QueryHistoricalInfoRequestProtoMsg): _44.QueryHistoricalInfoRequest;
                toProto(message: _44.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _44.QueryHistoricalInfoRequest): _44.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _44.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryHistoricalInfoResponse;
                fromJSON(object: any): _44.QueryHistoricalInfoResponse;
                toJSON(message: _44.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: {
                    hist?: {
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
                        valset?: {
                            operator_address?: string;
                            consensus_pubkey?: {
                                $typeUrl?: string;
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            jailed?: boolean;
                            status?: _45.BondStatus;
                            tokens?: string;
                            delegator_shares?: string;
                            description?: {
                                moniker?: string;
                                identity?: string;
                                website?: string;
                                security_contact?: string;
                                details?: string;
                            };
                            unbonding_height?: string | number | import("long").default;
                            unbonding_time?: Date;
                            commission?: {
                                commission_rates?: {
                                    rate?: string;
                                    max_rate?: string;
                                    max_change_rate?: string;
                                };
                                update_time?: Date;
                            };
                            min_self_delegation?: string;
                        }[];
                    };
                }): _44.QueryHistoricalInfoResponse;
                fromAmino(object: _44.QueryHistoricalInfoResponseAmino): _44.QueryHistoricalInfoResponse;
                toAmino(message: _44.QueryHistoricalInfoResponse): _44.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _44.QueryHistoricalInfoResponseAminoMsg): _44.QueryHistoricalInfoResponse;
                toAminoMsg(message: _44.QueryHistoricalInfoResponse): _44.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _44.QueryHistoricalInfoResponseProtoMsg): _44.QueryHistoricalInfoResponse;
                toProto(message: _44.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _44.QueryHistoricalInfoResponse): _44.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                aminoType: string;
                encode(_: _44.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryPoolRequest;
                fromJSON(_: any): _44.QueryPoolRequest;
                toJSON(_: _44.QueryPoolRequest): unknown;
                fromPartial(_: {}): _44.QueryPoolRequest;
                fromAmino(_: _44.QueryPoolRequestAmino): _44.QueryPoolRequest;
                toAmino(_: _44.QueryPoolRequest): _44.QueryPoolRequestAmino;
                fromAminoMsg(object: _44.QueryPoolRequestAminoMsg): _44.QueryPoolRequest;
                toAminoMsg(message: _44.QueryPoolRequest): _44.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _44.QueryPoolRequestProtoMsg): _44.QueryPoolRequest;
                toProto(message: _44.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _44.QueryPoolRequest): _44.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _44.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryPoolResponse;
                fromJSON(object: any): _44.QueryPoolResponse;
                toJSON(message: _44.QueryPoolResponse): unknown;
                fromPartial(object: {
                    pool?: {
                        not_bonded_tokens?: string;
                        bonded_tokens?: string;
                    };
                }): _44.QueryPoolResponse;
                fromAmino(object: _44.QueryPoolResponseAmino): _44.QueryPoolResponse;
                toAmino(message: _44.QueryPoolResponse): _44.QueryPoolResponseAmino;
                fromAminoMsg(object: _44.QueryPoolResponseAminoMsg): _44.QueryPoolResponse;
                toAminoMsg(message: _44.QueryPoolResponse): _44.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _44.QueryPoolResponseProtoMsg): _44.QueryPoolResponse;
                toProto(message: _44.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _44.QueryPoolResponse): _44.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                aminoType: string;
                encode(_: _44.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryParamsRequest;
                fromJSON(_: any): _44.QueryParamsRequest;
                toJSON(_: _44.QueryParamsRequest): unknown;
                fromPartial(_: {}): _44.QueryParamsRequest;
                fromAmino(_: _44.QueryParamsRequestAmino): _44.QueryParamsRequest;
                toAmino(_: _44.QueryParamsRequest): _44.QueryParamsRequestAmino;
                fromAminoMsg(object: _44.QueryParamsRequestAminoMsg): _44.QueryParamsRequest;
                toAminoMsg(message: _44.QueryParamsRequest): _44.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _44.QueryParamsRequestProtoMsg): _44.QueryParamsRequest;
                toProto(message: _44.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _44.QueryParamsRequest): _44.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _44.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryParamsResponse;
                fromJSON(object: any): _44.QueryParamsResponse;
                toJSON(message: _44.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        unbonding_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        max_validators?: number;
                        max_entries?: number;
                        historical_entries?: number;
                        bond_denom?: string;
                        min_commission_rate?: string;
                    };
                }): _44.QueryParamsResponse;
                fromAmino(object: _44.QueryParamsResponseAmino): _44.QueryParamsResponse;
                toAmino(message: _44.QueryParamsResponse): _44.QueryParamsResponseAmino;
                fromAminoMsg(object: _44.QueryParamsResponseAminoMsg): _44.QueryParamsResponse;
                toAminoMsg(message: _44.QueryParamsResponse): _44.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _44.QueryParamsResponseProtoMsg): _44.QueryParamsResponse;
                toProto(message: _44.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _44.QueryParamsResponse): _44.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                aminoType: string;
                encode(message: _42.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.GenesisState;
                fromJSON(object: any): _42.GenesisState;
                toJSON(message: _42.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        unbonding_time?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        max_validators?: number;
                        max_entries?: number;
                        historical_entries?: number;
                        bond_denom?: string;
                        min_commission_rate?: string;
                    };
                    last_total_power?: Uint8Array;
                    last_validator_powers?: {
                        address?: string;
                        power?: string | number | import("long").default;
                    }[];
                    validators?: {
                        operator_address?: string;
                        consensus_pubkey?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _45.BondStatus;
                        tokens?: string;
                        delegator_shares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            security_contact?: string;
                            details?: string;
                        };
                        unbonding_height?: string | number | import("long").default;
                        unbonding_time?: Date;
                        commission?: {
                            commission_rates?: {
                                rate?: string;
                                max_rate?: string;
                                max_change_rate?: string;
                            };
                            update_time?: Date;
                        };
                        min_self_delegation?: string;
                    }[];
                    delegations?: {
                        delegator_address?: string;
                        validator_address?: string;
                        shares?: string;
                    }[];
                    unbonding_delegations?: {
                        delegator_address?: string;
                        validator_address?: string;
                        entries?: {
                            creation_height?: string | number | import("long").default;
                            completion_time?: Date;
                            initial_balance?: string;
                            balance?: string;
                        }[];
                    }[];
                    redelegations?: {
                        delegator_address?: string;
                        validator_src_address?: string;
                        validator_dst_address?: string;
                        entries?: {
                            creation_height?: string | number | import("long").default;
                            completion_time?: Date;
                            initial_balance?: string;
                            shares_dst?: string;
                        }[];
                    }[];
                    exported?: boolean;
                }): _42.GenesisState;
                fromAmino(object: _42.GenesisStateAmino): _42.GenesisState;
                toAmino(message: _42.GenesisState): _42.GenesisStateAmino;
                fromAminoMsg(object: _42.GenesisStateAminoMsg): _42.GenesisState;
                toAminoMsg(message: _42.GenesisState): _42.GenesisStateAminoMsg;
                fromProtoMsg(message: _42.GenesisStateProtoMsg): _42.GenesisState;
                toProto(message: _42.GenesisState): Uint8Array;
                toProtoMsg(message: _42.GenesisState): _42.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                aminoType: string;
                encode(message: _42.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.LastValidatorPower;
                fromJSON(object: any): _42.LastValidatorPower;
                toJSON(message: _42.LastValidatorPower): unknown;
                fromPartial(object: {
                    address?: string;
                    power?: string | number | import("long").default;
                }): _42.LastValidatorPower;
                fromAmino(object: _42.LastValidatorPowerAmino): _42.LastValidatorPower;
                toAmino(message: _42.LastValidatorPower): _42.LastValidatorPowerAmino;
                fromAminoMsg(object: _42.LastValidatorPowerAminoMsg): _42.LastValidatorPower;
                toAminoMsg(message: _42.LastValidatorPower): _42.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _42.LastValidatorPowerProtoMsg): _42.LastValidatorPower;
                toProto(message: _42.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _42.LastValidatorPower): _42.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _41.AuthorizationType;
            authorizationTypeToJSON(object: _41.AuthorizationType): string;
            AuthorizationType: typeof _41.AuthorizationType;
            AuthorizationTypeSDKType: typeof _41.AuthorizationType;
            AuthorizationTypeAmino: typeof _41.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                aminoType: string;
                encode(message: _41.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.StakeAuthorization;
                fromJSON(object: any): _41.StakeAuthorization;
                toJSON(message: _41.StakeAuthorization): unknown;
                fromPartial(object: {
                    $typeUrl?: string;
                    max_tokens?: {
                        denom?: string;
                        amount?: string;
                    };
                    allow_list?: {
                        address?: string[];
                    };
                    deny_list?: {
                        address?: string[];
                    };
                    authorization_type?: _41.AuthorizationType;
                }): _41.StakeAuthorization;
                fromAmino(object: _41.StakeAuthorizationAmino): _41.StakeAuthorization;
                toAmino(message: _41.StakeAuthorization): _41.StakeAuthorizationAmino;
                fromAminoMsg(object: _41.StakeAuthorizationAminoMsg): _41.StakeAuthorization;
                toAminoMsg(message: _41.StakeAuthorization): _41.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _41.StakeAuthorizationProtoMsg): _41.StakeAuthorization;
                toProto(message: _41.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _41.StakeAuthorization): _41.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                aminoType: string;
                encode(message: _41.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.StakeAuthorization_Validators;
                fromJSON(object: any): _41.StakeAuthorization_Validators;
                toJSON(message: _41.StakeAuthorization_Validators): unknown;
                fromPartial(object: {
                    address?: string[];
                }): _41.StakeAuthorization_Validators;
                fromAmino(object: _41.StakeAuthorization_ValidatorsAmino): _41.StakeAuthorization_Validators;
                toAmino(message: _41.StakeAuthorization_Validators): _41.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _41.StakeAuthorization_ValidatorsAminoMsg): _41.StakeAuthorization_Validators;
                toAminoMsg(message: _41.StakeAuthorization_Validators): _41.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _41.StakeAuthorization_ValidatorsProtoMsg): _41.StakeAuthorization_Validators;
                toProto(message: _41.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _41.StakeAuthorization_Validators): _41.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _48.SignMode;
                signModeToJSON(object: _48.SignMode): string;
                SignMode: typeof _48.SignMode;
                SignModeSDKType: typeof _48.SignMode;
                SignModeAmino: typeof _48.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _48.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.SignatureDescriptors;
                    fromJSON(object: any): _48.SignatureDescriptors;
                    toJSON(message: _48.SignatureDescriptors): unknown;
                    fromPartial(object: {
                        signatures?: {
                            public_key?: {
                                $typeUrl?: string;
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            data?: {
                                single?: {
                                    mode?: _48.SignMode;
                                    signature?: Uint8Array;
                                };
                                multi?: {
                                    bitarray?: {
                                        extra_bits_stored?: number;
                                        elems?: Uint8Array;
                                    };
                                    signatures?: any[];
                                };
                            };
                            sequence?: string | number | import("long").default;
                        }[];
                    }): _48.SignatureDescriptors;
                    fromAmino(object: _48.SignatureDescriptorsAmino): _48.SignatureDescriptors;
                    toAmino(message: _48.SignatureDescriptors): _48.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _48.SignatureDescriptorsAminoMsg): _48.SignatureDescriptors;
                    toAminoMsg(message: _48.SignatureDescriptors): _48.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _48.SignatureDescriptorsProtoMsg): _48.SignatureDescriptors;
                    toProto(message: _48.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _48.SignatureDescriptors): _48.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _48.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.SignatureDescriptor;
                    fromJSON(object: any): _48.SignatureDescriptor;
                    toJSON(message: _48.SignatureDescriptor): unknown;
                    fromPartial(object: {
                        public_key?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        data?: {
                            single?: {
                                mode?: _48.SignMode;
                                signature?: Uint8Array;
                            };
                            multi?: {
                                bitarray?: {
                                    extra_bits_stored?: number;
                                    elems?: Uint8Array;
                                };
                                signatures?: any[];
                            };
                        };
                        sequence?: string | number | import("long").default;
                    }): _48.SignatureDescriptor;
                    fromAmino(object: _48.SignatureDescriptorAmino): _48.SignatureDescriptor;
                    toAmino(message: _48.SignatureDescriptor): _48.SignatureDescriptorAmino;
                    fromAminoMsg(object: _48.SignatureDescriptorAminoMsg): _48.SignatureDescriptor;
                    toAminoMsg(message: _48.SignatureDescriptor): _48.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _48.SignatureDescriptorProtoMsg): _48.SignatureDescriptor;
                    toProto(message: _48.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _48.SignatureDescriptor): _48.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _48.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.SignatureDescriptor_Data;
                    fromJSON(object: any): _48.SignatureDescriptor_Data;
                    toJSON(message: _48.SignatureDescriptor_Data): unknown;
                    fromPartial(object: {
                        single?: {
                            mode?: _48.SignMode;
                            signature?: Uint8Array;
                        };
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number;
                                elems?: Uint8Array;
                            };
                            signatures?: any[];
                        };
                    }): _48.SignatureDescriptor_Data;
                    fromAmino(object: _48.SignatureDescriptor_DataAmino): _48.SignatureDescriptor_Data;
                    toAmino(message: _48.SignatureDescriptor_Data): _48.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _48.SignatureDescriptor_DataAminoMsg): _48.SignatureDescriptor_Data;
                    toAminoMsg(message: _48.SignatureDescriptor_Data): _48.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _48.SignatureDescriptor_DataProtoMsg): _48.SignatureDescriptor_Data;
                    toProto(message: _48.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _48.SignatureDescriptor_Data): _48.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _48.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _48.SignatureDescriptor_Data_Single;
                    toJSON(message: _48.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: {
                        mode?: _48.SignMode;
                        signature?: Uint8Array;
                    }): _48.SignatureDescriptor_Data_Single;
                    fromAmino(object: _48.SignatureDescriptor_Data_SingleAmino): _48.SignatureDescriptor_Data_Single;
                    toAmino(message: _48.SignatureDescriptor_Data_Single): _48.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _48.SignatureDescriptor_Data_SingleAminoMsg): _48.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _48.SignatureDescriptor_Data_Single): _48.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _48.SignatureDescriptor_Data_SingleProtoMsg): _48.SignatureDescriptor_Data_Single;
                    toProto(message: _48.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _48.SignatureDescriptor_Data_Single): _48.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _48.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _48.SignatureDescriptor_Data_Multi;
                    toJSON(message: _48.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: {
                        bitarray?: {
                            extra_bits_stored?: number;
                            elems?: Uint8Array;
                        };
                        signatures?: {
                            single?: {
                                mode?: _48.SignMode;
                                signature?: Uint8Array;
                            };
                            multi?: any;
                        }[];
                    }): _48.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _48.SignatureDescriptor_Data_MultiAmino): _48.SignatureDescriptor_Data_Multi;
                    toAmino(message: _48.SignatureDescriptor_Data_Multi): _48.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _48.SignatureDescriptor_Data_MultiAminoMsg): _48.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _48.SignatureDescriptor_Data_Multi): _48.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _48.SignatureDescriptor_Data_MultiProtoMsg): _48.SignatureDescriptor_Data_Multi;
                    toProto(message: _48.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _48.SignatureDescriptor_Data_Multi): _48.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            Service: typeof _163.Service;
            ServiceClientImpl: typeof _163.ServiceClientImpl;
            LCDQueryClient: typeof _153.LCDQueryClient;
            Tx: {
                typeUrl: string;
                aminoType: string;
                encode(message: _50.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.Tx;
                fromJSON(object: any): _50.Tx;
                toJSON(message: _50.Tx): unknown;
                fromPartial(object: {
                    body?: {
                        messages?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        }[];
                        memo?: string;
                        timeout_height?: string | number | import("long").default;
                        extension_options?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        }[];
                        non_critical_extension_options?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        }[];
                    };
                    auth_info?: {
                        signer_infos?: {
                            public_key?: {
                                $typeUrl?: string;
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            mode_info?: {
                                single?: {
                                    mode?: _48.SignMode;
                                };
                                multi?: {
                                    bitarray?: {
                                        extra_bits_stored?: number;
                                        elems?: Uint8Array;
                                    };
                                    mode_infos?: any[];
                                };
                            };
                            sequence?: string | number | import("long").default;
                        }[];
                        fee?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            gas_limit?: string | number | import("long").default;
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
                }): _50.Tx;
                fromAmino(object: _50.TxAmino): _50.Tx;
                toAmino(message: _50.Tx): _50.TxAmino;
                fromAminoMsg(object: _50.TxAminoMsg): _50.Tx;
                toAminoMsg(message: _50.Tx): _50.TxAminoMsg;
                fromProtoMsg(message: _50.TxProtoMsg): _50.Tx;
                toProto(message: _50.Tx): Uint8Array;
                toProtoMsg(message: _50.Tx): _50.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                aminoType: string;
                encode(message: _50.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.TxRaw;
                fromJSON(object: any): _50.TxRaw;
                toJSON(message: _50.TxRaw): unknown;
                fromPartial(object: {
                    body_bytes?: Uint8Array;
                    auth_info_bytes?: Uint8Array;
                    signatures?: Uint8Array[];
                }): _50.TxRaw;
                fromAmino(object: _50.TxRawAmino): _50.TxRaw;
                toAmino(message: _50.TxRaw): _50.TxRawAmino;
                fromAminoMsg(object: _50.TxRawAminoMsg): _50.TxRaw;
                toAminoMsg(message: _50.TxRaw): _50.TxRawAminoMsg;
                fromProtoMsg(message: _50.TxRawProtoMsg): _50.TxRaw;
                toProto(message: _50.TxRaw): Uint8Array;
                toProtoMsg(message: _50.TxRaw): _50.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                aminoType: string;
                encode(message: _50.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.SignDoc;
                fromJSON(object: any): _50.SignDoc;
                toJSON(message: _50.SignDoc): unknown;
                fromPartial(object: {
                    body_bytes?: Uint8Array;
                    auth_info_bytes?: Uint8Array;
                    chain_id?: string;
                    account_number?: string | number | import("long").default;
                }): _50.SignDoc;
                fromAmino(object: _50.SignDocAmino): _50.SignDoc;
                toAmino(message: _50.SignDoc): _50.SignDocAmino;
                fromAminoMsg(object: _50.SignDocAminoMsg): _50.SignDoc;
                toAminoMsg(message: _50.SignDoc): _50.SignDocAminoMsg;
                fromProtoMsg(message: _50.SignDocProtoMsg): _50.SignDoc;
                toProto(message: _50.SignDoc): Uint8Array;
                toProtoMsg(message: _50.SignDoc): _50.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                aminoType: string;
                encode(message: _50.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.SignDocDirectAux;
                fromJSON(object: any): _50.SignDocDirectAux;
                toJSON(message: _50.SignDocDirectAux): unknown;
                fromPartial(object: {
                    body_bytes?: Uint8Array;
                    public_key?: {
                        $typeUrl?: string;
                        type_url?: string;
                        value?: Uint8Array;
                    };
                    chain_id?: string;
                    account_number?: string | number | import("long").default;
                    sequence?: string | number | import("long").default;
                    tip?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        tipper?: string;
                    };
                }): _50.SignDocDirectAux;
                fromAmino(object: _50.SignDocDirectAuxAmino): _50.SignDocDirectAux;
                toAmino(message: _50.SignDocDirectAux): _50.SignDocDirectAuxAmino;
                fromAminoMsg(object: _50.SignDocDirectAuxAminoMsg): _50.SignDocDirectAux;
                toAminoMsg(message: _50.SignDocDirectAux): _50.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _50.SignDocDirectAuxProtoMsg): _50.SignDocDirectAux;
                toProto(message: _50.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _50.SignDocDirectAux): _50.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                aminoType: string;
                encode(message: _50.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.TxBody;
                fromJSON(object: any): _50.TxBody;
                toJSON(message: _50.TxBody): unknown;
                fromPartial(object: {
                    messages?: {
                        $typeUrl?: string;
                        type_url?: string;
                        value?: Uint8Array;
                    }[];
                    memo?: string;
                    timeout_height?: string | number | import("long").default;
                    extension_options?: {
                        $typeUrl?: string;
                        type_url?: string;
                        value?: Uint8Array;
                    }[];
                    non_critical_extension_options?: {
                        $typeUrl?: string;
                        type_url?: string;
                        value?: Uint8Array;
                    }[];
                }): _50.TxBody;
                fromAmino(object: _50.TxBodyAmino): _50.TxBody;
                toAmino(message: _50.TxBody): _50.TxBodyAmino;
                fromAminoMsg(object: _50.TxBodyAminoMsg): _50.TxBody;
                toAminoMsg(message: _50.TxBody): _50.TxBodyAminoMsg;
                fromProtoMsg(message: _50.TxBodyProtoMsg): _50.TxBody;
                toProto(message: _50.TxBody): Uint8Array;
                toProtoMsg(message: _50.TxBody): _50.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                aminoType: string;
                encode(message: _50.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.AuthInfo;
                fromJSON(object: any): _50.AuthInfo;
                toJSON(message: _50.AuthInfo): unknown;
                fromPartial(object: {
                    signer_infos?: {
                        public_key?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        mode_info?: {
                            single?: {
                                mode?: _48.SignMode;
                            };
                            multi?: {
                                bitarray?: {
                                    extra_bits_stored?: number;
                                    elems?: Uint8Array;
                                };
                                mode_infos?: any[];
                            };
                        };
                        sequence?: string | number | import("long").default;
                    }[];
                    fee?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        gas_limit?: string | number | import("long").default;
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
                }): _50.AuthInfo;
                fromAmino(object: _50.AuthInfoAmino): _50.AuthInfo;
                toAmino(message: _50.AuthInfo): _50.AuthInfoAmino;
                fromAminoMsg(object: _50.AuthInfoAminoMsg): _50.AuthInfo;
                toAminoMsg(message: _50.AuthInfo): _50.AuthInfoAminoMsg;
                fromProtoMsg(message: _50.AuthInfoProtoMsg): _50.AuthInfo;
                toProto(message: _50.AuthInfo): Uint8Array;
                toProtoMsg(message: _50.AuthInfo): _50.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                aminoType: string;
                encode(message: _50.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.SignerInfo;
                fromJSON(object: any): _50.SignerInfo;
                toJSON(message: _50.SignerInfo): unknown;
                fromPartial(object: {
                    public_key?: {
                        $typeUrl?: string;
                        type_url?: string;
                        value?: Uint8Array;
                    };
                    mode_info?: {
                        single?: {
                            mode?: _48.SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extra_bits_stored?: number;
                                elems?: Uint8Array;
                            };
                            mode_infos?: any[];
                        };
                    };
                    sequence?: string | number | import("long").default;
                }): _50.SignerInfo;
                fromAmino(object: _50.SignerInfoAmino): _50.SignerInfo;
                toAmino(message: _50.SignerInfo): _50.SignerInfoAmino;
                fromAminoMsg(object: _50.SignerInfoAminoMsg): _50.SignerInfo;
                toAminoMsg(message: _50.SignerInfo): _50.SignerInfoAminoMsg;
                fromProtoMsg(message: _50.SignerInfoProtoMsg): _50.SignerInfo;
                toProto(message: _50.SignerInfo): Uint8Array;
                toProtoMsg(message: _50.SignerInfo): _50.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                aminoType: string;
                encode(message: _50.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.ModeInfo;
                fromJSON(object: any): _50.ModeInfo;
                toJSON(message: _50.ModeInfo): unknown;
                fromPartial(object: {
                    single?: {
                        mode?: _48.SignMode;
                    };
                    multi?: {
                        bitarray?: {
                            extra_bits_stored?: number;
                            elems?: Uint8Array;
                        };
                        mode_infos?: any[];
                    };
                }): _50.ModeInfo;
                fromAmino(object: _50.ModeInfoAmino): _50.ModeInfo;
                toAmino(message: _50.ModeInfo): _50.ModeInfoAmino;
                fromAminoMsg(object: _50.ModeInfoAminoMsg): _50.ModeInfo;
                toAminoMsg(message: _50.ModeInfo): _50.ModeInfoAminoMsg;
                fromProtoMsg(message: _50.ModeInfoProtoMsg): _50.ModeInfo;
                toProto(message: _50.ModeInfo): Uint8Array;
                toProtoMsg(message: _50.ModeInfo): _50.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                aminoType: string;
                encode(message: _50.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.ModeInfo_Single;
                fromJSON(object: any): _50.ModeInfo_Single;
                toJSON(message: _50.ModeInfo_Single): unknown;
                fromPartial(object: {
                    mode?: _48.SignMode;
                }): _50.ModeInfo_Single;
                fromAmino(object: _50.ModeInfo_SingleAmino): _50.ModeInfo_Single;
                toAmino(message: _50.ModeInfo_Single): _50.ModeInfo_SingleAmino;
                fromAminoMsg(object: _50.ModeInfo_SingleAminoMsg): _50.ModeInfo_Single;
                toAminoMsg(message: _50.ModeInfo_Single): _50.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _50.ModeInfo_SingleProtoMsg): _50.ModeInfo_Single;
                toProto(message: _50.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _50.ModeInfo_Single): _50.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                aminoType: string;
                encode(message: _50.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.ModeInfo_Multi;
                fromJSON(object: any): _50.ModeInfo_Multi;
                toJSON(message: _50.ModeInfo_Multi): unknown;
                fromPartial(object: {
                    bitarray?: {
                        extra_bits_stored?: number;
                        elems?: Uint8Array;
                    };
                    mode_infos?: {
                        single?: {
                            mode?: _48.SignMode;
                        };
                        multi?: any;
                    }[];
                }): _50.ModeInfo_Multi;
                fromAmino(object: _50.ModeInfo_MultiAmino): _50.ModeInfo_Multi;
                toAmino(message: _50.ModeInfo_Multi): _50.ModeInfo_MultiAmino;
                fromAminoMsg(object: _50.ModeInfo_MultiAminoMsg): _50.ModeInfo_Multi;
                toAminoMsg(message: _50.ModeInfo_Multi): _50.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _50.ModeInfo_MultiProtoMsg): _50.ModeInfo_Multi;
                toProto(message: _50.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _50.ModeInfo_Multi): _50.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                aminoType: string;
                encode(message: _50.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.Fee;
                fromJSON(object: any): _50.Fee;
                toJSON(message: _50.Fee): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gas_limit?: string | number | import("long").default;
                    payer?: string;
                    granter?: string;
                }): _50.Fee;
                fromAmino(object: _50.FeeAmino): _50.Fee;
                toAmino(message: _50.Fee): _50.FeeAmino;
                fromAminoMsg(object: _50.FeeAminoMsg): _50.Fee;
                toAminoMsg(message: _50.Fee): _50.FeeAminoMsg;
                fromProtoMsg(message: _50.FeeProtoMsg): _50.Fee;
                toProto(message: _50.Fee): Uint8Array;
                toProtoMsg(message: _50.Fee): _50.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                aminoType: string;
                encode(message: _50.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.Tip;
                fromJSON(object: any): _50.Tip;
                toJSON(message: _50.Tip): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                }): _50.Tip;
                fromAmino(object: _50.TipAmino): _50.Tip;
                toAmino(message: _50.Tip): _50.TipAmino;
                fromAminoMsg(object: _50.TipAminoMsg): _50.Tip;
                toAminoMsg(message: _50.Tip): _50.TipAminoMsg;
                fromProtoMsg(message: _50.TipProtoMsg): _50.Tip;
                toProto(message: _50.Tip): Uint8Array;
                toProtoMsg(message: _50.Tip): _50.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                aminoType: string;
                encode(message: _50.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.AuxSignerData;
                fromJSON(object: any): _50.AuxSignerData;
                toJSON(message: _50.AuxSignerData): unknown;
                fromPartial(object: {
                    address?: string;
                    sign_doc?: {
                        body_bytes?: Uint8Array;
                        public_key?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        chain_id?: string;
                        account_number?: string | number | import("long").default;
                        sequence?: string | number | import("long").default;
                        tip?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tipper?: string;
                        };
                    };
                    mode?: _48.SignMode;
                    sig?: Uint8Array;
                }): _50.AuxSignerData;
                fromAmino(object: _50.AuxSignerDataAmino): _50.AuxSignerData;
                toAmino(message: _50.AuxSignerData): _50.AuxSignerDataAmino;
                fromAminoMsg(object: _50.AuxSignerDataAminoMsg): _50.AuxSignerData;
                toAminoMsg(message: _50.AuxSignerData): _50.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _50.AuxSignerDataProtoMsg): _50.AuxSignerData;
                toProto(message: _50.AuxSignerData): Uint8Array;
                toProtoMsg(message: _50.AuxSignerData): _50.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _49.OrderBy;
            orderByToJSON(object: _49.OrderBy): string;
            broadcastModeFromJSON(object: any): _49.BroadcastMode;
            broadcastModeToJSON(object: _49.BroadcastMode): string;
            OrderBy: typeof _49.OrderBy;
            OrderBySDKType: typeof _49.OrderBy;
            OrderByAmino: typeof _49.OrderBy;
            BroadcastMode: typeof _49.BroadcastMode;
            BroadcastModeSDKType: typeof _49.BroadcastMode;
            BroadcastModeAmino: typeof _49.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _49.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.GetTxsEventRequest;
                fromJSON(object: any): _49.GetTxsEventRequest;
                toJSON(message: _49.GetTxsEventRequest): unknown;
                fromPartial(object: {
                    events?: string[];
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                    order_by?: _49.OrderBy;
                }): _49.GetTxsEventRequest;
                fromAmino(object: _49.GetTxsEventRequestAmino): _49.GetTxsEventRequest;
                toAmino(message: _49.GetTxsEventRequest): _49.GetTxsEventRequestAmino;
                fromAminoMsg(object: _49.GetTxsEventRequestAminoMsg): _49.GetTxsEventRequest;
                toAminoMsg(message: _49.GetTxsEventRequest): _49.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _49.GetTxsEventRequestProtoMsg): _49.GetTxsEventRequest;
                toProto(message: _49.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _49.GetTxsEventRequest): _49.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _49.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.GetTxsEventResponse;
                fromJSON(object: any): _49.GetTxsEventResponse;
                toJSON(message: _49.GetTxsEventResponse): unknown;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                $typeUrl?: string;
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeout_height?: string | number | import("long").default;
                            extension_options?: {
                                $typeUrl?: string;
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                            non_critical_extension_options?: {
                                $typeUrl?: string;
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        auth_info?: {
                            signer_infos?: {
                                public_key?: {
                                    $typeUrl?: string;
                                    type_url?: string;
                                    value?: Uint8Array;
                                };
                                mode_info?: {
                                    single?: {
                                        mode?: _48.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extra_bits_stored?: number;
                                            elems?: Uint8Array;
                                        };
                                        mode_infos?: any[];
                                    };
                                };
                                sequence?: string | number | import("long").default;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gas_limit?: string | number | import("long").default;
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
                    }[];
                    tx_responses?: {
                        height?: string | number | import("long").default;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        raw_log?: string;
                        logs?: {
                            msg_index?: number;
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
                        gas_wanted?: string | number | import("long").default;
                        gas_used?: string | number | import("long").default;
                        tx?: {
                            $typeUrl?: string;
                            type_url?: string;
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
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _49.GetTxsEventResponse;
                fromAmino(object: _49.GetTxsEventResponseAmino): _49.GetTxsEventResponse;
                toAmino(message: _49.GetTxsEventResponse): _49.GetTxsEventResponseAmino;
                fromAminoMsg(object: _49.GetTxsEventResponseAminoMsg): _49.GetTxsEventResponse;
                toAminoMsg(message: _49.GetTxsEventResponse): _49.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _49.GetTxsEventResponseProtoMsg): _49.GetTxsEventResponse;
                toProto(message: _49.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _49.GetTxsEventResponse): _49.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _49.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.BroadcastTxRequest;
                fromJSON(object: any): _49.BroadcastTxRequest;
                toJSON(message: _49.BroadcastTxRequest): unknown;
                fromPartial(object: {
                    tx_bytes?: Uint8Array;
                    mode?: _49.BroadcastMode;
                }): _49.BroadcastTxRequest;
                fromAmino(object: _49.BroadcastTxRequestAmino): _49.BroadcastTxRequest;
                toAmino(message: _49.BroadcastTxRequest): _49.BroadcastTxRequestAmino;
                fromAminoMsg(object: _49.BroadcastTxRequestAminoMsg): _49.BroadcastTxRequest;
                toAminoMsg(message: _49.BroadcastTxRequest): _49.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _49.BroadcastTxRequestProtoMsg): _49.BroadcastTxRequest;
                toProto(message: _49.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _49.BroadcastTxRequest): _49.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _49.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.BroadcastTxResponse;
                fromJSON(object: any): _49.BroadcastTxResponse;
                toJSON(message: _49.BroadcastTxResponse): unknown;
                fromPartial(object: {
                    tx_response?: {
                        height?: string | number | import("long").default;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        raw_log?: string;
                        logs?: {
                            msg_index?: number;
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
                        gas_wanted?: string | number | import("long").default;
                        gas_used?: string | number | import("long").default;
                        tx?: {
                            $typeUrl?: string;
                            type_url?: string;
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
                }): _49.BroadcastTxResponse;
                fromAmino(object: _49.BroadcastTxResponseAmino): _49.BroadcastTxResponse;
                toAmino(message: _49.BroadcastTxResponse): _49.BroadcastTxResponseAmino;
                fromAminoMsg(object: _49.BroadcastTxResponseAminoMsg): _49.BroadcastTxResponse;
                toAminoMsg(message: _49.BroadcastTxResponse): _49.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _49.BroadcastTxResponseProtoMsg): _49.BroadcastTxResponse;
                toProto(message: _49.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _49.BroadcastTxResponse): _49.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _49.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.SimulateRequest;
                fromJSON(object: any): _49.SimulateRequest;
                toJSON(message: _49.SimulateRequest): unknown;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                $typeUrl?: string;
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeout_height?: string | number | import("long").default;
                            extension_options?: {
                                $typeUrl?: string;
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                            non_critical_extension_options?: {
                                $typeUrl?: string;
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        auth_info?: {
                            signer_infos?: {
                                public_key?: {
                                    $typeUrl?: string;
                                    type_url?: string;
                                    value?: Uint8Array;
                                };
                                mode_info?: {
                                    single?: {
                                        mode?: _48.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extra_bits_stored?: number;
                                            elems?: Uint8Array;
                                        };
                                        mode_infos?: any[];
                                    };
                                };
                                sequence?: string | number | import("long").default;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gas_limit?: string | number | import("long").default;
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
                    tx_bytes?: Uint8Array;
                }): _49.SimulateRequest;
                fromAmino(object: _49.SimulateRequestAmino): _49.SimulateRequest;
                toAmino(message: _49.SimulateRequest): _49.SimulateRequestAmino;
                fromAminoMsg(object: _49.SimulateRequestAminoMsg): _49.SimulateRequest;
                toAminoMsg(message: _49.SimulateRequest): _49.SimulateRequestAminoMsg;
                fromProtoMsg(message: _49.SimulateRequestProtoMsg): _49.SimulateRequest;
                toProto(message: _49.SimulateRequest): Uint8Array;
                toProtoMsg(message: _49.SimulateRequest): _49.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _49.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.SimulateResponse;
                fromJSON(object: any): _49.SimulateResponse;
                toJSON(message: _49.SimulateResponse): unknown;
                fromPartial(object: {
                    gas_info?: {
                        gas_wanted?: string | number | import("long").default;
                        gas_used?: string | number | import("long").default;
                    };
                    result?: {
                        data?: Uint8Array;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                        msg_responses?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        }[];
                    };
                }): _49.SimulateResponse;
                fromAmino(object: _49.SimulateResponseAmino): _49.SimulateResponse;
                toAmino(message: _49.SimulateResponse): _49.SimulateResponseAmino;
                fromAminoMsg(object: _49.SimulateResponseAminoMsg): _49.SimulateResponse;
                toAminoMsg(message: _49.SimulateResponse): _49.SimulateResponseAminoMsg;
                fromProtoMsg(message: _49.SimulateResponseProtoMsg): _49.SimulateResponse;
                toProto(message: _49.SimulateResponse): Uint8Array;
                toProtoMsg(message: _49.SimulateResponse): _49.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _49.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.GetTxRequest;
                fromJSON(object: any): _49.GetTxRequest;
                toJSON(message: _49.GetTxRequest): unknown;
                fromPartial(object: {
                    hash?: string;
                }): _49.GetTxRequest;
                fromAmino(object: _49.GetTxRequestAmino): _49.GetTxRequest;
                toAmino(message: _49.GetTxRequest): _49.GetTxRequestAmino;
                fromAminoMsg(object: _49.GetTxRequestAminoMsg): _49.GetTxRequest;
                toAminoMsg(message: _49.GetTxRequest): _49.GetTxRequestAminoMsg;
                fromProtoMsg(message: _49.GetTxRequestProtoMsg): _49.GetTxRequest;
                toProto(message: _49.GetTxRequest): Uint8Array;
                toProtoMsg(message: _49.GetTxRequest): _49.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _49.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.GetTxResponse;
                fromJSON(object: any): _49.GetTxResponse;
                toJSON(message: _49.GetTxResponse): unknown;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                $typeUrl?: string;
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeout_height?: string | number | import("long").default;
                            extension_options?: {
                                $typeUrl?: string;
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                            non_critical_extension_options?: {
                                $typeUrl?: string;
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        auth_info?: {
                            signer_infos?: {
                                public_key?: {
                                    $typeUrl?: string;
                                    type_url?: string;
                                    value?: Uint8Array;
                                };
                                mode_info?: {
                                    single?: {
                                        mode?: _48.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extra_bits_stored?: number;
                                            elems?: Uint8Array;
                                        };
                                        mode_infos?: any[];
                                    };
                                };
                                sequence?: string | number | import("long").default;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gas_limit?: string | number | import("long").default;
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
                    tx_response?: {
                        height?: string | number | import("long").default;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        raw_log?: string;
                        logs?: {
                            msg_index?: number;
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
                        gas_wanted?: string | number | import("long").default;
                        gas_used?: string | number | import("long").default;
                        tx?: {
                            $typeUrl?: string;
                            type_url?: string;
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
                }): _49.GetTxResponse;
                fromAmino(object: _49.GetTxResponseAmino): _49.GetTxResponse;
                toAmino(message: _49.GetTxResponse): _49.GetTxResponseAmino;
                fromAminoMsg(object: _49.GetTxResponseAminoMsg): _49.GetTxResponse;
                toAminoMsg(message: _49.GetTxResponse): _49.GetTxResponseAminoMsg;
                fromProtoMsg(message: _49.GetTxResponseProtoMsg): _49.GetTxResponse;
                toProto(message: _49.GetTxResponse): Uint8Array;
                toProtoMsg(message: _49.GetTxResponse): _49.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _49.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.GetBlockWithTxsRequest;
                fromJSON(object: any): _49.GetBlockWithTxsRequest;
                toJSON(message: _49.GetBlockWithTxsRequest): unknown;
                fromPartial(object: {
                    height?: string | number | import("long").default;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _49.GetBlockWithTxsRequest;
                fromAmino(object: _49.GetBlockWithTxsRequestAmino): _49.GetBlockWithTxsRequest;
                toAmino(message: _49.GetBlockWithTxsRequest): _49.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _49.GetBlockWithTxsRequestAminoMsg): _49.GetBlockWithTxsRequest;
                toAminoMsg(message: _49.GetBlockWithTxsRequest): _49.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _49.GetBlockWithTxsRequestProtoMsg): _49.GetBlockWithTxsRequest;
                toProto(message: _49.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _49.GetBlockWithTxsRequest): _49.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _49.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.GetBlockWithTxsResponse;
                fromJSON(object: any): _49.GetBlockWithTxsResponse;
                toJSON(message: _49.GetBlockWithTxsResponse): unknown;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                $typeUrl?: string;
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeout_height?: string | number | import("long").default;
                            extension_options?: {
                                $typeUrl?: string;
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                            non_critical_extension_options?: {
                                $typeUrl?: string;
                                type_url?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        auth_info?: {
                            signer_infos?: {
                                public_key?: {
                                    $typeUrl?: string;
                                    type_url?: string;
                                    value?: Uint8Array;
                                };
                                mode_info?: {
                                    single?: {
                                        mode?: _48.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extra_bits_stored?: number;
                                            elems?: Uint8Array;
                                        };
                                        mode_infos?: any[];
                                    };
                                };
                                sequence?: string | number | import("long").default;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gas_limit?: string | number | import("long").default;
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
                    }[];
                    block_id?: {
                        hash?: Uint8Array;
                        part_set_header?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    block?: {
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
                                        type?: import("../tendermint/types/types").SignedMsgType;
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
                                        type?: import("../tendermint/types/types").SignedMsgType;
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
                                block_id_flag?: import("../tendermint/types/types").BlockIDFlag;
                                validator_address?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[];
                        };
                    };
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _49.GetBlockWithTxsResponse;
                fromAmino(object: _49.GetBlockWithTxsResponseAmino): _49.GetBlockWithTxsResponse;
                toAmino(message: _49.GetBlockWithTxsResponse): _49.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _49.GetBlockWithTxsResponseAminoMsg): _49.GetBlockWithTxsResponse;
                toAminoMsg(message: _49.GetBlockWithTxsResponse): _49.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _49.GetBlockWithTxsResponseProtoMsg): _49.GetBlockWithTxsResponse;
                toProto(message: _49.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _49.GetBlockWithTxsResponse): _49.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            Msg: typeof _171.Msg;
            Query: typeof _164.Query;
            QueryClientImpl: typeof _164.QueryClientImpl;
            LCDQueryClient: typeof _154.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _52.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _52.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _52.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _52.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _52.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _52.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _52.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _52.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _52.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _52.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _52.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _52.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _52.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _52.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _52.MsgSoftwareUpgrade) => _52.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _52.MsgSoftwareUpgradeAmino) => _52.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _52.MsgCancelUpgrade) => _52.MsgCancelUpgradeAmino;
                    fromAmino: (object: _52.MsgCancelUpgradeAmino) => _52.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                aminoType: string;
                encode(message: _53.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Plan;
                fromJSON(object: any): _53.Plan;
                toJSON(message: _53.Plan): unknown;
                fromPartial(object: {
                    name?: string;
                    time?: Date;
                    height?: string | number | import("long").default;
                    info?: string;
                    upgraded_client_state?: {
                        $typeUrl?: string;
                        type_url?: string;
                        value?: Uint8Array;
                    };
                }): _53.Plan;
                fromAmino(object: _53.PlanAmino): _53.Plan;
                toAmino(message: _53.Plan): _53.PlanAmino;
                fromAminoMsg(object: _53.PlanAminoMsg): _53.Plan;
                toAminoMsg(message: _53.Plan): _53.PlanAminoMsg;
                fromProtoMsg(message: _53.PlanProtoMsg): _53.Plan;
                toProto(message: _53.Plan): Uint8Array;
                toProtoMsg(message: _53.Plan): _53.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                aminoType: string;
                encode(message: _53.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.SoftwareUpgradeProposal;
                fromJSON(object: any): _53.SoftwareUpgradeProposal;
                toJSON(message: _53.SoftwareUpgradeProposal): unknown;
                fromPartial(object: {
                    $typeUrl?: string;
                    title?: string;
                    description?: string;
                    plan?: {
                        name?: string;
                        time?: Date;
                        height?: string | number | import("long").default;
                        info?: string;
                        upgraded_client_state?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _53.SoftwareUpgradeProposal;
                fromAmino(object: _53.SoftwareUpgradeProposalAmino): _53.SoftwareUpgradeProposal;
                toAmino(message: _53.SoftwareUpgradeProposal): _53.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _53.SoftwareUpgradeProposalAminoMsg): _53.SoftwareUpgradeProposal;
                toAminoMsg(message: _53.SoftwareUpgradeProposal): _53.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _53.SoftwareUpgradeProposalProtoMsg): _53.SoftwareUpgradeProposal;
                toProto(message: _53.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _53.SoftwareUpgradeProposal): _53.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                aminoType: string;
                encode(message: _53.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _53.CancelSoftwareUpgradeProposal;
                toJSON(message: _53.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: {
                    $typeUrl?: string;
                    title?: string;
                    description?: string;
                }): _53.CancelSoftwareUpgradeProposal;
                fromAmino(object: _53.CancelSoftwareUpgradeProposalAmino): _53.CancelSoftwareUpgradeProposal;
                toAmino(message: _53.CancelSoftwareUpgradeProposal): _53.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _53.CancelSoftwareUpgradeProposalAminoMsg): _53.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _53.CancelSoftwareUpgradeProposal): _53.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _53.CancelSoftwareUpgradeProposalProtoMsg): _53.CancelSoftwareUpgradeProposal;
                toProto(message: _53.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _53.CancelSoftwareUpgradeProposal): _53.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                aminoType: string;
                encode(message: _53.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.ModuleVersion;
                fromJSON(object: any): _53.ModuleVersion;
                toJSON(message: _53.ModuleVersion): unknown;
                fromPartial(object: {
                    name?: string;
                    version?: string | number | import("long").default;
                }): _53.ModuleVersion;
                fromAmino(object: _53.ModuleVersionAmino): _53.ModuleVersion;
                toAmino(message: _53.ModuleVersion): _53.ModuleVersionAmino;
                fromAminoMsg(object: _53.ModuleVersionAminoMsg): _53.ModuleVersion;
                toAminoMsg(message: _53.ModuleVersion): _53.ModuleVersionAminoMsg;
                fromProtoMsg(message: _53.ModuleVersionProtoMsg): _53.ModuleVersion;
                toProto(message: _53.ModuleVersion): Uint8Array;
                toProtoMsg(message: _53.ModuleVersion): _53.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                aminoType: string;
                encode(message: _52.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgSoftwareUpgrade;
                fromJSON(object: any): _52.MsgSoftwareUpgrade;
                toJSON(message: _52.MsgSoftwareUpgrade): unknown;
                fromPartial(object: {
                    authority?: string;
                    plan?: {
                        name?: string;
                        time?: Date;
                        height?: string | number | import("long").default;
                        info?: string;
                        upgraded_client_state?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _52.MsgSoftwareUpgrade;
                fromAmino(object: _52.MsgSoftwareUpgradeAmino): _52.MsgSoftwareUpgrade;
                toAmino(message: _52.MsgSoftwareUpgrade): _52.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _52.MsgSoftwareUpgradeAminoMsg): _52.MsgSoftwareUpgrade;
                toAminoMsg(message: _52.MsgSoftwareUpgrade): _52.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _52.MsgSoftwareUpgradeProtoMsg): _52.MsgSoftwareUpgrade;
                toProto(message: _52.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _52.MsgSoftwareUpgrade): _52.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                aminoType: string;
                encode(_: _52.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _52.MsgSoftwareUpgradeResponse;
                toJSON(_: _52.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: {}): _52.MsgSoftwareUpgradeResponse;
                fromAmino(_: _52.MsgSoftwareUpgradeResponseAmino): _52.MsgSoftwareUpgradeResponse;
                toAmino(_: _52.MsgSoftwareUpgradeResponse): _52.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _52.MsgSoftwareUpgradeResponseAminoMsg): _52.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _52.MsgSoftwareUpgradeResponse): _52.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _52.MsgSoftwareUpgradeResponseProtoMsg): _52.MsgSoftwareUpgradeResponse;
                toProto(message: _52.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _52.MsgSoftwareUpgradeResponse): _52.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                aminoType: string;
                encode(message: _52.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgCancelUpgrade;
                fromJSON(object: any): _52.MsgCancelUpgrade;
                toJSON(message: _52.MsgCancelUpgrade): unknown;
                fromPartial(object: {
                    authority?: string;
                }): _52.MsgCancelUpgrade;
                fromAmino(object: _52.MsgCancelUpgradeAmino): _52.MsgCancelUpgrade;
                toAmino(message: _52.MsgCancelUpgrade): _52.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _52.MsgCancelUpgradeAminoMsg): _52.MsgCancelUpgrade;
                toAminoMsg(message: _52.MsgCancelUpgrade): _52.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _52.MsgCancelUpgradeProtoMsg): _52.MsgCancelUpgrade;
                toProto(message: _52.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _52.MsgCancelUpgrade): _52.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                aminoType: string;
                encode(_: _52.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgCancelUpgradeResponse;
                fromJSON(_: any): _52.MsgCancelUpgradeResponse;
                toJSON(_: _52.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: {}): _52.MsgCancelUpgradeResponse;
                fromAmino(_: _52.MsgCancelUpgradeResponseAmino): _52.MsgCancelUpgradeResponse;
                toAmino(_: _52.MsgCancelUpgradeResponse): _52.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _52.MsgCancelUpgradeResponseAminoMsg): _52.MsgCancelUpgradeResponse;
                toAminoMsg(message: _52.MsgCancelUpgradeResponse): _52.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _52.MsgCancelUpgradeResponseProtoMsg): _52.MsgCancelUpgradeResponse;
                toProto(message: _52.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _52.MsgCancelUpgradeResponse): _52.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                aminoType: string;
                encode(_: _51.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryCurrentPlanRequest;
                fromJSON(_: any): _51.QueryCurrentPlanRequest;
                toJSON(_: _51.QueryCurrentPlanRequest): unknown;
                fromPartial(_: {}): _51.QueryCurrentPlanRequest;
                fromAmino(_: _51.QueryCurrentPlanRequestAmino): _51.QueryCurrentPlanRequest;
                toAmino(_: _51.QueryCurrentPlanRequest): _51.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _51.QueryCurrentPlanRequestAminoMsg): _51.QueryCurrentPlanRequest;
                toAminoMsg(message: _51.QueryCurrentPlanRequest): _51.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _51.QueryCurrentPlanRequestProtoMsg): _51.QueryCurrentPlanRequest;
                toProto(message: _51.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _51.QueryCurrentPlanRequest): _51.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _51.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryCurrentPlanResponse;
                fromJSON(object: any): _51.QueryCurrentPlanResponse;
                toJSON(message: _51.QueryCurrentPlanResponse): unknown;
                fromPartial(object: {
                    plan?: {
                        name?: string;
                        time?: Date;
                        height?: string | number | import("long").default;
                        info?: string;
                        upgraded_client_state?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _51.QueryCurrentPlanResponse;
                fromAmino(object: _51.QueryCurrentPlanResponseAmino): _51.QueryCurrentPlanResponse;
                toAmino(message: _51.QueryCurrentPlanResponse): _51.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _51.QueryCurrentPlanResponseAminoMsg): _51.QueryCurrentPlanResponse;
                toAminoMsg(message: _51.QueryCurrentPlanResponse): _51.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _51.QueryCurrentPlanResponseProtoMsg): _51.QueryCurrentPlanResponse;
                toProto(message: _51.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _51.QueryCurrentPlanResponse): _51.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _51.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryAppliedPlanRequest;
                fromJSON(object: any): _51.QueryAppliedPlanRequest;
                toJSON(message: _51.QueryAppliedPlanRequest): unknown;
                fromPartial(object: {
                    name?: string;
                }): _51.QueryAppliedPlanRequest;
                fromAmino(object: _51.QueryAppliedPlanRequestAmino): _51.QueryAppliedPlanRequest;
                toAmino(message: _51.QueryAppliedPlanRequest): _51.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _51.QueryAppliedPlanRequestAminoMsg): _51.QueryAppliedPlanRequest;
                toAminoMsg(message: _51.QueryAppliedPlanRequest): _51.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _51.QueryAppliedPlanRequestProtoMsg): _51.QueryAppliedPlanRequest;
                toProto(message: _51.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _51.QueryAppliedPlanRequest): _51.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _51.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryAppliedPlanResponse;
                fromJSON(object: any): _51.QueryAppliedPlanResponse;
                toJSON(message: _51.QueryAppliedPlanResponse): unknown;
                fromPartial(object: {
                    height?: string | number | import("long").default;
                }): _51.QueryAppliedPlanResponse;
                fromAmino(object: _51.QueryAppliedPlanResponseAmino): _51.QueryAppliedPlanResponse;
                toAmino(message: _51.QueryAppliedPlanResponse): _51.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _51.QueryAppliedPlanResponseAminoMsg): _51.QueryAppliedPlanResponse;
                toAminoMsg(message: _51.QueryAppliedPlanResponse): _51.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _51.QueryAppliedPlanResponseProtoMsg): _51.QueryAppliedPlanResponse;
                toProto(message: _51.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _51.QueryAppliedPlanResponse): _51.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _51.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _51.QueryUpgradedConsensusStateRequest;
                toJSON(message: _51.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: {
                    last_height?: string | number | import("long").default;
                }): _51.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _51.QueryUpgradedConsensusStateRequestAmino): _51.QueryUpgradedConsensusStateRequest;
                toAmino(message: _51.QueryUpgradedConsensusStateRequest): _51.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _51.QueryUpgradedConsensusStateRequestAminoMsg): _51.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _51.QueryUpgradedConsensusStateRequest): _51.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _51.QueryUpgradedConsensusStateRequestProtoMsg): _51.QueryUpgradedConsensusStateRequest;
                toProto(message: _51.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _51.QueryUpgradedConsensusStateRequest): _51.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _51.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _51.QueryUpgradedConsensusStateResponse;
                toJSON(message: _51.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: {
                    upgraded_consensus_state?: Uint8Array;
                }): _51.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _51.QueryUpgradedConsensusStateResponseAmino): _51.QueryUpgradedConsensusStateResponse;
                toAmino(message: _51.QueryUpgradedConsensusStateResponse): _51.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _51.QueryUpgradedConsensusStateResponseAminoMsg): _51.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _51.QueryUpgradedConsensusStateResponse): _51.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _51.QueryUpgradedConsensusStateResponseProtoMsg): _51.QueryUpgradedConsensusStateResponse;
                toProto(message: _51.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _51.QueryUpgradedConsensusStateResponse): _51.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _51.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryModuleVersionsRequest;
                fromJSON(object: any): _51.QueryModuleVersionsRequest;
                toJSON(message: _51.QueryModuleVersionsRequest): unknown;
                fromPartial(object: {
                    module_name?: string;
                }): _51.QueryModuleVersionsRequest;
                fromAmino(object: _51.QueryModuleVersionsRequestAmino): _51.QueryModuleVersionsRequest;
                toAmino(message: _51.QueryModuleVersionsRequest): _51.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _51.QueryModuleVersionsRequestAminoMsg): _51.QueryModuleVersionsRequest;
                toAminoMsg(message: _51.QueryModuleVersionsRequest): _51.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _51.QueryModuleVersionsRequestProtoMsg): _51.QueryModuleVersionsRequest;
                toProto(message: _51.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _51.QueryModuleVersionsRequest): _51.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _51.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryModuleVersionsResponse;
                fromJSON(object: any): _51.QueryModuleVersionsResponse;
                toJSON(message: _51.QueryModuleVersionsResponse): unknown;
                fromPartial(object: {
                    module_versions?: {
                        name?: string;
                        version?: string | number | import("long").default;
                    }[];
                }): _51.QueryModuleVersionsResponse;
                fromAmino(object: _51.QueryModuleVersionsResponseAmino): _51.QueryModuleVersionsResponse;
                toAmino(message: _51.QueryModuleVersionsResponse): _51.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _51.QueryModuleVersionsResponseAminoMsg): _51.QueryModuleVersionsResponse;
                toAminoMsg(message: _51.QueryModuleVersionsResponse): _51.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _51.QueryModuleVersionsResponseProtoMsg): _51.QueryModuleVersionsResponse;
                toProto(message: _51.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _51.QueryModuleVersionsResponse): _51.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                aminoType: string;
                encode(_: _51.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryAuthorityRequest;
                fromJSON(_: any): _51.QueryAuthorityRequest;
                toJSON(_: _51.QueryAuthorityRequest): unknown;
                fromPartial(_: {}): _51.QueryAuthorityRequest;
                fromAmino(_: _51.QueryAuthorityRequestAmino): _51.QueryAuthorityRequest;
                toAmino(_: _51.QueryAuthorityRequest): _51.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _51.QueryAuthorityRequestAminoMsg): _51.QueryAuthorityRequest;
                toAminoMsg(message: _51.QueryAuthorityRequest): _51.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _51.QueryAuthorityRequestProtoMsg): _51.QueryAuthorityRequest;
                toProto(message: _51.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _51.QueryAuthorityRequest): _51.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _51.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryAuthorityResponse;
                fromJSON(object: any): _51.QueryAuthorityResponse;
                toJSON(message: _51.QueryAuthorityResponse): unknown;
                fromPartial(object: {
                    address?: string;
                }): _51.QueryAuthorityResponse;
                fromAmino(object: _51.QueryAuthorityResponseAmino): _51.QueryAuthorityResponse;
                toAmino(message: _51.QueryAuthorityResponse): _51.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _51.QueryAuthorityResponseAminoMsg): _51.QueryAuthorityResponse;
                toAminoMsg(message: _51.QueryAuthorityResponse): _51.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _51.QueryAuthorityResponseProtoMsg): _51.QueryAuthorityResponse;
                toProto(message: _51.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _51.QueryAuthorityResponse): _51.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace lsmstaking {
        const v1beta1: {
            Validator: {
                typeUrl: string;
                aminoType: string;
                encode(message: _54.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.Validator;
                fromJSON(object: any): _54.Validator;
                toJSON(message: _54.Validator): unknown;
                fromPartial(object: {
                    operator_address?: string;
                    consensus_pubkey?: {
                        $typeUrl?: string;
                        type_url?: string;
                        value?: Uint8Array;
                    };
                    jailed?: boolean;
                    status?: _45.BondStatus;
                    tokens?: string;
                    delegator_shares?: string;
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        security_contact?: string;
                        details?: string;
                    };
                    unbonding_height?: string | number | import("long").default;
                    unbonding_time?: Date;
                    commission?: {
                        commission_rates?: {
                            rate?: string;
                            max_rate?: string;
                            max_change_rate?: string;
                        };
                        update_time?: Date;
                    };
                    min_self_delegation?: string;
                    unbonding_on_hold_ref_count?: string | number | import("long").default;
                    unbonding_ids?: (string | number | import("long").default)[];
                    validator_bond_shares?: string;
                    liquid_shares?: string;
                }): _54.Validator;
                fromAmino(object: _54.ValidatorAmino): _54.Validator;
                toAmino(message: _54.Validator): _54.ValidatorAmino;
                fromAminoMsg(object: _54.ValidatorAminoMsg): _54.Validator;
                toAminoMsg(message: _54.Validator): _54.ValidatorAminoMsg;
                fromProtoMsg(message: _54.ValidatorProtoMsg): _54.Validator;
                toProto(message: _54.Validator): Uint8Array;
                toProtoMsg(message: _54.Validator): _54.ValidatorProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _54.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryValidatorsResponse;
                fromJSON(object: any): _54.QueryValidatorsResponse;
                toJSON(message: _54.QueryValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: {
                        operator_address?: string;
                        consensus_pubkey?: {
                            $typeUrl?: string;
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _45.BondStatus;
                        tokens?: string;
                        delegator_shares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            security_contact?: string;
                            details?: string;
                        };
                        unbonding_height?: string | number | import("long").default;
                        unbonding_time?: Date;
                        commission?: {
                            commission_rates?: {
                                rate?: string;
                                max_rate?: string;
                                max_change_rate?: string;
                            };
                            update_time?: Date;
                        };
                        min_self_delegation?: string;
                        unbonding_on_hold_ref_count?: string | number | import("long").default;
                        unbonding_ids?: (string | number | import("long").default)[];
                        validator_bond_shares?: string;
                        liquid_shares?: string;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _54.QueryValidatorsResponse;
                fromAmino(object: _54.QueryValidatorsResponseAmino): _54.QueryValidatorsResponse;
                toAmino(message: _54.QueryValidatorsResponse): _54.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _54.QueryValidatorsResponseAminoMsg): _54.QueryValidatorsResponse;
                toAminoMsg(message: _54.QueryValidatorsResponse): _54.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _54.QueryValidatorsResponseProtoMsg): _54.QueryValidatorsResponse;
                toProto(message: _54.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _54.QueryValidatorsResponse): _54.QueryValidatorsResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => string;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => {
                typeUrl: string;
                value: Uint8Array;
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
        }>;
        createGrpcGateWayClient: ({ endpoint }: {
            endpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _155.QueryClientImpl;
                };
                authz: {
                    v1beta1: _156.QueryClientImpl;
                };
                bank: {
                    v1beta1: _157.QueryClientImpl;
                };
                distribution: {
                    v1beta1: _158.QueryClientImpl;
                };
                gov: {
                    v1beta1: _159.QueryClientImpl;
                };
                mint: {
                    v1beta1: _160.QueryClientImpl;
                };
                slashing: {
                    v1beta1: _161.QueryClientImpl;
                };
                staking: {
                    v1beta1: _162.QueryClientImpl;
                };
                tx: {
                    v1beta1: _163.ServiceClientImpl;
                };
                upgrade: {
                    v1beta1: _164.QueryClientImpl;
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _145.LCDQueryClient;
                };
                authz: {
                    v1beta1: _146.LCDQueryClient;
                };
                bank: {
                    v1beta1: _147.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _148.LCDQueryClient;
                };
                gov: {
                    v1beta1: _149.LCDQueryClient;
                };
                mint: {
                    v1beta1: _150.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _151.LCDQueryClient;
                };
                staking: {
                    v1beta1: _152.LCDQueryClient;
                };
                tx: {
                    v1beta1: _153.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _154.LCDQueryClient;
                };
            };
        }>;
    };
}
