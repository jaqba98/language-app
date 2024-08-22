import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Injectable } from '@angular/core';

import { MainNavFormComponent } from './main-nav-form.component';
import { RouteNavigationService } from '../../infrastructure/route-navigation.service';

@Injectable()
export class MockRouteNavigationService {
  navigate(link: string) {
    // eslint-disable-next-line no-console
    console.log(link);
  }
}

const meta: Meta<MainNavFormComponent> = {
  component: MainNavFormComponent,
  title: 'fe/ui/form/main-nav-form',
  decorators: [
    moduleMetadata({
      providers: [
        { provide: RouteNavigationService, useClass: MockRouteNavigationService },
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<MainNavFormComponent>;

export const Default: Story = {};
