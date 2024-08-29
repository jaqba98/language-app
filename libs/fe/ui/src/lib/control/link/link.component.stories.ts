import { type Meta, type StoryObj } from '@storybook/angular';

import { LinkComponent } from './link.component';

const meta: Meta<LinkComponent> = {
  component: LinkComponent,
  title: 'fe/ui/control/link',
};
export default meta;
type Story = StoryObj<LinkComponent>;

export const Primary: Story = {
  args: {
    label: 'Click me!',
  },
};
