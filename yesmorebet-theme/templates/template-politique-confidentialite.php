<?php
/**
 * Template Name: Politique de Confidentialité
 * Description: Template pour la politique de confidentialité - Éditable avec Elementor
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
