function canvas_border(context,color,canvasWidth,canvasHeight,borderWidth,biasY,strokeStyle)
{
  context.lineWidth=borderWidth;
  context.beginPath();
  context.strokeStyle = color;
  context.moveTo(0,0+biasY);
  context.shadowBlur = 10;
  context.shadowColor = "blue";
  context.lineWidth=10;
  context.lineTo(canvasWidth,0+biasY);
  context.lineTo(canvasWidth,canvasHeight);
  context.lineTo(0,canvasHeight);
  context.lineTo(0,0+biasY);
  context.stroke();
  context.beginPath();
  context.strokeStyle = strokeStyle;
  context.moveTo(7,7+biasY);
  context.lineWidth=3;
  context.lineTo(canvasWidth-7,7+biasY);
  context.lineTo(canvasWidth-7,canvasHeight-7);
  context.lineTo(7,canvasHeight-7);
  context.lineTo(7,7+biasY);
  context.stroke();
}
function drawText(color,context,topX,topY,text,textSize,stroke)
{
  if(stroke==undefined)
  stroke="blue";
  context.beginPath();
  context.font = textSize+"px Arial";
  context.strokeStyle = stroke;
  context.shadowBlur = 5;
  context.shadowColor = stroke;
  context.lineWidth=0.3;
  context.fillStyle = color;
  context.fillText(text,topX,topY);
  context.strokeText(text,topX,topY);
}
