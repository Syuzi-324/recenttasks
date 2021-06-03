//1.

let arr=[[1,2,3],[4,5,6],[7,8,9]];
console.log(arr[0][0]+arr[1][1]+arr[2][2]+arr[0][2]+arr[1][1]+arr[2][0]);

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

// 3. գրել ֆունկցիա, որը կվերադարձնի զանգվածի մեջ փնտրվող էլեմենտի ինդեքսը



// function search(arr,x){
//      for(var i=0;i<=arr.length;++i){
//      	if (arr[i]==x){
//      		return i;
// 		}
// 	    else if (i==arr.length){
// 	        return `This element doesn't exist in the array`;
	    
//      	}
//      	else continue;
//      }
// }
//  console.log(search([1,5,7,9],4));



//4, swap / ունենք 2 էլեմենտ, տեղերով փոխել առանց երրորդ փոփոխականի
 
 // function swap(x,y){
 //    x=x+y;
 //    y=x-y;
 //    x=x-y;
 //    console.log(x);
 //    console.log(y);
 // }
 // swap(12,4);


 // 8.Գտնել զանգվածի 2-րդ մեծագույն արժեքի ինդեքսը


 function findmax(arr){

 	sort(arr);
 	
 	return arr[5];
 }


console.log(findmax([1054,25,47,659,3,2,843]));

//////////////////////////////////////////////

// 9.տպել 1-100 միջակայքում եղած ֆիբոնաչիի թվերը


// function fibonachi(){
// 	let sum=0;
// 	let i=0;
// 	let k=1;
// 	while(i<100){
// 		console.log(i)
// 		sum=k+i;
// 		i=k;k=sum;
// 	  }
// }

// fibonachi();

