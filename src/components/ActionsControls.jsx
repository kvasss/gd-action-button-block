import { useState, useEffect } from '@wordpress/element';
import {
  ToggleControl,
  TextControl,
  TextareaControl,
  SelectControl,
  PanelBody,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { actionsTypes } from './constants';

const ActionsControls = ({
  attributes,
  setAttributes,
  context: { storeType },
}) => {
  const {
    tagName: TagName,
    linkTarget,
    action,
    actionParams,
    linkUrl,
    ssr,
  } = attributes;

  const [actions, setActions] = useState();

  useEffect(() => {
    if (storeType === 'gd-store') {
      setActions(actionsTypes.directory);
    } else {
      setActions(actionsTypes.custom);
    }
  }, [storeType]);

  return (
    <PanelBody title={__('Actions', 'gd-action-button')}>
      <ToggleControl
        label={__('Block type', 'gd-action-button')}
        help={TagName}
        onChange={(value) =>
          setAttributes({
            tagName: value ? 'button' : 'a',
          })
        }
        checked={TagName === 'button'}
      />
      <ToggleControl
        label={__('SSR', 'gd-action-button')}
        checked={ssr}
        onChange={(value) => setAttributes({ ssr: value })}
        help={__('Server side render', 'gd-action-button')}
        __nextHasNoMarginBottom
      />
      <SelectControl
        label={__('Action', 'gd-action-button')}
        value={action}
        options={actions}
        onChange={(value) =>
          setAttributes({
            action: value,
          })
        }
      />
      {/* link type controls */}
      {TagName === 'a' && (
        <>
          <TextControl
            label={__('Link url', 'gd-action-button')}
            onChange={(value) =>
              setAttributes({
                linkUrl: value,
              })
            }
            value={linkUrl}
          />
          <ToggleControl
            label={__('Open in new tab', 'gd-action-button')}
            help={linkTarget}
            onChange={(value) =>
              setAttributes({
                linkTarget: value ? '_blank' : '_self',
              })
            }
            checked={linkTarget === '_blank'}
          />
        </>
      )}
      {/* custom action controls */}
      {action === 'custom' && (
        <>
          <TextControl
            label={__('Action name', 'gd-action-button')}
            onChange={(value) =>
              setAttributes({
                action: value,
              })
            }
            value={action}
          />
          <TextareaControl
            label={__('Action params', 'gd-action-button')}
            onChange={(value) =>
              setAttributes({
                actionParams: value,
              })
            }
            value={actionParams}
          />
        </>
      )}
    </PanelBody>
  );
};

export default ActionsControls;
