import * as fm from "../../../grpc-gateway";
export class Msg {
    /** SubmitQueryResponse defines a method for submit query responses. */
    static submitQueryResponse(request, initRequest) {
        return fm.fetchReq(`/quicksilver.interchainquery.v1/submitQueryResponse`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=messages.rpc.msg.js.map