import type { Meta, StoryObj } from '@storybook/angular';

import { BaseFormComponent } from './base-form.component';
import { ControlKindEnum } from './base-form.model';

const meta: Meta<BaseFormComponent> = {
  component: BaseFormComponent,
  title: 'fe/ui/form/base-form',
};
export default meta;
type Story = StoryObj<BaseFormComponent>;

export const Default: Story = {
  args: {
    baseForm: {
      controls: [
        {
          kind: ControlKindEnum.input,
          name: 'input',
          validators: [],
          defaultValue: '',
          label: 'Input',
          placeholder: 'input',
          type: 'text',
          showValidation: false,
        },
        {
          kind: ControlKindEnum.buttonText,
          name: 'buttonText',
          validators: [],
          label: 'ButtonText',
          isPrimary: false,
          showValidation: false,
        },
        {
          kind: ControlKindEnum.buttonIcon,
          name: 'buttonIcon',
          validators: [],
          iconEnter: 'icon/hamburger-open.svg',
          iconLeave: 'icon/hamburger-close.svg',
          alt: 'hamburger icon',
          isPrimary: false,
          showValidation: false,
        },
        {
          kind: ControlKindEnum.link,
          name: 'link',
          validators: [],
          label: 'Link',
          path: '/',
          showValidation: false,
        },
      ],
    },
  },
};
