import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";

export default [
  js.configs.recommended,

  {
    files: ["**/*.{js,jsx}"],

    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    plugins: {
      react,
    },

    rules: {
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "warn",
    },

    settings: {
      react: {
        version: "detect",
      },
    },
  },
];