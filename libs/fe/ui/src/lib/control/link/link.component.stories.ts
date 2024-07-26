import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { ActivatedRoute } from '@angular/router';
import { LinkComponent } from './link.component';

const meta: Meta<LinkComponent> = {
  component: LinkComponent,
  title: 'Control/Link',
  decorators: [
    moduleMetadata({
      providers: [
        { provide: ActivatedRoute, useValue: [] },
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<LinkComponent>;

export const Primary: Story = {
  args: {
    value: 'Click me!',
  },
};
