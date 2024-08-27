import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { MainNavComponent } from './main-nav.component';
import { MockRouteNavigationService } from '../../mock/mock-router-navigation.service';

const meta: Meta<MainNavComponent> = {
  component: MainNavComponent,
  title: 'fe/ui/view/main-nav',
  decorators: [
    moduleMetadata({
      providers: [MockRouteNavigationService.getProvider()],
    }),
  ],
};
export default meta;
type Story = StoryObj<MainNavComponent>;

export const Primary: Story = {};
