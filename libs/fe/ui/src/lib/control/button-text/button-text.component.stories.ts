import type { Meta, StoryObj } from '@storybook/angular';

import { ButtonTextComponent } from './button-text.component';

const meta: Meta<ButtonTextComponent> = {
  component: ButtonTextComponent,
  title: 'Control/ButtonText',
};
export default meta;
type Story = StoryObj<ButtonTextComponent>;

export const Primary: Story = {
  args: {
    value: 'Click me!',
    fullWidth: false,
  },
};
