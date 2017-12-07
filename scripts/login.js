var url='http://127.0.0.1:4000/gameArena',
login = document.getElementById('login');
login.addEventListener('click', function(){
  var http = new XMLHttpRequest(),
  enteredRoom=document.getElementById('room').value;
  if(enteredRoom!="")
  room=enteredRoom;
  else
  room=document.getElementById('roomId').innerHTML;
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem("room", room);
}
  params = "room="+room;
  http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
      window.location=url
    }
  }
  http.open("POST", url, true);
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  http.send(params);
});
