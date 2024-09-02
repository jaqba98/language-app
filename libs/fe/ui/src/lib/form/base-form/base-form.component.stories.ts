import { type Meta, type StoryObj } from '@storybook/angular';

import { BaseFormComponent } from './base-form.component';
import { ControlKindEnum } from './base-form.model';

const meta: Meta<BaseFormComponent> = {
  component: BaseFormComponent,
  title: 'fe/ui/form/base-form',
  argTypes: {
    baseFormEvent: {
      action: 'baseFormEvent',
    },
  },
};
export default meta;
type Story = StoryObj<BaseFormComponent>;

export const Default: Story = {
  args: {
    baseForm: {
      controls: [
        {
          kind: ControlKindEnum.input,
          name: 'field1',
          defaultValue: '',
          placeholder: '',
        },
        {
          kind: ControlKindEnum.buttonText,
          name: 'submit',
          label: 'Click!',
          isPrimary: true,
          fullWidth: false,
        },
        {
          kind: ControlKindEnum.buttonIcon,
          name: 'home',
          iconEnter: 'icon/hamburger-open.svg',
          iconLeave: 'icon/hamburger-close.svg',
          alt: 'hamburger icon',
          isPrimary: false,
        },
      ],
    },
  },
};
