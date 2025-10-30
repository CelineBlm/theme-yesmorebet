<?php
/**
 * Gallery Grid Elementor Widget
 *
 * @package YesMoreBet
 */

if (!defined('ABSPATH')) {
    exit;
}

class YesMoreBet_Gallery_Widget extends \Elementor\Widget_Base {

    public function get_name() {
        return 'yesmorebet_gallery';
    }

    public function get_title() {
        return __('YMB Gallery Grid', 'yesmorebet');
    }

    public function get_icon() {
        return 'eicon-gallery-grid';
    }

    public function get_categories() {
        return ['yesmorebet'];
    }

    protected function register_controls() {
        $this->start_controls_section(
            'content_section',
            [
                'label' => __('Galerie', 'yesmorebet'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'gallery_images',
            [
                'label' => __('Images', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::GALLERY,
                'default' => [],
            ]
        );

        $this->add_control(
            'columns',
            [
                'label' => __('Colonnes', 'yesmorebet'),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => '3',
                'options' => [
                    '2' => __('2 Colonnes', 'yesmorebet'),
                    '3' => __('3 Colonnes', 'yesmorebet'),
                    '4' => __('4 Colonnes', 'yesmorebet'),
                ],
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        $columns = $settings['columns'];
        ?>
        <section class="py-20 bg-black">
            <div class="container">
                <div style="display: grid; grid-template-columns: 1fr; gap: 1.5rem;">
                    <?php if (!wp_is_mobile()) : ?>
                        <style>
                            @media (min-width: 768px) {
                                .gallery-grid-<?php echo esc_attr($columns); ?> {
                                    grid-template-columns: repeat(<?php echo esc_attr($columns); ?>, 1fr);
                                }
                            }
                        </style>
                    <?php endif; ?>
                    <div class="gallery-grid-<?php echo esc_attr($columns); ?>" style="display: grid; grid-template-columns: 1fr; gap: 1.5rem;">
                        <?php foreach ($settings['gallery_images'] as $image) : ?>
                            <div style="position: relative; border-radius: 0.5rem; overflow: hidden; aspect-ratio: 1 / 1; cursor: pointer; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                                <img
                                    src="<?php echo esc_url($image['url']); ?>"
                                    alt="<?php echo esc_attr(get_post_meta($image['id'], '_wp_attachment_image_alt', true)); ?>"
                                    style="width: 100%; height: 100%; object-fit: cover;"
                                />
                                <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent); opacity: 0; transition: opacity 0.3s ease;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0'"></div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </section>
        <?php
    }
}
