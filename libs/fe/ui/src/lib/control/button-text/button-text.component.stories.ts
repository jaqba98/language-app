import type { Meta, StoryObj } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import { ButtonTextComponent } from './button-text.component';
import { ControlKindEnum } from '../../enum/control-kind.enum';

const meta: Meta<ButtonTextComponent> = {
  component: ButtonTextComponent,
  title: 'fe/ui/control/button-text',
  argTypes: {
    clickEvent: {
      action: 'clickEvent',
    },
  },
  parameters: {
    backgrounds: {
      default: 'primary',
    },
  },
};
export default meta;
type Story = StoryObj<ButtonTextComponent>;

export const Primary: Story = {
  args: {
    form: new FormControl(false),
    control: {
      kind: ControlKindEnum.buttonText,
      id: 'submit',
      validation: {
        validators: [],
        isVisible: false,
      },
      label: 'Submit',
      isSubmit: true,
    },
  },
};
