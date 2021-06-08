let arr=[1, 7 ,9 ,44 ,2];

function include(arr,elem) {
	for(let i = 0; i < arr.length; ++i) {
		if(arr[i]==elem) {
			return true;
		} 
	}
	return false;
}

console.log(include(arr,440));