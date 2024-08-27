import { type Meta, type StoryObj } from '@storybook/angular';

import { RestartFormComponent } from './restart-form.component';

const meta: Meta<RestartFormComponent> = {
  component: RestartFormComponent,
  title: 'fe/ui/form/restart-form',
  argTypes: {
    restartFormEvent: {
      action: 'restartFormEvent',
    },
  },
};
export default meta;
type Story = StoryObj<RestartFormComponent>;

export const Default: Story = {};
