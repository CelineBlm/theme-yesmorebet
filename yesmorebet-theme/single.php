<?php
/**
 * The template for displaying all single posts
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
                        <h1 class="entry-title text-gradient" style="font-size: 2.5rem; text-align: center; margin-bottom: 1rem;">
                            <?php the_title(); ?>
                        </h1>

                        <div class="entry-meta" style="text-align: center; color: #99a1af; font-size: 0.875rem; margin-bottom: 1.5rem;">
                            <time datetime="<?php echo get_the_date('c'); ?>">
                                <?php echo get_the_date(); ?>
                            </time>
                            <?php if (get_the_author()) : ?>
                                <span style="margin: 0 0.5rem;">•</span>
                                <span><?php the_author(); ?></span>
                            <?php endif; ?>
                        </div>

                        <?php if (has_post_thumbnail()) : ?>
                            <div class="post-thumbnail" style="margin-bottom: 2rem; border-radius: 0.5rem; overflow: hidden;">
                                <?php the_post_thumbnail('large', array('style' => 'width: 100%; height: auto;')); ?>
                            </div>
                        <?php endif; ?>
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

                    <footer class="entry-footer" style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid rgba(255, 255, 255, 0.1);">
                        <?php
                        $categories_list = get_the_category_list(', ');
                        if ($categories_list) :
                            ?>
                            <div style="color: #99a1af; margin-bottom: 1rem;">
                                <strong><?php esc_html_e('Catégories:', 'yesmorebet'); ?></strong>
                                <?php echo $categories_list; ?>
                            </div>
                        <?php endif; ?>

                        <?php
                        $tags_list = get_the_tag_list('', ', ');
                        if ($tags_list) :
                            ?>
                            <div style="color: #99a1af;">
                                <strong><?php esc_html_e('Tags:', 'yesmorebet'); ?></strong>
                                <?php echo $tags_list; ?>
                            </div>
                        <?php endif; ?>
                    </footer>
                </div>
            </div>
        </article>

        <?php
        // If comments are open or we have at least one comment, load up the comment template.
        if (comments_open() || get_comments_number()) :
            ?>
            <div class="container">
                <div style="max-width: 56rem; margin: 0 auto; padding: 0 1rem 3rem;">
                    <?php comments_template(); ?>
                </div>
            </div>
        <?php endif; ?>

        <?php
    endwhile;
    ?>
</main>

<?php
get_footer();
