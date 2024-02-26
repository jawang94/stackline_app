module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:typescript-sort-keys/recommended",
    "airbnb",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  globals: {
    JSX: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  "settings": {
    "react": {
      "version": "detect" // Automatically detect the React version
    }
  },
  plugins: [
    "react",
    "react-refresh",
    "sort-keys-fix",
    "@typescript-eslint",
    "typescript-sort-keys",
    "prettier",
  ],
  rules: {
    "@typescript-eslint/array-type": ["error", { default: "generic" }],
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    camelcase: "off",
    "func-names": "off",
    "import/extensions": "off",
    "import/no-absolute-path": "off",
    "import/no-unresolved": "off",
    "import/order": "off",
    "jsx-a11y/alt-text": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/media-has-caption": "off",
    "no-nested-ternary": "off",
    "no-plusplus": "off",
    "no-shadow": "off",
    "no-underscore-dangle": "off",
    "no-unused-vars": "off",
    "no-param-reassign": "off",
    "prettier/prettier": "error",
    "react-hooks/rules-of-hooks": "error",
    "react/destructuring-assignment": "off",
    "react/function-component-definition": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx", ".jsx"] }],
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "sort-keys-fix/sort-keys-fix": "error",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  "overrides": [
    {
      "files": ["*Slice.ts"],
      "rules": {
        "no-param-reassign": [
          "error",
          {
            "props": true,
            "ignorePropertyModificationsFor": ["state"] // Allow state mutations in Redux Toolkit slices
          }
        ]
      }
    }
  ],
}
