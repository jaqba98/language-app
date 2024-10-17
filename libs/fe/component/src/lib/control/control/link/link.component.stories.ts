import type { Meta, StoryObj } from '@storybook/angular';

import {
  buildActivatedRouteProvider,
  buildBaseStory,
  buildMetaModuleMetaData,
} from '@english-learning/fe-utils';
import { LinkComponent } from './link.component';
import { linkControlStory } from './link-control-story.service';

const meta: Meta<LinkComponent> = {
  component: LinkComponent,
  title: 'fe/component/control/link',
  ...buildMetaModuleMetaData([], [buildActivatedRouteProvider()]),
};
export default meta;
type Story = StoryObj<LinkComponent>;

const buildArgs = (): Story['args'] => ({
  control: linkControlStory,
});

export const LinkLight = buildBaseStory(true, buildArgs());
export const LinkDark = buildBaseStory(false, buildArgs());
