module.exports = {
  plugins: ["stylelint-scss"], // stylelint-scss を使う
  extends: ["stylelint-config-standard-scss", "stylelint-prettier/recommended"],
  rules: {
    "at-rule-no-unknown": null, //scssで使える @include などに関するエラーを出さない
    "scss/at-rule-no-unknown": true, //scssでもサポートしていない @ルール にはエラーを出す
    "selector-class-pattern": null, // ケバブケース以外の場合にエラーが出ないようにする
    "no-descending-specificity": null, //セレクタの詳細度に関する警告を出さない
    "property-no-vendor-prefix": null, // ベンダープレフィックスに関するエラーを出さない
    "number-max-precision": null, // 数値の桁数を制限しない
    "scss/no-global-function-names": null,
    "declaration-block-no-redundant-longhand-properties": null, // ショートハンドで記述しない制限をしない

    "font-family-no-missing-generic-family-keyword": [
      true,
      {
        // FontAwesomeの指定で発生するエラーを出さない
        ignoreFontFamilies: "Font Awesome 6 Free",
      },
    ],
  },
};
