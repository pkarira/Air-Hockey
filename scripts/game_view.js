var lastX,lastY,newX,newY,
url='http://127.0.0.1:4000/',
socket = io.connect(url);
if (typeof(Storage) !== "undefined") {
  room=localStorage.getItem("room");
}
socket.on('connect', function() {
  socket.emit('room', room);
});
window.closed=function()
{
  return "Do you r to close?";
}
// window.onbeforeunload = function () {
//     return "Do you rnt to close?";
// };
// window.onunload = function () {
//     return "Do yowant to close?";
// };
 var gameArena={
  canvas:document.getElementById('canvas'),
  intialize:function()
  {
    this.canvasWidth=500;
    this.canvasHeight=600;
    this.singleCollision=false,
    this.hockeyRadius=20;
    this.myScore=0;
    this.oppoScore=0;
    this.rounds=7;
    this.canvas.width= this.canvasWidth;
    this.canvas.height=this.canvasHeight;
    this.ballRadius=20,
    this.xDirection=0,
    this.yDirection=1,
    this.win =false,
    this.result =false,
    this.borderWidth=10;
    this.canvasMarginRight=300,
    this.canvasMargintop=30,
    this.context=canvas.getContext("2d"),
    this.canvas.style.backgroundColor = '#01260C'
    this.ball=new ball(this.ballRadius, "red", this.canvasWidth/2, this.canvasHeight/2,this.context),
    this.goalPost=new lineMarkings(this.canvasWidth/2, "white", this.context,this.canvasWidth,this.canvasHeight,"goalpost"),
    this.hockey=new hockey(this.hockeyRadius, "red", this.canvasWidth/2, 3*this.canvasHeight/4,this.context),
    this.oppoHockey=new hockey(this.hockeyRadius, "blue", 20, 20,this.context),
    this.centerLine=new lineMarkings(this.canvasWidth/2,"white", this.context,this.canvasWidth,this.canvasHeight,"centralline")
  },
  start:function()
  {
    setInterval(updateGameArena,10);
    scoreBoard.updateScore(this.myScore,this.oppoScore);
  },
  clear:function()
  {
    this.context.clearRect(0, 0, this.canvasWidth,this.canvasHeight);
    this.context.beginPath();
  },
  restart:function()
  {
    this.xDirection=0,
    this.yDirection=0,
    this.win =false,
    this.result =false,
    this.ball.x=this.canvasWidth/2,
    this.ball.y=this.canvasHeight/2
    this.rounds--;
  }
}
gameArena.intialize();
gameArena.start();
gameArena.canvas.addEventListener('mousemove', function (e) {
  if(e.pageY-gameArena.canvasMargintop-60>=gameArena.canvasWidth/2)
  {
    newX=e.pageX-gameArena.canvasMarginRight;
    newY=e.pageY-gameArena.canvasMargintop;
    if(newX>gameArena.canvasWidth- gameArena.hockeyRadius)
    gameArena.hockey.x=newX-gameArena.hockeyRadius-20;
    else
    if(newX<gameArena.hockeyRadius)
    gameArena.hockey.x=gameArena.hockeyRadius+20;
    else
    gameArena.hockey.x=newX;
    if(newY>gameArena.canvasHeight -gameArena.hockeyRadius)
    gameArena.hockey.y=gameArena.canvasHeight -gameArena.hockeyRadius-10;
    else
    gameArena.hockey.y=newY;
    socket.emit('hockey_coordinates', {
      room:room,
      hockey:{
        x:gameArena.canvasWidth-newX,
        y:gameArena.canvasHeight-newY
      }
    });
    if(Math.abs(gameArena.ball.x-gameArena.hockey.x)<=gameArena.ballRadius+gameArena.hockeyRadius && Math.abs(gameArena.ball.y-gameArena.hockey.y)<=gameArena.ballRadius+gameArena.hockeyRadius)
    {
      gameArena.singleCollision=true;
      ballHockeyCollision();}
    lastX=e.pageX-gameArena.canvasMarginRight;
    lastY=e.pageY-gameArena.canvasMargintop;
  }
})
gameArena.ball.update(gameArena.context);
function updateGameArena() {
  gameArena.clear();
  gameArena.hockey.update(gameArena.context);
  gameArena.oppoHockey.update(gameArena.context);
  gameArena.centerLine.drawLine();
  gameArena.goalPost.drawLine();
    if(Math.abs(gameArena.ball.x-gameArena.hockey.x)>gameArena.ballRadius+gameArena.hockeyRadius && Math.abs(gameArena.ball.y-gameArena.hockey.y)>gameArena.ballRadius+gameArena.hockeyRadius && gameArena.singleCollision==true)
    {
      gameArena.singleCollision=false;
    }
  canvas_border(gameArena.context,"white",gameArena.canvasWidth,gameArena.canvasHeight,gameArena.borderWidth);
  if(gameArena.result==true)
  {
    if(gameArena.oppoScore<7 && gameArena.myScore<7)
    {
      if(gameArena.win==true)
      drawText("red", gameArena.context,gameArena.canvasWidth/2,gameArena.canvasHeight/2,"You Won");
      else
      drawText("red", gameArena.context,gameArena.canvasWidth/2,gameArena.canvasHeight/2,"You Loose");
    }else
    {
      if(gameArena.myScore==7)
      {
        drawText("red", gameArena.context,gameArena.canvasWidth/2,gameArena.canvasHeight/2,"You Won");}
        else
        if(gameArena.oppoScore==7)
        drawText("red", gameArena.context,gameArena.canvasWidth/2,gameArena.canvasHeight/2,"You Loose");}
      }
      if(Math.abs(gameArena.ball.x-gameArena.hockey.x)<=gameArena.ballRadius+gameArena.hockeyRadius && Math.abs(gameArena.ball.y-gameArena.hockey.y)<=gameArena.ballRadius+gameArena.hockeyRadius && !gameArena.singleCollision)
      ballCollidingStableHockey();
      if((gameArena.ball.x>= gameArena.canvasWidth/4 && gameArena.ball.x<= 3*gameArena.canvasWidth/4)&&(gameArena.ball.y>=gameArena.canvasHeight-30 || gameArena.ball.y<=30) && gameArena.result!=true)
      {
        gameArena.result=true;
        if(gameArena.ball.y<gameArena.canvasHeight/2)
        {
          gameArena.myScore+=1;
          gameArena.win=true;
        }else
        {gameArena.oppoScore+=1;}
        if(gameArena.oppoScore<7 && gameArena.myScore<7)
        {
          console.log(gameArena.rounds);
          setTimeout(function (){
            gameArena.restart();
          }, 2000);
        }
        scoreBoard.updateScore(gameArena.myScore,gameArena.oppoScore);
        goal();
      }
      if((gameArena.ball.x+gameArena.ballRadius >= gameArena.canvasWidth || gameArena.ball.x-gameArena.ballRadius <= 0)&& gameArena.result !=true)
      gameArena.xDirection*=-1;
      if((gameArena.ball.y+gameArena.ballRadius >= gameArena.canvasHeight || gameArena.ball.y-gameArena.ballRadius <= 0) && gameArena.result !=true)
      gameArena.yDirection*=-1;
      gameArena.ball.x+=gameArena.xDirection;
      gameArena.ball.y+=gameArena.yDirection;
      gameArena.ball.update(gameArena.context);
    }
    function ballHockeyCollision()
    {
      var xDiff=newX-lastX;
      var yDiff=newY-lastY;
      console.log("collision");
      if(xDiff!=0 && yDiff!=0)
      {
        socket.emit('ball_coordinates', {
          room:room,
          ball:{
            xDirection:xDiff*(-1),
            yDirection:yDiff*(-1)
          }
        });
        gameArena.xDirection=xDiff;
        gameArena.yDirection=yDiff;
      }
      }
      function ballCollidingStableHockey()
      {
          gameArena.xDirection*=(-1);
          gameArena.yDirection*=(-1);
          socket.emit('ball_coordinates', {
            room:room,
            ball:{
              xDirection:gameArena.xDirection,
              yDirection:gameArena.yDirection
            }
          });
      }
      function goal()
      {
      }
