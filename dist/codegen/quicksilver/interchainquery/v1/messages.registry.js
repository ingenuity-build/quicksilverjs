"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const messages_1 = require("./messages");
exports.registry = [["/quicksilver.interchainquery.v1.MsgSubmitQueryResponse", messages_1.MsgSubmitQueryResponse]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        submitQueryResponse(value) {
            return {
                typeUrl: "/quicksilver.interchainquery.v1.MsgSubmitQueryResponse",
                value: messages_1.MsgSubmitQueryResponse.encode(value).finish()
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
                value: messages_1.MsgSubmitQueryResponse.toJSON(value)
            };
        }
    },
    fromJSON: {
        submitQueryResponse(value) {
            return {
                typeUrl: "/quicksilver.interchainquery.v1.MsgSubmitQueryResponse",
                value: messages_1.MsgSubmitQueryResponse.fromJSON(value)
            };
        }
    },
    fromPartial: {
        submitQueryResponse(value) {
            return {
                typeUrl: "/quicksilver.interchainquery.v1.MsgSubmitQueryResponse",
                value: messages_1.MsgSubmitQueryResponse.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=messages.registry.js.map