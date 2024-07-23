import type { Meta, StoryObj } from '@storybook/angular';

import { IconComponent } from './icon.component';

const meta: Meta<IconComponent> = {
  component: IconComponent,
  title: 'Misc/Icon',
};
export default meta;
type Story = StoryObj<IconComponent>;

export const Primary: Story = {
  args: {
    src: 'icon/school.svg',
    alt: 'school icon',
  },
};
