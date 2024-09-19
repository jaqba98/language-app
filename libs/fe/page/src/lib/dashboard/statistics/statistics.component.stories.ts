import type { Meta, StoryObj } from '@storybook/angular';

import { StatisticsComponent } from './statistics.component';

const meta: Meta<StatisticsComponent> = {
  component: StatisticsComponent,
  title: 'fe/page/statistics',
};
export default meta;
type Story = StoryObj<StatisticsComponent>;

export const Default: Story = {};
