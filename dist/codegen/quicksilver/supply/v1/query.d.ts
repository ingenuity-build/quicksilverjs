import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QuerySupplyRequest {
}
export interface QuerySupplyRequestProtoMsg {
    type_url: "/quicksilver.supply.v1.QuerySupplyRequest";
    value: Uint8Array;
}
export interface QuerySupplyRequestAmino {
}
export interface QuerySupplyRequestAminoMsg {
    type: "/quicksilver.supply.v1.QuerySupplyRequest";
    value: QuerySupplyRequestAmino;
}
export interface QuerySupplyRequestSDKType {
}
export interface QuerySupplyResponse {
    supply: Long;
    circulating_supply: Long;
}
export interface QuerySupplyResponseProtoMsg {
    type_url: "/quicksilver.supply.v1.QuerySupplyResponse";
    value: Uint8Array;
}
export interface QuerySupplyResponseAmino {
    supply: string;
    circulating_supply: string;
}
export interface QuerySupplyResponseAminoMsg {
    type: "/quicksilver.supply.v1.QuerySupplyResponse";
    value: QuerySupplyResponseAmino;
}
export interface QuerySupplyResponseSDKType {
    supply: Long;
    circulating_supply: Long;
}
export declare const QuerySupplyRequest: {
    typeUrl: string;
    encode(_: QuerySupplyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyRequest;
    fromJSON(_: any): QuerySupplyRequest;
    toJSON(_: QuerySupplyRequest): unknown;
    fromPartial(_: DeepPartial<QuerySupplyRequest>): QuerySupplyRequest;
    fromAmino(_: QuerySupplyRequestAmino): QuerySupplyRequest;
    toAmino(_: QuerySupplyRequest): QuerySupplyRequestAmino;
    fromAminoMsg(object: QuerySupplyRequestAminoMsg): QuerySupplyRequest;
    fromProtoMsg(message: QuerySupplyRequestProtoMsg): QuerySupplyRequest;
    toProto(message: QuerySupplyRequest): Uint8Array;
    toProtoMsg(message: QuerySupplyRequest): QuerySupplyRequestProtoMsg;
};
export declare const QuerySupplyResponse: {
    typeUrl: string;
    encode(message: QuerySupplyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyResponse;
    fromJSON(object: any): QuerySupplyResponse;
    toJSON(message: QuerySupplyResponse): unknown;
    fromPartial(object: DeepPartial<QuerySupplyResponse>): QuerySupplyResponse;
    fromAmino(object: QuerySupplyResponseAmino): QuerySupplyResponse;
    toAmino(message: QuerySupplyResponse): QuerySupplyResponseAmino;
    fromAminoMsg(object: QuerySupplyResponseAminoMsg): QuerySupplyResponse;
    fromProtoMsg(message: QuerySupplyResponseProtoMsg): QuerySupplyResponse;
    toProto(message: QuerySupplyResponse): Uint8Array;
    toProtoMsg(message: QuerySupplyResponse): QuerySupplyResponseProtoMsg;
};
