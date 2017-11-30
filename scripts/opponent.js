//var url='https://sync-call.herokuapp.com/';
var url='http://127.0.0.1:4000/'
var room="1";
var socket = io.connect(url);
// btn.addEventListener('click', function(){
//   player.pause()
//   clearInterval(window.textColor);
//   document.getElementById('name').value= "";
//   document.getElementById('number').value=  "";
//   socket.emit('reject', {
//     message: "reject",
//     room: room
//   });
// });
socket.on('ball_coordinates', function(data){
    gameArena.ball.x=data.ball.x;
    gameArena.ball.y=data.ball.y;
});
socket.on('hockey_coordinates', function(data){
  console.log("received");
  gameArena.oppoHockey.x=data.hockey.x;
  gameArena.oppoHockey.y=data.hockey.y;
});
