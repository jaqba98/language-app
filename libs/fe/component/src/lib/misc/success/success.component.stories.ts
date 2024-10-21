import type { Meta, StoryObj } from '@storybook/angular';

import { buildBaseStory } from '@english-learning/fe-utils';
import { SuccessComponent } from './success.component';

const meta: Meta<SuccessComponent> = {
  component: SuccessComponent,
  title: 'fe/component/misc/success',
};
export default meta;
type Story = StoryObj<SuccessComponent>;

const buildArgs = (): Story['args'] => ({
  value: 'Lorem ipsum...',
});

export const SuccessLight = buildBaseStory(true, buildArgs());
export const SuccessDark = buildBaseStory(false, buildArgs());
