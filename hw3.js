// 3. գրել ֆունկցիա, որը կվերադարձնի զանգվածի մեջ փնտրվող էլեմենտի ինդեքսը



function search(arr,x){
     for(var i=0;i<=arr.length;++i){
     	if (arr[i]==x){
     		return i;
		}
	    else if (i==arr.length){
	        return `This element doesn't exist in the array`;
	    
     	}
     	else continue;
     }
}
 console.log(search([1,5,7,9],4));