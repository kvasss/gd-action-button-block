import parse from 'html-react-parser';
import {
  InspectorControls,
  useBlockProps,
  useInnerBlocksProps,
} from '@wordpress/block-editor';

export const WithHtml = ({ value }) => {
  return typeof value === 'string' ? parse(value) : value;
};

import SettingsControls from './components/SettingsControls';
import ActionsControls from './components/ActionsControls';

export default function Edit({ attributes, setAttributes, context }) {
  // eslint-disable-next-line no-unused-vars
  const { content, tagName: TagName, prefix, suffix, ssr } = attributes;

  const blockProps = useBlockProps();
  const innerBlocksProps = useInnerBlocksProps(blockProps);

  return (
    <>
      <InspectorControls>
        <SettingsControls
          attributes={attributes}
          setAttributes={setAttributes}
          context={context}
        />
        <ActionsControls
          attributes={attributes}
          setAttributes={setAttributes}
          context={context}
        />
      </InspectorControls>

      <TagName {...innerBlocksProps}>
        {prefix && <WithHtml value={prefix} />}
        {content && <WithHtml value={content} />}
        {suffix && <WithHtml value={suffix} />}
      </TagName>
    </>
  );
}
