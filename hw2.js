//2. գրել ֆունկցիա, որը կվերադարձնի զանգվածը սորտավորված տեսքով

function sort(arr){
	let tmp;
	for(let i=0;i<arr.length-1;i++){
		for(let j=i+1; j<arr.length;j++){
			if(arr[i]<arr[j]){
				tmp=arr[i];
				arr[i]=arr[j];
				arr[j]=tmp;
			} else { continue;}
			
		} 
	}
	return arr;
}

console.log(sort([1054,25,1,6590,3,843]));