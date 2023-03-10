module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json']
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'only-warn'
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/explicit-function-return-type': 'off',
    'semi': ['error', 'always'],
    '@typescript-eslint/semi': ['error', 'always'],
    'quote-props': 0,
    'comma-dangle': 0,
    '@typescript-eslint/comma-dangle': 0,
    'space-before-function-paren': ['error', 'never'],
    '@typescript-eslint/space-before-function-paren': ['error', 'never'],
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/no-confusing-void-expression': 0,
    '@typescript-eslint/consistent-type-assertions': 0,
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/restrict-template-expressions': 0,
    'no-floating-decimal': 0,
    '@typescript-eslint/consistent-indexed-object-style': 0,
  }
};
