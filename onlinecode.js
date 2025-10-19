function findNthLargest(arr, n) {
  if (!arr || arr.length === 0 || n < 1 || n > arr.length) {
    return null; // Handle invalid inputs
  }

  // Clone the array to avoid modifying the original
  let array = [...arr];
  let len = array.length;

  // Perform n iterations to find the nth largest
  for (let i = 0; i < n; i++) {
    let maxIndex = i;
    // Find the maximum element in the unsorted portion
    for (let j = i + 1; j < len; j++) {
      if (array[j] > array[maxIndex]) {
        maxIndex = j;
      }
    }
    // Swap the found maximum to the current position
    if (maxIndex !== i) {
      let temp = array[i];
      array[i] = array[maxIndex];
      array[maxIndex] = temp;
    }
  }

  // The nth largest element is at index n-1
  return array[n - 1];
}

// Example usage
let arr = [23, 12, 45, 9, 33, 16];
console.log(findNthLargest(arr, 1)); // Output: 45 (1st largest)
console.log(findNthLargest(arr, 2)); // Output: 33 (2nd largest)
console.log(findNthLargest(arr, 3)); // Output: 23 (3rd largest)

// ChatGpt
function seclrgNumArr(arr) {
  if (arr.length < 2) return null; // need at least 2 numbers

  let max = -Infinity;
  let sec = -Infinity;

  for (let a of arr) {
    // 2 > infinity
    // when we find a new biggest number 
    if (a > max) {
      // old biggest becomes second biggest
      // update biggest number
      sec = max; //sec = 2
      max = a; //max = 2
    } 
    // if number is smaller than max but bigger than second
    else if (a > sec && a < max) {
      // update second biggest
      sec = a;
    }
  }

  return sec === -Infinity ? null : sec;
}

// console.log(seclrgNumArr([2, 4, 1, 10, 5 , 100, -1, 90]))

function CompStr(strAll) {
  if (!strAll) return "";
  let compStr = "";
  let count = 1;
// strAll[i - 1] get previous value
  for (let i = 1; i <= strAll.length; i++) {
    if (strAll[i] === strAll[i - 1]) {
      count++;
    } 
    else {
      compStr += strAll[i - 1] + count;
      count = 1;
    }
  }
  return compStr;
}

console.log(CompStr("aacabbb")); // ✅ "a2c1a1b3"
console.log(CompStr("aabbccaa")); // ✅ "a2b2c2a2"
console.log(CompStr("abc"));      // ✅ "a1b1c1"
console.log(CompStr("aa"));      // ✅ "a1b1c1"

