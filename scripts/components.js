function ball(radius, color, x, y,context)
{
this.x = x;
this.y = y;
var context=context;
var radius = radius;
var color=color;
this.update = function(){
      context.beginPath();
      context.fillStyle = color;
      context.arc(this.x,this.y,radius,0,2*Math.PI);
      context.fill();
    }
}
function goalPost(width,color,context,canvasWidth,canvasHeight)
{
  var width = width;
  var canvasWidth = canvasWidth;
  var canvasHeight = canvasHeight;
  var context=context;
  var color=color;
  this.drawLine=function()
  {
  context.lineWidth=10;
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
  var context=context;
  var radius = radius;
  var color=color;
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
  var context=context;
  var radius = radius;
  var color=color;
  this.update = function(){
        context.fillStyle = color;
        context.arc(this.x,this.y,radius,0,2*Math.PI);
        context.fill();
      }
}
function drawCentreLine(color,context,canvasWidth,canvasHeight)
{
  var canvasWidth = canvasWidth;
  var canvasHeight = canvasHeight;
  var context=context;
  var color=color;
  this.drawLine=function()
  {
  context.lineWidth=10;
  context.beginPath();
  context.moveTo(0,canvasHeight/2);
  context.lineTo(canvasWidth,canvasHeight/2);
  context.stroke();
  }
}
function drawText(color,context,canvasWidth,canvasHeight)
{
  var canvasWidth = canvasWidth;
  var canvasHeight = canvasHeight;
  var context=context;
  var color=color;
  this.draw=function()
  {
  context.font = "30px Arial";
  context.fillText("You win",canvasWidth/2,canvasHeight/2);
}
}
