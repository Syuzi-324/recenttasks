

// 8.Գտնել զանգվածի 2-րդ մեծագույն արժեքի ինդեքսը
// let arr=[105400,2500,47,6,3,2,843];


// let i = arr.indexOf(Math.max(...arr));

// arr[i] = 0;

// console.log(arr)

// let k = arr.indexOf(Math.max(...arr));

// console.log (k);


function secondmax(arr) {
	let max1, max2;

	if(arr[0] > arr[1]){
		max1 = arr[0];
		max2 = arr[1];
	} else {	
		max1 = arr[1];
		max2 = arr[0];
		}


	for(let i = 2; i < arr.length; ++i) {

		if(max1 < arr[i] && max2 < arr[i]) {
			max2 = max1;
			max1 = arr[i];
			
		} else if(max1 > arr[i] && max2 < arr[i]) {
			max2 = arr[i];
		} else continue; 
	}
	console.log(arr)
	return arr.indexOf(max2);
}

console.log(secondmax([10,25,47,60,3,2,843]))