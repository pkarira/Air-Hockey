function canvas_border(context,color,canvasWidth,canvasHeight,borderWidth)
{
  context.lineWidth=borderWidth;
  context.beginPath();
  context.strokeStyle = color;
  context.moveTo(0,0);
  context.shadowBlur = 0;
  context.shadowColor = "blue";
  context.lineTo(canvasWidth,0);
  context.lineTo(canvasWidth,canvasHeight);
  context.lineTo(0,canvasHeight);
  context.lineTo(0,0);
  context.stroke();
}
function drawText(color,context,topX,topY,text)
{
  context.beginPath();
  context.font = "30px Arial";
  context.fillText(text,topX,topY);
}
