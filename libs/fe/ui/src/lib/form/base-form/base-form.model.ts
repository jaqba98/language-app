export enum ControlKindEnum {
  input = 'input',
  buttonText = 'buttonText',
  buttonIcon = 'buttonIcon',
}

export interface ControlBaseModel {
  kind: ControlKindEnum;
  name: string;
}

export interface ControlInputModel extends ControlBaseModel {
  kind: ControlKindEnum.input;
  defaultValue: string;
}

export interface ControlButtonTextModel extends ControlBaseModel {
  kind: ControlKindEnum.buttonText;
  label: string;
  isPrimary: boolean;
}

export interface ControlButtonIconModel extends ControlBaseModel {
  kind: ControlKindEnum.buttonIcon;
  iconEnter: string;
  iconLeave: string;
  alt: string;
  isPrimary: boolean;
}

export type ControlType =
  | ControlInputModel
  | ControlButtonTextModel
  | ControlButtonIconModel;

export interface BaseFormModel {
  controls: ControlType[];
}
