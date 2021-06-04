// 9.տպել 1-100 միջակայքում եղած ֆիբոնաչիի թվերը


function fibonachi(){
	let sum=0;
	let i=0;
	let k=1;
	while(i<100){
		console.log(i)
		sum=k+i;
		i=k;k=sum;
	  }
}

fibonachi();