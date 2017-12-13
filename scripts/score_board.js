var scoreBoard={
  canvas:document.getElementById('scoreboard'),
  canvasWidth:400,
  canvasHeight:200,
  borderWidth:10,
  intialize:function()
  {
    this.context=this.canvas.getContext("2d");
    this.canvas.style.backgroundColor = "#01260C";
    this.canvas.width= this.canvasWidth;
    this.canvas.height=this.canvasHeight;
  },
  canvasDecor:function()
  {
    canvas_border(this.context,"white",scoreBoard.canvasWidth,scoreBoard.canvasHeight,scoreBoard.borderWidth);
    drawText("white",this.context,scoreBoard.canvasWidth/2-40,40,"Score");
    drawText("white",this.context,20,80,"You");
    drawText("white",this.context,scoreBoard.canvasWidth/2+20,80,"Opponent");
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
    drawText("white",this.context,20,150,player1);
    drawText("white",this.context,scoreBoard.canvasWidth/2+20,150,player2);
  }
}
scoreBoard.intialize();
