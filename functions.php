<?php

// 外部ファイル読み込み
add_action("wp_enqueue_scripts", function () {
    // CSS読み込み
    wp_enqueue_style("ress", get_theme_file_uri("/css/ress.min.css"), [], false, "all");
    wp_enqueue_style("fontawesome", get_theme_file_uri("/fontawesome-free-6.2.0-web/css/all.css"), [], false, "all");
    wp_enqueue_style("style", get_stylesheet_uri(), ["ress"], false, "all");

    // js読み込み
    wp_deregister_script("jquery"); // デフォルトのjqueryを削除
    wp_enqueue_script("jquery", get_theme_file_uri("/js/jquery-3.6.1.min.js"), [], "3.6.1", true);
    wp_enqueue_script("img-adjustment", get_theme_file_uri("/js/img_adjustment.js"), ["jquery"], false, true);
});
