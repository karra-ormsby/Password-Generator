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

//sets the desired amount of passworkd characters to passwordLength
var passwordLength = prompt("How many characters would you like your password to be?");
if (passwordLength < 8 && passwordLength >129) {
  passwordLength = prompt("Your password must be between 8 and 128 characters. How many characters would you like your password to be?");
  var specCharCon = true
}

//adds the array of capital letters to the passwordCharacters array (if want an array within in array use .push())
if (confirm("Would you like to include capital letters?")) {
  passwordCharacters = passwordCharacters.concat(upperCase);
  console.log(passwordCharacters);
} else {
  passwordCharacters;
  console.log(passwordCharacters);
}

// adds the array of lowercase letters to the passwordCharacters array (if want an array within in array use .push())
if (confirm("Would you like to incude lowercase letters?")) {
  passwordCharacters = passwordCharacters.concat(lowerCase);
  console.log(passwordCharacters);
} else {
  passwordCharacters;
  console.log(passwordCharacters);
}

//adds the array of numbers to the passwordCharacters array (if want an array within in array use .push())
if (confirm("Would you like to include numbers?")) {
  passwordCharacters = passwordCharacters.concat(numerical);
  console.log(passwordCharacters);
} else {
  passwordCharacters;
  console.log(passwordCharacters);
}

//adds the array of specail characters to the passwordCharacters array (if want an array within in array use .push())
if (confirm("Would you like to include specail characters?")) {
  passwordCharacters = passwordCharacters.concat(specialCharacters);
  console.log(passwordCharacters);
} else {
  passwordCharacters;
  console.log(passwordCharacters);
}

//need to use passwordLength to select that many characters at random from passwordCharacters
//how to gurantee that you get at least one of each character type desired?

//genterate a random item from the array passwordCharacters
for (i = 1; i <= passwordLength; i++) {
  var password = [];
  var random = Math.floor(Math.random() * passwordCharacters.length);
  password = random.push(password)
  console.log(random, passwordCharacters[random]);
}

// //make this a function and then return the result which should be an array of the passwordCharacters

// var obj = {
//   name: "Karra",
//   age: 34,
//   bootcampStudent: true
// }

// console.log(passwordLength);

// //picks a random key from an object
// for(i=1; i <= passwordLength; i++){
//   function getRandomProperty(obj) {
//     var keys = Object.keys(obj);
//     var randomKey = keys[Math.floor(Math.random() * keys.length)];

//     return randomKey;
//   }
  
// }

// console.log(getRandomProperty(obj));


// for (i = 1; i <= passwordLength; i++) {
//   var random = Math.floor(Math.random() * passwordCharacters.length);
//   console.log(random, passwordCharacters[random]);
// }


// if (genteratedPassword.include(specicalCharacters)){
//   returngP
// } else {
//   password()
// }

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



//make passwordCharacters and array of arrays .push
for (i=0; i<passwordCharacters.length; i++){
  if (password.include(passwordCharacters[i]))
}