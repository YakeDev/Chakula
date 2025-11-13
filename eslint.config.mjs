import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "**/node_modules",
      "**/.expo",
      "**/.next",
      "**/.turbo",
      "**/dist",
      "**/build",
      "**/coverage",
      "**/.expo",
      "**/package-lock.json"
    ]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports" }
      ]
    }
  }
);
