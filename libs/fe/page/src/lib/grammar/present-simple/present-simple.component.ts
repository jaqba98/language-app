import { Component } from '@angular/core';

import { GrammarTemplateComponent, GrammarTemplateModel, TextEnum } from '@english-learning/fe-ui';

@Component({
  selector: 'lib-present-simple',
  standalone: true,
  imports: [GrammarTemplateComponent],
  templateUrl: './present-simple.component.html',
})
export class PresentSimpleComponent {
  template: GrammarTemplateModel = {
    lines: [
      {
        value: 'Present Simple',
        type: TextEnum.header1
      },
      {
        value: '1) When to use it',
        type: TextEnum.header2
      },
      {
        value: 'a) Pernament',
        type: TextEnum.paragraph
      },
      {
        value: 'We live in New York.',
        type: TextEnum.paragraph
      },
      {
        value: 'He works at the bank.',
        type: TextEnum.paragraph
      },
      {
        value: 'b) Routines',
        type: TextEnum.paragraph
      },
      {
        value: 'I wake up at 6:00.',
        type: TextEnum.paragraph
      },
      {
        value: 'I go to sleep at 11:00.',
        type: TextEnum.paragraph
      },
      {
        value: 'c) Facts',
        type: TextEnum.paragraph
      },
      {
        value: 'The sun rises in the east.',
        type: TextEnum.paragraph
      },
      {
        value: 'd) Schedules',
        type: TextEnum.paragraph
      },
      {
        value: 'Our class starts at 9:00.',
        type: TextEnum.paragraph
      },
      {
        value: 'The flight leaves at noon.',
        type: TextEnum.paragraph
      },
      {
        value: 'e) Frequency',
        type: TextEnum.paragraph
      },
      {
        value: 'never = 0%',
        type: TextEnum.paragraph
      },
      {
        value: 'rarely = 10-20%',
        type: TextEnum.paragraph
      },
      {
        value: 'sometimes = 50%',
        type: TextEnum.paragraph
      },
      {
        value: 'often = 75%',
        type: TextEnum.paragraph
      },
      {
        value: 'always = 100%',
        type: TextEnum.paragraph
      },
      {
        value: '2) How to use it',
        type: TextEnum.header2
      },
      {
        value: 'a) Positive',
        type: TextEnum.paragraph
      },
      {
        value: 'I work',
        type: TextEnum.paragraph
      },
      {
        value: 'You work',
        type: TextEnum.paragraph
      },
      {
        value: 'He works',
        type: TextEnum.paragraph
      },
      {
        value: 'She works',
        type: TextEnum.paragraph
      },
      {
        value: 'It works',
        type: TextEnum.paragraph
      },
      {
        value: 'We work',
        type: TextEnum.paragraph
      },
      {
        value: 'You work',
        type: TextEnum.paragraph
      },
      {
        value: 'They work',
        type: TextEnum.paragraph
      },
      {
        value: 'b) Negative',
        type: TextEnum.paragraph
      },
      {
        value: 'I do not (don\'t) work',
        type: TextEnum.paragraph
      },
      {
        value: 'You do not (don\'t) work',
        type: TextEnum.paragraph
      },
      {
        value: 'He does not (doesn\'t) works',
        type: TextEnum.paragraph
      },
      {
        value: 'She does not (doesn\'t) works',
        type: TextEnum.paragraph
      },
      {
        value: 'It does not (doesn\'t) works',
        type: TextEnum.paragraph
      },
      {
        value: 'We do not (don\'t) work',
        type: TextEnum.paragraph
      },
      {
        value: 'You do not (don\'t) work',
        type: TextEnum.paragraph
      },
      {
        value: 'They do not (don\'t) work',
        type: TextEnum.paragraph
      },
      {
        value: 'c) Question',
        type: TextEnum.paragraph
      },
      {
        value: 'Do I work?',
        type: TextEnum.paragraph
      },
      {
        value: 'Do you work?',
        type: TextEnum.paragraph
      },
      {
        value: 'Does he works?',
        type: TextEnum.paragraph
      },
      {
        value: 'Does she works?',
        type: TextEnum.paragraph
      },
      {
        value: 'Does it works?',
        type: TextEnum.paragraph
      },
      {
        value: 'Do we work?',
        type: TextEnum.paragraph
      },
      {
        value: 'Do you work?',
        type: TextEnum.paragraph
      },
      {
        value: 'Do they work?',
        type: TextEnum.paragraph
      },
      {
        value: 'd) Question words',
        type: TextEnum.paragraph
      },
      {
        value: 'who, what, when, where, why, which, whose, how',
        type: TextEnum.paragraph
      },
      {
        value: '3) Spelling',
        type: TextEnum.header2
      },
      {
        value: 'a) most verbs / add s',
        type: TextEnum.paragraph
      },
      {
        value: 'dance -> dances',
        type: TextEnum.paragraph
      },
      {
        value: 'cook -> cooks',
        type: TextEnum.paragraph
      },
      {
        value: 'sleep -> sleeps',
        type: TextEnum.paragraph
      },
      {
        value: 'b) verbs ending in s, sch, ch, x / add es',
        type: TextEnum.paragraph
      },
      {
        value: 'kiss -> kisses',
        type: TextEnum.paragraph
      },
      {
        value: 'wasch -> washes',
        type: TextEnum.paragraph
      },
      {
        value: 'teach -> teaches',
        type: TextEnum.paragraph
      },
      {
        value: 'fix -> fixes',
        type: TextEnum.paragraph
      },
      {
        value: 'c) verbs ending in consontant and y / dtop y and add ies',
        type: TextEnum.paragraph
      },
      {
        value: 'study -> studies',
        type: TextEnum.paragraph
      },
      {
        value: 'try -> tries',
        type: TextEnum.paragraph
      },
      {
        value: 'd) others',
        type: TextEnum.paragraph
      },
      {
        value: 'go -> goes',
        type: TextEnum.paragraph
      },
      {
        value: 'do -> does',
        type: TextEnum.paragraph
      },
      {
        value: 'have -> has',
        type: TextEnum.paragraph
      },
      {
        value: '4) Short answers',
        type: TextEnum.header2
      },
      {
        value: 'a) Do they need help?',
        type: TextEnum.paragraph
      },
      {
        value: 'Yes, they do.',
        type: TextEnum.paragraph
      },
      {
        value: 'No, they don\'t.',
        type: TextEnum.paragraph
      },
      {
        value: 'b) Does he speak French?',
        type: TextEnum.paragraph
      },
      {
        value: 'Yes, he does.',
        type: TextEnum.paragraph
      },
      {
        value: 'No, he doesn\'t.',
        type: TextEnum.paragraph
      },
      {
        value: 'c) Do you like this song?',
        type: TextEnum.paragraph
      },
      {
        value: 'Yes, I do.',
        type: TextEnum.paragraph
      },
      {
        value: 'No, I don\'t.',
        type: TextEnum.paragraph
      },
    ]
  };
}
