/// <reference types="long" />
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { EpochInfo, EpochInfoAmino, EpochInfoSDKType } from "./genesis";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QueryEpochsInfoRequest {
    pagination: PageRequest;
}
export interface QueryEpochsInfoRequestProtoMsg {
    type_url: "/quicksilver.epochs.v1.QueryEpochsInfoRequest";
    value: Uint8Array;
}
export interface QueryEpochsInfoRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryEpochsInfoRequestAminoMsg {
    type: "/quicksilver.epochs.v1.QueryEpochsInfoRequest";
    value: QueryEpochsInfoRequestAmino;
}
export interface QueryEpochsInfoRequestSDKType {
    pagination: PageRequestSDKType;
}
export interface QueryEpochsInfoResponse {
    epochs: EpochInfo[];
    pagination: PageResponse;
}
export interface QueryEpochsInfoResponseProtoMsg {
    type_url: "/quicksilver.epochs.v1.QueryEpochsInfoResponse";
    value: Uint8Array;
}
export interface QueryEpochsInfoResponseAmino {
    epochs: EpochInfoAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryEpochsInfoResponseAminoMsg {
    type: "/quicksilver.epochs.v1.QueryEpochsInfoResponse";
    value: QueryEpochsInfoResponseAmino;
}
export interface QueryEpochsInfoResponseSDKType {
    epochs: EpochInfoSDKType[];
    pagination: PageResponseSDKType;
}
export interface QueryCurrentEpochRequest {
    identifier: string;
}
export interface QueryCurrentEpochRequestProtoMsg {
    type_url: "/quicksilver.epochs.v1.QueryCurrentEpochRequest";
    value: Uint8Array;
}
export interface QueryCurrentEpochRequestAmino {
    identifier: string;
}
export interface QueryCurrentEpochRequestAminoMsg {
    type: "/quicksilver.epochs.v1.QueryCurrentEpochRequest";
    value: QueryCurrentEpochRequestAmino;
}
export interface QueryCurrentEpochRequestSDKType {
    identifier: string;
}
export interface QueryCurrentEpochResponse {
    current_epoch: Long;
}
export interface QueryCurrentEpochResponseProtoMsg {
    type_url: "/quicksilver.epochs.v1.QueryCurrentEpochResponse";
    value: Uint8Array;
}
export interface QueryCurrentEpochResponseAmino {
    current_epoch: string;
}
export interface QueryCurrentEpochResponseAminoMsg {
    type: "/quicksilver.epochs.v1.QueryCurrentEpochResponse";
    value: QueryCurrentEpochResponseAmino;
}
export interface QueryCurrentEpochResponseSDKType {
    current_epoch: Long;
}
export declare const QueryEpochsInfoRequest: {
    typeUrl: string;
    encode(message: QueryEpochsInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochsInfoRequest;
    fromJSON(object: any): QueryEpochsInfoRequest;
    toJSON(message: QueryEpochsInfoRequest): unknown;
    fromPartial(object: DeepPartial<QueryEpochsInfoRequest>): QueryEpochsInfoRequest;
    fromAmino(object: QueryEpochsInfoRequestAmino): QueryEpochsInfoRequest;
    toAmino(message: QueryEpochsInfoRequest): QueryEpochsInfoRequestAmino;
    fromAminoMsg(object: QueryEpochsInfoRequestAminoMsg): QueryEpochsInfoRequest;
    fromProtoMsg(message: QueryEpochsInfoRequestProtoMsg): QueryEpochsInfoRequest;
    toProto(message: QueryEpochsInfoRequest): Uint8Array;
    toProtoMsg(message: QueryEpochsInfoRequest): QueryEpochsInfoRequestProtoMsg;
};
export declare const QueryEpochsInfoResponse: {
    typeUrl: string;
    encode(message: QueryEpochsInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochsInfoResponse;
    fromJSON(object: any): QueryEpochsInfoResponse;
    toJSON(message: QueryEpochsInfoResponse): unknown;
    fromPartial(object: DeepPartial<QueryEpochsInfoResponse>): QueryEpochsInfoResponse;
    fromAmino(object: QueryEpochsInfoResponseAmino): QueryEpochsInfoResponse;
    toAmino(message: QueryEpochsInfoResponse): QueryEpochsInfoResponseAmino;
    fromAminoMsg(object: QueryEpochsInfoResponseAminoMsg): QueryEpochsInfoResponse;
    fromProtoMsg(message: QueryEpochsInfoResponseProtoMsg): QueryEpochsInfoResponse;
    toProto(message: QueryEpochsInfoResponse): Uint8Array;
    toProtoMsg(message: QueryEpochsInfoResponse): QueryEpochsInfoResponseProtoMsg;
};
export declare const QueryCurrentEpochRequest: {
    typeUrl: string;
    encode(message: QueryCurrentEpochRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentEpochRequest;
    fromJSON(object: any): QueryCurrentEpochRequest;
    toJSON(message: QueryCurrentEpochRequest): unknown;
    fromPartial(object: DeepPartial<QueryCurrentEpochRequest>): QueryCurrentEpochRequest;
    fromAmino(object: QueryCurrentEpochRequestAmino): QueryCurrentEpochRequest;
    toAmino(message: QueryCurrentEpochRequest): QueryCurrentEpochRequestAmino;
    fromAminoMsg(object: QueryCurrentEpochRequestAminoMsg): QueryCurrentEpochRequest;
    fromProtoMsg(message: QueryCurrentEpochRequestProtoMsg): QueryCurrentEpochRequest;
    toProto(message: QueryCurrentEpochRequest): Uint8Array;
    toProtoMsg(message: QueryCurrentEpochRequest): QueryCurrentEpochRequestProtoMsg;
};
export declare const QueryCurrentEpochResponse: {
    typeUrl: string;
    encode(message: QueryCurrentEpochResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentEpochResponse;
    fromJSON(object: any): QueryCurrentEpochResponse;
    toJSON(message: QueryCurrentEpochResponse): unknown;
    fromPartial(object: DeepPartial<QueryCurrentEpochResponse>): QueryCurrentEpochResponse;
    fromAmino(object: QueryCurrentEpochResponseAmino): QueryCurrentEpochResponse;
    toAmino(message: QueryCurrentEpochResponse): QueryCurrentEpochResponseAmino;
    fromAminoMsg(object: QueryCurrentEpochResponseAminoMsg): QueryCurrentEpochResponse;
    fromProtoMsg(message: QueryCurrentEpochResponseProtoMsg): QueryCurrentEpochResponse;
    toProto(message: QueryCurrentEpochResponse): Uint8Array;
    toProtoMsg(message: QueryCurrentEpochResponse): QueryCurrentEpochResponseProtoMsg;
};
