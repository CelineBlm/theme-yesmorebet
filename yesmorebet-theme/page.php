<?php
/**
 * The template for displaying all pages
 *
 * @package YesMoreBet
 */

get_header();
?>

<main id="primary" class="site-main" style="padding-top: 100px; min-height: 60vh;">
    <?php
    while (have_posts()) :
        the_post();
        ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <div class="container">
                <div style="max-width: 56rem; margin: 0 auto; padding: 3rem 1rem;">
                    <header class="entry-header" style="margin-bottom: 2rem;">
                        <h1 class="entry-title text-gradient" style="font-size: 2.5rem; text-align: center;">
                            <?php the_title(); ?>
                        </h1>
                    </header>

                    <div class="entry-content" style="color: #d1d5db; line-height: 1.75;">
                        <?php
                        the_content();

                        wp_link_pages(array(
                            'before' => '<div class="page-links">' . esc_html__('Pages:', 'yesmorebet'),
                            'after'  => '</div>',
                        ));
                        ?>
                    </div>
                </div>
            </div>
        </article>
        <?php
    endwhile;
    ?>
</main>

<?php
get_footer();
