import { SelectionOption } from '@form-crafter/core'

import { CustomValidationRuleParams } from '_validations'

import { GeneralOptionBuilder } from './general'

type Properties = {
    label: string | undefined
    default: SelectionOption['value'] | undefined
    options: SelectionOption[]
    disable: boolean | undefined
    nullable: boolean | undefined
    readonly: boolean | undefined
    helpText: string | undefined
}

const getInitialProperties = (): Properties => ({
    label: undefined,
    default: undefined,
    options: [],
    disable: undefined,
    nullable: undefined,
    readonly: undefined,
    helpText: undefined,
})

export class RadioBuilder<Value = Properties['default']> extends GeneralOptionBuilder<Value, Properties> {
    constructor() {
        super({ type: 'radio', properties: getInitialProperties() })
    }

    public label(value: Properties['label']) {
        this.properties.label = value
        return this
    }

    public default(value: Properties['default']) {
        this.properties.default = value
        return this
    }

    public options(value: Properties['options']) {
        this.properties.options = value
        return this
    }

    public disable(value: Properties['disable']) {
        this.properties.disable = value
        return this
    }

    public readonly(value: Properties['readonly']) {
        this.properties.readonly = value
        return this
    }

    public nullable() {
        this.properties.nullable = true
        return this as RadioBuilder<Value | null>
    }

    public helpText(value: Properties['helpText']) {
        this.properties.helpText = value
        return this
    }

    public customValidation(params: CustomValidationRuleParams) {
        this.validations.push(params)
        return this
    }

    public required() {
        this.validations.push({ name: 'required' })
        return this as GeneralOptionBuilder<Value, Properties>
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

export const radio = () => new RadioBuilder()
