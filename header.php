<!-- エンコード指定 -->
<meta charset="UTF-8">

<!-- ページ設定 -->
<title><?php bloginfo("name"); ?></title>
<meta name="description" content="<?php bloginfo("description"); ?>">

<!-- ファビコン・アイコン設定 -->
<link rel="shortcut icon" href="<?php echo esc_url(get_theme_file_uri("favicon.png")); ?>">
<link rel="apple-touch-icon" href="<?php echo esc_url(get_theme_file_uri("favicon.png")); ?>">

<!-- 自動リンクを無効化 -->
<meta name="format-detection" content="email=no,telephone=no,address=no">

<!-- レスポンシブ対応 -->
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- 検索結果に出ないようにする -->
<meta name="robots" content="noindex , nofollow">

<?php wp_head(); ?>
