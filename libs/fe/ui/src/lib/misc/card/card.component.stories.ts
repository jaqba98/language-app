import type { Meta, StoryObj } from '@storybook/angular';

import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  component: CardComponent,
  title: 'fe/ui/misc/card',
};
export default meta;
type Story = StoryObj<CardComponent>;

export const Default: Story = {};
