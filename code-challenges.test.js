/* ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

Please read all questions thoroughly
Pseudo coding is REQUIRED
If you get stuck, please leave comments to help us understand your thought process

Use test driven development to complete the following questions
Add appropriate dependencies: $ yarn add jest

Reminder: The test will call your function
Run the file with the following command: $ yarn jest

/* ---------------- Question 1 --------------- */
/* 1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized. */
/* ------------------------------------------- */

  // a) Create a test with an expect statement using the variable provided.
  describe("intros", () => {
    it("takes in an array of objects and returns an array with a sentance about each person, with their name capitalized", () => {
      const people = [
        { name: "ford prefect", occupation: "a hitchhiker" },
        { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
        { name: "arthur dent", occupation: "a radio employee" }
      ]
      const expected = ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
      expect(intros(people)).toEqual(expected)
    })
  })

  /* Red Test Failed Successfully
  FAIL  ./code-challenges.test.js
  intros
    ✕ takes in an array of objects and returns an array with a sentance about each person, with their name capitalized (1 ms)
    ReferenceError: intros is not defined
  */

  // b) Create the function that makes the test pass.

  /* Pseudocode - intros
      Function: name = intros
      Parameters: 1 x array of objects, name = arrOfObjects
      Logic:
        - create a variable to store introduction string array named introStrArr
        - iterate over each object assigning the stringified sentance of the name and occupation
        - within the iteration take the names and split them into an array of single words and assign it to a variable named names
        - iterate over the array of names replacing the first letter with a capitalized version
        - take capitalized first and last names and assign them to a variable named capName
        - return the concatenated capName variable with 'is' separating the occupation and end with a period
        - then return the introStrArr
  */

  // const intros = (arrOfobjects) => {
  //   const introStrArr = arrOfobjects.map(person =>{
  //     let names = person.name.split(" ")
  //     for(var i = 0; i < names.length; i++) {
  //       names[i] = names[i].charAt(0).toUpperCase() + names[i].slice(1)
  //     }
  //     let capName = names.join(" ")
  //     return `${capName} is ${person.occupation}.`
  //   })
  //   return introStrArr
  // }

  /* Green Test Passed Successfully
       PASS  ./code-challenges.test.js
    intros
      ✓ takes in an array of objects and returns an array with a sentance about each person, with their name capitalized (2 ms)
      Test Suites: 1 passed, 1 total
  */

  /* Refactor */
  const intros = arrOfobjects => {
    return introStrArr = arrOfobjects.map(person =>{
      fullName = person.name.split(" ").map(nameStr => {
        return nameStr.charAt(0).toUpperCase() + nameStr.slice(1)
      }).join(" ")
      return `${fullName} is ${person.occupation}.`
    })
  }

/* ---------------- Question 2 --------------- */
/* Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. */
/* ------------------------------------------- */

// a) Create a test with an expect statement using the variables provided.

describe('divByThree', () => {
  it('take in a mixed data array and returns an array of only the remainders of the numbers when devided by 3', () => {
    // Test Inputs
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected Results
    const expected1 = [ 2, 0, -1, 0 ]
    const expected2 = [ 2, 1, -1 ]
    
    expect(divByThree(hodgepodge1)).toEqual(expected1)
    expect(divByThree(hodgepodge2)).toEqual(expected2)
  });
});

    /* Red Test Failed Successfully
        FAIL  ./code-challenges.test.js
        intros
          ✓ takes in an array of objects and returns an array with a sentance about each person, with their name capitalized (2 ms)
        divByThree
          ✕ take in a mixed data array and returns an array of only the remainders of the numbers when devided by 3 (1 ms)
          ReferenceError: divByThree is not defined
    */

// b) Create the function that makes the test pass.

/* Pseudocode - divByThree
  Function: divByThree
  Parameters: 1 x mixed data array named mixArr
  Logic:
    - Create variable called nums to contain all numbers
    - Iterate over each item, moving only the numbers to the nums array
    - If item is a number, divide by three and return remainder to nums arr
    - Once all items have been iterated over, return newly formed arr of remainder numbers that have been computed
*/

  // const divByThree = (mixArr) => {
  //   const nums = mixArr.filter(item => {
  //     return typeof item === "number"
  //   })

  //   divNums = nums.map(num => {
  //     return num % 3
  //   })
  //   return divNums
  // }

  /* Green Test Passed Successfully
    PASS  ./code-challenges.test.js
    intros
      ✓ takes in an array of objects and returns an array with a sentance about each person, with their name capitalized (3 ms)
    divByThree
      ✓ take in a mixed data array and returns an array of only the remainders of the numbers when devided by 3 (1 ms)
  */

  /* Refactor */
  const divByThree = mixArr => {
    filter: nums    = mixArr.filter(item => typeof item === "number")
    map:    divNums = nums.map(num => num % 3)
    return divNums
  }


/* ---------------- Question 3 --------------- */
/* 3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed. */
/* ------------------------------------------- */

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125


// b) Create the function that makes the test pass.
