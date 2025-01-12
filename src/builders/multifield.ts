import { GetComponentPropertiesSchema } from '@form-crafter/core'

import { CustomValidationRuleParams, LengthValidationRuleParams } from '_validations'

import { BuilderSchema, GeneralOptionBuilder } from './general'

type Properties<T extends BuilderSchema = {}> = {
    label: string | undefined
    default: GetComponentPropertiesSchema<T>[] | undefined
    template: T
    disable: boolean | undefined
    addButtonName: string | undefined
}

const getInitialProperties: () => Properties = () => ({
    label: undefined,
    default: undefined,
    template: {},
    disable: undefined,
    addButtonName: 'Add',
})

class MultifieldBuilder<Props extends Properties = Properties> extends GeneralOptionBuilder<Props['default'], Properties> {
    constructor() {
        super({ type: 'multifield', properties: getInitialProperties() })
    }

    public label(value: Props['label']) {
        this.properties.label = value
        return this
    }

    public default(value: Props['default']) {
        this.properties.default = value
        return this
    }

    public template<T extends BuilderSchema>(value: T) {
        this.properties.template = value
        return this as unknown as MultifieldBuilder<Properties<T>>
    }

    public disable() {
        this.properties.disable = true
        return this
    }

    public customValidation(params: CustomValidationRuleParams) {
        this.validations.push(params)
        return this
    }

    public required() {
        this.validations.push({ name: 'required' })
        return this as unknown as MultifieldBuilder<Omit<Props, 'default'> & { default: NonNullable<Props['default']> }>
    }

    public length(params: LengthValidationRuleParams) {
        this.validations.push({ name: 'length', params })
        return this
    }

    public unique(params: { uniquekey: keyof GetComponentPropertiesSchema<Props['template']> }) {
        this.validations.push({ name: 'unique', params })
        return this
    }

    public hideIf() {
        this.relations.push({ name: 'hideIf' })
        return this
    }

    public disableIf() {
        this.relations.push({ name: 'disableIf' })
        return this
    }
}

export const multifield = () => new MultifieldBuilder()
