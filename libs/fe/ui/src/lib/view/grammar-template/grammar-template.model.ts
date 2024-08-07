import { TextType } from '../../misc/text/text.type';

interface TemplateLineModel {
  value: string;
  type: TextType;
}

export interface GrammarTemplateModel {
  lines: TemplateLineModel[];
}
