export declare const createGrpcGateWayClient: ({ endpoint }: {
    endpoint: string;
}) => Promise<{
    cosmos: {
        auth: {
            v1beta1: import("../cosmos/auth/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        authz: {
            v1beta1: import("../cosmos/authz/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        bank: {
            v1beta1: import("../cosmos/bank/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        distribution: {
            v1beta1: import("../cosmos/distribution/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        gov: {
            v1beta1: import("../cosmos/gov/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        mint: {
            v1beta1: import("../cosmos/mint/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        slashing: {
            v1beta1: import("../cosmos/slashing/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        staking: {
            v1beta1: import("../cosmos/staking/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        tx: {
            v1beta1: import("../cosmos/tx/v1beta1/service.rpc.Service").ServiceClientImpl;
        };
        upgrade: {
            v1beta1: import("../cosmos/upgrade/v1beta1/query.rpc.Query").QueryClientImpl;
        };
    };
    quicksilver: {
        airdrop: {
            v1: import("./airdrop/v1/query.rpc.Query").QueryClientImpl;
        };
        claimsmanager: {
            v1: import("./claimsmanager/v1/query.rpc.Query").QueryClientImpl;
        };
        epochs: {
            v1: import("./epochs/v1/query.rpc.Query").QueryClientImpl;
        };
        interchainstaking: {
            v1: import("./interchainstaking/v1/query.rpc.Query").QueryClientImpl;
        };
        mint: {
            v1beta1: import("./mint/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        participationrewards: {
            v1: import("./participationrewards/v1/query.rpc.Query").QueryClientImpl;
        };
        supply: {
            v1: import("./supply/v1/query.rpc.Query").QueryClientImpl;
        };
        tokenfactory: {
            v1beta1: import("./tokenfactory/v1beta1/query.rpc.Query").QueryClientImpl;
        };
    };
}>;
