<?php
  /**
   * @var array    $attributes  Block attributes.
   * @var string   $content     Block content.
   * @var object   $block       Block instance.
   */

  $context       = $block->context;
  $ssr           = isset($attributes['ssr']) ? $attributes['ssr'] : false;

  if (!function_exists('gd_render_action_button')) {
    function gd_render_action_button($attributes) {
      $attrs_content      = isset($attributes['content']) ? $attributes['content'] : null;
      $justify_class_name = isset( $attributes['justifyContent'] ) ? "is-justified-{$attributes['justifyContent']}" : '';
      $wrapper_attributes = get_block_wrapper_attributes( array( 'class' => $justify_class_name ) );
      $tagName         = isset($attributes['tagName']) ? $attributes['tagName'] : null;
      $link_url           = isset($attributes['linkUrl']) ? $attributes['linkUrl'] : null;
      $more_text          = ! empty( $attrs_content ) ? wp_kses_post( $attrs_content ) : __( 'Read more' );
      $link_target        = isset($attributes['linkTarget']) ? $attributes['linkTarget'] : null;

      $prefix = isset($attributes['prefix']) ? $attributes['prefix'] : '';
      $suffix = isset($attributes['suffix']) ? $attributes['suffix'] : '';

      if($tagName === 'a') { ?>
        <a href="<?php echo $link_url; ?>" title="<?php echo $more_text; ?>" <?php echo $wrapper_attributes?>>
          <?php if($prefix) { echo $prefix; } ?>
          <?php echo $more_text; ?>
          <span class="screen-reader-text">
            <?php echo $more_text; ?>
          </span>
          <?php if($suffix) { echo $suffix; } ?>
        </a>
      <?php } ?>
      <?php if($tagName === 'button') { ?>
        <button title="<?php echo $more_text; ?>" <?php echo $wrapper_attributes?>>
          <?php if($prefix) { echo $prefix; } ?>
          <?php echo $more_text; ?>
          <span class="screen-reader-text">
            <?php echo $more_text; ?>
          </span>
          <?php if($suffix) { echo $suffix; } ?>
        </button>
      <?php }
    }
  }
?>

<!-- root-data -->
<?php if(!$ssr) { ?>
  <div class="gd-action-button-data">
    <pre class="block" style="display: none;">
      <?php if ($block) {
        echo wp_json_encode($block);
      } ?>
    </pre>
    <pre class="context" style="display: none;">
      <?php if ($context) {
        echo wp_json_encode($context);
      } ?>
    </pre>
    <?php gd_render_action_button($attributes); ?>
  </div>
<?php } else {
  gd_render_action_button($attributes);
} ?>
