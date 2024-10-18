import type { Meta, StoryObj } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import { buildBaseStory } from '@english-learning/fe-utils';
import { InputComponent } from './input.component';
import { inputControlStory } from './input-control-story.service';

const meta: Meta<InputComponent> = {
  component: InputComponent,
  title: 'fe/component/control/input',
};
export default meta;
type Story = StoryObj<InputComponent>;

const buildArgs = (): Story['args'] => ({
  controlForm: new FormControl('admin'),
  control: inputControlStory,
});

export const InputLight = buildBaseStory(true, buildArgs());
export const InputDark = buildBaseStory(false, buildArgs());
