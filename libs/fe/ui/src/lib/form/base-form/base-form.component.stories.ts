import type { Meta, StoryObj } from '@storybook/angular';

import { buildMeta, buildStory } from '@english-learning/fe-utils';
import { BaseFormComponent } from './base-form.component';
import { inputControlStory } from '../../control/input/input-control-story.service';
import { buttonTextControlSubmitStory } from '../../control/button-text/button-text-control-story.service';
import { buttonLinkControlStory } from '../../control/button-link/button-link-control-story.service';

const meta: Meta<BaseFormComponent> = {
  component: BaseFormComponent,
  title: 'fe/ui/form/base-form',
  ...buildMeta(false),
};
export default meta;
type Story = StoryObj<BaseFormComponent>;

const buildStoryArgs = (): Story['args'] => ({
  baseForm: {
    controls: [inputControlStory, buttonTextControlSubmitStory, buttonLinkControlStory],
  },
});

export const DefaultLight = buildStory<BaseFormComponent>(buildStoryArgs(), true);

export const DefaultDark = buildStory<BaseFormComponent>(buildStoryArgs(), false);
