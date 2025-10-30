<?php
/**
 * Hero Section Elementor Widget
 *
 * @package YesMoreBet
 */

if (!defined('ABSPATH')) {
    exit;
}

class YesMoreBet_Hero_Widget extends \Elementor\Widget_Base {

    public function get_name() {
        return 'yesmorebet_hero';
    }

    public function get_title() {
        return __('YMB Hero Section', 'yesmorebet');
    }

    public function get_icon() {
        return 'eicon-slider-full-screen';
    }

    public function get_categories() {
        return ['yesmorebet'];
    }

    protected function register_controls() {
        // Content Section
        $this->start_controls_section(
            'content_section',
            [
                'label' => __('Contenu', 'yesmorebet'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'title',
            [
                'label' => __('Titre Principal', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __('YesMoreBet', 'yesmorebet'),
                'label_block' => true,
            ]
        );

        $this->add_control(
            'subtitle',
            [
                'label' => __('Sous-titre', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::TEXTAREA,
                'default' => __('L\'expérience casino fictif pour vos soirées privées, mariages et événements d\'entreprise sur la Côte d\'Azur.', 'yesmorebet'),
                'rows' => 3,
            ]
        );

        $this->add_control(
            'location',
            [
                'label' => __('Localisation', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __('Grasse • Cannes • Antibes • Nice • Région PACA', 'yesmorebet'),
                'label_block' => true,
            ]
        );

        $this->add_control(
            'background_image',
            [
                'label' => __('Image de fond', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::MEDIA,
                'default' => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
            ]
        );

        $this->add_control(
            'cta_primary_text',
            [
                'label' => __('Texte CTA Principal', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __('Découvrir les formules', 'yesmorebet'),
            ]
        );

        $this->add_control(
            'cta_primary_link',
            [
                'label' => __('Lien CTA Principal', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::URL,
                'default' => [
                    'url' => '#prestations',
                ],
            ]
        );

        $this->add_control(
            'cta_secondary_text',
            [
                'label' => __('Texte CTA Secondaire', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __('Me contacter', 'yesmorebet'),
            ]
        );

        $this->add_control(
            'cta_secondary_link',
            [
                'label' => __('Lien CTA Secondaire', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::URL,
                'default' => [
                    'url' => '#contact',
                ],
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        ?>
        <section id="accueil" class="hero-section">
            <!-- Background Image with Overlay -->
            <div class="hero-background">
                <img
                    src="<?php echo esc_url($settings['background_image']['url']); ?>"
                    alt="<?php echo esc_attr($settings['title']); ?>"
                />
                <div class="hero-overlay"></div>
            </div>

            <!-- Content -->
            <div class="hero-content container">
                <div style="max-width: 64rem; margin: 0 auto; text-align: center;">
                    <!-- Main Heading -->
                    <h1 class="hero-title">
                        <?php echo esc_html($settings['title']); ?>
                    </h1>

                    <!-- Subtitle -->
                    <h2 class="hero-subtitle">
                        <?php echo esc_html($settings['subtitle']); ?>
                    </h2>

                    <!-- Location -->
                    <div class="hero-location">
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        <span><?php echo esc_html($settings['location']); ?></span>
                    </div>

                    <!-- CTA Buttons -->
                    <div class="hero-cta">
                        <a href="<?php echo esc_url($settings['cta_primary_link']['url']); ?>" class="btn-primary">
                            <?php echo esc_html($settings['cta_primary_text']); ?>
                        </a>
                        <a href="<?php echo esc_url($settings['cta_secondary_link']['url']); ?>" class="btn-secondary">
                            <?php echo esc_html($settings['cta_secondary_text']); ?>
                        </a>
                    </div>
                </div>

                <!-- Scroll Indicator -->
                <div class="scroll-indicator">
                    <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                </div>
            </div>
        </section>
        <?php
    }
}
