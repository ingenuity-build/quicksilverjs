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
exports.quicksilver = void 0;
const _85 = __importStar(require("./airdrop/v1/airdrop"));
const _86 = __importStar(require("./airdrop/v1/genesis"));
const _87 = __importStar(require("./airdrop/v1/messages"));
const _88 = __importStar(require("./airdrop/v1/params"));
const _89 = __importStar(require("./airdrop/v1/proposals"));
const _90 = __importStar(require("./airdrop/v1/query"));
const _91 = __importStar(require("./claimsmanager/v1/claimsmanager"));
const _92 = __importStar(require("./claimsmanager/v1/genesis"));
const _93 = __importStar(require("./claimsmanager/v1/messages"));
const _94 = __importStar(require("./claimsmanager/v1/query"));
const _95 = __importStar(require("./epochs/v1/genesis"));
const _96 = __importStar(require("./epochs/v1/query"));
const _97 = __importStar(require("./interchainquery/v1/genesis"));
const _98 = __importStar(require("./interchainquery/v1/interchainquery"));
const _99 = __importStar(require("./interchainquery/v1/messages"));
const _100 = __importStar(require("./interchainquery/v1/query"));
const _101 = __importStar(require("./interchainstaking/v1/genesis"));
const _102 = __importStar(require("./interchainstaking/v1/interchainstaking"));
const _103 = __importStar(require("./interchainstaking/v1/messages"));
const _104 = __importStar(require("./interchainstaking/v1/proposals"));
const _105 = __importStar(require("./interchainstaking/v1/query"));
const _106 = __importStar(require("./mint/v1beta1/genesis"));
const _107 = __importStar(require("./mint/v1beta1/mint"));
const _108 = __importStar(require("./mint/v1beta1/query"));
const _109 = __importStar(require("./participationrewards/v1/genesis"));
const _110 = __importStar(require("./participationrewards/v1/messages"));
const _111 = __importStar(require("./participationrewards/v1/participationrewards"));
const _112 = __importStar(require("./participationrewards/v1/proposals"));
const _113 = __importStar(require("./participationrewards/v1/query"));
const _114 = __importStar(require("./supply/v1/query"));
const _115 = __importStar(require("./tokenfactory/v1beta1/authorityMetadata"));
const _116 = __importStar(require("./tokenfactory/v1beta1/genesis"));
const _117 = __importStar(require("./tokenfactory/v1beta1/params"));
const _118 = __importStar(require("./tokenfactory/v1beta1/query"));
const _119 = __importStar(require("./tokenfactory/v1beta1/tx"));
const _192 = __importStar(require("./airdrop/v1/messages.amino"));
const _193 = __importStar(require("./interchainquery/v1/messages.amino"));
const _194 = __importStar(require("./interchainstaking/v1/messages.amino"));
const _195 = __importStar(require("./participationrewards/v1/messages.amino"));
const _196 = __importStar(require("./tokenfactory/v1beta1/tx.amino"));
const _197 = __importStar(require("./airdrop/v1/messages.registry"));
const _198 = __importStar(require("./interchainquery/v1/messages.registry"));
const _199 = __importStar(require("./interchainstaking/v1/messages.registry"));
const _200 = __importStar(require("./participationrewards/v1/messages.registry"));
const _201 = __importStar(require("./tokenfactory/v1beta1/tx.registry"));
const _202 = __importStar(require("./airdrop/v1/query.lcd"));
const _203 = __importStar(require("./claimsmanager/v1/query.lcd"));
const _204 = __importStar(require("./epochs/v1/query.lcd"));
const _205 = __importStar(require("./interchainstaking/v1/query.lcd"));
const _206 = __importStar(require("./mint/v1beta1/query.lcd"));
const _207 = __importStar(require("./participationrewards/v1/query.lcd"));
const _208 = __importStar(require("./supply/v1/query.lcd"));
const _209 = __importStar(require("./tokenfactory/v1beta1/query.lcd"));
const _210 = __importStar(require("./airdrop/v1/query.rpc.Query"));
const _211 = __importStar(require("./claimsmanager/v1/query.rpc.Query"));
const _212 = __importStar(require("./epochs/v1/query.rpc.Query"));
const _213 = __importStar(require("./interchainstaking/v1/query.rpc.Query"));
const _214 = __importStar(require("./mint/v1beta1/query.rpc.Query"));
const _215 = __importStar(require("./participationrewards/v1/query.rpc.Query"));
const _216 = __importStar(require("./supply/v1/query.rpc.Query"));
const _217 = __importStar(require("./tokenfactory/v1beta1/query.rpc.Query"));
const _218 = __importStar(require("./airdrop/v1/messages.rpc.msg"));
const _219 = __importStar(require("./interchainquery/v1/messages.rpc.msg"));
const _220 = __importStar(require("./interchainstaking/v1/messages.rpc.msg"));
const _221 = __importStar(require("./participationrewards/v1/messages.rpc.msg"));
const _222 = __importStar(require("./tokenfactory/v1beta1/tx.rpc.msg"));
const _229 = __importStar(require("./lcd"));
const _230 = __importStar(require("./rpc.query"));
const _231 = __importStar(require("./rpc.tx"));
var quicksilver;
(function (quicksilver) {
    let airdrop;
    (function (airdrop) {
        airdrop.v1 = {
            ..._85,
            ..._86,
            ..._87,
            ..._88,
            ..._89,
            ..._90,
            ..._192,
            ..._197,
            ..._202,
            ..._210,
            ..._218
        };
    })(airdrop = quicksilver.airdrop || (quicksilver.airdrop = {}));
    let claimsmanager;
    (function (claimsmanager) {
        claimsmanager.v1 = {
            ..._91,
            ..._92,
            ..._93,
            ..._94,
            ..._203,
            ..._211
        };
    })(claimsmanager = quicksilver.claimsmanager || (quicksilver.claimsmanager = {}));
    let epochs;
    (function (epochs) {
        epochs.v1 = {
            ..._95,
            ..._96,
            ..._204,
            ..._212
        };
    })(epochs = quicksilver.epochs || (quicksilver.epochs = {}));
    let interchainquery;
    (function (interchainquery) {
        interchainquery.v1 = {
            ..._97,
            ..._98,
            ..._99,
            ..._100,
            ..._193,
            ..._198,
            ..._219
        };
    })(interchainquery = quicksilver.interchainquery || (quicksilver.interchainquery = {}));
    let interchainstaking;
    (function (interchainstaking) {
        interchainstaking.v1 = {
            ..._101,
            ..._102,
            ..._103,
            ..._104,
            ..._105,
            ..._194,
            ..._199,
            ..._205,
            ..._213,
            ..._220
        };
    })(interchainstaking = quicksilver.interchainstaking || (quicksilver.interchainstaking = {}));
    let mint;
    (function (mint) {
        mint.v1beta1 = {
            ..._106,
            ..._107,
            ..._108,
            ..._206,
            ..._214
        };
    })(mint = quicksilver.mint || (quicksilver.mint = {}));
    let participationrewards;
    (function (participationrewards) {
        participationrewards.v1 = {
            ..._109,
            ..._110,
            ..._111,
            ..._112,
            ..._113,
            ..._195,
            ..._200,
            ..._207,
            ..._215,
            ..._221
        };
    })(participationrewards = quicksilver.participationrewards || (quicksilver.participationrewards = {}));
    let supply;
    (function (supply) {
        supply.v1 = {
            ..._114,
            ..._208,
            ..._216
        };
    })(supply = quicksilver.supply || (quicksilver.supply = {}));
    let tokenfactory;
    (function (tokenfactory) {
        tokenfactory.v1beta1 = {
            ..._115,
            ..._116,
            ..._117,
            ..._118,
            ..._119,
            ..._196,
            ..._201,
            ..._209,
            ..._217,
            ..._222
        };
    })(tokenfactory = quicksilver.tokenfactory || (quicksilver.tokenfactory = {}));
    quicksilver.ClientFactory = {
        ..._229,
        ..._230,
        ..._231
    };
})(quicksilver || (exports.quicksilver = quicksilver = {}));
//# sourceMappingURL=bundle.js.map