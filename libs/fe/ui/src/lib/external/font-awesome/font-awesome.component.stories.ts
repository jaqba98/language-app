import type { Meta, StoryObj } from '@storybook/angular';
import { SizeProp } from '@fortawesome/angular-fontawesome';

import { buildMeta, buildStory } from '@english-learning/fe-utils';
import { FontAwesomeComponent } from './font-awesome.component';
import { FontAwesomeColorType, FontAwesomeType } from './font-awesome.type';

const meta: Meta<FontAwesomeComponent> = {
  component: FontAwesomeComponent,
  title: 'fe/ui/external/font-awesome',
  ...buildMeta(false),
};
export default meta;
type Story = StoryObj<FontAwesomeComponent>;

const buildStoryArgs = (
  type: FontAwesomeType,
  color: FontAwesomeColorType,
  size: SizeProp,
): Story['args'] => ({ type, color, size });

export const SchoolLight = buildStory(buildStoryArgs('school', 'default', '4x'), true);
export const SchoolDark = buildStory(buildStoryArgs('school', 'default', '4x'), false);

export const LockLight = buildStory(buildStoryArgs('lock', 'gray', '6x'), true);
export const LockDark = buildStory(buildStoryArgs('lock', 'gray', '6x'), false);

export const PlayLight = buildStory(buildStoryArgs('play', 'green', '8x'), true);
export const PlayDark = buildStory(buildStoryArgs('play', 'green', '8x'), false);

export const StarLight = buildStory(buildStoryArgs('star', 'gold', '10x'), true);
export const StarDark = buildStory(buildStoryArgs('star', 'gold', '10x'), false);
