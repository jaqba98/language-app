import type { Meta, StoryObj } from '@storybook/angular';

import {
  buildActivatedRouteProvider,
  buildBaseStory,
  buildMetaEventAction,
  buildMetaModuleMetaData,
} from '@english-learning/fe-utils';
import { BaseFormComponent } from './base-form.component';
import { buttonIconControlStory } from '../../control/button-icon/button-icon-control-story.service';
import { buttonLinkControlStory } from '../../control/button-link/button-link-control-story.service';
import { buttonTextControlStory } from '../../control/button-text/button-text-control-story.service';
import { inputControlStory } from '../../control/input/input-control-story.service';

const meta: Meta<BaseFormComponent> = {
  component: BaseFormComponent,
  title: 'fe/ui/form/base-form',
  ...buildMetaEventAction(),
  ...buildMetaModuleMetaData([], [buildActivatedRouteProvider()]),
};
export default meta;
type Story = StoryObj<BaseFormComponent>;

const buildBaseFormArgs = (): Story['args'] => ({
  baseForm: {
    controls: {
      input: inputControlStory,
      butonText: buttonTextControlStory('submit'),
      buttonLink: buttonLinkControlStory,
      buttonIcon: buttonIconControlStory,
    },
  },
});

export const BaseFormLight = buildBaseStory(true, buildBaseFormArgs());

export const BaseFormDark = buildBaseStory(false, buildBaseFormArgs());
