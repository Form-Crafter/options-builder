import eslintConfig from '@form-crafter/dev-configs/dist/eslint.config.js'

export default [
    ...eslintConfig,
    {
        rules: {
            '@typescript-eslint/no-empty-object-type': 'off',
        },
    },
]
