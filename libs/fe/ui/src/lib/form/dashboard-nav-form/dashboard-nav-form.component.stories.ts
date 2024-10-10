import type { Meta, StoryObj } from '@storybook/angular';

import {
  buildActivatedRouteProvider,
  buildMetaEventAction,
  buildMetaModuleMetaData,
  buildStoryDarkMode,
  buildStoryLightMode,
} from '@english-learning/fe-utils';
import { DashboardNavFormComponent } from './dashboard-nav-form.component';

const meta: Meta<DashboardNavFormComponent> = {
  component: DashboardNavFormComponent,
  title: 'fe/ui/form/dashboard-nav-form',
  ...buildMetaEventAction(),
  ...buildMetaModuleMetaData([], [buildActivatedRouteProvider()]),
};
export default meta;
type Story = StoryObj<DashboardNavFormComponent>;

export const DashboardNavFormLight: Story = {
  ...buildStoryLightMode(),
};

export const DashboardNavFormDark: Story = {
  ...buildStoryDarkMode(),
};
