/*You need to write a function, that returns the first non-repeated character in the given string.

If all the characters are unique, return the first character of the string.
If there is no unique character, return null in JS or Java, None in Python, '\0' in C.

You can assume, that the input string has always non-zero length.

Examples
"test"   returns "e"
"teeter" returns "r"
"trend"  returns "t" (all the characters are unique)
"aabbcc" returns null (all the characters are repeated)
*/



function firstNonRepeated(ch) {
    const strArr = ch.split(''); 
    const charCount = {}; 
  
   
    strArr.forEach(char => {
      charCount[char] = (charCount[char] || 0) + 1;
    });
  
   
    for (let char of strArr) {
      if (charCount[char] === 1) {
        return char;
      }
    }
  
 
    return null;
  }
