canvas=document.getElementById('canvas');
context=canvas.getContext("2d");
ball=new ball(30, 30, "red", 0, 0,context);
ball.update();
