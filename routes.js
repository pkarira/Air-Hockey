var express=require('express');
var socket = require('socket.io');
var io = socket(server);
var app=express();
var path = require('path');
app.set('view engine','ejs');
app.use('/style/',express.static('style'));
app.set('views', path.join(__dirname, 'app/views'));
var server =app.listen(process.env.PORT || 4000,function(){
});
var game = require('./app/controllers/game_controller');
app.use('/scripts/',express.static('scripts'));
app.get('/gamearena',game.getGameArena);
var io = socket(server);
io.on('connection',function(socket) {
    console.log('made socket connection', socket.id);
    socket.on('room', function(room) {
      console.log('room', room);
         socket.join(room);
     });
    socket.on('ball_coordinates', function(data){
    socket.in(data.room).broadcast.emit('ball_coordinates', data);
   });
   socket.on('hockey_coordinates', function(data){
   socket.in(data.room).broadcast.emit('hockey_coordinates', data);
  });
});
