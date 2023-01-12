//--------------------------------------------------------
//  モード
//--------------------------------------------------------
//  strictモードで実行
"use strict";

//--------------------------------------------------------
//  モジュール読み込み
//--------------------------------------------------------
// Gulp
// eslint-disable-next-line no-unused-vars
const { src, dest, series, parallel, watch } = require("gulp");

// エラー時のタスク停止防止
const plumber = require("gulp-plumber");
// エラー通知
const notify = require("gulp-notify");
// glob機能を使って@useや@forwardをまとめる
const sassGlob = require("gulp-sass-glob-use-forward");
// sassのコンパイルをする
const sass = require("gulp-dart-sass");
// メディアクエリをまとめる
const postcss = require("gulp-postcss");
const mqpacker = require("css-mqpacker");
// ベンダープレフィックス付与
const autoprefixer = require("gulp-autoprefixer");
// ソースマップを作る
const sourcemaps = require("gulp-sourcemaps");
// CSSファイルを圧縮
const cleanCss = require("gulp-clean-css");
// JSファイルを圧縮
const uglify = require("gulp-uglify");
// ファイル名変更
const rename = require("gulp-rename");
// ブラウザリロード
const bs = require("browser-sync");

//--------------------------------------------------------
//  関数定義
//--------------------------------------------------------
// CSSファイルを生成する
function compile(done) {
  src("./scss/*.scss") // コンパイル対象
    .pipe(
      plumber({
        errorHandler: notify.onError("Error: <%= error.message %>"),
      })
    ) // watch中にエラーが発生してもwatchが止まらないようにする
    .pipe(sourcemaps.init()) // ソースマップ初期化
    .pipe(sassGlob()) // glob機能を使って@useや@forwardを省略する
    .pipe(sass()) // sassのコンパイルをする
    .pipe(postcss([mqpacker()])) // メディアクエリをまとめる
    .pipe(autoprefixer()) // ベンダープレフィックスを自動付与する
    .pipe(sourcemaps.write("./")) // ソースマップ作成
    .pipe(dest("./")); // 出力先

  done();
}

// CSSファイルを圧縮する
function mincss(done) {
  src("./*(?!min).css") // 圧縮対象
    .pipe(dest("./")) // 出力先
    .pipe(cleanCss())
    .pipe(rename({ extname: ".min.css" }))
    .pipe(dest("./")); // 出力先

  done();
}

// jsファイルを圧縮する
function minjs(done) {
  src("./js/(?!jquery)*(?!min).js") // 圧縮対象
    .pipe(dest("./js/")) // 出力先
    .pipe(uglify())
    .pipe(rename({ extname: ".min.js" }))
    .pipe(dest("./js/")); // 出力先

  done();
}

// browser-sync初期化
function bsInit(done) {
  bs.init({
    proxy: "lusso.wp", // ローカルにある「Site Domain」に合わせる
    notify: false, // ブラウザ更新時に出てくる通知を非表示にする
    open: "external", // ローカルIPアドレスでサーバを立ち上げる
  });

  done();
}

// ブラウザリロード
function bsReload(done) {
  bs.reload();

  done();
}

// 監視
function watchTask() {
  // scssファイルが更新されたら、コンパイル
  watch(["./scss/*.scss"], series(compile, mincss));

  // jsファイルが更新されたら、圧縮
  watch(["./js/*.js"], minjs);

  // php/css/jsファイルが更新されたら、ブラウザリロード
  watch(["./*.php", "./*/*.php", "./*.css", "./*.js"], series(bsReload));
}

//--------------------------------------------------------
//  タスク定義
//--------------------------------------------------------
// Sassコンパイル
exports.task = series(compile, mincss, minjs, bsInit, bsReload, watchTask);

/**********************************************************/
/*  END OF FILE                                           */
/**********************************************************/
