/* Suggested Initial State

  this file contains a suggestion of what your initial state should include
  feel free to modify, add or remove properties as your team's project evolves

*/

let state = {
    game: {
        //index of question currently displayed
        currentQuestion: 0,
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
            resourceLink: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var', 'https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/Using_js-ctypes/Declaring_types'],
            isAnswered: false
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
            resourceLink: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof', 'https://alligator.io/js/typeof/'],
            isAnswered: false
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
            resourceLink: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script', 'https://stackoverflow.com/questions/436411/where-should-i-put-script-tags-in-html-markup'],
            isAnswered: false
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
            resourceLink: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions', 'https://www.tutorialsteacher.com/javascript/javascript-function'],
            isAnswered: false
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
            resourceLink: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else', 'https://www.tutorialspoint.com/javascript/javascript_ifelse.htm'],
            isAnswered: false
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
            resourceLink: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array', 'https://javascript.info/array'],
            isAnswered: false
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
            resourceLink: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round', 'https://www.geeksforgeeks.org/javascript-math-round-function-2/'],
            isAnswered: false
        },
        {
            text: 'JavaScript is the same as Java?',
            answers: [
                'False',
                'True',
            ],
            correct: 0,
            selected: -1,
            resourceLink: ['https://developer.mozilla.org/en-US/docs/Web/JavaScript', 'https://www.tutorialspoint.com/What-is-the-difference-between-Java-and-JavaScript'],
            isAnswered: false
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
            resourceLink: ['https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event', 'https://www.freecodecamp.org/news/javascript-onclick-event-explained/'],
            isAnswered: false
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
            resourceLink: ['https://ui.dev/var-let-const/', 'https://dev.to/sarah_chima/var-let-and-const--whats-the-difference-69e'],
            isAnswered: false
        }
    ]
};