import type { Meta, StoryObj } from '@storybook/angular';

import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  component: CardComponent,
  title: 'fe/ui/misc/card',
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj<CardComponent>;

export const Default: Story = {
  args: {
    cardType: 'card__default',
    height: 'auto',
  },
};

export const Darken: Story = {
  args: {
    cardType: 'card__darken',
    height: 'auto',
  },
};
