"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LCDQueryClient = void 0;
class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.supply = this.supply.bind(this);
    }
    /* Supply provide running epochInfos */
    async supply(_params = {}) {
        const endpoint = `quicksilver/supply/v1/supply`;
        return await this.req.get(endpoint);
    }
}
exports.LCDQueryClient = LCDQueryClient;
//# sourceMappingURL=query.lcd.js.map