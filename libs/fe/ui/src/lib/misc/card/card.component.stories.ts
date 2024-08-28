import { type Meta, type StoryObj } from '@storybook/angular';

import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  component: CardComponent,
  title: 'fe/ui/misc/card',
};
export default meta;
type Story = StoryObj<CardComponent>;

export const Default: Story = {
  args: {
    cardType: 'card__default',
  },
};

export const MainNav: Story = {
  args: {
    cardType: 'card__main-nav',
  },
};

export const MainNavMenuOptions: Story = {
  args: {
    cardType: 'card__main-nav-menu-options',
  },
};

export const Secondary: Story = {
  args: {
    cardType: 'card__secondary',
  },
};
