import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ActivatedRoute } from '@angular/router';

import { SectionComponent } from './section.component';

const meta: Meta<SectionComponent> = {
  component: SectionComponent,
  title: 'fe/ui/view/section',
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
type Story = StoryObj<SectionComponent>;

export const Primary: Story = {
  args: {
    header: 'Header',
    options: [
      { value: 'Link 1', link: '/' },
      { value: 'Link 2', link: '/' },
      { value: 'Link 3', link: '/' },
      { value: 'Link 4', link: '/' },
      { value: 'Link 5', link: '/' },
    ],
  },
};
