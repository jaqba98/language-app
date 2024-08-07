import { Component } from '@angular/core';

import { GrammarTemplateComponent, GrammarTemplateModel } from '@english-learning/fe-ui';

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
        kind: 'text',
        value: 'Present Simple',
        textType: 'header1',
      },
      {
        kind: 'text',
        value: '1) When to use it',
        textType: 'header2',
      },
      {
        kind: 'text',
        value: 'a) Pernament',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'We live in New York.',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'He works at the bank.',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'b) Routines',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'I wake up at 6:00.',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'I go to sleep at 11:00.',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'c) Facts',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'The sun rises in the east.',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'd) Schedules',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'Our class starts at 9:00.',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'The flight leaves at noon.',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'e) Frequency',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'never = 0%',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'rarely = 10-20%',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'sometimes = 50%',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'often = 75%',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'always = 100%',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: '2) How to use it',
        textType: 'header2',
      },
      {
        kind: 'text',
        value: 'a) Positive',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'I work',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'You work',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'He works',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'She works',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'It works',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'We work',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'You work',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'They work',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'b) Negative',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'I do not (don\'t) work',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'You do not (don\'t) work',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'He does not (doesn\'t) works',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'She does not (doesn\'t) works',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'It does not (doesn\'t) works',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'We do not (don\'t) work',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'You do not (don\'t) work',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'They do not (don\'t) work',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'c) Question',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'Do I work?',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'Do you work?',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'Does he works?',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'Does she works?',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'Does it works?',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'Do we work?',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'Do you work?',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'Do they work?',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'd) Question words',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'who, what, when, where, why, which, whose, how',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: '3) Spelling',
        textType: 'header2',
      },
      {
        kind: 'text',
        value: 'a) most verbs / add s',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'dance -> dances',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'cook -> cooks',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'sleep -> sleeps',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'b) verbs ending in s, sch, ch, x / add es',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'kiss -> kisses',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'wasch -> washes',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'teach -> teaches',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'fix -> fixes',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'c) verbs ending in consontant and y / dtop y and add ies',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'study -> studies',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'try -> tries',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'd) others',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'go -> goes',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'do -> does',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'have -> has',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: '4) Short answers',
        textType: 'header2',
      },
      {
        kind: 'text',
        value: 'a) Do they need help?',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'Yes, they do.',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'No, they don\'t.',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'b) Does he speak French?',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'Yes, he does.',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'No, he doesn\'t.',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'c) Do you like this song?',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'Yes, I do.',
        textType: 'paragraph',
      },
      {
        kind: 'text',
        value: 'No, I don\'t.',
        textType: 'paragraph',
      },
    ],
  };
}
