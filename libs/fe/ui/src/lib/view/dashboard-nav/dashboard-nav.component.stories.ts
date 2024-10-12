import type { Meta } from '@storybook/angular';

import {
  buildActivatedRouteProvider,
  buildBaseStory,
  buildMetaEventAction,
  buildMetaModuleMetaData,
} from '@english-learning/fe-utils';
import { DashboardNavComponent } from './dashboard-nav.component';

const meta: Meta<DashboardNavComponent> = {
  component: DashboardNavComponent,
  title: 'fe/ui/view/dashboard-nav',
  ...buildMetaEventAction(),
  ...buildMetaModuleMetaData([], [buildActivatedRouteProvider()]),
};
export default meta;

export const DashboardNavFormLight = buildBaseStory<DashboardNavComponent>(true, {});

export const DashboardNavFormDark = buildBaseStory<DashboardNavComponent>(false, {});
