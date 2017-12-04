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
  response.render("login");
};
