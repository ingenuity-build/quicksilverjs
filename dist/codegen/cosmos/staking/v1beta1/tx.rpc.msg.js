"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Msg = void 0;
const fm = __importStar(require("../../../grpc-gateway"));
class Msg {
    /** CreateValidator defines a method for creating a new validator. */
    static createValidator(request, initRequest) {
        return fm.fetchReq(`/cosmos.staking.v1beta1/createValidator`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** EditValidator defines a method for editing an existing validator. */
    static editValidator(request, initRequest) {
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
    static delegate(request, initRequest) {
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
    static beginRedelegate(request, initRequest) {
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
    static undelegate(request, initRequest) {
        return fm.fetchReq(`/cosmos.staking.v1beta1/undelegate`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static tokenizeShares(request, initRequest) {
        return fm.fetchReq(`/cosmos.staking.v1beta1/tokenizeShares`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static redeemTokensForShares(request, initRequest) {
        return fm.fetchReq(`/cosmos.staking.v1beta1/redeemTokensForShares`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static disableTokenizeShares(request, initRequest) {
        return fm.fetchReq(`/cosmos.staking.v1beta1/disableTokenizeShares`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static enableTokenizeShares(request, initRequest) {
        return fm.fetchReq(`/cosmos.staking.v1beta1/enableTokenizeShares`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
exports.Msg = Msg;
//# sourceMappingURL=tx.rpc.msg.js.map