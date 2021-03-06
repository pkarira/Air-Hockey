var lastX,lastY,newX,newY;
url='http://127.0.0.1:4000/',
socket = io.connect(url);
goalClip=document.getElementById("goal");
hitClip=document.getElementById("hit");
restart=document.getElementById("restart");
var gameArena,gameCanvas=document.getElementById('canvas'),gameContext=gameCanvas.getContext("2d");
if (typeof(Storage) !== "undefined") {
  room=localStorage.getItem("room");
}
drawText("red",gameContext,10,300,"Please wait for other player",40,"blue");
socket.on('connect', function() {
  socket.emit('room', room);
});
socket.on('joined',function(){
  console.log("joined");
  gameArena={
    canvas:gameCanvas,
    intialize:function()
    {
      this.canvasWidth=500;
      this.canvasHeight=600;
      this.singleCollision=false,
      this.singleCollisionWithOpponent=false,
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
      this.hit=false,
      this.borderStrokeStyle="blue",
      this.result =false,
      this.borderWidth=10;
      this.canvasMarginRight=300,
      this.canvasMargintop=30,
      this.context=gameContext,
      this.canvas.style.backgroundColor = '#01260C'
      this.ball=new ball(this.ballRadius, "red", this.canvasWidth/2, this.canvasHeight/2,this.context),
      this.goalPost=new lineMarkings(this.canvasWidth/2, "white", this.context,this.canvasWidth,this.canvasHeight,"goalpost"),
      this.hockey=new hockey(this.hockeyRadius, "red", this.canvasWidth/2, 3*this.canvasHeight/4,this.context),
      this.oppoHockey=new hockey(this.hockeyRadius, "blue", this.canvasWidth/2, this.canvasHeight/4,this.context),
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
      this.borderStrokeStyle="blue",
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
          x:gameArena.canvasWidth-gameArena.hockey.x,
          y:gameArena.canvasHeight-gameArena.hockey.y
        }
      });
      if(Math.abs(gameArena.ball.x-gameArena.hockey.x)<=gameArena.ballRadius+gameArena.hockeyRadius && Math.abs(gameArena.ball.y-gameArena.hockey.y)<=gameArena.ballRadius+gameArena.hockeyRadius)
      {
        hitClip.pause();
        hitClip.currentTime = 0;
        hitClip.play();
        gameArena.singleCollision=true;
        ballHockeyCollision();
      }
      lastX=newX;
      lastY=newY;
    }
  })
  gameArena.ball.update(gameArena.context);
  function updateGameArena() {
    gameArena.clear();
    gameArena.hockey.update(gameArena.context);
    gameArena.oppoHockey.update(gameArena.context);
    gameArena.centerLine.drawLine();
    gameArena.goalPost.drawLine();
    if((Math.abs(gameArena.ball.x-gameArena.hockey.x)>gameArena.ballRadius+gameArena.hockeyRadius && Math.abs(gameArena.ball.y-gameArena.hockey.y)>gameArena.ballRadius+gameArena.hockeyRadius && gameArena.singleCollision==true))
    {
      gameArena.singleCollision=false;
    }
    if((Math.abs(gameArena.ball.x-gameArena.oppoHockey.x)>gameArena.ballRadius+gameArena.hockeyRadius && Math.abs(gameArena.ball.y-gameArena.oppoHockey.y)>gameArena.ballRadius+gameArena.hockeyRadius && gameArena.singleCollisionWithOpponent==true))
    {
      gameArena.singleCollisionWithOpponent=false;
    }
    canvas_border(gameArena.context,"white",gameArena.canvasWidth,gameArena.canvasHeight,gameArena.borderWidth,0,gameArena.borderStrokeStyle);
    if(gameArena.result==true)
    {
      // if(gameArena.oppoScore<7 && gameArena.myScore<7)
      // {
      //   if(gameArena.win==true)
      //   scoreBoard.updateWinner("You Won");//drawText("red", gameArena.context,gameArena.canvasWidth/2,gameArena.canvasHeight/2,"You Won");
      //   else
      //   scoreBoard.updateWinner("You Loose");//drawText("red", gameArena.context,gameArena.canvasWidth/2,gameArena.canvasHeight/2,"You Loose");
      // }else
      // {
      //   if(gameArena.myScore==7)
      //   scoreBoard.updateWinner("You Won");//drawText("red", gameArena.context,gameArena.canvasWidth/2,gameArena.canvasHeight/2,"You Won");
      //   else
      //   if(gameArena.oppoScore==7)
      //   scoreBoard.updateWinner("You Loose");//drawText("red", gameArena.context,gameArena.canvasWidth/2,gameArena.canvasHeight/2,"You Loose");
      // }
    }
    if((Math.abs(gameArena.ball.x-gameArena.hockey.x)<=gameArena.ballRadius+gameArena.hockeyRadius && Math.abs(gameArena.ball.y-gameArena.hockey.y)<=gameArena.ballRadius+gameArena.hockeyRadius && !gameArena.singleCollision)|| (Math.abs(gameArena.ball.x-gameArena.oppoHockey.x)<=gameArena.ballRadius+gameArena.hockeyRadius && Math.abs(gameArena.ball.y-gameArena.oppoHockey.y)<=gameArena.ballRadius+gameArena.hockeyRadius && !gameArena.singleCollisionWithOpponent))
    {
      hitClip.pause();
      hitClip.currentTime = 0;
      hitClip.play();
      ballCollidingStableHockey();}
      if((gameArena.ball.x>= gameArena.canvasWidth/4 && gameArena.ball.x<= 3*gameArena.canvasWidth/4)&&(gameArena.ball.y>=gameArena.canvasHeight-30 || gameArena.ball.y<=30) && gameArena.result!=true)
      {
        gameArena.result=true;
        if(gameArena.ball.y<gameArena.canvasHeight/2)
        {
          gameArena.myScore+=1;
          gameArena.win=true;
        }else
        {gameArena.oppoScore+=1;
          gameArena.win=true;}
          if(gameArena.win==true)
          scoreBoard.updateWinner("    You Won");
          else
          scoreBoard.updateWinner("    You Loose");
          if(gameArena.oppoScore<7 && gameArena.myScore<7)
          {
            setTimeout(function (){
              gameArena.restart();
            }, 2000);
          }
          scoreBoard.updateScore(gameArena.myScore,gameArena.oppoScore);
          if(gameArena.win==true)
          scoreBoard.updateWinner("  You Won");
          else
          scoreBoard.updateWinner("  You Loose");
          goal();
        }
        if((gameArena.ball.x+gameArena.ballRadius >= gameArena.canvasWidth || gameArena.ball.x-gameArena.ballRadius <= 0)&& gameArena.result !=true)
        {gameArena.xDirection*=-1;gameArena.hit=true;}
        if((gameArena.ball.y+gameArena.ballRadius >= gameArena.canvasHeight || gameArena.ball.y-gameArena.ballRadius <= 0) && gameArena.result !=true)
        {gameArena.yDirection*=-1;gameArena.hit=true;}
        if(gameArena.hit==true)
        { hitClip.pause();
          hitClip.currentTime = 0;
          hitClip.play();}
          gameArena.hit=false;
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
            // socket.emit('ball_coordinates', {
            //   room:room,
            //   ball:{
            //     xDirection:xDiff*(-1),
            //     yDirection:yDiff*(-1)
            //   }
            // });
            gameArena.xDirection=xDiff;
            gameArena.yDirection=yDiff;
          }
        }
        function ballCollidingStableHockey()
        {
          gameArena.xDirection*=(-1);
          gameArena.yDirection*=(-1);
          // socket.emit('ball_coordinates', {
          //   room:room,
          //   ball:{
          //     xDirection:gameArena.xDirection*(-1),
          //     yDirection:gameArena.yDirection*(-1)
          //   }
          // });
        }
        function goal()
        {
          gameArena.borderStrokeStyle="red";
          goalClip.pause();
          goalClip.currentTime = 0;
          goalClip.play();
        }
      });
      socket.on("sorry",function()
      {
        alert("please choose other partner");
      })
      socket.on("restart",function()
      {
        restart();
      })
      function gameRestart()
      {
        socket.emit('restart', {
          room:room,
        });
        restart();
      }
      function restart()
      {
        gameArena.oppoScore=0;
        gameArena.myScore=0;
        gameArena.restart();
      }
