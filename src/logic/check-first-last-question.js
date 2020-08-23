'use strict';
console.log('--- loading logic: _');

// either expect or assert, up to you
const assert = chai.assert;


/**
 *
 */
const checkLast = (index,arr) => {
   if(index === 0) {
    return 'block';
  
   } if (index === arr.length - 1){
    return 'none';
    
   }

};

const checkFirst = (index,arr) => {
  if(index === 0) {
   return 'none';
 
  } if (index === arr.length - 1){
   return 'block';
   
  }

};



// write only one top-level describe in this file
describe('checkLast and checkFirst should return either block or none string', () => {
  // write as many nested describes as you would like
  describe('checkLast return either block or none string', () => {
    // write as many it's as you want in each describe
    it('checkLast return block in the first question ', () => {
      // have only one assertion inside each it
      const expected = 'block';
      const actual = checkLast(0, ['question1', 'question2', 'question3']);
      assert.deepStrictEqual(actual, expected);
    });
    it('checkLast return none in the last question ', () => {
      // have only one assertion inside each it
      const expected = 'none';
      const actual = checkLast(2, ['question1', 'question2', 'question3']);
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe('checkFirst return either block or none string', () => {
    // write as many it's as you want in each describe
    it('checkFirst return none in the first question ', () => {
      // have only one assertion inside each it
      const expected = 'none';
      const actual = checkFirst(0, ['question1', 'question2', 'question3']);
      assert.deepStrictEqual(actual, expected);
    });
    it('checkFirst return block in the last question ', () => {
      // have only one assertion inside each it
      const expected = 'block';
      const actual = checkFirst(2, ['question1', 'question2', 'question3']);
      assert.deepStrictEqual(actual, expected);
    });
  });
});

/* logic functions are pure functions

  NEVER read from the DOM
  NEVER write to the DOM
  NEVER use events
  NEVER use prompt/alert/confirm
  NEVER use variables that are not parameters
  NEVER use variables that are not declared locally

*/
