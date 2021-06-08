let arr=[1, 7 ,9 ,44 ,2];

function indexOf(arr,elem) {
	for(let i = 0; i < arr.length; ++i) {
		if(arr[i]==elem) {
			return i;
		}

	}
}

console.log(indexOf(arr,44));