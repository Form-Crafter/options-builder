import { SelectionOption } from '@form-crafter/core'

import { getTimeByHoursOptions } from '_utils'
import { CustomValidationRuleParams } from '_validations'

import { GeneralOptionBuilder } from './general'

type Properties = {
    label: string | undefined
    default: string | undefined
    min: string | undefined
    max: string | undefined
    options: SelectionOption[] | undefined
    pattern: string | undefined
    disable: boolean | undefined
    nullable: boolean | undefined
    readonly: boolean | undefined
    placeholder: string | undefined
    helpText: string | undefined
}

const getInitialProperties: () => Properties = () => ({
    label: undefined,
    default: undefined,
    min: undefined,
    max: undefined,
    options: getTimeByHoursOptions(),
    pattern: undefined,
    disable: undefined,
    nullable: undefined,
    readonly: undefined,
    placeholder: undefined,
    helpText: undefined,
})

export class TimePickerBuilder<Value = Properties['default']> extends GeneralOptionBuilder<Value, Properties> {
    constructor() {
        super({ type: 'timePicker', properties: getInitialProperties() })
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

    public options(value: Properties['options']) {
        this.properties.options = value
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
        return this as TimePickerBuilder<Value | null>
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
        return this as TimePickerBuilder<Exclude<Value, undefined>>
    }

    public minTime(minTime: NonNullable<Properties['min']>) {
        this.validations.push({ name: 'minTime', params: { minTime } })
        return this
    }

    public maxTime(maxTime: NonNullable<Properties['max']>) {
        this.validations.push({ name: 'maxTime', params: { maxTime } })
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

export const timePicker = () => new TimePickerBuilder()
