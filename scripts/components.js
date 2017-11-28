function ball(radius, color, x, y,context)
{
this.x = x;
this.y = y;
this.context=context;
this.radius = radius;
this.update = function(){
      this.context.fillStyle = color;
      this.context.arc(this.x,this.y,this.radius,0,2*Math.PI);
      this.context.fill();
    }
}
function goalPost(width , color,context,canvasWidth,canvasHeight)
{
  context.lineWidth=100;
  context.moveTo(canvasWidth/2-width/2,0);
  context.lineTo(canvasWidth/2+width/2,0);
  context.moveTo(canvasWidth/2-width/2,canvasHeight);
  context.lineTo(canvasWidth/2+width/2,canvasHeight);
  context.stroke();
}
