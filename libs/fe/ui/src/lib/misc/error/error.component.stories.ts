import type { Meta, StoryObj } from '@storybook/angular';

import { buildBaseStory } from '@english-learning/fe-utils';
import { ErrorComponent } from './error.component';

const meta: Meta<ErrorComponent> = {
  component: ErrorComponent,
  title: 'fe/ui/misc/error',
};
export default meta;
type Story = StoryObj<ErrorComponent>;

const buildErrorArgs = (): Story['args'] => ({
  value: 'Lorem ipsum...',
});

export const ErrorLight = buildBaseStory(true, buildErrorArgs());
export const ErrorDark = buildBaseStory(false, buildErrorArgs());
