function ball(radius, color, x, y,context)
{
this.x = x;
this.y = y;
this.context=context;
this.radius = radius;
this.color=color;
this.update = function(){
      this.context.fillStyle = this.color;
      this.context.arc(this.x,this.y,this.radius,0,2*Math.PI);
      this.context.fill();
    }
}
function goalPost(width,color,context,canvasWidth,canvasHeight)
{
  this.width = width;
  this.canvasWidth = canvasWidth;
  this.canvasHeight = canvasHeight;
  this.context=context;
  this.color=color;
  this.drawLine=function()
  {
  this.context.lineWidth=10;
  this.context.moveTo(this.canvasWidth/2-this.width/2,0);
  this.context.lineTo(this.canvasWidth/2+this.width/2,0);
  this.context.stroke();
  this.context.moveTo(this.canvasWidth/2-this.width/2,this.canvasHeight);
  this.context.lineTo(this.canvasWidth/2+this.width/2,this.canvasHeight);
  this.context.stroke();
}
}
function hockey(radius, color, x, y,context,fieldColor)
{
  this.x = x;
  this.y = y;
  this.context=context;
  this.radius = radius;
  this.color=color;
  this.fieldColor=fieldColor;
  this.update = function(x,y){
        this.context.fillStyle = this.fieldColor;
        this.context.arc(this.x,this.y,this.radius,0,2*Math.PI);
        this.context.fill();
        this.x = x;
        this.y = y;
        this.context.fillStyle = this.color;
        this.context.arc(this.x,this.y,this.radius,0,2*Math.PI);
        this.context.fill();
      }
}
