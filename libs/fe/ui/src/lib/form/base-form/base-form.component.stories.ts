import type { Meta, StoryObj } from '@storybook/angular';
import { FormControl } from '@angular/forms';

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
          control: new FormControl(''),
          validators: [],
          defaultValue: '',
          label: 'Input',
          placeholder: 'input',
          type: 'text',
        },
        {
          kind: ControlKindEnum.buttonText,
          name: 'buttonText',
          control: new FormControl(false),
          validators: [],
          label: 'ButtonText',
          isPrimary: false,
        },
        {
          kind: ControlKindEnum.buttonIcon,
          name: 'buttonIcon',
          control: new FormControl(false),
          validators: [],
          iconEnter: 'icon/hamburger-open.svg',
          iconLeave: 'icon/hamburger-close.svg',
          alt: 'hamburger icon',
          isPrimary: false,
        },
        {
          kind: ControlKindEnum.link,
          name: 'link',
          control: new FormControl(false),
          validators: [],
          label: 'Link',
          path: '/',
        },
      ],
    },
  },
};
