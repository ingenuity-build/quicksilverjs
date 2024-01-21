import * as _85 from "./airdrop/v1/airdrop";
import * as _86 from "./airdrop/v1/genesis";
import * as _87 from "./airdrop/v1/messages";
import * as _88 from "./airdrop/v1/params";
import * as _89 from "./airdrop/v1/proposals";
import * as _90 from "./airdrop/v1/query";
import * as _91 from "./claimsmanager/v1/claimsmanager";
import * as _92 from "./claimsmanager/v1/genesis";
import * as _93 from "./claimsmanager/v1/messages";
import * as _94 from "./claimsmanager/v1/query";
import * as _95 from "./epochs/v1/genesis";
import * as _96 from "./epochs/v1/query";
import * as _97 from "./interchainquery/v1/genesis";
import * as _98 from "./interchainquery/v1/interchainquery";
import * as _99 from "./interchainquery/v1/messages";
import * as _100 from "./interchainquery/v1/query";
import * as _101 from "./interchainstaking/v1/genesis";
import * as _102 from "./interchainstaking/v1/interchainstaking";
import * as _103 from "./interchainstaking/v1/messages";
import * as _104 from "./interchainstaking/v1/proposals";
import * as _105 from "./interchainstaking/v1/query";
import * as _106 from "./mint/v1beta1/genesis";
import * as _107 from "./mint/v1beta1/mint";
import * as _108 from "./mint/v1beta1/query";
import * as _109 from "./participationrewards/v1/genesis";
import * as _110 from "./participationrewards/v1/messages";
import * as _111 from "./participationrewards/v1/participationrewards";
import * as _112 from "./participationrewards/v1/proposals";
import * as _113 from "./participationrewards/v1/query";
import * as _114 from "./supply/v1/query";
import * as _115 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _116 from "./tokenfactory/v1beta1/genesis";
import * as _117 from "./tokenfactory/v1beta1/params";
import * as _118 from "./tokenfactory/v1beta1/query";
import * as _119 from "./tokenfactory/v1beta1/tx";
import * as _192 from "./airdrop/v1/messages.amino";
import * as _193 from "./interchainquery/v1/messages.amino";
import * as _194 from "./interchainstaking/v1/messages.amino";
import * as _195 from "./participationrewards/v1/messages.amino";
import * as _196 from "./tokenfactory/v1beta1/tx.amino";
import * as _197 from "./airdrop/v1/messages.registry";
import * as _198 from "./interchainquery/v1/messages.registry";
import * as _199 from "./interchainstaking/v1/messages.registry";
import * as _200 from "./participationrewards/v1/messages.registry";
import * as _201 from "./tokenfactory/v1beta1/tx.registry";
import * as _202 from "./airdrop/v1/query.lcd";
import * as _203 from "./claimsmanager/v1/query.lcd";
import * as _204 from "./epochs/v1/query.lcd";
import * as _205 from "./interchainstaking/v1/query.lcd";
import * as _206 from "./mint/v1beta1/query.lcd";
import * as _207 from "./participationrewards/v1/query.lcd";
import * as _208 from "./supply/v1/query.lcd";
import * as _209 from "./tokenfactory/v1beta1/query.lcd";
import * as _210 from "./airdrop/v1/query.rpc.Query";
import * as _211 from "./claimsmanager/v1/query.rpc.Query";
import * as _212 from "./epochs/v1/query.rpc.Query";
import * as _213 from "./interchainstaking/v1/query.rpc.Query";
import * as _214 from "./mint/v1beta1/query.rpc.Query";
import * as _215 from "./participationrewards/v1/query.rpc.Query";
import * as _216 from "./supply/v1/query.rpc.Query";
import * as _217 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _218 from "./airdrop/v1/messages.rpc.msg";
import * as _219 from "./interchainquery/v1/messages.rpc.msg";
import * as _220 from "./interchainstaking/v1/messages.rpc.msg";
import * as _221 from "./participationrewards/v1/messages.rpc.msg";
import * as _222 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _229 from "./lcd";
import * as _230 from "./rpc.query";
import * as _231 from "./rpc.tx";
export var quicksilver;
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
})(quicksilver || (quicksilver = {}));
//# sourceMappingURL=bundle.js.map