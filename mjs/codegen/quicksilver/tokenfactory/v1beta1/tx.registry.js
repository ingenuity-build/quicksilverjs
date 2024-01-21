import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata } from "./tx";
export const registry = [["/quicksilver.tokenfactory.v1beta1.MsgCreateDenom", MsgCreateDenom], ["/quicksilver.tokenfactory.v1beta1.MsgMint", MsgMint], ["/quicksilver.tokenfactory.v1beta1.MsgBurn", MsgBurn], ["/quicksilver.tokenfactory.v1beta1.MsgChangeAdmin", MsgChangeAdmin], ["/quicksilver.tokenfactory.v1beta1.MsgSetDenomMetadata", MsgSetDenomMetadata]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        createDenom(value) {
            return {
                typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgCreateDenom",
                value: MsgCreateDenom.encode(value).finish()
            };
        },
        mint(value) {
            return {
                typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgMint",
                value: MsgMint.encode(value).finish()
            };
        },
        burn(value) {
            return {
                typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgBurn",
                value: MsgBurn.encode(value).finish()
            };
        },
        changeAdmin(value) {
            return {
                typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgChangeAdmin",
                value: MsgChangeAdmin.encode(value).finish()
            };
        },
        setDenomMetadata(value) {
            return {
                typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgSetDenomMetadata",
                value: MsgSetDenomMetadata.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createDenom(value) {
            return {
                typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgCreateDenom",
                value
            };
        },
        mint(value) {
            return {
                typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgMint",
                value
            };
        },
        burn(value) {
            return {
                typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgBurn",
                value
            };
        },
        changeAdmin(value) {
            return {
                typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgChangeAdmin",
                value
            };
        },
        setDenomMetadata(value) {
            return {
                typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgSetDenomMetadata",
                value
            };
        }
    },
    toJSON: {
        createDenom(value) {
            return {
                typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgCreateDenom",
                value: MsgCreateDenom.toJSON(value)
            };
        },
        mint(value) {
            return {
                typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgMint",
                value: MsgMint.toJSON(value)
            };
        },
        burn(value) {
            return {
                typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgBurn",
                value: MsgBurn.toJSON(value)
            };
        },
        changeAdmin(value) {
            return {
                typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgChangeAdmin",
                value: MsgChangeAdmin.toJSON(value)
            };
        },
        setDenomMetadata(value) {
            return {
                typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgSetDenomMetadata",
                value: MsgSetDenomMetadata.toJSON(value)
            };
        }
    },
    fromJSON: {
        createDenom(value) {
            return {
                typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgCreateDenom",
                value: MsgCreateDenom.fromJSON(value)
            };
        },
        mint(value) {
            return {
                typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgMint",
                value: MsgMint.fromJSON(value)
            };
        },
        burn(value) {
            return {
                typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgBurn",
                value: MsgBurn.fromJSON(value)
            };
        },
        changeAdmin(value) {
            return {
                typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgChangeAdmin",
                value: MsgChangeAdmin.fromJSON(value)
            };
        },
        setDenomMetadata(value) {
            return {
                typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgSetDenomMetadata",
                value: MsgSetDenomMetadata.fromJSON(value)
            };
        }
    },
    fromPartial: {
        createDenom(value) {
            return {
                typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgCreateDenom",
                value: MsgCreateDenom.fromPartial(value)
            };
        },
        mint(value) {
            return {
                typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgMint",
                value: MsgMint.fromPartial(value)
            };
        },
        burn(value) {
            return {
                typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgBurn",
                value: MsgBurn.fromPartial(value)
            };
        },
        changeAdmin(value) {
            return {
                typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgChangeAdmin",
                value: MsgChangeAdmin.fromPartial(value)
            };
        },
        setDenomMetadata(value) {
            return {
                typeUrl: "/quicksilver.tokenfactory.v1beta1.MsgSetDenomMetadata",
                value: MsgSetDenomMetadata.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map