"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseListSnapshots = exports.ResponseCommit = exports.ResponseEndBlock = exports.ResponseDeliverTx = exports.ResponseCheckTx = exports.ResponseBeginBlock = exports.ResponseQuery = exports.ResponseInitChain = exports.ResponseSetOption = exports.ResponseInfo = exports.ResponseFlush = exports.ResponseEcho = exports.ResponseException = exports.Response = exports.RequestApplySnapshotChunk = exports.RequestLoadSnapshotChunk = exports.RequestOfferSnapshot = exports.RequestListSnapshots = exports.RequestCommit = exports.RequestEndBlock = exports.RequestDeliverTx = exports.RequestCheckTx = exports.RequestBeginBlock = exports.RequestQuery = exports.RequestInitChain = exports.RequestSetOption = exports.RequestInfo = exports.RequestFlush = exports.RequestEcho = exports.Request = exports.evidenceTypeToJSON = exports.evidenceTypeFromJSON = exports.EvidenceTypeAmino = exports.EvidenceTypeSDKType = exports.EvidenceType = exports.responseApplySnapshotChunk_ResultToJSON = exports.responseApplySnapshotChunk_ResultFromJSON = exports.ResponseApplySnapshotChunk_ResultAmino = exports.ResponseApplySnapshotChunk_ResultSDKType = exports.ResponseApplySnapshotChunk_Result = exports.responseOfferSnapshot_ResultToJSON = exports.responseOfferSnapshot_ResultFromJSON = exports.ResponseOfferSnapshot_ResultAmino = exports.ResponseOfferSnapshot_ResultSDKType = exports.ResponseOfferSnapshot_Result = exports.checkTxTypeToJSON = exports.checkTxTypeFromJSON = exports.CheckTxTypeAmino = exports.CheckTxTypeSDKType = exports.CheckTxType = void 0;
exports.Snapshot = exports.Evidence = exports.VoteInfo = exports.ValidatorUpdate = exports.Validator = exports.TxResult = exports.EventAttribute = exports.Event = exports.LastCommitInfo = exports.BlockParams = exports.ConsensusParams = exports.ResponseApplySnapshotChunk = exports.ResponseLoadSnapshotChunk = exports.ResponseOfferSnapshot = void 0;
const timestamp_1 = require("../../google/protobuf/timestamp");
const types_1 = require("../types/types");
const proof_1 = require("../crypto/proof");
const params_1 = require("../types/params");
const keys_1 = require("../crypto/keys");
const helpers_1 = require("../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
var CheckTxType;
(function (CheckTxType) {
    CheckTxType[CheckTxType["NEW"] = 0] = "NEW";
    CheckTxType[CheckTxType["RECHECK"] = 1] = "RECHECK";
    CheckTxType[CheckTxType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CheckTxType || (exports.CheckTxType = CheckTxType = {}));
exports.CheckTxTypeSDKType = CheckTxType;
exports.CheckTxTypeAmino = CheckTxType;
function checkTxTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "NEW":
            return CheckTxType.NEW;
        case 1:
        case "RECHECK":
            return CheckTxType.RECHECK;
        case -1:
        case "UNRECOGNIZED":
        default:
            return CheckTxType.UNRECOGNIZED;
    }
}
exports.checkTxTypeFromJSON = checkTxTypeFromJSON;
function checkTxTypeToJSON(object) {
    switch (object) {
        case CheckTxType.NEW:
            return "NEW";
        case CheckTxType.RECHECK:
            return "RECHECK";
        case CheckTxType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.checkTxTypeToJSON = checkTxTypeToJSON;
var ResponseOfferSnapshot_Result;
(function (ResponseOfferSnapshot_Result) {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["UNKNOWN"] = 0] = "UNKNOWN";
    /** ACCEPT - Snapshot accepted, apply chunks */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["ACCEPT"] = 1] = "ACCEPT";
    /** ABORT - Abort all snapshot restoration */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["ABORT"] = 2] = "ABORT";
    /** REJECT - Reject this specific snapshot, try others */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT"] = 3] = "REJECT";
    /** REJECT_FORMAT - Reject all snapshots of this format, try others */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT_FORMAT"] = 4] = "REJECT_FORMAT";
    /** REJECT_SENDER - Reject all snapshots from the sender(s), try others */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT_SENDER"] = 5] = "REJECT_SENDER";
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseOfferSnapshot_Result || (exports.ResponseOfferSnapshot_Result = ResponseOfferSnapshot_Result = {}));
exports.ResponseOfferSnapshot_ResultSDKType = ResponseOfferSnapshot_Result;
exports.ResponseOfferSnapshot_ResultAmino = ResponseOfferSnapshot_Result;
function responseOfferSnapshot_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return ResponseOfferSnapshot_Result.UNKNOWN;
        case 1:
        case "ACCEPT":
            return ResponseOfferSnapshot_Result.ACCEPT;
        case 2:
        case "ABORT":
            return ResponseOfferSnapshot_Result.ABORT;
        case 3:
        case "REJECT":
            return ResponseOfferSnapshot_Result.REJECT;
        case 4:
        case "REJECT_FORMAT":
            return ResponseOfferSnapshot_Result.REJECT_FORMAT;
        case 5:
        case "REJECT_SENDER":
            return ResponseOfferSnapshot_Result.REJECT_SENDER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResponseOfferSnapshot_Result.UNRECOGNIZED;
    }
}
exports.responseOfferSnapshot_ResultFromJSON = responseOfferSnapshot_ResultFromJSON;
function responseOfferSnapshot_ResultToJSON(object) {
    switch (object) {
        case ResponseOfferSnapshot_Result.UNKNOWN:
            return "UNKNOWN";
        case ResponseOfferSnapshot_Result.ACCEPT:
            return "ACCEPT";
        case ResponseOfferSnapshot_Result.ABORT:
            return "ABORT";
        case ResponseOfferSnapshot_Result.REJECT:
            return "REJECT";
        case ResponseOfferSnapshot_Result.REJECT_FORMAT:
            return "REJECT_FORMAT";
        case ResponseOfferSnapshot_Result.REJECT_SENDER:
            return "REJECT_SENDER";
        case ResponseOfferSnapshot_Result.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.responseOfferSnapshot_ResultToJSON = responseOfferSnapshot_ResultToJSON;
var ResponseApplySnapshotChunk_Result;
(function (ResponseApplySnapshotChunk_Result) {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["UNKNOWN"] = 0] = "UNKNOWN";
    /** ACCEPT - Chunk successfully accepted */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["ACCEPT"] = 1] = "ACCEPT";
    /** ABORT - Abort all snapshot restoration */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["ABORT"] = 2] = "ABORT";
    /** RETRY - Retry chunk (combine with refetch and reject) */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["RETRY"] = 3] = "RETRY";
    /** RETRY_SNAPSHOT - Retry snapshot (combine with refetch and reject) */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["RETRY_SNAPSHOT"] = 4] = "RETRY_SNAPSHOT";
    /** REJECT_SNAPSHOT - Reject this snapshot, try others */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["REJECT_SNAPSHOT"] = 5] = "REJECT_SNAPSHOT";
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseApplySnapshotChunk_Result || (exports.ResponseApplySnapshotChunk_Result = ResponseApplySnapshotChunk_Result = {}));
exports.ResponseApplySnapshotChunk_ResultSDKType = ResponseApplySnapshotChunk_Result;
exports.ResponseApplySnapshotChunk_ResultAmino = ResponseApplySnapshotChunk_Result;
function responseApplySnapshotChunk_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return ResponseApplySnapshotChunk_Result.UNKNOWN;
        case 1:
        case "ACCEPT":
            return ResponseApplySnapshotChunk_Result.ACCEPT;
        case 2:
        case "ABORT":
            return ResponseApplySnapshotChunk_Result.ABORT;
        case 3:
        case "RETRY":
            return ResponseApplySnapshotChunk_Result.RETRY;
        case 4:
        case "RETRY_SNAPSHOT":
            return ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT;
        case 5:
        case "REJECT_SNAPSHOT":
            return ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResponseApplySnapshotChunk_Result.UNRECOGNIZED;
    }
}
exports.responseApplySnapshotChunk_ResultFromJSON = responseApplySnapshotChunk_ResultFromJSON;
function responseApplySnapshotChunk_ResultToJSON(object) {
    switch (object) {
        case ResponseApplySnapshotChunk_Result.UNKNOWN:
            return "UNKNOWN";
        case ResponseApplySnapshotChunk_Result.ACCEPT:
            return "ACCEPT";
        case ResponseApplySnapshotChunk_Result.ABORT:
            return "ABORT";
        case ResponseApplySnapshotChunk_Result.RETRY:
            return "RETRY";
        case ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT:
            return "RETRY_SNAPSHOT";
        case ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT:
            return "REJECT_SNAPSHOT";
        case ResponseApplySnapshotChunk_Result.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.responseApplySnapshotChunk_ResultToJSON = responseApplySnapshotChunk_ResultToJSON;
var EvidenceType;
(function (EvidenceType) {
    EvidenceType[EvidenceType["UNKNOWN"] = 0] = "UNKNOWN";
    EvidenceType[EvidenceType["DUPLICATE_VOTE"] = 1] = "DUPLICATE_VOTE";
    EvidenceType[EvidenceType["LIGHT_CLIENT_ATTACK"] = 2] = "LIGHT_CLIENT_ATTACK";
    EvidenceType[EvidenceType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(EvidenceType || (exports.EvidenceType = EvidenceType = {}));
exports.EvidenceTypeSDKType = EvidenceType;
exports.EvidenceTypeAmino = EvidenceType;
function evidenceTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return EvidenceType.UNKNOWN;
        case 1:
        case "DUPLICATE_VOTE":
            return EvidenceType.DUPLICATE_VOTE;
        case 2:
        case "LIGHT_CLIENT_ATTACK":
            return EvidenceType.LIGHT_CLIENT_ATTACK;
        case -1:
        case "UNRECOGNIZED":
        default:
            return EvidenceType.UNRECOGNIZED;
    }
}
exports.evidenceTypeFromJSON = evidenceTypeFromJSON;
function evidenceTypeToJSON(object) {
    switch (object) {
        case EvidenceType.UNKNOWN:
            return "UNKNOWN";
        case EvidenceType.DUPLICATE_VOTE:
            return "DUPLICATE_VOTE";
        case EvidenceType.LIGHT_CLIENT_ATTACK:
            return "LIGHT_CLIENT_ATTACK";
        case EvidenceType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.evidenceTypeToJSON = evidenceTypeToJSON;
function createBaseRequest() {
    return {
        echo: undefined,
        flush: undefined,
        info: undefined,
        set_option: undefined,
        init_chain: undefined,
        query: undefined,
        begin_block: undefined,
        check_tx: undefined,
        deliver_tx: undefined,
        end_block: undefined,
        commit: undefined,
        list_snapshots: undefined,
        offer_snapshot: undefined,
        load_snapshot_chunk: undefined,
        apply_snapshot_chunk: undefined
    };
}
exports.Request = {
    typeUrl: "/tendermint.abci.Request",
    encode(message, writer = _m0.Writer.create()) {
        if (message.echo !== undefined) {
            exports.RequestEcho.encode(message.echo, writer.uint32(10).fork()).ldelim();
        }
        if (message.flush !== undefined) {
            exports.RequestFlush.encode(message.flush, writer.uint32(18).fork()).ldelim();
        }
        if (message.info !== undefined) {
            exports.RequestInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
        }
        if (message.set_option !== undefined) {
            exports.RequestSetOption.encode(message.set_option, writer.uint32(34).fork()).ldelim();
        }
        if (message.init_chain !== undefined) {
            exports.RequestInitChain.encode(message.init_chain, writer.uint32(42).fork()).ldelim();
        }
        if (message.query !== undefined) {
            exports.RequestQuery.encode(message.query, writer.uint32(50).fork()).ldelim();
        }
        if (message.begin_block !== undefined) {
            exports.RequestBeginBlock.encode(message.begin_block, writer.uint32(58).fork()).ldelim();
        }
        if (message.check_tx !== undefined) {
            exports.RequestCheckTx.encode(message.check_tx, writer.uint32(66).fork()).ldelim();
        }
        if (message.deliver_tx !== undefined) {
            exports.RequestDeliverTx.encode(message.deliver_tx, writer.uint32(74).fork()).ldelim();
        }
        if (message.end_block !== undefined) {
            exports.RequestEndBlock.encode(message.end_block, writer.uint32(82).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            exports.RequestCommit.encode(message.commit, writer.uint32(90).fork()).ldelim();
        }
        if (message.list_snapshots !== undefined) {
            exports.RequestListSnapshots.encode(message.list_snapshots, writer.uint32(98).fork()).ldelim();
        }
        if (message.offer_snapshot !== undefined) {
            exports.RequestOfferSnapshot.encode(message.offer_snapshot, writer.uint32(106).fork()).ldelim();
        }
        if (message.load_snapshot_chunk !== undefined) {
            exports.RequestLoadSnapshotChunk.encode(message.load_snapshot_chunk, writer.uint32(114).fork()).ldelim();
        }
        if (message.apply_snapshot_chunk !== undefined) {
            exports.RequestApplySnapshotChunk.encode(message.apply_snapshot_chunk, writer.uint32(122).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.echo = exports.RequestEcho.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.flush = exports.RequestFlush.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.info = exports.RequestInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.set_option = exports.RequestSetOption.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.init_chain = exports.RequestInitChain.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.query = exports.RequestQuery.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.begin_block = exports.RequestBeginBlock.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.check_tx = exports.RequestCheckTx.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.deliver_tx = exports.RequestDeliverTx.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.end_block = exports.RequestEndBlock.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.commit = exports.RequestCommit.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.list_snapshots = exports.RequestListSnapshots.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.offer_snapshot = exports.RequestOfferSnapshot.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.load_snapshot_chunk = exports.RequestLoadSnapshotChunk.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.apply_snapshot_chunk = exports.RequestApplySnapshotChunk.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            echo: (0, helpers_1.isSet)(object.echo) ? exports.RequestEcho.fromJSON(object.echo) : undefined,
            flush: (0, helpers_1.isSet)(object.flush) ? exports.RequestFlush.fromJSON(object.flush) : undefined,
            info: (0, helpers_1.isSet)(object.info) ? exports.RequestInfo.fromJSON(object.info) : undefined,
            set_option: (0, helpers_1.isSet)(object.set_option) ? exports.RequestSetOption.fromJSON(object.set_option) : undefined,
            init_chain: (0, helpers_1.isSet)(object.init_chain) ? exports.RequestInitChain.fromJSON(object.init_chain) : undefined,
            query: (0, helpers_1.isSet)(object.query) ? exports.RequestQuery.fromJSON(object.query) : undefined,
            begin_block: (0, helpers_1.isSet)(object.begin_block) ? exports.RequestBeginBlock.fromJSON(object.begin_block) : undefined,
            check_tx: (0, helpers_1.isSet)(object.check_tx) ? exports.RequestCheckTx.fromJSON(object.check_tx) : undefined,
            deliver_tx: (0, helpers_1.isSet)(object.deliver_tx) ? exports.RequestDeliverTx.fromJSON(object.deliver_tx) : undefined,
            end_block: (0, helpers_1.isSet)(object.end_block) ? exports.RequestEndBlock.fromJSON(object.end_block) : undefined,
            commit: (0, helpers_1.isSet)(object.commit) ? exports.RequestCommit.fromJSON(object.commit) : undefined,
            list_snapshots: (0, helpers_1.isSet)(object.list_snapshots) ? exports.RequestListSnapshots.fromJSON(object.list_snapshots) : undefined,
            offer_snapshot: (0, helpers_1.isSet)(object.offer_snapshot) ? exports.RequestOfferSnapshot.fromJSON(object.offer_snapshot) : undefined,
            load_snapshot_chunk: (0, helpers_1.isSet)(object.load_snapshot_chunk) ? exports.RequestLoadSnapshotChunk.fromJSON(object.load_snapshot_chunk) : undefined,
            apply_snapshot_chunk: (0, helpers_1.isSet)(object.apply_snapshot_chunk) ? exports.RequestApplySnapshotChunk.fromJSON(object.apply_snapshot_chunk) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.echo !== undefined && (obj.echo = message.echo ? exports.RequestEcho.toJSON(message.echo) : undefined);
        message.flush !== undefined && (obj.flush = message.flush ? exports.RequestFlush.toJSON(message.flush) : undefined);
        message.info !== undefined && (obj.info = message.info ? exports.RequestInfo.toJSON(message.info) : undefined);
        message.set_option !== undefined && (obj.set_option = message.set_option ? exports.RequestSetOption.toJSON(message.set_option) : undefined);
        message.init_chain !== undefined && (obj.init_chain = message.init_chain ? exports.RequestInitChain.toJSON(message.init_chain) : undefined);
        message.query !== undefined && (obj.query = message.query ? exports.RequestQuery.toJSON(message.query) : undefined);
        message.begin_block !== undefined && (obj.begin_block = message.begin_block ? exports.RequestBeginBlock.toJSON(message.begin_block) : undefined);
        message.check_tx !== undefined && (obj.check_tx = message.check_tx ? exports.RequestCheckTx.toJSON(message.check_tx) : undefined);
        message.deliver_tx !== undefined && (obj.deliver_tx = message.deliver_tx ? exports.RequestDeliverTx.toJSON(message.deliver_tx) : undefined);
        message.end_block !== undefined && (obj.end_block = message.end_block ? exports.RequestEndBlock.toJSON(message.end_block) : undefined);
        message.commit !== undefined && (obj.commit = message.commit ? exports.RequestCommit.toJSON(message.commit) : undefined);
        message.list_snapshots !== undefined && (obj.list_snapshots = message.list_snapshots ? exports.RequestListSnapshots.toJSON(message.list_snapshots) : undefined);
        message.offer_snapshot !== undefined && (obj.offer_snapshot = message.offer_snapshot ? exports.RequestOfferSnapshot.toJSON(message.offer_snapshot) : undefined);
        message.load_snapshot_chunk !== undefined && (obj.load_snapshot_chunk = message.load_snapshot_chunk ? exports.RequestLoadSnapshotChunk.toJSON(message.load_snapshot_chunk) : undefined);
        message.apply_snapshot_chunk !== undefined && (obj.apply_snapshot_chunk = message.apply_snapshot_chunk ? exports.RequestApplySnapshotChunk.toJSON(message.apply_snapshot_chunk) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequest();
        message.echo = object.echo !== undefined && object.echo !== null ? exports.RequestEcho.fromPartial(object.echo) : undefined;
        message.flush = object.flush !== undefined && object.flush !== null ? exports.RequestFlush.fromPartial(object.flush) : undefined;
        message.info = object.info !== undefined && object.info !== null ? exports.RequestInfo.fromPartial(object.info) : undefined;
        message.set_option = object.set_option !== undefined && object.set_option !== null ? exports.RequestSetOption.fromPartial(object.set_option) : undefined;
        message.init_chain = object.init_chain !== undefined && object.init_chain !== null ? exports.RequestInitChain.fromPartial(object.init_chain) : undefined;
        message.query = object.query !== undefined && object.query !== null ? exports.RequestQuery.fromPartial(object.query) : undefined;
        message.begin_block = object.begin_block !== undefined && object.begin_block !== null ? exports.RequestBeginBlock.fromPartial(object.begin_block) : undefined;
        message.check_tx = object.check_tx !== undefined && object.check_tx !== null ? exports.RequestCheckTx.fromPartial(object.check_tx) : undefined;
        message.deliver_tx = object.deliver_tx !== undefined && object.deliver_tx !== null ? exports.RequestDeliverTx.fromPartial(object.deliver_tx) : undefined;
        message.end_block = object.end_block !== undefined && object.end_block !== null ? exports.RequestEndBlock.fromPartial(object.end_block) : undefined;
        message.commit = object.commit !== undefined && object.commit !== null ? exports.RequestCommit.fromPartial(object.commit) : undefined;
        message.list_snapshots = object.list_snapshots !== undefined && object.list_snapshots !== null ? exports.RequestListSnapshots.fromPartial(object.list_snapshots) : undefined;
        message.offer_snapshot = object.offer_snapshot !== undefined && object.offer_snapshot !== null ? exports.RequestOfferSnapshot.fromPartial(object.offer_snapshot) : undefined;
        message.load_snapshot_chunk = object.load_snapshot_chunk !== undefined && object.load_snapshot_chunk !== null ? exports.RequestLoadSnapshotChunk.fromPartial(object.load_snapshot_chunk) : undefined;
        message.apply_snapshot_chunk = object.apply_snapshot_chunk !== undefined && object.apply_snapshot_chunk !== null ? exports.RequestApplySnapshotChunk.fromPartial(object.apply_snapshot_chunk) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            echo: object?.echo ? exports.RequestEcho.fromAmino(object.echo) : undefined,
            flush: object?.flush ? exports.RequestFlush.fromAmino(object.flush) : undefined,
            info: object?.info ? exports.RequestInfo.fromAmino(object.info) : undefined,
            set_option: object?.set_option ? exports.RequestSetOption.fromAmino(object.set_option) : undefined,
            init_chain: object?.init_chain ? exports.RequestInitChain.fromAmino(object.init_chain) : undefined,
            query: object?.query ? exports.RequestQuery.fromAmino(object.query) : undefined,
            begin_block: object?.begin_block ? exports.RequestBeginBlock.fromAmino(object.begin_block) : undefined,
            check_tx: object?.check_tx ? exports.RequestCheckTx.fromAmino(object.check_tx) : undefined,
            deliver_tx: object?.deliver_tx ? exports.RequestDeliverTx.fromAmino(object.deliver_tx) : undefined,
            end_block: object?.end_block ? exports.RequestEndBlock.fromAmino(object.end_block) : undefined,
            commit: object?.commit ? exports.RequestCommit.fromAmino(object.commit) : undefined,
            list_snapshots: object?.list_snapshots ? exports.RequestListSnapshots.fromAmino(object.list_snapshots) : undefined,
            offer_snapshot: object?.offer_snapshot ? exports.RequestOfferSnapshot.fromAmino(object.offer_snapshot) : undefined,
            load_snapshot_chunk: object?.load_snapshot_chunk ? exports.RequestLoadSnapshotChunk.fromAmino(object.load_snapshot_chunk) : undefined,
            apply_snapshot_chunk: object?.apply_snapshot_chunk ? exports.RequestApplySnapshotChunk.fromAmino(object.apply_snapshot_chunk) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.echo = message.echo ? exports.RequestEcho.toAmino(message.echo) : undefined;
        obj.flush = message.flush ? exports.RequestFlush.toAmino(message.flush) : undefined;
        obj.info = message.info ? exports.RequestInfo.toAmino(message.info) : undefined;
        obj.set_option = message.set_option ? exports.RequestSetOption.toAmino(message.set_option) : undefined;
        obj.init_chain = message.init_chain ? exports.RequestInitChain.toAmino(message.init_chain) : undefined;
        obj.query = message.query ? exports.RequestQuery.toAmino(message.query) : undefined;
        obj.begin_block = message.begin_block ? exports.RequestBeginBlock.toAmino(message.begin_block) : undefined;
        obj.check_tx = message.check_tx ? exports.RequestCheckTx.toAmino(message.check_tx) : undefined;
        obj.deliver_tx = message.deliver_tx ? exports.RequestDeliverTx.toAmino(message.deliver_tx) : undefined;
        obj.end_block = message.end_block ? exports.RequestEndBlock.toAmino(message.end_block) : undefined;
        obj.commit = message.commit ? exports.RequestCommit.toAmino(message.commit) : undefined;
        obj.list_snapshots = message.list_snapshots ? exports.RequestListSnapshots.toAmino(message.list_snapshots) : undefined;
        obj.offer_snapshot = message.offer_snapshot ? exports.RequestOfferSnapshot.toAmino(message.offer_snapshot) : undefined;
        obj.load_snapshot_chunk = message.load_snapshot_chunk ? exports.RequestLoadSnapshotChunk.toAmino(message.load_snapshot_chunk) : undefined;
        obj.apply_snapshot_chunk = message.apply_snapshot_chunk ? exports.RequestApplySnapshotChunk.toAmino(message.apply_snapshot_chunk) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Request.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Request.decode(message.value);
    },
    toProto(message) {
        return exports.Request.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Request",
            value: exports.Request.encode(message).finish()
        };
    }
};
function createBaseRequestEcho() {
    return {
        message: ""
    };
}
exports.RequestEcho = {
    typeUrl: "/tendermint.abci.RequestEcho",
    encode(message, writer = _m0.Writer.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestEcho();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            message: (0, helpers_1.isSet)(object.message) ? String(object.message) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestEcho();
        message.message = object.message ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            message: object.message
        };
    },
    toAmino(message) {
        const obj = {};
        obj.message = message.message;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestEcho.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestEcho.decode(message.value);
    },
    toProto(message) {
        return exports.RequestEcho.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestEcho",
            value: exports.RequestEcho.encode(message).finish()
        };
    }
};
function createBaseRequestFlush() {
    return {};
}
exports.RequestFlush = {
    typeUrl: "/tendermint.abci.RequestFlush",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestFlush();
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseRequestFlush();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestFlush.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestFlush.decode(message.value);
    },
    toProto(message) {
        return exports.RequestFlush.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestFlush",
            value: exports.RequestFlush.encode(message).finish()
        };
    }
};
function createBaseRequestInfo() {
    return {
        version: "",
        block_version: helpers_1.Long.UZERO,
        p2p_version: helpers_1.Long.UZERO
    };
}
exports.RequestInfo = {
    typeUrl: "/tendermint.abci.RequestInfo",
    encode(message, writer = _m0.Writer.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (!message.block_version.isZero()) {
            writer.uint32(16).uint64(message.block_version);
        }
        if (!message.p2p_version.isZero()) {
            writer.uint32(24).uint64(message.p2p_version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.block_version = reader.uint64();
                    break;
                case 3:
                    message.p2p_version = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            version: (0, helpers_1.isSet)(object.version) ? String(object.version) : "",
            block_version: (0, helpers_1.isSet)(object.block_version) ? helpers_1.Long.fromValue(object.block_version) : helpers_1.Long.UZERO,
            p2p_version: (0, helpers_1.isSet)(object.p2p_version) ? helpers_1.Long.fromValue(object.p2p_version) : helpers_1.Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.block_version !== undefined && (obj.block_version = (message.block_version || helpers_1.Long.UZERO).toString());
        message.p2p_version !== undefined && (obj.p2p_version = (message.p2p_version || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestInfo();
        message.version = object.version ?? "";
        message.block_version = object.block_version !== undefined && object.block_version !== null ? helpers_1.Long.fromValue(object.block_version) : helpers_1.Long.UZERO;
        message.p2p_version = object.p2p_version !== undefined && object.p2p_version !== null ? helpers_1.Long.fromValue(object.p2p_version) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            version: object.version,
            block_version: helpers_1.Long.fromString(object.block_version),
            p2p_version: helpers_1.Long.fromString(object.p2p_version)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.version = message.version;
        obj.block_version = message.block_version ? message.block_version.toString() : undefined;
        obj.p2p_version = message.p2p_version ? message.p2p_version.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestInfo.decode(message.value);
    },
    toProto(message) {
        return exports.RequestInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestInfo",
            value: exports.RequestInfo.encode(message).finish()
        };
    }
};
function createBaseRequestSetOption() {
    return {
        key: "",
        value: ""
    };
}
exports.RequestSetOption = {
    typeUrl: "/tendermint.abci.RequestSetOption",
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestSetOption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            key: (0, helpers_1.isSet)(object.key) ? String(object.key) : "",
            value: (0, helpers_1.isSet)(object.value) ? String(object.value) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestSetOption();
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            key: object.key,
            value: object.value
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestSetOption.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestSetOption.decode(message.value);
    },
    toProto(message) {
        return exports.RequestSetOption.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestSetOption",
            value: exports.RequestSetOption.encode(message).finish()
        };
    }
};
function createBaseRequestInitChain() {
    return {
        time: new Date(),
        chain_id: "",
        consensus_params: exports.ConsensusParams.fromPartial({}),
        validators: [],
        app_state_bytes: new Uint8Array(),
        initial_height: helpers_1.Long.ZERO
    };
}
exports.RequestInitChain = {
    typeUrl: "/tendermint.abci.RequestInitChain",
    encode(message, writer = _m0.Writer.create()) {
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.time), writer.uint32(10).fork()).ldelim();
        }
        if (message.chain_id !== "") {
            writer.uint32(18).string(message.chain_id);
        }
        if (message.consensus_params !== undefined) {
            exports.ConsensusParams.encode(message.consensus_params, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.validators) {
            exports.ValidatorUpdate.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.app_state_bytes.length !== 0) {
            writer.uint32(42).bytes(message.app_state_bytes);
        }
        if (!message.initial_height.isZero()) {
            writer.uint32(48).int64(message.initial_height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestInitChain();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.chain_id = reader.string();
                    break;
                case 3:
                    message.consensus_params = exports.ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.validators.push(exports.ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.app_state_bytes = reader.bytes();
                    break;
                case 6:
                    message.initial_height = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            time: (0, helpers_1.isSet)(object.time) ? (0, helpers_1.fromJsonTimestamp)(object.time) : undefined,
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : "",
            consensus_params: (0, helpers_1.isSet)(object.consensus_params) ? exports.ConsensusParams.fromJSON(object.consensus_params) : undefined,
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => exports.ValidatorUpdate.fromJSON(e)) : [],
            app_state_bytes: (0, helpers_1.isSet)(object.app_state_bytes) ? (0, helpers_1.bytesFromBase64)(object.app_state_bytes) : new Uint8Array(),
            initial_height: (0, helpers_1.isSet)(object.initial_height) ? helpers_1.Long.fromValue(object.initial_height) : helpers_1.Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.consensus_params !== undefined && (obj.consensus_params = message.consensus_params ? exports.ConsensusParams.toJSON(message.consensus_params) : undefined);
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.ValidatorUpdate.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.app_state_bytes !== undefined && (obj.app_state_bytes = (0, helpers_1.base64FromBytes)(message.app_state_bytes !== undefined ? message.app_state_bytes : new Uint8Array()));
        message.initial_height !== undefined && (obj.initial_height = (message.initial_height || helpers_1.Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestInitChain();
        message.time = object.time ?? undefined;
        message.chain_id = object.chain_id ?? "";
        message.consensus_params = object.consensus_params !== undefined && object.consensus_params !== null ? exports.ConsensusParams.fromPartial(object.consensus_params) : undefined;
        message.validators = object.validators?.map(e => exports.ValidatorUpdate.fromPartial(e)) || [];
        message.app_state_bytes = object.app_state_bytes ?? new Uint8Array();
        message.initial_height = object.initial_height !== undefined && object.initial_height !== null ? helpers_1.Long.fromValue(object.initial_height) : helpers_1.Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            time: object.time,
            chain_id: object.chain_id,
            consensus_params: object?.consensus_params ? exports.ConsensusParams.fromAmino(object.consensus_params) : undefined,
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => exports.ValidatorUpdate.fromAmino(e)) : [],
            app_state_bytes: object.app_state_bytes,
            initial_height: helpers_1.Long.fromString(object.initial_height)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.time = message.time;
        obj.chain_id = message.chain_id;
        obj.consensus_params = message.consensus_params ? exports.ConsensusParams.toAmino(message.consensus_params) : undefined;
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.ValidatorUpdate.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.app_state_bytes = message.app_state_bytes;
        obj.initial_height = message.initial_height ? message.initial_height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestInitChain.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestInitChain.decode(message.value);
    },
    toProto(message) {
        return exports.RequestInitChain.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestInitChain",
            value: exports.RequestInitChain.encode(message).finish()
        };
    }
};
function createBaseRequestQuery() {
    return {
        data: new Uint8Array(),
        path: "",
        height: helpers_1.Long.ZERO,
        prove: false
    };
}
exports.RequestQuery = {
    typeUrl: "/tendermint.abci.RequestQuery",
    encode(message, writer = _m0.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        if (message.path !== "") {
            writer.uint32(18).string(message.path);
        }
        if (!message.height.isZero()) {
            writer.uint32(24).int64(message.height);
        }
        if (message.prove === true) {
            writer.uint32(32).bool(message.prove);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.prove = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array(),
            path: (0, helpers_1.isSet)(object.path) ? String(object.path) : "",
            height: (0, helpers_1.isSet)(object.height) ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO,
            prove: (0, helpers_1.isSet)(object.prove) ? Boolean(object.prove) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        message.path !== undefined && (obj.path = message.path);
        message.height !== undefined && (obj.height = (message.height || helpers_1.Long.ZERO).toString());
        message.prove !== undefined && (obj.prove = message.prove);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestQuery();
        message.data = object.data ?? new Uint8Array();
        message.path = object.path ?? "";
        message.height = object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO;
        message.prove = object.prove ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            data: object.data,
            path: object.path,
            height: helpers_1.Long.fromString(object.height),
            prove: object.prove
        };
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data;
        obj.path = message.path;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.prove = message.prove;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestQuery.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestQuery.decode(message.value);
    },
    toProto(message) {
        return exports.RequestQuery.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestQuery",
            value: exports.RequestQuery.encode(message).finish()
        };
    }
};
function createBaseRequestBeginBlock() {
    return {
        hash: new Uint8Array(),
        header: types_1.Header.fromPartial({}),
        last_commit_info: exports.LastCommitInfo.fromPartial({}),
        byzantine_validators: []
    };
}
exports.RequestBeginBlock = {
    typeUrl: "/tendermint.abci.RequestBeginBlock",
    encode(message, writer = _m0.Writer.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        if (message.header !== undefined) {
            types_1.Header.encode(message.header, writer.uint32(18).fork()).ldelim();
        }
        if (message.last_commit_info !== undefined) {
            exports.LastCommitInfo.encode(message.last_commit_info, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.byzantine_validators) {
            exports.Evidence.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestBeginBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                case 2:
                    message.header = types_1.Header.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.last_commit_info = exports.LastCommitInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.byzantine_validators.push(exports.Evidence.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            hash: (0, helpers_1.isSet)(object.hash) ? (0, helpers_1.bytesFromBase64)(object.hash) : new Uint8Array(),
            header: (0, helpers_1.isSet)(object.header) ? types_1.Header.fromJSON(object.header) : undefined,
            last_commit_info: (0, helpers_1.isSet)(object.last_commit_info) ? exports.LastCommitInfo.fromJSON(object.last_commit_info) : undefined,
            byzantine_validators: Array.isArray(object?.byzantine_validators) ? object.byzantine_validators.map((e) => exports.Evidence.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = (0, helpers_1.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.header !== undefined && (obj.header = message.header ? types_1.Header.toJSON(message.header) : undefined);
        message.last_commit_info !== undefined && (obj.last_commit_info = message.last_commit_info ? exports.LastCommitInfo.toJSON(message.last_commit_info) : undefined);
        if (message.byzantine_validators) {
            obj.byzantine_validators = message.byzantine_validators.map(e => e ? exports.Evidence.toJSON(e) : undefined);
        }
        else {
            obj.byzantine_validators = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestBeginBlock();
        message.hash = object.hash ?? new Uint8Array();
        message.header = object.header !== undefined && object.header !== null ? types_1.Header.fromPartial(object.header) : undefined;
        message.last_commit_info = object.last_commit_info !== undefined && object.last_commit_info !== null ? exports.LastCommitInfo.fromPartial(object.last_commit_info) : undefined;
        message.byzantine_validators = object.byzantine_validators?.map(e => exports.Evidence.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            hash: object.hash,
            header: object?.header ? types_1.Header.fromAmino(object.header) : undefined,
            last_commit_info: object?.last_commit_info ? exports.LastCommitInfo.fromAmino(object.last_commit_info) : undefined,
            byzantine_validators: Array.isArray(object?.byzantine_validators) ? object.byzantine_validators.map((e) => exports.Evidence.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash;
        obj.header = message.header ? types_1.Header.toAmino(message.header) : undefined;
        obj.last_commit_info = message.last_commit_info ? exports.LastCommitInfo.toAmino(message.last_commit_info) : undefined;
        if (message.byzantine_validators) {
            obj.byzantine_validators = message.byzantine_validators.map(e => e ? exports.Evidence.toAmino(e) : undefined);
        }
        else {
            obj.byzantine_validators = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestBeginBlock.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestBeginBlock.decode(message.value);
    },
    toProto(message) {
        return exports.RequestBeginBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestBeginBlock",
            value: exports.RequestBeginBlock.encode(message).finish()
        };
    }
};
function createBaseRequestCheckTx() {
    return {
        tx: new Uint8Array(),
        type: 0
    };
}
exports.RequestCheckTx = {
    typeUrl: "/tendermint.abci.RequestCheckTx",
    encode(message, writer = _m0.Writer.create()) {
        if (message.tx.length !== 0) {
            writer.uint32(10).bytes(message.tx);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestCheckTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = reader.bytes();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            tx: (0, helpers_1.isSet)(object.tx) ? (0, helpers_1.bytesFromBase64)(object.tx) : new Uint8Array(),
            type: (0, helpers_1.isSet)(object.type) ? checkTxTypeFromJSON(object.type) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined && (obj.tx = (0, helpers_1.base64FromBytes)(message.tx !== undefined ? message.tx : new Uint8Array()));
        message.type !== undefined && (obj.type = checkTxTypeToJSON(message.type));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestCheckTx();
        message.tx = object.tx ?? new Uint8Array();
        message.type = object.type ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            tx: object.tx,
            type: (0, helpers_1.isSet)(object.type) ? checkTxTypeFromJSON(object.type) : -1
        };
    },
    toAmino(message) {
        const obj = {};
        obj.tx = message.tx;
        obj.type = message.type;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestCheckTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestCheckTx.decode(message.value);
    },
    toProto(message) {
        return exports.RequestCheckTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestCheckTx",
            value: exports.RequestCheckTx.encode(message).finish()
        };
    }
};
function createBaseRequestDeliverTx() {
    return {
        tx: new Uint8Array()
    };
}
exports.RequestDeliverTx = {
    typeUrl: "/tendermint.abci.RequestDeliverTx",
    encode(message, writer = _m0.Writer.create()) {
        if (message.tx.length !== 0) {
            writer.uint32(10).bytes(message.tx);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestDeliverTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            tx: (0, helpers_1.isSet)(object.tx) ? (0, helpers_1.bytesFromBase64)(object.tx) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined && (obj.tx = (0, helpers_1.base64FromBytes)(message.tx !== undefined ? message.tx : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestDeliverTx();
        message.tx = object.tx ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            tx: object.tx
        };
    },
    toAmino(message) {
        const obj = {};
        obj.tx = message.tx;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestDeliverTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestDeliverTx.decode(message.value);
    },
    toProto(message) {
        return exports.RequestDeliverTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestDeliverTx",
            value: exports.RequestDeliverTx.encode(message).finish()
        };
    }
};
function createBaseRequestEndBlock() {
    return {
        height: helpers_1.Long.ZERO
    };
}
exports.RequestEndBlock = {
    typeUrl: "/tendermint.abci.RequestEndBlock",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestEndBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            height: (0, helpers_1.isSet)(object.height) ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || helpers_1.Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestEndBlock();
        message.height = object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            height: helpers_1.Long.fromString(object.height)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestEndBlock.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestEndBlock.decode(message.value);
    },
    toProto(message) {
        return exports.RequestEndBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestEndBlock",
            value: exports.RequestEndBlock.encode(message).finish()
        };
    }
};
function createBaseRequestCommit() {
    return {};
}
exports.RequestCommit = {
    typeUrl: "/tendermint.abci.RequestCommit",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestCommit();
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseRequestCommit();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestCommit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestCommit.decode(message.value);
    },
    toProto(message) {
        return exports.RequestCommit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestCommit",
            value: exports.RequestCommit.encode(message).finish()
        };
    }
};
function createBaseRequestListSnapshots() {
    return {};
}
exports.RequestListSnapshots = {
    typeUrl: "/tendermint.abci.RequestListSnapshots",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestListSnapshots();
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseRequestListSnapshots();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestListSnapshots.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestListSnapshots.decode(message.value);
    },
    toProto(message) {
        return exports.RequestListSnapshots.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestListSnapshots",
            value: exports.RequestListSnapshots.encode(message).finish()
        };
    }
};
function createBaseRequestOfferSnapshot() {
    return {
        snapshot: exports.Snapshot.fromPartial({}),
        app_hash: new Uint8Array()
    };
}
exports.RequestOfferSnapshot = {
    typeUrl: "/tendermint.abci.RequestOfferSnapshot",
    encode(message, writer = _m0.Writer.create()) {
        if (message.snapshot !== undefined) {
            exports.Snapshot.encode(message.snapshot, writer.uint32(10).fork()).ldelim();
        }
        if (message.app_hash.length !== 0) {
            writer.uint32(18).bytes(message.app_hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestOfferSnapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshot = exports.Snapshot.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.app_hash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            snapshot: (0, helpers_1.isSet)(object.snapshot) ? exports.Snapshot.fromJSON(object.snapshot) : undefined,
            app_hash: (0, helpers_1.isSet)(object.app_hash) ? (0, helpers_1.bytesFromBase64)(object.app_hash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.snapshot !== undefined && (obj.snapshot = message.snapshot ? exports.Snapshot.toJSON(message.snapshot) : undefined);
        message.app_hash !== undefined && (obj.app_hash = (0, helpers_1.base64FromBytes)(message.app_hash !== undefined ? message.app_hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestOfferSnapshot();
        message.snapshot = object.snapshot !== undefined && object.snapshot !== null ? exports.Snapshot.fromPartial(object.snapshot) : undefined;
        message.app_hash = object.app_hash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            snapshot: object?.snapshot ? exports.Snapshot.fromAmino(object.snapshot) : undefined,
            app_hash: object.app_hash
        };
    },
    toAmino(message) {
        const obj = {};
        obj.snapshot = message.snapshot ? exports.Snapshot.toAmino(message.snapshot) : undefined;
        obj.app_hash = message.app_hash;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestOfferSnapshot.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestOfferSnapshot.decode(message.value);
    },
    toProto(message) {
        return exports.RequestOfferSnapshot.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestOfferSnapshot",
            value: exports.RequestOfferSnapshot.encode(message).finish()
        };
    }
};
function createBaseRequestLoadSnapshotChunk() {
    return {
        height: helpers_1.Long.UZERO,
        format: 0,
        chunk: 0
    };
}
exports.RequestLoadSnapshotChunk = {
    typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.chunk !== 0) {
            writer.uint32(24).uint32(message.chunk);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestLoadSnapshotChunk();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.uint64();
                    break;
                case 2:
                    message.format = reader.uint32();
                    break;
                case 3:
                    message.chunk = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            height: (0, helpers_1.isSet)(object.height) ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.UZERO,
            format: (0, helpers_1.isSet)(object.format) ? Number(object.format) : 0,
            chunk: (0, helpers_1.isSet)(object.chunk) ? Number(object.chunk) : 0
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || helpers_1.Long.UZERO).toString());
        message.format !== undefined && (obj.format = Math.round(message.format));
        message.chunk !== undefined && (obj.chunk = Math.round(message.chunk));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestLoadSnapshotChunk();
        message.height = object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.UZERO;
        message.format = object.format ?? 0;
        message.chunk = object.chunk ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            height: helpers_1.Long.fromString(object.height),
            format: object.format,
            chunk: object.chunk
        };
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.format = message.format;
        obj.chunk = message.chunk;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestLoadSnapshotChunk.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestLoadSnapshotChunk.decode(message.value);
    },
    toProto(message) {
        return exports.RequestLoadSnapshotChunk.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk",
            value: exports.RequestLoadSnapshotChunk.encode(message).finish()
        };
    }
};
function createBaseRequestApplySnapshotChunk() {
    return {
        index: 0,
        chunk: new Uint8Array(),
        sender: ""
    };
}
exports.RequestApplySnapshotChunk = {
    typeUrl: "/tendermint.abci.RequestApplySnapshotChunk",
    encode(message, writer = _m0.Writer.create()) {
        if (message.index !== 0) {
            writer.uint32(8).uint32(message.index);
        }
        if (message.chunk.length !== 0) {
            writer.uint32(18).bytes(message.chunk);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestApplySnapshotChunk();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint32();
                    break;
                case 2:
                    message.chunk = reader.bytes();
                    break;
                case 3:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            index: (0, helpers_1.isSet)(object.index) ? Number(object.index) : 0,
            chunk: (0, helpers_1.isSet)(object.chunk) ? (0, helpers_1.bytesFromBase64)(object.chunk) : new Uint8Array(),
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = Math.round(message.index));
        message.chunk !== undefined && (obj.chunk = (0, helpers_1.base64FromBytes)(message.chunk !== undefined ? message.chunk : new Uint8Array()));
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestApplySnapshotChunk();
        message.index = object.index ?? 0;
        message.chunk = object.chunk ?? new Uint8Array();
        message.sender = object.sender ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            index: object.index,
            chunk: object.chunk,
            sender: object.sender
        };
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index;
        obj.chunk = message.chunk;
        obj.sender = message.sender;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestApplySnapshotChunk.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestApplySnapshotChunk.decode(message.value);
    },
    toProto(message) {
        return exports.RequestApplySnapshotChunk.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestApplySnapshotChunk",
            value: exports.RequestApplySnapshotChunk.encode(message).finish()
        };
    }
};
function createBaseResponse() {
    return {
        exception: undefined,
        echo: undefined,
        flush: undefined,
        info: undefined,
        set_option: undefined,
        init_chain: undefined,
        query: undefined,
        begin_block: undefined,
        check_tx: undefined,
        deliver_tx: undefined,
        end_block: undefined,
        commit: undefined,
        list_snapshots: undefined,
        offer_snapshot: undefined,
        load_snapshot_chunk: undefined,
        apply_snapshot_chunk: undefined
    };
}
exports.Response = {
    typeUrl: "/tendermint.abci.Response",
    encode(message, writer = _m0.Writer.create()) {
        if (message.exception !== undefined) {
            exports.ResponseException.encode(message.exception, writer.uint32(10).fork()).ldelim();
        }
        if (message.echo !== undefined) {
            exports.ResponseEcho.encode(message.echo, writer.uint32(18).fork()).ldelim();
        }
        if (message.flush !== undefined) {
            exports.ResponseFlush.encode(message.flush, writer.uint32(26).fork()).ldelim();
        }
        if (message.info !== undefined) {
            exports.ResponseInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
        }
        if (message.set_option !== undefined) {
            exports.ResponseSetOption.encode(message.set_option, writer.uint32(42).fork()).ldelim();
        }
        if (message.init_chain !== undefined) {
            exports.ResponseInitChain.encode(message.init_chain, writer.uint32(50).fork()).ldelim();
        }
        if (message.query !== undefined) {
            exports.ResponseQuery.encode(message.query, writer.uint32(58).fork()).ldelim();
        }
        if (message.begin_block !== undefined) {
            exports.ResponseBeginBlock.encode(message.begin_block, writer.uint32(66).fork()).ldelim();
        }
        if (message.check_tx !== undefined) {
            exports.ResponseCheckTx.encode(message.check_tx, writer.uint32(74).fork()).ldelim();
        }
        if (message.deliver_tx !== undefined) {
            exports.ResponseDeliverTx.encode(message.deliver_tx, writer.uint32(82).fork()).ldelim();
        }
        if (message.end_block !== undefined) {
            exports.ResponseEndBlock.encode(message.end_block, writer.uint32(90).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            exports.ResponseCommit.encode(message.commit, writer.uint32(98).fork()).ldelim();
        }
        if (message.list_snapshots !== undefined) {
            exports.ResponseListSnapshots.encode(message.list_snapshots, writer.uint32(106).fork()).ldelim();
        }
        if (message.offer_snapshot !== undefined) {
            exports.ResponseOfferSnapshot.encode(message.offer_snapshot, writer.uint32(114).fork()).ldelim();
        }
        if (message.load_snapshot_chunk !== undefined) {
            exports.ResponseLoadSnapshotChunk.encode(message.load_snapshot_chunk, writer.uint32(122).fork()).ldelim();
        }
        if (message.apply_snapshot_chunk !== undefined) {
            exports.ResponseApplySnapshotChunk.encode(message.apply_snapshot_chunk, writer.uint32(130).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exception = exports.ResponseException.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.echo = exports.ResponseEcho.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.flush = exports.ResponseFlush.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.info = exports.ResponseInfo.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.set_option = exports.ResponseSetOption.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.init_chain = exports.ResponseInitChain.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.query = exports.ResponseQuery.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.begin_block = exports.ResponseBeginBlock.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.check_tx = exports.ResponseCheckTx.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.deliver_tx = exports.ResponseDeliverTx.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.end_block = exports.ResponseEndBlock.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.commit = exports.ResponseCommit.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.list_snapshots = exports.ResponseListSnapshots.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.offer_snapshot = exports.ResponseOfferSnapshot.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.load_snapshot_chunk = exports.ResponseLoadSnapshotChunk.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.apply_snapshot_chunk = exports.ResponseApplySnapshotChunk.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            exception: (0, helpers_1.isSet)(object.exception) ? exports.ResponseException.fromJSON(object.exception) : undefined,
            echo: (0, helpers_1.isSet)(object.echo) ? exports.ResponseEcho.fromJSON(object.echo) : undefined,
            flush: (0, helpers_1.isSet)(object.flush) ? exports.ResponseFlush.fromJSON(object.flush) : undefined,
            info: (0, helpers_1.isSet)(object.info) ? exports.ResponseInfo.fromJSON(object.info) : undefined,
            set_option: (0, helpers_1.isSet)(object.set_option) ? exports.ResponseSetOption.fromJSON(object.set_option) : undefined,
            init_chain: (0, helpers_1.isSet)(object.init_chain) ? exports.ResponseInitChain.fromJSON(object.init_chain) : undefined,
            query: (0, helpers_1.isSet)(object.query) ? exports.ResponseQuery.fromJSON(object.query) : undefined,
            begin_block: (0, helpers_1.isSet)(object.begin_block) ? exports.ResponseBeginBlock.fromJSON(object.begin_block) : undefined,
            check_tx: (0, helpers_1.isSet)(object.check_tx) ? exports.ResponseCheckTx.fromJSON(object.check_tx) : undefined,
            deliver_tx: (0, helpers_1.isSet)(object.deliver_tx) ? exports.ResponseDeliverTx.fromJSON(object.deliver_tx) : undefined,
            end_block: (0, helpers_1.isSet)(object.end_block) ? exports.ResponseEndBlock.fromJSON(object.end_block) : undefined,
            commit: (0, helpers_1.isSet)(object.commit) ? exports.ResponseCommit.fromJSON(object.commit) : undefined,
            list_snapshots: (0, helpers_1.isSet)(object.list_snapshots) ? exports.ResponseListSnapshots.fromJSON(object.list_snapshots) : undefined,
            offer_snapshot: (0, helpers_1.isSet)(object.offer_snapshot) ? exports.ResponseOfferSnapshot.fromJSON(object.offer_snapshot) : undefined,
            load_snapshot_chunk: (0, helpers_1.isSet)(object.load_snapshot_chunk) ? exports.ResponseLoadSnapshotChunk.fromJSON(object.load_snapshot_chunk) : undefined,
            apply_snapshot_chunk: (0, helpers_1.isSet)(object.apply_snapshot_chunk) ? exports.ResponseApplySnapshotChunk.fromJSON(object.apply_snapshot_chunk) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.exception !== undefined && (obj.exception = message.exception ? exports.ResponseException.toJSON(message.exception) : undefined);
        message.echo !== undefined && (obj.echo = message.echo ? exports.ResponseEcho.toJSON(message.echo) : undefined);
        message.flush !== undefined && (obj.flush = message.flush ? exports.ResponseFlush.toJSON(message.flush) : undefined);
        message.info !== undefined && (obj.info = message.info ? exports.ResponseInfo.toJSON(message.info) : undefined);
        message.set_option !== undefined && (obj.set_option = message.set_option ? exports.ResponseSetOption.toJSON(message.set_option) : undefined);
        message.init_chain !== undefined && (obj.init_chain = message.init_chain ? exports.ResponseInitChain.toJSON(message.init_chain) : undefined);
        message.query !== undefined && (obj.query = message.query ? exports.ResponseQuery.toJSON(message.query) : undefined);
        message.begin_block !== undefined && (obj.begin_block = message.begin_block ? exports.ResponseBeginBlock.toJSON(message.begin_block) : undefined);
        message.check_tx !== undefined && (obj.check_tx = message.check_tx ? exports.ResponseCheckTx.toJSON(message.check_tx) : undefined);
        message.deliver_tx !== undefined && (obj.deliver_tx = message.deliver_tx ? exports.ResponseDeliverTx.toJSON(message.deliver_tx) : undefined);
        message.end_block !== undefined && (obj.end_block = message.end_block ? exports.ResponseEndBlock.toJSON(message.end_block) : undefined);
        message.commit !== undefined && (obj.commit = message.commit ? exports.ResponseCommit.toJSON(message.commit) : undefined);
        message.list_snapshots !== undefined && (obj.list_snapshots = message.list_snapshots ? exports.ResponseListSnapshots.toJSON(message.list_snapshots) : undefined);
        message.offer_snapshot !== undefined && (obj.offer_snapshot = message.offer_snapshot ? exports.ResponseOfferSnapshot.toJSON(message.offer_snapshot) : undefined);
        message.load_snapshot_chunk !== undefined && (obj.load_snapshot_chunk = message.load_snapshot_chunk ? exports.ResponseLoadSnapshotChunk.toJSON(message.load_snapshot_chunk) : undefined);
        message.apply_snapshot_chunk !== undefined && (obj.apply_snapshot_chunk = message.apply_snapshot_chunk ? exports.ResponseApplySnapshotChunk.toJSON(message.apply_snapshot_chunk) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponse();
        message.exception = object.exception !== undefined && object.exception !== null ? exports.ResponseException.fromPartial(object.exception) : undefined;
        message.echo = object.echo !== undefined && object.echo !== null ? exports.ResponseEcho.fromPartial(object.echo) : undefined;
        message.flush = object.flush !== undefined && object.flush !== null ? exports.ResponseFlush.fromPartial(object.flush) : undefined;
        message.info = object.info !== undefined && object.info !== null ? exports.ResponseInfo.fromPartial(object.info) : undefined;
        message.set_option = object.set_option !== undefined && object.set_option !== null ? exports.ResponseSetOption.fromPartial(object.set_option) : undefined;
        message.init_chain = object.init_chain !== undefined && object.init_chain !== null ? exports.ResponseInitChain.fromPartial(object.init_chain) : undefined;
        message.query = object.query !== undefined && object.query !== null ? exports.ResponseQuery.fromPartial(object.query) : undefined;
        message.begin_block = object.begin_block !== undefined && object.begin_block !== null ? exports.ResponseBeginBlock.fromPartial(object.begin_block) : undefined;
        message.check_tx = object.check_tx !== undefined && object.check_tx !== null ? exports.ResponseCheckTx.fromPartial(object.check_tx) : undefined;
        message.deliver_tx = object.deliver_tx !== undefined && object.deliver_tx !== null ? exports.ResponseDeliverTx.fromPartial(object.deliver_tx) : undefined;
        message.end_block = object.end_block !== undefined && object.end_block !== null ? exports.ResponseEndBlock.fromPartial(object.end_block) : undefined;
        message.commit = object.commit !== undefined && object.commit !== null ? exports.ResponseCommit.fromPartial(object.commit) : undefined;
        message.list_snapshots = object.list_snapshots !== undefined && object.list_snapshots !== null ? exports.ResponseListSnapshots.fromPartial(object.list_snapshots) : undefined;
        message.offer_snapshot = object.offer_snapshot !== undefined && object.offer_snapshot !== null ? exports.ResponseOfferSnapshot.fromPartial(object.offer_snapshot) : undefined;
        message.load_snapshot_chunk = object.load_snapshot_chunk !== undefined && object.load_snapshot_chunk !== null ? exports.ResponseLoadSnapshotChunk.fromPartial(object.load_snapshot_chunk) : undefined;
        message.apply_snapshot_chunk = object.apply_snapshot_chunk !== undefined && object.apply_snapshot_chunk !== null ? exports.ResponseApplySnapshotChunk.fromPartial(object.apply_snapshot_chunk) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            exception: object?.exception ? exports.ResponseException.fromAmino(object.exception) : undefined,
            echo: object?.echo ? exports.ResponseEcho.fromAmino(object.echo) : undefined,
            flush: object?.flush ? exports.ResponseFlush.fromAmino(object.flush) : undefined,
            info: object?.info ? exports.ResponseInfo.fromAmino(object.info) : undefined,
            set_option: object?.set_option ? exports.ResponseSetOption.fromAmino(object.set_option) : undefined,
            init_chain: object?.init_chain ? exports.ResponseInitChain.fromAmino(object.init_chain) : undefined,
            query: object?.query ? exports.ResponseQuery.fromAmino(object.query) : undefined,
            begin_block: object?.begin_block ? exports.ResponseBeginBlock.fromAmino(object.begin_block) : undefined,
            check_tx: object?.check_tx ? exports.ResponseCheckTx.fromAmino(object.check_tx) : undefined,
            deliver_tx: object?.deliver_tx ? exports.ResponseDeliverTx.fromAmino(object.deliver_tx) : undefined,
            end_block: object?.end_block ? exports.ResponseEndBlock.fromAmino(object.end_block) : undefined,
            commit: object?.commit ? exports.ResponseCommit.fromAmino(object.commit) : undefined,
            list_snapshots: object?.list_snapshots ? exports.ResponseListSnapshots.fromAmino(object.list_snapshots) : undefined,
            offer_snapshot: object?.offer_snapshot ? exports.ResponseOfferSnapshot.fromAmino(object.offer_snapshot) : undefined,
            load_snapshot_chunk: object?.load_snapshot_chunk ? exports.ResponseLoadSnapshotChunk.fromAmino(object.load_snapshot_chunk) : undefined,
            apply_snapshot_chunk: object?.apply_snapshot_chunk ? exports.ResponseApplySnapshotChunk.fromAmino(object.apply_snapshot_chunk) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.exception = message.exception ? exports.ResponseException.toAmino(message.exception) : undefined;
        obj.echo = message.echo ? exports.ResponseEcho.toAmino(message.echo) : undefined;
        obj.flush = message.flush ? exports.ResponseFlush.toAmino(message.flush) : undefined;
        obj.info = message.info ? exports.ResponseInfo.toAmino(message.info) : undefined;
        obj.set_option = message.set_option ? exports.ResponseSetOption.toAmino(message.set_option) : undefined;
        obj.init_chain = message.init_chain ? exports.ResponseInitChain.toAmino(message.init_chain) : undefined;
        obj.query = message.query ? exports.ResponseQuery.toAmino(message.query) : undefined;
        obj.begin_block = message.begin_block ? exports.ResponseBeginBlock.toAmino(message.begin_block) : undefined;
        obj.check_tx = message.check_tx ? exports.ResponseCheckTx.toAmino(message.check_tx) : undefined;
        obj.deliver_tx = message.deliver_tx ? exports.ResponseDeliverTx.toAmino(message.deliver_tx) : undefined;
        obj.end_block = message.end_block ? exports.ResponseEndBlock.toAmino(message.end_block) : undefined;
        obj.commit = message.commit ? exports.ResponseCommit.toAmino(message.commit) : undefined;
        obj.list_snapshots = message.list_snapshots ? exports.ResponseListSnapshots.toAmino(message.list_snapshots) : undefined;
        obj.offer_snapshot = message.offer_snapshot ? exports.ResponseOfferSnapshot.toAmino(message.offer_snapshot) : undefined;
        obj.load_snapshot_chunk = message.load_snapshot_chunk ? exports.ResponseLoadSnapshotChunk.toAmino(message.load_snapshot_chunk) : undefined;
        obj.apply_snapshot_chunk = message.apply_snapshot_chunk ? exports.ResponseApplySnapshotChunk.toAmino(message.apply_snapshot_chunk) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Response.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Response.decode(message.value);
    },
    toProto(message) {
        return exports.Response.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Response",
            value: exports.Response.encode(message).finish()
        };
    }
};
function createBaseResponseException() {
    return {
        error: ""
    };
}
exports.ResponseException = {
    typeUrl: "/tendermint.abci.ResponseException",
    encode(message, writer = _m0.Writer.create()) {
        if (message.error !== "") {
            writer.uint32(10).string(message.error);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseException();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.error = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            error: (0, helpers_1.isSet)(object.error) ? String(object.error) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.error !== undefined && (obj.error = message.error);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseException();
        message.error = object.error ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            error: object.error
        };
    },
    toAmino(message) {
        const obj = {};
        obj.error = message.error;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseException.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseException.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseException.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseException",
            value: exports.ResponseException.encode(message).finish()
        };
    }
};
function createBaseResponseEcho() {
    return {
        message: ""
    };
}
exports.ResponseEcho = {
    typeUrl: "/tendermint.abci.ResponseEcho",
    encode(message, writer = _m0.Writer.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseEcho();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            message: (0, helpers_1.isSet)(object.message) ? String(object.message) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseEcho();
        message.message = object.message ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            message: object.message
        };
    },
    toAmino(message) {
        const obj = {};
        obj.message = message.message;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseEcho.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseEcho.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseEcho.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseEcho",
            value: exports.ResponseEcho.encode(message).finish()
        };
    }
};
function createBaseResponseFlush() {
    return {};
}
exports.ResponseFlush = {
    typeUrl: "/tendermint.abci.ResponseFlush",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseFlush();
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseResponseFlush();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseFlush.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseFlush.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseFlush.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseFlush",
            value: exports.ResponseFlush.encode(message).finish()
        };
    }
};
function createBaseResponseInfo() {
    return {
        data: "",
        version: "",
        app_version: helpers_1.Long.UZERO,
        last_block_height: helpers_1.Long.ZERO,
        last_block_app_hash: new Uint8Array()
    };
}
exports.ResponseInfo = {
    typeUrl: "/tendermint.abci.ResponseInfo",
    encode(message, writer = _m0.Writer.create()) {
        if (message.data !== "") {
            writer.uint32(10).string(message.data);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        if (!message.app_version.isZero()) {
            writer.uint32(24).uint64(message.app_version);
        }
        if (!message.last_block_height.isZero()) {
            writer.uint32(32).int64(message.last_block_height);
        }
        if (message.last_block_app_hash.length !== 0) {
            writer.uint32(42).bytes(message.last_block_app_hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                case 3:
                    message.app_version = reader.uint64();
                    break;
                case 4:
                    message.last_block_height = reader.int64();
                    break;
                case 5:
                    message.last_block_app_hash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            data: (0, helpers_1.isSet)(object.data) ? String(object.data) : "",
            version: (0, helpers_1.isSet)(object.version) ? String(object.version) : "",
            app_version: (0, helpers_1.isSet)(object.app_version) ? helpers_1.Long.fromValue(object.app_version) : helpers_1.Long.UZERO,
            last_block_height: (0, helpers_1.isSet)(object.last_block_height) ? helpers_1.Long.fromValue(object.last_block_height) : helpers_1.Long.ZERO,
            last_block_app_hash: (0, helpers_1.isSet)(object.last_block_app_hash) ? (0, helpers_1.bytesFromBase64)(object.last_block_app_hash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = message.data);
        message.version !== undefined && (obj.version = message.version);
        message.app_version !== undefined && (obj.app_version = (message.app_version || helpers_1.Long.UZERO).toString());
        message.last_block_height !== undefined && (obj.last_block_height = (message.last_block_height || helpers_1.Long.ZERO).toString());
        message.last_block_app_hash !== undefined && (obj.last_block_app_hash = (0, helpers_1.base64FromBytes)(message.last_block_app_hash !== undefined ? message.last_block_app_hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseInfo();
        message.data = object.data ?? "";
        message.version = object.version ?? "";
        message.app_version = object.app_version !== undefined && object.app_version !== null ? helpers_1.Long.fromValue(object.app_version) : helpers_1.Long.UZERO;
        message.last_block_height = object.last_block_height !== undefined && object.last_block_height !== null ? helpers_1.Long.fromValue(object.last_block_height) : helpers_1.Long.ZERO;
        message.last_block_app_hash = object.last_block_app_hash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            data: object.data,
            version: object.version,
            app_version: helpers_1.Long.fromString(object.app_version),
            last_block_height: helpers_1.Long.fromString(object.last_block_height),
            last_block_app_hash: object.last_block_app_hash
        };
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data;
        obj.version = message.version;
        obj.app_version = message.app_version ? message.app_version.toString() : undefined;
        obj.last_block_height = message.last_block_height ? message.last_block_height.toString() : undefined;
        obj.last_block_app_hash = message.last_block_app_hash;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseInfo.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseInfo",
            value: exports.ResponseInfo.encode(message).finish()
        };
    }
};
function createBaseResponseSetOption() {
    return {
        code: 0,
        log: "",
        info: ""
    };
}
exports.ResponseSetOption = {
    typeUrl: "/tendermint.abci.ResponseSetOption",
    encode(message, writer = _m0.Writer.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseSetOption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            code: (0, helpers_1.isSet)(object.code) ? Number(object.code) : 0,
            log: (0, helpers_1.isSet)(object.log) ? String(object.log) : "",
            info: (0, helpers_1.isSet)(object.info) ? String(object.info) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseSetOption();
        message.code = object.code ?? 0;
        message.log = object.log ?? "";
        message.info = object.info ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            code: object.code,
            log: object.log,
            info: object.info
        };
    },
    toAmino(message) {
        const obj = {};
        obj.code = message.code;
        obj.log = message.log;
        obj.info = message.info;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseSetOption.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseSetOption.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseSetOption.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseSetOption",
            value: exports.ResponseSetOption.encode(message).finish()
        };
    }
};
function createBaseResponseInitChain() {
    return {
        consensus_params: exports.ConsensusParams.fromPartial({}),
        validators: [],
        app_hash: new Uint8Array()
    };
}
exports.ResponseInitChain = {
    typeUrl: "/tendermint.abci.ResponseInitChain",
    encode(message, writer = _m0.Writer.create()) {
        if (message.consensus_params !== undefined) {
            exports.ConsensusParams.encode(message.consensus_params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.validators) {
            exports.ValidatorUpdate.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.app_hash.length !== 0) {
            writer.uint32(26).bytes(message.app_hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseInitChain();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensus_params = exports.ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validators.push(exports.ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.app_hash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            consensus_params: (0, helpers_1.isSet)(object.consensus_params) ? exports.ConsensusParams.fromJSON(object.consensus_params) : undefined,
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => exports.ValidatorUpdate.fromJSON(e)) : [],
            app_hash: (0, helpers_1.isSet)(object.app_hash) ? (0, helpers_1.bytesFromBase64)(object.app_hash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.consensus_params !== undefined && (obj.consensus_params = message.consensus_params ? exports.ConsensusParams.toJSON(message.consensus_params) : undefined);
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.ValidatorUpdate.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.app_hash !== undefined && (obj.app_hash = (0, helpers_1.base64FromBytes)(message.app_hash !== undefined ? message.app_hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseInitChain();
        message.consensus_params = object.consensus_params !== undefined && object.consensus_params !== null ? exports.ConsensusParams.fromPartial(object.consensus_params) : undefined;
        message.validators = object.validators?.map(e => exports.ValidatorUpdate.fromPartial(e)) || [];
        message.app_hash = object.app_hash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            consensus_params: object?.consensus_params ? exports.ConsensusParams.fromAmino(object.consensus_params) : undefined,
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => exports.ValidatorUpdate.fromAmino(e)) : [],
            app_hash: object.app_hash
        };
    },
    toAmino(message) {
        const obj = {};
        obj.consensus_params = message.consensus_params ? exports.ConsensusParams.toAmino(message.consensus_params) : undefined;
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.ValidatorUpdate.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.app_hash = message.app_hash;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseInitChain.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseInitChain.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseInitChain.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseInitChain",
            value: exports.ResponseInitChain.encode(message).finish()
        };
    }
};
function createBaseResponseQuery() {
    return {
        code: 0,
        log: "",
        info: "",
        index: helpers_1.Long.ZERO,
        key: new Uint8Array(),
        value: new Uint8Array(),
        proof_ops: proof_1.ProofOps.fromPartial({}),
        height: helpers_1.Long.ZERO,
        codespace: ""
    };
}
exports.ResponseQuery = {
    typeUrl: "/tendermint.abci.ResponseQuery",
    encode(message, writer = _m0.Writer.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (!message.index.isZero()) {
            writer.uint32(40).int64(message.index);
        }
        if (message.key.length !== 0) {
            writer.uint32(50).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(58).bytes(message.value);
        }
        if (message.proof_ops !== undefined) {
            proof_1.ProofOps.encode(message.proof_ops, writer.uint32(66).fork()).ldelim();
        }
        if (!message.height.isZero()) {
            writer.uint32(72).int64(message.height);
        }
        if (message.codespace !== "") {
            writer.uint32(82).string(message.codespace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.index = reader.int64();
                    break;
                case 6:
                    message.key = reader.bytes();
                    break;
                case 7:
                    message.value = reader.bytes();
                    break;
                case 8:
                    message.proof_ops = proof_1.ProofOps.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.height = reader.int64();
                    break;
                case 10:
                    message.codespace = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            code: (0, helpers_1.isSet)(object.code) ? Number(object.code) : 0,
            log: (0, helpers_1.isSet)(object.log) ? String(object.log) : "",
            info: (0, helpers_1.isSet)(object.info) ? String(object.info) : "",
            index: (0, helpers_1.isSet)(object.index) ? helpers_1.Long.fromValue(object.index) : helpers_1.Long.ZERO,
            key: (0, helpers_1.isSet)(object.key) ? (0, helpers_1.bytesFromBase64)(object.key) : new Uint8Array(),
            value: (0, helpers_1.isSet)(object.value) ? (0, helpers_1.bytesFromBase64)(object.value) : new Uint8Array(),
            proof_ops: (0, helpers_1.isSet)(object.proof_ops) ? proof_1.ProofOps.fromJSON(object.proof_ops) : undefined,
            height: (0, helpers_1.isSet)(object.height) ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO,
            codespace: (0, helpers_1.isSet)(object.codespace) ? String(object.codespace) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        message.index !== undefined && (obj.index = (message.index || helpers_1.Long.ZERO).toString());
        message.key !== undefined && (obj.key = (0, helpers_1.base64FromBytes)(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined && (obj.value = (0, helpers_1.base64FromBytes)(message.value !== undefined ? message.value : new Uint8Array()));
        message.proof_ops !== undefined && (obj.proof_ops = message.proof_ops ? proof_1.ProofOps.toJSON(message.proof_ops) : undefined);
        message.height !== undefined && (obj.height = (message.height || helpers_1.Long.ZERO).toString());
        message.codespace !== undefined && (obj.codespace = message.codespace);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseQuery();
        message.code = object.code ?? 0;
        message.log = object.log ?? "";
        message.info = object.info ?? "";
        message.index = object.index !== undefined && object.index !== null ? helpers_1.Long.fromValue(object.index) : helpers_1.Long.ZERO;
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        message.proof_ops = object.proof_ops !== undefined && object.proof_ops !== null ? proof_1.ProofOps.fromPartial(object.proof_ops) : undefined;
        message.height = object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO;
        message.codespace = object.codespace ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            code: object.code,
            log: object.log,
            info: object.info,
            index: helpers_1.Long.fromString(object.index),
            key: object.key,
            value: object.value,
            proof_ops: object?.proof_ops ? proof_1.ProofOps.fromAmino(object.proof_ops) : undefined,
            height: helpers_1.Long.fromString(object.height),
            codespace: object.codespace
        };
    },
    toAmino(message) {
        const obj = {};
        obj.code = message.code;
        obj.log = message.log;
        obj.info = message.info;
        obj.index = message.index ? message.index.toString() : undefined;
        obj.key = message.key;
        obj.value = message.value;
        obj.proof_ops = message.proof_ops ? proof_1.ProofOps.toAmino(message.proof_ops) : undefined;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.codespace = message.codespace;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseQuery.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseQuery.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseQuery.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseQuery",
            value: exports.ResponseQuery.encode(message).finish()
        };
    }
};
function createBaseResponseBeginBlock() {
    return {
        events: []
    };
}
exports.ResponseBeginBlock = {
    typeUrl: "/tendermint.abci.ResponseBeginBlock",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.events) {
            exports.Event.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseBeginBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            events: Array.isArray(object?.events) ? object.events.map((e) => exports.Event.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.Event.toJSON(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseBeginBlock();
        message.events = object.events?.map(e => exports.Event.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            events: Array.isArray(object?.events) ? object.events.map((e) => exports.Event.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.Event.toAmino(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseBeginBlock.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseBeginBlock.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseBeginBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseBeginBlock",
            value: exports.ResponseBeginBlock.encode(message).finish()
        };
    }
};
function createBaseResponseCheckTx() {
    return {
        code: 0,
        data: new Uint8Array(),
        log: "",
        info: "",
        gas_wanted: helpers_1.Long.ZERO,
        gas_used: helpers_1.Long.ZERO,
        events: [],
        codespace: ""
    };
}
exports.ResponseCheckTx = {
    typeUrl: "/tendermint.abci.ResponseCheckTx",
    encode(message, writer = _m0.Writer.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (!message.gas_wanted.isZero()) {
            writer.uint32(40).int64(message.gas_wanted);
        }
        if (!message.gas_used.isZero()) {
            writer.uint32(48).int64(message.gas_used);
        }
        for (const v of message.events) {
            exports.Event.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.codespace !== "") {
            writer.uint32(66).string(message.codespace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseCheckTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.gas_wanted = reader.int64();
                    break;
                case 6:
                    message.gas_used = reader.int64();
                    break;
                case 7:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.codespace = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            code: (0, helpers_1.isSet)(object.code) ? Number(object.code) : 0,
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array(),
            log: (0, helpers_1.isSet)(object.log) ? String(object.log) : "",
            info: (0, helpers_1.isSet)(object.info) ? String(object.info) : "",
            gas_wanted: (0, helpers_1.isSet)(object.gas_wanted) ? helpers_1.Long.fromValue(object.gas_wanted) : helpers_1.Long.ZERO,
            gas_used: (0, helpers_1.isSet)(object.gas_used) ? helpers_1.Long.fromValue(object.gas_used) : helpers_1.Long.ZERO,
            events: Array.isArray(object?.events) ? object.events.map((e) => exports.Event.fromJSON(e)) : [],
            codespace: (0, helpers_1.isSet)(object.codespace) ? String(object.codespace) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        message.gas_wanted !== undefined && (obj.gas_wanted = (message.gas_wanted || helpers_1.Long.ZERO).toString());
        message.gas_used !== undefined && (obj.gas_used = (message.gas_used || helpers_1.Long.ZERO).toString());
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.Event.toJSON(e) : undefined);
        }
        else {
            obj.events = [];
        }
        message.codespace !== undefined && (obj.codespace = message.codespace);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseCheckTx();
        message.code = object.code ?? 0;
        message.data = object.data ?? new Uint8Array();
        message.log = object.log ?? "";
        message.info = object.info ?? "";
        message.gas_wanted = object.gas_wanted !== undefined && object.gas_wanted !== null ? helpers_1.Long.fromValue(object.gas_wanted) : helpers_1.Long.ZERO;
        message.gas_used = object.gas_used !== undefined && object.gas_used !== null ? helpers_1.Long.fromValue(object.gas_used) : helpers_1.Long.ZERO;
        message.events = object.events?.map(e => exports.Event.fromPartial(e)) || [];
        message.codespace = object.codespace ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            code: object.code,
            data: object.data,
            log: object.log,
            info: object.info,
            gas_wanted: helpers_1.Long.fromString(object.gas_wanted),
            gas_used: helpers_1.Long.fromString(object.gas_used),
            events: Array.isArray(object?.events) ? object.events.map((e) => exports.Event.fromAmino(e)) : [],
            codespace: object.codespace
        };
    },
    toAmino(message) {
        const obj = {};
        obj.code = message.code;
        obj.data = message.data;
        obj.log = message.log;
        obj.info = message.info;
        obj.gas_wanted = message.gas_wanted ? message.gas_wanted.toString() : undefined;
        obj.gas_used = message.gas_used ? message.gas_used.toString() : undefined;
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.Event.toAmino(e) : undefined);
        }
        else {
            obj.events = [];
        }
        obj.codespace = message.codespace;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseCheckTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseCheckTx.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseCheckTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseCheckTx",
            value: exports.ResponseCheckTx.encode(message).finish()
        };
    }
};
function createBaseResponseDeliverTx() {
    return {
        code: 0,
        data: new Uint8Array(),
        log: "",
        info: "",
        gas_wanted: helpers_1.Long.ZERO,
        gas_used: helpers_1.Long.ZERO,
        events: [],
        codespace: ""
    };
}
exports.ResponseDeliverTx = {
    typeUrl: "/tendermint.abci.ResponseDeliverTx",
    encode(message, writer = _m0.Writer.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (!message.gas_wanted.isZero()) {
            writer.uint32(40).int64(message.gas_wanted);
        }
        if (!message.gas_used.isZero()) {
            writer.uint32(48).int64(message.gas_used);
        }
        for (const v of message.events) {
            exports.Event.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.codespace !== "") {
            writer.uint32(66).string(message.codespace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseDeliverTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.gas_wanted = reader.int64();
                    break;
                case 6:
                    message.gas_used = reader.int64();
                    break;
                case 7:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.codespace = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            code: (0, helpers_1.isSet)(object.code) ? Number(object.code) : 0,
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array(),
            log: (0, helpers_1.isSet)(object.log) ? String(object.log) : "",
            info: (0, helpers_1.isSet)(object.info) ? String(object.info) : "",
            gas_wanted: (0, helpers_1.isSet)(object.gas_wanted) ? helpers_1.Long.fromValue(object.gas_wanted) : helpers_1.Long.ZERO,
            gas_used: (0, helpers_1.isSet)(object.gas_used) ? helpers_1.Long.fromValue(object.gas_used) : helpers_1.Long.ZERO,
            events: Array.isArray(object?.events) ? object.events.map((e) => exports.Event.fromJSON(e)) : [],
            codespace: (0, helpers_1.isSet)(object.codespace) ? String(object.codespace) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        message.gas_wanted !== undefined && (obj.gas_wanted = (message.gas_wanted || helpers_1.Long.ZERO).toString());
        message.gas_used !== undefined && (obj.gas_used = (message.gas_used || helpers_1.Long.ZERO).toString());
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.Event.toJSON(e) : undefined);
        }
        else {
            obj.events = [];
        }
        message.codespace !== undefined && (obj.codespace = message.codespace);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseDeliverTx();
        message.code = object.code ?? 0;
        message.data = object.data ?? new Uint8Array();
        message.log = object.log ?? "";
        message.info = object.info ?? "";
        message.gas_wanted = object.gas_wanted !== undefined && object.gas_wanted !== null ? helpers_1.Long.fromValue(object.gas_wanted) : helpers_1.Long.ZERO;
        message.gas_used = object.gas_used !== undefined && object.gas_used !== null ? helpers_1.Long.fromValue(object.gas_used) : helpers_1.Long.ZERO;
        message.events = object.events?.map(e => exports.Event.fromPartial(e)) || [];
        message.codespace = object.codespace ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            code: object.code,
            data: object.data,
            log: object.log,
            info: object.info,
            gas_wanted: helpers_1.Long.fromString(object.gas_wanted),
            gas_used: helpers_1.Long.fromString(object.gas_used),
            events: Array.isArray(object?.events) ? object.events.map((e) => exports.Event.fromAmino(e)) : [],
            codespace: object.codespace
        };
    },
    toAmino(message) {
        const obj = {};
        obj.code = message.code;
        obj.data = message.data;
        obj.log = message.log;
        obj.info = message.info;
        obj.gas_wanted = message.gas_wanted ? message.gas_wanted.toString() : undefined;
        obj.gas_used = message.gas_used ? message.gas_used.toString() : undefined;
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.Event.toAmino(e) : undefined);
        }
        else {
            obj.events = [];
        }
        obj.codespace = message.codespace;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseDeliverTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseDeliverTx.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseDeliverTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseDeliverTx",
            value: exports.ResponseDeliverTx.encode(message).finish()
        };
    }
};
function createBaseResponseEndBlock() {
    return {
        validator_updates: [],
        consensus_param_updates: exports.ConsensusParams.fromPartial({}),
        events: []
    };
}
exports.ResponseEndBlock = {
    typeUrl: "/tendermint.abci.ResponseEndBlock",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.validator_updates) {
            exports.ValidatorUpdate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.consensus_param_updates !== undefined) {
            exports.ConsensusParams.encode(message.consensus_param_updates, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.events) {
            exports.Event.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseEndBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_updates.push(exports.ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.consensus_param_updates = exports.ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            validator_updates: Array.isArray(object?.validator_updates) ? object.validator_updates.map((e) => exports.ValidatorUpdate.fromJSON(e)) : [],
            consensus_param_updates: (0, helpers_1.isSet)(object.consensus_param_updates) ? exports.ConsensusParams.fromJSON(object.consensus_param_updates) : undefined,
            events: Array.isArray(object?.events) ? object.events.map((e) => exports.Event.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validator_updates) {
            obj.validator_updates = message.validator_updates.map(e => e ? exports.ValidatorUpdate.toJSON(e) : undefined);
        }
        else {
            obj.validator_updates = [];
        }
        message.consensus_param_updates !== undefined && (obj.consensus_param_updates = message.consensus_param_updates ? exports.ConsensusParams.toJSON(message.consensus_param_updates) : undefined);
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.Event.toJSON(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseEndBlock();
        message.validator_updates = object.validator_updates?.map(e => exports.ValidatorUpdate.fromPartial(e)) || [];
        message.consensus_param_updates = object.consensus_param_updates !== undefined && object.consensus_param_updates !== null ? exports.ConsensusParams.fromPartial(object.consensus_param_updates) : undefined;
        message.events = object.events?.map(e => exports.Event.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            validator_updates: Array.isArray(object?.validator_updates) ? object.validator_updates.map((e) => exports.ValidatorUpdate.fromAmino(e)) : [],
            consensus_param_updates: object?.consensus_param_updates ? exports.ConsensusParams.fromAmino(object.consensus_param_updates) : undefined,
            events: Array.isArray(object?.events) ? object.events.map((e) => exports.Event.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.validator_updates) {
            obj.validator_updates = message.validator_updates.map(e => e ? exports.ValidatorUpdate.toAmino(e) : undefined);
        }
        else {
            obj.validator_updates = [];
        }
        obj.consensus_param_updates = message.consensus_param_updates ? exports.ConsensusParams.toAmino(message.consensus_param_updates) : undefined;
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.Event.toAmino(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseEndBlock.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseEndBlock.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseEndBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseEndBlock",
            value: exports.ResponseEndBlock.encode(message).finish()
        };
    }
};
function createBaseResponseCommit() {
    return {
        data: new Uint8Array(),
        retain_height: helpers_1.Long.ZERO
    };
}
exports.ResponseCommit = {
    typeUrl: "/tendermint.abci.ResponseCommit",
    encode(message, writer = _m0.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (!message.retain_height.isZero()) {
            writer.uint32(24).int64(message.retain_height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseCommit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.retain_height = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array(),
            retain_height: (0, helpers_1.isSet)(object.retain_height) ? helpers_1.Long.fromValue(object.retain_height) : helpers_1.Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        message.retain_height !== undefined && (obj.retain_height = (message.retain_height || helpers_1.Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseCommit();
        message.data = object.data ?? new Uint8Array();
        message.retain_height = object.retain_height !== undefined && object.retain_height !== null ? helpers_1.Long.fromValue(object.retain_height) : helpers_1.Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            data: object.data,
            retain_height: helpers_1.Long.fromString(object.retain_height)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data;
        obj.retain_height = message.retain_height ? message.retain_height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseCommit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseCommit.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseCommit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseCommit",
            value: exports.ResponseCommit.encode(message).finish()
        };
    }
};
function createBaseResponseListSnapshots() {
    return {
        snapshots: []
    };
}
exports.ResponseListSnapshots = {
    typeUrl: "/tendermint.abci.ResponseListSnapshots",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.snapshots) {
            exports.Snapshot.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseListSnapshots();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshots.push(exports.Snapshot.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            snapshots: Array.isArray(object?.snapshots) ? object.snapshots.map((e) => exports.Snapshot.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.snapshots) {
            obj.snapshots = message.snapshots.map(e => e ? exports.Snapshot.toJSON(e) : undefined);
        }
        else {
            obj.snapshots = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseListSnapshots();
        message.snapshots = object.snapshots?.map(e => exports.Snapshot.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            snapshots: Array.isArray(object?.snapshots) ? object.snapshots.map((e) => exports.Snapshot.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.snapshots) {
            obj.snapshots = message.snapshots.map(e => e ? exports.Snapshot.toAmino(e) : undefined);
        }
        else {
            obj.snapshots = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseListSnapshots.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseListSnapshots.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseListSnapshots.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseListSnapshots",
            value: exports.ResponseListSnapshots.encode(message).finish()
        };
    }
};
function createBaseResponseOfferSnapshot() {
    return {
        result: 0
    };
}
exports.ResponseOfferSnapshot = {
    typeUrl: "/tendermint.abci.ResponseOfferSnapshot",
    encode(message, writer = _m0.Writer.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseOfferSnapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            result: (0, helpers_1.isSet)(object.result) ? responseOfferSnapshot_ResultFromJSON(object.result) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = responseOfferSnapshot_ResultToJSON(message.result));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseOfferSnapshot();
        message.result = object.result ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            result: (0, helpers_1.isSet)(object.result) ? responseOfferSnapshot_ResultFromJSON(object.result) : -1
        };
    },
    toAmino(message) {
        const obj = {};
        obj.result = message.result;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseOfferSnapshot.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseOfferSnapshot.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseOfferSnapshot.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseOfferSnapshot",
            value: exports.ResponseOfferSnapshot.encode(message).finish()
        };
    }
};
function createBaseResponseLoadSnapshotChunk() {
    return {
        chunk: new Uint8Array()
    };
}
exports.ResponseLoadSnapshotChunk = {
    typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chunk.length !== 0) {
            writer.uint32(10).bytes(message.chunk);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseLoadSnapshotChunk();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chunk = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            chunk: (0, helpers_1.isSet)(object.chunk) ? (0, helpers_1.bytesFromBase64)(object.chunk) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.chunk !== undefined && (obj.chunk = (0, helpers_1.base64FromBytes)(message.chunk !== undefined ? message.chunk : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseLoadSnapshotChunk();
        message.chunk = object.chunk ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            chunk: object.chunk
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chunk = message.chunk;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseLoadSnapshotChunk.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseLoadSnapshotChunk.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseLoadSnapshotChunk.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk",
            value: exports.ResponseLoadSnapshotChunk.encode(message).finish()
        };
    }
};
function createBaseResponseApplySnapshotChunk() {
    return {
        result: 0,
        refetch_chunks: [],
        reject_senders: []
    };
}
exports.ResponseApplySnapshotChunk = {
    typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk",
    encode(message, writer = _m0.Writer.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        writer.uint32(18).fork();
        for (const v of message.refetch_chunks) {
            writer.uint32(v);
        }
        writer.ldelim();
        for (const v of message.reject_senders) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseApplySnapshotChunk();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.refetch_chunks.push(reader.uint32());
                        }
                    }
                    else {
                        message.refetch_chunks.push(reader.uint32());
                    }
                    break;
                case 3:
                    message.reject_senders.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            result: (0, helpers_1.isSet)(object.result) ? responseApplySnapshotChunk_ResultFromJSON(object.result) : -1,
            refetch_chunks: Array.isArray(object?.refetch_chunks) ? object.refetch_chunks.map((e) => Number(e)) : [],
            reject_senders: Array.isArray(object?.reject_senders) ? object.reject_senders.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = responseApplySnapshotChunk_ResultToJSON(message.result));
        if (message.refetch_chunks) {
            obj.refetch_chunks = message.refetch_chunks.map(e => Math.round(e));
        }
        else {
            obj.refetch_chunks = [];
        }
        if (message.reject_senders) {
            obj.reject_senders = message.reject_senders.map(e => e);
        }
        else {
            obj.reject_senders = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseApplySnapshotChunk();
        message.result = object.result ?? 0;
        message.refetch_chunks = object.refetch_chunks?.map(e => e) || [];
        message.reject_senders = object.reject_senders?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            result: (0, helpers_1.isSet)(object.result) ? responseApplySnapshotChunk_ResultFromJSON(object.result) : -1,
            refetch_chunks: Array.isArray(object?.refetch_chunks) ? object.refetch_chunks.map((e) => e) : [],
            reject_senders: Array.isArray(object?.reject_senders) ? object.reject_senders.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.result = message.result;
        if (message.refetch_chunks) {
            obj.refetch_chunks = message.refetch_chunks.map(e => e);
        }
        else {
            obj.refetch_chunks = [];
        }
        if (message.reject_senders) {
            obj.reject_senders = message.reject_senders.map(e => e);
        }
        else {
            obj.reject_senders = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseApplySnapshotChunk.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseApplySnapshotChunk.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseApplySnapshotChunk.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk",
            value: exports.ResponseApplySnapshotChunk.encode(message).finish()
        };
    }
};
function createBaseConsensusParams() {
    return {
        block: exports.BlockParams.fromPartial({}),
        evidence: params_1.EvidenceParams.fromPartial({}),
        validator: params_1.ValidatorParams.fromPartial({}),
        version: params_1.VersionParams.fromPartial({})
    };
}
exports.ConsensusParams = {
    typeUrl: "/tendermint.abci.ConsensusParams",
    encode(message, writer = _m0.Writer.create()) {
        if (message.block !== undefined) {
            exports.BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            params_1.EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
        }
        if (message.validator !== undefined) {
            params_1.ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
        }
        if (message.version !== undefined) {
            params_1.VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block = exports.BlockParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.evidence = params_1.EvidenceParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.validator = params_1.ValidatorParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.version = params_1.VersionParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            block: (0, helpers_1.isSet)(object.block) ? exports.BlockParams.fromJSON(object.block) : undefined,
            evidence: (0, helpers_1.isSet)(object.evidence) ? params_1.EvidenceParams.fromJSON(object.evidence) : undefined,
            validator: (0, helpers_1.isSet)(object.validator) ? params_1.ValidatorParams.fromJSON(object.validator) : undefined,
            version: (0, helpers_1.isSet)(object.version) ? params_1.VersionParams.fromJSON(object.version) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.block !== undefined && (obj.block = message.block ? exports.BlockParams.toJSON(message.block) : undefined);
        message.evidence !== undefined && (obj.evidence = message.evidence ? params_1.EvidenceParams.toJSON(message.evidence) : undefined);
        message.validator !== undefined && (obj.validator = message.validator ? params_1.ValidatorParams.toJSON(message.validator) : undefined);
        message.version !== undefined && (obj.version = message.version ? params_1.VersionParams.toJSON(message.version) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConsensusParams();
        message.block = object.block !== undefined && object.block !== null ? exports.BlockParams.fromPartial(object.block) : undefined;
        message.evidence = object.evidence !== undefined && object.evidence !== null ? params_1.EvidenceParams.fromPartial(object.evidence) : undefined;
        message.validator = object.validator !== undefined && object.validator !== null ? params_1.ValidatorParams.fromPartial(object.validator) : undefined;
        message.version = object.version !== undefined && object.version !== null ? params_1.VersionParams.fromPartial(object.version) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            block: object?.block ? exports.BlockParams.fromAmino(object.block) : undefined,
            evidence: object?.evidence ? params_1.EvidenceParams.fromAmino(object.evidence) : undefined,
            validator: object?.validator ? params_1.ValidatorParams.fromAmino(object.validator) : undefined,
            version: object?.version ? params_1.VersionParams.fromAmino(object.version) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.block = message.block ? exports.BlockParams.toAmino(message.block) : undefined;
        obj.evidence = message.evidence ? params_1.EvidenceParams.toAmino(message.evidence) : undefined;
        obj.validator = message.validator ? params_1.ValidatorParams.toAmino(message.validator) : undefined;
        obj.version = message.version ? params_1.VersionParams.toAmino(message.version) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConsensusParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ConsensusParams.decode(message.value);
    },
    toProto(message) {
        return exports.ConsensusParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ConsensusParams",
            value: exports.ConsensusParams.encode(message).finish()
        };
    }
};
function createBaseBlockParams() {
    return {
        max_bytes: helpers_1.Long.ZERO,
        max_gas: helpers_1.Long.ZERO
    };
}
exports.BlockParams = {
    typeUrl: "/tendermint.abci.BlockParams",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.max_bytes.isZero()) {
            writer.uint32(8).int64(message.max_bytes);
        }
        if (!message.max_gas.isZero()) {
            writer.uint32(16).int64(message.max_gas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.max_bytes = reader.int64();
                    break;
                case 2:
                    message.max_gas = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            max_bytes: (0, helpers_1.isSet)(object.max_bytes) ? helpers_1.Long.fromValue(object.max_bytes) : helpers_1.Long.ZERO,
            max_gas: (0, helpers_1.isSet)(object.max_gas) ? helpers_1.Long.fromValue(object.max_gas) : helpers_1.Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.max_bytes !== undefined && (obj.max_bytes = (message.max_bytes || helpers_1.Long.ZERO).toString());
        message.max_gas !== undefined && (obj.max_gas = (message.max_gas || helpers_1.Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBlockParams();
        message.max_bytes = object.max_bytes !== undefined && object.max_bytes !== null ? helpers_1.Long.fromValue(object.max_bytes) : helpers_1.Long.ZERO;
        message.max_gas = object.max_gas !== undefined && object.max_gas !== null ? helpers_1.Long.fromValue(object.max_gas) : helpers_1.Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            max_bytes: helpers_1.Long.fromString(object.max_bytes),
            max_gas: helpers_1.Long.fromString(object.max_gas)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.max_bytes = message.max_bytes ? message.max_bytes.toString() : undefined;
        obj.max_gas = message.max_gas ? message.max_gas.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BlockParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BlockParams.decode(message.value);
    },
    toProto(message) {
        return exports.BlockParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.BlockParams",
            value: exports.BlockParams.encode(message).finish()
        };
    }
};
function createBaseLastCommitInfo() {
    return {
        round: 0,
        votes: []
    };
}
exports.LastCommitInfo = {
    typeUrl: "/tendermint.abci.LastCommitInfo",
    encode(message, writer = _m0.Writer.create()) {
        if (message.round !== 0) {
            writer.uint32(8).int32(message.round);
        }
        for (const v of message.votes) {
            exports.VoteInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLastCommitInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.round = reader.int32();
                    break;
                case 2:
                    message.votes.push(exports.VoteInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            round: (0, helpers_1.isSet)(object.round) ? Number(object.round) : 0,
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => exports.VoteInfo.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.round !== undefined && (obj.round = Math.round(message.round));
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? exports.VoteInfo.toJSON(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLastCommitInfo();
        message.round = object.round ?? 0;
        message.votes = object.votes?.map(e => exports.VoteInfo.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            round: object.round,
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => exports.VoteInfo.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.round = message.round;
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? exports.VoteInfo.toAmino(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.LastCommitInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.LastCommitInfo.decode(message.value);
    },
    toProto(message) {
        return exports.LastCommitInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.LastCommitInfo",
            value: exports.LastCommitInfo.encode(message).finish()
        };
    }
};
function createBaseEvent() {
    return {
        type: "",
        attributes: []
    };
}
exports.Event = {
    typeUrl: "/tendermint.abci.Event",
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        for (const v of message.attributes) {
            exports.EventAttribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.attributes.push(exports.EventAttribute.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            type: (0, helpers_1.isSet)(object.type) ? String(object.type) : "",
            attributes: Array.isArray(object?.attributes) ? object.attributes.map((e) => exports.EventAttribute.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? exports.EventAttribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEvent();
        message.type = object.type ?? "";
        message.attributes = object.attributes?.map(e => exports.EventAttribute.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            type: object.type,
            attributes: Array.isArray(object?.attributes) ? object.attributes.map((e) => exports.EventAttribute.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type;
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? exports.EventAttribute.toAmino(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Event.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Event.decode(message.value);
    },
    toProto(message) {
        return exports.Event.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Event",
            value: exports.Event.encode(message).finish()
        };
    }
};
function createBaseEventAttribute() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array(),
        index: false
    };
}
exports.EventAttribute = {
    typeUrl: "/tendermint.abci.EventAttribute",
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        if (message.index === true) {
            writer.uint32(24).bool(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventAttribute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                case 3:
                    message.index = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            key: (0, helpers_1.isSet)(object.key) ? (0, helpers_1.bytesFromBase64)(object.key) : new Uint8Array(),
            value: (0, helpers_1.isSet)(object.value) ? (0, helpers_1.bytesFromBase64)(object.value) : new Uint8Array(),
            index: (0, helpers_1.isSet)(object.index) ? Boolean(object.index) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = (0, helpers_1.base64FromBytes)(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined && (obj.value = (0, helpers_1.base64FromBytes)(message.value !== undefined ? message.value : new Uint8Array()));
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventAttribute();
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        message.index = object.index ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            key: object.key,
            value: object.value,
            index: object.index
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        obj.index = message.index;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventAttribute.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventAttribute.decode(message.value);
    },
    toProto(message) {
        return exports.EventAttribute.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.EventAttribute",
            value: exports.EventAttribute.encode(message).finish()
        };
    }
};
function createBaseTxResult() {
    return {
        height: helpers_1.Long.ZERO,
        index: 0,
        tx: new Uint8Array(),
        result: exports.ResponseDeliverTx.fromPartial({})
    };
}
exports.TxResult = {
    typeUrl: "/tendermint.abci.TxResult",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        if (message.index !== 0) {
            writer.uint32(16).uint32(message.index);
        }
        if (message.tx.length !== 0) {
            writer.uint32(26).bytes(message.tx);
        }
        if (message.result !== undefined) {
            exports.ResponseDeliverTx.encode(message.result, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.index = reader.uint32();
                    break;
                case 3:
                    message.tx = reader.bytes();
                    break;
                case 4:
                    message.result = exports.ResponseDeliverTx.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            height: (0, helpers_1.isSet)(object.height) ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO,
            index: (0, helpers_1.isSet)(object.index) ? Number(object.index) : 0,
            tx: (0, helpers_1.isSet)(object.tx) ? (0, helpers_1.bytesFromBase64)(object.tx) : new Uint8Array(),
            result: (0, helpers_1.isSet)(object.result) ? exports.ResponseDeliverTx.fromJSON(object.result) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || helpers_1.Long.ZERO).toString());
        message.index !== undefined && (obj.index = Math.round(message.index));
        message.tx !== undefined && (obj.tx = (0, helpers_1.base64FromBytes)(message.tx !== undefined ? message.tx : new Uint8Array()));
        message.result !== undefined && (obj.result = message.result ? exports.ResponseDeliverTx.toJSON(message.result) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxResult();
        message.height = object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO;
        message.index = object.index ?? 0;
        message.tx = object.tx ?? new Uint8Array();
        message.result = object.result !== undefined && object.result !== null ? exports.ResponseDeliverTx.fromPartial(object.result) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            height: helpers_1.Long.fromString(object.height),
            index: object.index,
            tx: object.tx,
            result: object?.result ? exports.ResponseDeliverTx.fromAmino(object.result) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.index = message.index;
        obj.tx = message.tx;
        obj.result = message.result ? exports.ResponseDeliverTx.toAmino(message.result) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TxResult.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.TxResult.decode(message.value);
    },
    toProto(message) {
        return exports.TxResult.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.TxResult",
            value: exports.TxResult.encode(message).finish()
        };
    }
};
function createBaseValidator() {
    return {
        address: new Uint8Array(),
        power: helpers_1.Long.ZERO
    };
}
exports.Validator = {
    typeUrl: "/tendermint.abci.Validator",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address.length !== 0) {
            writer.uint32(10).bytes(message.address);
        }
        if (!message.power.isZero()) {
            writer.uint32(24).int64(message.power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.bytes();
                    break;
                case 3:
                    message.power = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            address: (0, helpers_1.isSet)(object.address) ? (0, helpers_1.bytesFromBase64)(object.address) : new Uint8Array(),
            power: (0, helpers_1.isSet)(object.power) ? helpers_1.Long.fromValue(object.power) : helpers_1.Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = (0, helpers_1.base64FromBytes)(message.address !== undefined ? message.address : new Uint8Array()));
        message.power !== undefined && (obj.power = (message.power || helpers_1.Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidator();
        message.address = object.address ?? new Uint8Array();
        message.power = object.power !== undefined && object.power !== null ? helpers_1.Long.fromValue(object.power) : helpers_1.Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            power: helpers_1.Long.fromString(object.power)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.power = message.power ? message.power.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Validator.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Validator.decode(message.value);
    },
    toProto(message) {
        return exports.Validator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Validator",
            value: exports.Validator.encode(message).finish()
        };
    }
};
function createBaseValidatorUpdate() {
    return {
        pub_key: keys_1.PublicKey.fromPartial({}),
        power: helpers_1.Long.ZERO
    };
}
exports.ValidatorUpdate = {
    typeUrl: "/tendermint.abci.ValidatorUpdate",
    encode(message, writer = _m0.Writer.create()) {
        if (message.pub_key !== undefined) {
            keys_1.PublicKey.encode(message.pub_key, writer.uint32(10).fork()).ldelim();
        }
        if (!message.power.isZero()) {
            writer.uint32(16).int64(message.power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pub_key = keys_1.PublicKey.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.power = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            pub_key: (0, helpers_1.isSet)(object.pub_key) ? keys_1.PublicKey.fromJSON(object.pub_key) : undefined,
            power: (0, helpers_1.isSet)(object.power) ? helpers_1.Long.fromValue(object.power) : helpers_1.Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.pub_key !== undefined && (obj.pub_key = message.pub_key ? keys_1.PublicKey.toJSON(message.pub_key) : undefined);
        message.power !== undefined && (obj.power = (message.power || helpers_1.Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorUpdate();
        message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? keys_1.PublicKey.fromPartial(object.pub_key) : undefined;
        message.power = object.power !== undefined && object.power !== null ? helpers_1.Long.fromValue(object.power) : helpers_1.Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            pub_key: object?.pub_key ? keys_1.PublicKey.fromAmino(object.pub_key) : undefined,
            power: helpers_1.Long.fromString(object.power)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pub_key = message.pub_key ? keys_1.PublicKey.toAmino(message.pub_key) : undefined;
        obj.power = message.power ? message.power.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorUpdate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ValidatorUpdate.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorUpdate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ValidatorUpdate",
            value: exports.ValidatorUpdate.encode(message).finish()
        };
    }
};
function createBaseVoteInfo() {
    return {
        validator: exports.Validator.fromPartial({}),
        signed_last_block: false
    };
}
exports.VoteInfo = {
    typeUrl: "/tendermint.abci.VoteInfo",
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator !== undefined) {
            exports.Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        if (message.signed_last_block === true) {
            writer.uint32(16).bool(message.signed_last_block);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVoteInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = exports.Validator.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signed_last_block = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            validator: (0, helpers_1.isSet)(object.validator) ? exports.Validator.fromJSON(object.validator) : undefined,
            signed_last_block: (0, helpers_1.isSet)(object.signed_last_block) ? Boolean(object.signed_last_block) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator !== undefined && (obj.validator = message.validator ? exports.Validator.toJSON(message.validator) : undefined);
        message.signed_last_block !== undefined && (obj.signed_last_block = message.signed_last_block);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVoteInfo();
        message.validator = object.validator !== undefined && object.validator !== null ? exports.Validator.fromPartial(object.validator) : undefined;
        message.signed_last_block = object.signed_last_block ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            validator: object?.validator ? exports.Validator.fromAmino(object.validator) : undefined,
            signed_last_block: object.signed_last_block
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator = message.validator ? exports.Validator.toAmino(message.validator) : undefined;
        obj.signed_last_block = message.signed_last_block;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.VoteInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.VoteInfo.decode(message.value);
    },
    toProto(message) {
        return exports.VoteInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.VoteInfo",
            value: exports.VoteInfo.encode(message).finish()
        };
    }
};
function createBaseEvidence() {
    return {
        type: 0,
        validator: exports.Validator.fromPartial({}),
        height: helpers_1.Long.ZERO,
        time: new Date(),
        total_voting_power: helpers_1.Long.ZERO
    };
}
exports.Evidence = {
    typeUrl: "/tendermint.abci.Evidence",
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.validator !== undefined) {
            exports.Validator.encode(message.validator, writer.uint32(18).fork()).ldelim();
        }
        if (!message.height.isZero()) {
            writer.uint32(24).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.time), writer.uint32(34).fork()).ldelim();
        }
        if (!message.total_voting_power.isZero()) {
            writer.uint32(40).int64(message.total_voting_power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvidence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.validator = exports.Validator.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.total_voting_power = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            type: (0, helpers_1.isSet)(object.type) ? evidenceTypeFromJSON(object.type) : -1,
            validator: (0, helpers_1.isSet)(object.validator) ? exports.Validator.fromJSON(object.validator) : undefined,
            height: (0, helpers_1.isSet)(object.height) ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO,
            time: (0, helpers_1.isSet)(object.time) ? (0, helpers_1.fromJsonTimestamp)(object.time) : undefined,
            total_voting_power: (0, helpers_1.isSet)(object.total_voting_power) ? helpers_1.Long.fromValue(object.total_voting_power) : helpers_1.Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = evidenceTypeToJSON(message.type));
        message.validator !== undefined && (obj.validator = message.validator ? exports.Validator.toJSON(message.validator) : undefined);
        message.height !== undefined && (obj.height = (message.height || helpers_1.Long.ZERO).toString());
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.total_voting_power !== undefined && (obj.total_voting_power = (message.total_voting_power || helpers_1.Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEvidence();
        message.type = object.type ?? 0;
        message.validator = object.validator !== undefined && object.validator !== null ? exports.Validator.fromPartial(object.validator) : undefined;
        message.height = object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO;
        message.time = object.time ?? undefined;
        message.total_voting_power = object.total_voting_power !== undefined && object.total_voting_power !== null ? helpers_1.Long.fromValue(object.total_voting_power) : helpers_1.Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            type: (0, helpers_1.isSet)(object.type) ? evidenceTypeFromJSON(object.type) : -1,
            validator: object?.validator ? exports.Validator.fromAmino(object.validator) : undefined,
            height: helpers_1.Long.fromString(object.height),
            time: object.time,
            total_voting_power: helpers_1.Long.fromString(object.total_voting_power)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type;
        obj.validator = message.validator ? exports.Validator.toAmino(message.validator) : undefined;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.time = message.time;
        obj.total_voting_power = message.total_voting_power ? message.total_voting_power.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Evidence.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Evidence.decode(message.value);
    },
    toProto(message) {
        return exports.Evidence.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Evidence",
            value: exports.Evidence.encode(message).finish()
        };
    }
};
function createBaseSnapshot() {
    return {
        height: helpers_1.Long.UZERO,
        format: 0,
        chunks: 0,
        hash: new Uint8Array(),
        metadata: new Uint8Array()
    };
}
exports.Snapshot = {
    typeUrl: "/tendermint.abci.Snapshot",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.chunks !== 0) {
            writer.uint32(24).uint32(message.chunks);
        }
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        if (message.metadata.length !== 0) {
            writer.uint32(42).bytes(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.uint64();
                    break;
                case 2:
                    message.format = reader.uint32();
                    break;
                case 3:
                    message.chunks = reader.uint32();
                    break;
                case 4:
                    message.hash = reader.bytes();
                    break;
                case 5:
                    message.metadata = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            height: (0, helpers_1.isSet)(object.height) ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.UZERO,
            format: (0, helpers_1.isSet)(object.format) ? Number(object.format) : 0,
            chunks: (0, helpers_1.isSet)(object.chunks) ? Number(object.chunks) : 0,
            hash: (0, helpers_1.isSet)(object.hash) ? (0, helpers_1.bytesFromBase64)(object.hash) : new Uint8Array(),
            metadata: (0, helpers_1.isSet)(object.metadata) ? (0, helpers_1.bytesFromBase64)(object.metadata) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || helpers_1.Long.UZERO).toString());
        message.format !== undefined && (obj.format = Math.round(message.format));
        message.chunks !== undefined && (obj.chunks = Math.round(message.chunks));
        message.hash !== undefined && (obj.hash = (0, helpers_1.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.metadata !== undefined && (obj.metadata = (0, helpers_1.base64FromBytes)(message.metadata !== undefined ? message.metadata : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSnapshot();
        message.height = object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.UZERO;
        message.format = object.format ?? 0;
        message.chunks = object.chunks ?? 0;
        message.hash = object.hash ?? new Uint8Array();
        message.metadata = object.metadata ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            height: helpers_1.Long.fromString(object.height),
            format: object.format,
            chunks: object.chunks,
            hash: object.hash,
            metadata: object.metadata
        };
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.format = message.format;
        obj.chunks = message.chunks;
        obj.hash = message.hash;
        obj.metadata = message.metadata;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Snapshot.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Snapshot.decode(message.value);
    },
    toProto(message) {
        return exports.Snapshot.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Snapshot",
            value: exports.Snapshot.encode(message).finish()
        };
    }
};
//# sourceMappingURL=types.js.map