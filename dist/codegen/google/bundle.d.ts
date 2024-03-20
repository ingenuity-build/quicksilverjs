/// <reference types="long" />
import * as _57 from "./api/http";
import * as _58 from "./protobuf/any";
import * as _59 from "./protobuf/descriptor";
import * as _60 from "./protobuf/duration";
import * as _61 from "./protobuf/empty";
import * as _62 from "./protobuf/timestamp";
export declare namespace google {
    const api: {
        Http: {
            typeUrl: string;
            encode(message: _57.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Http;
            fromJSON(object: any): _57.Http;
            toJSON(message: _57.Http): unknown;
            fromPartial(object: {
                rules?: {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    response_body?: string;
                    additional_bindings?: any[];
                }[];
                fully_decode_reserved_expansion?: boolean;
            }): _57.Http;
            fromAmino(object: _57.HttpAmino): _57.Http;
            toAmino(message: _57.Http): _57.HttpAmino;
            fromAminoMsg(object: _57.HttpAminoMsg): _57.Http;
            fromProtoMsg(message: _57.HttpProtoMsg): _57.Http;
            toProto(message: _57.Http): Uint8Array;
            toProtoMsg(message: _57.Http): _57.HttpProtoMsg;
        };
        HttpRule: {
            typeUrl: string;
            encode(message: _57.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.HttpRule;
            fromJSON(object: any): _57.HttpRule;
            toJSON(message: _57.HttpRule): unknown;
            fromPartial(object: {
                selector?: string;
                get?: string;
                put?: string;
                post?: string;
                delete?: string;
                patch?: string;
                custom?: {
                    kind?: string;
                    path?: string;
                };
                body?: string;
                response_body?: string;
                additional_bindings?: any[];
            }): _57.HttpRule;
            fromAmino(object: _57.HttpRuleAmino): _57.HttpRule;
            toAmino(message: _57.HttpRule): _57.HttpRuleAmino;
            fromAminoMsg(object: _57.HttpRuleAminoMsg): _57.HttpRule;
            fromProtoMsg(message: _57.HttpRuleProtoMsg): _57.HttpRule;
            toProto(message: _57.HttpRule): Uint8Array;
            toProtoMsg(message: _57.HttpRule): _57.HttpRuleProtoMsg;
        };
        CustomHttpPattern: {
            typeUrl: string;
            encode(message: _57.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.CustomHttpPattern;
            fromJSON(object: any): _57.CustomHttpPattern;
            toJSON(message: _57.CustomHttpPattern): unknown;
            fromPartial(object: {
                kind?: string;
                path?: string;
            }): _57.CustomHttpPattern;
            fromAmino(object: _57.CustomHttpPatternAmino): _57.CustomHttpPattern;
            toAmino(message: _57.CustomHttpPattern): _57.CustomHttpPatternAmino;
            fromAminoMsg(object: _57.CustomHttpPatternAminoMsg): _57.CustomHttpPattern;
            fromProtoMsg(message: _57.CustomHttpPatternProtoMsg): _57.CustomHttpPattern;
            toProto(message: _57.CustomHttpPattern): Uint8Array;
            toProtoMsg(message: _57.CustomHttpPattern): _57.CustomHttpPatternProtoMsg;
        };
    };
    const protobuf: {
        Timestamp: {
            typeUrl: string;
            encode(message: _62.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Timestamp;
            fromJSON(object: any): _62.Timestamp;
            toJSON(message: _62.Timestamp): unknown;
            fromPartial(object: {
                seconds?: string | number | import("long").Long;
                nanos?: number;
            }): _62.Timestamp;
            fromAmino(object: string): _62.Timestamp;
            toAmino(message: _62.Timestamp): string;
            fromAminoMsg(object: _62.TimestampAminoMsg): _62.Timestamp;
            fromProtoMsg(message: _62.TimestampProtoMsg): _62.Timestamp;
            toProto(message: _62.Timestamp): Uint8Array;
            toProtoMsg(message: _62.Timestamp): _62.TimestampProtoMsg;
        };
        Empty: {
            typeUrl: string;
            encode(_: _61.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.Empty;
            fromJSON(_: any): _61.Empty;
            toJSON(_: _61.Empty): unknown;
            fromPartial(_: {}): _61.Empty;
            fromAmino(_: _61.EmptyAmino): _61.Empty;
            toAmino(_: _61.Empty): _61.EmptyAmino;
            fromAminoMsg(object: _61.EmptyAminoMsg): _61.Empty;
            fromProtoMsg(message: _61.EmptyProtoMsg): _61.Empty;
            toProto(message: _61.Empty): Uint8Array;
            toProtoMsg(message: _61.Empty): _61.EmptyProtoMsg;
        };
        Duration: {
            typeUrl: string;
            encode(message: _60.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Duration;
            fromJSON(object: any): _60.Duration;
            toJSON(message: _60.Duration): unknown;
            fromPartial(object: {
                seconds?: string | number | import("long").Long;
                nanos?: number;
            }): _60.Duration;
            fromAmino(object: string): _60.Duration;
            toAmino(message: _60.Duration): string;
            fromAminoMsg(object: _60.DurationAminoMsg): _60.Duration;
            fromProtoMsg(message: _60.DurationProtoMsg): _60.Duration;
            toProto(message: _60.Duration): Uint8Array;
            toProtoMsg(message: _60.Duration): _60.DurationProtoMsg;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _59.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _59.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _59.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _59.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _59.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _59.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _59.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _59.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _59.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _59.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _59.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _59.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _59.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _59.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeAmino: typeof _59.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _59.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _59.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelAmino: typeof _59.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _59.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _59.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeAmino: typeof _59.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _59.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _59.FieldOptions_CType;
        FieldOptions_CTypeAmino: typeof _59.FieldOptions_CType;
        FieldOptions_JSType: typeof _59.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _59.FieldOptions_JSType;
        FieldOptions_JSTypeAmino: typeof _59.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _59.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _59.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelAmino: typeof _59.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            typeUrl: string;
            encode(message: _59.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.FileDescriptorSet;
            fromJSON(object: any): _59.FileDescriptorSet;
            toJSON(message: _59.FileDescriptorSet): unknown;
            fromPartial(object: {
                file?: {
                    name?: string;
                    package?: string;
                    dependency?: string[];
                    public_dependency?: number[];
                    weak_dependency?: number[];
                    message_type?: {
                        name?: string;
                        field?: {
                            name?: string;
                            number?: number;
                            label?: _59.FieldDescriptorProto_Label;
                            type?: _59.FieldDescriptorProto_Type;
                            type_name?: string;
                            extendee?: string;
                            default_value?: string;
                            oneof_index?: number;
                            json_name?: string;
                            options?: {
                                ctype?: _59.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _59.FieldOptions_JSType;
                                lazy?: boolean;
                                deprecated?: boolean;
                                weak?: boolean;
                                uninterpreted_option?: {
                                    name?: {
                                        name_part?: string;
                                        is_extension?: boolean;
                                    }[];
                                    identifier_value?: string;
                                    positive_int_value?: string | number | import("long").Long;
                                    negative_int_value?: string | number | import("long").Long;
                                    double_value?: number;
                                    string_value?: Uint8Array;
                                    aggregate_value?: string;
                                }[];
                            };
                        }[];
                        extension?: {
                            name?: string;
                            number?: number;
                            label?: _59.FieldDescriptorProto_Label;
                            type?: _59.FieldDescriptorProto_Type;
                            type_name?: string;
                            extendee?: string;
                            default_value?: string;
                            oneof_index?: number;
                            json_name?: string;
                            options?: {
                                ctype?: _59.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _59.FieldOptions_JSType;
                                lazy?: boolean;
                                deprecated?: boolean;
                                weak?: boolean;
                                uninterpreted_option?: {
                                    name?: {
                                        name_part?: string;
                                        is_extension?: boolean;
                                    }[];
                                    identifier_value?: string;
                                    positive_int_value?: string | number | import("long").Long;
                                    negative_int_value?: string | number | import("long").Long;
                                    double_value?: number;
                                    string_value?: Uint8Array;
                                    aggregate_value?: string;
                                }[];
                            };
                        }[];
                        nested_type?: any[];
                        enum_type?: {
                            name?: string;
                            value?: {
                                name?: string;
                                number?: number;
                                options?: {
                                    deprecated?: boolean;
                                    uninterpreted_option?: {
                                        name?: {
                                            name_part?: string;
                                            is_extension?: boolean;
                                        }[];
                                        identifier_value?: string;
                                        positive_int_value?: string | number | import("long").Long;
                                        negative_int_value?: string | number | import("long").Long;
                                        double_value?: number;
                                        string_value?: Uint8Array;
                                        aggregate_value?: string;
                                    }[];
                                };
                            }[];
                            options?: {
                                allow_alias?: boolean;
                                deprecated?: boolean;
                                uninterpreted_option?: {
                                    name?: {
                                        name_part?: string;
                                        is_extension?: boolean;
                                    }[];
                                    identifier_value?: string;
                                    positive_int_value?: string | number | import("long").Long;
                                    negative_int_value?: string | number | import("long").Long;
                                    double_value?: number;
                                    string_value?: Uint8Array;
                                    aggregate_value?: string;
                                }[];
                            };
                            reserved_range?: {
                                start?: number;
                                end?: number;
                            }[];
                            reserved_name?: string[];
                        }[];
                        extension_range?: {
                            start?: number;
                            end?: number;
                            options?: {
                                uninterpreted_option?: {
                                    name?: {
                                        name_part?: string;
                                        is_extension?: boolean;
                                    }[];
                                    identifier_value?: string;
                                    positive_int_value?: string | number | import("long").Long;
                                    negative_int_value?: string | number | import("long").Long;
                                    double_value?: number;
                                    string_value?: Uint8Array;
                                    aggregate_value?: string;
                                }[];
                            };
                        }[];
                        oneof_decl?: {
                            name?: string;
                            options?: {
                                uninterpreted_option?: {
                                    name?: {
                                        name_part?: string;
                                        is_extension?: boolean;
                                    }[];
                                    identifier_value?: string;
                                    positive_int_value?: string | number | import("long").Long;
                                    negative_int_value?: string | number | import("long").Long;
                                    double_value?: number;
                                    string_value?: Uint8Array;
                                    aggregate_value?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            message_set_wire_format?: boolean;
                            no_standard_descriptor_accessor?: boolean;
                            deprecated?: boolean;
                            map_entry?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: string | number | import("long").Long;
                                negative_int_value?: string | number | import("long").Long;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                        reserved_range?: {
                            start?: number;
                            end?: number;
                        }[];
                        reserved_name?: string[];
                    }[];
                    enum_type?: {
                        name?: string;
                        value?: {
                            name?: string;
                            number?: number;
                            options?: {
                                deprecated?: boolean;
                                uninterpreted_option?: {
                                    name?: {
                                        name_part?: string;
                                        is_extension?: boolean;
                                    }[];
                                    identifier_value?: string;
                                    positive_int_value?: string | number | import("long").Long;
                                    negative_int_value?: string | number | import("long").Long;
                                    double_value?: number;
                                    string_value?: Uint8Array;
                                    aggregate_value?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            allow_alias?: boolean;
                            deprecated?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: string | number | import("long").Long;
                                negative_int_value?: string | number | import("long").Long;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                        reserved_range?: {
                            start?: number;
                            end?: number;
                        }[];
                        reserved_name?: string[];
                    }[];
                    service?: {
                        name?: string;
                        method?: {
                            name?: string;
                            input_type?: string;
                            output_type?: string;
                            options?: {
                                deprecated?: boolean;
                                idempotency_level?: _59.MethodOptions_IdempotencyLevel;
                                uninterpreted_option?: {
                                    name?: {
                                        name_part?: string;
                                        is_extension?: boolean;
                                    }[];
                                    identifier_value?: string;
                                    positive_int_value?: string | number | import("long").Long;
                                    negative_int_value?: string | number | import("long").Long;
                                    double_value?: number;
                                    string_value?: Uint8Array;
                                    aggregate_value?: string;
                                }[];
                            };
                            client_streaming?: boolean;
                            server_streaming?: boolean;
                        }[];
                        options?: {
                            deprecated?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: string | number | import("long").Long;
                                negative_int_value?: string | number | import("long").Long;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                    }[];
                    extension?: {
                        name?: string;
                        number?: number;
                        label?: _59.FieldDescriptorProto_Label;
                        type?: _59.FieldDescriptorProto_Type;
                        type_name?: string;
                        extendee?: string;
                        default_value?: string;
                        oneof_index?: number;
                        json_name?: string;
                        options?: {
                            ctype?: _59.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _59.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: string | number | import("long").Long;
                                negative_int_value?: string | number | import("long").Long;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        java_package?: string;
                        java_outer_classname?: string;
                        java_multiple_files?: boolean;
                        java_generate_equals_and_hash?: boolean;
                        java_string_check_utf8?: boolean;
                        optimize_for?: _59.FileOptions_OptimizeMode;
                        go_package?: string;
                        cc_generic_services?: boolean;
                        java_generic_services?: boolean;
                        py_generic_services?: boolean;
                        php_generic_services?: boolean;
                        deprecated?: boolean;
                        cc_enable_arenas?: boolean;
                        objc_class_prefix?: string;
                        csharp_namespace?: string;
                        swift_prefix?: string;
                        php_class_prefix?: string;
                        php_namespace?: string;
                        php_metadata_namespace?: string;
                        ruby_package?: string;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: string | number | import("long").Long;
                            negative_int_value?: string | number | import("long").Long;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                    source_code_info?: {
                        location?: {
                            path?: number[];
                            span?: number[];
                            leading_comments?: string;
                            trailing_comments?: string;
                            leading_detached_comments?: string[];
                        }[];
                    };
                    syntax?: string;
                }[];
            }): _59.FileDescriptorSet;
            fromAmino(object: _59.FileDescriptorSetAmino): _59.FileDescriptorSet;
            toAmino(message: _59.FileDescriptorSet): _59.FileDescriptorSetAmino;
            fromAminoMsg(object: _59.FileDescriptorSetAminoMsg): _59.FileDescriptorSet;
            fromProtoMsg(message: _59.FileDescriptorSetProtoMsg): _59.FileDescriptorSet;
            toProto(message: _59.FileDescriptorSet): Uint8Array;
            toProtoMsg(message: _59.FileDescriptorSet): _59.FileDescriptorSetProtoMsg;
        };
        FileDescriptorProto: {
            typeUrl: string;
            encode(message: _59.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.FileDescriptorProto;
            fromJSON(object: any): _59.FileDescriptorProto;
            toJSON(message: _59.FileDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                package?: string;
                dependency?: string[];
                public_dependency?: number[];
                weak_dependency?: number[];
                message_type?: {
                    name?: string;
                    field?: {
                        name?: string;
                        number?: number;
                        label?: _59.FieldDescriptorProto_Label;
                        type?: _59.FieldDescriptorProto_Type;
                        type_name?: string;
                        extendee?: string;
                        default_value?: string;
                        oneof_index?: number;
                        json_name?: string;
                        options?: {
                            ctype?: _59.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _59.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: string | number | import("long").Long;
                                negative_int_value?: string | number | import("long").Long;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                    }[];
                    extension?: {
                        name?: string;
                        number?: number;
                        label?: _59.FieldDescriptorProto_Label;
                        type?: _59.FieldDescriptorProto_Type;
                        type_name?: string;
                        extendee?: string;
                        default_value?: string;
                        oneof_index?: number;
                        json_name?: string;
                        options?: {
                            ctype?: _59.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _59.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: string | number | import("long").Long;
                                negative_int_value?: string | number | import("long").Long;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                    }[];
                    nested_type?: any[];
                    enum_type?: {
                        name?: string;
                        value?: {
                            name?: string;
                            number?: number;
                            options?: {
                                deprecated?: boolean;
                                uninterpreted_option?: {
                                    name?: {
                                        name_part?: string;
                                        is_extension?: boolean;
                                    }[];
                                    identifier_value?: string;
                                    positive_int_value?: string | number | import("long").Long;
                                    negative_int_value?: string | number | import("long").Long;
                                    double_value?: number;
                                    string_value?: Uint8Array;
                                    aggregate_value?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            allow_alias?: boolean;
                            deprecated?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: string | number | import("long").Long;
                                negative_int_value?: string | number | import("long").Long;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                        reserved_range?: {
                            start?: number;
                            end?: number;
                        }[];
                        reserved_name?: string[];
                    }[];
                    extension_range?: {
                        start?: number;
                        end?: number;
                        options?: {
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: string | number | import("long").Long;
                                negative_int_value?: string | number | import("long").Long;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                    }[];
                    oneof_decl?: {
                        name?: string;
                        options?: {
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: string | number | import("long").Long;
                                negative_int_value?: string | number | import("long").Long;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        message_set_wire_format?: boolean;
                        no_standard_descriptor_accessor?: boolean;
                        deprecated?: boolean;
                        map_entry?: boolean;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: string | number | import("long").Long;
                            negative_int_value?: string | number | import("long").Long;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                    reserved_range?: {
                        start?: number;
                        end?: number;
                    }[];
                    reserved_name?: string[];
                }[];
                enum_type?: {
                    name?: string;
                    value?: {
                        name?: string;
                        number?: number;
                        options?: {
                            deprecated?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: string | number | import("long").Long;
                                negative_int_value?: string | number | import("long").Long;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        allow_alias?: boolean;
                        deprecated?: boolean;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: string | number | import("long").Long;
                            negative_int_value?: string | number | import("long").Long;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                    reserved_range?: {
                        start?: number;
                        end?: number;
                    }[];
                    reserved_name?: string[];
                }[];
                service?: {
                    name?: string;
                    method?: {
                        name?: string;
                        input_type?: string;
                        output_type?: string;
                        options?: {
                            deprecated?: boolean;
                            idempotency_level?: _59.MethodOptions_IdempotencyLevel;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: string | number | import("long").Long;
                                negative_int_value?: string | number | import("long").Long;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                        client_streaming?: boolean;
                        server_streaming?: boolean;
                    }[];
                    options?: {
                        deprecated?: boolean;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: string | number | import("long").Long;
                            negative_int_value?: string | number | import("long").Long;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                }[];
                extension?: {
                    name?: string;
                    number?: number;
                    label?: _59.FieldDescriptorProto_Label;
                    type?: _59.FieldDescriptorProto_Type;
                    type_name?: string;
                    extendee?: string;
                    default_value?: string;
                    oneof_index?: number;
                    json_name?: string;
                    options?: {
                        ctype?: _59.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _59.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: string | number | import("long").Long;
                            negative_int_value?: string | number | import("long").Long;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                }[];
                options?: {
                    java_package?: string;
                    java_outer_classname?: string;
                    java_multiple_files?: boolean;
                    java_generate_equals_and_hash?: boolean;
                    java_string_check_utf8?: boolean;
                    optimize_for?: _59.FileOptions_OptimizeMode;
                    go_package?: string;
                    cc_generic_services?: boolean;
                    java_generic_services?: boolean;
                    py_generic_services?: boolean;
                    php_generic_services?: boolean;
                    deprecated?: boolean;
                    cc_enable_arenas?: boolean;
                    objc_class_prefix?: string;
                    csharp_namespace?: string;
                    swift_prefix?: string;
                    php_class_prefix?: string;
                    php_namespace?: string;
                    php_metadata_namespace?: string;
                    ruby_package?: string;
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: string | number | import("long").Long;
                        negative_int_value?: string | number | import("long").Long;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
                source_code_info?: {
                    location?: {
                        path?: number[];
                        span?: number[];
                        leading_comments?: string;
                        trailing_comments?: string;
                        leading_detached_comments?: string[];
                    }[];
                };
                syntax?: string;
            }): _59.FileDescriptorProto;
            fromAmino(object: _59.FileDescriptorProtoAmino): _59.FileDescriptorProto;
            toAmino(message: _59.FileDescriptorProto): _59.FileDescriptorProtoAmino;
            fromAminoMsg(object: _59.FileDescriptorProtoAminoMsg): _59.FileDescriptorProto;
            fromProtoMsg(message: _59.FileDescriptorProtoProtoMsg): _59.FileDescriptorProto;
            toProto(message: _59.FileDescriptorProto): Uint8Array;
            toProtoMsg(message: _59.FileDescriptorProto): _59.FileDescriptorProtoProtoMsg;
        };
        DescriptorProto: {
            typeUrl: string;
            encode(message: _59.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.DescriptorProto;
            fromJSON(object: any): _59.DescriptorProto;
            toJSON(message: _59.DescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                field?: {
                    name?: string;
                    number?: number;
                    label?: _59.FieldDescriptorProto_Label;
                    type?: _59.FieldDescriptorProto_Type;
                    type_name?: string;
                    extendee?: string;
                    default_value?: string;
                    oneof_index?: number;
                    json_name?: string;
                    options?: {
                        ctype?: _59.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _59.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: string | number | import("long").Long;
                            negative_int_value?: string | number | import("long").Long;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                }[];
                extension?: {
                    name?: string;
                    number?: number;
                    label?: _59.FieldDescriptorProto_Label;
                    type?: _59.FieldDescriptorProto_Type;
                    type_name?: string;
                    extendee?: string;
                    default_value?: string;
                    oneof_index?: number;
                    json_name?: string;
                    options?: {
                        ctype?: _59.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _59.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: string | number | import("long").Long;
                            negative_int_value?: string | number | import("long").Long;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                }[];
                nested_type?: any[];
                enum_type?: {
                    name?: string;
                    value?: {
                        name?: string;
                        number?: number;
                        options?: {
                            deprecated?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: string | number | import("long").Long;
                                negative_int_value?: string | number | import("long").Long;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        allow_alias?: boolean;
                        deprecated?: boolean;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: string | number | import("long").Long;
                            negative_int_value?: string | number | import("long").Long;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                    reserved_range?: {
                        start?: number;
                        end?: number;
                    }[];
                    reserved_name?: string[];
                }[];
                extension_range?: {
                    start?: number;
                    end?: number;
                    options?: {
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: string | number | import("long").Long;
                            negative_int_value?: string | number | import("long").Long;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                }[];
                oneof_decl?: {
                    name?: string;
                    options?: {
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: string | number | import("long").Long;
                            negative_int_value?: string | number | import("long").Long;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                }[];
                options?: {
                    message_set_wire_format?: boolean;
                    no_standard_descriptor_accessor?: boolean;
                    deprecated?: boolean;
                    map_entry?: boolean;
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: string | number | import("long").Long;
                        negative_int_value?: string | number | import("long").Long;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
                reserved_range?: {
                    start?: number;
                    end?: number;
                }[];
                reserved_name?: string[];
            }): _59.DescriptorProto;
            fromAmino(object: _59.DescriptorProtoAmino): _59.DescriptorProto;
            toAmino(message: _59.DescriptorProto): _59.DescriptorProtoAmino;
            fromAminoMsg(object: _59.DescriptorProtoAminoMsg): _59.DescriptorProto;
            fromProtoMsg(message: _59.DescriptorProtoProtoMsg): _59.DescriptorProto;
            toProto(message: _59.DescriptorProto): Uint8Array;
            toProtoMsg(message: _59.DescriptorProto): _59.DescriptorProtoProtoMsg;
        };
        DescriptorProto_ExtensionRange: {
            typeUrl: string;
            encode(message: _59.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _59.DescriptorProto_ExtensionRange;
            toJSON(message: _59.DescriptorProto_ExtensionRange): unknown;
            fromPartial(object: {
                start?: number;
                end?: number;
                options?: {
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: string | number | import("long").Long;
                        negative_int_value?: string | number | import("long").Long;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
            }): _59.DescriptorProto_ExtensionRange;
            fromAmino(object: _59.DescriptorProto_ExtensionRangeAmino): _59.DescriptorProto_ExtensionRange;
            toAmino(message: _59.DescriptorProto_ExtensionRange): _59.DescriptorProto_ExtensionRangeAmino;
            fromAminoMsg(object: _59.DescriptorProto_ExtensionRangeAminoMsg): _59.DescriptorProto_ExtensionRange;
            fromProtoMsg(message: _59.DescriptorProto_ExtensionRangeProtoMsg): _59.DescriptorProto_ExtensionRange;
            toProto(message: _59.DescriptorProto_ExtensionRange): Uint8Array;
            toProtoMsg(message: _59.DescriptorProto_ExtensionRange): _59.DescriptorProto_ExtensionRangeProtoMsg;
        };
        DescriptorProto_ReservedRange: {
            typeUrl: string;
            encode(message: _59.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.DescriptorProto_ReservedRange;
            fromJSON(object: any): _59.DescriptorProto_ReservedRange;
            toJSON(message: _59.DescriptorProto_ReservedRange): unknown;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _59.DescriptorProto_ReservedRange;
            fromAmino(object: _59.DescriptorProto_ReservedRangeAmino): _59.DescriptorProto_ReservedRange;
            toAmino(message: _59.DescriptorProto_ReservedRange): _59.DescriptorProto_ReservedRangeAmino;
            fromAminoMsg(object: _59.DescriptorProto_ReservedRangeAminoMsg): _59.DescriptorProto_ReservedRange;
            fromProtoMsg(message: _59.DescriptorProto_ReservedRangeProtoMsg): _59.DescriptorProto_ReservedRange;
            toProto(message: _59.DescriptorProto_ReservedRange): Uint8Array;
            toProtoMsg(message: _59.DescriptorProto_ReservedRange): _59.DescriptorProto_ReservedRangeProtoMsg;
        };
        ExtensionRangeOptions: {
            typeUrl: string;
            encode(message: _59.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.ExtensionRangeOptions;
            fromJSON(object: any): _59.ExtensionRangeOptions;
            toJSON(message: _59.ExtensionRangeOptions): unknown;
            fromPartial(object: {
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: string | number | import("long").Long;
                    negative_int_value?: string | number | import("long").Long;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _59.ExtensionRangeOptions;
            fromAmino(object: _59.ExtensionRangeOptionsAmino): _59.ExtensionRangeOptions;
            toAmino(message: _59.ExtensionRangeOptions): _59.ExtensionRangeOptionsAmino;
            fromAminoMsg(object: _59.ExtensionRangeOptionsAminoMsg): _59.ExtensionRangeOptions;
            fromProtoMsg(message: _59.ExtensionRangeOptionsProtoMsg): _59.ExtensionRangeOptions;
            toProto(message: _59.ExtensionRangeOptions): Uint8Array;
            toProtoMsg(message: _59.ExtensionRangeOptions): _59.ExtensionRangeOptionsProtoMsg;
        };
        FieldDescriptorProto: {
            typeUrl: string;
            encode(message: _59.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.FieldDescriptorProto;
            fromJSON(object: any): _59.FieldDescriptorProto;
            toJSON(message: _59.FieldDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                number?: number;
                label?: _59.FieldDescriptorProto_Label;
                type?: _59.FieldDescriptorProto_Type;
                type_name?: string;
                extendee?: string;
                default_value?: string;
                oneof_index?: number;
                json_name?: string;
                options?: {
                    ctype?: _59.FieldOptions_CType;
                    packed?: boolean;
                    jstype?: _59.FieldOptions_JSType;
                    lazy?: boolean;
                    deprecated?: boolean;
                    weak?: boolean;
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: string | number | import("long").Long;
                        negative_int_value?: string | number | import("long").Long;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
            }): _59.FieldDescriptorProto;
            fromAmino(object: _59.FieldDescriptorProtoAmino): _59.FieldDescriptorProto;
            toAmino(message: _59.FieldDescriptorProto): _59.FieldDescriptorProtoAmino;
            fromAminoMsg(object: _59.FieldDescriptorProtoAminoMsg): _59.FieldDescriptorProto;
            fromProtoMsg(message: _59.FieldDescriptorProtoProtoMsg): _59.FieldDescriptorProto;
            toProto(message: _59.FieldDescriptorProto): Uint8Array;
            toProtoMsg(message: _59.FieldDescriptorProto): _59.FieldDescriptorProtoProtoMsg;
        };
        OneofDescriptorProto: {
            typeUrl: string;
            encode(message: _59.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.OneofDescriptorProto;
            fromJSON(object: any): _59.OneofDescriptorProto;
            toJSON(message: _59.OneofDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                options?: {
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: string | number | import("long").Long;
                        negative_int_value?: string | number | import("long").Long;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
            }): _59.OneofDescriptorProto;
            fromAmino(object: _59.OneofDescriptorProtoAmino): _59.OneofDescriptorProto;
            toAmino(message: _59.OneofDescriptorProto): _59.OneofDescriptorProtoAmino;
            fromAminoMsg(object: _59.OneofDescriptorProtoAminoMsg): _59.OneofDescriptorProto;
            fromProtoMsg(message: _59.OneofDescriptorProtoProtoMsg): _59.OneofDescriptorProto;
            toProto(message: _59.OneofDescriptorProto): Uint8Array;
            toProtoMsg(message: _59.OneofDescriptorProto): _59.OneofDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto: {
            typeUrl: string;
            encode(message: _59.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EnumDescriptorProto;
            fromJSON(object: any): _59.EnumDescriptorProto;
            toJSON(message: _59.EnumDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                value?: {
                    name?: string;
                    number?: number;
                    options?: {
                        deprecated?: boolean;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: string | number | import("long").Long;
                            negative_int_value?: string | number | import("long").Long;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                }[];
                options?: {
                    allow_alias?: boolean;
                    deprecated?: boolean;
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: string | number | import("long").Long;
                        negative_int_value?: string | number | import("long").Long;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
                reserved_range?: {
                    start?: number;
                    end?: number;
                }[];
                reserved_name?: string[];
            }): _59.EnumDescriptorProto;
            fromAmino(object: _59.EnumDescriptorProtoAmino): _59.EnumDescriptorProto;
            toAmino(message: _59.EnumDescriptorProto): _59.EnumDescriptorProtoAmino;
            fromAminoMsg(object: _59.EnumDescriptorProtoAminoMsg): _59.EnumDescriptorProto;
            fromProtoMsg(message: _59.EnumDescriptorProtoProtoMsg): _59.EnumDescriptorProto;
            toProto(message: _59.EnumDescriptorProto): Uint8Array;
            toProtoMsg(message: _59.EnumDescriptorProto): _59.EnumDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto_EnumReservedRange: {
            typeUrl: string;
            encode(message: _59.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _59.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _59.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _59.EnumDescriptorProto_EnumReservedRange;
            fromAmino(object: _59.EnumDescriptorProto_EnumReservedRangeAmino): _59.EnumDescriptorProto_EnumReservedRange;
            toAmino(message: _59.EnumDescriptorProto_EnumReservedRange): _59.EnumDescriptorProto_EnumReservedRangeAmino;
            fromAminoMsg(object: _59.EnumDescriptorProto_EnumReservedRangeAminoMsg): _59.EnumDescriptorProto_EnumReservedRange;
            fromProtoMsg(message: _59.EnumDescriptorProto_EnumReservedRangeProtoMsg): _59.EnumDescriptorProto_EnumReservedRange;
            toProto(message: _59.EnumDescriptorProto_EnumReservedRange): Uint8Array;
            toProtoMsg(message: _59.EnumDescriptorProto_EnumReservedRange): _59.EnumDescriptorProto_EnumReservedRangeProtoMsg;
        };
        EnumValueDescriptorProto: {
            typeUrl: string;
            encode(message: _59.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EnumValueDescriptorProto;
            fromJSON(object: any): _59.EnumValueDescriptorProto;
            toJSON(message: _59.EnumValueDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                number?: number;
                options?: {
                    deprecated?: boolean;
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: string | number | import("long").Long;
                        negative_int_value?: string | number | import("long").Long;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
            }): _59.EnumValueDescriptorProto;
            fromAmino(object: _59.EnumValueDescriptorProtoAmino): _59.EnumValueDescriptorProto;
            toAmino(message: _59.EnumValueDescriptorProto): _59.EnumValueDescriptorProtoAmino;
            fromAminoMsg(object: _59.EnumValueDescriptorProtoAminoMsg): _59.EnumValueDescriptorProto;
            fromProtoMsg(message: _59.EnumValueDescriptorProtoProtoMsg): _59.EnumValueDescriptorProto;
            toProto(message: _59.EnumValueDescriptorProto): Uint8Array;
            toProtoMsg(message: _59.EnumValueDescriptorProto): _59.EnumValueDescriptorProtoProtoMsg;
        };
        ServiceDescriptorProto: {
            typeUrl: string;
            encode(message: _59.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.ServiceDescriptorProto;
            fromJSON(object: any): _59.ServiceDescriptorProto;
            toJSON(message: _59.ServiceDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                method?: {
                    name?: string;
                    input_type?: string;
                    output_type?: string;
                    options?: {
                        deprecated?: boolean;
                        idempotency_level?: _59.MethodOptions_IdempotencyLevel;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: string | number | import("long").Long;
                            negative_int_value?: string | number | import("long").Long;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                    client_streaming?: boolean;
                    server_streaming?: boolean;
                }[];
                options?: {
                    deprecated?: boolean;
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: string | number | import("long").Long;
                        negative_int_value?: string | number | import("long").Long;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
            }): _59.ServiceDescriptorProto;
            fromAmino(object: _59.ServiceDescriptorProtoAmino): _59.ServiceDescriptorProto;
            toAmino(message: _59.ServiceDescriptorProto): _59.ServiceDescriptorProtoAmino;
            fromAminoMsg(object: _59.ServiceDescriptorProtoAminoMsg): _59.ServiceDescriptorProto;
            fromProtoMsg(message: _59.ServiceDescriptorProtoProtoMsg): _59.ServiceDescriptorProto;
            toProto(message: _59.ServiceDescriptorProto): Uint8Array;
            toProtoMsg(message: _59.ServiceDescriptorProto): _59.ServiceDescriptorProtoProtoMsg;
        };
        MethodDescriptorProto: {
            typeUrl: string;
            encode(message: _59.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MethodDescriptorProto;
            fromJSON(object: any): _59.MethodDescriptorProto;
            toJSON(message: _59.MethodDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                input_type?: string;
                output_type?: string;
                options?: {
                    deprecated?: boolean;
                    idempotency_level?: _59.MethodOptions_IdempotencyLevel;
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: string | number | import("long").Long;
                        negative_int_value?: string | number | import("long").Long;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
                client_streaming?: boolean;
                server_streaming?: boolean;
            }): _59.MethodDescriptorProto;
            fromAmino(object: _59.MethodDescriptorProtoAmino): _59.MethodDescriptorProto;
            toAmino(message: _59.MethodDescriptorProto): _59.MethodDescriptorProtoAmino;
            fromAminoMsg(object: _59.MethodDescriptorProtoAminoMsg): _59.MethodDescriptorProto;
            fromProtoMsg(message: _59.MethodDescriptorProtoProtoMsg): _59.MethodDescriptorProto;
            toProto(message: _59.MethodDescriptorProto): Uint8Array;
            toProtoMsg(message: _59.MethodDescriptorProto): _59.MethodDescriptorProtoProtoMsg;
        };
        FileOptions: {
            typeUrl: string;
            encode(message: _59.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.FileOptions;
            fromJSON(object: any): _59.FileOptions;
            toJSON(message: _59.FileOptions): unknown;
            fromPartial(object: {
                java_package?: string;
                java_outer_classname?: string;
                java_multiple_files?: boolean;
                java_generate_equals_and_hash?: boolean;
                java_string_check_utf8?: boolean;
                optimize_for?: _59.FileOptions_OptimizeMode;
                go_package?: string;
                cc_generic_services?: boolean;
                java_generic_services?: boolean;
                py_generic_services?: boolean;
                php_generic_services?: boolean;
                deprecated?: boolean;
                cc_enable_arenas?: boolean;
                objc_class_prefix?: string;
                csharp_namespace?: string;
                swift_prefix?: string;
                php_class_prefix?: string;
                php_namespace?: string;
                php_metadata_namespace?: string;
                ruby_package?: string;
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: string | number | import("long").Long;
                    negative_int_value?: string | number | import("long").Long;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _59.FileOptions;
            fromAmino(object: _59.FileOptionsAmino): _59.FileOptions;
            toAmino(message: _59.FileOptions): _59.FileOptionsAmino;
            fromAminoMsg(object: _59.FileOptionsAminoMsg): _59.FileOptions;
            fromProtoMsg(message: _59.FileOptionsProtoMsg): _59.FileOptions;
            toProto(message: _59.FileOptions): Uint8Array;
            toProtoMsg(message: _59.FileOptions): _59.FileOptionsProtoMsg;
        };
        MessageOptions: {
            typeUrl: string;
            encode(message: _59.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MessageOptions;
            fromJSON(object: any): _59.MessageOptions;
            toJSON(message: _59.MessageOptions): unknown;
            fromPartial(object: {
                message_set_wire_format?: boolean;
                no_standard_descriptor_accessor?: boolean;
                deprecated?: boolean;
                map_entry?: boolean;
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: string | number | import("long").Long;
                    negative_int_value?: string | number | import("long").Long;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _59.MessageOptions;
            fromAmino(object: _59.MessageOptionsAmino): _59.MessageOptions;
            toAmino(message: _59.MessageOptions): _59.MessageOptionsAmino;
            fromAminoMsg(object: _59.MessageOptionsAminoMsg): _59.MessageOptions;
            fromProtoMsg(message: _59.MessageOptionsProtoMsg): _59.MessageOptions;
            toProto(message: _59.MessageOptions): Uint8Array;
            toProtoMsg(message: _59.MessageOptions): _59.MessageOptionsProtoMsg;
        };
        FieldOptions: {
            typeUrl: string;
            encode(message: _59.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.FieldOptions;
            fromJSON(object: any): _59.FieldOptions;
            toJSON(message: _59.FieldOptions): unknown;
            fromPartial(object: {
                ctype?: _59.FieldOptions_CType;
                packed?: boolean;
                jstype?: _59.FieldOptions_JSType;
                lazy?: boolean;
                deprecated?: boolean;
                weak?: boolean;
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: string | number | import("long").Long;
                    negative_int_value?: string | number | import("long").Long;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _59.FieldOptions;
            fromAmino(object: _59.FieldOptionsAmino): _59.FieldOptions;
            toAmino(message: _59.FieldOptions): _59.FieldOptionsAmino;
            fromAminoMsg(object: _59.FieldOptionsAminoMsg): _59.FieldOptions;
            fromProtoMsg(message: _59.FieldOptionsProtoMsg): _59.FieldOptions;
            toProto(message: _59.FieldOptions): Uint8Array;
            toProtoMsg(message: _59.FieldOptions): _59.FieldOptionsProtoMsg;
        };
        OneofOptions: {
            typeUrl: string;
            encode(message: _59.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.OneofOptions;
            fromJSON(object: any): _59.OneofOptions;
            toJSON(message: _59.OneofOptions): unknown;
            fromPartial(object: {
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: string | number | import("long").Long;
                    negative_int_value?: string | number | import("long").Long;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _59.OneofOptions;
            fromAmino(object: _59.OneofOptionsAmino): _59.OneofOptions;
            toAmino(message: _59.OneofOptions): _59.OneofOptionsAmino;
            fromAminoMsg(object: _59.OneofOptionsAminoMsg): _59.OneofOptions;
            fromProtoMsg(message: _59.OneofOptionsProtoMsg): _59.OneofOptions;
            toProto(message: _59.OneofOptions): Uint8Array;
            toProtoMsg(message: _59.OneofOptions): _59.OneofOptionsProtoMsg;
        };
        EnumOptions: {
            typeUrl: string;
            encode(message: _59.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EnumOptions;
            fromJSON(object: any): _59.EnumOptions;
            toJSON(message: _59.EnumOptions): unknown;
            fromPartial(object: {
                allow_alias?: boolean;
                deprecated?: boolean;
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: string | number | import("long").Long;
                    negative_int_value?: string | number | import("long").Long;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _59.EnumOptions;
            fromAmino(object: _59.EnumOptionsAmino): _59.EnumOptions;
            toAmino(message: _59.EnumOptions): _59.EnumOptionsAmino;
            fromAminoMsg(object: _59.EnumOptionsAminoMsg): _59.EnumOptions;
            fromProtoMsg(message: _59.EnumOptionsProtoMsg): _59.EnumOptions;
            toProto(message: _59.EnumOptions): Uint8Array;
            toProtoMsg(message: _59.EnumOptions): _59.EnumOptionsProtoMsg;
        };
        EnumValueOptions: {
            typeUrl: string;
            encode(message: _59.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EnumValueOptions;
            fromJSON(object: any): _59.EnumValueOptions;
            toJSON(message: _59.EnumValueOptions): unknown;
            fromPartial(object: {
                deprecated?: boolean;
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: string | number | import("long").Long;
                    negative_int_value?: string | number | import("long").Long;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _59.EnumValueOptions;
            fromAmino(object: _59.EnumValueOptionsAmino): _59.EnumValueOptions;
            toAmino(message: _59.EnumValueOptions): _59.EnumValueOptionsAmino;
            fromAminoMsg(object: _59.EnumValueOptionsAminoMsg): _59.EnumValueOptions;
            fromProtoMsg(message: _59.EnumValueOptionsProtoMsg): _59.EnumValueOptions;
            toProto(message: _59.EnumValueOptions): Uint8Array;
            toProtoMsg(message: _59.EnumValueOptions): _59.EnumValueOptionsProtoMsg;
        };
        ServiceOptions: {
            typeUrl: string;
            encode(message: _59.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.ServiceOptions;
            fromJSON(object: any): _59.ServiceOptions;
            toJSON(message: _59.ServiceOptions): unknown;
            fromPartial(object: {
                deprecated?: boolean;
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: string | number | import("long").Long;
                    negative_int_value?: string | number | import("long").Long;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _59.ServiceOptions;
            fromAmino(object: _59.ServiceOptionsAmino): _59.ServiceOptions;
            toAmino(message: _59.ServiceOptions): _59.ServiceOptionsAmino;
            fromAminoMsg(object: _59.ServiceOptionsAminoMsg): _59.ServiceOptions;
            fromProtoMsg(message: _59.ServiceOptionsProtoMsg): _59.ServiceOptions;
            toProto(message: _59.ServiceOptions): Uint8Array;
            toProtoMsg(message: _59.ServiceOptions): _59.ServiceOptionsProtoMsg;
        };
        MethodOptions: {
            typeUrl: string;
            encode(message: _59.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MethodOptions;
            fromJSON(object: any): _59.MethodOptions;
            toJSON(message: _59.MethodOptions): unknown;
            fromPartial(object: {
                deprecated?: boolean;
                idempotency_level?: _59.MethodOptions_IdempotencyLevel;
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: string | number | import("long").Long;
                    negative_int_value?: string | number | import("long").Long;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _59.MethodOptions;
            fromAmino(object: _59.MethodOptionsAmino): _59.MethodOptions;
            toAmino(message: _59.MethodOptions): _59.MethodOptionsAmino;
            fromAminoMsg(object: _59.MethodOptionsAminoMsg): _59.MethodOptions;
            fromProtoMsg(message: _59.MethodOptionsProtoMsg): _59.MethodOptions;
            toProto(message: _59.MethodOptions): Uint8Array;
            toProtoMsg(message: _59.MethodOptions): _59.MethodOptionsProtoMsg;
        };
        UninterpretedOption: {
            typeUrl: string;
            encode(message: _59.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.UninterpretedOption;
            fromJSON(object: any): _59.UninterpretedOption;
            toJSON(message: _59.UninterpretedOption): unknown;
            fromPartial(object: {
                name?: {
                    name_part?: string;
                    is_extension?: boolean;
                }[];
                identifier_value?: string;
                positive_int_value?: string | number | import("long").Long;
                negative_int_value?: string | number | import("long").Long;
                double_value?: number;
                string_value?: Uint8Array;
                aggregate_value?: string;
            }): _59.UninterpretedOption;
            fromAmino(object: _59.UninterpretedOptionAmino): _59.UninterpretedOption;
            toAmino(message: _59.UninterpretedOption): _59.UninterpretedOptionAmino;
            fromAminoMsg(object: _59.UninterpretedOptionAminoMsg): _59.UninterpretedOption;
            fromProtoMsg(message: _59.UninterpretedOptionProtoMsg): _59.UninterpretedOption;
            toProto(message: _59.UninterpretedOption): Uint8Array;
            toProtoMsg(message: _59.UninterpretedOption): _59.UninterpretedOptionProtoMsg;
        };
        UninterpretedOption_NamePart: {
            typeUrl: string;
            encode(message: _59.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.UninterpretedOption_NamePart;
            fromJSON(object: any): _59.UninterpretedOption_NamePart;
            toJSON(message: _59.UninterpretedOption_NamePart): unknown;
            fromPartial(object: {
                name_part?: string;
                is_extension?: boolean;
            }): _59.UninterpretedOption_NamePart;
            fromAmino(object: _59.UninterpretedOption_NamePartAmino): _59.UninterpretedOption_NamePart;
            toAmino(message: _59.UninterpretedOption_NamePart): _59.UninterpretedOption_NamePartAmino;
            fromAminoMsg(object: _59.UninterpretedOption_NamePartAminoMsg): _59.UninterpretedOption_NamePart;
            fromProtoMsg(message: _59.UninterpretedOption_NamePartProtoMsg): _59.UninterpretedOption_NamePart;
            toProto(message: _59.UninterpretedOption_NamePart): Uint8Array;
            toProtoMsg(message: _59.UninterpretedOption_NamePart): _59.UninterpretedOption_NamePartProtoMsg;
        };
        SourceCodeInfo: {
            typeUrl: string;
            encode(message: _59.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.SourceCodeInfo;
            fromJSON(object: any): _59.SourceCodeInfo;
            toJSON(message: _59.SourceCodeInfo): unknown;
            fromPartial(object: {
                location?: {
                    path?: number[];
                    span?: number[];
                    leading_comments?: string;
                    trailing_comments?: string;
                    leading_detached_comments?: string[];
                }[];
            }): _59.SourceCodeInfo;
            fromAmino(object: _59.SourceCodeInfoAmino): _59.SourceCodeInfo;
            toAmino(message: _59.SourceCodeInfo): _59.SourceCodeInfoAmino;
            fromAminoMsg(object: _59.SourceCodeInfoAminoMsg): _59.SourceCodeInfo;
            fromProtoMsg(message: _59.SourceCodeInfoProtoMsg): _59.SourceCodeInfo;
            toProto(message: _59.SourceCodeInfo): Uint8Array;
            toProtoMsg(message: _59.SourceCodeInfo): _59.SourceCodeInfoProtoMsg;
        };
        SourceCodeInfo_Location: {
            typeUrl: string;
            encode(message: _59.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.SourceCodeInfo_Location;
            fromJSON(object: any): _59.SourceCodeInfo_Location;
            toJSON(message: _59.SourceCodeInfo_Location): unknown;
            fromPartial(object: {
                path?: number[];
                span?: number[];
                leading_comments?: string;
                trailing_comments?: string;
                leading_detached_comments?: string[];
            }): _59.SourceCodeInfo_Location;
            fromAmino(object: _59.SourceCodeInfo_LocationAmino): _59.SourceCodeInfo_Location;
            toAmino(message: _59.SourceCodeInfo_Location): _59.SourceCodeInfo_LocationAmino;
            fromAminoMsg(object: _59.SourceCodeInfo_LocationAminoMsg): _59.SourceCodeInfo_Location;
            fromProtoMsg(message: _59.SourceCodeInfo_LocationProtoMsg): _59.SourceCodeInfo_Location;
            toProto(message: _59.SourceCodeInfo_Location): Uint8Array;
            toProtoMsg(message: _59.SourceCodeInfo_Location): _59.SourceCodeInfo_LocationProtoMsg;
        };
        GeneratedCodeInfo: {
            typeUrl: string;
            encode(message: _59.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.GeneratedCodeInfo;
            fromJSON(object: any): _59.GeneratedCodeInfo;
            toJSON(message: _59.GeneratedCodeInfo): unknown;
            fromPartial(object: {
                annotation?: {
                    path?: number[];
                    source_file?: string;
                    begin?: number;
                    end?: number;
                }[];
            }): _59.GeneratedCodeInfo;
            fromAmino(object: _59.GeneratedCodeInfoAmino): _59.GeneratedCodeInfo;
            toAmino(message: _59.GeneratedCodeInfo): _59.GeneratedCodeInfoAmino;
            fromAminoMsg(object: _59.GeneratedCodeInfoAminoMsg): _59.GeneratedCodeInfo;
            fromProtoMsg(message: _59.GeneratedCodeInfoProtoMsg): _59.GeneratedCodeInfo;
            toProto(message: _59.GeneratedCodeInfo): Uint8Array;
            toProtoMsg(message: _59.GeneratedCodeInfo): _59.GeneratedCodeInfoProtoMsg;
        };
        GeneratedCodeInfo_Annotation: {
            typeUrl: string;
            encode(message: _59.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _59.GeneratedCodeInfo_Annotation;
            toJSON(message: _59.GeneratedCodeInfo_Annotation): unknown;
            fromPartial(object: {
                path?: number[];
                source_file?: string;
                begin?: number;
                end?: number;
            }): _59.GeneratedCodeInfo_Annotation;
            fromAmino(object: _59.GeneratedCodeInfo_AnnotationAmino): _59.GeneratedCodeInfo_Annotation;
            toAmino(message: _59.GeneratedCodeInfo_Annotation): _59.GeneratedCodeInfo_AnnotationAmino;
            fromAminoMsg(object: _59.GeneratedCodeInfo_AnnotationAminoMsg): _59.GeneratedCodeInfo_Annotation;
            fromProtoMsg(message: _59.GeneratedCodeInfo_AnnotationProtoMsg): _59.GeneratedCodeInfo_Annotation;
            toProto(message: _59.GeneratedCodeInfo_Annotation): Uint8Array;
            toProtoMsg(message: _59.GeneratedCodeInfo_Annotation): _59.GeneratedCodeInfo_AnnotationProtoMsg;
        };
        Any: {
            typeUrl: string;
            encode(message: _58.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Any;
            fromJSON(object: any): _58.Any;
            toJSON(message: _58.Any): unknown;
            fromPartial(object: {
                $typeUrl?: string;
                type_url?: string;
                value?: Uint8Array;
            }): _58.Any;
            fromAmino(object: _58.AnyAmino): _58.Any;
            toAmino(message: _58.Any): _58.AnyAmino;
            fromAminoMsg(object: _58.AnyAminoMsg): _58.Any;
            fromProtoMsg(message: _58.AnyProtoMsg): _58.Any;
            toProto(message: _58.Any): Uint8Array;
            toProtoMsg(message: _58.Any): _58.AnyProtoMsg;
        };
    };
}
