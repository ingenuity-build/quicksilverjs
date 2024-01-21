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
exports.createGrpcGateWayClient = void 0;
const createGrpcGateWayClient = async ({ endpoint }) => {
    endpoint = endpoint.replace(/\/*$/g, "");
    return {
        cosmos: {
            auth: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/auth/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            authz: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/authz/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            bank: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/bank/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            distribution: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/distribution/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            gov: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/gov/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            mint: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/mint/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            slashing: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/slashing/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            staking: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/staking/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            tx: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/tx/v1beta1/service.rpc.Service")))).ServiceClientImpl(endpoint)
            },
            upgrade: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/upgrade/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            }
        },
        quicksilver: {
            airdrop: {
                v1: new (await Promise.resolve().then(() => __importStar(require("./airdrop/v1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            claimsmanager: {
                v1: new (await Promise.resolve().then(() => __importStar(require("./claimsmanager/v1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            epochs: {
                v1: new (await Promise.resolve().then(() => __importStar(require("./epochs/v1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            interchainstaking: {
                v1: new (await Promise.resolve().then(() => __importStar(require("./interchainstaking/v1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            mint: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("./mint/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            participationrewards: {
                v1: new (await Promise.resolve().then(() => __importStar(require("./participationrewards/v1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            supply: {
                v1: new (await Promise.resolve().then(() => __importStar(require("./supply/v1/query.rpc.Query")))).QueryClientImpl(endpoint)
            },
            tokenfactory: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("./tokenfactory/v1beta1/query.rpc.Query")))).QueryClientImpl(endpoint)
            }
        }
    };
};
exports.createGrpcGateWayClient = createGrpcGateWayClient;
//# sourceMappingURL=rpc.query.js.map