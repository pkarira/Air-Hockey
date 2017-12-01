var lastX,lastY,newX,newY;
var url='http://127.0.0.1:4000/'
var room="1";
var socket = io.connect(url);
socket.on('connect', function() {
   socket.emit('room', room);
});
var win=false;
var gameArena={
  canvas:document.getElementById('canvas'),
  intialize:function()
  {
    this.canvasWidth=500;
    this.canvasHeight=600;
    this.hockeyRadius=20;
    this.canvas.width= this.canvasWidth;
    this.canvas.height=this.canvasHeight;
    this.ballRadius=20,
    this.xDirection=0,
    this.yDirection=0,
    this.win =false,
    //var canvasMarginRight=screen.width/2-canvasWidth/2;
    this.canvasMarginRight=300,
    this.canvasMargintop=30,
    this.context=canvas.getContext("2d"),
    this.ball=new ball(this.ballRadius, "red", this.canvasWidth/2, this.canvasHeight/2,this.context),
    this.goalPost=new goalPost(this.canvasWidth/2, "black", this.context,this.canvasWidth,this.canvasHeight),
    this.hockey=new hockey(this.hockeyRadius, "red", this.canvasWidth/2, 3*this.canvasHeight/4,this.context),
    this.oppoHockey=new opponentHockey(this.hockeyRadius, "red", 20, 20,this.context),
    this.centerLine=new drawCentreLine("black", this.context,this.canvasWidth,this.canvasHeight)
    this.winningText=new drawText("red", this.context,this.canvasWidth,this.canvasHeight)
  },
  start:function()
  {
    setInterval(updateGameArena,10);
  },
  clear:function()
  {
    this.context.clearRect(0, 0, this.canvasWidth,this.canvasHeight);
    this.context.beginPath();
  }
}
gameArena.intialize();
gameArena.start();
gameArena.canvas.addEventListener('mousemove', function (e) {
  if(e.pageY-gameArena.canvasMargintop>=gameArena.canvasWidth/2)
  {
    newX=e.pageX-gameArena.canvasMarginRight;
    newY=e.pageY-gameArena.canvasMargintop;
    gameArena.hockey.x=newX;gameArena.hockey.y=newY;
    socket.emit('hockey_coordinates', {
      room:room,
      hockey:{
        x:gameArena.canvasWidth-newX,
        y:gameArena.canvasHeight-newY
      }
    });
    if(Math.abs(gameArena.ball.x-gameArena.hockey.x)<=2*gameArena.ballRadius && Math.abs(gameArena.ball.y-gameArena.hockey.y)<=2*gameArena.ballRadius)
    {
      ballHockeyCollision();}
      lastX=e.pageX-gameArena.canvasMarginRight;
      lastY=e.pageY-gameArena.canvasMargintop;
    }
  })
  gameArena.ball.update();
  function updateGameArena() {
    gameArena.clear();
    gameArena.hockey.update();
    gameArena.oppoHockey.update();
    gameArena.centerLine.drawLine();
    gameArena.goalPost.drawLine();
    if(win==true)
    {
      gameArena.winningText.draw();
    }
    if(gameArena.ball.x+gameArena.ballRadius >= gameArena.canvasWidth || gameArena.ball.x-gameArena.ballRadius <= 0)
    gameArena.xDirection*=-1;
    if((gameArena.ball.y+gameArena.ballRadius >= gameArena.canvasHeight-5 || gameArena.ball.y-gameArena.ballRadius <= 0) && win !=true)
    gameArena.yDirection*=-1;
    if((gameArena.ball.x+gameArena.ballRadius >= gameArena.canvasWidth/4 && ball.x+gameArena.ballRadius <= 3*gameArena.canvasWidth/4)&&(ball.y+gameArena.ballRadius>=gameArena.canvasHeight-10 || gameArena.ball.y-gameArena.ballRadius<=10))
    {
      win=true;
      goal();
    }
    gameArena.ball.x+=gameArena.xDirection;
    gameArena.ball.y+=gameArena.yDirection;
    gameArena.ball.update();
  }
  function ballHockeyCollision()
  {
    var xDiff=newX-lastX;
    var yDiff=newY-lastY;
    console.log("collision");
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
  function goal()
  {
  }
