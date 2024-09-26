import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { provideMockStore } from '@ngrx/store/testing';

import { StoreModel } from '@english-learning/fe-store';
import { RoadmapComponent } from './roadmap.component';

const meta: Meta<RoadmapComponent> = {
  component: RoadmapComponent,
  title: 'fe/ui/business/roadmap',
  argTypes: {
    event: {
      action: 'event',
    },
  },
  decorators: [
    moduleMetadata({
      providers: [
        provideMockStore<StoreModel>({
          initialState: {
            course: {
              tasks: [
                { type: 'done' },
                { type: 'done' },
                { type: 'done' },
                { type: 'done' },
                { type: 'done' },
                { type: 'done' },
                { type: 'done' },
                { type: 'done' },
                { type: 'done' },
                { type: 'done' },
                { type: 'done' },
                { type: 'done' },
                { type: 'active' },
                { type: 'blocked' },
                { type: 'blocked' },
                { type: 'blocked' },
                { type: 'blocked' },
                { type: 'blocked' },
                { type: 'blocked' },
                { type: 'blocked' },
                { type: 'blocked' },
                { type: 'blocked' },
                { type: 'blocked' },
                { type: 'blocked' },
                { type: 'blocked' },
                { type: 'blocked' },
                { type: 'blocked' },
                { type: 'blocked' },
                { type: 'blocked' },
                { type: 'blocked' },
                { type: 'blocked' },
                { type: 'blocked' },
                { type: 'blocked' },
                { type: 'blocked' },
                { type: 'blocked' },
                { type: 'blocked' },
                { type: 'blocked' },
                { type: 'blocked' },
                { type: 'blocked' },
                { type: 'blocked' },
                { type: 'blocked' },
              ],
            },
          },
        }),
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<RoadmapComponent>;

export const Default: Story = {};
