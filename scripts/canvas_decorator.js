function canvas_border(context,color,canvasWidth,canvasHeight,borderWidth)
{
  context.lineWidth=borderWidth;
  context.beginPath();
  context.strokeStyle = color;
  context.moveTo(0,0);
  context.shadowBlur = 10;
  context.shadowColor = "blue";
  context.lineWidth=10;
  context.lineTo(canvasWidth,0);
  context.lineTo(canvasWidth,canvasHeight);
  context.lineTo(0,canvasHeight);
  context.lineTo(0,0);
  context.stroke();
  context.beginPath();
  context.strokeStyle = "blue";
  context.moveTo(7,7);
  context.lineWidth=3;
  context.lineTo(canvasWidth-7,7);
  context.lineTo(canvasWidth-7,canvasHeight-7);
  context.lineTo(7,canvasHeight-7);
  context.lineTo(7,7);
  context.stroke();
}
function drawText(color,context,topX,topY,text)
{
  context.beginPath();
  context.font = "30px Arial";
  context.strokeStyle = 'blue';
  context.shadowBlur = 5;
  context.shadowColor = "blue";
  context.lineWidth=0.3;
  context.fillStyle = color;
  context.fillText(text,topX,topY);
  context.strokeText(text,topX,topY);
}
