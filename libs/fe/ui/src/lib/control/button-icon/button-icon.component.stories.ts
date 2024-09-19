import type { Meta, StoryObj } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import { ButtonIconComponent } from './button-icon.component';
import { ControlKindEnum } from '../../enum/control-kind.enum';

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
    form: new FormControl(false),
    control: {
      kind: ControlKindEnum.buttonIcon,
      id: 'icon',
      alignItems: 'flex-start',
      validation: {
        validators: [],
        isVisible: false,
      },
      icon: 'icon/menu.svg',
      alt: '',
      isSubmit: true,
    },
  },
};
