// Assignment Code
let generateBtn = document.querySelector("#generate");
let copyButton = document.querySelector("#display");

let upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K","L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let specialCharacters = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
let numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// This check that a number is an integer and not a float
function isInt(n) {
  return n % 1 === 0;
}

// Function for choosing password length
function chooseLength() {
  let passwordLength = +window.prompt("Pick a password length between 8-128 characters.");
  let counter = 0;
  while (isNaN(passwordLength) || !isInt(passwordLength) || passwordLength < 8 || passwordLength > 128){
    counter++;
    if( counter < 3 ){
      passwordLength = +prompt("Password length must be a number between 8-128 characters.");
    } else {
      passwordLength = +prompt("PASSWORD LENGTH MUST BE A NUMBER BETWEEN 8-128 CHARACTERS!!!!");
    }
  }
  return passwordLength;
}

// Function for choosing whether upper case letters are used
function upperCasePrompt() {
  return window.confirm("Do you want your password to include upper case letters?");
}

// Function for choosing whether lower case letters are used
function lowerCasePrompt() {
  return window.confirm("Do you want your password to include lower case letters?");
}

// Function for choosing whether special characters are used
function specialCharactersPrompt() {
  return window.confirm("Do you want your password to include special characters?");
}

// Function for choosing whether numbers are used
function numbersPrompt() {
  return window.confirm("Do you want your password to include numbers?");
}

// Function to generate password
function generatePassword() {
  let passwordLength = chooseLength();
  let useUpperCase = false;
  let useLowerCase = false;
  let useSpecialCharacters = false;
  let useNumbers = false;
  while (!useUpperCase && !useLowerCase && !useSpecialCharacters && !useNumbers) {
    window.alert("You must choose at least one of the following types of characters to use in your password.");
    useUpperCase = upperCasePrompt();
    useLowerCase = lowerCasePrompt();
    useSpecialCharacters = specialCharactersPrompt();
    useNumbers = numbersPrompt();
  }

  // Making an array based on what the user picked
  let choices = [];
  if (useUpperCase) {
    choices = choices.concat(upperCaseLetters);
  }
  if (useLowerCase) {
    choices = choices.concat(lowerCaseLetters);
  }
  if (useSpecialCharacters) {
    choices = choices.concat(specialCharacters);
  }
  if (useNumbers) {
    choices = choices.concat(numberCharacters);
  }

  // Generate password of appropriate length using choices
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let index = Math.floor(Math.random() * choices.length);
    let choice = choices[index];
    password += choice;
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 

// Function to copy password to clipboard
function copyPassword(){

  document.getElementById("password").select();

  document.execCommand("Copy");

  alert("Password copied to clipboard!");
}

// Add event listener to copy button
copyButton.addEventListener("click", copyPassword);