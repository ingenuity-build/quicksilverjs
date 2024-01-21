import * as _3 from "./auth/v1beta1/auth";
import * as _4 from "./auth/v1beta1/genesis";
import * as _5 from "./auth/v1beta1/query";
import * as _6 from "./authz/v1beta1/authz";
import * as _7 from "./authz/v1beta1/event";
import * as _8 from "./authz/v1beta1/genesis";
import * as _9 from "./authz/v1beta1/query";
import * as _10 from "./authz/v1beta1/tx";
import * as _11 from "./bank/v1beta1/authz";
import * as _12 from "./bank/v1beta1/bank";
import * as _13 from "./bank/v1beta1/genesis";
import * as _14 from "./bank/v1beta1/query";
import * as _15 from "./bank/v1beta1/tx";
import * as _16 from "./base/abci/v1beta1/abci";
import * as _17 from "./base/query/v1beta1/pagination";
import * as _18 from "./base/reflection/v2alpha1/reflection";
import * as _19 from "./base/v1beta1/coin";
import * as _20 from "./crypto/ed25519/keys";
import * as _21 from "./crypto/hd/v1/hd";
import * as _22 from "./crypto/keyring/v1/record";
import * as _23 from "./crypto/multisig/keys";
import * as _24 from "./crypto/secp256k1/keys";
import * as _25 from "./crypto/secp256r1/keys";
import * as _26 from "./distribution/v1beta1/distribution";
import * as _27 from "./distribution/v1beta1/genesis";
import * as _28 from "./distribution/v1beta1/query";
import * as _29 from "./distribution/v1beta1/tx";
import * as _30 from "./gov/v1beta1/genesis";
import * as _31 from "./gov/v1beta1/gov";
import * as _32 from "./gov/v1beta1/query";
import * as _33 from "./gov/v1beta1/tx";
import * as _34 from "./mint/v1beta1/genesis";
import * as _35 from "./mint/v1beta1/mint";
import * as _36 from "./mint/v1beta1/query";
import * as _37 from "./slashing/v1beta1/genesis";
import * as _38 from "./slashing/v1beta1/query";
import * as _39 from "./slashing/v1beta1/slashing";
import * as _40 from "./slashing/v1beta1/tx";
import * as _41 from "./staking/v1beta1/authz";
import * as _42 from "./staking/v1beta1/genesis";
import * as _43 from "./staking/v1beta1/lsm";
import * as _44 from "./staking/v1beta1/query";
import * as _45 from "./staking/v1beta1/staking";
import * as _46 from "./staking/v1beta1/tx";
import * as _47 from "../quicksilver/lsm-types/v1/types";
import * as _48 from "./tx/signing/v1beta1/signing";
import * as _49 from "./tx/v1beta1/service";
import * as _50 from "./tx/v1beta1/tx";
import * as _51 from "./upgrade/v1beta1/query";
import * as _52 from "./upgrade/v1beta1/tx";
import * as _53 from "./upgrade/v1beta1/upgrade";
import * as _54 from "../quicksilver/lsm-types/v1/validator";
import * as _131 from "./authz/v1beta1/tx.amino";
import * as _132 from "./bank/v1beta1/tx.amino";
import * as _133 from "./distribution/v1beta1/tx.amino";
import * as _134 from "./gov/v1beta1/tx.amino";
import * as _135 from "./slashing/v1beta1/tx.amino";
import * as _136 from "./staking/v1beta1/tx.amino";
import * as _137 from "./upgrade/v1beta1/tx.amino";
import * as _138 from "./authz/v1beta1/tx.registry";
import * as _139 from "./bank/v1beta1/tx.registry";
import * as _140 from "./distribution/v1beta1/tx.registry";
import * as _141 from "./gov/v1beta1/tx.registry";
import * as _142 from "./slashing/v1beta1/tx.registry";
import * as _143 from "./staking/v1beta1/tx.registry";
import * as _144 from "./upgrade/v1beta1/tx.registry";
import * as _145 from "./auth/v1beta1/query.lcd";
import * as _146 from "./authz/v1beta1/query.lcd";
import * as _147 from "./bank/v1beta1/query.lcd";
import * as _148 from "./distribution/v1beta1/query.lcd";
import * as _149 from "./gov/v1beta1/query.lcd";
import * as _150 from "./mint/v1beta1/query.lcd";
import * as _151 from "./slashing/v1beta1/query.lcd";
import * as _152 from "./staking/v1beta1/query.lcd";
import * as _153 from "./tx/v1beta1/service.lcd";
import * as _154 from "./upgrade/v1beta1/query.lcd";
import * as _155 from "./auth/v1beta1/query.rpc.Query";
import * as _156 from "./authz/v1beta1/query.rpc.Query";
import * as _157 from "./bank/v1beta1/query.rpc.Query";
import * as _158 from "./distribution/v1beta1/query.rpc.Query";
import * as _159 from "./gov/v1beta1/query.rpc.Query";
import * as _160 from "./mint/v1beta1/query.rpc.Query";
import * as _161 from "./slashing/v1beta1/query.rpc.Query";
import * as _162 from "./staking/v1beta1/query.rpc.Query";
import * as _163 from "./tx/v1beta1/service.rpc.Service";
import * as _164 from "./upgrade/v1beta1/query.rpc.Query";
import * as _165 from "./authz/v1beta1/tx.rpc.msg";
import * as _166 from "./bank/v1beta1/tx.rpc.msg";
import * as _167 from "./distribution/v1beta1/tx.rpc.msg";
import * as _168 from "./gov/v1beta1/tx.rpc.msg";
import * as _169 from "./slashing/v1beta1/tx.rpc.msg";
import * as _170 from "./staking/v1beta1/tx.rpc.msg";
import * as _171 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _223 from "./lcd";
import * as _224 from "./rpc.query";
import * as _225 from "./rpc.tx";
export var cosmos;
(function (cosmos) {
    let auth;
    (function (auth) {
        auth.v1beta1 = {
            ..._3,
            ..._4,
            ..._5,
            ..._145,
            ..._155
        };
    })(auth = cosmos.auth || (cosmos.auth = {}));
    let authz;
    (function (authz) {
        authz.v1beta1 = {
            ..._6,
            ..._7,
            ..._8,
            ..._9,
            ..._10,
            ..._131,
            ..._138,
            ..._146,
            ..._156,
            ..._165
        };
    })(authz = cosmos.authz || (cosmos.authz = {}));
    let bank;
    (function (bank) {
        bank.v1beta1 = {
            ..._11,
            ..._12,
            ..._13,
            ..._14,
            ..._15,
            ..._132,
            ..._139,
            ..._147,
            ..._157,
            ..._166
        };
    })(bank = cosmos.bank || (cosmos.bank = {}));
    let base;
    (function (base) {
        let abci;
        (function (abci) {
            abci.v1beta1 = {
                ..._16
            };
        })(abci = base.abci || (base.abci = {}));
        let query;
        (function (query) {
            query.v1beta1 = {
                ..._17
            };
        })(query = base.query || (base.query = {}));
        let reflection;
        (function (reflection) {
            reflection.v2alpha1 = {
                ..._18
            };
        })(reflection = base.reflection || (base.reflection = {}));
        base.v1beta1 = {
            ..._19
        };
    })(base = cosmos.base || (cosmos.base = {}));
    let crypto;
    (function (crypto) {
        crypto.ed25519 = {
            ..._20
        };
        let hd;
        (function (hd) {
            hd.v1 = {
                ..._21
            };
        })(hd = crypto.hd || (crypto.hd = {}));
        let keyring;
        (function (keyring) {
            keyring.v1 = {
                ..._22
            };
        })(keyring = crypto.keyring || (crypto.keyring = {}));
        crypto.multisig = {
            ..._23
        };
        crypto.secp256k1 = {
            ..._24
        };
        crypto.secp256r1 = {
            ..._25
        };
    })(crypto = cosmos.crypto || (cosmos.crypto = {}));
    let distribution;
    (function (distribution) {
        distribution.v1beta1 = {
            ..._26,
            ..._27,
            ..._28,
            ..._29,
            ..._133,
            ..._140,
            ..._148,
            ..._158,
            ..._167
        };
    })(distribution = cosmos.distribution || (cosmos.distribution = {}));
    let gov;
    (function (gov) {
        gov.v1beta1 = {
            ..._30,
            ..._31,
            ..._32,
            ..._33,
            ..._134,
            ..._141,
            ..._149,
            ..._159,
            ..._168
        };
    })(gov = cosmos.gov || (cosmos.gov = {}));
    let mint;
    (function (mint) {
        mint.v1beta1 = {
            ..._34,
            ..._35,
            ..._36,
            ..._150,
            ..._160
        };
    })(mint = cosmos.mint || (cosmos.mint = {}));
    let slashing;
    (function (slashing) {
        slashing.v1beta1 = {
            ..._37,
            ..._38,
            ..._39,
            ..._40,
            ..._135,
            ..._142,
            ..._151,
            ..._161,
            ..._169
        };
    })(slashing = cosmos.slashing || (cosmos.slashing = {}));
    let staking;
    (function (staking) {
        staking.v1beta1 = {
            ..._41,
            ..._42,
            ..._43,
            ..._44,
            ..._45,
            ..._46,
            ..._47,
            ..._136,
            ..._143,
            ..._152,
            ..._162,
            ..._170
        };
    })(staking = cosmos.staking || (cosmos.staking = {}));
    let tx;
    (function (tx) {
        let signing;
        (function (signing) {
            signing.v1beta1 = {
                ..._48
            };
        })(signing = tx.signing || (tx.signing = {}));
        tx.v1beta1 = {
            ..._49,
            ..._50,
            ..._153,
            ..._163
        };
    })(tx = cosmos.tx || (cosmos.tx = {}));
    let upgrade;
    (function (upgrade) {
        upgrade.v1beta1 = {
            ..._51,
            ..._52,
            ..._53,
            ..._137,
            ..._144,
            ..._154,
            ..._164,
            ..._171
        };
    })(upgrade = cosmos.upgrade || (cosmos.upgrade = {}));
    let lsmstaking;
    (function (lsmstaking) {
        lsmstaking.v1beta1 = {
            ..._54
        };
    })(lsmstaking = cosmos.lsmstaking || (cosmos.lsmstaking = {}));
    cosmos.ClientFactory = {
        ..._223,
        ..._224,
        ..._225
    };
})(cosmos || (cosmos = {}));
//# sourceMappingURL=bundle.js.map