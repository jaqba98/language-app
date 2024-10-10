import type { Meta, StoryObj } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import { buildMeta, buildStory } from '@english-learning/fe-utils';
import { ButtonLinkComponent } from './button-link.component';
import { buttonLinkControlStory } from './button-link-control-story.service';

const meta: Meta<ButtonLinkComponent> = {
  component: ButtonLinkComponent,
  title: 'fe/ui/control/button-link',
  ...buildMeta(false),
};
export default meta;
type Story = StoryObj<ButtonLinkComponent>;

const buildStoryArgs = (): Story['args'] => ({
  controlForm: new FormControl(false),
  control: buttonLinkControlStory,
});

export const ButtonTextLight = buildStory<ButtonLinkComponent>(buildStoryArgs(), true);

export const ButtonTextDark = buildStory<ButtonLinkComponent>(buildStoryArgs(), false);
