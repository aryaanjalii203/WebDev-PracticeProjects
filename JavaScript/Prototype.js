//Prototype...

/*A js object is an entity having state and behvior(properties & methods).
js objects have a special property called prototype..
we set prototype using __proto__
if objects & prototype have sma emethod objects;s method will be used.*/

const students={
    fullname:"Anjali Arya",
    class:12,
    marks:8.2,
    printMarks: function(){
        console.log("marks=",this.marks);
    },
};

let arr=["apple","mango","banana"];
console.log(arr);//it is object and have special type of object:prototype
//basically objects take methods and properties from their prototype e.g push
arr.push("litchi");
//we can write all these methods in consloe without defining here as objects inherit their methods and properties

const employee={
    calcTax(){
        console.log("tax rate is 10%");
    },
    calctax2:function(){
           console.log("tax rate is 10%");
    },
    //both formats are correct of writing the functions..
};

const worker1={

    salary:50000,
};
const worker2={
    salary:30000,
};
const worker3={
    salary:40000,
};
const worker4={
    salary:70000,
};
//if objects & prototype have sma emethod objects;s method will be used.
const worker5={
    salary:70000,
    calcTax(){
        console.log("Tax is 20%");//prototype & object have method of same name this tym it will print "Tax is 20%" by calling calcTax()...
    },
};
// we are using const properties in woker object bu using __proto__ 
worker1.__proto__=employee;
worker2.__proto__=employee;
worker3.__proto__=employee;
worker4.__proto__=employee;
worker5.__proto__=employee;

