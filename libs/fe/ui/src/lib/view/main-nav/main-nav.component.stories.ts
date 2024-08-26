import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Injectable } from '@angular/core';

import { MainNavComponent } from './main-nav.component';
import { RouteNavigationService } from '../../infrastructure/route-navigation.service';

@Injectable()
export class MockRouteNavigationService {
  navigate(link: string) {
    // eslint-disable-next-line no-console
    console.log(link);
  }
}

const meta: Meta<MainNavComponent> = {
  component: MainNavComponent,
  title: 'fe/ui/view/main-nav',
  decorators: [
    moduleMetadata({
      providers: [
        { provide: RouteNavigationService, useClass: MockRouteNavigationService },
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<MainNavComponent>;

export const Primary: Story = {
  args: {
    options: [
      { value: 'Link 1', link: '/' },
      { value: 'Link 2', link: '/' },
      { value: 'Link 3', link: '/' },
      { value: 'Link 4', link: '/' },
      { value: 'Link 5', link: '/' },
    ],
  },
};
