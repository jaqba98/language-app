import { TextEnum } from "../../misc/text/text.enum";

interface TemplateLineModel {
  value: string;
  type: TextEnum;
}

export interface GrammarTemplateModel {
  lines: TemplateLineModel[];
}
