let userScore = 0 ;
let computerScore = 0;

let choice =document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let uScore = document.querySelector("#user-score");
let cScore = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock","paper","scissor"];
    const random = Math.floor(Math.random() * 3 );
     return options[random];
}

const showWinner = (userwin,user,compChoice) =>{
    if(userwin){
        userScore++;
        uScore.innerText = userScore;
        console.log("you win");
        msg.innerText = " You Win! your " + user +" beats " + compChoice;
        msg.style.backgroundColor = "green";
        
    }else{
         computerScore++;
         cScore.innerText = computerScore;
         console.log("you lose");
         msg.innerText = " You lose!" + compChoice +" beats " + " your " + user;
          msg.style.backgroundColor = "red";
          
    }

}


const playGame = (user) =>{
    console.log("user choice is :" ,user)
    const compChoice = genCompChoice();
    console.log("computer choice is :" , compChoice);

    if (user === compChoice){
        console.log("game was draw");
         msg.innerText = " Game was draw.Play again! ";
    }
    else {
        let userwin = true;

        if (user === "rock"){
            userwin = compChoice === "paper"?false:true;
        }
        else if (user === "paper"){
            userwin = compChoice === "scissor"?false:true;    
        }
        else{
            userwin = compChoice === "rock"?false:true;    
        }
        showWinner(userwin,user,compChoice);
    }

}

choice.forEach(element => {
    element.addEventListener("click",()=>{
       const user = element.getAttribute("id");
       playGame(user);
    })
});