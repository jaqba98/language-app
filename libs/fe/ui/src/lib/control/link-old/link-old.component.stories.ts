import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ActivatedRoute } from '@angular/router';

import { LinkOldComponent } from './link-old.component';

const meta: Meta<LinkOldComponent> = {
  component: LinkOldComponent,
  title: 'fe/ui/control/link-old',
  decorators: [
    moduleMetadata({
      providers: [
        { provide: ActivatedRoute, useValue: [] },
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<LinkOldComponent>;

export const Primary: Story = {
  args: {
    value: 'Click me!',
    link: '/',
  },
};
