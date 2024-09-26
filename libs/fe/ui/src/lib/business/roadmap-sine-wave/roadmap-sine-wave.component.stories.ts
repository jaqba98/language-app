import type { Meta, StoryObj } from '@storybook/angular';

import { RoadmapSineWaveComponent } from './roadmap-sine-wave.component';

const meta: Meta<RoadmapSineWaveComponent> = {
  component: RoadmapSineWaveComponent,
  title: 'fe/ui/business/roadmap-sine-wave',
  argTypes: {
    event: {
      action: 'event',
    },
  },
};
export default meta;
type Story = StoryObj<RoadmapSineWaveComponent>;

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
        { type: 'done', fontAwesomeType: 'star' },
        { type: 'done', fontAwesomeType: 'star' },
        { type: 'done', fontAwesomeType: 'star' },
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
        { type: 'blocked', fontAwesomeType: 'lock' },
        { type: 'blocked', fontAwesomeType: 'lock' },
        { type: 'blocked', fontAwesomeType: 'lock' },
        { type: 'blocked', fontAwesomeType: 'lock' },
        { type: 'blocked', fontAwesomeType: 'lock' },
        { type: 'blocked', fontAwesomeType: 'lock' },
        { type: 'blocked', fontAwesomeType: 'lock' },
        { type: 'blocked', fontAwesomeType: 'lock' },
        { type: 'blocked', fontAwesomeType: 'lock' },
        { type: 'blocked', fontAwesomeType: 'lock' },
        { type: 'blocked', fontAwesomeType: 'lock' },
        { type: 'blocked', fontAwesomeType: 'lock' },
        { type: 'blocked', fontAwesomeType: 'lock' },
        { type: 'blocked', fontAwesomeType: 'lock' },
        { type: 'blocked', fontAwesomeType: 'lock' },
        { type: 'blocked', fontAwesomeType: 'lock' },
        { type: 'blocked', fontAwesomeType: 'lock' },
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
