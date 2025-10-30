<?php
/**
 * Template Name: Mentions Légales
 * Description: Template pour les mentions légales
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
            <div style="max-width: 56rem; margin: 0 auto; padding: 3rem 1rem;">
                <h1 class="text-gradient" style="font-size: 2.5rem; margin-bottom: 2rem; text-align: center;">
                    <?php the_title(); ?>
                </h1>

                <div style="color: #d1d5db; line-height: 1.75;">
                    <?php the_content(); ?>
                </div>
            </div>
        </div>
        <?php
    endwhile;
    ?>
</main>

<?php
get_footer();
