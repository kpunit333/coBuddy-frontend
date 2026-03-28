import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores, FlatConfig } from 'eslint/config'

const tsConfig: FlatConfig.ConfigArray = tseslint.configs.recommended

const typescriptEslint: FlatConfig.ConfigArray = tseslint.configs.recommended.map((config) => ({
  ...config,
  rules: {
    ...config.rules,
    '@typescript-eslint/no-explicit-any': 'off',
  },
}))

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...typescriptEslint,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    }
  },
])

