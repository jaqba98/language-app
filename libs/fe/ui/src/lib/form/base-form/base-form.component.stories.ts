import type { Meta, StoryObj } from '@storybook/angular';

import {
  buildActivatedRouteProvider,
  buildMetaEventAction,
  buildMetaModuleMetaData,
  buildStoryArgs,
  buildStoryDarkMode,
  buildStoryLightMode,
} from '@english-learning/fe-utils';
import { BaseFormComponent } from './base-form.component';
import { inputControlStory } from '../../control/input/input-control-story.service';
import { buttonTextControlSubmitStory } from '../../control/button-text/button-text-control-story.service';
import { buttonLinkControlStory } from '../../control/button-link/button-link-control-story.service';

const meta: Meta<BaseFormComponent> = {
  component: BaseFormComponent,
  title: 'fe/ui/form/base-form',
  ...buildMetaEventAction(),
  ...buildMetaModuleMetaData([], [buildActivatedRouteProvider()]),
};
export default meta;
type Story = StoryObj<BaseFormComponent>;

const buildBaseFormStoryArgs = (): Story['args'] => ({
  baseForm: {
    controls: [inputControlStory, buttonTextControlSubmitStory, buttonLinkControlStory],
  },
});

export const BaseFormLight: Story = {
  ...buildStoryArgs(buildBaseFormStoryArgs()),
  ...buildStoryLightMode(),
};

export const BaseFormDark: Story = {
  ...buildStoryArgs(buildBaseFormStoryArgs()),
  ...buildStoryDarkMode(),
};
