import { TextType } from '../../misc/text/text.type';

interface TextModel {
  kind: 'text',
  value: string;
  textType: TextType;
}

type TemplateLineType = TextModel;

export interface GrammarTemplateModel {
  lines: TemplateLineType[];
}
