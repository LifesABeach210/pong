// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Get the computer paddle element
let computerPaddle = document.querySelector('.computer-paddle');

// The y-velocity of the computer paddle
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 1;

// Update the pong world
function update() {

    // Update the computer paddle's position
    computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;

    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;
}

// Call the update() function every 35ms
setInterval(update, 35);
let ball = document.querySelector('.ball');//is used to select HTML classes and ID and make a JS var
ball.style.left = '350px';
ball.style.top = '200px';

let ballPOSY = 100;
let ballVelocityY = 2
let ballVelocityX = 1;
let ballPOSX = 50;



let myInterVal = setInterval(function(){
ballPOSX = ballPOSX - ballVelocityX;
ball.style.left = ballPOSX + 'px';
ball.style.top = ballPOSY + 'px';
ballPOSY = ballPOSY - ballVelocityY;
ballVelocityX -= .1;
if (ballPOSX>675) {
  ballVelocityX = ballVelocityX*-1.5 ;
}else if (ballPOSX < -100){
ballVelocityX  = ballVelocityX*1.5 ;
}else if(ballPOSY <= 0){
  ballVelocityY -= 4;
  ballPOSY = 0;
}else if(ballPOSY>=475){
  ballVelocityY += 5;
  ballPOSY = 474;
}else if(ballPOSX <= 10){
ballVelocityX +=-35;
ballPOSX = 10;
}
},100);