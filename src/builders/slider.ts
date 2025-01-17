import { Undefinable } from '@form-crafter/utils'

import { CustomValidationRuleParams } from '_validations'

import { GeneralOptionBuilder } from './general'

type Properties = {
    label: Undefinable<string>
    default: number
    min: number
    max: number
    step: number
    disable: Undefinable<boolean>
    readonly: Undefinable<boolean>
    helpText: Undefinable<string>
}

const getInitialProperties: () => Properties = () => ({
    label: undefined,
    default: 5,
    min: 0,
    max: 10,
    step: 1,
    disable: undefined,
    nullable: undefined,
    readonly: undefined,
    helpText: undefined,
})

export class SliderBuilder<Output = Properties['default']> extends GeneralOptionBuilder<Output, Properties> {
    constructor() {
        super({ type: 'slider', properties: getInitialProperties() })
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

    public step(value: Properties['step']) {
        this.properties.step = value
        return this
    }

    public disable() {
        this.properties.disable = true
        return this
    }

    public readonly(value: Properties['readonly']) {
        this.properties.readonly = value
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

    public hideIf() {
        this.relations.push({ name: 'hideIf' })
        return this
    }

    public disableIf() {
        this.relations.push({ name: 'disableIf' })
        return this
    }
}

export const slider = () => new SliderBuilder()
