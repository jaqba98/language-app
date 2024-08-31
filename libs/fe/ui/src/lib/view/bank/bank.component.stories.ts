import {
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { ActivatedRoute } from '@angular/router';

import { BankComponent } from './bank.component';

const meta: Meta<BankComponent> = {
  component: BankComponent,
  title: 'fe/ui/view/bank',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    moduleMetadata({
      providers: [{ provide: ActivatedRoute, useValue: [] }],
    }),
  ],
};
export default meta;
type Story = StoryObj<BankComponent>;

export const Primary: Story = {
  args: {
    words: [
      { polish: 'test', english: 'test' },
      { polish: 'test', english: 'test' },
      { polish: 'test', english: 'test' },
      { polish: 'test', english: 'test' },
    ],
  },
};
