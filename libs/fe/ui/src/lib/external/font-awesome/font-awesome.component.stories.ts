import type { Meta, StoryObj } from '@storybook/angular';
import { SizeProp } from '@fortawesome/angular-fontawesome';

import { buildBaseStory } from '@english-learning/fe-utils';
import { FontAwesomeComponent } from './font-awesome.component';
import { FontAwesomeType, FontAwesomeColorType } from './font-awesome.type';

const meta: Meta<FontAwesomeComponent> = {
  component: FontAwesomeComponent,
  title: 'fe/ui/external/font-awesome',
};
export default meta;
type Story = StoryObj<FontAwesomeComponent>;

const buildArgs = (
  type: FontAwesomeType,
  color: FontAwesomeColorType,
  size: SizeProp,
): Story['args'] => ({ type, color, size });

export const SchoolLight = buildBaseStory(true, buildArgs('school', 'default', '4x'));
export const SchoolDark = buildBaseStory(false, buildArgs('school', 'default', '4x'));

export const LockLight = buildBaseStory(true, buildArgs('lock', 'gray', '6x'));
export const LockDark = buildBaseStory(false, buildArgs('lock', 'gray', '6x'));

export const PlayLight = buildBaseStory(true, buildArgs('play', 'green', '8x'));
export const PlayDark = buildBaseStory(false, buildArgs('play', 'green', '8x'));

export const StarLight = buildBaseStory(true, buildArgs('star', 'gold', '10x'));
export const StarDark = buildBaseStory(false, buildArgs('star', 'gold', '10x'));

export const BarsLight = buildBaseStory(true, buildArgs('bars', 'default', '10x'));
export const BarsDark = buildBaseStory(false, buildArgs('bars', 'default', '10x'));

export const XMarkLight = buildBaseStory(true, buildArgs('xmark', 'default', '10x'));
export const XMarkDark = buildBaseStory(false, buildArgs('xmark', 'default', '10x'));
