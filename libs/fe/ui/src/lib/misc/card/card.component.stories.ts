import type { Meta, StoryObj } from '@storybook/angular';

import {
  buildStoryArgs,
  buildStoryDarkMode,
  buildStoryLightMode,
} from '@english-learning/fe-utils';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  component: CardComponent,
  title: 'fe/ui/misc/card',
};
export default meta;
type Story = StoryObj<CardComponent>;

const buildCardStoryArgs = (type: CardComponent['type']): Story['args'] => ({
  type,
});

export const DefaultLight: Story = {
  ...buildStoryArgs(buildCardStoryArgs('default')),
  ...buildStoryLightMode(),
};

export const DefaultDark: Story = {
  ...buildStoryArgs(buildCardStoryArgs('default')),
  ...buildStoryDarkMode(),
};

export const NavLight: Story = {
  ...buildStoryArgs(buildCardStoryArgs('nav')),
  ...buildStoryLightMode(),
};

export const NavDark: Story = {
  ...buildStoryArgs(buildCardStoryArgs('nav')),
  ...buildStoryDarkMode(),
};
