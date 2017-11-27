function ball(width, height, color, x, y,context)
{
this.width = width;
this.height = height;
this.x = x;
this.y = y;
this.update = function(){
      context.fillStyle = color;
      context.fillRect(this.x, this.y, this.width, this.height);
    }
}
