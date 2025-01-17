import { RelationRule } from '_relations'
import { OptionBuilder, OptionFieldType } from '_types'
import { ValidationRule } from '_validations'

type GeneralOptionBuilderParams<P extends object> = {
    type: OptionFieldType
    properties: P
}

export class GeneralOptionBuilder<Output = any, Props extends object = object> implements OptionBuilder<Output> {
    declare readonly __outputType: Output

    public readonly type: string
    public properties: Props
    public validations: ValidationRule[]
    public relations: RelationRule[]

    constructor({ type, properties }: GeneralOptionBuilderParams<Props>) {
        this.type = type
        this.properties = properties
        this.validations = []
        this.relations = []
    }
}
