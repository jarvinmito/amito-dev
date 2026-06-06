import eslintConfigNext from "eslint-config-next";

const eslintConfig = [
  ...eslintConfigNext,
  {
    ignores: [
      "public/**/*.js",
      "public/**/*.map",
      // React Email templates skew toward HTML-like apostrophes; lint core app separately
      "emails/**/*",
    ],
  },
  {
    rules: {
      // React Compiler / React 19 docs are stricter; legacy v1/apps patterns still valid short-term.
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/immutability": "off",
      "react-hooks/refs": "off",
      // Copy-heavy sections use straight apostrophes in JSX without HTML entities.
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
