const path = require("path");

module.exports = {
  env: {
    es2021: true,
    node: true,
    browser: true,
    commonjs: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {
        config: path.join(__dirname, "./next.config.js"),
        alwaysTryTypes: true,
      },
    },
  },
  plugins: [
    "react-hooks",
    "react",
    "@typescript-eslint",
    "jsx-a11y",
    "import",
    "relay",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:relay/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  rules: {
    "react/prop-types": "off",
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/ban-types": [
          "error",
          {
            types: {
              "{}": false,
            },
          },
        ],
        "react/prop-types": ["off"],
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [
          "error",
          { extensions: [".jsx", ".tsx"] },
        ],
        "import/order": ["error"],
      },
    },
  ],
};
