import type { Meta, StoryObj } from '@storybook/angular';

import { BaseFormComponent } from './base-form.component';
import { ControlKindEnum } from '../../enum/control-kind.enum';

const meta: Meta<BaseFormComponent> = {
  component: BaseFormComponent,
  title: 'fe/ui/form/base-form',
  parameters: {
    backgrounds: {
      default: 'primary',
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
          id: 'input',
          validation: {
            validators: [],
            isVisible: false,
          },
          label: {
            value: 'Input',
            isVisible: true,
          },
          input: {
            defaultValue: '',
            placeholder: 'input...',
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
          isSubmit: true,
        },
        {
          kind: ControlKindEnum.buttonIcon,
          id: 'buttonIcon',
          validation: {
            validators: [],
            isVisible: false,
          },
          icon: 'icon/school.svg',
          alt: 'School',
          isSubmit: true,
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
