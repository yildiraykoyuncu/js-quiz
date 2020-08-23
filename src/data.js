/* Suggested Initial State

  this file contains a suggestion of what your initial state should include
  feel free to modify, add or remove properties as your team's project evolves

*/

const state = {
    game: {
        //index of question currently displayed
        currentQuestion: 0,
        // how many questions has the user answered?
        //  you can calculate this value by iterating through the questions
        //  is selected === -1?
        answered: 3,
        // how many correct answers has the user submitted?
        //  you can calculate this value by iterating through the questions
        //  is selected === correct?
        correct: 2,
        // should the correct answer be indicated when a user is wrong?
        //  a possible user setting, this could be toggled in the UI
        showCorrectAnswers: false,
        // the questions in the quiz
    },
    questions: [{
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
        },
        {
            text: 'Where is the correct place to insert a JavaScript?',
            answers: [
                'The head section',
                'The body section',
                'Both the head section and the body section are correct'
            ],
            correct: 2,
            selected: -1,
        },
        {
            text: 'How do you create a function in JavaScript?',
            answers: [
                'function:myFunction()',
                'function = myFunction()',
                'function myFunction()'
            ],
            correct: 2,
            selected: -1,
        },
        {
            text: 'How to write an IF statement in JavaScript?',
            answers: [
                'if i === 5 then',
                'if(i === 5)',
                'if i = 5 then',
                'if i = 5'
            ],
            correct: 1,
            selected: -1,
        },
        {
            text: 'What is the correct way to write a JavaScript array?',
            answers: [
                'let colors = (1:"red", 2:"green", 3:"blue")',
                'let colors = "red", "green", "blue"',
                'let colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
                'let colors = ["red", "green", "blue"]'
            ],
            correct: 3,
            selected: -1,
        },
        {
            text: 'How do you round the number 7.25, to the nearest integer?',
            answers: [
                'round(7.25)',
                'rnd(7.25)',
                'Math.rnd(7.25)',
                'Math.round(7.25)'
            ],
            correct: 3,
            selected: -1,
        },
        {
            text: 'JavaScript is the same as Java?',
            answers: [
                'False',
                'True',
            ],
            correct: 0,
            selected: -1,
        },
        {
            text: 'Which event occurs when the user clicks on an HTML element?',
            answers: [
                'onmouseclick',
                'onclick',
                'onchange',
                'onmouseover'
            ],
            correct: 1,
            selected: -1,
        },
        {
            text: 'How do you declare a JavaScript variable?',
            answers: [
                'variable carName',
                'let carName',
                'v carName',
                'let:carName'
            ],
            correct: 1,
            selected: -1,
        }
    ]
};