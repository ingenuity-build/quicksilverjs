export const createGrpcGateWayClient = async ({ endpoint }) => {
    endpoint = endpoint.replace(/\/*$/g, "");
    return {
        cosmos: {
            auth: {
                v1beta1: new (await import("../cosmos/auth/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            authz: {
                v1beta1: new (await import("../cosmos/authz/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            bank: {
                v1beta1: new (await import("../cosmos/bank/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            distribution: {
                v1beta1: new (await import("../cosmos/distribution/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            gov: {
                v1beta1: new (await import("../cosmos/gov/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            mint: {
                v1beta1: new (await import("../cosmos/mint/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            slashing: {
                v1beta1: new (await import("../cosmos/slashing/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            staking: {
                v1beta1: new (await import("../cosmos/staking/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            tx: {
                v1beta1: new (await import("../cosmos/tx/v1beta1/service.rpc.Service")).ServiceClientImpl(endpoint)
            },
            upgrade: {
                v1beta1: new (await import("../cosmos/upgrade/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
            }
        },
        quicksilver: {
            airdrop: {
                v1: new (await import("./airdrop/v1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            claimsmanager: {
                v1: new (await import("./claimsmanager/v1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            epochs: {
                v1: new (await import("./epochs/v1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            interchainstaking: {
                v1: new (await import("./interchainstaking/v1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            mint: {
                v1beta1: new (await import("./mint/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            participationrewards: {
                v1: new (await import("./participationrewards/v1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            supply: {
                v1: new (await import("./supply/v1/query.rpc.Query")).QueryClientImpl(endpoint)
            },
            tokenfactory: {
                v1beta1: new (await import("./tokenfactory/v1beta1/query.rpc.Query")).QueryClientImpl(endpoint)
            }
        }
    };
};
//# sourceMappingURL=rpc.query.js.map