<?php

/*------- Add Menus ------*/

add_theme_support( 'menus' );


/*------- Enqueue Styles and Scripts ------*/
if (!function_exists('tacos_styles_and_scripts')) {
    function tacos_styles_and_scripts()
    {
        // Enqueue styles
        wp_enqueue_style('tacos-style', get_stylesheet_uri(), array(), wp_get_theme()->get('Version'));

        // Enqueue JavaScript Fade Script
        wp_enqueue_script('fade-script', get_template_directory_uri() . '/js/fade.js', array('jquery'), null, true);

        // Enqueue JavaScript Fade Left Script
        wp_enqueue_script('fade_left-script', get_template_directory_uri() . '/js/fade_left.js', array('jquery'), null, true);

        // Enqueue JavaScript Fade Right Script
        wp_enqueue_script('fade_right-script', get_template_directory_uri() . '/js/fade_right.js', array('jquery'), null, true);

    }
}

add_action('wp_enqueue_scripts', 'tacos_styles_and_scripts');

/*------- Micro Interactions Enqueue Scripts ------*/
