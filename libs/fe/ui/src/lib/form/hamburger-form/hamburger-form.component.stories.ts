import type { Meta } from '@storybook/angular';

import { buildBaseStory, buildMetaEventAction } from '@english-learning/fe-utils';
import { HamburgerFormComponent } from './hamburger-form.component';

const meta: Meta<HamburgerFormComponent> = {
  component: HamburgerFormComponent,
  title: 'fe/ui/form/hamburger-form',
  ...buildMetaEventAction(),
};
export default meta;

export const BaseFormLight = buildBaseStory<HamburgerFormComponent>(true, {});

export const BaseFormDark = buildBaseStory<HamburgerFormComponent>(false, {});
