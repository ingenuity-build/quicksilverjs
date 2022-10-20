import { Status, StatusSDKType, ZoneDrop, ZoneDropSDKType, ClaimRecord, ClaimRecordSDKType } from "./airdrop";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */

export interface QueryParamsRequest {}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */

export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */

export interface QueryParamsResponseSDKType {
  /** params defines the parameters of the module. */
  params?: ParamsSDKType;
}
/** QueryZoneDropRequest is the request type for Query/ZoneDrop RPC method. */

export interface QueryZoneDropRequest {
  /** chain_id identifies the zone. */
  chainId: string;
}
/** QueryZoneDropRequest is the request type for Query/ZoneDrop RPC method. */

export interface QueryZoneDropRequestSDKType {
  /** chain_id identifies the zone. */
  chain_id: string;
}
/** QueryZoneDropResponse is the response type for Query/ZoneDrop RPC method. */

export interface QueryZoneDropResponse {
  zoneDrop?: ZoneDrop;
}
/** QueryZoneDropResponse is the response type for Query/ZoneDrop RPC method. */

export interface QueryZoneDropResponseSDKType {
  zone_drop?: ZoneDropSDKType;
}
/**
 * QueryAccountBalanceRequest is the request type for Query/AccountBalance RPC
 * method.
 */

export interface QueryAccountBalanceRequest {
  /** chain_id identifies the zone. */
  chainId: string;
}
/**
 * QueryAccountBalanceRequest is the request type for Query/AccountBalance RPC
 * method.
 */

export interface QueryAccountBalanceRequestSDKType {
  /** chain_id identifies the zone. */
  chain_id: string;
}
/**
 * QueryAccountBalanceResponse is the response type for Query/AccountBalance RPC
 * method.
 */

export interface QueryAccountBalanceResponse {
  accountBalance?: Coin;
}
/**
 * QueryAccountBalanceResponse is the response type for Query/AccountBalance RPC
 * method.
 */

export interface QueryAccountBalanceResponseSDKType {
  account_balance?: CoinSDKType;
}
/** QueryZoneDropsRequest is the request type for Query/ZoneDrops RPC method. */

export interface QueryZoneDropsRequest {
  /**
   * status enables to query zone airdrops matching a given status:
   *  - Active
   *  - Future
   *  - Expired
   */
  status: Status;
  pagination?: PageRequest;
}
/** QueryZoneDropsRequest is the request type for Query/ZoneDrops RPC method. */

export interface QueryZoneDropsRequestSDKType {
  /**
   * status enables to query zone airdrops matching a given status:
   *  - Active
   *  - Future
   *  - Expired
   */
  status: StatusSDKType;
  pagination?: PageRequestSDKType;
}
/** QueryZoneDropResponse is the response type for Query/ZoneDrops RPC method. */

export interface QueryZoneDropsResponse {
  zoneDrops: ZoneDrop[];
  pagination?: PageResponse;
}
/** QueryZoneDropResponse is the response type for Query/ZoneDrops RPC method. */

