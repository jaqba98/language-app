import type { Meta, StoryObj } from '@storybook/angular';

import { MainNavComponent } from './main-nav.component';

const meta: Meta<MainNavComponent> = {
  component: MainNavComponent,
  title: 'View/MainNav',
  parameters: {
    layout: 'fullscreen'
  }
};
export default meta;
type Story = StoryObj<MainNavComponent>;

export const Primary: Story = {};
