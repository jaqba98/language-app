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
        value: 'Present Simple',
        type: 'header1',
      },
      {
        value: '1) When to use it',
        type: 'header2',
      },
      {
        value: 'a) Pernament',
        type: 'paragraph',
      },
      {
        value: 'We live in New York.',
        type: 'paragraph',
      },
      {
        value: 'He works at the bank.',
        type: 'paragraph',
      },
      {
        value: 'b) Routines',
        type: 'paragraph',
      },
      {
        value: 'I wake up at 6:00.',
        type: 'paragraph',
      },
      {
        value: 'I go to sleep at 11:00.',
        type: 'paragraph',
      },
      {
        value: 'c) Facts',
        type: 'paragraph',
      },
      {
        value: 'The sun rises in the east.',
        type: 'paragraph',
      },
      {
        value: 'd) Schedules',
        type: 'paragraph',
      },
      {
        value: 'Our class starts at 9:00.',
        type: 'paragraph',
      },
      {
        value: 'The flight leaves at noon.',
        type: 'paragraph',
      },
      {
        value: 'e) Frequency',
        type: 'paragraph',
      },
      {
        value: 'never = 0%',
        type: 'paragraph',
      },
      {
        value: 'rarely = 10-20%',
        type: 'paragraph',
      },
      {
        value: 'sometimes = 50%',
        type: 'paragraph',
      },
      {
        value: 'often = 75%',
        type: 'paragraph',
      },
      {
        value: 'always = 100%',
        type: 'paragraph',
      },
      {
        value: '2) How to use it',
        type: 'header2',
      },
      {
        value: 'a) Positive',
        type: 'paragraph',
      },
      {
        value: 'I work',
        type: 'paragraph',
      },
      {
        value: 'You work',
        type: 'paragraph',
      },
      {
        value: 'He works',
        type: 'paragraph',
      },
      {
        value: 'She works',
        type: 'paragraph',
      },
      {
        value: 'It works',
        type: 'paragraph',
      },
      {
        value: 'We work',
        type: 'paragraph',
      },
      {
        value: 'You work',
        type: 'paragraph',
      },
      {
        value: 'They work',
        type: 'paragraph',
      },
      {
        value: 'b) Negative',
        type: 'paragraph',
      },
      {
        value: 'I do not (don\'t) work',
        type: 'paragraph',
      },
      {
        value: 'You do not (don\'t) work',
        type: 'paragraph',
      },
      {
        value: 'He does not (doesn\'t) works',
        type: 'paragraph',
      },
      {
        value: 'She does not (doesn\'t) works',
        type: 'paragraph',
      },
      {
        value: 'It does not (doesn\'t) works',
        type: 'paragraph',
      },
      {
        value: 'We do not (don\'t) work',
        type: 'paragraph',
      },
      {
        value: 'You do not (don\'t) work',
        type: 'paragraph',
      },
      {
        value: 'They do not (don\'t) work',
        type: 'paragraph',
      },
      {
        value: 'c) Question',
        type: 'paragraph',
      },
      {
        value: 'Do I work?',
        type: 'paragraph',
      },
      {
        value: 'Do you work?',
        type: 'paragraph',
      },
      {
        value: 'Does he works?',
        type: 'paragraph',
      },
      {
        value: 'Does she works?',
        type: 'paragraph',
      },
      {
        value: 'Does it works?',
        type: 'paragraph',
      },
      {
        value: 'Do we work?',
        type: 'paragraph',
      },
      {
        value: 'Do you work?',
        type: 'paragraph',
      },
      {
        value: 'Do they work?',
        type: 'paragraph',
      },
      {
        value: 'd) Question words',
        type: 'paragraph',
      },
      {
        value: 'who, what, when, where, why, which, whose, how',
        type: 'paragraph',
      },
      {
        value: '3) Spelling',
        type: 'header2',
      },
      {
        value: 'a) most verbs / add s',
        type: 'paragraph',
      },
      {
        value: 'dance -> dances',
        type: 'paragraph',
      },
      {
        value: 'cook -> cooks',
        type: 'paragraph',
      },
      {
        value: 'sleep -> sleeps',
        type: 'paragraph',
      },
      {
        value: 'b) verbs ending in s, sch, ch, x / add es',
        type: 'paragraph',
      },
      {
        value: 'kiss -> kisses',
        type: 'paragraph',
      },
      {
        value: 'wasch -> washes',
        type: 'paragraph',
      },
      {
        value: 'teach -> teaches',
        type: 'paragraph',
      },
      {
        value: 'fix -> fixes',
        type: 'paragraph',
      },
      {
        value: 'c) verbs ending in consontant and y / dtop y and add ies',
        type: 'paragraph',
      },
      {
        value: 'study -> studies',
        type: 'paragraph',
      },
      {
        value: 'try -> tries',
        type: 'paragraph',
      },
      {
        value: 'd) others',
        type: 'paragraph',
      },
      {
        value: 'go -> goes',
        type: 'paragraph',
      },
      {
        value: 'do -> does',
        type: 'paragraph',
      },
      {
        value: 'have -> has',
        type: 'paragraph',
      },
      {
        value: '4) Short answers',
        type: 'header2',
      },
      {
        value: 'a) Do they need help?',
        type: 'paragraph',
      },
      {
        value: 'Yes, they do.',
        type: 'paragraph',
      },
      {
        value: 'No, they don\'t.',
        type: 'paragraph',
      },
      {
        value: 'b) Does he speak French?',
        type: 'paragraph',
      },
      {
        value: 'Yes, he does.',
        type: 'paragraph',
      },
      {
        value: 'No, he doesn\'t.',
        type: 'paragraph',
      },
      {
        value: 'c) Do you like this song?',
        type: 'paragraph',
      },
      {
        value: 'Yes, I do.',
        type: 'paragraph',
      },
      {
        value: 'No, I don\'t.',
        type: 'paragraph',
      },
    ],
  };
}
