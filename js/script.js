var myvid = document.getElementById('bgvid');
var myvids = [
  "video/fullscreen1.mp4",
  "video/fullscreen2.mp4",
  "http://thenewcode.com/assets/videos/polina.mp4",
];



var activeVideo = 0;

myvid.addEventListener('ended', function() {

  if (activeVideo < myvids.length-1){
  // update the new active video index
  activeVideo = activeVideo+1;

  // update the video source and play
  myvid.src = myvids[activeVideo];
  myvid.play();
  }
  else {
    function myvidFade() {
    myvid.classList.add("stopfade");
    }
    myvid.pause();
    myvidFade();
  }
});

var pauseButton = document.querySelector("#polina button");





pauseButton.addEventListener("click", function() {
  myvid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
});



