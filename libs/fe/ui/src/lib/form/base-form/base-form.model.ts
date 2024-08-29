export enum ControlKindEnum {
  input = 'input',
  buttonText = 'buttonText',
  buttonIcon = 'buttonIcon',
  link = 'link',
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
  fullWidth: boolean;
}

export interface ControlButtonIconModel extends ControlBaseModel {
  kind: ControlKindEnum.buttonIcon;
  iconEnter: string;
  iconLeave: string;
  alt: string;
  isPrimary: boolean;
}

export interface ControlLinkModel extends ControlBaseModel {
  kind: ControlKindEnum.link;
  label: string;
  path: string;
}

export type ControlType =
  | ControlInputModel
  | ControlButtonTextModel
  | ControlButtonIconModel
  | ControlLinkModel;

export interface BaseFormModel {
  controls: ControlType[];
}
