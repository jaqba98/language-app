import type { Meta, StoryObj } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import { InputComponent } from './input.component';

const meta: Meta<InputComponent> = {
  component: InputComponent,
  title: 'fe/ui/control/input',
  parameters: {
    backgrounds: {
      default: 'primary',
    },
  },
};
export default meta;
type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {
    formControl: new FormControl(''),
    label: 'Login',
    placeholder: 'admin',
  },
};
