/**
 * Ways of writing functions
 * 1. Function Decleration
 * 2.Function Expression
 * 3.Ananymous function
 * 4.Arrow functions
 */

// 1. Function Declaration

function twoSum(num1, num2) {
    const sum = num1+num2

    return  sum
    const outside ='not working'

}
const result = twoSum(2, 4)
console.log(result)

// 2.Function Expression

const twoSumjs = function(num1, num2) {
    return num1 + num2
}
const result2 = twoSumjs(45, 5)
console.log(result2)

// 3.Ananymous function
const myArray = []
myArray.map(function (num1, num2) {
    return num1 + num2
})



// 4. Arrow functions

const twoSumArrow2 = (num1, num2) => {
    return num1 + num2
}

const result3 = twoSumArrow2(78,45 )

console.log(result3)


// 4.1 Arrow function -  one liner

const twoSumArrow3 = (num1, num2) => num1 + num2

const result4 = twoSumArrow3(78, 45)

console.log('result4->',result4)



// Challenges
/**
 * // write a function that takes in 2 numbers and return the largest number
 * 2. Store the result of the first function in a variable,
 * then Write another function that takes that result and multiplies it by 2
 * 
*/


//create a function
const largest = (num1, num2) => {
 //make the function take 2 params
 //compare the params


 if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}
const result5 = largest(55, 76)
console.log(result5)






function multiplies(){
    // Largest * 2 = Resolve
    const resolve= result5 * 2;
     
    console.log(resolve); // Log result
   
   }
 
multiplies()




/*The Problem


 * 
 * 
 */


function fizzBuzz(num) {     // Write a program that takes one number and print the number.
    if (num % 3 === 0 && num % 5 === 0) {    // If the number is multiple of 3 print “Fizz” instead of the number.
        return 'FizzBuzz'               //If the number is multiple of 5 print “Buzz” instead of the number.
    } else if (num % 3 === 0) {
        return 'Fizz'              // If the number is multiple of both 3 and 5 print “FizzBuzz”.
    } else if (num % 5 === 0) {
        return 'Buzz'
    } else {
        return num
    }
   
    
}

const sonuc = fizzBuzz(10)
console.log(sonuc)

/*Given a string, return true if the string is a palindrome or false if it is not.  Palindromes are strings that form the same word if it is reversed. *Do* include spaces and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
//   palindrome("racecar") === true
*/

function palindrome(str) {
    return str === str.split('').reverse().join('')
}

console.log(palindrome('palindrome'))







