import { NonUndefinable, Nullable, Undefinable } from '@form-crafter/utils'

import { CustomValidationRuleParams } from '_validations'

import { GeneralOptionBuilder } from './general'

type Value = Undefinable<string | Date | number>

type Properties = {
    label: Undefinable<string>
    default: Undefinable<{ start?: Value; end?: Value }>
    min: Value
    max: Value
    pattern: Undefinable<string>
    disable: Undefinable<boolean>
    nullable: Undefinable<boolean>
    readonly: Undefinable<boolean>
    placeholder: Undefinable<string>
    helpText: Undefinable<string>
}

const getInitialProperties: () => Properties = () => ({
    label: undefined,
    default: undefined,
    min: undefined,
    max: undefined,
    pattern: undefined,
    disable: undefined,
    nullable: undefined,
    readonly: undefined,
    placeholder: undefined,
    helpText: undefined,
})

export class DateRangeBuilder<Output = Properties['default']> extends GeneralOptionBuilder<Output, Properties> {
    constructor() {
        super({ type: 'dateRange', properties: getInitialProperties() })
    }

    public label(value: Properties['label']) {
        this.properties.label = value
        return this
    }

    public default(value: Properties['default']) {
        this.properties.default = value
        return this
    }

    public min(value: Properties['min']) {
        this.properties.min = value
        return this
    }

    public max(value: Properties['max']) {
        this.properties.max = value
        return this
    }

    public pattern(value: Properties['pattern']) {
        this.properties.pattern = value
        return this
    }

    public disable() {
        this.properties.disable = true
        return this
    }

    public nullable() {
        this.properties.nullable = true
        return this as DateRangeBuilder<Nullable<Output>>
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
        return this as DateRangeBuilder<NonUndefinable<Output>>
    }

    public minRangeDate(start: Value, end: Value) {
        this.validations.push({ name: 'minRangeDate', params: { start, end } })
        return this
    }

    public maxRangeDate(start: Value, end: Value) {
        this.validations.push({ name: 'maxRangeDate', params: { start, end } })
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

export const dateRange = () => new DateRangeBuilder()
