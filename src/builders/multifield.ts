import { ChildType, NonUndefinable, SomeObject, Undefinable, Unwrap } from '@form-crafter/utils'

import { GroupStruct, GroupStructFromOutput, OutputFromGroupStruct } from '_types'
import { CustomValidationRuleParams, LengthValidationRuleParams } from '_validations'

import { GeneralOptionBuilder } from './general'

type Properties<T extends Undefinable<SomeObject[]> = []> = {
    label: Undefinable<string>
    default: Undefinable<T>
    template: Undefinable<SomeObject>
    disable: Undefinable<boolean>
    addButtonName: Undefinable<string>
}

const getInitialProperties: <T extends Undefinable<SomeObject[]> = []>() => Properties<T> = () => ({
    label: undefined,
    default: undefined,
    template: undefined,
    disable: undefined,
    addButtonName: 'Add',
})

export class MultifieldBuilder<Output extends Undefinable<SomeObject[]> = Undefinable<SomeObject[]>> extends GeneralOptionBuilder<Output, Properties<Output>> {
    constructor(templateSchema: GroupStructFromOutput<ChildType<Output>>) {
        super({ type: 'multifield', properties: getInitialProperties<Output>() })
        this.properties.template = templateSchema
    }

    public label(value: Properties['label']) {
        this.properties.label = value
        return this
    }

    public default(value: Output) {
        this.properties.default = value
        return this
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
        return this as unknown as MultifieldBuilder<NonUndefinable<Output>>
    }

    public length(params: LengthValidationRuleParams) {
        this.validations.push({ name: 'length', params })
        return this
    }

    public unique(params: { uniquekey: keyof ChildType<Output> }) {
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

export const multifield = <T extends GroupStruct>(struct: T) => {
    type Output = Unwrap<OutputFromGroupStruct<T>>

    return new MultifieldBuilder<Undefinable<Output[]>>(struct as GroupStructFromOutput<Output>)
}
