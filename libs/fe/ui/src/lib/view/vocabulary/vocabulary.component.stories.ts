import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ActivatedRoute } from '@angular/router';

import { VocabularyComponent } from './vocabulary.component';

const meta: Meta<VocabularyComponent> = {
  component: VocabularyComponent,
  title: 'fe/ui/view/vocabulary',
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
type Story = StoryObj<VocabularyComponent>;

export const Primary: Story = {
  args: {
    route: 'test1'
  },
};
