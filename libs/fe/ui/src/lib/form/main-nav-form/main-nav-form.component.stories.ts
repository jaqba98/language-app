import { type Meta, type StoryObj } from '@storybook/angular';

import { MainNavFormComponent } from './main-nav-form.component';

const meta: Meta<MainNavFormComponent> = {
  component: MainNavFormComponent,
  title: 'fe/ui/form/main-nav-form',
  argTypes: {
    mainNavFormEvent: {
      action: 'mainNavFormEvent',
    },
  },
};
export default meta;
type Story = StoryObj<MainNavFormComponent>;

export const Default: Story = {};
