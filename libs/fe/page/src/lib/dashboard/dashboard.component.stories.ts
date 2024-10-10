import type { Meta, StoryObj } from '@storybook/angular';

import { RouterOutlet } from '@angular/router';
import {
  buildActivatedRouteProvider,
  buildMetaFullScreen,
  buildMetaModuleMetaData,
  buildStoryDarkMode,
  buildStoryLightMode,
} from '@english-learning/fe-utils';
import { DashboardComponent } from './dashboard.component';

const meta: Meta<DashboardComponent> = {
  component: DashboardComponent,
  title: 'fe/page/dashboard',
  ...buildMetaFullScreen(),
  ...buildMetaModuleMetaData([RouterOutlet], [buildActivatedRouteProvider()]),
};
export default meta;
type Story = StoryObj<DashboardComponent>;

export const DashboardLight: Story = {
  ...buildStoryLightMode(),
};

export const DashboardDark: Story = {
  ...buildStoryDarkMode(),
};
