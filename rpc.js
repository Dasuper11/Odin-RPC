const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        gameRound(button.id);
    })

})

function computerPlay(){
    num = Math.floor(Math.random()*3)%3;
    if (num == 0){
        return "Rock";
    }
    else if  (num == 1) {
        return "Paper";    
    }
    else{
        return "Scissors";
    }
};
let cCount = 0;
let pCount= 0;
const Announce = document.querySelector('#Announcment');
const pScore = document.querySelector('#pScore');
const cScore = document.querySelector('#cScore');
function gameRound(p){
    c = computerPlay();
    //reset if someone has won last round
    if(pCount == 5 || cCount == 5){
        pCount = 0;
        cCount = 0;
    }
    //Round Winner Logic
    if (c==p){
        Announce.textContent="its a tie! you both selected " + p;
    }
    else if ((p=="Rock" && c=="Scissors") || (p=="Scissors" && c=="Paper") || (p=="Paper" && c=="Rock")){
        Announce.textContent="You win this round! " + p + " beats " + c + "!"; pCount++;
    }
    else{
        Announce.textContent="You lose this round! " + c + " beats " + p + "!"; cCount++;
    }
    pScore.textContent=pCount;
    cScore.textContent=cCount;
    //Game Winner
    if(pCount == 5){
        Announce.textContent="thats 5 rounds won, grats on winning!";
    }
    if(cCount == 5){
        Announce.textContent="thats 5 rounds lost, better luck next time!!";
    }
}





/*function playerPlay(){
a = window.prompt("Time to play! Please enter 'Rock' 'Paper' or 'Scissors'")
p1= a.slice(0,1);
p2= a.slice(1, a.length);
p1=p1.toUpperCase();
p2=p2.toLowerCase();
output = p1+p2;
return output;
} */


function game(){
p = playerPlay();
c = computerPlay();
if (c==p){
    console.log("its a tie! you both selected " + p)
}
else if ((p=="Rock" && c=="Scissors") || (p=="Scissors" && c=="Paper") || (p=="Paper" && c=="Rock")){
    console.log("You win! " + p + " beats " + c + "!");
}
else{
    console.log("You lose! " + c + " beats " + p + "!")
}
}

