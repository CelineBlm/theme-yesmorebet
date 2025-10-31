<?php
/**
 * Template Name: Conditions Générales de Vente
 * Description: Template pour les CGV - Éditable avec Elementor
 *
 * @package YesMoreBet
 */

get_header();
?>

<main id="primary" class="site-main" style="padding-top: 100px;">
    <?php
    while (have_posts()) :
        the_post();
        the_content();
    endwhile;
    ?>
</main>

<?php
get_footer();
