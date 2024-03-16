import * as fm from "../../../grpc-gateway";
import { MsgCreateValidator, MsgCreateValidatorResponse, MsgEditValidator, MsgEditValidatorResponse, MsgDelegate, MsgDelegateResponse, MsgBeginRedelegate, MsgBeginRedelegateResponse, MsgUndelegate, MsgUndelegateResponse } from "./tx";
import { MsgTokenizeShares, MsgTokenizeSharesResponse, MsgRedeemTokensForShares, MsgRedeemTokensForSharesResponse, MsgDisableTokenizeShares, MsgDisableTokenizeSharesResponse, MsgEnableTokenizeShares, MsgEnableTokenizeSharesResponse } from "./lsm";
export declare class Msg {
    /** CreateValidator defines a method for creating a new validator. */
    static createValidator(request: MsgCreateValidator, initRequest?: fm.InitReq): Promise<MsgCreateValidatorResponse>;
    /** EditValidator defines a method for editing an existing validator. */
    static editValidator(request: MsgEditValidator, initRequest?: fm.InitReq): Promise<MsgEditValidatorResponse>;
    /**
     * Delegate defines a method for performing a delegation of coins
     * from a delegator to a validator.
     */
    static delegate(request: MsgDelegate, initRequest?: fm.InitReq): Promise<MsgDelegateResponse>;
    /**
     * BeginRedelegate defines a method for performing a redelegation
     * of coins from a delegator and source validator to a destination validator.
     */
    static beginRedelegate(request: MsgBeginRedelegate, initRequest?: fm.InitReq): Promise<MsgBeginRedelegateResponse>;
    /**
     * Undelegate defines a method for performing an undelegation from a
     * delegate and a validator.
     */
    static undelegate(request: MsgUndelegate, initRequest?: fm.InitReq): Promise<MsgUndelegateResponse>;
    static tokenizeShares(request: MsgTokenizeShares, initRequest?: fm.InitReq): Promise<MsgTokenizeSharesResponse>;
    static redeemTokensForShares(request: MsgRedeemTokensForShares, initRequest?: fm.InitReq): Promise<MsgRedeemTokensForSharesResponse>;
    static disableTokenizeShares(request: MsgDisableTokenizeShares, initRequest?: fm.InitReq): Promise<MsgDisableTokenizeSharesResponse>;
    static enableTokenizeShares(request: MsgEnableTokenizeShares, initRequest?: fm.InitReq): Promise<MsgEnableTokenizeSharesResponse>;
}
