<?php
/**
 * FAQ Section Elementor Widget
 *
 * @package YesMoreBet
 */

if (!defined('ABSPATH')) {
    exit;
}

class YesMoreBet_FAQ_Widget extends \Elementor\Widget_Base {

    public function get_name() {
        return 'yesmorebet_faq';
    }

    public function get_title() {
        return __('YMB FAQ Section', 'yesmorebet');
    }

    public function get_icon() {
        return 'eicon-accordion';
    }

    public function get_categories() {
        return ['yesmorebet'];
    }

    protected function register_controls() {
        $this->start_controls_section(
            'content_section',
            [
                'label' => __('FAQ', 'yesmorebet'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'question',
            [
                'label' => __('Question', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __('Votre question ici ?', 'yesmorebet'),
                'label_block' => true,
            ]
        );

        $repeater->add_control(
            'answer',
            [
                'label' => __('Réponse', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::TEXTAREA,
                'default' => __('Votre réponse ici.', 'yesmorebet'),
                'rows' => 5,
            ]
        );

        $this->add_control(
            'faq_list',
            [
                'label' => __('Questions et réponses', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'default' => [
                    [
                        'question' => __('Qu\'est-ce que YesMoreBet exactement ?', 'yesmorebet'),
                        'answer' => __('YesMoreBet est une entreprise d\'animation de casino fictif pour événements privés sur la Côte d\'Azur.', 'yesmorebet'),
                    ],
                ],
                'title_field' => '{{{ question }}}',
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        ?>
        <section class="faq-section">
            <div class="container">
                <div style="max-width: 64rem; margin: 0 auto;">
                    <div class="faq-accordion">
                        <?php foreach ($settings['faq_list'] as $index => $item) : ?>
                            <div class="faq-item">
                                <div class="faq-question" onclick="this.parentElement.classList.toggle('active')">
                                    <?php echo esc_html($item['question']); ?>
                                </div>
                                <div class="faq-answer" style="display: none;">
                                    <?php echo wp_kses_post(nl2br($item['answer'])); ?>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>

            <style>
                .faq-item.active .faq-answer {
                    display: block !important;
                }
            </style>
        </section>
        <?php
    }
}
