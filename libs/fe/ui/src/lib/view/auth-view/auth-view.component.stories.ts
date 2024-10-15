import type { Meta } from '@storybook/angular';

import { buildBaseStory } from '@english-learning/fe-utils';
import { AuthViewComponent } from './auth-view.component';

const meta: Meta<AuthViewComponent> = {
  component: AuthViewComponent,
  title: 'fe/ui/view/auth-view',
};
export default meta;

export const AuthViewLight = buildBaseStory<AuthViewComponent>(true);
export const AuthViewDark = buildBaseStory<AuthViewComponent>(false);
