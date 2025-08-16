const favMovie="avatar";
let guess=prompt("guess the movie ");
while ((guess !=favMovie)&&(guessn !="quit")){
    console.log("wrong guess");
    guess=prompt("Wrong guess please try again");

}
if(guess==favMovie){
    console.log("Congratulations!");
}ekse{
    console.log("you quit");
}