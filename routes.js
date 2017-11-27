var express=require('express');
var app=express();
var path = require('path');
app.set('view engine','ejs');
app.use('/style/',express.static('style'));
app.set('views', path.join(__dirname, 'app/views'));
var server =app.listen(process.env.PORT || 5000,function(){
});
var game = require('./app/controllers/game_controller');
app.use('/scripts/',express.static('scripts'));
app.get('/gamearena',game.getGameArena);
