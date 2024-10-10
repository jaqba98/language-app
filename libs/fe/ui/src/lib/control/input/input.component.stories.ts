import type { Meta, StoryObj } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import {
  buildStoryArgs,
  buildStoryDarkMode,
  buildStoryLightMode,
} from '@english-learning/fe-utils';
import { InputComponent } from './input.component';
import { inputControlStory } from './input-control-story.service';

const meta: Meta<InputComponent> = {
  component: InputComponent,
  title: 'fe/ui/control/input',
};
export default meta;
type Story = StoryObj<InputComponent>;

const buildInputStoryArgs = (): Story['args'] => ({
  controlForm: new FormControl('admin'),
  control: inputControlStory,
});

export const InputLight: Story = {
  ...buildStoryArgs(buildInputStoryArgs()),
  ...buildStoryLightMode(),
};

export const InputDark: Story = {
  ...buildStoryArgs(buildInputStoryArgs()),
  ...buildStoryDarkMode(),
};
