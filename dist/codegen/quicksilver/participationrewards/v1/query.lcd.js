"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LCDQueryClient = void 0;
class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.params = this.params.bind(this);
        this.protocolData = this.protocolData.bind(this);
    }
    /* Params returns the total set of participation rewards parameters. */
    async params(_params = {}) {
        const endpoint = `quicksilver/participationrewards/v1/params`;
        return await this.req.get(endpoint);
    }
    /* ProtocolData returns the requested protocol data. */
    async protocolData(params) {
        const endpoint = `quicksilver/participationrewards/v1/protocoldata/${params.type}/${params.key}`;
        return await this.req.get(endpoint);
    }
}
exports.LCDQueryClient = LCDQueryClient;
//# sourceMappingURL=query.lcd.js.map