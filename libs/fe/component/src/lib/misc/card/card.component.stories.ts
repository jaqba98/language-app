import type { Meta, StoryObj } from '@storybook/angular';

import { buildBaseStory } from '@english-learning/fe-utils';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  component: CardComponent,
  title: 'fe/component/misc/card',
};
export default meta;
type Story = StoryObj<CardComponent>;

const buildArgs = (type: CardComponent['type']): Story['args'] => ({ type });

export const DefaultLight = buildBaseStory(true, buildArgs('default'));
export const DefaultDark = buildBaseStory(false, buildArgs('default'));

export const NavLight = buildBaseStory(true, buildArgs('nav'));
export const NavDark = buildBaseStory(false, buildArgs('nav'));

export const NoneLight = buildBaseStory(true, buildArgs('none'));
export const NoneDark = buildBaseStory(false, buildArgs('none'));
