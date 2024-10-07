import type { Meta, StoryObj } from '@storybook/angular';

import { buildMeta, buildStory } from '@english-learning/fe-utils';
import { BaseFormComponent } from './base-form.component';

const meta: Meta<BaseFormComponent> = {
  component: BaseFormComponent,
  title: 'fe/ui/form/base-form',
  ...buildMeta(false),
};
export default meta;
type Story = StoryObj<BaseFormComponent>;

const buildStoryArgs = (): Story['args'] => ({});

export const DefaultLight = buildStory<BaseFormComponent>(buildStoryArgs(), true);

export const DefaultDark = buildStory<BaseFormComponent>(buildStoryArgs(), false);

// import type { Meta, StoryObj } from '@storybook/angular';
// import { BaseFormComponent } from './base-form.component';
// import { ControlKindEnum } from '../../enum/control-kind.enum';
// const meta: Meta<BaseFormComponent> = {
//   component: BaseFormComponent,
//   title: 'fe/ui/form/base-form',
//   parameters: {
//     backgrounds: {
//       default: 'primary',
//     },
//   },
// };
// export default meta;
// type Story = StoryObj<BaseFormComponent>;
// export const Default: Story = {
//   args: {
//     baseForm: {
//       controls: [
//         {
//           kind: ControlKindEnum.input,
//           id: 'input',
//           alignItems: 'flex-start',
//           validation: {
//             validators: [],
//             isVisible: false,
//           },
//           label: {
//             value: 'Input',
//             isVisible: true,
//           },
//           input: {
//             defaultValue: '',
//             placeholder: 'input...',
//             type: 'text',
//           },
//         },
//         {
//           kind: ControlKindEnum.buttonText,
//           id: 'buttonText',
//           alignItems: 'flex-start',
//           validation: {
//             validators: [],
//             isVisible: false,
//           },
//           label: 'ButtonText',
//           isSubmit: true,
//         },
//         {
//           kind: ControlKindEnum.buttonIcon,
//           id: 'buttonIcon',
//           alignItems: 'flex-start',
//           validation: {
//             validators: [],
//             isVisible: false,
//           },
//           icon: 'icon/main-nav-logo.svg',
//           alt: 'School',
//           isSubmit: true,
//         },
//         {
//           kind: ControlKindEnum.link,
//           id: 'link',
//           alignItems: 'flex-start',
//           validation: {
//             validators: [],
//             isVisible: false,
//           },
//           label: 'Link',
//           path: '/',
//           tip: 'Hello',
//         },
//       ],
//     },
//   },
// };
