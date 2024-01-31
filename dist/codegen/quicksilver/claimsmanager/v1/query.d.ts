import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Claim, ClaimAmino, ClaimSDKType } from "./claimsmanager";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** QueryClaimsRequest is the request type for the Query/Claims RPC method. */
export interface QueryClaimsRequest {
    chain_id: string;
    address: string;
    pagination: PageRequest;
}
export interface QueryClaimsRequestProtoMsg {
    type_url: "/quicksilver.claimsmanager.v1.QueryClaimsRequest";
    value: Uint8Array;
}
/** QueryClaimsRequest is the request type for the Query/Claims RPC method. */
export interface QueryClaimsRequestAmino {
    chain_id: string;
    address: string;
    pagination?: PageRequestAmino;
}
export interface QueryClaimsRequestAminoMsg {
    type: "/quicksilver.claimsmanager.v1.QueryClaimsRequest";
    value: QueryClaimsRequestAmino;
}
/** QueryClaimsRequest is the request type for the Query/Claims RPC method. */
export interface QueryClaimsRequestSDKType {
    chain_id: string;
    address: string;
    pagination: PageRequestSDKType;
}
/** QueryClaimsResponse is the response type for the Query/Claims RPC method. */
export interface QueryClaimsResponse {
    claims: Claim[];
    pagination: PageResponse;
}
export interface QueryClaimsResponseProtoMsg {
    type_url: "/quicksilver.claimsmanager.v1.QueryClaimsResponse";
    value: Uint8Array;
}
/** QueryClaimsResponse is the response type for the Query/Claims RPC method. */
export interface QueryClaimsResponseAmino {
    claims: ClaimAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryClaimsResponseAminoMsg {
    type: "/quicksilver.claimsmanager.v1.QueryClaimsResponse";
    value: QueryClaimsResponseAmino;
}
/** QueryClaimsResponse is the response type for the Query/Claims RPC method. */
export interface QueryClaimsResponseSDKType {
    claims: ClaimSDKType[];
    pagination: PageResponseSDKType;
}
export declare const QueryClaimsRequest: {
    typeUrl: string;
    encode(message: QueryClaimsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimsRequest;
    fromJSON(object: any): QueryClaimsRequest;
    toJSON(message: QueryClaimsRequest): unknown;
    fromPartial(object: DeepPartial<QueryClaimsRequest>): QueryClaimsRequest;
    fromAmino(object: QueryClaimsRequestAmino): QueryClaimsRequest;
    toAmino(message: QueryClaimsRequest): QueryClaimsRequestAmino;
    fromAminoMsg(object: QueryClaimsRequestAminoMsg): QueryClaimsRequest;
    fromProtoMsg(message: QueryClaimsRequestProtoMsg): QueryClaimsRequest;
    toProto(message: QueryClaimsRequest): Uint8Array;
    toProtoMsg(message: QueryClaimsRequest): QueryClaimsRequestProtoMsg;
};
export declare const QueryClaimsResponse: {
    typeUrl: string;
    encode(message: QueryClaimsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimsResponse;
    fromJSON(object: any): QueryClaimsResponse;
    toJSON(message: QueryClaimsResponse): unknown;
    fromPartial(object: DeepPartial<QueryClaimsResponse>): QueryClaimsResponse;
    fromAmino(object: QueryClaimsResponseAmino): QueryClaimsResponse;
    toAmino(message: QueryClaimsResponse): QueryClaimsResponseAmino;
    fromAminoMsg(object: QueryClaimsResponseAminoMsg): QueryClaimsResponse;
    fromProtoMsg(message: QueryClaimsResponseProtoMsg): QueryClaimsResponse;
    toProto(message: QueryClaimsResponse): Uint8Array;
    toProtoMsg(message: QueryClaimsResponse): QueryClaimsResponseProtoMsg;
};
