// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
var Kalvian1 = "Akshat"
// 1.2 Print `"The driver's name is XXXX"`.
console.log("The driver's name is "+Kalvian1)
// 1.3 Create a variable `Kalvian-2` with the navigator's name.
var Kalvian2 = "Yashas"
// 1.4 Print `"The navigator's name is YYYY"`.
console.log("The navigator's name is "+Kalvian2)
// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if (Kalvian1.length > Kalvian2.length) {
  console.log(`The driver has the longest name, it has ${Kalvian1.length} characters.`);
} else if (Kalvian2.length > Kalvian1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${Kalvian2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${Kalvian1.length} characters!`);
}
// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5. 
function Vowels(name) {
  const vowels = "AEIOUaeiou";
  let vowelString = "";
  let Indices = "";

  for (let i = 0; i < name.length; i++) {
    if (vowels.includes(name[i])) {
      vowelString += name[i] + " ";
      Indices += (i + 1) + " ";
    }
  }

  if (vowelString === "") {
    console.log("No vowels");
  } else {
    console.log(`${name} ${vowelString}${Indices}`);
  }
}

Vowels(Kalvian1);
Vowels(Kalvian2);

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

function countCaseCharacters(text) {
  let upperCase = 0;
  let lowerCase = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char[i] >= 'A' && char[i] <= 'Z') {
        upperCase++;
    }else if (char >= 'a' && char <= 'z') {
        lowerCase++;
    }   
} console.log(upperCase);
console.log(lowerCase);
}
        
countCaseCharacters(Kalvian1);
countCaseCharacters(Kalvian2);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"
function Caps(name) {
  let capitalized = "";
  for (let i = 0; i < name.length; i++) {
    capitalized += name[i].toUpperCase() + " ";
  }
  console.log(capitalized.trim());
}
Caps(Kalvian1)
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"
function reversePrint(name) {
  let reversed = "";
  for (let i = name.length - 1; i >= 0; i--) {
    reversed += name[i];
  }
  console.log(reversed);
}

reversePrint(Kalvian2);
// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"
function namesMerge(x, y) {
  console.log(`${x} ${y}`);
  console.log(`${y} ${x}`);
}
namesMerge(Kalvian1, Kalvian2);
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
if (Kalvian1 < Kalvian2) {
  console.log("The driver's name goes first.");
} else if (Kalvian2 < Kalvian1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
var loremText =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan eleifend scelerisque. Duis blandit felis a lectus sagittis, non venenatis mauris rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque dictum pretium pulvinar. Mauris a tempus mi, a commodo leo. Nunc ac justo dapibus, tempor nunc vitae, cursus tortor. Ut diam mauris, dictum id posuere dictum, ultrices ut nulla. Aliquam finibus congue nibh id tempor. Integer a mollis libero, id vestibulum lacus. Proin id nisi nisi. Pellentesque vitae vehicula purus, at ultricies quam.

Ut egestas, elit a condimentum mattis, enim augue efficitur nisl, sit amet tristique leo nisl in turpis. Quisque at lacinia turpis. Nullam non iaculis augue. Praesent a felis a tortor tincidunt tristique a ac risus. Pellentesque varius tellus nec lacus mattis volutpat. Nulla non risus ut massa sagittis venenatis. Pellentesque eget rutrum nisl. Nunc vel lacinia lectus. In hac habitasse platea dictumst. Etiam viverra vel lorem id pellentesque. Aliquam finibus posuere diam eu bibendum.

Vivamus at dictum nunc, eu vulputate risus. Pellentesque congue nulla vitae ultrices mollis. Vestibulum aliquet enim sed risus commodo dictum. Mauris non nisl rutrum, tempor sapien sit amet, aliquam nunc. Nulla ullamcorper justo quam, quis dignissim massa accumsan et. Vestibulum et nunc nulla. Sed et bibendum est, id posuere risus.`;
//splitting and counting number of words
var words = loremText.split(/\s+/);
console.log(words)
const wordCount = words.length;
console.log(wordCount);
//occurence of "et"
const etCount = (loremText.match(/\bet\b/gi)).length;
console.log(etCount)
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".
function palindromeCheck(givenString){
  let newString = givenString.toLowerCase();
  newString = newString.split(' ').filter(function(n) { return n != '' })
  let mainString = "";
  for(let index=0; index<givenString.length; index++){
    if(givenString[index]!==" " && givenString[index]!==","){
      mainString+=givenString[index]
    }
  }
  mainString = mainString.toLowerCase()
  const len = mainString.length;
  for (let i = 0; i < len / 2; i++) {
    if (mainString[i] !== mainString[len - 1 - i]) {
      return 'It is not a palindrome';
    }
  }
    return 'It is a palindrome';
}
console.log(palindromeCheck("A man, a plan, a canal, Panama"))
console.log(palindromeCheck("play football"))
// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
