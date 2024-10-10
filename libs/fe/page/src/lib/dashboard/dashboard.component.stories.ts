import type { Meta } from '@storybook/angular';

import { buildMeta, buildStory } from '@english-learning/fe-utils';
import { DashboardComponent } from './dashboard.component';

const meta: Meta<DashboardComponent> = {
  component: DashboardComponent,
  title: 'fe/page/dashboard',
  ...buildMeta(true),
};
export default meta;

export const DefaultLight = buildStory<DashboardComponent>({}, true);

export const DefaultDark = buildStory<DashboardComponent>({}, false);
