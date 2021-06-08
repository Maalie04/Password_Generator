// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerString = "abcdefghijklmnopqrstuvwxyz";
var lowerArray = lowerString.split("");
var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperArray = upperString.split("")
console.log(upperArray)
console.log(lowerArray)

function askForOptions() {
    var passLength = prompt("how many characters would you like");
    if(passLength === "") {
        alert("Invalid");
        return;
    }
    if(isNaN(passLength)) {
        alert("must select a number");
        return;
    }
    var hasLower = confirm("lower?");

    var hasUpper = confirm("Upper?");
    var hasNum = confirm("Num?");
    var hasSpecial = confirm("Special?");
    // add if statements to validate values //
    var superArray = [];

    if (hasLower === true) {
        superArray = superArray.concat(lowerArray);
    }
    if (hasUpper === true) {
        superArray = superArray.concat(upperArray);
    }

    var options = {
        passLength: passLength,
        superArray: superArray
    }
    return options
}
function generatePassword() {
    var options = askForOptions();
    console.log(options)
    var results = [];

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