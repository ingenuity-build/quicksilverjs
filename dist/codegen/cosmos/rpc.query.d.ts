export declare const createGrpcGateWayClient: ({ endpoint }: {
    endpoint: string;
}) => Promise<{
    cosmos: {
        auth: {
            v1beta1: import("./auth/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        authz: {
            v1beta1: import("./authz/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        bank: {
            v1beta1: import("./bank/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        distribution: {
            v1beta1: import("./distribution/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        gov: {
            v1beta1: import("./gov/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        mint: {
            v1beta1: import("./mint/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        slashing: {
            v1beta1: import("./slashing/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        staking: {
            v1beta1: import("./staking/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        tx: {
            v1beta1: import("./tx/v1beta1/service.rpc.Service").ServiceClientImpl;
        };
        upgrade: {
            v1beta1: import("./upgrade/v1beta1/query.rpc.Query").QueryClientImpl;
        };
    };
}>;
