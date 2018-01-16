var oppolastX,oppolastY,opponewX,opponewY;
socket.on('ball_coordinates', function(data){
  console.log("received ball cordinates");
  gameArena.xDirection=data.ball.xDirection;
  gameArena.yDirection=data.ball.yDirection;
});
socket.on('hockey_coordinates', function(data){
  console.log("received");
  gameArena.oppoHockey.x=data.hockey.x;
  gameArena.oppoHockey.y=data.hockey.y;
  opponewX=gameArena.oppoHockey.x;
  opponewY=gameArena.oppoHockey.y;
  if(Math.abs(gameArena.ball.x-gameArena.oppoHockey.x)<=gameArena.ballRadius+gameArena.hockeyRadius && Math.abs(gameArena.ball.y-gameArena.oppoHockey.y)<=gameArena.ballRadius+gameArena.hockeyRadius)
  {
    hitClip.pause();
    hitClip.currentTime = 0;
    hitClip.play();
    gameArena.singleCollisionWithOpponent=true;
    collision();
  }
  oppolastX=opponewX;
  oppolastY=opponewY;
});
function collision()
{
  var xDiff=opponewX-oppolastX;
  var yDiff=opponewY-oppolastY;
  console.log("collision");
  if(xDiff!=0 && yDiff!=0)
  {
    gameArena.xDirection=xDiff;
    gameArena.yDirection=yDiff;
  }
}
