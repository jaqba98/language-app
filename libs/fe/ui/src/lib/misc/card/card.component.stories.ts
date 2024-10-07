import type { Meta, StoryObj } from '@storybook/angular';

import { buildMeta, buildStory } from '@english-learning/fe-utils';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  component: CardComponent,
  title: 'fe/ui/misc/card',
  ...buildMeta(false),
};
export default meta;
type Story = StoryObj<CardComponent>;

const buildStoryArgs = (type: CardComponent['type']): Story['args'] => ({
  type,
});

export const DefaultLight = buildStory<CardComponent>(buildStoryArgs('default'), false);

export const DefaultDark = buildStory<CardComponent>(buildStoryArgs('default'), true);

export const NavLight = buildStory<CardComponent>(buildStoryArgs('nav'), false);

export const NavDark = buildStory<CardComponent>(buildStoryArgs('nav'), true);
