import { Rpc } from "../helpers";
export declare const createRPCMsgClient: ({ rpc }: {
    rpc: Rpc;
}) => Promise<{
    cosmos: {
        authz: {
            v1beta1: any;
        };
        bank: {
            v1beta1: any;
        };
        distribution: {
            v1beta1: any;
        };
        gov: {
            v1beta1: any;
        };
        slashing: {
            v1beta1: any;
        };
        staking: {
            v1beta1: any;
        };
        upgrade: {
            v1beta1: any;
        };
    };
    ibc: {
        applications: {
            transfer: {
                v1: any;
            };
        };
        core: {
            channel: {
                v1: any;
            };
            client: {
                v1: any;
            };
            connection: {
                v1: any;
            };
        };
    };
}>;
