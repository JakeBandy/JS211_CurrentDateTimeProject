// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
const convertNumberToString = (str) => {
  const result = Number(str)
console.log(typeof result);
return result;
}

console.log(convertNumberToString("5"))


// Write a JavaScript program to convert a string to the number.
const convertStringToNumber = (num) => {
  const result = String(num)
console.log(typeof result);
return result;
}

console.log(convertStringToNumber(5))




// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
  function checkDataType(element) {
    return typeof element
  }

  console.log(checkDataType())
// Write a JavaScript program that adds 2 numbers together.
let total = 2 + 2;


// Write a JavaScript program that runs only when 2 things are true.

function trueTwo(a, b, c){
  if(a === b && c > b){
    return true;
  }
}


// Write a JavaScript program that runs when 1 of 2 things are true.

const x = 4;
const y = 4;
const z = 7;

function oneTrue(x, y, z){
  if(x === y || x === z){
    return true;
  } 
}


// Write a JavaScript program that runs when both things are not true.  
function noneTrue(a, b, c){
  if(a != b && a != c){
    return true;
  }
}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.

document.getElementById("num2str")
const results = convertNumberToString(num2str.value)

num2str.value
console.log(results)

document.getElementById("str2num")
const results = convertStringToNumber(str2num.value)

str2num.value
console.log(results)


// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
