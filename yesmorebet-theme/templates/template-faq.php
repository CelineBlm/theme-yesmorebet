<?php
/**
 * Template Name: FAQ
 * Description: Template pour la page FAQ
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
            <div style="max-width: 64rem; margin: 0 auto; padding: 3rem 1rem;">
                <div class="text-center mb-12">
                    <h1 class="text-gradient" style="font-size: 3rem; margin-bottom: 1.5rem;">
                        <?php the_title(); ?>
                    </h1>
                    <div class="section-description">
                        <p>Tout ce que vous devez savoir sur <span class="text-gradient">YesMoreBet</span></p>
                        <p>Vous avez des questions ? Nous avons les réponses ! Découvrez tout ce qu'il faut savoir sur nos animations casino pour vos événements.</p>
                    </div>
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
