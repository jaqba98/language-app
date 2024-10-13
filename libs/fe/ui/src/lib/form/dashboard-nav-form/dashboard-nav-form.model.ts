import { ControlButtonLinkModel } from '../../model/control/control-button-link.model';

export interface DashboardNavFormModel {
  statistics: ControlButtonLinkModel;
  courses: ControlButtonLinkModel;
  account: ControlButtonLinkModel;
  logout: ControlButtonLinkModel;
}
