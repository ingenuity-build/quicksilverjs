import * as fm from "../../../../grpc-gateway";
import { MsgCreateClient, MsgCreateClientResponse, MsgUpdateClient, MsgUpdateClientResponse, MsgUpgradeClient, MsgUpgradeClientResponse, MsgSubmitMisbehaviour, MsgSubmitMisbehaviourResponse } from "./tx";
export declare class Msg {
    /** CreateClient defines a rpc handler method for MsgCreateClient. */
    static createClient(request: MsgCreateClient, initRequest?: fm.InitReq): Promise<MsgCreateClientResponse>;
    /** UpdateClient defines a rpc handler method for MsgUpdateClient. */
    static updateClient(request: MsgUpdateClient, initRequest?: fm.InitReq): Promise<MsgUpdateClientResponse>;
    /** UpgradeClient defines a rpc handler method for MsgUpgradeClient. */
    static upgradeClient(request: MsgUpgradeClient, initRequest?: fm.InitReq): Promise<MsgUpgradeClientResponse>;
    /** SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour. */
    static submitMisbehaviour(request: MsgSubmitMisbehaviour, initRequest?: fm.InitReq): Promise<MsgSubmitMisbehaviourResponse>;
}
