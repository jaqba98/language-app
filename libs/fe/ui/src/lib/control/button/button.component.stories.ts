import { type Meta, type StoryObj } from '@storybook/angular';

import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'fe/ui/control/button',
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {};
