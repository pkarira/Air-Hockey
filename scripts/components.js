function drawArc(x,y,strokeStyle,lineWidth,shadowBlur,shadowColor,context,radius)
{
  context.beginPath();
  context.strokeStyle = strokeStyle;
  context.arc(x,y,radius,0,2*Math.PI);
  context.lineWidth=lineWidth;
  context.shadowBlur = shadowBlur;
  context.shadowColor = shadowColor;
  context.stroke();
}
function ball(radius, color, x, y,context)
{
  this.x = x;
  this.y = y;
  var context=context,
  radius = radius,
  color=color;
  this.update = function(context){
    drawArc(this.x,this.y,"red",10,20,"white",context,radius);
    drawArc(this.x,this.y,"blue",10,20,"white",context,radius-10);
  }
}
function hockey(radius, color, x, y,context)
{
  this.x = x;
  this.y = y;
  var context=context,
  radius = radius,
  color=color;
  this.update = function(context){
    drawArc(this.x,this.y,color,3,0,"white",context,radius-7.5);
    drawArc(this.x,this.y,"white",15,40,color,context,radius);
    drawArc(this.x,this.y,color,3,0,"white",context,radius+7.5);
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
