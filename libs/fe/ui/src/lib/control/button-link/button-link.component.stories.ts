import type { Meta, StoryObj } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import {
  buildActivatedRouteProvider,
  buildBaseStory,
  buildMetaModuleMetaData,
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

const buildButtonLinkArgs = (): Story['args'] => ({
  controlForm: new FormControl(false),
  control: buttonLinkControlStory,
});

export const ButtonLinkLight = buildBaseStory(true, buildButtonLinkArgs());

export const ButtonLinkDark = buildBaseStory(false, buildButtonLinkArgs());
