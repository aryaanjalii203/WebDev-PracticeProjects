// /*interesting changes in you code..e.g "click","submit" 
// the chnagein the state of an object is known as an Event..
// intresting changes-that may affect code execution...
// mouse events-click,double click..
// keyboard events-keypress, keyup, keydown...
// form events-submit...
// print event & many more...*/

// //Event-handler 
// //if u will try multiple handler for same node it will go for the last one..

// let btn1=document.querySelector("#bt1");
// btn1.onclick=()=>{
//     console.log("You have clicked the button one...");
// };

// let btn2=document.querySelector("#bt2");
// btn2.ondblclick=()=>{
//     alert("hello guyss...")
//     console.log("You have clicked the button second...");
// };

// // let div=document.querySelector("div");
// // div.onmouseover=()=>{
// //     console.log("You r inside the box");
// //     let a=25;
// //     a++;
// //     console.log(a);
// // };

// //Event object..
// /* It is a special object that has details about the event.
// all events handlers have access to event object's properties and methods.*/

// let div=document.querySelector("div");
// div.onmouseover=(e)=>{
//     console.log(e);//has all details-
//      console.log(e.type);
//      console.log(e.target);
//      console.log(e.clientX,e.clientY);
//     console.log("You r inside the box");
//     let a=25;
//     a++;
//     console.log(a);
// };


// //Event Listeners...
// let btn3=document.querySelector("#bt3");
// btn3.addEventListener("click",()=>{
//     console.log("button1");
// });
// btn3.addEventListener("click",()=>{
//     console.log("button2");
// });

// btn3.addEventListener("click",()=>{
//     console.log("button4");
// });

// let rem=()=>{
//     console.log("We have to remove this...");
// }
// btn3.removeEventListener("click",(rem));
    
// // practice ques-1
// let btn5=document.createElement("button");
// btn5.className="bt5";
// btn5.innerText="Button5";
// let access=document.querySelector(".bt5");
// console.log(btn5);
// console.log(access);

// let ins=document.querySelector("body");
// ins.append(btn5);

// let curtMode="Light";
// btn5.addEventListener("click",()=>{
//     console.log("this is button5...");
//     console.log("you are trying to change the mode... ")
//     if(curtMode==="Light"){
        
//         document.querySelector("body").style.background="black";
//         curtMode="Dark";
//     }else{
        
//         document.querySelector("body").style.background="green";
//         curtMode="Light"
//     }
//     console.log(curtMode);
// });

let btn4=document.createElement("button");
btn4.innerText="Button5";
btn4.className="btn4";
let div=document.querySelector(".btn4");
console.log(btn4);
console.log(div);

let acc=document.querySelector("body");
acc.append(btn4);

let mode="dark";
let body=document.querySelector("body");

btn4.addEventListener("click",()=>{
if(mode==='dark'){
    mode="light";
    body.classList.remove("dark");
    body.classList.add("light");
    console.log(mode);
    // document.querySelector("body").style.backgroundColor="green";
}else{
    mode="dark";
    body.classList.remove("light");
    body.classList.add("dark");
    console.log(mode);
    // document.querySelector("body").style.backgroundColor="black";
    }
    
});