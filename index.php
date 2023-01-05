<!DOCTYPE html>
<html lang="ja">

<head>
  <?php get_header(); ?>
</head>

<body class="pg_top">
  <div class="ly_wrapper">

    <header class="ly_header">
      <div class="ly_header_inner">

        <!-- ヘッダー共通パーツ -->
        <?php get_template_part('includes/header') ?>

      </div>
    </header>

    <main>
    </main>

    <footer>
      <div class="ly_footer">
        <div class="ly_footer_inner">

          <!-- フッター共通パーツ -->
          <?php get_template_part('includes/footer') ?>

        </div>
    </footer>

  </div>

  <?php get_footer(); ?>
</body>

</html>