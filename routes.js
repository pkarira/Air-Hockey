var express=require('express');
var app=express();
var path = require('path');
app.set('views', path.join(__dirname, 'app/views'));
var server =app.listen("http://127.0.0.1:8000/",function(){
});
var game = require('./app/controllers/game_controller');
app.use('/scripts/',express.static('scripts'));
app.get('/game',game.token);
