<?php
/**
 * Plugin Name:       Tailwind Grid Block
 * Description:       A responsive, accessible grid layout block powered by Tailwind CSS.
 * Version:           1.0.0
 * Tested up to:      6.8
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Bmashblocks
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       tailwind-grid-block
 *
 * @package Bmashblocks
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

/**
 * Registers all blocks defined in the blocks-manifest.php file.
 * This supports efficient block registration introduced in WordPress 6.7 and 6.8.
 */
function bmashblocks_tailwind_grid_block_init() {
    $manifest_path = __DIR__ . '/build/blocks-manifest.php';

    if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
        wp_register_block_types_from_metadata_collection( __DIR__ . '/build', $manifest_path );
        return;
    }

    if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
        wp_register_block_metadata_collection( __DIR__ . '/build', $manifest_path );
    }

    if ( file_exists( $manifest_path ) ) {
        $manifest_data = require $manifest_path;
        foreach ( array_keys( $manifest_data ) as $block_type ) {
            register_block_type( __DIR__ . "/build/{$block_type}" );
        }
    }
}
add_action( 'init', 'bmashblocks_tailwind_grid_block_init' );

/**
 * Enqueue Tailwind CSS on the front end (and nowhere else).
 */
add_action( 'wp_enqueue_scripts', function() {
    $handle = 'bmashblocks-tailwind-grid-frontend';
    $src    = plugin_dir_url( __FILE__ ) . 'src/tailwind-grid-block/plugin.css';

    if ( file_exists( plugin_dir_path( __FILE__ ) . 'src/tailwind-grid-block/plugin.css' ) ) {
        wp_enqueue_style(
            $handle,
            $src,
            [],       // no dependencies
            false,    // ← false omits the version parameter entirely
            'all'
        );
    }
} );
