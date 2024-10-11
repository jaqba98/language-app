import type { Meta, StoryObj } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import {
  buildMetaEventAction,
  buildStoryArgs,
  buildStoryDarkMode,
  buildStoryLightMode,
} from '@english-learning/fe-utils';
import { ButtonIconComponent } from './button-icon.component';
import { buttonIconControlStory } from './button-icon-control-story.service';

const meta: Meta<ButtonIconComponent> = {
  component: ButtonIconComponent,
  title: 'fe/ui/control/button-icon',
  ...buildMetaEventAction(),
};
export default meta;
type Story = StoryObj<ButtonIconComponent>;

const buildButtonIconStoryArgs = (): Story['args'] => ({
  controlForm: new FormControl(false),
  control: buttonIconControlStory,
});

export const ButtonIconLight: Story = {
  ...buildStoryArgs(buildButtonIconStoryArgs()),
  ...buildStoryLightMode(),
};

export const ButtonIconDark: Story = {
  ...buildStoryArgs(buildButtonIconStoryArgs()),
  ...buildStoryDarkMode(),
};
