import type { Meta, StoryObj } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import { buildMeta, buildStory } from '@english-learning/fe-utils';
import { InputComponent } from './input.component';
import { ControlKindEnum } from '../../enum/control-kind.enum';
import { ControlInputModel } from '../../model/control/control-input.model';

const meta: Meta<InputComponent> = {
  component: InputComponent,
  title: 'fe/ui/control/input',
  ...buildMeta(false),
};
export default meta;
type Story = StoryObj<InputComponent>;

export const storyInputControl: ControlInputModel = {
  kind: ControlKindEnum.input,
  id: 'login',
  alignItems: 'stretch',
  validation: {
    validators: [],
    isVisible: true,
  },
  label: {
    value: 'Login',
    isVisible: true,
  },
  input: {
    value: 'admin',
    placeholder: 'Enter your login',
    type: 'text',
  },
};

const buildStoryArgs = (): Story['args'] => ({
  form: new FormControl('admin'),
  control: storyInputControl,
});

export const DefaultLight = buildStory<InputComponent>(buildStoryArgs(), true);

export const DefaultDark = buildStory<InputComponent>(buildStoryArgs(), false);
