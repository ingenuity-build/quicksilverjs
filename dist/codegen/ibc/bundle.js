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
exports.ibc = void 0;
const _63 = __importStar(require("./applications/transfer/v1/genesis"));
const _64 = __importStar(require("./applications/transfer/v1/query"));
const _65 = __importStar(require("./applications/transfer/v1/transfer"));
const _66 = __importStar(require("./applications/transfer/v1/tx"));
const _67 = __importStar(require("./applications/transfer/v2/packet"));
const _68 = __importStar(require("./core/channel/v1/channel"));
const _69 = __importStar(require("./core/channel/v1/genesis"));
const _70 = __importStar(require("./core/channel/v1/query"));
const _71 = __importStar(require("./core/channel/v1/tx"));
const _72 = __importStar(require("./core/client/v1/client"));
const _73 = __importStar(require("./core/client/v1/genesis"));
const _74 = __importStar(require("./core/client/v1/query"));
const _75 = __importStar(require("./core/client/v1/tx"));
const _76 = __importStar(require("./core/commitment/v1/commitment"));
const _77 = __importStar(require("./core/connection/v1/connection"));
const _78 = __importStar(require("./core/connection/v1/genesis"));
const _79 = __importStar(require("./core/connection/v1/query"));
const _80 = __importStar(require("./core/connection/v1/tx"));
const _81 = __importStar(require("./lightclients/localhost/v1/localhost"));
const _82 = __importStar(require("./lightclients/solomachine/v1/solomachine"));
const _83 = __importStar(require("./lightclients/solomachine/v2/solomachine"));
const _84 = __importStar(require("./lightclients/tendermint/v1/tendermint"));
const _172 = __importStar(require("./applications/transfer/v1/tx.amino"));
const _173 = __importStar(require("./core/channel/v1/tx.amino"));
const _174 = __importStar(require("./core/client/v1/tx.amino"));
const _175 = __importStar(require("./core/connection/v1/tx.amino"));
const _176 = __importStar(require("./applications/transfer/v1/tx.registry"));
const _177 = __importStar(require("./core/channel/v1/tx.registry"));
const _178 = __importStar(require("./core/client/v1/tx.registry"));
const _179 = __importStar(require("./core/connection/v1/tx.registry"));
const _180 = __importStar(require("./applications/transfer/v1/query.lcd"));
const _181 = __importStar(require("./core/channel/v1/query.lcd"));
const _182 = __importStar(require("./core/client/v1/query.lcd"));
const _183 = __importStar(require("./core/connection/v1/query.lcd"));
const _184 = __importStar(require("./applications/transfer/v1/query.rpc.Query"));
const _185 = __importStar(require("./core/channel/v1/query.rpc.Query"));
const _186 = __importStar(require("./core/client/v1/query.rpc.Query"));
const _187 = __importStar(require("./core/connection/v1/query.rpc.Query"));
const _188 = __importStar(require("./applications/transfer/v1/tx.rpc.msg"));
const _189 = __importStar(require("./core/channel/v1/tx.rpc.msg"));
const _190 = __importStar(require("./core/client/v1/tx.rpc.msg"));
const _191 = __importStar(require("./core/connection/v1/tx.rpc.msg"));
const _226 = __importStar(require("./lcd"));
const _227 = __importStar(require("./rpc.query"));
const _228 = __importStar(require("./rpc.tx"));
var ibc;
(function (ibc) {
    let applications;
    (function (applications) {
        let transfer;
        (function (transfer) {
            transfer.v1 = {
                ..._63,
                ..._64,
                ..._65,
                ..._66,
                ..._172,
                ..._176,
                ..._180,
                ..._184,
                ..._188
            };
            transfer.v2 = {
                ..._67
            };
        })(transfer = applications.transfer || (applications.transfer = {}));
    })(applications = ibc.applications || (ibc.applications = {}));
    let core;
    (function (core) {
        let channel;
        (function (channel) {
            channel.v1 = {
                ..._68,
                ..._69,
                ..._70,
                ..._71,
                ..._173,
                ..._177,
                ..._181,
                ..._185,
                ..._189
            };
        })(channel = core.channel || (core.channel = {}));
        let client;
        (function (client) {
            client.v1 = {
                ..._72,
                ..._73,
                ..._74,
                ..._75,
                ..._174,
                ..._178,
                ..._182,
                ..._186,
                ..._190
            };
        })(client = core.client || (core.client = {}));
        let commitment;
        (function (commitment) {
            commitment.v1 = {
                ..._76
            };
        })(commitment = core.commitment || (core.commitment = {}));
        let connection;
        (function (connection) {
            connection.v1 = {
                ..._77,
                ..._78,
                ..._79,
                ..._80,
                ..._175,
                ..._179,
                ..._183,
                ..._187,
                ..._191
            };
        })(connection = core.connection || (core.connection = {}));
    })(core = ibc.core || (ibc.core = {}));
    let lightclients;
    (function (lightclients) {
        let localhost;
        (function (localhost) {
            localhost.v1 = {
                ..._81
            };
        })(localhost = lightclients.localhost || (lightclients.localhost = {}));
        let solomachine;
        (function (solomachine) {
            solomachine.v1 = {
                ..._82
            };
            solomachine.v2 = {
                ..._83
            };
        })(solomachine = lightclients.solomachine || (lightclients.solomachine = {}));
        let tendermint;
        (function (tendermint) {
            tendermint.v1 = {
                ..._84
            };
        })(tendermint = lightclients.tendermint || (lightclients.tendermint = {}));
    })(lightclients = ibc.lightclients || (ibc.lightclients = {}));
    ibc.ClientFactory = {
        ..._226,
        ..._227,
        ..._228
    };
})(ibc || (exports.ibc = ibc = {}));
//# sourceMappingURL=bundle.js.map