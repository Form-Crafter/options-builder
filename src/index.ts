import { checkbox } from '_builders/checkbox'
import { date } from '_builders/date'
import { datePicker } from '_builders/datePicker'
import { dateRange } from '_builders/dateRange'
import { group } from '_builders/group'
import { input } from '_builders/input'
import { mask } from '_builders/mask'
import { miltiCheckbox } from '_builders/multiCheckbox'
import { multifield } from '_builders/multifield'
import { multiSelect } from '_builders/multiSelect'
import { number } from '_builders/number'
import { radio } from '_builders/radio'
import { select } from '_builders/select'
import { slider } from '_builders/slider'
import { textarea } from '_builders/textarea'
import { time } from '_builders/time'
import { timePicker } from '_builders/timePicker'

export * from './relations'
export * from './types'
export * from './validations'

export const builders = {
    input,
    time,
    date,
    number,
    select,
    multiSelect,
    checkbox,
    miltiCheckbox,
    radio,
    slider,
    datePicker,
    dateRange,
    timePicker,
    mask,
    group,
    multifield,
    textarea,
}
