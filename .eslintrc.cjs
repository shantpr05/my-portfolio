module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "prettier"
  ],
  rules: {
    "prettier/prettier": ["error"],
    "react/react-in-jsx-scope": "off"
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};