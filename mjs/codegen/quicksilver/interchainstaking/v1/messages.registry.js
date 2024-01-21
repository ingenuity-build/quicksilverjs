import { MsgRequestRedemption, MsgSignalIntent } from "./messages";
import { MsgGovCloseChannel, MsgGovReopenChannel, MsgGovSetLsmCaps } from "./proposals";
export const registry = [["/quicksilver.interchainstaking.v1.MsgRequestRedemption", MsgRequestRedemption], ["/quicksilver.interchainstaking.v1.MsgSignalIntent", MsgSignalIntent], ["/quicksilver.interchainstaking.v1.MsgGovCloseChannel", MsgGovCloseChannel], ["/quicksilver.interchainstaking.v1.MsgGovReopenChannel", MsgGovReopenChannel], ["/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps", MsgGovSetLsmCaps]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        requestRedemption(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemption",
                value: MsgRequestRedemption.encode(value).finish()
            };
        },
        signalIntent(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntent",
                value: MsgSignalIntent.encode(value).finish()
            };
        },
        govCloseChannel(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannel",
                value: MsgGovCloseChannel.encode(value).finish()
            };
        },
        govReopenChannel(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannel",
                value: MsgGovReopenChannel.encode(value).finish()
            };
        },
        govSetLsmCaps(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps",
                value: MsgGovSetLsmCaps.encode(value).finish()
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
                value: MsgRequestRedemption.toJSON(value)
            };
        },
        signalIntent(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntent",
                value: MsgSignalIntent.toJSON(value)
            };
        },
        govCloseChannel(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannel",
                value: MsgGovCloseChannel.toJSON(value)
            };
        },
        govReopenChannel(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannel",
                value: MsgGovReopenChannel.toJSON(value)
            };
        },
        govSetLsmCaps(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps",
                value: MsgGovSetLsmCaps.toJSON(value)
            };
        }
    },
    fromJSON: {
        requestRedemption(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemption",
                value: MsgRequestRedemption.fromJSON(value)
            };
        },
        signalIntent(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntent",
                value: MsgSignalIntent.fromJSON(value)
            };
        },
        govCloseChannel(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannel",
                value: MsgGovCloseChannel.fromJSON(value)
            };
        },
        govReopenChannel(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannel",
                value: MsgGovReopenChannel.fromJSON(value)
            };
        },
        govSetLsmCaps(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps",
                value: MsgGovSetLsmCaps.fromJSON(value)
            };
        }
    },
    fromPartial: {
        requestRedemption(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemption",
                value: MsgRequestRedemption.fromPartial(value)
            };
        },
        signalIntent(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntent",
                value: MsgSignalIntent.fromPartial(value)
            };
        },
        govCloseChannel(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannel",
                value: MsgGovCloseChannel.fromPartial(value)
            };
        },
        govReopenChannel(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannel",
                value: MsgGovReopenChannel.fromPartial(value)
            };
        },
        govSetLsmCaps(value) {
            return {
                typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps",
                value: MsgGovSetLsmCaps.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=messages.registry.js.map