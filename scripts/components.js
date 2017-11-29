function ball(radius, color, x, y,context)
{
this.x = x;
this.y = y;
var context=context;
var radius = radius;
var color=color;
this.update = function(){
      context.fillStyle = this.color;
      context.arc(this.x,this.y,this.radius,0,2*Math.PI);
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
  var drawLine=function()
  {
  context.lineWidth=10;
  context.moveTo(this.canvasWidth/2-this.width/2,0);
  context.lineTo(this.canvasWidth/2+this.width/2,0);
  context.stroke();
  context.moveTo(this.canvasWidth/2-this.width/2,this.canvasHeight);
  context.lineTo(this.canvasWidth/2+this.width/2,this.canvasHeight);
  context.stroke();
}
}
function hockey(radius, color, x, y,context,fieldColor)
{
  this.x = x;
  this.y = y;
  var context=context;
  var radius = radius;
  var color=color;
  var fieldColor=fieldColor;
  this.update = function(x,y){
        context.fillStyle = this.fieldColor;
        context.arc(this.x,this.y,this.radius,0,2*Math.PI);
        context.fill();
        this.x = x;
        this.y = y;
        context.fillStyle = this.color;
        context.arc(this.x,this.y,this.radius,0,2*Math.PI);
        context.fill();
      }
}
