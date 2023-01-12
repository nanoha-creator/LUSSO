module.exports = {
  plugins: ["stylelint-scss"],
  extends: ["@wordpress/stylelint-config/scss", "stylelint-config-prettier"],
  rules: {
    // セレクタの正規表現指定
    "selector-class-pattern": "^([a-z][a-z0-9]*)(_+[a-zA-Z0-9]+)*$",
    // URLは常に""で囲む
    "function-url-quotes": "always",
    //scssで使える @include などに関するエラーを出さない
    "at-rule-no-unknown": null,
    //scssでもサポートしていない @ルール にはエラーを出す
    "scss/at-rule-no-unknown": true,
  },
};
