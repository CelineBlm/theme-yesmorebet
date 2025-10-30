<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @package YesMoreBet
 */

get_header();
?>

<main id="primary" class="site-main" style="padding-top: 100px; min-height: 60vh;">
    <div class="container">
        <div style="max-width: 42rem; margin: 0 auto; padding: 5rem 1rem; text-align: center;">
            <h1 style="font-size: 6rem; font-weight: 700; background: linear-gradient(to right, #fdc700, #d08700); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 1rem;">
                404
            </h1>

            <h2 class="text-gradient" style="font-size: 2rem; margin-bottom: 1.5rem;">
                <?php esc_html_e('Page non trouvée', 'yesmorebet'); ?>
            </h2>

            <p style="color: #d1d5db; font-size: 1.125rem; margin-bottom: 2rem;">
                <?php esc_html_e('Désolé, la page que vous recherchez n\'existe pas ou a été déplacée.', 'yesmorebet'); ?>
            </p>

            <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center; margin-top: 2rem;">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="btn-primary">
                    <?php esc_html_e('Retour à l\'accueil', 'yesmorebet'); ?>
                </a>

                <a href="<?php echo esc_url(home_url('/contact')); ?>" class="btn-secondary">
                    <?php esc_html_e('Nous contacter', 'yesmorebet'); ?>
                </a>
            </div>

            <!-- Search form -->
            <div style="margin-top: 3rem;">
                <p style="color: #99a1af; margin-bottom: 1rem;">
                    <?php esc_html_e('Ou essayez de rechercher :', 'yesmorebet'); ?>
                </p>
                <?php get_search_form(); ?>
            </div>
        </div>
    </div>
</main>

<?php
get_footer();
