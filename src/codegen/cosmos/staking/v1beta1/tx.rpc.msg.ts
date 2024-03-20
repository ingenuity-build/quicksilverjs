import * as fm from "../../../grpc-gateway";
import { MsgCreateValidator, MsgCreateValidatorResponse, MsgEditValidator, MsgEditValidatorResponse, MsgDelegate, MsgDelegateResponse, MsgBeginRedelegate, MsgBeginRedelegateResponse, MsgUndelegate, MsgUndelegateResponse } from "./tx";
import { MsgTokenizeShares, MsgTokenizeSharesResponse, MsgRedeemTokensForShares, MsgRedeemTokensForSharesResponse, MsgDisableTokenizeShares, MsgDisableTokenizeSharesResponse, MsgEnableTokenizeShares, MsgEnableTokenizeSharesResponse } from "./lsm";
export class Msg {
  /** CreateValidator defines a method for creating a new validator. */
  static createValidator(request: MsgCreateValidator, initRequest?: fm.InitReq): Promise<MsgCreateValidatorResponse> {
    return fm.fetchReq(`/cosmos.staking.v1beta1/createValidator`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** EditValidator defines a method for editing an existing validator. */
  static editValidator(request: MsgEditValidator, initRequest?: fm.InitReq): Promise<MsgEditValidatorResponse> {
    return fm.fetchReq(`/cosmos.staking.v1beta1/editValidator`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /**
   * Delegate defines a method for performing a delegation of coins
   * from a delegator to a validator.
   */
  static delegate(request: MsgDelegate, initRequest?: fm.InitReq): Promise<MsgDelegateResponse> {
    return fm.fetchReq(`/cosmos.staking.v1beta1/delegate`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /**
   * BeginRedelegate defines a method for performing a redelegation
   * of coins from a delegator and source validator to a destination validator.
   */
  static beginRedelegate(request: MsgBeginRedelegate, initRequest?: fm.InitReq): Promise<MsgBeginRedelegateResponse> {
    return fm.fetchReq(`/cosmos.staking.v1beta1/beginRedelegate`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /**
   * Undelegate defines a method for performing an undelegation from a
   * delegate and a validator.
   */
  static undelegate(request: MsgUndelegate, initRequest?: fm.InitReq): Promise<MsgUndelegateResponse> {
    return fm.fetchReq(`/cosmos.staking.v1beta1/undelegate`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static tokenizeShares(request: MsgTokenizeShares, initRequest?: fm.InitReq): Promise<MsgTokenizeSharesResponse> {
    return fm.fetchReq(`/cosmos.staking.v1beta1/tokenizeShares`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static redeemTokensForShares(request: MsgRedeemTokensForShares, initRequest?: fm.InitReq): Promise<MsgRedeemTokensForSharesResponse> {
    return fm.fetchReq(`/cosmos.staking.v1beta1/redeemTokensForShares`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static disableTokenizeShares(request: MsgDisableTokenizeShares, initRequest?: fm.InitReq): Promise<MsgDisableTokenizeSharesResponse> {
    return fm.fetchReq(`/cosmos.staking.v1beta1/disableTokenizeShares`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static enableTokenizeShares(request: MsgEnableTokenizeShares, initRequest?: fm.InitReq): Promise<MsgEnableTokenizeSharesResponse> {
    return fm.fetchReq(`/cosmos.staking.v1beta1/enableTokenizeShares`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}