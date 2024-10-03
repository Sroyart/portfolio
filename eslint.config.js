import eslintPluginAstro from "eslint-plugin-astro";

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      "astro/no-set-html-directive": "error",
      "no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "after-used",
          caughtErrors: "all",
          ignoreRestSiblings: false,
          reportUsedIgnorePattern: false,
        },
      ],
    },
  },
];
