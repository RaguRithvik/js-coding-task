//ctrl+b - prettier - Reindent
//01.Find the second largest number in an array-run 

//My logic without refer
function seclrgNumArr(arr){
	let max = 0
	for(a of arr){
		if(max < Math.max(a)) max = Math.max(a);
	}
	let sec = 0
	for(a of arr){
		//2<100 && 0< 2 -> 2
		//4<100 && 2 < 4 -> 4
		//1<100 && 4 < 1 -> false
		if(a < max && sec < a) sec = a
	}
console.log(max, sec)
}
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

// 02 Kth Largest Element in an Array
function nthLargest(arr, n) {
  let sorted = [...arr].sort((a, b) => b - a);
  return sorted[n - 1];
}
//decenting order next postion values simple
// console.log(nthLargest([2, 4, 10, 5], 3)); // 4 (3rd largest)


