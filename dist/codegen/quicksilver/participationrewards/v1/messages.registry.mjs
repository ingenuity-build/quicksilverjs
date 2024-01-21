import { MsgSubmitClaim } from "./messages";
import { MsgGovRemoveProtocolData } from "./proposals";
export const registry = [["/quicksilver.participationrewards.v1.MsgSubmitClaim", MsgSubmitClaim], ["/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData", MsgGovRemoveProtocolData]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        submitClaim(value) {
            return {
                typeUrl: "/quicksilver.participationrewards.v1.MsgSubmitClaim",
                value: MsgSubmitClaim.encode(value).finish()
            };
        },
        govRemoveProtocolData(value) {
            return {
                typeUrl: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData",
                value: MsgGovRemoveProtocolData.encode(value).finish()
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
                value: MsgSubmitClaim.toJSON(value)
            };
        },
        govRemoveProtocolData(value) {
            return {
                typeUrl: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData",
                value: MsgGovRemoveProtocolData.toJSON(value)
            };
        }
    },
    fromJSON: {
        submitClaim(value) {
            return {
                typeUrl: "/quicksilver.participationrewards.v1.MsgSubmitClaim",
                value: MsgSubmitClaim.fromJSON(value)
            };
        },
        govRemoveProtocolData(value) {
            return {
                typeUrl: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData",
                value: MsgGovRemoveProtocolData.fromJSON(value)
            };
        }
    },
    fromPartial: {
        submitClaim(value) {
            return {
                typeUrl: "/quicksilver.participationrewards.v1.MsgSubmitClaim",
                value: MsgSubmitClaim.fromPartial(value)
            };
        },
        govRemoveProtocolData(value) {
            return {
                typeUrl: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData",
                value: MsgGovRemoveProtocolData.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=messages.registry.js.map