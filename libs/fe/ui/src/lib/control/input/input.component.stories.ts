import { type Meta, type StoryObj } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import { InputComponent } from './input.component';

const meta: Meta<InputComponent> = {
  component: InputComponent,
  title: 'fe/ui/control/input',
};
export default meta;
type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {
    formControl: new FormControl(''),
  },
};
