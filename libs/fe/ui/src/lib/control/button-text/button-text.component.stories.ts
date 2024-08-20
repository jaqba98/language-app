import { type Meta, type StoryObj } from '@storybook/angular';

import { ButtonTextComponent } from './button-text.component';

const meta: Meta<ButtonTextComponent> = {
  component: ButtonTextComponent,
  title: 'fe/ui/control/button-text',
};
export default meta;
type Story = StoryObj<ButtonTextComponent>;

export const Primary: Story = {};
