// Assignment Code
var uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lc =  "abcdefghijklmnopqrstuvwxyz"
var sc = "~!@#$%^&*()_+=`[{\|;:',<.>/?}]"
var num = "1234567890"
var generateBtn = document.querySelector("#generate");
console.log(uc, lc, sc, num)
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//create Generate Password fn
function generatePassword(){


//character length prompt
var passwordLength = prompt("Pick Your Password's Length, (8-128 Characters)");
console.log(passwordLength)

//8<password length<128

if (passwordLength < 8 || passwordLength >128 ){
  alert("Password length has to be 8 characters minimum, 128 characters maximum" );
  var passwordLength = prompt("Pick Your Password's Length, (8-128 Characters)");
  return null;
}
else{
//confirm, LC?
var lcc = confirm ("Do you want to include Lowercase characters?");
console.log(lcc)

//confirm, UC?
var ucc = confirm ("Do you want to include Uppercase characters?");
console.log(ucc)
//confirm, Special characters?
var scc = confirm ("Do you want to include Special characters?");
console.log(scc)
//confirm, numbers?
var numc = confirm ("Do you want to include Numerical characters?");
console.log(numc)
var passwordToken =""
if(lcc){
passwordToken+=lc;
console.log(passwordToken)
}
if(ucc){
  passwordToken+=uc;
  console.log(passwordToken)
}
if(scc){
    passwordToken+=sc;
    console.log(passwordToken)
    }
if(numc){
      passwordToken+=num;
      console.log(passwordToken)
}
var userPassword = ""
for (let i = 0; i <passwordLength; i++) {
userPassword += passwordToken [Math.floor(Math.random() * passwordToken.length)];
  console.log(userPassword)
}
return userPassword;
}

// Add event listener to generate button
}
generateBtn.addEventListener("click", writePassword);
