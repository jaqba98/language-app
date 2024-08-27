import type { Meta, StoryObj } from '@storybook/angular';

import { RootComponent } from './root.component';

const meta: Meta<RootComponent> = {
  component: RootComponent,
  title: 'RootComponent',
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj<RootComponent>;

export const Primary: Story = {};
