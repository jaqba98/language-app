import { type Meta, type StoryObj } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import { ButtonIconComponent } from './button-icon.component';

const meta: Meta<ButtonIconComponent> = {
  component: ButtonIconComponent,
  title: 'fe/ui/control/button-icon',
  argTypes: {
    clickEvent: {
      action: 'clickEvent',
    },
  },
};
export default meta;
type Story = StoryObj<ButtonIconComponent>;

export const Primary: Story = {
  args: {
    control: new FormControl(false),
    iconEnter: 'icon/hamburger-open.svg',
    iconLeave: 'icon/hamburger-close.svg',
    alt: 'hamburger icon',
  },
};
