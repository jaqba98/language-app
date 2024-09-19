import {
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { ActivatedRoute } from '@angular/router';

import { MainNavComponent } from './main-nav.component';

const meta: Meta<MainNavComponent> = {
  component: MainNavComponent,
  title: 'fe/ui/view/main-nav',
  decorators: [
    moduleMetadata({
      providers: [{ provide: ActivatedRoute, useValue: [] }],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj<MainNavComponent>;

export const Primary: Story = {};
