import type { Meta, StoryObj } from '@storybook/angular';

import { RoadmapMarkerComponent } from './roadmap-marker.component';

const meta: Meta<RoadmapMarkerComponent> = {
  component: RoadmapMarkerComponent,
  title: 'fe/ui/business/roadmap-marker',
  argTypes: {
    event: {
      action: 'event',
    },
  },
};
export default meta;
type Story = StoryObj<RoadmapMarkerComponent>;

export const Blocked: Story = {
  args: {
    markerType: 'blocked',
  },
};

export const Active: Story = {
  args: {
    markerType: 'active',
  },
};

export const Done: Story = {
  args: {
    markerType: 'done',
  },
};
