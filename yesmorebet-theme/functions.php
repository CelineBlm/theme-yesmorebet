<?php
/**
 * YesMoreBet Theme Functions
 *
 * @package YesMoreBet
 * @since 1.0.0
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

// Theme Version
define('YESMOREBET_VERSION', '1.0.0');
define('YESMOREBET_THEME_DIR', get_template_directory());
define('YESMOREBET_THEME_URI', get_template_directory_uri());

/**
 * Theme Setup
 */
function yesmorebet_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    add_theme_support('customize-selective-refresh-widgets');
    add_theme_support('responsive-embeds');
    add_theme_support('editor-styles');
    add_theme_support('wp-block-styles');

    // Elementor support
    add_theme_support('elementor');

    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'yesmorebet'),
        'footer' => __('Footer Menu', 'yesmorebet'),
    ));
}
add_action('after_setup_theme', 'yesmorebet_setup');

/**
 * Enqueue Scripts and Styles
 */
function yesmorebet_scripts() {
    // Main stylesheet
    wp_enqueue_style('yesmorebet-style', get_stylesheet_uri(), array(), YESMOREBET_VERSION);

    // Custom CSS
    wp_enqueue_style('yesmorebet-custom', YESMOREBET_THEME_URI . '/assets/css/custom.css', array('yesmorebet-style'), YESMOREBET_VERSION);

    // Main JavaScript
    wp_enqueue_script('yesmorebet-main', YESMOREBET_THEME_URI . '/assets/js/main.js', array('jquery'), YESMOREBET_VERSION, true);

    // Localize script
    wp_localize_script('yesmorebet-main', 'yesmorebetData', array(
        'ajaxUrl' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('yesmorebet-nonce'),
        'themeUrl' => YESMOREBET_THEME_URI,
    ));
}
add_action('wp_enqueue_scripts', 'yesmorebet_scripts');

/**
 * Register Widget Areas
 */
