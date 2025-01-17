export * from './optionBuilder'

import { BuilderOutput, SomeObject, Undefinable } from '@form-crafter/utils'

import { OptionBuilder } from './optionBuilder'

export type OptionFieldType =
    | 'input'
    | 'number'
    | 'date'
    | 'time'
    | 'select'
    | 'multiSelect'
    | 'checkbox'
    | 'multiCheckbox'
    | 'radio'
    | 'slider'
    | 'datePicker'
    | 'dateRange'
    | 'timePicker'
    | 'multifield'
    | 'group'
    | 'mask'
    | 'textarea'

export type GroupStruct = SomeObject<OptionBuilder<any>>

export type OutputFromGroupStruct<T extends GroupStruct> = {
    [K in keyof T]: BuilderOutput<T[K]>
}

export type GroupStructFromOutput<T extends Undefinable<SomeObject>> = {
    [K in keyof T]: OptionBuilder<T[K]>
}
