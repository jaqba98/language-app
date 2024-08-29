import type { Meta, StoryObj } from '@storybook/angular';

import { SectionComponent } from './section.component';

const meta: Meta<SectionComponent> = {
  component: SectionComponent,
  title: 'fe/ui/view/section',
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj<SectionComponent>;

export const Primary: Story = {
  args: {
    header: 'Header',
  },
};
