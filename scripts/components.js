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
