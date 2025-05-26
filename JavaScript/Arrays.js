// //Linear Collection for storing the multiple variables(values)...
// //Array is not a type it's actually a type of object...
// let marks=[65,48,99,45,76,82,89];
// console.log(marks);
// console.log(marks.length);
// let heroes=["Akshay", "Salman","Hritik","SRK","Amir","Varun"];
// console.log(`${heroes}`);

// //chnging index's value
// marks[0]=55;
// console.log(marks); 

// //Important:String are immutable in js we cannot chng 
// let str="Hello, This is Anjali arya";
// str[1]='b';
// console.log(str);//it neither print hbllo nor gives u error it goes with the first decalration...

// // we can iterate on strings, arrays, objects..
// //for arrays we can use for, for in, for of loops..
// for(let i=0;i<marks.length;i++){
//     console.log(marks[i]);
// }
// //remember way of writing console.lof(heroes[h])
// for(let hero in heroes){
//     console.log(heroes[hero]);
// }

// //remember way of writing console.lof(h)
// for(let h of heroes){
//     console.log(h);
// }
// //practice questions...
// ary=[45,58,89,56,26,78,35,99]
// sum=0;
// let num=ary.length;//it's method not a function no need to write ary.length()
// console.log(num);
// for(let i=0;i<ary.length;i++){
//     sum=sum+ary[i];
// }
// console.log(sum);
// console.log(sum/num);

// //Remember...when u r doing sum of numbers & they are stored in strings 
// //use parseInt for sum

// ary1=[45,58,89,56,26,78,35,99]
// sum1=0;
// let num1=ary1.length;//it's method not a function no need to write ary.length()
// console.log(num1);
// for(let i=0;i<ary1.length;i++){
//     sum1=sum1+parseInt(ary1[i]);
// }
// console.log(sum1);
// console.log(sum1/num1);

// //10 percent off in every price
// let arry = [250, 645, 300, 900, 50];
// let off;
// let newarry=[];
// for (let i = 0; i < arry.length; i++) {
//   off = (arry[i] * 10) / 100;
//   let offer=arry[i]-off;
//   console.log(offer);
//   newarry.push(offer)
  
// }
// console.log(newarry);

// //Push & POP method-add in the end..
// let fruits=["Apple","Litchi","muskmelon","watermelon","grapes"];
// fruits.push("pineapple");
// console.log(fruits);
// let delitem=fruits.pop();
// console.log(fruits);
// console.log(delitem);

// //toString method..
// let fruit=["Apple","Litchi","muskmelon","watermelon","grapes"];
// console.log(fruit);
// console.log(fruit.toString());

// //concate Arrays..
// let ay1=["Apple","Mango"];
// let ay2=["potato","tomato"];
// let ay3=["fruits","vegtables"];
// console.log(ay1.concat(ay2,ay3));

// //unshift method~push-add item in the starting...
// //shift~pop-deletes from starting...
// let unsht=["Anjali","Radhika","Sanjay","Veerwati","Abhishek",]
// unsht.unshift("gurmeet");
// console.log(unsht);
// unsht.shift();
// console.log(unsht);

// //slice and splice method...

// let names=["Anjali","radhika","gurmeet","Abhishek",12,45,78,"Sanjay","veerwati"];
// console.log(names.slice(1));
// console.log(names.slice(1,4));
// console.log(names.slice(1,3));

// //Splice methode splice(stratindex, delcount,newElement)
// let fname=["Anjali","radhika","gurmeet","Abhishek",12,45,78,"Sanjay","veerwati"];
// let spl=fname.splice(2,3,101,102,"Sachin");
// console.log(fname);

// let nums=[1,2,3,4,5,6,7,8,9];
// let sp=nums.splice(2,2,101,102);
// console.log(nums);

//company question..
let comname=["Bloomberg","Microsoft","uber","google","IBM","Netflix"];
comname.shift();
console.log(comname);
let spp=comname.splice(1,0,"ola");
console.log(comname);
let nElement=comname.push("Amazon");
console.log(comname);

