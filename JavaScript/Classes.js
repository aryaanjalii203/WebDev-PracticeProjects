//Classes
// class is a program-code template for creating objects.

class cars{
    start(){
        console.log("strat");
    }
    stop(){
        console.log("stop");//no need to separate two functions with comma in class

    }
    setBrand(brand){
        this.brandName=brand;
    }
}
//creating object from class
let fortuner=new cars();
fortuner.setBrand("fortuner");
let lexus=new cars();

//Constructor method in classes
//cons is automatically invoked by new , it initializes object
//if we don't create cons then js automatically creates the cons for us


class cars1{
constructor(brand, mileage){
    console.log("Creating new object..")
    this.brand=brand;
    this.mileage=mileage;
}

    start(){
        console.log("strat");
    }
    stop(){
        console.log("stop");

    }

}

let fortuner1=new cars1("Fortuner",10);

//Inheritance...child class(derived class) extends parents properties

class parent{
constructor(){
  this.species="Homo sapiens";
};

    hello(){
        console.log("Hello guys");
    } };
    
class child extends parent{

};
let obj=new child();

class Person{
    eat(){
        console.log("person can eat");
}
sleep(){
    console.log("Person can sleep");
}
goingOut(){
    console.log("Person can go out with friends");
}
work(){
    console.log("This is parent's child method");
}};

class Engineer extends Person{
    work(){
    console.log("Solve Problems, Build something");
    }
};

class Doctor extends Person{
    work(){
    console.log("Solve Patients problem..");
    }
    //when there are same function in child and parent class then child's function will be invoked..
    //this is called method overriding...
};
let AnuOnj=new Engineer();
let AnuOnj2=new Doctor();

//Super Keyword-used to call the constructor of its parent's class to access the parents properties and methods.

class parent2{
constructor(){
    console.log("Parent's constructor");
  this.species="Homo sapiens";
};
    hello2(){
        console.log("Hello guys");
    } };

class worker extends parent2{
    constructor(branch){
        console.log("Child's constructor");
        super();//to invoke parent's constructor otherwise u will get error
        this.branch=branch;
        console.log("exit from Child's constructor");
    }
    work2(){
        console.log("worker can do any work");
    }
};
let obj2=new worker("ABC");
/*output -first it prints child's cons then goes parent's cons
Child's constructor 
Parent's constructor 
exit from Child's constructor*/

class parent3{
constructor(name){
  this.species="Anjali Arya";
  this.name=name;
};
    hello2(){
        console.log("Hello guys");
    } };

class worker2 extends parent3{
    constructor(name){
        super(name);//to invoke parent's constructor otherwise u will get error
    }
    work2(){
        console.log("worker can do any work");
    }
};
let obj3=new worker2("ANU");

//Practice Questions
let data="Secret Information"
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
       console.log(data); 
    }
};
let stu1=new User("Anu","anu@gamil.com")
let stu2=new User("Anjali","aryaanjali203@gamil.com")