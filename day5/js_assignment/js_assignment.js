// 1. Check if a String is a Palindrome
// Write a function to determine if a given string is a palindrome. A palindrome is a string that reads the same forward and backward (ignoring spaces, punctuation, and case).

function isPalindrome(str) {
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
}

//Test cases
console.log(isPalindrome('A man, a plan, a canal, Panama')); //true
console.log(isPalindrome('Was it a car or a cat I saw?')); //true
console.log(isPalindrome('Hello World!')); //false


//2. Reverse a String
// Write a function to reverse a given string.

function reverseString(str) {
    let inputString = str.split(' ').reverse().join(' ');
    return inputString;
}
console.log(reverseString("Write a function to reverse a given string"))


// 3. Find the Longest Palindromic Substring
// Write a function to find the longest palindromic substring in a given string.

function longestPalindromeSubstring(s) {
    if (!s) return "";

    let longest = "";

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let sub = s.substring(i, j + 1);
            if (isPalindrome(sub) && sub.length > longest.length) {
                longest = sub;
            }
        }
    }
    return longest;
}

console.log(longestPalindromeSubstring("babad")); // "bab" or "aba"
console.log(longestPalindromeSubstring("cbbd")); // "bb"

// 4. Check if Two Strings are Anagrams
// Write a function to check if two given strings are anagrams of each other. Two strings are anagrams if they contain the same characters in the same frequency but in different orders.
function areAnagrams(str1, str2){
    let cleanStr = s => s.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
    return cleanStr(str1) === cleanStr(str2);
}
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false

// 5. Remove Duplicates from a String
//Write a function to remove duplicate characters from a string while preserving the order of the first appearance of each character.

function removeDuplicatesLoop(str) {
    let result = "";
    for (let char of str) {
        if (!result.includes(char)) {
            result += char;
        }
    }
    return result;
}

console.log(removeDuplicatesLoop("programming")); // programin
console.log(removeDuplicatesLoop("hello world")); // "ban"
console.log(removeDuplicatesLoop("aaaaa")); // "helo"
console.log(removeDuplicatesLoop("abcd")); // "abc"
console.log(removeDuplicatesLoop("aabbcc")); // "abc"


//6. Count Palindromes in a String
// Write a function to count how many distinct palindromes are in a given string. A palindrome is considered distinct based on its start and end position in the string.

function countPalindromes(s) {
    let count = 0;
    let seen = new Set();
    
    function isPalindrome(sub) {
        return sub === sub.split('').reverse().join('');
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let sub = s.substring(i, j);
            if (isPalindrome(sub) && !seen.has(sub)) {
                seen.add(sub); 
                count++;
            }
        }
    }
    return count;
}

console.log(countPalindromes("ababa")); // 6
console.log(countPalindromes("aaa")); // 6
console.log(countPalindromes("racecar")); // 10

//7.
function longestCommonPrefix(arr) {
    if (!arr.length) return "";
    
    arr.sort();
    
    let first = arr[0], last = arr[arr.length - 1], i = 0;
    
    while (i < first.length && first[i] === last[i]) i++;
    
    return first.substring(0, i);
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"])); // "inter"

// 8. 

function isCaseInsensitivePalindrome(str) {
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
}

console.log(isCaseInsensitivePalindrome("RaceCar")); // true
console.log(isCaseInsensitivePalindrome("No lemon, no melon")); // true
console.log(isCaseInsensitivePalindrome("Hello")); // false
console.log(isCaseInsensitivePalindrome("A man, a plan, a canal, Panama")); // true


