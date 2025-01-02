/*
To find the volume (centimeters cubed) of a cuboid you use the formula:

volume = Length * Width * Height

But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

It's up to you to find out whether the cuboid has equal sides (= is a cube).

Return true if the cuboid could have equal sides, return false otherwise.

Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

Note: side will be an integer
*/

function cubeChecker(volume, side){
    if (volume <= 0 || side <= 0) {
         return false; 
     }
     return side ** 3 === volume; 
 
 };

 /*
In this kata, you have an integer array which was ordered by ascending except one number.

For Example: [1,2,3,4,17,5,6,7,8]
For Example: [19,27,33,34,112,578,116,170,800]
You need to figure out the first breaker. Breaker is the item, when removed from sequence, sequence becomes ordered by ascending.

For Example: [1,2,3,4,17,5,6,7,8] => 17 is the only breaker.

For Example: [19,27,33,34,112,578,116,170,800] => 578 is the only breaker.

For Example: [105, 110, 111, 112, 114, 113, 115] => 114 and 113 are breakers. 114 is the first breaker.
    When removed 114, sequence becomes ordered by ascending => [105, 110, 111, 112, 113, 115]
    When removed 113, sequence becomes ordered by ascending => [105, 110, 111, 112, 114, 115]

For Example: [1, 0, 2] => 1 and 0 are the breakers. 1 is the first breaker.
    When removed 1, sequence becomes ordered by ascending => [0, 2]
    When removed 0, sequence becomes ordered by ascending => [1, 2]
    
For Example: [1, 2, 0, 3, 4] => 0 is the only breaker.
    When removed 0, sequence becomes ordered by ascending. => [1, 2, 3, 4]
    
TASK:
Write a function that returns the first breaker.

Notes:

Input array does not contain any duplicate element.
 */

function orderBreaker(input) {
    
    const isSorted = (array) => {
      for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) return false;
      }
      return true;
    };
  
    
    for (let i = 0; i < input.length; i++) {
      
      const modifiedArray = input.slice(0, i).concat(input.slice(i + 1));
  
      
      if (isSorted(modifiedArray)) {
        return input[i]; 
      }
    }
  
    return null; 
  }

  /*
  Description:
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
  */

function descendingOrder(n) {
  
    const digits = n.toString().split('');
    
    
    const sortedDigits = digits.sort((a, b) => b - a);
    
    
    return parseInt(sortedDigits.join(''), 10);
  }


  /*
There is a bus moving in the city which takes and drops some people at each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.
  */

var number = function(busStops) {
   
    return busStops.reduce((peopleOnBus, [on, off]) => peopleOnBus + on - off, 0);
  };
  
  
  