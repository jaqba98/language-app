import type { Meta, StoryObj } from '@storybook/angular';

import {
  buildBaseStory,
  buildMetaEventAction,
  buildMetaModuleMetaData,
} from '@english-learning/fe-utils';
import { storeMock } from '@english-learning/fe-store';
import { TaskMarkerComponent } from './task-marker.component';

const meta: Meta<TaskMarkerComponent> = {
  component: TaskMarkerComponent,
  title: 'fe/ui/business/task/task-marker',
  ...buildMetaEventAction(),
  ...buildMetaModuleMetaData([], [storeMock]),
};
export default meta;
type Story = StoryObj<TaskMarkerComponent>;

const buildArgs = (taskId: string): Story['args'] => ({ taskId });

export const DoneLight = buildBaseStory(true, buildArgs('task1'));
export const DoneDark = buildBaseStory(false, buildArgs('task1'));

export const ActiveLight = buildBaseStory(true, buildArgs('task50'));
export const ActiveDark = buildBaseStory(false, buildArgs('task50'));

export const BlockedLight = buildBaseStory(true, buildArgs('task51'));
export const BlockedDark = buildBaseStory(false, buildArgs('task51'));
