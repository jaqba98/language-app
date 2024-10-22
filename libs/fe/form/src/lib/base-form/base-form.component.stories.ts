import type { Meta, StoryObj } from '@storybook/angular';

import { ControlInputModel, inputControlStory } from '@english-learning/fe-component';
import { buildBaseStory } from '@english-learning/fe-utils';
import { BaseFormComponent } from './base-form.component';

interface BaseFormStoriesModel {
  input: ControlInputModel;
}

const meta: Meta<BaseFormComponent<BaseFormStoriesModel>> = {
  component: BaseFormComponent,
  title: 'fe/form/base-form',
};
export default meta;
type Story = StoryObj<BaseFormComponent<BaseFormStoriesModel>>;

const buildArgs = (): Story['args'] => ({
  baseForm: {
    controls: {
      input: inputControlStory,
    },
  },
});

export const BaseFormLight = buildBaseStory(true, buildArgs());
export const BaseFormDark = buildBaseStory(false, buildArgs());
