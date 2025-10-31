    </div><!-- #content -->

    <footer id="colophon" class="site-footer">
        <div class="footer-main">
            <div class="container">
                <div class="footer-content">
                    <!-- Brand + Social -->
                    <div class="footer-brand">
                        <div class="footer-logo">
                            <?php if (has_custom_logo()) : ?>
                                <?php the_custom_logo(); ?>
                            <?php else : ?>
                                <a href="<?php echo esc_url(home_url('/')); ?>">
                                    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 174 114">
                                        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="#FDC700" font-family="Quicksand" font-size="24" font-weight="700">
                                            YesMoreBet
                                        </text>
                                    </svg>
                                </a>
                            <?php endif; ?>
                        </div>

                        <div class="footer-social">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="<?php esc_attr_e('Instagram', 'yesmorebet'); ?>">
                                <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
                                    <rect x="3.375" y="3.375" width="11.25" height="11.25" rx="2.8125" stroke="#99A1AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <circle cx="9" cy="9" r="2.8125" stroke="#99A1AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <circle cx="13.125" cy="4.875" r="0.5625" fill="#99A1AF"/>
                                </svg>
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="<?php esc_attr_e('Facebook', 'yesmorebet'); ?>">
                                <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
                                    <path d="M13.5 3H11.25C10.4544 3 9.69129 3.31607 9.12868 3.87868C8.56607 4.44129 8.25 5.20435 8.25 6V8.25H6V11.25H8.25V18H11.25V11.25H13.5L14.25 8.25H11.25V6C11.25 5.80109 11.329 5.61032 11.4697 5.46967C11.6103 5.32902 11.8011 5.25 12 5.25H13.5V3Z" stroke="#99A1AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <!-- Informations légales -->
                    <div class="footer-section">
                        <h3><?php esc_html_e('Informations légales', 'yesmorebet'); ?></h3>
                        <ul>
                            <li>
                                <a href="<?php echo esc_url(yesmorebet_get_page_url('mentions-legales')); ?>">
                                    <?php esc_html_e('Mentions légales', 'yesmorebet'); ?>
                                </a>
                            </li>
                            <li>
                                <a href="<?php echo esc_url(yesmorebet_get_page_url('politique-confidentialite')); ?>">
                                    <?php esc_html_e('Politique de confidentialité', 'yesmorebet'); ?>
                                </a>
                            </li>
                            <li>
                                <a href="<?php echo esc_url(yesmorebet_get_page_url('cgv')); ?>">
                                    <?php esc_html_e('CGV', 'yesmorebet'); ?>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <!-- Contact -->
                    <div class="footer-section">
                        <h3><?php esc_html_e('Contact', 'yesmorebet'); ?></h3>
                        <ul>
                            <li class="footer-contact-item">
                                <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                                    <path d="M2.66667 2.66666H13.3333C14.0667 2.66666 14.6667 3.26666 14.6667 4V12C14.6667 12.7333 14.0667 13.3333 13.3333 13.3333H2.66667C1.93333 13.3333 1.33333 12.7333 1.33333 12V4C1.33333 3.26666 1.93333 2.66666 2.66667 2.66666Z" stroke="#FDC700" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14.6667 4L8 8.66667L1.33333 4" stroke="#FDC700" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <a href="mailto:contact@yesmorebet.fr">contact@yesmorebet.fr</a>
                            </li>
                            <li class="footer-contact-item">
                                <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                                    <path d="M14.6667 11.28V13.28C14.6675 13.4657 14.6294 13.6494 14.555 13.8195C14.4807 13.9897 14.3716 14.1424 14.2348 14.2679C14.0979 14.3934 13.9364 14.489 13.7605 14.5485C13.5847 14.6079 13.3983 14.6298 13.2133 14.6127C11.1619 14.3904 9.19137 13.6894 7.46 12.5667C5.84926 11.5431 4.48359 10.1774 3.46 8.56666C2.33334 6.82745 1.63213 4.84731 1.41333 2.78666C1.39633 2.60233 1.41813 2.41671 1.47719 2.24139C1.53625 2.06607 1.6312 1.90498 1.75616 1.76833C1.88113 1.63168 2.03324 1.52264 2.20299 1.44817C2.37273 1.3737 2.55634 1.33545 2.742 1.33666H4.742C5.06357 1.33366 5.37456 1.4472 5.61873 1.65568C5.86291 1.86415 6.02475 2.15352 6.07533 2.47266C6.16994 3.11196 6.34263 3.73806 6.59 4.33999C6.68296 4.58013 6.69883 4.84334 6.63577 5.09305C6.5727 5.34276 6.43344 5.56802 6.23533 5.73999L5.392 6.58333C6.34236 8.26862 7.73137 9.65763 9.41667 10.608L10.26 9.76466C10.432 9.56655 10.6572 9.42729 10.907 9.36422C11.1567 9.30116 11.4199 9.31703 11.66 9.40999C12.2619 9.65736 12.888 9.83005 13.5273 9.92466C13.8502 9.97566 14.1427 10.1409 14.3516 10.3897C14.5605 10.6386 14.6717 10.9554 14.6667 11.28Z" stroke="#FDC700" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <a href="tel:+33626512217">+33 6 26 51 22 17</a>
                            </li>
                            <li class="footer-contact-item">
                                <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                                    <path d="M14 6.66667C14 11.3333 8 15.3333 8 15.3333C8 15.3333 2 11.3333 2 6.66667C2 5.07536 2.63214 3.54927 3.75736 2.42406C4.88258 1.29885 6.40871 0.666666 8 0.666666C9.59131 0.666666 11.1174 1.29885 12.2426 2.42406C13.3679 3.54927 14 5.07536 14 6.66667Z" stroke="#FDC700" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 8.66667C9.10457 8.66667 10 7.77123 10 6.66667C10 5.5621 9.10457 4.66667 8 4.66667C6.89543 4.66667 6 5.5621 6 6.66667C6 7.77123 6.89543 8.66667 8 8.66667Z" stroke="#FDC700" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span><?php esc_html_e('Grasse, Cannes, Antibes, Nice et région Sud', 'yesmorebet'); ?></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="container">
                <div class="footer-bottom-content">
                    <p>
                        &copy; <?php echo date('Y'); ?> YesMoreBet. <?php esc_html_e('Tous droits réservés. • Fait avec', 'yesmorebet'); ?> ❤️ <?php esc_html_e('sur la Côte d\'Azur', 'yesmorebet'); ?>
                    </p>
                    <p>
                        <?php esc_html_e('Animation de casino fictif 100% légale et sans argent réel', 'yesmorebet'); ?>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
