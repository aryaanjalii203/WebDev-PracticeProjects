let userScore=0;
let CompScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user");
const compScorePara=document.querySelector("#comp")

const genCompChoice=()=>{
   const options=["rock","paper","scissors"]; 
   const rndIdx=Math.floor(Math.random()*3);
   return options[rndIdx];
    
}


const drawGame=()=>{
 console.log("Game was draw."); 
 msg.innerText="Game draw!..";  
};

const showWinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats Computer ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        CompScore++;
        compScorePara.innerText=CompScore;
        msg.innerText=`You lose! Computer ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor="red";
    };
};



const playGame=(userChoice)=>{
    console.log("User Choice is=",userChoice);
    //We have tp generate Computer choice
    const compChoice=genCompChoice();
    console.log("Computer choice is=",compChoice);
    console.log("New turn...")


    if(userChoice===compChoice){
    drawGame();
}else{
    let userwin=true;
    if(userChoice==="rock"){
       userwin=compChoice==="paper"?false:true;
    }else if(userChoice==="paper"){
      userwin =compChoice==="scissors"?false:true; 
    }else{
        userwin=compChoice==="rock"?false:true;
    }
    showWinner(userwin,userChoice,compChoice);
};

};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("Choice is clicked",userChoice);
        playGame(userChoice);
    });
});


