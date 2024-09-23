import type { Meta, StoryObj } from '@storybook/angular';

import { RoadmapMarkerComponent } from './roadmap-marker.component';

const meta: Meta<RoadmapMarkerComponent> = {
  component: RoadmapMarkerComponent,
  title: 'fe/ui/business/roadmap/roadmap-marker',
};
export default meta;
type Story = StoryObj<RoadmapMarkerComponent>;

export const Blocked: Story = {
  args: {
    type: 'blocked',
  },
};

export const Active: Story = {
  args: {
    type: 'active',
  },
};

export const Done: Story = {
  args: {
    type: 'done',
  },
};
