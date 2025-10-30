<?php
/**
 * Template Name: Contact
 * Description: Template pour la page de contact
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
                        Contactez-nous pour organiser votre événement casino inoubliable
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
