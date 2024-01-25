
//Create DOM elements
const generatePassword = document.getElementById('generate-passwords');

const firstPassword = document.getElementById('first-password');
const secondPassword = document.getElementById('second-password');

//Letters Array for Passwords
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let selectedCharacter

//Goal is to create two 15 letter passwords and they don't equal each other
function createPassword(){
    let password = "";
    for(let i=0; i < 15; i++){
        password += characters[Math.floor(Math.random() * characters.length-1)];
    }

    return password;

}

function generatePasswords(){
    firstPassword.innerHTML = createPassword();
    secondPassword.innerHTML = createPassword();
}

console.log(characters.length);

//Listener events
generatePassword.addEventListener("click", generatePasswords);