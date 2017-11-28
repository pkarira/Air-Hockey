var canvas=document.getElementById('canvas');
var canvasWidth=500;
var canvasHeight=600;
canvas.width= canvasWidth;
canvas.height= canvasHeight;
var ballRadius=30;
var xDirection=1;
var yDirection=1;
var context=canvas.getContext("2d");
var ball=new ball(ballRadius, "red", 30, 30,context);
var goalPost=new goalPost(canvasWidth/2, "red", context,canvasWidth,canvasHeight);
ball.update();
setInterval(updateGameArena,10);
function updateGameArena() {
  context.clearRect(0, 0, canvas.width,canvas.height);
  context.beginPath();
  ball.x+=xDirection;
  ball.y+=yDirection;
  if(ball.x+ballRadius === canvasWidth)
  xDirection=-1;
  else
  if(ball.x-ballRadius === 0)
  xDirection=1;
  if(ball.y+ballRadius === canvasHeight)
  yDirection=-1;
  else
  if(ball.y-ballRadius === 0)
  yDirection=1;
  ball.update();
  }
