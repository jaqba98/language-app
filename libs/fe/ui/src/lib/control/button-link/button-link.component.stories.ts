import type { Meta, StoryObj } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import {
  buildActivatedRouteProvider,
  buildMetaModuleMetaData,
  buildStoryArgs,
  buildStoryDarkMode,
  buildStoryLightMode,
} from '@english-learning/fe-utils';
import { ButtonLinkComponent } from './button-link.component';
import { buttonLinkControlStory } from './button-link-control-story.service';

const meta: Meta<ButtonLinkComponent> = {
  component: ButtonLinkComponent,
  title: 'fe/ui/control/button-link',
  ...buildMetaModuleMetaData([], [buildActivatedRouteProvider()]),
};
export default meta;
type Story = StoryObj<ButtonLinkComponent>;

const buildButtonLinkStoryArgs = (): Story['args'] => ({
  controlForm: new FormControl(false),
  control: buttonLinkControlStory,
});

export const ButtonTextLight: Story = {
  ...buildStoryArgs(buildButtonLinkStoryArgs()),
  ...buildStoryLightMode(),
};

export const ButtonTextDark: Story = {
  ...buildStoryArgs(buildButtonLinkStoryArgs()),
  ...buildStoryDarkMode(),
};
