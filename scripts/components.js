function ball(radius, color, x, y,context)
{
  this.x = x;
  this.y = y;
  var context=context,
  radius = radius,
  color=color;
  this.update = function(){
    context.beginPath();
    context.fillStyle = "red";
    context.shadowBlur = 20;
    context.shadowColor = "red";
    context.arc(this.x,this.y,radius,0,2*Math.PI,false);
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
    context.shadowBlur = 0;
    context.shadowColor = "blue";
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
    context.beginPath();
    context.strokeStyle = "red";
    context.arc(this.x,this.y,radius-7.5,0,2*Math.PI);
    context.lineWidth=3;
    context.stroke();
    context.beginPath();
    context.strokeStyle = "white";
    context.shadowBlur = 40;
    context.shadowColor = color;
    context.arc(this.x,this.y,radius,0,2*Math.PI);
    context.lineWidth=15;
    context.stroke();
    context.beginPath();
    context.strokeStyle = "red";
    context.arc(this.x,this.y,radius+7.5,0,2*Math.PI);
    context.lineWidth=3;
    context.stroke();
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
    context.beginPath();
    context.strokeStyle = "blue";
    context.arc(this.x,this.y,radius-7.5,0,2*Math.PI);
    context.lineWidth=3;
    context.stroke();
    context.beginPath();
    context.strokeStyle = "white";
    context.shadowBlur = 40;
    context.shadowColor = color;
    context.arc(this.x,this.y,radius,0,2*Math.PI);
    context.lineWidth=15;
    context.stroke();
    context.beginPath();
    context.strokeStyle = "blue";
    context.arc(this.x,this.y,radius+7.5,0,2*Math.PI);
    context.lineWidth=3;
    context.stroke();
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
    context.strokeStyle=color;
    context.lineWidth=10;
    context.beginPath();
    context.shadowBlur = 0;
    context.shadowColor = "blue";
    context.moveTo(0,canvasHeight/2);
    context.lineTo(canvasWidth,canvasHeight/2);
    context.stroke();
  }
}
