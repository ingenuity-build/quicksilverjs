import * as fm from "../../../grpc-gateway";
import { QuerySupplyRequest, QuerySupplyResponse } from "./query";
export class Query {
  /** Supply provide running epochInfos */
  static supply(request: QuerySupplyRequest, initRequest?: fm.InitReq): Promise<QuerySupplyResponse> {
    return fm.fetchReq(`/quicksilver/supply/v1/supply?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
}
export class QueryClientImpl {
  private readonly url: string;
  constructor(url: string) {
    this.url = url;
  }
  /** Supply provide running epochInfos */
  async supply(req: QuerySupplyRequest, headers?: HeadersInit): Promise<QuerySupplyResponse> {
    return Query.supply(req, {
      headers,
      pathPrefix: this.url
    });
  }
}