import type { Meta, StoryObj } from '@storybook/angular';

import { CardComponent } from './card.component';
import { CardEnum } from './card.enum';

const meta: Meta<CardComponent> = {
  component: CardComponent,
  title: 'fe/ui/misc/card',
  argTypes: {
    cardType: {
      control: 'select',
      options: Object.values(CardEnum),
    },
  },
};
export default meta;
type Story = StoryObj<CardComponent>;

export const Default: Story = {
  args: {
    cardType: CardEnum.card__default,
    height: 'auto',
  },
};

export const Darken: Story = {
  args: {
    cardType: CardEnum.card__darken,
    height: 'auto',
  },
};
