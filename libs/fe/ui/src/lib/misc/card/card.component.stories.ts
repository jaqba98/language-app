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
    type: 'default-light',
  },
};

export const DefaultDark: Story = {
  args: {
    type: 'default-dark',
  },
  parameters: {
    backgrounds: {
      default: 'background-dark',
    },
  },
};
