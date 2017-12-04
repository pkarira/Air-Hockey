var url='http://127.0.0.1:4000/',
socket = io.connect(url);
socket.on('ball_coordinates', function(data){
    console.log("received ball cordinates");
    gameArena.xDirection=data.ball.xDirection;
    gameArena.yDirection=data.ball.yDirection;
});
socket.on('hockey_coordinates', function(data){
  console.log("received");
  gameArena.oppoHockey.x=data.hockey.x;
  gameArena.oppoHockey.y=data.hockey.y;
});
