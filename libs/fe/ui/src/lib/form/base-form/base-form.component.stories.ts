import type { Meta, StoryObj } from '@storybook/angular';

import { BaseFormComponent } from './base-form.component';
import { ControlKindEnum } from '../../enum/control-kind.enum';

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
          id: 'input',
          validation: {
            validators: [],
            isVisible: false,
          },
          label: {
            value: '',
            isVisible: false,
          },
          input: {
            defaultValue: '',
            placeholder: 'input',
            type: 'text',
          },
        },
        {
          kind: ControlKindEnum.buttonText,
          id: 'buttonText',
          validation: {
            validators: [],
            isVisible: false,
          },
          label: 'ButtonText',
          isSubmit: false,
        },
        {
          kind: ControlKindEnum.buttonIcon,
          id: 'buttonIcon',
          validation: {
            validators: [],
            isVisible: false,
          },
          icon: 'icon/hamburger-close.svg',
          alt: 'hamburger icon',
          isSubmit: false,
        },
        {
          kind: ControlKindEnum.link,
          id: 'link',
          validation: {
            validators: [],
            isVisible: false,
          },
          label: 'Link',
          path: '/',
        },
      ],
    },
  },
};
