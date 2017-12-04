function ball(radius, color, x, y,context)
{
  this.x = x;
  this.y = y;
  var context=context,
  radius = radius,
  color=color;
  this.update = function(){
    context.beginPath();
    context.fillStyle = color;
    context.arc(this.x,this.y,radius,0,2*Math.PI);
    context.fill();
  }
}
function goalPost(width,color,context,canvasWidth,canvasHeight)
{
  var width = width,
  canvasWidth = canvasWidth,
  canvasHeight = canvasHeight,
  context=context,
  color=color;
  this.drawLine=function()
  {
    context.lineWidth=20;
    context.beginPath();
    context.moveTo(canvasWidth/2-width/2,0);
    context.lineTo(canvasWidth/2+width/2,0);
    context.stroke();
    context.moveTo(canvasWidth/2-width/2,canvasHeight);
    context.lineTo(canvasWidth/2+width/2,canvasHeight);
    context.stroke();
  }
}
function hockey(radius, color, x, y,context)
{
  this.x = x;
  this.y = y;
  var context=context,
  radius = radius,
  color=color;
  this.update = function(){
    context.fillStyle = color;
    context.arc(this.x,this.y,radius,0,2*Math.PI);
    context.fill();
  }
}
function opponentHockey(radius, color, x, y,context)
{
  this.x = x;
  this.y = y;
  var context=context,
  radius = radius,
  color=color;
  this.update = function(){
    context.fillStyle = color;
    context.arc(this.x,this.y,radius,0,2*Math.PI);
    context.fill();
  }
}
function drawCentreLine(color,context,canvasWidth,canvasHeight)
{
  var canvasWidth = canvasWidth,
  canvasHeight = canvasHeight,
  context=context,
  color=color;
  this.drawLine=function()
  {
    context.lineWidth=10;
    context.beginPath();
    context.moveTo(0,canvasHeight/2);
    context.lineTo(canvasWidth,canvasHeight/2);
    context.stroke();
  }
}
