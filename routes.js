var express=require('express'),
socket = require('socket.io'),
io = socket(server),
bodyParser = require('body-parser'),
app=express(),
path = require('path'),
jsonParser = bodyParser.json(),
urlParser = bodyParser.urlencoded({extended:false}),
server =app.listen(process.env.PORT || 4000,function(){
}),
game = require('./app/controllers/game_controller'),
io = socket(server);
app.set('view engine','ejs');
app.use('/style/',express.static('style'));
app.set('views', path.join(__dirname, 'app/views'));
app.use('/scripts/',express.static('scripts'));
app.get('/',game.login);
app.post('/gamearena',urlParser,game.getRoom);
app.get('/gamearena',game.getGameArena);
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
