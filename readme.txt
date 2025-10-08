=== WP Tailwind Grid Block ===
Contributors: bradmash  
Tags: grid, tailwind, gutenberg, block, responsive, layout  
Requires at least: 6.7  
Tested up to: 6.8  
Stable tag: 1.0.0  
License: GPLv2 or later  
License URI: https://www.gnu.org/licenses/gpl-2.0.html  

== Description ==

A responsive, production-ready WordPress block powered by Tailwind CSS with scoped utility classes and flexible layout controls. Designed for developers and designers who want full control over grid layouts in the block editor.

This plugin uses a custom Tailwind prefix (`tgb:`) to avoid style conflicts and ensure clean integration with any theme. It supports responsive grid columns, gap controls, semantic HTML tags, ARIA attributes, and intuitive editor styles for selecting blocks.

**Attribution Notice:**  
This plugin was created by Bradley Mash. If you use or extend this plugin, please retain author attribution in your documentation or derivative works.

== Features ==

* Responsive grid with `grid-cols` and `gap` controls
* ARIA and semantic tag support
* Scoped Tailwind classes using `tgb:` prefix
* Editor styles for intuitive block selection
* Gutenberg-compatible with InnerBlocks and templates
* Clean separation of layout and content logic

== Installation ==

1. Upload the plugin folder to your `/wp-content/plugins/` directory.
2. Activate the plugin through the WordPress admin.
3. Start using the "Tailwind Grid Block" and "Grid Column" blocks in the editor.

== Frequently Asked Questions ==

= Does this plugin require Tailwind CSS? =  
No. It includes compiled Tailwind classes with a custom prefix (`tgb:`) and does not rely on external Tailwind builds.

= Can I customize the grid behavior? =  
Yes. You can control column counts, gaps, layout type (grid or flex), and responsive breakpoints.

= Is this plugin compatible with all themes? =  
Yes. The scoped `tgb:` prefix ensures it won't interfere with your theme's styles.

== Changelog ==

= 1.0.0 =
* Initial production-ready release
* Responsive grid and gap controls
* ARIA and semantic tag support
* Editor styles for block selection

== Upgrade Notice ==

= 1.0.0 =
First stable release. No upgrade issues expected.

== License ==

This plugin is licensed under the GPLv2 or later.  
You may use, modify, and redistribute it freely, provided you retain author attribution.  
License details: https://www.gnu.org/licenses/gpl-2.0.html