function yesmorebet_widgets_init() {
    register_sidebar(array(
        'name'          => __('Footer Widget Area', 'yesmorebet'),
        'id'            => 'footer-1',
        'description'   => __('Add widgets here to appear in your footer.', 'yesmorebet'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'yesmorebet_widgets_init');

/**
 * Elementor Support
 */
function yesmorebet_register_elementor_locations($elementor_theme_manager) {
    $elementor_theme_manager->register_all_core_location();
}
add_action('elementor/theme/register_locations', 'yesmorebet_register_elementor_locations');

/**
 * Load Elementor Custom Widgets
 */
function yesmorebet_register_elementor_widgets() {
    // Check if Elementor is active
    if (!did_action('elementor/loaded')) {
        return;
    }

    // Include widget files
    require_once YESMOREBET_THEME_DIR . '/elementor-widgets/hero-section.php';
    require_once YESMOREBET_THEME_DIR . '/elementor-widgets/features-section.php';
    require_once YESMOREBET_THEME_DIR . '/elementor-widgets/concept-section.php';
    require_once YESMOREBET_THEME_DIR . '/elementor-widgets/faq-section.php';
    require_once YESMOREBET_THEME_DIR . '/elementor-widgets/contact-form.php';
    require_once YESMOREBET_THEME_DIR . '/elementor-widgets/pricing-table.php';
    require_once YESMOREBET_THEME_DIR . '/elementor-widgets/gallery-grid.php';

    // Register widgets
    \Elementor\Plugin::instance()->widgets_manager->register_widget_type(new \YesMoreBet_Hero_Widget());
    \Elementor\Plugin::instance()->widgets_manager->register_widget_type(new \YesMoreBet_Features_Widget());
    \Elementor\Plugin::instance()->widgets_manager->register_widget_type(new \YesMoreBet_Concept_Widget());
    \Elementor\Plugin::instance()->widgets_manager->register_widget_type(new \YesMoreBet_FAQ_Widget());
    \Elementor\Plugin::instance()->widgets_manager->register_widget_type(new \YesMoreBet_Contact_Widget());
    \Elementor\Plugin::instance()->widgets_manager->register_widget_type(new \YesMoreBet_Pricing_Widget());
    \Elementor\Plugin::instance()->widgets_manager->register_widget_type(new \YesMoreBet_Gallery_Widget());
}
add_action('elementor/widgets/widgets_registered', 'yesmorebet_register_elementor_widgets');

/**
 * Add Elementor Widget Categories
 */
function yesmorebet_add_elementor_widget_categories($elements_manager) {
    $elements_manager->add_category(
        'yesmorebet',
        array(
            'title' => __('YesMoreBet', 'yesmorebet'),
            'icon' => 'fa fa-plug',
        )
    );
}
add_action('elementor/elements/categories_registered', 'yesmorebet_add_elementor_widget_categories');

/**
 * Create default pages on theme activation
 */
function yesmorebet_create_default_pages() {
    $pages = array(
        'accueil' => array(
            'title' => 'Accueil',
            'template' => 'template-home.php'
        ),
        'faq' => array(
            'title' => 'FAQ',
            'template' => 'template-faq.php'
        ),
        'contact' => array(
            'title' => 'Contact',
            'template' => 'template-contact.php'
        ),
        'prestations' => array(
            'title' => 'Prestations',
            'template' => 'template-prestations.php'
        ),
        'galerie' => array(
            'title' => 'Galerie',
            'template' => 'template-galerie.php'
        ),
        'cgv' => array(
            'title' => 'Conditions Générales de Vente',
            'template' => 'template-cgv.php'
        ),
        'mentions-legales' => array(
            'title' => 'Mentions Légales',
            'template' => 'template-mentions-legales.php'
        ),
        'politique-confidentialite' => array(
            'title' => 'Politique de Confidentialité',
            'template' => 'template-politique-confidentialite.php'
        ),
    );

    foreach ($pages as $slug => $page) {
        // Check if page already exists
        $page_check = get_page_by_path($slug);

        if (!$page_check) {
            // Create page
            $page_id = wp_insert_post(array(
                'post_title' => $page['title'],
                'post_name' => $slug,
                'post_status' => 'publish',
                'post_type' => 'page',
            ));

            // Set page template
            if ($page_id && !is_wp_error($page_id)) {
                update_post_meta($page_id, '_wp_page_template', 'templates/' . $page['template']);
            }

            // Set home page as front page
            if ($slug === 'accueil') {
                update_option('show_on_front', 'page');
                update_option('page_on_front', $page_id);
            }
        }
    }
}
add_action('after_switch_theme', 'yesmorebet_create_default_pages');

/**
 * Custom logo support
 */
function yesmorebet_custom_logo_setup() {
    add_theme_support('custom-logo', array(
        'height'      => 114,
        'width'       => 174,
        'flex-height' => true,
        'flex-width'  => true,
    ));
}
add_action('after_setup_theme', 'yesmorebet_custom_logo_setup');

/**
 * Contact form handler
 */
function yesmorebet_handle_contact_form() {
    check_ajax_referer('yesmorebet-nonce', 'nonce');

    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $phone = sanitize_text_field($_POST['phone']);
    $message = sanitize_textarea_field($_POST['message']);

    // Email to admin
    $to = get_option('admin_email');
    $subject = 'Nouveau message de contact - YesMoreBet';
    $body = "Nom: $name\n";
    $body .= "Email: $email\n";
    $body .= "Téléphone: $phone\n\n";
    $body .= "Message:\n$message";

    $headers = array('Content-Type: text/plain; charset=UTF-8');

    if (wp_mail($to, $subject, $body, $headers)) {
        wp_send_json_success(array('message' => 'Message envoyé avec succès!'));
    } else {
        wp_send_json_error(array('message' => 'Erreur lors de l\'envoi du message.'));
    }
}
add_action('wp_ajax_yesmorebet_contact', 'yesmorebet_handle_contact_form');
add_action('wp_ajax_nopriv_yesmorebet_contact', 'yesmorebet_handle_contact_form');

/**
 * Enhanced Elementor Support
 */
// Ensure Elementor can edit all pages
function yesmorebet_enable_elementor_for_pages() {
    add_post_type_support('page', 'elementor');
}
add_action('init', 'yesmorebet_enable_elementor_for_pages');

// Don't load theme CSS on Elementor Canvas pages
function yesmorebet_dequeue_on_canvas($post_id) {
    if (\Elementor\Plugin::$instance->preview->is_preview_mode()) {
        return;
    }
    
    $page_settings_manager = \Elementor\Core\Settings\Manager::get_settings_managers('page');
    $page_settings_model = $page_settings_manager->get_model($post_id);
    $template = $page_settings_model->get_settings('template');
    
    if ($template === 'elementor_canvas') {
        // Remove theme styles for canvas
        remove_action('wp_enqueue_scripts', 'yesmorebet_scripts');
    }
}

// Elementor compatibility for full width
function yesmorebet_elementor_width_support() {
    add_theme_support('elementor', [
        'default_generic_fonts' => 'Quicksand',
        'settings' => [
            'container_width' => 1200,
            'space_between_widgets' => 20,
        ],
    ]);
}
add_action('after_setup_theme', 'yesmorebet_elementor_width_support');

/**
 * Helper function to get page URL by slug
 */
function yesmorebet_get_page_url($slug) {
    $page = get_page_by_path($slug);
    if ($page) {
        return get_permalink($page->ID);
    }
    // Fallback to home URL with slug
    return home_url('/' . $slug);
}
