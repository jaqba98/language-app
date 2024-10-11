import type { Meta, StoryObj } from '@storybook/angular';

import {
  buildActivatedRouteProvider,
  buildMetaEventAction,
  buildMetaModuleMetaData,
  buildStoryDarkMode,
  buildStoryLightMode,
} from '@english-learning/fe-utils';
import { HamburgerFormComponent } from './hamburger-form.component';
import { FontAwesomeComponent } from '../../external/font-awesome/font-awesome.component';

const meta: Meta<HamburgerFormComponent> = {
  component: HamburgerFormComponent,
  title: 'fe/ui/form/hamburger-nav-form',
  ...buildMetaEventAction(),
  ...buildMetaModuleMetaData([FontAwesomeComponent], [buildActivatedRouteProvider()]),
};
export default meta;
type Story = StoryObj<HamburgerFormComponent>;

export const DashboardNavFormLight: Story = {
  ...buildStoryLightMode(),
};

export const DashboardNavFormDark: Story = {
  ...buildStoryDarkMode(),
};
