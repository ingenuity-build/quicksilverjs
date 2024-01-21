"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const messages_1 = require("./messages");
const proposals_1 = require("./proposals");
exports.registry = [["/quicksilver.interchainstaking.v1.MsgRequestRedemption", messages_1.MsgRequestRedemption], ["/quicksilver.interchainstaking.v1.MsgSignalIntent", messages_1.MsgSignalIntent], ["/quicksilver.interchainstaking.v1.MsgGovCloseChannel", proposals_1.MsgGovCloseChannel], ["/quicksilver.interchainstaking.v1.MsgGovReopenChannel", proposals_1.MsgGovReopenChannel], ["/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps", proposals_1.MsgGovSetLsmCaps]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        requestRedemption(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemption",
                value: messages_1.MsgRequestRedemption.encode(value).finish()
            };
        },
        signalIntent(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntent",
                value: messages_1.MsgSignalIntent.encode(value).finish()
            };
        },
        govCloseChannel(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannel",
                value: proposals_1.MsgGovCloseChannel.encode(value).finish()
            };
        },
        govReopenChannel(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannel",
                value: proposals_1.MsgGovReopenChannel.encode(value).finish()
            };
        },
        govSetLsmCaps(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps",
                value: proposals_1.MsgGovSetLsmCaps.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        requestRedemption(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemption",
                value
            };
        },
        signalIntent(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntent",
                value
            };
        },
        govCloseChannel(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannel",
                value
            };
        },
        govReopenChannel(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannel",
                value
            };
        },
        govSetLsmCaps(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps",
                value
            };
        }
    },
    toJSON: {
        requestRedemption(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemption",
                value: messages_1.MsgRequestRedemption.toJSON(value)
            };
        },
        signalIntent(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntent",
                value: messages_1.MsgSignalIntent.toJSON(value)
            };
        },
        govCloseChannel(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannel",
                value: proposals_1.MsgGovCloseChannel.toJSON(value)
            };
        },
        govReopenChannel(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannel",
                value: proposals_1.MsgGovReopenChannel.toJSON(value)
            };
        },
        govSetLsmCaps(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps",
                value: proposals_1.MsgGovSetLsmCaps.toJSON(value)
            };
        }
    },
    fromJSON: {
        requestRedemption(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemption",
                value: messages_1.MsgRequestRedemption.fromJSON(value)
            };
        },
        signalIntent(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntent",
                value: messages_1.MsgSignalIntent.fromJSON(value)
            };
        },
        govCloseChannel(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannel",
                value: proposals_1.MsgGovCloseChannel.fromJSON(value)
            };
        },
        govReopenChannel(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannel",
                value: proposals_1.MsgGovReopenChannel.fromJSON(value)
            };
        },
        govSetLsmCaps(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps",
                value: proposals_1.MsgGovSetLsmCaps.fromJSON(value)
            };
        }
    },
    fromPartial: {
        requestRedemption(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemption",
                value: messages_1.MsgRequestRedemption.fromPartial(value)
            };
        },
        signalIntent(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntent",
                value: messages_1.MsgSignalIntent.fromPartial(value)
            };
        },
        govCloseChannel(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannel",
                value: proposals_1.MsgGovCloseChannel.fromPartial(value)
            };
        },
        govReopenChannel(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannel",
                value: proposals_1.MsgGovReopenChannel.fromPartial(value)
            };
        },
        govSetLsmCaps(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps",
                value: proposals_1.MsgGovSetLsmCaps.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=messages.registry.js.map