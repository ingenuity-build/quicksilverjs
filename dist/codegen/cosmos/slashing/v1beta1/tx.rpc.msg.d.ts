import * as fm from "../../../grpc-gateway";
import { MsgUnjail, MsgUnjailResponse } from "./tx";
export declare class Msg {
    /**
     * Unjail defines a method for unjailing a jailed validator, thus returning
     * them into the bonded validator set, so they can begin receiving provisions
     * and rewards again.
     */
    static unjail(request: MsgUnjail, initRequest?: fm.InitReq): Promise<MsgUnjailResponse>;
}
