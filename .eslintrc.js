module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react'
  ],
  rules: {
    '@typescript-eslint/semi': [2, 'always'],
    '@typescript-eslint/consistent-type-imports': ['off'],
    '@typescript-eslint/no-floating-promises': ['off'],
    '@typescript-eslint/restrict-template-expressions': ['off'],
    '@typescript-eslint/consistent-indexed-object-style': ['off'],
    '@typescript-eslint/prefer-optional-chain': ['off'],
    '@typescript-eslint/strict-boolean-expressions': ['off'],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',          
        },
        singleline: {
          delimiter: 'semi',          
        }
      }
    ]
  }
}
