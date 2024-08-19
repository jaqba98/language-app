import { type Meta, type StoryObj } from '@storybook/angular';

import { BaseFormComponent } from './base-form.component';

const meta: Meta<BaseFormComponent> = {
  component: BaseFormComponent,
  title: 'fe/ui/form/base-form',
};
export default meta;
type Story = StoryObj<BaseFormComponent>;

export const Default: Story = {
  args: {
    controls: [
      { name: 'login' },
      { name: 'password' },
    ],
  },
};
