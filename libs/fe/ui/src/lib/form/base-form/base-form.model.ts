export enum ControlKindEnum {
  input = 'input',
  buttonText = 'buttonText',
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

export type ControlType =
  | ControlInputModel
  | ControlButtonTextModel;

export interface BaseFormModel {
  controls: ControlType[];
}
