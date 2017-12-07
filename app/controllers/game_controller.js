var room;
// for postgres connectin:- psql user_name  -h 127.0.0.1 -d db_name
// for postgres refer codementor articles
var pg = require('pg');
var format = require('pg-format')
var conString = "postgres://pulkit:pulkit@localhost:5432/pulkit";
var client = new pg.Client(conString);
var roomAuth=false;
client.connect();
module.exports.getRoom=function(request,response)
{
  var room=request.body.room,rows;
  var roomQuery = format('SELECT * FROM rooms WHERE room = %L', room)
  const query = client.query(roomQuery, (err, res) => {
    rows=res.rows;
  if(rows.length>0)
  {
    var roomQuery = format('DELETE FROM rooms WHERE room = %L', room)
    const query = client.query(roomQuery, (err, res) => {
      // console.log(res.rows);
    });
    roomAuth=true;
  }
  response.send("done");
    });
};
module.exports.getGameArena=function(request,response)
{
  if(roomAuth==true)
  response.render("game_view");
  else
  {
    roomId=makeId();
    response.render("login",{id:roomId});}
  };
  module.exports.login=function(request,response)
  {
    roomId=makeId()
    response.render("login",{id:roomId});
  };
  function makeId() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    var roomId = new Array(text);
    const query = client.query('INSERT INTO rooms (room) VALUES ($1)', roomId, function(err,result){
    console.log(result);
    });
    return text;
  }
