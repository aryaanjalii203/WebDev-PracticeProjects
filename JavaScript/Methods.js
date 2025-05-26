// //Map method-create a new array with the results of some operation.
// //arr.map(callbackFnx(value,idx,array))
// let arr=[1,2,3,4,6,9,7,9];
// let newArr=arr.map(function myfn(val){
//     return (val**2);
// });
// console.log(newArr);

// arr.map((val)=>{
//     console.log(val*3);
// });

// let nwrry=arr.map((v)=>{
//     return v*4
// });
// console.log(nwrry);

// let ar=[45,2,78,9,56,5];
// let nwr=ar.map((n,inx)=>{
//     return (n*n);
// });
// console.log(nwr)

// //Filter Method...
// //creates a new array of elements that give true for a condition/filter....
// let ary=[1,2,3,4,5,9,7,9];
// let nwary=ary.filter((val)=>{
//     return val%2!==0;
// });
// console.log(nwary);

//Reduce Method...
//performs operations & reduces the array to a single value. it returnstha single value...
let array1=[1,4,5,6,7,8,2,6,84,5,78];
let out=array1.reduce((res,val)=>{
    return (res+val);
});
console.log(out);//reduce-takes two values(previous,current)-1element,2 element of array..

//largest num;
let nums=[12,23,14,1,51,16,18,78];
let output=nums.reduce((n,b)=>{
    return n>b?n:b;
})
console.log(output);

let num=[12,23,14,1,51,16,18,78];
let output1=nums.reduce((n,b)=>{
    return n>b?b:n;
})
console.log(output1);

//Practice questions...
let quesarr=[45,12,23,96,95,45,68,88,9,99,75,56];
let output2=quesarr.filter((num)=>{
    return num>90;
});
console.log(output2);

//2-
let n = prompt("Enter the value of n"); // Convert to number
let arry1 = [];
for (let i = 0; i < n; i++) {
    arry1[i] = i;
}
console.log(arry1);



