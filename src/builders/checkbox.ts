import { CustomValidationRuleParams } from '_validations'

import { GeneralOptionBuilder } from './general'

type Properties = {
    label: string | undefined
    checked: boolean | undefined
    disable: boolean | undefined
    nullable: boolean | undefined
    readonly: boolean | undefined
    helpText: string | undefined
}

const getInitialProperties = (): Properties => ({
    label: undefined,
    checked: undefined,
    disable: undefined,
    nullable: undefined,
    readonly: undefined,
    helpText: undefined,
})

export class CheckboxBuilder<Value = Properties['checked']> extends GeneralOptionBuilder<Value, Properties> {
    constructor() {
        super({ type: 'checkbox', properties: getInitialProperties() })
    }

    public label(value: Properties['label']) {
        this.properties.label = value
        return this
    }

    public checked(value: Properties['checked']) {
        this.properties.checked = value
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
        return this as CheckboxBuilder<Value | null>
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
        return this as CheckboxBuilder<Exclude<Value, undefined>>
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

export const checkbox = () => new CheckboxBuilder()
