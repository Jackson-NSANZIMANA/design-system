import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import globals from "globals";
import lensCompliance from "eslint-plugin-lens-compliance";

export default tseslint.config(
  {
    ignores: ["**/node_modules/**", "**/dist/**", "**/.lens-knowledge-base/**"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: reactPlugin,
      "lens-compliance": lensCompliance,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,

      // --- LENS ENFORCEMENT RULES ---
      "lens-compliance/enforce-lens-primitives": "error",
      "lens-compliance/forbid-styling-props": "error",
      "lens-compliance/component-mastery": "error",
      "lens-compliance/no-eslint-disable": "error",

      // Import Lockdown
      "no-restricted-imports": [
        "error",
        {
          paths: [
            { name: "styled-components", message: "Use Lens tokens instead." },
            {
              name: "@emotion/react",
              message: "Forbidden. Direct Emotion usage violates Lens Mastery.",
            },
            {
              name: "@emotion/styled",
              message: "Forbidden. Direct Emotion usage violates Lens Mastery.",
            },
            {
              name: "react-icons",
              message: "Use @loomhq/lens/icons/ subpath for icons.",
            },
          ],
          patterns: [
            {
              group: ["@loomhq/lens/dist/*"],
              message:
                "Import from '@loomhq/lens' or '@loomhq/lens/icons/*' only.",
            },
          ],
        },
      ],

      "no-restricted-syntax": [
        "error",
        {
          selector:
            "ImportDeclaration[source.value=/\\.css$/][source.value!=/globals\\.css$/]",
          message:
            "❌ LENS VIOLATION: CSS file imports are forbidden. Use Lens Design Tokens. Exception: globals.css for Lens and font initialization only.",
        },
      ],

      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: { version: "detect" },
    },
  },
);
