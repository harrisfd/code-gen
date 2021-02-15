// The following password generator will establish a password of at least 8 characters and no more than 128 characters.


// Noting Various Arrays
// Numberic Characters
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//Special Characters
var specchars = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
//Alphabetical Characters
var lowercases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


var get = document.querySelector("#generate");
get.addEventListener("click", function () {
  ps = generatePassword("");
  document.getElementById("password").placeholder = ps;
});

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  // List of Questions for user once input is validated
  var charNum = prompt("How Many Characters you Would Like in Your Password")
  var lowercase = confirm("Do You Need Lowercase Characters in your Password")
  var uppercase = confirm("Do You Need Uppercase Characters in your Password")
  var specchar = confirm("Do you Need Special Character in your Password")
  var number = confirm("Do you need numbers characters in your password")
  if (parseInt(charNum) > 7 && parseInt(charNum) < 129) {
    console.log("valid length")
  }
  else {
    alert("invalid entry must betweeen 8 and 128 characters")
    return generatePassword()
  }

  console.log(charNum, lowercase, uppercase, specchar, numbers)
var passwordCharacters=[]
  if (specchar) {
    passwordCharacters = passwordCharacters.concat(specchars)
  }

  if (number) {
    passwordCharacters = passwordCharacters.concat(numbers)
  }

  if (lowercase) {
    passwordCharacters = passwordCharacters.concat(lowercases)
  }

  if (uppercase) {
    passwordCharacters = passwordCharacters.concat(uppercases)
  }

  console.log(passwordCharacters)

  // Empty string to be filled based on for loop selecting random characters from the array
  var randomPassword = ""

  for (var i = 0; i < charNum; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}