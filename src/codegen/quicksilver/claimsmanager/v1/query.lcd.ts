import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryClaimsRequest, QueryClaimsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.claims = this.claims.bind(this);
    this.lastEpochClaims = this.lastEpochClaims.bind(this);
    this.userClaims = this.userClaims.bind(this);
    this.userLastEpochClaims = this.userLastEpochClaims.bind(this);
  }
  /* Params returns the total set of participation rewards parameters. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `quicksilver/claimsmanager/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Claims */


  async claims(params: QueryClaimsRequest): Promise<QueryClaimsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `quicksilver/claimsmanager/v1/claims/${params.chainId}`;
    return await this.req.get<QueryClaimsResponseSDKType>(endpoint, options);
  }
  /* LastEpochClaims */


  async lastEpochClaims(params: QueryClaimsRequest): Promise<QueryClaimsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `quicksilver/claimsmanager/v1/previous_epoch_claims/${params.chainId}`;
    return await this.req.get<QueryClaimsResponseSDKType>(endpoint, options);
  }
  /* UserClaims */


  async userClaims(params: QueryClaimsRequest): Promise<QueryClaimsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `quicksilver/claimsmanager/v1/user/${params.address}claims/${params.chainId}`;
    return await this.req.get<QueryClaimsResponseSDKType>(endpoint, options);
  }
  /* UserLastEpochClaims */


  async userLastEpochClaims(params: QueryClaimsRequest): Promise<QueryClaimsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `quicksilver/claimsmanager/v1/user/${params.address}previous_epoch_claims/${params.chainId}`;
    return await this.req.get<QueryClaimsResponseSDKType>(endpoint, options);
  }

}