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
}

function playerPlay(){
a = window.prompt("Time to play! Please enter 'Rock' 'Paper' or 'Scissors'")
p1= a.slice(0,1);
p2= a.slice(1, a.length);
p1=p1.toUpperCase();
p2=p2.toLowerCase();
output = p1+p2;
return output;
}

function game(){
p = playerPlay();
c = computerPlay();

}