"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LCDQueryClient = void 0;
const helpers_1 = require("../../../helpers");
class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.zones = this.zones.bind(this);
        this.zone = this.zone.bind(this);
        this.zoneValidators = this.zoneValidators.bind(this);
        this.depositAccount = this.depositAccount.bind(this);
        this.delegatorIntent = this.delegatorIntent.bind(this);
        this.delegatorIntents = this.delegatorIntents.bind(this);
        this.delegations = this.delegations.bind(this);
        this.receipts = this.receipts.bind(this);
        this.txStatus = this.txStatus.bind(this);
        this.zoneWithdrawalRecords = this.zoneWithdrawalRecords.bind(this);
        this.withdrawalRecords = this.withdrawalRecords.bind(this);
        this.userWithdrawalRecords = this.userWithdrawalRecords.bind(this);
        this.unbondingRecords = this.unbondingRecords.bind(this);
        this.redelegationRecords = this.redelegationRecords.bind(this);
        this.mappedAccounts = this.mappedAccounts.bind(this);
    }
    /* Zones provides meta data on connected zones. */
    async zones(params = {
        pagination: undefined
    }) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `quicksilver/interchainstaking/v1/zones`;
        return await this.req.get(endpoint, options);
    }
    /* Zone provides meta data on a specific zone. */
    async zone(params) {
        const endpoint = `quicksilver/interchainstaking/v1/zone/${params.chain_id}`;
        return await this.req.get(endpoint);
    }
    /* ZoneValidators */
    async zoneValidators(params) {
        const options = {
            params: {}
        };
        if (typeof params?.status !== "undefined") {
            options.params.status = params.status;
        }
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `quicksilver/interchainstaking/v1/zones/${params.chain_id}/validators`;
        return await this.req.get(endpoint, options);
    }
    /* DepositAccount provides data on the deposit address for a connected zone. */
    async depositAccount(params) {
        const endpoint = `quicksilver/interchainstaking/v1/zones/${params.chain_id}/deposit_address`;
        return await this.req.get(endpoint);
    }
    /* DelegatorIntent provides data on the intent of the delegator for the given
     zone. */
    async delegatorIntent(params) {
        const endpoint = `quicksilver/interchainstaking/v1/zones/${params.chain_id}/delegator_intent/${params.delegator_address}`;
        return await this.req.get(endpoint);
    }
    /* DelegatorIntents provides data on the intent of the delegator for all zones */
    async delegatorIntents(params) {
        const endpoint = `quicksilver/interchainstaking/v1/delegator_intents/${params.delegator_address}`;
        return await this.req.get(endpoint);
    }
    /* Delegations provides data on the delegations for the given zone. */
    async delegations(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `quicksilver/interchainstaking/v1/zones/${params.chain_id}/delegations`;
        return await this.req.get(endpoint, options);
    }
    /* Delegations provides data on the delegations for the given zone. */
    async receipts(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `quicksilver/interchainstaking/v1/zones/${params.chain_id}/receipts`;
        return await this.req.get(endpoint, options);
    }
    /* TxStatus */
    async txStatus(params) {
        const endpoint = `quicksilver/interchainstaking/v1/zones/${params.chain_id}/deposits/${params.tx_hash}`;
        return await this.req.get(endpoint);
    }
    /* WithdrawalRecords provides data on the active withdrawals. */
    async zoneWithdrawalRecords(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `quicksilver/interchainstaking/v1/zones/${params.chain_id}/withdrawal_records/${params.delegator_address}`;
        return await this.req.get(endpoint, options);
    }
    /* WithdrawalRecords provides data on the active withdrawals. */
    async withdrawalRecords(params) {
        const options = {
            params: {}
        };
        if (typeof params?.delegator_address !== "undefined") {
            options.params.delegator_address = params.delegator_address;
        }
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `quicksilver/interchainstaking/v1/zones/${params.chain_id}/withdrawal_records`;
        return await this.req.get(endpoint, options);
    }
    /* WithdrawalRecords provides data on the active withdrawals. */
    async userWithdrawalRecords(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `quicksilver/interchainstaking/v1/users/${params.user_address}/withdrawal_records`;
        return await this.req.get(endpoint, options);
    }
    /* UnbondingRecords provides data on the active unbondings. */
    async unbondingRecords(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `quicksilver/interchainstaking/v1/zones/${params.chain_id}/unbonding_records`;
        return await this.req.get(endpoint, options);
    }
    /* RedelegationRecords provides data on the active unbondings. */
    async redelegationRecords(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `quicksilver/interchainstaking/v1/zones/${params.chain_id}/redelegation_records`;
        return await this.req.get(endpoint, options);
    }
    /* MappedAccounts provides data on the mapped accounts for a given user over different host chains. */
    async mappedAccounts(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `quicksilver/interchainstaking/v1/mapped_addresses/${params.address}`;
        return await this.req.get(endpoint, options);
    }
}
exports.LCDQueryClient = LCDQueryClient;
//# sourceMappingURL=query.lcd.js.map