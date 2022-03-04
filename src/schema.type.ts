export interface Schema {
    tops: Top[];
}

export interface Top {
    Source?:    Source;
    Generator?: Generator;
    Model?:     Enum;
    Enum?:      Enum;
}

export interface Enum {
    name:           Name;
    values?:        Enum[];
    attributes:     any[];
    documentation:  Documentation | null;
    span:           Span;
    commented_out?: boolean;
    fields?:        Field[];
}

export interface Documentation {
    text: string;
}

export interface Field {
    field_type:       FieldType;
    name:             Name;
    arity:            Arity;
    attributes:       Attribute[];
    documentation:    Documentation | null;
    span:             Span;
    is_commented_out: boolean;
}

export enum Arity {
    List = "List",
    Optional = "Optional",
    Required = "Required",
}

export interface Attribute {
    name:      Name;
    arguments: Arguments;
    span:      Span;
}

export interface Arguments {
    arguments:       Argument[];
    empty_arguments: any[];
    trailing_comma:  null;
}

export interface Argument {
    name:  Name | null;
    value: PurpleValue;
    span:  Span;
}

export interface Name {
    name: string;
    span: Span;
}

export interface Span {
    start: number;
    end:   number;
}

export interface PurpleValue {
    Function?:      Array<FunctionClass | string>;
    NumericValue?:  Array<Span | string>;
    StringValue?:   Array<Span | string>;
    ConstantValue?: Array<Span | string>;
    Array?:         Array<ArrayClass[] | Span>;
}

export interface ArrayClass {
    ConstantValue: Array<Span | string>;
}

export interface FunctionClass {
    arguments?:       ArgumentElement[];
    empty_arguments?: any[];
    trailing_comma?:  null;
    start?:           number;
    end?:             number;
}

export interface ArgumentElement {
    name:  Name | null;
    value: FluffyValue;
    span:  Span;
}

export interface FluffyValue {
    StringValue: Array<Span | string>;
}

export interface FieldType {
    Supported: Name;
}

export interface Generator {
    name:          Name;
    properties:    ArgumentElement[];
    documentation: null;
    span:          Span;
}

export interface Source {
    name:          Name;
    properties:    SourceProperty[];
    documentation: null;
    span:          Span;
}

export interface SourceProperty {
    name:  Name;
    value: TentacledValue;
    span:  Span;
}

export interface TentacledValue {
    Function?:    Array<FunctionClass | string>;
    StringValue?: Array<Span | string>;
}
