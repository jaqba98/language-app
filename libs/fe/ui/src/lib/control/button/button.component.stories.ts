import type { Meta, StoryObj } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'fe/ui/control/button',
  argTypes: {
    clickEvent: {
      action: 'clickEvent',
    },
    onMouseEnter: {
      action: 'onMouseEnter',
    },
    onMouseLeave: {
      action: 'onMouseLeave',
    },
  },
  parameters: {
    backgrounds: {
      default: 'primary',
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
