import type { Meta, StoryObj } from '@storybook/angular';
import { SizeProp } from '@fortawesome/angular-fontawesome';

import {
  buildStoryArgs,
  buildStoryDarkMode,
  buildStoryLightMode,
} from '@english-learning/fe-utils';
import { FontAwesomeComponent } from './font-awesome.component';
import { FontAwesomeColorType, FontAwesomeType } from './font-awesome.type';

const meta: Meta<FontAwesomeComponent> = {
  component: FontAwesomeComponent,
  title: 'fe/ui/external/font-awesome',
};
export default meta;
type Story = StoryObj<FontAwesomeComponent>;

const buildFontAwesomeStoryArgs = (
  type: FontAwesomeType,
  color: FontAwesomeColorType,
  size: SizeProp,
): Story['args'] => ({ type, color, size });

export const SchoolLight: Story = {
  ...buildStoryArgs(buildFontAwesomeStoryArgs('school', 'default', '4x')),
  ...buildStoryLightMode(),
};
export const SchoolDark: Story = {
  ...buildStoryArgs(buildFontAwesomeStoryArgs('school', 'default', '4x')),
  ...buildStoryDarkMode(),
};

export const LockLight: Story = {
  ...buildStoryArgs(buildFontAwesomeStoryArgs('lock', 'gray', '6x')),
  ...buildStoryLightMode(),
};
export const LockDark: Story = {
  ...buildStoryArgs(buildFontAwesomeStoryArgs('lock', 'gray', '6x')),
  ...buildStoryDarkMode(),
};

export const PlayLight: Story = {
  ...buildStoryArgs(buildFontAwesomeStoryArgs('play', 'green', '8x')),
  ...buildStoryLightMode(),
};
export const PlayDark: Story = {
  ...buildStoryArgs(buildFontAwesomeStoryArgs('play', 'green', '8x')),
  ...buildStoryDarkMode(),
};

export const StarLight: Story = {
  ...buildStoryArgs(buildFontAwesomeStoryArgs('star', 'gold', '10x')),
  ...buildStoryLightMode(),
};
export const StarDark: Story = {
  ...buildStoryArgs(buildFontAwesomeStoryArgs('star', 'gold', '10x')),
  ...buildStoryDarkMode(),
};

export const BarsLight: Story = {
  ...buildStoryArgs(buildFontAwesomeStoryArgs('bars', 'default', '10x')),
  ...buildStoryLightMode(),
};
export const BarsDark: Story = {
  ...buildStoryArgs(buildFontAwesomeStoryArgs('bars', 'default', '10x')),
  ...buildStoryDarkMode(),
};

export const XMarkLight: Story = {
  ...buildStoryArgs(buildFontAwesomeStoryArgs('xmark', 'default', '10x')),
  ...buildStoryLightMode(),
};
export const XMarkDark: Story = {
  ...buildStoryArgs(buildFontAwesomeStoryArgs('xmark', 'default', '10x')),
  ...buildStoryDarkMode(),
};
