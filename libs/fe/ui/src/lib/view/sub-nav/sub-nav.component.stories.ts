import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ActivatedRoute } from '@angular/router';

import { SubNavComponent } from './sub-nav.component';

const meta: Meta<SubNavComponent> = {
  component: SubNavComponent,
  title: 'fe/ui/view/sub-nav',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    moduleMetadata({
      providers: [
        { provide: ActivatedRoute, useValue: [] },
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<SubNavComponent>;

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
