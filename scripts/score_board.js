var scoreBoard={
  canvas:document.getElementById('scoreboard'),
  context:this.canvas.getContext("2d"),
  canvasWidth:400,
  canvasHeight:400,
  borderWidth:10,
  interval:0,
  player1Score:0,
  player2Score:0,
  drawTitle:function(text)
  {
    var stroke="red";
    var context=this.context;
    this.interval=setInterval(function()
    {
      scoreBoard.updateScore(scoreBoard.player1Score,scoreBoard.player2Score);
      drawText("white",context,20,100,text,60,stroke);
      if(stroke=="blue")
      stroke="red";
      else
      stroke="blue";
    },500);
  },
  updateWinner:function(text)
  {
    clearInterval(this.interval);
    this.updateScore(this.player1Score,this.player2Score);
    drawText("white",this.context,20,100,text,60,"red");
    setTimeout(function()
    {
      scoreBoard.updateScore(scoreBoard.player1Score,scoreBoard.player2Score);
      scoreBoard.drawTitle("AIR HOCKEY");
    }, 2000);
  },
  intialize:function()
  {
    this.context=this.canvas.getContext("2d");
    this.canvas.style.backgroundColor = "#01260C";
    this.canvas.width= this.canvasWidth;
    this.canvas.height=this.canvasHeight;
  },
  canvasDecor:function()
  {
    canvas_border(this.context,"white",scoreBoard.canvasWidth,scoreBoard.canvasHeight,scoreBoard.borderWidth,scoreBoard.canvasHeight/2,"blue");
    drawText("white",this.context,scoreBoard.canvasWidth/2-40,scoreBoard.canvasHeight/2+40,"Score",30);
    drawText("white",this.context,20,scoreBoard.canvasHeight/2+80,"You",30);
    drawText("white",this.context,scoreBoard.canvasWidth/2+20,scoreBoard.canvasHeight/2+80,"Opponent",30);
    drawLine("#76b852",30,0,this.canvasHeight/2-20,this.canvasWidth,this.canvasHeight/2-20,this.context)
  },
  clear:function()
  {
    this.context.clearRect(0, 0, this.canvasWidth,this.canvasHeight);
    this.context.beginPath();
  },
  updateScore:function(player1,player2)
  {
    this.clear();
    this.canvasDecor();
    this.player2Score=player2;
    this.player1Score=player1;
    drawText("white",this.context,20,scoreBoard.canvasHeight/2+150,player1,30);
    drawText("white",this.context,scoreBoard.canvasWidth/2+20,scoreBoard.canvasHeight/2+150,player2,30);
  }
}
scoreBoard.intialize();
scoreBoard.drawTitle("AIR HOCKEY");
