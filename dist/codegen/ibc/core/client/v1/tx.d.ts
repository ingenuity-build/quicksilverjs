import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../../helpers";
/** MsgCreateClient defines a message to create an IBC client */
export interface MsgCreateClient {
    /** light client state */
    client_state: Any;
    /**
     * consensus state associated with the client that corresponds to a given
     * height.
     */
    consensus_state: Any;
    /** signer address */
    signer: string;
}
export interface MsgCreateClientProtoMsg {
    type_url: "/ibc.core.client.v1.MsgCreateClient";
    value: Uint8Array;
}
/** MsgCreateClient defines a message to create an IBC client */
export interface MsgCreateClientAmino {
    /** light client state */
    client_state?: AnyAmino;
    /**
     * consensus state associated with the client that corresponds to a given
     * height.
     */
    consensus_state?: AnyAmino;
    /** signer address */
    signer: string;
}
export interface MsgCreateClientAminoMsg {
    type: "cosmos-sdk/MsgCreateClient";
    value: MsgCreateClientAmino;
}
/** MsgCreateClient defines a message to create an IBC client */
export interface MsgCreateClientSDKType {
    client_state: AnySDKType;
    consensus_state: AnySDKType;
    signer: string;
}
/** MsgCreateClientResponse defines the Msg/CreateClient response type. */
export interface MsgCreateClientResponse {
}
export interface MsgCreateClientResponseProtoMsg {
    type_url: "/ibc.core.client.v1.MsgCreateClientResponse";
    value: Uint8Array;
}
/** MsgCreateClientResponse defines the Msg/CreateClient response type. */
export interface MsgCreateClientResponseAmino {
}
export interface MsgCreateClientResponseAminoMsg {
    type: "cosmos-sdk/MsgCreateClientResponse";
    value: MsgCreateClientResponseAmino;
}
/** MsgCreateClientResponse defines the Msg/CreateClient response type. */
export interface MsgCreateClientResponseSDKType {
}
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given header.
 */
export interface MsgUpdateClient {
    /** client unique identifier */
    client_id: string;
    /** header to update the light client */
    header: Any;
    /** signer address */
    signer: string;
}
export interface MsgUpdateClientProtoMsg {
    type_url: "/ibc.core.client.v1.MsgUpdateClient";
    value: Uint8Array;
}
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given header.
 */
export interface MsgUpdateClientAmino {
    /** client unique identifier */
    client_id: string;
    /** header to update the light client */
    header?: AnyAmino;
    /** signer address */
    signer: string;
}
export interface MsgUpdateClientAminoMsg {
    type: "cosmos-sdk/MsgUpdateClient";
    value: MsgUpdateClientAmino;
}
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given header.
 */
