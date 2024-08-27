import { type Meta, type StoryObj } from '@storybook/angular';

import { HamburgerFormComponent } from './hamburger-form.component';

const meta: Meta<HamburgerFormComponent> = {
  component: HamburgerFormComponent,
  title: 'fe/ui/form/hamburger-form',
  argTypes: {
    hamburgerFormEvent: {
      action: 'hamburgerFormEvent',
    },
  },
};
export default meta;
type Story = StoryObj<HamburgerFormComponent>;

export const Default: Story = {};
