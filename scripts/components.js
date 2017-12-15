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
function drawLine(strokeStyle,lineWidth,moveToX,moveToY,lineToX,lineToY,context)
{
  context.beginPath();
  context.strokeStyle=strokeStyle;
  context.lineWidth=lineWidth;
  context.moveTo(moveToX,moveToY);
  context.lineTo(lineToX,lineToY);
  context.stroke();
}
function lineMarkings(width,color,context,canvasWidth,canvasHeight,type)
{
  var width = width,
  canvasWidth = canvasWidth,
  canvasHeight = canvasHeight,
  context=context,
  color=color,
  type=type;
  this.drawLine=function()
  {
    if(type==="goalpost")
    {
      drawLine(color,20,canvasWidth/2-width/2,0,canvasWidth/2+width/2,0,context);
      context.beginPath();
      drawLine(color,20,canvasWidth/2-width/2,canvasHeight,canvasWidth/2+width/2,canvasHeight,context);
    }else
    if(type==="centralline")
    {
      drawLine(color,10,0,canvasHeight/2,canvasWidth,canvasHeight/2,context);
    }
  }
}
