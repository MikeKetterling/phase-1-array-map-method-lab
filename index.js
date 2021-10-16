const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = string => {
//   return tutorials
// }

// let title = 'what does the this keyword mean?'



// const titleCased = string => {
//   return string.toLowerCase().split(' ').map(function (word) {
//     return (word.charAt(0).toUpperCase() + word.slice(1));
//   }).join(' ');
// }

// console.log(titleCased(title))

const input = tutorials.map(uppercaseWords)

function titleCased() {
  return input;
} 
 
function uppercaseWords (array){
  let newArray = array.split(" ");
  for (let i = 0; i < newArray.length; i ++ ){
    newArray[i] = newArray[i].charAt(0).toUpperCase() + newArray[i].slice(1);
  }
  return newArray.join(" ")
}
