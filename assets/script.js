// Assignment Code //
var generateBtn = document.querySelector("#generate");
var lowerString = "abcdefghijklmnopqrstuvwxyz";
var lowerArray = lowerString.split("");
var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperArray = upperString.split("");
var specialString = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var specialArray = specialString.split("");
console.log(upperArray)
console.log(lowerArray)
console.log(specialArray)
// set a function that executes all of the options needed to generate the password //
function askForOptions() {
    var passLength = prompt("!Choose at least 8 but no more than 120 Characters!");
    if(passLength === "" || passLength < 8 || passLength > 120) {
        alert("Invalid");
        return;
    }
    if(isNaN(passLength)) {
        alert("must select a number");
        return;
    }
    var hasLower = confirm("Password will contain lower case");
    var hasUpper = confirm("Password will contain Upper Case");
    var hasNum = confirm("Password will contain Numbers");
    var hasSpecial = confirm("Password will contain Special Characters");

    // add if statements to validate values //
    var superArray = [];

    if (hasLower === true) {
        superArray = superArray.concat(lowerArray);
    }
    if (hasUpper === true) {
        superArray = superArray.concat(upperArray);
    }
    if (hasSpecial === true) {
        superArray = superArray.concat(specialArray); 
    }
    // made a options object to store the passwordd length and the characters within this length // 
    var options = {
        passLength: passLength,
        superArray: superArray,
    }
    return options
}
function generatePassword() {
    var options = askForOptions();
    console.log(options)
    var results = [];
  // add a for loop to set the random options that fullfill the criteria //
    for (let i = 0; i < options.passLength; i++) {
       var index = Math.floor(Math.random() * options.superArray.length)
        console.log(index);
       var digit = options.superArray[index];
       results.push(digit);
    }
  return results.join("")
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);