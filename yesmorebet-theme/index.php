<?php
/**
 * The main template file
 *
 * @package YesMoreBet
 */

get_header();
?>

<main id="primary" class="site-main">
    <?php
    if (have_posts()) :
        while (have_posts()) :
            the_post();
            the_content();
        endwhile;
    else :
        ?>
        <div class="container">
            <div style="padding: 5rem 1rem; text-align: center;">
                <h1><?php esc_html_e('Aucun contenu trouvé', 'yesmorebet'); ?></h1>
                <p><?php esc_html_e('Désolé, aucun contenu ne correspond à votre recherche.', 'yesmorebet'); ?></p>
            </div>
        </div>
        <?php
    endif;
    ?>
</main>

<?php
get_footer();
