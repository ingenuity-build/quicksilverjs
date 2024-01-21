import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRequestRedemption, MsgSignalIntent } from "./messages";
import { MsgGovCloseChannel, MsgGovReopenChannel, MsgGovSetLsmCaps } from "./proposals";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        requestRedemption(value: MsgRequestRedemption): {
            typeUrl: string;
            value: Uint8Array;
        };
        signalIntent(value: MsgSignalIntent): {
            typeUrl: string;
            value: Uint8Array;
        };
        govCloseChannel(value: MsgGovCloseChannel): {
            typeUrl: string;
            value: Uint8Array;
        };
        govReopenChannel(value: MsgGovReopenChannel): {
            typeUrl: string;
            value: Uint8Array;
        };
        govSetLsmCaps(value: MsgGovSetLsmCaps): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        requestRedemption(value: MsgRequestRedemption): {
            typeUrl: string;
            value: MsgRequestRedemption;
        };
        signalIntent(value: MsgSignalIntent): {
            typeUrl: string;
            value: MsgSignalIntent;
        };
        govCloseChannel(value: MsgGovCloseChannel): {
            typeUrl: string;
            value: MsgGovCloseChannel;
        };
        govReopenChannel(value: MsgGovReopenChannel): {
            typeUrl: string;
            value: MsgGovReopenChannel;
        };
        govSetLsmCaps(value: MsgGovSetLsmCaps): {
            typeUrl: string;
            value: MsgGovSetLsmCaps;
        };
    };
    toJSON: {
        requestRedemption(value: MsgRequestRedemption): {
            typeUrl: string;
            value: unknown;
        };
        signalIntent(value: MsgSignalIntent): {
            typeUrl: string;
            value: unknown;
        };
        govCloseChannel(value: MsgGovCloseChannel): {
            typeUrl: string;
            value: unknown;
        };
        govReopenChannel(value: MsgGovReopenChannel): {
            typeUrl: string;
            value: unknown;
        };
        govSetLsmCaps(value: MsgGovSetLsmCaps): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        requestRedemption(value: any): {
            typeUrl: string;
            value: MsgRequestRedemption;
        };
        signalIntent(value: any): {
            typeUrl: string;
            value: MsgSignalIntent;
        };
        govCloseChannel(value: any): {
            typeUrl: string;
            value: MsgGovCloseChannel;
        };
        govReopenChannel(value: any): {
            typeUrl: string;
            value: MsgGovReopenChannel;
        };
        govSetLsmCaps(value: any): {
            typeUrl: string;
            value: MsgGovSetLsmCaps;
        };
    };
    fromPartial: {
        requestRedemption(value: MsgRequestRedemption): {
            typeUrl: string;
            value: MsgRequestRedemption;
        };
        signalIntent(value: MsgSignalIntent): {
            typeUrl: string;
            value: MsgSignalIntent;
        };
        govCloseChannel(value: MsgGovCloseChannel): {
            typeUrl: string;
            value: MsgGovCloseChannel;
        };
        govReopenChannel(value: MsgGovReopenChannel): {
            typeUrl: string;
            value: MsgGovReopenChannel;
        };
        govSetLsmCaps(value: MsgGovSetLsmCaps): {
            typeUrl: string;
            value: MsgGovSetLsmCaps;
        };
    };
};
