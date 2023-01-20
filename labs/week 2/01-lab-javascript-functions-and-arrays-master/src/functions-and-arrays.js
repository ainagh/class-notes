// Iteration #1: Find the maximum
// MANERA 1

function maxOfTwoNumbers(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne
  } else if (numberOne < numberTwo) {
    return numberTwo
  } else if (numberOne === numberTwo) {
    return numberOne, numberTwo;
  }
}
let maxNum = maxOfTwoNumbers (4, 40)
console.log(maxNum);


//manera corregida a classe
const maxOfTwoNumbers = (numberOne, numberTwo) => {
  if (numberOne === numberTwo) {
    console.log(`${numberOne} and ${numberTwo} are the same number`);
  } else if (numberOne > numberTwo) {
    console.log(`In this case, ${numberOne} is bigger than ${numberTwo}`);
  } else if (numberOne < numberTwo) {
    console.log(`In this case, ${numberTwo} is bigger than ${numberOne}`);
  };
}
maxOfTwoNumbers (4, 40)

//using TERNARY
// només dues opcions:
/* const maxOfTwoNumbersTernary = (numberOne, numberTwo) => {
  return a > b ? a : b;
};
console.log(maxOfTwoNumbersTernary (3, 50));
 */

//amb més d'una opció ---- no tinc clar q estigui bé
const maxOfTwoNumbersTernary = (numberOne, numberTwo) => {
  return a > b ? a : a === b ? a : b;
};
console.log(maxOfTwoNumbersTernary (3, 50));



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

const findLongestWord = (wordArray) => {
  //stop logic if array is empty
  if (wordArray.length === 0) return null;
  //use this empty variable to store longest word
  let longestWord = "";
  //loop through the array param in order to get longest word
  for (let i = 0; i < wordArray.length; i ++) {
    if (longestWord.length < wordArray[i].length) longestWord = wordArray[i]
  }
  return longestWord;
};
console.log(`The longest word on this specific array is ${findLongestWord(words)}`);

//segona manera
const findLongestWordSecVariation = (wordArray) => {
  let wordLength = "";
  if (!wordArray.length) return null;
  else if (wordArray.length === 1) return wordArray.toString()
  else {
    let temporalWord = wordArray.sort((wordOne, wordTwo) => wordOne.length > wordTwo.length ? -1 : 1);
    wordLength = temporalWord[0]
  }
  return wordLength
};
console.log(findLongestWordSecVariation (words));

// Iteration #3: Calculate the sum

//function sumNumbers () {}
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

const sumNumbers = (numbersArray) => {
  //declarar una variable para guardar el total de la suma y inicializamos en 0
  let sum = 0;
  //iterar mediante un bucle "for" apuntando al parametro que declaremos en los parentesis de la funcion
  for (let i = 0; i < numbersArray.length; i ++) {
    sum = sum + numbersArray[i]
  }
  //retornem la variable
  return sum
}
console.log(`The sum of all total numbers of the array is ${sumNumbers(numbers)}`);

// Iteration #3.2 Bonus:
//function sum() {}
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

const sum = (mixedArray) => {
//declarar una variable para guardar el total de la suma
  let totalSumOfMixedArray = 0;
//bucleamos
  for (let i = 0; i<mixedArray.length; i++) {
    //STRINGS
    if (typeof mixedArray[i] === "string") {

      let string = mixedArray [i].split("");
      for (let i=0; i<string.length; i++) {
        totalSumOfMixedArray += mixedArray[i];
      }
    }
    //BOOLEANS
    else if (mixedArray[i] === true) {totalSumOfMixedArray += 1;
    }
    //NUMBERS
    else {
      totalSumOfMixedArray += mixedArray[i];
    }
  }

  return totalSumOfMixedArray;
}
 console.log();


// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

/* function averageNumbers() {} */
const averageNumbers = (numbers) => {

//usaremos la funcion sumNumbers y usaremos el parametro para obtener este resultado matematico
return (sumNumbers(numbers) / numbers.length).toFixed(2);
}

console.log(`The average of this array is: ${averageNumbers(numbersAvg)}`);
console.log(`The average of complex this array is: ${averageNumbers(numbersAvgTwo)}`);


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];



function averageWordLength() { }

// Bonus - Iteration #4.1
function avg() {}

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray() {}



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist() {}



// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes() {}



// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct() {}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
