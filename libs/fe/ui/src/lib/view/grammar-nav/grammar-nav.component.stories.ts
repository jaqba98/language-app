import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { GrammarNavComponent } from './grammar-nav.component';
import { ActivatedRoute } from '@angular/router';

const meta: Meta<GrammarNavComponent> = {
  component: GrammarNavComponent,
  title: 'View/GrammarNav',
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [
    moduleMetadata({
      providers: [
        { provide: ActivatedRoute, useValue: [] }
      ]
    })
  ]
};
export default meta;
type Story = StoryObj<GrammarNavComponent>;

export const Primary: Story = {
  args: {
    options: [
      { title: "Link 1", link: "/" },
      { title: "Link 2", link: "/" },
      { title: "Link 3", link: "/" },
      { title: "Link 4", link: "/" },
      { title: "Link 5", link: "/" }
    ]
  }
};
