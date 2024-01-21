import * as fm from "../../../grpc-gateway";
export class Msg {
    static claim(request, initRequest) {
        return fm.fetchReq(`/quicksilver.airdrop.v1/claim`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static incentivePoolSpend(request, initRequest) {
        return fm.fetchReq(`/quicksilver.airdrop.v1/incentivePoolSpend`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=messages.rpc.msg.js.map