import type { Meta, StoryObj } from '@storybook/angular';

import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  component: CardComponent,
  title: 'fe/ui/misc/card',
};
export default meta;
type Story = StoryObj<CardComponent>;

export const DefaultLight: Story = {
  args: {
    type: 'default',
  },
};

export const DefaultDark: Story = {
  args: {
    type: 'default',
  },
  parameters: {
    backgrounds: {
      default: 'dark-mode',
    },
  },
};

export const NavLight: Story = {
  args: {
    type: 'nav',
  },
};

export const NavDark: Story = {
  args: {
    type: 'nav',
  },
  parameters: {
    backgrounds: {
      default: 'dark-mode',
    },
  },
};
