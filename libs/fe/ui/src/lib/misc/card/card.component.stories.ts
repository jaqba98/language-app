import type { Meta, StoryObj } from '@storybook/angular';

import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  component: CardComponent,
  title: 'Misc/Card',
};
export default meta;
type Story = StoryObj<CardComponent>;

export const Primary: Story = {};
