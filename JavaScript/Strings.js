let str="This is Anjali Arya";
let str2="Radhika gola";
console.log(str);
console.log(str2);
console.log(str[5]);

//Template Literals(``)-`This is Template Literals`...
//$-by substitute placeholders while creating the string...mostly we use in objects

let item={
    iname:"Pen",
    iprice:100,
    ibrand:"Apsara",
    icolor:"black"
}
console.log("here we are writing the item as a object by using Template Literals....");
let a=`items ${item.icolor}`;
console.log(a);

console.log(`This is Anjali Arya`);//special string
console.log("Anjali\nArya");
console.log("Anjali\tArya");

console.log(`Sum of three variables is ${1+2+3}`);
console.log(`Sum of three variables is ${56%9}`);
console.log(typeof(a));

let b="Hello\tguyss"
console.log(b.length);//tab counted as 1 length only
let uppcase="anjali arya";
console.log(uppcase.toUpperCase());
let lwrcase="NABZUUCYHUCHIUJI3X";
console.log(lwrcase.toLocaleLowerCase());

//remove spaces from beginning & ending not from middle.... 
let trimm="      this built-in method used to remove the extra spaces from beginning and ending of ur document           "
console.log(trimm.trim());

//Slicing ...(start index, end index) but last value is not included in the answer..
let slc="012568934";
console.log(slc.slice(1,5));
console.log(slc.slice(1));

//Concatention...concat
let str1="this is";
let str3=" Anjali Arya";
let result=str1.concat(str3);
console.log(result);

//other way (+) for concatenation
let str0="ANd i am learning from Apna college..."
console.log(str0+str1+str2+str3);

//Replace method..replace(searchValue,newValue);
console.log(str0.replace("learning","gaining"));
console.log(str0.replace("ANd","and"));

//charAt..we findout the string value by giving the index
console.log(str0.charAt(0));
str0[1]='N';
console.log(str0.charAt(1));

let prm1 = prompt("Enter your full name");

while (!(prm1.startsWith("@") && prm1.length === 15)) {
    console.log("Your name doesn't start with @ or is not 15 characters long");
    prm1 = prompt("Enter your full name again");
}

// This will run AFTER the while loop, once a valid input is given
console.log("You have entered the correct username...");

let res = prompt("Write the name");

if (res[0] !== "@") {
    console.log("Write the correct username");
    let res1 = prompt("Write the correct name");
    
    if (res1[0] === "@") {
        console.log("You have entered the correct username...");
    } else {
        console.log("Still incorrect username.");
    }
} 












