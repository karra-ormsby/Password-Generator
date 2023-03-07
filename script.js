// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

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

//initialises an empty array to store the password characters in
var passwordCharacters = [];

numberCharacters();

//sets the desired amount of password characters to passwordLength
function numberCharacters () {
  var passwordLength = prompt("How many characters would you like your password to be?");
  //checks to see if the passwrod length is valid
  if (passwordLength < 8 || passwordLength >129) {
    passwordLength = alert("Your password must be between 8 and 128 characters.");
    numberCharacters();
  }
  return passwordLength;
  //why is passwordLength not defined it i returned it?
}

console.log(passwordLength);


includeCharacters();

function includeCharacters () {
//adds the array of capital letters to the passwordCharacters array (if want an array within in array use .push())
  if (confirm("Would you like to include capital letters?")) {
    passwordCharacters = passwordCharacters.concat(upperCase);
    var upperCondition = true;
  } else {
    passwordCharacters;
    var upperCondition = false;
  }

  // adds the array of lowercase letters to the passwordCharacters array (if want an array within in array use .push())
  if (confirm("Would you like to incude lowercase letters?")) {
    passwordCharacters = passwordCharacters.concat(lowerCase);
    var lowerCondition = true;
  } else {
    passwordCharacters;
    var lowerCondition = false;
  }

  //adds the array of numbers to the passwordCharacters array (if want an array within in array use .push())
  if (confirm("Would you like to include numbers?")) {
    passwordCharacters = passwordCharacters.concat(numerical);
    var numericalCondition = true;
  } else {
    passwordCharacters;
    var numericalCondition = false;
  }

  //adds the array of specail characters to the passwordCharacters array (if want an array within in array use .push())
  if (confirm("Would you like to include specail characters?")) {
    passwordCharacters = passwordCharacters.concat(specialCharacters);
    var specialCharCondition = true;
  } else {
    passwordCharacters;
    var specialCharCondition = false;
  }
}
//check to make sure the user picked some characers for the password
while (passwordCharacters.length===0) {
  alert("You must select at least one desired set of characters to include in your password");
  includeCharacters();
}

//passwrod generating function
// //genterate a random item from the array passwordCharacters
var Password = [];

generatePassword();

// function generatePassword() {
// for (i = 1; i <= 8; i++) {
//   var random = Math.floor(Math.random() * passwordCharacters.length);
//   var passwordRandom = passwordCharacters[random];
//   console.log(passwordRandom);
//   Password = Password.push(passwordRandom);
//   console.log(Password);
  //need to add passwordChar to the array passwordGen
  // console.log(random, passwordCharacters[random]);
// }
// }
// arrayA=[];
// arrayB=[2,3,4,5];
// arrayC = arrayB.push(arrayA);
// console.log("Array C = " + arrayC);


// check if array1 and array 2 share common elements
// function findCommonElement(array1, array2) {

//   // Loop for array1
//   for (let i = 0; i < array1.length; i++) {

//     // Loop for array2
//     for (let j = 0; j < array2.length; j++) {

//       //compare all elements of array1 to all elements of array2
//       if (array1[i] === array2[j]) {
//         //if there is a common element return true
//         return true;
//       }
//     }
//   }
//   // no common elements found...return false
//   return false;
// }
//to test if the generated passsword contains the characters you asked for
//test if you asked for upperCase to be included in you password
// if (upperCondition) {
//   //test if the characters you asked for are incliuded in the generatedPassword
//   if(findCommonElement(upperCase, pswChar)) {
//     //leave the loop
//     //if they are not included generate another password
//   } else {
//     generatePassword();
//   }
// } else {
//   //do nothing
// }
// // test if you asked for lowerCase to be included in you password
// if (lowerCondition) {
//   //test if the characters you asked for are incliuded in the generatedPassword
//   if (findCommonElement(lowerCase, pswChar)) {
//     //leave the loop
//     //if they are not included generate another password
//   } else {
//     generatePassword();
//   }
// } else {
//   //do nothing
// }
// // test if you asked for numerical to be included in you password
// if (numericalCondition) {
//   //test if the characters you asked for are incliuded in the generatedPassword
//   if (findCommonElement(numerical, pswChar)) {
//     //leave the loop
//     //if they are not included generate another password
//   } else {
//     generatePassword();
//   }
// } else {
//   //do nothing
// }
// // test if you asked for specialCharacters to be included in you password
// if (specialCharCondition) {
//   //test if the characters you asked for are incliuded in the generatedPassword
//   if (findCommonElement(specialCharacters, pswChar)) {
//     //leave the loop
//     //if they are not included generate another password
//   } else {
//     generatePassword();
//   }
// } else {
//   //do nothing
// }


// var pswd = pswChar.toString();
// console.log(pswd);

// conditions = []
// while (true) {
//   password=generatePassword();

//   if(specCharCon) {
//      if (passwrod.inlcude(specialCharacter){
//      }
//   }

//   if (upperCon && passwrod.inlcude(upperCase){
//   } else {
//     continue;
//   }

//   if (lowerCon && passwrod.inlcude(lowerCase){
//   } else {
//     continue;
//   }

//   if (numbrCon && passwrod.inlcude(numerical){
//   } else {
//     continue;
//   }

//   break password; //check if break is in js
// }


