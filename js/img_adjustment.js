$(function () {
  // 高さ・幅を取得（表示したいサイズ）
  var $w = $(".bl_cta_imgWrapper").width();
  var $h = $(".bl_cta_imgWrapper").height();

  // 高さ・幅を取得（本来のサイズ）
  var $org_w = $(".bl_cta_imgWrapper img").prop("naturalWidth");
  var $org_h = $(".bl_cta_imgWrapper img").prop("naturalHeight");

  // 表示したいサイズ($w, $h)が画面に納まらない場合、
  // 同じ比率のまま表示できる最大のサイズに縮小する
  var $max_w = $(".bl_cta_imgWrapper").parent().width();
  if ($w > $max_w) {
    var $max_h = $max_w * ($h / $w);
    $(".bl_cta_imgWrapper img").css("width", $max_w + "px");
    $(".bl_cta_imgWrapper img").css("height", $max_h + "px");
  } else {
    // 画像表示エリアのサイズを指定
    // absoluteで調整するので、高さはpadding
    $(".bl_cta_imgWrapper img").css("width", $w + "px");
    $(".bl_cta_imgWrapper img").css("height", $h + "px");
  }

  // 元画像の高さ/幅が表示エリアの高さ/幅より小さい場合は、width:auto,height:100%
  // それ以外は、width:100%,height:auto
  if ($org_h / $org_w < $h / $w) {
    $(".bl_cta_imgWrapper img").css("max-width", "none");
    $(".bl_cta_imgWrapper img").css("width", "auto");
    $(".bl_cta_imgWrapper img").css("height", "100%");
  } else {
    $(".bl_cta_imgWrapper img").css("width", "100%");
    $(".bl_cta_imgWrapper img").css("height", "auto");
  }
});
