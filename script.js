// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  numberCharacters();
  includeCharacters();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password.join("");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var specialCharacters = [" ",
"!",
"\"",
"#",
"$",
"%",
"&",
"'",
"(",
")",
"*",
"+",
",",
"-",
".",
"/",
":",
";",
"<",
"=",
">",
"?",
"@",
"[",
"\\",
"]",
"^",
"_",
"`",
"{",
"|",
"}",
"~"];

var lowerCase = ["a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z"];

var upperCase = ["A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z"];

var numerical = [1,
2,
3,
4,
5,
6,
7,
8,
9,
0];

//initialises the passwordCharacter variable
var passwordCharacters;
//initialising the passwordLength variable
var passwordLength;


//sets the desired amount of password characters to passwordLength
function numberCharacters () {
  passwordLength = prompt("How many characters would you like your password to be?");
  //checks to see if the passwrod length is valid and if the user has entered a number
  if (passwordLength < 8 || passwordLength >129 || isNaN(passwordLength)) {
    passwordLength = alert("Your password must be between 8 and 128 characters.");
    numberCharacters();
  }
}

var upperCondition;
var lowerCondition;
var numericalCondition;
var specialCharCondition;


//adds the characters the user wants to include to the possible choices
function includeCharacters () {
  //initialise/reinitialised conditions as false so that we can always perform the checks (even if have to run the function more than once)
  upperCondition = false;
  lowerCondition = false;
  numericalCondition = false;
  specialCharCondition = false;

  //initialises/reinitilaises an empty array to store the password characters in
  passwordCharacters = [];
  
//adds the array of capital letters to the passwordCharacters array (if want an array within in array use .push())
  if (confirm("Would you like to include capital letters?")) {
    passwordCharacters = passwordCharacters.concat(upperCase);
      upperCondition = true;
  } else {
    passwordCharacters;
      upperCondition = false;
  }

  // adds the array of lowercase letters to the passwordCharacters array (if want an array within in array use .push())
  if (confirm("Would you like to incude lowercase letters?")) {
    passwordCharacters = passwordCharacters.concat(lowerCase);
      lowerCondition = true;
  } else {
    passwordCharacters;
      lowerCondition = false;
  }

  //adds the array of numbers to the passwordCharacters array (if want an array within in array use .push())
  if (confirm("Would you like to include numbers?")) {
    passwordCharacters = passwordCharacters.concat(numerical);
      numericalCondition = true;
  } else {
    passwordCharacters;
      numericalCondition = false;
  }

  //adds the array of specail characters to the passwordCharacters array (if want an array within in array use .push())
  if (confirm("Would you like to include specail characters?")) {
    passwordCharacters = passwordCharacters.concat(specialCharacters);
      specialCharCondition = true;
  } else {
    passwordCharacters;
      specialCharCondition = false;
  }
  //check to make sure the user picked at least one character type for the password
  while (passwordCharacters.length === 0) {
    alert("You must select at least one desired set of characters to include in your password");
    includeCharacters();
  }
}

// //genterates a random item from the array passwordCharacters and puts it into the array Password
function generatePassword() {
  //initialises/reinitilaises an empty string to store the generated password in
  var Password = [];

  for (i = 1; i <= passwordLength; i++) {
    var random = Math.floor(Math.random() * passwordCharacters.length);
    var passwordRandom = passwordCharacters[random];
    Password.push(passwordRandom);
  }
  //if the password does not contain characters from the requested character type, generate a new password
  while (!checkPassword(Password)) {
    generatePassword();
  }
  return Password;
}

// check if two arrays share common elements
function findCommonElement(array1, array2) {
  // Loop for array1
  for (let i = 0; i < array1.length; i++) {
    // Loop for array2
    for (let j = 0; j < array2.length; j++) {
      //compare all elements of array1 to all elements of array2
      if (array1[i] === array2[j]) {
        //if there is a common element...return true
        return true;
      }
    }
  }
  // no common elements found...return false
  return false;
}

//checks if you password includes the requested character types
function checkPassword (Password) {
  var passed = true;

  if (upperCondition) {
    //test if the characters you asked for are incliuded in the generatedPassword
    if(!findCommonElement(upperCase, Password)) {
      passed = false;
    }
  }
  // test if you asked for lowerCase to be included in you password
  if (lowerCondition) {
    //test if the characters you asked for are incliuded in the generatedPassword
    if (!findCommonElement(lowerCase, Password)) {
      passed = false;
    }
  }
  // test if you asked for numerical to be included in you password
  if (numericalCondition) {
    //test if the characters you asked for are incliuded in the generatedPassword
    if (!findCommonElement(numerical, Password)) {
      passed = false;
    }
  }
  // test if you asked for specialCharacters to be included in you password
  if (specialCharCondition) {
    //test if the characters you asked for are incliuded in the generatedPassword
    if (!findCommonElement(specialCharacters, Password)) {
      passed = false;
    }
  }
  return passed;
}
