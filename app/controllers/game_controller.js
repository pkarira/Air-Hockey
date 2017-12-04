var room;
module.exports.getRoom=function(request,response)
{
  room=request.body.room;
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
