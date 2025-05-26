//Document Obejct Model...basically accessing the html in js
//Html-structure...,CSS-style...Js-LOgic
//Window's object:window object represents an open window in a browser. it is browser's object not js's object
//it is global object with lots of properties & methods..

// window.alert("Hello, this is Anjali Arya")
// window.console.log("This is me"); part of window object
//window-document-html-1.head,-2.body
//->1.1 meta,1.2 meta,1.3 title, 1.4 link
//->2.1 div, 2.1 script
//->2.11 img 2.12 h1, 2.13 p 2.14 div

/* when a web page is loaded the browser creates the DOM of the page*/

//DOM - Manipulation...

//accessing ids
let heading=document.getElementById("b");
console.dir(heading);

//accessing classes
let classid=document.getElementsByClassName("class-heading");
console.dir(classid);
console.log(classid);

//-it prints null when id doesnot exits 
//-it print empty html collection when no class exits..

//accessing paragraphs..
let tgname=document.getElementsByTagName("p");
console.dir(tgname);

//Query Selector..it returns nodeList for us
let firstele=document.querySelectorAll("p");
console.dir(firstele);
let allele=document.querySelector("p");
console.dir(allele);

//make sure write .classname for accessing classes
let firstele2=document.querySelectorAll(".class-heading");
console.dir(firstele2);
let allele2=document.querySelector(".class-heading");
console.dir(allele2);

//make sure write #tagname for accessing ids
let firstele3=document.querySelectorAll("#a");
console.dir(firstele3);
let allele3=document.querySelector("#a");
console.dir(allele3);

//Dom -Properties
//parent,child,siblings
//tagName-returns tag for element nodes
//innerText-returns the text content of the element and all its children..
//innerHTML-returns the plain text or html contents in the element..
//textContent-returns content even for hidden elements

//document.querySelector("h1").textContent;-will write the hidden text
//document.querySelector("h1").innerText;-will not write anything just ""...

/*Attributes...getAttribute & setAttribute(prev Val, new val)*/
let link=document.querySelector("a");
console.log(link.getAttribute("href"));
console.log(link.setAttribute("href","src"));

//