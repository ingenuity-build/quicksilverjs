import * as _83 from "./airdrop/v1/airdrop";
import * as _84 from "./airdrop/v1/genesis";
import * as _85 from "./airdrop/v1/messages";
import * as _86 from "./airdrop/v1/params";
import * as _87 from "./airdrop/v1/proposals";
import * as _88 from "./airdrop/v1/query";
import * as _89 from "./claimsmanager/v1/claimsmanager";
import * as _90 from "./claimsmanager/v1/genesis";
import * as _91 from "./claimsmanager/v1/messages";
import * as _92 from "./claimsmanager/v1/query";
import * as _93 from "./epochs/v1/genesis";
import * as _94 from "./epochs/v1/query";
import * as _95 from "./interchainquery/v1/genesis";
import * as _96 from "./interchainquery/v1/interchainquery";
import * as _97 from "./interchainquery/v1/messages";
import * as _98 from "./interchainquery/v1/query";
import * as _99 from "./interchainstaking/v1/genesis";
import * as _100 from "./interchainstaking/v1/interchainstaking";
import * as _101 from "./interchainstaking/v1/messages";
import * as _102 from "./interchainstaking/v1/proposals";
import * as _103 from "./interchainstaking/v1/query";
import * as _104 from "./participationrewards/v1/proposals";
import * as _105 from "./mint/v1beta1/genesis";
import * as _106 from "./mint/v1beta1/mint";
import * as _107 from "./mint/v1beta1/query";
import * as _108 from "./participationrewards/v1/genesis";
import * as _109 from "./participationrewards/v1/messages";
import * as _110 from "./participationrewards/v1/participationrewards";
import * as _111 from "./participationrewards/v1/query";
import * as _112 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _113 from "./tokenfactory/v1beta1/genesis";
import * as _114 from "./tokenfactory/v1beta1/params";
import * as _115 from "./tokenfactory/v1beta1/query";
import * as _116 from "./tokenfactory/v1beta1/tx";
import * as _186 from "./airdrop/v1/messages.amino";
import * as _187 from "./interchainquery/v1/messages.amino";
import * as _188 from "./interchainstaking/v1/messages.amino";
import * as _189 from "./participationrewards/v1/messages.amino";
import * as _190 from "./tokenfactory/v1beta1/tx.amino";
import * as _191 from "./airdrop/v1/messages.registry";
import * as _192 from "./interchainquery/v1/messages.registry";
import * as _193 from "./interchainstaking/v1/messages.registry";
import * as _194 from "./participationrewards/v1/messages.registry";
import * as _195 from "./tokenfactory/v1beta1/tx.registry";
import * as _196 from "./airdrop/v1/query.lcd";
import * as _197 from "./claimsmanager/v1/query.lcd";
import * as _198 from "./epochs/v1/query.lcd";
import * as _199 from "./interchainstaking/v1/query.lcd";
import * as _200 from "./mint/v1beta1/query.lcd";
import * as _201 from "./participationrewards/v1/query.lcd";
import * as _202 from "./tokenfactory/v1beta1/query.lcd";
import * as _203 from "./airdrop/v1/query.rpc.Query";
import * as _204 from "./claimsmanager/v1/query.rpc.Query";
import * as _205 from "./epochs/v1/query.rpc.Query";
import * as _206 from "./interchainstaking/v1/query.rpc.Query";
import * as _207 from "./mint/v1beta1/query.rpc.Query";
import * as _208 from "./participationrewards/v1/query.rpc.Query";
import * as _209 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _210 from "./airdrop/v1/messages.rpc.msg";
import * as _211 from "./interchainquery/v1/messages.rpc.msg";
import * as _212 from "./interchainstaking/v1/messages.rpc.msg";
import * as _213 from "./participationrewards/v1/messages.rpc.msg";
import * as _214 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _218 from "./lcd";
import * as _219 from "./rpc.query";
import * as _220 from "./rpc.tx";
export namespace quicksilver {
  export namespace airdrop {
    export const v1 = { ..._83,
      ..._84,
      ..._85,
      ..._86,
      ..._87,
      ..._88,
      ..._186,
      ..._191,
      ..._196,
      ..._203,
      ..._210
    };
  }
  export namespace claimsmanager {
    export const v1 = { ..._89,
      ..._90,
      ..._91,
      ..._92,
      ..._197,
      ..._204
    };
  }
  export namespace epochs {
    export const v1 = { ..._93,
      ..._94,
      ..._198,
      ..._205
    };
  }
  export namespace interchainquery {
    export const v1 = { ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._187,
      ..._192,
      ..._211
    };
  }
  export namespace interchainstaking {
    export const v1 = { ..._99,
      ..._100,
      ..._101,
      ..._102,
      ..._103,
      ..._104,
      ..._188,
      ..._193,
      ..._199,
      ..._206,
      ..._212
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._105,
      ..._106,
      ..._107,
      ..._200,
      ..._207
    };
  }
  export namespace participationrewards {
    export const v1 = { ..._108,
      ..._109,
      ..._110,
      ..._111,
      ..._189,
      ..._194,
      ..._201,
      ..._208,
      ..._213
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = { ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._116,
      ..._190,
      ..._195,
      ..._202,
      ..._209,
      ..._214
    };
  }
  export const ClientFactory = { ..._218,
    ..._219,
    ..._220
  };
}