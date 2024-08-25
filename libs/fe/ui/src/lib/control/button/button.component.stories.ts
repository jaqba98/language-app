import { type Meta, type StoryObj } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'fe/ui/control/button',
  argTypes: {
    clickEvent: {
      action: 'clickEvent',
    },
    focusEvent: {
      action: 'focusEvent',
    },
    blurEvent: {
      action: 'blurEvent',
    },
  },
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  args: {
    control: new FormControl(false),
  },
};
