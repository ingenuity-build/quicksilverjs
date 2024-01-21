"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const messages_1 = require("./messages");
const proposals_1 = require("./proposals");
exports.registry = [["/quicksilver.participationrewards.v1.MsgSubmitClaim", messages_1.MsgSubmitClaim], ["/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData", proposals_1.MsgGovRemoveProtocolData]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        submitClaim(value) {
            return {
                typeUrl: "/quicksilver.participationrewards.v1.MsgSubmitClaim",
                value: messages_1.MsgSubmitClaim.encode(value).finish()
            };
        },
        govRemoveProtocolData(value) {
            return {
                typeUrl: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData",
                value: proposals_1.MsgGovRemoveProtocolData.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        submitClaim(value) {
            return {
                typeUrl: "/quicksilver.participationrewards.v1.MsgSubmitClaim",
                value
            };
        },
        govRemoveProtocolData(value) {
            return {
                typeUrl: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData",
                value
            };
        }
    },
    toJSON: {
        submitClaim(value) {
            return {
                typeUrl: "/quicksilver.participationrewards.v1.MsgSubmitClaim",
                value: messages_1.MsgSubmitClaim.toJSON(value)
            };
        },
        govRemoveProtocolData(value) {
            return {
                typeUrl: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData",
                value: proposals_1.MsgGovRemoveProtocolData.toJSON(value)
            };
        }
    },
    fromJSON: {
        submitClaim(value) {
            return {
                typeUrl: "/quicksilver.participationrewards.v1.MsgSubmitClaim",
                value: messages_1.MsgSubmitClaim.fromJSON(value)
            };
        },
        govRemoveProtocolData(value) {
            return {
                typeUrl: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData",
                value: proposals_1.MsgGovRemoveProtocolData.fromJSON(value)
            };
        }
    },
    fromPartial: {
        submitClaim(value) {
            return {
                typeUrl: "/quicksilver.participationrewards.v1.MsgSubmitClaim",
                value: messages_1.MsgSubmitClaim.fromPartial(value)
            };
        },
        govRemoveProtocolData(value) {
            return {
                typeUrl: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData",
                value: proposals_1.MsgGovRemoveProtocolData.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=messages.registry.js.map