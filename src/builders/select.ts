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
    placeholder: string | undefined
    helpText: string | undefined
}

const getInitialProperties: () => Properties = () => ({
    label: undefined,
    default: undefined,
    options: [],
    disable: undefined,
    nullable: undefined,
    readonly: undefined,
    placeholder: undefined,
    helpText: undefined,
})

export class SelectBuilder<Value = Properties['default']> extends GeneralOptionBuilder<Value, Properties> {
    constructor() {
        super({ type: 'select', properties: getInitialProperties() })
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

    public disable() {
        this.properties.disable = true
        return this
    }

    public nullable() {
        this.properties.nullable = true
        return this as SelectBuilder<Value | null>
    }

    public readonly(value: Properties['readonly']) {
        this.properties.readonly = value
        return this
    }

    public placeholder(value: Properties['placeholder']) {
        this.properties.placeholder = value
        return this
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
        return this as SelectBuilder<Exclude<Value, undefined>>
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

export const select = () => new SelectBuilder()
