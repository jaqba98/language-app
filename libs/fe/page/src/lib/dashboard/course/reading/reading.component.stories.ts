import type { Meta, StoryObj } from '@storybook/angular';

import { ReadingComponent } from './reading.component';

const meta: Meta<ReadingComponent> = {
  component: ReadingComponent,
  title: 'fe/page/reading',
};
export default meta;
type Story = StoryObj<ReadingComponent>;

export const Default: Story = {};
