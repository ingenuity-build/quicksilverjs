import * as _63 from "./applications/transfer/v1/genesis";
import * as _64 from "./applications/transfer/v1/query";
import * as _65 from "./applications/transfer/v1/transfer";
import * as _66 from "./applications/transfer/v1/tx";
import * as _67 from "./applications/transfer/v2/packet";
import * as _68 from "./core/channel/v1/channel";
import * as _69 from "./core/channel/v1/genesis";
import * as _70 from "./core/channel/v1/query";
import * as _71 from "./core/channel/v1/tx";
import * as _72 from "./core/client/v1/client";
import * as _73 from "./core/client/v1/genesis";
import * as _74 from "./core/client/v1/query";
import * as _75 from "./core/client/v1/tx";
import * as _76 from "./core/commitment/v1/commitment";
import * as _77 from "./core/connection/v1/connection";
import * as _78 from "./core/connection/v1/genesis";
import * as _79 from "./core/connection/v1/query";
import * as _80 from "./core/connection/v1/tx";
import * as _81 from "./lightclients/localhost/v1/localhost";
import * as _82 from "./lightclients/solomachine/v1/solomachine";
import * as _83 from "./lightclients/solomachine/v2/solomachine";
import * as _84 from "./lightclients/tendermint/v1/tendermint";
import * as _172 from "./applications/transfer/v1/tx.amino";
import * as _173 from "./core/channel/v1/tx.amino";
import * as _174 from "./core/client/v1/tx.amino";
import * as _175 from "./core/connection/v1/tx.amino";
import * as _176 from "./applications/transfer/v1/tx.registry";
import * as _177 from "./core/channel/v1/tx.registry";
import * as _178 from "./core/client/v1/tx.registry";
import * as _179 from "./core/connection/v1/tx.registry";
import * as _180 from "./applications/transfer/v1/query.lcd";
import * as _181 from "./core/channel/v1/query.lcd";
import * as _182 from "./core/client/v1/query.lcd";
import * as _183 from "./core/connection/v1/query.lcd";
import * as _184 from "./applications/transfer/v1/query.rpc.Query";
import * as _185 from "./core/channel/v1/query.rpc.Query";
import * as _186 from "./core/client/v1/query.rpc.Query";
import * as _187 from "./core/connection/v1/query.rpc.Query";
import * as _188 from "./applications/transfer/v1/tx.rpc.msg";
import * as _189 from "./core/channel/v1/tx.rpc.msg";
import * as _190 from "./core/client/v1/tx.rpc.msg";
import * as _191 from "./core/connection/v1/tx.rpc.msg";
import * as _226 from "./lcd";
import * as _227 from "./rpc.query";
import * as _228 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._63,
        ..._64,
        ..._65,
        ..._66,
        ..._172,
        ..._176,
        ..._180,
        ..._184,
        ..._188
      };
      export const v2 = {
        ..._67
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._68,
        ..._69,
        ..._70,
        ..._71,
        ..._173,
        ..._177,
        ..._181,
        ..._185,
        ..._189
      };
    }
    export namespace client {
      export const v1 = {
        ..._72,
        ..._73,
        ..._74,
        ..._75,
        ..._174,
        ..._178,
        ..._182,
        ..._186,
        ..._190
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._76
      };
    }
    export namespace connection {
      export const v1 = {
        ..._77,
        ..._78,
        ..._79,
        ..._80,
        ..._175,
        ..._179,
        ..._183,
        ..._187,
        ..._191
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._81
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._82
      };
      export const v2 = {
        ..._83
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._84
      };
    }
  }
  export const ClientFactory = {
    ..._226,
    ..._227,
    ..._228
  };
}