var song = document.getElementById("mysong");
      var icon = document.getElementById("icon");
      var progress = document.getElementById("progress");
      var p = document.getElementById("p");
      song.addEventListener("timeupdate", function () {
        var currentTime = song.currentTime;
        var duration = song.duration;
        var prog = (currentTime / duration) * 100;
        progress.style.width = prog + "%";
        var minutes = Math.floor(currentTime / 60);
  var seconds = Math.floor(currentTime % 60);
  var durationText = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  
  p.textContent = durationText;
       
        console.log(p.innerHTML);
      });
      console.log(icon.src);
      console.log("hi");
      icon.onclick = function () {
        icon.src = "assets/pause.png";
        if (song.paused) {
          song.play();
        } else if (song.onended) {
          icon.src = "assets/pause.png";
        } else {
          song.pause();
          icon.src = "assets/play.png";
        }
      };