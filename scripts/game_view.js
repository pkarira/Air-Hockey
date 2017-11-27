canvas=document.getElementById('canvas');
context=canvas.getContext("2d");
ball=new ball(30, "red", 30, 30,context);
ball.update();
setInterval(updateGameArena, 45);
function updateGameArena() {
  context.clearRect(0, 0, canvas.width,canvas.height);
  context.beginPath();
  ball.context=context;
  ball.x+=20;
  ball.y+=20;
  ball.update();
  }
