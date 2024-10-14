import type { Meta, StoryObj } from '@storybook/angular';

import {
  buildActivatedRouteProvider,
  buildBaseStory,
  buildMetaEventAction,
  buildMetaFullScreen,
  buildMetaModuleMetaData,
} from '@english-learning/fe-utils';
import { LoginComponent } from './login.component';

const meta: Meta<LoginComponent> = {
  component: LoginComponent,
  title: 'fe/page/login',
  ...buildMetaFullScreen(),
  ...buildMetaEventAction(),
  ...buildMetaModuleMetaData([], [buildActivatedRouteProvider()]),
};
export default meta;
type Story = StoryObj<LoginComponent>;

export const LoginLight: Story = buildBaseStory(true, {});

export const LoginDark: Story = buildBaseStory(false, {});
