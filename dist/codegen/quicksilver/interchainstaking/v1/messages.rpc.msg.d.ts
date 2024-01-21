import * as fm from "../../../grpc-gateway";
import { MsgRequestRedemption, MsgRequestRedemptionResponse, MsgSignalIntent, MsgSignalIntentResponse } from "./messages";
import { MsgGovCloseChannel, MsgGovCloseChannelResponse, MsgGovReopenChannel, MsgGovReopenChannelResponse, MsgGovSetLsmCaps, MsgGovSetLsmCapsResponse } from "./proposals";
export declare class Msg {
    /**
     * RequestRedemption defines a method for requesting burning of qAssets for
     * native assets.
     */
    static requestRedemption(request: MsgRequestRedemption, initRequest?: fm.InitReq): Promise<MsgRequestRedemptionResponse>;
    /**
     * SignalIntent defines a method for signalling voting intent for one or more
     * validators.
     */
    static signalIntent(request: MsgSignalIntent, initRequest?: fm.InitReq): Promise<MsgSignalIntentResponse>;
    /**
     * SignalIntent defines a method for signalling voting intent for one or more
     * validators.
     */
    static govCloseChannel(request: MsgGovCloseChannel, initRequest?: fm.InitReq): Promise<MsgGovCloseChannelResponse>;
    static govReopenChannel(request: MsgGovReopenChannel, initRequest?: fm.InitReq): Promise<MsgGovReopenChannelResponse>;
    static govSetLsmCaps(request: MsgGovSetLsmCaps, initRequest?: fm.InitReq): Promise<MsgGovSetLsmCapsResponse>;
}
