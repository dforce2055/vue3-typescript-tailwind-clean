module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    curly: ['error', 'multi'],
    indent: ['warn', 2],
    'array-callback-return': ['off', { allowImplicit: true }],
    'no-return-assign': ['off'],
    'no-unused-expressions': [
      'off',
      { allowShortCircuit: true, allowTernary: true },
    ],
    'no-sequences': ['off'],
    'import/no-named-as-default': ['off'],
    'vue/multi-word-component-names': ['off'],
    'vue/no-multiple-template-root': ['off'],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/singleline-html-element-content-newline': ['error', {
      'ignoreWhenNoAttributes': true,
      'ignoreWhenEmpty': true,
      'ignores': ['pre', 'textarea']
    }],
    'vue/no-duplicate-attributes': ['error', {
      'allowCoexistClass': true,
      'allowCoexistStyle': true
    }],
    'vue/first-attribute-linebreak': ['off'],
    'vue/max-len': ['warn', {
      'code': 90,
      'template': 80,
      'tabWidth': 2,
      'comments': 90,
      'ignorePattern': '',
      'ignoreComments': false,
      'ignoreTrailingComments': false,
      'ignoreUrls': false,
      'ignoreStrings': false,
      'ignoreTemplateLiterals': false,
      'ignoreRegExpLiterals': false,
      'ignoreHTMLAttributeValues': false,
      'ignoreHTMLTextContents': false,
    }]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
