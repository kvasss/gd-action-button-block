import { __ } from '@wordpress/i18n';

export const actionsTypes = {
  directory: [
    {
      label: __('Edit post', 'gd-action-button'),
      value: 'edit_post',
    },
    {
      label: __('Delete post', 'gd-action-button'),
      value: 'delete_post',
    },
    {
      label: __('Upgrade post', 'gd-action-button'),
      value: 'upgrade_post',
    },
    {
      label: __('Custom', 'gd-action-button'),
      value: 'custom',
    },
  ],
  custom: [
    {
      label: __('Use modal', 'gd-action-button'),
      value: 'use_modal',
    },
    {
      label: __('Use event', 'gd-action-button'),
      value: 'use_event',
    },
    {
      label: __('Custom', 'gd-action-button'),
      value: 'custom',
    },
  ],
};
