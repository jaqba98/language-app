import {
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';

import { MainNavFormComponent } from './main-nav-form.component';
import { MockRouteNavigationService } from '../../mock/mock-router-navigation.service';

const meta: Meta<MainNavFormComponent> = {
  component: MainNavFormComponent,
  title: 'fe/ui/form/main-nav-form',
  decorators: [
    moduleMetadata({
      providers: [MockRouteNavigationService.getProvider()],
    }),
  ],
};
export default meta;
type Story = StoryObj<MainNavFormComponent>;

export const Default: Story = {};
