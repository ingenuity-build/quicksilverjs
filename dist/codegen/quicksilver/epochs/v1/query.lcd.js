"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LCDQueryClient = void 0;
const helpers_1 = require("../../../helpers");
class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.epochInfos = this.epochInfos.bind(this);
        this.currentEpoch = this.currentEpoch.bind(this);
    }
    /* EpochInfos provide running epochInfos */
    async epochInfos(params = {
        pagination: undefined
    }) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `quicksilver/epochs/v1/epochs`;
        return await this.req.get(endpoint, options);
    }
    /* CurrentEpoch provide current epoch of specified identifier */
    async currentEpoch(params) {
        const options = {
            params: {}
        };
        if (typeof params?.identifier !== "undefined") {
            options.params.identifier = params.identifier;
        }
        const endpoint = `quicksilver/epochs/v1/current_epoch`;
        return await this.req.get(endpoint, options);
    }
}
exports.LCDQueryClient = LCDQueryClient;
//# sourceMappingURL=query.lcd.js.map