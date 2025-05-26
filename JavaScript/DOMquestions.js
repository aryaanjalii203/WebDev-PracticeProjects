// // let heading=document.querySelector("h1");
// // console.dir(heading.innerText);

// // heading.innerText=heading.innerText+" I am learning JavaScript";

// // let c1=document.querySelectorAll(".box");


// // // c1[0].innerText="I have completed my first DOM lecture";
// // // c1[1].innerText="Second DOM lecture is left";
// // // c1[2].innerText="After that i have to work on tic tac game..."

// // //best way for wriitng the code
// // let idx=0;
// // for(div of c1){
// //     div.innerText=`This is box ${idx}`;
// //     idx++;
// // };

// // let box4=document.querySelector("div");
// // console.log(box4.getAttribute("box1"));
// // box4.style.background="green";
// // box4.style.visibility="hidden";

// //insertion...
// let btn=document.createElement("button");
// btn.innerText="Click me!";
// console.log(btn);

// //for showing this on screeen we need to study 4 methods
// let btnaccess=document.querySelector("div");
// btnaccess.append(btn);
// let btn1=document.createElement("button");
// btn1.innerText="Click";
// console.log(btn1);
// let btnaccess1=document.querySelector("div");
// btnaccess1.after(btn1);

// let h1=document.createElement("h1");
// h1.innerHTML="<i>This is Heading one </i>";
// let access=document.querySelector("body");
// console.log(access);
// access.prepend(h1);

// let p=document.createElement("p");
// p.innerText="This is my paragraph...";
// let acc=document.querySelector("body");
// acc.append(p);

// //learn about appendchild and remove child...


//question:-1
// let button=document.createElement("button");
// console.log(button);
// let acss=document.querySelector("body");
// acss.append(button);
// button.innerText="Click me!";
// button.style.backgroundColor="red";
// button.style.color="white";

//question-2
let p=document.createElement("p");
console.log(p);
let access=document.querySelector("body");
access.append(p);
p.innerHTML="<i>This is paragraph</i>";
p.className="para";
p.style.color="green";
p.style.textAlign="center";
p.style.fontSize="50px";

let doc=document.querySelector("p");
doc.getAttribute("class");
//when u overwrite the class name, the class gets completely changed with the new one..
//u can solve it with the classList..-collection of class list


//div.classList;
//div.classList.add("anotherclass");
//div.classList.remove("clasname");





