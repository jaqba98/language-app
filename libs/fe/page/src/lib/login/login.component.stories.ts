import {
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';

import { MockRouteNavigationService } from '@english-learning/fe-ui';
import { LoginComponent } from './login.component';

const meta: Meta<LoginComponent> = {
  component: LoginComponent,
  title: 'fe/page/login',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    event: {
      action: 'event',
    },
  },
  decorators: [
    moduleMetadata({
      providers: [MockRouteNavigationService.getProvider()],
    }),
  ],
};
export default meta;
type Story = StoryObj<LoginComponent>;

export const Default: Story = {};
