import * as fm from "../../../grpc-gateway";
export class Msg {
    static createDenom(request, initRequest) {
        return fm.fetchReq(`/quicksilver.tokenfactory.v1beta1/createDenom`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static mint(request, initRequest) {
        return fm.fetchReq(`/quicksilver.tokenfactory.v1beta1/mint`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static burn(request, initRequest) {
        return fm.fetchReq(`/quicksilver.tokenfactory.v1beta1/burn`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static changeAdmin(request, initRequest) {
        return fm.fetchReq(`/quicksilver.tokenfactory.v1beta1/changeAdmin`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static setDenomMetadata(request, initRequest) {
        return fm.fetchReq(`/quicksilver.tokenfactory.v1beta1/setDenomMetadata`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map