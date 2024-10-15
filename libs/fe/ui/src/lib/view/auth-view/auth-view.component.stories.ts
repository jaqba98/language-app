import type { Meta } from '@storybook/angular';

import { buildBaseStory } from '@english-learning/fe-utils';
import { AuthViewComponent } from './auth-view.component';

const meta: Meta<AuthViewComponent> = {
  component: AuthViewComponent,
  title: 'fe/ui/view/auth-view',
};
export default meta;

export const ErrorLight = buildBaseStory<AuthViewComponent>(true);
export const ErrorDark = buildBaseStory<AuthViewComponent>(false);
