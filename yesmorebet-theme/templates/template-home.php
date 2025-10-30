<?php
/**
 * Template Name: Page d'Accueil
 * Description: Template pour la page d'accueil avec sections Hero, Features et Concept
 *
 * @package YesMoreBet
 */

get_header();
?>

<main id="primary" class="site-main">
    <?php
    while (have_posts()) :
        the_post();
        the_content();
    endwhile;
    ?>
</main>

<?php
get_footer();
