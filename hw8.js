

// 8.Գտնել զանգվածի 2-րդ մեծագույն արժեքի ինդեքսը
let Arr=[1054,2500000,47,6590,3,2,84300];

function findmax(arr){
	let tmp;
	let max =-1/0;
	for(var i=0;i<arr.length;i++){
			if(max<arr[i]){
				max=arr[i];
			} else { i++;}

	}
	
	return arr.indexOf(max);
	
}



 function del(arr){

 	delete arr[findmax(arr)];
 	console.log(arr);
 	return findmax(arr)
 	
 }


console.log(del(Arr));