export class LCDQueryClient {
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
//# sourceMappingURL=query.lcd.js.map