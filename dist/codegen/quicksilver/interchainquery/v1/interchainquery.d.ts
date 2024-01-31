import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Query {
    id: string;
    connection_id: string;
    chain_id: string;
    query_type: string;
    request: Uint8Array;
    /** change these to uint64 in v0.5.0 */
    period: string;
    last_height: string;
    callback_id: string;
    ttl: Long;
    last_emission: string;
}
export interface QueryProtoMsg {
    type_url: "/quicksilver.interchainquery.v1.Query";
    value: Uint8Array;
}
export interface QueryAmino {
    id: string;
    connection_id: string;
    chain_id: string;
    query_type: string;
    request: Uint8Array;
    /** change these to uint64 in v0.5.0 */
    period: string;
    last_height: string;
    callback_id: string;
    ttl: string;
    last_emission: string;
}
export interface QueryAminoMsg {
    type: "/quicksilver.interchainquery.v1.Query";
    value: QueryAmino;
}
export interface QuerySDKType {
    id: string;
    connection_id: string;
    chain_id: string;
    query_type: string;
    request: Uint8Array;
    period: string;
    last_height: string;
    callback_id: string;
    ttl: Long;
    last_emission: string;
}
export interface DataPoint {
    id: string;
    /** change these to uint64 in v0.5.0 */
    remote_height: string;
    local_height: string;
    value: Uint8Array;
}
export interface DataPointProtoMsg {
    type_url: "/quicksilver.interchainquery.v1.DataPoint";
    value: Uint8Array;
}
export interface DataPointAmino {
    id: string;
    /** change these to uint64 in v0.5.0 */
    remote_height: string;
    local_height: string;
    value: Uint8Array;
}
export interface DataPointAminoMsg {
    type: "/quicksilver.interchainquery.v1.DataPoint";
    value: DataPointAmino;
}
export interface DataPointSDKType {
    id: string;
    remote_height: string;
    local_height: string;
    value: Uint8Array;
}
export declare const Query: {
    typeUrl: string;
    encode(message: Query, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Query;
    fromJSON(object: any): Query;
    toJSON(message: Query): unknown;
    fromPartial(object: DeepPartial<Query>): Query;
    fromAmino(object: QueryAmino): Query;
    toAmino(message: Query): QueryAmino;
    fromAminoMsg(object: QueryAminoMsg): Query;
    fromProtoMsg(message: QueryProtoMsg): Query;
    toProto(message: Query): Uint8Array;
    toProtoMsg(message: Query): QueryProtoMsg;
};
export declare const DataPoint: {
    typeUrl: string;
    encode(message: DataPoint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataPoint;
    fromJSON(object: any): DataPoint;
    toJSON(message: DataPoint): unknown;
    fromPartial(object: DeepPartial<DataPoint>): DataPoint;
    fromAmino(object: DataPointAmino): DataPoint;
    toAmino(message: DataPoint): DataPointAmino;
    fromAminoMsg(object: DataPointAminoMsg): DataPoint;
    fromProtoMsg(message: DataPointProtoMsg): DataPoint;
    toProto(message: DataPoint): Uint8Array;
    toProtoMsg(message: DataPoint): DataPointProtoMsg;
};
