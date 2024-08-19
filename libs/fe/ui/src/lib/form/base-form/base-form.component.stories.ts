import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ActivatedRoute } from '@angular/router';

import { BaseFormComponent } from './base-form.component';
import { ControlKindEnum } from './base-form.model';

const meta: Meta<BaseFormComponent> = {
  component: BaseFormComponent,
  title: 'fe/ui/form/base-form',
  argTypes: {
    event: {
      action: 'event',
    },
  },
  decorators: [
    moduleMetadata({
      providers: [
        { provide: ActivatedRoute, useValue: [] },
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<BaseFormComponent>;

export const Default: Story = {
  args: {
    baseForm: {
      controls: [
        { kind: ControlKindEnum.input, name: 'login', defaultValue: '' },
        { kind: ControlKindEnum.input, name: 'password', defaultValue: '' },
        { kind: ControlKindEnum.buttonText, name: 'submit', value: 'Click!' },
      ],
    },
  },
};
