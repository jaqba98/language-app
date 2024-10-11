import type { Meta, StoryObj } from '@storybook/angular';

import {
  buildMetaFullScreen,
  buildMetaModuleMetaData,
  buildStoryDarkMode,
  buildStoryLightMode,
  buildStoryTemplate,
} from '@english-learning/fe-utils';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';

const meta: Meta<DashboardComponent> = {
  component: DashboardComponent,
  title: 'fe/page/dashboard',
  ...buildMetaFullScreen(),
  ...buildMetaModuleMetaData(
    DashboardService.getStorybookImports(),
    DashboardService.getStorybookProviders(),
  ),
};
export default meta;
type Story = StoryObj<DashboardComponent>;

export const DashboardLight: Story = {
  ...buildStoryLightMode(),
  ...buildStoryTemplate(DashboardService.getTemplate()),
};

export const DashboardDark: Story = {
  ...buildStoryDarkMode(),
  ...buildStoryTemplate(DashboardService.getTemplate()),
};
