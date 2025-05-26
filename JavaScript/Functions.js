//sum of two number....
function myfun(a,b){
    console.log(a+b);
}
myfun(5,4);
myfun(35,18);
myfun(6,20);
myfun(9,41);

function myfn(x,y){//functions parameter are local variables and have access to this block only
    console.log("before return;");
    console.log("The sum is:",x+y);
    let s=555;
    return s;//-last line
    console.log("after retun");//as our code works line by line so it would't run after return statement
}
myfn(3,5);

//arrowfunction start with const-comapct way of writing the function

const mysum=(a,b) =>{
    console.log(a+b);
}
mysum(3,4);
const mymul=(a,b,c)=>{
    console.log(a*b*c);
}
mymul(3,2,4);

const myab=()=>{
    console.log("Hello this is arrow function");
}
//without giving parameters in the definition...

myab();
const myabc=()=>{
    console.log(3+8);
}
myabc();

//single line of code from arrow function
const s=()=> console.log("Hello this is Anjali Arya");
s();

//Practice Question....
 function myvow(str){
    let size=0;
    for(let i of str.toLowerCase()){
    
        if(i==='o'|| i==='u' ||i==='i' || i==='e' || i==='a'){
        size++; 
        }
    }
    console.log(size);
 }
 myvow("This is Anjali Arya,,,guyss");

 const myvow1 = (str) => {
    let size = 0;
    for(let i of str.toLowerCase()){
        if(i === 'o' || i === 'u' || i === 'i' || i === 'e' || i === 'a'){
            size++; 
        }
    }
    return size;
}

console.log(myvow1("This is Anjali Arya,,,guyss"));


//forEach loop for arrays....                 arr.forEach(callbackFunction)
//callback function js-a function which is passed as an agrument to another function...

arr=[1,2,4,5,6,7,8,9];
arr.forEach(function myfun(val){
    console.log(val);
});

arr.forEach((val)=>{
    console.log(val);
});
 let ar1=["Anjali","radhika","Anu","Rd","Gunnu"];
 ar1.forEach((val)=>{
    console.log(val.toUpperCase());
 });
 //we can have three arguments in forEach callback method..
 //1-val-for priting the array's element
 //2-index
 //3-arr-priting entire array with each element 
 
let arr1=["Anjali","radhika","Anu","Rd","Gunnu"];
 arr1.forEach((val,idx,arr1)=>{
    console.log(val.toUpperCase(),idx,arr1);
 });

//Interview question-higher oredr functions/method-function those atke another func as argument or return  another func
let arr2=[2,,3,4,5,6,7,8,9];
arr2.forEach((val)=>{
    console.log(val*val);
});
//another way of writing callback...
let ar=[4,5,8,1,2,3,4];
let calsq=(num)=>{
    console.log(num*num);
}
ar.forEach(calsq);