import type { Meta, StoryObj } from '@storybook/angular';

import { ButtonIconComponent } from './button-icon.component';

const meta: Meta<ButtonIconComponent> = {
  component: ButtonIconComponent,
  title: 'Control/ButtonIcon',
};
export default meta;
type Story = StoryObj<ButtonIconComponent>;

export const Primary: Story = {
  args: {
    src: 'icon/menu.svg',
    alt: 'hamburger icon',
    fullWidth: false,
  },
};
