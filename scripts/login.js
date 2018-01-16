var url='http://127.0.0.1:4000/gameArena',
login = document.getElementById('login');
login.addEventListener('click', function(){
  var http = new XMLHttpRequest(),
  enteredRoom=document.getElementById('room').value;
  if(enteredRoom === "")
  {
    room=document.getElementById('roomId').innerHTML;
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem("room", room);
    }
    window.location=url;
  }
  else
  {
    room=enteredRoom;
    params = "room="+room;
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem("room", room);
    }
    http.open("POST", url, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.send(params);
    http.onreadystatechange = function() {
      console.log(http.response)
      if(http.readyState == 4 && http.status == 200) {
        if(http.responseText==="Done")
        {
          window.location=url;
        }else {
          alert("Please Enter Valid Room Id")
        }
      }
    }
  }
});
