// Assignment Code
let generateBtn = document.querySelector("#generate");
let copyButton = document.querySelector("#display");

let upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K","L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let specialCharacters = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Function for choosing password length
function chooseLength() {
  let passwordLength = window.prompt("Pick a password length between 8-128 characters.");
  let counter = 0; 
  while( !Number.isInteger(passwordLength) || passwordLength < 8 || passwordLength > 128){
    counter++; 
    if( counter < 3 ){
      passwordLength = prompt("Password length must be a number between 8-128 characters.");
    } else {
      passwordLength = prompt("PASSWORD LENGTH MUST BE A NUMBER BETWEEN 8-128 CHARACTERS!!!!");
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
  let useUpperCase = upperCasePrompt();
  let useLowerCase = lowerCasePrompt();
  let useSpecialCharacters = specialCharactersPrompt();
  let useNumbers = numbersPrompt();
  while (!useUpperCase && !useLowerCase && !useSpecialCharacters && !useNumbers) {
    window.alert("You must choose at least one type of character to use in your password");
    useUpperCase = upperCasePrompt();
    useLowerCase = lowerCasePrompt();
    useSpecialCharacters = specialCharactersPrompt();
    useNumbers = numbersPrompt();
  }

  for (let i = 0; i < passwordLength; i++) {
   
    
  }
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 

// function to copy password to clipboard
function copyPassword(){

  document.getElementById("display").select();

  document.execCommand("Copy");

  alert("Password copied to clipboard!");
}

// Add event listener to copy button
copyButton.addEventListener("click", copyPassword);