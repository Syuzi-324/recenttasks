
let arr = [7, 9, 42, 1, 55];

function findIndex(arr, action, elem) {

	for(let i = 0; i < arr.length; ++i) {
		if(action=='>' && arr[i] > elem) {
			return i;
		}
			else if (action=='<' && arr[i] < elem) {
				return i;
			}
	}
	

	return -1;
}

console.log(findIndex(arr, '<', 10));