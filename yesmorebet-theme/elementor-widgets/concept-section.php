<?php
/**
 * Concept Section Elementor Widget
 *
 * @package YesMoreBet
 */

if (!defined('ABSPATH')) {
    exit;
}

class YesMoreBet_Concept_Widget extends \Elementor\Widget_Base {

    public function get_name() {
        return 'yesmorebet_concept';
    }

    public function get_title() {
        return __('YMB Concept Section', 'yesmorebet');
    }

    public function get_icon() {
        return 'eicon-info-box';
    }

    public function get_categories() {
        return ['yesmorebet'];
    }

    protected function register_controls() {
        $this->start_controls_section(
            'content_section',
            [
                'label' => __('Contenu', 'yesmorebet'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'badge_text',
            [
                'label' => __('Badge', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __('Le Concept', 'yesmorebet'),
            ]
        );

        $this->add_control(
            'title',
            [
                'label' => __('Titre', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __('Une expérience unique, conviviale et 100% divertissante', 'yesmorebet'),
                'label_block' => true,
            ]
        );

        $this->add_control(
            'description_1',
            [
                'label' => __('Description 1', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::TEXTAREA,
                'default' => __('Une animation clé en main : vos invités reçoivent des jetons fictifs, jouent au Blackjack, gagnent des tickets de tombola grâce à la Roue de la Chance et repartent avec des lots choisis par vos soins.', 'yesmorebet'),
            ]
        );

        $this->add_control(
            'description_2',
            [
                'label' => __('Description 2', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::TEXTAREA,
                'default' => __('Une expérience unique, conviviale et 100 % divertissante.', 'yesmorebet'),
            ]
        );

        $this->add_control(
            'concept_image',
            [
                'label' => __('Image', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::MEDIA,
                'default' => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
            ]
        );

        $this->add_control(
            'cta_text',
            [
                'label' => __('Texte du bouton', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __('Découvrir les formules', 'yesmorebet'),
            ]
        );

        $this->add_control(
            'cta_link',
            [
                'label' => __('Lien du bouton', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::URL,
                'default' => [
                    'url' => '#prestations',
                ],
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        ?>
        <section id="concept" class="py-20 bg-black" style="position: relative; overflow: hidden;">
            <!-- Background Pattern -->
            <div style="position: absolute; inset: 0; opacity: 0.05;">
                <div style="position: absolute; inset: 0; background-image: radial-gradient(circle at 2px 2px, #FACC15 1px, transparent 0); background-size: 40px 40px;"></div>
            </div>

            <div class="container" style="position: relative; z-index: 10;">
                <div style="max-width: 72rem; margin: 0 auto;">
                    <div style="display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: center; margin-bottom: 5rem;">
                        <?php if (wp_is_mobile()) : ?>
                            <div style="display: grid; grid-template-columns: 1fr; gap: 3rem;">
                        <?php else : ?>
                            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 3rem;">
                        <?php endif; ?>
                            <!-- Text Content -->
                            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                                <span class="section-badge">
                                    <?php echo esc_html($settings['badge_text']); ?>
                                </span>
                                <h2 class="section-title" style="font-size: 1.875rem;">
                                    <?php echo wp_kses_post($settings['title']); ?>
                                </h2>
                                <p style="color: #d1d5db; font-size: 1.125rem; line-height: 1.75;">
                                    <?php echo esc_html($settings['description_1']); ?>
                                </p>
                                <p style="color: #d1d5db; font-size: 1.125rem; line-height: 1.75;">
                                    <?php echo esc_html($settings['description_2']); ?>
                                </p>

                                <!-- CTA -->
                                <div style="padding-top: 1rem;">
                                    <a
                                        href="<?php echo esc_url($settings['cta_link']['url']); ?>"
                                        class="btn-primary"
                                        style="display: inline-flex; align-items: center; gap: 0.5rem;"
                                    >
                                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                                        </svg>
                                        <?php echo esc_html($settings['cta_text']); ?>
                                    </a>
                                </div>
                            </div>

                            <!-- Image -->
                            <div style="position: relative; height: 100%;">
                                <div style="position: relative; border-radius: 0.5rem; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(250, 204, 21, 0.2); height: 100%;">
                                    <img
                                        src="<?php echo esc_url($settings['concept_image']['url']); ?>"
                                        alt="<?php echo esc_attr($settings['title']); ?>"
                                        style="width: 100%; height: 100%; object-fit: cover;"
                                    />
                                    <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);"></div>
                                </div>
                                <!-- Decorative Elements -->
                                <div style="position: absolute; top: -1rem; right: -1rem; width: 6rem; height: 6rem; background-color: rgba(250, 204, 21, 0.2); border-radius: 50%; filter: blur(40px);"></div>
                                <div style="position: absolute; bottom: -1rem; left: -1rem; width: 8rem; height: 8rem; background-color: rgba(250, 204, 21, 0.2); border-radius: 50%; filter: blur(40px);"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <?php
    }
}
