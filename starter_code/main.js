// Question 1
function maxOfTwoNumbers(a,b) {
    if (a < b) {
      return b;
    } else if (a > b) {
      return a;
    }
}
  
// Question 2
  function maxOfThree(a,b,c) {
    if (a> b && b > c) {
      return a;
    }
  
    if (b > a && b > c) {
      return b;
    }
  
    if (c > a && c > b) {
      return c;
    }
}
  
// Question 3
   function isCharacterAVowel(v) {
    var vowels = ['a','e','i','o','u'];
    if (vowels.indexOf(v) !== -1) {
      return true;
    } 
    return false;
  }
  
// Question 4
  function sumArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
}
  
  
// Question 4
  function multiplyArray(arr) {
  var product = arr[0];
  for (var i = 1; i < arr.length; i++) {
  product *= arr[i];
  }
  return product;
}
  
  
// Question 5
  var numberOfArguments = function(){
    return arguments.length
  }
  
  
  
// Question 6
  var reverseString = function (str){
    var arr = str.split('');
    var revArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
      revArr.push(arr[i]);
    }
    return revArr.join('');
  };
  
  
// Question 7
  function findLongestWord (string) {
    longest = 0;
    for (var i = 0; i < string.length; i++) {
      if (string[i].length > longest) {
        longest = string[i].length;
      }
    }
    return longest;
  }
  
  
// Question 8
  function filterLongWords (arr,num) {
    newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if(arr[i].length > num){
        newArr.push(arr[i]);
      }
    }
    return newArr;
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

