import type { Meta, StoryObj } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import { BaseFormControlComponent } from './base-form-control.component';
import { ControlKindEnum } from '../base-form/base-form.model';

const meta: Meta<BaseFormControlComponent> = {
  component: BaseFormControlComponent,
  title: 'fe/ui/form/base-form-control',
};
export default meta;
type Story = StoryObj<BaseFormControlComponent>;

export const Default: Story = {
  args: {
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
};
