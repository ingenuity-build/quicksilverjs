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
exports.getSigningQuicksilverClient = exports.getSigningQuicksilverClientOptions = exports.quicksilverProtoRegistry = exports.quicksilverAminoConverters = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const stargate_1 = require("@cosmjs/stargate");
const quicksilverAirdropV1MessagesRegistry = __importStar(require("./airdrop/v1/messages.registry"));
const quicksilverInterchainqueryV1MessagesRegistry = __importStar(require("./interchainquery/v1/messages.registry"));
const quicksilverInterchainstakingV1MessagesRegistry = __importStar(require("./interchainstaking/v1/messages.registry"));
const quicksilverParticipationrewardsV1MessagesRegistry = __importStar(require("./participationrewards/v1/messages.registry"));
const quicksilverTokenfactoryV1beta1TxRegistry = __importStar(require("./tokenfactory/v1beta1/tx.registry"));
const quicksilverAirdropV1MessagesAmino = __importStar(require("./airdrop/v1/messages.amino"));
const quicksilverInterchainqueryV1MessagesAmino = __importStar(require("./interchainquery/v1/messages.amino"));
const quicksilverInterchainstakingV1MessagesAmino = __importStar(require("./interchainstaking/v1/messages.amino"));
const quicksilverParticipationrewardsV1MessagesAmino = __importStar(require("./participationrewards/v1/messages.amino"));
const quicksilverTokenfactoryV1beta1TxAmino = __importStar(require("./tokenfactory/v1beta1/tx.amino"));
exports.quicksilverAminoConverters = {
    ...quicksilverAirdropV1MessagesAmino.AminoConverter,
    ...quicksilverInterchainqueryV1MessagesAmino.AminoConverter,
    ...quicksilverInterchainstakingV1MessagesAmino.AminoConverter,
    ...quicksilverParticipationrewardsV1MessagesAmino.AminoConverter,
    ...quicksilverTokenfactoryV1beta1TxAmino.AminoConverter
};
exports.quicksilverProtoRegistry = [...quicksilverAirdropV1MessagesRegistry.registry, ...quicksilverInterchainqueryV1MessagesRegistry.registry, ...quicksilverInterchainstakingV1MessagesRegistry.registry, ...quicksilverParticipationrewardsV1MessagesRegistry.registry, ...quicksilverTokenfactoryV1beta1TxRegistry.registry];
const getSigningQuicksilverClientOptions = ({ defaultTypes = stargate_1.defaultRegistryTypes } = {}) => {
    const registry = new proto_signing_1.Registry([...defaultTypes, ...exports.quicksilverProtoRegistry]);
    const aminoTypes = new stargate_1.AminoTypes({
        ...exports.quicksilverAminoConverters
    });
    return {
        registry,
        aminoTypes
    };
};
exports.getSigningQuicksilverClientOptions = getSigningQuicksilverClientOptions;
const getSigningQuicksilverClient = async ({ rpcEndpoint, signer, defaultTypes = stargate_1.defaultRegistryTypes }) => {
    const { registry, aminoTypes } = (0, exports.getSigningQuicksilverClientOptions)({
        defaultTypes
    });
    const client = await stargate_1.SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
        registry: registry,
        aminoTypes
    });
    return client;
};
exports.getSigningQuicksilverClient = getSigningQuicksilverClient;
//# sourceMappingURL=client.js.map