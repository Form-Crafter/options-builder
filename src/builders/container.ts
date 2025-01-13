import { GetComponentPropertiesSchema } from '@form-crafter/core'

import { BuilderSchema, GeneralOptionBuilder } from './general'

type Properties<T extends BuilderSchema = {}> = {
    label: string | undefined
    children: T
    // unwrap: boolean | undefined
}

const getInitialProperties = (): Properties => ({
    label: undefined,
    children: {},
})

export class ContainerBuilder<Props extends Properties = Properties, Value = GetComponentPropertiesSchema<Props['children']>> extends GeneralOptionBuilder<
    Value,
    Properties
> {
    constructor() {
        super({ type: 'container', properties: getInitialProperties() })
    }

    public label(value: Props['label']) {
        this.properties.label = value
        return this
    }

    public children<T extends BuilderSchema>(value: T) {
        this.properties.children = value
        return this as unknown as ContainerBuilder<Properties<T>>
    }

    public hideIf() {
        this.relations.push({ name: 'hideIf' })
        return this
    }
}

export const container = () => new ContainerBuilder()
