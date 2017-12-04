var url='http://127.0.0.1:4000/gameArena',
login = document.getElementById('login');
login.addEventListener('click', function(){
  var http = new XMLHttpRequest(),
  room=document.getElementById('room').value;
  params = "room="+room;
  function getRoom()
  {
    return room;
  }
  http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
        window.location=url
    }
}
  http.open("POST", url, true);
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  http.send(params);
});
