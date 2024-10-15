import type { Meta, StoryObj } from '@storybook/angular';

import { buildBaseStory } from '@english-learning/fe-utils';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  component: CardComponent,
  title: 'fe/ui/misc/card',
};
export default meta;
type Story = StoryObj<CardComponent>;

const buildCardArgs = (type: CardComponent['type']): Story['args'] => ({ type });

export const DefaultLight = buildBaseStory(true, buildCardArgs('default'));
export const DefaultDark = buildBaseStory(false, buildCardArgs('default'));

export const NavLight = buildBaseStory(true, buildCardArgs('nav'));
export const NavDark = buildBaseStory(false, buildCardArgs('nav'));

export const NoneLight = buildBaseStory(true, buildCardArgs('none'));
export const NoneDark = buildBaseStory(false, buildCardArgs('none'));
