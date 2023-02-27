module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    ecmaVersion: 'latest',
    requireConfigFile: false,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/state-in-constructor': 'off',
    'class-methods-use-this': 'off',
    'no-console': 'off',
    'no-useless-return': 'off',
    'react/forbid-prop-types': 'off',
    'default-param-last': 'off',
    'func-names': 'off',
    'react/jsx-no-bind': 'off',
    camelcase: 'off',
    'no-extraneous-dependencies': 'off',
    'no-unused-vars': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off', // DO NOT COPY THIS LINE TO ANOTHER PROJ
    'no-use-before-define': 'off', // DO NOT COPY THIS LINE TO ANOTHER PROJ
    'no-shadow': 'off', // DO NOT COPY THIS LINE TO ANOTHER PROJ
    'no-underscore-dangle': 'off', // DO NOT COPY THIS LINE TO ANOTHER PROJ
  },
}
