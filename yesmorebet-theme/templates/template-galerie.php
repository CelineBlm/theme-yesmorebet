<?php
/**
 * Template Name: Galerie
 * Description: Template pour la page galerie
 *
 * @package YesMoreBet
 */

get_header();
?>

<main id="primary" class="site-main" style="padding-top: 100px;">
    <?php
    while (have_posts()) :
        the_post();
        ?>
        <div class="container">
            <div style="padding: 3rem 1rem;">
                <div class="text-center mb-12">
                    <h1 class="text-gradient" style="font-size: 3rem; margin-bottom: 1.5rem;">
                        <?php the_title(); ?>
                    </h1>
                    <p class="section-description">
                        Découvrez l'ambiance YesMoreBet en images
                    </p>
                </div>

                <?php the_content(); ?>
            </div>
        </div>
        <?php
    endwhile;
    ?>
</main>

<?php
get_footer();
