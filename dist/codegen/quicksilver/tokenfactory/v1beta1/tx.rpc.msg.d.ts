import * as fm from "../../../grpc-gateway";
import { MsgCreateDenom, MsgCreateDenomResponse, MsgMint, MsgMintResponse, MsgBurn, MsgBurnResponse, MsgChangeAdmin, MsgChangeAdminResponse, MsgSetDenomMetadata, MsgSetDenomMetadataResponse } from "./tx";
export declare class Msg {
    static createDenom(request: MsgCreateDenom, initRequest?: fm.InitReq): Promise<MsgCreateDenomResponse>;
    static mint(request: MsgMint, initRequest?: fm.InitReq): Promise<MsgMintResponse>;
    static burn(request: MsgBurn, initRequest?: fm.InitReq): Promise<MsgBurnResponse>;
    static changeAdmin(request: MsgChangeAdmin, initRequest?: fm.InitReq): Promise<MsgChangeAdminResponse>;
    static setDenomMetadata(request: MsgSetDenomMetadata, initRequest?: fm.InitReq): Promise<MsgSetDenomMetadataResponse>;
}
