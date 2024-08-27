import { type Meta, type StoryObj } from '@storybook/angular';

import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  component: CardComponent,
  title: 'fe/ui/misc/card',
};
export default meta;
type Story = StoryObj<CardComponent>;

export const Bare: Story = {
  args: {
    cardType: 'card__bare',
  },
};

export const MainNav: Story = {
  args: {
    cardType: 'card__main-nav',
  },
};

export const MainNavOptionsMobile: Story = {
  args: {
    cardType: 'card__main-nav-options-mobile',
  },
};

export const Default: Story = {};
