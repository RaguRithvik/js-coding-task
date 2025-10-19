//ctrl+b - prettier - Reindent csp
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
}
// 02 Kth Largest Element in an Array - Refer
function nthLargest(arr, n) {
	const sortArr = [...arr]
	const l = sortArr.length;
	for(i=0; i<n;i++){
		//find max all index
		let max = i // fist max 0 th index 
		//find max length
		for(let j =i+1; j < l; j++){
			//loop second index
			//1 > 0-> [4] > [2] -> 1
			if(sortArr[j] > sortArr[max]){
				max= j
			}
		}
		// console.log(max, "max")
		//swap
		if(i!==max){ // current value is max no swap
			let temp = sortArr[i];
			sortArr[i] = sortArr[max];
			sortArr[max] = temp
		}
	}
}
//decenting order next postion values simple
// console.log(nthLargest([2, 4, 10, 5], 3)); // 4 (3rd largest)

// 03.Compress a string
function CompStr(strAll) {
	let compStr = strAll[0];
	let count = 1;
	for (var i = 1; i < strAll.length; i++) {
		let str = strAll[i]
		if(compStr.at(-1) == strAll[i]){
			count++;
		}
		else{
			compStr += count
			compStr += str
			count = 1
		}
	}
	return compStr+count
}
console.log(CompStr("aacabbb"))


