import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { LinkComponent } from './link.component';
import { ActivatedRoute } from '@angular/router';

const meta: Meta<LinkComponent> = {
  component: LinkComponent,
  title: 'Control/Link',
  decorators: [
    moduleMetadata({
      providers: [
        { provide: ActivatedRoute, useValue: [] }
      ]
    })
  ]
};
export default meta;
type Story = StoryObj<LinkComponent>;

export const Primary: Story = {
  args: {
    value: 'Click me!'
  },
};
