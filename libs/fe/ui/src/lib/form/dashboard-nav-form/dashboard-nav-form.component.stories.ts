import type { Meta } from '@storybook/angular';

import {
  buildActivatedRouteProvider,
  buildBaseStory,
  buildMetaModuleMetaData,
} from '@english-learning/fe-utils';
import { DashboardNavFormComponent } from './dashboard-nav-form.component';
import { HamburgerFormComponent } from '../hamburger-form/hamburger-form.component';

const meta: Meta<DashboardNavFormComponent> = {
  component: DashboardNavFormComponent,
  title: 'fe/ui/form/dashboard-nav-form',
  ...buildMetaModuleMetaData([], [buildActivatedRouteProvider()]),
};
export default meta;

export const DashboardNavFormLight = buildBaseStory<HamburgerFormComponent>(true, {});

export const DashboardNavFormDark = buildBaseStory<HamburgerFormComponent>(false, {});
