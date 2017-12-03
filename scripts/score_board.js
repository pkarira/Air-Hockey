var scoreBoard={
  canvas:document.getElementById('scoreboard'),
  canvasWidth:400,
  canvasHeight:300,
  borderWidth:10,
  initialCanvas:function()
  {
    this.context=scoreBoard.canvas.getContext("2d"),
    canvas_border(this.context,"black",scoreBoard.canvasWidth,scoreBoard.canvasHeight,scoreBoard.borderWidth);
    drawText("red",this.context,scoreBoard.canvasWidth/2-40,40,"Score");
    drawText("red",this.context,20,80,"Player 1");
    drawText("red",this.context,scoreBoard.canvasWidth/2+20,80,"Player 2");
  }
  updateScore:function(player1,player2)
  {
    drawText("red",this.context,20,150,player1);
    drawText("red",this.context,scoreBoard.canvasWidth/2+20,150,player2);
  }
}
scoreBoard.initialCanvas();
