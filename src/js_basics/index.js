
export const isNumberEven = (i) => {
  // i will be an integer.
  // Return true if it's even, and false if it isn't.

    let iseven=false;
    if((i===0)||(i%2===0))
    {
      iseven=true;
    }
    else   {
      iseven=false;
    }
    return(iseven);
};

export const getFileExtension = (str) => {
  // str will be a string, but it may not have a file extension.
  // Return the file extension (with no period) if it has one, otherwise false
let ext="";
let tmpStr="";
  tmpStr=str.split('.');

  if(tmpStr.length<2){
    return false;
  }
  ext=tmpStr.pop();
  return ext;
};

export const longestString = (arr) => {
  // arr will be an array.
  // Return the longest string in the array
};

export const reverseString = (str) => {
  // str will be an string
  // Return a new string who's characters are in the opposite order to str's.
};

export const isPalindrome = (str) => {
  // str will be an string
  // Return true if it is a palindrome and false otherwise.
  // It should be case insensitive and not consider space or punctuation.
};

export const nestedSum = (arr) => {
  // arr will be an array, containing integers, strings and/or arrays like itself
  // Return the sum all the numbers you find, anywhere in the nest of arrays.
};
