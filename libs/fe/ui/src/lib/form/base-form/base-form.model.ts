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

export interface ControlButtonModel extends ControlBaseModel {
  kind: ControlKindEnum.buttonText;
  value: string;
}

export type ControlType =
  | ControlInputModel
  | ControlButtonModel;

export interface BaseFormModel {
  controls: ControlType[];
}
