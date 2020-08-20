/* Suggested Initial State

  this file contains a suggestion of what your initial state should include
  feel free to modify, add or remove properties as your team's project evolves

*/

const state = {
  // how many questions has the user answered?
  //  you can calculate this value by iterating through the questions
  //  is selected === -1?
  answered: 0,
  // how many correct answers has the user submitted?
  //  you can calculate this value by iterating through the questions
  //  is selected === correct?
  correct: 0,
  // should the correct answer be indicated when a user is wrong?
  //  a possible user setting, this could be toggled in the UI
  showCorrectAnswers: false,
  // the questions in the quiz
  questions: [
    {
      text: 'What are the different ways to declare a JS variable?',
      answers: [
        'constant, let, variable',
        'var, const, let, function',
        'var, let, const'
      ],
      correct: 2,
      selected: -1,
    },
    {
      text: 'What does `typeof` do?',
      answers: [
        'changes the type of a primitive value',
        'returns a string describing the type of a value',
        'determines if a value is primitive',
        'can tell the difference between arrays and objects',
      ],
      correct: 1,
      selected: -1,
    }
  ]
};
