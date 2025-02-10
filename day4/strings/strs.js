// Strings Methods Practice

//1. Check String Input
// Write a JavaScript function to check whether an 'input' is a string or not.
function is_string(input) {
    return typeof input == 'string';
}
console.log(is_string('w3resource')); // true
console.log(is_string([1, 2, 4, 0])); // false

// 2. Check Blank String
//Write a JavaScript function to check whether a string is blank or not.

function is_Blank(string) {
    return string.trim().length === 0
}
console.log(is_Blank('')); // true
console.log(is_Blank('abc')); // false

// 3. String to Array of Words
// Write a JavaScript function to split a string and convert it into an array of words.

function string_to_array(input){
    return input.split(" ");
}
console.log(string_to_array("Robin Singh")); // ["Robin", "Singh"]

// 4. Extract Characters
// Write a JavaScript function to extract a specified number of characters from a string.
function truncate_string(string, length) {
    return string.substring(0, length);
  }
console.log(truncate_string("Robin Singh", 4)); // "Robi"

// 5. Abbreviate Name
//Write a JavaScript function to convert a string into abbreviated form.
function abbrev_name(name) {
    const parts = name.split(" ");
       return parts[0] + " " + parts[parts.length - 1].charAt(0) + ".";
    }
  
console.log(abbrev_name("Robin Singh")); // "Robin S."

6. // Hide Email Address
// Write a JavaScript function that hides email addresses to prevent unauthorized access.

function protect_email(email) {
    const [user, domain] = email.split("@");
    return (user.length <= 3 ? user : user.slice(0, 3) + "...") + "@" + domain;
  }
console.log(protect_email("robin_singh@example.com")); // "robin...@example.com"

//7. Parameterize String
// Write a JavaScript function to parameterize a string.
function string_parameterize(str) {
    return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^[-]+|[-]+$/g, "");
  }
console.log(string_parameterize("Robin Singh from USA.")); // "robin-singh-from-usa"

// 8. Capitalize First Letter
// Write a JavaScript function to capitalize the first letter of a string.

console.log(capitalize('js string exercises')); // "Js string exercises"
// 9. Capitalize Each Word
function capitalize_Words(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}
console.log(capitalize_Words('js string exercises')); // "Js String Exercises"

// 10. Swap Case
function swapcase(str) {
  return str.split('').map(char => 
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
  ).join('');
}
console.log(swapcase('AaBbc')); // "aAbBC"

// 11. Camelize String
function camelize(str) {
  return str.replace(/\s(.)/g, (_, char) => char.toUpperCase()).replace(/\s/g, '');
}
console.log(camelize("JavaScript Exercises")); // "JavaScriptExercises"

// 12. Uncamelize String
function uncamelize(str, separator = ' ') {
  return str.replace(/([a-z])([A-Z])/g, `$1${separator}$2`).toLowerCase();
}
console.log(uncamelize('helloWorld')); // "hello world"
console.log(uncamelize('helloWorld','-')); // "hello-world"

// 13. Repeat String
function repeat(str, n) {
  return str.repeat(n);
}
console.log(repeat('Ha!', 3)); // "Ha!Ha!Ha!"

// 14. Insert in String
function insert(mainString, insString, pos) {
  return mainString.slice(0, pos) + insString + mainString.slice(pos);
}
console.log(insert('We are doing some exercises.', 'JavaScript ', 18));
// "We are doing some JavaScript exercises."

// 15. Humanize Format
function humanize_format(num) {
  if (num % 100 >= 11 && num % 100 <= 13) return num + "th";
  switch (num % 10) {
      case 1: return num + "st";
      case 2: return num + "nd";
      case 3: return num + "rd";
      default: return num + "th";
  }
}
console.log(humanize_format(301)); // "301st"

// 16. Truncate String with Ellipsis
function text_truncate(str, length, ending = "...") {
  return str.length > length ? str.slice(0, length) + ending : str;
}
console.log(text_truncate('We are doing JS string exercises.', 15, '!!'));
// "We are doing !!"

// 17. Chop String into Chunks
function string_chop(str, size) {
  let result = [];
  for (let i = 0; i < str.length; i += size) {
      result.push(str.slice(i, i + size));
  }
  return result;
}
console.log(string_chop('w3resource', 3)); // ["w3r", "eso", "urc", "e"]

// 18. Count Substring Occurrences
function count(str, subStr) {
  let regex = new RegExp(subStr, "gi");
  return (str.match(regex) || []).length;
}
console.log(count("The quick brown fox jumps over the lazy dog", 'the')); // 2

// 19. Reverse Binary Representation
function reverse_binary(num) {
  return parseInt(num.toString(2).split('').reverse().join(''), 2);
}
console.log(reverse_binary(100)); // 19

// 20. Pad String to Length
function formatted_string(template, num, alignment) {
  let strNum = num.toString();
  return alignment === 'l' 
      ? template.slice(0, -strNum.length) + strNum 
      : strNum + template.slice(strNum.length);
}
console.log(formatted_string('0000', 123, 'l')); // "0123"