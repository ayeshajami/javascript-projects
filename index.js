const max = prompt("Enter the max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while (true){
    if(guess == "quit"){
        console.log("user quit);
            break;
        }
        if (guess == random){
            console.log("you are right");
            break;
        }else if {
             guess =prompt("your guess was wrong try again");
        }else{
            guess = prompt("your guess was too large please try again");
        }
        
        
     
}