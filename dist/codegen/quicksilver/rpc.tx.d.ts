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
    quicksilver: {
        airdrop: {
            v1: any;
        };
        interchainquery: {
            v1: any;
        };
        interchainstaking: {
            v1: any;
        };
        participationrewards: {
            v1: any;
        };
        tokenfactory: {
            v1beta1: any;
        };
    };
}>;
