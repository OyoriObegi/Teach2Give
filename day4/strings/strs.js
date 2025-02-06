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

// Hide Email Address
// Write a JavaScript function that hides email addresses to prevent unauthorized access.

function protect_email(email) {
    const [user, domain] = email.split("@");
    return (user.length <= 3 ? user : user.slice(0, 3) + "...") + "@" + domain;
  }
console.log(protect_email("robin_singh@example.com")); // "robin...@example.com"

//6. Parameterize String
// Write a JavaScript function to parameterize a string.
function string_parameterize(str) {
    return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^[-]+|[-]+$/g, "");
  }
console.log(string_parameterize("Robin Singh from USA.")); // "robin-singh-from-usa"

// Capitalize First Letter
// Write a JavaScript function to capitalize the first letter of a string.

console.log(capitalize('js string exercises')); // "Js string exercises"