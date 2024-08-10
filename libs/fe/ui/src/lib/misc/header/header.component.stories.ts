import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ActivatedRoute } from '@angular/router';

import { HeaderComponent } from './header.component';

const meta: Meta<HeaderComponent> = {
  component: HeaderComponent,
  title: 'fe/ui/misc/header',
  decorators: [
    moduleMetadata({
      providers: [
        { provide: ActivatedRoute, useValue: [] },
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<HeaderComponent>;

export const Paragraph: Story = {
  args: {
    value: 'Hello world',
    textType: 'header1',
  },
};
