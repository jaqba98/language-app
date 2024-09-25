import type { Meta, StoryObj } from '@storybook/angular';

import { RoadmapComponent } from './roadmap.component';

const meta: Meta<RoadmapComponent> = {
  component: RoadmapComponent,
  title: 'fe/ui/business/roadmap',
};
export default meta;
type Story = StoryObj<RoadmapComponent>;

export const Default: Story = {
  args: {
    model: {
      markers: [
        { type: 'done', fontAwesomeType: 'star' },
        { type: 'done', fontAwesomeType: 'star' },
        { type: 'done', fontAwesomeType: 'star' },
        { type: 'done', fontAwesomeType: 'star' },
        { type: 'done', fontAwesomeType: 'star' },
        { type: 'done', fontAwesomeType: 'star' },
        { type: 'active', fontAwesomeType: 'play' },
        { type: 'blocked', fontAwesomeType: 'lock' },
        { type: 'blocked', fontAwesomeType: 'lock' },
        { type: 'blocked', fontAwesomeType: 'lock' },
        { type: 'blocked', fontAwesomeType: 'lock' },
        { type: 'blocked', fontAwesomeType: 'lock' },
        { type: 'blocked', fontAwesomeType: 'lock' },
        { type: 'blocked', fontAwesomeType: 'lock' },
      ],
    },
  },
};