export interface MsgUpdateClientSDKType {
    client_id: string;
    header: AnySDKType;
    signer: string;
}
/** MsgUpdateClientResponse defines the Msg/UpdateClient response type. */
export interface MsgUpdateClientResponse {
}
export interface MsgUpdateClientResponseProtoMsg {
    type_url: "/ibc.core.client.v1.MsgUpdateClientResponse";
    value: Uint8Array;
}
/** MsgUpdateClientResponse defines the Msg/UpdateClient response type. */
export interface MsgUpdateClientResponseAmino {
}
export interface MsgUpdateClientResponseAminoMsg {
    type: "cosmos-sdk/MsgUpdateClientResponse";
    value: MsgUpdateClientResponseAmino;
}
/** MsgUpdateClientResponse defines the Msg/UpdateClient response type. */
export interface MsgUpdateClientResponseSDKType {
}
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 */
export interface MsgUpgradeClient {
    /** client unique identifier */
    client_id: string;
    /** upgraded client state */
    client_state: Any;
    /**
     * upgraded consensus state, only contains enough information to serve as a
     * basis of trust in update logic
     */
    consensus_state: Any;
    /** proof that old chain committed to new client */
    proof_upgrade_client: Uint8Array;
    /** proof that old chain committed to new consensus state */
    proof_upgrade_consensus_state: Uint8Array;
    /** signer address */
    signer: string;
}
export interface MsgUpgradeClientProtoMsg {
    type_url: "/ibc.core.client.v1.MsgUpgradeClient";
    value: Uint8Array;
}
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 */
export interface MsgUpgradeClientAmino {
    /** client unique identifier */
    client_id: string;
    /** upgraded client state */
    client_state?: AnyAmino;
    /**
     * upgraded consensus state, only contains enough information to serve as a
     * basis of trust in update logic
     */
    consensus_state?: AnyAmino;
    /** proof that old chain committed to new client */
    proof_upgrade_client: Uint8Array;
    /** proof that old chain committed to new consensus state */
    proof_upgrade_consensus_state: Uint8Array;
    /** signer address */
    signer: string;
}
export interface MsgUpgradeClientAminoMsg {
    type: "cosmos-sdk/MsgUpgradeClient";
    value: MsgUpgradeClientAmino;
}
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 */
export interface MsgUpgradeClientSDKType {
    client_id: string;
    client_state: AnySDKType;
    consensus_state: AnySDKType;
    proof_upgrade_client: Uint8Array;
    proof_upgrade_consensus_state: Uint8Array;
    signer: string;
}
/** MsgUpgradeClientResponse defines the Msg/UpgradeClient response type. */
export interface MsgUpgradeClientResponse {
}
export interface MsgUpgradeClientResponseProtoMsg {
    type_url: "/ibc.core.client.v1.MsgUpgradeClientResponse";
    value: Uint8Array;
}
/** MsgUpgradeClientResponse defines the Msg/UpgradeClient response type. */
export interface MsgUpgradeClientResponseAmino {
}
export interface MsgUpgradeClientResponseAminoMsg {
    type: "cosmos-sdk/MsgUpgradeClientResponse";
    value: MsgUpgradeClientResponseAmino;
}
/** MsgUpgradeClientResponse defines the Msg/UpgradeClient response type. */
export interface MsgUpgradeClientResponseSDKType {
}
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 */
export interface MsgSubmitMisbehaviour {
    /** client unique identifier */
    client_id: string;
    /** misbehaviour used for freezing the light client */
    misbehaviour: Any;
    /** signer address */
    signer: string;
}
export interface MsgSubmitMisbehaviourProtoMsg {
    type_url: "/ibc.core.client.v1.MsgSubmitMisbehaviour";
    value: Uint8Array;
}
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 */
export interface MsgSubmitMisbehaviourAmino {
    /** client unique identifier */
    client_id: string;
    /** misbehaviour used for freezing the light client */
    misbehaviour?: AnyAmino;
    /** signer address */
    signer: string;
}
export interface MsgSubmitMisbehaviourAminoMsg {
    type: "cosmos-sdk/MsgSubmitMisbehaviour";
    value: MsgSubmitMisbehaviourAmino;
}
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 */
export interface MsgSubmitMisbehaviourSDKType {
    client_id: string;
    misbehaviour: AnySDKType;
    signer: string;
}
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 */
export interface MsgSubmitMisbehaviourResponse {
}
export interface MsgSubmitMisbehaviourResponseProtoMsg {
    type_url: "/ibc.core.client.v1.MsgSubmitMisbehaviourResponse";
    value: Uint8Array;
}
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 */
export interface MsgSubmitMisbehaviourResponseAmino {
}
export interface MsgSubmitMisbehaviourResponseAminoMsg {
    type: "cosmos-sdk/MsgSubmitMisbehaviourResponse";
    value: MsgSubmitMisbehaviourResponseAmino;
}
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 */
export interface MsgSubmitMisbehaviourResponseSDKType {
}
export declare const MsgCreateClient: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgCreateClient, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClient;
    fromJSON(object: any): MsgCreateClient;
    toJSON(message: MsgCreateClient): unknown;
    fromPartial(object: DeepPartial<MsgCreateClient>): MsgCreateClient;
    fromAmino(object: MsgCreateClientAmino): MsgCreateClient;
    toAmino(message: MsgCreateClient): MsgCreateClientAmino;
    fromAminoMsg(object: MsgCreateClientAminoMsg): MsgCreateClient;
    toAminoMsg(message: MsgCreateClient): MsgCreateClientAminoMsg;
    fromProtoMsg(message: MsgCreateClientProtoMsg): MsgCreateClient;
    toProto(message: MsgCreateClient): Uint8Array;
    toProtoMsg(message: MsgCreateClient): MsgCreateClientProtoMsg;
};
export declare const MsgCreateClientResponse: {
    typeUrl: string;
    aminoType: string;
    encode(_: MsgCreateClientResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClientResponse;
    fromJSON(_: any): MsgCreateClientResponse;
    toJSON(_: MsgCreateClientResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateClientResponse>): MsgCreateClientResponse;
    fromAmino(_: MsgCreateClientResponseAmino): MsgCreateClientResponse;
    toAmino(_: MsgCreateClientResponse): MsgCreateClientResponseAmino;
    fromAminoMsg(object: MsgCreateClientResponseAminoMsg): MsgCreateClientResponse;
    toAminoMsg(message: MsgCreateClientResponse): MsgCreateClientResponseAminoMsg;
    fromProtoMsg(message: MsgCreateClientResponseProtoMsg): MsgCreateClientResponse;
    toProto(message: MsgCreateClientResponse): Uint8Array;
    toProtoMsg(message: MsgCreateClientResponse): MsgCreateClientResponseProtoMsg;
};
export declare const MsgUpdateClient: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgUpdateClient, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClient;
    fromJSON(object: any): MsgUpdateClient;
    toJSON(message: MsgUpdateClient): unknown;
    fromPartial(object: DeepPartial<MsgUpdateClient>): MsgUpdateClient;
    fromAmino(object: MsgUpdateClientAmino): MsgUpdateClient;
    toAmino(message: MsgUpdateClient): MsgUpdateClientAmino;
    fromAminoMsg(object: MsgUpdateClientAminoMsg): MsgUpdateClient;
    toAminoMsg(message: MsgUpdateClient): MsgUpdateClientAminoMsg;
    fromProtoMsg(message: MsgUpdateClientProtoMsg): MsgUpdateClient;
    toProto(message: MsgUpdateClient): Uint8Array;
    toProtoMsg(message: MsgUpdateClient): MsgUpdateClientProtoMsg;
};
export declare const MsgUpdateClientResponse: {
    typeUrl: string;
    aminoType: string;
    encode(_: MsgUpdateClientResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClientResponse;
    fromJSON(_: any): MsgUpdateClientResponse;
    toJSON(_: MsgUpdateClientResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateClientResponse>): MsgUpdateClientResponse;
    fromAmino(_: MsgUpdateClientResponseAmino): MsgUpdateClientResponse;
    toAmino(_: MsgUpdateClientResponse): MsgUpdateClientResponseAmino;
    fromAminoMsg(object: MsgUpdateClientResponseAminoMsg): MsgUpdateClientResponse;
    toAminoMsg(message: MsgUpdateClientResponse): MsgUpdateClientResponseAminoMsg;
    fromProtoMsg(message: MsgUpdateClientResponseProtoMsg): MsgUpdateClientResponse;
    toProto(message: MsgUpdateClientResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateClientResponse): MsgUpdateClientResponseProtoMsg;
};
export declare const MsgUpgradeClient: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgUpgradeClient, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpgradeClient;
    fromJSON(object: any): MsgUpgradeClient;
    toJSON(message: MsgUpgradeClient): unknown;
    fromPartial(object: DeepPartial<MsgUpgradeClient>): MsgUpgradeClient;
    fromAmino(object: MsgUpgradeClientAmino): MsgUpgradeClient;
    toAmino(message: MsgUpgradeClient): MsgUpgradeClientAmino;
    fromAminoMsg(object: MsgUpgradeClientAminoMsg): MsgUpgradeClient;
    toAminoMsg(message: MsgUpgradeClient): MsgUpgradeClientAminoMsg;
    fromProtoMsg(message: MsgUpgradeClientProtoMsg): MsgUpgradeClient;
    toProto(message: MsgUpgradeClient): Uint8Array;
    toProtoMsg(message: MsgUpgradeClient): MsgUpgradeClientProtoMsg;
};
export declare const MsgUpgradeClientResponse: {
    typeUrl: string;
    aminoType: string;
    encode(_: MsgUpgradeClientResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpgradeClientResponse;
    fromJSON(_: any): MsgUpgradeClientResponse;
    toJSON(_: MsgUpgradeClientResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpgradeClientResponse>): MsgUpgradeClientResponse;
    fromAmino(_: MsgUpgradeClientResponseAmino): MsgUpgradeClientResponse;
    toAmino(_: MsgUpgradeClientResponse): MsgUpgradeClientResponseAmino;
    fromAminoMsg(object: MsgUpgradeClientResponseAminoMsg): MsgUpgradeClientResponse;
    toAminoMsg(message: MsgUpgradeClientResponse): MsgUpgradeClientResponseAminoMsg;
    fromProtoMsg(message: MsgUpgradeClientResponseProtoMsg): MsgUpgradeClientResponse;
    toProto(message: MsgUpgradeClientResponse): Uint8Array;
    toProtoMsg(message: MsgUpgradeClientResponse): MsgUpgradeClientResponseProtoMsg;
};
export declare const MsgSubmitMisbehaviour: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgSubmitMisbehaviour, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitMisbehaviour;
    fromJSON(object: any): MsgSubmitMisbehaviour;
    toJSON(message: MsgSubmitMisbehaviour): unknown;
    fromPartial(object: DeepPartial<MsgSubmitMisbehaviour>): MsgSubmitMisbehaviour;
    fromAmino(object: MsgSubmitMisbehaviourAmino): MsgSubmitMisbehaviour;
    toAmino(message: MsgSubmitMisbehaviour): MsgSubmitMisbehaviourAmino;
    fromAminoMsg(object: MsgSubmitMisbehaviourAminoMsg): MsgSubmitMisbehaviour;
    toAminoMsg(message: MsgSubmitMisbehaviour): MsgSubmitMisbehaviourAminoMsg;
    fromProtoMsg(message: MsgSubmitMisbehaviourProtoMsg): MsgSubmitMisbehaviour;
    toProto(message: MsgSubmitMisbehaviour): Uint8Array;
    toProtoMsg(message: MsgSubmitMisbehaviour): MsgSubmitMisbehaviourProtoMsg;
};
export declare const MsgSubmitMisbehaviourResponse: {
    typeUrl: string;
    aminoType: string;
    encode(_: MsgSubmitMisbehaviourResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitMisbehaviourResponse;
    fromJSON(_: any): MsgSubmitMisbehaviourResponse;
    toJSON(_: MsgSubmitMisbehaviourResponse): unknown;
    fromPartial(_: DeepPartial<MsgSubmitMisbehaviourResponse>): MsgSubmitMisbehaviourResponse;
    fromAmino(_: MsgSubmitMisbehaviourResponseAmino): MsgSubmitMisbehaviourResponse;
    toAmino(_: MsgSubmitMisbehaviourResponse): MsgSubmitMisbehaviourResponseAmino;
    fromAminoMsg(object: MsgSubmitMisbehaviourResponseAminoMsg): MsgSubmitMisbehaviourResponse;
    toAminoMsg(message: MsgSubmitMisbehaviourResponse): MsgSubmitMisbehaviourResponseAminoMsg;
    fromProtoMsg(message: MsgSubmitMisbehaviourResponseProtoMsg): MsgSubmitMisbehaviourResponse;
    toProto(message: MsgSubmitMisbehaviourResponse): Uint8Array;
    toProtoMsg(message: MsgSubmitMisbehaviourResponse): MsgSubmitMisbehaviourResponseProtoMsg;
};
