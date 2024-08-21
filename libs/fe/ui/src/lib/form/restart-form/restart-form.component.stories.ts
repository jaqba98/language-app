import { type Meta, type StoryObj } from '@storybook/angular';

import { RestartNavFormComponent } from './restart-form.component';

const meta: Meta<RestartNavFormComponent> = {
  component: RestartNavFormComponent,
  title: 'fe/ui/form/restart-form',
  argTypes: {
    restartFormEvent: {
      action: 'restartFormEvent',
    },
  },
};
export default meta;
type Story = StoryObj<RestartNavFormComponent>;

export const Default: Story = {};
