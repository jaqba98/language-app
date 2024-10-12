import type { Meta, StoryObj } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import { buildBaseStory } from '@english-learning/fe-utils';
import { InputComponent } from './input.component';
import { inputControlStory } from './input-control-story.service';

const meta: Meta<InputComponent> = {
  component: InputComponent,
  title: 'fe/ui/control/input',
};
export default meta;
type Story = StoryObj<InputComponent>;

const buildInputArgs = (): Story['args'] => ({
  controlForm: new FormControl('admin'),
  control: inputControlStory,
});

export const InputLight = buildBaseStory(true, buildInputArgs());

export const InputDark = buildBaseStory(false, buildInputArgs());
