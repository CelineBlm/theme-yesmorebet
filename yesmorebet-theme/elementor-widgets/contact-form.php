<?php
/**
 * Contact Form Elementor Widget
 *
 * @package YesMoreBet
 */

if (!defined('ABSPATH')) {
    exit;
}

class YesMoreBet_Contact_Widget extends \Elementor\Widget_Base {

    public function get_name() {
        return 'yesmorebet_contact';
    }

    public function get_title() {
        return __('YMB Contact Form', 'yesmorebet');
    }

    public function get_icon() {
        return 'eicon-form-horizontal';
    }

    public function get_categories() {
        return ['yesmorebet'];
    }

    protected function register_controls() {
        $this->start_controls_section(
            'content_section',
            [
                'label' => __('Formulaire de contact', 'yesmorebet'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'form_title',
            [
                'label' => __('Titre du formulaire', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __('Contactez-nous', 'yesmorebet'),
            ]
        );

        $this->add_control(
            'form_description',
            [
                'label' => __('Description', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::TEXTAREA,
                'default' => __('Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.', 'yesmorebet'),
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        ?>
        <section class="py-20 bg-black">
            <div class="container">
                <?php if (!empty($settings['form_title']) || !empty($settings['form_description'])) : ?>
                    <div class="text-center mb-12">
                        <?php if (!empty($settings['form_title'])) : ?>
                            <h2 class="section-title mb-4"><?php echo esc_html($settings['form_title']); ?></h2>
                        <?php endif; ?>
                        <?php if (!empty($settings['form_description'])) : ?>
                            <p class="section-description"><?php echo esc_html($settings['form_description']); ?></p>
                        <?php endif; ?>
                    </div>
                <?php endif; ?>

                <form id="contact-form" class="contact-form">
                    <div class="form-group">
                        <label for="name" class="form-label"><?php esc_html_e('Nom complet', 'yesmorebet'); ?> *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            class="form-input"
                            placeholder="<?php esc_attr_e('Votre nom', 'yesmorebet'); ?>"
                            required
                        />
                    </div>

                    <div class="form-group">
                        <label for="email" class="form-label"><?php esc_html_e('Email', 'yesmorebet'); ?> *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            class="form-input"
                            placeholder="<?php esc_attr_e('votre.email@exemple.com', 'yesmorebet'); ?>"
                            required
                        />
                    </div>

                    <div class="form-group">
                        <label for="phone" class="form-label"><?php esc_html_e('Téléphone', 'yesmorebet'); ?></label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            class="form-input"
                            placeholder="<?php esc_attr_e('+33 6 12 34 56 78', 'yesmorebet'); ?>"
                        />
                    </div>

                    <div class="form-group">
                        <label for="message" class="form-label"><?php esc_html_e('Message', 'yesmorebet'); ?> *</label>
                        <textarea
                            id="message"
                            name="message"
                            class="form-textarea"
                            placeholder="<?php esc_attr_e('Décrivez votre événement...', 'yesmorebet'); ?>"
                            required
                        ></textarea>
                    </div>

                    <button type="submit" class="form-submit">
                        <?php esc_html_e('Envoyer le message', 'yesmorebet'); ?>
                    </button>
                </form>
            </div>
        </section>
        <?php
    }
}
