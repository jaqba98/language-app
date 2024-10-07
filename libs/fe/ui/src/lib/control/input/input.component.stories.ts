import type { Meta, StoryObj } from '@storybook/angular';

import { buildMeta, buildStory } from '@english-learning/fe-utils';
import { InputComponent } from './input.component';

const meta: Meta<InputComponent> = {
  component: InputComponent,
  title: 'fe/ui/control/input',
  ...buildMeta(false),
};
export default meta;
type Story = StoryObj<InputComponent>;

const buildStoryArgs = (): Story['args'] => ({});

export const DefaultLight = buildStory<InputComponent>(buildStoryArgs(), true);

export const DefaultDark = buildStory<InputComponent>(buildStoryArgs(), false);

// import type { Meta, StoryObj } from '@storybook/angular';
// import { FormControl } from '@angular/forms';
// import { InputComponent } from './input.component';
// import { ControlKindEnum } from '../../enum/control-kind.enum';
// const meta: Meta<InputComponent> = {
//   component: InputComponent,
//   title: 'fe/ui/control/input',
//   parameters: {
//     backgrounds: {
//       default: 'primary',
//     },
//   },
// };
// export default meta;
// type Story = StoryObj<InputComponent>;
// export const Default: Story = {
//   args: {
//     form: new FormControl(''),
//     control: {
//       kind: ControlKindEnum.input,
//       id: '',
//       alignItems: 'flex-start',
//       validation: {
//         validators: [],
//         isVisible: false,
//       },
//       label: {
//         value: 'Login',
//         isVisible: true,
//       },
//       input: {
//         defaultValue: '',
//         placeholder: '',
//         type: 'text',
//       },
//     },
//   },
// };
