const eslint = require("@paciolan/eslint-config");

const react = {
  parser: "babel-eslint",
  plugins: ["babel", "react"],
  env: {
    browser: true
  },
  rules: {
    "react/prop-types": "warn"
  },
  extends: ["plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};

// custom merge for @paciolan/eslint-config and @paciolan/eslint-config-react
const merge = (eslint, react) => ({
  parser: react.parser,
  env: Object.assign({}, eslint.env, react.env),
  plugins: react.plugins.concat(eslint.plugins),
  extends: eslint.extends.concat(react.extends),
  rules: Object.assign({}, eslint.rules, react.rules),
  parserOptions: Object.assign({}, eslint.parserOptions, react.parserOptions),
  settings: react.settings
});

module.exports = merge(eslint, react);
