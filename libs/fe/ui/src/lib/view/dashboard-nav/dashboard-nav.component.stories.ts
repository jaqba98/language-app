import type { Meta } from '@storybook/angular';

import { buildMeta, buildStory } from '@english-learning/fe-utils';
import { DashboardNavComponent } from './dashboard-nav.component';

const meta: Meta<DashboardNavComponent> = {
  component: DashboardNavComponent,
  title: 'fe/ui/view/dashboard-nav',
  ...buildMeta(false),
};
export default meta;

export const DefaultLight = buildStory<DashboardNavComponent>({}, true);

export const DefaultDark = buildStory<DashboardNavComponent>({}, false);
