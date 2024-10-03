import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier'; // Import Prettier config to override rules

export default [
  {
    ignores: ['dist'], // Ignore build directories like 'dist'
  },
  {
    files: ['**/*.{js,jsx}'], // Apply configuration to JavaScript and JSX files
    languageOptions: {
      ecmaVersion: 'latest', // Use the latest ECMAScript features
      globals: globals.browser, // Browser globals like `window`, `document`
      parserOptions: {
        ecmaFeatures: { jsx: true }, // Enable JSX
        sourceType: 'module', // Use ES module syntax
      },
    },
    settings: {
      react: {
        version: '18.3', // Specify React version
      },
    },
    plugins: {
      react, // React plugin for linting React code
      'react-hooks': reactHooks, // React Hooks plugin for linting hooks
      'react-refresh': reactRefresh, // React Refresh plugin for development
      prettier: prettierPlugin, // Prettier plugin for formatting
    },
    rules: {
      // Base ESLint recommended rules
      ...js.configs.recommended.rules,

      // React rules
      ...react.configs.recommended.rules, // Recommended React rules
      ...react.configs['jsx-runtime'].rules, // React JSX runtime rules (for React 17+)
      ...reactHooks.configs.recommended.rules, // React Hooks recommended rules

      // Disable or customize some React rules
      'react/jsx-no-target-blank': 'off',
      'react/react-in-jsx-scope': 'off', // Not needed for React 17+
      'no-unused-vars': 'warn', // Warn about unused variables

      // React Refresh rule for components
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Prettier integration
      'prettier/prettier': 'warn', // Warn on Prettier issues
    },
  },
  {
    // Prettier configuration, integrated without "extends"
    files: ['**/*.{js,jsx}'],
    rules: {
      ...prettierConfig.rules, // Disable conflicting rules between ESLint and Prettier
    },
  },
];
