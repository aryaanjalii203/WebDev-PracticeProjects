for(let i=0;i<=10;i++){
    console.log("Anjali Arya");
}
let sum1=0;
let n1=100;
for( let i=0;i<n1;i++){
    sum1=sum1+i;
}
console.log(sum1);

//Fibonacci Series
let a=0;
let b=1;
let sum;
let n=10;
for(let i=2;i<n;i++){
    sum=a+b;
     console.log(sum);
    a=b;
    b=sum;
   
}
for(let i=0;i<=5;i++){
    console.log(i);
}

//while lopps
let j=0;
while(j<=5){
    console.log(i);
    i++;
}

//do while loop....
let i=0;
do{
    console.log("Here we are priting the do while loop by giving wrong condition in while loop");
    i++;
}while(i<=5){
    console.log("Will it print or not");
    
}

// For OF LOOP....this loop work for Arrays, String when we are printing the each letter of strings or element of arrays
let str1="This is Anjali Arya";
for(let i of str1){
    console.log(i);
}

let size=0;
let str="This is Anjali Arya";
for(let i of str){
    console.log(i);
    size++;

}
console.log(size);

// *
// **
// ***
// ****
//Star Problem....
for (let i=0;i<=5;i++){
    let row="";
    for(let j=0;j<=i;j++){
        row+="*";
    }
    console.log(row);
}

// *****
// ****
// ***
// **
// *

for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}

// *****
// *****
// *****
// *****
for(let i=0;i<=5;i++){
    let row="";
    for(j=0;j<=5;j++){
        row+="*";
    }
    console.log(row);
}

// even number from 0-100

for(let i=0;i<=900;i++){
    if(i%2==0){
        console.log("Even number",i);
    }
}
// game for guessing the random number...

randnum=25;
let usernum=prompt("Here u have to guess the number:")
while(usernum!=randnum){
    usernum=prompt("You have guessed thw wrong. Guess again");
}
console.log("You have guessed the corret number");

// we use in For Loop for objects and arrays
let students={
    fname:"Anjali Arya",
    age:20,
    cgpa:8.5,
    vlg:"para khalsa"
}
for (let i in students){
    console.log("Key",i,"values",students[i]);
}
