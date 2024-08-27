import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { MockRouteNavigationService } from '@english-learning/fe-ui';
import { RootComponent } from './root.component';

const meta: Meta<RootComponent> = {
  component: RootComponent,
  title: 'fe/page/root',
  decorators: [
    moduleMetadata({
      providers: [MockRouteNavigationService.getProvider()],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj<RootComponent>;

export const Primary: Story = {};
