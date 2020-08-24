'use strict';

/* View Functions

  a view function takes data a user is interested in
  and returns either an HTML string or DOM elements

  view functions RENDER data into a format that is clear for users
  the rendered data can then be appended to the DOM
  so users can see what is in state

*/

console.log('--- loading view: questionDisplay');

// either expect or assert, up to you
const expect = chai.expect;


/**
 *
 */
const questionDisplay = (obj) => {

    return `<div class="content-container">
    <p>${obj.text}<p>

    <input type="radio" name="answer" value="0" id="answer_0">
    <label for="answer_0">${obj.answers[0]}</label><br>

    <input type="radio" name="answer" value="1" id="answer_1">
    <label for="answer_0">${obj.answers[1]}</label><br>

    <input type="radio" name="answer" value="2" id="answer_2">
    <label for="answer_0">${obj.answers[2]}</label>
    </div>

    <div id="interaction" class="interaction">

    <h2 id="result"></h2>
    <button id="confirm" class="btn">Confirm!</button>



    <button id="quit" class="btn">Quit</button>

    <button id="next-question" class="btn">Next</button>
    <button id="previous-question" class="btn">Previous</button><br>
    <button id="cheat-answer" class="btn">Cheat</button><br>
    

    </div>
    
    `

};


// write only one top-level describe in this file
describe('_', () => {
    // write as many nested describes as you would like
    describe('_', () => {
        // write as many it's as you want in each describe
        it('_', () => {
            // have only one assertion inside each it
        });
    });
});

/* view functions are pure functions

  NEVER read from the DOM
  NEVER write to the DOM
  NEVER use events
  NEVER use prompt/alert/confirm
  NEVER use variables that are not parameters
  NEVER use variables that are not declared locally

*/