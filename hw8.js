

// 8.Գտնել զանգվածի 2-րդ մեծագույն արժեքի ինդեքսը
let arr=[105400,2500,47,6,3,2,843];


let i = arr.indexOf(Math.max(...arr));

arr[i] = 0;

console.log(arr)

let k = arr.indexOf(Math.max(...arr));

console.log (k);


