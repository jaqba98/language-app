import type { Meta, StoryObj } from '@storybook/angular';

import {
  buildActivatedRouteProvider,
  buildMetaEventAction,
  buildMetaModuleMetaData,
  buildStoryDarkMode,
  buildStoryLightMode,
} from '@english-learning/fe-utils';
import { DashboardNavComponent } from './dashboard-nav.component';

const meta: Meta<DashboardNavComponent> = {
  component: DashboardNavComponent,
  title: 'fe/ui/view/dashboard-nav',
  ...buildMetaEventAction(),
  ...buildMetaModuleMetaData([], [buildActivatedRouteProvider()]),
};
export default meta;
type Story = StoryObj<DashboardNavComponent>;

export const DashboardNavLight: Story = {
  ...buildStoryLightMode(),
};

export const DashboardNavDark: Story = {
  ...buildStoryDarkMode(),
};
