import { type Meta, type StoryObj } from '@storybook/angular';

import { ButtonIconComponent } from './button-icon.component';

const meta: Meta<ButtonIconComponent> = {
  component: ButtonIconComponent,
  title: 'fe/ui/control/button-icon',
};
export default meta;
type Story = StoryObj<ButtonIconComponent>;

export const Primary: Story = {
  args: {
    icon: 'icon/menu.svg',
    alt: 'hamburger icon',
  },
};
