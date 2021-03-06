module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
      "react/react-in-jsx-scope": 0,
      "@typescript-eslint/no-non-null-assertion": 0,
      "prefer-const":'off',
      "@typescript-eslint/ban-types":'off',
      'react/prop-types':'off',
      '@typescript-eslint/no-extra-semi':"off",
      'react/no-unescaped-entities':"off",
      "@typescript-eslint/explicit-module-boundary-types":'off',
      "@typescript-eslint/no-explicit-any":'off'

    },
    
  };