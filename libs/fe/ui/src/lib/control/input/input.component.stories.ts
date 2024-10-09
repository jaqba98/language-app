import type { Meta, StoryObj } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import { buildMeta, buildStory } from '@english-learning/fe-utils';
import { InputComponent } from './input.component';
import { inputControlStory } from './input-control-story.service';

const meta: Meta<InputComponent> = {
  component: InputComponent,
  title: 'fe/ui/control/input',
  ...buildMeta(false),
};
export default meta;
type Story = StoryObj<InputComponent>;

const buildStoryArgs = (): Story['args'] => ({
  controlForm: new FormControl('admin'),
  control: inputControlStory,
});

export const DefaultLight = buildStory<InputComponent>(buildStoryArgs(), true);

export const DefaultDark = buildStory<InputComponent>(buildStoryArgs(), false);
