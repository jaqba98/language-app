import type { Meta, StoryObj } from '@storybook/angular';

import {
  buttonIconControlStory,
  buttonLinkControlStory,
  buttonTextControlStory,
  ControlButtonIconModel,
  ControlButtonLinkModel,
  ControlButtonTextModel,
  ControlInputModel,
  ControlLinkModel,
  inputControlStory,
  linkControlStory,
} from '@english-learning/fe-component';
import {
  buildActivatedRouteProvider,
  buildBaseStory,
  buildMetaEventAction,
  buildMetaModuleMetaData,
} from '@english-learning/fe-utils';
import { BaseFormComponent } from './base-form.component';

interface BaseFormStoriesModel {
  input: ControlInputModel;
  buttonLink: ControlButtonLinkModel;
  buttonText: ControlButtonTextModel;
  buttonIcon: ControlButtonIconModel;
  link: ControlLinkModel;
}

const meta: Meta<BaseFormComponent<BaseFormStoriesModel>> = {
  component: BaseFormComponent,
  title: 'fe/form/base-form',
  ...buildMetaEventAction(),
  ...buildMetaModuleMetaData([], [buildActivatedRouteProvider()]),
};
export default meta;
type Story = StoryObj<BaseFormComponent<BaseFormStoriesModel>>;

const buildArgs = (): Story['args'] => ({
  baseForm: {
    controls: {
      input: inputControlStory,
      buttonLink: buttonLinkControlStory,
      buttonText: buttonTextControlStory('submit'),
      buttonIcon: buttonIconControlStory,
      link: linkControlStory,
    },
  },
});

export const BaseFormLight = buildBaseStory(true, buildArgs());
export const BaseFormDark = buildBaseStory(false, buildArgs());
