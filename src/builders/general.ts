import cloneDeep from 'lodash.clonedeep'

import { RelationRule } from '_relations'
import { ValidationRule } from '_validations'

import { OptionFieldType } from '../types'

type GeneralOptionBuilderParams<P extends object> = {
    type: OptionFieldType
    properties: P
}

export class GeneralOptionBuilder<Output = any, Props extends object = object> {
    declare readonly __outputType: Output

    public readonly type: string
    public properties: Props
    public validations: ValidationRule[]
    public relations: RelationRule[]

    constructor({ type, properties }: GeneralOptionBuilderParams<Props>) {
        this.type = type
        this.properties = cloneDeep(properties)
        this.validations = []
        this.relations = []
    }
}

export type BuilderSchema = Record<string, GeneralOptionBuilder>
