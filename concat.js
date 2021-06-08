let arr = [1, 4 , 7, 6];
let arr1 = [2, 3, 5];

function concat(arr, arr1) {
	let newArr = [];
	for(let i = 0; i < arr.length; ++i) {
		newArr.push(arr[i]);
	}
	for(let j = 0; j < arr1.length; ++j) {
		newArr.push(arr1[j]);
	}

	return newArr;
}


console.log(concat(arr, arr1));