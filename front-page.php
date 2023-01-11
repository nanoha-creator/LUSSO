<!DOCTYPE html>
<html lang="ja">

<head>
  <?php get_header(); ?>
</head>

<body class="pg_top">
  <div class="ly_wrapper">

    <header class="ly_header">

      <!-- ヘッダー共通パーツ -->
      <?php get_template_part('includes/header') ?>

    </header>

    <main>
    </main>

    <!-- CTA共通パーツ -->
    <?php get_template_part('includes/cta') ?>

    <footer>
      <div class="ly_footer">

        <!-- フッター共通パーツ -->
        <?php get_template_part('includes/footer') ?>

    </footer>

  </div>

  <?php get_footer(); ?>
</body>

</html>