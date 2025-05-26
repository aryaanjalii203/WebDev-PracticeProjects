
//datatypes-String,number,undefined, null, Bigint, symbol, boolean

let price=10.50;
console.log(price);
console.log(typeof(price));
let x=BigInt(1234566);
console.log(x);
let b=Symbol("Hello This is Anjalia Arya");
console.log(b);
console.log(typeof(x));
console.log(typeof(b));

const students={
    fname:"Anjali Arya",
    age:20,
    cgpa:7.4,
    subject:"Coding"

}
students.fname="Anjali Kumari"
students["age"]=52;
console.log(students);


//Practice Questions

const Products={
    des:"Parker Jotter Sranadard CT Ball Pen(Black)",
    isdeal:true,
    price:270,
    ratings:4,
    offer:5
}
console.log(Products)

//"123"+123=123123 just concatenation not addition
//"123"+abc=123abc

const profile={
    fname:"Anu Arya",
    isfollow:true,
    post:25,
    followers:92,
    following:76,
    title:"Lovely Professional University"
}
console.log(profile);