import { type Meta, type StoryObj } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import { ButtonTextComponent } from './button-text.component';

const meta: Meta<ButtonTextComponent> = {
  component: ButtonTextComponent,
  title: 'fe/ui/control/button-text',
  argTypes: {
    clickEvent: {
      action: 'clickEvent',
    },
  },
};
export default meta;
type Story = StoryObj<ButtonTextComponent>;

export const Primary: Story = {
  args: {
    control: new FormControl(false),
    label: 'Click me!',
  },
};
