import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface EpochInfo {
    identifier: string;
    startTime: Date;
    duration: Duration;
    currentEpoch: Long;
    currentEpochStartTime: Date;
    epochCountingStarted: boolean;
    currentEpochStartHeight: Long;
}
export interface EpochInfoProtoMsg {
    typeUrl: "/quicksilver.epochs.v1.EpochInfo";
    value: Uint8Array;
}
export interface EpochInfoAmino {
    identifier: string;
    start_time?: Date;
    duration?: DurationAmino;
    current_epoch: string;
    current_epoch_start_time?: Date;
    epoch_counting_started: boolean;
    current_epoch_start_height: string;
}
export interface EpochInfoAminoMsg {
    type: "/quicksilver.epochs.v1.EpochInfo";
    value: EpochInfoAmino;
}
export interface EpochInfoSDKType {
    identifier: string;
    start_time: Date;
    duration: DurationSDKType;
    current_epoch: Long;
    current_epoch_start_time: Date;
    epoch_counting_started: boolean;
    current_epoch_start_height: Long;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisState {
    epochs: EpochInfo[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/quicksilver.epochs.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisStateAmino {
    epochs: EpochInfoAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/quicksilver.epochs.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisStateSDKType {
    epochs: EpochInfoSDKType[];
}
export declare const EpochInfo: {
    typeUrl: string;
    encode(message: EpochInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EpochInfo;
    fromJSON(object: any): EpochInfo;
    toJSON(message: EpochInfo): unknown;
    fromPartial(object: DeepPartial<EpochInfo>): EpochInfo;
    fromAmino(object: EpochInfoAmino): EpochInfo;
    toAmino(message: EpochInfo): EpochInfoAmino;
    fromAminoMsg(object: EpochInfoAminoMsg): EpochInfo;
    fromProtoMsg(message: EpochInfoProtoMsg): EpochInfo;
    toProto(message: EpochInfo): Uint8Array;
    toProtoMsg(message: EpochInfo): EpochInfoProtoMsg;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
