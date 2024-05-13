import { registerBlockType } from '@wordpress/blocks';

import edit from './edit';
import save from './save';
import json from './block.json';

import { MetaFieldIcon } from './icons';

import './style.scss';

const { name, ...settings } = json;

registerBlockType(name, {
  ...settings,
  icon: MetaFieldIcon,
  edit,
  save,
});
