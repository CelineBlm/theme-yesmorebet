<?php
/**
 * Template Name: Prestations
 * Description: Template pour la page des prestations et tarifs
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
        <section style="background: black; padding: 4rem 1rem; position: relative; overflow: hidden;">
            <div style="position: absolute; inset: 0; opacity: 0.3;">
                <!-- Decorative background -->
            </div>
            <div style="position: absolute; inset: 0; background: linear-gradient(to bottom, black, rgba(0, 0, 0, 0.8), black);"></div>

            <div class="container" style="max-width: 72rem; text-align: center; position: relative; z-index: 10;">
                <div style="margin-bottom: 1.5rem;">
                    <span style="display: inline-flex; align-items: center; gap: 0.5rem; background-color: rgba(208, 135, 0, 0.2); border: 1px solid rgba(208, 135, 0, 0.3); border-radius: 9999px; padding: 0.5rem 1.5rem; color: #fdc700;">
                        <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                            <path d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33333 8 1.33333C4.3181 1.33333 1.33333 4.3181 1.33333 8C1.33333 11.6819 4.3181 14.6667 8 14.6667Z" stroke="#FDC700" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>Animation casino fictif sans argent réel</span>
                    </span>
                </div>

                <h1 style="color: white; margin-bottom: 1.5rem;">
                    <span class="text-gradient"><?php the_title(); ?></span>
                    <span> & tarifs</span>
                </h1>

                <div style="color: white; max-width: 48rem; margin: 0 auto;">
                    <p>Nos formules s'adaptent à la taille et au rythme de votre événement.</p>
                    <p>Que vous soyez 20 ou 100 invités, YesMoreBet garantit une animation fluide et mémorable.</p>
                </div>
            </div>
        </section>

        <div class="container">
            <div style="padding: 3rem 1rem;">
                <?php the_content(); ?>
            </div>
        </div>
        <?php
    endwhile;
    ?>
</main>

<?php
get_footer();
