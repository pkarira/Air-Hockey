var room;
// for postgres connectin:- psql user_name  -h 127.0.0.1 -d db_name
// for postgres refer codementor articles
var pg = require('pg');
var format = require('pg-format')
var conString = "postgres://pulkit:pulkit@localhost:5432/pulkit";
var client = new pg.Client(conString);
client.connect();
module.exports.getRoom=function(request,response)
{
  room=request.body.room;
  var ageQuery = format('SELECT * FROM rooms WHERE id = %L', "1")
  const query = client.query(ageQuery, (err, res) => {
    console.log(res.rows);
});
  response.send("done");
};
module.exports.getGameArena=function(request,response)
{
  response.render("game_view");
};
module.exports.login=function(request,response)
{
  function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
roomId=makeid()
  response.render("login",{id:roomId});
};
