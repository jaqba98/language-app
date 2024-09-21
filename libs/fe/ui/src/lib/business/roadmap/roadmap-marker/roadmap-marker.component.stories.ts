import type { Meta, StoryObj } from '@storybook/angular';

import { RoadmapMarkerComponent } from './roadmap-marker.component';

const meta: Meta<RoadmapMarkerComponent> = {
  component: RoadmapMarkerComponent,
  title: 'fe/ui/business/roadmap/roadmap-marker',
  parameters: {
    backgrounds: {
      default: 'primary',
    },
  },
};
export default meta;
type Story = StoryObj<RoadmapMarkerComponent>;

export const Primary: Story = {};

export const Primary2: Story = {
  args: {
    type: 'done',
  },
};
