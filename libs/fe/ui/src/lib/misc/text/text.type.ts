import { TextColorEnum, TextTypeEnum } from './text.enum';

export type TextType = keyof typeof TextTypeEnum;

export type TextColorType = keyof typeof TextColorEnum;
