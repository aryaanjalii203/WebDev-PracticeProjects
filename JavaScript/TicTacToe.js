//Tic Tac Toe Game...
/* there are 9 boxes in the game..
...these are the patterns for winning the game 
0 1 2 , 3 4 5 , 6 7 8- horizontal patterns
0 3 6 , 1 4 7 , 2 5 8- vertical patterns
0 4 8 , 2 4 6-diagonal patterns*/

let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".Reset-btn");
let newbtn=document.querySelector("#new-game");
let msg=document.querySelector("#msg")
let msgconatiner=document.querySelector(".msg-container");


let turn0=true;//playerX, playerO
const patterns=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]];


const resetgame=()=>{
    turn0=true;
    enabledboxes();
    msgconatiner.classList.add("hide");

};



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box is clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        };
        box.disabled=true;
        checkwinner();
    });
});

const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enabledboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, you are the Winner...`;
    msgconatiner.classList.remove("hide");
    disabledboxes();
}

const checkwinner=()=>{
    for(let pattern of patterns){
      
            let posVal0=boxes[pattern[0]].innerText;
            let posVal1=boxes[pattern[1]].innerText;
            let posVal2=boxes[pattern[2]].innerText;

            if(posVal0!="" && posVal1!="" && posVal2!=""){
                if(posVal0===posVal1 && posVal1===posVal2){
                    console.log("winner",posVal0);
                    showWinner();
                    showWinner(posVal0);
                }
            }
    }
};

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

