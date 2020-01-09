var timer = 10;

var downloadTimer = setInterval(function(){
  document.getElementById("timer").innerHTML = timer;
  timer -= 1;
  if(timer <= 0){
    timer = 10;
    clearInterval(downloadTimer);
  }
}, 1000);