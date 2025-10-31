<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'yesmorebet'); ?></a>

    <header id="masthead" class="site-header">
        <div class="container">
            <nav class="main-navigation" role="navigation" aria-label="<?php esc_attr_e('Main Navigation', 'yesmorebet'); ?>">
                <!-- Desktop Layout -->
                <div class="desktop-nav hide-mobile">
                    <!-- Left Navigation -->
                    <div class="nav-left">
                        <a href="<?php echo esc_url(home_url('/#concept')); ?>" class="nav-link">
                            <?php esc_html_e('Le concept', 'yesmorebet'); ?>
                        </a>
                        <a href="<?php echo esc_url(yesmorebet_get_page_url('faq')); ?>" class="nav-link">
                            <?php esc_html_e('FAQ', 'yesmorebet'); ?>
                        </a>
                        <a href="<?php echo esc_url(yesmorebet_get_page_url('galerie')); ?>" class="nav-link">
                            <?php esc_html_e('Galerie', 'yesmorebet'); ?>
                        </a>
                        <a href="<?php echo esc_url(yesmorebet_get_page_url('contact')); ?>" class="nav-link">
                            <?php esc_html_e('Contact', 'yesmorebet'); ?>
                        </a>
                    </div>

                    <!-- Center Logo -->
                    <div class="nav-logo">
                        <?php if (has_custom_logo()) : ?>
                            <?php the_custom_logo(); ?>
                        <?php else : ?>
                            <a href="<?php echo esc_url(home_url('/')); ?>">
                                <svg class="logo-svg" fill="none" preserveAspectRatio="none" viewBox="0 0 174 114">
                                    <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="#FDC700" font-family="Quicksand" font-size="24" font-weight="700">
                                        YesMoreBet
                                    </text>
                                </svg>
                            </a>
                        <?php endif; ?>
                    </div>

                    <!-- Right Navigation -->
                    <div class="nav-right">
                        <a href="tel:+33626512217" class="header-phone">
                            <svg class="w-4 h-4" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                <path d="M14.6667 11.28V13.28C14.6675 13.4657 14.6294 13.6494 14.555 13.8195C14.4807 13.9897 14.3716 14.1424 14.2348 14.2679C14.0979 14.3934 13.9364 14.489 13.7605 14.5485C13.5847 14.6079 13.3983 14.6298 13.2133 14.6127C11.1619 14.3904 9.19137 13.6894 7.46 12.5667C5.84926 11.5431 4.48359 10.1774 3.46 8.56666C2.33334 6.82745 1.63213 4.84731 1.41333 2.78666C1.39633 2.60233 1.41813 2.41671 1.47719 2.24139C1.53625 2.06607 1.6312 1.90498 1.75616 1.76833C1.88113 1.63168 2.03324 1.52264 2.20299 1.44817C2.37273 1.3737 2.55634 1.33545 2.742 1.33666H4.742C5.06357 1.33366 5.37456 1.4472 5.61873 1.65568C5.86291 1.86415 6.02475 2.15352 6.07533 2.47266C6.16994 3.11196 6.34263 3.73806 6.59 4.33999C6.68296 4.58013 6.69883 4.84334 6.63577 5.09305C6.5727 5.34276 6.43344 5.56802 6.23533 5.73999L5.392 6.58333C6.34236 8.26862 7.73137 9.65763 9.41667 10.608L10.26 9.76466C10.432 9.56655 10.6572 9.42729 10.907 9.36422C11.1567 9.30116 11.4199 9.31703 11.66 9.40999C12.2619 9.65736 12.888 9.83005 13.5273 9.92466C13.8502 9.97566 14.1427 10.1409 14.3516 10.3897C14.5605 10.6386 14.6717 10.9554 14.6667 11.28Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>+33 6 26 51 22 17</span>
                        </a>
                        <a href="<?php echo esc_url(yesmorebet_get_page_url('prestations')); ?>" class="header-cta">
                            <span><?php esc_html_e('Voir les formules', 'yesmorebet'); ?></span>
                        </a>
                    </div>
                </div>

                <!-- Mobile Layout -->
                <div class="mobile-header show-mobile">
                    <div class="nav-logo">
                        <?php if (has_custom_logo()) : ?>
                            <?php the_custom_logo(); ?>
                        <?php else : ?>
                            <a href="<?php echo esc_url(home_url('/')); ?>">
                                <svg class="logo-svg" fill="none" preserveAspectRatio="none" viewBox="0 0 174 114">
                                    <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="#FDC700" font-family="Quicksand" font-size="20" font-weight="700">
                                        YesMoreBet
                                    </text>
                                </svg>
                            </a>
                        <?php endif; ?>
                    </div>

                    <button class="mobile-menu-toggle" aria-label="<?php esc_attr_e('Toggle Menu', 'yesmorebet'); ?>" aria-expanded="false">
                        <svg class="menu-icon" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                        <svg class="close-icon" style="display: none;" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <!-- Mobile Navigation Menu -->
                <div class="mobile-nav show-mobile">
                    <a href="<?php echo esc_url(home_url('/')); ?>"><?php esc_html_e('Accueil', 'yesmorebet'); ?></a>
                    <a href="<?php echo esc_url(home_url('/#concept')); ?>"><?php esc_html_e('Le Concept', 'yesmorebet'); ?></a>
                    <a href="<?php echo esc_url(yesmorebet_get_page_url('faq')); ?>"><?php esc_html_e('FAQ', 'yesmorebet'); ?></a>
                    <a href="<?php echo esc_url(yesmorebet_get_page_url('galerie')); ?>"><?php esc_html_e('Galerie', 'yesmorebet'); ?></a>
                    <a href="<?php echo esc_url(yesmorebet_get_page_url('contact')); ?>"><?php esc_html_e('Contact', 'yesmorebet'); ?></a>
                    <a href="tel:+33626512217" class="header-phone">
                        <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                            <path d="M14.6667 11.28V13.28C14.6675 13.4657 14.6294 13.6494 14.555 13.8195C14.4807 13.9897 14.3716 14.1424 14.2348 14.2679C14.0979 14.3934 13.9364 14.489 13.7605 14.5485C13.5847 14.6079 13.3983 14.6298 13.2133 14.6127C11.1619 14.3904 9.19137 13.6894 7.46 12.5667C5.84926 11.5431 4.48359 10.1774 3.46 8.56666C2.33334 6.82745 1.63213 4.84731 1.41333 2.78666C1.39633 2.60233 1.41813 2.41671 1.47719 2.24139C1.53625 2.06607 1.6312 1.90498 1.75616 1.76833C1.88113 1.63168 2.03324 1.52264 2.20299 1.44817C2.37273 1.3737 2.55634 1.33545 2.742 1.33666H4.742C5.06357 1.33366 5.37456 1.4472 5.61873 1.65568C5.86291 1.86415 6.02475 2.15352 6.07533 2.47266C6.16994 3.11196 6.34263 3.73806 6.59 4.33999C6.68296 4.58013 6.69883 4.84334 6.63577 5.09305C6.5727 5.34276 6.43344 5.56802 6.23533 5.73999L5.392 6.58333C6.34236 8.26862 7.73137 9.65763 9.41667 10.608L10.26 9.76466C10.432 9.56655 10.6572 9.42729 10.907 9.36422C11.1567 9.30116 11.4199 9.31703 11.66 9.40999C12.2619 9.65736 12.888 9.83005 13.5273 9.92466C13.8502 9.97566 14.1427 10.1409 14.3516 10.3897C14.5605 10.6386 14.6717 10.9554 14.6667 11.28Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>+33 6 26 51 22 17</span>
                    </a>
                    <a href="<?php echo esc_url(yesmorebet_get_page_url('prestations')); ?>" class="header-cta">
                        <span><?php esc_html_e('Voir les formules', 'yesmorebet'); ?></span>
                    </a>
                </div>
            </nav>
        </div>
    </header>

    <div id="content" class="site-content">
