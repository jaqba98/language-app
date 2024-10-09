import type { Meta } from '@storybook/angular';

import { buildMeta, buildStory } from '@english-learning/fe-utils';
import { DashboardNavFormComponent } from './dashboard-nav-form.component';

const meta: Meta<DashboardNavFormComponent> = {
  component: DashboardNavFormComponent,
  title: 'fe/ui/form/dashboard-nav-form',
  ...buildMeta(false),
};
export default meta;

export const DashboardNavFormLight = buildStory<DashboardNavFormComponent>({}, true);

export const DashboardNavFormDark = buildStory<DashboardNavFormComponent>({}, false);
