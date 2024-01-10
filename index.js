/* generating the random number */

randomNumber1 = Math.floor(Math.random() * 6) + 1;
randomNumber2 = Math.floor(Math.random() * 6) + 1;


/* assigning the value of the random number with the required image */
document.querySelector(".img1").setAttribute("src",'./images/dice'+randomNumber1+'.png');
document.querySelector(".img2").setAttribute("src",'./images/dice'+randomNumber2+'.png');



/* comapring the values */
if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerHTML="Player one wins!";
}else if (randomNumber1===randomNumber2){
    document.querySelector(".container h1").innerHTML ="It's a tie !";
}
else{
    document.querySelector(".container h1 ").innerHTML="Player two wins!";

}

