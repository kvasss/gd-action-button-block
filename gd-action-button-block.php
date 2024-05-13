<?php
/**
 * Plugin Name:       Action button block
 * Description:       Action button.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.2.0
 * Author:            GD
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gd-action-button
 * Domain Path:       /languages
 *
 * @package           gd-action-button-block
 */

if ( !defined('ABSPATH') ) {
  exit; // Exit if accessed directly.
}

function gd_action_button_block_init() {
  register_block_type( __DIR__ . '/build');

  $script_handle = generate_block_asset_handle( 'gd/action-button', 'editorScript' );
  wp_set_script_translations(
    $script_handle,
    'gd-action-button',
    plugin_dir_path( __FILE__ ) . 'languages'
  );
}
add_action( 'init', 'gd_action_button_block_init');

// localization_setup
function gd_action_button_localization_setup() {
	load_plugin_textdomain(
		'gd-action-button',
		false,
		dirname( plugin_basename( __FILE__ ) ) . '/languages'
	);
}
add_action( 'plugins_loaded', 'gd_action_button_localization_setup' );
