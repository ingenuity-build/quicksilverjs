import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour } from "./tx";
export const registry = [["/ibc.core.client.v1.MsgCreateClient", MsgCreateClient], ["/ibc.core.client.v1.MsgUpdateClient", MsgUpdateClient], ["/ibc.core.client.v1.MsgUpgradeClient", MsgUpgradeClient], ["/ibc.core.client.v1.MsgSubmitMisbehaviour", MsgSubmitMisbehaviour]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        createClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgCreateClient",
                value: MsgCreateClient.encode(value).finish()
            };
        },
        updateClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
                value: MsgUpdateClient.encode(value).finish()
            };
        },
        upgradeClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
                value: MsgUpgradeClient.encode(value).finish()
            };
        },
        submitMisbehaviour(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
                value: MsgSubmitMisbehaviour.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgCreateClient",
                value
            };
        },
        updateClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
                value
            };
        },
        upgradeClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
                value
            };
        },
        submitMisbehaviour(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
                value
            };
        }
    },
    toJSON: {
        createClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgCreateClient",
                value: MsgCreateClient.toJSON(value)
            };
        },
        updateClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
                value: MsgUpdateClient.toJSON(value)
            };
        },
        upgradeClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
                value: MsgUpgradeClient.toJSON(value)
            };
        },
        submitMisbehaviour(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
                value: MsgSubmitMisbehaviour.toJSON(value)
            };
        }
    },
    fromJSON: {
        createClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgCreateClient",
                value: MsgCreateClient.fromJSON(value)
            };
        },
        updateClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
                value: MsgUpdateClient.fromJSON(value)
            };
        },
        upgradeClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
                value: MsgUpgradeClient.fromJSON(value)
            };
        },
        submitMisbehaviour(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
                value: MsgSubmitMisbehaviour.fromJSON(value)
            };
        }
    },
    fromPartial: {
        createClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgCreateClient",
                value: MsgCreateClient.fromPartial(value)
            };
        },
        updateClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
                value: MsgUpdateClient.fromPartial(value)
            };
        },
        upgradeClient(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
                value: MsgUpgradeClient.fromPartial(value)
            };
        },
        submitMisbehaviour(value) {
            return {
                typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
                value: MsgSubmitMisbehaviour.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map