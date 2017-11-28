var canvas=document.getElementById('canvas');
var canvasWidth=500;
var canvasHeight=600;
var hockeyRadius=20;
canvas.width= canvasWidth;
canvas.height= canvasHeight;
var ballRadius=20;
var xDirection=1;
var yDirection=1;
var lastX,lastY,newX,newY;
//var canvasMarginRight=screen.width/2-canvasWidth/2;
var canvasMarginRight=300;
var canvasMargintop=30;
var context=canvas.getContext("2d");
var ball=new ball(ballRadius, "red", 20, 20,context);
var goalPost=new goalPost(canvasWidth/2, "black", context,canvasWidth,canvasHeight);
var hockey=new hockey(hockeyRadius, "red", 20, 20,context,"white");
//goalPost.drawLine();
canvas.addEventListener('mousemove', function (e) {
          newX=e.pageX-canvasMarginRight;
          newY=e.pageY-canvasMargintop;
          hockey.update(newX,newY);
          if(Math.abs(ball.x-hockey.x)<=2*ballRadius && Math.abs(ball.y-hockey.y)<=2*ballRadius)
          {
            ballHockeyCollision();}
          lastX=e.pageX-canvasMarginRight;
          lastY=e.pageY-canvasMargintop;
        })
ball.update();
setInterval(updateGameArena,10);
function updateGameArena() {
  context.clearRect(0, 0, canvas.width,canvas.height);
  context.beginPath();
  //goalPost.drawLine();
  // if(ball.x+ballRadius+xDirection>canvasWidth-ball.x)
  // xDirection=canvasWidth-ball.x-2;
  // else
  // if(ball.x-ballRadius-xDirection<0)
  // xDirection=ball.x-ballRadius-xDirection+2;
  //
  // if(ball.y+ballRadius+yDirection>canvasWidth-ball.y)
  // yDirection=canvasWidth-ball.y-2;
  // else
  // if(ball.y-ballRadius-yDirection<0)
  // yDirection=ball.y-ballRadius-yDirection+2;

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
  ball.x+=xDirection;
  ball.y+=yDirection;
  ball.update();
}
function ballHockeyCollision()
{
  var xDiff=newX-lastX;
  var yDiff=newY-lastY;
  console.log("collision");
  xDirection=xDiff;
  yDirection=yDiff;
}
