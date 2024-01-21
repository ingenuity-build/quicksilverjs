import { MsgSubmitQueryResponse } from "./messages";
export const registry = [["/quicksilver.interchainquery.v1.MsgSubmitQueryResponse", MsgSubmitQueryResponse]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        submitQueryResponse(value) {
            return {
                typeUrl: "/quicksilver.interchainquery.v1.MsgSubmitQueryResponse",
                value: MsgSubmitQueryResponse.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        submitQueryResponse(value) {
            return {
                typeUrl: "/quicksilver.interchainquery.v1.MsgSubmitQueryResponse",
                value
            };
        }
    },
    toJSON: {
        submitQueryResponse(value) {
            return {
                typeUrl: "/quicksilver.interchainquery.v1.MsgSubmitQueryResponse",
                value: MsgSubmitQueryResponse.toJSON(value)
            };
        }
    },
    fromJSON: {
        submitQueryResponse(value) {
            return {
                typeUrl: "/quicksilver.interchainquery.v1.MsgSubmitQueryResponse",
                value: MsgSubmitQueryResponse.fromJSON(value)
            };
        }
    },
    fromPartial: {
        submitQueryResponse(value) {
            return {
                typeUrl: "/quicksilver.interchainquery.v1.MsgSubmitQueryResponse",
                value: MsgSubmitQueryResponse.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=messages.registry.js.map