module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base', // eslint-config-airbnb-base
    'plugin:vue/vue3-recommended',
    '@nuxtjs/eslint-config-typescript',
    'prettier' /* package 'eslint-config-prettier' - disables all eslint rules that might conflict with prettier.
    Has to be the last item in the extends array. */,
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    camelcase: 'off', // The api uses snake_case
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    radix: 'off',
    'no-shadow': 'off', // Standard 'no-shadow' rule doesn't work with TypeScript errors
    '@typescript-eslint/no-shadow': ['error'],
  },
};
