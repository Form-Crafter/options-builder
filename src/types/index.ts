import { OptionsBuilder, OptionsBuilderOutput } from '@form-crafter/core'
import { MakeKeysOptional, SomeObject, Undefinable } from '@form-crafter/utils'

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

export type GroupStruct = SomeObject<OptionsBuilder<any>>

export type OutputFromGroupStruct<T extends GroupStruct> = MakeKeysOptional<{
    [K in keyof T]: OptionsBuilderOutput<T[K]>
}>

export type GroupStructFromOutput<T extends Undefinable<SomeObject>> = {
    [K in keyof T]: OptionsBuilder<T[K]>
}
