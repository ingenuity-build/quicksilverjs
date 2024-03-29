import { Long, DeepPartial, isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum FieldDescriptorProto_Type {
  /**
   * TYPE_DOUBLE - 0 is reserved for errors.
   * Order is weird for historical reasons.
   */
  TYPE_DOUBLE = 1,
  TYPE_FLOAT = 2,
  /**
   * TYPE_INT64 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
   * negative values are likely.
   */
  TYPE_INT64 = 3,
  TYPE_UINT64 = 4,
  /**
   * TYPE_INT32 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
   * negative values are likely.
   */
  TYPE_INT32 = 5,
  TYPE_FIXED64 = 6,
  TYPE_FIXED32 = 7,
  TYPE_BOOL = 8,
  TYPE_STRING = 9,
  /**
   * TYPE_GROUP - Tag-delimited aggregate.
   * Group type is deprecated and not supported in proto3. However, Proto3
   * implementations should still be able to parse the group wire format and
   * treat group fields as unknown fields.
   */
  TYPE_GROUP = 10,
  TYPE_MESSAGE = 11,
  /** TYPE_BYTES - New in version 2. */
  TYPE_BYTES = 12,
  TYPE_UINT32 = 13,
  TYPE_ENUM = 14,
  TYPE_SFIXED32 = 15,
  TYPE_SFIXED64 = 16,
  /** TYPE_SINT32 - Uses ZigZag encoding. */
  TYPE_SINT32 = 17,
  /** TYPE_SINT64 - Uses ZigZag encoding. */
  TYPE_SINT64 = 18,
  UNRECOGNIZED = -1,
}
export const FieldDescriptorProto_TypeSDKType = FieldDescriptorProto_Type;
export const FieldDescriptorProto_TypeAmino = FieldDescriptorProto_Type;
export function fieldDescriptorProto_TypeFromJSON(object: any): FieldDescriptorProto_Type {
  switch (object) {
    case 1:
    case "TYPE_DOUBLE":
      return FieldDescriptorProto_Type.TYPE_DOUBLE;
    case 2:
    case "TYPE_FLOAT":
      return FieldDescriptorProto_Type.TYPE_FLOAT;
    case 3:
    case "TYPE_INT64":
      return FieldDescriptorProto_Type.TYPE_INT64;
    case 4:
    case "TYPE_UINT64":
      return FieldDescriptorProto_Type.TYPE_UINT64;
    case 5:
    case "TYPE_INT32":
      return FieldDescriptorProto_Type.TYPE_INT32;
    case 6:
    case "TYPE_FIXED64":
      return FieldDescriptorProto_Type.TYPE_FIXED64;
    case 7:
    case "TYPE_FIXED32":
      return FieldDescriptorProto_Type.TYPE_FIXED32;
    case 8:
    case "TYPE_BOOL":
      return FieldDescriptorProto_Type.TYPE_BOOL;
    case 9:
    case "TYPE_STRING":
      return FieldDescriptorProto_Type.TYPE_STRING;
    case 10:
    case "TYPE_GROUP":
      return FieldDescriptorProto_Type.TYPE_GROUP;
    case 11:
    case "TYPE_MESSAGE":
      return FieldDescriptorProto_Type.TYPE_MESSAGE;
    case 12:
    case "TYPE_BYTES":
      return FieldDescriptorProto_Type.TYPE_BYTES;
    case 13:
    case "TYPE_UINT32":
      return FieldDescriptorProto_Type.TYPE_UINT32;
    case 14:
    case "TYPE_ENUM":
      return FieldDescriptorProto_Type.TYPE_ENUM;
    case 15:
    case "TYPE_SFIXED32":
      return FieldDescriptorProto_Type.TYPE_SFIXED32;
    case 16:
    case "TYPE_SFIXED64":
      return FieldDescriptorProto_Type.TYPE_SFIXED64;
    case 17:
    case "TYPE_SINT32":
      return FieldDescriptorProto_Type.TYPE_SINT32;
    case 18:
    case "TYPE_SINT64":
      return FieldDescriptorProto_Type.TYPE_SINT64;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldDescriptorProto_Type.UNRECOGNIZED;
  }
}
export function fieldDescriptorProto_TypeToJSON(object: FieldDescriptorProto_Type): string {
  switch (object) {
    case FieldDescriptorProto_Type.TYPE_DOUBLE:
      return "TYPE_DOUBLE";
    case FieldDescriptorProto_Type.TYPE_FLOAT:
      return "TYPE_FLOAT";
    case FieldDescriptorProto_Type.TYPE_INT64:
      return "TYPE_INT64";
    case FieldDescriptorProto_Type.TYPE_UINT64:
      return "TYPE_UINT64";
    case FieldDescriptorProto_Type.TYPE_INT32:
      return "TYPE_INT32";
    case FieldDescriptorProto_Type.TYPE_FIXED64:
      return "TYPE_FIXED64";
    case FieldDescriptorProto_Type.TYPE_FIXED32:
      return "TYPE_FIXED32";
    case FieldDescriptorProto_Type.TYPE_BOOL:
      return "TYPE_BOOL";
    case FieldDescriptorProto_Type.TYPE_STRING:
      return "TYPE_STRING";
    case FieldDescriptorProto_Type.TYPE_GROUP:
      return "TYPE_GROUP";
    case FieldDescriptorProto_Type.TYPE_MESSAGE:
      return "TYPE_MESSAGE";
    case FieldDescriptorProto_Type.TYPE_BYTES:
      return "TYPE_BYTES";
    case FieldDescriptorProto_Type.TYPE_UINT32:
      return "TYPE_UINT32";
    case FieldDescriptorProto_Type.TYPE_ENUM:
      return "TYPE_ENUM";
    case FieldDescriptorProto_Type.TYPE_SFIXED32:
      return "TYPE_SFIXED32";
    case FieldDescriptorProto_Type.TYPE_SFIXED64:
      return "TYPE_SFIXED64";
    case FieldDescriptorProto_Type.TYPE_SINT32:
      return "TYPE_SINT32";
    case FieldDescriptorProto_Type.TYPE_SINT64:
      return "TYPE_SINT64";
    case FieldDescriptorProto_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FieldDescriptorProto_Label {
  /** LABEL_OPTIONAL - 0 is reserved for errors */
  LABEL_OPTIONAL = 1,
  LABEL_REQUIRED = 2,
  LABEL_REPEATED = 3,
  UNRECOGNIZED = -1,
}
export const FieldDescriptorProto_LabelSDKType = FieldDescriptorProto_Label;
export const FieldDescriptorProto_LabelAmino = FieldDescriptorProto_Label;
export function fieldDescriptorProto_LabelFromJSON(object: any): FieldDescriptorProto_Label {
  switch (object) {
    case 1:
    case "LABEL_OPTIONAL":
      return FieldDescriptorProto_Label.LABEL_OPTIONAL;
    case 2:
    case "LABEL_REQUIRED":
      return FieldDescriptorProto_Label.LABEL_REQUIRED;
    case 3:
    case "LABEL_REPEATED":
      return FieldDescriptorProto_Label.LABEL_REPEATED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldDescriptorProto_Label.UNRECOGNIZED;
  }
}
export function fieldDescriptorProto_LabelToJSON(object: FieldDescriptorProto_Label): string {
  switch (object) {
    case FieldDescriptorProto_Label.LABEL_OPTIONAL:
      return "LABEL_OPTIONAL";
    case FieldDescriptorProto_Label.LABEL_REQUIRED:
      return "LABEL_REQUIRED";
    case FieldDescriptorProto_Label.LABEL_REPEATED:
      return "LABEL_REPEATED";
    case FieldDescriptorProto_Label.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Generated classes can be optimized for speed or code size. */
export enum FileOptions_OptimizeMode {
  /**
   * SPEED - Generate complete code for parsing, serialization,
   * etc.
   */
  SPEED = 1,
  /** CODE_SIZE - Use ReflectionOps to implement these methods. */
  CODE_SIZE = 2,
  /** LITE_RUNTIME - Generate code using MessageLite and the lite runtime. */
  LITE_RUNTIME = 3,
  UNRECOGNIZED = -1,
}
export const FileOptions_OptimizeModeSDKType = FileOptions_OptimizeMode;
export const FileOptions_OptimizeModeAmino = FileOptions_OptimizeMode;
export function fileOptions_OptimizeModeFromJSON(object: any): FileOptions_OptimizeMode {
  switch (object) {
    case 1:
    case "SPEED":
      return FileOptions_OptimizeMode.SPEED;
    case 2:
    case "CODE_SIZE":
      return FileOptions_OptimizeMode.CODE_SIZE;
    case 3:
    case "LITE_RUNTIME":
      return FileOptions_OptimizeMode.LITE_RUNTIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FileOptions_OptimizeMode.UNRECOGNIZED;
  }
}
export function fileOptions_OptimizeModeToJSON(object: FileOptions_OptimizeMode): string {
  switch (object) {
    case FileOptions_OptimizeMode.SPEED:
      return "SPEED";
    case FileOptions_OptimizeMode.CODE_SIZE:
      return "CODE_SIZE";
    case FileOptions_OptimizeMode.LITE_RUNTIME:
      return "LITE_RUNTIME";
    case FileOptions_OptimizeMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FieldOptions_CType {
  /** STRING - Default mode. */
  STRING = 0,
  CORD = 1,
  STRING_PIECE = 2,
  UNRECOGNIZED = -1,
}
export const FieldOptions_CTypeSDKType = FieldOptions_CType;
export const FieldOptions_CTypeAmino = FieldOptions_CType;
export function fieldOptions_CTypeFromJSON(object: any): FieldOptions_CType {
  switch (object) {
    case 0:
    case "STRING":
      return FieldOptions_CType.STRING;
    case 1:
    case "CORD":
      return FieldOptions_CType.CORD;
    case 2:
    case "STRING_PIECE":
      return FieldOptions_CType.STRING_PIECE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldOptions_CType.UNRECOGNIZED;
  }
}
export function fieldOptions_CTypeToJSON(object: FieldOptions_CType): string {
  switch (object) {
    case FieldOptions_CType.STRING:
      return "STRING";
    case FieldOptions_CType.CORD:
      return "CORD";
    case FieldOptions_CType.STRING_PIECE:
      return "STRING_PIECE";
    case FieldOptions_CType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum FieldOptions_JSType {
  /** JS_NORMAL - Use the default type. */
  JS_NORMAL = 0,
  /** JS_STRING - Use JavaScript strings. */
  JS_STRING = 1,
  /** JS_NUMBER - Use JavaScript numbers. */
  JS_NUMBER = 2,
  UNRECOGNIZED = -1,
}
export const FieldOptions_JSTypeSDKType = FieldOptions_JSType;
export const FieldOptions_JSTypeAmino = FieldOptions_JSType;
export function fieldOptions_JSTypeFromJSON(object: any): FieldOptions_JSType {
  switch (object) {
    case 0:
    case "JS_NORMAL":
      return FieldOptions_JSType.JS_NORMAL;
    case 1:
    case "JS_STRING":
      return FieldOptions_JSType.JS_STRING;
    case 2:
    case "JS_NUMBER":
      return FieldOptions_JSType.JS_NUMBER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldOptions_JSType.UNRECOGNIZED;
  }
}
export function fieldOptions_JSTypeToJSON(object: FieldOptions_JSType): string {
  switch (object) {
    case FieldOptions_JSType.JS_NORMAL:
      return "JS_NORMAL";
    case FieldOptions_JSType.JS_STRING:
      return "JS_STRING";
    case FieldOptions_JSType.JS_NUMBER:
      return "JS_NUMBER";
    case FieldOptions_JSType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Is this method side-effect-free (or safe in HTTP parlance), or idempotent,
 * or neither? HTTP based RPC implementation may choose GET verb for safe
 * methods, and PUT verb for idempotent methods instead of the default POST.
 */
export enum MethodOptions_IdempotencyLevel {
  IDEMPOTENCY_UNKNOWN = 0,
  /** NO_SIDE_EFFECTS - implies idempotent */
  NO_SIDE_EFFECTS = 1,
  /** IDEMPOTENT - idempotent, but may have side effects */
  IDEMPOTENT = 2,
  UNRECOGNIZED = -1,
}
export const MethodOptions_IdempotencyLevelSDKType = MethodOptions_IdempotencyLevel;
export const MethodOptions_IdempotencyLevelAmino = MethodOptions_IdempotencyLevel;
export function methodOptions_IdempotencyLevelFromJSON(object: any): MethodOptions_IdempotencyLevel {
  switch (object) {
    case 0:
    case "IDEMPOTENCY_UNKNOWN":
      return MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN;
    case 1:
    case "NO_SIDE_EFFECTS":
      return MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS;
    case 2:
    case "IDEMPOTENT":
      return MethodOptions_IdempotencyLevel.IDEMPOTENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MethodOptions_IdempotencyLevel.UNRECOGNIZED;
  }
}
export function methodOptions_IdempotencyLevelToJSON(object: MethodOptions_IdempotencyLevel): string {
  switch (object) {
    case MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
      return "IDEMPOTENCY_UNKNOWN";
    case MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
      return "NO_SIDE_EFFECTS";
    case MethodOptions_IdempotencyLevel.IDEMPOTENT:
      return "IDEMPOTENT";
    case MethodOptions_IdempotencyLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * The protocol compiler can output a FileDescriptorSet containing the .proto
 * files it parses.
 */
export interface FileDescriptorSet {
  file: FileDescriptorProto[];
}
export interface FileDescriptorSetProtoMsg {
  type_url: "/google.protobuf.FileDescriptorSet";
  value: Uint8Array;
}
/**
 * The protocol compiler can output a FileDescriptorSet containing the .proto
 * files it parses.
 */
export interface FileDescriptorSetAmino {
  file: FileDescriptorProtoAmino[];
}
export interface FileDescriptorSetAminoMsg {
  type: "/google.protobuf.FileDescriptorSet";
  value: FileDescriptorSetAmino;
}
/**
 * The protocol compiler can output a FileDescriptorSet containing the .proto
 * files it parses.
 */
export interface FileDescriptorSetSDKType {
  file: FileDescriptorProtoSDKType[];
}
/** Describes a complete .proto file. */
export interface FileDescriptorProto {
  /** file name, relative to root of source tree */
  name: string;
  package: string;
  /** Names of files imported by this file. */
  dependency: string[];
  /** Indexes of the public imported files in the dependency list above. */
  public_dependency: number[];
  /**
   * Indexes of the weak imported files in the dependency list.
   * For Google-internal migration only. Do not use.
   */
  weak_dependency: number[];
  /** All top-level definitions in this file. */
  message_type: DescriptorProto[];
  enum_type: EnumDescriptorProto[];
  service: ServiceDescriptorProto[];
  extension: FieldDescriptorProto[];
  options: FileOptions;
  /**
   * This field contains optional information about the original source code.
   * You may safely remove this entire field without harming runtime
   * functionality of the descriptors -- the information is needed only by
   * development tools.
   */
  source_code_info: SourceCodeInfo;
  /**
   * The syntax of the proto file.
   * The supported values are "proto2" and "proto3".
   */
  syntax: string;
}
export interface FileDescriptorProtoProtoMsg {
  type_url: "/google.protobuf.FileDescriptorProto";
  value: Uint8Array;
}
/** Describes a complete .proto file. */
export interface FileDescriptorProtoAmino {
  /** file name, relative to root of source tree */
  name: string;
  package: string;
  /** Names of files imported by this file. */
  dependency: string[];
  /** Indexes of the public imported files in the dependency list above. */
  public_dependency: number[];
  /**
   * Indexes of the weak imported files in the dependency list.
   * For Google-internal migration only. Do not use.
   */
  weak_dependency: number[];
  /** All top-level definitions in this file. */
  message_type: DescriptorProtoAmino[];
  enum_type: EnumDescriptorProtoAmino[];
  service: ServiceDescriptorProtoAmino[];
  extension: FieldDescriptorProtoAmino[];
  options?: FileOptionsAmino;
  /**
   * This field contains optional information about the original source code.
   * You may safely remove this entire field without harming runtime
   * functionality of the descriptors -- the information is needed only by
   * development tools.
   */
  source_code_info?: SourceCodeInfoAmino;
  /**
   * The syntax of the proto file.
   * The supported values are "proto2" and "proto3".
   */
  syntax: string;
}
export interface FileDescriptorProtoAminoMsg {
  type: "/google.protobuf.FileDescriptorProto";
  value: FileDescriptorProtoAmino;
}
/** Describes a complete .proto file. */
export interface FileDescriptorProtoSDKType {
  name: string;
  package: string;
  dependency: string[];
  public_dependency: number[];
  weak_dependency: number[];
  message_type: DescriptorProtoSDKType[];
  enum_type: EnumDescriptorProtoSDKType[];
  service: ServiceDescriptorProtoSDKType[];
  extension: FieldDescriptorProtoSDKType[];
  options: FileOptionsSDKType;
  source_code_info: SourceCodeInfoSDKType;
  syntax: string;
}
/** Describes a message type. */
export interface DescriptorProto {
  name: string;
  field: FieldDescriptorProto[];
  extension: FieldDescriptorProto[];
  nested_type: DescriptorProto[];
  enum_type: EnumDescriptorProto[];
  extension_range: DescriptorProto_ExtensionRange[];
  oneof_decl: OneofDescriptorProto[];
  options: MessageOptions;
  reserved_range: DescriptorProto_ReservedRange[];
  /**
   * Reserved field names, which may not be used by fields in the same message.
   * A given name may only be reserved once.
   */
  reserved_name: string[];
}
export interface DescriptorProtoProtoMsg {
  type_url: "/google.protobuf.DescriptorProto";
  value: Uint8Array;
}
/** Describes a message type. */
export interface DescriptorProtoAmino {
  name: string;
  field: FieldDescriptorProtoAmino[];
  extension: FieldDescriptorProtoAmino[];
  nested_type: DescriptorProtoAmino[];
  enum_type: EnumDescriptorProtoAmino[];
  extension_range: DescriptorProto_ExtensionRangeAmino[];
  oneof_decl: OneofDescriptorProtoAmino[];
  options?: MessageOptionsAmino;
  reserved_range: DescriptorProto_ReservedRangeAmino[];
  /**
   * Reserved field names, which may not be used by fields in the same message.
   * A given name may only be reserved once.
   */
  reserved_name: string[];
}
export interface DescriptorProtoAminoMsg {
  type: "/google.protobuf.DescriptorProto";
  value: DescriptorProtoAmino;
}
/** Describes a message type. */
export interface DescriptorProtoSDKType {
  name: string;
  field: FieldDescriptorProtoSDKType[];
  extension: FieldDescriptorProtoSDKType[];
  nested_type: DescriptorProtoSDKType[];
  enum_type: EnumDescriptorProtoSDKType[];
  extension_range: DescriptorProto_ExtensionRangeSDKType[];
  oneof_decl: OneofDescriptorProtoSDKType[];
  options: MessageOptionsSDKType;
  reserved_range: DescriptorProto_ReservedRangeSDKType[];
  reserved_name: string[];
}
export interface DescriptorProto_ExtensionRange {
  /** Inclusive. */
  start: number;
  /** Exclusive. */
  end: number;
  options: ExtensionRangeOptions;
}
export interface DescriptorProto_ExtensionRangeProtoMsg {
  type_url: "/google.protobuf.ExtensionRange";
  value: Uint8Array;
}
export interface DescriptorProto_ExtensionRangeAmino {
  /** Inclusive. */
  start: number;
  /** Exclusive. */
  end: number;
  options?: ExtensionRangeOptionsAmino;
}
export interface DescriptorProto_ExtensionRangeAminoMsg {
  type: "/google.protobuf.ExtensionRange";
  value: DescriptorProto_ExtensionRangeAmino;
}
export interface DescriptorProto_ExtensionRangeSDKType {
  start: number;
  end: number;
  options: ExtensionRangeOptionsSDKType;
}
/**
 * Range of reserved tag numbers. Reserved tag numbers may not be used by
 * fields or extension ranges in the same message. Reserved ranges may
 * not overlap.
 */
export interface DescriptorProto_ReservedRange {
  /** Inclusive. */
  start: number;
  /** Exclusive. */
  end: number;
}
export interface DescriptorProto_ReservedRangeProtoMsg {
  type_url: "/google.protobuf.ReservedRange";
  value: Uint8Array;
}
/**
 * Range of reserved tag numbers. Reserved tag numbers may not be used by
 * fields or extension ranges in the same message. Reserved ranges may
 * not overlap.
 */
export interface DescriptorProto_ReservedRangeAmino {
  /** Inclusive. */
  start: number;
  /** Exclusive. */
  end: number;
}
export interface DescriptorProto_ReservedRangeAminoMsg {
  type: "/google.protobuf.ReservedRange";
  value: DescriptorProto_ReservedRangeAmino;
}
/**
 * Range of reserved tag numbers. Reserved tag numbers may not be used by
 * fields or extension ranges in the same message. Reserved ranges may
 * not overlap.
 */
export interface DescriptorProto_ReservedRangeSDKType {
  start: number;
  end: number;
}
export interface ExtensionRangeOptions {
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOption[];
}
export interface ExtensionRangeOptionsProtoMsg {
  type_url: "/google.protobuf.ExtensionRangeOptions";
  value: Uint8Array;
}
export interface ExtensionRangeOptionsAmino {
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOptionAmino[];
}
export interface ExtensionRangeOptionsAminoMsg {
  type: "/google.protobuf.ExtensionRangeOptions";
  value: ExtensionRangeOptionsAmino;
}
export interface ExtensionRangeOptionsSDKType {
  uninterpreted_option: UninterpretedOptionSDKType[];
}
/** Describes a field within a message. */
export interface FieldDescriptorProto {
  name: string;
  number: number;
  label: FieldDescriptorProto_Label;
  /**
   * If type_name is set, this need not be set.  If both this and type_name
   * are set, this must be one of TYPE_ENUM, TYPE_MESSAGE or TYPE_GROUP.
   */
  type: FieldDescriptorProto_Type;
  /**
   * For message and enum types, this is the name of the type.  If the name
   * starts with a '.', it is fully-qualified.  Otherwise, C++-like scoping
   * rules are used to find the type (i.e. first the nested types within this
   * message are searched, then within the parent, on up to the root
   * namespace).
   */
  type_name: string;
  /**
   * For extensions, this is the name of the type being extended.  It is
   * resolved in the same manner as type_name.
   */
  extendee: string;
  /**
   * For numeric types, contains the original text representation of the value.
   * For booleans, "true" or "false".
   * For strings, contains the default text contents (not escaped in any way).
   * For bytes, contains the C escaped value.  All bytes >= 128 are escaped.
   * TODO(kenton):  Base-64 encode?
   */
  default_value: string;
  /**
   * If set, gives the index of a oneof in the containing type's oneof_decl
   * list.  This field is a member of that oneof.
   */
  oneof_index: number;
  /**
   * JSON name of this field. The value is set by protocol compiler. If the
   * user has set a "json_name" option on this field, that option's value
   * will be used. Otherwise, it's deduced from the field's name by converting
   * it to camelCase.
   */
  json_name: string;
  options: FieldOptions;
}
export interface FieldDescriptorProtoProtoMsg {
  type_url: "/google.protobuf.FieldDescriptorProto";
  value: Uint8Array;
}
/** Describes a field within a message. */
export interface FieldDescriptorProtoAmino {
  name: string;
  number: number;
  label: FieldDescriptorProto_Label;
  /**
   * If type_name is set, this need not be set.  If both this and type_name
   * are set, this must be one of TYPE_ENUM, TYPE_MESSAGE or TYPE_GROUP.
   */
  type: FieldDescriptorProto_Type;
  /**
   * For message and enum types, this is the name of the type.  If the name
   * starts with a '.', it is fully-qualified.  Otherwise, C++-like scoping
   * rules are used to find the type (i.e. first the nested types within this
   * message are searched, then within the parent, on up to the root
   * namespace).
   */
  type_name: string;
  /**
   * For extensions, this is the name of the type being extended.  It is
   * resolved in the same manner as type_name.
   */
  extendee: string;
  /**
   * For numeric types, contains the original text representation of the value.
   * For booleans, "true" or "false".
   * For strings, contains the default text contents (not escaped in any way).
   * For bytes, contains the C escaped value.  All bytes >= 128 are escaped.
   * TODO(kenton):  Base-64 encode?
   */
  default_value: string;
  /**
   * If set, gives the index of a oneof in the containing type's oneof_decl
   * list.  This field is a member of that oneof.
   */
  oneof_index: number;
  /**
   * JSON name of this field. The value is set by protocol compiler. If the
   * user has set a "json_name" option on this field, that option's value
   * will be used. Otherwise, it's deduced from the field's name by converting
   * it to camelCase.
   */
  json_name: string;
  options?: FieldOptionsAmino;
}
export interface FieldDescriptorProtoAminoMsg {
  type: "/google.protobuf.FieldDescriptorProto";
  value: FieldDescriptorProtoAmino;
}
/** Describes a field within a message. */
export interface FieldDescriptorProtoSDKType {
  name: string;
  number: number;
  label: FieldDescriptorProto_Label;
  type: FieldDescriptorProto_Type;
  type_name: string;
  extendee: string;
  default_value: string;
  oneof_index: number;
  json_name: string;
  options: FieldOptionsSDKType;
}
/** Describes a oneof. */
export interface OneofDescriptorProto {
  name: string;
  options: OneofOptions;
}
export interface OneofDescriptorProtoProtoMsg {
  type_url: "/google.protobuf.OneofDescriptorProto";
  value: Uint8Array;
}
/** Describes a oneof. */
export interface OneofDescriptorProtoAmino {
  name: string;
  options?: OneofOptionsAmino;
}
export interface OneofDescriptorProtoAminoMsg {
  type: "/google.protobuf.OneofDescriptorProto";
  value: OneofDescriptorProtoAmino;
}
/** Describes a oneof. */
export interface OneofDescriptorProtoSDKType {
  name: string;
  options: OneofOptionsSDKType;
}
/** Describes an enum type. */
export interface EnumDescriptorProto {
  name: string;
  value: EnumValueDescriptorProto[];
  options: EnumOptions;
  /**
   * Range of reserved numeric values. Reserved numeric values may not be used
   * by enum values in the same enum declaration. Reserved ranges may not
   * overlap.
   */
  reserved_range: EnumDescriptorProto_EnumReservedRange[];
  /**
   * Reserved enum value names, which may not be reused. A given name may only
   * be reserved once.
   */
  reserved_name: string[];
}
export interface EnumDescriptorProtoProtoMsg {
  type_url: "/google.protobuf.EnumDescriptorProto";
  value: Uint8Array;
}
/** Describes an enum type. */
export interface EnumDescriptorProtoAmino {
  name: string;
  value: EnumValueDescriptorProtoAmino[];
  options?: EnumOptionsAmino;
  /**
   * Range of reserved numeric values. Reserved numeric values may not be used
   * by enum values in the same enum declaration. Reserved ranges may not
   * overlap.
   */
  reserved_range: EnumDescriptorProto_EnumReservedRangeAmino[];
  /**
   * Reserved enum value names, which may not be reused. A given name may only
   * be reserved once.
   */
  reserved_name: string[];
}
export interface EnumDescriptorProtoAminoMsg {
  type: "/google.protobuf.EnumDescriptorProto";
  value: EnumDescriptorProtoAmino;
}
/** Describes an enum type. */
export interface EnumDescriptorProtoSDKType {
  name: string;
  value: EnumValueDescriptorProtoSDKType[];
  options: EnumOptionsSDKType;
  reserved_range: EnumDescriptorProto_EnumReservedRangeSDKType[];
  reserved_name: string[];
}
/**
 * Range of reserved numeric values. Reserved values may not be used by
 * entries in the same enum. Reserved ranges may not overlap.
 * 
 * Note that this is distinct from DescriptorProto.ReservedRange in that it
 * is inclusive such that it can appropriately represent the entire int32
 * domain.
 */
export interface EnumDescriptorProto_EnumReservedRange {
  /** Inclusive. */
  start: number;
  /** Inclusive. */
  end: number;
}
export interface EnumDescriptorProto_EnumReservedRangeProtoMsg {
  type_url: "/google.protobuf.EnumReservedRange";
  value: Uint8Array;
}
/**
 * Range of reserved numeric values. Reserved values may not be used by
 * entries in the same enum. Reserved ranges may not overlap.
 * 
 * Note that this is distinct from DescriptorProto.ReservedRange in that it
 * is inclusive such that it can appropriately represent the entire int32
 * domain.
 */
export interface EnumDescriptorProto_EnumReservedRangeAmino {
  /** Inclusive. */
  start: number;
  /** Inclusive. */
  end: number;
}
export interface EnumDescriptorProto_EnumReservedRangeAminoMsg {
  type: "/google.protobuf.EnumReservedRange";
  value: EnumDescriptorProto_EnumReservedRangeAmino;
}
/**
 * Range of reserved numeric values. Reserved values may not be used by
 * entries in the same enum. Reserved ranges may not overlap.
 * 
 * Note that this is distinct from DescriptorProto.ReservedRange in that it
 * is inclusive such that it can appropriately represent the entire int32
 * domain.
 */
export interface EnumDescriptorProto_EnumReservedRangeSDKType {
  start: number;
  end: number;
}
/** Describes a value within an enum. */
export interface EnumValueDescriptorProto {
  name: string;
  number: number;
  options: EnumValueOptions;
}
export interface EnumValueDescriptorProtoProtoMsg {
  type_url: "/google.protobuf.EnumValueDescriptorProto";
  value: Uint8Array;
}
/** Describes a value within an enum. */
export interface EnumValueDescriptorProtoAmino {
  name: string;
  number: number;
  options?: EnumValueOptionsAmino;
}
export interface EnumValueDescriptorProtoAminoMsg {
  type: "/google.protobuf.EnumValueDescriptorProto";
  value: EnumValueDescriptorProtoAmino;
}
/** Describes a value within an enum. */
export interface EnumValueDescriptorProtoSDKType {
  name: string;
  number: number;
  options: EnumValueOptionsSDKType;
}
/** Describes a service. */
export interface ServiceDescriptorProto {
  name: string;
  method: MethodDescriptorProto[];
  options: ServiceOptions;
}
export interface ServiceDescriptorProtoProtoMsg {
  type_url: "/google.protobuf.ServiceDescriptorProto";
  value: Uint8Array;
}
/** Describes a service. */
export interface ServiceDescriptorProtoAmino {
  name: string;
  method: MethodDescriptorProtoAmino[];
  options?: ServiceOptionsAmino;
}
export interface ServiceDescriptorProtoAminoMsg {
  type: "/google.protobuf.ServiceDescriptorProto";
  value: ServiceDescriptorProtoAmino;
}
/** Describes a service. */
export interface ServiceDescriptorProtoSDKType {
  name: string;
  method: MethodDescriptorProtoSDKType[];
  options: ServiceOptionsSDKType;
}
/** Describes a method of a service. */
export interface MethodDescriptorProto {
  name: string;
  /**
   * Input and output type names.  These are resolved in the same way as
   * FieldDescriptorProto.type_name, but must refer to a message type.
   */
  input_type: string;
  output_type: string;
  options: MethodOptions;
  /** Identifies if client streams multiple client messages */
  client_streaming: boolean;
  /** Identifies if server streams multiple server messages */
  server_streaming: boolean;
}
export interface MethodDescriptorProtoProtoMsg {
  type_url: "/google.protobuf.MethodDescriptorProto";
  value: Uint8Array;
}
/** Describes a method of a service. */
export interface MethodDescriptorProtoAmino {
  name: string;
  /**
   * Input and output type names.  These are resolved in the same way as
   * FieldDescriptorProto.type_name, but must refer to a message type.
   */
  input_type: string;
  output_type: string;
  options?: MethodOptionsAmino;
  /** Identifies if client streams multiple client messages */
  client_streaming: boolean;
  /** Identifies if server streams multiple server messages */
  server_streaming: boolean;
}
export interface MethodDescriptorProtoAminoMsg {
  type: "/google.protobuf.MethodDescriptorProto";
  value: MethodDescriptorProtoAmino;
}
/** Describes a method of a service. */
export interface MethodDescriptorProtoSDKType {
  name: string;
  input_type: string;
  output_type: string;
  options: MethodOptionsSDKType;
  client_streaming: boolean;
  server_streaming: boolean;
}
export interface FileOptions {
  /**
   * Sets the Java package where classes generated from this .proto will be
   * placed.  By default, the proto package is used, but this is often
   * inappropriate because proto packages do not normally start with backwards
   * domain names.
   */
  java_package: string;
  /**
   * If set, all the classes from the .proto file are wrapped in a single
   * outer class with the given name.  This applies to both Proto1
   * (equivalent to the old "--one_java_file" option) and Proto2 (where
   * a .proto always translates to a single class, but you may want to
   * explicitly choose the class name).
   */
  java_outer_classname: string;
  /**
   * If set true, then the Java code generator will generate a separate .java
   * file for each top-level message, enum, and service defined in the .proto
   * file.  Thus, these types will *not* be nested inside the outer class
   * named by java_outer_classname.  However, the outer class will still be
   * generated to contain the file's getDescriptor() method as well as any
   * top-level extensions defined in the file.
   */
  java_multiple_files: boolean;
  /** This option does nothing. */
  /** @deprecated */
  java_generate_equals_and_hash: boolean;
  /**
   * If set true, then the Java2 code generator will generate code that
   * throws an exception whenever an attempt is made to assign a non-UTF-8
   * byte sequence to a string field.
   * Message reflection will do the same.
   * However, an extension field still accepts non-UTF-8 byte sequences.
   * This option has no effect on when used with the lite runtime.
   */
  java_string_check_utf8: boolean;
  optimize_for: FileOptions_OptimizeMode;
  /**
   * Sets the Go package where structs generated from this .proto will be
   * placed. If omitted, the Go package will be derived from the following:
   *   - The basename of the package import path, if provided.
   *   - Otherwise, the package statement in the .proto file, if present.
   *   - Otherwise, the basename of the .proto file, without extension.
   */
  go_package: string;
  /**
   * Should generic services be generated in each language?  "Generic" services
   * are not specific to any particular RPC system.  They are generated by the
   * main code generators in each language (without additional plugins).
   * Generic services were the only kind of service generation supported by
   * early versions of google.protobuf.
   * 
   * Generic services are now considered deprecated in favor of using plugins
   * that generate code specific to your particular RPC system.  Therefore,
   * these default to false.  Old code which depends on generic services should
   * explicitly set them to true.
   */
  cc_generic_services: boolean;
  java_generic_services: boolean;
  py_generic_services: boolean;
  php_generic_services: boolean;
  /**
   * Is this file deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for everything in the file, or it will be completely ignored; in the very
   * least, this is a formalization for deprecating files.
   */
  deprecated: boolean;
  /**
   * Enables the use of arenas for the proto messages in this file. This applies
   * only to generated classes for C++.
   */
  cc_enable_arenas: boolean;
  /**
   * Sets the objective c class prefix which is prepended to all objective c
   * generated classes from this .proto. There is no default.
   */
  objc_class_prefix: string;
  /** Namespace for generated classes; defaults to the package. */
  csharp_namespace: string;
  /**
   * By default Swift generators will take the proto package and CamelCase it
   * replacing '.' with underscore and use that to prefix the types/symbols
   * defined. When this options is provided, they will use this value instead
   * to prefix the types/symbols defined.
   */
  swift_prefix: string;
  /**
   * Sets the php class prefix which is prepended to all php generated classes
   * from this .proto. Default is empty.
   */
  php_class_prefix: string;
  /**
   * Use this option to change the namespace of php generated classes. Default
   * is empty. When this option is empty, the package name will be used for
   * determining the namespace.
   */
  php_namespace: string;
  /**
   * Use this option to change the namespace of php generated metadata classes.
   * Default is empty. When this option is empty, the proto file name will be
   * used for determining the namespace.
   */
  php_metadata_namespace: string;
  /**
   * Use this option to change the package of ruby generated classes. Default
   * is empty. When this option is not set, the package name will be used for
   * determining the ruby package.
   */
  ruby_package: string;
  /**
   * The parser stores options it doesn't recognize here.
   * See the documentation for the "Options" section above.
   */
  uninterpreted_option: UninterpretedOption[];
}
export interface FileOptionsProtoMsg {
  type_url: "/google.protobuf.FileOptions";
  value: Uint8Array;
}
export interface FileOptionsAmino {
  /**
   * Sets the Java package where classes generated from this .proto will be
   * placed.  By default, the proto package is used, but this is often
   * inappropriate because proto packages do not normally start with backwards
   * domain names.
   */
  java_package: string;
  /**
   * If set, all the classes from the .proto file are wrapped in a single
   * outer class with the given name.  This applies to both Proto1
   * (equivalent to the old "--one_java_file" option) and Proto2 (where
   * a .proto always translates to a single class, but you may want to
   * explicitly choose the class name).
   */
  java_outer_classname: string;
  /**
   * If set true, then the Java code generator will generate a separate .java
   * file for each top-level message, enum, and service defined in the .proto
   * file.  Thus, these types will *not* be nested inside the outer class
   * named by java_outer_classname.  However, the outer class will still be
   * generated to contain the file's getDescriptor() method as well as any
   * top-level extensions defined in the file.
   */
  java_multiple_files: boolean;
  /** This option does nothing. */
  /** @deprecated */
  java_generate_equals_and_hash: boolean;
  /**
   * If set true, then the Java2 code generator will generate code that
   * throws an exception whenever an attempt is made to assign a non-UTF-8
   * byte sequence to a string field.
   * Message reflection will do the same.
   * However, an extension field still accepts non-UTF-8 byte sequences.
   * This option has no effect on when used with the lite runtime.
   */
  java_string_check_utf8: boolean;
  optimize_for: FileOptions_OptimizeMode;
  /**
   * Sets the Go package where structs generated from this .proto will be
   * placed. If omitted, the Go package will be derived from the following:
   *   - The basename of the package import path, if provided.
   *   - Otherwise, the package statement in the .proto file, if present.
   *   - Otherwise, the basename of the .proto file, without extension.
   */
  go_package: string;
  /**
   * Should generic services be generated in each language?  "Generic" services
   * are not specific to any particular RPC system.  They are generated by the
   * main code generators in each language (without additional plugins).
   * Generic services were the only kind of service generation supported by
   * early versions of google.protobuf.
   * 
   * Generic services are now considered deprecated in favor of using plugins
   * that generate code specific to your particular RPC system.  Therefore,
   * these default to false.  Old code which depends on generic services should
   * explicitly set them to true.
   */
  cc_generic_services: boolean;
  java_generic_services: boolean;
  py_generic_services: boolean;
  php_generic_services: boolean;
  /**
   * Is this file deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for everything in the file, or it will be completely ignored; in the very
   * least, this is a formalization for deprecating files.
   */
  deprecated: boolean;
  /**
   * Enables the use of arenas for the proto messages in this file. This applies
   * only to generated classes for C++.
   */
  cc_enable_arenas: boolean;
  /**
   * Sets the objective c class prefix which is prepended to all objective c
   * generated classes from this .proto. There is no default.
   */
  objc_class_prefix: string;
  /** Namespace for generated classes; defaults to the package. */
  csharp_namespace: string;
  /**
   * By default Swift generators will take the proto package and CamelCase it
   * replacing '.' with underscore and use that to prefix the types/symbols
   * defined. When this options is provided, they will use this value instead
   * to prefix the types/symbols defined.
   */
  swift_prefix: string;
  /**
   * Sets the php class prefix which is prepended to all php generated classes
   * from this .proto. Default is empty.
   */
  php_class_prefix: string;
  /**
   * Use this option to change the namespace of php generated classes. Default
   * is empty. When this option is empty, the package name will be used for
   * determining the namespace.
   */
  php_namespace: string;
  /**
   * Use this option to change the namespace of php generated metadata classes.
   * Default is empty. When this option is empty, the proto file name will be
   * used for determining the namespace.
   */
  php_metadata_namespace: string;
  /**
   * Use this option to change the package of ruby generated classes. Default
   * is empty. When this option is not set, the package name will be used for
   * determining the ruby package.
   */
  ruby_package: string;
  /**
   * The parser stores options it doesn't recognize here.
   * See the documentation for the "Options" section above.
   */
  uninterpreted_option: UninterpretedOptionAmino[];
}
export interface FileOptionsAminoMsg {
  type: "/google.protobuf.FileOptions";
  value: FileOptionsAmino;
}
export interface FileOptionsSDKType {
  java_package: string;
  java_outer_classname: string;
  java_multiple_files: boolean;
  /** @deprecated */
  java_generate_equals_and_hash: boolean;
  java_string_check_utf8: boolean;
  optimize_for: FileOptions_OptimizeMode;
  go_package: string;
  cc_generic_services: boolean;
  java_generic_services: boolean;
  py_generic_services: boolean;
  php_generic_services: boolean;
  deprecated: boolean;
  cc_enable_arenas: boolean;
  objc_class_prefix: string;
  csharp_namespace: string;
  swift_prefix: string;
  php_class_prefix: string;
  php_namespace: string;
  php_metadata_namespace: string;
  ruby_package: string;
  uninterpreted_option: UninterpretedOptionSDKType[];
}
export interface MessageOptions {
  /**
   * Set true to use the old proto1 MessageSet wire format for extensions.
   * This is provided for backwards-compatibility with the MessageSet wire
   * format.  You should not use this for any other reason:  It's less
   * efficient, has fewer features, and is more complicated.
   * 
   * The message must be defined exactly as follows:
   *   message Foo {
   *     option message_set_wire_format = true;
   *     extensions 4 to max;
   *   }
   * Note that the message cannot have any defined fields; MessageSets only
   * have extensions.
   * 
   * All extensions of your type must be singular messages; e.g. they cannot
   * be int32s, enums, or repeated messages.
   * 
   * Because this is an option, the above two restrictions are not enforced by
   * the protocol compiler.
   */
  message_set_wire_format: boolean;
  /**
   * Disables the generation of the standard "descriptor()" accessor, which can
   * conflict with a field of the same name.  This is meant to make migration
   * from proto1 easier; new code should avoid fields named "descriptor".
   */
  no_standard_descriptor_accessor: boolean;
  /**
   * Is this message deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the message, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating messages.
   */
  deprecated: boolean;
  /**
   * Whether the message is an automatically generated map entry type for the
   * maps field.
   * 
   * For maps fields:
   *     map<KeyType, ValueType> map_field = 1;
   * The parsed descriptor looks like:
   *     message MapFieldEntry {
   *         option map_entry = true;
   *         optional KeyType key = 1;
   *         optional ValueType value = 2;
   *     }
   *     repeated MapFieldEntry map_field = 1;
   * 
   * Implementations may choose not to generate the map_entry=true message, but
   * use a native map in the target language to hold the keys and values.
   * The reflection APIs in such implementations still need to work as
   * if the field is a repeated message field.
   * 
   * NOTE: Do not set the option in .proto files. Always use the maps syntax
   * instead. The option should only be implicitly set by the proto compiler
   * parser.
   */
  map_entry: boolean;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOption[];
}
export interface MessageOptionsProtoMsg {
  type_url: "/google.protobuf.MessageOptions";
  value: Uint8Array;
}
export interface MessageOptionsAmino {
  /**
   * Set true to use the old proto1 MessageSet wire format for extensions.
   * This is provided for backwards-compatibility with the MessageSet wire
   * format.  You should not use this for any other reason:  It's less
   * efficient, has fewer features, and is more complicated.
   * 
   * The message must be defined exactly as follows:
   *   message Foo {
   *     option message_set_wire_format = true;
   *     extensions 4 to max;
   *   }
   * Note that the message cannot have any defined fields; MessageSets only
   * have extensions.
   * 
   * All extensions of your type must be singular messages; e.g. they cannot
   * be int32s, enums, or repeated messages.
   * 
   * Because this is an option, the above two restrictions are not enforced by
   * the protocol compiler.
   */
  message_set_wire_format: boolean;
  /**
   * Disables the generation of the standard "descriptor()" accessor, which can
   * conflict with a field of the same name.  This is meant to make migration
   * from proto1 easier; new code should avoid fields named "descriptor".
   */
  no_standard_descriptor_accessor: boolean;
  /**
   * Is this message deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the message, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating messages.
   */
  deprecated: boolean;
  /**
   * Whether the message is an automatically generated map entry type for the
   * maps field.
   * 
   * For maps fields:
   *     map<KeyType, ValueType> map_field = 1;
   * The parsed descriptor looks like:
   *     message MapFieldEntry {
   *         option map_entry = true;
   *         optional KeyType key = 1;
   *         optional ValueType value = 2;
   *     }
   *     repeated MapFieldEntry map_field = 1;
   * 
   * Implementations may choose not to generate the map_entry=true message, but
   * use a native map in the target language to hold the keys and values.
   * The reflection APIs in such implementations still need to work as
   * if the field is a repeated message field.
   * 
   * NOTE: Do not set the option in .proto files. Always use the maps syntax
   * instead. The option should only be implicitly set by the proto compiler
   * parser.
   */
  map_entry: boolean;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOptionAmino[];
}
export interface MessageOptionsAminoMsg {
  type: "/google.protobuf.MessageOptions";
  value: MessageOptionsAmino;
}
export interface MessageOptionsSDKType {
  message_set_wire_format: boolean;
  no_standard_descriptor_accessor: boolean;
  deprecated: boolean;
  map_entry: boolean;
  uninterpreted_option: UninterpretedOptionSDKType[];
}
export interface FieldOptions {
  /**
   * The ctype option instructs the C++ code generator to use a different
   * representation of the field than it normally would.  See the specific
   * options below.  This option is not yet implemented in the open source
   * release -- sorry, we'll try to include it in a future version!
   */
  ctype: FieldOptions_CType;
  /**
   * The packed option can be enabled for repeated primitive fields to enable
   * a more efficient representation on the wire. Rather than repeatedly
   * writing the tag and type for each element, the entire array is encoded as
   * a single length-delimited blob. In proto3, only explicit setting it to
   * false will avoid using packed encoding.
   */
  packed: boolean;
  /**
   * The jstype option determines the JavaScript type used for values of the
   * field.  The option is permitted only for 64 bit integral and fixed types
   * (int64, uint64, sint64, fixed64, sfixed64).  A field with jstype JS_STRING
   * is represented as JavaScript string, which avoids loss of precision that
   * can happen when a large value is converted to a floating point JavaScript.
   * Specifying JS_NUMBER for the jstype causes the generated JavaScript code to
   * use the JavaScript "number" type.  The behavior of the default option
   * JS_NORMAL is implementation dependent.
   * 
   * This option is an enum to permit additional types to be added, e.g.
   * goog.math.Integer.
   */
  jstype: FieldOptions_JSType;
  /**
   * Should this field be parsed lazily?  Lazy applies only to message-type
   * fields.  It means that when the outer message is initially parsed, the
   * inner message's contents will not be parsed but instead stored in encoded
   * form.  The inner message will actually be parsed when it is first accessed.
   * 
   * This is only a hint.  Implementations are free to choose whether to use
   * eager or lazy parsing regardless of the value of this option.  However,
   * setting this option true suggests that the protocol author believes that
   * using lazy parsing on this field is worth the additional bookkeeping
   * overhead typically needed to implement it.
   * 
   * This option does not affect the public interface of any generated code;
   * all method signatures remain the same.  Furthermore, thread-safety of the
   * interface is not affected by this option; const methods remain safe to
   * call from multiple threads concurrently, while non-const methods continue
   * to require exclusive access.
   * 
   * 
   * Note that implementations may choose not to check required fields within
   * a lazy sub-message.  That is, calling IsInitialized() on the outer message
   * may return true even if the inner message has missing required fields.
   * This is necessary because otherwise the inner message would have to be
   * parsed in order to perform the check, defeating the purpose of lazy
   * parsing.  An implementation which chooses not to check required fields
   * must be consistent about it.  That is, for any particular sub-message, the
   * implementation must either *always* check its required fields, or *never*
   * check its required fields, regardless of whether or not the message has
   * been parsed.
   */
  lazy: boolean;
  /**
   * Is this field deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for accessors, or it will be completely ignored; in the very least, this
   * is a formalization for deprecating fields.
   */
  deprecated: boolean;
  /** For Google-internal migration only. Do not use. */
  weak: boolean;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOption[];
}
export interface FieldOptionsProtoMsg {
  type_url: "/google.protobuf.FieldOptions";
  value: Uint8Array;
}
export interface FieldOptionsAmino {
  /**
   * The ctype option instructs the C++ code generator to use a different
   * representation of the field than it normally would.  See the specific
   * options below.  This option is not yet implemented in the open source
   * release -- sorry, we'll try to include it in a future version!
   */
  ctype: FieldOptions_CType;
  /**
   * The packed option can be enabled for repeated primitive fields to enable
   * a more efficient representation on the wire. Rather than repeatedly
   * writing the tag and type for each element, the entire array is encoded as
   * a single length-delimited blob. In proto3, only explicit setting it to
   * false will avoid using packed encoding.
   */
  packed: boolean;
  /**
   * The jstype option determines the JavaScript type used for values of the
   * field.  The option is permitted only for 64 bit integral and fixed types
   * (int64, uint64, sint64, fixed64, sfixed64).  A field with jstype JS_STRING
   * is represented as JavaScript string, which avoids loss of precision that
   * can happen when a large value is converted to a floating point JavaScript.
   * Specifying JS_NUMBER for the jstype causes the generated JavaScript code to
   * use the JavaScript "number" type.  The behavior of the default option
   * JS_NORMAL is implementation dependent.
   * 
   * This option is an enum to permit additional types to be added, e.g.
   * goog.math.Integer.
   */
  jstype: FieldOptions_JSType;
  /**
   * Should this field be parsed lazily?  Lazy applies only to message-type
   * fields.  It means that when the outer message is initially parsed, the
   * inner message's contents will not be parsed but instead stored in encoded
   * form.  The inner message will actually be parsed when it is first accessed.
   * 
   * This is only a hint.  Implementations are free to choose whether to use
   * eager or lazy parsing regardless of the value of this option.  However,
   * setting this option true suggests that the protocol author believes that
   * using lazy parsing on this field is worth the additional bookkeeping
   * overhead typically needed to implement it.
   * 
   * This option does not affect the public interface of any generated code;
   * all method signatures remain the same.  Furthermore, thread-safety of the
   * interface is not affected by this option; const methods remain safe to
   * call from multiple threads concurrently, while non-const methods continue
   * to require exclusive access.
   * 
   * 
   * Note that implementations may choose not to check required fields within
   * a lazy sub-message.  That is, calling IsInitialized() on the outer message
   * may return true even if the inner message has missing required fields.
   * This is necessary because otherwise the inner message would have to be
   * parsed in order to perform the check, defeating the purpose of lazy
   * parsing.  An implementation which chooses not to check required fields
   * must be consistent about it.  That is, for any particular sub-message, the
   * implementation must either *always* check its required fields, or *never*
   * check its required fields, regardless of whether or not the message has
   * been parsed.
   */
  lazy: boolean;
  /**
   * Is this field deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for accessors, or it will be completely ignored; in the very least, this
   * is a formalization for deprecating fields.
   */
  deprecated: boolean;
  /** For Google-internal migration only. Do not use. */
  weak: boolean;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOptionAmino[];
}
export interface FieldOptionsAminoMsg {
  type: "/google.protobuf.FieldOptions";
  value: FieldOptionsAmino;
}
export interface FieldOptionsSDKType {
  ctype: FieldOptions_CType;
  packed: boolean;
  jstype: FieldOptions_JSType;
  lazy: boolean;
  deprecated: boolean;
  weak: boolean;
  uninterpreted_option: UninterpretedOptionSDKType[];
}
export interface OneofOptions {
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOption[];
}
export interface OneofOptionsProtoMsg {
  type_url: "/google.protobuf.OneofOptions";
  value: Uint8Array;
}
export interface OneofOptionsAmino {
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOptionAmino[];
}
export interface OneofOptionsAminoMsg {
  type: "/google.protobuf.OneofOptions";
  value: OneofOptionsAmino;
}
export interface OneofOptionsSDKType {
  uninterpreted_option: UninterpretedOptionSDKType[];
}
export interface EnumOptions {
  /**
   * Set this option to true to allow mapping different tag names to the same
   * value.
   */
  allow_alias: boolean;
  /**
   * Is this enum deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the enum, or it will be completely ignored; in the very least, this
   * is a formalization for deprecating enums.
   */
  deprecated: boolean;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOption[];
}
export interface EnumOptionsProtoMsg {
  type_url: "/google.protobuf.EnumOptions";
  value: Uint8Array;
}
export interface EnumOptionsAmino {
  /**
   * Set this option to true to allow mapping different tag names to the same
   * value.
   */
  allow_alias: boolean;
  /**
   * Is this enum deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the enum, or it will be completely ignored; in the very least, this
   * is a formalization for deprecating enums.
   */
  deprecated: boolean;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOptionAmino[];
}
export interface EnumOptionsAminoMsg {
  type: "/google.protobuf.EnumOptions";
  value: EnumOptionsAmino;
}
export interface EnumOptionsSDKType {
  allow_alias: boolean;
  deprecated: boolean;
  uninterpreted_option: UninterpretedOptionSDKType[];
}
export interface EnumValueOptions {
  /**
   * Is this enum value deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the enum value, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating enum values.
   */
  deprecated: boolean;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOption[];
}
export interface EnumValueOptionsProtoMsg {
  type_url: "/google.protobuf.EnumValueOptions";
  value: Uint8Array;
}
export interface EnumValueOptionsAmino {
  /**
   * Is this enum value deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the enum value, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating enum values.
   */
  deprecated: boolean;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOptionAmino[];
}
export interface EnumValueOptionsAminoMsg {
  type: "/google.protobuf.EnumValueOptions";
  value: EnumValueOptionsAmino;
}
export interface EnumValueOptionsSDKType {
  deprecated: boolean;
  uninterpreted_option: UninterpretedOptionSDKType[];
}
export interface ServiceOptions {
  /**
   * Is this service deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the service, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating services.
   */
  deprecated: boolean;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOption[];
}
export interface ServiceOptionsProtoMsg {
  type_url: "/google.protobuf.ServiceOptions";
  value: Uint8Array;
}
export interface ServiceOptionsAmino {
  /**
   * Is this service deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the service, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating services.
   */
  deprecated: boolean;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOptionAmino[];
}
export interface ServiceOptionsAminoMsg {
  type: "/google.protobuf.ServiceOptions";
  value: ServiceOptionsAmino;
}
export interface ServiceOptionsSDKType {
  deprecated: boolean;
  uninterpreted_option: UninterpretedOptionSDKType[];
}
export interface MethodOptions {
  /**
   * Is this method deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the method, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating methods.
   */
  deprecated: boolean;
  idempotency_level: MethodOptions_IdempotencyLevel;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOption[];
}
export interface MethodOptionsProtoMsg {
  type_url: "/google.protobuf.MethodOptions";
  value: Uint8Array;
}
export interface MethodOptionsAmino {
  /**
   * Is this method deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the method, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating methods.
   */
  deprecated: boolean;
  idempotency_level: MethodOptions_IdempotencyLevel;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option: UninterpretedOptionAmino[];
}
export interface MethodOptionsAminoMsg {
  type: "/google.protobuf.MethodOptions";
  value: MethodOptionsAmino;
}
export interface MethodOptionsSDKType {
  deprecated: boolean;
  idempotency_level: MethodOptions_IdempotencyLevel;
  uninterpreted_option: UninterpretedOptionSDKType[];
}
/**
 * A message representing a option the parser does not recognize. This only
 * appears in options protos created by the compiler::Parser class.
 * DescriptorPool resolves these when building Descriptor objects. Therefore,
 * options protos in descriptor objects (e.g. returned by Descriptor::options(),
 * or produced by Descriptor::CopyTo()) will never have UninterpretedOptions
 * in them.
 */
export interface UninterpretedOption {
  name: UninterpretedOption_NamePart[];
  /**
   * The value of the uninterpreted option, in whatever type the tokenizer
   * identified it as during parsing. Exactly one of these should be set.
   */
  identifier_value: string;
  positive_int_value: Long;
  negative_int_value: Long;
  double_value: number;
  string_value: Uint8Array;
  aggregate_value: string;
}
export interface UninterpretedOptionProtoMsg {
  type_url: "/google.protobuf.UninterpretedOption";
  value: Uint8Array;
}
/**
 * A message representing a option the parser does not recognize. This only
 * appears in options protos created by the compiler::Parser class.
 * DescriptorPool resolves these when building Descriptor objects. Therefore,
 * options protos in descriptor objects (e.g. returned by Descriptor::options(),
 * or produced by Descriptor::CopyTo()) will never have UninterpretedOptions
 * in them.
 */
export interface UninterpretedOptionAmino {
  name: UninterpretedOption_NamePartAmino[];
  /**
   * The value of the uninterpreted option, in whatever type the tokenizer
   * identified it as during parsing. Exactly one of these should be set.
   */
  identifier_value: string;
  positive_int_value: string;
  negative_int_value: string;
  double_value: number;
  string_value: Uint8Array;
  aggregate_value: string;
}
export interface UninterpretedOptionAminoMsg {
  type: "/google.protobuf.UninterpretedOption";
  value: UninterpretedOptionAmino;
}
/**
 * A message representing a option the parser does not recognize. This only
 * appears in options protos created by the compiler::Parser class.
 * DescriptorPool resolves these when building Descriptor objects. Therefore,
 * options protos in descriptor objects (e.g. returned by Descriptor::options(),
 * or produced by Descriptor::CopyTo()) will never have UninterpretedOptions
 * in them.
 */
export interface UninterpretedOptionSDKType {
  name: UninterpretedOption_NamePartSDKType[];
  identifier_value: string;
  positive_int_value: Long;
  negative_int_value: Long;
  double_value: number;
  string_value: Uint8Array;
  aggregate_value: string;
}
/**
 * The name of the uninterpreted option.  Each string represents a segment in
 * a dot-separated name.  is_extension is true iff a segment represents an
 * extension (denoted with parentheses in options specs in .proto files).
 * E.g.,{ ["foo", false], ["bar.baz", true], ["qux", false] } represents
 * "foo.(bar.baz).qux".
 */
export interface UninterpretedOption_NamePart {
  name_part: string;
  is_extension: boolean;
}
export interface UninterpretedOption_NamePartProtoMsg {
  type_url: "/google.protobuf.NamePart";
  value: Uint8Array;
}
/**
 * The name of the uninterpreted option.  Each string represents a segment in
 * a dot-separated name.  is_extension is true iff a segment represents an
 * extension (denoted with parentheses in options specs in .proto files).
 * E.g.,{ ["foo", false], ["bar.baz", true], ["qux", false] } represents
 * "foo.(bar.baz).qux".
 */
export interface UninterpretedOption_NamePartAmino {
  name_part: string;
  is_extension: boolean;
}
export interface UninterpretedOption_NamePartAminoMsg {
  type: "/google.protobuf.NamePart";
  value: UninterpretedOption_NamePartAmino;
}
/**
 * The name of the uninterpreted option.  Each string represents a segment in
 * a dot-separated name.  is_extension is true iff a segment represents an
 * extension (denoted with parentheses in options specs in .proto files).
 * E.g.,{ ["foo", false], ["bar.baz", true], ["qux", false] } represents
 * "foo.(bar.baz).qux".
 */
export interface UninterpretedOption_NamePartSDKType {
  name_part: string;
  is_extension: boolean;
}
/**
 * Encapsulates information about the original source file from which a
 * FileDescriptorProto was generated.
 */
export interface SourceCodeInfo {
  /**
   * A Location identifies a piece of source code in a .proto file which
   * corresponds to a particular definition.  This information is intended
   * to be useful to IDEs, code indexers, documentation generators, and similar
   * tools.
   * 
   * For example, say we have a file like:
   *   message Foo {
   *     optional string foo = 1;
   *   }
   * Let's look at just the field definition:
   *   optional string foo = 1;
   *   ^       ^^     ^^  ^  ^^^
   *   a       bc     de  f  ghi
   * We have the following locations:
   *   span   path               represents
   *   [a,i)  [ 4, 0, 2, 0 ]     The whole field definition.
   *   [a,b)  [ 4, 0, 2, 0, 4 ]  The label (optional).
   *   [c,d)  [ 4, 0, 2, 0, 5 ]  The type (string).
   *   [e,f)  [ 4, 0, 2, 0, 1 ]  The name (foo).
   *   [g,h)  [ 4, 0, 2, 0, 3 ]  The number (1).
   * 
   * Notes:
   * - A location may refer to a repeated field itself (i.e. not to any
   *   particular index within it).  This is used whenever a set of elements are
   *   logically enclosed in a single code segment.  For example, an entire
   *   extend block (possibly containing multiple extension definitions) will
   *   have an outer location whose path refers to the "extensions" repeated
   *   field without an index.
   * - Multiple locations may have the same path.  This happens when a single
   *   logical declaration is spread out across multiple places.  The most
   *   obvious example is the "extend" block again -- there may be multiple
   *   extend blocks in the same scope, each of which will have the same path.
   * - A location's span is not always a subset of its parent's span.  For
   *   example, the "extendee" of an extension declaration appears at the
   *   beginning of the "extend" block and is shared by all extensions within
   *   the block.
   * - Just because a location's span is a subset of some other location's span
   *   does not mean that it is a descendant.  For example, a "group" defines
   *   both a type and a field in a single declaration.  Thus, the locations
   *   corresponding to the type and field and their components will overlap.
   * - Code which tries to interpret locations should probably be designed to
   *   ignore those that it doesn't understand, as more types of locations could
   *   be recorded in the future.
   */
  location: SourceCodeInfo_Location[];
}
export interface SourceCodeInfoProtoMsg {
  type_url: "/google.protobuf.SourceCodeInfo";
  value: Uint8Array;
}
/**
 * Encapsulates information about the original source file from which a
 * FileDescriptorProto was generated.
 */
export interface SourceCodeInfoAmino {
  /**
   * A Location identifies a piece of source code in a .proto file which
   * corresponds to a particular definition.  This information is intended
   * to be useful to IDEs, code indexers, documentation generators, and similar
   * tools.
   * 
   * For example, say we have a file like:
   *   message Foo {
   *     optional string foo = 1;
   *   }
   * Let's look at just the field definition:
   *   optional string foo = 1;
   *   ^       ^^     ^^  ^  ^^^
   *   a       bc     de  f  ghi
   * We have the following locations:
   *   span   path               represents
   *   [a,i)  [ 4, 0, 2, 0 ]     The whole field definition.
   *   [a,b)  [ 4, 0, 2, 0, 4 ]  The label (optional).
   *   [c,d)  [ 4, 0, 2, 0, 5 ]  The type (string).
   *   [e,f)  [ 4, 0, 2, 0, 1 ]  The name (foo).
   *   [g,h)  [ 4, 0, 2, 0, 3 ]  The number (1).
   * 
   * Notes:
   * - A location may refer to a repeated field itself (i.e. not to any
   *   particular index within it).  This is used whenever a set of elements are
   *   logically enclosed in a single code segment.  For example, an entire
   *   extend block (possibly containing multiple extension definitions) will
   *   have an outer location whose path refers to the "extensions" repeated
   *   field without an index.
   * - Multiple locations may have the same path.  This happens when a single
   *   logical declaration is spread out across multiple places.  The most
   *   obvious example is the "extend" block again -- there may be multiple
   *   extend blocks in the same scope, each of which will have the same path.
   * - A location's span is not always a subset of its parent's span.  For
   *   example, the "extendee" of an extension declaration appears at the
   *   beginning of the "extend" block and is shared by all extensions within
   *   the block.
   * - Just because a location's span is a subset of some other location's span
   *   does not mean that it is a descendant.  For example, a "group" defines
   *   both a type and a field in a single declaration.  Thus, the locations
   *   corresponding to the type and field and their components will overlap.
   * - Code which tries to interpret locations should probably be designed to
   *   ignore those that it doesn't understand, as more types of locations could
   *   be recorded in the future.
   */
  location: SourceCodeInfo_LocationAmino[];
}
export interface SourceCodeInfoAminoMsg {
  type: "/google.protobuf.SourceCodeInfo";
  value: SourceCodeInfoAmino;
}
/**
 * Encapsulates information about the original source file from which a
 * FileDescriptorProto was generated.
 */
export interface SourceCodeInfoSDKType {
  location: SourceCodeInfo_LocationSDKType[];
}
export interface SourceCodeInfo_Location {
  /**
   * Identifies which part of the FileDescriptorProto was defined at this
   * location.
   * 
   * Each element is a field number or an index.  They form a path from
   * the root FileDescriptorProto to the place where the definition.  For
   * example, this path:
   *   [ 4, 3, 2, 7, 1 ]
   * refers to:
   *   file.message_type(3)  // 4, 3
   *       .field(7)         // 2, 7
   *       .name()           // 1
   * This is because FileDescriptorProto.message_type has field number 4:
   *   repeated DescriptorProto message_type = 4;
   * and DescriptorProto.field has field number 2:
   *   repeated FieldDescriptorProto field = 2;
   * and FieldDescriptorProto.name has field number 1:
   *   optional string name = 1;
   * 
   * Thus, the above path gives the location of a field name.  If we removed
   * the last element:
   *   [ 4, 3, 2, 7 ]
   * this path refers to the whole field declaration (from the beginning
   * of the label to the terminating semicolon).
   */
  path: number[];
  /**
   * Always has exactly three or four elements: start line, start column,
   * end line (optional, otherwise assumed same as start line), end column.
   * These are packed into a single field for efficiency.  Note that line
   * and column numbers are zero-based -- typically you will want to add
   * 1 to each before displaying to a user.
   */
  span: number[];
  /**
   * If this SourceCodeInfo represents a complete declaration, these are any
   * comments appearing before and after the declaration which appear to be
   * attached to the declaration.
   * 
   * A series of line comments appearing on consecutive lines, with no other
   * tokens appearing on those lines, will be treated as a single comment.
   * 
   * leading_detached_comments will keep paragraphs of comments that appear
   * before (but not connected to) the current element. Each paragraph,
   * separated by empty lines, will be one comment element in the repeated
   * field.
   * 
   * Only the comment content is provided; comment markers (e.g. //) are
   * stripped out.  For block comments, leading whitespace and an asterisk
   * will be stripped from the beginning of each line other than the first.
   * Newlines are included in the output.
   * 
   * Examples:
   * 
   *   optional int32 foo = 1;  // Comment attached to foo.
   *   // Comment attached to bar.
   *   optional int32 bar = 2;
   * 
   *   optional string baz = 3;
   *   // Comment attached to baz.
   *   // Another line attached to baz.
   * 
   *   // Comment attached to qux.
   *   //
   *   // Another line attached to qux.
   *   optional double qux = 4;
   * 
   *   // Detached comment for corge. This is not leading or trailing comments
   *   // to qux or corge because there are blank lines separating it from
   *   // both.
   * 
   *   // Detached comment for corge paragraph 2.
   * 
   *   optional string corge = 5;
   *   /* Block comment attached
   *    * to corge.  Leading asterisks
   *    * will be removed. *\/
   *   /* Block comment attached to
   *    * grault. *\/
   *   optional int32 grault = 6;
   * 
   *   // ignored detached comments.
   */
  leading_comments: string;
  trailing_comments: string;
  leading_detached_comments: string[];
}
export interface SourceCodeInfo_LocationProtoMsg {
  type_url: "/google.protobuf.Location";
  value: Uint8Array;
}
export interface SourceCodeInfo_LocationAmino {
  /**
   * Identifies which part of the FileDescriptorProto was defined at this
   * location.
   * 
   * Each element is a field number or an index.  They form a path from
   * the root FileDescriptorProto to the place where the definition.  For
   * example, this path:
   *   [ 4, 3, 2, 7, 1 ]
   * refers to:
   *   file.message_type(3)  // 4, 3
   *       .field(7)         // 2, 7
   *       .name()           // 1
   * This is because FileDescriptorProto.message_type has field number 4:
   *   repeated DescriptorProto message_type = 4;
   * and DescriptorProto.field has field number 2:
   *   repeated FieldDescriptorProto field = 2;
   * and FieldDescriptorProto.name has field number 1:
   *   optional string name = 1;
   * 
   * Thus, the above path gives the location of a field name.  If we removed
   * the last element:
   *   [ 4, 3, 2, 7 ]
   * this path refers to the whole field declaration (from the beginning
   * of the label to the terminating semicolon).
   */
  path: number[];
  /**
   * Always has exactly three or four elements: start line, start column,
   * end line (optional, otherwise assumed same as start line), end column.
   * These are packed into a single field for efficiency.  Note that line
   * and column numbers are zero-based -- typically you will want to add
   * 1 to each before displaying to a user.
   */
  span: number[];
  /**
   * If this SourceCodeInfo represents a complete declaration, these are any
   * comments appearing before and after the declaration which appear to be
   * attached to the declaration.
   * 
   * A series of line comments appearing on consecutive lines, with no other
   * tokens appearing on those lines, will be treated as a single comment.
   * 
   * leading_detached_comments will keep paragraphs of comments that appear
   * before (but not connected to) the current element. Each paragraph,
   * separated by empty lines, will be one comment element in the repeated
   * field.
   * 
   * Only the comment content is provided; comment markers (e.g. //) are
   * stripped out.  For block comments, leading whitespace and an asterisk
   * will be stripped from the beginning of each line other than the first.
   * Newlines are included in the output.
   * 
   * Examples:
   * 
   *   optional int32 foo = 1;  // Comment attached to foo.
   *   // Comment attached to bar.
   *   optional int32 bar = 2;
   * 
   *   optional string baz = 3;
   *   // Comment attached to baz.
   *   // Another line attached to baz.
   * 
   *   // Comment attached to qux.
   *   //
   *   // Another line attached to qux.
   *   optional double qux = 4;
   * 
   *   // Detached comment for corge. This is not leading or trailing comments
   *   // to qux or corge because there are blank lines separating it from
   *   // both.
   * 
   *   // Detached comment for corge paragraph 2.
   * 
   *   optional string corge = 5;
   *   /* Block comment attached
   *    * to corge.  Leading asterisks
   *    * will be removed. *\/
   *   /* Block comment attached to
   *    * grault. *\/
   *   optional int32 grault = 6;
   * 
   *   // ignored detached comments.
   */
  leading_comments: string;
  trailing_comments: string;
  leading_detached_comments: string[];
}
export interface SourceCodeInfo_LocationAminoMsg {
  type: "/google.protobuf.Location";
  value: SourceCodeInfo_LocationAmino;
}
export interface SourceCodeInfo_LocationSDKType {
  path: number[];
  span: number[];
  leading_comments: string;
  trailing_comments: string;
  leading_detached_comments: string[];
}
/**
 * Describes the relationship between generated code and its original source
 * file. A GeneratedCodeInfo message is associated with only one generated
 * source file, but may contain references to different source .proto files.
 */
export interface GeneratedCodeInfo {
  /**
   * An Annotation connects some span of text in generated code to an element
   * of its generating .proto file.
   */
  annotation: GeneratedCodeInfo_Annotation[];
}
export interface GeneratedCodeInfoProtoMsg {
  type_url: "/google.protobuf.GeneratedCodeInfo";
  value: Uint8Array;
}
/**
 * Describes the relationship between generated code and its original source
 * file. A GeneratedCodeInfo message is associated with only one generated
 * source file, but may contain references to different source .proto files.
 */
export interface GeneratedCodeInfoAmino {
  /**
   * An Annotation connects some span of text in generated code to an element
   * of its generating .proto file.
   */
  annotation: GeneratedCodeInfo_AnnotationAmino[];
}
export interface GeneratedCodeInfoAminoMsg {
  type: "/google.protobuf.GeneratedCodeInfo";
  value: GeneratedCodeInfoAmino;
}
/**
 * Describes the relationship between generated code and its original source
 * file. A GeneratedCodeInfo message is associated with only one generated
 * source file, but may contain references to different source .proto files.
 */
export interface GeneratedCodeInfoSDKType {
  annotation: GeneratedCodeInfo_AnnotationSDKType[];
}
export interface GeneratedCodeInfo_Annotation {
  /**
   * Identifies the element in the original source .proto file. This field
   * is formatted the same as SourceCodeInfo.Location.path.
   */
  path: number[];
  /** Identifies the filesystem path to the original source .proto. */
  source_file: string;
  /**
   * Identifies the starting offset in bytes in the generated code
   * that relates to the identified object.
   */
  begin: number;
  /**
   * Identifies the ending offset in bytes in the generated code that
   * relates to the identified offset. The end offset should be one past
   * the last relevant byte (so the length of the text = end - begin).
   */
  end: number;
}
export interface GeneratedCodeInfo_AnnotationProtoMsg {
  type_url: "/google.protobuf.Annotation";
  value: Uint8Array;
}
export interface GeneratedCodeInfo_AnnotationAmino {
  /**
   * Identifies the element in the original source .proto file. This field
   * is formatted the same as SourceCodeInfo.Location.path.
   */
  path: number[];
  /** Identifies the filesystem path to the original source .proto. */
  source_file: string;
  /**
   * Identifies the starting offset in bytes in the generated code
   * that relates to the identified object.
   */
  begin: number;
  /**
   * Identifies the ending offset in bytes in the generated code that
   * relates to the identified offset. The end offset should be one past
   * the last relevant byte (so the length of the text = end - begin).
   */
  end: number;
}
export interface GeneratedCodeInfo_AnnotationAminoMsg {
  type: "/google.protobuf.Annotation";
  value: GeneratedCodeInfo_AnnotationAmino;
}
export interface GeneratedCodeInfo_AnnotationSDKType {
  path: number[];
  source_file: string;
  begin: number;
  end: number;
}
function createBaseFileDescriptorSet(): FileDescriptorSet {
  return {
    file: []
  };
}
export const FileDescriptorSet = {
  typeUrl: "/google.protobuf.FileDescriptorSet",
  encode(message: FileDescriptorSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.file) {
      FileDescriptorProto.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): FileDescriptorSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.file.push(FileDescriptorProto.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FileDescriptorSet {
    return {
      file: Array.isArray(object?.file) ? object.file.map((e: any) => FileDescriptorProto.fromJSON(e)) : []
    };
  },
  toJSON(message: FileDescriptorSet): unknown {
    const obj: any = {};
    if (message.file) {
      obj.file = message.file.map(e => e ? FileDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.file = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<FileDescriptorSet>): FileDescriptorSet {
    const message = createBaseFileDescriptorSet();
    message.file = object.file?.map(e => FileDescriptorProto.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: FileDescriptorSetAmino): FileDescriptorSet {
    return {
      file: Array.isArray(object?.file) ? object.file.map((e: any) => FileDescriptorProto.fromAmino(e)) : []
    };
  },
  toAmino(message: FileDescriptorSet): FileDescriptorSetAmino {
    const obj: any = {};
    if (message.file) {
      obj.file = message.file.map(e => e ? FileDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.file = [];
    }
    return obj;
  },
  fromAminoMsg(object: FileDescriptorSetAminoMsg): FileDescriptorSet {
    return FileDescriptorSet.fromAmino(object.value);
  },
  fromProtoMsg(message: FileDescriptorSetProtoMsg): FileDescriptorSet {
    return FileDescriptorSet.decode(message.value);
  },
  toProto(message: FileDescriptorSet): Uint8Array {
    return FileDescriptorSet.encode(message).finish();
  },
  toProtoMsg(message: FileDescriptorSet): FileDescriptorSetProtoMsg {
    return {
      typeUrl: "/google.protobuf.FileDescriptorSet",
      value: FileDescriptorSet.encode(message).finish()
    };
  }
};
function createBaseFileDescriptorProto(): FileDescriptorProto {
  return {
    name: "",
    package: "",
    dependency: [],
    public_dependency: [],
    weak_dependency: [],
    message_type: [],
    enum_type: [],
    service: [],
    extension: [],
    options: FileOptions.fromPartial({}),
    source_code_info: SourceCodeInfo.fromPartial({}),
    syntax: ""
  };
}
export const FileDescriptorProto = {
  typeUrl: "/google.protobuf.FileDescriptorProto",
  encode(message: FileDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.package !== "") {
      writer.uint32(18).string(message.package);
    }
    for (const v of message.dependency) {
      writer.uint32(26).string(v!);
    }
    writer.uint32(82).fork();
    for (const v of message.public_dependency) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(90).fork();
    for (const v of message.weak_dependency) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.message_type) {
      DescriptorProto.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.enum_type) {
      EnumDescriptorProto.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.service) {
      ServiceDescriptorProto.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.extension) {
      FieldDescriptorProto.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.options !== undefined) {
      FileOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
    }
    if (message.source_code_info !== undefined) {
      SourceCodeInfo.encode(message.source_code_info, writer.uint32(74).fork()).ldelim();
    }
    if (message.syntax !== "") {
      writer.uint32(98).string(message.syntax);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): FileDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.package = reader.string();
          break;
        case 3:
          message.dependency.push(reader.string());
          break;
        case 10:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.public_dependency.push(reader.int32());
            }
          } else {
            message.public_dependency.push(reader.int32());
          }
          break;
        case 11:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.weak_dependency.push(reader.int32());
            }
          } else {
            message.weak_dependency.push(reader.int32());
          }
          break;
        case 4:
          message.message_type.push(DescriptorProto.decode(reader, reader.uint32()));
          break;
        case 5:
          message.enum_type.push(EnumDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 6:
          message.service.push(ServiceDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 7:
          message.extension.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 8:
          message.options = FileOptions.decode(reader, reader.uint32());
          break;
        case 9:
          message.source_code_info = SourceCodeInfo.decode(reader, reader.uint32());
          break;
        case 12:
          message.syntax = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FileDescriptorProto {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      package: isSet(object.package) ? String(object.package) : "",
      dependency: Array.isArray(object?.dependency) ? object.dependency.map((e: any) => String(e)) : [],
      public_dependency: Array.isArray(object?.public_dependency) ? object.public_dependency.map((e: any) => Number(e)) : [],
      weak_dependency: Array.isArray(object?.weak_dependency) ? object.weak_dependency.map((e: any) => Number(e)) : [],
      message_type: Array.isArray(object?.message_type) ? object.message_type.map((e: any) => DescriptorProto.fromJSON(e)) : [],
      enum_type: Array.isArray(object?.enum_type) ? object.enum_type.map((e: any) => EnumDescriptorProto.fromJSON(e)) : [],
      service: Array.isArray(object?.service) ? object.service.map((e: any) => ServiceDescriptorProto.fromJSON(e)) : [],
      extension: Array.isArray(object?.extension) ? object.extension.map((e: any) => FieldDescriptorProto.fromJSON(e)) : [],
      options: isSet(object.options) ? FileOptions.fromJSON(object.options) : undefined,
      source_code_info: isSet(object.source_code_info) ? SourceCodeInfo.fromJSON(object.source_code_info) : undefined,
      syntax: isSet(object.syntax) ? String(object.syntax) : ""
    };
  },
  toJSON(message: FileDescriptorProto): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.package !== undefined && (obj.package = message.package);
    if (message.dependency) {
      obj.dependency = message.dependency.map(e => e);
    } else {
      obj.dependency = [];
    }
    if (message.public_dependency) {
      obj.public_dependency = message.public_dependency.map(e => Math.round(e));
    } else {
      obj.public_dependency = [];
    }
    if (message.weak_dependency) {
      obj.weak_dependency = message.weak_dependency.map(e => Math.round(e));
    } else {
      obj.weak_dependency = [];
    }
    if (message.message_type) {
      obj.message_type = message.message_type.map(e => e ? DescriptorProto.toJSON(e) : undefined);
    } else {
      obj.message_type = [];
    }
    if (message.enum_type) {
      obj.enum_type = message.enum_type.map(e => e ? EnumDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.enum_type = [];
    }
    if (message.service) {
      obj.service = message.service.map(e => e ? ServiceDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.service = [];
    }
    if (message.extension) {
      obj.extension = message.extension.map(e => e ? FieldDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.extension = [];
    }
    message.options !== undefined && (obj.options = message.options ? FileOptions.toJSON(message.options) : undefined);
    message.source_code_info !== undefined && (obj.source_code_info = message.source_code_info ? SourceCodeInfo.toJSON(message.source_code_info) : undefined);
    message.syntax !== undefined && (obj.syntax = message.syntax);
    return obj;
  },
  fromPartial(object: DeepPartial<FileDescriptorProto>): FileDescriptorProto {
    const message = createBaseFileDescriptorProto();
    message.name = object.name ?? "";
    message.package = object.package ?? "";
    message.dependency = object.dependency?.map(e => e) || [];
    message.public_dependency = object.public_dependency?.map(e => e) || [];
    message.weak_dependency = object.weak_dependency?.map(e => e) || [];
    message.message_type = object.message_type?.map(e => DescriptorProto.fromPartial(e)) || [];
    message.enum_type = object.enum_type?.map(e => EnumDescriptorProto.fromPartial(e)) || [];
    message.service = object.service?.map(e => ServiceDescriptorProto.fromPartial(e)) || [];
    message.extension = object.extension?.map(e => FieldDescriptorProto.fromPartial(e)) || [];
    message.options = object.options !== undefined && object.options !== null ? FileOptions.fromPartial(object.options) : undefined;
    message.source_code_info = object.source_code_info !== undefined && object.source_code_info !== null ? SourceCodeInfo.fromPartial(object.source_code_info) : undefined;
    message.syntax = object.syntax ?? "";
    return message;
  },
  fromAmino(object: FileDescriptorProtoAmino): FileDescriptorProto {
    return {
      name: object.name,
      package: object.package,
      dependency: Array.isArray(object?.dependency) ? object.dependency.map((e: any) => e) : [],
      public_dependency: Array.isArray(object?.public_dependency) ? object.public_dependency.map((e: any) => e) : [],
      weak_dependency: Array.isArray(object?.weak_dependency) ? object.weak_dependency.map((e: any) => e) : [],
      message_type: Array.isArray(object?.message_type) ? object.message_type.map((e: any) => DescriptorProto.fromAmino(e)) : [],
      enum_type: Array.isArray(object?.enum_type) ? object.enum_type.map((e: any) => EnumDescriptorProto.fromAmino(e)) : [],
      service: Array.isArray(object?.service) ? object.service.map((e: any) => ServiceDescriptorProto.fromAmino(e)) : [],
      extension: Array.isArray(object?.extension) ? object.extension.map((e: any) => FieldDescriptorProto.fromAmino(e)) : [],
      options: object?.options ? FileOptions.fromAmino(object.options) : undefined,
      source_code_info: object?.source_code_info ? SourceCodeInfo.fromAmino(object.source_code_info) : undefined,
      syntax: object.syntax
    };
  },
  toAmino(message: FileDescriptorProto): FileDescriptorProtoAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.package = message.package;
    if (message.dependency) {
      obj.dependency = message.dependency.map(e => e);
    } else {
      obj.dependency = [];
    }
    if (message.public_dependency) {
      obj.public_dependency = message.public_dependency.map(e => e);
    } else {
      obj.public_dependency = [];
    }
    if (message.weak_dependency) {
      obj.weak_dependency = message.weak_dependency.map(e => e);
    } else {
      obj.weak_dependency = [];
    }
    if (message.message_type) {
      obj.message_type = message.message_type.map(e => e ? DescriptorProto.toAmino(e) : undefined);
    } else {
      obj.message_type = [];
    }
    if (message.enum_type) {
      obj.enum_type = message.enum_type.map(e => e ? EnumDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.enum_type = [];
    }
    if (message.service) {
      obj.service = message.service.map(e => e ? ServiceDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.service = [];
    }
    if (message.extension) {
      obj.extension = message.extension.map(e => e ? FieldDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.extension = [];
    }
    obj.options = message.options ? FileOptions.toAmino(message.options) : undefined;
    obj.source_code_info = message.source_code_info ? SourceCodeInfo.toAmino(message.source_code_info) : undefined;
    obj.syntax = message.syntax;
    return obj;
  },
  fromAminoMsg(object: FileDescriptorProtoAminoMsg): FileDescriptorProto {
    return FileDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message: FileDescriptorProtoProtoMsg): FileDescriptorProto {
    return FileDescriptorProto.decode(message.value);
  },
  toProto(message: FileDescriptorProto): Uint8Array {
    return FileDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message: FileDescriptorProto): FileDescriptorProtoProtoMsg {
    return {
      typeUrl: "/google.protobuf.FileDescriptorProto",
      value: FileDescriptorProto.encode(message).finish()
    };
  }
};
function createBaseDescriptorProto(): DescriptorProto {
  return {
    name: "",
    field: [],
    extension: [],
    nested_type: [],
    enum_type: [],
    extension_range: [],
    oneof_decl: [],
    options: MessageOptions.fromPartial({}),
    reserved_range: [],
    reserved_name: []
  };
}
export const DescriptorProto = {
  typeUrl: "/google.protobuf.DescriptorProto",
  encode(message: DescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.field) {
      FieldDescriptorProto.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.extension) {
      FieldDescriptorProto.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.nested_type) {
      DescriptorProto.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.enum_type) {
      EnumDescriptorProto.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.extension_range) {
      DescriptorProto_ExtensionRange.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.oneof_decl) {
      OneofDescriptorProto.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.options !== undefined) {
      MessageOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.reserved_range) {
      DescriptorProto_ReservedRange.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.reserved_name) {
      writer.uint32(82).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DescriptorProto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.field.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 6:
          message.extension.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 3:
          message.nested_type.push(DescriptorProto.decode(reader, reader.uint32()));
          break;
        case 4:
          message.enum_type.push(EnumDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 5:
          message.extension_range.push(DescriptorProto_ExtensionRange.decode(reader, reader.uint32()));
          break;
        case 8:
          message.oneof_decl.push(OneofDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 7:
          message.options = MessageOptions.decode(reader, reader.uint32());
          break;
        case 9:
          message.reserved_range.push(DescriptorProto_ReservedRange.decode(reader, reader.uint32()));
          break;
        case 10:
          message.reserved_name.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DescriptorProto {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      field: Array.isArray(object?.field) ? object.field.map((e: any) => FieldDescriptorProto.fromJSON(e)) : [],
      extension: Array.isArray(object?.extension) ? object.extension.map((e: any) => FieldDescriptorProto.fromJSON(e)) : [],
      nested_type: Array.isArray(object?.nested_type) ? object.nested_type.map((e: any) => DescriptorProto.fromJSON(e)) : [],
      enum_type: Array.isArray(object?.enum_type) ? object.enum_type.map((e: any) => EnumDescriptorProto.fromJSON(e)) : [],
      extension_range: Array.isArray(object?.extension_range) ? object.extension_range.map((e: any) => DescriptorProto_ExtensionRange.fromJSON(e)) : [],
      oneof_decl: Array.isArray(object?.oneof_decl) ? object.oneof_decl.map((e: any) => OneofDescriptorProto.fromJSON(e)) : [],
      options: isSet(object.options) ? MessageOptions.fromJSON(object.options) : undefined,
      reserved_range: Array.isArray(object?.reserved_range) ? object.reserved_range.map((e: any) => DescriptorProto_ReservedRange.fromJSON(e)) : [],
      reserved_name: Array.isArray(object?.reserved_name) ? object.reserved_name.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: DescriptorProto): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.field) {
      obj.field = message.field.map(e => e ? FieldDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.field = [];
    }
    if (message.extension) {
      obj.extension = message.extension.map(e => e ? FieldDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.extension = [];
    }
    if (message.nested_type) {
      obj.nested_type = message.nested_type.map(e => e ? DescriptorProto.toJSON(e) : undefined);
    } else {
      obj.nested_type = [];
    }
    if (message.enum_type) {
      obj.enum_type = message.enum_type.map(e => e ? EnumDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.enum_type = [];
    }
    if (message.extension_range) {
      obj.extension_range = message.extension_range.map(e => e ? DescriptorProto_ExtensionRange.toJSON(e) : undefined);
    } else {
      obj.extension_range = [];
    }
    if (message.oneof_decl) {
      obj.oneof_decl = message.oneof_decl.map(e => e ? OneofDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.oneof_decl = [];
    }
    message.options !== undefined && (obj.options = message.options ? MessageOptions.toJSON(message.options) : undefined);
    if (message.reserved_range) {
      obj.reserved_range = message.reserved_range.map(e => e ? DescriptorProto_ReservedRange.toJSON(e) : undefined);
    } else {
      obj.reserved_range = [];
    }
    if (message.reserved_name) {
      obj.reserved_name = message.reserved_name.map(e => e);
    } else {
      obj.reserved_name = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<DescriptorProto>): DescriptorProto {
    const message = createBaseDescriptorProto();
    message.name = object.name ?? "";
    message.field = object.field?.map(e => FieldDescriptorProto.fromPartial(e)) || [];
    message.extension = object.extension?.map(e => FieldDescriptorProto.fromPartial(e)) || [];
    message.nested_type = object.nested_type?.map(e => DescriptorProto.fromPartial(e)) || [];
    message.enum_type = object.enum_type?.map(e => EnumDescriptorProto.fromPartial(e)) || [];
    message.extension_range = object.extension_range?.map(e => DescriptorProto_ExtensionRange.fromPartial(e)) || [];
    message.oneof_decl = object.oneof_decl?.map(e => OneofDescriptorProto.fromPartial(e)) || [];
    message.options = object.options !== undefined && object.options !== null ? MessageOptions.fromPartial(object.options) : undefined;
    message.reserved_range = object.reserved_range?.map(e => DescriptorProto_ReservedRange.fromPartial(e)) || [];
    message.reserved_name = object.reserved_name?.map(e => e) || [];
    return message;
  },
  fromAmino(object: DescriptorProtoAmino): DescriptorProto {
    return {
      name: object.name,
      field: Array.isArray(object?.field) ? object.field.map((e: any) => FieldDescriptorProto.fromAmino(e)) : [],
      extension: Array.isArray(object?.extension) ? object.extension.map((e: any) => FieldDescriptorProto.fromAmino(e)) : [],
      nested_type: Array.isArray(object?.nested_type) ? object.nested_type.map((e: any) => DescriptorProto.fromAmino(e)) : [],
      enum_type: Array.isArray(object?.enum_type) ? object.enum_type.map((e: any) => EnumDescriptorProto.fromAmino(e)) : [],
      extension_range: Array.isArray(object?.extension_range) ? object.extension_range.map((e: any) => DescriptorProto_ExtensionRange.fromAmino(e)) : [],
      oneof_decl: Array.isArray(object?.oneof_decl) ? object.oneof_decl.map((e: any) => OneofDescriptorProto.fromAmino(e)) : [],
      options: object?.options ? MessageOptions.fromAmino(object.options) : undefined,
      reserved_range: Array.isArray(object?.reserved_range) ? object.reserved_range.map((e: any) => DescriptorProto_ReservedRange.fromAmino(e)) : [],
      reserved_name: Array.isArray(object?.reserved_name) ? object.reserved_name.map((e: any) => e) : []
    };
  },
  toAmino(message: DescriptorProto): DescriptorProtoAmino {
    const obj: any = {};
    obj.name = message.name;
    if (message.field) {
      obj.field = message.field.map(e => e ? FieldDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.field = [];
    }
    if (message.extension) {
      obj.extension = message.extension.map(e => e ? FieldDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.extension = [];
    }
    if (message.nested_type) {
      obj.nested_type = message.nested_type.map(e => e ? DescriptorProto.toAmino(e) : undefined);
    } else {
      obj.nested_type = [];
    }
    if (message.enum_type) {
      obj.enum_type = message.enum_type.map(e => e ? EnumDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.enum_type = [];
    }
    if (message.extension_range) {
      obj.extension_range = message.extension_range.map(e => e ? DescriptorProto_ExtensionRange.toAmino(e) : undefined);
    } else {
      obj.extension_range = [];
    }
    if (message.oneof_decl) {
      obj.oneof_decl = message.oneof_decl.map(e => e ? OneofDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.oneof_decl = [];
    }
    obj.options = message.options ? MessageOptions.toAmino(message.options) : undefined;
    if (message.reserved_range) {
      obj.reserved_range = message.reserved_range.map(e => e ? DescriptorProto_ReservedRange.toAmino(e) : undefined);
    } else {
      obj.reserved_range = [];
    }
    if (message.reserved_name) {
      obj.reserved_name = message.reserved_name.map(e => e);
    } else {
      obj.reserved_name = [];
    }
    return obj;
  },
  fromAminoMsg(object: DescriptorProtoAminoMsg): DescriptorProto {
    return DescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message: DescriptorProtoProtoMsg): DescriptorProto {
    return DescriptorProto.decode(message.value);
  },
  toProto(message: DescriptorProto): Uint8Array {
    return DescriptorProto.encode(message).finish();
  },
  toProtoMsg(message: DescriptorProto): DescriptorProtoProtoMsg {
    return {
      typeUrl: "/google.protobuf.DescriptorProto",
      value: DescriptorProto.encode(message).finish()
    };
  }
};
function createBaseDescriptorProto_ExtensionRange(): DescriptorProto_ExtensionRange {
  return {
    start: 0,
    end: 0,
    options: ExtensionRangeOptions.fromPartial({})
  };
}
export const DescriptorProto_ExtensionRange = {
  typeUrl: "/google.protobuf.ExtensionRange",
  encode(message: DescriptorProto_ExtensionRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    if (message.options !== undefined) {
      ExtensionRangeOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DescriptorProto_ExtensionRange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescriptorProto_ExtensionRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = reader.int32();
          break;
        case 2:
          message.end = reader.int32();
          break;
        case 3:
          message.options = ExtensionRangeOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DescriptorProto_ExtensionRange {
    return {
      start: isSet(object.start) ? Number(object.start) : 0,
      end: isSet(object.end) ? Number(object.end) : 0,
      options: isSet(object.options) ? ExtensionRangeOptions.fromJSON(object.options) : undefined
    };
  },
  toJSON(message: DescriptorProto_ExtensionRange): unknown {
    const obj: any = {};
    message.start !== undefined && (obj.start = Math.round(message.start));
    message.end !== undefined && (obj.end = Math.round(message.end));
    message.options !== undefined && (obj.options = message.options ? ExtensionRangeOptions.toJSON(message.options) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<DescriptorProto_ExtensionRange>): DescriptorProto_ExtensionRange {
    const message = createBaseDescriptorProto_ExtensionRange();
    message.start = object.start ?? 0;
    message.end = object.end ?? 0;
    message.options = object.options !== undefined && object.options !== null ? ExtensionRangeOptions.fromPartial(object.options) : undefined;
    return message;
  },
  fromAmino(object: DescriptorProto_ExtensionRangeAmino): DescriptorProto_ExtensionRange {
    return {
      start: object.start,
      end: object.end,
      options: object?.options ? ExtensionRangeOptions.fromAmino(object.options) : undefined
    };
  },
  toAmino(message: DescriptorProto_ExtensionRange): DescriptorProto_ExtensionRangeAmino {
    const obj: any = {};
    obj.start = message.start;
    obj.end = message.end;
    obj.options = message.options ? ExtensionRangeOptions.toAmino(message.options) : undefined;
    return obj;
  },
  fromAminoMsg(object: DescriptorProto_ExtensionRangeAminoMsg): DescriptorProto_ExtensionRange {
    return DescriptorProto_ExtensionRange.fromAmino(object.value);
  },
  fromProtoMsg(message: DescriptorProto_ExtensionRangeProtoMsg): DescriptorProto_ExtensionRange {
    return DescriptorProto_ExtensionRange.decode(message.value);
  },
  toProto(message: DescriptorProto_ExtensionRange): Uint8Array {
    return DescriptorProto_ExtensionRange.encode(message).finish();
  },
  toProtoMsg(message: DescriptorProto_ExtensionRange): DescriptorProto_ExtensionRangeProtoMsg {
    return {
      typeUrl: "/google.protobuf.ExtensionRange",
      value: DescriptorProto_ExtensionRange.encode(message).finish()
    };
  }
};
function createBaseDescriptorProto_ReservedRange(): DescriptorProto_ReservedRange {
  return {
    start: 0,
    end: 0
  };
}
export const DescriptorProto_ReservedRange = {
  typeUrl: "/google.protobuf.ReservedRange",
  encode(message: DescriptorProto_ReservedRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DescriptorProto_ReservedRange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescriptorProto_ReservedRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = reader.int32();
          break;
        case 2:
          message.end = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DescriptorProto_ReservedRange {
    return {
      start: isSet(object.start) ? Number(object.start) : 0,
      end: isSet(object.end) ? Number(object.end) : 0
    };
  },
  toJSON(message: DescriptorProto_ReservedRange): unknown {
    const obj: any = {};
    message.start !== undefined && (obj.start = Math.round(message.start));
    message.end !== undefined && (obj.end = Math.round(message.end));
    return obj;
  },
  fromPartial(object: DeepPartial<DescriptorProto_ReservedRange>): DescriptorProto_ReservedRange {
    const message = createBaseDescriptorProto_ReservedRange();
    message.start = object.start ?? 0;
    message.end = object.end ?? 0;
    return message;
  },
  fromAmino(object: DescriptorProto_ReservedRangeAmino): DescriptorProto_ReservedRange {
    return {
      start: object.start,
      end: object.end
    };
  },
  toAmino(message: DescriptorProto_ReservedRange): DescriptorProto_ReservedRangeAmino {
    const obj: any = {};
    obj.start = message.start;
    obj.end = message.end;
    return obj;
  },
  fromAminoMsg(object: DescriptorProto_ReservedRangeAminoMsg): DescriptorProto_ReservedRange {
    return DescriptorProto_ReservedRange.fromAmino(object.value);
  },
  fromProtoMsg(message: DescriptorProto_ReservedRangeProtoMsg): DescriptorProto_ReservedRange {
    return DescriptorProto_ReservedRange.decode(message.value);
  },
  toProto(message: DescriptorProto_ReservedRange): Uint8Array {
    return DescriptorProto_ReservedRange.encode(message).finish();
  },
  toProtoMsg(message: DescriptorProto_ReservedRange): DescriptorProto_ReservedRangeProtoMsg {
    return {
      typeUrl: "/google.protobuf.ReservedRange",
      value: DescriptorProto_ReservedRange.encode(message).finish()
    };
  }
};
function createBaseExtensionRangeOptions(): ExtensionRangeOptions {
  return {
    uninterpreted_option: []
  };
}
export const ExtensionRangeOptions = {
  typeUrl: "/google.protobuf.ExtensionRangeOptions",
  encode(message: ExtensionRangeOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.uninterpreted_option) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ExtensionRangeOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtensionRangeOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 999:
          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExtensionRangeOptions {
    return {
      uninterpreted_option: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e)) : []
    };
  },
  toJSON(message: ExtensionRangeOptions): unknown {
    const obj: any = {};
    if (message.uninterpreted_option) {
      obj.uninterpreted_option = message.uninterpreted_option.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ExtensionRangeOptions>): ExtensionRangeOptions {
    const message = createBaseExtensionRangeOptions();
    message.uninterpreted_option = object.uninterpreted_option?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ExtensionRangeOptionsAmino): ExtensionRangeOptions {
    return {
      uninterpreted_option: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromAmino(e)) : []
    };
  },
  toAmino(message: ExtensionRangeOptions): ExtensionRangeOptionsAmino {
    const obj: any = {};
    if (message.uninterpreted_option) {
      obj.uninterpreted_option = message.uninterpreted_option.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAminoMsg(object: ExtensionRangeOptionsAminoMsg): ExtensionRangeOptions {
    return ExtensionRangeOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: ExtensionRangeOptionsProtoMsg): ExtensionRangeOptions {
    return ExtensionRangeOptions.decode(message.value);
  },
  toProto(message: ExtensionRangeOptions): Uint8Array {
    return ExtensionRangeOptions.encode(message).finish();
  },
  toProtoMsg(message: ExtensionRangeOptions): ExtensionRangeOptionsProtoMsg {
    return {
      typeUrl: "/google.protobuf.ExtensionRangeOptions",
      value: ExtensionRangeOptions.encode(message).finish()
    };
  }
};
function createBaseFieldDescriptorProto(): FieldDescriptorProto {
  return {
    name: "",
    number: 0,
    label: 1,
    type: 1,
    type_name: "",
    extendee: "",
    default_value: "",
    oneof_index: 0,
    json_name: "",
    options: FieldOptions.fromPartial({})
  };
}
export const FieldDescriptorProto = {
  typeUrl: "/google.protobuf.FieldDescriptorProto",
  encode(message: FieldDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== 0) {
      writer.uint32(24).int32(message.number);
    }
    if (message.label !== 1) {
      writer.uint32(32).int32(message.label);
    }
    if (message.type !== 1) {
      writer.uint32(40).int32(message.type);
    }
    if (message.type_name !== "") {
      writer.uint32(50).string(message.type_name);
    }
    if (message.extendee !== "") {
      writer.uint32(18).string(message.extendee);
    }
    if (message.default_value !== "") {
      writer.uint32(58).string(message.default_value);
    }
    if (message.oneof_index !== 0) {
      writer.uint32(72).int32(message.oneof_index);
    }
    if (message.json_name !== "") {
      writer.uint32(82).string(message.json_name);
    }
    if (message.options !== undefined) {
      FieldOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): FieldDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 3:
          message.number = reader.int32();
          break;
        case 4:
          message.label = (reader.int32() as any);
          break;
        case 5:
          message.type = (reader.int32() as any);
          break;
        case 6:
          message.type_name = reader.string();
          break;
        case 2:
          message.extendee = reader.string();
          break;
        case 7:
          message.default_value = reader.string();
          break;
        case 9:
          message.oneof_index = reader.int32();
          break;
        case 10:
          message.json_name = reader.string();
          break;
        case 8:
          message.options = FieldOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FieldDescriptorProto {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      number: isSet(object.number) ? Number(object.number) : 0,
      label: isSet(object.label) ? fieldDescriptorProto_LabelFromJSON(object.label) : -1,
      type: isSet(object.type) ? fieldDescriptorProto_TypeFromJSON(object.type) : -1,
      type_name: isSet(object.type_name) ? String(object.type_name) : "",
      extendee: isSet(object.extendee) ? String(object.extendee) : "",
      default_value: isSet(object.default_value) ? String(object.default_value) : "",
      oneof_index: isSet(object.oneof_index) ? Number(object.oneof_index) : 0,
      json_name: isSet(object.json_name) ? String(object.json_name) : "",
      options: isSet(object.options) ? FieldOptions.fromJSON(object.options) : undefined
    };
  },
  toJSON(message: FieldDescriptorProto): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.number !== undefined && (obj.number = Math.round(message.number));
    message.label !== undefined && (obj.label = fieldDescriptorProto_LabelToJSON(message.label));
    message.type !== undefined && (obj.type = fieldDescriptorProto_TypeToJSON(message.type));
    message.type_name !== undefined && (obj.type_name = message.type_name);
    message.extendee !== undefined && (obj.extendee = message.extendee);
    message.default_value !== undefined && (obj.default_value = message.default_value);
    message.oneof_index !== undefined && (obj.oneof_index = Math.round(message.oneof_index));
    message.json_name !== undefined && (obj.json_name = message.json_name);
    message.options !== undefined && (obj.options = message.options ? FieldOptions.toJSON(message.options) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<FieldDescriptorProto>): FieldDescriptorProto {
    const message = createBaseFieldDescriptorProto();
    message.name = object.name ?? "";
    message.number = object.number ?? 0;
    message.label = object.label ?? 1;
    message.type = object.type ?? 1;
    message.type_name = object.type_name ?? "";
    message.extendee = object.extendee ?? "";
    message.default_value = object.default_value ?? "";
    message.oneof_index = object.oneof_index ?? 0;
    message.json_name = object.json_name ?? "";
    message.options = object.options !== undefined && object.options !== null ? FieldOptions.fromPartial(object.options) : undefined;
    return message;
  },
  fromAmino(object: FieldDescriptorProtoAmino): FieldDescriptorProto {
    return {
      name: object.name,
      number: object.number,
      label: isSet(object.label) ? fieldDescriptorProto_LabelFromJSON(object.label) : -1,
      type: isSet(object.type) ? fieldDescriptorProto_TypeFromJSON(object.type) : -1,
      type_name: object.type_name,
      extendee: object.extendee,
      default_value: object.default_value,
      oneof_index: object.oneof_index,
      json_name: object.json_name,
      options: object?.options ? FieldOptions.fromAmino(object.options) : undefined
    };
  },
  toAmino(message: FieldDescriptorProto): FieldDescriptorProtoAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.number = message.number;
    obj.label = message.label;
    obj.type = message.type;
    obj.type_name = message.type_name;
    obj.extendee = message.extendee;
    obj.default_value = message.default_value;
    obj.oneof_index = message.oneof_index;
    obj.json_name = message.json_name;
    obj.options = message.options ? FieldOptions.toAmino(message.options) : undefined;
    return obj;
  },
  fromAminoMsg(object: FieldDescriptorProtoAminoMsg): FieldDescriptorProto {
    return FieldDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message: FieldDescriptorProtoProtoMsg): FieldDescriptorProto {
    return FieldDescriptorProto.decode(message.value);
  },
  toProto(message: FieldDescriptorProto): Uint8Array {
    return FieldDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message: FieldDescriptorProto): FieldDescriptorProtoProtoMsg {
    return {
      typeUrl: "/google.protobuf.FieldDescriptorProto",
      value: FieldDescriptorProto.encode(message).finish()
    };
  }
};
function createBaseOneofDescriptorProto(): OneofDescriptorProto {
  return {
    name: "",
    options: OneofOptions.fromPartial({})
  };
}
export const OneofDescriptorProto = {
  typeUrl: "/google.protobuf.OneofDescriptorProto",
  encode(message: OneofDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.options !== undefined) {
      OneofOptions.encode(message.options, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): OneofDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOneofDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.options = OneofOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OneofDescriptorProto {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      options: isSet(object.options) ? OneofOptions.fromJSON(object.options) : undefined
    };
  },
  toJSON(message: OneofDescriptorProto): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.options !== undefined && (obj.options = message.options ? OneofOptions.toJSON(message.options) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<OneofDescriptorProto>): OneofDescriptorProto {
    const message = createBaseOneofDescriptorProto();
    message.name = object.name ?? "";
    message.options = object.options !== undefined && object.options !== null ? OneofOptions.fromPartial(object.options) : undefined;
    return message;
  },
  fromAmino(object: OneofDescriptorProtoAmino): OneofDescriptorProto {
    return {
      name: object.name,
      options: object?.options ? OneofOptions.fromAmino(object.options) : undefined
    };
  },
  toAmino(message: OneofDescriptorProto): OneofDescriptorProtoAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.options = message.options ? OneofOptions.toAmino(message.options) : undefined;
    return obj;
  },
  fromAminoMsg(object: OneofDescriptorProtoAminoMsg): OneofDescriptorProto {
    return OneofDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message: OneofDescriptorProtoProtoMsg): OneofDescriptorProto {
    return OneofDescriptorProto.decode(message.value);
  },
  toProto(message: OneofDescriptorProto): Uint8Array {
    return OneofDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message: OneofDescriptorProto): OneofDescriptorProtoProtoMsg {
    return {
      typeUrl: "/google.protobuf.OneofDescriptorProto",
      value: OneofDescriptorProto.encode(message).finish()
    };
  }
};
function createBaseEnumDescriptorProto(): EnumDescriptorProto {
  return {
    name: "",
    value: [],
    options: EnumOptions.fromPartial({}),
    reserved_range: [],
    reserved_name: []
  };
}
export const EnumDescriptorProto = {
  typeUrl: "/google.protobuf.EnumDescriptorProto",
  encode(message: EnumDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.value) {
      EnumValueDescriptorProto.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.options !== undefined) {
      EnumOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.reserved_range) {
      EnumDescriptorProto_EnumReservedRange.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.reserved_name) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EnumDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.value.push(EnumValueDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 3:
          message.options = EnumOptions.decode(reader, reader.uint32());
          break;
        case 4:
          message.reserved_range.push(EnumDescriptorProto_EnumReservedRange.decode(reader, reader.uint32()));
          break;
        case 5:
          message.reserved_name.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EnumDescriptorProto {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: Array.isArray(object?.value) ? object.value.map((e: any) => EnumValueDescriptorProto.fromJSON(e)) : [],
      options: isSet(object.options) ? EnumOptions.fromJSON(object.options) : undefined,
      reserved_range: Array.isArray(object?.reserved_range) ? object.reserved_range.map((e: any) => EnumDescriptorProto_EnumReservedRange.fromJSON(e)) : [],
      reserved_name: Array.isArray(object?.reserved_name) ? object.reserved_name.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: EnumDescriptorProto): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.value) {
      obj.value = message.value.map(e => e ? EnumValueDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.value = [];
    }
    message.options !== undefined && (obj.options = message.options ? EnumOptions.toJSON(message.options) : undefined);
    if (message.reserved_range) {
      obj.reserved_range = message.reserved_range.map(e => e ? EnumDescriptorProto_EnumReservedRange.toJSON(e) : undefined);
    } else {
      obj.reserved_range = [];
    }
    if (message.reserved_name) {
      obj.reserved_name = message.reserved_name.map(e => e);
    } else {
      obj.reserved_name = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<EnumDescriptorProto>): EnumDescriptorProto {
    const message = createBaseEnumDescriptorProto();
    message.name = object.name ?? "";
    message.value = object.value?.map(e => EnumValueDescriptorProto.fromPartial(e)) || [];
    message.options = object.options !== undefined && object.options !== null ? EnumOptions.fromPartial(object.options) : undefined;
    message.reserved_range = object.reserved_range?.map(e => EnumDescriptorProto_EnumReservedRange.fromPartial(e)) || [];
    message.reserved_name = object.reserved_name?.map(e => e) || [];
    return message;
  },
  fromAmino(object: EnumDescriptorProtoAmino): EnumDescriptorProto {
    return {
      name: object.name,
      value: Array.isArray(object?.value) ? object.value.map((e: any) => EnumValueDescriptorProto.fromAmino(e)) : [],
      options: object?.options ? EnumOptions.fromAmino(object.options) : undefined,
      reserved_range: Array.isArray(object?.reserved_range) ? object.reserved_range.map((e: any) => EnumDescriptorProto_EnumReservedRange.fromAmino(e)) : [],
      reserved_name: Array.isArray(object?.reserved_name) ? object.reserved_name.map((e: any) => e) : []
    };
  },
  toAmino(message: EnumDescriptorProto): EnumDescriptorProtoAmino {
    const obj: any = {};
    obj.name = message.name;
    if (message.value) {
      obj.value = message.value.map(e => e ? EnumValueDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.value = [];
    }
    obj.options = message.options ? EnumOptions.toAmino(message.options) : undefined;
    if (message.reserved_range) {
      obj.reserved_range = message.reserved_range.map(e => e ? EnumDescriptorProto_EnumReservedRange.toAmino(e) : undefined);
    } else {
      obj.reserved_range = [];
    }
    if (message.reserved_name) {
      obj.reserved_name = message.reserved_name.map(e => e);
    } else {
      obj.reserved_name = [];
    }
    return obj;
  },
  fromAminoMsg(object: EnumDescriptorProtoAminoMsg): EnumDescriptorProto {
    return EnumDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message: EnumDescriptorProtoProtoMsg): EnumDescriptorProto {
    return EnumDescriptorProto.decode(message.value);
  },
  toProto(message: EnumDescriptorProto): Uint8Array {
    return EnumDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message: EnumDescriptorProto): EnumDescriptorProtoProtoMsg {
    return {
      typeUrl: "/google.protobuf.EnumDescriptorProto",
      value: EnumDescriptorProto.encode(message).finish()
    };
  }
};
function createBaseEnumDescriptorProto_EnumReservedRange(): EnumDescriptorProto_EnumReservedRange {
  return {
    start: 0,
    end: 0
  };
}
export const EnumDescriptorProto_EnumReservedRange = {
  typeUrl: "/google.protobuf.EnumReservedRange",
  encode(message: EnumDescriptorProto_EnumReservedRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EnumDescriptorProto_EnumReservedRange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumDescriptorProto_EnumReservedRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = reader.int32();
          break;
        case 2:
          message.end = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EnumDescriptorProto_EnumReservedRange {
    return {
      start: isSet(object.start) ? Number(object.start) : 0,
      end: isSet(object.end) ? Number(object.end) : 0
    };
  },
  toJSON(message: EnumDescriptorProto_EnumReservedRange): unknown {
    const obj: any = {};
    message.start !== undefined && (obj.start = Math.round(message.start));
    message.end !== undefined && (obj.end = Math.round(message.end));
    return obj;
  },
  fromPartial(object: DeepPartial<EnumDescriptorProto_EnumReservedRange>): EnumDescriptorProto_EnumReservedRange {
    const message = createBaseEnumDescriptorProto_EnumReservedRange();
    message.start = object.start ?? 0;
    message.end = object.end ?? 0;
    return message;
  },
  fromAmino(object: EnumDescriptorProto_EnumReservedRangeAmino): EnumDescriptorProto_EnumReservedRange {
    return {
      start: object.start,
      end: object.end
    };
  },
  toAmino(message: EnumDescriptorProto_EnumReservedRange): EnumDescriptorProto_EnumReservedRangeAmino {
    const obj: any = {};
    obj.start = message.start;
    obj.end = message.end;
    return obj;
  },
  fromAminoMsg(object: EnumDescriptorProto_EnumReservedRangeAminoMsg): EnumDescriptorProto_EnumReservedRange {
    return EnumDescriptorProto_EnumReservedRange.fromAmino(object.value);
  },
  fromProtoMsg(message: EnumDescriptorProto_EnumReservedRangeProtoMsg): EnumDescriptorProto_EnumReservedRange {
    return EnumDescriptorProto_EnumReservedRange.decode(message.value);
  },
  toProto(message: EnumDescriptorProto_EnumReservedRange): Uint8Array {
    return EnumDescriptorProto_EnumReservedRange.encode(message).finish();
  },
  toProtoMsg(message: EnumDescriptorProto_EnumReservedRange): EnumDescriptorProto_EnumReservedRangeProtoMsg {
    return {
      typeUrl: "/google.protobuf.EnumReservedRange",
      value: EnumDescriptorProto_EnumReservedRange.encode(message).finish()
    };
  }
};
function createBaseEnumValueDescriptorProto(): EnumValueDescriptorProto {
  return {
    name: "",
    number: 0,
    options: EnumValueOptions.fromPartial({})
  };
}
export const EnumValueDescriptorProto = {
  typeUrl: "/google.protobuf.EnumValueDescriptorProto",
  encode(message: EnumValueDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== 0) {
      writer.uint32(16).int32(message.number);
    }
    if (message.options !== undefined) {
      EnumValueOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EnumValueDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumValueDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.number = reader.int32();
          break;
        case 3:
          message.options = EnumValueOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EnumValueDescriptorProto {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      number: isSet(object.number) ? Number(object.number) : 0,
      options: isSet(object.options) ? EnumValueOptions.fromJSON(object.options) : undefined
    };
  },
  toJSON(message: EnumValueDescriptorProto): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.number !== undefined && (obj.number = Math.round(message.number));
    message.options !== undefined && (obj.options = message.options ? EnumValueOptions.toJSON(message.options) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<EnumValueDescriptorProto>): EnumValueDescriptorProto {
    const message = createBaseEnumValueDescriptorProto();
    message.name = object.name ?? "";
    message.number = object.number ?? 0;
    message.options = object.options !== undefined && object.options !== null ? EnumValueOptions.fromPartial(object.options) : undefined;
    return message;
  },
  fromAmino(object: EnumValueDescriptorProtoAmino): EnumValueDescriptorProto {
    return {
      name: object.name,
      number: object.number,
      options: object?.options ? EnumValueOptions.fromAmino(object.options) : undefined
    };
  },
  toAmino(message: EnumValueDescriptorProto): EnumValueDescriptorProtoAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.number = message.number;
    obj.options = message.options ? EnumValueOptions.toAmino(message.options) : undefined;
    return obj;
  },
  fromAminoMsg(object: EnumValueDescriptorProtoAminoMsg): EnumValueDescriptorProto {
    return EnumValueDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message: EnumValueDescriptorProtoProtoMsg): EnumValueDescriptorProto {
    return EnumValueDescriptorProto.decode(message.value);
  },
  toProto(message: EnumValueDescriptorProto): Uint8Array {
    return EnumValueDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message: EnumValueDescriptorProto): EnumValueDescriptorProtoProtoMsg {
    return {
      typeUrl: "/google.protobuf.EnumValueDescriptorProto",
      value: EnumValueDescriptorProto.encode(message).finish()
    };
  }
};
function createBaseServiceDescriptorProto(): ServiceDescriptorProto {
  return {
    name: "",
    method: [],
    options: ServiceOptions.fromPartial({})
  };
}
export const ServiceDescriptorProto = {
  typeUrl: "/google.protobuf.ServiceDescriptorProto",
  encode(message: ServiceDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.method) {
      MethodDescriptorProto.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.options !== undefined) {
      ServiceOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.method.push(MethodDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 3:
          message.options = ServiceOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ServiceDescriptorProto {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      method: Array.isArray(object?.method) ? object.method.map((e: any) => MethodDescriptorProto.fromJSON(e)) : [],
      options: isSet(object.options) ? ServiceOptions.fromJSON(object.options) : undefined
    };
  },
  toJSON(message: ServiceDescriptorProto): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.method) {
      obj.method = message.method.map(e => e ? MethodDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.method = [];
    }
    message.options !== undefined && (obj.options = message.options ? ServiceOptions.toJSON(message.options) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ServiceDescriptorProto>): ServiceDescriptorProto {
    const message = createBaseServiceDescriptorProto();
    message.name = object.name ?? "";
    message.method = object.method?.map(e => MethodDescriptorProto.fromPartial(e)) || [];
    message.options = object.options !== undefined && object.options !== null ? ServiceOptions.fromPartial(object.options) : undefined;
    return message;
  },
  fromAmino(object: ServiceDescriptorProtoAmino): ServiceDescriptorProto {
    return {
      name: object.name,
      method: Array.isArray(object?.method) ? object.method.map((e: any) => MethodDescriptorProto.fromAmino(e)) : [],
      options: object?.options ? ServiceOptions.fromAmino(object.options) : undefined
    };
  },
  toAmino(message: ServiceDescriptorProto): ServiceDescriptorProtoAmino {
    const obj: any = {};
    obj.name = message.name;
    if (message.method) {
      obj.method = message.method.map(e => e ? MethodDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.method = [];
    }
    obj.options = message.options ? ServiceOptions.toAmino(message.options) : undefined;
    return obj;
  },
  fromAminoMsg(object: ServiceDescriptorProtoAminoMsg): ServiceDescriptorProto {
    return ServiceDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceDescriptorProtoProtoMsg): ServiceDescriptorProto {
    return ServiceDescriptorProto.decode(message.value);
  },
  toProto(message: ServiceDescriptorProto): Uint8Array {
    return ServiceDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message: ServiceDescriptorProto): ServiceDescriptorProtoProtoMsg {
    return {
      typeUrl: "/google.protobuf.ServiceDescriptorProto",
      value: ServiceDescriptorProto.encode(message).finish()
    };
  }
};
function createBaseMethodDescriptorProto(): MethodDescriptorProto {
  return {
    name: "",
    input_type: "",
    output_type: "",
    options: MethodOptions.fromPartial({}),
    client_streaming: false,
    server_streaming: false
  };
}
export const MethodDescriptorProto = {
  typeUrl: "/google.protobuf.MethodDescriptorProto",
  encode(message: MethodDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.input_type !== "") {
      writer.uint32(18).string(message.input_type);
    }
    if (message.output_type !== "") {
      writer.uint32(26).string(message.output_type);
    }
    if (message.options !== undefined) {
      MethodOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
    }
    if (message.client_streaming === true) {
      writer.uint32(40).bool(message.client_streaming);
    }
    if (message.server_streaming === true) {
      writer.uint32(48).bool(message.server_streaming);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MethodDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMethodDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.input_type = reader.string();
          break;
        case 3:
          message.output_type = reader.string();
          break;
        case 4:
          message.options = MethodOptions.decode(reader, reader.uint32());
          break;
        case 5:
          message.client_streaming = reader.bool();
          break;
        case 6:
          message.server_streaming = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MethodDescriptorProto {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      input_type: isSet(object.input_type) ? String(object.input_type) : "",
      output_type: isSet(object.output_type) ? String(object.output_type) : "",
      options: isSet(object.options) ? MethodOptions.fromJSON(object.options) : undefined,
      client_streaming: isSet(object.client_streaming) ? Boolean(object.client_streaming) : false,
      server_streaming: isSet(object.server_streaming) ? Boolean(object.server_streaming) : false
    };
  },
  toJSON(message: MethodDescriptorProto): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.input_type !== undefined && (obj.input_type = message.input_type);
    message.output_type !== undefined && (obj.output_type = message.output_type);
    message.options !== undefined && (obj.options = message.options ? MethodOptions.toJSON(message.options) : undefined);
    message.client_streaming !== undefined && (obj.client_streaming = message.client_streaming);
    message.server_streaming !== undefined && (obj.server_streaming = message.server_streaming);
    return obj;
  },
  fromPartial(object: DeepPartial<MethodDescriptorProto>): MethodDescriptorProto {
    const message = createBaseMethodDescriptorProto();
    message.name = object.name ?? "";
    message.input_type = object.input_type ?? "";
    message.output_type = object.output_type ?? "";
    message.options = object.options !== undefined && object.options !== null ? MethodOptions.fromPartial(object.options) : undefined;
    message.client_streaming = object.client_streaming ?? false;
    message.server_streaming = object.server_streaming ?? false;
    return message;
  },
  fromAmino(object: MethodDescriptorProtoAmino): MethodDescriptorProto {
    return {
      name: object.name,
      input_type: object.input_type,
      output_type: object.output_type,
      options: object?.options ? MethodOptions.fromAmino(object.options) : undefined,
      client_streaming: object.client_streaming,
      server_streaming: object.server_streaming
    };
  },
  toAmino(message: MethodDescriptorProto): MethodDescriptorProtoAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.input_type = message.input_type;
    obj.output_type = message.output_type;
    obj.options = message.options ? MethodOptions.toAmino(message.options) : undefined;
    obj.client_streaming = message.client_streaming;
    obj.server_streaming = message.server_streaming;
    return obj;
  },
  fromAminoMsg(object: MethodDescriptorProtoAminoMsg): MethodDescriptorProto {
    return MethodDescriptorProto.fromAmino(object.value);
  },
  fromProtoMsg(message: MethodDescriptorProtoProtoMsg): MethodDescriptorProto {
    return MethodDescriptorProto.decode(message.value);
  },
  toProto(message: MethodDescriptorProto): Uint8Array {
    return MethodDescriptorProto.encode(message).finish();
  },
  toProtoMsg(message: MethodDescriptorProto): MethodDescriptorProtoProtoMsg {
    return {
      typeUrl: "/google.protobuf.MethodDescriptorProto",
      value: MethodDescriptorProto.encode(message).finish()
    };
  }
};
function createBaseFileOptions(): FileOptions {
  return {
    java_package: "",
    java_outer_classname: "",
    java_multiple_files: false,
    java_generate_equals_and_hash: false,
    java_string_check_utf8: false,
    optimize_for: 1,
    go_package: "",
    cc_generic_services: false,
    java_generic_services: false,
    py_generic_services: false,
    php_generic_services: false,
    deprecated: false,
    cc_enable_arenas: false,
    objc_class_prefix: "",
    csharp_namespace: "",
    swift_prefix: "",
    php_class_prefix: "",
    php_namespace: "",
    php_metadata_namespace: "",
    ruby_package: "",
    uninterpreted_option: []
  };
}
export const FileOptions = {
  typeUrl: "/google.protobuf.FileOptions",
  encode(message: FileOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.java_package !== "") {
      writer.uint32(10).string(message.java_package);
    }
    if (message.java_outer_classname !== "") {
      writer.uint32(66).string(message.java_outer_classname);
    }
    if (message.java_multiple_files === true) {
      writer.uint32(80).bool(message.java_multiple_files);
    }
    if (message.java_generate_equals_and_hash === true) {
      writer.uint32(160).bool(message.java_generate_equals_and_hash);
    }
    if (message.java_string_check_utf8 === true) {
      writer.uint32(216).bool(message.java_string_check_utf8);
    }
    if (message.optimize_for !== 1) {
      writer.uint32(72).int32(message.optimize_for);
    }
    if (message.go_package !== "") {
      writer.uint32(90).string(message.go_package);
    }
    if (message.cc_generic_services === true) {
      writer.uint32(128).bool(message.cc_generic_services);
    }
    if (message.java_generic_services === true) {
      writer.uint32(136).bool(message.java_generic_services);
    }
    if (message.py_generic_services === true) {
      writer.uint32(144).bool(message.py_generic_services);
    }
    if (message.php_generic_services === true) {
      writer.uint32(336).bool(message.php_generic_services);
    }
    if (message.deprecated === true) {
      writer.uint32(184).bool(message.deprecated);
    }
    if (message.cc_enable_arenas === true) {
      writer.uint32(248).bool(message.cc_enable_arenas);
    }
    if (message.objc_class_prefix !== "") {
      writer.uint32(290).string(message.objc_class_prefix);
    }
    if (message.csharp_namespace !== "") {
      writer.uint32(298).string(message.csharp_namespace);
    }
    if (message.swift_prefix !== "") {
      writer.uint32(314).string(message.swift_prefix);
    }
    if (message.php_class_prefix !== "") {
      writer.uint32(322).string(message.php_class_prefix);
    }
    if (message.php_namespace !== "") {
      writer.uint32(330).string(message.php_namespace);
    }
    if (message.php_metadata_namespace !== "") {
      writer.uint32(354).string(message.php_metadata_namespace);
    }
    if (message.ruby_package !== "") {
      writer.uint32(362).string(message.ruby_package);
    }
    for (const v of message.uninterpreted_option) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): FileOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.java_package = reader.string();
          break;
        case 8:
          message.java_outer_classname = reader.string();
          break;
        case 10:
          message.java_multiple_files = reader.bool();
          break;
        case 20:
          message.java_generate_equals_and_hash = reader.bool();
          break;
        case 27:
          message.java_string_check_utf8 = reader.bool();
          break;
        case 9:
          message.optimize_for = (reader.int32() as any);
          break;
        case 11:
          message.go_package = reader.string();
          break;
        case 16:
          message.cc_generic_services = reader.bool();
          break;
        case 17:
          message.java_generic_services = reader.bool();
          break;
        case 18:
          message.py_generic_services = reader.bool();
          break;
        case 42:
          message.php_generic_services = reader.bool();
          break;
        case 23:
          message.deprecated = reader.bool();
          break;
        case 31:
          message.cc_enable_arenas = reader.bool();
          break;
        case 36:
          message.objc_class_prefix = reader.string();
          break;
        case 37:
          message.csharp_namespace = reader.string();
          break;
        case 39:
          message.swift_prefix = reader.string();
          break;
        case 40:
          message.php_class_prefix = reader.string();
          break;
        case 41:
          message.php_namespace = reader.string();
          break;
        case 44:
          message.php_metadata_namespace = reader.string();
          break;
        case 45:
          message.ruby_package = reader.string();
          break;
        case 999:
          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FileOptions {
    return {
      java_package: isSet(object.java_package) ? String(object.java_package) : "",
      java_outer_classname: isSet(object.java_outer_classname) ? String(object.java_outer_classname) : "",
      java_multiple_files: isSet(object.java_multiple_files) ? Boolean(object.java_multiple_files) : false,
      java_generate_equals_and_hash: isSet(object.java_generate_equals_and_hash) ? Boolean(object.java_generate_equals_and_hash) : false,
      java_string_check_utf8: isSet(object.java_string_check_utf8) ? Boolean(object.java_string_check_utf8) : false,
      optimize_for: isSet(object.optimize_for) ? fileOptions_OptimizeModeFromJSON(object.optimize_for) : -1,
      go_package: isSet(object.go_package) ? String(object.go_package) : "",
      cc_generic_services: isSet(object.cc_generic_services) ? Boolean(object.cc_generic_services) : false,
      java_generic_services: isSet(object.java_generic_services) ? Boolean(object.java_generic_services) : false,
      py_generic_services: isSet(object.py_generic_services) ? Boolean(object.py_generic_services) : false,
      php_generic_services: isSet(object.php_generic_services) ? Boolean(object.php_generic_services) : false,
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
      cc_enable_arenas: isSet(object.cc_enable_arenas) ? Boolean(object.cc_enable_arenas) : false,
      objc_class_prefix: isSet(object.objc_class_prefix) ? String(object.objc_class_prefix) : "",
      csharp_namespace: isSet(object.csharp_namespace) ? String(object.csharp_namespace) : "",
      swift_prefix: isSet(object.swift_prefix) ? String(object.swift_prefix) : "",
      php_class_prefix: isSet(object.php_class_prefix) ? String(object.php_class_prefix) : "",
      php_namespace: isSet(object.php_namespace) ? String(object.php_namespace) : "",
      php_metadata_namespace: isSet(object.php_metadata_namespace) ? String(object.php_metadata_namespace) : "",
      ruby_package: isSet(object.ruby_package) ? String(object.ruby_package) : "",
      uninterpreted_option: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e)) : []
    };
  },
  toJSON(message: FileOptions): unknown {
    const obj: any = {};
    message.java_package !== undefined && (obj.java_package = message.java_package);
    message.java_outer_classname !== undefined && (obj.java_outer_classname = message.java_outer_classname);
    message.java_multiple_files !== undefined && (obj.java_multiple_files = message.java_multiple_files);
    message.java_generate_equals_and_hash !== undefined && (obj.java_generate_equals_and_hash = message.java_generate_equals_and_hash);
    message.java_string_check_utf8 !== undefined && (obj.java_string_check_utf8 = message.java_string_check_utf8);
    message.optimize_for !== undefined && (obj.optimize_for = fileOptions_OptimizeModeToJSON(message.optimize_for));
    message.go_package !== undefined && (obj.go_package = message.go_package);
    message.cc_generic_services !== undefined && (obj.cc_generic_services = message.cc_generic_services);
    message.java_generic_services !== undefined && (obj.java_generic_services = message.java_generic_services);
    message.py_generic_services !== undefined && (obj.py_generic_services = message.py_generic_services);
    message.php_generic_services !== undefined && (obj.php_generic_services = message.php_generic_services);
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.cc_enable_arenas !== undefined && (obj.cc_enable_arenas = message.cc_enable_arenas);
    message.objc_class_prefix !== undefined && (obj.objc_class_prefix = message.objc_class_prefix);
    message.csharp_namespace !== undefined && (obj.csharp_namespace = message.csharp_namespace);
    message.swift_prefix !== undefined && (obj.swift_prefix = message.swift_prefix);
    message.php_class_prefix !== undefined && (obj.php_class_prefix = message.php_class_prefix);
    message.php_namespace !== undefined && (obj.php_namespace = message.php_namespace);
    message.php_metadata_namespace !== undefined && (obj.php_metadata_namespace = message.php_metadata_namespace);
    message.ruby_package !== undefined && (obj.ruby_package = message.ruby_package);
    if (message.uninterpreted_option) {
      obj.uninterpreted_option = message.uninterpreted_option.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<FileOptions>): FileOptions {
    const message = createBaseFileOptions();
    message.java_package = object.java_package ?? "";
    message.java_outer_classname = object.java_outer_classname ?? "";
    message.java_multiple_files = object.java_multiple_files ?? false;
    message.java_generate_equals_and_hash = object.java_generate_equals_and_hash ?? false;
    message.java_string_check_utf8 = object.java_string_check_utf8 ?? false;
    message.optimize_for = object.optimize_for ?? 1;
    message.go_package = object.go_package ?? "";
    message.cc_generic_services = object.cc_generic_services ?? false;
    message.java_generic_services = object.java_generic_services ?? false;
    message.py_generic_services = object.py_generic_services ?? false;
    message.php_generic_services = object.php_generic_services ?? false;
    message.deprecated = object.deprecated ?? false;
    message.cc_enable_arenas = object.cc_enable_arenas ?? false;
    message.objc_class_prefix = object.objc_class_prefix ?? "";
    message.csharp_namespace = object.csharp_namespace ?? "";
    message.swift_prefix = object.swift_prefix ?? "";
    message.php_class_prefix = object.php_class_prefix ?? "";
    message.php_namespace = object.php_namespace ?? "";
    message.php_metadata_namespace = object.php_metadata_namespace ?? "";
    message.ruby_package = object.ruby_package ?? "";
    message.uninterpreted_option = object.uninterpreted_option?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: FileOptionsAmino): FileOptions {
    return {
      java_package: object.java_package,
      java_outer_classname: object.java_outer_classname,
      java_multiple_files: object.java_multiple_files,
      java_generate_equals_and_hash: object.java_generate_equals_and_hash,
      java_string_check_utf8: object.java_string_check_utf8,
      optimize_for: isSet(object.optimize_for) ? fileOptions_OptimizeModeFromJSON(object.optimize_for) : -1,
      go_package: object.go_package,
      cc_generic_services: object.cc_generic_services,
      java_generic_services: object.java_generic_services,
      py_generic_services: object.py_generic_services,
      php_generic_services: object.php_generic_services,
      deprecated: object.deprecated,
      cc_enable_arenas: object.cc_enable_arenas,
      objc_class_prefix: object.objc_class_prefix,
      csharp_namespace: object.csharp_namespace,
      swift_prefix: object.swift_prefix,
      php_class_prefix: object.php_class_prefix,
      php_namespace: object.php_namespace,
      php_metadata_namespace: object.php_metadata_namespace,
      ruby_package: object.ruby_package,
      uninterpreted_option: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromAmino(e)) : []
    };
  },
  toAmino(message: FileOptions): FileOptionsAmino {
    const obj: any = {};
    obj.java_package = message.java_package;
    obj.java_outer_classname = message.java_outer_classname;
    obj.java_multiple_files = message.java_multiple_files;
    obj.java_generate_equals_and_hash = message.java_generate_equals_and_hash;
    obj.java_string_check_utf8 = message.java_string_check_utf8;
    obj.optimize_for = message.optimize_for;
    obj.go_package = message.go_package;
    obj.cc_generic_services = message.cc_generic_services;
    obj.java_generic_services = message.java_generic_services;
    obj.py_generic_services = message.py_generic_services;
    obj.php_generic_services = message.php_generic_services;
    obj.deprecated = message.deprecated;
    obj.cc_enable_arenas = message.cc_enable_arenas;
    obj.objc_class_prefix = message.objc_class_prefix;
    obj.csharp_namespace = message.csharp_namespace;
    obj.swift_prefix = message.swift_prefix;
    obj.php_class_prefix = message.php_class_prefix;
    obj.php_namespace = message.php_namespace;
    obj.php_metadata_namespace = message.php_metadata_namespace;
    obj.ruby_package = message.ruby_package;
    if (message.uninterpreted_option) {
      obj.uninterpreted_option = message.uninterpreted_option.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAminoMsg(object: FileOptionsAminoMsg): FileOptions {
    return FileOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: FileOptionsProtoMsg): FileOptions {
    return FileOptions.decode(message.value);
  },
  toProto(message: FileOptions): Uint8Array {
    return FileOptions.encode(message).finish();
  },
  toProtoMsg(message: FileOptions): FileOptionsProtoMsg {
    return {
      typeUrl: "/google.protobuf.FileOptions",
      value: FileOptions.encode(message).finish()
    };
  }
};
function createBaseMessageOptions(): MessageOptions {
  return {
    message_set_wire_format: false,
    no_standard_descriptor_accessor: false,
    deprecated: false,
    map_entry: false,
    uninterpreted_option: []
  };
}
export const MessageOptions = {
  typeUrl: "/google.protobuf.MessageOptions",
  encode(message: MessageOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message_set_wire_format === true) {
      writer.uint32(8).bool(message.message_set_wire_format);
    }
    if (message.no_standard_descriptor_accessor === true) {
      writer.uint32(16).bool(message.no_standard_descriptor_accessor);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    if (message.map_entry === true) {
      writer.uint32(56).bool(message.map_entry);
    }
    for (const v of message.uninterpreted_option) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MessageOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message_set_wire_format = reader.bool();
          break;
        case 2:
          message.no_standard_descriptor_accessor = reader.bool();
          break;
        case 3:
          message.deprecated = reader.bool();
          break;
        case 7:
          message.map_entry = reader.bool();
          break;
        case 999:
          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MessageOptions {
    return {
      message_set_wire_format: isSet(object.message_set_wire_format) ? Boolean(object.message_set_wire_format) : false,
      no_standard_descriptor_accessor: isSet(object.no_standard_descriptor_accessor) ? Boolean(object.no_standard_descriptor_accessor) : false,
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
      map_entry: isSet(object.map_entry) ? Boolean(object.map_entry) : false,
      uninterpreted_option: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e)) : []
    };
  },
  toJSON(message: MessageOptions): unknown {
    const obj: any = {};
    message.message_set_wire_format !== undefined && (obj.message_set_wire_format = message.message_set_wire_format);
    message.no_standard_descriptor_accessor !== undefined && (obj.no_standard_descriptor_accessor = message.no_standard_descriptor_accessor);
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.map_entry !== undefined && (obj.map_entry = message.map_entry);
    if (message.uninterpreted_option) {
      obj.uninterpreted_option = message.uninterpreted_option.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MessageOptions>): MessageOptions {
    const message = createBaseMessageOptions();
    message.message_set_wire_format = object.message_set_wire_format ?? false;
    message.no_standard_descriptor_accessor = object.no_standard_descriptor_accessor ?? false;
    message.deprecated = object.deprecated ?? false;
    message.map_entry = object.map_entry ?? false;
    message.uninterpreted_option = object.uninterpreted_option?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MessageOptionsAmino): MessageOptions {
    return {
      message_set_wire_format: object.message_set_wire_format,
      no_standard_descriptor_accessor: object.no_standard_descriptor_accessor,
      deprecated: object.deprecated,
      map_entry: object.map_entry,
      uninterpreted_option: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromAmino(e)) : []
    };
  },
  toAmino(message: MessageOptions): MessageOptionsAmino {
    const obj: any = {};
    obj.message_set_wire_format = message.message_set_wire_format;
    obj.no_standard_descriptor_accessor = message.no_standard_descriptor_accessor;
    obj.deprecated = message.deprecated;
    obj.map_entry = message.map_entry;
    if (message.uninterpreted_option) {
      obj.uninterpreted_option = message.uninterpreted_option.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAminoMsg(object: MessageOptionsAminoMsg): MessageOptions {
    return MessageOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: MessageOptionsProtoMsg): MessageOptions {
    return MessageOptions.decode(message.value);
  },
  toProto(message: MessageOptions): Uint8Array {
    return MessageOptions.encode(message).finish();
  },
  toProtoMsg(message: MessageOptions): MessageOptionsProtoMsg {
    return {
      typeUrl: "/google.protobuf.MessageOptions",
      value: MessageOptions.encode(message).finish()
    };
  }
};
function createBaseFieldOptions(): FieldOptions {
  return {
    ctype: 1,
    packed: false,
    jstype: 1,
    lazy: false,
    deprecated: false,
    weak: false,
    uninterpreted_option: []
  };
}
export const FieldOptions = {
  typeUrl: "/google.protobuf.FieldOptions",
  encode(message: FieldOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ctype !== 1) {
      writer.uint32(8).int32(message.ctype);
    }
    if (message.packed === true) {
      writer.uint32(16).bool(message.packed);
    }
    if (message.jstype !== 1) {
      writer.uint32(48).int32(message.jstype);
    }
    if (message.lazy === true) {
      writer.uint32(40).bool(message.lazy);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    if (message.weak === true) {
      writer.uint32(80).bool(message.weak);
    }
    for (const v of message.uninterpreted_option) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): FieldOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ctype = (reader.int32() as any);
          break;
        case 2:
          message.packed = reader.bool();
          break;
        case 6:
          message.jstype = (reader.int32() as any);
          break;
        case 5:
          message.lazy = reader.bool();
          break;
        case 3:
          message.deprecated = reader.bool();
          break;
        case 10:
          message.weak = reader.bool();
          break;
        case 999:
          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FieldOptions {
    return {
      ctype: isSet(object.ctype) ? fieldOptions_CTypeFromJSON(object.ctype) : -1,
      packed: isSet(object.packed) ? Boolean(object.packed) : false,
      jstype: isSet(object.jstype) ? fieldOptions_JSTypeFromJSON(object.jstype) : -1,
      lazy: isSet(object.lazy) ? Boolean(object.lazy) : false,
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
      weak: isSet(object.weak) ? Boolean(object.weak) : false,
      uninterpreted_option: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e)) : []
    };
  },
  toJSON(message: FieldOptions): unknown {
    const obj: any = {};
    message.ctype !== undefined && (obj.ctype = fieldOptions_CTypeToJSON(message.ctype));
    message.packed !== undefined && (obj.packed = message.packed);
    message.jstype !== undefined && (obj.jstype = fieldOptions_JSTypeToJSON(message.jstype));
    message.lazy !== undefined && (obj.lazy = message.lazy);
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.weak !== undefined && (obj.weak = message.weak);
    if (message.uninterpreted_option) {
      obj.uninterpreted_option = message.uninterpreted_option.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<FieldOptions>): FieldOptions {
    const message = createBaseFieldOptions();
    message.ctype = object.ctype ?? 1;
    message.packed = object.packed ?? false;
    message.jstype = object.jstype ?? 1;
    message.lazy = object.lazy ?? false;
    message.deprecated = object.deprecated ?? false;
    message.weak = object.weak ?? false;
    message.uninterpreted_option = object.uninterpreted_option?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: FieldOptionsAmino): FieldOptions {
    return {
      ctype: isSet(object.ctype) ? fieldOptions_CTypeFromJSON(object.ctype) : -1,
      packed: object.packed,
      jstype: isSet(object.jstype) ? fieldOptions_JSTypeFromJSON(object.jstype) : -1,
      lazy: object.lazy,
      deprecated: object.deprecated,
      weak: object.weak,
      uninterpreted_option: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromAmino(e)) : []
    };
  },
  toAmino(message: FieldOptions): FieldOptionsAmino {
    const obj: any = {};
    obj.ctype = message.ctype;
    obj.packed = message.packed;
    obj.jstype = message.jstype;
    obj.lazy = message.lazy;
    obj.deprecated = message.deprecated;
    obj.weak = message.weak;
    if (message.uninterpreted_option) {
      obj.uninterpreted_option = message.uninterpreted_option.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAminoMsg(object: FieldOptionsAminoMsg): FieldOptions {
    return FieldOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: FieldOptionsProtoMsg): FieldOptions {
    return FieldOptions.decode(message.value);
  },
  toProto(message: FieldOptions): Uint8Array {
    return FieldOptions.encode(message).finish();
  },
  toProtoMsg(message: FieldOptions): FieldOptionsProtoMsg {
    return {
      typeUrl: "/google.protobuf.FieldOptions",
      value: FieldOptions.encode(message).finish()
    };
  }
};
function createBaseOneofOptions(): OneofOptions {
  return {
    uninterpreted_option: []
  };
}
export const OneofOptions = {
  typeUrl: "/google.protobuf.OneofOptions",
  encode(message: OneofOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.uninterpreted_option) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): OneofOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOneofOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 999:
          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OneofOptions {
    return {
      uninterpreted_option: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e)) : []
    };
  },
  toJSON(message: OneofOptions): unknown {
    const obj: any = {};
    if (message.uninterpreted_option) {
      obj.uninterpreted_option = message.uninterpreted_option.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<OneofOptions>): OneofOptions {
    const message = createBaseOneofOptions();
    message.uninterpreted_option = object.uninterpreted_option?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: OneofOptionsAmino): OneofOptions {
    return {
      uninterpreted_option: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromAmino(e)) : []
    };
  },
  toAmino(message: OneofOptions): OneofOptionsAmino {
    const obj: any = {};
    if (message.uninterpreted_option) {
      obj.uninterpreted_option = message.uninterpreted_option.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAminoMsg(object: OneofOptionsAminoMsg): OneofOptions {
    return OneofOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: OneofOptionsProtoMsg): OneofOptions {
    return OneofOptions.decode(message.value);
  },
  toProto(message: OneofOptions): Uint8Array {
    return OneofOptions.encode(message).finish();
  },
  toProtoMsg(message: OneofOptions): OneofOptionsProtoMsg {
    return {
      typeUrl: "/google.protobuf.OneofOptions",
      value: OneofOptions.encode(message).finish()
    };
  }
};
function createBaseEnumOptions(): EnumOptions {
  return {
    allow_alias: false,
    deprecated: false,
    uninterpreted_option: []
  };
}
export const EnumOptions = {
  typeUrl: "/google.protobuf.EnumOptions",
  encode(message: EnumOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.allow_alias === true) {
      writer.uint32(16).bool(message.allow_alias);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    for (const v of message.uninterpreted_option) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EnumOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.allow_alias = reader.bool();
          break;
        case 3:
          message.deprecated = reader.bool();
          break;
        case 999:
          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EnumOptions {
    return {
      allow_alias: isSet(object.allow_alias) ? Boolean(object.allow_alias) : false,
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
      uninterpreted_option: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e)) : []
    };
  },
  toJSON(message: EnumOptions): unknown {
    const obj: any = {};
    message.allow_alias !== undefined && (obj.allow_alias = message.allow_alias);
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    if (message.uninterpreted_option) {
      obj.uninterpreted_option = message.uninterpreted_option.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<EnumOptions>): EnumOptions {
    const message = createBaseEnumOptions();
    message.allow_alias = object.allow_alias ?? false;
    message.deprecated = object.deprecated ?? false;
    message.uninterpreted_option = object.uninterpreted_option?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EnumOptionsAmino): EnumOptions {
    return {
      allow_alias: object.allow_alias,
      deprecated: object.deprecated,
      uninterpreted_option: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromAmino(e)) : []
    };
  },
  toAmino(message: EnumOptions): EnumOptionsAmino {
    const obj: any = {};
    obj.allow_alias = message.allow_alias;
    obj.deprecated = message.deprecated;
    if (message.uninterpreted_option) {
      obj.uninterpreted_option = message.uninterpreted_option.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAminoMsg(object: EnumOptionsAminoMsg): EnumOptions {
    return EnumOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: EnumOptionsProtoMsg): EnumOptions {
    return EnumOptions.decode(message.value);
  },
  toProto(message: EnumOptions): Uint8Array {
    return EnumOptions.encode(message).finish();
  },
  toProtoMsg(message: EnumOptions): EnumOptionsProtoMsg {
    return {
      typeUrl: "/google.protobuf.EnumOptions",
      value: EnumOptions.encode(message).finish()
    };
  }
};
function createBaseEnumValueOptions(): EnumValueOptions {
  return {
    deprecated: false,
    uninterpreted_option: []
  };
}
export const EnumValueOptions = {
  typeUrl: "/google.protobuf.EnumValueOptions",
  encode(message: EnumValueOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deprecated === true) {
      writer.uint32(8).bool(message.deprecated);
    }
    for (const v of message.uninterpreted_option) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EnumValueOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumValueOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deprecated = reader.bool();
          break;
        case 999:
          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EnumValueOptions {
    return {
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
      uninterpreted_option: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e)) : []
    };
  },
  toJSON(message: EnumValueOptions): unknown {
    const obj: any = {};
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    if (message.uninterpreted_option) {
      obj.uninterpreted_option = message.uninterpreted_option.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<EnumValueOptions>): EnumValueOptions {
    const message = createBaseEnumValueOptions();
    message.deprecated = object.deprecated ?? false;
    message.uninterpreted_option = object.uninterpreted_option?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EnumValueOptionsAmino): EnumValueOptions {
    return {
      deprecated: object.deprecated,
      uninterpreted_option: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromAmino(e)) : []
    };
  },
  toAmino(message: EnumValueOptions): EnumValueOptionsAmino {
    const obj: any = {};
    obj.deprecated = message.deprecated;
    if (message.uninterpreted_option) {
      obj.uninterpreted_option = message.uninterpreted_option.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAminoMsg(object: EnumValueOptionsAminoMsg): EnumValueOptions {
    return EnumValueOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: EnumValueOptionsProtoMsg): EnumValueOptions {
    return EnumValueOptions.decode(message.value);
  },
  toProto(message: EnumValueOptions): Uint8Array {
    return EnumValueOptions.encode(message).finish();
  },
  toProtoMsg(message: EnumValueOptions): EnumValueOptionsProtoMsg {
    return {
      typeUrl: "/google.protobuf.EnumValueOptions",
      value: EnumValueOptions.encode(message).finish()
    };
  }
};
function createBaseServiceOptions(): ServiceOptions {
  return {
    deprecated: false,
    uninterpreted_option: []
  };
}
export const ServiceOptions = {
  typeUrl: "/google.protobuf.ServiceOptions",
  encode(message: ServiceOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deprecated === true) {
      writer.uint32(264).bool(message.deprecated);
    }
    for (const v of message.uninterpreted_option) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 33:
          message.deprecated = reader.bool();
          break;
        case 999:
          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ServiceOptions {
    return {
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
      uninterpreted_option: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e)) : []
    };
  },
  toJSON(message: ServiceOptions): unknown {
    const obj: any = {};
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    if (message.uninterpreted_option) {
      obj.uninterpreted_option = message.uninterpreted_option.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ServiceOptions>): ServiceOptions {
    const message = createBaseServiceOptions();
    message.deprecated = object.deprecated ?? false;
    message.uninterpreted_option = object.uninterpreted_option?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ServiceOptionsAmino): ServiceOptions {
    return {
      deprecated: object.deprecated,
      uninterpreted_option: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromAmino(e)) : []
    };
  },
  toAmino(message: ServiceOptions): ServiceOptionsAmino {
    const obj: any = {};
    obj.deprecated = message.deprecated;
    if (message.uninterpreted_option) {
      obj.uninterpreted_option = message.uninterpreted_option.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAminoMsg(object: ServiceOptionsAminoMsg): ServiceOptions {
    return ServiceOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceOptionsProtoMsg): ServiceOptions {
    return ServiceOptions.decode(message.value);
  },
  toProto(message: ServiceOptions): Uint8Array {
    return ServiceOptions.encode(message).finish();
  },
  toProtoMsg(message: ServiceOptions): ServiceOptionsProtoMsg {
    return {
      typeUrl: "/google.protobuf.ServiceOptions",
      value: ServiceOptions.encode(message).finish()
    };
  }
};
function createBaseMethodOptions(): MethodOptions {
  return {
    deprecated: false,
    idempotency_level: 1,
    uninterpreted_option: []
  };
}
export const MethodOptions = {
  typeUrl: "/google.protobuf.MethodOptions",
  encode(message: MethodOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deprecated === true) {
      writer.uint32(264).bool(message.deprecated);
    }
    if (message.idempotency_level !== 1) {
      writer.uint32(272).int32(message.idempotency_level);
    }
    for (const v of message.uninterpreted_option) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MethodOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMethodOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 33:
          message.deprecated = reader.bool();
          break;
        case 34:
          message.idempotency_level = (reader.int32() as any);
          break;
        case 999:
          message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MethodOptions {
    return {
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
      idempotency_level: isSet(object.idempotency_level) ? methodOptions_IdempotencyLevelFromJSON(object.idempotency_level) : -1,
      uninterpreted_option: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e)) : []
    };
  },
  toJSON(message: MethodOptions): unknown {
    const obj: any = {};
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.idempotency_level !== undefined && (obj.idempotency_level = methodOptions_IdempotencyLevelToJSON(message.idempotency_level));
    if (message.uninterpreted_option) {
      obj.uninterpreted_option = message.uninterpreted_option.map(e => e ? UninterpretedOption.toJSON(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MethodOptions>): MethodOptions {
    const message = createBaseMethodOptions();
    message.deprecated = object.deprecated ?? false;
    message.idempotency_level = object.idempotency_level ?? 1;
    message.uninterpreted_option = object.uninterpreted_option?.map(e => UninterpretedOption.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MethodOptionsAmino): MethodOptions {
    return {
      deprecated: object.deprecated,
      idempotency_level: isSet(object.idempotency_level) ? methodOptions_IdempotencyLevelFromJSON(object.idempotency_level) : -1,
      uninterpreted_option: Array.isArray(object?.uninterpreted_option) ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromAmino(e)) : []
    };
  },
  toAmino(message: MethodOptions): MethodOptionsAmino {
    const obj: any = {};
    obj.deprecated = message.deprecated;
    obj.idempotency_level = message.idempotency_level;
    if (message.uninterpreted_option) {
      obj.uninterpreted_option = message.uninterpreted_option.map(e => e ? UninterpretedOption.toAmino(e) : undefined);
    } else {
      obj.uninterpreted_option = [];
    }
    return obj;
  },
  fromAminoMsg(object: MethodOptionsAminoMsg): MethodOptions {
    return MethodOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: MethodOptionsProtoMsg): MethodOptions {
    return MethodOptions.decode(message.value);
  },
  toProto(message: MethodOptions): Uint8Array {
    return MethodOptions.encode(message).finish();
  },
  toProtoMsg(message: MethodOptions): MethodOptionsProtoMsg {
    return {
      typeUrl: "/google.protobuf.MethodOptions",
      value: MethodOptions.encode(message).finish()
    };
  }
};
function createBaseUninterpretedOption(): UninterpretedOption {
  return {
    name: [],
    identifier_value: "",
    positive_int_value: Long.UZERO,
    negative_int_value: Long.ZERO,
    double_value: 0,
    string_value: new Uint8Array(),
    aggregate_value: ""
  };
}
export const UninterpretedOption = {
  typeUrl: "/google.protobuf.UninterpretedOption",
  encode(message: UninterpretedOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.name) {
      UninterpretedOption_NamePart.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.identifier_value !== "") {
      writer.uint32(26).string(message.identifier_value);
    }
    if (!message.positive_int_value.isZero()) {
      writer.uint32(32).uint64(message.positive_int_value);
    }
    if (!message.negative_int_value.isZero()) {
      writer.uint32(40).int64(message.negative_int_value);
    }
    if (message.double_value !== 0) {
      writer.uint32(49).double(message.double_value);
    }
    if (message.string_value.length !== 0) {
      writer.uint32(58).bytes(message.string_value);
    }
    if (message.aggregate_value !== "") {
      writer.uint32(66).string(message.aggregate_value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): UninterpretedOption {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUninterpretedOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.name.push(UninterpretedOption_NamePart.decode(reader, reader.uint32()));
          break;
        case 3:
          message.identifier_value = reader.string();
          break;
        case 4:
          message.positive_int_value = (reader.uint64() as Long);
          break;
        case 5:
          message.negative_int_value = (reader.int64() as Long);
          break;
        case 6:
          message.double_value = reader.double();
          break;
        case 7:
          message.string_value = reader.bytes();
          break;
        case 8:
          message.aggregate_value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UninterpretedOption {
    return {
      name: Array.isArray(object?.name) ? object.name.map((e: any) => UninterpretedOption_NamePart.fromJSON(e)) : [],
      identifier_value: isSet(object.identifier_value) ? String(object.identifier_value) : "",
      positive_int_value: isSet(object.positive_int_value) ? Long.fromValue(object.positive_int_value) : Long.UZERO,
      negative_int_value: isSet(object.negative_int_value) ? Long.fromValue(object.negative_int_value) : Long.ZERO,
      double_value: isSet(object.double_value) ? Number(object.double_value) : 0,
      string_value: isSet(object.string_value) ? bytesFromBase64(object.string_value) : new Uint8Array(),
      aggregate_value: isSet(object.aggregate_value) ? String(object.aggregate_value) : ""
    };
  },
  toJSON(message: UninterpretedOption): unknown {
    const obj: any = {};
    if (message.name) {
      obj.name = message.name.map(e => e ? UninterpretedOption_NamePart.toJSON(e) : undefined);
    } else {
      obj.name = [];
    }
    message.identifier_value !== undefined && (obj.identifier_value = message.identifier_value);
    message.positive_int_value !== undefined && (obj.positive_int_value = (message.positive_int_value || Long.UZERO).toString());
    message.negative_int_value !== undefined && (obj.negative_int_value = (message.negative_int_value || Long.ZERO).toString());
    message.double_value !== undefined && (obj.double_value = message.double_value);
    message.string_value !== undefined && (obj.string_value = base64FromBytes(message.string_value !== undefined ? message.string_value : new Uint8Array()));
    message.aggregate_value !== undefined && (obj.aggregate_value = message.aggregate_value);
    return obj;
  },
  fromPartial(object: DeepPartial<UninterpretedOption>): UninterpretedOption {
    const message = createBaseUninterpretedOption();
    message.name = object.name?.map(e => UninterpretedOption_NamePart.fromPartial(e)) || [];
    message.identifier_value = object.identifier_value ?? "";
    message.positive_int_value = object.positive_int_value !== undefined && object.positive_int_value !== null ? Long.fromValue(object.positive_int_value) : Long.UZERO;
    message.negative_int_value = object.negative_int_value !== undefined && object.negative_int_value !== null ? Long.fromValue(object.negative_int_value) : Long.ZERO;
    message.double_value = object.double_value ?? 0;
    message.string_value = object.string_value ?? new Uint8Array();
    message.aggregate_value = object.aggregate_value ?? "";
    return message;
  },
  fromAmino(object: UninterpretedOptionAmino): UninterpretedOption {
    return {
      name: Array.isArray(object?.name) ? object.name.map((e: any) => UninterpretedOption_NamePart.fromAmino(e)) : [],
      identifier_value: object.identifier_value,
      positive_int_value: Long.fromString(object.positive_int_value),
      negative_int_value: Long.fromString(object.negative_int_value),
      double_value: object.double_value,
      string_value: object.string_value,
      aggregate_value: object.aggregate_value
    };
  },
  toAmino(message: UninterpretedOption): UninterpretedOptionAmino {
    const obj: any = {};
    if (message.name) {
      obj.name = message.name.map(e => e ? UninterpretedOption_NamePart.toAmino(e) : undefined);
    } else {
      obj.name = [];
    }
    obj.identifier_value = message.identifier_value;
    obj.positive_int_value = message.positive_int_value ? message.positive_int_value.toString() : undefined;
    obj.negative_int_value = message.negative_int_value ? message.negative_int_value.toString() : undefined;
    obj.double_value = message.double_value;
    obj.string_value = message.string_value;
    obj.aggregate_value = message.aggregate_value;
    return obj;
  },
  fromAminoMsg(object: UninterpretedOptionAminoMsg): UninterpretedOption {
    return UninterpretedOption.fromAmino(object.value);
  },
  fromProtoMsg(message: UninterpretedOptionProtoMsg): UninterpretedOption {
    return UninterpretedOption.decode(message.value);
  },
  toProto(message: UninterpretedOption): Uint8Array {
    return UninterpretedOption.encode(message).finish();
  },
  toProtoMsg(message: UninterpretedOption): UninterpretedOptionProtoMsg {
    return {
      typeUrl: "/google.protobuf.UninterpretedOption",
      value: UninterpretedOption.encode(message).finish()
    };
  }
};
function createBaseUninterpretedOption_NamePart(): UninterpretedOption_NamePart {
  return {
    name_part: "",
    is_extension: false
  };
}
export const UninterpretedOption_NamePart = {
  typeUrl: "/google.protobuf.NamePart",
  encode(message: UninterpretedOption_NamePart, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name_part !== "") {
      writer.uint32(10).string(message.name_part);
    }
    if (message.is_extension === true) {
      writer.uint32(16).bool(message.is_extension);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): UninterpretedOption_NamePart {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUninterpretedOption_NamePart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name_part = reader.string();
          break;
        case 2:
          message.is_extension = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UninterpretedOption_NamePart {
    return {
      name_part: isSet(object.name_part) ? String(object.name_part) : "",
      is_extension: isSet(object.is_extension) ? Boolean(object.is_extension) : false
    };
  },
  toJSON(message: UninterpretedOption_NamePart): unknown {
    const obj: any = {};
    message.name_part !== undefined && (obj.name_part = message.name_part);
    message.is_extension !== undefined && (obj.is_extension = message.is_extension);
    return obj;
  },
  fromPartial(object: DeepPartial<UninterpretedOption_NamePart>): UninterpretedOption_NamePart {
    const message = createBaseUninterpretedOption_NamePart();
    message.name_part = object.name_part ?? "";
    message.is_extension = object.is_extension ?? false;
    return message;
  },
  fromAmino(object: UninterpretedOption_NamePartAmino): UninterpretedOption_NamePart {
    return {
      name_part: object.name_part,
      is_extension: object.is_extension
    };
  },
  toAmino(message: UninterpretedOption_NamePart): UninterpretedOption_NamePartAmino {
    const obj: any = {};
    obj.name_part = message.name_part;
    obj.is_extension = message.is_extension;
    return obj;
  },
  fromAminoMsg(object: UninterpretedOption_NamePartAminoMsg): UninterpretedOption_NamePart {
    return UninterpretedOption_NamePart.fromAmino(object.value);
  },
  fromProtoMsg(message: UninterpretedOption_NamePartProtoMsg): UninterpretedOption_NamePart {
    return UninterpretedOption_NamePart.decode(message.value);
  },
  toProto(message: UninterpretedOption_NamePart): Uint8Array {
    return UninterpretedOption_NamePart.encode(message).finish();
  },
  toProtoMsg(message: UninterpretedOption_NamePart): UninterpretedOption_NamePartProtoMsg {
    return {
      typeUrl: "/google.protobuf.NamePart",
      value: UninterpretedOption_NamePart.encode(message).finish()
    };
  }
};
function createBaseSourceCodeInfo(): SourceCodeInfo {
  return {
    location: []
  };
}
export const SourceCodeInfo = {
  typeUrl: "/google.protobuf.SourceCodeInfo",
  encode(message: SourceCodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.location) {
      SourceCodeInfo_Location.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SourceCodeInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceCodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.location.push(SourceCodeInfo_Location.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SourceCodeInfo {
    return {
      location: Array.isArray(object?.location) ? object.location.map((e: any) => SourceCodeInfo_Location.fromJSON(e)) : []
    };
  },
  toJSON(message: SourceCodeInfo): unknown {
    const obj: any = {};
    if (message.location) {
      obj.location = message.location.map(e => e ? SourceCodeInfo_Location.toJSON(e) : undefined);
    } else {
      obj.location = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<SourceCodeInfo>): SourceCodeInfo {
    const message = createBaseSourceCodeInfo();
    message.location = object.location?.map(e => SourceCodeInfo_Location.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SourceCodeInfoAmino): SourceCodeInfo {
    return {
      location: Array.isArray(object?.location) ? object.location.map((e: any) => SourceCodeInfo_Location.fromAmino(e)) : []
    };
  },
  toAmino(message: SourceCodeInfo): SourceCodeInfoAmino {
    const obj: any = {};
    if (message.location) {
      obj.location = message.location.map(e => e ? SourceCodeInfo_Location.toAmino(e) : undefined);
    } else {
      obj.location = [];
    }
    return obj;
  },
  fromAminoMsg(object: SourceCodeInfoAminoMsg): SourceCodeInfo {
    return SourceCodeInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: SourceCodeInfoProtoMsg): SourceCodeInfo {
    return SourceCodeInfo.decode(message.value);
  },
  toProto(message: SourceCodeInfo): Uint8Array {
    return SourceCodeInfo.encode(message).finish();
  },
  toProtoMsg(message: SourceCodeInfo): SourceCodeInfoProtoMsg {
    return {
      typeUrl: "/google.protobuf.SourceCodeInfo",
      value: SourceCodeInfo.encode(message).finish()
    };
  }
};
function createBaseSourceCodeInfo_Location(): SourceCodeInfo_Location {
  return {
    path: [],
    span: [],
    leading_comments: "",
    trailing_comments: "",
    leading_detached_comments: []
  };
}
export const SourceCodeInfo_Location = {
  typeUrl: "/google.protobuf.Location",
  encode(message: SourceCodeInfo_Location, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.path) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.span) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.leading_comments !== "") {
      writer.uint32(26).string(message.leading_comments);
    }
    if (message.trailing_comments !== "") {
      writer.uint32(34).string(message.trailing_comments);
    }
    for (const v of message.leading_detached_comments) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SourceCodeInfo_Location {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceCodeInfo_Location();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }
          } else {
            message.path.push(reader.int32());
          }
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.span.push(reader.int32());
            }
          } else {
            message.span.push(reader.int32());
          }
          break;
        case 3:
          message.leading_comments = reader.string();
          break;
        case 4:
          message.trailing_comments = reader.string();
          break;
        case 6:
          message.leading_detached_comments.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SourceCodeInfo_Location {
    return {
      path: Array.isArray(object?.path) ? object.path.map((e: any) => Number(e)) : [],
      span: Array.isArray(object?.span) ? object.span.map((e: any) => Number(e)) : [],
      leading_comments: isSet(object.leading_comments) ? String(object.leading_comments) : "",
      trailing_comments: isSet(object.trailing_comments) ? String(object.trailing_comments) : "",
      leading_detached_comments: Array.isArray(object?.leading_detached_comments) ? object.leading_detached_comments.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: SourceCodeInfo_Location): unknown {
    const obj: any = {};
    if (message.path) {
      obj.path = message.path.map(e => Math.round(e));
    } else {
      obj.path = [];
    }
    if (message.span) {
      obj.span = message.span.map(e => Math.round(e));
    } else {
      obj.span = [];
    }
    message.leading_comments !== undefined && (obj.leading_comments = message.leading_comments);
    message.trailing_comments !== undefined && (obj.trailing_comments = message.trailing_comments);
    if (message.leading_detached_comments) {
      obj.leading_detached_comments = message.leading_detached_comments.map(e => e);
    } else {
      obj.leading_detached_comments = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<SourceCodeInfo_Location>): SourceCodeInfo_Location {
    const message = createBaseSourceCodeInfo_Location();
    message.path = object.path?.map(e => e) || [];
    message.span = object.span?.map(e => e) || [];
    message.leading_comments = object.leading_comments ?? "";
    message.trailing_comments = object.trailing_comments ?? "";
    message.leading_detached_comments = object.leading_detached_comments?.map(e => e) || [];
    return message;
  },
  fromAmino(object: SourceCodeInfo_LocationAmino): SourceCodeInfo_Location {
    return {
      path: Array.isArray(object?.path) ? object.path.map((e: any) => e) : [],
      span: Array.isArray(object?.span) ? object.span.map((e: any) => e) : [],
      leading_comments: object.leading_comments,
      trailing_comments: object.trailing_comments,
      leading_detached_comments: Array.isArray(object?.leading_detached_comments) ? object.leading_detached_comments.map((e: any) => e) : []
    };
  },
  toAmino(message: SourceCodeInfo_Location): SourceCodeInfo_LocationAmino {
    const obj: any = {};
    if (message.path) {
      obj.path = message.path.map(e => e);
    } else {
      obj.path = [];
    }
    if (message.span) {
      obj.span = message.span.map(e => e);
    } else {
      obj.span = [];
    }
    obj.leading_comments = message.leading_comments;
    obj.trailing_comments = message.trailing_comments;
    if (message.leading_detached_comments) {
      obj.leading_detached_comments = message.leading_detached_comments.map(e => e);
    } else {
      obj.leading_detached_comments = [];
    }
    return obj;
  },
  fromAminoMsg(object: SourceCodeInfo_LocationAminoMsg): SourceCodeInfo_Location {
    return SourceCodeInfo_Location.fromAmino(object.value);
  },
  fromProtoMsg(message: SourceCodeInfo_LocationProtoMsg): SourceCodeInfo_Location {
    return SourceCodeInfo_Location.decode(message.value);
  },
  toProto(message: SourceCodeInfo_Location): Uint8Array {
    return SourceCodeInfo_Location.encode(message).finish();
  },
  toProtoMsg(message: SourceCodeInfo_Location): SourceCodeInfo_LocationProtoMsg {
    return {
      typeUrl: "/google.protobuf.Location",
      value: SourceCodeInfo_Location.encode(message).finish()
    };
  }
};
function createBaseGeneratedCodeInfo(): GeneratedCodeInfo {
  return {
    annotation: []
  };
}
export const GeneratedCodeInfo = {
  typeUrl: "/google.protobuf.GeneratedCodeInfo",
  encode(message: GeneratedCodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.annotation) {
      GeneratedCodeInfo_Annotation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GeneratedCodeInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeneratedCodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.annotation.push(GeneratedCodeInfo_Annotation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GeneratedCodeInfo {
    return {
      annotation: Array.isArray(object?.annotation) ? object.annotation.map((e: any) => GeneratedCodeInfo_Annotation.fromJSON(e)) : []
    };
  },
  toJSON(message: GeneratedCodeInfo): unknown {
    const obj: any = {};
    if (message.annotation) {
      obj.annotation = message.annotation.map(e => e ? GeneratedCodeInfo_Annotation.toJSON(e) : undefined);
    } else {
      obj.annotation = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GeneratedCodeInfo>): GeneratedCodeInfo {
    const message = createBaseGeneratedCodeInfo();
    message.annotation = object.annotation?.map(e => GeneratedCodeInfo_Annotation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GeneratedCodeInfoAmino): GeneratedCodeInfo {
    return {
      annotation: Array.isArray(object?.annotation) ? object.annotation.map((e: any) => GeneratedCodeInfo_Annotation.fromAmino(e)) : []
    };
  },
  toAmino(message: GeneratedCodeInfo): GeneratedCodeInfoAmino {
    const obj: any = {};
    if (message.annotation) {
      obj.annotation = message.annotation.map(e => e ? GeneratedCodeInfo_Annotation.toAmino(e) : undefined);
    } else {
      obj.annotation = [];
    }
    return obj;
  },
  fromAminoMsg(object: GeneratedCodeInfoAminoMsg): GeneratedCodeInfo {
    return GeneratedCodeInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: GeneratedCodeInfoProtoMsg): GeneratedCodeInfo {
    return GeneratedCodeInfo.decode(message.value);
  },
  toProto(message: GeneratedCodeInfo): Uint8Array {
    return GeneratedCodeInfo.encode(message).finish();
  },
  toProtoMsg(message: GeneratedCodeInfo): GeneratedCodeInfoProtoMsg {
    return {
      typeUrl: "/google.protobuf.GeneratedCodeInfo",
      value: GeneratedCodeInfo.encode(message).finish()
    };
  }
};
function createBaseGeneratedCodeInfo_Annotation(): GeneratedCodeInfo_Annotation {
  return {
    path: [],
    source_file: "",
    begin: 0,
    end: 0
  };
}
export const GeneratedCodeInfo_Annotation = {
  typeUrl: "/google.protobuf.Annotation",
  encode(message: GeneratedCodeInfo_Annotation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.path) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.source_file !== "") {
      writer.uint32(18).string(message.source_file);
    }
    if (message.begin !== 0) {
      writer.uint32(24).int32(message.begin);
    }
    if (message.end !== 0) {
      writer.uint32(32).int32(message.end);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GeneratedCodeInfo_Annotation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeneratedCodeInfo_Annotation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }
          } else {
            message.path.push(reader.int32());
          }
          break;
        case 2:
          message.source_file = reader.string();
          break;
        case 3:
          message.begin = reader.int32();
          break;
        case 4:
          message.end = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GeneratedCodeInfo_Annotation {
    return {
      path: Array.isArray(object?.path) ? object.path.map((e: any) => Number(e)) : [],
      source_file: isSet(object.source_file) ? String(object.source_file) : "",
      begin: isSet(object.begin) ? Number(object.begin) : 0,
      end: isSet(object.end) ? Number(object.end) : 0
    };
  },
  toJSON(message: GeneratedCodeInfo_Annotation): unknown {
    const obj: any = {};
    if (message.path) {
      obj.path = message.path.map(e => Math.round(e));
    } else {
      obj.path = [];
    }
    message.source_file !== undefined && (obj.source_file = message.source_file);
    message.begin !== undefined && (obj.begin = Math.round(message.begin));
    message.end !== undefined && (obj.end = Math.round(message.end));
    return obj;
  },
  fromPartial(object: DeepPartial<GeneratedCodeInfo_Annotation>): GeneratedCodeInfo_Annotation {
    const message = createBaseGeneratedCodeInfo_Annotation();
    message.path = object.path?.map(e => e) || [];
    message.source_file = object.source_file ?? "";
    message.begin = object.begin ?? 0;
    message.end = object.end ?? 0;
    return message;
  },
  fromAmino(object: GeneratedCodeInfo_AnnotationAmino): GeneratedCodeInfo_Annotation {
    return {
      path: Array.isArray(object?.path) ? object.path.map((e: any) => e) : [],
      source_file: object.source_file,
      begin: object.begin,
      end: object.end
    };
  },
  toAmino(message: GeneratedCodeInfo_Annotation): GeneratedCodeInfo_AnnotationAmino {
    const obj: any = {};
    if (message.path) {
      obj.path = message.path.map(e => e);
    } else {
      obj.path = [];
    }
    obj.source_file = message.source_file;
    obj.begin = message.begin;
    obj.end = message.end;
    return obj;
  },
  fromAminoMsg(object: GeneratedCodeInfo_AnnotationAminoMsg): GeneratedCodeInfo_Annotation {
    return GeneratedCodeInfo_Annotation.fromAmino(object.value);
  },
  fromProtoMsg(message: GeneratedCodeInfo_AnnotationProtoMsg): GeneratedCodeInfo_Annotation {
    return GeneratedCodeInfo_Annotation.decode(message.value);
  },
  toProto(message: GeneratedCodeInfo_Annotation): Uint8Array {
    return GeneratedCodeInfo_Annotation.encode(message).finish();
  },
  toProtoMsg(message: GeneratedCodeInfo_Annotation): GeneratedCodeInfo_AnnotationProtoMsg {
    return {
      typeUrl: "/google.protobuf.Annotation",
      value: GeneratedCodeInfo_Annotation.encode(message).finish()
    };
  }
};