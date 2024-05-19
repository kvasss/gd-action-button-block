import parse from 'html-react-parser';
import { TextControl, TextareaControl, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import RepeaterControl from './RepeaterControl';
export const WithHtml = ({ value }) => {
  return typeof value === 'string' ? parse(value) : value;
};

const SettingsControls = ({ attributes, setAttributes }) => {
  const { content, prefix, suffix } = attributes;

  return (
    <>
      <PanelBody title={__('Settings', 'gd-action-button')}>
        {/* Content */}
        <TextControl
          label={__('Content', 'gd-action-button')}
          value={content}
          onChange={(value) => {
            setAttributes({
              content: value,
            });
          }}
        />
        {/* Content */}

        {/* Prefix */}
        <TextareaControl
          label={__('Prefix', 'gd-action-button')}
          value={prefix}
          onChange={(value) => {
            setAttributes({
              prefix: value,
            });
          }}
        />
        {/* Prefix */}

        {/* Suffix */}
        <TextareaControl
          label={__('Suffix', 'gd-action-button')}
          value={suffix}
          onChange={(value) => {
            setAttributes({
              suffix: value,
            });
          }}
        />
        {/* Suffix */}
      </PanelBody>
      <RepeaterControl attributes={attributes} setAttributes={setAttributes} />
    </>
  );
};

export default SettingsControls;
