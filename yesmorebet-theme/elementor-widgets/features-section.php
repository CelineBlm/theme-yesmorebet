<?php
/**
 * Features Section Elementor Widget
 *
 * @package YesMoreBet
 */

if (!defined('ABSPATH')) {
    exit;
}

class YesMoreBet_Features_Widget extends \Elementor\Widget_Base {

    public function get_name() {
        return 'yesmorebet_features';
    }

    public function get_title() {
        return __('YMB Features Section', 'yesmorebet');
    }

    public function get_icon() {
        return 'eicon-featured-image';
    }

    public function get_categories() {
        return ['yesmorebet'];
    }

    protected function register_controls() {
        // Header Section
        $this->start_controls_section(
            'header_section',
            [
                'label' => __('En-tête de section', 'yesmorebet'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'badge_text',
            [
                'label' => __('Badge', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __('Nos Services', 'yesmorebet'),
            ]
        );

        $this->add_control(
            'section_title',
            [
                'label' => __('Titre', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __('Une animation complète', 'yesmorebet'),
                'label_block' => true,
            ]
        );

        $this->add_control(
            'section_description',
            [
                'label' => __('Description', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::TEXTAREA,
                'default' => __('Tout ce dont vous avez besoin pour créer une soirée casino inoubliable', 'yesmorebet'),
            ]
        );

        $this->end_controls_section();

        // Features Section
        $this->start_controls_section(
            'features_section',
            [
                'label' => __('Fonctionnalités', 'yesmorebet'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'feature_title',
            [
                'label' => __('Titre', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __('Titre de la fonctionnalité', 'yesmorebet'),
                'label_block' => true,
            ]
        );

        $repeater->add_control(
            'feature_description',
            [
                'label' => __('Description', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::TEXTAREA,
                'default' => __('Description de la fonctionnalité', 'yesmorebet'),
            ]
        );

        $repeater->add_control(
            'feature_image',
            [
                'label' => __('Image', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::MEDIA,
                'default' => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
            ]
        );

        $this->add_control(
            'features_list',
            [
                'label' => __('Liste des fonctionnalités', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'default' => [
                    [
                        'feature_title' => __('Table de Blackjack professionnelle', 'yesmorebet'),
                        'feature_description' => __('Une vraie table de casino animée par un croupier professionnel pour une expérience authentique.', 'yesmorebet'),
                    ],
                    [
                        'feature_title' => __('Roue de la Chance et tombola à lots', 'yesmorebet'),
                        'feature_description' => __('Gagnez des tickets de tombola à la Roue de la Chance et remportez des lots en fin de soirée.', 'yesmorebet'),
                    ],
                    [
                        'feature_title' => __('Lunettes connectées', 'yesmorebet'),
                        'feature_description' => __('Immortalisez les meilleurs moments avec des lunettes connectées pour des souvenirs uniques à partager.', 'yesmorebet'),
                    ],
                ],
                'title_field' => '{{{ feature_title }}}',
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        ?>
        <section class="features-section">
            <!-- Decorative Elements -->
            <div class="features-decoration top-left"></div>
            <div class="features-decoration bottom-right"></div>

            <div class="container" style="position: relative; z-index: 10;">
                <!-- Section Header -->
                <div class="section-header">
                    <span class="section-badge">
                        <?php echo esc_html($settings['badge_text']); ?>
                    </span>
                    <h2 class="section-title">
                        <?php echo wp_kses_post($settings['section_title']); ?>
                    </h2>
                    <p class="section-description">
                        <?php echo esc_html($settings['section_description']); ?>
                    </p>
                </div>

                <!-- Features Grid -->
                <div class="features-grid">
                    <?php foreach ($settings['features_list'] as $feature) : ?>
                        <div class="feature-card">
                            <!-- Image Container -->
                            <div class="feature-image">
                                <img
                                    src="<?php echo esc_url($feature['feature_image']['url']); ?>"
                                    alt="<?php echo esc_attr($feature['feature_title']); ?>"
                                />
                                <div class="feature-image-overlay"></div>
                            </div>

                            <!-- Content -->
                            <div class="feature-content">
                                <h3><?php echo esc_html($feature['feature_title']); ?></h3>
                                <p><?php echo esc_html($feature['feature_description']); ?></p>
                                <a href="#" class="feature-link">
                                    <?php esc_html_e('En savoir plus', 'yesmorebet'); ?>
                                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </section>
        <?php
    }
}
