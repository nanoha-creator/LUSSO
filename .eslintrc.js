module.exports = {
  /* 環境変数に関する設定 */
  env: {
    browser: true,
    jquery: true,
    es2021: true,
    node: true,
  },
  /* ESLintが用意している一般的なルールを適用
        コード整形は、Prettierのものを適用 */
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    quotes: ["error", "double"],
  },
};
