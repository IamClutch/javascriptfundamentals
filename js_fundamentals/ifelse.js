// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
function greaterNum(num1, num2){
  if (num1 > num2){
    return num1
  }else{
    return num2
  }
}

var greaterNum1 = greaterNum(9,10)
var greaterNum2 = greaterNum(11,9)
var greaterNum3 = greaterNum(12,8)

console.log(greaterNum1)
console.log(greaterNum2)
console.log(greaterNum3)




// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(language){

if (language == "en")
{
    return "Hello world"
}

else if (language == "fr")
{
  return  "bonjour le monde"
}

else if (language == "de")
{
  return  "Hello Welt"

};
};
var languagefr = helloWorld("fr")
console.log(languagefr)



// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".
