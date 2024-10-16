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
  title: 'fe/ui/control/link',
  ...buildMetaModuleMetaData([], [buildActivatedRouteProvider()]),
};
export default meta;
type Story = StoryObj<LinkComponent>;

const buildLinkArgs = (): Story['args'] => ({
  control: linkControlStory,
});

export const LinkLight = buildBaseStory(true, buildLinkArgs());

export const LinkDark = buildBaseStory(false, buildLinkArgs());
