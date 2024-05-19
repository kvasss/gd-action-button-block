import { TextControl, Button, PanelBody } from '@wordpress/components';
// import { useState, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const RepeaterControl = ({ attributes, setAttributes }) => {
  // display the repeater
  const { attrs } = attributes;

  return (
    <PanelBody title={__('Attributes', 'gd-action-button')}>
      {attrs?.map((row, index) => {
        return (
          <div key={index} style={{ marginBottom: '30px' }}>
            <div style={{ fontSize: '13px' }}>Attribute {index + 1}</div>

            {/* Attribute */}
            <TextControl
              label={__('Attribute', 'gd-action-button')}
              value={attrs[index].attr}
              onChange={(value) => {
                setAttributes({
                  attrs: attrs.map((attr, i) => {
                    return index === i ? { ...attr, attr: value } : attr;
                  }),
                });
              }}
            />
            {/* Attribute */}

            {/* Attribute value */}
            <TextControl
              label={__('Attribute value', 'gd-action-button')}
              value={attrs[index].value}
              onChange={(value) => {
                setAttributes({
                  attrs: attrs.map((attr, i) => {
                    return index === i ? { ...attr, value } : attr;
                  }),
                });
              }}
            />
            {/* Attribute value */}

            {/* Remove Attribute */}
            {index > 0 && (
              <Button
                isLink
                isDestructive
                onClick={() => {
                  setAttributes({
                    attrs: attrs.filter(
                      (_obj, loopIndex) => loopIndex !== index
                    ),
                  });
                }}
              >
                {__('Remove attribute', 'gd-action-button')} {index + 1}
              </Button>
            )}
            {/* Remove Attribute */}
          </div>
        );
      })}
      <Button
        variant="secondary"
        onClick={() => {
          attrs.push({
            attr: '',
            value: '',
          });
        }}
      >
        {__('Add attribute', 'gd-action-button')}
      </Button>
    </PanelBody>
  );
};

export default RepeaterControl;
