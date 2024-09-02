import type { Meta, StoryObj } from '@storybook/angular';

import { RegistrationComponent } from './registration.component';

const meta: Meta<RegistrationComponent> = {
  component: RegistrationComponent,
  title: 'fe/page/registration',
};
export default meta;
type Story = StoryObj<RegistrationComponent>;

export const Default: Story = {};
