'use strict';

/* View Functions

a view function takes data a user is interested in
and returns either an HTML string or DOM elements

view functions RENDER data into a format that is clear for users
the rendered data can then be appended to the DOM
so users can see what is in state

*/

console.log('--- loading view: quite-message-display');

// either expect or assert, up to you
//const expect = chai.expect;

/**
*
*/
const quitMessageDisplay = (obj) => {

return `<section id="quit">
<div class="quit-message">
<h2>Result:<h2>

<span>${obj.correct}</span> of <span>${obj.answered}</span>
</div>

<div class="user-interaction">
<button id="restart" class="btn">Restart</button>




</div>
</section>
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