<?php
/**
 * Pricing Table Elementor Widget
 *
 * @package YesMoreBet
 */

if (!defined('ABSPATH')) {
    exit;
}

class YesMoreBet_Pricing_Widget extends \Elementor\Widget_Base {

    public function get_name() {
        return 'yesmorebet_pricing';
    }

    public function get_title() {
        return __('YMB Pricing Table', 'yesmorebet');
    }

    public function get_icon() {
        return 'eicon-price-table';
    }

    public function get_categories() {
        return ['yesmorebet'];
    }

    protected function register_controls() {
        $this->start_controls_section(
            'content_section',
            [
                'label' => __('Tarifs', 'yesmorebet'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'plan_name',
            [
                'label' => __('Nom de la formule', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __('Formule', 'yesmorebet'),
            ]
        );

        $repeater->add_control(
            'plan_price',
            [
                'label' => __('Prix', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __('590€', 'yesmorebet'),
            ]
        );

        $repeater->add_control(
            'plan_duration',
            [
                'label' => __('Durée', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __('2/3h d\'animation', 'yesmorebet'),
            ]
        );

        $repeater->add_control(
            'plan_capacity',
            [
                'label' => __('Capacité', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __('20 à 40 personnes', 'yesmorebet'),
            ]
        );

        $repeater->add_control(
            'plan_features',
            [
                'label' => __('Fonctionnalités (une par ligne)', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::TEXTAREA,
                'default' => __('Table de Blackjack\nCroupier professionnel\nJetons fictifs', 'yesmorebet'),
                'rows' => 5,
            ]
        );

        $repeater->add_control(
            'plan_image',
            [
                'label' => __('Image', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::MEDIA,
                'default' => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
            ]
        );

        $repeater->add_control(
            'is_recommended',
            [
                'label' => __('Recommandée', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => __('Oui', 'yesmorebet'),
                'label_off' => __('Non', 'yesmorebet'),
                'return_value' => 'yes',
                'default' => '',
            ]
        );

        $this->add_control(
            'pricing_plans',
            [
                'label' => __('Formules', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'default' => [],
                'title_field' => '{{{ plan_name }}}',
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        ?>
        <section class="py-20 bg-black">
            <div class="container">
                <div style="max-width: 88rem; margin: 0 auto;">
                    <div style="position: relative;">
                        <div style="display: grid; grid-template-columns: 1fr; gap: 1.5rem; padding-top: 1rem;">
                            <?php if (wp_is_mobile()) : ?>
                                <!-- Mobile: 1 column -->
                            <?php else : ?>
                                <style>
                                    @media (min-width: 768px) {
                                        .pricing-grid {
                                            grid-template-columns: repeat(3, 1fr);
                                        }
                                    }
                                </style>
                            <?php endif; ?>
                            <div class="pricing-grid" style="display: grid; grid-template-columns: 1fr; gap: 1.5rem;">
                                <?php foreach ($settings['pricing_plans'] as $plan) : ?>
                                    <div style="background-color: rgba(255, 255, 255, 0); border-radius: 0.5rem; overflow: hidden; box-shadow: 0px 10px 15px -3px rgba(208, 135, 0, 0.1), 0px 4px 6px -4px rgba(208, 135, 0, 0.1);">
                                        <?php if ($plan['is_recommended'] === 'yes') : ?>
                                            <div style="background: linear-gradient(to right, #facc15, #ca8a04); color: black; padding: 0.5rem 1.5rem; text-align: center; font-weight: 600;">
                                                <?php esc_html_e('Recommandée', 'yesmorebet'); ?>
                                            </div>
                                        <?php endif; ?>

                                        <div style="height: 16rem; overflow: hidden; position: relative;">
                                            <img
                                                src="<?php echo esc_url($plan['plan_image']['url']); ?>"
                                                alt="<?php echo esc_attr($plan['plan_name']); ?>"
                                                style="width: 100%; height: 100%; object-fit: cover;"
                                            />
                                            <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7), transparent);"></div>
                                        </div>

                                        <div style="padding: 1.5rem; border: 1px solid rgba(208, 135, 0, 0.3); border-top: none;">
                                            <h3 style="color: white; text-align: center; margin-bottom: 1rem;">
                                                <?php echo esc_html($plan['plan_name']); ?>
                                            </h3>

                                            <div style="text-align: center; margin-bottom: 1.5rem;">
                                                <div style="font-size: 2.25rem; font-weight: 700; color: white; margin-bottom: 0.5rem;">
                                                    <?php echo esc_html($plan['plan_price']); ?>
                                                </div>
                                                <div style="color: #99a1af; font-size: 0.875rem;">
                                                    <?php echo esc_html($plan['plan_duration']); ?>
                                                </div>
                                                <div style="color: #99a1af; font-size: 0.875rem;">
                                                    <?php echo esc_html($plan['plan_capacity']); ?>
                                                </div>
                                            </div>

                                            <ul style="list-style: none; padding: 0; margin: 0 0 1.5rem 0;">
                                                <?php
                                                $features = explode("\n", $plan['plan_features']);
                                                foreach ($features as $feature) :
                                                    if (trim($feature)) :
                                                ?>
                                                    <li style="display: flex; align-items: center; gap: 0.5rem; color: #d1d5db; margin-bottom: 0.5rem;">
                                                        <svg width="20" height="20" fill="none" stroke="#FDC700" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                                        </svg>
                                                        <span><?php echo esc_html(trim($feature)); ?></span>
                                                    </li>
                                                <?php
                                                    endif;
                                                endforeach;
                                                ?>
                                            </ul>

                                            <a href="#contact" class="btn-primary" style="width: 100%; text-align: center;">
                                                <?php esc_html_e('Réserver', 'yesmorebet'); ?>
                                            </a>
                                        </div>
                                    </div>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <?php
    }
}
