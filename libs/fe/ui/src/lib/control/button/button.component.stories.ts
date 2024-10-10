import type { Meta, StoryObj } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import {
  buildMetaEventAction,
  buildStoryArgs,
  buildStoryDarkMode,
  buildStoryLightMode,
} from '@english-learning/fe-utils';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'fe/ui/control/button',
  ...buildMetaEventAction(),
};
export default meta;
type Story = StoryObj<ButtonComponent>;

const buildButtonStoryArgs = (): Story['args'] => ({
  controlForm: new FormControl(false),
  type: 'button',
});

export const ButtonLight: Story = {
  ...buildStoryArgs(buildButtonStoryArgs()),
  ...buildStoryLightMode(),
};

export const ButtonDark: Story = {
  ...buildStoryArgs(buildButtonStoryArgs()),
  ...buildStoryDarkMode(),
};
