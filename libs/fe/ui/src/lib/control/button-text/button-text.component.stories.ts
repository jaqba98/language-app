import type { Meta, StoryObj } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import {
  buildMetaEventAction,
  buildStoryArgs,
  buildStoryDarkMode,
  buildStoryLightMode,
} from '@english-learning/fe-utils';
import { ButtonTextComponent } from './button-text.component';
import { buttonTextControlButtonStory } from './button-text-control-story.service';

const meta: Meta<ButtonTextComponent> = {
  component: ButtonTextComponent,
  title: 'fe/ui/control/button-text',
  ...buildMetaEventAction(),
};
export default meta;
type Story = StoryObj<ButtonTextComponent>;

const buildButtonTextStoryArgs = (): Story['args'] => ({
  controlForm: new FormControl(false),
  control: buttonTextControlButtonStory,
});

export const ButtonTextLight: Story = {
  ...buildStoryArgs(buildButtonTextStoryArgs()),
  ...buildStoryLightMode(),
};

export const ButtonTextDark: Story = {
  ...buildStoryArgs(buildButtonTextStoryArgs()),
  ...buildStoryDarkMode(),
};