export interface QueryZoneDropsResponseSDKType {
  zone_drops: ZoneDropSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryClaimRecordRequest is the request type for Query/ClaimRecord RPC method. */

export interface QueryClaimRecordRequest {
  chainId: string;
  address: string;
}
/** QueryClaimRecordRequest is the request type for Query/ClaimRecord RPC method. */

export interface QueryClaimRecordRequestSDKType {
  chain_id: string;
  address: string;
}
/**
 * QueryClaimRecordResponse is the response type for Query/ClaimRecord RPC
 * method.
 */

export interface QueryClaimRecordResponse {
  claimRecord?: ClaimRecord;
}
/**
 * QueryClaimRecordResponse is the response type for Query/ClaimRecord RPC
 * method.
 */

export interface QueryClaimRecordResponseSDKType {
  claim_record?: ClaimRecordSDKType;
}
/**
 * QueryClaimRecordsRequest is the request type for Query/ClaimRecords RPC
 * method.
 */

export interface QueryClaimRecordsRequest {
  chainId: string;
  pagination?: PageRequest;
}
/**
 * QueryClaimRecordsRequest is the request type for Query/ClaimRecords RPC
 * method.
 */

export interface QueryClaimRecordsRequestSDKType {
  chain_id: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryClaimRecordsResponse is the response type for Query/ClaimRecords RPC
 * method.
 */

export interface QueryClaimRecordsResponse {
  claimRecords: ClaimRecord[];
  pagination?: PageResponse;
}
/**
 * QueryClaimRecordsResponse is the response type for Query/ClaimRecords RPC
 * method.
 */

export interface QueryClaimRecordsResponseSDKType {
  claim_records: ClaimRecordSDKType[];
  pagination?: PageResponseSDKType;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryZoneDropRequest(): QueryZoneDropRequest {
  return {
    chainId: ""
  };
}

export const QueryZoneDropRequest = {
  encode(message: QueryZoneDropRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryZoneDropRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryZoneDropRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryZoneDropRequest>): QueryZoneDropRequest {
    const message = createBaseQueryZoneDropRequest();
    message.chainId = object.chainId ?? "";
    return message;
  }

};

function createBaseQueryZoneDropResponse(): QueryZoneDropResponse {
  return {
    zoneDrop: undefined
  };
}

export const QueryZoneDropResponse = {
  encode(message: QueryZoneDropResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneDrop !== undefined) {
      ZoneDrop.encode(message.zoneDrop, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryZoneDropResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryZoneDropResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneDrop = ZoneDrop.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryZoneDropResponse>): QueryZoneDropResponse {
    const message = createBaseQueryZoneDropResponse();
    message.zoneDrop = object.zoneDrop !== undefined && object.zoneDrop !== null ? ZoneDrop.fromPartial(object.zoneDrop) : undefined;
    return message;
  }

};

function createBaseQueryAccountBalanceRequest(): QueryAccountBalanceRequest {
  return {
    chainId: ""
  };
}

export const QueryAccountBalanceRequest = {
  encode(message: QueryAccountBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountBalanceRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAccountBalanceRequest>): QueryAccountBalanceRequest {
    const message = createBaseQueryAccountBalanceRequest();
    message.chainId = object.chainId ?? "";
    return message;
  }

};

function createBaseQueryAccountBalanceResponse(): QueryAccountBalanceResponse {
  return {
    accountBalance: undefined
  };
}

export const QueryAccountBalanceResponse = {
  encode(message: QueryAccountBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountBalance !== undefined) {
      Coin.encode(message.accountBalance, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountBalanceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.accountBalance = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAccountBalanceResponse>): QueryAccountBalanceResponse {
    const message = createBaseQueryAccountBalanceResponse();
    message.accountBalance = object.accountBalance !== undefined && object.accountBalance !== null ? Coin.fromPartial(object.accountBalance) : undefined;
    return message;
  }

};

function createBaseQueryZoneDropsRequest(): QueryZoneDropsRequest {
  return {
    status: 0,
    pagination: undefined
  };
}

export const QueryZoneDropsRequest = {
  encode(message: QueryZoneDropsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryZoneDropsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryZoneDropsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.status = (reader.int32() as any);
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryZoneDropsRequest>): QueryZoneDropsRequest {
    const message = createBaseQueryZoneDropsRequest();
    message.status = object.status ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryZoneDropsResponse(): QueryZoneDropsResponse {
  return {
    zoneDrops: [],
    pagination: undefined
  };
}

export const QueryZoneDropsResponse = {
  encode(message: QueryZoneDropsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.zoneDrops) {
      ZoneDrop.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryZoneDropsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryZoneDropsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneDrops.push(ZoneDrop.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryZoneDropsResponse>): QueryZoneDropsResponse {
    const message = createBaseQueryZoneDropsResponse();
    message.zoneDrops = object.zoneDrops?.map(e => ZoneDrop.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryClaimRecordRequest(): QueryClaimRecordRequest {
  return {
    chainId: "",
    address: ""
  };
}

export const QueryClaimRecordRequest = {
  encode(message: QueryClaimRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimRecordRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryClaimRecordRequest>): QueryClaimRecordRequest {
    const message = createBaseQueryClaimRecordRequest();
    message.chainId = object.chainId ?? "";
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryClaimRecordResponse(): QueryClaimRecordResponse {
  return {
    claimRecord: undefined
  };
}

export const QueryClaimRecordResponse = {
  encode(message: QueryClaimRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.claimRecord !== undefined) {
      ClaimRecord.encode(message.claimRecord, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimRecordResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.claimRecord = ClaimRecord.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryClaimRecordResponse>): QueryClaimRecordResponse {
    const message = createBaseQueryClaimRecordResponse();
    message.claimRecord = object.claimRecord !== undefined && object.claimRecord !== null ? ClaimRecord.fromPartial(object.claimRecord) : undefined;
    return message;
  }

};

function createBaseQueryClaimRecordsRequest(): QueryClaimRecordsRequest {
  return {
    chainId: "",
    pagination: undefined
  };
}

export const QueryClaimRecordsRequest = {
  encode(message: QueryClaimRecordsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimRecordsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimRecordsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryClaimRecordsRequest>): QueryClaimRecordsRequest {
    const message = createBaseQueryClaimRecordsRequest();
    message.chainId = object.chainId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryClaimRecordsResponse(): QueryClaimRecordsResponse {
  return {
    claimRecords: [],
    pagination: undefined
  };
}

export const QueryClaimRecordsResponse = {
  encode(message: QueryClaimRecordsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.claimRecords) {
      ClaimRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimRecordsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimRecordsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.claimRecords.push(ClaimRecord.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryClaimRecordsResponse>): QueryClaimRecordsResponse {
    const message = createBaseQueryClaimRecordsResponse();
    message.claimRecords = object.claimRecords?.map(e => ClaimRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};