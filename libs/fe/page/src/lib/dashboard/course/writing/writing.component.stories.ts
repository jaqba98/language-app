import type { Meta, StoryObj } from '@storybook/angular';

import { WritingComponent } from './writing.component';

const meta: Meta<WritingComponent> = {
  component: WritingComponent,
  title: 'fe/page/writing',
};
export default meta;
type Story = StoryObj<WritingComponent>;

export const Default: Story = {};
