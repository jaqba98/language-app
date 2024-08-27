import type { Meta, StoryObj } from '@storybook/angular';

import { PresentSimpleComponent } from './present-simple.component';

const meta: Meta<PresentSimpleComponent> = {
  component: PresentSimpleComponent,
  title: 'PresentSimpleComponent',
};
export default meta;
type Story = StoryObj<PresentSimpleComponent>;

export const Primary: Story = {};
