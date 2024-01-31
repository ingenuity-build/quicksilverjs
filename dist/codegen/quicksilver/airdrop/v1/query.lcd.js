"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LCDQueryClient = void 0;
const helpers_1 = require("../../../helpers");
class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.params = this.params.bind(this);
        this.zoneDrop = this.zoneDrop.bind(this);
        this.accountBalance = this.accountBalance.bind(this);
        this.zoneDrops = this.zoneDrops.bind(this);
        this.claimRecord = this.claimRecord.bind(this);
        this.claimRecords = this.claimRecords.bind(this);
    }
    /* Params returns the total set of airdrop parameters. */
    async params(_params = {}) {
        const endpoint = `quicksilver/airdrop/v1/params`;
        return await this.req.get(endpoint);
    }
    /* ZoneDrop returns the details of the specified zone airdrop. */
    async zoneDrop(params) {
        const endpoint = `quicksilver/airdrop/v1/zonedrop/${params.chain_id}`;
        return await this.req.get(endpoint);
    }
    /* AccountBalance returns the module account balance of the specified zone. */
    async accountBalance(params) {
        const endpoint = `quicksilver/airdrop/v1/accountbalance/${params.chain_id}`;
        return await this.req.get(endpoint);
    }
    /* ZoneDrops returns all zone airdrops of the specified status. */
    async zoneDrops(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `quicksilver/airdrop/v1/zonedrops/${params.status}`;
        return await this.req.get(endpoint, options);
    }
    /* ClaimRecord returns the claim record that corresponds to the given zone and
     address. */
    async claimRecord(params) {
        const endpoint = `quicksilver/airdrop/v1/claimrecord/${params.chain_id}/${params.address}`;
        return await this.req.get(endpoint);
    }
    /* ClaimRecords returns all the claim records of the given zone. */
    async claimRecords(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `quicksilver/airdrop/v1/claimrecords/${params.chain_id}`;
        return await this.req.get(endpoint, options);
    }
}
exports.LCDQueryClient = LCDQueryClient;
//# sourceMappingURL=query.lcd.js.map