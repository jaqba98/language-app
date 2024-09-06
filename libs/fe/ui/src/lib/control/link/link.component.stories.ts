import { type Meta, type StoryObj } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import { LinkComponent } from './link.component';
import { ControlKindEnum } from '../../enum/control-kind.enum';

const meta: Meta<LinkComponent> = {
  component: LinkComponent,
  title: 'fe/ui/control/link',
};
export default meta;
type Story = StoryObj<LinkComponent>;

export const Primary: Story = {
  args: {
    form: new FormControl(''),
    control: {
      kind: ControlKindEnum.link,
      id: 'link',
      validation: {
        validators: [],
        isVisible: false,
      },
      label: '',
      path: '',
    },
  },
};
